import { useState } from 'react';
import styled from 'styled-components';

import blueGray from '../src/colors/blueGray';
import violet from '../src/colors/violet';
import cider from '../src/colors/cider';
import deepOrange from '../src/colors/deepOrange';
import yellow from '../src/colors/yellow';
import black from '../src/colors/black';

import setLocalStorage from '../src/utils/setLocalStorage';
import getLocalStorage from '../src/utils/getLocalStorage';
import removeLocalStorage from '../src/utils/removeLocalStorage';
import setSessionStorage from '../src/utils/setSessionStorage';
import getSessionStorage from '../src/utils/getSessionStorage';
import clearStorage from '../src/utils/clearStorage';

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

const DemoInput = styled.input`
  padding: 0.9rem 1.4rem;
  font-size: 1.4rem;
  border: 2px solid ${({ $color }) => $color};
  border-radius: 8px;
  outline: none;
  flex: 1;
  min-width: 12rem;
  box-sizing: border-box;
  &:focus {
    border-color: ${({ $focusColor }) => $focusColor};
  }
`;

const ResultBox = styled.div`
  margin-top: 1.2rem;
  padding: 1.4rem 1.8rem;
  background: ${({ $bg }) => $bg};
  border-radius: 8px;
  font-size: 1.35rem;
  color: ${({ $color }) => $color};
  font-weight: 600;
  word-break: break-all;
`;

const StorageTable = styled.table`
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
  word-break: break-all;
`;

const EmptyNote = styled.p`
  font-size: 1.3rem;
  color: ${blueGray.m400};
  font-style: italic;
  margin: 0.8rem 0 0;
`;

// ─── Shared helper ─────────────────────────────────────────────────────────────

const readAllLocalStorage = () => {
  const entries = [];
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    entries.push({ key: k, raw: localStorage.getItem(k) });
  }
  return entries;
};

const readAllSessionStorage = () => {
  const entries = [];
  for (let i = 0; i < sessionStorage.length; i++) {
    const k = sessionStorage.key(i);
    entries.push({ key: k, raw: sessionStorage.getItem(k) });
  }
  return entries;
};

// ═════════════════════════════════════════════════════════════════════════════
// setLocalStorage — violet
// ═════════════════════════════════════════════════════════════════════════════

const SetLocalStoragePage = () => {
  const [key, setKey] = useState('user');
  const [value, setValue] = useState('{"name":"Alice","age":30}');
  const [entries, setEntries] = useState(readAllLocalStorage);
  const [flash, setFlash] = useState(false);

  const handleSet = () => {
    let parsed;
    try {
      parsed = JSON.parse(value);
    } catch {
      parsed = value;
    }
    setLocalStorage(key, parsed);
    setEntries(readAllLocalStorage());
    setFlash(true);
    setTimeout(() => setFlash(false), 1200);
  };

  return (
    <StoryPage $bg={violet.m50}>
      <MaxWidth>
        <Card $accent={violet.m500}>
          <CardHeader $bg='#fff' $border={violet.m100}>
            <div>
              <FnName $color={violet.m900} $bg={violet.m100}>
                setLocalStorage
              </FnName>
              <Signature>(key, value) → void</Signature>
            </div>
            <Description>
              Serializes <Code>value</Code> with <Code>JSON.stringify</Code> and writes it to{' '}
              <Code>localStorage</Code>. Silently catches quota or private-browsing errors so it
              never throws in the calling code.
            </Description>
          </CardHeader>
          <CardBody>
            <div>
              <SectionLabel $color={violet.m700}>Demo</SectionLabel>
              <DemoRow>
                <DemoInput
                  $color={violet.m200}
                  $focusColor={violet.m500}
                  placeholder='key'
                  value={key}
                  onChange={(e) => setKey(e.target.value)}
                  style={{ maxWidth: '14rem' }}
                />
                <DemoInput
                  $color={violet.m200}
                  $focusColor={violet.m500}
                  placeholder='value (JSON or string)'
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
                <DemoButton $bg={violet.m500} onClick={handleSet} disabled={!key}>
                  Set
                </DemoButton>
              </DemoRow>
              {flash && (
                <ResultBox $bg={violet.m50} $color={violet.m700}>
                  Saved to localStorage!
                </ResultBox>
              )}
              {entries.length > 0 && (
                <div style={{ marginTop: '1.6rem' }}>
                  <SectionLabel $color={violet.m700}>Current localStorage</SectionLabel>
                  <StorageTable>
                    <thead>
                      <tr>
                        <STh>Key</STh>
                        <STh>Stored value</STh>
                      </tr>
                    </thead>
                    <tbody>
                      {entries.map(({ key: k, raw }) => (
                        <tr key={k}>
                          <STd>
                            <code>{k}</code>
                          </STd>
                          <STd style={{ color: violet.m700 }}>{raw}</STd>
                        </tr>
                      ))}
                    </tbody>
                  </StorageTable>
                </div>
              )}
            </div>
            <div>
              <SectionLabel $color={violet.m700}>Usage</SectionLabel>
              <Pre>{`import setLocalStorage from 'meticulous-ui/utils/setLocalStorage';

setLocalStorage('theme', 'dark');
setLocalStorage('cart', [{ id: 1, qty: 2 }]);
setLocalStorage('user', { name: 'Alice', age: 30 });`}</Pre>
            </div>
            <div>
              <SectionLabel $color={violet.m700}>Source</SectionLabel>
              <Pre>{`const setLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // storage quota exceeded or private browsing restriction
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
// getLocalStorage — cider
// ═════════════════════════════════════════════════════════════════════════════

const GetLocalStoragePage = () => {
  const [key, setKey] = useState('');
  const [result, setResult] = useState(undefined);
  const [fetched, setFetched] = useState(false);

  const handleGet = () => {
    const val = getLocalStorage(key);
    setResult(val);
    setFetched(true);
  };

  const displayResult =
    result === null
      ? 'null (key not found)'
      : typeof result === 'object'
        ? JSON.stringify(result, null, 2)
        : String(result);

  return (
    <StoryPage $bg={cider.m50}>
      <MaxWidth>
        <Card $accent={cider.m500}>
          <CardHeader $bg='#fff' $border={cider.m100}>
            <div>
              <FnName $color={cider.m900} $bg={cider.m100}>
                getLocalStorage
              </FnName>
              <Signature>(key) → any | null</Signature>
            </div>
            <Description>
              Reads a value from <Code>localStorage</Code> and deserializes it with{' '}
              <Code>JSON.parse</Code>. Returns <Code>null</Code> if the key doesn't exist or parsing
              fails, so callers never need to handle exceptions.
            </Description>
          </CardHeader>
          <CardBody>
            <div>
              <SectionLabel $color={cider.m700}>Demo</SectionLabel>
              <DemoRow>
                <DemoInput
                  $color={cider.m200}
                  $focusColor={cider.m500}
                  placeholder='Enter a localStorage key…'
                  value={key}
                  onChange={(e) => {
                    setKey(e.target.value);
                    setFetched(false);
                  }}
                />
                <DemoButton $bg={cider.m500} onClick={handleGet} disabled={!key}>
                  Get
                </DemoButton>
              </DemoRow>
              {fetched && (
                <ResultBox
                  $bg={result !== null ? cider.m50 : blueGray.m50}
                  $color={result !== null ? cider.m800 : blueGray.m500}
                >
                  <pre
                    style={{
                      margin: 0,
                      fontFamily: 'monospace',
                      fontSize: '1.25rem',
                      whiteSpace: 'pre-wrap',
                    }}
                  >
                    {displayResult}
                  </pre>
                </ResultBox>
              )}
            </div>
            <div>
              <SectionLabel $color={cider.m700}>Usage</SectionLabel>
              <Pre>{`import getLocalStorage from 'meticulous-ui/utils/getLocalStorage';

const theme = getLocalStorage('theme');       // 'dark'
const cart  = getLocalStorage('cart');        // [{ id: 1, qty: 2 }]
const missing = getLocalStorage('unknown');   // null`}</Pre>
            </div>
            <div>
              <SectionLabel $color={cider.m700}>Source</SectionLabel>
              <Pre>{`const getLocalStorage = (key) => {
  try {
    const item = localStorage.getItem(key);
    return item !== null ? JSON.parse(item) : null;
  } catch {
    return null;
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
// removeLocalStorage — deepOrange
// ═════════════════════════════════════════════════════════════════════════════

const RemoveLocalStoragePage = () => {
  const [key, setKey] = useState('');
  const [entries, setEntries] = useState(readAllLocalStorage);
  const [removed, setRemoved] = useState(null);

  const handleRemove = () => {
    removeLocalStorage(key);
    setRemoved(key);
    setKey('');
    setEntries(readAllLocalStorage());
  };

  return (
    <StoryPage $bg={deepOrange.m50}>
      <MaxWidth>
        <Card $accent={deepOrange.m500}>
          <CardHeader $bg='#fff' $border={deepOrange.m100}>
            <div>
              <FnName $color={deepOrange.m900} $bg={deepOrange.m100}>
                removeLocalStorage
              </FnName>
              <Signature>(key) → void</Signature>
            </div>
            <Description>
              Removes a single key from <Code>localStorage</Code>. No-op if the key doesn't exist —
              safe to call without checking first.
            </Description>
          </CardHeader>
          <CardBody>
            <div>
              <SectionLabel $color={deepOrange.m700}>Demo</SectionLabel>
              {entries.length > 0 ? (
                <>
                  <StorageTable style={{ marginBottom: '1.6rem' }}>
                    <thead>
                      <tr>
                        <STh>Key</STh>
                        <STh>Value</STh>
                      </tr>
                    </thead>
                    <tbody>
                      {entries.map(({ key: k, raw }) => (
                        <tr key={k}>
                          <STd>
                            <code>{k}</code>
                          </STd>
                          <STd style={{ color: blueGray.m600 }}>{raw}</STd>
                        </tr>
                      ))}
                    </tbody>
                  </StorageTable>
                  <DemoRow>
                    <DemoInput
                      $color={deepOrange.m200}
                      $focusColor={deepOrange.m500}
                      placeholder='Key to remove…'
                      value={key}
                      onChange={(e) => setKey(e.target.value)}
                    />
                    <DemoButton $bg={deepOrange.m500} onClick={handleRemove} disabled={!key}>
                      Remove
                    </DemoButton>
                  </DemoRow>
                </>
              ) : (
                <EmptyNote>
                  localStorage is empty. Use setLocalStorage story to add some keys first.
                </EmptyNote>
              )}
              {removed && (
                <ResultBox $bg={deepOrange.m50} $color={deepOrange.m700}>
                  Removed key: &quot;{removed}&quot;
                </ResultBox>
              )}
            </div>
            <div>
              <SectionLabel $color={deepOrange.m700}>Usage</SectionLabel>
              <Pre>{`import removeLocalStorage from 'meticulous-ui/utils/removeLocalStorage';

removeLocalStorage('theme');
removeLocalStorage('cart');
removeLocalStorage('nonExistentKey'); // safe, no-op`}</Pre>
            </div>
            <div>
              <SectionLabel $color={deepOrange.m700}>Source</SectionLabel>
              <Pre>{`const removeLocalStorage = (key) => {
  localStorage.removeItem(key);
};`}</Pre>
            </div>
          </CardBody>
        </Card>
      </MaxWidth>
    </StoryPage>
  );
};

// ═════════════════════════════════════════════════════════════════════════════
// setSessionStorage — yellow
// ═════════════════════════════════════════════════════════════════════════════

const SetSessionStoragePage = () => {
  const [key, setKey] = useState('step');
  const [value, setValue] = useState('2');
  const [entries, setEntries] = useState(readAllSessionStorage);
  const [flash, setFlash] = useState(false);

  const handleSet = () => {
    let parsed;
    try {
      parsed = JSON.parse(value);
    } catch {
      parsed = value;
    }
    setSessionStorage(key, parsed);
    setEntries(readAllSessionStorage());
    setFlash(true);
    setTimeout(() => setFlash(false), 1200);
  };

  return (
    <StoryPage $bg={yellow.m50}>
      <MaxWidth>
        <Card $accent={yellow.m700}>
          <CardHeader $bg='#fff' $border={yellow.m100}>
            <div>
              <FnName $color={yellow.m900} $bg={yellow.m100}>
                setSessionStorage
              </FnName>
              <Signature>(key, value) → void</Signature>
            </div>
            <Description>
              Same as <Code>setLocalStorage</Code> but scoped to <Code>sessionStorage</Code> — data
              is cleared automatically when the browser tab is closed. Ideal for transient UI state
              like wizard steps, scroll position, or draft form data.
            </Description>
          </CardHeader>
          <CardBody>
            <div>
              <SectionLabel $color={yellow.m800}>Demo</SectionLabel>
              <DemoRow>
                <DemoInput
                  $color={yellow.m300}
                  $focusColor={yellow.m700}
                  placeholder='key'
                  value={key}
                  onChange={(e) => setKey(e.target.value)}
                  style={{ maxWidth: '14rem' }}
                />
                <DemoInput
                  $color={yellow.m300}
                  $focusColor={yellow.m700}
                  placeholder='value (JSON or string)'
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
                <DemoButton $bg={yellow.m700} onClick={handleSet} disabled={!key}>
                  Set
                </DemoButton>
              </DemoRow>
              {flash && (
                <ResultBox $bg={yellow.m50} $color={yellow.m900}>
                  Saved to sessionStorage!
                </ResultBox>
              )}
              {entries.length > 0 && (
                <div style={{ marginTop: '1.6rem' }}>
                  <SectionLabel $color={yellow.m800}>Current sessionStorage</SectionLabel>
                  <StorageTable>
                    <thead>
                      <tr>
                        <STh>Key</STh>
                        <STh>Stored value</STh>
                      </tr>
                    </thead>
                    <tbody>
                      {entries.map(({ key: k, raw }) => (
                        <tr key={k}>
                          <STd>
                            <code>{k}</code>
                          </STd>
                          <STd style={{ color: yellow.m900 }}>{raw}</STd>
                        </tr>
                      ))}
                    </tbody>
                  </StorageTable>
                </div>
              )}
            </div>
            <div>
              <SectionLabel $color={yellow.m800}>Usage</SectionLabel>
              <Pre>{`import setSessionStorage from 'meticulous-ui/utils/setSessionStorage';

setSessionStorage('wizardStep', 3);
setSessionStorage('draftForm', { email: 'alice@example.com' });`}</Pre>
            </div>
            <div>
              <SectionLabel $color={yellow.m800}>Source</SectionLabel>
              <Pre>{`const setSessionStorage = (key, value) => {
  try {
    sessionStorage.setItem(key, JSON.stringify(value));
  } catch {
    // storage quota exceeded or private browsing restriction
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
// getSessionStorage — black
// ═════════════════════════════════════════════════════════════════════════════

const GetSessionStoragePage = () => {
  const [key, setKey] = useState('');
  const [result, setResult] = useState(undefined);
  const [fetched, setFetched] = useState(false);

  const handleGet = () => {
    const val = getSessionStorage(key);
    setResult(val);
    setFetched(true);
  };

  const displayResult =
    result === null
      ? 'null (key not found)'
      : typeof result === 'object'
        ? JSON.stringify(result, null, 2)
        : String(result);

  return (
    <StoryPage $bg={black.m50}>
      <MaxWidth>
        <Card $accent={black.m600}>
          <CardHeader $bg='#fff' $border={black.m100}>
            <div>
              <FnName $color={black.m800} $bg={black.m100}>
                getSessionStorage
              </FnName>
              <Signature>(key) → any | null</Signature>
            </div>
            <Description>
              Reads and deserializes a value from <Code>sessionStorage</Code>. Returns{' '}
              <Code>null</Code> if the key is missing or the stored value can't be parsed. Data is
              automatically discarded when the tab closes.
            </Description>
          </CardHeader>
          <CardBody>
            <div>
              <SectionLabel $color={black.m600}>Demo</SectionLabel>
              <DemoRow>
                <DemoInput
                  $color={black.m200}
                  $focusColor={black.m500}
                  placeholder='Enter a sessionStorage key…'
                  value={key}
                  onChange={(e) => {
                    setKey(e.target.value);
                    setFetched(false);
                  }}
                />
                <DemoButton $bg={black.m600} onClick={handleGet} disabled={!key}>
                  Get
                </DemoButton>
              </DemoRow>
              {fetched && (
                <ResultBox
                  $bg={result !== null ? black.m100 : blueGray.m50}
                  $color={result !== null ? black.m700 : blueGray.m500}
                >
                  <pre
                    style={{
                      margin: 0,
                      fontFamily: 'monospace',
                      fontSize: '1.25rem',
                      whiteSpace: 'pre-wrap',
                    }}
                  >
                    {displayResult}
                  </pre>
                </ResultBox>
              )}
            </div>
            <div>
              <SectionLabel $color={black.m600}>Usage</SectionLabel>
              <Pre>{`import getSessionStorage from 'meticulous-ui/utils/getSessionStorage';

const step = getSessionStorage('wizardStep');   // 3
const draft = getSessionStorage('draftForm');   // { email: 'alice@example.com' }
const gone  = getSessionStorage('unknown');     // null`}</Pre>
            </div>
            <div>
              <SectionLabel $color={black.m600}>Source</SectionLabel>
              <Pre>{`const getSessionStorage = (key) => {
  try {
    const item = sessionStorage.getItem(key);
    return item !== null ? JSON.parse(item) : null;
  } catch {
    return null;
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
// clearStorage — blueGray
// ═════════════════════════════════════════════════════════════════════════════

const ClearStoragePage = () => {
  const [localEntries, setLocalEntries] = useState(readAllLocalStorage);
  const [sessionEntries, setSessionEntries] = useState(readAllSessionStorage);
  const [cleared, setCleared] = useState(false);

  const seed = () => {
    setLocalStorage('theme', 'dark');
    setLocalStorage('lang', 'en');
    setSessionStorage('wizardStep', 2);
    setSessionStorage('draftEmail', 'user@example.com');
    setLocalEntries(readAllLocalStorage());
    setSessionEntries(readAllSessionStorage());
    setCleared(false);
  };

  const handleClear = () => {
    clearStorage();
    setLocalEntries([]);
    setSessionEntries([]);
    setCleared(true);
  };

  const total = localEntries.length + sessionEntries.length;

  return (
    <StoryPage $bg={blueGray.m50}>
      <MaxWidth>
        <Card $accent={blueGray.m500}>
          <CardHeader $bg='#fff' $border={blueGray.m100}>
            <div>
              <FnName $color={blueGray.m900} $bg={blueGray.m100}>
                clearStorage
              </FnName>
              <Signature>() → void</Signature>
            </div>
            <Description>
              Calls <Code>localStorage.clear()</Code> and <Code>sessionStorage.clear()</Code> in one
              shot, removing every key from both stores. Use for logout flows or resetting app
              state.
            </Description>
          </CardHeader>
          <CardBody>
            <div>
              <SectionLabel $color={blueGray.m700}>Demo</SectionLabel>
              <DemoRow style={{ marginBottom: '1.6rem' }}>
                <DemoButton $bg={blueGray.m400} onClick={seed}>
                  Seed sample data
                </DemoButton>
                <DemoButton $bg={blueGray.m700} onClick={handleClear} disabled={total === 0}>
                  Clear all storage
                </DemoButton>
              </DemoRow>

              <SectionLabel $color={blueGray.m600}>
                localStorage ({localEntries.length} keys)
              </SectionLabel>
              {localEntries.length > 0 ? (
                <StorageTable style={{ marginBottom: '1.6rem' }}>
                  <thead>
                    <tr>
                      <STh>Key</STh>
                      <STh>Value</STh>
                    </tr>
                  </thead>
                  <tbody>
                    {localEntries.map(({ key, raw }) => (
                      <tr key={key}>
                        <STd>
                          <code>{key}</code>
                        </STd>
                        <STd style={{ color: blueGray.m600 }}>{raw}</STd>
                      </tr>
                    ))}
                  </tbody>
                </StorageTable>
              ) : (
                <EmptyNote style={{ marginBottom: '1.6rem' }}>Empty</EmptyNote>
              )}

              <SectionLabel $color={blueGray.m600}>
                sessionStorage ({sessionEntries.length} keys)
              </SectionLabel>
              {sessionEntries.length > 0 ? (
                <StorageTable>
                  <thead>
                    <tr>
                      <STh>Key</STh>
                      <STh>Value</STh>
                    </tr>
                  </thead>
                  <tbody>
                    {sessionEntries.map(({ key, raw }) => (
                      <tr key={key}>
                        <STd>
                          <code>{key}</code>
                        </STd>
                        <STd style={{ color: blueGray.m600 }}>{raw}</STd>
                      </tr>
                    ))}
                  </tbody>
                </StorageTable>
              ) : (
                <EmptyNote>Empty</EmptyNote>
              )}

              {cleared && (
                <ResultBox
                  $bg={blueGray.m100}
                  $color={blueGray.m700}
                  style={{ marginTop: '1.6rem' }}
                >
                  Both localStorage and sessionStorage cleared!
                </ResultBox>
              )}
            </div>
            <div>
              <SectionLabel $color={blueGray.m700}>Usage</SectionLabel>
              <Pre>{`import clearStorage from 'meticulous-ui/utils/clearStorage';

// on logout — wipe all persisted state
function handleLogout() {
  clearStorage();
  redirectToLogin();
}`}</Pre>
            </div>
            <div>
              <SectionLabel $color={blueGray.m700}>Source</SectionLabel>
              <Pre>{`const clearStorage = () => {
  localStorage.clear();
  sessionStorage.clear();
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
  title: 'Utils/Storage Utils',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    layout: 'fullscreen',
  },
};

export const SetLocal = () => <SetLocalStoragePage />;
SetLocal.storyName = 'setLocalStorage';

export const GetLocal = () => <GetLocalStoragePage />;
GetLocal.storyName = 'getLocalStorage';

export const RemoveLocal = () => <RemoveLocalStoragePage />;
RemoveLocal.storyName = 'removeLocalStorage';

export const SetSession = () => <SetSessionStoragePage />;
SetSession.storyName = 'setSessionStorage';

export const GetSession = () => <GetSessionStoragePage />;
GetSession.storyName = 'getSessionStorage';

export const ClearAll = () => <ClearStoragePage />;
ClearAll.storyName = 'clearStorage';
