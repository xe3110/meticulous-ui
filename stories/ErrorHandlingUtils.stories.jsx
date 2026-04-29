import { useState } from 'react';
import styled from 'styled-components';

import blueGray from '../src/colors/blueGray';
import red from '../src/colors/red';
import orange from '../src/colors/orange';
import teal from '../src/colors/teal';
import indigo from '../src/colors/indigo';
import green from '../src/colors/green';

import logError from '../src/utils/logError';
import captureException from '../src/utils/captureException';
import safeJSONParse from '../src/utils/safeJSONParse';
import safeJSONStringify from '../src/utils/safeJSONStringify';
import fallback from '../src/utils/fallback';

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
  background: #fff;
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
  color: #e2e8f0;
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
  color: #fff;
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

const OutputBox = styled.div`
  margin-top: 1.4rem;
  padding: 1.4rem 1.8rem;
  border-radius: 10px;
  font-size: 1.3rem;
  line-height: 1.7;
  background: ${({ $bg }) => $bg};
  border: 1.5px solid ${({ $border }) => $border};
  color: ${({ $color }) => $color};
  font-family: monospace;
  white-space: pre-wrap;
  word-break: break-all;
`;

const TextInput = styled.input`
  width: 100%;
  padding: 0.9rem 1.2rem;
  font-size: 1.4rem;
  border: 2px solid ${({ $border }) => $border};
  border-radius: 8px;
  outline: none;
  font-family: monospace;
  box-sizing: border-box;
  &:focus {
    border-color: ${({ $focus }) => $focus};
  }
`;

// ═════════════════════════════════════════════════════════════════════════════
// logError — red
// ═════════════════════════════════════════════════════════════════════════════

const LogErrorPage = () => {
  const [log, setLog] = useState([]);

  const trigger = (type) => {
    let error;
    let context;
    if (type === 'error') {
      error = new Error('Network request failed');
      context = { url: '/api/users', method: 'GET', status: 500 };
    } else {
      error = 'Unexpected null value encountered';
      context = { component: 'UserCard' };
    }
    logError(error, context);
    setLog((prev) =>
      [
        {
          message: error instanceof Error ? error.message : String(error),
          context,
          ts: new Date().toLocaleTimeString(),
        },
        ...prev,
      ].slice(0, 4)
    );
  };

  return (
    <StoryPage $bg={red.m50}>
      <MaxWidth>
        <Card $accent={red.m500}>
          <CardHeader $bg='#fff' $border={red.m100}>
            <div>
              <FnName $color={red.m900} $bg={red.m100}>
                logError
              </FnName>
              <Signature>(error, context = {'{}'}) → void</Signature>
            </div>
            <Description>
              Logs an error to <Code>console.error</Code> with a consistent <Code>[logError]</Code>{' '}
              prefix. Accepts an <Code>Error</Code> object or a plain string, and an optional{' '}
              <Code>context</Code> object (URL, component name, status code, etc.) to aid debugging.
            </Description>
          </CardHeader>
          <CardBody>
            <div>
              <SectionLabel $color={red.m700}>
                Demo — check the browser console after clicking
              </SectionLabel>
              <DemoRow>
                <DemoButton $bg={red.m500} onClick={() => trigger('error')}>
                  Log Error object
                </DemoButton>
                <DemoButton $bg={red.m700} onClick={() => trigger('string')}>
                  Log string error
                </DemoButton>
              </DemoRow>
              {log.map(({ message, context, ts }, i) => (
                <OutputBox key={i} $bg={red.m50} $border={red.m200} $color={red.m800}>
                  <strong>[{ts}]</strong> {message}
                  {'\n'}
                  context: {JSON.stringify(context)}
                </OutputBox>
              ))}
            </div>
            <div>
              <SectionLabel $color={red.m700}>Usage</SectionLabel>
              <Pre>{`import logError from 'meticulous-ui/utils/logError';

try {
  await fetchUser(id);
} catch (err) {
  logError(err, { userId: id, endpoint: '/api/users' });
}`}</Pre>
            </div>
            <div>
              <SectionLabel $color={red.m700}>Source</SectionLabel>
              <Pre>{`const logError = (error, context = {}) => {
  const msg = error instanceof Error ? error.message : String(error);
  const stack = error instanceof Error ? error.stack : undefined;
  console.error('[logError]', msg, { ...context, stack });
};`}</Pre>
            </div>
          </CardBody>
        </Card>
      </MaxWidth>
    </StoryPage>
  );
};

// ═════════════════════════════════════════════════════════════════════════════
// captureException — orange
// ═════════════════════════════════════════════════════════════════════════════

const CaptureExceptionPage = () => {
  const [entries, setEntries] = useState([]);

  const trigger = (type) => {
    let error;
    if (type === 'error') error = new Error('Payment gateway timeout');
    else error = 'Invalid config: missing API key';

    const entry = captureException(error, { severity: type === 'error' ? 'high' : 'low' });
    setEntries((prev) => [entry, ...prev].slice(0, 4));
  };

  return (
    <StoryPage $bg={orange.m50}>
      <MaxWidth>
        <Card $accent={orange.m500}>
          <CardHeader $bg='#fff' $border={orange.m100}>
            <div>
              <FnName $color={orange.m900} $bg={orange.m100}>
                captureException
              </FnName>
              <Signature>(error, context = {'{}'}) → entry</Signature>
            </div>
            <Description>
              Builds a structured error entry with <Code>message</Code>, <Code>stack</Code>, and{' '}
              <Code>timestamp</Code>, then forwards it to <Code>window.__captureException</Code> if
              defined (plug in Sentry, Datadog, etc.), or falls back to <Code>console.error</Code>.
              Always returns the entry so callers can inspect it.
            </Description>
          </CardHeader>
          <CardBody>
            <div>
              <SectionLabel $color={orange.m700}>Demo — captured entries appear below</SectionLabel>
              <DemoRow>
                <DemoButton $bg={orange.m500} onClick={() => trigger('error')}>
                  Capture Error object
                </DemoButton>
                <DemoButton $bg={orange.m700} onClick={() => trigger('string')}>
                  Capture string error
                </DemoButton>
              </DemoRow>
              {entries.map((e, i) => (
                <OutputBox key={i} $bg={orange.m50} $border={orange.m200} $color={orange.m900}>
                  <strong>message:</strong> {e.message}
                  {'\n'}
                  <strong>timestamp:</strong> {e.timestamp}
                  {'\n'}
                  <strong>severity:</strong> {e.severity}
                </OutputBox>
              ))}
            </div>
            <div>
              <SectionLabel $color={orange.m700}>Usage</SectionLabel>
              <Pre>{`import captureException from 'meticulous-ui/utils/captureException';

// wire up your error tracker once
window.__captureException = (entry) => Sentry.captureEvent(entry);

// then use it anywhere
captureException(err, { userId, route: '/checkout' });`}</Pre>
            </div>
            <div>
              <SectionLabel $color={orange.m700}>Source</SectionLabel>
              <Pre>{`const captureException = (error, context = {}) => {
  const entry = {
    message: error instanceof Error ? error.message : String(error),
    stack: error instanceof Error ? error.stack : undefined,
    timestamp: new Date().toISOString(),
    ...context,
  };
  if (typeof window !== 'undefined' && typeof window.__captureException === 'function') {
    window.__captureException(entry);
  } else {
    console.error('[captureException]', entry);
  }
  return entry;
};`}</Pre>
            </div>
          </CardBody>
        </Card>
      </MaxWidth>
    </StoryPage>
  );
};

// ═════════════════════════════════════════════════════════════════════════════
// safeJSONParse — teal
// ═════════════════════════════════════════════════════════════════════════════

const PARSE_EXAMPLES = [
  { label: 'Valid object', input: '{"name":"Alice","age":30}' },
  { label: 'Valid array', input: '[1, 2, 3]' },
  { label: 'Malformed JSON', input: '{name: Alice}' },
  { label: 'Empty string', input: '' },
];

const SafeJSONParsePage = () => {
  const [input, setInput] = useState('{"name":"Alice","age":30}');
  const [fallbackVal, setFallbackVal] = useState('null');

  let parsed;
  let isError = false;
  try {
    const fb = JSON.parse(fallbackVal);
    parsed = safeJSONParse(input, fb);
  } catch {
    parsed = safeJSONParse(input, null);
    isError = true;
  }

  return (
    <StoryPage $bg={teal.m50}>
      <MaxWidth>
        <Card $accent={teal.m500}>
          <CardHeader $bg='#fff' $border={teal.m100}>
            <div>
              <FnName $color={teal.m900} $bg={teal.m100}>
                safeJSONParse
              </FnName>
              <Signature>(str, fallback = null) → any</Signature>
            </div>
            <Description>
              Wraps <Code>JSON.parse</Code> in a try/catch. Returns the parsed value on success, or{' '}
              <Code>fallback</Code> (default <Code>null</Code>) if the string is invalid JSON — no
              uncaught exceptions.
            </Description>
          </CardHeader>
          <CardBody>
            <div>
              <SectionLabel $color={teal.m700}>
                Demo — edit the JSON string and see the result
              </SectionLabel>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.8rem',
                  marginBottom: '1.2rem',
                }}
              >
                <label style={{ fontSize: '1.3rem', color: teal.m700, fontWeight: 600 }}>
                  JSON string
                </label>
                <TextInput
                  $border={teal.m200}
                  $focus={teal.m500}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder='Enter JSON string…'
                />
                <label style={{ fontSize: '1.3rem', color: teal.m700, fontWeight: 600 }}>
                  Fallback value (valid JSON)
                </label>
                <TextInput
                  $border={teal.m200}
                  $focus={teal.m500}
                  value={fallbackVal}
                  onChange={(e) => setFallbackVal(e.target.value)}
                  placeholder='null'
                />
              </div>
              <DemoRow style={{ marginBottom: '1rem', flexWrap: 'wrap' }}>
                {PARSE_EXAMPLES.map(({ label, input: ex }) => (
                  <DemoButton key={label} $bg={teal.m500} onClick={() => setInput(ex)}>
                    {label}
                  </DemoButton>
                ))}
              </DemoRow>
              <OutputBox
                $bg={parsed !== null && parsed !== undefined ? teal.m50 : blueGray.m50}
                $border={parsed !== null && parsed !== undefined ? teal.m300 : blueGray.m200}
                $color={parsed !== null && parsed !== undefined ? teal.m900 : blueGray.m500}
              >
                {JSON.stringify(parsed, null, 2) ?? 'null'}
              </OutputBox>
            </div>
            <div>
              <SectionLabel $color={teal.m700}>Usage</SectionLabel>
              <Pre>{`import safeJSONParse from 'meticulous-ui/utils/safeJSONParse';

// returns parsed object, or {} if invalid
const config = safeJSONParse(localStorage.getItem('config'), {});

// returns null on failure (default)
const data = safeJSONParse(apiResponseText);`}</Pre>
            </div>
            <div>
              <SectionLabel $color={teal.m700}>Source</SectionLabel>
              <Pre>{`const safeJSONParse = (str, fallback = null) => {
  try {
    return JSON.parse(str);
  } catch {
    return fallback;
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
// safeJSONStringify — indigo
// ═════════════════════════════════════════════════════════════════════════════

const SafeJSONStringifyPage = () => {
  const [result, setResult] = useState(null);
  const [scenario, setScenario] = useState(null);

  const run = (type) => {
    setScenario(type);
    if (type === 'valid') {
      const obj = { user: 'Alice', roles: ['admin', 'editor'], active: true };
      setResult(safeJSONStringify(obj, '', 2));
    } else if (type === 'circular') {
      const a = {};
      a.self = a;
      setResult(safeJSONStringify(a, '"[circular reference]"'));
    } else {
      setResult(safeJSONStringify(undefined, '"[nothing to stringify]"'));
    }
  };

  return (
    <StoryPage $bg={indigo.m50}>
      <MaxWidth>
        <Card $accent={indigo.m500}>
          <CardHeader $bg='#fff' $border={indigo.m100}>
            <div>
              <FnName $color={indigo.m900} $bg={indigo.m100}>
                safeJSONStringify
              </FnName>
              <Signature>(obj, fallback = &apos;&apos;, space?) → string</Signature>
            </div>
            <Description>
              Wraps <Code>JSON.stringify</Code> in a try/catch. Returns the JSON string on success,
              or <Code>fallback</Code> (default empty string) if serialisation fails — most commonly
              because of circular references or non-serialisable values like <Code>BigInt</Code>.
            </Description>
          </CardHeader>
          <CardBody>
            <div>
              <SectionLabel $color={indigo.m700}>Demo</SectionLabel>
              <DemoRow>
                <DemoButton $bg={indigo.m500} onClick={() => run('valid')}>
                  Valid object
                </DemoButton>
                <DemoButton $bg={indigo.m700} onClick={() => run('circular')}>
                  Circular reference
                </DemoButton>
                <DemoButton $bg={blueGray.m500} onClick={() => run('undefined')}>
                  undefined value
                </DemoButton>
              </DemoRow>
              {result !== null && (
                <>
                  <Badge
                    $bg={scenario === 'valid' ? indigo.m100 : blueGray.m100}
                    $color={scenario === 'valid' ? indigo.m800 : blueGray.m600}
                    style={{ marginTop: '1.2rem', display: 'inline-block' }}
                  >
                    {scenario === 'valid' ? 'Serialised successfully' : 'Fallback returned'}
                  </Badge>
                  <OutputBox
                    $bg={scenario === 'valid' ? indigo.m50 : blueGray.m50}
                    $border={scenario === 'valid' ? indigo.m200 : blueGray.m200}
                    $color={scenario === 'valid' ? indigo.m900 : blueGray.m600}
                  >
                    {result}
                  </OutputBox>
                </>
              )}
            </div>
            <div>
              <SectionLabel $color={indigo.m700}>Usage</SectionLabel>
              <Pre>{`import safeJSONStringify from 'meticulous-ui/utils/safeJSONStringify';

// safe storage — won't throw on circular refs
localStorage.setItem('state', safeJSONStringify(appState));

// pretty-print with indentation
const pretty = safeJSONStringify(obj, '', 2);`}</Pre>
            </div>
            <div>
              <SectionLabel $color={indigo.m700}>Source</SectionLabel>
              <Pre>{`const safeJSONStringify = (obj, fallback = '', space) => {
  try {
    return JSON.stringify(obj, null, space);
  } catch {
    return fallback;
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
// fallback — green
// ═════════════════════════════════════════════════════════════════════════════

const FALLBACK_CASES = [
  { value: 'Alice', label: '"Alice"', desc: 'non-empty string' },
  { value: 0, label: '0', desc: 'zero (number)' },
  { value: false, label: 'false', desc: 'boolean false' },
  { value: null, label: 'null', desc: 'null' },
  { value: undefined, label: 'undefined', desc: 'undefined' },
  { value: '', label: '""', desc: 'empty string' },
];

const FallbackPage = () => {
  const [selected, setSelected] = useState(null);
  const DEFAULT = 'Guest';

  return (
    <StoryPage $bg={green.m50}>
      <MaxWidth>
        <Card $accent={green.m500}>
          <CardHeader $bg='#fff' $border={green.m100}>
            <div>
              <FnName $color={green.m900} $bg={green.m100}>
                fallback
              </FnName>
              <Signature>(value, defaultValue) → value | defaultValue</Signature>
            </div>
            <Description>
              Returns <Code>value</Code> when it is not <Code>null</Code>, <Code>undefined</Code>,
              or an empty string — otherwise returns <Code>defaultValue</Code>. Unlike{' '}
              <Code>??</Code>, it also guards against empty strings; unlike <Code>||</Code>, it
              preserves <Code>0</Code> and <Code>false</Code>.
            </Description>
          </CardHeader>
          <CardBody>
            <div>
              <SectionLabel $color={green.m700}>
                Demo — click a value to see what fallback(&quot;?&quot;, &quot;{DEFAULT}&quot;)
                returns
              </SectionLabel>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {FALLBACK_CASES.map(({ value, label, desc }) => {
                  const result = fallback(value, DEFAULT);
                  const usedFallback = result === DEFAULT;
                  const isSelected = selected?.label === label;
                  return (
                    <div
                      key={label}
                      onClick={() => setSelected({ value, label, desc, result, usedFallback })}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1.2rem',
                        padding: '1rem 1.4rem',
                        borderRadius: 8,
                        cursor: 'pointer',
                        background: isSelected ? green.m100 : '#fff',
                        border: `2px solid ${isSelected ? green.m400 : green.m100}`,
                        transition: 'background 0.15s, border-color 0.15s',
                      }}
                    >
                      <Code style={{ minWidth: '9rem', display: 'inline-block' }}>{label}</Code>
                      <span style={{ fontSize: '1.3rem', color: blueGray.m500, flex: 1 }}>
                        {desc}
                      </span>
                      <Badge
                        $bg={usedFallback ? blueGray.m100 : green.m200}
                        $color={usedFallback ? blueGray.m600 : green.m900}
                      >
                        → {String(result)}
                      </Badge>
                    </div>
                  );
                })}
              </div>
              {selected && (
                <OutputBox
                  $bg={selected.usedFallback ? blueGray.m50 : green.m50}
                  $border={selected.usedFallback ? blueGray.m200 : green.m300}
                  $color={selected.usedFallback ? blueGray.m700 : green.m900}
                >
                  fallback({selected.label}, "{DEFAULT}") → "{String(selected.result)}"{'\n'}
                  {selected.usedFallback ? '⬆ defaultValue used' : '⬆ original value kept'}
                </OutputBox>
              )}
            </div>
            <div>
              <SectionLabel $color={green.m700}>Usage</SectionLabel>
              <Pre>{`import fallback from 'meticulous-ui/utils/fallback';

// guards null, undefined, and empty string — but keeps 0 and false
const name  = fallback(user.name, 'Guest');
const count = fallback(item.qty, 1);   // 0 is kept, not replaced
const flag  = fallback(cfg.enabled, true); // false is kept`}</Pre>
            </div>
            <div>
              <SectionLabel $color={green.m700}>Source</SectionLabel>
              <Pre>{`const fallback = (value, defaultValue) =>
  value !== null && value !== undefined && value !== '' ? value : defaultValue;`}</Pre>
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
  title: 'Utilities/Error Handling Utilities',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    layout: 'fullscreen',
  },
};

export const LogError = () => <LogErrorPage />;
LogError.storyName = 'logError';

export const CaptureException = () => <CaptureExceptionPage />;
CaptureException.storyName = 'captureException';

export const SafeJSONParse = () => <SafeJSONParsePage />;
SafeJSONParse.storyName = 'safeJSONParse';

export const SafeJSONStringify = () => <SafeJSONStringifyPage />;
SafeJSONStringify.storyName = 'safeJSONStringify';

export const Fallback = () => <FallbackPage />;
Fallback.storyName = 'fallback';
