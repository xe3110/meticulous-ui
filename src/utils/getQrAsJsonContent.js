// Decodes a QR code image back to the original JSON object.
//
// Decoder priority:
//   1. Native BarcodeDetector API  (Chrome 83+, Edge 83+, Safari 17.4+)
//   2. @zxing/library              pure-JS ZXing port (1× and 4× canvas)
//   3. jsQR                        pure-JS fallback   (1× and 4× canvas)
//
// IMPORTANT: BarcodeDetector is tried with `img` and its own private ImageBitmap.
// The c1/c4 canvases are NEVER passed to createImageBitmap — doing so can
// transfer/clear the canvas backing buffer in Chrome, silently breaking the
// subsequent @zxing and jsQR calls.

// ── Lazy loaders ──────────────────────────────────────────────────────────────
let _zxingImport = null;
const loadZxing = () => {
  if (!_zxingImport) _zxingImport = import('https://esm.sh/@zxing/library@0.21.3');
  return _zxingImport;
};

let _jsQrImport = null;
const loadJsQR = () => {
  if (!_jsQrImport) _jsQrImport = import('https://esm.sh/jsqr@1');
  return _jsQrImport;
};

// ── Load any source into an HTMLImageElement ──────────────────────────────────
const loadImage = (source) =>
  new Promise((resolve, reject) => {
    if (
      typeof HTMLImageElement !== 'undefined' &&
      source instanceof HTMLImageElement &&
      source.complete &&
      source.naturalWidth > 0
    ) {
      return resolve({ img: source, revoke: false });
    }

    let url, revoke;
    if (typeof source === 'string') {
      url = source;
      revoke = false;
    } else if (typeof Blob !== 'undefined' && source instanceof Blob) {
      url = URL.createObjectURL(source);
      revoke = true;
    } else if (typeof HTMLCanvasElement !== 'undefined' && source instanceof HTMLCanvasElement) {
      url = source.toDataURL();
      revoke = false;
    } else if (typeof ImageData !== 'undefined' && source instanceof ImageData) {
      const c = document.createElement('canvas');
      c.width = source.width;
      c.height = source.height;
      c.getContext('2d').putImageData(source, 0, 0);
      url = c.toDataURL();
      revoke = false;
    } else if (typeof HTMLImageElement !== 'undefined' && source instanceof HTMLImageElement) {
      url = source.src;
      revoke = false;
    } else {
      return reject(new TypeError('Unsupported source type.'));
    }

    const img = new Image();
    img.onload = () => resolve({ img, revoke, objectUrl: url });
    img.onerror = () => {
      if (revoke) URL.revokeObjectURL(url);
      reject(new Error('Image failed to load.'));
    };
    img.src = url;
  });

// ── Draw image to canvas (white background, optional nearest-neighbour scale) ─
const toCanvas = (img, scale = 1) => {
  const w = (img.naturalWidth || img.width) * scale;
  const h = (img.naturalHeight || img.height) * scale;
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, w, h);
  ctx.drawImage(img, 0, 0, w, h);
  return { canvas, ctx, w, h };
};

// ── Public API ────────────────────────────────────────────────────────────────
/**
 * Decodes a QR code image back to the JSON object that was originally encoded.
 *
 * @param {string|HTMLImageElement|HTMLCanvasElement|ImageData|Blob|File} source
 * @returns {Promise<{ success: boolean, json?: any, text?: string, source?: string, error?: string }>}
 */
const getQrAsJsonContent = async (source) => {
  const diag = [];

  try {
    if (source == null) return { success: false, error: 'No source provided.' };

    // ── Load source into an HTMLImageElement ──────────────────────────────────
    let img, revoke, objectUrl;
    try {
      ({ img, revoke, objectUrl } = await loadImage(source));
    } catch (err) {
      return { success: false, error: `Could not load image: ${err.message}` };
    }

    const nw = img.naturalWidth || img.width;
    const nh = img.naturalHeight || img.height;
    diag.push(`img ${nw}×${nh}`);

    if (nw === 0 || nh === 0) {
      if (revoke) URL.revokeObjectURL(objectUrl);
      return { success: false, error: 'Image has zero dimensions.' };
    }

    // ── Build canvases for @zxing and jsQR ────────────────────────────────────
    // These canvases are PRIVATE to @zxing / jsQR.
    // Never pass them to createImageBitmap — that can clear the backing buffer.
    const { canvas: c1, ctx: ctx1, w: w1, h: h1 } = toCanvas(img, 1);
    const { canvas: c4, ctx: ctx4 } = toCanvas(img, 4); // 4× nearest-neighbour

    if (revoke) URL.revokeObjectURL(objectUrl);

    // Pixel sanity + transition count (before any async ops)
    const id1 = ctx1.getImageData(0, 0, w1, h1);
    const d = id1.data;
    const px = (x, y) => {
      const i = (y * w1 + x) * 4;
      return `(${d[i]},${d[i + 1]},${d[i + 2]})`;
    };
    diag.push(
      `pixels tl=${px(0, 0)} center=${px(Math.floor(w1 / 2), Math.floor(h1 / 2))} ` +
        `m10%=${px(Math.round(w1 * 0.1), Math.round(h1 * 0.1))}`
    );
    {
      const midY = Math.floor(h1 / 2);
      let t = 0,
        prev = d[midY * w1 * 4] > 127;
      for (let x = 1; x < w1; x++) {
        const cur = d[(midY * w1 + x) * 4] > 127;
        if (cur !== prev) {
          t++;
          prev = cur;
        }
      }
      diag.push(`mid-row transitions: ${t}`);
    }

    let rawText = null;
    let decoderSource = null;

    // ── 1. Native BarcodeDetector ─────────────────────────────────────────────
    // Uses img (HTMLImageElement) and a SEPARATE fresh ImageBitmap — never c1/c4.
    if (typeof BarcodeDetector === 'undefined') {
      diag.push('BarcodeDetector: not available');
    } else {
      try {
        const supported = await BarcodeDetector.getSupportedFormats();
        if (!supported.includes('qr_code')) {
          diag.push('BarcodeDetector: qr_code not in supported formats');
        } else {
          const detector = new BarcodeDetector({ formats: ['qr_code'] });

          // Attempt A: HTMLImageElement directly
          let results = await detector.detect(img);
          if (results.length) {
            rawText = results[0].rawValue;
            decoderSource = 'BarcodeDetector';
            diag.push('BarcodeDetector: found via img');
          } else {
            diag.push('BarcodeDetector (img): 0 results');

            // Attempt B: fresh ImageBitmap from img (NOT from c1/c4)
            try {
              const freshBm = await createImageBitmap(img);
              results = await detector.detect(freshBm);
              if (results.length) {
                rawText = results[0].rawValue;
                decoderSource = 'BarcodeDetector';
                diag.push('BarcodeDetector: found via ImageBitmap(img)');
              } else {
                diag.push('BarcodeDetector (ImageBitmap): 0 results');
              }
            } catch (bmErr) {
              diag.push(`BarcodeDetector ImageBitmap: threw "${bmErr?.message ?? bmErr}"`);
            }
          }
        }
      } catch (err) {
        diag.push(`BarcodeDetector: threw "${err?.message ?? err}"`);
      }
    }

    // ── 2. @zxing/library (pure JS, no workers, no WASM) ─────────────────────
    // Uses c1 and c4. These canvases have NEVER been through createImageBitmap.
    if (rawText === null) {
      try {
        const zxing = await loadZxing();
        const {
          MultiFormatReader,
          BinaryBitmap,
          HybridBinarizer,
          HTMLCanvasElementLuminanceSource,
          DecodeHintType,
          BarcodeFormat,
        } = zxing;

        const tryZxing = (canvas, label) => {
          if (typeof HTMLCanvasElementLuminanceSource !== 'function') return null;
          const reader = new MultiFormatReader();
          try {
            const hints = new Map();
            if (DecodeHintType && BarcodeFormat) {
              hints.set(DecodeHintType.POSSIBLE_FORMATS, [BarcodeFormat.QR_CODE]);
              hints.set(DecodeHintType.TRY_HARDER, true);
            }
            if (hints.size) reader.setHints(hints);
          } catch {
            /* hints optional */
          }
          try {
            const luminanceSource = new HTMLCanvasElementLuminanceSource(canvas);
            const binaryBitmap = new BinaryBitmap(new HybridBinarizer(luminanceSource));
            const result = reader.decode(binaryBitmap);
            if (result) {
              diag.push(`@zxing ${label}: found QR`);
              return result.getText();
            }
          } catch (e) {
            const msg = e?.message ?? String(e);
            const isNotFound =
              msg.includes('Not Found') ||
              msg.includes('NotFoundException') ||
              msg.includes('No Multi');
            diag.push(`@zxing ${label}: ${isNotFound ? 'no QR found' : `threw "${msg}"`}`);
          }
          return null;
        };

        rawText = tryZxing(c1, '1×') ?? tryZxing(c4, '4×');
        if (rawText !== null) decoderSource = '@zxing/library';
      } catch (err) {
        diag.push(`@zxing/library: load failed — "${err?.message ?? err}"`);
      }
    }

    // ── 3. jsQR (pure-JS raw-pixel fallback) ─────────────────────────────────
    // Uses c1 and c4 — same canvases as @zxing (they have NEVER been consumed
    // by createImageBitmap, so their pixel data is intact).
    if (rawText === null) {
      try {
        const mod = await loadJsQR();
        const jsQR = mod.default ?? mod;

        if (typeof jsQR !== 'function') {
          diag.push(`jsQR: not a function (got ${typeof (mod.default ?? mod)})`);
        } else {
          const tryJsQr = (ctx, w, h, label) => {
            // Fresh getImageData call — ensures we read the actual current pixels
            const imageData = ctx.getImageData(0, 0, w, h);
            // Verify at least one sample pixel is non-white to catch blank-canvas bugs
            const centerIdx = (Math.floor(h / 2) * w + Math.floor(w / 2)) * 4;
            const centerBright = imageData.data[centerIdx] > 200;
            if (centerBright) {
              diag.push(`jsQR ${label}: canvas appears blank (center pixel white), skipping`);
              return null;
            }
            const result = jsQR(imageData.data, w, h, { inversionAttempts: 'attemptBoth' });
            if (result) {
              diag.push(`jsQR ${label}: found QR`);
              return result.data;
            }
            diag.push(`jsQR ${label}: null`);
            return null;
          };

          rawText = tryJsQr(ctx1, w1, h1, '1×') ?? tryJsQr(ctx4, c4.width, c4.height, '4×');

          if (rawText !== null) decoderSource = 'jsQR';
        }
      } catch (err) {
        diag.push(`jsQR: threw "${err?.message ?? String(err)}"`);
      }
    }

    // ── Result ────────────────────────────────────────────────────────────────
    if (rawText === null) {
      return {
        success: false,
        error: `No QR code detected. Details: ${diag.join(' | ')}`,
      };
    }

    let json;
    try {
      json = JSON.parse(rawText);
    } catch {
      return {
        success: false,
        error: `QR decoded, but content is not valid JSON: ${rawText.slice(0, 120)}`,
      };
    }

    return { success: true, json, text: rawText, source: decoderSource };
  } catch (err) {
    return { success: false, error: err.message };
  }
};

export default getQrAsJsonContent;
