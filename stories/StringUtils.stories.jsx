import styled from 'styled-components';

import blueGray from '../src/colors/blueGray';
import purple from '../src/colors/purple';
import yellow from '../src/colors/yellow';
import teal from '../src/colors/teal';
import blue from '../src/colors/blue';
import indigo from '../src/colors/indigo';
import pink from '../src/colors/pink';
import violet from '../src/colors/violet';
import green from '../src/colors/green';
import orange from '../src/colors/orange';
import red from '../src/colors/red';
import cyan from '../src/colors/cyan';

import capFirstLetter from '../src/utils/capFirstLetter';
import capitalize from '../src/utils/capitalize';
import titleCase from '../src/utils/titleCase';
import camelCase from '../src/utils/camelCase';
import snakeCase from '../src/utils/snakeCase';
import kebabCase from '../src/utils/kebabCase';
import truncate from '../src/utils/truncate';
import slugify from '../src/utils/slugify';
import removeExtraSpaces from '../src/utils/removeExtraSpaces';
import maskEmail from '../src/utils/maskEmail';
import maskPhone from '../src/utils/maskPhone';
import generateInitials from '../src/utils/generateInitials';

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
// capFirstLetter — blueGray
// ═════════════════════════════════════════════════════════════════════════════

const CapFirstLetterPage = () => (
  <StoryPage $bg={blueGray.m50}>
    <MaxWidth>
      <Card $accent={blueGray.m500}>
        <CardHeader $bg='#fff' $border={blueGray.m100}>
          <div>
            <FnName $color={blueGray.m900} $bg={blueGray.m100}>
              capFirstLetter
            </FnName>
            <Signature>(str: string) → string</Signature>
          </div>
          <Description>
            Uppercases only the very first character and leaves the rest of the string exactly
            as-is. Unlike <Code>capitalize</Code>, it does <em>not</em> lowercase the remaining
            characters.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={blueGray.m700}>Examples</SectionLabel>
            <ExamplesTable
              outputColor={blueGray.m700}
              rows={[
                { input: `capFirstLetter('hello world')`, output: `'Hello world'` },
                {
                  input: `capFirstLetter('hELLO')`,
                  output: `'HELLO'`,
                  note: 'Rest unchanged — compare capitalize()',
                },
                { input: `capFirstLetter('already Capital')`, output: `'Already Capital'` },
                {
                  input: `capFirstLetter('')`,
                  output: `''`,
                  note: 'Empty string — returned as-is',
                },
                { input: `capFirstLetter(42)`, output: `42`, note: 'Non-string — returned as-is' },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={blueGray.m700}>Usage</SectionLabel>
            <Pre>{`import capFirstLetter from 'meticulous-ui/utils/capFirstLetter';

capFirstLetter('hello world');  // → 'Hello world'`}</Pre>
          </div>
          <div>
            <SectionLabel $color={blueGray.m700}>Source</SectionLabel>
            <Pre>{`const capFirstLetter = (str) => {
  if (typeof str !== 'string' || str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// capitalize — purple
// ═════════════════════════════════════════════════════════════════════════════

const CapitalizePage = () => (
  <StoryPage $bg={purple.m50}>
    <MaxWidth>
      <Card $accent={purple.m500}>
        <CardHeader $bg='#fff' $border={purple.m100}>
          <div>
            <FnName $color={purple.m900} $bg={purple.m100}>
              capitalize
            </FnName>
            <Signature>(str: string) → string</Signature>
          </div>
          <Description>
            Uppercases the first character and lowercases the rest. Unlike{' '}
            <Code>capFirstLetter</Code>, this normalizes the entire string — not just the first
            character.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={purple.m700}>Examples</SectionLabel>
            <ExamplesTable
              outputColor={purple.m700}
              rows={[
                { input: `capitalize('hello')`, output: `'Hello'` },
                {
                  input: `capitalize('WORLD')`,
                  output: `'World'`,
                  note: 'Lowercases the rest',
                },
                { input: `capitalize('jOHN dOE')`, output: `'John doe'` },
                { input: `capitalize('')`, output: `''`, note: 'Empty string — returned as-is' },
                { input: `capitalize(42)`, output: `42`, note: 'Non-string — returned as-is' },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={purple.m700}>Usage</SectionLabel>
            <Pre>{`import capitalize from 'meticulous-ui/utils/capitalize';

capitalize('hello world');  // → 'Hello world'`}</Pre>
          </div>
          <div>
            <SectionLabel $color={purple.m700}>Source</SectionLabel>
            <Pre>{`const capitalize = (str) => {
  if (typeof str !== 'string' || str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// titleCase — yellow
// ═════════════════════════════════════════════════════════════════════════════

const TitleCasePage = () => (
  <StoryPage $bg={yellow.m50}>
    <MaxWidth>
      <Card $accent={yellow.m800}>
        <CardHeader $bg='#fff' $border={yellow.m200}>
          <div>
            <FnName $color={yellow.m900} $bg={yellow.m200}>
              titleCase
            </FnName>
            <Signature>(str: string) → string</Signature>
          </div>
          <Description>
            Capitalizes the first letter of every word, lowercasing the rest. Splits on single
            spaces — multiple spaces are preserved as-is.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={yellow.m800}>Examples</SectionLabel>
            <ExamplesTable
              outputColor={yellow.m800}
              rows={[
                { input: `titleCase('hello world')`, output: `'Hello World'` },
                { input: `titleCase('the quick brown fox')`, output: `'The Quick Brown Fox'` },
                {
                  input: `titleCase('ALREADY CAPS')`,
                  output: `'Already Caps'`,
                  note: 'Normalizes existing caps',
                },
                { input: `titleCase('')`, output: `''` },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={yellow.m800}>Usage</SectionLabel>
            <Pre>{`import titleCase from 'meticulous-ui/utils/titleCase';

titleCase('the great gatsby');  // → 'The Great Gatsby'`}</Pre>
          </div>
          <div>
            <SectionLabel $color={yellow.m800}>Source</SectionLabel>
            <Pre>{`const titleCase = (str) => {
  if (typeof str !== 'string') return str;
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// camelCase — teal
// ═════════════════════════════════════════════════════════════════════════════

const CamelCasePage = () => (
  <StoryPage $bg={teal.m50}>
    <MaxWidth>
      <Card $accent={teal.m500}>
        <CardHeader $bg='#fff' $border={teal.m100}>
          <div>
            <FnName $color={teal.m900} $bg={teal.m100}>
              camelCase
            </FnName>
            <Signature>(str: string) → string</Signature>
          </div>
          <Description>
            Converts a string to <Code>camelCase</Code>. Handles spaces, hyphens, and underscores as
            word separators. The first word is entirely lowercased.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={teal.m700}>Examples</SectionLabel>
            <ExamplesTable
              outputColor={teal.m700}
              rows={[
                { input: `camelCase('hello world')`, output: `'helloWorld'` },
                {
                  input: `camelCase('foo-bar-baz')`,
                  output: `'fooBarBaz'`,
                  note: 'Hyphen-separated',
                },
                {
                  input: `camelCase('snake_case_string')`,
                  output: `'snakeCaseString'`,
                  note: 'Underscore-separated',
                },
                { input: `camelCase('Mixed Case String')`, output: `'mixedCaseString'` },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={teal.m700}>Usage</SectionLabel>
            <Pre>{`import camelCase from 'meticulous-ui/utils/camelCase';

camelCase('background-color');  // → 'backgroundColor'`}</Pre>
          </div>
          <div>
            <SectionLabel $color={teal.m700}>Source</SectionLabel>
            <Pre>{`const camelCase = (str) => {
  if (typeof str !== 'string') return str;
  return str
    .trim()
    .toLowerCase()
    .replace(/[-_\\s]+(.)?/g, (_, char) => (char ? char.toUpperCase() : ''));
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// snakeCase — blue
// ═════════════════════════════════════════════════════════════════════════════

const SnakeCasePage = () => (
  <StoryPage $bg={blue.m50}>
    <MaxWidth>
      <Card $accent={blue.m500}>
        <CardHeader $bg='#fff' $border={blue.m100}>
          <div>
            <FnName $color={blue.m900} $bg={blue.m100}>
              snakeCase
            </FnName>
            <Signature>(str: string) → string</Signature>
          </div>
          <Description>
            Converts a string to <Code>snake_case</Code>. Splits on camelCase boundaries, spaces,
            and hyphens. Output is fully lowercased.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={blue.m700}>Examples</SectionLabel>
            <ExamplesTable
              outputColor={blue.m700}
              rows={[
                {
                  input: `snakeCase('helloWorld')`,
                  output: `'hello_world'`,
                  note: 'camelCase split',
                },
                { input: `snakeCase('Hello World')`, output: `'hello_world'` },
                { input: `snakeCase('foo-bar')`, output: `'foo_bar'`, note: 'Hyphen replaced' },
                { input: `snakeCase('camelCaseString')`, output: `'camel_case_string'` },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={blue.m700}>Usage</SectionLabel>
            <Pre>{`import snakeCase from 'meticulous-ui/utils/snakeCase';

snakeCase('myVariableName');  // → 'my_variable_name'`}</Pre>
          </div>
          <div>
            <SectionLabel $color={blue.m700}>Source</SectionLabel>
            <Pre>{`const snakeCase = (str) => {
  if (typeof str !== 'string') return str;
  return str
    .trim()
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .replace(/[-\\s]+/g, '_')
    .toLowerCase();
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// kebabCase — indigo
// ═════════════════════════════════════════════════════════════════════════════

const KebabCasePage = () => (
  <StoryPage $bg={indigo.m50}>
    <MaxWidth>
      <Card $accent={indigo.m500}>
        <CardHeader $bg='#fff' $border={indigo.m100}>
          <div>
            <FnName $color={indigo.m900} $bg={indigo.m100}>
              kebabCase
            </FnName>
            <Signature>(str: string) → string</Signature>
          </div>
          <Description>
            Converts a string to <Code>kebab-case</Code>. Splits on camelCase boundaries, spaces,
            and underscores. Output is fully lowercased.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={indigo.m700}>Examples</SectionLabel>
            <ExamplesTable
              outputColor={indigo.m700}
              rows={[
                {
                  input: `kebabCase('helloWorld')`,
                  output: `'hello-world'`,
                  note: 'camelCase split',
                },
                { input: `kebabCase('Hello World')`, output: `'hello-world'` },
                {
                  input: `kebabCase('snake_case_string')`,
                  output: `'snake-case-string'`,
                  note: 'Underscore replaced',
                },
                { input: `kebabCase('fontSize')`, output: `'font-size'` },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={indigo.m700}>Usage</SectionLabel>
            <Pre>{`import kebabCase from 'meticulous-ui/utils/kebabCase';

kebabCase('backgroundColor');  // → 'background-color'`}</Pre>
          </div>
          <div>
            <SectionLabel $color={indigo.m700}>Source</SectionLabel>
            <Pre>{`const kebabCase = (str) => {
  if (typeof str !== 'string') return str;
  return str
    .trim()
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[_\\s]+/g, '-')
    .toLowerCase();
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// truncate — pink
// ═════════════════════════════════════════════════════════════════════════════

const TruncatePage = () => (
  <StoryPage $bg={pink.m50}>
    <MaxWidth>
      <Card $accent={pink.m500}>
        <CardHeader $bg='#fff' $border={pink.m100}>
          <div>
            <FnName $color={pink.m900} $bg={pink.m100}>
              truncate
            </FnName>
            <Signature>(str: string, limit: number) → string</Signature>
          </div>
          <Description>
            Trims a string to <Code>limit</Code> characters and appends an ellipsis (<Code>…</Code>
            ). Strings at or under the limit are returned unchanged.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={pink.m700}>Examples</SectionLabel>
            <ExamplesTable
              outputColor={pink.m700}
              rows={[
                { input: `truncate('Hello World', 5)`, output: `'Hello…'` },
                {
                  input: `truncate('Short', 10)`,
                  output: `'Short'`,
                  note: 'Within limit — no change',
                },
                { input: `truncate('Long string here', 4)`, output: `'Long…'` },
                {
                  input: `truncate('Exact', 5)`,
                  output: `'Exact'`,
                  note: 'Exactly at limit — no ellipsis',
                },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={pink.m700}>Usage</SectionLabel>
            <Pre>{`import truncate from 'meticulous-ui/utils/truncate';

const preview = truncate(article.body, 120);
// → 'Lorem ipsum dolor sit amet, consectetur adipiscing elit…'`}</Pre>
          </div>
          <div>
            <SectionLabel $color={pink.m700}>Source</SectionLabel>
            <Pre>{`const truncate = (str, limit) => {
  if (typeof str !== 'string') return str;
  return str.length <= limit ? str : str.slice(0, limit) + '…';
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// slugify — violet
// ═════════════════════════════════════════════════════════════════════════════

const SlugifyPage = () => (
  <StoryPage $bg={violet.m50}>
    <MaxWidth>
      <Card $accent={violet.m500}>
        <CardHeader $bg='#fff' $border={violet.m100}>
          <div>
            <FnName $color={violet.m900} $bg={violet.m100}>
              slugify
            </FnName>
            <Signature>(str: string) → string</Signature>
          </div>
          <Description>
            Converts a string into a URL-safe slug. Lowercases, strips diacritics, removes
            non-alphanumeric characters, and collapses whitespace into hyphens.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={violet.m700}>Examples</SectionLabel>
            <ExamplesTable
              outputColor={violet.m700}
              rows={[
                { input: `slugify('Hello World')`, output: `'hello-world'` },
                {
                  input: `slugify('  Spaced  Out  ')`,
                  output: `'spaced-out'`,
                  note: 'Trims and collapses spaces',
                },
                {
                  input: `slugify('Héllo Wörld')`,
                  output: `'hello-world'`,
                  note: 'Diacritics stripped',
                },
                {
                  input: `slugify('100% Organic!')`,
                  output: `'100-organic'`,
                  note: 'Special chars removed',
                },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={violet.m700}>Usage</SectionLabel>
            <Pre>{`import slugify from 'meticulous-ui/utils/slugify';

const url = \`/blog/\${slugify(post.title)}\`;
// → '/blog/my-awesome-post'`}</Pre>
          </div>
          <div>
            <SectionLabel $color={violet.m700}>Source</SectionLabel>
            <Pre>{`const slugify = (str) => {
  if (typeof str !== 'string') return str;
  return str
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\\u0300-\\u036f]/g, '')
    .replace(/[^a-z0-9\\s-]/g, '')
    .replace(/\\s+/g, '-')
    .replace(/-+/g, '-');
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// removeExtraSpaces — green
// ═════════════════════════════════════════════════════════════════════════════

const RemoveExtraSpacesPage = () => (
  <StoryPage $bg={green.m50}>
    <MaxWidth>
      <Card $accent={green.m500}>
        <CardHeader $bg='#fff' $border={green.m100}>
          <div>
            <FnName $color={green.m900} $bg={green.m100}>
              removeExtraSpaces
            </FnName>
            <Signature>(str: string) → string</Signature>
          </div>
          <Description>
            Trims leading and trailing whitespace and collapses any internal runs of whitespace
            (spaces, tabs, newlines) into a single space.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={green.m700}>Examples</SectionLabel>
            <ExamplesTable
              outputColor={green.m700}
              rows={[
                {
                  input: `removeExtraSpaces('  hello   world  ')`,
                  output: `'hello world'`,
                  note: 'Trims + collapses',
                },
                { input: `removeExtraSpaces('a  b  c')`, output: `'a b c'` },
                {
                  input: `removeExtraSpaces('no extra spaces')`,
                  output: `'no extra spaces'`,
                  note: 'Already clean — unchanged',
                },
                {
                  input: `removeExtraSpaces('   ')`,
                  output: `''`,
                  note: 'Only spaces → empty string',
                },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={green.m700}>Usage</SectionLabel>
            <Pre>{`import removeExtraSpaces from 'meticulous-ui/utils/removeExtraSpaces';

const clean = removeExtraSpaces(userInput);  // sanitize free-text fields`}</Pre>
          </div>
          <div>
            <SectionLabel $color={green.m700}>Source</SectionLabel>
            <Pre>{`const removeExtraSpaces = (str) => {
  if (typeof str !== 'string') return str;
  return str.trim().replace(/\\s+/g, ' ');
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// maskEmail — orange
// ═════════════════════════════════════════════════════════════════════════════

const MaskEmailPage = () => (
  <StoryPage $bg={orange.m50}>
    <MaxWidth>
      <Card $accent={orange.m600}>
        <CardHeader $bg='#fff' $border={orange.m100}>
          <div>
            <FnName $color={orange.m900} $bg={orange.m100}>
              maskEmail
            </FnName>
            <Signature>(str: string) → string</Signature>
          </div>
          <Description>
            Masks an email address for display, keeping only the first character of the local part
            and the full domain. Strings without <Code>@</Code> are returned unchanged.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={orange.m700}>Examples</SectionLabel>
            <ExamplesTable
              outputColor={orange.m700}
              rows={[
                { input: `maskEmail('john@example.com')`, output: `'j***@example.com'` },
                { input: `maskEmail('alice@gmail.com')`, output: `'a***@gmail.com'` },
                { input: `maskEmail('x@y.co')`, output: `'x***@y.co'` },
                {
                  input: `maskEmail('notanemail')`,
                  output: `'notanemail'`,
                  note: 'No @ — returned as-is',
                },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={orange.m700}>Usage</SectionLabel>
            <Pre>{`import maskEmail from 'meticulous-ui/utils/maskEmail';

// Display in account settings
maskEmail(user.email);  // → 'j***@example.com'`}</Pre>
          </div>
          <div>
            <SectionLabel $color={orange.m700}>Source</SectionLabel>
            <Pre>{`const maskEmail = (str) => {
  if (typeof str !== 'string') return str;
  const [local, domain] = str.split('@');
  if (!domain) return str;
  return local.charAt(0) + '***@' + domain;
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// maskPhone — red
// ═════════════════════════════════════════════════════════════════════════════

const MaskPhonePage = () => (
  <StoryPage $bg={red.m50}>
    <MaxWidth>
      <Card $accent={red.m500}>
        <CardHeader $bg='#fff' $border={red.m100}>
          <div>
            <FnName $color={red.m900} $bg={red.m100}>
              maskPhone
            </FnName>
            <Signature>(str: string) → string</Signature>
          </div>
          <Description>
            Masks all digits in a phone string except the last four, preserving formatting
            characters (spaces, hyphens, parentheses) in place.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={red.m700}>Examples</SectionLabel>
            <ExamplesTable
              outputColor={red.m700}
              rows={[
                {
                  input: `maskPhone('(555) 123-4567')`,
                  output: `'(***) ***-4567'`,
                  note: 'Formatting preserved',
                },
                { input: `maskPhone('1234567890')`, output: `'******7890'` },
                {
                  input: `maskPhone('+1 555-867-5309')`,
                  output: `'+* ***-***-5309'`,
                  note: 'Country code masked too',
                },
                {
                  input: `maskPhone('1234')`,
                  output: `'1234'`,
                  note: '≤4 digits — nothing masked',
                },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={red.m700}>Usage</SectionLabel>
            <Pre>{`import maskPhone from 'meticulous-ui/utils/maskPhone';

maskPhone(user.phone);  // → '(***) ***-4567'`}</Pre>
          </div>
          <div>
            <SectionLabel $color={red.m700}>Source</SectionLabel>
            <Pre>{`const maskPhone = (str) => {
  if (typeof str !== 'string') return str;
  const digits = str.replace(/\\D/g, '');
  const maskUntil = Math.max(0, digits.length - 4);
  let count = 0;
  return str.replace(/\\d/g, () => (count++ < maskUntil ? '*' : digits[count - 1]));
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// generateInitials — cyan
// ═════════════════════════════════════════════════════════════════════════════

const GenerateInitialsPage = () => (
  <StoryPage $bg={cyan.m50}>
    <MaxWidth>
      <Card $accent={cyan.m500}>
        <CardHeader $bg='#fff' $border={cyan.m100}>
          <div>
            <FnName $color={cyan.m900} $bg={cyan.m100}>
              generateInitials
            </FnName>
            <Signature>(name: string) → string</Signature>
          </div>
          <Description>
            Extracts the uppercased first letter of each word in a name. Multiple spaces between
            words are collapsed. Useful for avatar placeholders.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={cyan.m700}>Examples</SectionLabel>
            <ExamplesTable
              outputColor={cyan.m700}
              rows={[
                { input: `generateInitials('John Doe')`, output: `'JD'` },
                { input: `generateInitials('Alice Bob Carol')`, output: `'ABC'` },
                { input: `generateInitials('Maria')`, output: `'M'`, note: 'Single word' },
                {
                  input: `generateInitials('  Jane   Smith  ')`,
                  output: `'JS'`,
                  note: 'Extra spaces collapsed',
                },
                { input: `generateInitials('')`, output: `''`, note: 'Empty string' },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={cyan.m700}>Usage</SectionLabel>
            <Pre>{`import generateInitials from 'meticulous-ui/utils/generateInitials';

// Avatar fallback
<Avatar>{generateInitials(user.name)}</Avatar>
// → <Avatar>JD</Avatar>`}</Pre>
          </div>
          <div>
            <SectionLabel $color={cyan.m700}>Source</SectionLabel>
            <Pre>{`const generateInitials = (name) => {
  if (typeof name !== 'string') return name;
  return name
    .trim()
    .split(/\\s+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase())
    .join('');
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
  title: 'Utilities/String Utilities',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    layout: 'fullscreen',
  },
};

export const CapFirstLetter = () => <CapFirstLetterPage />;
CapFirstLetter.storyName = 'capFirstLetter';

export const Capitalize = () => <CapitalizePage />;
Capitalize.storyName = 'capitalize';

export const TitleCase = () => <TitleCasePage />;
TitleCase.storyName = 'titleCase';

export const CamelCase = () => <CamelCasePage />;
CamelCase.storyName = 'camelCase';

export const SnakeCase = () => <SnakeCasePage />;
SnakeCase.storyName = 'snakeCase';

export const KebabCase = () => <KebabCasePage />;
KebabCase.storyName = 'kebabCase';

export const Truncate = () => <TruncatePage />;
Truncate.storyName = 'truncate';

export const Slugify = () => <SlugifyPage />;
Slugify.storyName = 'slugify';

export const RemoveExtraSpaces = () => <RemoveExtraSpacesPage />;
RemoveExtraSpaces.storyName = 'removeExtraSpaces';

export const MaskEmail = () => <MaskEmailPage />;
MaskEmail.storyName = 'maskEmail';

export const MaskPhone = () => <MaskPhonePage />;
MaskPhone.storyName = 'maskPhone';

export const GenerateInitials = () => <GenerateInitialsPage />;
GenerateInitials.storyName = 'generateInitials';
