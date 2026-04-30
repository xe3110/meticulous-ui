import { useState } from 'react';
import styled from 'styled-components';

import blueGray from '../src/colors/blueGray';
import purple from '../src/colors/purple';
import grey from '../src/colors/grey';
import teal from '../src/colors/teal';
import deepOrange from '../src/colors/deepOrange';
import cyan from '../src/colors/cyan';
import indigo from '../src/colors/indigo';
import amber from '../src/colors/amber';
import white from '../src/colors/white';

// ─── Page wrapper ─────────────────────────────────────────────────────────────

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

// ─── Card ─────────────────────────────────────────────────────────────────────

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

// ─── Examples table ───────────────────────────────────────────────────────────

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1.3rem;
`;

const Th = styled.th`
  text-align: left;
  padding: 1rem 1.4rem;
  background: ${blueGray.m50};
  color: ${blueGray.m500};
  font-weight: 600;
  font-size: 1.2rem;
  border: 1px solid ${blueGray.m100};
`;

const Td = styled.td`
  padding: 1rem 1.4rem;
  border: 1px solid ${blueGray.m100};
  vertical-align: top;
`;

const Code = styled.code`
  background: ${blueGray.m50};
  padding: 0.2rem 0.55rem;
  border-radius: 4px;
  font-size: 1.25rem;
  color: ${blueGray.m800};
`;

const Output = styled.code`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ $color }) => $color};
`;

const ExamplesTable = ({ rows, outputColor }) => (
  <Table>
    <thead>
      <tr>
        <Th>Input</Th>
        <Th>Output</Th>
        <Th>Notes</Th>
      </tr>
    </thead>
    <tbody>
      {rows.map(({ input, output, note }, i) => (
        <tr key={i}>
          <Td>
            <Code>{input}</Code>
          </Td>
          <Td>
            <Output $color={outputColor}>{output}</Output>
          </Td>
          <Td style={{ color: blueGray.m400, fontSize: '1.2rem' }}>{note ?? ''}</Td>
        </tr>
      ))}
    </tbody>
  </Table>
);

// ─── Source block ─────────────────────────────────────────────────────────────

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

// ─── Demo helpers ─────────────────────────────────────────────────────────────

const DemoBox = styled.div`
  background: ${({ $bg }) => $bg};
  border-radius: 10px;
  padding: 2rem 2.4rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;
  flex-wrap: wrap;
`;

const DemoBtn = styled.button`
  padding: 0.7rem 1.6rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 600;
  background: ${({ $bg }) => $bg};
  color: ${white};
`;

const DemoOutput = styled.code`
  font-size: 1.3rem;
  font-weight: 700;
  color: ${({ $color }) => $color};
`;

// ═════════════════════════════════════════════════════════════════════════════
// once — purple
// ═════════════════════════════════════════════════════════════════════════════

const OnceDemo = () => {
  const [log, setLog] = useState([]);

  const initOnce = useState(() => {
    let count = 0;
    const fn = () => {
      count += 1;
      return count;
    };
    let called = false;
    let result;
    return (...args) => {
      if (!called) {
        called = true;
        result = fn(...args);
      }
      return result;
    };
  })[0];

  const handleClick = () => {
    const result = initOnce();
    setLog((prev) => [...prev, `call → ${result}`]);
  };

  return (
    <DemoBox $bg={purple.m50} style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
        <DemoBtn $bg={purple.m600} onClick={handleClick}>
          Call once()
        </DemoBtn>
        <DemoOutput $color={purple.m700}>
          {log.length === 0 ? 'not called yet' : log[log.length - 1]}
        </DemoOutput>
      </div>
      <p style={{ fontSize: '1.2rem', color: blueGray.m400, margin: 0 }}>
        The wrapped function runs only on the first call — all subsequent calls return the same
        cached result.
      </p>
    </DemoBox>
  );
};

const OncePage = () => (
  <StoryPage $bg={purple.m50}>
    <MaxWidth>
      <Card $accent={purple.m500}>
        <CardHeader $bg={white} $border={purple.m100}>
          <div>
            <FnName $color={purple.m900} $bg={purple.m100}>
              once
            </FnName>
            <Signature>(fn: Function) → Function</Signature>
          </div>
          <Description>
            Returns a wrapper that calls <Code>fn</Code> at most once. Every subsequent call returns
            the cached result without calling <Code>fn</Code> again. Useful for one-time
            initialisation, SDK setup, or event binding that must not repeat.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={purple.m700}>Examples</SectionLabel>
            <ExamplesTable
              outputColor={purple.m700}
              rows={[
                {
                  input: `const init = once(() => 42); init(); init();`,
                  output: `42, 42`,
                  note: 'fn runs once; second call returns cached value',
                },
                {
                  input: `const greet = once((n) => 'Hello ' + n); greet('Alice'); greet('Bob');`,
                  output: `'Hello Alice', 'Hello Alice'`,
                  note: 'Second call argument is ignored',
                },
                {
                  input: `let n = 0; const inc = once(() => ++n); inc(); inc(); n`,
                  output: `1`,
                  note: 'Side effect runs exactly once',
                },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={purple.m700}>Demo</SectionLabel>
            <OnceDemo />
          </div>
          <div>
            <SectionLabel $color={purple.m700}>Usage</SectionLabel>
            <Pre>{`import once from 'meticulous-ui/utils/once';

const initAnalytics = once(() => {
  console.log('Analytics initialised');
  return analytics.init({ key: 'abc' });
});

// Called three times throughout the app — runs only the first time
initAnalytics();
initAnalytics();
initAnalytics();`}</Pre>
          </div>
          <div>
            <SectionLabel $color={purple.m700}>Source</SectionLabel>
            <Pre>{`const once = (fn) => {
  let called = false;
  let result;
  return (...args) => {
    if (!called) {
      called = true;
      result = fn(...args);
    }
    return result;
  };
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// noop — grey
// ═════════════════════════════════════════════════════════════════════════════

const NoopPage = () => (
  <StoryPage $bg={grey.m100}>
    <MaxWidth>
      <Card $accent={grey.m600}>
        <CardHeader $bg={white} $border={grey.m200}>
          <div>
            <FnName $color={grey.m900} $bg={grey.m200}>
              noop
            </FnName>
            <Signature>() → void</Signature>
          </div>
          <Description>
            A function that does nothing and returns <Code>undefined</Code>. Use it as a safe
            default for optional callback props, stub handlers in tests, or any place that needs a
            callable but should have no effect.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={grey.m700}>Examples</SectionLabel>
            <ExamplesTable
              outputColor={grey.m700}
              rows={[
                { input: `noop()`, output: `undefined`, note: 'Does nothing, returns undefined' },
                {
                  input: `noop(1, 2, 3)`,
                  output: `undefined`,
                  note: 'Arguments are accepted but ignored',
                },
                {
                  input: `typeof noop`,
                  output: `'function'`,
                  note: 'Always safe to call',
                },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={grey.m700}>Usage</SectionLabel>
            <Pre>{`import noop from 'meticulous-ui/utils/noop';

// Safe default for optional callbacks
function Button({ onClick = noop, children }) {
  return <button onClick={onClick}>{children}</button>;
}

// Silence an event without creating an inline arrow function
<form onSubmit={noop} />`}</Pre>
          </div>
          <div>
            <SectionLabel $color={grey.m700}>Source</SectionLabel>
            <Pre>{`const noop = () => {};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// identity — teal
// ═════════════════════════════════════════════════════════════════════════════

const IdentityPage = () => (
  <StoryPage $bg={teal.m50}>
    <MaxWidth>
      <Card $accent={teal.m500}>
        <CardHeader $bg={white} $border={teal.m100}>
          <div>
            <FnName $color={teal.m900} $bg={teal.m100}>
              identity
            </FnName>
            <Signature>(x: any) → any</Signature>
          </div>
          <Description>
            Returns its argument unchanged. Useful as a default transform, a no-op mapper in
            pipelines, or a placeholder where a function is required but no transformation is
            needed.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={teal.m700}>Examples</SectionLabel>
            <ExamplesTable
              outputColor={teal.m700}
              rows={[
                { input: `identity(42)`, output: `42` },
                { input: `identity('hello')`, output: `'hello'` },
                { input: `identity({ a: 1 })`, output: `{ a: 1 }`, note: 'Same reference' },
                { input: `identity(null)`, output: `null` },
                { input: `identity(undefined)`, output: `undefined` },
                {
                  input: `[1, 2, 3].map(identity)`,
                  output: `[1, 2, 3]`,
                  note: 'No-op mapper',
                },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={teal.m700}>Usage</SectionLabel>
            <Pre>{`import identity from 'meticulous-ui/utils/identity';

// Default transform when caller provides none
function transform(value, fn = identity) {
  return fn(value);
}

transform(5);           // → 5
transform(5, x => x*2); // → 10`}</Pre>
          </div>
          <div>
            <SectionLabel $color={teal.m700}>Source</SectionLabel>
            <Pre>{`const identity = (x) => x;`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// pipe — deepOrange
// ═════════════════════════════════════════════════════════════════════════════

const PipePage = () => (
  <StoryPage $bg={deepOrange.m50}>
    <MaxWidth>
      <Card $accent={deepOrange.m500}>
        <CardHeader $bg={white} $border={deepOrange.m100}>
          <div>
            <FnName $color={deepOrange.m900} $bg={deepOrange.m100}>
              pipe
            </FnName>
            <Signature>(...fns: Function[]) → Function</Signature>
          </div>
          <Description>
            Creates a left-to-right function pipeline. The output of each function is passed as
            input to the next. The opposite of <Code>compose</Code> — reads in the same order
            functions execute.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={deepOrange.m700}>Examples</SectionLabel>
            <ExamplesTable
              outputColor={deepOrange.m700}
              rows={[
                {
                  input: `pipe(x => x + 1, x => x * 2)(3)`,
                  output: `8`,
                  note: '(3+1)*2 — left to right',
                },
                {
                  input: `pipe(x => x * 2, x => x + 1)(3)`,
                  output: `7`,
                  note: '(3*2)+1 — order matters',
                },
                {
                  input: `pipe(s => s.trim(), s => s.toUpperCase())('  hello  ')`,
                  output: `'HELLO'`,
                  note: 'String transforms',
                },
                {
                  input: `pipe(identity)(42)`,
                  output: `42`,
                  note: 'Single function — pass-through',
                },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={deepOrange.m700}>Usage</SectionLabel>
            <Pre>{`import pipe from 'meticulous-ui/utils/pipe';

const processName = pipe(
  (s) => s.trim(),
  (s) => s.toLowerCase(),
  (s) => s.replace(/\s+/g, '-'),
);

processName('  Hello World  ');  // → 'hello-world'`}</Pre>
          </div>
          <div>
            <SectionLabel $color={deepOrange.m700}>Source</SectionLabel>
            <Pre>{`const pipe =
  (...fns) =>
  (val) =>
    fns.reduce((cv, cf) => cf(cv), val);`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// singleton — cyan
// ═════════════════════════════════════════════════════════════════════════════

const SingletonDemo = () => {
  const [log, setLog] = useState([]);

  const getInstance = useState(() => {
    let instance;
    let callCount = 0;
    const factory = () => {
      callCount += 1;
      return { id: Math.random().toString(36).slice(2, 8), factoryCalls: callCount };
    };
    return () => {
      if (instance === undefined) instance = factory();
      return instance;
    };
  })[0];

  const handleClick = () => {
    const inst = getInstance();
    setLog((prev) => [...prev, `id: ${inst.id} | factory called: ${inst.factoryCalls}x`]);
  };

  return (
    <DemoBox $bg={cyan.m50} style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
      <DemoBtn $bg={cyan.m600} onClick={handleClick}>
        getInstance()
      </DemoBtn>
      {log.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          {log.map((entry, i) => (
            <DemoOutput key={i} $color={cyan.m800}>
              {entry}
            </DemoOutput>
          ))}
        </div>
      )}
      <p style={{ fontSize: '1.2rem', color: blueGray.m400, margin: 0 }}>
        The factory runs exactly once — every call returns the same instance.
      </p>
    </DemoBox>
  );
};

const SingletonPage = () => (
  <StoryPage $bg={cyan.m50}>
    <MaxWidth>
      <Card $accent={cyan.m500}>
        <CardHeader $bg={white} $border={cyan.m100}>
          <div>
            <FnName $color={cyan.m900} $bg={cyan.m100}>
              singleton
            </FnName>
            <Signature>(factory: Function) → () → any</Signature>
          </div>
          <Description>
            Wraps a <Code>factory</Code> function so it is called at most once. Every subsequent
            call to the returned getter returns the same cached instance without re-invoking the
            factory. Useful for shared resources like database connections, event buses, or config
            objects.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={cyan.m700}>Examples</SectionLabel>
            <ExamplesTable
              outputColor={cyan.m700}
              rows={[
                {
                  input: `const get = singleton(() => ({ id: 1 })); get() === get()`,
                  output: `true`,
                  note: 'Same reference every call',
                },
                {
                  input: `let n = 0; const get = singleton(() => ++n); get(); get(); get()`,
                  output: `1, 1, 1`,
                  note: 'Factory runs only once',
                },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={cyan.m700}>Demo</SectionLabel>
            <SingletonDemo />
          </div>
          <div>
            <SectionLabel $color={cyan.m700}>Usage</SectionLabel>
            <Pre>{`import singleton from 'meticulous-ui/utils/singleton';

const getConfig = singleton(() => ({
  apiUrl: process.env.API_URL,
  timeout: 5000,
}));

getConfig() === getConfig();  // → true (same object)`}</Pre>
          </div>
          <div>
            <SectionLabel $color={cyan.m700}>Source</SectionLabel>
            <Pre>{`const singleton = (factory) => {
  let instance;
  return () => {
    if (instance === undefined) instance = factory();
    return instance;
  };
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// createPubSub — indigo
// ═════════════════════════════════════════════════════════════════════════════

const CreatePubSubDemo = () => {
  const [events, setEvents] = useState([]);

  const bus = useState(() => {
    let listeners = {};
    return {
      subscribe: (event, handler) => {
        (listeners[event] ??= []).push(handler);
        return () => {
          listeners[event] = listeners[event].filter((h) => h !== handler);
        };
      },
      publish: (event, ...args) => {
        (listeners[event] ?? []).forEach((h) => h(...args));
      },
    };
  })[0];

  useState(() => {
    bus.subscribe('message', (msg) => {
      setEvents((prev) => [...prev, msg]);
    });
  });

  const send = (msg) => bus.publish('message', msg);

  return (
    <DemoBox $bg={indigo.m50} style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {['ping', 'hello', 'update'].map((msg) => (
          <DemoBtn key={msg} $bg={indigo.m600} onClick={() => send(msg)}>
            publish("{msg}")
          </DemoBtn>
        ))}
      </div>
      <div style={{ fontSize: '1.25rem', color: indigo.m800, minHeight: '2rem' }}>
        {events.length === 0
          ? 'No events yet'
          : events.map((e, i) => (
              <span key={i} style={{ marginRight: '0.8rem' }}>
                {e}
              </span>
            ))}
      </div>
    </DemoBox>
  );
};

const CreatePubSubPage = () => (
  <StoryPage $bg={indigo.m50}>
    <MaxWidth>
      <Card $accent={indigo.m500}>
        <CardHeader $bg={white} $border={indigo.m100}>
          <div>
            <FnName $color={indigo.m900} $bg={indigo.m100}>
              createPubSub
            </FnName>
            <Signature>() → {'{ subscribe, publish }'}</Signature>
          </div>
          <Description>
            Creates an isolated publish-subscribe event bus. <Code>subscribe(event, handler)</Code>{' '}
            registers a listener and returns an unsubscribe function.{' '}
            <Code>publish(event, ...args)</Code> calls all listeners for that event.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={indigo.m700}>Examples</SectionLabel>
            <ExamplesTable
              outputColor={indigo.m700}
              rows={[
                {
                  input: `const bus = createPubSub(); bus.subscribe('x', v => console.log(v)); bus.publish('x', 42)`,
                  output: `42`,
                  note: 'Handler called with published value',
                },
                {
                  input: `const unsub = bus.subscribe('x', fn); unsub(); bus.publish('x', 1)`,
                  output: `(nothing)`,
                  note: 'Calling unsub removes the listener',
                },
                {
                  input: `bus.publish('unknown', 1)`,
                  output: `(nothing)`,
                  note: 'Publishing to an unregistered event is safe',
                },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={indigo.m700}>Demo</SectionLabel>
            <CreatePubSubDemo />
          </div>
          <div>
            <SectionLabel $color={indigo.m700}>Usage</SectionLabel>
            <Pre>{`import createPubSub from 'meticulous-ui/utils/createPubSub';

const bus = createPubSub();

// Subscribe
const unsub = bus.subscribe('cart:update', (items) => {
  updateCartBadge(items.length);
});

// Publish from anywhere
bus.publish('cart:update', cartItems);

// Clean up when component unmounts
unsub();`}</Pre>
          </div>
          <div>
            <SectionLabel $color={indigo.m700}>Source</SectionLabel>
            <Pre>{`const createPubSub = () => {
  const listeners = {};

  const subscribe = (event, handler) => {
    (listeners[event] ??= []).push(handler);
    return () => {
      listeners[event] = listeners[event].filter((h) => h !== handler);
    };
  };

  const publish = (event, ...args) => {
    (listeners[event] ?? []).forEach((h) => h(...args));
  };

  return { subscribe, publish };
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// deepFreeze — amber
// ═════════════════════════════════════════════════════════════════════════════

const DeepFreezePage = () => (
  <StoryPage $bg={amber.m50}>
    <MaxWidth>
      <Card $accent={amber.m700}>
        <CardHeader $bg={white} $border={amber.m200}>
          <div>
            <FnName $color={amber.m900} $bg={amber.m200}>
              deepFreeze
            </FnName>
            <Signature>(obj: object) → object</Signature>
          </div>
          <Description>
            Recursively freezes an object and all of its nested plain-object values using{' '}
            <Code>Object.freeze</Code>. Any attempt to mutate a frozen object throws a{' '}
            <Code>TypeError</Code> in strict mode and silently fails otherwise. Returns the same
            object reference.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={amber.m800}>Examples</SectionLabel>
            <ExamplesTable
              outputColor={amber.m800}
              rows={[
                {
                  input: `const c = deepFreeze({ a: 1 }); c.a = 9; c.a`,
                  output: `1`,
                  note: 'Mutation silently ignored (strict: TypeError)',
                },
                {
                  input: `const c = deepFreeze({ a: { b: 2 } }); c.a.b = 9; c.a.b`,
                  output: `2`,
                  note: 'Nested objects also frozen',
                },
                {
                  input: `Object.isFrozen(deepFreeze({ x: 1 }))`,
                  output: `true`,
                },
                {
                  input: `const obj = { a: 1 }; deepFreeze(obj) === obj`,
                  output: `true`,
                  note: 'Returns same reference',
                },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={amber.m800}>Usage</SectionLabel>
            <Pre>{`import deepFreeze from 'meticulous-ui/utils/deepFreeze';

const CONFIG = deepFreeze({
  api: { url: 'https://api.example.com', timeout: 5000 },
  features: { darkMode: true },
});

// Any mutation attempt will throw in strict mode
CONFIG.api.url = 'https://evil.com';  // TypeError`}</Pre>
          </div>
          <div>
            <SectionLabel $color={amber.m800}>Source</SectionLabel>
            <Pre>{`const deepFreeze = (obj) => {
  Object.getOwnPropertyNames(obj).forEach((name) => {
    const value = obj[name];
    if (value && typeof value === 'object') deepFreeze(value);
  });
  return Object.freeze(obj);
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
  title: 'Utilities/Function Utilities',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    layout: 'fullscreen',
  },
};

export const Once = () => <OncePage />;
Once.storyName = 'once';

export const Noop = () => <NoopPage />;
Noop.storyName = 'noop';

export const Identity = () => <IdentityPage />;
Identity.storyName = 'identity';

export const Pipe = () => <PipePage />;
Pipe.storyName = 'pipe';

export const Singleton = () => <SingletonPage />;
Singleton.storyName = 'singleton';

export const CreatePubSub = () => <CreatePubSubPage />;
CreatePubSub.storyName = 'createPubSub';

export const DeepFreeze = () => <DeepFreezePage />;
DeepFreeze.storyName = 'deepFreeze';
