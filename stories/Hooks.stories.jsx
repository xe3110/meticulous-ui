import { useState, useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';

import blueGray from '../src/colors/blueGray';
import purple from '../src/colors/purple';
import indigo from '../src/colors/indigo';
import teal from '../src/colors/teal';
import green from '../src/colors/green';
import blue from '../src/colors/blue';
import amber from '../src/colors/amber';
import deepOrange from '../src/colors/deepOrange';
import cyan from '../src/colors/cyan';
import red from '../src/colors/red';
import pink from '../src/colors/pink';
import lime from '../src/colors/lime';
import lightBlue from '../src/colors/lightBlue';
import orange from '../src/colors/orange';
import lightGreen from '../src/colors/lightGreen';
import brown from '../src/colors/brown';
import deepPurple from '../src/colors/deepPurple';
import violet from '../src/colors/violet';

import usePrevious from '../src/hooks/usePrevious';
import useDebounce from '../src/hooks/useDebounce';
import useThrottle from '../src/hooks/useThrottle';
import useIsMounted from '../src/hooks/useIsMounted';
import useEventListener from '../src/hooks/useEventListener';
import useIntersectionObserver from '../src/hooks/useIntersectionObserver';
import useMediaQuery from '../src/hooks/useMediaQuery';
import useLocalStorage from '../src/hooks/useLocalStorage';
import useSessionStorage from '../src/hooks/useSessionStorage';
import useOutsideClick from '../src/hooks/useOutsideClick';
import useWindowSize from '../src/hooks/useWindowSize';
import useOnlineStatus from '../src/hooks/useOnlineStatus';
import useCopyToClipboard from '../src/hooks/useCopyToClipboard';
import useToggle from '../src/hooks/useToggle';
import useTimeout from '../src/hooks/useTimeout';
import useInterval from '../src/hooks/useInterval';
import useUnmount from '../src/hooks/useUnmount';
import useFirstRender from '../src/hooks/useFirstRender';

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

const HookName = styled.code`
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
  width: 220px;
`;

// ═════════════════════════════════════════════════════════════════════════════
// usePrevious — purple
// ═════════════════════════════════════════════════════════════════════════════

const UsePreviousDemo = () => {
  const [count, setCount] = useState(0);
  const prev = usePrevious(count);
  return (
    <DemoBox $bg={purple.m50} style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Btn $bg={purple.m600} onClick={() => setCount((c) => c - 1)}>
          −
        </Btn>
        <span
          style={{
            fontSize: '1.6rem',
            fontWeight: 700,
            color: purple.m800,
            minWidth: 32,
            textAlign: 'center',
          }}
        >
          {count}
        </span>
        <Btn $bg={purple.m600} onClick={() => setCount((c) => c + 1)}>
          +
        </Btn>
      </div>
      <p style={{ margin: 0, fontSize: '1.3rem', color: blueGray.m500 }}>
        current: <strong>{count}</strong> &nbsp;|&nbsp; previous:{' '}
        <strong>{prev ?? 'undefined'}</strong>
      </p>
    </DemoBox>
  );
};

const UsePreviousPage = () => (
  <StoryPage $bg={purple.m50}>
    <MaxWidth>
      <Card $accent={purple.m500}>
        <CardHeader $bg='#fff' $border={purple.m100}>
          <div>
            <HookName $color={purple.m900} $bg={purple.m100}>
              usePrevious
            </HookName>
            <Signature>(value: T) → T | undefined</Signature>
          </div>
          <Description>
            Returns the value from the previous render. On the first render it returns{' '}
            <Code>undefined</Code>. Useful for comparing current and previous props or state to
            trigger side effects only when something changes.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={purple.m700}>Demo</SectionLabel>
            <UsePreviousDemo />
          </div>
          <div>
            <SectionLabel $color={purple.m700}>Usage</SectionLabel>
            <Pre>{`import usePrevious from 'meticulous-ui/hooks/usePrevious';

function Counter() {
  const [count, setCount] = useState(0);
  const prev = usePrevious(count);
  // prev holds the value from the last render
}`}</Pre>
          </div>
          <div>
            <SectionLabel $color={purple.m700}>Source</SectionLabel>
            <Pre>{`const usePrevious = (value) => {
  const ref = useRef(undefined);
  useEffect(() => { ref.current = value; });
  return ref.current;
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// useDebounce — indigo
// ═════════════════════════════════════════════════════════════════════════════

const UseDebounceDemo = () => {
  const [text, setText] = useState('');
  const debounced = useDebounce(text, 500);
  return (
    <DemoBox $bg={indigo.m50} style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
      <Input
        $border={indigo.m300}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='Type here…'
      />
      <p style={{ margin: 0, fontSize: '1.3rem', color: blueGray.m500 }}>
        raw: <strong>{text || '—'}</strong> &nbsp;|&nbsp; debounced (500ms):{' '}
        <strong style={{ color: indigo.m700 }}>{debounced || '—'}</strong>
      </p>
    </DemoBox>
  );
};

const UseDebouncePage = () => (
  <StoryPage $bg={indigo.m50}>
    <MaxWidth>
      <Card $accent={indigo.m500}>
        <CardHeader $bg='#fff' $border={indigo.m100}>
          <div>
            <HookName $color={indigo.m900} $bg={indigo.m100}>
              useDebounce
            </HookName>
            <Signature>(value: T, delay: number) → T</Signature>
          </div>
          <Description>
            Returns a debounced copy of <Code>value</Code> that only updates after{' '}
            <Code>delay</Code> ms of inactivity. Ideal for search inputs, autocomplete, or any value
            that drives an expensive side effect.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={indigo.m700}>Demo</SectionLabel>
            <UseDebounceDemo />
          </div>
          <div>
            <SectionLabel $color={indigo.m700}>Usage</SectionLabel>
            <Pre>{`import useDebounce from 'meticulous-ui/hooks/useDebounce';

function Search() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 400);

  useEffect(() => {
    if (debouncedQuery) fetchResults(debouncedQuery);
  }, [debouncedQuery]);
}`}</Pre>
          </div>
          <div>
            <SectionLabel $color={indigo.m700}>Source</SectionLabel>
            <Pre>{`const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);
  return debounced;
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// useThrottle — teal
// ═════════════════════════════════════════════════════════════════════════════

const UseThrottleDemo = () => {
  const [pos, setPos] = useState(0);
  const throttled = useThrottle(pos, 500);
  return (
    <DemoBox $bg={teal.m50} style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
      <Input
        $border={teal.m300}
        type='range'
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        style={{ width: 220, padding: 0, border: 'none' }}
      />
      <p style={{ margin: 0, fontSize: '1.3rem', color: blueGray.m500 }}>
        raw: <strong>{pos}</strong> &nbsp;|&nbsp; throttled (500ms):{' '}
        <strong style={{ color: teal.m700 }}>{throttled}</strong>
      </p>
    </DemoBox>
  );
};

const UseThrottlePage = () => (
  <StoryPage $bg={teal.m50}>
    <MaxWidth>
      <Card $accent={teal.m500}>
        <CardHeader $bg='#fff' $border={teal.m100}>
          <div>
            <HookName $color={teal.m900} $bg={teal.m100}>
              useThrottle
            </HookName>
            <Signature>(value: T, delay: number) → T</Signature>
          </div>
          <Description>
            Returns a throttled copy of <Code>value</Code> that updates at most once every{' '}
            <Code>delay</Code> ms. Useful for scroll position, mouse coordinates, or any rapidly
            changing value that should not drive updates at full speed.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={teal.m700}>Demo</SectionLabel>
            <UseThrottleDemo />
          </div>
          <div>
            <SectionLabel $color={teal.m700}>Usage</SectionLabel>
            <Pre>{`import useThrottle from 'meticulous-ui/hooks/useThrottle';

function ScrollTracker() {
  const [scrollY, setScrollY] = useState(0);
  const throttledY = useThrottle(scrollY, 200);

  useEventListener('scroll', () => setScrollY(window.scrollY));
  // throttledY updates at most every 200 ms
}`}</Pre>
          </div>
          <div>
            <SectionLabel $color={teal.m700}>Source</SectionLabel>
            <Pre>{`const useThrottle = (value, delay) => {
  const [throttled, setThrottled] = useState(value);
  const lastRan = useRef(Date.now());

  useEffect(() => {
    const remaining = delay - (Date.now() - lastRan.current);
    const id = setTimeout(() => {
      setThrottled(value);
      lastRan.current = Date.now();
    }, Math.max(0, remaining));
    return () => clearTimeout(id);
  }, [value, delay]);

  return throttled;
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// useIsMounted — green
// ═════════════════════════════════════════════════════════════════════════════

const UseIsMountedChild = ({ onLog }) => {
  const isMounted = useIsMounted();
  useEffect(() => {
    const id = setTimeout(() => {
      if (isMounted.current) onLog('async callback ran — component still mounted ✓');
      else onLog('async callback ran — component already unmounted ✗');
    }, 800);
    return () => clearTimeout(id);
  }, []);
  return (
    <Tag $bg={green.m100} $color={green.m800}>
      Child mounted
    </Tag>
  );
};

const UseIsMountedDemo = () => {
  const [show, setShow] = useState(true);
  const [log, setLog] = useState('');
  return (
    <DemoBox $bg={green.m50} style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Btn
          $bg={green.m600}
          onClick={() => {
            setShow((v) => !v);
            setLog('');
          }}
        >
          {show ? 'Unmount' : 'Mount'} child
        </Btn>
        {show && <UseIsMountedChild onLog={setLog} />}
      </div>
      {log && <p style={{ margin: 0, fontSize: '1.25rem', color: green.m700 }}>{log}</p>}
    </DemoBox>
  );
};

const UseIsMountedPage = () => (
  <StoryPage $bg={green.m50}>
    <MaxWidth>
      <Card $accent={green.m500}>
        <CardHeader $bg='#fff' $border={green.m100}>
          <div>
            <HookName $color={green.m900} $bg={green.m100}>
              useIsMounted
            </HookName>
            <Signature>() → MutableRefObject&lt;boolean&gt;</Signature>
          </div>
          <Description>
            Returns a ref whose <Code>.current</Code> is <Code>true</Code> while the component is
            mounted and <Code>false</Code> after it unmounts. Use it to guard async callbacks
            against state updates on unmounted components.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={green.m700}>Demo</SectionLabel>
            <UseIsMountedDemo />
          </div>
          <div>
            <SectionLabel $color={green.m700}>Usage</SectionLabel>
            <Pre>{`import useIsMounted from 'meticulous-ui/hooks/useIsMounted';

function Profile({ id }) {
  const isMounted = useIsMounted();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser(id).then((data) => {
      if (isMounted.current) setUser(data);
    });
  }, [id]);
}`}</Pre>
          </div>
          <div>
            <SectionLabel $color={green.m700}>Source</SectionLabel>
            <Pre>{`const useIsMounted = () => {
  const isMounted = useRef(false);
  useEffect(() => {
    isMounted.current = true;
    return () => { isMounted.current = false; };
  }, []);
  return isMounted;
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// useEventListener — blue
// ═════════════════════════════════════════════════════════════════════════════

const UseEventListenerDemo = () => {
  const [key, setKey] = useState('—');
  useEventListener('keydown', (e) => setKey(e.key));
  return (
    <DemoBox $bg={blue.m50}>
      <p style={{ margin: 0, fontSize: '1.35rem', color: blueGray.m500 }}>
        Press any key → last key: <strong style={{ color: blue.m700 }}>{key}</strong>
      </p>
    </DemoBox>
  );
};

const UseEventListenerPage = () => (
  <StoryPage $bg={blue.m50}>
    <MaxWidth>
      <Card $accent={blue.m500}>
        <CardHeader $bg='#fff' $border={blue.m100}>
          <div>
            <HookName $color={blue.m900} $bg={blue.m100}>
              useEventListener
            </HookName>
            <Signature>(event: string, handler: Function, target?: EventTarget) → void</Signature>
          </div>
          <Description>
            Attaches an event listener to <Code>target</Code> (defaults to <Code>window</Code>),
            keeping the handler ref stable so the listener is never re-added unnecessarily. Cleans
            up automatically on unmount. Accepts a React ref as <Code>target</Code>.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={blue.m700}>Demo</SectionLabel>
            <UseEventListenerDemo />
          </div>
          <div>
            <SectionLabel $color={blue.m700}>Usage</SectionLabel>
            <Pre>{`import useEventListener from 'meticulous-ui/hooks/useEventListener';

// Listen on window (default)
useEventListener('resize', () => console.log(window.innerWidth));

// Listen on a specific element
const btnRef = useRef(null);
useEventListener('click', handleClick, btnRef);`}</Pre>
          </div>
          <div>
            <SectionLabel $color={blue.m700}>Source</SectionLabel>
            <Pre>{`const useEventListener = (event, handler, target = window) => {
  const savedHandler = useRef(handler);
  useEffect(() => { savedHandler.current = handler; }, [handler]);
  useEffect(() => {
    const el = target && 'current' in target ? target.current : target;
    if (!el?.addEventListener) return;
    const listener = (e) => savedHandler.current(e);
    el.addEventListener(event, listener);
    return () => el.removeEventListener(event, listener);
  }, [event, target]);
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// useIntersectionObserver — amber
// ═════════════════════════════════════════════════════════════════════════════

const UseIntersectionObserverDemo = () => {
  const ref = useRef(null);
  const entry = useIntersectionObserver(ref, { threshold: 0.5 });
  const isVisible = entry?.isIntersecting ?? false;
  return (
    <div style={{ background: amber.m50, borderRadius: 10, padding: '2rem 2.4rem' }}>
      <p style={{ fontSize: '1.25rem', color: blueGray.m500, margin: '0 0 1.6rem' }}>
        Scroll the box into view:&nbsp;
        <Tag
          $bg={isVisible ? amber.m200 : blueGray.m100}
          $color={isVisible ? amber.m900 : blueGray.m500}
        >
          {isVisible ? 'visible ✓' : 'not visible'}
        </Tag>
      </p>
      <div
        style={{
          height: 120,
          overflowY: 'scroll',
          border: `2px solid ${amber.m200}`,
          borderRadius: 8,
        }}
      >
        <div style={{ height: 200 }} />
        <div
          ref={ref}
          style={{
            height: 60,
            background: amber.m300,
            borderRadius: 6,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
            color: amber.m900,
          }}
        >
          Target element
        </div>
        <div style={{ height: 200 }} />
      </div>
    </div>
  );
};

const UseIntersectionObserverPage = () => (
  <StoryPage $bg={amber.m50}>
    <MaxWidth>
      <Card $accent={amber.m700}>
        <CardHeader $bg='#fff' $border={amber.m200}>
          <div>
            <HookName $color={amber.m900} $bg={amber.m200}>
              useIntersectionObserver
            </HookName>
            <Signature>
              (ref: RefObject, options?: IntersectionObserverInit) → IntersectionObserverEntry |
              null
            </Signature>
          </div>
          <Description>
            Observes a DOM element with the <Code>IntersectionObserver</Code> API and returns the
            latest <Code>IntersectionObserverEntry</Code>. Use <Code>entry.isIntersecting</Code> for
            lazy loading, infinite scroll, or scroll-triggered animations.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={amber.m800}>Demo</SectionLabel>
            <UseIntersectionObserverDemo />
          </div>
          <div>
            <SectionLabel $color={amber.m800}>Usage</SectionLabel>
            <Pre>{`import useIntersectionObserver from 'meticulous-ui/hooks/useIntersectionObserver';

function LazyImage({ src }) {
  const ref = useRef(null);
  const entry = useIntersectionObserver(ref, { threshold: 0.1 });

  return (
    <div ref={ref}>
      {entry?.isIntersecting && <img src={src} />}
    </div>
  );
}`}</Pre>
          </div>
          <div>
            <SectionLabel $color={amber.m800}>Source</SectionLabel>
            <Pre>{`const useIntersectionObserver = (ref, options = {}) => {
  const [entry, setEntry] = useState(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([e]) => setEntry(e), options);
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, options.threshold, options.root, options.rootMargin]);
  return entry;
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// useMediaQuery — deepOrange
// ═════════════════════════════════════════════════════════════════════════════

const UseMediaQueryDemo = () => {
  const isWide = useMediaQuery('(min-width: 600px)');
  const prefersDark = useMediaQuery('(prefers-color-scheme: dark)');
  return (
    <DemoBox
      $bg={deepOrange.m50}
      style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '0.8rem' }}
    >
      <p style={{ margin: 0, fontSize: '1.3rem', color: blueGray.m600 }}>
        <Code>(min-width: 600px)</Code> →{' '}
        <Tag
          $bg={isWide ? deepOrange.m100 : blueGray.m100}
          $color={isWide ? deepOrange.m800 : blueGray.m500}
        >
          {isWide ? 'true' : 'false'}
        </Tag>
      </p>
      <p style={{ margin: 0, fontSize: '1.3rem', color: blueGray.m600 }}>
        <Code>(prefers-color-scheme: dark)</Code> →{' '}
        <Tag
          $bg={prefersDark ? deepOrange.m100 : blueGray.m100}
          $color={prefersDark ? deepOrange.m800 : blueGray.m500}
        >
          {prefersDark ? 'true' : 'false'}
        </Tag>
      </p>
    </DemoBox>
  );
};

const UseMediaQueryPage = () => (
  <StoryPage $bg={deepOrange.m50}>
    <MaxWidth>
      <Card $accent={deepOrange.m500}>
        <CardHeader $bg='#fff' $border={deepOrange.m100}>
          <div>
            <HookName $color={deepOrange.m900} $bg={deepOrange.m100}>
              useMediaQuery
            </HookName>
            <Signature>(query: string) → boolean</Signature>
          </div>
          <Description>
            Returns whether a CSS media query currently matches and re-renders when the match
            changes. Useful for responsive logic that must live in JavaScript rather than CSS.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={deepOrange.m700}>Demo</SectionLabel>
            <UseMediaQueryDemo />
          </div>
          <div>
            <SectionLabel $color={deepOrange.m700}>Usage</SectionLabel>
            <Pre>{`import useMediaQuery from 'meticulous-ui/hooks/useMediaQuery';

function Layout() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return isMobile ? <MobileNav /> : <DesktopNav />;
}`}</Pre>
          </div>
          <div>
            <SectionLabel $color={deepOrange.m700}>Source</SectionLabel>
            <Pre>{`const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const mql = window.matchMedia(query);
    const handler = (e) => setMatches(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, [query]);
  return matches;
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// useLocalStorage — cyan
// ═════════════════════════════════════════════════════════════════════════════

const UseLocalStorageDemo = () => {
  const [name, setName, removeName] = useLocalStorage('demo-name', '');
  return (
    <DemoBox $bg={cyan.m50} style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Input
          $border={cyan.m300}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Enter a name…'
        />
        <Btn $bg={cyan.m600} onClick={() => removeName()}>
          Clear
        </Btn>
      </div>
      <p style={{ margin: 0, fontSize: '1.25rem', color: blueGray.m500 }}>
        Stored value: <strong style={{ color: cyan.m700 }}>{name || '(empty)'}</strong>
        &nbsp;— refresh the page; the value persists.
      </p>
    </DemoBox>
  );
};

const UseLocalStoragePage = () => (
  <StoryPage $bg={cyan.m50}>
    <MaxWidth>
      <Card $accent={cyan.m500}>
        <CardHeader $bg='#fff' $border={cyan.m100}>
          <div>
            <HookName $color={cyan.m900} $bg={cyan.m100}>
              useLocalStorage
            </HookName>
            <Signature>(key: string, initialValue: T) → [T, setter, remover]</Signature>
          </div>
          <Description>
            Like <Code>useState</Code> but backed by <Code>localStorage</Code>. Returns{' '}
            <Code>[value, setValue, remove]</Code>. The value is parsed from storage on mount and
            serialised on every write. Accepts a functional updater the same way{' '}
            <Code>useState</Code> does.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={cyan.m700}>Demo</SectionLabel>
            <UseLocalStorageDemo />
          </div>
          <div>
            <SectionLabel $color={cyan.m700}>Usage</SectionLabel>
            <Pre>{`import useLocalStorage from 'meticulous-ui/hooks/useLocalStorage';

function Settings() {
  const [theme, setTheme, resetTheme] = useLocalStorage('theme', 'light');
  return (
    <>
      <p>Theme: {theme}</p>
      <button onClick={() => setTheme('dark')}>Dark</button>
      <button onClick={resetTheme}>Reset</button>
    </>
  );
}`}</Pre>
          </div>
          <div>
            <SectionLabel $color={cyan.m700}>Source</SectionLabel>
            <Pre>{`const useLocalStorage = (key, initialValue) => {
  const [stored, setStored] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : initialValue;
    } catch { return initialValue; }
  });

  const setValue = (value) => {
    const next = typeof value === 'function' ? value(stored) : value;
    setStored(next);
    try { localStorage.setItem(key, JSON.stringify(next)); } catch {}
  };

  const remove = () => {
    setStored(initialValue);
    try { localStorage.removeItem(key); } catch {}
  };

  return [stored, setValue, remove];
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// useSessionStorage — lightBlue
// ═════════════════════════════════════════════════════════════════════════════

const UseSessionStorageDemo = () => {
  const [token, setToken, removeToken] = useSessionStorage('demo-token', '');
  return (
    <DemoBox $bg={lightBlue.m50} style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Input
          $border={lightBlue.m300}
          value={token}
          onChange={(e) => setToken(e.target.value)}
          placeholder='Enter a token…'
        />
        <Btn $bg={lightBlue.m600} onClick={() => removeToken()}>
          Clear
        </Btn>
      </div>
      <p style={{ margin: 0, fontSize: '1.25rem', color: blueGray.m500 }}>
        Session value: <strong style={{ color: lightBlue.m700 }}>{token || '(empty)'}</strong>
        &nbsp;— value is cleared when the tab closes.
      </p>
    </DemoBox>
  );
};

const UseSessionStoragePage = () => (
  <StoryPage $bg={lightBlue.m50}>
    <MaxWidth>
      <Card $accent={lightBlue.m500}>
        <CardHeader $bg='#fff' $border={lightBlue.m100}>
          <div>
            <HookName $color={lightBlue.m900} $bg={lightBlue.m100}>
              useSessionStorage
            </HookName>
            <Signature>(key: string, initialValue: T) → [T, setter, remover]</Signature>
          </div>
          <Description>
            Identical API to <Code>useLocalStorage</Code> but uses <Code>sessionStorage</Code>. The
            stored value is scoped to the current tab session and is cleared when the tab closes.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={lightBlue.m700}>Demo</SectionLabel>
            <UseSessionStorageDemo />
          </div>
          <div>
            <SectionLabel $color={lightBlue.m700}>Usage</SectionLabel>
            <Pre>{`import useSessionStorage from 'meticulous-ui/hooks/useSessionStorage';

function Wizard() {
  const [step, setStep] = useSessionStorage('wizard-step', 1);
  return <Step number={step} onNext={() => setStep((s) => s + 1)} />;
}`}</Pre>
          </div>
          <div>
            <SectionLabel $color={lightBlue.m700}>Source</SectionLabel>
            <Pre>{`const useSessionStorage = (key, initialValue) => {
  // Same as useLocalStorage but uses sessionStorage
  const [stored, setStored] = useState(() => {
    try {
      const item = sessionStorage.getItem(key);
      return item !== null ? JSON.parse(item) : initialValue;
    } catch { return initialValue; }
  });
  // setValue / remove mirror useLocalStorage
  ...
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// useOutsideClick — red
// ═════════════════════════════════════════════════════════════════════════════

const UseOutsideClickDemo = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useOutsideClick(ref, () => setOpen(false));
  return (
    <DemoBox $bg={red.m50} style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
      <Btn $bg={red.m500} onClick={() => setOpen(true)}>
        Open dropdown
      </Btn>
      {open && (
        <div
          ref={ref}
          style={{
            background: '#fff',
            border: `2px solid ${red.m200}`,
            borderRadius: 8,
            padding: '1.2rem 2rem',
            fontSize: '1.3rem',
            color: red.m800,
            boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
          }}
        >
          Click outside to close me
        </div>
      )}
    </DemoBox>
  );
};

const UseOutsideClickPage = () => (
  <StoryPage $bg={red.m50}>
    <MaxWidth>
      <Card $accent={red.m500}>
        <CardHeader $bg='#fff' $border={red.m100}>
          <div>
            <HookName $color={red.m900} $bg={red.m100}>
              useOutsideClick
            </HookName>
            <Signature>(ref: RefObject, callback: (event) → void) → void</Signature>
          </div>
          <Description>
            Fires <Code>callback</Code> whenever a <Code>mousedown</Code> or <Code>touchstart</Code>{' '}
            event occurs outside the element referenced by <Code>ref</Code>. Useful for closing
            dropdowns, modals, and popovers.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={red.m700}>Demo</SectionLabel>
            <UseOutsideClickDemo />
          </div>
          <div>
            <SectionLabel $color={red.m700}>Usage</SectionLabel>
            <Pre>{`import useOutsideClick from 'meticulous-ui/hooks/useOutsideClick';

function Dropdown({ onClose }) {
  const ref = useRef(null);
  useOutsideClick(ref, onClose);
  return <div ref={ref}>…</div>;
}`}</Pre>
          </div>
          <div>
            <SectionLabel $color={red.m700}>Source</SectionLabel>
            <Pre>{`const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) callback(e);
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [ref, callback]);
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// useWindowSize — pink
// ═════════════════════════════════════════════════════════════════════════════

const UseWindowSizeDemo = () => {
  const { width, height } = useWindowSize();
  return (
    <DemoBox $bg={pink.m50}>
      <p style={{ margin: 0, fontSize: '1.35rem', color: blueGray.m500 }}>
        width: <strong style={{ color: pink.m700 }}>{width}px</strong> &nbsp;|&nbsp; height:{' '}
        <strong style={{ color: pink.m700 }}>{height}px</strong>
        &nbsp;— resize the window to see updates
      </p>
    </DemoBox>
  );
};

const UseWindowSizePage = () => (
  <StoryPage $bg={pink.m50}>
    <MaxWidth>
      <Card $accent={pink.m500}>
        <CardHeader $bg='#fff' $border={pink.m100}>
          <div>
            <HookName $color={pink.m900} $bg={pink.m100}>
              useWindowSize
            </HookName>
            <Signature>() → {'{ width: number, height: number }'}</Signature>
          </div>
          <Description>
            Returns the current viewport dimensions and re-renders on every window resize. Useful
            for calculations that depend on the viewport size and cannot be done purely in CSS.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={pink.m700}>Demo</SectionLabel>
            <UseWindowSizeDemo />
          </div>
          <div>
            <SectionLabel $color={pink.m700}>Usage</SectionLabel>
            <Pre>{`import useWindowSize from 'meticulous-ui/hooks/useWindowSize';

function Canvas() {
  const { width, height } = useWindowSize();
  return <canvas width={width} height={height} />;
}`}</Pre>
          </div>
          <div>
            <SectionLabel $color={pink.m700}>Source</SectionLabel>
            <Pre>{`const useWindowSize = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    const handler = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return size;
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// useOnlineStatus — lime
// ═════════════════════════════════════════════════════════════════════════════

const UseOnlineStatusDemo = () => {
  const isOnline = useOnlineStatus();
  return (
    <DemoBox $bg={lime.m50}>
      <Tag
        $bg={isOnline ? lime.m200 : red.m100}
        $color={isOnline ? lime.m900 : red.m800}
        style={{ fontSize: '1.4rem', padding: '0.6rem 1.4rem' }}
      >
        {isOnline ? '● Online' : '○ Offline'}
      </Tag>
      <p style={{ margin: 0, fontSize: '1.2rem', color: blueGray.m400 }}>
        Toggle your network connection to see the status change.
      </p>
    </DemoBox>
  );
};

const UseOnlineStatusPage = () => (
  <StoryPage $bg={lime.m50}>
    <MaxWidth>
      <Card $accent={lime.m700}>
        <CardHeader $bg='#fff' $border={lime.m200}>
          <div>
            <HookName $color={lime.m900} $bg={lime.m200}>
              useOnlineStatus
            </HookName>
            <Signature>() → boolean</Signature>
          </div>
          <Description>
            Returns <Code>true</Code> when the browser has network connectivity and updates in real
            time as the connection drops or is restored. Relies on the browser's <Code>online</Code>{' '}
            and <Code>offline</Code> window events.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={lime.m800}>Demo</SectionLabel>
            <UseOnlineStatusDemo />
          </div>
          <div>
            <SectionLabel $color={lime.m800}>Usage</SectionLabel>
            <Pre>{`import useOnlineStatus from 'meticulous-ui/hooks/useOnlineStatus';

function App() {
  const isOnline = useOnlineStatus();
  return isOnline ? <AppContent /> : <OfflineBanner />;
}`}</Pre>
          </div>
          <div>
            <SectionLabel $color={lime.m800}>Source</SectionLabel>
            <Pre>{`const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  useEffect(() => {
    const on = () => setIsOnline(true);
    const off = () => setIsOnline(false);
    window.addEventListener('online', on);
    window.addEventListener('offline', off);
    return () => {
      window.removeEventListener('online', on);
      window.removeEventListener('offline', off);
    };
  }, []);
  return isOnline;
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// useCopyToClipboard — orange
// ═════════════════════════════════════════════════════════════════════════════

const UseCopyToClipboardDemo = () => {
  const [copied, copy] = useCopyToClipboard();
  return (
    <DemoBox $bg={orange.m50}>
      <Btn $bg={copied ? orange.m700 : orange.m500} onClick={() => copy('meticulous-ui rocks!')}>
        {copied ? 'Copied ✓' : 'Copy text'}
      </Btn>
      <p style={{ margin: 0, fontSize: '1.25rem', color: blueGray.m500 }}>
        Copies <Code>"meticulous-ui rocks!"</Code> to your clipboard. Badge resets after 2 s.
      </p>
    </DemoBox>
  );
};

const UseCopyToClipboardPage = () => (
  <StoryPage $bg={orange.m50}>
    <MaxWidth>
      <Card $accent={orange.m600}>
        <CardHeader $bg='#fff' $border={orange.m100}>
          <div>
            <HookName $color={orange.m900} $bg={orange.m100}>
              useCopyToClipboard
            </HookName>
            <Signature>
              () → [copied: boolean, copy: (text: string) → Promise&lt;void&gt;]
            </Signature>
          </div>
          <Description>
            Returns <Code>[copied, copy]</Code>. Call <Code>copy(text)</Code> to write to the
            clipboard via the Clipboard API. <Code>copied</Code> is <Code>true</Code> for 2 seconds
            after a successful copy, then resets automatically.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={orange.m700}>Demo</SectionLabel>
            <UseCopyToClipboardDemo />
          </div>
          <div>
            <SectionLabel $color={orange.m700}>Usage</SectionLabel>
            <Pre>{`import useCopyToClipboard from 'meticulous-ui/hooks/useCopyToClipboard';

function CopyButton({ text }) {
  const [copied, copy] = useCopyToClipboard();
  return (
    <button onClick={() => copy(text)}>
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );
}`}</Pre>
          </div>
          <div>
            <SectionLabel $color={orange.m700}>Source</SectionLabel>
            <Pre>{`const useCopyToClipboard = () => {
  const [copied, setCopied] = useState(false);
  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { setCopied(false); }
  };
  return [copied, copy];
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// useToggle — lightGreen
// ═════════════════════════════════════════════════════════════════════════════

const UseToggleDemo = () => {
  const [on, toggle] = useToggle(false);
  return (
    <DemoBox $bg={lightGreen.m50} style={{ gap: '1.2rem' }}>
      <Btn $bg={on ? lightGreen.m700 : blueGray.m400} onClick={() => toggle()}>
        Toggle
      </Btn>
      <Btn $bg={lightGreen.m500} onClick={() => toggle(true)}>
        Force ON
      </Btn>
      <Btn $bg={red.m400} onClick={() => toggle(false)}>
        Force OFF
      </Btn>
      <Tag $bg={on ? lightGreen.m100 : blueGray.m100} $color={on ? lightGreen.m800 : blueGray.m500}>
        {on ? 'ON' : 'OFF'}
      </Tag>
    </DemoBox>
  );
};

const UseTogglePage = () => (
  <StoryPage $bg={lightGreen.m50}>
    <MaxWidth>
      <Card $accent={lightGreen.m600}>
        <CardHeader $bg='#fff' $border={lightGreen.m100}>
          <div>
            <HookName $color={lightGreen.m900} $bg={lightGreen.m100}>
              useToggle
            </HookName>
            <Signature>
              (initial?: boolean) → [value: boolean, toggle: (next?: boolean) → void]
            </Signature>
          </div>
          <Description>
            Boolean state with a stable <Code>toggle</Code> function. Call <Code>toggle()</Code> to
            flip, or <Code>toggle(true/false)</Code> to set an explicit value. The toggle function
            is memoised and never changes reference.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={lightGreen.m700}>Demo</SectionLabel>
            <UseToggleDemo />
          </div>
          <div>
            <SectionLabel $color={lightGreen.m700}>Usage</SectionLabel>
            <Pre>{`import useToggle from 'meticulous-ui/hooks/useToggle';

function Modal() {
  const [open, toggleOpen] = useToggle(false);
  return (
    <>
      <button onClick={() => toggleOpen()}>Open</button>
      {open && <ModalContent onClose={() => toggleOpen(false)} />}
    </>
  );
}`}</Pre>
          </div>
          <div>
            <SectionLabel $color={lightGreen.m700}>Source</SectionLabel>
            <Pre>{`const useToggle = (initial = false) => {
  const [value, setValue] = useState(initial);
  const toggle = useCallback((next) => {
    setValue((v) => (typeof next === 'boolean' ? next : !v));
  }, []);
  return [value, toggle];
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// useTimeout — brown
// ═════════════════════════════════════════════════════════════════════════════

const UseTimeoutDemo = () => {
  const [msg, setMsg] = useState('Waiting…');
  const [key, setKey] = useState(0);

  useTimeout(() => setMsg('Fired after 2 s ✓'), key === 0 ? null : 2000);

  const start = () => {
    setMsg('Waiting…');
    setKey((k) => k + 1);
  };

  return (
    <DemoBox $bg={brown.m50}>
      <Btn $bg={brown.m600} onClick={start}>
        Start 2 s timeout
      </Btn>
      <Tag $bg={brown.m100} $color={brown.m800}>
        {msg}
      </Tag>
    </DemoBox>
  );
};

const UseTimeoutPage = () => (
  <StoryPage $bg={brown.m50}>
    <MaxWidth>
      <Card $accent={brown.m500}>
        <CardHeader $bg='#fff' $border={brown.m100}>
          <div>
            <HookName $color={brown.m900} $bg={brown.m100}>
              useTimeout
            </HookName>
            <Signature>(callback: () → void, delay: number | null) → void</Signature>
          </div>
          <Description>
            Runs <Code>callback</Code> once after <Code>delay</Code> ms and cleans up on unmount.
            Pass <Code>null</Code> as <Code>delay</Code> to pause the timer. The callback ref is
            always kept current so stale-closure bugs are avoided.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={brown.m700}>Demo</SectionLabel>
            <UseTimeoutDemo />
          </div>
          <div>
            <SectionLabel $color={brown.m700}>Usage</SectionLabel>
            <Pre>{`import useTimeout from 'meticulous-ui/hooks/useTimeout';

function Toast({ onDismiss }) {
  useTimeout(onDismiss, 3000);  // auto-dismiss after 3 s
  return <div className='toast'>Saved!</div>;
}`}</Pre>
          </div>
          <div>
            <SectionLabel $color={brown.m700}>Source</SectionLabel>
            <Pre>{`const useTimeout = (callback, delay) => {
  const savedCallback = useRef(callback);
  useEffect(() => { savedCallback.current = callback; }, [callback]);
  useEffect(() => {
    if (delay === null) return;
    const id = setTimeout(() => savedCallback.current(), delay);
    return () => clearTimeout(id);
  }, [delay]);
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// useInterval — deepPurple
// ═════════════════════════════════════════════════════════════════════════════

const UseIntervalDemo = () => {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(false);
  useInterval(() => setCount((c) => c + 1), running ? 500 : null);
  return (
    <DemoBox $bg={deepPurple.m50} style={{ gap: '1.2rem' }}>
      <Btn $bg={running ? red.m500 : deepPurple.m600} onClick={() => setRunning((r) => !r)}>
        {running ? 'Stop' : 'Start'}
      </Btn>
      <Btn $bg={blueGray.m400} onClick={() => setCount(0)}>
        Reset
      </Btn>
      <Tag
        $bg={deepPurple.m100}
        $color={deepPurple.m800}
        style={{ fontSize: '1.6rem', padding: '0.4rem 1.4rem' }}
      >
        {count}
      </Tag>
    </DemoBox>
  );
};

const UseIntervalPage = () => (
  <StoryPage $bg={deepPurple.m50}>
    <MaxWidth>
      <Card $accent={deepPurple.m500}>
        <CardHeader $bg='#fff' $border={deepPurple.m100}>
          <div>
            <HookName $color={deepPurple.m900} $bg={deepPurple.m100}>
              useInterval
            </HookName>
            <Signature>(callback: () → void, delay: number | null) → void</Signature>
          </div>
          <Description>
            Runs <Code>callback</Code> repeatedly every <Code>delay</Code> ms. Pass{' '}
            <Code>null</Code> to pause. The callback ref is always current, so the interval never
            needs to be restarted when callback logic changes.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={deepPurple.m700}>Demo</SectionLabel>
            <UseIntervalDemo />
          </div>
          <div>
            <SectionLabel $color={deepPurple.m700}>Usage</SectionLabel>
            <Pre>{`import useInterval from 'meticulous-ui/hooks/useInterval';

function Clock() {
  const [time, setTime] = useState(new Date());
  useInterval(() => setTime(new Date()), 1000);
  return <p>{time.toLocaleTimeString()}</p>;
}`}</Pre>
          </div>
          <div>
            <SectionLabel $color={deepPurple.m700}>Source</SectionLabel>
            <Pre>{`const useInterval = (callback, delay) => {
  const savedCallback = useRef(callback);
  useEffect(() => { savedCallback.current = callback; }, [callback]);
  useEffect(() => {
    if (delay === null) return;
    const id = setInterval(() => savedCallback.current(), delay);
    return () => clearInterval(id);
  }, [delay]);
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// useUnmount — violet
// ═════════════════════════════════════════════════════════════════════════════

const UseUnmountChild = ({ onLog }) => {
  useUnmount(() => onLog('useUnmount callback fired ✓'));
  return (
    <Tag $bg={violet.m100} $color={violet.m800}>
      Child is mounted
    </Tag>
  );
};

const UseUnmountDemo = () => {
  const [show, setShow] = useState(true);
  const [log, setLog] = useState('');
  return (
    <DemoBox $bg={violet.m50} style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Btn
          $bg={violet.m600}
          onClick={() => {
            setShow((v) => !v);
            if (show) setLog('');
          }}
        >
          {show ? 'Unmount child' : 'Mount child'}
        </Btn>
        {show && <UseUnmountChild onLog={setLog} />}
      </div>
      {log && <p style={{ margin: 0, fontSize: '1.25rem', color: violet.m700 }}>{log}</p>}
    </DemoBox>
  );
};

const UseUnmountPage = () => (
  <StoryPage $bg={violet.m50}>
    <MaxWidth>
      <Card $accent={violet.m500}>
        <CardHeader $bg='#fff' $border={violet.m100}>
          <div>
            <HookName $color={violet.m900} $bg={violet.m100}>
              useUnmount
            </HookName>
            <Signature>(callback: () → void) → void</Signature>
          </div>
          <Description>
            Runs <Code>callback</Code> exactly once when the component unmounts. Always uses the
            latest version of the callback so you can safely reference current state or props
            without re-registering the effect.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={violet.m700}>Demo</SectionLabel>
            <UseUnmountDemo />
          </div>
          <div>
            <SectionLabel $color={violet.m700}>Usage</SectionLabel>
            <Pre>{`import useUnmount from 'meticulous-ui/hooks/useUnmount';

function VideoPlayer({ src }) {
  const playerRef = useRef(null);
  useUnmount(() => playerRef.current?.destroy());
  return <video ref={playerRef} src={src} />;
}`}</Pre>
          </div>
          <div>
            <SectionLabel $color={violet.m700}>Source</SectionLabel>
            <Pre>{`const useUnmount = (callback) => {
  const savedCallback = useRef(callback);
  useEffect(() => { savedCallback.current = callback; }, [callback]);
  useEffect(() => { return () => savedCallback.current(); }, []);
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// useFirstRender — blueGray
// ═════════════════════════════════════════════════════════════════════════════

const UseFirstRenderDemo = () => {
  const [count, setCount] = useState(0);

  const Inner = () => {
    const isFirst = useFirstRender();
    return (
      <Tag $bg={isFirst ? green.m100 : blueGray.m100} $color={isFirst ? green.m800 : blueGray.m500}>
        {isFirst ? 'First render ✓' : `Re-render #${count}`}
      </Tag>
    );
  };

  return (
    <DemoBox $bg={blueGray.m50} style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Btn $bg={blueGray.m600} onClick={() => setCount((c) => c + 1)}>
          Force re-render
        </Btn>
        <Inner />
      </div>
    </DemoBox>
  );
};

const UseFirstRenderPage = () => (
  <StoryPage $bg={blueGray.m50}>
    <MaxWidth>
      <Card $accent={blueGray.m500}>
        <CardHeader $bg='#fff' $border={blueGray.m100}>
          <div>
            <HookName $color={blueGray.m900} $bg={blueGray.m100}>
              useFirstRender
            </HookName>
            <Signature>() → boolean</Signature>
          </div>
          <Description>
            Returns <Code>true</Code> on the very first render and <Code>false</Code> on every
            subsequent render. Useful for skipping effects or animations that should not run on
            re-renders.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={blueGray.m700}>Demo</SectionLabel>
            <UseFirstRenderDemo />
          </div>
          <div>
            <SectionLabel $color={blueGray.m700}>Usage</SectionLabel>
            <Pre>{`import useFirstRender from 'meticulous-ui/hooks/useFirstRender';

function Form({ values }) {
  const isFirst = useFirstRender();

  useEffect(() => {
    if (!isFirst) validate(values);  // skip on mount
  }, [values]);
}`}</Pre>
          </div>
          <div>
            <SectionLabel $color={blueGray.m700}>Source</SectionLabel>
            <Pre>{`const useFirstRender = () => {
  const isFirst = useRef(true);
  useEffect(() => { isFirst.current = false; }, []);
  return isFirst.current;
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
  title: 'Hooks/Custom Hooks',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    layout: 'fullscreen',
  },
};

export const UsePrevious = () => <UsePreviousPage />;
UsePrevious.storyName = 'usePrevious';

export const UseDebounce = () => <UseDebouncePage />;
UseDebounce.storyName = 'useDebounce';

export const UseThrottle = () => <UseThrottlePage />;
UseThrottle.storyName = 'useThrottle';

export const UseIsMounted = () => <UseIsMountedPage />;
UseIsMounted.storyName = 'useIsMounted';

export const UseEventListener = () => <UseEventListenerPage />;
UseEventListener.storyName = 'useEventListener';

export const UseIntersectionObserver = () => <UseIntersectionObserverPage />;
UseIntersectionObserver.storyName = 'useIntersectionObserver';

export const UseMediaQuery = () => <UseMediaQueryPage />;
UseMediaQuery.storyName = 'useMediaQuery';

export const UseLocalStorage = () => <UseLocalStoragePage />;
UseLocalStorage.storyName = 'useLocalStorage';

export const UseSessionStorage = () => <UseSessionStoragePage />;
UseSessionStorage.storyName = 'useSessionStorage';

export const UseOutsideClick = () => <UseOutsideClickPage />;
UseOutsideClick.storyName = 'useOutsideClick';

export const UseWindowSize = () => <UseWindowSizePage />;
UseWindowSize.storyName = 'useWindowSize';

export const UseOnlineStatus = () => <UseOnlineStatusPage />;
UseOnlineStatus.storyName = 'useOnlineStatus';

export const UseCopyToClipboard = () => <UseCopyToClipboardPage />;
UseCopyToClipboard.storyName = 'useCopyToClipboard';

export const UseToggle = () => <UseTogglePage />;
UseToggle.storyName = 'useToggle';

export const UseTimeout = () => <UseTimeoutPage />;
UseTimeout.storyName = 'useTimeout';

export const UseInterval = () => <UseIntervalPage />;
UseInterval.storyName = 'useInterval';

export const UseUnmount = () => <UseUnmountPage />;
UseUnmount.storyName = 'useUnmount';

export const UseFirstRender = () => <UseFirstRenderPage />;
UseFirstRender.storyName = 'useFirstRender';
