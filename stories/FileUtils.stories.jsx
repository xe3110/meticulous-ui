import { useState } from 'react';
import styled from 'styled-components';

import blueGray from '../src/colors/blueGray';
import teal from '../src/colors/teal';
import indigo from '../src/colors/indigo';
import green from '../src/colors/green';
import red from '../src/colors/red';
import white from '../src/colors/white';

import fileToBase64 from '../src/utils/fileToBase64';
import recognizeImageContent from '../src/utils/getImageContentAsJson';

// ─── Shared layout ────────────────────────────────────────────────────────────

const StoryPage = styled.div`
  min-height: 100vh;
  padding: 6.4rem 4rem;
  background: ${({ $bg }) => $bg};
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: sans-serif;
`;

const MaxWidth = styled.div`
  width: 100%;
  max-width: 760px;
`;

const Card = styled.div`
  background: ${white};
  border-radius: 14px;
  border-left: 6px solid ${({ $accent }) => $accent};
  box-shadow: 0 6px 32px rgba(0, 0, 0, 0.09);
  overflow: hidden;
`;

const CardHeader = styled.div`
  background: ${({ $bg }) => $bg};
  border-bottom: 2px solid ${({ $border }) => $border};
  padding: 2.8rem 3.2rem;
`;

const FnName = styled.code`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ $color }) => $color};
  background: ${({ $bg }) => $bg};
  padding: 0.35rem 1rem;
  border-radius: 6px;
`;

const Signature = styled.code`
  font-size: 1.3rem;
  color: ${blueGray.m400};
  margin-left: 1.2rem;
`;

const Description = styled.p`
  margin: 1.4rem 0 0;
  font-size: 1.45rem;
  line-height: 1.8;
  color: ${blueGray.m600};
`;

const CardBody = styled.div`
  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 3.6rem;
`;

const SectionLabel = styled.p`
  font-size: 1.1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({ $color }) => $color};
  margin: 0 0 1.2rem;
`;

const Code = styled.code`
  background: ${blueGray.m50};
  padding: 0.2rem 0.55rem;
  border-radius: 4px;
  font-size: 1.25rem;
  color: ${blueGray.m800};
`;

const Pre = styled.pre`
  background: ${blueGray.m900};
  color: ${blueGray.m100};
  border-radius: 10px;
  padding: 2rem 2.4rem;
  font-size: 1.25rem;
  line-height: 1.8;
  overflow-x: auto;
  margin: 0;
`;

const DemoButton = styled.button`
  padding: 1rem 2.4rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 600;
  background: ${({ $bg }) => $bg};
  color: ${white};
  transition: opacity 0.15s;
  &:hover {
    opacity: 0.85;
  }
  &:active {
    opacity: 0.7;
  }
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

const FileInput = styled.input`
  font-size: 1.35rem;
  color: ${blueGray.m700};
`;

const ResultBox = styled.div`
  margin-top: 1.6rem;
  background: ${({ $bg }) => $bg || blueGray.m50};
  border-left: 3px solid ${({ $border }) => $border || blueGray.m200};
  border-radius: 8px;
  padding: 1.4rem 1.8rem;
  font-size: 1.3rem;
  font-family: monospace;
  color: ${({ $color }) => $color || blueGray.m800};
  word-break: break-all;
  white-space: pre-wrap;
  max-height: 28rem;
  overflow-y: auto;
`;

const Preview = styled.img`
  display: block;
  margin-top: 1.4rem;
  max-width: 100%;
  max-height: 22rem;
  border-radius: 8px;
  border: 1px solid ${blueGray.m100};
  object-fit: contain;
`;

const StatBox = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 1.4rem;
`;

const Stat = styled.div`
  background: ${({ $bg }) => $bg};
  border-radius: 10px;
  padding: 1.2rem 2rem;
  min-width: 11rem;
`;

const StatValue = styled.div`
  font-size: 2.6rem;
  font-weight: 800;
  color: ${({ $color }) => $color};
  line-height: 1;
`;

const StatLabel = styled.div`
  font-size: 1.1rem;
  color: ${blueGray.m500};
  margin-top: 0.4rem;
`;

// ═════════════════════════════════════════════════════════════════════════════
// fileToBase64 — teal
// ═════════════════════════════════════════════════════════════════════════════

const FileToBase64Page = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const run = async () => {
    if (!file) return;
    setLoading(true);
    setResult(null);
    const b64 = await fileToBase64(file);
    setResult(b64);
    setLoading(false);
  };

  const isImage = file?.type?.startsWith('image/');

  return (
    <StoryPage $bg={teal.m50}>
      <MaxWidth>
        <Card $accent={teal.m500}>
          <CardHeader $bg={white} $border={teal.m100}>
            <div>
              <FnName $color={teal.m900} $bg={teal.m100}>
                fileToBase64
              </FnName>
              <Signature>(file: File) → Promise&lt;string&gt;</Signature>
            </div>
            <Description>
              Reads a <Code>File</Code> object via the browser <Code>FileReader</Code> API and
              resolves with a base64-encoded <Code>data:</Code> URL. Works with any file type —
              images, PDFs, text, etc. The returned string can be fed directly into{' '}
              <Code>recognizeImageContent</Code> or an <Code>&lt;img src&gt;</Code>.
            </Description>
          </CardHeader>
          <CardBody>
            <div>
              <SectionLabel $color={teal.m700}>Demo</SectionLabel>
              <FileInput
                type='file'
                onChange={(e) => {
                  setFile(e.target.files[0] ?? null);
                  setResult(null);
                }}
              />
              <DemoButton
                $bg={teal.m500}
                style={{ marginTop: '1.2rem' }}
                onClick={run}
                disabled={!file || loading}
              >
                {loading ? 'Converting…' : 'fileToBase64(file)'}
              </DemoButton>

              {result && (
                <>
                  {isImage && <Preview src={result} alt='preview' />}
                  <StatBox>
                    <Stat $bg={teal.m50}>
                      <StatValue $color={teal.m700}>{(result.length / 1024).toFixed(1)}</StatValue>
                      <StatLabel>KB (base64)</StatLabel>
                    </Stat>
                    <Stat $bg={blueGray.m50}>
                      <StatValue $color={blueGray.m500}>{file.type || '—'}</StatValue>
                      <StatLabel>MIME type</StatLabel>
                    </Stat>
                  </StatBox>
                  <ResultBox $bg={teal.m50} $border={teal.m200} $color={teal.m900}>
                    {result.slice(0, 300)}
                    {result.length > 300 ? '…' : ''}
                  </ResultBox>
                </>
              )}
            </div>

            <div>
              <SectionLabel $color={teal.m700}>Usage</SectionLabel>
              <Pre>{`import fileToBase64 from 'meticulous-ui/utils/fileToBase64';

const onChange = async (e) => {
  const file = e.target.files[0];
  const base64 = await fileToBase64(file);
  // base64 = "data:image/png;base64,iVBORw0..."
};`}</Pre>
            </div>

            <div>
              <SectionLabel $color={teal.m700}>Source</SectionLabel>
              <Pre>{`const fileToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });`}</Pre>
            </div>
          </CardBody>
        </Card>
      </MaxWidth>
    </StoryPage>
  );
};

// ═════════════════════════════════════════════════════════════════════════════
// recognizeImageContent — indigo
// ═════════════════════════════════════════════════════════════════════════════

const LANG_OPTIONS = [
  { value: 'en', label: 'English (en)' },
  { value: 'hi', label: 'Hindi (hi)' },
  { value: 'en+hi', label: 'English + Hindi' },
  { value: 'fr', label: 'French (fr)' },
  { value: 'de', label: 'German (de)' },
];

const Select = styled.select`
  font-size: 1.35rem;
  padding: 0.6rem 1rem;
  border-radius: 6px;
  border: 1px solid ${blueGray.m200};
  background: ${white};
  color: ${blueGray.m800};
  margin-left: 1rem;
`;

const RecognizeImagePage = () => {
  const [file, setFile] = useState(null);
  const [lang, setLang] = useState('eng');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const run = async () => {
    if (!file) return;
    setLoading(true);
    setResult(null);
    const base64 = await fileToBase64(file);
    const ocr = await recognizeImageContent(base64, lang);
    setResult(ocr);
    setLoading(false);
  };

  const isSuccess = result?.success;
  const confidence = result?.confidence ?? null;
  const confColor = confidence >= 80 ? green.m700 : confidence >= 50 ? indigo.m600 : red.m600;
  const confBg = confidence >= 80 ? green.m50 : confidence >= 50 ? indigo.m50 : red.m50;

  return (
    <StoryPage $bg={indigo.m50}>
      <MaxWidth>
        <Card $accent={indigo.m500}>
          <CardHeader $bg={white} $border={indigo.m100}>
            <div>
              <FnName $color={indigo.m900} $bg={indigo.m100}>
                recognizeImageContent
              </FnName>
              <Signature>(base64: string, lang?: string) → Promise&lt;object&gt;</Signature>
            </div>
            <Description>
              Runs OCR on a base64 image in all browsers with no npm dependency. Powered by{' '}
              <Code>Tesseract.js</Code> loaded on demand from a CDN (fetched once on first use, then
              browser-cached). Preprocesses the image (grayscale + 2× upscale + contrast boost)
              before recognition. Returns the detected <Code>text</Code>, a <Code>confidence</Code>{' '}
              score (0–100), the primary <Code>detectedLanguage</Code>, a structured{' '}
              <Code>fields</Code> object with extracted key-value pairs, and <Code>rawJson</Code>{' '}
              with full word-level bounding-box metadata. Use BCP-47 multi-language hints like{' '}
              <Code>en+hi</Code> for mixed content.
            </Description>
          </CardHeader>
          <CardBody>
            <div>
              <SectionLabel $color={indigo.m700}>Demo</SectionLabel>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <FileInput
                  type='file'
                  accept='image/*'
                  onChange={(e) => {
                    setFile(e.target.files[0] ?? null);
                    setResult(null);
                  }}
                />
                <label style={{ fontSize: '1.35rem', color: blueGray.m600 }}>
                  Language:
                  <Select value={lang} onChange={(e) => setLang(e.target.value)}>
                    {LANG_OPTIONS.map(({ value, label }) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    ))}
                  </Select>
                </label>
              </div>
              <DemoButton
                $bg={indigo.m500}
                style={{ marginTop: '1.2rem' }}
                onClick={run}
                disabled={!file || loading}
              >
                {loading ? 'Running OCR…' : 'recognizeImageContent(base64)'}
              </DemoButton>

              {loading && (
                <ResultBox $bg={indigo.m50} $border={indigo.m200} $color={indigo.m700}>
                  Running OCR… (first run fetches Tesseract.js from CDN — subsequent runs are
                  instant)
                </ResultBox>
              )}

              {result && isSuccess && (
                <>
                  <StatBox>
                    <Stat $bg={confBg}>
                      <StatValue $color={confColor}>{confidence?.toFixed(1) ?? '—'}%</StatValue>
                      <StatLabel>confidence</StatLabel>
                    </Stat>
                    <Stat $bg={indigo.m50}>
                      <StatValue $color={indigo.m600} style={{ fontSize: '2rem' }}>
                        {result.detectedLanguage ?? '—'}
                      </StatValue>
                      <StatLabel>language</StatLabel>
                    </Stat>
                    <Stat $bg={blueGray.m50}>
                      <StatValue $color={blueGray.m600}>
                        {Object.keys(result.fields ?? {}).length}
                      </StatValue>
                      <StatLabel>fields found</StatLabel>
                    </Stat>
                  </StatBox>
                  <ResultBox $bg={indigo.m50} $border={indigo.m200} $color={indigo.m900}>
                    {Object.keys(result.fields ?? {}).length > 0
                      ? JSON.stringify(result.fields, null, 2)
                      : result.text.trim() || '(no text detected)'}
                  </ResultBox>
                </>
              )}

              {result && !isSuccess && (
                <ResultBox $bg={red.m50} $border={red.m300} $color={red.m800}>
                  Error: {result.error}
                </ResultBox>
              )}
            </div>

            <div>
              <SectionLabel $color={indigo.m700}>Usage</SectionLabel>
              <Pre>{`import fileToBase64 from 'meticulous-ui/utils/fileToBase64';
import recognizeImageContent from 'meticulous-ui/utils/getImageContentAsJson';

const base64 = await fileToBase64(file);
const result = await recognizeImageContent(base64, 'en');

if (result.success) {
  console.log(result.fields);      // { NAME: 'REESE MILLER', ID: '123-456-7890', ... }
  console.log(result.text);        // full raw OCR text
  console.log(result.confidence);  // 0–100
  console.log(result.rawJson);     // bounding boxes + metadata
}`}</Pre>
            </div>

            <div>
              <SectionLabel $color={indigo.m700}>Multi-language</SectionLabel>
              <Pre>{`// Hindi + English mixed image
const result = await recognizeImageContent(base64, 'hi+en');`}</Pre>
            </div>

            <div>
              <SectionLabel $color={indigo.m700}>Source</SectionLabel>
              <Pre>{`// Image preprocessing: 2× upscale + grayscale + contrast boost
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

// data.text merges unrelated blocks that share a Y position (e.g. a header and
// a corner logo). Rebuild lines from word bounding boxes instead, splitting on
// outsized horizontal gaps — that's the signal two distinct blocks were merged.
const segmentLines = (data) => {
  const words = (data.words ?? [])
    .map((w) => ({ text: w.text?.trim(), bbox: w.bbox }))
    .filter((w) => w.text && w.bbox);
  if (!words.length) return [];

  const lines = [];
  for (const word of words) {
    const cy = (word.bbox.y0 + word.bbox.y1) / 2;
    const halfHeight = (word.bbox.y1 - word.bbox.y0) / 2;
    let line = lines.find((l) => Math.abs(l.cy - cy) < halfHeight);
    if (!line) { line = { cy, words: [] }; lines.push(line); }
    line.words.push(word);
  }

  const segments = [];
  for (const line of lines) {
    const sorted = line.words.slice().sort((a, b) => a.bbox.x0 - b.bbox.x0);
    const gaps = sorted.slice(1).map((w, i) => w.bbox.x0 - sorted[i].bbox.x1);
    const avgGap = gaps.length ? gaps.reduce((a, b) => a + b, 0) / gaps.length : 0;
    const threshold = Math.max(avgGap * 3, (sorted[0].bbox.y1 - sorted[0].bbox.y0) * 1.5);
    let current = [sorted[0]];
    for (let i = 1; i < sorted.length; i++) {
      if (sorted[i].bbox.x0 - sorted[i - 1].bbox.x1 > threshold) {
        segments.push({ text: current.map((w) => w.text).join(' '), y: line.cy, x: current[0].bbox.x0 });
        current = [];
      }
      current.push(sorted[i]);
    }
    segments.push({ text: current.map((w) => w.text).join(' '), y: line.cy, x: current[0].bbox.x0 });
  }
  segments.sort((a, b) => a.y - b.y || a.x - b.x);
  return segments.map((s) => s.text);
};

// Named keys (KEY : VALUE) allow one continuation line; param_N keys do not.
const parseKeyValuePairs = (lines) => {
  const result = {};
  let namedLastKey = null;
  let paramCount = 0;
  const clean = (s) => s.replace(/^[^A-Za-z0-9"'(]+/, '').trim();
  for (const raw of lines) {
    const line = clean(raw.trim());
    if (!line) { namedLastKey = null; continue; }
    const m = line.match(/\\b([A-Z][A-Z.]{0,}(?:\\s+[A-Z.]+){0,2})\\s*[:©]\\s*(.+)/);
    if (m) {
      result[m[1].trim()] = m[2].trim();
      namedLastKey = m[1].trim();
    } else if (namedLastKey && /^[A-Z0-9][A-Z0-9\\s.,'-]+$/.test(line)) {
      result[namedLastKey] += ' ' + line;
      namedLastKey = null;
    } else if (/\\w{2,}/.test(line)) {
      result[\`param_\${++paramCount}\`] = line;
      namedLastKey = null;
    } else { namedLastKey = null; }
  }
  return result;
};

const recognizeImageContent = async (base64Image, lang = 'en') => {
  const src = base64Image.startsWith('data:')
    ? base64Image
    : \`data:image/png;base64,\${base64Image}\`;
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
      detectedLanguage: langs[0],
      text,
      confidence: data.confidence, // 0–100
      fields: parseKeyValuePairs(segmentLines(data)),
      rawJson: data,
    };
  } finally {
    await worker.terminate();
  }
};`}</Pre>
            </div>
          </CardBody>
        </Card>
      </MaxWidth>
    </StoryPage>
  );
};

// ═════════════════════════════════════════════════════════════════════════════
// Story config
// ═════════════════════════════════════════════════════════════════════════════

export default {
  title: 'Utilities/File Utilities',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    layout: 'fullscreen',
  },
};

export const FileToBase64 = () => <FileToBase64Page />;
FileToBase64.storyName = 'fileToBase64';

export const RecognizeImageContent = () => <RecognizeImagePage />;
RecognizeImageContent.storyName = 'recognizeImageContent';
