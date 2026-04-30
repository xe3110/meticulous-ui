import { useState, useEffect } from 'react';
import styled from 'styled-components';

import blueGray from '../src/colors/blueGray';
import blue from '../src/colors/blue';
import grey from '../src/colors/grey';
import green from '../src/colors/green';
import lightBlue from '../src/colors/lightBlue';
import deepPurple from '../src/colors/deepPurple';
import teal from '../src/colors/teal';
import indigo from '../src/colors/indigo';
import orange from '../src/colors/orange';
import cyan from '../src/colors/cyan';
import brown from '../src/colors/brown';
import red from '../src/colors/red';
import white from '../src/colors/white';

import isMobile from '../src/utils/isMobile';
import isIOS from '../src/utils/isIOS';
import isAndroid from '../src/utils/isAndroid';
import isSafari from '../src/utils/isSafari';
import isDarkMode from '../src/utils/isDarkMode';
import isOnline from '../src/utils/isOnline';
import copyToClipboard from '../src/utils/copyToClipboard';
import downloadFile from '../src/utils/downloadFile';
import openInNewTab from '../src/utils/openInNewTab';
import getScreenSize from '../src/utils/getScreenSize';

// ─── Page wrapper ─────────────────────────────────────────────────────────────

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

// ─── Card ─────────────────────────────────────────────────────────────────────

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

// ─── Live value badge ─────────────────────────────────────────────────────────

const LiveBadgeWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  flex-wrap: wrap;
`;

const LiveLabel = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${blueGray.m400};
`;

const Badge = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  padding: 0.5rem 1.4rem;
  border-radius: 999px;
  background: ${({ $true, $trueColor, $falseColor }) => ($true ? $trueColor : $falseColor)};
  color: ${white};
`;

const BoolBadge = ({ value, trueColor, falseColor }) => (
  <LiveBadgeWrap>
    <LiveLabel>Live value on this device:</LiveLabel>
    <Badge $true={value} $trueColor={trueColor} $falseColor={blueGray.m300}>
      {String(value)}
    </Badge>
  </LiveBadgeWrap>
);

// ─── Demo button ──────────────────────────────────────────────────────────────

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
`;

const DemoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  flex-wrap: wrap;
`;

const StatusChip = styled.span`
  font-size: 1.3rem;
  padding: 0.4rem 1.2rem;
  border-radius: 6px;
  background: ${({ $color }) => $color}22;
  color: ${({ $color }) => $color};
  font-weight: 600;
`;

// ─── Screen size table ────────────────────────────────────────────────────────

const SizeTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1.3rem;
`;
const STh = styled.th`
  text-align: left;
  padding: 1rem 1.4rem;
  background: ${blueGray.m50};
  color: ${blueGray.m500};
  font-weight: 600;
  font-size: 1.2rem;
  border: 1px solid ${blueGray.m100};
`;
const STd = styled.td`
  padding: 1rem 1.4rem;
  border: 1px solid ${blueGray.m100};
`;
const SizeValue = styled.code`
  font-weight: 700;
  color: ${({ $color }) => $color};
`;

// ═════════════════════════════════════════════════════════════════════════════
// isMobile — blue
// ═════════════════════════════════════════════════════════════════════════════

const IsMobilePage = () => (
  <StoryPage $bg={blue.m50}>
    <MaxWidth>
      <Card $accent={blue.m500}>
        <CardHeader $bg={white} $border={blue.m100}>
          <div>
            <FnName $color={blue.m900} $bg={blue.m100}>
              isMobile
            </FnName>
            <Signature>() → boolean</Signature>
          </div>
          <Description>
            Returns <Code>true</Code> when the browser's User-Agent matches any known mobile
            platform (Android, iOS, BlackBerry, Opera Mini, etc.). Useful for conditionally
            rendering mobile-specific UI.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={blue.m700}>Live Result</SectionLabel>
            <BoolBadge value={isMobile()} trueColor={blue.m500} />
          </div>
          <div>
            <SectionLabel $color={blue.m700}>Usage</SectionLabel>
            <Pre>{`import isMobile from 'meticulous-ui/utils/isMobile';

if (isMobile()) {
  showMobileNav();
}`}</Pre>
          </div>
          <div>
            <SectionLabel $color={blue.m700}>Source</SectionLabel>
            <Pre>{`const isMobile = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// isIOS — grey
// ═════════════════════════════════════════════════════════════════════════════

const IsIOSPage = () => (
  <StoryPage $bg={grey.m100}>
    <MaxWidth>
      <Card $accent={grey.m600}>
        <CardHeader $bg={white} $border={grey.m200}>
          <div>
            <FnName $color={grey.m900} $bg={grey.m200}>
              isIOS
            </FnName>
            <Signature>() → boolean</Signature>
          </div>
          <Description>
            Returns <Code>true</Code> on iPhone, iPad, and iPod. Also handles iPadOS 13+ which
            reports as <Code>MacIntel</Code> with touch points — a quirk Apple introduced when iPads
            gained desktop-class Safari.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={grey.m700}>Live Result</SectionLabel>
            <BoolBadge value={isIOS()} trueColor={grey.m600} />
          </div>
          <div>
            <SectionLabel $color={grey.m700}>Usage</SectionLabel>
            <Pre>{`import isIOS from 'meticulous-ui/utils/isIOS';

if (isIOS()) {
  // use WKWebView-safe workaround
}`}</Pre>
          </div>
          <div>
            <SectionLabel $color={grey.m700}>Source</SectionLabel>
            <Pre>{`const isIOS = () =>
  /iPhone|iPad|iPod/i.test(navigator.userAgent) ||
  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// isAndroid — green
// ═════════════════════════════════════════════════════════════════════════════

const IsAndroidPage = () => (
  <StoryPage $bg={green.m50}>
    <MaxWidth>
      <Card $accent={green.m500}>
        <CardHeader $bg={white} $border={green.m100}>
          <div>
            <FnName $color={green.m900} $bg={green.m100}>
              isAndroid
            </FnName>
            <Signature>() → boolean</Signature>
          </div>
          <Description>
            Returns <Code>true</Code> when the User-Agent string contains <Code>Android</Code>.
            Covers Chrome for Android, Samsung Browser, and all standard Android WebViews.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={green.m700}>Live Result</SectionLabel>
            <BoolBadge value={isAndroid()} trueColor={green.m500} />
          </div>
          <div>
            <SectionLabel $color={green.m700}>Usage</SectionLabel>
            <Pre>{`import isAndroid from 'meticulous-ui/utils/isAndroid';

if (isAndroid()) {
  requestAndroidPermission('camera');
}`}</Pre>
          </div>
          <div>
            <SectionLabel $color={green.m700}>Source</SectionLabel>
            <Pre>{`const isAndroid = () => /Android/i.test(navigator.userAgent);`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// isSafari — lightBlue
// ═════════════════════════════════════════════════════════════════════════════

const IsSafariPage = () => (
  <StoryPage $bg={lightBlue.m50}>
    <MaxWidth>
      <Card $accent={lightBlue.m500}>
        <CardHeader $bg={white} $border={lightBlue.m100}>
          <div>
            <FnName $color={lightBlue.m900} $bg={lightBlue.m100}>
              isSafari
            </FnName>
            <Signature>() → boolean</Signature>
          </div>
          <Description>
            Returns <Code>true</Code> only for genuine Safari. Chrome and Android browsers also
            include <Code>Safari</Code> in their UA strings — this regex excludes them by requiring
            the absence of <Code>Chrome</Code> and <Code>Android</Code>.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={lightBlue.m700}>Live Result</SectionLabel>
            <BoolBadge value={isSafari()} trueColor={lightBlue.m500} />
          </div>
          <div>
            <SectionLabel $color={lightBlue.m700}>Usage</SectionLabel>
            <Pre>{`import isSafari from 'meticulous-ui/utils/isSafari';

if (isSafari()) {
  // apply webkit-specific audio workaround
}`}</Pre>
          </div>
          <div>
            <SectionLabel $color={lightBlue.m700}>Source</SectionLabel>
            <Pre>{`const isSafari = () => /^((?!chrome|android).)*safari/i.test(navigator.userAgent);`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// isDarkMode — deepPurple
// ═════════════════════════════════════════════════════════════════════════════

const IsDarkModePage = () => {
  const [dark, setDark] = useState(isDarkMode());

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e) => setDark(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return (
    <StoryPage $bg={deepPurple.m50}>
      <MaxWidth>
        <Card $accent={deepPurple.m500}>
          <CardHeader $bg={white} $border={deepPurple.m100}>
            <div>
              <FnName $color={deepPurple.m900} $bg={deepPurple.m100}>
                isDarkMode
              </FnName>
              <Signature>() → boolean</Signature>
            </div>
            <Description>
              Returns <Code>true</Code> when the OS/browser is set to dark color scheme, using the{' '}
              <Code>prefers-color-scheme</Code> media query. The live badge below reacts in real
              time — toggle your OS theme to see it update.
            </Description>
          </CardHeader>
          <CardBody>
            <div>
              <SectionLabel $color={deepPurple.m700}>Live Result</SectionLabel>
              <BoolBadge value={dark} trueColor={deepPurple.m500} />
            </div>
            <div>
              <SectionLabel $color={deepPurple.m700}>Usage</SectionLabel>
              <Pre>{`import isDarkMode from 'meticulous-ui/utils/isDarkMode';

const theme = isDarkMode() ? darkTheme : lightTheme;`}</Pre>
            </div>
            <div>
              <SectionLabel $color={deepPurple.m700}>Source</SectionLabel>
              <Pre>{`const isDarkMode = () => window.matchMedia('(prefers-color-scheme: dark)').matches;`}</Pre>
            </div>
          </CardBody>
        </Card>
      </MaxWidth>
    </StoryPage>
  );
};

// ═════════════════════════════════════════════════════════════════════════════
// isOnline — teal
// ═════════════════════════════════════════════════════════════════════════════

const IsOnlinePage = () => {
  const [online, setOnline] = useState(isOnline());

  useEffect(() => {
    const on = () => setOnline(true);
    const off = () => setOnline(false);
    window.addEventListener('online', on);
    window.addEventListener('offline', off);
    return () => {
      window.removeEventListener('online', on);
      window.removeEventListener('offline', off);
    };
  }, []);

  return (
    <StoryPage $bg={teal.m50}>
      <MaxWidth>
        <Card $accent={teal.m500}>
          <CardHeader $bg={white} $border={teal.m100}>
            <div>
              <FnName $color={teal.m900} $bg={teal.m100}>
                isOnline
              </FnName>
              <Signature>() → boolean</Signature>
            </div>
            <Description>
              Returns <Code>navigator.onLine</Code>. The live badge below listens to the browser's{' '}
              <Code>online</Code> and <Code>offline</Code> events and updates automatically —
              disconnect your network to see it flip.
            </Description>
          </CardHeader>
          <CardBody>
            <div>
              <SectionLabel $color={teal.m700}>Live Result</SectionLabel>
              <BoolBadge value={online} trueColor={teal.m500} />
            </div>
            <div>
              <SectionLabel $color={teal.m700}>Usage</SectionLabel>
              <Pre>{`import isOnline from 'meticulous-ui/utils/isOnline';

if (!isOnline()) {
  showOfflineBanner();
}`}</Pre>
            </div>
            <div>
              <SectionLabel $color={teal.m700}>Source</SectionLabel>
              <Pre>{`const isOnline = () => navigator.onLine;`}</Pre>
            </div>
          </CardBody>
        </Card>
      </MaxWidth>
    </StoryPage>
  );
};

// ═════════════════════════════════════════════════════════════════════════════
// copyToClipboard — indigo
// ═════════════════════════════════════════════════════════════════════════════

const CopyToClipboardPage = () => {
  const [status, setStatus] = useState(null);
  const sampleText = 'Hello from meticulous-ui!';

  const handleCopy = async () => {
    try {
      await copyToClipboard(sampleText);
      setStatus('copied');
    } catch {
      setStatus('error');
    }
    setTimeout(() => setStatus(null), 2000);
  };

  return (
    <StoryPage $bg={indigo.m50}>
      <MaxWidth>
        <Card $accent={indigo.m500}>
          <CardHeader $bg={white} $border={indigo.m100}>
            <div>
              <FnName $color={indigo.m900} $bg={indigo.m100}>
                copyToClipboard
              </FnName>
              <Signature>(text: string) → Promise&lt;void&gt;</Signature>
            </div>
            <Description>
              Copies text to the clipboard using the async <Code>navigator.clipboard</Code> API when
              available, falling back to <Code>document.execCommand('copy')</Code> for older
              browsers.
            </Description>
          </CardHeader>
          <CardBody>
            <div>
              <SectionLabel $color={indigo.m700}>Demo</SectionLabel>
              <DemoRow>
                <DemoButton $bg={indigo.m500} onClick={handleCopy}>
                  Copy &quot;{sampleText}&quot;
                </DemoButton>
                {status === 'copied' && (
                  <StatusChip $color={indigo.m600}>Copied to clipboard!</StatusChip>
                )}
                {status === 'error' && (
                  <StatusChip $color={red.m600}>Failed — check permissions</StatusChip>
                )}
              </DemoRow>
            </div>
            <div>
              <SectionLabel $color={indigo.m700}>Usage</SectionLabel>
              <Pre>{`import copyToClipboard from 'meticulous-ui/utils/copyToClipboard';

await copyToClipboard('https://example.com/share/abc123');`}</Pre>
            </div>
            <div>
              <SectionLabel $color={indigo.m700}>Source</SectionLabel>
              <Pre>{`const copyToClipboard = async (text) => {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }
  const el = document.createElement('textarea');
  el.value = text;
  el.style.cssText = 'position:fixed;opacity:0';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};`}</Pre>
            </div>
          </CardBody>
        </Card>
      </MaxWidth>
    </StoryPage>
  );
};

// ═════════════════════════════════════════════════════════════════════════════
// downloadFile — orange
// ═════════════════════════════════════════════════════════════════════════════

const DownloadFilePage = () => {
  const [triggered, setTriggered] = useState(false);

  const handleDownload = () => {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><circle cx="50" cy="50" r="40" fill="${orange.m500}"/></svg>`;
    const blob = new Blob([svg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    downloadFile(url, 'sample.svg');
    URL.revokeObjectURL(url);
    setTriggered(true);
    setTimeout(() => setTriggered(false), 2000);
  };

  return (
    <StoryPage $bg={orange.m50}>
      <MaxWidth>
        <Card $accent={orange.m500}>
          <CardHeader $bg={white} $border={orange.m100}>
            <div>
              <FnName $color={orange.m900} $bg={orange.m100}>
                downloadFile
              </FnName>
              <Signature>(url: string, filename?: string) → void</Signature>
            </div>
            <Description>
              Triggers a file download by creating a temporary <Code>&lt;a&gt;</Code> element with
              the <Code>download</Code> attribute. <Code>filename</Code> is optional — when omitted
              it is inferred from the URL path.
            </Description>
          </CardHeader>
          <CardBody>
            <div>
              <SectionLabel $color={orange.m700}>Demo</SectionLabel>
              <DemoRow>
                <DemoButton $bg={orange.m500} onClick={handleDownload}>
                  Download sample.svg
                </DemoButton>
                {triggered && <StatusChip $color={orange.m700}>Download triggered!</StatusChip>}
              </DemoRow>
            </div>
            <div>
              <SectionLabel $color={orange.m700}>Usage</SectionLabel>
              <Pre>{`import downloadFile from 'meticulous-ui/utils/downloadFile';

// with explicit filename
downloadFile('https://api.example.com/report', 'report-2024.pdf');

// filename inferred from URL → 'invoice.pdf'
downloadFile('https://cdn.example.com/files/invoice.pdf');`}</Pre>
            </div>
            <div>
              <SectionLabel $color={orange.m700}>Source</SectionLabel>
              <Pre>{`const downloadFile = (url, filename) => {
  const a = document.createElement('a');
  a.href = url;
  a.download = filename || url.split('/').pop() || 'download';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};`}</Pre>
            </div>
          </CardBody>
        </Card>
      </MaxWidth>
    </StoryPage>
  );
};

// ═════════════════════════════════════════════════════════════════════════════
// openInNewTab — cyan
// ═════════════════════════════════════════════════════════════════════════════

const OpenInNewTabPage = () => (
  <StoryPage $bg={cyan.m50}>
    <MaxWidth>
      <Card $accent={cyan.m500}>
        <CardHeader $bg={white} $border={cyan.m100}>
          <div>
            <FnName $color={cyan.m900} $bg={cyan.m100}>
              openInNewTab
            </FnName>
            <Signature>(url: string) → void</Signature>
          </div>
          <Description>
            Opens a URL in a new browser tab with <Code>noopener,noreferrer</Code> set to prevent
            the new page from accessing <Code>window.opener</Code> — a simple security best practice
            for external links.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={cyan.m700}>Demo</SectionLabel>
            <DemoButton
              $bg={cyan.m600}
              onClick={() => openInNewTab('https://meticulous-ui.vercel.app')}
            >
              Open meticulous-ui docs in new tab
            </DemoButton>
          </div>
          <div>
            <SectionLabel $color={cyan.m700}>Usage</SectionLabel>
            <Pre>{`import openInNewTab from 'meticulous-ui/utils/openInNewTab';

openInNewTab('https://docs.example.com');`}</Pre>
          </div>
          <div>
            <SectionLabel $color={cyan.m700}>Source</SectionLabel>
            <Pre>{`const openInNewTab = (url) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// getScreenSize — brown
// ═════════════════════════════════════════════════════════════════════════════

const GetScreenSizePage = () => {
  const [size, setSize] = useState(getScreenSize());

  useEffect(() => {
    const handler = () => setSize(getScreenSize());
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  const rows = [
    { key: 'width', label: 'Viewport width', desc: 'window.innerWidth' },
    { key: 'height', label: 'Viewport height', desc: 'window.innerHeight' },
    { key: 'deviceWidth', label: 'Device screen width', desc: 'screen.width' },
    { key: 'deviceHeight', label: 'Device screen height', desc: 'screen.height' },
    { key: 'pixelRatio', label: 'Device pixel ratio', desc: 'window.devicePixelRatio' },
  ];

  return (
    <StoryPage $bg={brown.m50}>
      <MaxWidth>
        <Card $accent={brown.m500}>
          <CardHeader $bg={white} $border={brown.m100}>
            <div>
              <FnName $color={brown.m900} $bg={brown.m100}>
                getScreenSize
              </FnName>
              <Signature>
                () → &#123; width, height, deviceWidth, deviceHeight, pixelRatio &#125;
              </Signature>
            </div>
            <Description>
              Returns an object with the current viewport dimensions, physical screen dimensions,
              and device pixel ratio. The live table below updates as you resize the window.
            </Description>
          </CardHeader>
          <CardBody>
            <div>
              <SectionLabel $color={brown.m700}>Live Values</SectionLabel>
              <SizeTable>
                <thead>
                  <tr>
                    <STh>Property</STh>
                    <STh>Live Value</STh>
                    <STh>Source</STh>
                  </tr>
                </thead>
                <tbody>
                  {rows.map(({ key, label, desc }) => (
                    <tr key={key}>
                      <STd>{label}</STd>
                      <STd>
                        <SizeValue $color={brown.m700}>{size[key]}</SizeValue>
                      </STd>
                      <STd style={{ color: blueGray.m400, fontSize: '1.2rem' }}>{desc}</STd>
                    </tr>
                  ))}
                </tbody>
              </SizeTable>
            </div>
            <div>
              <SectionLabel $color={brown.m700}>Usage</SectionLabel>
              <Pre>{`import getScreenSize from 'meticulous-ui/utils/getScreenSize';

const { width, height, pixelRatio } = getScreenSize();

if (width < 768) renderMobileLayout();`}</Pre>
            </div>
            <div>
              <SectionLabel $color={brown.m700}>Source</SectionLabel>
              <Pre>{`const getScreenSize = () => ({
  width: window.innerWidth,
  height: window.innerHeight,
  deviceWidth: screen.width,
  deviceHeight: screen.height,
  pixelRatio: window.devicePixelRatio || 1,
});`}</Pre>
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
  title: 'Utilities/Device Utilities',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    layout: 'fullscreen',
  },
};

export const IsMobile = () => <IsMobilePage />;
IsMobile.storyName = 'isMobile';

export const IsIOS = () => <IsIOSPage />;
IsIOS.storyName = 'isIOS';

export const IsAndroid = () => <IsAndroidPage />;
IsAndroid.storyName = 'isAndroid';

export const IsSafari = () => <IsSafariPage />;
IsSafari.storyName = 'isSafari';

export const IsDarkMode = () => <IsDarkModePage />;
IsDarkMode.storyName = 'isDarkMode';

export const IsOnline = () => <IsOnlinePage />;
IsOnline.storyName = 'isOnline';

export const CopyToClipboard = () => <CopyToClipboardPage />;
CopyToClipboard.storyName = 'copyToClipboard';

export const DownloadFile = () => <DownloadFilePage />;
DownloadFile.storyName = 'downloadFile';

export const OpenInNewTab = () => <OpenInNewTabPage />;
OpenInNewTab.storyName = 'openInNewTab';

export const GetScreenSize = () => <GetScreenSizePage />;
GetScreenSize.storyName = 'getScreenSize';
