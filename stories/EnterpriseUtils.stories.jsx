import { useState } from 'react';
import styled from 'styled-components';

import blueGray from '../src/colors/blueGray';
import indigo from '../src/colors/indigo';
import blue from '../src/colors/blue';
import teal from '../src/colors/teal';
import amber from '../src/colors/amber';
import green from '../src/colors/green';
import deepOrange from '../src/colors/deepOrange';
import lightBlue from '../src/colors/lightBlue';
import orange from '../src/colors/orange';
import red from '../src/colors/red';
import white from '../src/colors/white';

import trackEvent from '../src/utils/trackEvent';
import trackPageView from '../src/utils/trackPageView';
import measurePerformance from '../src/utils/measurePerformance';
import featureGate from '../src/utils/featureGate';
import permissionGuard from '../src/utils/permissionGuard';
import auditLog from '../src/utils/auditLog';
import logInfo from '../src/utils/logInfo';
import logWarn from '../src/utils/logWarn';
import captureException from '../src/utils/captureException';

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

const DemoBox = styled.div`
  background: ${({ $bg }) => $bg};
  border-radius: 10px;
  padding: 2rem 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const Btn = styled.button`
  align-self: flex-start;
  padding: 0.7rem 1.6rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 600;
  background: ${({ $bg }) => $bg};
  color: ${white};
`;

const JsonOut = styled.pre`
  background: ${({ $bg }) => $bg};
  border: 1px solid ${({ $border }) => $border};
  border-radius: 8px;
  padding: 1.2rem 1.6rem;
  font-size: 1.2rem;
  line-height: 1.7;
  color: ${({ $color }) => $color};
  margin: 0;
  overflow-x: auto;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  display: inline-block;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 1.2rem;
  font-weight: 700;
  background: ${({ $bg }) => $bg};
  color: ${({ $color }) => $color};
`;

const Input = styled.input`
  padding: 0.6rem 1.2rem;
  border: 2px solid ${({ $border }) => $border};
  border-radius: 6px;
  font-size: 1.3rem;
  outline: none;
  width: 200px;
`;

// ═════════════════════════════════════════════════════════════════════════════
// trackEvent — indigo
// ═════════════════════════════════════════════════════════════════════════════

const TrackEventDemo = () => {
  const [result, setResult] = useState(null);
  const fire = (name, payload) => setResult(trackEvent(name, payload));
  return (
    <DemoBox $bg={indigo.m50}>
      <Row>
        <Btn
          $bg={indigo.m600}
          onClick={() => fire('button_click', { id: 'cta', label: 'Sign Up' })}
        >
          Track button_click
        </Btn>
        <Btn $bg={indigo.m400} onClick={() => fire('purchase', { item: 'Pro Plan', amount: 49 })}>
          Track purchase
        </Btn>
      </Row>
      {result && (
        <JsonOut $bg={white} $border={indigo.m100} $color={indigo.m800}>
          {JSON.stringify(result, null, 2)}
        </JsonOut>
      )}
    </DemoBox>
  );
};

const TrackEventPage = () => (
  <StoryPage $bg={indigo.m50}>
    <MaxWidth>
      <Card $accent={indigo.m500}>
        <CardHeader $bg={white} $border={indigo.m100}>
          <div>
            <FnName $color={indigo.m900} $bg={indigo.m100}>
              trackEvent
            </FnName>
            <Signature>(name: string, payload?: object) → EventEntry</Signature>
          </div>
          <Description>
            Records an analytics event with a name, payload, and ISO timestamp. Delegates to{' '}
            <Code>window.__analytics.track</Code> when available — otherwise logs to the console.
            Returns the full event object so callers can inspect or forward it.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={indigo.m700}>Demo</SectionLabel>
            <TrackEventDemo />
          </div>
          <div>
            <SectionLabel $color={indigo.m700}>Usage</SectionLabel>
            <Pre>{`import trackEvent from 'meticulous-ui/utils/trackEvent';

// Wire up your analytics provider once
window.__analytics = { track: (e) => mixpanel.track(e.name, e.payload) };

// Fire events anywhere
trackEvent('button_click', { id: 'hero-cta', label: 'Get Started' });
trackEvent('purchase',     { plan: 'Pro', amount: 49, currency: 'USD' });`}</Pre>
          </div>
          <div>
            <SectionLabel $color={indigo.m700}>Source</SectionLabel>
            <Pre>{`const trackEvent = (name, payload = {}) => {
  const event = { name, payload, timestamp: new Date().toISOString() };
  if (typeof window !== 'undefined' && typeof window.__analytics?.track === 'function') {
    window.__analytics.track(event);
  } else {
    console.log('[trackEvent]', event);
  }
  return event;
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// trackPageView — blue
// ═════════════════════════════════════════════════════════════════════════════

const TrackPageViewDemo = () => {
  const [result, setResult] = useState(null);
  const paths = ['/home', '/pricing', '/dashboard'];
  return (
    <DemoBox $bg={blue.m50}>
      <Row>
        {paths.map((p) => (
          <Btn key={p} $bg={blue.m600} onClick={() => setResult(trackPageView(p))}>
            {p}
          </Btn>
        ))}
      </Row>
      {result && (
        <JsonOut $bg={white} $border={blue.m100} $color={blue.m800}>
          {JSON.stringify(result, null, 2)}
        </JsonOut>
      )}
    </DemoBox>
  );
};

const TrackPageViewPage = () => (
  <StoryPage $bg={blue.m50}>
    <MaxWidth>
      <Card $accent={blue.m500}>
        <CardHeader $bg={white} $border={blue.m100}>
          <div>
            <FnName $color={blue.m900} $bg={blue.m100}>
              trackPageView
            </FnName>
            <Signature>(path: string) → PageViewEntry</Signature>
          </div>
          <Description>
            Records a page view with the given <Code>path</Code>, the current{' '}
            <Code>document.referrer</Code>, and an ISO timestamp. Delegates to{' '}
            <Code>window.__analytics.page</Code> when available. Use inside a router's navigation
            listener for SPA page tracking.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={blue.m700}>Demo</SectionLabel>
            <TrackPageViewDemo />
          </div>
          <div>
            <SectionLabel $color={blue.m700}>Usage</SectionLabel>
            <Pre>{`import trackPageView from 'meticulous-ui/utils/trackPageView';

// React Router v6
useEffect(() => {
  trackPageView(location.pathname);
}, [location.pathname]);`}</Pre>
          </div>
          <div>
            <SectionLabel $color={blue.m700}>Source</SectionLabel>
            <Pre>{`const trackPageView = (path) => {
  const view = {
    path,
    timestamp: new Date().toISOString(),
    referrer: typeof document !== 'undefined' ? document.referrer || null : null,
  };
  if (typeof window !== 'undefined' && typeof window.__analytics?.page === 'function') {
    window.__analytics.page(view);
  } else {
    console.log('[trackPageView]', view);
  }
  return view;
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// measurePerformance — teal
// ═════════════════════════════════════════════════════════════════════════════

const MeasurePerformanceDemo = () => {
  const [result, setResult] = useState(null);

  const run = (metric) => {
    // Mark a real entry so the API can find it
    performance.clearMarks(metric);
    performance.mark(metric);
    performance.measure(metric, metric);
    setResult(measurePerformance(metric));
  };

  return (
    <DemoBox $bg={teal.m50}>
      <Row>
        {['first-paint', 'api-call', 'render'].map((m) => (
          <Btn key={m} $bg={teal.m600} onClick={() => run(m)}>
            Measure "{m}"
          </Btn>
        ))}
      </Row>
      {result && (
        <JsonOut $bg={white} $border={teal.m100} $color={teal.m800}>
          {JSON.stringify(result, null, 2)}
        </JsonOut>
      )}
    </DemoBox>
  );
};

const MeasurePerformancePage = () => (
  <StoryPage $bg={teal.m50}>
    <MaxWidth>
      <Card $accent={teal.m500}>
        <CardHeader $bg={white} $border={teal.m100}>
          <div>
            <FnName $color={teal.m900} $bg={teal.m100}>
              measurePerformance
            </FnName>
            <Signature>(metric: string) → PerformanceEntry</Signature>
          </div>
          <Description>
            Reads a named entry from the browser's <Code>PerformanceObserver</Code> timeline and
            returns its <Code>duration</Code> and <Code>startTime</Code>. Reports to{' '}
            <Code>window.__performanceReporter</Code> when wired up — otherwise logs to console. Use
            alongside <Code>performance.mark</Code> and <Code>performance.measure</Code>.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={teal.m700}>Demo</SectionLabel>
            <MeasurePerformanceDemo />
          </div>
          <div>
            <SectionLabel $color={teal.m700}>Usage</SectionLabel>
            <Pre>{`import measurePerformance from 'meticulous-ui/utils/measurePerformance';

// Mark start / end around work
performance.mark('data-fetch-start');
const data = await fetchData();
performance.mark('data-fetch-end');
performance.measure('data-fetch', 'data-fetch-start', 'data-fetch-end');

// Report
measurePerformance('data-fetch');
// → { metric: 'data-fetch', duration: 142.3, startTime: 580.1, timestamp: '…' }`}</Pre>
          </div>
          <div>
            <SectionLabel $color={teal.m700}>Source</SectionLabel>
            <Pre>{`const measurePerformance = (metric) => {
  const entry =
    typeof performance !== 'undefined'
      ? performance.getEntriesByName(metric)[0] ?? null
      : null;
  const result = {
    metric,
    duration: entry?.duration ?? null,
    startTime: entry?.startTime ?? null,
    timestamp: new Date().toISOString(),
  };
  if (typeof window !== 'undefined' && typeof window.__performanceReporter === 'function') {
    window.__performanceReporter(result);
  } else {
    console.log('[measurePerformance]', result);
  }
  return result;
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// featureGate — amber
// ═════════════════════════════════════════════════════════════════════════════

const FeatureGateDemo = () => {
  const [flags, setFlags] = useState({ darkMode: true, betaEditor: false, newDashboard: true });
  const toggle = (f) => {
    const next = { ...flags, [f]: !flags[f] };
    window.__featureFlags = next;
    setFlags(next);
  };

  // sync to window so featureGate can read it
  window.__featureFlags = flags;

  return (
    <DemoBox $bg={amber.m50}>
      <Row style={{ flexWrap: 'wrap' }}>
        {Object.entries(flags).map(([flag, enabled]) => (
          <div key={flag} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <Btn $bg={enabled ? amber.m700 : blueGray.m400} onClick={() => toggle(flag)}>
              {flag}
            </Btn>
            <Tag
              $bg={featureGate(flag) ? amber.m100 : blueGray.m100}
              $color={featureGate(flag) ? amber.m900 : blueGray.m500}
            >
              {featureGate(flag) ? 'enabled' : 'disabled'}
            </Tag>
          </div>
        ))}
      </Row>
    </DemoBox>
  );
};

const FeatureGatePage = () => (
  <StoryPage $bg={amber.m50}>
    <MaxWidth>
      <Card $accent={amber.m700}>
        <CardHeader $bg={white} $border={amber.m200}>
          <div>
            <FnName $color={amber.m900} $bg={amber.m200}>
              featureGate
            </FnName>
            <Signature>(flag: string) → boolean</Signature>
          </div>
          <Description>
            Returns <Code>true</Code> when the named flag is truthy in{' '}
            <Code>window.__featureFlags</Code>. Wire up your feature-flag provider (LaunchDarkly,
            GrowthBook, etc.) once and all calls resolve automatically. Falls back to{' '}
            <Code>false</Code> when no flags registry is present.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={amber.m800}>Demo</SectionLabel>
            <FeatureGateDemo />
          </div>
          <div>
            <SectionLabel $color={amber.m800}>Usage</SectionLabel>
            <Pre>{`import featureGate from 'meticulous-ui/utils/featureGate';

// Bootstrap once (e.g. from your feature-flag SDK)
window.__featureFlags = await launchDarkly.allFlags();

// Gate anywhere in the app
if (featureGate('newDashboard')) {
  return <NewDashboard />;
}
return <OldDashboard />;`}</Pre>
          </div>
          <div>
            <SectionLabel $color={amber.m800}>Source</SectionLabel>
            <Pre>{`const featureGate = (flag) => {
  if (typeof window !== 'undefined' && window.__featureFlags) {
    return Boolean(window.__featureFlags[flag]);
  }
  return false;
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// permissionGuard — green
// ═════════════════════════════════════════════════════════════════════════════

const PermissionGuardDemo = () => {
  const allRoles = ['viewer', 'editor', 'admin'];
  const [activeRoles, setActiveRoles] = useState(['viewer']);

  window.__userRoles = activeRoles;

  const toggle = (r) =>
    setActiveRoles((prev) => (prev.includes(r) ? prev.filter((x) => x !== r) : [...prev, r]));

  return (
    <DemoBox $bg={green.m50}>
      <p style={{ margin: 0, fontSize: '1.25rem', color: blueGray.m500 }}>Toggle active roles:</p>
      <Row>
        {allRoles.map((r) => (
          <Btn
            key={r}
            $bg={activeRoles.includes(r) ? green.m600 : blueGray.m300}
            onClick={() => toggle(r)}
          >
            {r}
          </Btn>
        ))}
      </Row>
      <Row>
        {allRoles.map((r) => (
          <div key={r} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Code style={{ fontSize: '1.2rem' }}>permissionGuard("{r}")</Code>
            <Tag
              $bg={permissionGuard(r) ? green.m100 : red.m50}
              $color={permissionGuard(r) ? green.m800 : red.m600}
            >
              {permissionGuard(r) ? 'true' : 'false'}
            </Tag>
          </div>
        ))}
      </Row>
    </DemoBox>
  );
};

const PermissionGuardPage = () => (
  <StoryPage $bg={green.m50}>
    <MaxWidth>
      <Card $accent={green.m500}>
        <CardHeader $bg={white} $border={green.m100}>
          <div>
            <FnName $color={green.m900} $bg={green.m100}>
              permissionGuard
            </FnName>
            <Signature>(role: string, currentRoles?: string[]) → boolean</Signature>
          </div>
          <Description>
            Returns <Code>true</Code> when <Code>role</Code> is present in{' '}
            <Code>window.__userRoles</Code> (set by your auth provider) or in the optional{' '}
            <Code>currentRoles</Code> array passed directly. Use it to conditionally render UI or
            gate route access without reaching for a full RBAC library.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={green.m700}>Demo</SectionLabel>
            <PermissionGuardDemo />
          </div>
          <div>
            <SectionLabel $color={green.m700}>Usage</SectionLabel>
            <Pre>{`import permissionGuard from 'meticulous-ui/utils/permissionGuard';

// Bootstrap from your auth store
window.__userRoles = user.roles;  // ['editor', 'admin']

// Guard a button
{permissionGuard('admin') && <DeleteButton />}

// Or pass roles directly without window
permissionGuard('editor', user.roles);  // → true`}</Pre>
          </div>
          <div>
            <SectionLabel $color={green.m700}>Source</SectionLabel>
            <Pre>{`const permissionGuard = (role, currentRoles = []) => {
  if (typeof window !== 'undefined' && Array.isArray(window.__userRoles)) {
    return window.__userRoles.includes(role);
  }
  return Array.isArray(currentRoles) && currentRoles.includes(role);
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// auditLog — deepOrange
// ═════════════════════════════════════════════════════════════════════════════

const AuditLogDemo = () => {
  const [entries, setEntries] = useState([]);

  const fire = (action, metadata) => {
    const entry = auditLog(action, metadata);
    setEntries((prev) => [entry, ...prev].slice(0, 4));
  };

  return (
    <DemoBox $bg={deepOrange.m50}>
      <Row>
        <Btn
          $bg={deepOrange.m600}
          onClick={() => fire('user.login', { userId: 'u_42', ip: '192.168.1.1' })}
        >
          user.login
        </Btn>
        <Btn
          $bg={deepOrange.m400}
          onClick={() => fire('record.delete', { recordId: 'r_7', table: 'orders' })}
        >
          record.delete
        </Btn>
        <Btn
          $bg={deepOrange.m800}
          onClick={() => fire('settings.update', { field: 'email', before: 'a@b.com' })}
        >
          settings.update
        </Btn>
      </Row>
      {entries.map((e, i) => (
        <JsonOut key={i} $bg={white} $border={deepOrange.m100} $color={deepOrange.m800}>
          {JSON.stringify(e, null, 2)}
        </JsonOut>
      ))}
    </DemoBox>
  );
};

const AuditLogPage = () => (
  <StoryPage $bg={deepOrange.m50}>
    <MaxWidth>
      <Card $accent={deepOrange.m500}>
        <CardHeader $bg={white} $border={deepOrange.m100}>
          <div>
            <FnName $color={deepOrange.m900} $bg={deepOrange.m100}>
              auditLog
            </FnName>
            <Signature>(action: string, metadata?: object) → AuditEntry</Signature>
          </div>
          <Description>
            Records a compliance-grade audit entry with the action, metadata, ISO timestamp, and the
            current user from <Code>window.__currentUser</Code>. Routes to{' '}
            <Code>window.__auditLogger</Code> when present (e.g. your backend sink), otherwise logs
            to console. Returns the full entry.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={deepOrange.m700}>Demo</SectionLabel>
            <AuditLogDemo />
          </div>
          <div>
            <SectionLabel $color={deepOrange.m700}>Usage</SectionLabel>
            <Pre>{`import auditLog from 'meticulous-ui/utils/auditLog';

// Wire up your audit sink
window.__currentUser  = { id: 'u_42', email: 'alice@corp.com' };
window.__auditLogger  = (entry) => api.post('/audit', entry);

// Log actions throughout your app
auditLog('document.export', { docId: 'd_9', format: 'pdf' });
auditLog('user.impersonate', { targetId: 'u_7' });`}</Pre>
          </div>
          <div>
            <SectionLabel $color={deepOrange.m700}>Source</SectionLabel>
            <Pre>{`const auditLog = (action, metadata = {}) => {
  const entry = {
    action,
    metadata,
    timestamp: new Date().toISOString(),
    user: typeof window !== 'undefined' ? (window.__currentUser ?? null) : null,
  };
  if (typeof window !== 'undefined' && typeof window.__auditLogger === 'function') {
    window.__auditLogger(entry);
  } else {
    console.log('[auditLog]', entry);
  }
  return entry;
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// logInfo — lightBlue
// ═════════════════════════════════════════════════════════════════════════════

const LogInfoDemo = () => {
  const [entries, setEntries] = useState([]);
  const fire = (msg, ctx) => setEntries((p) => [logInfo(msg, ctx), ...p].slice(0, 3));
  return (
    <DemoBox $bg={lightBlue.m50}>
      <Row>
        <Btn
          $bg={lightBlue.m600}
          onClick={() => fire('User signed in', { userId: 'u_1', method: 'oauth' })}
        >
          User signed in
        </Btn>
        <Btn
          $bg={lightBlue.m400}
          onClick={() => fire('Cache hit', { key: 'products:list', age: 42 })}
        >
          Cache hit
        </Btn>
      </Row>
      {entries.map((e, i) => (
        <JsonOut key={i} $bg={white} $border={lightBlue.m100} $color={lightBlue.m800}>
          {JSON.stringify(e, null, 2)}
        </JsonOut>
      ))}
    </DemoBox>
  );
};

const LogInfoPage = () => (
  <StoryPage $bg={lightBlue.m50}>
    <MaxWidth>
      <Card $accent={lightBlue.m500}>
        <CardHeader $bg={white} $border={lightBlue.m100}>
          <div>
            <FnName $color={lightBlue.m900} $bg={lightBlue.m100}>
              logInfo
            </FnName>
            <Signature>(message: string, context?: object) → LogEntry</Signature>
          </div>
          <Description>
            Emits a structured <Code>info</Code>-level log with a message, optional context fields,
            and an ISO timestamp. Routes to <Code>window.__logger.info</Code> when available —
            making it straightforward to swap in any structured logging backend (Datadog, Pino,
            etc.) without touching call sites.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={lightBlue.m700}>Demo</SectionLabel>
            <LogInfoDemo />
          </div>
          <div>
            <SectionLabel $color={lightBlue.m700}>Usage</SectionLabel>
            <Pre>{`import logInfo from 'meticulous-ui/utils/logInfo';

// Wire up your logger once
window.__logger = { info: (e) => datadog.logger.info(e.message, e) };

logInfo('Payment processed', { orderId: 'ord_99', amount: 29.99 });
// → { level: 'info', message: 'Payment processed', orderId: 'ord_99', … }`}</Pre>
          </div>
          <div>
            <SectionLabel $color={lightBlue.m700}>Source</SectionLabel>
            <Pre>{`const logInfo = (message, context = {}) => {
  const entry = { level: 'info', message, ...context, timestamp: new Date().toISOString() };
  if (typeof window !== 'undefined' && typeof window.__logger?.info === 'function') {
    window.__logger.info(entry);
  } else {
    console.info('[logInfo]', entry);
  }
  return entry;
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// logWarn — orange
// ═════════════════════════════════════════════════════════════════════════════

const LogWarnDemo = () => {
  const [entries, setEntries] = useState([]);
  const fire = (msg, ctx) => setEntries((p) => [logWarn(msg, ctx), ...p].slice(0, 3));
  return (
    <DemoBox $bg={orange.m50}>
      <Row>
        <Btn
          $bg={orange.m600}
          onClick={() => fire('Slow query detected', { duration: 2300, table: 'events' })}
        >
          Slow query
        </Btn>
        <Btn
          $bg={orange.m400}
          onClick={() => fire('Deprecation: use v2 API', { endpoint: '/api/v1/users' })}
        >
          Deprecation
        </Btn>
      </Row>
      {entries.map((e, i) => (
        <JsonOut key={i} $bg={white} $border={orange.m100} $color={orange.m800}>
          {JSON.stringify(e, null, 2)}
        </JsonOut>
      ))}
    </DemoBox>
  );
};

const LogWarnPage = () => (
  <StoryPage $bg={orange.m50}>
    <MaxWidth>
      <Card $accent={orange.m600}>
        <CardHeader $bg={white} $border={orange.m100}>
          <div>
            <FnName $color={orange.m900} $bg={orange.m100}>
              logWarn
            </FnName>
            <Signature>(message: string, context?: object) → LogEntry</Signature>
          </div>
          <Description>
            Same shape as <Code>logInfo</Code> but emits at <Code>warn</Code> level. Use it for
            non-fatal anomalies — slow queries, deprecated API usage, rate-limit proximity — that
            need visibility without triggering error alerting pipelines.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={orange.m700}>Demo</SectionLabel>
            <LogWarnDemo />
          </div>
          <div>
            <SectionLabel $color={orange.m700}>Usage</SectionLabel>
            <Pre>{`import logWarn from 'meticulous-ui/utils/logWarn';

logWarn('Rate limit approaching', { used: 980, limit: 1000, endpoint: '/api/search' });
logWarn('Deprecated prop "color" on Button — use "theme" instead');`}</Pre>
          </div>
          <div>
            <SectionLabel $color={orange.m700}>Source</SectionLabel>
            <Pre>{`const logWarn = (message, context = {}) => {
  const entry = { level: 'warn', message, ...context, timestamp: new Date().toISOString() };
  if (typeof window !== 'undefined' && typeof window.__logger?.warn === 'function') {
    window.__logger.warn(entry);
  } else {
    console.warn('[logWarn]', entry);
  }
  return entry;
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// captureException — red
// ═════════════════════════════════════════════════════════════════════════════

const CaptureExceptionDemo = () => {
  const [entries, setEntries] = useState([]);
  const fire = (input) =>
    setEntries((p) => [captureException(input, { source: 'demo' }), ...p].slice(0, 3));
  return (
    <DemoBox $bg={red.m50}>
      <Row>
        <Btn $bg={red.m500} onClick={() => fire(new Error('Network timeout after 5000ms'))}>
          Error object
        </Btn>
        <Btn $bg={red.m300} onClick={() => fire('Unexpected null reference')}>
          String error
        </Btn>
      </Row>
      {entries.map((e, i) => (
        <JsonOut key={i} $bg={white} $border={red.m100} $color={red.m800}>
          {JSON.stringify(e, null, 2)}
        </JsonOut>
      ))}
    </DemoBox>
  );
};

const CaptureExceptionPage = () => (
  <StoryPage $bg={red.m50}>
    <MaxWidth>
      <Card $accent={red.m500}>
        <CardHeader $bg={white} $border={red.m100}>
          <div>
            <FnName $color={red.m900} $bg={red.m100}>
              captureException
            </FnName>
            <Signature>(error: Error | string, context?: object) → ExceptionEntry</Signature>
          </div>
          <Description>
            Normalises an <Code>Error</Code> object or plain string into a structured entry with
            message, stack, timestamp, and any extra context fields. Routes to{' '}
            <Code>window.__captureException</Code> when available (e.g. Sentry, Bugsnag) — otherwise
            logs to console. Returns the full entry.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={red.m700}>Demo</SectionLabel>
            <CaptureExceptionDemo />
          </div>
          <div>
            <SectionLabel $color={red.m700}>Usage</SectionLabel>
            <Pre>{`import captureException from 'meticulous-ui/utils/captureException';

// Wire up your error tracker once
window.__captureException = (entry) => Sentry.captureException(entry);

try {
  await riskyOperation();
} catch (err) {
  captureException(err, { userId: 'u_42', page: '/checkout' });
}`}</Pre>
          </div>
          <div>
            <SectionLabel $color={red.m700}>Source</SectionLabel>
            <Pre>{`const captureException = (error, context = {}) => {
  const entry = {
    message: error instanceof Error ? error.message : String(error),
    stack:   error instanceof Error ? error.stack   : undefined,
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

// ═════════════════════════════════════════════════════════════════════════════
// Story config
// ═════════════════════════════════════════════════════════════════════════════

export default {
  title: 'Utilities/Enterprise Utility Functions',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    layout: 'fullscreen',
  },
};

export const TrackEvent = () => <TrackEventPage />;
TrackEvent.storyName = 'trackEvent';

export const TrackPageView = () => <TrackPageViewPage />;
TrackPageView.storyName = 'trackPageView';

export const MeasurePerformance = () => <MeasurePerformancePage />;
MeasurePerformance.storyName = 'measurePerformance';

export const FeatureGate = () => <FeatureGatePage />;
FeatureGate.storyName = 'featureGate';

export const PermissionGuard = () => <PermissionGuardPage />;
PermissionGuard.storyName = 'permissionGuard';

export const AuditLog = () => <AuditLogPage />;
AuditLog.storyName = 'auditLog';

export const LogInfo = () => <LogInfoPage />;
LogInfo.storyName = 'logInfo';

export const LogWarn = () => <LogWarnPage />;
LogWarn.storyName = 'logWarn';

export const CaptureException = () => <CaptureExceptionPage />;
CaptureException.storyName = 'captureException';
