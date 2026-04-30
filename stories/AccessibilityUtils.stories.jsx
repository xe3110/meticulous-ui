import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

import blueGray from '../src/colors/blueGray';
import violet from '../src/colors/deepPurple';
import teal from '../src/colors/teal';
import green from '../src/colors/green';
import orange from '../src/colors/orange';
import white from '../src/colors/white';

import announceToScreenReader from '../src/utils/announceToScreenReader';
import trapFocus from '../src/utils/trapFocus';
import generateAriaId from '../src/utils/generateAriaId';
import handleKeyboardNavigation from '../src/utils/handleKeyboardNavigation';

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

// ═════════════════════════════════════════════════════════════════════════════
// announceToScreenReader — violet
// ═════════════════════════════════════════════════════════════════════════════

const AnnounceToScreenReaderPage = () => {
  const [log, setLog] = useState([]);

  const announce = (msg, politeness) => {
    announceToScreenReader(msg, politeness);
    setLog((prev) => [{ msg, politeness, ts: Date.now() }, ...prev].slice(0, 5));
  };

  return (
    <StoryPage $bg={violet.m50}>
      <MaxWidth>
        <Card $accent={violet.m500}>
          <CardHeader $bg={white} $border={violet.m100}>
            <div>
              <FnName $color={violet.m900} $bg={violet.m100}>
                announceToScreenReader
              </FnName>
              <Signature>(msg, politeness = &apos;polite&apos;) → void</Signature>
            </div>
            <Description>
              Injects a visually hidden <Code>aria-live</Code> region into the DOM, sets its text,
              then removes it after 1 s. Screen readers announce the message without disrupting
              visual layout. Pass <Code>&apos;assertive&apos;</Code> for urgent alerts that
              interrupt the reader immediately.
            </Description>
          </CardHeader>
          <CardBody>
            <div>
              <SectionLabel $color={violet.m700}>
                Demo — trigger an announcement (use a screen reader to hear it)
              </SectionLabel>
              <DemoRow style={{ marginBottom: '1.6rem' }}>
                <DemoButton
                  $bg={violet.m500}
                  onClick={() => announce('Item saved successfully!', 'polite')}
                >
                  Polite — &quot;Item saved&quot;
                </DemoButton>
                <DemoButton
                  $bg={violet.m800}
                  onClick={() => announce('Error: form submission failed.', 'assertive')}
                >
                  Assertive — &quot;Error&quot;
                </DemoButton>
              </DemoRow>
              {log.length > 0 && (
                <div
                  style={{
                    background: violet.m50,
                    border: `1px solid ${violet.m200}`,
                    borderRadius: 10,
                    padding: '1.4rem 1.8rem',
                    fontSize: '1.3rem',
                    color: violet.m800,
                  }}
                >
                  <strong style={{ display: 'block', marginBottom: '0.8rem' }}>
                    Announcement log (last 5):
                  </strong>
                  {log.map(({ msg, politeness, ts }) => (
                    <div key={ts} style={{ marginBottom: '0.4rem' }}>
                      <Badge
                        $bg={politeness === 'assertive' ? violet.m800 : violet.m200}
                        $color={politeness === 'assertive' ? white : violet.m800}
                        style={{ marginRight: '0.8rem', fontSize: '1.1rem' }}
                      >
                        {politeness}
                      </Badge>
                      {msg}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div>
              <SectionLabel $color={violet.m700}>Usage</SectionLabel>
              <Pre>{`import announceToScreenReader from 'meticulous-ui/utils/announceToScreenReader';

// politely tell the screen reader something changed
announceToScreenReader('3 results found');

// interrupt immediately for errors
announceToScreenReader('Session expired. Please log in again.', 'assertive');`}</Pre>
            </div>
            <div>
              <SectionLabel $color={violet.m700}>Source</SectionLabel>
              <Pre>{`const announceToScreenReader = (msg, politeness = 'polite') => {
  const el = document.createElement('div');
  el.setAttribute('aria-live', politeness);
  el.setAttribute('aria-atomic', 'true');
  el.style.cssText =
    'position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0';
  document.body.appendChild(el);
  requestAnimationFrame(() => {
    el.textContent = msg;
    setTimeout(() => document.body.removeChild(el), 1000);
  });
};`}</Pre>
            </div>
          </CardBody>
        </Card>
      </MaxWidth>
    </StoryPage>
  );
};

// ═════════════════════════════════════════════════════════════════════════════
// trapFocus — teal
// ═════════════════════════════════════════════════════════════════════════════

const TrapFocusPage = () => {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef(null);
  const cleanupRef = useRef(null);
  const prevFocusRef = useRef(null);

  useEffect(() => {
    if (open) {
      prevFocusRef.current = document.activeElement;
      cleanupRef.current = trapFocus(dialogRef);
      dialogRef.current?.querySelector('button, input, [tabindex]')?.focus();
    } else {
      cleanupRef.current?.();
      prevFocusRef.current?.focus();
    }
  }, [open]);

  useEffect(() => () => cleanupRef.current?.(), []);

  return (
    <StoryPage $bg={teal.m50}>
      <MaxWidth>
        <Card $accent={teal.m500}>
          <CardHeader $bg={white} $border={teal.m100}>
            <div>
              <FnName $color={teal.m900} $bg={teal.m100}>
                trapFocus
              </FnName>
              <Signature>(element) → cleanup</Signature>
            </div>
            <Description>
              Listens for <Code>Tab</Code> / <Code>Shift+Tab</Code> inside an element and wraps
              focus back to the first or last focusable child, preventing keyboard focus from
              escaping a modal or dialog. Returns a cleanup function to remove the listener.
            </Description>
          </CardHeader>
          <CardBody>
            <div>
              <SectionLabel $color={teal.m700}>
                Demo — open the dialog and Tab through its elements
              </SectionLabel>
              <DemoRow>
                <DemoButton $bg={teal.m500} onClick={() => setOpen(true)}>
                  Open dialog
                </DemoButton>
                <Badge
                  $bg={open ? teal.m100 : blueGray.m100}
                  $color={open ? teal.m800 : blueGray.m500}
                >
                  {open ? 'Focus trapped' : 'Idle'}
                </Badge>
              </DemoRow>
              {open && (
                <div
                  ref={dialogRef}
                  role='dialog'
                  aria-modal='true'
                  aria-label='Demo dialog'
                  style={{
                    marginTop: '1.6rem',
                    padding: '2.4rem',
                    background: white,
                    border: `2px solid ${teal.m400}`,
                    borderRadius: 12,
                    boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.2rem',
                  }}
                >
                  <p style={{ margin: 0, fontSize: '1.4rem', color: teal.m800, fontWeight: 700 }}>
                    Focus is trapped inside this dialog. Tab cycles through the three elements
                    below.
                  </p>
                  <input
                    placeholder='First focusable — input'
                    style={{
                      padding: '0.8rem 1.2rem',
                      fontSize: '1.4rem',
                      border: `2px solid ${teal.m200}`,
                      borderRadius: 8,
                      outline: 'none',
                    }}
                  />
                  <input
                    placeholder='Second focusable — input'
                    style={{
                      padding: '0.8rem 1.2rem',
                      fontSize: '1.4rem',
                      border: `2px solid ${teal.m200}`,
                      borderRadius: 8,
                      outline: 'none',
                    }}
                  />
                  <DemoButton $bg={blueGray.m500} onClick={() => setOpen(false)}>
                    Close (last focusable)
                  </DemoButton>
                </div>
              )}
            </div>
            <div>
              <SectionLabel $color={teal.m700}>Usage</SectionLabel>
              <Pre>{`import trapFocus from 'meticulous-ui/utils/trapFocus';

const modalRef = useRef(null);

useEffect(() => {
  if (isOpen) {
    const cleanup = trapFocus(modalRef);
    return cleanup;
  }
}, [isOpen]);`}</Pre>
            </div>
            <div>
              <SectionLabel $color={teal.m700}>Source</SectionLabel>
              <Pre>{`const FOCUSABLE =
  'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';

const trapFocus = (element) => {
  const el = element?.current ?? element;
  if (!el) return () => {};
  const focusable = () => [...el.querySelectorAll(FOCUSABLE)];
  const handler = (e) => {
    if (e.key !== 'Tab') return;
    const items = focusable();
    if (!items.length) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  };
  el.addEventListener('keydown', handler);
  return () => el.removeEventListener('keydown', handler);
};`}</Pre>
            </div>
          </CardBody>
        </Card>
      </MaxWidth>
    </StoryPage>
  );
};

// ═════════════════════════════════════════════════════════════════════════════
// generateAriaId — green
// ═════════════════════════════════════════════════════════════════════════════

const GenerateAriaIdPage = () => {
  const [ids, setIds] = useState([]);

  const addId = (prefix) => {
    setIds((prev) => [...prev, generateAriaId(prefix)]);
  };

  return (
    <StoryPage $bg={green.m50}>
      <MaxWidth>
        <Card $accent={green.m500}>
          <CardHeader $bg={white} $border={green.m100}>
            <div>
              <FnName $color={green.m900} $bg={green.m100}>
                generateAriaId
              </FnName>
              <Signature>(prefix = &apos;aria&apos;) → string</Signature>
            </div>
            <Description>
              Returns a unique, incrementing ID string like <Code>aria-1</Code>, <Code>aria-2</Code>{' '}
              — useful for wiring <Code>aria-labelledby</Code>, <Code>aria-describedby</Code>, and{' '}
              <Code>htmlFor</Code> pairs without collisions. Accepts an optional prefix to group
              related IDs semantically.
            </Description>
          </CardHeader>
          <CardBody>
            <div>
              <SectionLabel $color={green.m700}>
                Demo — generate IDs and see them used in label/input pairs
              </SectionLabel>
              <DemoRow style={{ marginBottom: '1.6rem' }}>
                <DemoButton $bg={green.m500} onClick={() => addId('aria')}>
                  generateAriaId()
                </DemoButton>
                <DemoButton $bg={green.m700} onClick={() => addId('tooltip')}>
                  generateAriaId(&apos;tooltip&apos;)
                </DemoButton>
                <DemoButton $bg={blueGray.m500} onClick={() => setIds([])}>
                  Clear
                </DemoButton>
              </DemoRow>
              {ids.length > 0 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {ids.map((id) => {
                    const labelId = id;
                    return (
                      <div
                        key={id}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '1rem',
                          background: green.m50,
                          border: `1px solid ${green.m200}`,
                          borderRadius: 8,
                          padding: '1rem 1.4rem',
                        }}
                      >
                        <label
                          id={labelId}
                          htmlFor={`input-${id}`}
                          style={{
                            fontSize: '1.3rem',
                            fontWeight: 600,
                            color: green.m800,
                            minWidth: '14rem',
                          }}
                        >
                          Label <Code>{id}</Code>
                        </label>
                        <input
                          id={`input-${id}`}
                          aria-labelledby={labelId}
                          placeholder={`input linked to ${id}`}
                          style={{
                            flex: 1,
                            padding: '0.7rem 1rem',
                            fontSize: '1.3rem',
                            border: `1.5px solid ${green.m300}`,
                            borderRadius: 6,
                            outline: 'none',
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <div>
              <SectionLabel $color={green.m700}>Usage</SectionLabel>
              <Pre>{`import generateAriaId from 'meticulous-ui/utils/generateAriaId';

function FormField({ label }) {
  const id = useRef(generateAriaId('field')).current;
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} />
    </>
  );
}`}</Pre>
            </div>
            <div>
              <SectionLabel $color={green.m700}>Source</SectionLabel>
              <Pre>{`let counter = 0;

const generateAriaId = (prefix = 'aria') => \`\${prefix}-\${++counter}\`;`}</Pre>
            </div>
          </CardBody>
        </Card>
      </MaxWidth>
    </StoryPage>
  );
};

// ═════════════════════════════════════════════════════════════════════════════
// handleKeyboardNavigation — orange
// ═════════════════════════════════════════════════════════════════════════════

const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape'];

const HandleKeyboardNavigationPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [orientation, setOrientation] = useState('vertical');
  const listRef = useRef(null);

  useEffect(() => {
    listRef.current?.focus();
  }, []);

  const onKeyDown = handleKeyboardNavigation(fruits, activeIndex, {
    onSelect: (idx) => setActiveIndex(idx),
    loop: true,
    orientation,
  });

  return (
    <StoryPage $bg={orange.m50}>
      <MaxWidth>
        <Card $accent={orange.m500}>
          <CardHeader $bg={white} $border={orange.m100}>
            <div>
              <FnName $color={orange.m900} $bg={orange.m100}>
                handleKeyboardNavigation
              </FnName>
              <Signature>(items, currentIndex, options) → (e: KeyboardEvent) → void</Signature>
            </div>
            <Description>
              Returns a <Code>keydown</Code> handler that moves selection through an{' '}
              <Code>items</Code> array using arrow keys, <Code>Home</Code>, and <Code>End</Code>.
              Supports both vertical (↑↓) and horizontal (←→) orientations and optional focus
              looping. Calls <Code>options.onSelect(newIndex, item)</Code> when the index changes.
            </Description>
          </CardHeader>
          <CardBody>
            <div>
              <SectionLabel $color={orange.m700}>
                Demo — click the list and navigate with arrow keys, Home, End
              </SectionLabel>
              <DemoRow style={{ marginBottom: '1.6rem' }}>
                <span style={{ fontSize: '1.3rem', color: blueGray.m600 }}>Orientation:</span>
                <DemoButton
                  $bg={orientation === 'vertical' ? orange.m500 : blueGray.m300}
                  onClick={() => setOrientation('vertical')}
                >
                  Vertical (↑↓)
                </DemoButton>
                <DemoButton
                  $bg={orientation === 'horizontal' ? orange.m500 : blueGray.m300}
                  onClick={() => setOrientation('horizontal')}
                >
                  Horizontal (←→)
                </DemoButton>
              </DemoRow>
              <div
                ref={listRef}
                role='listbox'
                aria-label='Fruit list'
                tabIndex={0}
                onKeyDown={onKeyDown}
                style={{
                  display: orientation === 'horizontal' ? 'flex' : 'flex',
                  flexDirection: orientation === 'horizontal' ? 'row' : 'column',
                  flexWrap: orientation === 'horizontal' ? 'wrap' : 'nowrap',
                  gap: '0.6rem',
                  outline: 'none',
                  padding: '1.2rem',
                  border: `2px solid ${orange.m200}`,
                  borderRadius: 10,
                  background: white,
                }}
              >
                {fruits.map((fruit, i) => (
                  <div
                    key={fruit}
                    role='option'
                    aria-selected={i === activeIndex}
                    onClick={() => setActiveIndex(i)}
                    style={{
                      padding: '0.8rem 1.4rem',
                      borderRadius: 8,
                      fontSize: '1.4rem',
                      cursor: 'pointer',
                      background: i === activeIndex ? orange.m500 : orange.m50,
                      color: i === activeIndex ? white : orange.m800,
                      fontWeight: i === activeIndex ? 700 : 400,
                      transition: 'background 0.15s, color 0.15s',
                      border:
                        i === activeIndex ? `2px solid ${orange.m600}` : '2px solid transparent',
                    }}
                  >
                    {fruit}
                  </div>
                ))}
              </div>
              <p style={{ marginTop: '1rem', fontSize: '1.3rem', color: orange.m700 }}>
                Selected: <strong>{fruits[activeIndex]}</strong> (index {activeIndex})
              </p>
            </div>
            <div>
              <SectionLabel $color={orange.m700}>Usage</SectionLabel>
              <Pre>{`import handleKeyboardNavigation from 'meticulous-ui/utils/handleKeyboardNavigation';

const items = ['Home', 'About', 'Contact'];
const [activeIndex, setActiveIndex] = useState(0);

const onKeyDown = handleKeyboardNavigation(items, activeIndex, {
  onSelect: (idx, item) => setActiveIndex(idx),
  loop: true,
  orientation: 'vertical', // or 'horizontal'
});

<ul role="listbox" tabIndex={0} onKeyDown={onKeyDown}>
  {items.map((item, i) => (
    <li key={item} role="option" aria-selected={i === activeIndex}>{item}</li>
  ))}
</ul>`}</Pre>
            </div>
            <div>
              <SectionLabel $color={orange.m700}>Source</SectionLabel>
              <Pre>{`const handleKeyboardNavigation = (items, currentIndex, options = {}) => {
  const { onSelect, loop = true, orientation = 'vertical' } = options;
  const prevKey = orientation === 'horizontal' ? 'ArrowLeft' : 'ArrowUp';
  const nextKey = orientation === 'horizontal' ? 'ArrowRight' : 'ArrowDown';
  return (e) => {
    if (e.key === nextKey) {
      e.preventDefault();
      const next = currentIndex + 1 >= items.length ? (loop ? 0 : currentIndex) : currentIndex + 1;
      onSelect?.(next, items[next]);
    } else if (e.key === prevKey) {
      e.preventDefault();
      const prev = currentIndex - 1 < 0 ? (loop ? items.length - 1 : currentIndex) : currentIndex - 1;
      onSelect?.(prev, items[prev]);
    } else if (e.key === 'Home') {
      e.preventDefault(); onSelect?.(0, items[0]);
    } else if (e.key === 'End') {
      e.preventDefault(); onSelect?.(items.length - 1, items[items.length - 1]);
    }
  };
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
  title: 'Utilities/Accessibility Utilities',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    layout: 'fullscreen',
  },
};

export const AnnounceToScreenReader = () => <AnnounceToScreenReaderPage />;
AnnounceToScreenReader.storyName = 'announceToScreenReader';

export const TrapFocus = () => <TrapFocusPage />;
TrapFocus.storyName = 'trapFocus';

export const GenerateAriaId = () => <GenerateAriaIdPage />;
GenerateAriaId.storyName = 'generateAriaId';

export const HandleKeyboardNavigation = () => <HandleKeyboardNavigationPage />;
HandleKeyboardNavigation.storyName = 'handleKeyboardNavigation';
