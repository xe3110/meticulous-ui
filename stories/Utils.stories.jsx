import { useState } from 'react';
import styled from 'styled-components';

import blueGray from '../src/colors/blueGray';
import blue from '../src/colors/blue';
import green from '../src/colors/green';
import white from '../src/colors/white';

import capFirstLetter from '../src/utils/capFirstLetter';
import compose from '../src/utils/compose';
import hasEqualProps from '../src/utils/hasEqualProps';
import isNonEmptyArray from '../src/utils/isNonEmptyArray';
import randomInt from '../src/utils/randomInt';
import randomValue from '../src/utils/randomValue';

// ─── Shared Layout ────────────────────────────────────────────────────────────

const Page = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
  padding: 2.4rem;
  font-family: sans-serif;
  max-width: 800px;
`;

const Card = styled.div`
  border: 1px solid ${blueGray.m100};
  border-radius: 8px;
  overflow: hidden;
`;

const CardHeader = styled.div`
  background: ${blueGray.m50};
  border-bottom: 1px solid ${blueGray.m100};
  padding: 1.2rem 1.6rem;
`;

const FnName = styled.code`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${blueGray.m800};
  background: ${blueGray.m100};
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
`;

const Signature = styled.code`
  font-size: 1.2rem;
  color: ${blueGray.m500};
  margin-left: 0.8rem;
`;

const Description = styled.p`
  margin: 0.6rem 0 0;
  font-size: 1.3rem;
  color: ${blueGray.m400};
`;

const CardBody = styled.div`
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const SectionLabel = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${blueGray.m300};
  margin: 0 0 0.6rem;
`;

// ─── Example Table ────────────────────────────────────────────────────────────

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1.3rem;
`;

const Th = styled.th`
  text-align: left;
  padding: 0.6rem 1rem;
  background: ${blueGray.m50};
  color: ${blueGray.m500};
  font-weight: 600;
  border: 1px solid ${blueGray.m100};
`;

const Td = styled.td`
  padding: 0.6rem 1rem;
  border: 1px solid ${blueGray.m100};
  vertical-align: top;
`;

const Code = styled.code`
  background: ${blueGray.m50};
  padding: 0.15rem 0.4rem;
  border-radius: 3px;
  font-size: 1.2rem;
  color: ${blueGray.m900};
`;

const Output = styled(Code)`
  color: ${green.m600};
`;

const ExamplesTable = ({ rows }) => (
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
            <Output>{output}</Output>
          </Td>
          <Td style={{ color: blueGray.m400, fontSize: '1.2rem' }}>{note ?? ''}</Td>
        </tr>
      ))}
    </tbody>
  </Table>
);

// ─── Source snippet ───────────────────────────────────────────────────────────

const Pre = styled.pre`
  background: ${blueGray.m900};
  color: ${blueGray.m100};
  border-radius: 6px;
  padding: 1.2rem 1.6rem;
  font-size: 1.2rem;
  overflow-x: auto;
  margin: 0;
`;

// ─── Live Demo (for random functions) ────────────────────────────────────────

const LiveRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  flex-wrap: wrap;
`;

const RunButton = styled.button`
  padding: 0.5rem 1.4rem;
  background: ${blue.m400};
  color: ${white};
  border: none;
  border-radius: 5px;
  font-size: 1.3rem;
  cursor: pointer;
  &:hover {
    background: ${blue.m600};
  }
`;

const ResultBadge = styled.span`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${green.m600};
  background: ${green.m100};
  border-radius: 5px;
  padding: 0.3rem 0.9rem;
`;

// ═════════════════════════════════════════════════════════════════════════════
// capFirstLetter
// ═════════════════════════════════════════════════════════════════════════════

const CapFirstLetterDemo = () => (
  <Card>
    <CardHeader>
      <div>
        <FnName>capFirstLetter</FnName>
        <Signature>(str: string) → string</Signature>
      </div>
      <Description>
        Capitalizes the first character of a string. Returns the original value unchanged if it is
        not a non-empty string.
      </Description>
    </CardHeader>
    <CardBody>
      <div>
        <SectionLabel>Examples</SectionLabel>
        <ExamplesTable
          rows={[
            { input: `capFirstLetter('hello')`, output: `'Hello'` },
            { input: `capFirstLetter('world')`, output: `'World'` },
            { input: `capFirstLetter('already Capital')`, output: `'Already Capital'` },
            { input: `capFirstLetter('')`, output: `''`, note: 'Empty string — returned as-is' },
            { input: `capFirstLetter(42)`, output: `42`, note: 'Non-string — returned as-is' },
            { input: `capFirstLetter(null)`, output: `null`, note: 'Null — returned as-is' },
          ]}
        />
      </div>
      <div>
        <SectionLabel>Source</SectionLabel>
        <Pre>{`const capFirstLetter = (str) => {
  if (typeof str !== 'string' || str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};`}</Pre>
      </div>
      <div>
        <SectionLabel>Usage</SectionLabel>
        <Pre>{`import capFirstLetter from 'meticulous-ui/utils/capFirstLetter';

capFirstLetter('hello');  // → 'Hello'`}</Pre>
      </div>
    </CardBody>
  </Card>
);

// ═════════════════════════════════════════════════════════════════════════════
// compose
// ═════════════════════════════════════════════════════════════════════════════

const ComposeDemo = () => (
  <Card>
    <CardHeader>
      <div>
        <FnName>compose</FnName>
        <Signature>(...funcs: Function[]) → (val: any) → any</Signature>
      </div>
      <Description>
        Returns a new function that applies the provided functions from right-to-left (mathematical
        composition). The output of each function becomes the input to the next one on the left.
        <br />
        <br />
        This can also be used to return an HOC by composing component wrappers, e.g.
        <br />
        <Code>compose(withRouter, withTheme)(MyComponent)</Code>.
      </Description>
    </CardHeader>
    <CardBody>
      <div>
        <SectionLabel>Examples</SectionLabel>
        <ExamplesTable
          rows={[
            {
              input: `compose(s => s + '!', s => s.toUpperCase())('hello')`,
              output: `'HELLO!'`,
              note: 'toUpperCase runs first, then ! is appended',
            },
            {
              input: `compose(x => x * 2, x => x + 3)(4)`,
              output: `14`,
              note: '4 + 3 = 7, then 7 × 2 = 14',
            },
            {
              input: `compose(square, double, add)(5, 3, 2)`,
              output: `400`,
              note: 'Single function — identity',
            },
          ]}
        />
      </div>
      <div>
        <SectionLabel>Source</SectionLabel>
        <Pre>{`const compose =
  (...funcs) =>
  (val) =>
    funcs.reduceRight((cv, cf) => cf(cv), val);`}</Pre>
      </div>
      <div>
        <SectionLabel>Usage</SectionLabel>
        <Pre>{`import compose from 'meticulous-ui/utils/compose';

const addExclamation = (s) => s + '!';
const toUpper        = (s) => s.toUpperCase();

const shout = compose(addExclamation, toUpper);
shout('hello');  // → 'HELLO!'`}</Pre>
      </div>
    </CardBody>
  </Card>
);

// ═════════════════════════════════════════════════════════════════════════════
// hasEqualProps
// ═════════════════════════════════════════════════════════════════════════════

const HasEqualPropsDemo = () => (
  <Card>
    <CardHeader>
      <div>
        <FnName>hasEqualProps</FnName>
        <Signature>(oldProps: object, newProps: object) → boolean</Signature>
      </div>
      <Description>
        Performs a deep equality check between two props objects,{' '}
        <strong>ignoring function-valued keys</strong>. Designed for use as a custom comparator in{' '}
        <Code>React.memo</Code> to prevent re-renders when only callbacks change.
      </Description>
    </CardHeader>
    <CardBody>
      <div>
        <SectionLabel>Examples</SectionLabel>
        <ExamplesTable
          rows={[
            {
              input: `hasEqualProps({ a: 1 }, { a: 1 })`,
              output: `true`,
            },
            {
              input: `hasEqualProps({ a: 1 }, { a: 2 })`,
              output: `false`,
            },
            {
              input: `hasEqualProps({ a: 1, onClick: fn1 }, { a: 1, onClick: fn2 })`,
              output: `true`,
              note: 'Functions are stripped before comparison',
            },
            {
              input: `hasEqualProps({ a: { b: 1 } }, { a: { b: 1 } })`,
              output: `true`,
              note: 'Deep object equality',
            },
            {
              input: `hasEqualProps({ a: { b: 1 } }, { a: { b: 2 } })`,
              output: `false`,
            },
            {
              input: `hasEqualProps({ a: 1 }, { a: 1, b: 2 })`,
              output: `false`,
              note: 'Different key count',
            },
          ]}
        />
      </div>
      <div>
        <SectionLabel>Source</SectionLabel>
        <Pre>{`const omitFunctions = (obj) =>
  Object.fromEntries(Object.entries(obj).filter(([, v]) => typeof v !== 'function'));

const deepEqual = (a, b) => {
  if (a === b) return true;
  if (typeof a !== 'object' || typeof b !== 'object' || a === null || b === null) return false;
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;
  return keysA.every((k) => deepEqual(a[k], b[k]));
};

const hasEqualProps = (oldProps, newProps) =>
  deepEqual(omitFunctions(oldProps), omitFunctions(newProps));`}</Pre>
      </div>
      <div>
        <SectionLabel>Usage</SectionLabel>
        <Pre>{`import React from 'react';
import hasEqualProps from 'meticulous-ui/utils/hasEqualProps';

const MyComponent = React.memo(({ label, onClick }) => (
  <button onClick={onClick}>{label}</button>
), hasEqualProps);
// Will NOT re-render when only onClick reference changes.`}</Pre>
      </div>
    </CardBody>
  </Card>
);

// ═════════════════════════════════════════════════════════════════════════════
// isNonEmptyArray
// ═════════════════════════════════════════════════════════════════════════════

const IsNonEmptyArrayDemo = () => (
  <Card>
    <CardHeader>
      <div>
        <FnName>isNonEmptyArray</FnName>
        <Signature>(arr: any) → boolean</Signature>
      </div>
      <Description>
        Returns <Code>true</Code> only when the value is an <Code>Array</Code> with at least one
        element. Safe to call with any type — never throws.
      </Description>
    </CardHeader>
    <CardBody>
      <div>
        <SectionLabel>Examples</SectionLabel>
        <ExamplesTable
          rows={[
            { input: `isNonEmptyArray([1, 2, 3])`, output: `true` },
            { input: `isNonEmptyArray(['a'])`, output: `true` },
            { input: `isNonEmptyArray([])`, output: `false`, note: 'Empty array' },
            { input: `isNonEmptyArray(null)`, output: `false` },
            { input: `isNonEmptyArray(undefined)`, output: `false` },
            { input: `isNonEmptyArray('hello')`, output: `false`, note: 'String, not an array' },
            { input: `isNonEmptyArray(42)`, output: `false` },
            { input: `isNonEmptyArray({})`, output: `false`, note: 'Object, not an array' },
          ]}
        />
      </div>
      <div>
        <SectionLabel>Source</SectionLabel>
        <Pre>{`const isNonEmptyArray = (arr) => Array.isArray(arr) && arr.length > 0;`}</Pre>
      </div>
      <div>
        <SectionLabel>Usage</SectionLabel>
        <Pre>{`import isNonEmptyArray from 'meticulous-ui/utils/isNonEmptyArray';

const items = fetchItems();

if (isNonEmptyArray(items)) {
  items.forEach(render);
}`}</Pre>
      </div>
    </CardBody>
  </Card>
);

// ═════════════════════════════════════════════════════════════════════════════
// randomValue
// ═════════════════════════════════════════════════════════════════════════════

const RandomValueDemo = () => {
  const [result, setResult] = useState(null);
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(10);

  const run = () => setResult(randomValue(Number(min), Number(max)).toFixed(4));

  return (
    <Card>
      <CardHeader>
        <div>
          <FnName>randomValue</FnName>
          <Signature>(min: number, max: number) → number</Signature>
        </div>
        <Description>
          Returns a pseudo-random <strong>floating-point</strong> number in the range{' '}
          <Code>[min, max + 1)</Code>.
        </Description>
      </CardHeader>
      <CardBody>
        <div>
          <SectionLabel>Examples</SectionLabel>
          <ExamplesTable
            rows={[
              { input: `randomValue(1, 5)`, output: `≈ 3.7142`, note: 'Range [1, 6)' },
              { input: `randomValue(0, 1)`, output: `≈ 0.8213`, note: 'Range [0, 2)' },
              { input: `randomValue(100, 200)`, output: `≈ 157.43`, note: 'Range [100, 201)' },
            ]}
          />
        </div>
        <div>
          <SectionLabel>Source</SectionLabel>
          <Pre>{`const randomValue = (min, max) => Math.random() * (max - min + 1) + min;`}</Pre>
        </div>
        <div>
          <SectionLabel>Live Demo</SectionLabel>
          <LiveRow>
            <label style={{ fontSize: '1.3rem' }}>
              min&nbsp;
              <input
                type='number'
                value={min}
                onChange={(e) => setMin(e.target.value)}
                style={{ width: '5rem', fontSize: '1.3rem', padding: '0.3rem' }}
              />
            </label>
            <label style={{ fontSize: '1.3rem' }}>
              max&nbsp;
              <input
                type='number'
                value={max}
                onChange={(e) => setMax(e.target.value)}
                style={{ width: '5rem', fontSize: '1.3rem', padding: '0.3rem' }}
              />
            </label>
            <RunButton onClick={run}>Run</RunButton>
            {result !== null && <ResultBadge>{result}</ResultBadge>}
          </LiveRow>
        </div>
        <div>
          <SectionLabel>Usage</SectionLabel>
          <Pre>{`import randomValue from 'meticulous-ui/utils/randomValue';

const opacity = randomValue(0.2, 0.8);  // random float in [0.2, 1.8)`}</Pre>
        </div>
      </CardBody>
    </Card>
  );
};

// ═════════════════════════════════════════════════════════════════════════════
// randomInt
// ═════════════════════════════════════════════════════════════════════════════

const RandomIntDemo = () => {
  const [result, setResult] = useState(null);
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(10);

  const run = () => setResult(randomInt(Number(min), Number(max)));

  return (
    <Card>
      <CardHeader>
        <div>
          <FnName>randomInt</FnName>
          <Signature>(min: number, max: number) → number</Signature>
        </div>
        <Description>
          Returns a pseudo-random <strong>integer</strong> in the range{' '}
          <Code>[min, floor(max + 1))</Code>. Built on top of <Code>randomValue</Code>.
        </Description>
      </CardHeader>
      <CardBody>
        <div>
          <SectionLabel>Examples</SectionLabel>
          <ExamplesTable
            rows={[
              {
                input: `randomInt(1, 6)`,
                output: `4`,
                note: 'One of 1–7 (floor of randomValue range)',
              },
              {
                input: `randomInt(0, 9)`,
                output: `7`,
                note: 'Useful for 0-indexed arrays of length 10',
              },
              { input: `randomInt(5, 5)`, output: `5`, note: 'min === max' },
            ]}
          />
        </div>
        <div>
          <SectionLabel>Source</SectionLabel>
          <Pre>{`import randomValue from './randomValue';

const randomInt = (min, max) => Math.floor(randomValue(min, max));`}</Pre>
        </div>
        <div>
          <SectionLabel>Live Demo</SectionLabel>
          <LiveRow>
            <label style={{ fontSize: '1.3rem' }}>
              min&nbsp;
              <input
                type='number'
                value={min}
                onChange={(e) => setMin(e.target.value)}
                style={{ width: '5rem', fontSize: '1.3rem', padding: '0.3rem' }}
              />
            </label>
            <label style={{ fontSize: '1.3rem' }}>
              max&nbsp;
              <input
                type='number'
                value={max}
                onChange={(e) => setMax(e.target.value)}
                style={{ width: '5rem', fontSize: '1.3rem', padding: '0.3rem' }}
              />
            </label>
            <RunButton onClick={run}>Run</RunButton>
            {result !== null && <ResultBadge>{result}</ResultBadge>}
          </LiveRow>
        </div>
        <div>
          <SectionLabel>Usage</SectionLabel>
          <Pre>{`import randomInt from 'meticulous-ui/utils/randomInt';

const index = randomInt(0, items.length - 1);  // random index into array`}</Pre>
        </div>
      </CardBody>
    </Card>
  );
};

// ═════════════════════════════════════════════════════════════════════════════
// Full page component
// ═════════════════════════════════════════════════════════════════════════════

const UtilsPage = () => (
  <Page>
    <CapFirstLetterDemo />
    <ComposeDemo />
    <HasEqualPropsDemo />
    <IsNonEmptyArrayDemo />
    <RandomValueDemo />
    <RandomIntDemo />
  </Page>
);

// ═════════════════════════════════════════════════════════════════════════════
// Story config
// ═════════════════════════════════════════════════════════════════════════════

export default {
  title: 'Utils/Functions',
  component: UtilsPage,
  parameters: {
    docs: {
      description: {
        component:
          'Pure utility functions available in the meticulous-ui toolkit. ' +
          'Each entry shows the signature, a description, input/output examples, ' +
          'the source, and an import snippet.',
      },
    },
    controls: { disable: true },
    actions: { disable: true },
  },
};

export const Default = () => <UtilsPage />;

Default.storyName = 'All Utils';
