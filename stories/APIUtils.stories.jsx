import { useState, useRef } from 'react';
import styled from 'styled-components';

import blueGray from '../src/colors/blueGray';
import orange from '../src/colors/orange';
import lightBlue from '../src/colors/lightBlue';
import red from '../src/colors/red';
import green from '../src/colors/green';
import indigo from '../src/colors/indigo';
import deepPurple from '../src/colors/deepPurple';
import cyan from '../src/colors/cyan';

import retry from '../src/utils/retry';
import sleep from '../src/utils/sleep';
import withTimeout from '../src/utils/withTimeout';
import parallel from '../src/utils/parallel';
import sequential from '../src/utils/sequential';
import safeAsync from '../src/utils/safeAsync';
import cancelablePromise from '../src/utils/cancelablePromise';

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

const LogList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-top: 1.4rem;
`;

const LogEntry = styled.div`
  font-size: 1.3rem;
  font-family: monospace;
  padding: 0.7rem 1.2rem;
  border-radius: 6px;
  background: ${({ $bg }) => $bg || blueGray.m50};
  color: ${({ $color }) => $color || blueGray.m700};
  border-left: 3px solid ${({ $border }) => $border || blueGray.m200};
`;

const StatBox = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 1.4rem;
`;

const Stat = styled.div`
  background: ${({ $bg }) => $bg};
  border-radius: 10px;
  padding: 1.2rem 2rem;
  min-width: 11rem;
`;

const StatValue = styled.div`
  font-size: 2.6rem;
  font-weight: 800;
  color: ${({ $color }) => $color};
  line-height: 1;
`;

const StatLabel = styled.div`
  font-size: 1.1rem;
  color: ${blueGray.m500};
  margin-top: 0.4rem;
`;

const SliderRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
  font-size: 1.3rem;
  color: ${blueGray.m600};
`;

// ═════════════════════════════════════════════════════════════════════════════
// retry — orange
// ═════════════════════════════════════════════════════════════════════════════

const RetryPage = () => {
  const [log, setLog] = useState([]);
  const [running, setRunning] = useState(false);
  const [failUntil, setFailUntil] = useState(2);
  const [attempts, setAttempts] = useState(3);

  const addLog = (msg, type = 'info') => setLog((l) => [...l, { msg, type, t: Date.now() }]);

  const colors = {
    info: { bg: blueGray.m50, color: blueGray.m700, border: blueGray.m200 },
    error: { bg: red.m50, color: red.m700, border: red.m300 },
    success: { bg: green.m50, color: green.m800, border: green.m400 },
  };

  const run = async () => {
    setRunning(true);
    setLog([]);
    let callCount = 0;
    const flaky = async () => {
      callCount++;
      addLog(`Attempt ${callCount}…`, 'info');
      await sleep(400);
      if (callCount <= failUntil) throw new Error(`Simulated failure on attempt ${callCount}`);
      return `Success on attempt ${callCount}`;
    };
    try {
      const result = await retry(flaky, attempts);
      addLog(result, 'success');
    } catch (err) {
      addLog(`All ${attempts} attempts failed: ${err.message}`, 'error');
    }
    setRunning(false);
  };

  return (
    <StoryPage $bg={orange.m50}>
      <MaxWidth>
        <Card $accent={orange.m500}>
          <CardHeader $bg='#fff' $border={orange.m100}>
            <div>
              <FnName $color={orange.m900} $bg={orange.m100}>
                retry
              </FnName>
              <Signature>(fn, attempts = 3) → Promise</Signature>
            </div>
            <Description>
              Calls <Code>fn</Code> up to <Code>attempts</Code> times until it resolves. If every
              attempt throws, the last error is re-thrown. Useful for flaky network requests or
              transient failures.
            </Description>
          </CardHeader>
          <CardBody>
            <div>
              <SectionLabel $color={orange.m700}>Demo</SectionLabel>
              <SliderRow>
                <span>Fail first</span>
                <input
                  type='range'
                  min={0}
                  max={5}
                  value={failUntil}
                  onChange={(e) => setFailUntil(Number(e.target.value))}
                />
                <strong>{failUntil} attempts</strong>
                <span style={{ marginLeft: '1.6rem' }}>Max retries</span>
                <input
                  type='range'
                  min={1}
                  max={6}
                  value={attempts}
                  onChange={(e) => setAttempts(Number(e.target.value))}
                />
                <strong>{attempts}</strong>
              </SliderRow>
              <DemoRow style={{ marginTop: '1.2rem' }}>
                <DemoButton $bg={orange.m500} onClick={run} disabled={running}>
                  {running ? 'Running…' : 'Run retry()'}
                </DemoButton>
              </DemoRow>
              {log.length > 0 && (
                <LogList>
                  {log.map(({ msg, type }, i) => (
                    <LogEntry
                      key={i}
                      $bg={colors[type].bg}
                      $color={colors[type].color}
                      $border={colors[type].border}
                    >
                      {msg}
                    </LogEntry>
                  ))}
                </LogList>
              )}
            </div>
            <div>
              <SectionLabel $color={orange.m700}>Usage</SectionLabel>
              <Pre>{`import retry from 'meticulous-ui/utils/retry';

const data = await retry(() => fetch('/api/data').then(r => r.json()), 3);`}</Pre>
            </div>
            <div>
              <SectionLabel $color={orange.m700}>Source</SectionLabel>
              <Pre>{`const retry = async (fn, attempts = 3) => {
  let lastError;
  for (let i = 0; i < attempts; i++) {
    try { return await fn(); }
    catch (err) { lastError = err; }
  }
  throw lastError;
};`}</Pre>
            </div>
          </CardBody>
        </Card>
      </MaxWidth>
    </StoryPage>
  );
};

// ═════════════════════════════════════════════════════════════════════════════
// sleep — lightBlue
// ═════════════════════════════════════════════════════════════════════════════

const SleepPage = () => {
  const [ms, setMs] = useState(1000);
  const [status, setStatus] = useState(null);
  const [elapsed, setElapsed] = useState(null);
  const [running, setRunning] = useState(false);

  const run = async () => {
    setRunning(true);
    setStatus('sleeping');
    setElapsed(null);
    const t0 = Date.now();
    await sleep(ms);
    setElapsed(Date.now() - t0);
    setStatus('done');
    setRunning(false);
  };

  return (
    <StoryPage $bg={lightBlue.m50}>
      <MaxWidth>
        <Card $accent={lightBlue.m500}>
          <CardHeader $bg='#fff' $border={lightBlue.m100}>
            <div>
              <FnName $color={lightBlue.m900} $bg={lightBlue.m100}>
                sleep
              </FnName>
              <Signature>(ms) → Promise&lt;void&gt;</Signature>
            </div>
            <Description>
              Returns a Promise that resolves after <Code>ms</Code> milliseconds. Use with{' '}
              <Code>await</Code> to pause async execution — ideal for rate limiting, animations, or
              simulating network delays in tests.
            </Description>
          </CardHeader>
          <CardBody>
            <div>
              <SectionLabel $color={lightBlue.m700}>Demo</SectionLabel>
              <SliderRow>
                <span>Duration</span>
                <input
                  type='range'
                  min={200}
                  max={3000}
                  step={100}
                  value={ms}
                  onChange={(e) => setMs(Number(e.target.value))}
                />
                <strong>{ms} ms</strong>
              </SliderRow>
              <DemoRow style={{ marginTop: '1.2rem' }}>
                <DemoButton $bg={lightBlue.m500} onClick={run} disabled={running}>
                  {running ? `Sleeping ${ms}ms…` : `await sleep(${ms})`}
                </DemoButton>
              </DemoRow>
              {status === 'done' && elapsed !== null && (
                <StatBox>
                  <Stat $bg={lightBlue.m50}>
                    <StatValue $color={lightBlue.m700}>{elapsed}</StatValue>
                    <StatLabel>ms elapsed</StatLabel>
                  </Stat>
                  <Stat $bg={lightBlue.m50}>
                    <StatValue $color={lightBlue.m500}>{ms}</StatValue>
                    <StatLabel>ms requested</StatLabel>
                  </Stat>
                </StatBox>
              )}
            </div>
            <div>
              <SectionLabel $color={lightBlue.m700}>Usage</SectionLabel>
              <Pre>{`import sleep from 'meticulous-ui/utils/sleep';

async function pollStatus(id) {
  while (true) {
    const status = await fetchStatus(id);
    if (status === 'done') return;
    await sleep(2000); // wait 2s between polls
  }
}`}</Pre>
            </div>
            <div>
              <SectionLabel $color={lightBlue.m700}>Source</SectionLabel>
              <Pre>{`const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));`}</Pre>
            </div>
          </CardBody>
        </Card>
      </MaxWidth>
    </StoryPage>
  );
};

// ═════════════════════════════════════════════════════════════════════════════
// withTimeout — red
// ═════════════════════════════════════════════════════════════════════════════

const WithTimeoutPage = () => {
  const [taskMs, setTaskMs] = useState(2000);
  const [limitMs, setLimitMs] = useState(1500);
  const [log, setLog] = useState([]);
  const [running, setRunning] = useState(false);

  const colors = {
    info: { bg: blueGray.m50, color: blueGray.m700, border: blueGray.m200 },
    error: { bg: red.m50, color: red.m700, border: red.m300 },
    success: { bg: green.m50, color: green.m800, border: green.m400 },
  };

  const run = async () => {
    setRunning(true);
    setLog([{ msg: `Starting task (takes ${taskMs}ms) with ${limitMs}ms timeout…`, type: 'info' }]);
    const slowTask = sleep(taskMs).then(() => `Task completed in ${taskMs}ms`);
    try {
      const result = await withTimeout(slowTask, limitMs);
      setLog((l) => [...l, { msg: result, type: 'success' }]);
    } catch (err) {
      setLog((l) => [...l, { msg: err.message, type: 'error' }]);
    }
    setRunning(false);
  };

  return (
    <StoryPage $bg={red.m50}>
      <MaxWidth>
        <Card $accent={red.m500}>
          <CardHeader $bg='#fff' $border={red.m100}>
            <div>
              <FnName $color={red.m900} $bg={red.m100}>
                withTimeout
              </FnName>
              <Signature>(promise, ms) → Promise</Signature>
            </div>
            <Description>
              Races a promise against a timer. If the timer fires first, the returned promise
              rejects with a <Code>Timed out after Xms</Code> error. Set the task duration longer
              than the timeout to trigger the failure path.
            </Description>
          </CardHeader>
          <CardBody>
            <div>
              <SectionLabel $color={red.m700}>Demo</SectionLabel>
              <SliderRow>
                <span>Task duration</span>
                <input
                  type='range'
                  min={500}
                  max={4000}
                  step={100}
                  value={taskMs}
                  onChange={(e) => setTaskMs(Number(e.target.value))}
                />
                <strong>{taskMs} ms</strong>
              </SliderRow>
              <SliderRow style={{ marginTop: '0.8rem' }}>
                <span>Timeout limit</span>
                <input
                  type='range'
                  min={500}
                  max={4000}
                  step={100}
                  value={limitMs}
                  onChange={(e) => setLimitMs(Number(e.target.value))}
                />
                <strong style={{ color: limitMs < taskMs ? red.m600 : green.m700 }}>
                  {limitMs} ms
                </strong>
              </SliderRow>
              <DemoRow style={{ marginTop: '1.2rem' }}>
                <DemoButton $bg={red.m500} onClick={run} disabled={running}>
                  {running ? 'Racing…' : 'Run withTimeout()'}
                </DemoButton>
              </DemoRow>
              {log.length > 0 && (
                <LogList>
                  {log.map(({ msg, type }, i) => (
                    <LogEntry
                      key={i}
                      $bg={colors[type].bg}
                      $color={colors[type].color}
                      $border={colors[type].border}
                    >
                      {msg}
                    </LogEntry>
                  ))}
                </LogList>
              )}
            </div>
            <div>
              <SectionLabel $color={red.m700}>Usage</SectionLabel>
              <Pre>{`import withTimeout from 'meticulous-ui/utils/withTimeout';

const data = await withTimeout(
  fetch('/api/slow-endpoint').then(r => r.json()),
  5000 // reject if not resolved in 5s
);`}</Pre>
            </div>
            <div>
              <SectionLabel $color={red.m700}>Source</SectionLabel>
              <Pre>{`const withTimeout = (promise, ms) => {
  const timeout = new Promise((_, reject) =>
    setTimeout(() => reject(new Error(\`Timed out after \${ms}ms\`)), ms)
  );
  return Promise.race([promise, timeout]);
};`}</Pre>
            </div>
          </CardBody>
        </Card>
      </MaxWidth>
    </StoryPage>
  );
};

// ═════════════════════════════════════════════════════════════════════════════
// parallel — green
// ═════════════════════════════════════════════════════════════════════════════

const ParallelPage = () => {
  const [log, setLog] = useState([]);
  const [running, setRunning] = useState(false);
  const [totalMs, setTotalMs] = useState(null);

  const tasks = [
    { name: 'fetchUser', ms: 800 },
    { name: 'fetchPosts', ms: 1200 },
    { name: 'fetchSettings', ms: 600 },
  ];

  const run = async () => {
    setRunning(true);
    setLog([]);
    setTotalMs(null);
    const t0 = Date.now();
    const started = Date.now();

    const promises = tasks.map(({ name, ms }) =>
      sleep(ms).then(() => {
        const took = Date.now() - started;
        setLog((l) => [...l, { msg: `${name} resolved after ${took}ms`, type: 'success' }]);
        return name;
      })
    );

    setLog([{ msg: `Running ${tasks.length} tasks in parallel…`, type: 'info' }]);
    await parallel(promises);
    setTotalMs(Date.now() - t0);
    setRunning(false);
  };

  const colors = {
    info: { bg: blueGray.m50, color: blueGray.m700, border: blueGray.m200 },
    success: { bg: green.m50, color: green.m800, border: green.m400 },
  };

  return (
    <StoryPage $bg={green.m50}>
      <MaxWidth>
        <Card $accent={green.m500}>
          <CardHeader $bg='#fff' $border={green.m100}>
            <div>
              <FnName $color={green.m900} $bg={green.m100}>
                parallel
              </FnName>
              <Signature>(promises) → Promise&lt;any[]&gt;</Signature>
            </div>
            <Description>
              Runs all promises concurrently via <Code>Promise.all</Code> and resolves with an array
              of results in the same order. Total time equals the slowest task, not the sum of all
              tasks.
            </Description>
          </CardHeader>
          <CardBody>
            <div>
              <SectionLabel $color={green.m700}>Demo — 3 tasks: 800ms, 1200ms, 600ms</SectionLabel>
              <DemoRow>
                <DemoButton $bg={green.m500} onClick={run} disabled={running}>
                  {running ? 'Running in parallel…' : 'Run parallel()'}
                </DemoButton>
              </DemoRow>
              {log.length > 0 && (
                <LogList>
                  {log.map(({ msg, type }, i) => (
                    <LogEntry
                      key={i}
                      $bg={colors[type].bg}
                      $color={colors[type].color}
                      $border={colors[type].border}
                    >
                      {msg}
                    </LogEntry>
                  ))}
                </LogList>
              )}
              {totalMs !== null && (
                <StatBox>
                  <Stat $bg={green.m50}>
                    <StatValue $color={green.m600}>{totalMs}</StatValue>
                    <StatLabel>total ms (parallel)</StatLabel>
                  </Stat>
                  <Stat $bg={blueGray.m50}>
                    <StatValue $color={blueGray.m400}>{800 + 1200 + 600}</StatValue>
                    <StatLabel>ms if sequential</StatLabel>
                  </Stat>
                </StatBox>
              )}
            </div>
            <div>
              <SectionLabel $color={green.m700}>Usage</SectionLabel>
              <Pre>{`import parallel from 'meticulous-ui/utils/parallel';

const [user, posts, settings] = await parallel([
  fetchUser(id),
  fetchPosts(id),
  fetchSettings(id),
]);`}</Pre>
            </div>
            <div>
              <SectionLabel $color={green.m700}>Source</SectionLabel>
              <Pre>{`const parallel = (promises) => Promise.all(promises);`}</Pre>
            </div>
          </CardBody>
        </Card>
      </MaxWidth>
    </StoryPage>
  );
};

// ═════════════════════════════════════════════════════════════════════════════
// sequential — indigo
// ═════════════════════════════════════════════════════════════════════════════

const SequentialPage = () => {
  const [log, setLog] = useState([]);
  const [running, setRunning] = useState(false);
  const [totalMs, setTotalMs] = useState(null);

  const taskDefs = [
    { name: 'validateInput', ms: 400 },
    { name: 'saveToDatabase', ms: 700 },
    { name: 'sendEmail', ms: 500 },
  ];

  const run = async () => {
    setRunning(true);
    setLog([{ msg: 'Running tasks one by one…', type: 'info' }]);
    setTotalMs(null);
    const t0 = Date.now();

    await sequential(
      taskDefs.map(({ name, ms }) => async () => {
        setLog((l) => [...l, { msg: `Starting ${name}…`, type: 'info' }]);
        await sleep(ms);
        const took = Date.now() - t0;
        setLog((l) => [...l, { msg: `${name} done after ${took}ms total`, type: 'success' }]);
        return name;
      })
    );

    setTotalMs(Date.now() - t0);
    setRunning(false);
  };

  const colors = {
    info: { bg: indigo.m50, color: indigo.m700, border: indigo.m200 },
    success: { bg: green.m50, color: green.m800, border: green.m400 },
  };

  return (
    <StoryPage $bg={indigo.m50}>
      <MaxWidth>
        <Card $accent={indigo.m500}>
          <CardHeader $bg='#fff' $border={indigo.m100}>
            <div>
              <FnName $color={indigo.m900} $bg={indigo.m100}>
                sequential
              </FnName>
              <Signature>(tasks) → Promise&lt;any[]&gt;</Signature>
            </div>
            <Description>
              Runs an array of async task functions one after another, waiting for each to resolve
              before starting the next. Useful when order matters — e.g. validate → save → notify.
            </Description>
          </CardHeader>
          <CardBody>
            <div>
              <SectionLabel $color={indigo.m700}>Demo — validate → save → email</SectionLabel>
              <DemoRow>
                <DemoButton $bg={indigo.m500} onClick={run} disabled={running}>
                  {running ? 'Running sequentially…' : 'Run sequential()'}
                </DemoButton>
              </DemoRow>
              {log.length > 0 && (
                <LogList>
                  {log.map(({ msg, type }, i) => (
                    <LogEntry
                      key={i}
                      $bg={colors[type].bg}
                      $color={colors[type].color}
                      $border={colors[type].border}
                    >
                      {msg}
                    </LogEntry>
                  ))}
                </LogList>
              )}
              {totalMs !== null && (
                <StatBox>
                  <Stat $bg={indigo.m50}>
                    <StatValue $color={indigo.m600}>{totalMs}</StatValue>
                    <StatLabel>total ms (sequential)</StatLabel>
                  </Stat>
                  <Stat $bg={blueGray.m50}>
                    <StatValue $color={blueGray.m400}>{400 + 700 + 500}</StatValue>
                    <StatLabel>ms expected</StatLabel>
                  </Stat>
                </StatBox>
              )}
            </div>
            <div>
              <SectionLabel $color={indigo.m700}>Usage</SectionLabel>
              <Pre>{`import sequential from 'meticulous-ui/utils/sequential';

const results = await sequential([
  () => validateInput(data),
  () => saveToDatabase(data),
  () => sendConfirmationEmail(data),
]);`}</Pre>
            </div>
            <div>
              <SectionLabel $color={indigo.m700}>Source</SectionLabel>
              <Pre>{`const sequential = async (tasks) => {
  const results = [];
  for (const task of tasks) {
    results.push(await task());
  }
  return results;
};`}</Pre>
            </div>
          </CardBody>
        </Card>
      </MaxWidth>
    </StoryPage>
  );
};

// ═════════════════════════════════════════════════════════════════════════════
// safeAsync — deepPurple
// ═════════════════════════════════════════════════════════════════════════════

const SafeAsyncPage = () => {
  const [shouldFail, setShouldFail] = useState(false);
  const [result, setResult] = useState(null);
  const [running, setRunning] = useState(false);

  const fetchData = safeAsync(async () => {
    await sleep(600);
    if (shouldFail) throw new Error('Network error: 503 Service Unavailable');
    return { id: 1, name: 'Alice', role: 'admin' };
  });

  const run = async () => {
    setRunning(true);
    setResult(null);
    const [err, data] = await fetchData();
    setResult({ err: err ? err.message : null, data });
    setRunning(false);
  };

  return (
    <StoryPage $bg={deepPurple.m50}>
      <MaxWidth>
        <Card $accent={deepPurple.m500}>
          <CardHeader $bg='#fff' $border={deepPurple.m100}>
            <div>
              <FnName $color={deepPurple.m900} $bg={deepPurple.m100}>
                safeAsync
              </FnName>
              <Signature>(fn) → async fn → [error, result]</Signature>
            </div>
            <Description>
              Wraps an async function so it always resolves — never throws. Returns a{' '}
              <Code>[error, result]</Code> tuple: on success, <Code>error</Code> is{' '}
              <Code>null</Code>; on failure, <Code>result</Code> is <Code>null</Code>. Eliminates
              scattered <Code>try/catch</Code> blocks.
            </Description>
          </CardHeader>
          <CardBody>
            <div>
              <SectionLabel $color={deepPurple.m700}>Demo</SectionLabel>
              <DemoRow style={{ marginBottom: '1.2rem' }}>
                <label
                  style={{
                    fontSize: '1.4rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.8rem',
                    cursor: 'pointer',
                  }}
                >
                  <input
                    type='checkbox'
                    checked={shouldFail}
                    onChange={(e) => setShouldFail(e.target.checked)}
                    style={{ width: '1.6rem', height: '1.6rem', cursor: 'pointer' }}
                  />
                  <span style={{ color: shouldFail ? red.m600 : blueGray.m600 }}>
                    {shouldFail ? 'Will throw an error' : 'Will resolve successfully'}
                  </span>
                </label>
              </DemoRow>
              <DemoButton $bg={deepPurple.m500} onClick={run} disabled={running}>
                {running ? 'Calling safeAsync fn…' : 'Call safeAsync(fetchData)'}
              </DemoButton>
              {result !== null && (
                <LogList>
                  <LogEntry
                    $bg={result.err ? red.m50 : deepPurple.m50}
                    $color={result.err ? red.m700 : deepPurple.m700}
                    $border={result.err ? red.m300 : deepPurple.m300}
                  >
                    error → {result.err ?? 'null'}
                  </LogEntry>
                  <LogEntry
                    $bg={result.data ? deepPurple.m50 : blueGray.m50}
                    $color={result.data ? deepPurple.m700 : blueGray.m400}
                    $border={result.data ? deepPurple.m300 : blueGray.m200}
                  >
                    result → {result.data ? JSON.stringify(result.data) : 'null'}
                  </LogEntry>
                </LogList>
              )}
            </div>
            <div>
              <SectionLabel $color={deepPurple.m700}>Usage</SectionLabel>
              <Pre>{`import safeAsync from 'meticulous-ui/utils/safeAsync';

const safeGetUser = safeAsync(fetchUser);

const [err, user] = await safeGetUser(userId);
if (err) {
  showError(err.message);
  return;
}
renderProfile(user);`}</Pre>
            </div>
            <div>
              <SectionLabel $color={deepPurple.m700}>Source</SectionLabel>
              <Pre>{`const safeAsync = (fn) => async (...args) => {
  try {
    const result = await fn(...args);
    return [null, result];
  } catch (err) {
    return [err, null];
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
// cancelablePromise — cyan
// ═════════════════════════════════════════════════════════════════════════════

const CancelablePromisePage = () => {
  const [status, setStatus] = useState(null);
  const [running, setRunning] = useState(false);
  const cpRef = useRef(null);

  const start = () => {
    setStatus('running');
    setRunning(true);

    const slowTask = sleep(3000).then(() => 'Loaded successfully!');
    const cp = cancelablePromise(slowTask);
    cpRef.current = cp;

    cp.promise
      .then((val) => {
        setStatus('resolved: ' + val);
        setRunning(false);
      })
      .catch((err) => {
        if (err?.canceled) {
          setStatus('canceled');
        } else {
          setStatus('error: ' + err.message);
        }
        setRunning(false);
      });
  };

  const cancel = () => {
    cpRef.current?.cancel();
  };

  const statusColor = () => {
    if (!status) return {};
    if (status === 'running') return { bg: cyan.m50, color: cyan.m800, border: cyan.m300 };
    if (status === 'canceled') return { bg: red.m50, color: red.m700, border: red.m300 };
    if (status.startsWith('resolved'))
      return { bg: green.m50, color: green.m800, border: green.m400 };
    return { bg: blueGray.m50, color: blueGray.m600, border: blueGray.m200 };
  };

  const sc = statusColor();

  return (
    <StoryPage $bg={cyan.m50}>
      <MaxWidth>
        <Card $accent={cyan.m500}>
          <CardHeader $bg='#fff' $border={cyan.m100}>
            <div>
              <FnName $color={cyan.m900} $bg={cyan.m100}>
                cancelablePromise
              </FnName>
              <Signature>(promise) → &#123; promise, cancel &#125;</Signature>
            </div>
            <Description>
              Wraps a promise with a cancellation flag. Calling <Code>cancel()</Code> causes the
              wrapper promise to reject with <Code>&#123; canceled: true &#125;</Code> instead of
              resolving. Useful for aborting in-flight requests on component unmount.
            </Description>
          </CardHeader>
          <CardBody>
            <div>
              <SectionLabel $color={cyan.m700}>Demo — 3s task, cancel it mid-flight</SectionLabel>
              <DemoRow>
                <DemoButton $bg={cyan.m600} onClick={start} disabled={running}>
                  Start 3s task
                </DemoButton>
                <DemoButton $bg={red.m500} onClick={cancel} disabled={!running}>
                  Cancel
                </DemoButton>
              </DemoRow>
              {status && (
                <LogList>
                  <LogEntry $bg={sc.bg} $color={sc.color} $border={sc.border}>
                    {status}
                  </LogEntry>
                </LogList>
              )}
            </div>
            <div>
              <SectionLabel $color={cyan.m700}>Usage</SectionLabel>
              <Pre>{`import cancelablePromise from 'meticulous-ui/utils/cancelablePromise';

useEffect(() => {
  const { promise, cancel } = cancelablePromise(fetchData(id));

  promise
    .then(setData)
    .catch((err) => { if (!err.canceled) setError(err); });

  return cancel; // cancel on unmount
}, [id]);`}</Pre>
            </div>
            <div>
              <SectionLabel $color={cyan.m700}>Source</SectionLabel>
              <Pre>{`const cancelablePromise = (promise) => {
  let canceled = false;
  const wrapper = new Promise((resolve, reject) => {
    promise.then(
      (value) => (canceled ? reject({ canceled: true }) : resolve(value)),
      (err)   => (canceled ? reject({ canceled: true }) : reject(err))
    );
  });
  return { promise: wrapper, cancel: () => { canceled = true; } };
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
  title: 'Utils/API Utils',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    layout: 'fullscreen',
  },
};

export const Retry = () => <RetryPage />;
Retry.storyName = 'retry';

export const Sleep = () => <SleepPage />;
Sleep.storyName = 'sleep';

export const WithTimeout = () => <WithTimeoutPage />;
WithTimeout.storyName = 'withTimeout';

export const Parallel = () => <ParallelPage />;
Parallel.storyName = 'parallel';

export const Sequential = () => <SequentialPage />;
Sequential.storyName = 'sequential';

export const SafeAsync = () => <SafeAsyncPage />;
SafeAsync.storyName = 'safeAsync';

export const CancelablePromise = () => <CancelablePromisePage />;
CancelablePromise.storyName = 'cancelablePromise';
