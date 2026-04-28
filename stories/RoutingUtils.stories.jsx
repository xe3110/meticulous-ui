import { useState, useEffect } from 'react';
import styled from 'styled-components';

import blueGray from '../src/colors/blueGray';
import teal from '../src/colors/teal';
import indigo from '../src/colors/indigo';
import deepOrange from '../src/colors/deepOrange';
import green from '../src/colors/green';
import blue from '../src/colors/blue';
import grey from '../src/colors/grey';
import purple from '../src/colors/purple';

import getQueryParams from '../src/utils/getQueryParams';
import setQueryParam from '../src/utils/setQueryParam';
import removeQueryParam from '../src/utils/removeQueryParam';
import buildURL from '../src/utils/buildURL';
import redirectTo from '../src/utils/redirectTo';
import getCurrentPath from '../src/utils/getCurrentPath';
import isActiveRoute from '../src/utils/isActiveRoute';

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
  min-width: 10rem;
  box-sizing: border-box;
  font-family: monospace;
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
  font-family: monospace;
  word-break: break-all;
`;

const ParamTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1.3rem;
`;

const PTh = styled.th`
  text-align: left;
  padding: 1rem 1.4rem;
  background: ${blueGray.m50};
  color: ${blueGray.m500};
  font-weight: 600;
  font-size: 1.2rem;
  border: 1px solid ${blueGray.m100};
`;

const PTd = styled.td`
  padding: 1rem 1.4rem;
  border: 1px solid ${blueGray.m100};
  font-family: monospace;
`;

const URLBar = styled.div`
  background: ${blueGray.m900};
  color: #68d391;
  font-family: monospace;
  font-size: 1.3rem;
  padding: 1.2rem 1.8rem;
  border-radius: 8px;
  word-break: break-all;
  line-height: 1.7;
`;

const Pill = styled.span`
  display: inline-block;
  padding: 0.4rem 1.2rem;
  border-radius: 999px;
  font-size: 1.3rem;
  font-weight: 700;
  background: ${({ $bg }) => $bg};
  color: ${({ $color }) => $color};
`;

const Note = styled.p`
  font-size: 1.25rem;
  color: ${blueGray.m400};
  margin: 0.8rem 0 0;
  font-style: italic;
`;

// ═════════════════════════════════════════════════════════════════════════════
// getQueryParams — teal
// ═════════════════════════════════════════════════════════════════════════════

const GetQueryParamsPage = () => {
  const [params, setParams] = useState(getQueryParams);

  const seed = () => {
    setQueryParam('tab', 'overview');
    setQueryParam('page', '1');
    setQueryParam('q', 'meticulous');
    setParams(getQueryParams());
  };

  const clear = () => {
    const url = new URL(window.location.href);
    url.search = '';
    window.history.pushState({}, '', url);
    setParams({});
  };

  const entries = Object.entries(params);

  return (
    <StoryPage $bg={teal.m50}>
      <MaxWidth>
        <Card $accent={teal.m500}>
          <CardHeader $bg='#fff' $border={teal.m100}>
            <div>
              <FnName $color={teal.m900} $bg={teal.m100}>
                getQueryParams
              </FnName>
              <Signature>() → Record&lt;string, string&gt;</Signature>
            </div>
            <Description>
              Parses <Code>window.location.search</Code> with <Code>URLSearchParams</Code> and
              returns all query parameters as a plain object. Returns an empty object when there are
              no params.
            </Description>
          </CardHeader>
          <CardBody>
            <div>
              <SectionLabel $color={teal.m700}>Demo</SectionLabel>
              <URLBar>{window.location.href}</URLBar>
              <DemoRow style={{ marginTop: '1.2rem' }}>
                <DemoButton $bg={teal.m500} onClick={seed}>
                  Seed ?tab=overview&amp;page=1&amp;q=meticulous
                </DemoButton>
                <DemoButton $bg={blueGray.m400} onClick={clear} disabled={entries.length === 0}>
                  Clear params
                </DemoButton>
              </DemoRow>
              <div style={{ marginTop: '1.6rem' }}>
                {entries.length > 0 ? (
                  <ParamTable>
                    <thead>
                      <tr>
                        <PTh>Key</PTh>
                        <PTh>Value</PTh>
                      </tr>
                    </thead>
                    <tbody>
                      {entries.map(([k, v]) => (
                        <tr key={k}>
                          <PTd style={{ color: teal.m700 }}>{k}</PTd>
                          <PTd>{v}</PTd>
                        </tr>
                      ))}
                    </tbody>
                  </ParamTable>
                ) : (
                  <Note>No query params in the current URL.</Note>
                )}
              </div>
            </div>
            <div>
              <SectionLabel $color={teal.m700}>Usage</SectionLabel>
              <Pre>{`import getQueryParams from 'meticulous-ui/utils/getQueryParams';

// URL: /search?tab=overview&page=1&q=meticulous
const params = getQueryParams();
// { tab: 'overview', page: '1', q: 'meticulous' }

const { tab = 'home', page = '1' } = getQueryParams();`}</Pre>
            </div>
          </CardBody>
        </Card>
      </MaxWidth>
    </StoryPage>
  );
};

// ═════════════════════════════════════════════════════════════════════════════
// setQueryParam — indigo
// ═════════════════════════════════════════════════════════════════════════════

const SetQueryParamPage = () => {
  const [key, setKey] = useState('tab');
  const [value, setValue] = useState('settings');
  const [currentURL, setCurrentURL] = useState(window.location.href);

  const handleSet = () => {
    setQueryParam(key, value);
    setCurrentURL(window.location.href);
  };

  return (
    <StoryPage $bg={indigo.m50}>
      <MaxWidth>
        <Card $accent={indigo.m500}>
          <CardHeader $bg='#fff' $border={indigo.m100}>
            <div>
              <FnName $color={indigo.m900} $bg={indigo.m100}>
                setQueryParam
              </FnName>
              <Signature>(key, value) → void</Signature>
            </div>
            <Description>
              Adds or updates a single query parameter using <Code>history.pushState</Code> — no
              page reload. Existing params are preserved; only the specified key is changed.
            </Description>
          </CardHeader>
          <CardBody>
            <div>
              <SectionLabel $color={indigo.m700}>Demo</SectionLabel>
              <DemoRow>
                <DemoInput
                  $color={indigo.m200}
                  $focusColor={indigo.m500}
                  placeholder='key'
                  value={key}
                  onChange={(e) => setKey(e.target.value)}
                  style={{ maxWidth: '14rem' }}
                />
                <DemoInput
                  $color={indigo.m200}
                  $focusColor={indigo.m500}
                  placeholder='value'
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
                <DemoButton $bg={indigo.m500} onClick={handleSet} disabled={!key}>
                  Set
                </DemoButton>
              </DemoRow>
              <ResultBox $bg={indigo.m50} $color={indigo.m800} style={{ marginTop: '1.6rem' }}>
                {currentURL}
              </ResultBox>
            </div>
            <div>
              <SectionLabel $color={indigo.m700}>Usage</SectionLabel>
              <Pre>{`import setQueryParam from 'meticulous-ui/utils/setQueryParam';

// URL before: /dashboard?view=grid
setQueryParam('tab', 'analytics');
// URL after:  /dashboard?view=grid&tab=analytics

setQueryParam('view', 'list');
// URL after:  /dashboard?view=list&tab=analytics`}</Pre>
            </div>
          </CardBody>
        </Card>
      </MaxWidth>
    </StoryPage>
  );
};

// ═════════════════════════════════════════════════════════════════════════════
// removeQueryParam — deepOrange
// ═════════════════════════════════════════════════════════════════════════════

const RemoveQueryParamPage = () => {
  const [key, setKey] = useState('');
  const [currentURL, setCurrentURL] = useState(window.location.href);

  const params = Object.keys(getQueryParams());

  const seed = () => {
    setQueryParam('filter', 'active');
    setQueryParam('sort', 'asc');
    setQueryParam('page', '2');
    setCurrentURL(window.location.href);
    setKey('');
  };

  const handleRemove = () => {
    removeQueryParam(key);
    setCurrentURL(window.location.href);
    setKey('');
  };

  const liveParams = Object.keys(getQueryParams());

  return (
    <StoryPage $bg={deepOrange.m50}>
      <MaxWidth>
        <Card $accent={deepOrange.m500}>
          <CardHeader $bg='#fff' $border={deepOrange.m100}>
            <div>
              <FnName $color={deepOrange.m900} $bg={deepOrange.m100}>
                removeQueryParam
              </FnName>
              <Signature>(key) → void</Signature>
            </div>
            <Description>
              Deletes a single query parameter from the URL via <Code>history.pushState</Code>
              without reloading the page. All other params are kept intact. No-op when the key
              doesn't exist.
            </Description>
          </CardHeader>
          <CardBody>
            <div>
              <SectionLabel $color={deepOrange.m700}>Demo</SectionLabel>
              <DemoRow style={{ marginBottom: '1.4rem' }}>
                <DemoButton $bg={blueGray.m400} onClick={seed}>
                  Seed ?filter=active&amp;sort=asc&amp;page=2
                </DemoButton>
              </DemoRow>
              <URLBar>{currentURL}</URLBar>
              {liveParams.length > 0 && (
                <DemoRow style={{ marginTop: '1.2rem' }}>
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
              )}
              {liveParams.length > 0 && (
                <DemoRow style={{ marginTop: '0.8rem', gap: '0.8rem' }}>
                  {liveParams.map((k) => (
                    <Pill
                      key={k}
                      $bg={deepOrange.m50}
                      $color={deepOrange.m700}
                      style={{ cursor: 'pointer', border: `1px solid ${deepOrange.m200}` }}
                      onClick={() => setKey(k)}
                    >
                      {k}
                    </Pill>
                  ))}
                </DemoRow>
              )}
            </div>
            <div>
              <SectionLabel $color={deepOrange.m700}>Usage</SectionLabel>
              <Pre>{`import removeQueryParam from 'meticulous-ui/utils/removeQueryParam';

// URL before: /products?filter=active&sort=asc&page=2
removeQueryParam('filter');
// URL after:  /products?sort=asc&page=2`}</Pre>
            </div>
          </CardBody>
        </Card>
      </MaxWidth>
    </StoryPage>
  );
};

// ═════════════════════════════════════════════════════════════════════════════
// buildURL — green
// ═════════════════════════════════════════════════════════════════════════════

const BuildURLPage = () => {
  const [path, setPath] = useState('/products');
  const [paramsText, setParamsText] = useState('category=shoes\nbrand=nike\npage=1');
  const [result, setResult] = useState('');

  const parseParams = (text) => {
    const obj = {};
    text.split('\n').forEach((line) => {
      const [k, ...rest] = line.split('=');
      if (k && rest.length) obj[k.trim()] = rest.join('=').trim();
    });
    return obj;
  };

  const handleBuild = () => {
    const params = parseParams(paramsText);
    setResult(buildURL(path, params));
  };

  return (
    <StoryPage $bg={green.m50}>
      <MaxWidth>
        <Card $accent={green.m500}>
          <CardHeader $bg='#fff' $border={green.m100}>
            <div>
              <FnName $color={green.m900} $bg={green.m100}>
                buildURL
              </FnName>
              <Signature>(path, params?) → string</Signature>
            </div>
            <Description>
              Constructs an absolute URL from a <Code>path</Code> and an optional params object,
              using <Code>URL</Code> and <Code>URLSearchParams</Code>. Values are properly encoded —
              no manual string concatenation needed.
            </Description>
          </CardHeader>
          <CardBody>
            <div>
              <SectionLabel $color={green.m700}>Demo</SectionLabel>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label
                    style={{
                      fontSize: '1.25rem',
                      color: blueGray.m500,
                      display: 'block',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Path
                  </label>
                  <DemoInput
                    $color={green.m200}
                    $focusColor={green.m500}
                    placeholder='/path'
                    value={path}
                    onChange={(e) => setPath(e.target.value)}
                    style={{ width: '100%', maxWidth: '100%' }}
                  />
                </div>
                <div>
                  <label
                    style={{
                      fontSize: '1.25rem',
                      color: blueGray.m500,
                      display: 'block',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Params (one <code>key=value</code> per line)
                  </label>
                  <textarea
                    value={paramsText}
                    onChange={(e) => setParamsText(e.target.value)}
                    rows={4}
                    style={{
                      width: '100%',
                      padding: '0.9rem 1.4rem',
                      fontSize: '1.3rem',
                      fontFamily: 'monospace',
                      border: `2px solid ${green.m200}`,
                      borderRadius: 8,
                      outline: 'none',
                      resize: 'vertical',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>
                <DemoButton
                  $bg={green.m500}
                  onClick={handleBuild}
                  style={{ alignSelf: 'flex-start' }}
                >
                  Build URL
                </DemoButton>
              </div>
              {result && (
                <ResultBox $bg={green.m50} $color={green.m800} style={{ marginTop: '1.2rem' }}>
                  {result}
                </ResultBox>
              )}
            </div>
            <div>
              <SectionLabel $color={green.m700}>Usage</SectionLabel>
              <Pre>{`import buildURL from 'meticulous-ui/utils/buildURL';

buildURL('/products', { category: 'shoes', brand: 'nike', page: 1 });
// 'https://example.com/products?category=shoes&brand=nike&page=1'

buildURL('/search', { q: 'hello world' });
// 'https://example.com/search?q=hello+world'  (auto-encoded)`}</Pre>
            </div>
          </CardBody>
        </Card>
      </MaxWidth>
    </StoryPage>
  );
};

// ═════════════════════════════════════════════════════════════════════════════
// redirectTo — blue
// ═════════════════════════════════════════════════════════════════════════════

const RedirectToPage = () => {
  const [path, setPath] = useState('/dashboard');

  return (
    <StoryPage $bg={blue.m50}>
      <MaxWidth>
        <Card $accent={blue.m500}>
          <CardHeader $bg='#fff' $border={blue.m100}>
            <div>
              <FnName $color={blue.m900} $bg={blue.m100}>
                redirectTo
              </FnName>
              <Signature>(path) → void</Signature>
            </div>
            <Description>
              Sets <Code>window.location.href</Code> to trigger a full navigation to{' '}
              <Code>path</Code>. Use for hard redirects after logout, auth guards, or external URLs.
              For in-app navigation without a reload, prefer your router's <Code>navigate()</Code>.
            </Description>
          </CardHeader>
          <CardBody>
            <div>
              <SectionLabel $color={blue.m700}>Demo</SectionLabel>
              <DemoRow>
                <DemoInput
                  $color={blue.m200}
                  $focusColor={blue.m500}
                  placeholder='/path or https://...'
                  value={path}
                  onChange={(e) => setPath(e.target.value)}
                />
                <DemoButton $bg={blue.m500} onClick={() => redirectTo(path)} disabled={!path}>
                  Redirect
                </DemoButton>
              </DemoRow>
              <Note style={{ marginTop: '1rem' }}>
                ↑ This button will actually navigate. Type a path before clicking.
              </Note>
              <ResultBox $bg={blue.m50} $color={blue.m800} style={{ marginTop: '1rem' }}>
                window.location.href = &quot;{path}&quot;
              </ResultBox>
            </div>
            <div>
              <SectionLabel $color={blue.m700}>Usage</SectionLabel>
              <Pre>{`import redirectTo from 'meticulous-ui/utils/redirectTo';

// hard redirect after logout
function logout() {
  clearSession();
  redirectTo('/login');
}

// redirect to external URL
redirectTo('https://docs.example.com');`}</Pre>
            </div>
          </CardBody>
        </Card>
      </MaxWidth>
    </StoryPage>
  );
};

// ═════════════════════════════════════════════════════════════════════════════
// getCurrentPath — grey
// ═════════════════════════════════════════════════════════════════════════════

const GetCurrentPathPage = () => {
  const [path, setPath] = useState(getCurrentPath);

  useEffect(() => {
    const handler = () => setPath(getCurrentPath());
    window.addEventListener('popstate', handler);
    return () => window.removeEventListener('popstate', handler);
  }, []);

  const simulate = (p) => {
    window.history.pushState({}, '', p);
    setPath(getCurrentPath());
  };

  const routes = ['/home', '/dashboard', '/settings', '/profile'];

  return (
    <StoryPage $bg={grey.m100}>
      <MaxWidth>
        <Card $accent={grey.m600}>
          <CardHeader $bg='#fff' $border={grey.m200}>
            <div>
              <FnName $color={grey.m900} $bg={grey.m200}>
                getCurrentPath
              </FnName>
              <Signature>() → string</Signature>
            </div>
            <Description>
              Returns <Code>window.location.pathname</Code> — the URL path without origin, query
              string, or hash. Useful for conditional rendering and analytics without pulling in a
              full router.
            </Description>
          </CardHeader>
          <CardBody>
            <div>
              <SectionLabel $color={grey.m700}>Live Value</SectionLabel>
              <ResultBox
                $bg={grey.m100}
                $color={grey.m800}
                style={{ fontSize: '1.8rem', fontWeight: 700 }}
              >
                {path}
              </ResultBox>
              <SectionLabel $color={grey.m700} style={{ marginTop: '2rem' }}>
                Simulate navigation
              </SectionLabel>
              <DemoRow>
                {routes.map((r) => (
                  <DemoButton
                    key={r}
                    $bg={path === r ? grey.m700 : grey.m400}
                    onClick={() => simulate(r)}
                  >
                    {r}
                  </DemoButton>
                ))}
              </DemoRow>
            </div>
            <div>
              <SectionLabel $color={grey.m700}>Usage</SectionLabel>
              <Pre>{`import getCurrentPath from 'meticulous-ui/utils/getCurrentPath';

const path = getCurrentPath(); // '/dashboard'

// log page views
analytics.track('page_view', { path: getCurrentPath() });`}</Pre>
            </div>
          </CardBody>
        </Card>
      </MaxWidth>
    </StoryPage>
  );
};

// ═════════════════════════════════════════════════════════════════════════════
// isActiveRoute — purple
// ═════════════════════════════════════════════════════════════════════════════

const IsActiveRoutePage = () => {
  const [currentPath, setCurrentPath] = useState(getCurrentPath);
  const [testPath, setTestPath] = useState('/dashboard');

  const simulate = (p) => {
    window.history.pushState({}, '', p);
    setCurrentPath(getCurrentPath());
  };

  const isActive = isActiveRoute(testPath);

  const navItems = ['/home', '/dashboard', '/settings', '/profile', '/logout'];

  return (
    <StoryPage $bg={purple.m50}>
      <MaxWidth>
        <Card $accent={purple.m500}>
          <CardHeader $bg='#fff' $border={purple.m100}>
            <div>
              <FnName $color={purple.m900} $bg={purple.m100}>
                isActiveRoute
              </FnName>
              <Signature>(path) → boolean</Signature>
            </div>
            <Description>
              Returns <Code>true</Code> when <Code>window.location.pathname</Code> exactly matches{' '}
              <Code>path</Code>. Useful for highlighting active nav items without a router
              dependency.
            </Description>
          </CardHeader>
          <CardBody>
            <div>
              <SectionLabel $color={purple.m700}>Demo — simulate a nav bar</SectionLabel>
              <div
                style={{
                  display: 'flex',
                  gap: '0.4rem',
                  background: purple.m900,
                  padding: '1rem 1.6rem',
                  borderRadius: 10,
                  flexWrap: 'wrap',
                }}
              >
                {navItems.map((r) => (
                  <button
                    key={r}
                    onClick={() => simulate(r)}
                    style={{
                      padding: '0.7rem 1.6rem',
                      borderRadius: 6,
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '1.3rem',
                      fontWeight: 600,
                      background: isActiveRoute(r) ? purple.m400 : 'transparent',
                      color: isActiveRoute(r) ? '#fff' : purple.m200,
                      transition: 'background 0.15s',
                    }}
                  >
                    {r}
                  </button>
                ))}
              </div>
              <div style={{ marginTop: '1.6rem' }}>
                <SectionLabel $color={purple.m700}>Test any path</SectionLabel>
                <DemoRow>
                  <DemoInput
                    $color={purple.m200}
                    $focusColor={purple.m500}
                    placeholder='/path'
                    value={testPath}
                    onChange={(e) => setTestPath(e.target.value)}
                  />
                  <Pill
                    $bg={isActive ? purple.m500 : blueGray.m200}
                    $color='#fff'
                    style={{ fontSize: '1.5rem', padding: '0.7rem 1.8rem' }}
                  >
                    {String(isActive)}
                  </Pill>
                </DemoRow>
                <Note style={{ marginTop: '0.8rem' }}>
                  Current path: <strong>{currentPath}</strong>
                </Note>
              </div>
            </div>
            <div>
              <SectionLabel $color={purple.m700}>Usage</SectionLabel>
              <Pre>{`import isActiveRoute from 'meticulous-ui/utils/isActiveRoute';

// highlight active nav link
<NavLink style={{ fontWeight: isActiveRoute('/dashboard') ? 700 : 400 }}>
  Dashboard
</NavLink>

// guard rendering
if (!isActiveRoute('/onboarding')) {
  redirectTo('/onboarding');
}`}</Pre>
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
  title: 'Utils/Routing Utils',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    layout: 'fullscreen',
  },
};

export const GetQueryParams = () => <GetQueryParamsPage />;
GetQueryParams.storyName = 'getQueryParams';

export const SetQueryParam = () => <SetQueryParamPage />;
SetQueryParam.storyName = 'setQueryParam';

export const RemoveQueryParam = () => <RemoveQueryParamPage />;
RemoveQueryParam.storyName = 'removeQueryParam';

export const BuildURL = () => <BuildURLPage />;
BuildURL.storyName = 'buildURL';

export const RedirectTo = () => <RedirectToPage />;
RedirectTo.storyName = 'redirectTo';

export const GetCurrentPath = () => <GetCurrentPathPage />;
GetCurrentPath.storyName = 'getCurrentPath';

export const IsActiveRoute = () => <IsActiveRoutePage />;
IsActiveRoute.storyName = 'isActiveRoute';
