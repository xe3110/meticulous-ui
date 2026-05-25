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
  { value: 'eng', label: 'English (eng)' },
  { value: 'hin', label: 'Hindi (hin)' },
  { value: 'eng+hin', label: 'English + Hindi' },
  { value: 'fra', label: 'French (fra)' },
  { value: 'deu', label: 'German (deu)' },
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
              Runs OCR on a base64 image using <Code>Tesseract.js</Code> — fully browser-based via
              WebAssembly, no API key or network request needed. Returns the detected{' '}
              <Code>text</Code>, a <Code>confidence</Code> score (0–100), the primary{' '}
              <Code>detectedLanguage</Code>, and raw <Code>rawJson</Code> with word-level bounding
              boxes. Use multi-language codes like <Code>eng+hin</Code> for mixed content.
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
                  Downloading language model + running OCR… (first run may take a few seconds)
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
                        {result.text.trim().split(/\s+/).filter(Boolean).length}
                      </StatValue>
                      <StatLabel>words found</StatLabel>
                    </Stat>
                  </StatBox>
                  <ResultBox $bg={indigo.m50} $border={indigo.m200} $color={indigo.m900}>
                    {result.text.trim() || '(no text detected)'}
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
const result = await recognizeImageContent(base64, 'eng');

if (result.success) {
  console.log(result.text);        // full OCR text
  console.log(result.confidence);  // 0–100
  console.log(result.rawJson);     // word-level bounding boxes
}`}</Pre>
            </div>

            <div>
              <SectionLabel $color={indigo.m700}>Multi-language</SectionLabel>
              <Pre>{`// Hindi + English mixed image
const result = await recognizeImageContent(base64, 'hin+eng');`}</Pre>
            </div>

            <div>
              <SectionLabel $color={indigo.m700}>Source</SectionLabel>
              <Pre>{`import { createWorker } from 'tesseract.js';

const recognizeImageContent = async (base64Image, lang = 'eng') => {
  const worker = await createWorker(lang);
  try {
    const { data } = await worker.recognize(base64Image);
    return {
      success: true,
      detectedLanguage: lang.split('+')[0],
      text: data.text.trim(),
      confidence: data.confidence,
      rawJson: data,
    };
  } catch (error) {
    return { success: false, error: error.message };
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
