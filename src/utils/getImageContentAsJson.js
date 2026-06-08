// ─── Image preprocessing ──────────────────────────────────────────────────────
// Upscale + grayscale + contrast boost before passing to Tesseract.
// Tesseract accuracy improves significantly with larger, high-contrast images.
const preprocessImage = (src) =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width * 2;
      canvas.height = img.height * 2;
      const ctx = canvas.getContext('2d');
      ctx.filter = 'grayscale(1) contrast(1.8)';
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      resolve(canvas.toDataURL('image/png'));
    };
    img.onerror = reject;
    img.src = src;
  });

// ─── Word-bbox segmenter ──────────────────────────────────────────────────────
// data.text concatenates anything Tesseract's layout analysis placed on the same
// visual line — even unrelated blocks (e.g. a page header and a corner logo) that
// merely sit at the same Y. We rebuild lines from word bounding boxes instead and
// split each line wherever the horizontal gap between consecutive words is far
// larger than the surrounding word-spacing — that gap is the signal that two
// distinct text blocks were merged onto one line.
const segmentLines = (data) => {
  const words = (data.words ?? [])
    .map((w) => ({ text: w.text?.trim(), bbox: w.bbox }))
    .filter((w) => w.text && w.bbox);
  if (!words.length) return [];

  // Group words into visual lines by vertical-center proximity
  const lines = [];
  for (const word of words) {
    const cy = (word.bbox.y0 + word.bbox.y1) / 2;
    const halfHeight = (word.bbox.y1 - word.bbox.y0) / 2;
    let line = lines.find((l) => Math.abs(l.cy - cy) < halfHeight);
    if (!line) {
      line = { cy, words: [] };
      lines.push(line);
    }
    line.words.push(word);
  }

  // Within each line, break into segments on outsized horizontal gaps
  const segments = [];
  for (const line of lines) {
    const sorted = line.words.slice().sort((a, b) => a.bbox.x0 - b.bbox.x0);
    const gaps = sorted.slice(1).map((w, i) => w.bbox.x0 - sorted[i].bbox.x1);
    const avgGap = gaps.length ? gaps.reduce((a, b) => a + b, 0) / gaps.length : 0;
    const threshold = Math.max(avgGap * 3, (sorted[0].bbox.y1 - sorted[0].bbox.y0) * 1.5);

    let current = [sorted[0]];
    for (let i = 1; i < sorted.length; i++) {
      if (sorted[i].bbox.x0 - sorted[i - 1].bbox.x1 > threshold) {
        segments.push({
          text: current.map((w) => w.text).join(' '),
          y: line.cy,
          x: current[0].bbox.x0,
        });
        current = [];
      }
      current.push(sorted[i]);
    }
    segments.push({
      text: current.map((w) => w.text).join(' '),
      y: line.cy,
      x: current[0].bbox.x0,
    });
  }

  segments.sort((a, b) => a.y - b.y || a.x - b.x);
  return segments.map((s) => s.text);
};

// ─── Key-value parser ─────────────────────────────────────────────────────────
// Accepts the line array from segmentLines() — one entry per visually distinct
// text block, in reading order.
// Each line is cleaned of leading noise symbols before matching.
// Lines matching ALL-CAPS KEY : value use the label as the key.
// Lines without a label get generic keys (param_1, param_2, …).
// Continuation (wrapping value like a split address) only applies to named keys,
// never to param_N, so unrelated uppercase lines are not absorbed.
const parseKeyValuePairs = (lines) => {
  const result = {};
  let namedLastKey = null; // only set for KEY:VALUE matches, never for param_N
  let paramCount = 0;

  const clean = (s) => {
    let t = s.replace(/^[^A-Za-z0-9"'(]+/, '').trim(); // strip leading noise symbols
    t = t.replace(/[^A-Za-z0-9"')]+$/, '').trim(); // strip trailing noise symbols
    t = t.replace(/^[A-Za-z]{1,3}\s+(?=\d)/, ''); // strip short alpha prefix before numbers (e.g. "LA 1234…" → "1234…")
    return t;
  };

  for (const raw of lines) {
    const line = clean(raw.trim());
    if (!line) {
      namedLastKey = null;
      continue;
    }

    // KEY must be ALL-CAPS, optionally dotted, 1–3 words; separator is : or ©
    // (Tesseract sometimes reads ":" as "©" against busy backgrounds)
    const m = line.match(/\b([A-Z][A-Z.]{0,}(?:\s+[A-Z.]+){0,2})\s*[:©]\s*(.+)/);
    if (m) {
      const key = m[1].trim();
      result[key] = m[2].trim();
      namedLastKey = key;
    } else if (namedLastKey && /^[A-Z0-9][A-Z0-9\s.,'\-]+$/.test(line)) {
      // Continuation of a named field (e.g. ADDRESS wrapping to a second line)
      result[namedLastKey] += ' ' + line;
      namedLastKey = null;
    } else if (/\w{3,}/.test(line)) {
      // Readable content (≥3 word chars) but no KEY : VALUE structure → generic key
      result[`param_${++paramCount}`] = line;
      namedLastKey = null; // param_N entries never get continuation
    } else {
      namedLastKey = null;
    }
  }

  return result;
};

// ─── BCP-47 → Tesseract lang-code map ────────────────────────────────────────
// Only entries that differ between the two standards are listed.
const BCP47_TO_TESSERACT = {
  en: 'eng',
  hi: 'hin',
  fr: 'fra',
  de: 'deu',
  es: 'spa',
  pt: 'por',
  zh: 'chi_sim',
  ja: 'jpn',
  ko: 'kor',
  ar: 'ara',
  ru: 'rus',
  it: 'ita',
  nl: 'nld',
  pl: 'pol',
  tr: 'tur',
  vi: 'vie',
  th: 'tha',
  id: 'ind',
};

const toTesseractLang = (bcp47Langs) => bcp47Langs.map((l) => BCP47_TO_TESSERACT[l] ?? l).join('+');

// ─── Tesseract module — loaded once, cached by the browser ───────────────────
let _tesseractImport = null;
const loadTesseract = () => {
  if (!_tesseractImport) {
    _tesseractImport = import(
      /* webpackIgnore: true */
      /* @vite-ignore */
      'https://esm.sh/tesseract.js@5'
    );
  }
  return _tesseractImport;
};

// ─── Public API ───────────────────────────────────────────────────────────────
/**
 * Runs OCR on a base64 image in all browsers with no npm dependency.
 * Powered by Tesseract.js loaded on demand from esm.sh (fetched once, then
 * browser-cached). Preprocesses the image (grayscale + 2× upscale + contrast
 * boost) before recognition for higher accuracy.
 *
 * @param {string} base64Image - Base64 data URL ("data:image/png;base64,…") or raw base64 string
 * @param {string} [lang='en'] - BCP-47 language hint(s), e.g. 'en', 'hi', 'en+hi'
 * @returns {Promise<{
 *   success: boolean,
 *   detectedLanguage?: string,
 *   text?: string,
 *   confidence?: number,
 *   fields?: Record<string, string>,  // all readable lines captured; unnamed lines become param_1, param_2, …
 *   rawJson?: object,
 *   error?: string
 * }>}
 */
const recognizeImageContent = async (base64Image, lang = 'en') => {
  try {
    const src = base64Image.startsWith('data:')
      ? base64Image
      : `data:image/png;base64,${base64Image}`;

    const langs = lang.split('+').filter(Boolean);
    const preprocessed = await preprocessImage(src);

    const { createWorker } = await loadTesseract();
    const worker = await createWorker(toTesseractLang(langs));

    try {
      await worker.setParameters({ tessedit_pageseg_mode: '3' });
      const { data } = await worker.recognize(preprocessed);
      const text = data.text.trim();

      return {
        success: true,
        detectedLanguage: langs[0] ?? 'en',
        text,
        confidence: data.confidence, // 0–100
        fields: parseKeyValuePairs(segmentLines(data)), // structured key-value extraction, split on bbox gaps
        rawJson: data, // full metadata: words, blocks, bounding boxes
      };
    } finally {
      await worker.terminate();
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export default recognizeImageContent;
