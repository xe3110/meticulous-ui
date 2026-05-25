import { createWorker } from 'tesseract.js';

/**
 * Detects text in an image using Tesseract.js (fully offline, no API key needed)
 * @param {string} base64Image - The image as a base64 data URL or raw base64 string
 * @param {string} [lang='eng'] - BCP-47 language code(s), e.g. 'eng', 'hin', 'eng+hin'
 */
const recognizeImageContent = async (base64Image, lang = 'eng') => {
  const worker = await createWorker(lang);

  try {
    const { data } = await worker.recognize(base64Image);

    const detectedLanguage = lang.split('+')[0]; // primary lang used

    return {
      success: true,
      detectedLanguage,
      text: data.text.trim(),
      confidence: data.confidence, // 0–100 OCR confidence score
      rawJson: data, // full metadata including word-level bounding boxes
    };
  } catch (error) {
    return { success: false, error: error.message };
  } finally {
    await worker.terminate();
  }
};

export default recognizeImageContent;
