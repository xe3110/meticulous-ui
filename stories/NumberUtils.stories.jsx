import { useState } from 'react';
import styled from 'styled-components';

import blueGray from '../src/colors/blueGray';
import blue from '../src/colors/blue';
import pink from '../src/colors/pink';
import green from '../src/colors/green';
import teal from '../src/colors/teal';
import purple from '../src/colors/purple';
import orange from '../src/colors/orange';
import indigo from '../src/colors/indigo';
import yellow from '../src/colors/yellow';
import red from '../src/colors/red';

import randomInt from '../src/utils/randomInt';
import randomValue from '../src/utils/randomValue';
import formatNumber from '../src/utils/formatNumber';
import formatCurrency from '../src/utils/formatCurrency';
import formatCompactNumber from '../src/utils/formatCompactNumber';
import roundTo from '../src/utils/roundTo';
import randomBetween from '../src/utils/randomBetween';
import clamp from '../src/utils/clamp';
import percentage from '../src/utils/percentage';

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

// ─── Live demo controls ───────────────────────────────────────────────────────

const LiveRow = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const InputLabel = styled.label`
  font-size: 1.35rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

const NumInput = styled.input`
  width: 6.4rem;
  font-size: 1.3rem;
  padding: 0.5rem 0.7rem;
  border: 2px solid ${({ $border }) => $border};
  border-radius: 6px;
  outline: none;
  &:focus {
    border-color: ${({ $focus }) => $focus};
  }
`;

const RunButton = styled.button`
  padding: 0.7rem 2.2rem;
  background: ${({ $bg }) => $bg};
  color: #fff;
  border: none;
  border-radius: 7px;
  font-size: 1.35rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s;
  &:hover {
    background: ${({ $hover }) => $hover};
  }
`;

const ResultBadge = styled.span`
  font-size: 1.55rem;
  font-weight: 700;
  color: ${({ $color }) => $color};
  background: ${({ $bg }) => $bg};
  border-radius: 7px;
  padding: 0.45rem 1.4rem;
  font-family: monospace;
`;

// ═════════════════════════════════════════════════════════════════════════════
// randomValue — blue
// ═════════════════════════════════════════════════════════════════════════════

const RandomValuePage = () => {
  const [result, setResult] = useState(null);
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(10);

  const run = () => setResult(randomValue(Number(min), Number(max)).toFixed(4));

  return (
    <StoryPage $bg={blue.m50}>
      <MaxWidth>
        <Card $accent={blue.m500}>
          <CardHeader $bg='#fff' $border={blue.m100}>
            <div>
              <FnName $color={blue.m900} $bg={blue.m100}>
                randomValue
              </FnName>
              <Signature>(min: number, max: number) → number</Signature>
            </div>
            <Description>
              Returns a pseudo-random <strong>floating-point</strong> number in the range{' '}
              <Code>[min, max + 1)</Code>.
            </Description>
          </CardHeader>
          <CardBody>
            <div>
              <SectionLabel $color={blue.m700}>Examples</SectionLabel>
              <ExamplesTable
                outputColor={blue.m700}
                rows={[
                  { input: `randomValue(1, 5)`, output: `≈ 3.7142`, note: 'Range [1, 6)' },
                  { input: `randomValue(0, 1)`, output: `≈ 0.8213`, note: 'Range [0, 2)' },
                  { input: `randomValue(100, 200)`, output: `≈ 157.43`, note: 'Range [100, 201)' },
                ]}
              />
            </div>
            <div>
              <SectionLabel $color={blue.m700}>Live Demo</SectionLabel>
              <LiveRow>
                <InputLabel>
                  min
                  <NumInput
                    type='number'
                    value={min}
                    onChange={(e) => setMin(e.target.value)}
                    $border={blue.m200}
                    $focus={blue.m500}
                  />
                </InputLabel>
                <InputLabel>
                  max
                  <NumInput
                    type='number'
                    value={max}
                    onChange={(e) => setMax(e.target.value)}
                    $border={blue.m200}
                    $focus={blue.m500}
                  />
                </InputLabel>
                <RunButton $bg={blue.m500} $hover={blue.m700} onClick={run}>
                  Run
                </RunButton>
                {result !== null && (
                  <ResultBadge $color={blue.m800} $bg={blue.m50}>
                    {result}
                  </ResultBadge>
                )}
              </LiveRow>
            </div>
            <div>
              <SectionLabel $color={blue.m700}>Usage</SectionLabel>
              <Pre>{`import randomValue from 'meticulous-ui/utils/randomValue';

const opacity = randomValue(0.2, 0.8);  // random float in [0.2, 1.8)`}</Pre>
            </div>
            <div>
              <SectionLabel $color={blue.m700}>Source</SectionLabel>
              <Pre>{`const randomValue = (min, max) => Math.random() * (max - min + 1) + min;`}</Pre>
            </div>
          </CardBody>
        </Card>
      </MaxWidth>
    </StoryPage>
  );
};

// ═════════════════════════════════════════════════════════════════════════════
// randomInt — pink
// ═════════════════════════════════════════════════════════════════════════════

const RandomIntPage = () => {
  const [result, setResult] = useState(null);
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(10);

  const run = () => setResult(randomInt(Number(min), Number(max)));

  return (
    <StoryPage $bg={pink.m50}>
      <MaxWidth>
        <Card $accent={pink.m500}>
          <CardHeader $bg='#fff' $border={pink.m100}>
            <div>
              <FnName $color={pink.m900} $bg={pink.m100}>
                randomInt
              </FnName>
              <Signature>(min: number, max: number) → number</Signature>
            </div>
            <Description>
              Returns a pseudo-random <strong>integer</strong> in the range{' '}
              <Code>[min, floor(max + 1))</Code>. Built on top of <Code>randomValue</Code>.
            </Description>
          </CardHeader>
          <CardBody>
            <div>
              <SectionLabel $color={pink.m700}>Examples</SectionLabel>
              <ExamplesTable
                outputColor={pink.m700}
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
              <SectionLabel $color={pink.m700}>Live Demo</SectionLabel>
              <LiveRow>
                <InputLabel>
                  min
                  <NumInput
                    type='number'
                    value={min}
                    onChange={(e) => setMin(e.target.value)}
                    $border={pink.m200}
                    $focus={pink.m500}
                  />
                </InputLabel>
                <InputLabel>
                  max
                  <NumInput
                    type='number'
                    value={max}
                    onChange={(e) => setMax(e.target.value)}
                    $border={pink.m200}
                    $focus={pink.m500}
                  />
                </InputLabel>
                <RunButton $bg={pink.m500} $hover={pink.m700} onClick={run}>
                  Run
                </RunButton>
                {result !== null && (
                  <ResultBadge $color={pink.m800} $bg={pink.m50}>
                    {result}
                  </ResultBadge>
                )}
              </LiveRow>
            </div>
            <div>
              <SectionLabel $color={pink.m700}>Usage</SectionLabel>
              <Pre>{`import randomInt from 'meticulous-ui/utils/randomInt';

const index = randomInt(0, items.length - 1);  // random index into array`}</Pre>
            </div>
            <div>
              <SectionLabel $color={pink.m700}>Source</SectionLabel>
              <Pre>{`import randomValue from './randomValue';

const randomInt = (min, max) => Math.floor(randomValue(min, max));`}</Pre>
            </div>
          </CardBody>
        </Card>
      </MaxWidth>
    </StoryPage>
  );
};

// ═════════════════════════════════════════════════════════════════════════════
// formatNumber — red
// ═════════════════════════════════════════════════════════════════════════════

const FormatNumberPage = () => (
  <StoryPage $bg={red.m50}>
    <MaxWidth>
      <Card $accent={red.m500}>
        <CardHeader $bg='#fff' $border={red.m100}>
          <div>
            <FnName $color={red.m900} $bg={red.m100}>
              formatNumber
            </FnName>
            <Signature>(num: number, locale?: string) → string</Signature>
          </div>
          <Description>
            Formats a number with locale-appropriate digit grouping using{' '}
            <Code>Intl.NumberFormat</Code>. Defaults to <Code>en-US</Code>. Useful for displaying
            large numbers with the correct thousands separator and decimal style for a region.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={red.m700}>Examples</SectionLabel>
            <ExamplesTable
              outputColor={red.m700}
              rows={[
                {
                  input: `formatNumber(1234567.89)`,
                  output: `'1,234,567.89'`,
                  note: 'en-US — comma thousands, dot decimal',
                },
                {
                  input: `formatNumber(1234567.89, 'en-IN')`,
                  output: `'12,34,567.89'`,
                  note: 'en-IN — Indian lakh grouping',
                },
                { input: `formatNumber(1000)`, output: `'1,000'` },
                { input: `formatNumber(42)`, output: `'42'`, note: 'Small number — no grouping' },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={red.m700}>Usage</SectionLabel>
            <Pre>{`import formatNumber from 'meticulous-ui/utils/formatNumber';

formatNumber(1000000);           // → '1,000,000'
formatNumber(1000000, 'en-IN');  // → '10,00,000'`}</Pre>
          </div>
          <div>
            <SectionLabel $color={red.m700}>Source</SectionLabel>
            <Pre>{`const formatNumber = (num, locale = 'en-US') => {
  if (typeof num !== 'number') return num;
  return new Intl.NumberFormat(locale).format(num);
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// formatCurrency — green
// ═════════════════════════════════════════════════════════════════════════════

const FormatCurrencyPage = () => (
  <StoryPage $bg={green.m50}>
    <MaxWidth>
      <Card $accent={green.m500}>
        <CardHeader $bg='#fff' $border={green.m100}>
          <div>
            <FnName $color={green.m900} $bg={green.m100}>
              formatCurrency
            </FnName>
            <Signature>(num: number, currency?: string, locale?: string) → string</Signature>
          </div>
          <Description>
            Formats a number as a localized currency string using <Code>Intl.NumberFormat</Code>.
            Defaults to USD / en-US.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={green.m700}>Examples</SectionLabel>
            <ExamplesTable
              outputColor={green.m700}
              rows={[
                { input: `formatCurrency(1234.5)`, output: `'$1,234.50'` },
                { input: `formatCurrency(0)`, output: `'$0.00'` },
                { input: `formatCurrency(-99.9)`, output: `'-$99.90'`, note: 'Negative value' },
                {
                  input: `formatCurrency(1000, 'EUR', 'de-DE')`,
                  output: `'1.000,00 €'`,
                  note: 'German locale',
                },
                {
                  input: `formatCurrency(1000, 'INR', 'en-IN')`,
                  output: `'₹1,000.00'`,
                  note: 'Indian locale',
                },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={green.m700}>Usage</SectionLabel>
            <Pre>{`import formatCurrency from 'meticulous-ui/utils/formatCurrency';

formatCurrency(price);          // → '$12.99'
formatCurrency(price, 'GBP');   // → '£12.99'`}</Pre>
          </div>
          <div>
            <SectionLabel $color={green.m700}>Source</SectionLabel>
            <Pre>{`const formatCurrency = (num, currency = 'USD', locale = 'en-US') => {
  if (typeof num !== 'number') return num;
  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(num);
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// formatCompactNumber — teal
// ═════════════════════════════════════════════════════════════════════════════

const FormatCompactNumberPage = () => (
  <StoryPage $bg={teal.m50}>
    <MaxWidth>
      <Card $accent={teal.m500}>
        <CardHeader $bg='#fff' $border={teal.m100}>
          <div>
            <FnName $color={teal.m900} $bg={teal.m100}>
              formatCompactNumber
            </FnName>
            <Signature>(num: number, locale?: string) → string</Signature>
          </div>
          <Description>
            Formats large numbers in short compact notation (<Code>K</Code>, <Code>M</Code>,{' '}
            <Code>B</Code>) using <Code>Intl.NumberFormat</Code> compact display.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={teal.m700}>Examples</SectionLabel>
            <ExamplesTable
              outputColor={teal.m700}
              rows={[
                { input: `formatCompactNumber(1000)`, output: `'1K'` },
                { input: `formatCompactNumber(1500000)`, output: `'1.5M'` },
                { input: `formatCompactNumber(2300000000)`, output: `'2.3B'` },
                {
                  input: `formatCompactNumber(42)`,
                  output: `'42'`,
                  note: 'Small number — unchanged',
                },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={teal.m700}>Usage</SectionLabel>
            <Pre>{`import formatCompactNumber from 'meticulous-ui/utils/formatCompactNumber';

formatCompactNumber(followerCount);  // → '12.4K'`}</Pre>
          </div>
          <div>
            <SectionLabel $color={teal.m700}>Source</SectionLabel>
            <Pre>{`const formatCompactNumber = (num, locale = 'en-US') => {
  if (typeof num !== 'number') return num;
  return new Intl.NumberFormat(locale, {
    notation: 'compact',
    compactDisplay: 'short',
  }).format(num);
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// roundTo — purple
// ═════════════════════════════════════════════════════════════════════════════

const RoundToPage = () => (
  <StoryPage $bg={purple.m50}>
    <MaxWidth>
      <Card $accent={purple.m500}>
        <CardHeader $bg='#fff' $border={purple.m100}>
          <div>
            <FnName $color={purple.m900} $bg={purple.m100}>
              roundTo
            </FnName>
            <Signature>(num: number, decimals?: number) → number</Signature>
          </div>
          <Description>
            Rounds a number to a given number of decimal places. Defaults to <Code>0</Code> (integer
            rounding). Returns the same type as the input — a number, not a formatted string.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={purple.m700}>Examples</SectionLabel>
            <ExamplesTable
              outputColor={purple.m700}
              rows={[
                { input: `roundTo(3.14159, 2)`, output: `3.14` },
                { input: `roundTo(1.005, 2)`, output: `1.01`, note: 'Rounds up correctly' },
                { input: `roundTo(42.7)`, output: `43`, note: 'Default 0 decimals' },
                { input: `roundTo(1234.5678, 1)`, output: `1234.6` },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={purple.m700}>Usage</SectionLabel>
            <Pre>{`import roundTo from 'meticulous-ui/utils/roundTo';

const price = roundTo(rawPrice, 2);   // → 9.99
const score = roundTo(98.456, 1);     // → 98.5`}</Pre>
          </div>
          <div>
            <SectionLabel $color={purple.m700}>Source</SectionLabel>
            <Pre>{`const roundTo = (num, decimals = 0) => {
  if (typeof num !== 'number') return num;
  const factor = Math.pow(10, decimals);
  return Math.round(num * factor) / factor;
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// randomBetween — orange
// ═════════════════════════════════════════════════════════════════════════════

const RandomBetweenPage = () => {
  const [result, setResult] = useState(null);
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(10);

  const run = () => setResult(randomBetween(Number(min), Number(max)).toFixed(4));

  return (
    <StoryPage $bg={orange.m50}>
      <MaxWidth>
        <Card $accent={orange.m600}>
          <CardHeader $bg='#fff' $border={orange.m100}>
            <div>
              <FnName $color={orange.m900} $bg={orange.m100}>
                randomBetween
              </FnName>
              <Signature>(min: number, max: number) → number</Signature>
            </div>
            <Description>
              Returns a pseudo-random <strong>float</strong> in the strictly bounded range{' '}
              <Code>[min, max]</Code>. Unlike <Code>randomValue</Code>, the upper bound is{' '}
              <Code>max</Code>, not <Code>max + 1</Code>.
            </Description>
          </CardHeader>
          <CardBody>
            <div>
              <SectionLabel $color={orange.m700}>Examples</SectionLabel>
              <ExamplesTable
                outputColor={orange.m700}
                rows={[
                  { input: `randomBetween(0, 1)`, output: `≈ 0.6231`, note: 'Range [0, 1]' },
                  { input: `randomBetween(10, 20)`, output: `≈ 14.87`, note: 'Range [10, 20]' },
                  { input: `randomBetween(-5, 5)`, output: `≈ -1.34`, note: 'Negative min' },
                ]}
              />
            </div>
            <div>
              <SectionLabel $color={orange.m700}>Live Demo</SectionLabel>
              <LiveRow>
                <InputLabel>
                  min
                  <NumInput
                    type='number'
                    value={min}
                    onChange={(e) => setMin(e.target.value)}
                    $border={orange.m200}
                    $focus={orange.m500}
                  />
                </InputLabel>
                <InputLabel>
                  max
                  <NumInput
                    type='number'
                    value={max}
                    onChange={(e) => setMax(e.target.value)}
                    $border={orange.m200}
                    $focus={orange.m500}
                  />
                </InputLabel>
                <RunButton $bg={orange.m500} $hover={orange.m700} onClick={run}>
                  Run
                </RunButton>
                {result !== null && (
                  <ResultBadge $color={orange.m800} $bg={orange.m50}>
                    {result}
                  </ResultBadge>
                )}
              </LiveRow>
            </div>
            <div>
              <SectionLabel $color={orange.m700}>Usage</SectionLabel>
              <Pre>{`import randomBetween from 'meticulous-ui/utils/randomBetween';

const opacity = randomBetween(0.2, 0.9);  // float in [0.2, 0.9]`}</Pre>
            </div>
            <div>
              <SectionLabel $color={orange.m700}>Source</SectionLabel>
              <Pre>{`const randomBetween = (min, max) => Math.random() * (max - min) + min;`}</Pre>
            </div>
          </CardBody>
        </Card>
      </MaxWidth>
    </StoryPage>
  );
};

// ═════════════════════════════════════════════════════════════════════════════
// clamp — indigo
// ═════════════════════════════════════════════════════════════════════════════

const ClampPage = () => (
  <StoryPage $bg={indigo.m50}>
    <MaxWidth>
      <Card $accent={indigo.m500}>
        <CardHeader $bg='#fff' $border={indigo.m100}>
          <div>
            <FnName $color={indigo.m900} $bg={indigo.m100}>
              clamp
            </FnName>
            <Signature>(value: number, min: number, max: number) → number</Signature>
          </div>
          <Description>
            Constrains a value to the range <Code>[min, max]</Code>. If the value is below{' '}
            <Code>min</Code> it returns <Code>min</Code>; above <Code>max</Code> it returns{' '}
            <Code>max</Code>; otherwise the value is returned unchanged.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={indigo.m700}>Examples</SectionLabel>
            <ExamplesTable
              outputColor={indigo.m700}
              rows={[
                { input: `clamp(5, 0, 10)`, output: `5`, note: 'Within range — unchanged' },
                { input: `clamp(-3, 0, 10)`, output: `0`, note: 'Below min → min' },
                { input: `clamp(15, 0, 10)`, output: `10`, note: 'Above max → max' },
                { input: `clamp(0.5, 0, 1)`, output: `0.5`, note: 'Works with floats' },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={indigo.m700}>Usage</SectionLabel>
            <Pre>{`import clamp from 'meticulous-ui/utils/clamp';

const volume = clamp(userInput, 0, 100);   // always 0–100
const alpha  = clamp(rawAlpha,  0, 1);     // always 0–1`}</Pre>
          </div>
          <div>
            <SectionLabel $color={indigo.m700}>Source</SectionLabel>
            <Pre>{`const clamp = (value, min, max) => Math.min(Math.max(value, min), max);`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// percentage — yellow
// ═════════════════════════════════════════════════════════════════════════════

const PercentagePage = () => (
  <StoryPage $bg={yellow.m50}>
    <MaxWidth>
      <Card $accent={yellow.m800}>
        <CardHeader $bg='#fff' $border={yellow.m200}>
          <div>
            <FnName $color={yellow.m900} $bg={yellow.m200}>
              percentage
            </FnName>
            <Signature>(part: number, total: number, decimals?: number) → number</Signature>
          </div>
          <Description>
            Computes <Code>(part / total) × 100</Code>, rounded to <Code>decimals</Code> places
            (default 2). Returns <Code>0</Code> when <Code>total</Code> is 0 to avoid division by
            zero.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={yellow.m800}>Examples</SectionLabel>
            <ExamplesTable
              outputColor={yellow.m800}
              rows={[
                { input: `percentage(25, 200)`, output: `12.5` },
                { input: `percentage(1, 3)`, output: `33.33` },
                { input: `percentage(1, 3, 0)`, output: `33`, note: '0 decimal places' },
                {
                  input: `percentage(50, 0)`,
                  output: `0`,
                  note: 'Zero total → safe 0',
                },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={yellow.m800}>Usage</SectionLabel>
            <Pre>{`import percentage from 'meticulous-ui/utils/percentage';

const progress = percentage(completed, total);  // → 66.67
const share    = percentage(votes, totalVotes, 1);  // → 42.3`}</Pre>
          </div>
          <div>
            <SectionLabel $color={yellow.m800}>Source</SectionLabel>
            <Pre>{`const percentage = (part, total, decimals = 2) => {
  if (typeof part !== 'number' || typeof total !== 'number' || total === 0) return 0;
  const factor = Math.pow(10, decimals);
  return Math.round((part / total) * 100 * factor) / factor;
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
  title: 'Utilities/Number Utilities',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    layout: 'fullscreen',
  },
};

export const FormatNumber = () => <FormatNumberPage />;
FormatNumber.storyName = 'formatNumber';

export const FormatCurrency = () => <FormatCurrencyPage />;
FormatCurrency.storyName = 'formatCurrency';

export const FormatCompactNumber = () => <FormatCompactNumberPage />;
FormatCompactNumber.storyName = 'formatCompactNumber';

export const RoundTo = () => <RoundToPage />;
RoundTo.storyName = 'roundTo';

export const RandomBetween = () => <RandomBetweenPage />;
RandomBetween.storyName = 'randomBetween';

export const Clamp = () => <ClampPage />;
Clamp.storyName = 'clamp';

export const Percentage = () => <PercentagePage />;
Percentage.storyName = 'percentage';

export const RandomValue = () => <RandomValuePage />;
RandomValue.storyName = 'randomValue';

export const RandomInt = () => <RandomIntPage />;
RandomInt.storyName = 'randomInt';
