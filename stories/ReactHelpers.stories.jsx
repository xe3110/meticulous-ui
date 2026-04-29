import { useState, useRef, useEffect, memo, Suspense, createRef } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

import blueGray from '../src/colors/blueGray';
import indigo from '../src/colors/indigo';
import teal from '../src/colors/teal';
import deepOrange from '../src/colors/deepOrange';
import red from '../src/colors/red';
import purple from '../src/colors/purple';
import green from '../src/colors/green';
import amber from '../src/colors/amber';

import createContextHook from '../src/reactUtils/createContextHook';
import composeProviders from '../src/reactUtils/composeProviders.jsx';
import withErrorBoundary from '../src/reactUtils/withErrorBoundary.jsx';
import withSuspense from '../src/reactUtils/withSuspense.jsx';
import memoCompare from '../src/reactUtils/memoCompare';

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

const DemoBox = styled.div`
  background: ${({ $bg }) => $bg};
  border-radius: 10px;
  padding: 2rem 2.4rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;
  flex-wrap: wrap;
`;

const Btn = styled.button`
  padding: 0.7rem 1.6rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 600;
  background: ${({ $bg }) => $bg};
  color: #fff;
`;

const Tag = styled.span`
  display: inline-block;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 1.25rem;
  font-weight: 700;
  background: ${({ $bg }) => $bg};
  color: ${({ $color }) => $color};
`;

// ═════════════════════════════════════════════════════════════════════════════
// createContextHook — indigo
// ═════════════════════════════════════════════════════════════════════════════

const [ThemeProvider, useTheme] = createContextHook(undefined);

const ThemedBox = () => {
  const { color, label } = useTheme();
  return (
    <Tag $bg={color} $color='#fff' style={{ fontSize: '1.35rem', padding: '0.6rem 1.4rem' }}>
      Theme: {label}
    </Tag>
  );
};

const CreateContextHookDemo = () => {
  const [theme, setTheme] = useState({ color: indigo.m500, label: 'indigo' });
  const themes = [
    { color: indigo.m500, label: 'indigo' },
    { color: teal.m500, label: 'teal' },
    { color: deepOrange.m500, label: 'deepOrange' },
  ];
  return (
    <DemoBox $bg={indigo.m50} style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', gap: '0.8rem' }}>
        {themes.map((t) => (
          <Btn key={t.label} $bg={t.color} onClick={() => setTheme(t)}>
            {t.label}
          </Btn>
        ))}
      </div>
      <ThemeProvider value={theme}>
        <ThemedBox />
      </ThemeProvider>
    </DemoBox>
  );
};

const CreateContextHookPage = () => (
  <StoryPage $bg={indigo.m50}>
    <MaxWidth>
      <Card $accent={indigo.m500}>
        <CardHeader $bg='#fff' $border={indigo.m100}>
          <div>
            <FnName $color={indigo.m900} $bg={indigo.m100}>
              createContextHook
            </FnName>
            <Signature>(defaultValue?: T) → [Provider, useContext]</Signature>
          </div>
          <Description>
            Creates a React context and returns a co-located <Code>Provider</Code> and a typed{' '}
            <Code>useContext</Code> hook. The hook throws a descriptive error when consumed outside
            its Provider, making missing-provider bugs immediately obvious.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={indigo.m700}>Demo</SectionLabel>
            <CreateContextHookDemo />
          </div>
          <div>
            <SectionLabel $color={indigo.m700}>Usage</SectionLabel>
            <Pre>{`import createContextHook from 'meticulous-ui/reactUtils/createContextHook';

const [AuthProvider, useAuth] = createContextHook(undefined);

// Wrap your app
function App() {
  return (
    <AuthProvider value={{ user, logout }}>
      <Router />
    </AuthProvider>
  );
}

// Consume anywhere inside the tree
function Avatar() {
  const { user } = useAuth();  // throws if used outside AuthProvider
  return <img src={user.avatar} />;
}`}</Pre>
          </div>
          <div>
            <SectionLabel $color={indigo.m700}>Source</SectionLabel>
            <Pre>{`const createContextHook = (defaultValue) => {
  const Context = createContext(defaultValue);

  const useCtx = () => {
    const value = useContext(Context);
    if (value === undefined)
      throw new Error('useContext must be used inside its Provider');
    return value;
  };

  return [Context.Provider, useCtx];
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// composeProviders — teal
// ═════════════════════════════════════════════════════════════════════════════

const [LangProvider, useLang] = createContextHook(undefined);
const [CurrencyProvider, useCurrency] = createContextHook(undefined);
const [ModeProvider, useMode] = createContextHook(undefined);

const AppProviders = composeProviders(
  ({ children }) => <LangProvider value='en-US'>{children}</LangProvider>,
  ({ children }) => <CurrencyProvider value='USD'>{children}</CurrencyProvider>,
  ({ children }) => <ModeProvider value='light'>{children}</ModeProvider>
);

const ContextReader = () => {
  const lang = useLang();
  const currency = useCurrency();
  const mode = useMode();
  return (
    <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
      <Tag $bg={teal.m100} $color={teal.m800}>
        lang: {lang}
      </Tag>
      <Tag $bg={teal.m200} $color={teal.m900}>
        currency: {currency}
      </Tag>
      <Tag $bg={teal.m300} $color={teal.m900}>
        mode: {mode}
      </Tag>
    </div>
  );
};

const ComposeProvidersDemo = () => (
  <DemoBox $bg={teal.m50}>
    <AppProviders>
      <ContextReader />
    </AppProviders>
  </DemoBox>
);

const ComposeProvidersPage = () => (
  <StoryPage $bg={teal.m50}>
    <MaxWidth>
      <Card $accent={teal.m500}>
        <CardHeader $bg='#fff' $border={teal.m100}>
          <div>
            <FnName $color={teal.m900} $bg={teal.m100}>
              composeProviders
            </FnName>
            <Signature>(...providers: ComponentType[]) → ComponentType</Signature>
          </div>
          <Description>
            Takes multiple provider components and returns a single wrapper that nests them
            right-to-left. Eliminates the "provider pyramid of doom" — a deeply nested tree of
            context wrappers at your app's root — without introducing a third-party dependency.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={teal.m700}>Demo</SectionLabel>
            <ComposeProvidersDemo />
          </div>
          <div>
            <SectionLabel $color={teal.m700}>Usage</SectionLabel>
            <Pre>{`import composeProviders from 'meticulous-ui/reactUtils/composeProviders';

// Before — deeply nested
function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <I18nProvider>
          <Router />
        </I18nProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

// After — flat
const AppProviders = composeProviders(AuthProvider, ThemeProvider, I18nProvider);

function App() {
  return (
    <AppProviders>
      <Router />
    </AppProviders>
  );
}`}</Pre>
          </div>
          <div>
            <SectionLabel $color={teal.m700}>Source</SectionLabel>
            <Pre>{`const composeProviders =
  (...providers) =>
  ({ children }) =>
    providers.reduceRight(
      (acc, Provider) => <Provider>{acc}</Provider>,
      children
    );`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// lazyImport — deepOrange
// ═════════════════════════════════════════════════════════════════════════════

const LazyImportPage = () => (
  <StoryPage $bg={deepOrange.m50}>
    <MaxWidth>
      <Card $accent={deepOrange.m500}>
        <CardHeader $bg='#fff' $border={deepOrange.m100}>
          <div>
            <FnName $color={deepOrange.m900} $bg={deepOrange.m100}>
              lazyImport
            </FnName>
            <Signature>
              (factory: () → Promise&lt;module&gt;, name: string) → {'{ [name]: LazyComponent }'}
            </Signature>
          </div>
          <Description>
            Lazily imports a <strong>named export</strong> from a module. React's built-in{' '}
            <Code>lazy()</Code> only works with default exports — <Code>lazyImport</Code> bridges
            that gap by wrapping the named export as a default. Returns an object keyed by{' '}
            <Code>name</Code> for clean destructuring.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={deepOrange.m700}>Usage</SectionLabel>
            <Pre>{`import lazyImport from 'meticulous-ui/reactUtils/lazyImport';

// Named export — normally not supported by React.lazy
const { UserProfile } = lazyImport(() => import('./pages/UserProfile'), 'UserProfile');
const { Dashboard }   = lazyImport(() => import('./pages/Dashboard'),   'Dashboard');

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path='/profile'   element={<UserProfile />} />
        <Route path='/dashboard' element={<Dashboard />}   />
      </Routes>
    </Suspense>
  );
}`}</Pre>
          </div>
          <div>
            <SectionLabel $color={deepOrange.m700}>Source</SectionLabel>
            <Pre>{`import { lazy } from 'react';

const lazyImport = (factory, name) => ({
  [name]: lazy(() =>
    factory().then((module) => ({ default: module[name] }))
  ),
});`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// withErrorBoundary — red
// ═════════════════════════════════════════════════════════════════════════════

const BuggyCounter = ({ shouldThrow }) => {
  if (shouldThrow) throw new Error('Simulated render error');
  return (
    <Tag $bg={green.m100} $color={green.m800}>
      Component rendered OK ✓
    </Tag>
  );
};

const ErrorFallback = ({ error }) => (
  <Tag $bg={red.m100} $color={red.m800}>
    Caught: {error?.message ?? 'Unknown error'}
  </Tag>
);

const SafeCounter = withErrorBoundary(BuggyCounter, ErrorFallback);

const WithErrorBoundaryDemo = () => {
  const [shouldThrow, setShouldThrow] = useState(false);
  const [key, setKey] = useState(0);
  return (
    <DemoBox $bg={red.m50} style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Btn
          $bg={red.m500}
          onClick={() => {
            setShouldThrow(true);
          }}
        >
          Trigger error
        </Btn>
        <Btn
          $bg={blueGray.m500}
          onClick={() => {
            setShouldThrow(false);
            setKey((k) => k + 1);
          }}
        >
          Reset
        </Btn>
      </div>
      <SafeCounter key={key} shouldThrow={shouldThrow} />
    </DemoBox>
  );
};

const WithErrorBoundaryPage = () => (
  <StoryPage $bg={red.m50}>
    <MaxWidth>
      <Card $accent={red.m500}>
        <CardHeader $bg='#fff' $border={red.m100}>
          <div>
            <FnName $color={red.m900} $bg={red.m100}>
              withErrorBoundary
            </FnName>
            <Signature>(Component, FallbackComponent) → Component</Signature>
          </div>
          <Description>
            Higher-order component that wraps <Code>Component</Code> in a class-based error
            boundary. When a render error is thrown, <Code>FallbackComponent</Code> is rendered
            instead and receives the caught <Code>error</Code> as a prop.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={red.m700}>Demo</SectionLabel>
            <WithErrorBoundaryDemo />
          </div>
          <div>
            <SectionLabel $color={red.m700}>Usage</SectionLabel>
            <Pre>{`import withErrorBoundary from 'meticulous-ui/reactUtils/withErrorBoundary';

const ErrorFallback = ({ error }) => (
  <div>Something went wrong: {error.message}</div>
);

const SafeWidget = withErrorBoundary(Widget, ErrorFallback);

// Use SafeWidget exactly like Widget — errors are caught automatically
<SafeWidget userId={id} />`}</Pre>
          </div>
          <div>
            <SectionLabel $color={red.m700}>Source</SectionLabel>
            <Pre>{`class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  render() {
    if (this.state.hasError) {
      const Fallback = this.props.fallback;
      return <Fallback error={this.state.error} />;
    }
    return this.props.children;
  }
}

const withErrorBoundary = (WrappedComponent, FallbackComponent) => {
  const WithErrorBoundary = (props) => (
    <ErrorBoundary fallback={FallbackComponent}>
      <WrappedComponent {...props} />
    </ErrorBoundary>
  );
  WithErrorBoundary.displayName =
    \`withErrorBoundary(\${WrappedComponent.name})\`;
  return WithErrorBoundary;
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// withSuspense — purple
// ═════════════════════════════════════════════════════════════════════════════

const SlowComponent = ({ ready }) => {
  if (!ready) {
    throw new Promise(() => {});
  }
  return (
    <Tag $bg={purple.m100} $color={purple.m800}>
      Content loaded ✓
    </Tag>
  );
};

const SuspenseFallback = () => (
  <Tag $bg={blueGray.m100} $color={blueGray.m600}>
    Loading…
  </Tag>
);

const WithSuspensePage = () => {
  const [ready, setReady] = useState(false);
  const [key, setKey] = useState(0);

  const SafeSlowComponent = withSuspense(SlowComponent, <SuspenseFallback />);

  const simulate = () => {
    setReady(false);
    setKey((k) => k + 1);
    setTimeout(() => setReady(true), 1500);
  };

  return (
    <StoryPage $bg={purple.m50}>
      <MaxWidth>
        <Card $accent={purple.m500}>
          <CardHeader $bg='#fff' $border={purple.m100}>
            <div>
              <FnName $color={purple.m900} $bg={purple.m100}>
                withSuspense
              </FnName>
              <Signature>(Component, fallback?: ReactNode) → Component</Signature>
            </div>
            <Description>
              Higher-order component that wraps <Code>Component</Code> in a{' '}
              <Code>{'<Suspense>'}</Code> boundary. The <Code>fallback</Code> is rendered while the
              component suspends — useful for co-locating loading UI with the component that needs
              it rather than placing <Code>Suspense</Code> manually at every call site.
            </Description>
          </CardHeader>
          <CardBody>
            <div>
              <SectionLabel $color={purple.m700}>Demo</SectionLabel>
              <DemoBox
                $bg={purple.m50}
                style={{ flexDirection: 'column', alignItems: 'flex-start' }}
              >
                <Btn $bg={purple.m600} onClick={simulate}>
                  Simulate suspend (1.5 s)
                </Btn>
                <SafeSlowComponent key={key} ready={ready} />
              </DemoBox>
            </div>
            <div>
              <SectionLabel $color={purple.m700}>Usage</SectionLabel>
              <Pre>{`import withSuspense from 'meticulous-ui/reactUtils/withSuspense';

const SafeChart = withSuspense(
  LazyChart,
  <Skeleton width={400} height={300} />
);

// No need for <Suspense> at every usage
function Dashboard() {
  return (
    <section>
      <SafeChart data={data} />
    </section>
  );
}`}</Pre>
            </div>
            <div>
              <SectionLabel $color={purple.m700}>Source</SectionLabel>
              <Pre>{`const withSuspense = (WrappedComponent, fallback = null) => {
  const WithSuspense = (props) => (
    <Suspense fallback={fallback}>
      <WrappedComponent {...props} />
    </Suspense>
  );
  WithSuspense.displayName = \`withSuspense(\${WrappedComponent.name})\`;
  return WithSuspense;
};`}</Pre>
            </div>
          </CardBody>
        </Card>
      </MaxWidth>
    </StoryPage>
  );
};

// ═════════════════════════════════════════════════════════════════════════════
// memoCompare — green
// ═════════════════════════════════════════════════════════════════════════════

const RenderCounter = memoCompare(
  ({ value }) => {
    const renders = useRef(0);
    renders.current += 1;
    return (
      <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
        <Tag $bg={green.m100} $color={green.m800}>
          value: {value}
        </Tag>
        <Tag $bg={blueGray.m100} $color={blueGray.m600}>
          renders: {renders.current}
        </Tag>
      </div>
    );
  },
  (prev, next) => Math.floor(prev.value / 10) === Math.floor(next.value / 10)
);

const MemoCompareDemo = () => {
  const [val, setVal] = useState(5);
  return (
    <DemoBox $bg={green.m50} style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Btn $bg={green.m600} onClick={() => setVal((v) => v - 1)}>
          −1
        </Btn>
        <Btn $bg={green.m600} onClick={() => setVal((v) => v + 1)}>
          +1
        </Btn>
        <Btn $bg={green.m400} onClick={() => setVal((v) => v + 10)}>
          +10
        </Btn>
      </div>
      <RenderCounter value={val} />
      <p style={{ margin: 0, fontSize: '1.2rem', color: blueGray.m400 }}>
        Component only re-renders when the value crosses a multiple of 10.
      </p>
    </DemoBox>
  );
};

const MemoComparePage = () => (
  <StoryPage $bg={green.m50}>
    <MaxWidth>
      <Card $accent={green.m500}>
        <CardHeader $bg='#fff' $border={green.m100}>
          <div>
            <FnName $color={green.m900} $bg={green.m100}>
              memoCompare
            </FnName>
            <Signature>(Component, compare: (prev, next) → boolean) → Component</Signature>
          </div>
          <Description>
            A typed wrapper around <Code>React.memo</Code> with a custom comparison function. When{' '}
            <Code>compare</Code> returns <Code>true</Code> the component is <em>not</em>{' '}
            re-rendered. Cleaner than inlining <Code>React.memo(Comp, fn)</Code> at every definition
            site.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={green.m700}>Demo</SectionLabel>
            <MemoCompareDemo />
          </div>
          <div>
            <SectionLabel $color={green.m700}>Usage</SectionLabel>
            <Pre>{`import memoCompare from 'meticulous-ui/reactUtils/memoCompare';

// Only re-render when the 'id' field changes, ignore everything else
const UserCard = memoCompare(
  ({ user }) => <div>{user.name}</div>,
  (prev, next) => prev.user.id === next.user.id
);`}</Pre>
          </div>
          <div>
            <SectionLabel $color={green.m700}>Source</SectionLabel>
            <Pre>{`import { memo } from 'react';

const memoCompare = (Component, compare) => memo(Component, compare);`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// createPortalNode — amber
// ═════════════════════════════════════════════════════════════════════════════

const CreatePortalNodeDemo = () => {
  const [open, setOpen] = useState(false);
  const portalNodeRef = useRef(null);

  useEffect(() => {
    const node = document.createElement('div');
    node.setAttribute('data-portal', 'demo');
    document.body.appendChild(node);
    portalNodeRef.current = node;
    return () => node.remove();
  }, []);

  return (
    <DemoBox $bg={amber.m50} style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
      <Btn $bg={amber.m700} onClick={() => setOpen((v) => !v)}>
        {open ? 'Remove portal' : 'Render into portal'}
      </Btn>
      <p style={{ margin: 0, fontSize: '1.2rem', color: blueGray.m400 }}>
        The element below is rendered via <Code>createPortal</Code> — it lives in{' '}
        <Code>document.body</Code>, not inside this card's DOM tree.
      </p>
      {open &&
        portalNodeRef.current &&
        createPortal(
          <div
            style={{
              position: 'fixed',
              bottom: '2rem',
              right: '2rem',
              background: amber.m700,
              color: '#fff',
              padding: '1rem 2rem',
              borderRadius: '8px',
              fontFamily: 'sans-serif',
              fontSize: '1.3rem',
              fontWeight: 700,
              boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
              zIndex: 9999,
            }}
          >
            I am in a portal node ✓
          </div>,
          portalNodeRef.current
        )}
    </DemoBox>
  );
};

const CreatePortalNodePage = () => (
  <StoryPage $bg={amber.m50}>
    <MaxWidth>
      <Card $accent={amber.m700}>
        <CardHeader $bg='#fff' $border={amber.m200}>
          <div>
            <FnName $color={amber.m900} $bg={amber.m200}>
              createPortalNode
            </FnName>
            <Signature>(tagName?: string) → HTMLElement</Signature>
          </div>
          <Description>
            Creates a new DOM element with the given <Code>tagName</Code> (default{' '}
            <Code>'div'</Code>), appends it to <Code>document.body</Code>, and returns it. Use it as
            the <Code>container</Code> argument for <Code>ReactDOM.createPortal</Code> to render
            modals, toasts, or tooltips outside the normal component tree.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={amber.m800}>Demo</SectionLabel>
            <CreatePortalNodeDemo />
          </div>
          <div>
            <SectionLabel $color={amber.m800}>Usage</SectionLabel>
            <Pre>{`import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import createPortalNode from 'meticulous-ui/reactUtils/createPortalNode';

function Modal({ children, onClose }) {
  const nodeRef = useRef(null);

  useEffect(() => {
    nodeRef.current = createPortalNode();
    return () => nodeRef.current?.remove();
  }, []);

  return nodeRef.current
    ? createPortal(
        <div className='modal-overlay' onClick={onClose}>
          {children}
        </div>,
        nodeRef.current
      )
    : null;
}`}</Pre>
          </div>
          <div>
            <SectionLabel $color={amber.m800}>Source</SectionLabel>
            <Pre>{`const createPortalNode = (tagName = 'div') => {
  const node = document.createElement(tagName);
  document.body.appendChild(node);
  return node;
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
  title: 'React Utilities/React Helper Functions',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    layout: 'fullscreen',
  },
};

export const CreateContextHook = () => <CreateContextHookPage />;
CreateContextHook.storyName = 'createContextHook';

export const ComposeProviders = () => <ComposeProvidersPage />;
ComposeProviders.storyName = 'composeProviders';

export const LazyImport = () => <LazyImportPage />;
LazyImport.storyName = 'lazyImport';

export const WithErrorBoundary = () => <WithErrorBoundaryPage />;
WithErrorBoundary.storyName = 'withErrorBoundary';

export const WithSuspense = () => <WithSuspensePage />;
WithSuspense.storyName = 'withSuspense';

export const MemoCompare = () => <MemoComparePage />;
MemoCompare.storyName = 'memoCompare';

export const CreatePortalNode = () => <CreatePortalNodePage />;
CreatePortalNode.storyName = 'createPortalNode';
