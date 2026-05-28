// Encodes a JSON object into a QR code PNG data URL.
// Uses the `qrcode` npm package loaded once on demand from esm.sh — no install, no bundling.

let _qrImport = null;
const loadQRCode = () => {
  if (!_qrImport) _qrImport = import('https://esm.sh/qrcode@1');
  return _qrImport;
};

const toHex8 = (hex) => (/^#[0-9a-fA-F]{6}$/.test(hex) ? hex + 'ff' : hex);

/**
 * Encodes a JSON object into a QR code and returns a PNG data URL.
 *
 * @param {object} json - Any JSON-serialisable value.
 * @param {object}  [options]
 * @param {number}  [options.width=256]                  - Output image width in px.
 * @param {'L'|'M'|'Q'|'H'} [options.errorCorrectionLevel='M']
 * @param {number}  [options.margin=2]                   - Quiet-zone width in modules.
 * @param {string}  [options.darkColor='#000000ff']       - Dark module colour (6 or 8-char hex).
 * @param {string}  [options.lightColor='#ffffffff']      - Light module colour (6 or 8-char hex).
 *
 * @returns {Promise<{ success: boolean, dataUrl?: string, text?: string, byteSize?: number, error?: string }>}
 */
const getJsonContentAsQr = async (json, options = {}) => {
  try {
    const {
      width = 256,
      errorCorrectionLevel = 'M',
      margin = 2,
      darkColor = '#000000ff',
      lightColor = '#ffffffff',
    } = options;

    const text = JSON.stringify(json);
    if (!text || text === 'undefined')
      return { success: false, error: 'Input is not JSON-serialisable.' };

    const mod = await loadQRCode();
    const toDataURL = mod.default?.toDataURL ?? mod.toDataURL;

    const dataUrl = await toDataURL(text, {
      width,
      margin,
      errorCorrectionLevel,
      color: { dark: toHex8(darkColor), light: toHex8(lightColor) },
    });

    return {
      success: true,
      dataUrl,
      text,
      byteSize: new TextEncoder().encode(text).length,
    };
  } catch (err) {
    return { success: false, error: err.message };
  }
};

export default getJsonContentAsQr;
