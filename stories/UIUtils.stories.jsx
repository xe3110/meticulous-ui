import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

import blueGray from '../src/colors/blueGray';
import blue from '../src/colors/blue';
import teal from '../src/colors/teal';
import deepPurple from '../src/colors/deepPurple';
import green from '../src/colors/green';
import indigo from '../src/colors/indigo';
import orange from '../src/colors/orange';
import red from '../src/colors/red';
import cyan from '../src/colors/cyan';
import white from '../src/colors/white';

import scrollToTop from '../src/utils/scrollToTop';
import scrollToElement from '../src/utils/scrollToElement';
import lockBodyScroll from '../src/utils/lockBodyScroll';
import unlockBodyScroll from '../src/utils/unlockBodyScroll';
import toggleFullscreen from '../src/utils/toggleFullscreen';
import focusElement from '../src/utils/focusElement';
import detectOutsideClick from '../src/utils/detectOutsideClick';
import measureElement from '../src/utils/measureElement';

// ─── Layout ───────────────────────────────────────────────────────────────────

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

const DemoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  flex-wrap: wrap;
`;

const Badge = styled.span`
  display: inline-block;
  padding: 0.5rem 1.4rem;
  border-radius: 999px;
  font-size: 1.3rem;
  font-weight: 700;
  background: ${({ $bg }) => $bg};
  color: ${({ $color }) => $color};
`;

const MeasureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
  gap: 1.2rem;
  margin-top: 1.4rem;
`;

const MeasureStat = styled.div`
  background: ${({ $bg }) => $bg};
  border-radius: 10px;
  padding: 1.2rem 1.6rem;
`;

const MeasureValue = styled.div`
  font-size: 2rem;
  font-weight: 800;
  color: ${({ $color }) => $color};
  font-family: monospace;
`;

const MeasureLabel = styled.div`
  font-size: 1.1rem;
  color: ${blueGray.m500};
  margin-top: 0.3rem;
`;

// ═════════════════════════════════════════════════════════════════════════════
// scrollToTop — blue
// ═════════════════════════════════════════════════════════════════════════════

const ScrollToTopPage = () => (
  <StoryPage $bg={blue.m50}>
    <MaxWidth>
      <Card $accent={blue.m500}>
        <CardHeader $bg={white} $border={blue.m100}>
          <div>
            <FnName $color={blue.m900} $bg={blue.m100}>
              scrollToTop
            </FnName>
            <Signature>(behavior = &apos;smooth&apos;) → void</Signature>
          </div>
          <Description>
            Calls <Code>window.scrollTo({'{ top: 0, behavior }'})</Code>. Defaults to{' '}
            <Code>&apos;smooth&apos;</Code> for an animated scroll — pass{' '}
            <Code>&apos;instant&apos;</Code> to jump without animation.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={blue.m700}>
              Demo — scroll down, then click the button
            </SectionLabel>
            {Array.from({ length: 8 }, (_, i) => (
              <div
                key={i}
                style={{
                  height: '6rem',
                  marginBottom: '1rem',
                  background: i % 2 === 0 ? blue.m50 : blue.m100,
                  borderRadius: 8,
                  display: 'flex',
                  alignItems: 'center',
                  paddingLeft: '1.6rem',
                  color: blue.m700,
                  fontSize: '1.3rem',
                }}
              >
                Section {i + 1}
              </div>
            ))}
            <DemoRow style={{ marginTop: '1.6rem' }}>
              <DemoButton $bg={blue.m500} onClick={() => scrollToTop()}>
                scrollToTop() — smooth
              </DemoButton>
              <DemoButton $bg={blueGray.m500} onClick={() => scrollToTop('instant')}>
                scrollToTop(&apos;instant&apos;)
              </DemoButton>
            </DemoRow>
          </div>
          <div>
            <SectionLabel $color={blue.m700}>Usage</SectionLabel>
            <Pre>{`import scrollToTop from 'meticulous-ui/utils/scrollToTop';

// smooth scroll (default)
scrollToTop();

// instant jump
scrollToTop('instant');`}</Pre>
          </div>
          <div>
            <SectionLabel $color={blue.m700}>Source</SectionLabel>
            <Pre>{`const scrollToTop = (behavior = 'smooth') => {
  window.scrollTo({ top: 0, behavior });
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// scrollToElement — teal
// ═════════════════════════════════════════════════════════════════════════════

const sections = [
  { id: 'section-intro', label: 'Introduction', color: teal.m100 },
  { id: 'section-features', label: 'Features', color: teal.m200 },
  { id: 'section-pricing', label: 'Pricing', color: teal.m100 },
  { id: 'section-faq', label: 'FAQ', color: teal.m200 },
  { id: 'section-contact', label: 'Contact', color: teal.m100 },
];

const ScrollToElementPage = () => (
  <StoryPage $bg={teal.m50}>
    <MaxWidth>
      <Card $accent={teal.m500}>
        <CardHeader $bg={white} $border={teal.m100}>
          <div>
            <FnName $color={teal.m900} $bg={teal.m100}>
              scrollToElement
            </FnName>
            <Signature>(id, behavior = &apos;smooth&apos;) → void</Signature>
          </div>
          <Description>
            Finds a DOM element by <Code>id</Code> and calls <Code>scrollIntoView</Code>. Silently
            no-ops if the element doesn't exist — safe to call before the DOM is fully rendered.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={teal.m700}>Demo — jump to a section</SectionLabel>
            <DemoRow style={{ flexWrap: 'wrap' }}>
              {sections.map(({ id, label }) => (
                <DemoButton key={id} $bg={teal.m500} onClick={() => scrollToElement(id)}>
                  → {label}
                </DemoButton>
              ))}
            </DemoRow>
            <div
              style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}
            >
              {sections.map(({ id, label, color }) => (
                <div
                  key={id}
                  id={id}
                  style={{
                    minHeight: '12rem',
                    background: color,
                    borderRadius: 10,
                    padding: '2rem 2.4rem',
                    display: 'flex',
                    alignItems: 'center',
                    color: teal.m900,
                    fontSize: '1.6rem',
                    fontWeight: 700,
                    scrollMarginTop: '2rem',
                  }}
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionLabel $color={teal.m700}>Usage</SectionLabel>
            <Pre>{`import scrollToElement from 'meticulous-ui/utils/scrollToElement';

scrollToElement('hero-section');         // smooth (default)
scrollToElement('pricing-section', 'instant'); // instant jump`}</Pre>
          </div>
          <div>
            <SectionLabel $color={teal.m700}>Source</SectionLabel>
            <Pre>{`const scrollToElement = (id, behavior = 'smooth') => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior, block: 'start' });
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// lockBodyScroll — deepPurple
// ═════════════════════════════════════════════════════════════════════════════

const LockBodyScrollPage = () => {
  const [locked, setLocked] = useState(false);

  const handleLock = () => {
    lockBodyScroll();
    setLocked(true);
  };

  const handleUnlock = () => {
    unlockBodyScroll();
    setLocked(false);
  };

  return (
    <StoryPage $bg={deepPurple.m50}>
      <MaxWidth>
        <Card $accent={deepPurple.m500}>
          <CardHeader $bg={white} $border={deepPurple.m100}>
            <div>
              <FnName $color={deepPurple.m900} $bg={deepPurple.m100}>
                lockBodyScroll
              </FnName>
              <Signature>() → void</Signature>
            </div>
            <Description>
              Sets <Code>document.body.style.overflow = &apos;hidden&apos;</Code> to prevent page
              scrolling — typically used when a modal or drawer is open. Call{' '}
              <Code>unlockBodyScroll()</Code> to restore.
            </Description>
          </CardHeader>
          <CardBody>
            <div>
              <SectionLabel $color={deepPurple.m700}>Demo</SectionLabel>
              <DemoRow>
                <DemoButton $bg={deepPurple.m500} onClick={handleLock} disabled={locked}>
                  Lock body scroll
                </DemoButton>
                <DemoButton $bg={blueGray.m500} onClick={handleUnlock} disabled={!locked}>
                  Unlock body scroll
                </DemoButton>
                <Badge
                  $bg={locked ? deepPurple.m100 : blueGray.m100}
                  $color={locked ? deepPurple.m800 : blueGray.m500}
                >
                  {locked ? 'overflow: hidden' : 'overflow: auto'}
                </Badge>
              </DemoRow>
              {locked && (
                <div
                  style={{
                    marginTop: '1.6rem',
                    padding: '1.4rem 1.8rem',
                    background: deepPurple.m50,
                    border: `2px dashed ${deepPurple.m300}`,
                    borderRadius: 8,
                    color: deepPurple.m700,
                    fontSize: '1.35rem',
                  }}
                >
                  Body scroll is now locked. Try scrolling the page — it should be frozen. Click
                  &quot;Unlock&quot; to restore.
                </div>
              )}
            </div>
            <div>
              <SectionLabel $color={deepPurple.m700}>Usage</SectionLabel>
              <Pre>{`import lockBodyScroll from 'meticulous-ui/utils/lockBodyScroll';
import unlockBodyScroll from 'meticulous-ui/utils/unlockBodyScroll';

function Modal({ onClose }) {
  useEffect(() => {
    lockBodyScroll();
    return () => unlockBodyScroll(); // restore on unmount
  }, []);
}`}</Pre>
            </div>
            <div>
              <SectionLabel $color={green.m700}>Source</SectionLabel>
              <Pre>{`const unlockBodyScroll = () => {
  document.body.style.overflow = '';
};`}</Pre>
            </div>
            <div>
              <SectionLabel $color={deepPurple.m700}>Source</SectionLabel>
              <Pre>{`const lockBodyScroll = () => {
  document.body.style.overflow = 'hidden';
};`}</Pre>
            </div>
          </CardBody>
        </Card>
      </MaxWidth>
    </StoryPage>
  );
};

// ═════════════════════════════════════════════════════════════════════════════
// unlockBodyScroll — green
// ═════════════════════════════════════════════════════════════════════════════

const UnlockBodyScrollPage = () => {
  const [locked, setLocked] = useState(false);

  const handleLock = () => {
    lockBodyScroll();
    setLocked(true);
  };

  const handleUnlock = () => {
    unlockBodyScroll();
    setLocked(false);
  };

  return (
    <StoryPage $bg={green.m50}>
      <MaxWidth>
        <Card $accent={green.m500}>
          <CardHeader $bg={white} $border={green.m100}>
            <div>
              <FnName $color={green.m900} $bg={green.m100}>
                unlockBodyScroll
              </FnName>
              <Signature>() → void</Signature>
            </div>
            <Description>
              Clears the <Code>overflow</Code> style on <Code>document.body</Code> set by{' '}
              <Code>lockBodyScroll</Code>, restoring the page to its natural scroll behaviour.
              Typically called in a modal&apos;s cleanup or <Code>onClose</Code> handler.
            </Description>
          </CardHeader>
          <CardBody>
            <div>
              <SectionLabel $color={green.m700}>Demo</SectionLabel>
              <DemoRow>
                <DemoButton $bg={blueGray.m500} onClick={handleLock} disabled={locked}>
                  Lock first
                </DemoButton>
                <DemoButton $bg={green.m500} onClick={handleUnlock} disabled={!locked}>
                  unlockBodyScroll()
                </DemoButton>
                <Badge $bg={locked ? red.m50 : green.m100} $color={locked ? red.m700 : green.m800}>
                  {locked ? 'LOCKED' : 'UNLOCKED'}
                </Badge>
              </DemoRow>
              {!locked && (
                <div
                  style={{
                    marginTop: '1.6rem',
                    padding: '1.4rem 1.8rem',
                    background: green.m50,
                    border: `2px dashed ${green.m300}`,
                    borderRadius: 8,
                    color: green.m800,
                    fontSize: '1.35rem',
                  }}
                >
                  Body scroll is restored. <Code>document.body.style.overflow</Code> is now empty.
                </div>
              )}
            </div>
            <div>
              <SectionLabel $color={green.m700}>Usage</SectionLabel>
              <Pre>{`import unlockBodyScroll from 'meticulous-ui/utils/unlockBodyScroll';

function closeModal() {
  unlockBodyScroll();
  setModalOpen(false);
}`}</Pre>
            </div>
            <div>
              <SectionLabel $color={green.m700}>Source</SectionLabel>
              <Pre>{`const unlockBodyScroll = () => {
  document.body.style.overflow = '';
};`}</Pre>
            </div>
          </CardBody>
        </Card>
      </MaxWidth>
    </StoryPage>
  );
};

// ═════════════════════════════════════════════════════════════════════════════
// toggleFullscreen — indigo
// ═════════════════════════════════════════════════════════════════════════════

const ToggleFullscreenPage = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', handler);
    return () => document.removeEventListener('fullscreenchange', handler);
  }, []);

  return (
    <StoryPage $bg={indigo.m50}>
      <MaxWidth>
        <Card $accent={indigo.m500}>
          <CardHeader $bg={white} $border={indigo.m100}>
            <div>
              <FnName $color={indigo.m900} $bg={indigo.m100}>
                toggleFullscreen
              </FnName>
              <Signature>(element = document.documentElement) → void</Signature>
            </div>
            <Description>
              Enters fullscreen on the given element via <Code>requestFullscreen</Code>, or exits if
              already fullscreen via <Code>document.exitFullscreen</Code>. Defaults to the entire
              document. Optional chaining makes it safe in environments where the API isn&apos;t
              available.
            </Description>
          </CardHeader>
          <CardBody>
            <div>
              <SectionLabel $color={indigo.m700}>Demo</SectionLabel>
              <div
                ref={targetRef}
                style={{
                  background: isFullscreen ? indigo.m900 : indigo.m50,
                  border: `2px solid ${indigo.m200}`,
                  borderRadius: 10,
                  padding: '3rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1.6rem',
                  transition: 'background 0.3s',
                }}
              >
                <Badge
                  $bg={isFullscreen ? indigo.m500 : blueGray.m100}
                  $color={isFullscreen ? white : blueGray.m500}
                  style={{ fontSize: '1.4rem' }}
                >
                  {isFullscreen ? 'FULLSCREEN' : 'windowed'}
                </Badge>
                <DemoRow>
                  <DemoButton $bg={indigo.m500} onClick={() => toggleFullscreen()}>
                    {isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen (document)'}
                  </DemoButton>
                  <DemoButton $bg={indigo.m700} onClick={() => toggleFullscreen(targetRef.current)}>
                    {isFullscreen ? 'Exit' : 'Fullscreen this box'}
                  </DemoButton>
                </DemoRow>
              </div>
            </div>
            <div>
              <SectionLabel $color={indigo.m700}>Usage</SectionLabel>
              <Pre>{`import toggleFullscreen from 'meticulous-ui/utils/toggleFullscreen';

// toggle the whole page
toggleFullscreen();

// toggle a specific element (e.g. a video player)
toggleFullscreen(videoRef.current);`}</Pre>
            </div>
            <div>
              <SectionLabel $color={indigo.m700}>Source</SectionLabel>
              <Pre>{`const toggleFullscreen = (element = document.documentElement) => {
  if (!document.fullscreenElement) {
    element.requestFullscreen?.();
  } else {
    document.exitFullscreen?.();
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
// focusElement — orange
// ═════════════════════════════════════════════════════════════════════════════

const FocusElementPage = () => {
  const inputRef = useRef(null);
  const textareaRef = useRef(null);
  const buttonRef = useRef(null);
  const [last, setLast] = useState(null);

  const focus = (ref, label) => {
    focusElement(ref);
    setLast(label);
  };

  return (
    <StoryPage $bg={orange.m50}>
      <MaxWidth>
        <Card $accent={orange.m500}>
          <CardHeader $bg={white} $border={orange.m100}>
            <div>
              <FnName $color={orange.m900} $bg={orange.m100}>
                focusElement
              </FnName>
              <Signature>(ref) → void</Signature>
            </div>
            <Description>
              Calls <Code>.focus()</Code> on a React ref or a raw DOM element. Accepts both{' '}
              <Code>ref.current</Code> objects and direct element references — null-safe, so it
              won&apos;t throw if the ref isn&apos;t yet attached.
            </Description>
          </CardHeader>
          <CardBody>
            <div>
              <SectionLabel $color={orange.m700}>
                Demo — programmatically focus an element
              </SectionLabel>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.2rem',
                  marginBottom: '1.6rem',
                }}
              >
                <input
                  ref={inputRef}
                  placeholder='Input field'
                  style={{
                    padding: '1rem 1.4rem',
                    fontSize: '1.4rem',
                    border: `2px solid ${orange.m200}`,
                    borderRadius: 8,
                    outline: 'none',
                  }}
                  onFocus={() => setLast('Input')}
                />
                <textarea
                  ref={textareaRef}
                  placeholder='Textarea'
                  rows={3}
                  style={{
                    padding: '1rem 1.4rem',
                    fontSize: '1.4rem',
                    border: `2px solid ${orange.m200}`,
                    borderRadius: 8,
                    outline: 'none',
                    resize: 'vertical',
                  }}
                  onFocus={() => setLast('Textarea')}
                />
                <button
                  ref={buttonRef}
                  style={{
                    padding: '1rem 1.4rem',
                    fontSize: '1.4rem',
                    border: `2px solid ${orange.m200}`,
                    borderRadius: 8,
                    background: white,
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                  onFocus={() => setLast('Button')}
                >
                  A focusable button
                </button>
              </div>
              <DemoRow>
                <DemoButton $bg={orange.m500} onClick={() => focus(inputRef, 'Input')}>
                  Focus input
                </DemoButton>
                <DemoButton $bg={orange.m600} onClick={() => focus(textareaRef, 'Textarea')}>
                  Focus textarea
                </DemoButton>
                <DemoButton $bg={orange.m700} onClick={() => focus(buttonRef, 'Button')}>
                  Focus button
                </DemoButton>
              </DemoRow>
              {last && (
                <div style={{ marginTop: '1.2rem', fontSize: '1.35rem', color: orange.m700 }}>
                  Last focused: <strong>{last}</strong>
                </div>
              )}
            </div>
            <div>
              <SectionLabel $color={orange.m700}>Usage</SectionLabel>
              <Pre>{`import focusElement from 'meticulous-ui/utils/focusElement';

// with React ref
const inputRef = useRef(null);
focusElement(inputRef); // uses ref.current

// with raw DOM element
focusElement(document.getElementById('search-input'));`}</Pre>
            </div>
            <div>
              <SectionLabel $color={orange.m700}>Source</SectionLabel>
              <Pre>{`const focusElement = (ref) => {
  const el = ref?.current ?? ref;
  el?.focus();
};`}</Pre>
            </div>
          </CardBody>
        </Card>
      </MaxWidth>
    </StoryPage>
  );
};

// ═════════════════════════════════════════════════════════════════════════════
// detectOutsideClick — red
// ═════════════════════════════════════════════════════════════════════════════

const DetectOutsideClickPage = () => {
  const boxRef = useRef(null);
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(false);
  const cleanupRef = useRef(null);

  const startDetecting = () => {
    setActive(true);
    setCount(0);
    cleanupRef.current = detectOutsideClick(boxRef, () => {
      setCount((c) => c + 1);
    });
  };

  const stopDetecting = () => {
    cleanupRef.current?.();
    setActive(false);
  };

  useEffect(() => () => cleanupRef.current?.(), []);

  return (
    <StoryPage $bg={red.m50}>
      <MaxWidth>
        <Card $accent={red.m500}>
          <CardHeader $bg={white} $border={red.m100}>
            <div>
              <FnName $color={red.m900} $bg={red.m100}>
                detectOutsideClick
              </FnName>
              <Signature>(ref, callback) → cleanup</Signature>
            </div>
            <Description>
              Attaches a <Code>mousedown</Code> listener to <Code>document</Code> and calls{' '}
              <Code>callback</Code> whenever a click lands outside the referenced element. Returns a
              cleanup function to remove the listener — call it in <Code>useEffect</Code>&apos;s
              return.
            </Description>
          </CardHeader>
          <CardBody>
            <div>
              <SectionLabel $color={red.m700}>Demo — click outside the red box</SectionLabel>
              <DemoRow style={{ marginBottom: '1.6rem' }}>
                <DemoButton $bg={red.m500} onClick={startDetecting} disabled={active}>
                  Start detecting
                </DemoButton>
                <DemoButton $bg={blueGray.m500} onClick={stopDetecting} disabled={!active}>
                  Stop
                </DemoButton>
                <Badge
                  $bg={active ? red.m100 : blueGray.m100}
                  $color={active ? red.m700 : blueGray.m500}
                >
                  {active ? 'Listening…' : 'Idle'}
                </Badge>
              </DemoRow>
              <div
                ref={boxRef}
                style={{
                  border: `3px dashed ${active ? red.m400 : blueGray.m200}`,
                  borderRadius: 12,
                  padding: '3rem',
                  textAlign: 'center',
                  color: active ? red.m700 : blueGray.m400,
                  fontSize: '1.4rem',
                  transition: 'border-color 0.2s, color 0.2s',
                  background: active ? red.m50 : white,
                }}
              >
                {active ? 'Click outside this box →' : 'Press "Start detecting" first'}
                {active && count > 0 && (
                  <div
                    style={{
                      marginTop: '1rem',
                      fontSize: '2.4rem',
                      fontWeight: 800,
                      color: red.m600,
                    }}
                  >
                    {count} outside click{count !== 1 ? 's' : ''} detected
                  </div>
                )}
              </div>
            </div>
            <div>
              <SectionLabel $color={red.m700}>Usage</SectionLabel>
              <Pre>{`import detectOutsideClick from 'meticulous-ui/utils/detectOutsideClick';

const menuRef = useRef(null);

useEffect(() => {
  const cleanup = detectOutsideClick(menuRef, () => setMenuOpen(false));
  return cleanup;
}, []);`}</Pre>
            </div>
            <div>
              <SectionLabel $color={red.m700}>Source</SectionLabel>
              <Pre>{`const detectOutsideClick = (ref, callback) => {
  const handler = (e) => {
    const el = ref?.current ?? ref;
    if (el && !el.contains(e.target)) callback(e);
  };
  document.addEventListener('mousedown', handler);
  return () => document.removeEventListener('mousedown', handler);
};`}</Pre>
            </div>
          </CardBody>
        </Card>
      </MaxWidth>
    </StoryPage>
  );
};

// ═════════════════════════════════════════════════════════════════════════════
// measureElement — cyan
// ═════════════════════════════════════════════════════════════════════════════

const MeasureElementPage = () => {
  const boxRef = useRef(null);
  const [rect, setRect] = useState(null);

  const measure = () => setRect(measureElement(boxRef));

  const fields = rect
    ? [
        { key: 'width', label: 'width', unit: 'px' },
        { key: 'height', label: 'height', unit: 'px' },
        { key: 'top', label: 'top', unit: 'px' },
        { key: 'left', label: 'left', unit: 'px' },
        { key: 'right', label: 'right', unit: 'px' },
        { key: 'bottom', label: 'bottom', unit: 'px' },
      ]
    : [];

  return (
    <StoryPage $bg={cyan.m50}>
      <MaxWidth>
        <Card $accent={cyan.m500}>
          <CardHeader $bg={white} $border={cyan.m100}>
            <div>
              <FnName $color={cyan.m900} $bg={cyan.m100}>
                measureElement
              </FnName>
              <Signature>(ref) → DOMRect | null</Signature>
            </div>
            <Description>
              Returns <Code>getBoundingClientRect()</Code> for a React ref or raw element — giving
              you <Code>width</Code>, <Code>height</Code>, <Code>top</Code>, <Code>left</Code>,{' '}
              <Code>right</Code> and <Code>bottom</Code> relative to the viewport. Returns{' '}
              <Code>null</Code> if the ref isn&apos;t attached.
            </Description>
          </CardHeader>
          <CardBody>
            <div>
              <SectionLabel $color={cyan.m700}>Demo — resize the box then measure</SectionLabel>
              <div
                ref={boxRef}
                style={{
                  background: cyan.m100,
                  border: `2px solid ${cyan.m300}`,
                  borderRadius: 10,
                  width: '100%',
                  minHeight: '10rem',
                  resize: 'both',
                  overflow: 'auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: cyan.m700,
                  fontSize: '1.3rem',
                  cursor: 'se-resize',
                }}
              >
                Resize me (drag corner) then click Measure
              </div>
              <DemoRow style={{ marginTop: '1.2rem' }}>
                <DemoButton $bg={cyan.m600} onClick={measure}>
                  Measure element
                </DemoButton>
              </DemoRow>
              {rect && (
                <MeasureGrid>
                  {fields.map(({ key, label, unit }) => (
                    <MeasureStat key={key} $bg={cyan.m50}>
                      <MeasureValue $color={cyan.m700}>
                        {Math.round(rect[key])}
                        {unit}
                      </MeasureValue>
                      <MeasureLabel>{label}</MeasureLabel>
                    </MeasureStat>
                  ))}
                </MeasureGrid>
              )}
            </div>
            <div>
              <SectionLabel $color={cyan.m700}>Usage</SectionLabel>
              <Pre>{`import measureElement from 'meticulous-ui/utils/measureElement';

const cardRef = useRef(null);

const { width, height, top } = measureElement(cardRef);

// position a tooltip relative to its anchor
const anchorRect = measureElement(anchorRef);
setTooltipPos({ x: anchorRect.left, y: anchorRect.bottom + 8 });`}</Pre>
            </div>
            <div>
              <SectionLabel $color={cyan.m700}>Source</SectionLabel>
              <Pre>{`const measureElement = (ref) => {
  const el = ref?.current ?? ref;
  if (!el) return null;
  return el.getBoundingClientRect();
};`}</Pre>
            </div>
            <div>
              <SectionLabel $color={cyan.m700}>Source</SectionLabel>
              <Pre>{`const measureElement = (ref) => {
  const el = ref?.current ?? ref;
  if (!el) return null;
  return el.getBoundingClientRect();
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
  title: 'Utilities/UI Utilities',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    layout: 'fullscreen',
  },
};

export const ScrollToTop = () => <ScrollToTopPage />;
ScrollToTop.storyName = 'scrollToTop';

export const ScrollToElement = () => <ScrollToElementPage />;
ScrollToElement.storyName = 'scrollToElement';

export const LockBodyScroll = () => <LockBodyScrollPage />;
LockBodyScroll.storyName = 'lockBodyScroll';

export const UnlockBodyScroll = () => <UnlockBodyScrollPage />;
UnlockBodyScroll.storyName = 'unlockBodyScroll';

export const ToggleFullscreen = () => <ToggleFullscreenPage />;
ToggleFullscreen.storyName = 'toggleFullscreen';

export const FocusElement = () => <FocusElementPage />;
FocusElement.storyName = 'focusElement';

export const DetectOutsideClick = () => <DetectOutsideClickPage />;
DetectOutsideClick.storyName = 'detectOutsideClick';

export const MeasureElement = () => <MeasureElementPage />;
MeasureElement.storyName = 'measureElement';
