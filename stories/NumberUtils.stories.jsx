import { useState } from 'react';
import styled from 'styled-components';

import blueGray from '../src/colors/blueGray';
import blue from '../src/colors/blue';
import pink from '../src/colors/pink';

import randomInt from '../src/utils/randomInt';
import randomValue from '../src/utils/randomValue';

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
// Story config
// ═════════════════════════════════════════════════════════════════════════════

export default {
  title: 'Utils/Number Utilities',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    layout: 'fullscreen',
  },
};

export const RandomValue = () => <RandomValuePage />;
RandomValue.storyName = 'randomValue';

export const RandomInt = () => <RandomIntPage />;
RandomInt.storyName = 'randomInt';
