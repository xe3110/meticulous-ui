import { useState } from 'react';
import styled from 'styled-components';

import blueGray from '../src/colors/blueGray';
import violet from '../src/colors/violet';
import green from '../src/colors/green';
import red from '../src/colors/red';
import white from '../src/colors/white';

import getJsonContentAsQr from '../src/utils/getJsonContentAsQr';

// ─── Shared layout ────────────────────────────────────────────────────────────

const StoryPage = styled.div`
  min-height: 100vh;
  padding: 6.4rem 4rem;
  background: ${violet.m50};
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
  border-left: 6px solid ${violet.m500};
  box-shadow: 0 6px 32px rgba(0, 0, 0, 0.09);
  overflow: hidden;
`;

const CardHeader = styled.div`
  background: ${white};
  border-bottom: 2px solid ${violet.m100};
  padding: 2.8rem 3.2rem;
`;

const FnName = styled.code`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${violet.m900};
  background: ${violet.m100};
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
  color: ${violet.m700};
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
  background: ${({ $bg }) => $bg ?? violet.m500};
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

const TextArea = styled.textarea`
  width: 100%;
  min-height: 14rem;
  padding: 1.2rem 1.6rem;
  font-size: 1.3rem;
  font-family: monospace;
  border: 1.5px solid ${blueGray.m200};
  border-radius: 8px;
  background: ${blueGray.m50};
  color: ${blueGray.m900};
  resize: vertical;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${violet.m400};
  }
`;

const ErrorBox = styled.div`
  margin-top: 1.6rem;
  background: ${red.m50};
  border-left: 3px solid ${red.m300};
  border-radius: 8px;
  padding: 1.4rem 1.8rem;
  font-size: 1.3rem;
  color: ${red.m800};
`;

const ParseError = styled.p`
  font-size: 1.2rem;
  color: ${red.m600};
  margin: 0.6rem 0 0;
`;

const ResultRow = styled.div`
  display: flex;
  gap: 3.2rem;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 1.6rem;
`;

const QrImage = styled.img`
  width: 18rem;
  height: 18rem;
  border-radius: 10px;
  border: 1px solid ${blueGray.m100};
  object-fit: contain;
  flex-shrink: 0;
`;

const StatBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  flex: 1;
  min-width: 14rem;
`;

const Stat = styled.div`
  background: ${({ $bg }) => $bg};
  border-radius: 10px;
  padding: 1.2rem 2rem;
`;

const StatValue = styled.div`
  font-size: 2.4rem;
  font-weight: 800;
  color: ${({ $color }) => $color};
  line-height: 1;
`;

const StatLabel = styled.div`
  font-size: 1.1rem;
  color: ${blueGray.m500};
  margin-top: 0.4rem;
`;

const DownloadLink = styled.a`
  display: inline-block;
  margin-top: 1.2rem;
  padding: 0.9rem 2.2rem;
  border-radius: 8px;
  background: ${green.m500};
  color: ${white};
  font-size: 1.35rem;
  font-weight: 600;
  text-decoration: none;
  transition: opacity 0.15s;

  &:hover {
    opacity: 0.85;
  }
`;

const ControlRow = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  align-items: flex-end;
  margin-top: 1.2rem;
`;

const LabeledControl = styled.label`
  font-size: 1.3rem;
  color: ${blueGray.m700};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Select = styled.select`
  font-size: 1.3rem;
  padding: 0.55rem 1rem;
  border-radius: 6px;
  border: 1.5px solid ${blueGray.m200};
  background: ${white};
  color: ${blueGray.m800};

  &:focus {
    outline: none;
    border-color: ${violet.m400};
  }
`;

const NumberInput = styled.input`
  font-size: 1.3rem;
  padding: 0.55rem 1rem;
  border-radius: 6px;
  border: 1.5px solid ${blueGray.m200};
  background: ${white};
  color: ${blueGray.m800};
  width: 8rem;

  &:focus {
    outline: none;
    border-color: ${violet.m400};
  }
`;

// ─── Default JSON samples ─────────────────────────────────────────────────────

const SAMPLE_JSON = {
  user: { id: 'u_8821', name: 'Rishabh Kumar', role: 'admin' },
  session: { token: 'eyJhbGciOiJIUzI1NiJ9.abc', expiresAt: '2026-06-01T00:00:00Z' },
  permissions: ['read', 'write', 'delete'],
};

// ─── Page component ───────────────────────────────────────────────────────────

const GetJsonContentAsQrPage = () => {
  const [raw, setRaw] = useState(JSON.stringify(SAMPLE_JSON, null, 2));
  const [parseError, setParseError] = useState(null);
  const [result, setResult] = useState(null);

  // Options
  const [width, setWidth] = useState(256);
  const [ecLevel, setEcLevel] = useState('M');

  const handleChange = (val) => {
    setRaw(val);
    setResult(null);
    try {
      JSON.parse(val);
      setParseError(null);
    } catch (e) {
      setParseError(e.message);
    }
  };

  const run = () => {
    let json;
    try {
      json = JSON.parse(raw);
    } catch {
      return;
    }
    setResult(null);
    const res = getJsonContentAsQr(json, { width: Number(width), errorCorrectionLevel: ecLevel });
    setResult(res);
  };

  const isValid = !parseError && raw.trim().length > 0;

  return (
    <StoryPage>
      <MaxWidth>
        <Card>
          <CardHeader>
            <div>
              <FnName>getJsonContentAsQr</FnName>
              <Signature>(json: object, options?: object) → Promise&lt;object&gt;</Signature>
            </div>
            <Description>
              Serialises a JSON object with <Code>JSON.stringify</Code> and encodes it into a
              standard 2D QR code, returned as a PNG <Code>dataUrl</Code> ready for{' '}
              <Code>&lt;img src&gt;</Code> or download. Powered by the <Code>qrcode</Code> package
              loaded on demand from esm.sh — no install, no bundling. Supports configurable image
              width, error-correction level, quiet-zone margin, and dark/light module colours.
            </Description>
          </CardHeader>

          <CardBody>
            {/* ── Demo ── */}
            <div>
              <SectionLabel>Demo</SectionLabel>

              <TextArea
                value={raw}
                onChange={(e) => handleChange(e.target.value)}
                spellCheck={false}
              />
              {parseError && <ParseError>⚠ Invalid JSON — {parseError}</ParseError>}

              <ControlRow>
                <LabeledControl>
                  Width (px)
                  <NumberInput
                    type='number'
                    min={64}
                    max={1024}
                    step={32}
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                  />
                </LabeledControl>

                <LabeledControl>
                  Error correction
                  <Select value={ecLevel} onChange={(e) => setEcLevel(e.target.value)}>
                    <option value='L'>L — ~7 %</option>
                    <option value='M'>M — ~15 %</option>
                    <option value='Q'>Q — ~25 %</option>
                    <option value='H'>H — ~30 %</option>
                  </Select>
                </LabeledControl>

                <DemoButton onClick={run} disabled={!isValid}>
                  getJsonContentAsQr(json)
                </DemoButton>
              </ControlRow>

              {result?.success && (
                <ResultRow>
                  <div>
                    <QrImage src={result.dataUrl} alt='Generated QR code' />
                    <DownloadLink href={result.dataUrl} download='qr.png'>
                      ↓ Download PNG
                    </DownloadLink>
                  </div>

                  <StatBox>
                    <Stat $bg={violet.m50}>
                      <StatValue $color={violet.m700}>{result.byteSize}</StatValue>
                      <StatLabel>bytes encoded</StatLabel>
                    </Stat>
                    <Stat $bg={green.m50}>
                      <StatValue $color={green.m700} style={{ fontSize: '1.8rem' }}>
                        {ecLevel}
                      </StatValue>
                      <StatLabel>error correction</StatLabel>
                    </Stat>
                    <Stat $bg={blueGray.m50}>
                      <StatValue $color={blueGray.m600}>{width} px</StatValue>
                      <StatLabel>output size</StatLabel>
                    </Stat>
                  </StatBox>
                </ResultRow>
              )}

              {result && !result.success && <ErrorBox>Error: {result.error}</ErrorBox>}
            </div>

            {/* ── Usage ── */}
            <div>
              <SectionLabel>Usage</SectionLabel>
              <Pre>{`import getJsonContentAsQr from 'meticulous-ui/utils/getJsonContentAsQr';

const json = { userId: 42, role: 'admin', token: 'abc123' };

// Synchronous — no await, no CDN, no dependencies
const result = getJsonContentAsQr(json, {
  width: 256,               // output image width in px  (default: 256)
  errorCorrectionLevel: 'M' // 'L' | 'M' | 'Q' | 'H'   (default: 'M')
});

if (result.success) {
  // Drop into any <img>
  document.querySelector('img').src = result.dataUrl;

  // Or trigger a download
  const a = document.createElement('a');
  a.href = result.dataUrl;
  a.download = 'qr.png';
  a.click();
}
`}</Pre>
            </div>

            {/* ── Return shape ── */}
            <div>
              <SectionLabel>Return shape</SectionLabel>
              <Pre>{`// success
{
  success:  true,
  dataUrl:  "data:image/png;base64,iVBORw0…", // ready for <img src>
  text:     '{"userId":42,"role":"admin"}',    // the serialised string encoded
  byteSize: 38,                                // UTF-8 byte length of text
}

// failure
{ success: false, error: "Input is not JSON-serialisable." }
`}</Pre>
            </div>

            {/* ── Options ── */}
            <div>
              <SectionLabel>Options reference</SectionLabel>
              <Pre>{`getJsonContentAsQr(json, {
  width:                256,        // QR image width in pixels
  errorCorrectionLevel: 'M',        // 'L' ~7% | 'M' ~15% | 'Q' ~25% | 'H' ~30%
  margin:               2,          // quiet-zone width in modules
  darkColor:            '#000000ff',// dark module colour  (CSS hex + alpha)
  lightColor:           '#ffffffff' // light module colour (CSS hex + alpha)
});
`}</Pre>
            </div>

            {/* ── Source ── */}
            <div>
              <SectionLabel>Source</SectionLabel>
              <Pre>{`// qrcode loaded once on demand, browser-cached thereafter
let _qrcodeImport = null;
const loadQRCode = () => {
  if (!_qrcodeImport)
    _qrcodeImport = import('https://esm.sh/qrcode@1');
  return _qrcodeImport;
};

const getJsonContentAsQr = async (json, options = {}) => {
  const { width = 256, errorCorrectionLevel = 'M',
          margin = 2, darkColor = '#000000ff', lightColor = '#ffffffff' } = options;

  const text = JSON.stringify(json);
  const QRCode = await loadQRCode();

  const dataUrl = await QRCode.toDataURL(text, {
    width, margin, errorCorrectionLevel,
    color: { dark: darkColor, light: lightColor },
  });

  return {
    success: true,
    dataUrl,
    text,
    byteSize: new TextEncoder().encode(text).length,
  };
};`}</Pre>
            </div>
          </CardBody>
        </Card>
      </MaxWidth>
    </StoryPage>
  );
};

// ─── Story config ─────────────────────────────────────────────────────────────

export default {
  title: 'Utilities/JSON QR Utilities',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    layout: 'fullscreen',
  },
};

export const GetJsonContentAsQr = () => <GetJsonContentAsQrPage />;
GetJsonContentAsQr.storyName = 'getJsonContentAsQr';
