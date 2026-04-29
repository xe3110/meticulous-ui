import styled from 'styled-components';

import blueGray from '../src/colors/blueGray';
import amber from '../src/colors/amber';
import green from '../src/colors/green';
import indigo from '../src/colors/indigo';
import cyan from '../src/colors/cyan';
import lightGreen from '../src/colors/lightGreen';
import deepOrange from '../src/colors/deepOrange';
import red from '../src/colors/red';
import deepPurple from '../src/colors/deepPurple';
import lightBlue from '../src/colors/lightBlue';
import lime from '../src/colors/lime';
import brown from '../src/colors/brown';
import orange from '../src/colors/orange';
import cider from '../src/colors/cider';
import grey from '../src/colors/grey';

import hasEqualProps from '../src/utils/hasEqualProps';
import isNonEmptyArray from '../src/utils/isNonEmptyArray';
import deepClone from '../src/utils/deepClone';
import mergeDeep from '../src/utils/mergeDeep';
import pick from '../src/utils/pick';
import omit from '../src/utils/omit';
import isEmpty from '../src/utils/isEmpty';
import isEqual from '../src/utils/isEqual';
import flattenObject from '../src/utils/flattenObject';
import groupBy from '../src/utils/groupBy';
import keyBy from '../src/utils/keyBy';
import uniqueBy from '../src/utils/uniqueBy';
import sortBy from '../src/utils/sortBy';
import chunk from '../src/utils/chunk';

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
  color: #e2e8f0;
  border-radius: 10px;
  padding: 2rem 2.4rem;
  font-size: 1.25rem;
  line-height: 1.8;
  overflow-x: auto;
  margin: 0;
`;

// ═════════════════════════════════════════════════════════════════════════════
// deepClone — indigo
// ═════════════════════════════════════════════════════════════════════════════

const DeepClonePage = () => (
  <StoryPage $bg={indigo.m50}>
    <MaxWidth>
      <Card $accent={indigo.m500}>
        <CardHeader $bg='#fff' $border={indigo.m100}>
          <div>
            <FnName $color={indigo.m900} $bg={indigo.m100}>
              deepClone
            </FnName>
            <Signature>(obj: any) → any</Signature>
          </div>
          <Description>
            Recursively clones an object, array, or <Code>Date</Code>. Primitives and{' '}
            <Code>null</Code> are returned as-is. The result shares no references with the original.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={indigo.m700}>Examples</SectionLabel>
            <ExamplesTable
              outputColor={indigo.m700}
              rows={[
                {
                  input: `deepClone({ a: 1, b: { c: 2 } })`,
                  output: `{ a: 1, b: { c: 2 } }`,
                  note: 'Deep copy — not the same reference',
                },
                {
                  input: `deepClone([1, [2, 3]])`,
                  output: `[1, [2, 3]]`,
                  note: 'Arrays cloned recursively',
                },
                {
                  input: `deepClone(new Date('2024-01-01'))`,
                  output: `Date(2024-01-01)`,
                  note: 'Date cloned as new instance',
                },
                { input: `deepClone(42)`, output: `42`, note: 'Primitives returned as-is' },
                { input: `deepClone(null)`, output: `null`, note: 'null returned as-is' },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={indigo.m700}>Usage</SectionLabel>
            <Pre>{`import deepClone from 'meticulous-ui/utils/deepClone';

const original = { user: { name: 'Alice', scores: [1, 2, 3] } };
const copy = deepClone(original);
copy.user.name = 'Bob';  // original.user.name is still 'Alice'`}</Pre>
          </div>
          <div>
            <SectionLabel $color={indigo.m700}>Source</SectionLabel>
            <Pre>{`const deepClone = (obj) => {
  if (obj === null || typeof obj !== 'object') return obj;
  if (obj instanceof Date) return new Date(obj.getTime());
  if (Array.isArray(obj)) return obj.map(deepClone);
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, deepClone(v)]));
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// mergeDeep — cyan
// ═════════════════════════════════════════════════════════════════════════════

const MergeDeepPage = () => (
  <StoryPage $bg={cyan.m50}>
    <MaxWidth>
      <Card $accent={cyan.m500}>
        <CardHeader $bg='#fff' $border={cyan.m100}>
          <div>
            <FnName $color={cyan.m900} $bg={cyan.m100}>
              mergeDeep
            </FnName>
            <Signature>(target: object, source: object) → object</Signature>
          </div>
          <Description>
            Returns a new object with <Code>source</Code> merged into <Code>target</Code>. Nested
            plain objects are merged recursively; arrays and other values are replaced. The original
            objects are not mutated.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={cyan.m700}>Examples</SectionLabel>
            <ExamplesTable
              outputColor={cyan.m700}
              rows={[
                {
                  input: `mergeDeep({ a: 1 }, { b: 2 })`,
                  output: `{ a: 1, b: 2 }`,
                  note: 'Non-overlapping keys merged',
                },
                {
                  input: `mergeDeep({ a: { x: 1 } }, { a: { y: 2 } })`,
                  output: `{ a: { x: 1, y: 2 } }`,
                  note: 'Nested objects deep-merged',
                },
                {
                  input: `mergeDeep({ a: 1 }, { a: 9 })`,
                  output: `{ a: 9 }`,
                  note: 'Source wins on conflict',
                },
                {
                  input: `mergeDeep({ a: [1, 2] }, { a: [3] })`,
                  output: `{ a: [3] }`,
                  note: 'Arrays replaced, not merged',
                },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={cyan.m700}>Usage</SectionLabel>
            <Pre>{`import mergeDeep from 'meticulous-ui/utils/mergeDeep';

const defaults = { theme: { color: 'blue', size: 14 }, debug: false };
const overrides = { theme: { color: 'red' } };

mergeDeep(defaults, overrides);
// → { theme: { color: 'red', size: 14 }, debug: false }`}</Pre>
          </div>
          <div>
            <SectionLabel $color={cyan.m700}>Source</SectionLabel>
            <Pre>{`const isPlainObject = (v) => v !== null && typeof v === 'object' && !Array.isArray(v);

const mergeDeep = (target, source) => {
  const result = { ...target };
  for (const key of Object.keys(source)) {
    result[key] =
      isPlainObject(target[key]) && isPlainObject(source[key])
        ? mergeDeep(target[key], source[key])
        : source[key];
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
// pick — lightGreen
// ═════════════════════════════════════════════════════════════════════════════

const PickPage = () => (
  <StoryPage $bg={lightGreen.m50}>
    <MaxWidth>
      <Card $accent={lightGreen.m600}>
        <CardHeader $bg='#fff' $border={lightGreen.m100}>
          <div>
            <FnName $color={lightGreen.m900} $bg={lightGreen.m100}>
              pick
            </FnName>
            <Signature>(obj: object, keys: string[]) → object</Signature>
          </div>
          <Description>
            Returns a new object containing only the specified keys. Keys absent from{' '}
            <Code>obj</Code> are silently skipped.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={lightGreen.m700}>Examples</SectionLabel>
            <ExamplesTable
              outputColor={lightGreen.m700}
              rows={[
                { input: `pick({ a: 1, b: 2, c: 3 }, ['a', 'c'])`, output: `{ a: 1, c: 3 }` },
                { input: `pick({ x: 'hi', y: 42 }, ['x'])`, output: `{ x: 'hi' }` },
                {
                  input: `pick({ a: 1 }, ['a', 'z'])`,
                  output: `{ a: 1 }`,
                  note: 'Missing keys silently skipped',
                },
                {
                  input: `pick({ a: 1, b: 2 }, [])`,
                  output: `{}`,
                  note: 'Empty key list → empty object',
                },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={lightGreen.m700}>Usage</SectionLabel>
            <Pre>{`import pick from 'meticulous-ui/utils/pick';

const user = { id: 1, name: 'Alice', password: 'secret', role: 'admin' };
const safeUser = pick(user, ['id', 'name', 'role']);
// → { id: 1, name: 'Alice', role: 'admin' }`}</Pre>
          </div>
          <div>
            <SectionLabel $color={lightGreen.m700}>Source</SectionLabel>
            <Pre>{`const pick = (obj, keys) =>
  Object.fromEntries(keys.filter((k) => k in obj).map((k) => [k, obj[k]]));`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// omit — deepOrange
// ═════════════════════════════════════════════════════════════════════════════

const OmitPage = () => (
  <StoryPage $bg={deepOrange.m50}>
    <MaxWidth>
      <Card $accent={deepOrange.m500}>
        <CardHeader $bg='#fff' $border={deepOrange.m100}>
          <div>
            <FnName $color={deepOrange.m900} $bg={deepOrange.m100}>
              omit
            </FnName>
            <Signature>(obj: object, keys: string[]) → object</Signature>
          </div>
          <Description>
            Returns a new object with the specified keys removed. Keys absent from <Code>obj</Code>{' '}
            are ignored.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={deepOrange.m700}>Examples</SectionLabel>
            <ExamplesTable
              outputColor={deepOrange.m700}
              rows={[
                { input: `omit({ a: 1, b: 2, c: 3 }, ['b'])`, output: `{ a: 1, c: 3 }` },
                { input: `omit({ x: 1, y: 2 }, ['x', 'y'])`, output: `{}` },
                {
                  input: `omit({ a: 1 }, ['z'])`,
                  output: `{ a: 1 }`,
                  note: 'Missing keys ignored',
                },
                {
                  input: `omit({ a: 1, b: 2 }, [])`,
                  output: `{ a: 1, b: 2 }`,
                  note: 'Empty key list → full object returned',
                },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={deepOrange.m700}>Usage</SectionLabel>
            <Pre>{`import omit from 'meticulous-ui/utils/omit';

const user = { id: 1, name: 'Alice', password: 'secret' };
const safeUser = omit(user, ['password']);
// → { id: 1, name: 'Alice' }`}</Pre>
          </div>
          <div>
            <SectionLabel $color={deepOrange.m700}>Source</SectionLabel>
            <Pre>{`const omit = (obj, keys) => {
  const set = new Set(keys);
  return Object.fromEntries(Object.entries(obj).filter(([k]) => !set.has(k)));
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// isEmpty — red
// ═════════════════════════════════════════════════════════════════════════════

const IsEmptyPage = () => (
  <StoryPage $bg={red.m50}>
    <MaxWidth>
      <Card $accent={red.m500}>
        <CardHeader $bg='#fff' $border={red.m100}>
          <div>
            <FnName $color={red.m900} $bg={red.m100}>
              isEmpty
            </FnName>
            <Signature>(value: any) → boolean</Signature>
          </div>
          <Description>
            Returns <Code>true</Code> for <Code>null</Code>, <Code>undefined</Code>, empty strings,
            empty arrays, and empty objects. Numbers and booleans are never considered empty.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={red.m700}>Examples</SectionLabel>
            <ExamplesTable
              outputColor={red.m700}
              rows={[
                { input: `isEmpty(null)`, output: `true` },
                { input: `isEmpty(undefined)`, output: `true` },
                { input: `isEmpty('')`, output: `true`, note: 'Empty string' },
                { input: `isEmpty([])`, output: `true`, note: 'Empty array' },
                { input: `isEmpty({})`, output: `true`, note: 'Empty object' },
                { input: `isEmpty('hello')`, output: `false` },
                { input: `isEmpty([1, 2])`, output: `false` },
                { input: `isEmpty({ a: 1 })`, output: `false` },
                { input: `isEmpty(0)`, output: `false`, note: 'Number — never empty' },
                { input: `isEmpty(false)`, output: `false`, note: 'Boolean — never empty' },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={red.m700}>Usage</SectionLabel>
            <Pre>{`import isEmpty from 'meticulous-ui/utils/isEmpty';

function submit(fields) {
  if (isEmpty(fields.name)) throw new Error('Name is required');
}`}</Pre>
          </div>
          <div>
            <SectionLabel $color={red.m700}>Source</SectionLabel>
            <Pre>{`const isEmpty = (value) => {
  if (value == null) return true;
  if (typeof value === 'string' || Array.isArray(value)) return value.length === 0;
  if (typeof value === 'object') return Object.keys(value).length === 0;
  return false;
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// isEqual — deepPurple
// ═════════════════════════════════════════════════════════════════════════════

const IsEqualPage = () => (
  <StoryPage $bg={deepPurple.m50}>
    <MaxWidth>
      <Card $accent={deepPurple.m500}>
        <CardHeader $bg='#fff' $border={deepPurple.m100}>
          <div>
            <FnName $color={deepPurple.m900} $bg={deepPurple.m100}>
              isEqual
            </FnName>
            <Signature>(a: any, b: any) → boolean</Signature>
          </div>
          <Description>
            Performs a deep structural equality check. Handles nested objects, arrays, and{' '}
            <Code>Date</Code> instances. Uses strict type comparison — <Code>1</Code> and{' '}
            <Code>'1'</Code> are not equal.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={deepPurple.m700}>Examples</SectionLabel>
            <ExamplesTable
              outputColor={deepPurple.m700}
              rows={[
                { input: `isEqual(1, 1)`, output: `true` },
                { input: `isEqual({ a: 1 }, { a: 1 })`, output: `true` },
                { input: `isEqual([1, 2], [1, 2])`, output: `true` },
                {
                  input: `isEqual({ a: { b: 1 } }, { a: { b: 1 } })`,
                  output: `true`,
                  note: 'Deep equality',
                },
                {
                  input: `isEqual(new Date('2024'), new Date('2024'))`,
                  output: `true`,
                  note: 'Dates compared by time value',
                },
                { input: `isEqual({ a: 1 }, { a: 2 })`, output: `false` },
                { input: `isEqual([1], [1, 2])`, output: `false` },
                { input: `isEqual(1, '1')`, output: `false`, note: 'Strict type check' },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={deepPurple.m700}>Usage</SectionLabel>
            <Pre>{`import isEqual from 'meticulous-ui/utils/isEqual';

const prev = { filters: { status: 'active', page: 1 } };
const next  = { filters: { status: 'active', page: 1 } };

if (!isEqual(prev, next)) refetch();`}</Pre>
          </div>
          <div>
            <SectionLabel $color={deepPurple.m700}>Source</SectionLabel>
            <Pre>{`const isEqual = (a, b) => {
  if (a === b) return true;
  if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime();
  if (typeof a !== 'object' || typeof b !== 'object' || a === null || b === null) return false;
  if (Array.isArray(a) !== Array.isArray(b)) return false;
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;
  return keysA.every((k) => isEqual(a[k], b[k]));
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// flattenObject — lightBlue
// ═════════════════════════════════════════════════════════════════════════════

const FlattenObjectPage = () => (
  <StoryPage $bg={lightBlue.m50}>
    <MaxWidth>
      <Card $accent={lightBlue.m500}>
        <CardHeader $bg='#fff' $border={lightBlue.m100}>
          <div>
            <FnName $color={lightBlue.m900} $bg={lightBlue.m100}>
              flattenObject
            </FnName>
            <Signature>(obj: object, prefix?: string) → object</Signature>
          </div>
          <Description>
            Collapses a nested object into a single-level object with dot-notation keys. Arrays are
            treated as leaf values and are not flattened.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={lightBlue.m700}>Examples</SectionLabel>
            <ExamplesTable
              outputColor={lightBlue.m700}
              rows={[
                { input: `flattenObject({ a: { b: 1 } })`, output: `{ 'a.b': 1 }` },
                { input: `flattenObject({ a: { b: { c: 2 } } })`, output: `{ 'a.b.c': 2 }` },
                { input: `flattenObject({ x: 1, y: { z: 2 } })`, output: `{ x: 1, 'y.z': 2 }` },
                {
                  input: `flattenObject({ tags: ['a', 'b'] })`,
                  output: `{ tags: ['a', 'b'] }`,
                  note: 'Arrays treated as leaf values',
                },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={lightBlue.m700}>Usage</SectionLabel>
            <Pre>{`import flattenObject from 'meticulous-ui/utils/flattenObject';

const config = { db: { host: 'localhost', port: 5432 }, debug: true };
flattenObject(config);
// → { 'db.host': 'localhost', 'db.port': 5432, debug: true }`}</Pre>
          </div>
          <div>
            <SectionLabel $color={lightBlue.m700}>Source</SectionLabel>
            <Pre>{`const flattenObject = (obj, prefix = '') =>
  Object.entries(obj).reduce((acc, [key, val]) => {
    const fullKey = prefix ? \`\${prefix}.\${key}\` : key;
    if (val !== null && typeof val === 'object' && !Array.isArray(val)) {
      Object.assign(acc, flattenObject(val, fullKey));
    } else {
      acc[fullKey] = val;
    }
    return acc;
  }, {});`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// groupBy — lime
// ═════════════════════════════════════════════════════════════════════════════

const GroupByPage = () => (
  <StoryPage $bg={lime.m50}>
    <MaxWidth>
      <Card $accent={lime.m700}>
        <CardHeader $bg='#fff' $border={lime.m200}>
          <div>
            <FnName $color={lime.m900} $bg={lime.m200}>
              groupBy
            </FnName>
            <Signature>(array: any[], key: string | Function) → object</Signature>
          </div>
          <Description>
            Groups array items into an object of arrays, keyed by the result of <Code>key</Code>.
            Accepts a property name string or a function.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={lime.m800}>Examples</SectionLabel>
            <ExamplesTable
              outputColor={lime.m800}
              rows={[
                {
                  input: `groupBy([{r:'a'},{r:'b'},{r:'a'}], 'r')`,
                  output: `{ a: [{r:'a'},{r:'a'}], b: [{r:'b'}] }`,
                },
                {
                  input: `groupBy([1.1, 2.2, 1.5], Math.floor)`,
                  output: `{ 1: [1.1, 1.5], 2: [2.2] }`,
                  note: 'Accepts a function as key',
                },
                { input: `groupBy([], 'type')`, output: `{}`, note: 'Empty array → empty object' },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={lime.m800}>Usage</SectionLabel>
            <Pre>{`import groupBy from 'meticulous-ui/utils/groupBy';

const users = [
  { name: 'Alice', role: 'admin' },
  { name: 'Bob',   role: 'user'  },
  { name: 'Carol', role: 'admin' },
];

groupBy(users, 'role');
// → { admin: [Alice, Carol], user: [Bob] }`}</Pre>
          </div>
          <div>
            <SectionLabel $color={lime.m800}>Source</SectionLabel>
            <Pre>{`const groupBy = (array, key) =>
  array.reduce((acc, item) => {
    const group = typeof key === 'function' ? key(item) : item[key];
    (acc[group] ??= []).push(item);
    return acc;
  }, {});`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// keyBy — brown
// ═════════════════════════════════════════════════════════════════════════════

const KeyByPage = () => (
  <StoryPage $bg={brown.m50}>
    <MaxWidth>
      <Card $accent={brown.m500}>
        <CardHeader $bg='#fff' $border={brown.m100}>
          <div>
            <FnName $color={brown.m900} $bg={brown.m100}>
              keyBy
            </FnName>
            <Signature>(array: any[], key: string | Function) → object</Signature>
          </div>
          <Description>
            Converts an array into a lookup object keyed by a property or function result. If
            multiple items share the same key, the last one wins.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={brown.m700}>Examples</SectionLabel>
            <ExamplesTable
              outputColor={brown.m700}
              rows={[
                {
                  input: `keyBy([{id:1,n:'A'},{id:2,n:'B'}], 'id')`,
                  output: `{ '1': {id:1,n:'A'}, '2': {id:2,n:'B'} }`,
                },
                {
                  input: `keyBy([{code:'US'},{code:'UK'}], item => item.code.toLowerCase())`,
                  output: `{ us: {code:'US'}, uk: {code:'UK'} }`,
                  note: 'Accepts a function as key',
                },
                { input: `keyBy([], 'id')`, output: `{}`, note: 'Empty array → empty object' },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={brown.m700}>Usage</SectionLabel>
            <Pre>{`import keyBy from 'meticulous-ui/utils/keyBy';

const users = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
const byId  = keyBy(users, 'id');

byId[1].name;  // → 'Alice'  (O(1) lookup)`}</Pre>
          </div>
          <div>
            <SectionLabel $color={brown.m700}>Source</SectionLabel>
            <Pre>{`const keyBy = (array, key) =>
  array.reduce((acc, item) => {
    acc[typeof key === 'function' ? key(item) : item[key]] = item;
    return acc;
  }, {});`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// uniqueBy — orange
// ═════════════════════════════════════════════════════════════════════════════

const UniqueByPage = () => (
  <StoryPage $bg={orange.m50}>
    <MaxWidth>
      <Card $accent={orange.m600}>
        <CardHeader $bg='#fff' $border={orange.m100}>
          <div>
            <FnName $color={orange.m900} $bg={orange.m100}>
              uniqueBy
            </FnName>
            <Signature>(array: any[], key: string | Function) → any[]</Signature>
          </div>
          <Description>
            Returns a new array with duplicate items removed, based on a property name or function.
            The first occurrence of each key is kept; later duplicates are dropped.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={orange.m700}>Examples</SectionLabel>
            <ExamplesTable
              outputColor={orange.m700}
              rows={[
                {
                  input: `uniqueBy([{id:1},{id:2},{id:1}], 'id')`,
                  output: `[{id:1},{id:2}]`,
                  note: 'First occurrence kept',
                },
                {
                  input: `uniqueBy([{n:'a',v:1},{n:'a',v:2},{n:'b'}], 'n')`,
                  output: `[{n:'a',v:1},{n:'b'}]`,
                  note: "Second {n:'a'} dropped",
                },
                {
                  input: `uniqueBy([1.1, 1.9, 2.2], Math.floor)`,
                  output: `[1.1, 2.2]`,
                  note: 'Accepts a function as key',
                },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={orange.m700}>Usage</SectionLabel>
            <Pre>{`import uniqueBy from 'meticulous-ui/utils/uniqueBy';

const events = [
  { userId: 1, action: 'click' },
  { userId: 2, action: 'click' },
  { userId: 1, action: 'submit' },
];

uniqueBy(events, 'userId');
// → [{ userId: 1, action: 'click' }, { userId: 2, action: 'click' }]`}</Pre>
          </div>
          <div>
            <SectionLabel $color={orange.m700}>Source</SectionLabel>
            <Pre>{`const uniqueBy = (array, key) => {
  const seen = new Set();
  return array.filter((item) => {
    const k = typeof key === 'function' ? key(item) : item[key];
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// sortBy — cider
// ═════════════════════════════════════════════════════════════════════════════

const SortByPage = () => (
  <StoryPage $bg={cider.m50}>
    <MaxWidth>
      <Card $accent={cider.m500}>
        <CardHeader $bg='#fff' $border={cider.m100}>
          <div>
            <FnName $color={cider.m900} $bg={cider.m100}>
              sortBy
            </FnName>
            <Signature>(array: any[], key: string | Function) → any[]</Signature>
          </div>
          <Description>
            Returns a new array sorted ascending by a property name or function result. The original
            array is not mutated.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={cider.m700}>Examples</SectionLabel>
            <ExamplesTable
              outputColor={cider.m700}
              rows={[
                {
                  input: `sortBy([{n:'Bob'},{n:'Alice'},{n:'Carol'}], 'n')`,
                  output: `[{n:'Alice'},{n:'Bob'},{n:'Carol'}]`,
                },
                {
                  input: `sortBy([{age:30},{age:25},{age:35}], 'age')`,
                  output: `[{age:25},{age:30},{age:35}]`,
                },
                {
                  input: `sortBy([3, 1, 2], x => x)`,
                  output: `[1, 2, 3]`,
                  note: 'Works on primitives via function key',
                },
                {
                  input: `sortBy([], 'name')`,
                  output: `[]`,
                  note: 'Empty array returned unchanged',
                },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={cider.m700}>Usage</SectionLabel>
            <Pre>{`import sortBy from 'meticulous-ui/utils/sortBy';

const products = [
  { name: 'Chair', price: 120 },
  { name: 'Desk',  price: 350 },
  { name: 'Lamp',  price: 45  },
];

sortBy(products, 'price');
// → [Lamp(45), Chair(120), Desk(350)]`}</Pre>
          </div>
          <div>
            <SectionLabel $color={cider.m700}>Source</SectionLabel>
            <Pre>{`const sortBy = (array, key) =>
  [...array].sort((a, b) => {
    const av = typeof key === 'function' ? key(a) : a[key];
    const bv = typeof key === 'function' ? key(b) : b[key];
    return av < bv ? -1 : av > bv ? 1 : 0;
  });`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// chunk — grey
// ═════════════════════════════════════════════════════════════════════════════

const ChunkPage = () => (
  <StoryPage $bg={grey.m200}>
    <MaxWidth>
      <Card $accent={grey.m600}>
        <CardHeader $bg='#fff' $border={grey.m200}>
          <div>
            <FnName $color={grey.m900} $bg={grey.m200}>
              chunk
            </FnName>
            <Signature>(array: any[], size: number) → any[][]</Signature>
          </div>
          <Description>
            Splits an array into consecutive chunks of the given <Code>size</Code>. The last chunk
            may be smaller if the array length is not evenly divisible.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={grey.m700}>Examples</SectionLabel>
            <ExamplesTable
              outputColor={grey.m700}
              rows={[
                {
                  input: `chunk([1, 2, 3, 4, 5], 2)`,
                  output: `[[1,2],[3,4],[5]]`,
                  note: 'Last chunk may be smaller',
                },
                { input: `chunk([1, 2, 3, 4], 2)`, output: `[[1,2],[3,4]]` },
                { input: `chunk([1, 2, 3], 1)`, output: `[[1],[2],[3]]` },
                {
                  input: `chunk([1, 2, 3], 3)`,
                  output: `[[1,2,3]]`,
                  note: 'Size ≥ length → single chunk',
                },
                { input: `chunk([], 2)`, output: `[]`, note: 'Empty array → empty result' },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={grey.m700}>Usage</SectionLabel>
            <Pre>{`import chunk from 'meticulous-ui/utils/chunk';

const items = [1, 2, 3, 4, 5, 6, 7];
const pages = chunk(items, 3);
// → [[1,2,3],[4,5,6],[7]]

pages.forEach((page, i) => renderPage(i, page));`}</Pre>
          </div>
          <div>
            <SectionLabel $color={grey.m700}>Source</SectionLabel>
            <Pre>{`const chunk = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
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
// hasEqualProps — amber
// ═════════════════════════════════════════════════════════════════════════════

const HasEqualPropsPage = () => (
  <StoryPage $bg={amber.m50}>
    <MaxWidth>
      <Card $accent={amber.m700}>
        <CardHeader $bg='#fff' $border={amber.m200}>
          <div>
            <FnName $color={amber.m900} $bg={amber.m200}>
              hasEqualProps
            </FnName>
            <Signature>(oldProps: object, newProps: object) → boolean</Signature>
          </div>
          <Description>
            Performs a deep equality check between two props objects,{' '}
            <strong>ignoring function-valued keys</strong>. Designed for use as a custom comparator
            in <Code>React.memo</Code> to prevent re-renders when only callbacks change.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={amber.m800}>Examples</SectionLabel>
            <ExamplesTable
              outputColor={amber.m800}
              rows={[
                { input: `hasEqualProps({ a: 1 }, { a: 1 })`, output: `true` },
                { input: `hasEqualProps({ a: 1 }, { a: 2 })`, output: `false` },
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
                { input: `hasEqualProps({ a: { b: 1 } }, { a: { b: 2 } })`, output: `false` },
                {
                  input: `hasEqualProps({ a: 1 }, { a: 1, b: 2 })`,
                  output: `false`,
                  note: 'Different key count',
                },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={amber.m800}>Usage</SectionLabel>
            <Pre>{`import React from 'react';
import hasEqualProps from 'meticulous-ui/utils/hasEqualProps';

const MyComponent = React.memo(({ label, onClick }) => (
  <button onClick={onClick}>{label}</button>
), hasEqualProps);
// Will NOT re-render when only onClick reference changes.`}</Pre>
          </div>
          <div>
            <SectionLabel $color={amber.m800}>Source</SectionLabel>
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
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// isNonEmptyArray — green
// ═════════════════════════════════════════════════════════════════════════════

const IsNonEmptyArrayPage = () => (
  <StoryPage $bg={green.m50}>
    <MaxWidth>
      <Card $accent={green.m500}>
        <CardHeader $bg='#fff' $border={green.m100}>
          <div>
            <FnName $color={green.m900} $bg={green.m100}>
              isNonEmptyArray
            </FnName>
            <Signature>(arr: any) → boolean</Signature>
          </div>
          <Description>
            Returns <Code>true</Code> only when the value is an <Code>Array</Code> with at least one
            element. Safe to call with any type — never throws.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={green.m700}>Examples</SectionLabel>
            <ExamplesTable
              outputColor={green.m700}
              rows={[
                { input: `isNonEmptyArray([1, 2, 3])`, output: `true` },
                { input: `isNonEmptyArray(['a'])`, output: `true` },
                { input: `isNonEmptyArray([])`, output: `false`, note: 'Empty array' },
                { input: `isNonEmptyArray(null)`, output: `false` },
                { input: `isNonEmptyArray(undefined)`, output: `false` },
                {
                  input: `isNonEmptyArray('hello')`,
                  output: `false`,
                  note: 'String, not an array',
                },
                { input: `isNonEmptyArray(42)`, output: `false` },
                { input: `isNonEmptyArray({})`, output: `false`, note: 'Object, not an array' },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={green.m700}>Usage</SectionLabel>
            <Pre>{`import isNonEmptyArray from 'meticulous-ui/utils/isNonEmptyArray';

const items = fetchItems();

if (isNonEmptyArray(items)) {
  items.forEach(render);
}`}</Pre>
          </div>
          <div>
            <SectionLabel $color={green.m700}>Source</SectionLabel>
            <Pre>{`const isNonEmptyArray = (arr) => Array.isArray(arr) && arr.length > 0;`}</Pre>
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
  title: 'Utilities/Data Utilities',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    layout: 'fullscreen',
  },
};

export const DeepClone = () => <DeepClonePage />;
DeepClone.storyName = 'deepClone';

export const MergeDeep = () => <MergeDeepPage />;
MergeDeep.storyName = 'mergeDeep';

export const Pick = () => <PickPage />;
Pick.storyName = 'pick';

export const Omit = () => <OmitPage />;
Omit.storyName = 'omit';

export const IsEmpty = () => <IsEmptyPage />;
IsEmpty.storyName = 'isEmpty';

export const IsEqual = () => <IsEqualPage />;
IsEqual.storyName = 'isEqual';

export const FlattenObject = () => <FlattenObjectPage />;
FlattenObject.storyName = 'flattenObject';

export const GroupBy = () => <GroupByPage />;
GroupBy.storyName = 'groupBy';

export const KeyBy = () => <KeyByPage />;
KeyBy.storyName = 'keyBy';

export const UniqueBy = () => <UniqueByPage />;
UniqueBy.storyName = 'uniqueBy';

export const SortBy = () => <SortByPage />;
SortBy.storyName = 'sortBy';

export const Chunk = () => <ChunkPage />;
Chunk.storyName = 'chunk';

export const HasEqualProps = () => <HasEqualPropsPage />;
HasEqualProps.storyName = 'hasEqualProps';

export const IsNonEmptyArray = () => <IsNonEmptyArrayPage />;
IsNonEmptyArray.storyName = 'isNonEmptyArray';
