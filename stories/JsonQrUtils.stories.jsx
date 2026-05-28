import { useState, useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';

import blueGray from '../src/colors/blueGray';
import violet from '../src/colors/violet';
import teal from '../src/colors/teal';
import green from '../src/colors/green';
import red from '../src/colors/red';
import white from '../src/colors/white';

import getJsonContentAsQr from '../src/utils/getJsonContentAsQr';
import getQrAsJsonContent from '../src/utils/getQrAsJsonContent';

// ─── Shared components (used by getQrAsJsonContent page) ──────────────────────

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

const ControlRow = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  align-items: flex-end;
  margin-top: 1.2rem;
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

// ─── Generator page styled components ────────────────────────────────────────

const GeneratorPage = styled.div`
  min-height: 100vh;
  background: ${blueGray.m100};
  padding: 4rem 2rem;
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const GeneratorMaxWidth = styled.div`
  width: 100%;
  max-width: 900px;
`;

const GeneratorCard = styled.div`
  background: ${white};
  border-radius: 16px;
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const GenHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 2.8rem 3.2rem;
  gap: 2rem;
  flex-wrap: wrap;
`;

const GenTitleGroup = styled.div``;

const GenTitle = styled.h1`
  font-size: 2.4rem;
  font-weight: 800;
  color: ${blueGray.m900};
  margin: 0;
  line-height: 1.2;
`;

const GenAccent = styled.span`
  color: ${violet.m500};
`;

const GenSubtitle = styled.p`
  font-size: 1.4rem;
  color: ${blueGray.m400};
  margin: 0.6rem 0 0;
`;

const GenActions = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  flex-shrink: 0;
`;

const GenDownloadBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 1rem 2rem;
  border-radius: 10px;
  background: ${({ $disabled }) => ($disabled ? blueGray.m200 : violet.m500)};
  color: ${white};
  font-size: 1.4rem;
  font-weight: 600;
  text-decoration: none;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  transition: opacity 0.15s;
  &:hover {
    opacity: ${({ $disabled }) => ($disabled ? 1 : 0.85)};
  }
`;

const GenResetBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1.8rem;
  border-radius: 10px;
  background: transparent;
  border: 1.5px solid ${blueGray.m200};
  color: ${blueGray.m600};
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  transition:
    border-color 0.15s,
    color 0.15s;
  &:hover {
    border-color: ${blueGray.m400};
    color: ${blueGray.m800};
  }
`;

const GenDivider = styled.hr`
  border: none;
  border-top: 1.5px solid ${blueGray.m100};
  margin: 0;
`;

const GenBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const GenForm = styled.div`
  padding: 3.2rem;
  border-right: 1.5px solid ${blueGray.m100};
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const GenPreviewPanel = styled.div`
  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
`;

const GenField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const GenFieldLabel = styled.label`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${blueGray.m700};
`;

const GenRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.6rem;
`;

const GenColorGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const GenColorSwatch = styled.label`
  position: relative;
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 8px;
  border: 1.5px solid ${blueGray.m200};
  background: ${({ $color }) => $color};
  cursor: pointer;
  flex-shrink: 0;
  overflow: hidden;

  input[type='color'] {
    position: absolute;
    inset: 0;
    opacity: 0;
    cursor: pointer;
    width: 100%;
    height: 100%;
    padding: 0;
    border: none;
  }
`;

const GenHexInput = styled.input`
  font-size: 1.3rem;
  padding: 0.55rem 1rem;
  border-radius: 6px;
  border: 1.5px solid ${blueGray.m200};
  background: ${white};
  color: ${blueGray.m800};
  font-family: monospace;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${violet.m400};
  }
`;

const GenDropzone = styled.div`
  border: 2px dashed ${({ $over }) => ($over ? violet.m400 : blueGray.m200)};
  border-radius: 10px;
  background: ${({ $over }) => ($over ? violet.m50 : blueGray.m50)};
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  cursor: pointer;
  transition:
    border-color 0.15s,
    background 0.15s;
  min-height: 9rem;

  &:hover {
    border-color: ${blueGray.m300};
    background: ${blueGray.m100};
  }
`;

const GenDropIcon = styled.div`
  font-size: 2.4rem;
`;

const GenDropText = styled.p`
  font-size: 1.3rem;
  color: ${blueGray.m400};
  margin: 0;
  text-align: center;
`;

const GenLogoThumb = styled.img`
  width: 4.8rem;
  height: 4.8rem;
  object-fit: contain;
  border-radius: 6px;
`;

const GenLogoName = styled.p`
  font-size: 1.2rem;
  color: ${blueGray.m500};
  margin: 0;
  max-width: 24ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const GenRemoveBtn = styled.button`
  background: none;
  border: none;
  color: ${red.m600};
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0;
  text-decoration: underline;
  align-self: flex-start;
`;

const GenPreviewLabel = styled.p`
  font-size: 1.1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${blueGray.m400};
  margin: 0;
`;

const GenPreviewCard = styled.div`
  width: 100%;
  aspect-ratio: 1;
  max-width: 28rem;
  background: ${blueGray.m50};
  border-radius: 12px;
  border: 1.5px solid ${blueGray.m100};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const GenQrImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const GenPreviewPlaceholder = styled.p`
  font-size: 1.3rem;
  color: ${blueGray.m400};
  margin: 0;
  text-align: center;
`;

const GenPreviewHint = styled.p`
  font-size: 1.3rem;
  color: ${blueGray.m400};
  margin: 0;
`;

// ─── Logo composite helper ────────────────────────────────────────────────────

const compositeLogo = (qrDataUrl, logoFile) =>
  new Promise((resolve) => {
    const logoUrl = URL.createObjectURL(logoFile);
    const qrImg = new Image();
    qrImg.onload = () => {
      const { width: w, height: h } = qrImg;
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(qrImg, 0, 0);

      const logoImg = new Image();
      logoImg.onload = () => {
        const size = w * 0.24;
        const x = (w - size) / 2;
        const y = (h - size) / 2;
        const pad = size * 0.14;
        const bx = x - pad,
          by = y - pad,
          bw = size + pad * 2,
          bh = size + pad * 2;
        const r = 10;
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.moveTo(bx + r, by);
        ctx.lineTo(bx + bw - r, by);
        ctx.quadraticCurveTo(bx + bw, by, bx + bw, by + r);
        ctx.lineTo(bx + bw, by + bh - r);
        ctx.quadraticCurveTo(bx + bw, by + bh, bx + bw - r, by + bh);
        ctx.lineTo(bx + r, by + bh);
        ctx.quadraticCurveTo(bx, by + bh, bx, by + bh - r);
        ctx.lineTo(bx, by + r);
        ctx.quadraticCurveTo(bx, by, bx + r, by);
        ctx.closePath();
        ctx.fill();
        ctx.drawImage(logoImg, x, y, size, size);
        URL.revokeObjectURL(logoUrl);
        resolve(canvas.toDataURL('image/png'));
      };
      logoImg.onerror = () => {
        URL.revokeObjectURL(logoUrl);
        resolve(qrDataUrl);
      };
      logoImg.src = logoUrl;
    };
    qrImg.onerror = () => resolve(qrDataUrl);
    qrImg.src = qrDataUrl;
  });

// ─── Default JSON sample ──────────────────────────────────────────────────────

const SAMPLE_JSON = {
  user: { id: 'u_8821', name: 'Lionel Messi', role: 'admin' },
  session: { token: 'eyJhbGciOiJIUzI1NiJ9.abc', expiresAt: '2026-06-01T00:00:00Z' },
  permissions: ['read', 'write', 'delete'],
};

const DEFAULT_DARK = '#000000';
const DEFAULT_LIGHT = '#ffffff';
const DEFAULT_WIDTH = 400;
const DEFAULT_EC = 'H';

// ─── Page component ───────────────────────────────────────────────────────────

const GetJsonContentAsQrPage = () => {
  const [raw, setRaw] = useState(JSON.stringify(SAMPLE_JSON, null, 2));
  const [parseError, setParseError] = useState(null);
  const [width, setWidth] = useState(DEFAULT_WIDTH);
  const [ecLevel, setEcLevel] = useState(DEFAULT_EC);
  const [darkColor, setDarkColor] = useState(DEFAULT_DARK);
  const [lightColor, setLightColor] = useState(DEFAULT_LIGHT);
  const [logoFile, setLogoFile] = useState(null);
  const [logoPreview, setLogoPreview] = useState(null);
  const [qrDataUrl, setQrDataUrl] = useState(null);
  const [generating, setGenerating] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const timerRef = useRef(null);
  const logoInputRef = useRef(null);

  const generate = useCallback(async (currentRaw, opts) => {
    if (opts.parseError) {
      setQrDataUrl(null);
      return;
    }
    let json;
    try {
      json = JSON.parse(currentRaw);
    } catch {
      setQrDataUrl(null);
      return;
    }
    setGenerating(true);
    try {
      const toHex8 = (hex) => (/^#[0-9a-fA-F]{6}$/.test(hex) ? hex + 'ff' : hex);
      const res = await getJsonContentAsQr(json, {
        width: Number(opts.width),
        errorCorrectionLevel: opts.ecLevel,
        darkColor: toHex8(opts.darkColor),
        lightColor: toHex8(opts.lightColor),
      });
      if (!res.success) {
        setQrDataUrl(null);
        return;
      }
      let url = res.dataUrl;
      if (opts.logoFile) url = await compositeLogo(url, opts.logoFile);
      setQrDataUrl(url);
    } catch {
      setQrDataUrl(null);
    } finally {
      setGenerating(false);
    }
  }, []);

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(
      () => generate(raw, { parseError, width, ecLevel, darkColor, lightColor, logoFile }),
      300
    );
    return () => clearTimeout(timerRef.current);
  }, [raw, parseError, width, ecLevel, darkColor, lightColor, logoFile, generate]);

  const handleRawChange = (val) => {
    setRaw(val);
    try {
      JSON.parse(val);
      setParseError(null);
    } catch (e) {
      setParseError(e.message);
    }
  };

  const handleLogoFile = (file) => {
    if (!file || !file.type.startsWith('image/')) return;
    if (logoPreview) URL.revokeObjectURL(logoPreview);
    setLogoFile(file);
    setLogoPreview(URL.createObjectURL(file));
  };

  const handleReset = () => {
    setRaw(JSON.stringify(SAMPLE_JSON, null, 2));
    setParseError(null);
    setWidth(DEFAULT_WIDTH);
    setEcLevel(DEFAULT_EC);
    setDarkColor(DEFAULT_DARK);
    setLightColor(DEFAULT_LIGHT);
    if (logoPreview) URL.revokeObjectURL(logoPreview);
    setLogoFile(null);
    setLogoPreview(null);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    handleLogoFile(e.dataTransfer.files?.[0]);
  };

  return (
    <GeneratorPage>
      <GeneratorMaxWidth>
        <GeneratorCard>
          {/* ── Header ── */}
          <GenHeader>
            <GenTitleGroup>
              <GenTitle>
                QR Code <GenAccent>Generator</GenAccent>
              </GenTitle>
              <GenSubtitle>Generate scannable QR codes from JSON objects.</GenSubtitle>
            </GenTitleGroup>
            <GenActions>
              <GenDownloadBtn
                href={qrDataUrl || '#'}
                download='qr.png'
                $disabled={!qrDataUrl}
                onClick={(e) => {
                  if (!qrDataUrl) e.preventDefault();
                }}
              >
                ↓ Download PNG
              </GenDownloadBtn>
              <GenResetBtn onClick={handleReset}>↺ Reset</GenResetBtn>
            </GenActions>
          </GenHeader>

          <GenDivider />

          {/* ── Body ── */}
          <GenBody>
            {/* Form */}
            <GenForm>
              <GenField>
                <GenFieldLabel>Content</GenFieldLabel>
                <TextArea
                  value={raw}
                  onChange={(e) => handleRawChange(e.target.value)}
                  spellCheck={false}
                  style={{ minHeight: '12rem' }}
                />
                {parseError && <ParseError>⚠ Invalid JSON — {parseError}</ParseError>}
              </GenField>

              <GenRow>
                <GenField>
                  <GenFieldLabel>Size (px)</GenFieldLabel>
                  <NumberInput
                    type='number'
                    min={64}
                    max={1024}
                    step={32}
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                  />
                </GenField>
                <GenField>
                  <GenFieldLabel>Error Correction</GenFieldLabel>
                  <Select value={ecLevel} onChange={(e) => setEcLevel(e.target.value)}>
                    <option value='L'>Low (7%)</option>
                    <option value='M'>Medium (15%)</option>
                    <option value='Q'>Quartile (25%)</option>
                    <option value='H'>High (30%)</option>
                  </Select>
                </GenField>
              </GenRow>

              <GenRow>
                <GenField>
                  <GenFieldLabel>QR Color</GenFieldLabel>
                  <GenColorGroup>
                    <GenColorSwatch $color={darkColor}>
                      <input
                        type='color'
                        value={darkColor}
                        onChange={(e) => setDarkColor(e.target.value)}
                      />
                    </GenColorSwatch>
                    <GenHexInput
                      value={darkColor}
                      maxLength={7}
                      onChange={(e) => {
                        if (/^#[0-9a-fA-F]{0,6}$/.test(e.target.value))
                          setDarkColor(e.target.value);
                      }}
                    />
                  </GenColorGroup>
                </GenField>
                <GenField>
                  <GenFieldLabel>Background</GenFieldLabel>
                  <GenColorGroup>
                    <GenColorSwatch $color={lightColor}>
                      <input
                        type='color'
                        value={lightColor}
                        onChange={(e) => setLightColor(e.target.value)}
                      />
                    </GenColorSwatch>
                    <GenHexInput
                      value={lightColor}
                      maxLength={7}
                      onChange={(e) => {
                        if (/^#[0-9a-fA-F]{0,6}$/.test(e.target.value))
                          setLightColor(e.target.value);
                      }}
                    />
                  </GenColorGroup>
                </GenField>
              </GenRow>

              <GenField>
                <GenFieldLabel>Logo (Optional)</GenFieldLabel>
                <GenDropzone
                  $over={dragOver}
                  onDragOver={(e) => {
                    e.preventDefault();
                    setDragOver(true);
                  }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={handleDrop}
                  onClick={() => logoInputRef.current?.click()}
                >
                  <input
                    ref={logoInputRef}
                    type='file'
                    accept='image/*'
                    style={{ display: 'none' }}
                    onChange={(e) => handleLogoFile(e.target.files?.[0])}
                  />
                  {logoPreview ? (
                    <>
                      <GenLogoThumb src={logoPreview} alt='Logo preview' />
                      <GenLogoName>{logoFile?.name}</GenLogoName>
                    </>
                  ) : (
                    <>
                      <GenDropIcon>🖼</GenDropIcon>
                      <GenDropText>Drag & drop logo or click to upload</GenDropText>
                    </>
                  )}
                </GenDropzone>
                {logoPreview && (
                  <GenRemoveBtn
                    onClick={(e) => {
                      e.stopPropagation();
                      URL.revokeObjectURL(logoPreview);
                      setLogoFile(null);
                      setLogoPreview(null);
                    }}
                  >
                    Remove logo
                  </GenRemoveBtn>
                )}
              </GenField>
            </GenForm>

            {/* Preview */}
            <GenPreviewPanel>
              <GenPreviewLabel>Live Preview</GenPreviewLabel>
              <GenPreviewCard>
                {qrDataUrl ? (
                  <GenQrImage src={qrDataUrl} alt='Generated QR code' />
                ) : (
                  <GenPreviewPlaceholder>
                    {parseError ? 'Fix JSON to preview' : 'Generating…'}
                  </GenPreviewPlaceholder>
                )}
              </GenPreviewCard>
              <GenPreviewHint>Scan with your phone to test</GenPreviewHint>
            </GenPreviewPanel>
          </GenBody>
        </GeneratorCard>
      </GeneratorMaxWidth>
    </GeneratorPage>
  );
};

// ═════════════════════════════════════════════════════════════════════════════
// getQrAsJsonContent — teal
// ═════════════════════════════════════════════════════════════════════════════

// ── Teal-themed styled components ─────────────────────────────────────────────

const TealStoryPage = styled(StoryPage)`
  background: ${teal.m50};
`;

const TealCard = styled(Card)`
  border-left-color: ${teal.m500};
`;

const TealCardHeader = styled(CardHeader)`
  border-bottom-color: ${teal.m100};
`;

const TealFnName = styled(FnName)`
  color: ${teal.m900};
  background: ${teal.m100};
`;

const TealSectionLabel = styled(SectionLabel)`
  color: ${teal.m700};
`;

const TealDemoButton = styled(DemoButton)`
  background: ${teal.m500};
`;

const FileInputLabel = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.9rem 2rem;
  border-radius: 8px;
  border: 1.5px dashed ${teal.m300};
  background: ${teal.m50};
  color: ${teal.m700};
  font-size: 1.35rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s;

  &:hover {
    background: ${teal.m100};
  }

  input {
    display: none;
  }
`;

const PreviewImage = styled.img`
  max-width: 18rem;
  max-height: 18rem;
  border-radius: 10px;
  border: 1px solid ${blueGray.m100};
  object-fit: contain;
  display: block;
`;

const JsonOutput = styled.pre`
  background: ${teal.m50};
  color: ${teal.m900};
  border: 1.5px solid ${teal.m200};
  border-radius: 10px;
  padding: 2rem 2.4rem;
  font-size: 1.25rem;
  line-height: 1.8;
  overflow-x: auto;
  margin: 0;
  flex: 1;
`;

const SourceBadge = styled.span`
  display: inline-block;
  padding: 0.3rem 0.9rem;
  border-radius: 99px;
  font-size: 1.1rem;
  font-weight: 700;
  background: ${teal.m100};
  color: ${teal.m800};
  margin-left: 1rem;
  vertical-align: middle;
`;

const Divider = styled.hr`
  border: none;
  border-top: 2px dashed ${teal.m200};
  margin: 0;
`;

// ── Round-trip helper ─────────────────────────────────────────────────────────

// Small payload → V1 QR (21×21 modules) at width 400 → ~13 px/module → easy to decode
const ROUND_TRIP_JSON = { ok: true, env: 'test' };

// ── Page component ────────────────────────────────────────────────────────────

const GetQrAsJsonContentPage = () => {
  const [dataUrlInput, setDataUrlInput] = useState('');
  const [previewSrc, setPreviewSrc] = useState(null);
  const [fileSource, setFileSource] = useState(null); // actual File for decoding
  const [decoding, setDecoding] = useState(false);
  const [result, setResult] = useState(null);

  // Round-trip state
  const [rtQr, setRtQr] = useState(null);
  const [rtResult, setRtResult] = useState(null);
  const [rtDecoding, setRtDecoding] = useState(false);

  const fileRef = useRef(null);

  // ── File upload ──
  const handleFile = (file) => {
    if (!file) return;
    setFileSource(file); // keep File object for direct decoding (no fetch needed)
    setPreviewSrc(URL.createObjectURL(file)); // blob URL only for the <img> preview
    setDataUrlInput('');
    setResult(null);
  };

  // ── Paste / type data URL ──
  const handleDataUrlChange = (val) => {
    setDataUrlInput(val);
    setFileSource(null);
    setPreviewSrc(val.startsWith('data:') ? val : null);
    setResult(null);
  };

  // ── Run decode ──
  // Prefer the File object (avoids fetch round-trip); fall back to pasted data-URL.
  const runDecode = async () => {
    const source = fileSource || dataUrlInput.trim() || null;
    if (!source) return;
    setDecoding(true);
    setResult(null);
    const res = await getQrAsJsonContent(source);
    setResult(res);
    setDecoding(false);
  };

  // ── Round-trip demo ──
  // Encodes with getJsonContentAsQr (async, qrcode library), then decodes
  // with getQrAsJsonContent. Both functions live in this repo.
  const runRoundTrip = async () => {
    setRtQr(null);
    setRtResult(null);
    setRtDecoding(true);

    try {
      // Step 1 – encode
      const enc = await getJsonContentAsQr(ROUND_TRIP_JSON, {
        width: 400,
        errorCorrectionLevel: 'L',
      });
      if (!enc.success) throw new Error(`Encode failed: ${enc.error}`);
      setRtQr(enc.dataUrl);

      // Step 2 – decode with getQrAsJsonContent
      const dec = await getQrAsJsonContent(enc.dataUrl);
      setRtResult(dec);
    } catch (err) {
      setRtResult({ success: false, error: err.message });
    }

    setRtDecoding(false);
  };

  const hasSource = !!(fileSource || dataUrlInput.trim());

  return (
    <TealStoryPage>
      <MaxWidth>
        <TealCard>
          <TealCardHeader>
            <div>
              <TealFnName>getQrAsJsonContent</TealFnName>
              <Signature>(source) → Promise&lt;object&gt;</Signature>
            </div>
            <Description>
              Decodes a QR code image back to the JSON object that was originally encoded. Accepts a{' '}
              <Code>data-URL string</Code>, <Code>HTMLImageElement</Code>,{' '}
              <Code>HTMLCanvasElement</Code>, <Code>Blob</Code>, or <Code>File</Code>. Tries the
              native <Code>BarcodeDetector</Code> API first (Chrome/Edge/Safari 17.4+), then{' '}
              <Code>@zxing/library</Code> (pure-JS ZXing port, no workers), then <Code>jsQR</Code>{' '}
              as a final fallback — all loaded on-demand from esm.sh, no install, no bundling.
            </Description>
          </TealCardHeader>

          <CardBody>
            {/* ── Demo ── */}
            <div>
              <TealSectionLabel>Demo — decode a QR image</TealSectionLabel>

              <ControlRow>
                <FileInputLabel>
                  📂 Upload QR image
                  <input
                    ref={fileRef}
                    type='file'
                    accept='image/*'
                    onChange={(e) => handleFile(e.target.files?.[0])}
                  />
                </FileInputLabel>
              </ControlRow>

              <TextArea
                style={{ marginTop: '1.6rem' }}
                placeholder='…or paste a data-URL here (e.g. from getJsonContentAsQr)'
                value={dataUrlInput}
                onChange={(e) => handleDataUrlChange(e.target.value)}
                spellCheck={false}
              />

              <ControlRow style={{ marginTop: '1.2rem' }}>
                <TealDemoButton onClick={runDecode} disabled={!hasSource || decoding}>
                  {decoding ? 'Decoding…' : 'getQrAsJsonContent(source)'}
                </TealDemoButton>
              </ControlRow>

              {previewSrc && (
                <ResultRow>
                  <div>
                    <p
                      style={{
                        fontSize: '1.1rem',
                        color: blueGray.m500,
                        margin: '0 0 0.8rem',
                        textTransform: 'uppercase',
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                      }}
                    >
                      Input image
                    </p>
                    <PreviewImage src={previewSrc} alt='QR code to decode' />
                  </div>

                  {result && (
                    <div style={{ flex: 1 }}>
                      <p
                        style={{
                          fontSize: '1.1rem',
                          color: blueGray.m500,
                          margin: '0 0 0.8rem',
                          textTransform: 'uppercase',
                          fontWeight: 700,
                          letterSpacing: '0.08em',
                        }}
                      >
                        Decoded JSON
                        {result.success && <SourceBadge>{result.source}</SourceBadge>}
                      </p>
                      {result.success ? (
                        <JsonOutput>{JSON.stringify(result.json, null, 2)}</JsonOutput>
                      ) : (
                        <ErrorBox>Error: {result.error}</ErrorBox>
                      )}
                    </div>
                  )}
                </ResultRow>
              )}

              {!previewSrc && result && (
                <>
                  {result.success ? (
                    <JsonOutput style={{ marginTop: '1.6rem' }}>
                      {JSON.stringify(result.json, null, 2)}
                    </JsonOutput>
                  ) : (
                    <ErrorBox style={{ marginTop: '1.6rem' }}>Error: {result.error}</ErrorBox>
                  )}
                </>
              )}
            </div>

            <Divider />

            {/* ── Round-trip demo ── */}
            <div>
              <TealSectionLabel>Round-trip demo</TealSectionLabel>
              <Description style={{ margin: '0 0 1.6rem' }}>
                Encodes the sample object with <Code>getJsonContentAsQr</Code>, then immediately
                decodes it with <Code>getQrAsJsonContent</Code>. Both functions live in this repo.
              </Description>

              <Pre>{`const json = ${JSON.stringify(ROUND_TRIP_JSON, null, 2)};`}</Pre>

              <ControlRow style={{ marginTop: '1.6rem' }}>
                <TealDemoButton onClick={runRoundTrip} disabled={rtDecoding}>
                  {rtDecoding ? 'Decoding…' : 'Run round-trip →'}
                </TealDemoButton>
              </ControlRow>

              {(rtQr || rtResult) && (
                <ResultRow>
                  {rtQr && (
                    <div>
                      <p
                        style={{
                          fontSize: '1.1rem',
                          color: blueGray.m500,
                          margin: '0 0 0.8rem',
                          textTransform: 'uppercase',
                          fontWeight: 700,
                          letterSpacing: '0.08em',
                        }}
                      >
                        Generated QR
                      </p>
                      <PreviewImage src={rtQr} alt='Round-trip QR code' />
                    </div>
                  )}

                  {rtResult && (
                    <div style={{ flex: 1 }}>
                      <p
                        style={{
                          fontSize: '1.1rem',
                          color: blueGray.m500,
                          margin: '0 0 0.8rem',
                          textTransform: 'uppercase',
                          fontWeight: 700,
                          letterSpacing: '0.08em',
                        }}
                      >
                        Decoded back
                        {rtResult.success && <SourceBadge>{rtResult.source}</SourceBadge>}
                      </p>
                      {rtResult.success ? (
                        <JsonOutput>{JSON.stringify(rtResult.json, null, 2)}</JsonOutput>
                      ) : (
                        <ErrorBox>Error: {rtResult.error}</ErrorBox>
                      )}
                    </div>
                  )}
                </ResultRow>
              )}
            </div>

            {/* ── Usage ── */}
            <div>
              <TealSectionLabel>Usage</TealSectionLabel>
              <Pre>{`import getQrAsJsonContent from 'meticulous-ui/utils/getQrAsJsonContent';

// From a data-URL (e.g. produced by getJsonContentAsQr)
const result = await getQrAsJsonContent(dataUrl);

// From a file-input
const [file] = event.target.files;
const result = await getQrAsJsonContent(file);

// From an image element already in the DOM
const img = document.querySelector('#qr-preview');
const result = await getQrAsJsonContent(img);

if (result.success) {
  console.log(result.json);   // parsed JS object
  console.log(result.text);   // raw string decoded from the QR
  console.log(result.source); // 'BarcodeDetector' | '@zxing/library' | 'jsQR'
}
`}</Pre>
            </div>

            {/* ── Return shape ── */}
            <div>
              <TealSectionLabel>Return shape</TealSectionLabel>
              <Pre>{`// success
{
  success: true,
  json:    { userId: 42, role: 'admin' },          // parsed object
  text:    '{"userId":42,"role":"admin"}',          // raw decoded string
  source:  'BarcodeDetector',                       // or '@zxing/library' | 'jsQR'
}

// failure
{ success: false, error: 'No QR code detected (tried BarcodeDetector + @zxing/library + jsQR).' }
`}</Pre>
            </div>
          </CardBody>
        </TealCard>
      </MaxWidth>
    </TealStoryPage>
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

export const GetQrAsJsonContent = () => <GetQrAsJsonContentPage />;
GetQrAsJsonContent.storyName = 'getQrAsJsonContent';
