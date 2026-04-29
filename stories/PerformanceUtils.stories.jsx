import { useState, useRef, useEffect, Suspense } from 'react';
import styled from 'styled-components';

import blueGray from '../src/colors/blueGray';
import purple from '../src/colors/purple';
import amber from '../src/colors/amber';
import pink from '../src/colors/pink';
import lightGreen from '../src/colors/lightGreen';
import lime from '../src/colors/lime';
import red from '../src/colors/red';

import debounce from '../src/utils/debounce';
import throttle from '../src/utils/throttle';
import memoize from '../src/utils/memoize';
import lazyLoadComponent from '../src/utils/lazyLoadComponent';
import requestIdleTask from '../src/utils/requestIdleTask';
import rafThrottle from '../src/utils/rafThrottle';

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
`;

const DemoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  flex-wrap: wrap;
`;

const StatBox = styled.div`
  display: flex;
  gap: 2.4rem;
  flex-wrap: wrap;
`;

const Stat = styled.div`
  background: ${({ $bg }) => $bg};
  border-radius: 10px;
  padding: 1.2rem 2rem;
  min-width: 12rem;
`;

const StatValue = styled.div`
  font-size: 2.8rem;
  font-weight: 800;
  color: ${({ $color }) => $color};
  line-height: 1;
`;

const StatLabel = styled.div`
  font-size: 1.1rem;
  color: ${blueGray.m500};
  margin-top: 0.4rem;
`;

const DemoInput = styled.input`
  padding: 1rem 1.6rem;
  font-size: 1.4rem;
  border: 2px solid ${({ $color }) => $color};
  border-radius: 8px;
  outline: none;
  width: 100%;
  box-sizing: border-box;
  &:focus {
    border-color: ${({ $focusColor }) => $focusColor};
  }
`;

const ResultLine = styled.div`
  font-size: 1.4rem;
  color: ${({ $color }) => $color};
  font-weight: 600;
  padding: 0.8rem 1.4rem;
  background: ${({ $bg }) => $bg};
  border-radius: 8px;
  margin-top: 1.2rem;
`;

// ═════════════════════════════════════════════════════════════════════════════
// debounce — purple
// ═════════════════════════════════════════════════════════════════════════════

const DebouncePage = () => {
  const [keystrokes, setKeystrokes] = useState(0);
  const [searches, setSearches] = useState(0);
  const [lastSearch, setLastSearch] = useState('');

  const debouncedSearch = useRef(
    debounce((val) => {
      setSearches((s) => s + 1);
      setLastSearch(val);
    }, 500)
  ).current;

  const handleChange = (e) => {
    setKeystrokes((k) => k + 1);
    debouncedSearch(e.target.value);
  };

  return (
    <StoryPage $bg={purple.m50}>
      <MaxWidth>
        <Card $accent={purple.m500}>
          <CardHeader $bg='#fff' $border={purple.m100}>
            <div>
              <FnName $color={purple.m900} $bg={purple.m100}>
                debounce
              </FnName>
              <Signature>(fn, delay) → fn</Signature>
            </div>
            <Description>
              Delays invoking <Code>fn</Code> until <Code>delay</Code> ms have elapsed since the
              last call. Type in the field below — keystrokes fire immediately but the search only
              executes 500 ms after you stop typing.
            </Description>
          </CardHeader>
          <CardBody>
            <div>
              <SectionLabel $color={purple.m700}>Demo</SectionLabel>
              <DemoInput
                $color={purple.m200}
                $focusColor={purple.m500}
                placeholder='Type to search…'
                onChange={handleChange}
              />
              <StatBox style={{ marginTop: '1.6rem' }}>
                <Stat $bg={purple.m50}>
                  <StatValue $color={purple.m400}>{keystrokes}</StatValue>
                  <StatLabel>Keystrokes</StatLabel>
                </Stat>
                <Stat $bg={purple.m50}>
                  <StatValue $color={purple.m700}>{searches}</StatValue>
                  <StatLabel>Debounced calls</StatLabel>
                </Stat>
              </StatBox>
              {lastSearch && (
                <ResultLine $color={purple.m800} $bg={purple.m50}>
                  Last search: &quot;{lastSearch}&quot;
                </ResultLine>
              )}
            </div>
            <div>
              <SectionLabel $color={purple.m700}>Usage</SectionLabel>
              <Pre>{`import debounce from 'meticulous-ui/utils/debounce';

const debouncedSearch = debounce((query) => {
  fetchResults(query);
}, 500);

input.addEventListener('input', (e) => debouncedSearch(e.target.value));`}</Pre>
            </div>
            <div>
              <SectionLabel $color={purple.m700}>Source</SectionLabel>
              <Pre>{`const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
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
// throttle — amber
// ═════════════════════════════════════════════════════════════════════════════

const ThrottlePage = () => {
  const [clicks, setClicks] = useState(0);
  const [executions, setExecutions] = useState(0);

  const throttledFn = useRef(
    throttle(() => {
      setExecutions((e) => e + 1);
    }, 1000)
  ).current;

  const handleClick = () => {
    setClicks((c) => c + 1);
    throttledFn();
  };

  return (
    <StoryPage $bg={amber.m50}>
      <MaxWidth>
        <Card $accent={amber.m600}>
          <CardHeader $bg='#fff' $border={amber.m100}>
            <div>
              <FnName $color={amber.m900} $bg={amber.m100}>
                throttle
              </FnName>
              <Signature>(fn, delay) → fn</Signature>
            </div>
            <Description>
              Ensures <Code>fn</Code> is called at most once per <Code>delay</Code> ms, regardless
              of how often the returned function is invoked. Click the button rapidly — it fires
              every time but the throttled handler runs at most once per second.
            </Description>
          </CardHeader>
          <CardBody>
            <div>
              <SectionLabel $color={amber.m800}>Demo (1 s throttle window)</SectionLabel>
              <DemoRow>
                <DemoButton $bg={amber.m600} onClick={handleClick}>
                  Click me fast!
                </DemoButton>
              </DemoRow>
              <StatBox style={{ marginTop: '1.6rem' }}>
                <Stat $bg={amber.m50}>
                  <StatValue $color={amber.m500}>{clicks}</StatValue>
                  <StatLabel>Total clicks</StatLabel>
                </Stat>
                <Stat $bg={amber.m50}>
                  <StatValue $color={amber.m800}>{executions}</StatValue>
                  <StatLabel>Throttled executions</StatLabel>
                </Stat>
              </StatBox>
            </div>
            <div>
              <SectionLabel $color={amber.m800}>Usage</SectionLabel>
              <Pre>{`import throttle from 'meticulous-ui/utils/throttle';

const throttledScroll = throttle(() => {
  updateNavbar();
}, 200);

window.addEventListener('scroll', throttledScroll);`}</Pre>
            </div>
            <div>
              <SectionLabel $color={amber.m800}>Source</SectionLabel>
              <Pre>{`const throttle = (fn, delay) => {
  let lastCall = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      fn(...args);
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
// memoize — pink
// ═════════════════════════════════════════════════════════════════════════════

const slowFib = (n) => {
  if (n <= 1) return n;
  return slowFib(n - 1) + slowFib(n - 2);
};

const memoFib = memoize(slowFib);

const MemoizePage = () => {
  const [n, setN] = useState(35);
  const [result, setResult] = useState(null);
  const [duration, setDuration] = useState(null);
  const [cached, setCached] = useState(false);

  const runFib = (useMemo) => {
    const fn = useMemo ? memoFib : slowFib;
    const t0 = performance.now();
    const val = fn(n);
    const t1 = performance.now();
    setResult(val);
    setDuration((t1 - t0).toFixed(2));
    setCached(useMemo);
  };

  return (
    <StoryPage $bg={pink.m50}>
      <MaxWidth>
        <Card $accent={pink.m500}>
          <CardHeader $bg='#fff' $border={pink.m100}>
            <div>
              <FnName $color={pink.m900} $bg={pink.m100}>
                memoize
              </FnName>
              <Signature>(fn) → fn</Signature>
            </div>
            <Description>
              Wraps a pure function with a <Code>Map</Code> cache keyed by serialized arguments.
              Repeated calls with the same arguments return instantly from cache instead of
              re-computing. Run fib(n) with and without memoization to see the difference.
            </Description>
          </CardHeader>
          <CardBody>
            <div>
              <SectionLabel $color={pink.m700}>Demo</SectionLabel>
              <DemoRow style={{ marginBottom: '1.2rem' }}>
                <label style={{ fontSize: '1.4rem', color: blueGray.m600 }}>
                  n =&nbsp;
                  <input
                    type='number'
                    min={1}
                    max={40}
                    value={n}
                    onChange={(e) => setN(Number(e.target.value))}
                    style={{
                      padding: '0.5rem 0.8rem',
                      fontSize: '1.4rem',
                      border: `2px solid ${pink.m200}`,
                      borderRadius: 6,
                      width: '7rem',
                    }}
                  />
                </label>
              </DemoRow>
              <DemoRow>
                <DemoButton $bg={blueGray.m500} onClick={() => runFib(false)}>
                  Run without memoize
                </DemoButton>
                <DemoButton $bg={pink.m500} onClick={() => runFib(true)}>
                  Run with memoize
                </DemoButton>
              </DemoRow>
              {result !== null && (
                <StatBox style={{ marginTop: '1.6rem' }}>
                  <Stat $bg={pink.m50}>
                    <StatValue $color={pink.m700} style={{ fontSize: '2rem' }}>
                      {result}
                    </StatValue>
                    <StatLabel>fib({n})</StatLabel>
                  </Stat>
                  <Stat $bg={pink.m50}>
                    <StatValue $color={cached ? pink.m500 : blueGray.m400}>{duration} ms</StatValue>
                    <StatLabel>{cached ? 'Memoized (cached)' : 'Not memoized'}</StatLabel>
                  </Stat>
                </StatBox>
              )}
            </div>
            <div>
              <SectionLabel $color={pink.m700}>Usage</SectionLabel>
              <Pre>{`import memoize from 'meticulous-ui/utils/memoize';

const expensiveCalc = memoize((x, y) => {
  // heavy computation
  return result;
});

expensiveCalc(10, 20); // computed
expensiveCalc(10, 20); // returned from cache instantly`}</Pre>
            </div>
            <div>
              <SectionLabel $color={pink.m700}>Source</SectionLabel>
              <Pre>{`const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
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
// lazyLoadComponent — lightGreen
// ═════════════════════════════════════════════════════════════════════════════

const LazyLoadComponentPage = () => {
  const [showLazy, setShowLazy] = useState(false);
  const [LazyComp, setLazyComp] = useState(null);

  const handleLoad = () => {
    const comp = lazyLoadComponent(
      () =>
        new Promise((resolve) =>
          setTimeout(
            () =>
              resolve({
                default: () => (
                  <div
                    style={{
                      padding: '2rem',
                      background: lightGreen.m100,
                      borderRadius: 10,
                      color: lightGreen.m900,
                      fontSize: '1.4rem',
                      fontWeight: 600,
                    }}
                  >
                    Lazy component loaded successfully!
                  </div>
                ),
              }),
            800
          )
        )
    );
    setLazyComp(() => comp);
    setShowLazy(true);
  };

  return (
    <StoryPage $bg={lightGreen.m50}>
      <MaxWidth>
        <Card $accent={lightGreen.m600}>
          <CardHeader $bg='#fff' $border={lightGreen.m100}>
            <div>
              <FnName $color={lightGreen.m900} $bg={lightGreen.m100}>
                lazyLoadComponent
              </FnName>
              <Signature>(importFn) → LazyComponent</Signature>
            </div>
            <Description>
              Wraps <Code>React.lazy</Code> for code-split components. The import function is called
              only when the component is first rendered, keeping the initial bundle lean. Pair with{' '}
              <Code>{'<Suspense>'}</Code> to show a fallback while loading.
            </Description>
          </CardHeader>
          <CardBody>
            <div>
              <SectionLabel $color={lightGreen.m800}>Demo (simulated 800 ms load)</SectionLabel>
              <DemoButton $bg={lightGreen.m600} onClick={handleLoad} disabled={showLazy}>
                {showLazy ? 'Loading…' : 'Load lazy component'}
              </DemoButton>
              {showLazy && LazyComp && (
                <div style={{ marginTop: '1.6rem' }}>
                  <Suspense
                    fallback={
                      <div style={{ color: lightGreen.m600, fontSize: '1.4rem' }}>
                        Loading component…
                      </div>
                    }
                  >
                    <LazyComp />
                  </Suspense>
                </div>
              )}
            </div>
            <div>
              <SectionLabel $color={lightGreen.m800}>Usage</SectionLabel>
              <Pre>{`import { Suspense } from 'react';
import lazyLoadComponent from 'meticulous-ui/utils/lazyLoadComponent';

const HeavyChart = lazyLoadComponent(() => import('./HeavyChart'));

function Dashboard() {
  return (
    <Suspense fallback={<Spinner />}>
      <HeavyChart />
    </Suspense>
  );
}`}</Pre>
            </div>
            <div>
              <SectionLabel $color={lightGreen.m800}>Source</SectionLabel>
              <Pre>{`import { lazy } from 'react';

const lazyLoadComponent = (importFn) => lazy(importFn);`}</Pre>
            </div>
          </CardBody>
        </Card>
      </MaxWidth>
    </StoryPage>
  );
};

// ═════════════════════════════════════════════════════════════════════════════
// requestIdleTask — lime
// ═════════════════════════════════════════════════════════════════════════════

const RequestIdleTaskPage = () => {
  const [tasks, setTasks] = useState([]);
  const counter = useRef(0);

  const queueTask = () => {
    const id = ++counter.current;
    const queued = Date.now();
    requestIdleTask(() => {
      const elapsed = Date.now() - queued;
      setTasks((prev) => [{ id, elapsed }, ...prev.slice(0, 4)]);
    });
  };

  return (
    <StoryPage $bg={lime.m50}>
      <MaxWidth>
        <Card $accent={lime.m700}>
          <CardHeader $bg='#fff' $border={lime.m100}>
            <div>
              <FnName $color={lime.m900} $bg={lime.m100}>
                requestIdleTask
              </FnName>
              <Signature>(fn) → void</Signature>
            </div>
            <Description>
              Schedules <Code>fn</Code> to run during the browser's idle period via{' '}
              <Code>requestIdleCallback</Code>, with a <Code>setTimeout(fn, 1)</Code> fallback for
              Safari. Ideal for non-critical work like analytics, prefetching, or cache warming that
              shouldn't block the main thread.
            </Description>
          </CardHeader>
          <CardBody>
            <div>
              <SectionLabel $color={lime.m800}>Demo</SectionLabel>
              <DemoButton $bg={lime.m700} onClick={queueTask}>
                Queue idle task
              </DemoButton>
              {tasks.length > 0 && (
                <div
                  style={{
                    marginTop: '1.6rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.8rem',
                  }}
                >
                  {tasks.map(({ id, elapsed }) => (
                    <ResultLine key={id} $color={lime.m900} $bg={lime.m100}>
                      Task #{id} ran after {elapsed} ms of idle time
                    </ResultLine>
                  ))}
                </div>
              )}
            </div>
            <div>
              <SectionLabel $color={lime.m800}>Usage</SectionLabel>
              <Pre>{`import requestIdleTask from 'meticulous-ui/utils/requestIdleTask';

// queue non-critical work
requestIdleTask(() => {
  prefetchNextPageData();
});

requestIdleTask(() => {
  sendAnalyticsEvent('page_view');
});`}</Pre>
            </div>
            <div>
              <SectionLabel $color={lime.m800}>Source</SectionLabel>
              <Pre>{`const requestIdleTask = (fn) => {
  if (typeof requestIdleCallback !== 'undefined') {
    requestIdleCallback(fn);
  } else {
    setTimeout(fn, 1);
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
// rafThrottle — red
// ═════════════════════════════════════════════════════════════════════════════

const RafThrottlePage = () => {
  const boxRef = useRef(null);
  const rawCount = useRef(0);
  const [rafCount, setRafCount] = useState(0);
  const [raw, setRaw] = useState(0);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const throttledMove = useRef(
    rafThrottle((x, y) => {
      setPos({ x, y });
      setRafCount((c) => c + 1);
    })
  ).current;

  const handleMove = (e) => {
    const rect = boxRef.current?.getBoundingClientRect();
    if (!rect) return;
    rawCount.current += 1;
    setRaw(rawCount.current);
    throttledMove(Math.round(e.clientX - rect.left), Math.round(e.clientY - rect.top));
  };

  const reset = () => {
    rawCount.current = 0;
    setRaw(0);
    setRafCount(0);
    setPos({ x: 0, y: 0 });
  };

  return (
    <StoryPage $bg={red.m50}>
      <MaxWidth>
        <Card $accent={red.m500}>
          <CardHeader $bg='#fff' $border={red.m100}>
            <div>
              <FnName $color={red.m900} $bg={red.m100}>
                rafThrottle
              </FnName>
              <Signature>(fn) → fn</Signature>
            </div>
            <Description>
              Throttles <Code>fn</Code> to once per animation frame using{' '}
              <Code>requestAnimationFrame</Code>. Subsequent calls within the same frame are
              dropped, ensuring smooth 60 fps updates for scroll/mouse handlers without visual jank.
            </Description>
          </CardHeader>
          <CardBody>
            <div>
              <SectionLabel $color={red.m700}>Demo — move your mouse inside the box</SectionLabel>
              <div
                ref={boxRef}
                onMouseMove={handleMove}
                style={{
                  height: '16rem',
                  background: red.m50,
                  border: `2px dashed ${red.m300}`,
                  borderRadius: 10,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'crosshair',
                  color: red.m400,
                  fontSize: '1.3rem',
                  userSelect: 'none',
                }}
              >
                {pos.x === 0 && pos.y === 0 ? 'Move mouse here' : `x: ${pos.x}, y: ${pos.y}`}
              </div>
              <StatBox style={{ marginTop: '1.6rem' }}>
                <Stat $bg={red.m50}>
                  <StatValue $color={red.m300}>{raw}</StatValue>
                  <StatLabel>Raw mousemove events</StatLabel>
                </Stat>
                <Stat $bg={red.m50}>
                  <StatValue $color={red.m600}>{rafCount}</StatValue>
                  <StatLabel>RAF-throttled calls</StatLabel>
                </Stat>
              </StatBox>
              <DemoButton $bg={blueGray.m400} onClick={reset} style={{ marginTop: '1.2rem' }}>
                Reset counters
              </DemoButton>
            </div>
            <div>
              <SectionLabel $color={red.m700}>Usage</SectionLabel>
              <Pre>{`import rafThrottle from 'meticulous-ui/utils/rafThrottle';

const throttledScroll = rafThrottle(() => {
  updateParallaxEffect();
});

window.addEventListener('scroll', throttledScroll);`}</Pre>
            </div>
            <div>
              <SectionLabel $color={red.m700}>Source</SectionLabel>
              <Pre>{`const rafThrottle = (fn) => {
  let rafId = null;
  return (...args) => {
    if (rafId !== null) return;
    rafId = requestAnimationFrame(() => {
      fn(...args);
      rafId = null;
    });
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
  title: 'Utilities/Performance Utilities',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    layout: 'fullscreen',
  },
};

export const Debounce = () => <DebouncePage />;
Debounce.storyName = 'debounce';

export const Throttle = () => <ThrottlePage />;
Throttle.storyName = 'throttle';

export const Memoize = () => <MemoizePage />;
Memoize.storyName = 'memoize';

export const LazyLoadComponent = () => <LazyLoadComponentPage />;
LazyLoadComponent.storyName = 'lazyLoadComponent';

export const RequestIdleTask = () => <RequestIdleTaskPage />;
RequestIdleTask.storyName = 'requestIdleTask';

export const RafThrottle = () => <RafThrottlePage />;
RafThrottle.storyName = 'rafThrottle';
