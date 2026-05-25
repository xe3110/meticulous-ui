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
 * Detects text in an image — works in all browsers with no npm dependency.
 *
 * Powered by Tesseract.js loaded on demand from esm.sh (fetched once on first
 * call, then cached by the browser for all subsequent calls). No install, no
 * bundling, no WASM shipped with the library.
 *
 * @param {string} base64Image - Base64 data URL ("data:image/png;base64,…") or raw base64 string
 * @param {string} [lang='en'] - BCP-47 language hint(s), e.g. 'en', 'hi', 'en+hi'
 * @returns {Promise<{
 *   success: boolean,
 *   detectedLanguage?: string,
 *   text?: string,
 *   confidence?: number,
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

    const { createWorker } = await loadTesseract();
    const worker = await createWorker(toTesseractLang(langs));

    try {
      const { data } = await worker.recognize(src);

      return {
        success: true,
        detectedLanguage: langs[0] ?? 'en',
        text: data.text.trim(),
        confidence: data.confidence, // 0–100
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
