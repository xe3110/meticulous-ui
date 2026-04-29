import { useState } from 'react';
import styled from 'styled-components';

import blueGray from '../src/colors/blueGray';
import blue from '../src/colors/blue';
import teal from '../src/colors/teal';
import green from '../src/colors/green';
import red from '../src/colors/red';
import indigo from '../src/colors/indigo';
import orange from '../src/colors/orange';

import isAuthenticated from '../src/utils/isAuthenticated';
import getToken from '../src/utils/getToken';
import setToken from '../src/utils/setToken';
import removeToken from '../src/utils/removeToken';
import decodeJWT from '../src/utils/decodeJWT';
import hasPermission from '../src/utils/hasPermission';

// ─── Helpers ─────────────────────────────────────────────────────────────────

// Build a minimal unsigned JWT for demo purposes (not cryptographically signed)
const makeJWT = (payload) => {
  const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
  const body = btoa(JSON.stringify(payload));
  return `${header}.${body}.demo-signature`;
};

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

// ═════════════════════════════════════════════════════════════════════════════
// isAuthenticated — blue
// ═════════════════════════════════════════════════════════════════════════════

const IsAuthenticatedPage = () => {
  const [status, setStatus] = useState(null);

  const check = () => setStatus(isAuthenticated());

  const loginValid = () => {
    const exp = Math.floor(Date.now() / 1000) + 3600; // 1 hour from now
    setToken(makeJWT({ sub: 'user_1', exp }));
    setStatus(isAuthenticated());
  };

  const loginExpired = () => {
    const exp = Math.floor(Date.now() / 1000) - 60; // already expired
    setToken(makeJWT({ sub: 'user_1', exp }));
    setStatus(isAuthenticated());
  };

  const logout = () => {
    removeToken();
    setStatus(isAuthenticated());
  };

  return (
    <StoryPage $bg={blue.m50}>
      <MaxWidth>
        <Card $accent={blue.m500}>
          <CardHeader $bg='#fff' $border={blue.m100}>
            <div>
              <FnName $color={blue.m900} $bg={blue.m100}>
                isAuthenticated
              </FnName>
              <Signature>(key = &apos;auth_token&apos;) → boolean</Signature>
            </div>
            <Description>
              Returns <Code>true</Code> when a token exists in <Code>localStorage</Code> and, if it
              is a JWT, its <Code>exp</Code> claim has not yet passed. Returns <Code>false</Code>{' '}
              when the token is missing or expired.
            </Description>
          </CardHeader>
          <CardBody>
            <div>
              <SectionLabel $color={blue.m700}>Demo</SectionLabel>
              <DemoRow>
                <DemoButton $bg={green.m500} onClick={loginValid}>
                  Set valid token
                </DemoButton>
                <DemoButton $bg={red.m500} onClick={loginExpired}>
                  Set expired token
                </DemoButton>
                <DemoButton $bg={blueGray.m500} onClick={logout}>
                  Remove token
                </DemoButton>
                <DemoButton $bg={blue.m500} onClick={check}>
                  isAuthenticated()
                </DemoButton>
              </DemoRow>
              {status !== null && (
                <OutputBox
                  $bg={status ? green.m50 : red.m50}
                  $border={status ? green.m300 : red.m300}
                  $color={status ? green.m900 : red.m800}
                >
                  isAuthenticated() → {String(status)}
                  {'\n'}
                  {status ? 'Token present and not expired.' : 'No token or token is expired.'}
                </OutputBox>
              )}
            </div>
            <div>
              <SectionLabel $color={blue.m700}>Usage</SectionLabel>
              <Pre>{`import isAuthenticated from 'meticulous-ui/utils/isAuthenticated';

// guard a route
if (!isAuthenticated()) {
  navigate('/login');
}

// conditionally render UI
{isAuthenticated() && <Dashboard />}`}</Pre>
            </div>
            <div>
              <SectionLabel $color={blue.m700}>Source</SectionLabel>
              <Pre>{`import getToken from './getToken';

const isAuthenticated = (key = 'auth_token') => {
  const token = getToken(key);
  if (!token) return false;
  try {
    const [, payload] = token.split('.');
    const { exp } = JSON.parse(atob(payload));
    if (exp && Date.now() / 1000 > exp) return false;
    return true;
  } catch {
    return !!token;
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
// getToken / setToken / removeToken — teal (combined story)
// ═════════════════════════════════════════════════════════════════════════════

const TokenManagementPage = () => {
  const DEMO_KEY = 'demo_token';
  const [current, setCurrent] = useState(() => getToken(DEMO_KEY));
  const [customVal, setCustomVal] = useState('my-custom-token-value');

  const refresh = () => setCurrent(getToken(DEMO_KEY));

  const set = () => {
    setToken(customVal, DEMO_KEY);
    refresh();
  };

  const remove = () => {
    removeToken(DEMO_KEY);
    refresh();
  };

  return (
    <StoryPage $bg={teal.m50}>
      <MaxWidth>
        <Card $accent={teal.m500}>
          <CardHeader $bg='#fff' $border={teal.m100}>
            <div
              style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', alignItems: 'baseline' }}
            >
              <FnName $color={teal.m900} $bg={teal.m100}>
                getToken
              </FnName>
              <FnName $color={teal.m900} $bg={teal.m100}>
                setToken
              </FnName>
              <FnName $color={teal.m900} $bg={teal.m100}>
                removeToken
              </FnName>
            </div>
            <Description>
              Thin wrappers around <Code>localStorage</Code> for a single auth token. All three
              accept an optional <Code>key</Code> (default <Code>&apos;auth_token&apos;</Code>) so
              you can support multiple token slots (access token, refresh token, etc.) without extra
              wiring.
            </Description>
          </CardHeader>
          <CardBody>
            <div>
              <SectionLabel $color={teal.m700}>Demo — manage a token in localStorage</SectionLabel>
              <div style={{ display: 'flex', gap: '0.8rem', marginBottom: '1.2rem' }}>
                <input
                  value={customVal}
                  onChange={(e) => setCustomVal(e.target.value)}
                  placeholder='Token value…'
                  style={{
                    flex: 1,
                    padding: '0.9rem 1.2rem',
                    fontSize: '1.4rem',
                    border: `2px solid ${teal.m200}`,
                    borderRadius: 8,
                    outline: 'none',
                    fontFamily: 'monospace',
                  }}
                />
              </div>
              <DemoRow>
                <DemoButton $bg={teal.m500} onClick={set}>
                  setToken(value)
                </DemoButton>
                <DemoButton $bg={indigo.m500} onClick={refresh}>
                  getToken()
                </DemoButton>
                <DemoButton $bg={red.m500} onClick={remove}>
                  removeToken()
                </DemoButton>
              </DemoRow>
              <OutputBox
                $bg={current ? teal.m50 : blueGray.m50}
                $border={current ? teal.m300 : blueGray.m200}
                $color={current ? teal.m900 : blueGray.m500}
              >
                {current
                  ? `getToken("${DEMO_KEY}") → "${current}"`
                  : `getToken("${DEMO_KEY}") → null  (no token stored)`}
              </OutputBox>
            </div>
            <div>
              <SectionLabel $color={teal.m700}>Usage</SectionLabel>
              <Pre>{`import getToken    from 'meticulous-ui/utils/getToken';
import setToken    from 'meticulous-ui/utils/setToken';
import removeToken from 'meticulous-ui/utils/removeToken';

// after login
setToken(response.accessToken);

// attach to every API request
const token = getToken();
fetch('/api/me', { headers: { Authorization: \`Bearer \${token}\` } });

// on logout
removeToken();

// custom key for refresh token
setToken(response.refreshToken, 'refresh_token');
getToken('refresh_token');`}</Pre>
            </div>
            <div>
              <SectionLabel $color={teal.m700}>Source</SectionLabel>
              <Pre>{`const getToken    = (key = 'auth_token') => localStorage.getItem(key);
const setToken    = (token, key = 'auth_token') => localStorage.setItem(key, token);
const removeToken = (key = 'auth_token') => localStorage.removeItem(key);`}</Pre>
            </div>
          </CardBody>
        </Card>
      </MaxWidth>
    </StoryPage>
  );
};

// ═════════════════════════════════════════════════════════════════════════════
// decodeJWT — indigo
// ═════════════════════════════════════════════════════════════════════════════

const PRESET_TOKENS = [
  {
    label: 'Standard user',
    payload: {
      sub: 'user_42',
      name: 'Alice',
      roles: ['viewer'],
      exp: Math.floor(Date.now() / 1000) + 3600,
      iat: Math.floor(Date.now() / 1000),
    },
  },
  {
    label: 'Admin',
    payload: {
      sub: 'user_1',
      name: 'Bob',
      roles: ['admin', 'editor'],
      exp: Math.floor(Date.now() / 1000) + 86400,
      iat: Math.floor(Date.now() / 1000),
    },
  },
  {
    label: 'Expired',
    payload: {
      sub: 'user_99',
      name: 'Charlie',
      exp: Math.floor(Date.now() / 1000) - 300,
      iat: Math.floor(Date.now() / 1000) - 3900,
    },
  },
];

const DecodeJWTPage = () => {
  const [decoded, setDecoded] = useState(null);
  const [rawToken, setRawToken] = useState('');
  const [error, setError] = useState(false);

  const decode = (token) => {
    const result = decodeJWT(token);
    setDecoded(result);
    setError(!result);
  };

  const loadPreset = ({ payload }) => {
    const token = makeJWT(payload);
    setRawToken(token);
    decode(token);
  };

  return (
    <StoryPage $bg={indigo.m50}>
      <MaxWidth>
        <Card $accent={indigo.m500}>
          <CardHeader $bg='#fff' $border={indigo.m100}>
            <div>
              <FnName $color={indigo.m900} $bg={indigo.m100}>
                decodeJWT
              </FnName>
              <Signature>(token) → payload | null</Signature>
            </div>
            <Description>
              Splits the token on <Code>.</Code>, base64-decodes the payload segment, and returns
              the parsed object. Returns <Code>null</Code> for any malformed input — it does{' '}
              <strong>not</strong> verify the signature.
            </Description>
          </CardHeader>
          <CardBody>
            <div>
              <SectionLabel $color={indigo.m700}>
                Demo — pick a preset or paste your own JWT
              </SectionLabel>
              <DemoRow style={{ marginBottom: '1.2rem' }}>
                {PRESET_TOKENS.map((p) => (
                  <DemoButton key={p.label} $bg={indigo.m500} onClick={() => loadPreset(p)}>
                    {p.label}
                  </DemoButton>
                ))}
              </DemoRow>
              <textarea
                rows={3}
                value={rawToken}
                onChange={(e) => {
                  setRawToken(e.target.value);
                  decode(e.target.value);
                }}
                placeholder='Paste a JWT here…'
                style={{
                  width: '100%',
                  padding: '1rem 1.2rem',
                  fontSize: '1.2rem',
                  border: `2px solid ${indigo.m200}`,
                  borderRadius: 8,
                  outline: 'none',
                  fontFamily: 'monospace',
                  resize: 'vertical',
                  boxSizing: 'border-box',
                }}
              />
              {decoded && (
                <OutputBox $bg={indigo.m50} $border={indigo.m200} $color={indigo.m900}>
                  {JSON.stringify(decoded, null, 2)}
                </OutputBox>
              )}
              {error && rawToken && (
                <OutputBox $bg={red.m50} $border={red.m200} $color={red.m800}>
                  decodeJWT() → null (malformed token)
                </OutputBox>
              )}
              {decoded?.exp && (
                <Badge
                  $bg={decoded.exp > Date.now() / 1000 ? green.m100 : red.m100}
                  $color={decoded.exp > Date.now() / 1000 ? green.m800 : red.m800}
                  style={{ marginTop: '1rem', display: 'inline-block' }}
                >
                  {decoded.exp > Date.now() / 1000 ? 'Token not expired' : 'Token EXPIRED'}
                </Badge>
              )}
            </div>
            <div>
              <SectionLabel $color={indigo.m700}>Usage</SectionLabel>
              <Pre>{`import decodeJWT from 'meticulous-ui/utils/decodeJWT';

const payload = decodeJWT(getToken());
// { sub: 'user_42', name: 'Alice', roles: ['viewer'], exp: 1720000000 }

const isExpired = payload?.exp < Date.now() / 1000;`}</Pre>
            </div>
            <div>
              <SectionLabel $color={indigo.m700}>Source</SectionLabel>
              <Pre>{`const decodeJWT = (token) => {
  try {
    const [, payload] = token.split('.');
    return JSON.parse(atob(payload));
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
// hasPermission — orange
// ═════════════════════════════════════════════════════════════════════════════

const ROLE_PRESETS = [
  { label: 'Viewer only', roles: ['viewer'] },
  { label: 'Editor', roles: ['viewer', 'editor'] },
  { label: 'Admin', roles: ['admin', 'viewer', 'editor'] },
  { label: 'No token', roles: null },
];

const CHECK_ROLES = ['viewer', 'editor', 'admin', 'superadmin'];

const HasPermissionPage = () => {
  const [activePreset, setActivePreset] = useState(null);
  const [results, setResults] = useState({});

  const applyPreset = (preset) => {
    setActivePreset(preset.label);
    if (!preset.roles) {
      removeToken('perm_token');
      const r = {};
      CHECK_ROLES.forEach((role) => {
        r[role] = hasPermission(role, 'perm_token');
      });
      setResults(r);
    } else {
      const token = makeJWT({
        sub: 'user_1',
        roles: preset.roles,
        exp: Math.floor(Date.now() / 1000) + 3600,
      });
      setToken(token, 'perm_token');
      const r = {};
      CHECK_ROLES.forEach((role) => {
        r[role] = hasPermission(role, 'perm_token');
      });
      setResults(r);
    }
  };

  return (
    <StoryPage $bg={orange.m50}>
      <MaxWidth>
        <Card $accent={orange.m500}>
          <CardHeader $bg='#fff' $border={orange.m100}>
            <div>
              <FnName $color={orange.m900} $bg={orange.m100}>
                hasPermission
              </FnName>
              <Signature>(role, key = &apos;auth_token&apos;) → boolean</Signature>
            </div>
            <Description>
              Decodes the stored JWT and checks whether the <Code>roles</Code> (or <Code>role</Code>
              ) claim contains the requested role. Returns <Code>false</Code> if no token is
              present, the token is invalid, or the role is not in the claim.
            </Description>
          </CardHeader>
          <CardBody>
            <div>
              <SectionLabel $color={orange.m700}>
                Demo — choose a user preset, then see which roles pass
              </SectionLabel>
              <DemoRow style={{ marginBottom: '1.6rem' }}>
                {ROLE_PRESETS.map((p) => (
                  <DemoButton
                    key={p.label}
                    $bg={activePreset === p.label ? orange.m600 : orange.m400}
                    onClick={() => applyPreset(p)}
                  >
                    {p.label}
                  </DemoButton>
                ))}
              </DemoRow>
              {Object.keys(results).length > 0 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                  {CHECK_ROLES.map((role) => {
                    const allowed = results[role];
                    return (
                      <div
                        key={role}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '1.2rem',
                          padding: '0.9rem 1.4rem',
                          borderRadius: 8,
                          background: allowed ? green.m50 : red.m50,
                          border: `1.5px solid ${allowed ? green.m200 : red.m200}`,
                        }}
                      >
                        <Code style={{ minWidth: '10rem' }}>{role}</Code>
                        <Badge
                          $bg={allowed ? green.m200 : red.m100}
                          $color={allowed ? green.m900 : red.m800}
                        >
                          {allowed ? 'allowed' : 'denied'}
                        </Badge>
                        <span
                          style={{
                            fontSize: '1.2rem',
                            color: blueGray.m400,
                            fontFamily: 'monospace',
                          }}
                        >
                          hasPermission(&apos;{role}&apos;) → {String(allowed)}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <div>
              <SectionLabel $color={orange.m700}>Usage</SectionLabel>
              <Pre>{`import hasPermission from 'meticulous-ui/utils/hasPermission';

// guard a component
{hasPermission('admin') && <AdminPanel />}

// guard an action
const handleDelete = () => {
  if (!hasPermission('editor')) return toast.error('Access denied');
  deleteItem(id);
};`}</Pre>
            </div>
            <div>
              <SectionLabel $color={orange.m700}>Source</SectionLabel>
              <Pre>{`import decodeJWT from './decodeJWT';
import getToken   from './getToken';

const hasPermission = (role, key = 'auth_token') => {
  const token = getToken(key);
  if (!token) return false;
  const payload = decodeJWT(token);
  if (!payload) return false;
  const roles = payload.roles ?? payload.role ?? [];
  return Array.isArray(roles) ? roles.includes(role) : roles === role;
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
  title: 'Utilities/Auth Utilities',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    layout: 'fullscreen',
  },
};

export const IsAuthenticated = () => <IsAuthenticatedPage />;
IsAuthenticated.storyName = 'isAuthenticated';

export const TokenManagement = () => <TokenManagementPage />;
TokenManagement.storyName = 'getToken / setToken / removeToken';

export const DecodeJWT = () => <DecodeJWTPage />;
DecodeJWT.storyName = 'decodeJWT';

export const HasPermission = () => <HasPermissionPage />;
HasPermission.storyName = 'hasPermission';
