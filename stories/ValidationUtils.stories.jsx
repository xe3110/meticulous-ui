import styled from 'styled-components';

import blueGray from '../src/colors/blueGray';
import green from '../src/colors/green';
import red from '../src/colors/red';
import blue from '../src/colors/blue';
import purple from '../src/colors/purple';
import orange from '../src/colors/orange';
import teal from '../src/colors/teal';
import indigo from '../src/colors/indigo';
import yellow from '../src/colors/yellow';
import pink from '../src/colors/pink';
import violet from '../src/colors/violet';
import cyan from '../src/colors/cyan';

import isEmail from '../src/utils/isEmail';
import isPhone from '../src/utils/isPhone';
import isURL from '../src/utils/isURL';
import isPasswordStrong from '../src/utils/isPasswordStrong';
import isPAN from '../src/utils/isPAN';
import isAadhaar from '../src/utils/isAadhaar';
import isGST from '../src/utils/isGST';
import isRequired from '../src/utils/isRequired';
import minLength from '../src/utils/minLength';
import maxLength from '../src/utils/maxLength';

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
  color: ${({ $isTrue }) => ($isTrue ? green.m600 : red.m500)};
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

const BoolOutput = ({ value }) => <Output $isTrue={value}>{String(value)}</Output>;

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
            <BoolOutput value={output} />
          </Td>
          <Td style={{ color: blueGray.m400, fontSize: '1.2rem' }}>{note ?? ''}</Td>
        </tr>
      ))}
    </tbody>
  </Table>
);

// ═════════════════════════════════════════════════════════════════════════════
// isEmail — blue
// ═════════════════════════════════════════════════════════════════════════════

const IsEmailPage = () => (
  <StoryPage $bg={blue.m50}>
    <MaxWidth>
      <Card $accent={blue.m500}>
        <CardHeader $bg='#fff' $border={blue.m100}>
          <div>
            <FnName $color={blue.m900} $bg={blue.m100}>
              isEmail
            </FnName>
            <Signature>(value: string) → boolean</Signature>
          </div>
          <Description>
            Returns <Code>true</Code> if the value looks like a valid email address — must contain a
            local part, <Code>@</Code>, and a domain with at least one dot. No whitespace allowed.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={blue.m700}>Examples</SectionLabel>
            <ExamplesTable
              rows={[
                { input: `isEmail('user@example.com')`, output: isEmail('user@example.com') },
                {
                  input: `isEmail('name+tag@domain.co.in')`,
                  output: isEmail('name+tag@domain.co.in'),
                },
                { input: `isEmail('bad@')`, output: isEmail('bad@'), note: 'Missing domain' },
                {
                  input: `isEmail('@nodomain.com')`,
                  output: isEmail('@nodomain.com'),
                  note: 'Missing local part',
                },
                {
                  input: `isEmail('no-at-sign')`,
                  output: isEmail('no-at-sign'),
                  note: 'No @ symbol',
                },
                { input: `isEmail(42)`, output: isEmail(42), note: 'Non-string → false' },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={blue.m700}>Usage</SectionLabel>
            <Pre>{`import isEmail from 'meticulous-ui/utils/isEmail';

if (!isEmail(formData.email)) {
  setError('email', 'Enter a valid email address');
}`}</Pre>
          </div>
          <div>
            <SectionLabel $color={blue.m700}>Source</SectionLabel>
            <Pre>{`const isEmail = (value) => {
  if (typeof value !== 'string') return false;
  return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value.trim());
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// isPhone — teal
// ═════════════════════════════════════════════════════════════════════════════

const IsPhonePage = () => (
  <StoryPage $bg={teal.m50}>
    <MaxWidth>
      <Card $accent={teal.m500}>
        <CardHeader $bg='#fff' $border={teal.m100}>
          <div>
            <FnName $color={teal.m900} $bg={teal.m100}>
              isPhone
            </FnName>
            <Signature>(value: string) → boolean</Signature>
          </div>
          <Description>
            Returns <Code>true</Code> if the value is a plausible phone number. Accepts optional
            leading <Code>+</Code>, digits, spaces, hyphens, dots, and parentheses. Length must be
            7–15 digits.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={teal.m700}>Examples</SectionLabel>
            <ExamplesTable
              rows={[
                { input: `isPhone('+91 98765 43210')`, output: isPhone('+91 98765 43210') },
                { input: `isPhone('(555) 123-4567')`, output: isPhone('(555) 123-4567') },
                { input: `isPhone('9876543210')`, output: isPhone('9876543210') },
                { input: `isPhone('123')`, output: isPhone('123'), note: 'Too short' },
                {
                  input: `isPhone('abc-def-ghij')`,
                  output: isPhone('abc-def-ghij'),
                  note: 'No digits',
                },
                { input: `isPhone(null)`, output: isPhone(null), note: 'Non-string → false' },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={teal.m700}>Usage</SectionLabel>
            <Pre>{`import isPhone from 'meticulous-ui/utils/isPhone';

if (!isPhone(formData.phone)) {
  setError('phone', 'Enter a valid phone number');
}`}</Pre>
          </div>
          <div>
            <SectionLabel $color={teal.m700}>Source</SectionLabel>
            <Pre>{`const isPhone = (value) => {
  if (typeof value !== 'string') return false;
  return /^[+]?[\\d\\s\\-().]{7,15}$/.test(value.trim());
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// isURL — violet
// ═════════════════════════════════════════════════════════════════════════════

const IsURLPage = () => (
  <StoryPage $bg={violet.m50}>
    <MaxWidth>
      <Card $accent={violet.m500}>
        <CardHeader $bg='#fff' $border={violet.m100}>
          <div>
            <FnName $color={violet.m900} $bg={violet.m100}>
              isURL
            </FnName>
            <Signature>(value: string) → boolean</Signature>
          </div>
          <Description>
            Returns <Code>true</Code> if the value is a valid <Code>http</Code> or{' '}
            <Code>https</Code> URL. Uses the browser-native <Code>URL</Code> constructor, so parsing
            is spec-compliant. Other protocols (ftp, data, etc.) return false.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={violet.m700}>Examples</SectionLabel>
            <ExamplesTable
              rows={[
                { input: `isURL('https://example.com')`, output: isURL('https://example.com') },
                {
                  input: `isURL('http://sub.domain.io/path?q=1')`,
                  output: isURL('http://sub.domain.io/path?q=1'),
                },
                {
                  input: `isURL('ftp://files.example.com')`,
                  output: isURL('ftp://files.example.com'),
                  note: 'Non-http protocol',
                },
                {
                  input: `isURL('example.com')`,
                  output: isURL('example.com'),
                  note: 'Missing protocol',
                },
                { input: `isURL('not a url')`, output: isURL('not a url') },
                { input: `isURL(undefined)`, output: isURL(undefined), note: 'Non-string → false' },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={violet.m700}>Usage</SectionLabel>
            <Pre>{`import isURL from 'meticulous-ui/utils/isURL';

if (!isURL(formData.website)) {
  setError('website', 'Enter a valid URL starting with http(s)://');
}`}</Pre>
          </div>
          <div>
            <SectionLabel $color={violet.m700}>Source</SectionLabel>
            <Pre>{`const isURL = (value) => {
  if (typeof value !== 'string') return false;
  try {
    const url = new URL(value.trim());
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// isPasswordStrong — purple
// ═════════════════════════════════════════════════════════════════════════════

const IsPasswordStrongPage = () => (
  <StoryPage $bg={purple.m50}>
    <MaxWidth>
      <Card $accent={purple.m500}>
        <CardHeader $bg='#fff' $border={purple.m100}>
          <div>
            <FnName $color={purple.m900} $bg={purple.m100}>
              isPasswordStrong
            </FnName>
            <Signature>(value: string) → boolean</Signature>
          </div>
          <Description>
            Returns <Code>true</Code> if the password meets all four criteria: at least 8
            characters, one uppercase letter, one lowercase letter, one digit, and one special
            character.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={purple.m700}>Examples</SectionLabel>
            <ExamplesTable
              rows={[
                { input: `isPasswordStrong('Secure@123')`, output: isPasswordStrong('Secure@123') },
                { input: `isPasswordStrong('P@ssw0rd!')`, output: isPasswordStrong('P@ssw0rd!') },
                {
                  input: `isPasswordStrong('password')`,
                  output: isPasswordStrong('password'),
                  note: 'No uppercase / special / digit',
                },
                {
                  input: `isPasswordStrong('SHORT1!')`,
                  output: isPasswordStrong('SHORT1!'),
                  note: 'Under 8 chars',
                },
                {
                  input: `isPasswordStrong('alllowercase1!')`,
                  output: isPasswordStrong('alllowercase1!'),
                  note: 'Missing uppercase',
                },
                {
                  input: `isPasswordStrong('NOLOWER1!')`,
                  output: isPasswordStrong('NOLOWER1!'),
                  note: 'Missing lowercase',
                },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={purple.m700}>Usage</SectionLabel>
            <Pre>{`import isPasswordStrong from 'meticulous-ui/utils/isPasswordStrong';

if (!isPasswordStrong(formData.password)) {
  setError('password', 'Password must be 8+ chars with upper, lower, digit & special char');
}`}</Pre>
          </div>
          <div>
            <SectionLabel $color={purple.m700}>Source</SectionLabel>
            <Pre>{`// min 8 chars, uppercase, lowercase, digit, special char
const isPasswordStrong = (value) => {
  if (typeof value !== 'string') return false;
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[^A-Za-z\\d]).{8,}$/.test(value);
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// isPAN — orange
// ═════════════════════════════════════════════════════════════════════════════

const IsPANPage = () => (
  <StoryPage $bg={orange.m50}>
    <MaxWidth>
      <Card $accent={orange.m600}>
        <CardHeader $bg='#fff' $border={orange.m100}>
          <div>
            <FnName $color={orange.m900} $bg={orange.m100}>
              isPAN
            </FnName>
            <Signature>(value: string) → boolean</Signature>
          </div>
          <Description>
            Validates an Indian Permanent Account Number (PAN). Format: 5 uppercase letters → 4
            digits → 1 uppercase letter. Case-insensitive input is accepted.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={orange.m700}>Examples</SectionLabel>
            <ExamplesTable
              rows={[
                { input: `isPAN('ABCDE1234F')`, output: isPAN('ABCDE1234F') },
                {
                  input: `isPAN('abcde1234f')`,
                  output: isPAN('abcde1234f'),
                  note: 'Lowercase accepted',
                },
                {
                  input: `isPAN('ABCDE123F')`,
                  output: isPAN('ABCDE123F'),
                  note: 'Only 3 digits (invalid)',
                },
                {
                  input: `isPAN('1BCDE1234F')`,
                  output: isPAN('1BCDE1234F'),
                  note: 'First char must be letter',
                },
                {
                  input: `isPAN('ABCDE1234')`,
                  output: isPAN('ABCDE1234'),
                  note: 'Missing trailing letter',
                },
                { input: `isPAN('')`, output: isPAN(''), note: 'Empty string' },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={orange.m700}>Usage</SectionLabel>
            <Pre>{`import isPAN from 'meticulous-ui/utils/isPAN';

if (!isPAN(formData.pan)) {
  setError('pan', 'Enter a valid PAN number');
}`}</Pre>
          </div>
          <div>
            <SectionLabel $color={orange.m700}>Source</SectionLabel>
            <Pre>{`// 5 letters + 4 digits + 1 letter (case-insensitive)
const isPAN = (value) => {
  if (typeof value !== 'string') return false;
  return /^[A-Z]{5}[0-9]{4}[A-Z]$/i.test(value.trim());
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// isAadhaar — cyan
// ═════════════════════════════════════════════════════════════════════════════

const IsAadhaarPage = () => (
  <StoryPage $bg={cyan.m50}>
    <MaxWidth>
      <Card $accent={cyan.m500}>
        <CardHeader $bg='#fff' $border={cyan.m100}>
          <div>
            <FnName $color={cyan.m900} $bg={cyan.m100}>
              isAadhaar
            </FnName>
            <Signature>(value: string) → boolean</Signature>
          </div>
          <Description>
            Validates an Indian Aadhaar number — exactly 12 digits with the first digit being
            non-zero. Spaces within the string are ignored before validation.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={cyan.m700}>Examples</SectionLabel>
            <ExamplesTable
              rows={[
                { input: `isAadhaar('234123412341')`, output: isAadhaar('234123412341') },
                {
                  input: `isAadhaar('2341 2341 2341')`,
                  output: isAadhaar('2341 2341 2341'),
                  note: 'Spaces ignored',
                },
                {
                  input: `isAadhaar('034123412341')`,
                  output: isAadhaar('034123412341'),
                  note: 'Starts with 0 (invalid)',
                },
                {
                  input: `isAadhaar('12345678901')`,
                  output: isAadhaar('12345678901'),
                  note: 'Only 11 digits',
                },
                {
                  input: `isAadhaar('1234567890123')`,
                  output: isAadhaar('1234567890123'),
                  note: '13 digits',
                },
                {
                  input: `isAadhaar('abcd12345678')`,
                  output: isAadhaar('abcd12345678'),
                  note: 'Contains letters',
                },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={cyan.m700}>Usage</SectionLabel>
            <Pre>{`import isAadhaar from 'meticulous-ui/utils/isAadhaar';

if (!isAadhaar(formData.aadhaar)) {
  setError('aadhaar', 'Enter a valid 12-digit Aadhaar number');
}`}</Pre>
          </div>
          <div>
            <SectionLabel $color={cyan.m700}>Source</SectionLabel>
            <Pre>{`// 12 digits, first digit non-zero; spaces stripped before check
const isAadhaar = (value) => {
  if (typeof value !== 'string') return false;
  const digits = value.replace(/\\s/g, '');
  return /^[1-9]\\d{11}$/.test(digits);
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// isGST — indigo
// ═════════════════════════════════════════════════════════════════════════════

const IsGSTPage = () => (
  <StoryPage $bg={indigo.m50}>
    <MaxWidth>
      <Card $accent={indigo.m500}>
        <CardHeader $bg='#fff' $border={indigo.m100}>
          <div>
            <FnName $color={indigo.m900} $bg={indigo.m100}>
              isGST
            </FnName>
            <Signature>(value: string) → boolean</Signature>
          </div>
          <Description>
            Validates an Indian GST Identification Number (GSTIN). Format: 2-digit state code +
            10-character PAN + 1 entity digit + <Code>Z</Code> + 1 check character (alphanumeric).
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={indigo.m700}>Examples</SectionLabel>
            <ExamplesTable
              rows={[
                { input: `isGST('27AAPFU0939F1ZV')`, output: isGST('27AAPFU0939F1ZV') },
                { input: `isGST('29ABCDE1234F1Z5')`, output: isGST('29ABCDE1234F1Z5') },
                {
                  input: `isGST('27AAPFU0939F1Z')`,
                  output: isGST('27AAPFU0939F1Z'),
                  note: 'Missing last char',
                },
                {
                  input: `isGST('AAPFU0939F1ZV')`,
                  output: isGST('AAPFU0939F1ZV'),
                  note: 'Missing state code',
                },
                {
                  input: `isGST('27AAPFU0939F1AV')`,
                  output: isGST('27AAPFU0939F1AV'),
                  note: 'Z missing at pos 13',
                },
                { input: `isGST('')`, output: isGST(''), note: 'Empty string' },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={indigo.m700}>Usage</SectionLabel>
            <Pre>{`import isGST from 'meticulous-ui/utils/isGST';

if (!isGST(formData.gstin)) {
  setError('gstin', 'Enter a valid GSTIN');
}`}</Pre>
          </div>
          <div>
            <SectionLabel $color={indigo.m700}>Source</SectionLabel>
            <Pre>{`// 2-digit state + PAN (10) + 1 digit + Z + 1 alphanumeric
const isGST = (value) => {
  if (typeof value !== 'string') return false;
  return /^\\d{2}[A-Z]{5}\\d{4}[A-Z]{1}\\d{1}Z[A-Z\\d]{1}$/i.test(value.trim());
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// isRequired — blueGray
// ═════════════════════════════════════════════════════════════════════════════

const IsRequiredPage = () => (
  <StoryPage $bg={blueGray.m50}>
    <MaxWidth>
      <Card $accent={blueGray.m500}>
        <CardHeader $bg='#fff' $border={blueGray.m100}>
          <div>
            <FnName $color={blueGray.m900} $bg={blueGray.m100}>
              isRequired
            </FnName>
            <Signature>(value: any) → boolean</Signature>
          </div>
          <Description>
            Returns <Code>false</Code> for <Code>null</Code>, <Code>undefined</Code>, blank strings,
            and empty arrays. All other values — including <Code>0</Code>, <Code>false</Code>, and
            non-empty objects — are considered present.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={blueGray.m700}>Examples</SectionLabel>
            <ExamplesTable
              rows={[
                { input: `isRequired('hello')`, output: isRequired('hello') },
                { input: `isRequired(0)`, output: isRequired(0), note: 'Zero is a valid value' },
                {
                  input: `isRequired(false)`,
                  output: isRequired(false),
                  note: 'false is a valid value',
                },
                { input: `isRequired([1, 2])`, output: isRequired([1, 2]) },
                { input: `isRequired('')`, output: isRequired(''), note: 'Blank string → false' },
                {
                  input: `isRequired('   ')`,
                  output: isRequired('   '),
                  note: 'Whitespace-only → false',
                },
                { input: `isRequired([])`, output: isRequired([]), note: 'Empty array → false' },
                { input: `isRequired(null)`, output: isRequired(null) },
                { input: `isRequired(undefined)`, output: isRequired(undefined) },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={blueGray.m700}>Usage</SectionLabel>
            <Pre>{`import isRequired from 'meticulous-ui/utils/isRequired';

if (!isRequired(formData.name)) {
  setError('name', 'This field is required');
}`}</Pre>
          </div>
          <div>
            <SectionLabel $color={blueGray.m700}>Source</SectionLabel>
            <Pre>{`const isRequired = (value) => {
  if (value === null || value === undefined) return false;
  if (typeof value === 'string') return value.trim().length > 0;
  if (Array.isArray(value)) return value.length > 0;
  return true;
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// minLength — green
// ═════════════════════════════════════════════════════════════════════════════

const MinLengthPage = () => (
  <StoryPage $bg={green.m50}>
    <MaxWidth>
      <Card $accent={green.m500}>
        <CardHeader $bg='#fff' $border={green.m100}>
          <div>
            <FnName $color={green.m900} $bg={green.m100}>
              minLength
            </FnName>
            <Signature>(value: string, n: number) → boolean</Signature>
          </div>
          <Description>
            Returns <Code>true</Code> if <Code>value.length {'≥'} n</Code>. Non-string values always
            return <Code>false</Code>. Does not trim — whitespace counts toward length.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={green.m700}>Examples</SectionLabel>
            <ExamplesTable
              rows={[
                { input: `minLength('hello', 3)`, output: minLength('hello', 3) },
                { input: `minLength('hi', 5)`, output: minLength('hi', 5), note: 'Too short' },
                {
                  input: `minLength('exact', 5)`,
                  output: minLength('exact', 5),
                  note: 'Equal to n → true',
                },
                { input: `minLength('', 1)`, output: minLength('', 1), note: 'Empty string' },
                { input: `minLength('   ', 2)`, output: minLength('   ', 2), note: 'Spaces count' },
                {
                  input: `minLength(123, 2)`,
                  output: minLength(123, 2),
                  note: 'Non-string → false',
                },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={green.m700}>Usage</SectionLabel>
            <Pre>{`import minLength from 'meticulous-ui/utils/minLength';

if (!minLength(formData.bio, 20)) {
  setError('bio', 'Bio must be at least 20 characters');
}`}</Pre>
          </div>
          <div>
            <SectionLabel $color={green.m700}>Source</SectionLabel>
            <Pre>{`const minLength = (value, n) => {
  if (typeof value !== 'string') return false;
  return value.length >= n;
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// maxLength — pink
// ═════════════════════════════════════════════════════════════════════════════

const MaxLengthPage = () => (
  <StoryPage $bg={pink.m50}>
    <MaxWidth>
      <Card $accent={pink.m500}>
        <CardHeader $bg='#fff' $border={pink.m100}>
          <div>
            <FnName $color={pink.m900} $bg={pink.m100}>
              maxLength
            </FnName>
            <Signature>(value: string, n: number) → boolean</Signature>
          </div>
          <Description>
            Returns <Code>true</Code> if <Code>value.length {'≤'} n</Code>. Non-string values always
            return <Code>false</Code>. Useful for enforcing character caps on text inputs.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={pink.m700}>Examples</SectionLabel>
            <ExamplesTable
              rows={[
                { input: `maxLength('hello', 10)`, output: maxLength('hello', 10) },
                {
                  input: `maxLength('toolongstring', 5)`,
                  output: maxLength('toolongstring', 5),
                  note: 'Exceeds limit',
                },
                {
                  input: `maxLength('exact', 5)`,
                  output: maxLength('exact', 5),
                  note: 'Equal to n → true',
                },
                { input: `maxLength('', 0)`, output: maxLength('', 0), note: 'Empty at limit 0' },
                { input: `maxLength('a', 0)`, output: maxLength('a', 0), note: 'Exceeds limit 0' },
                { input: `maxLength(42, 5)`, output: maxLength(42, 5), note: 'Non-string → false' },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={pink.m700}>Usage</SectionLabel>
            <Pre>{`import maxLength from 'meticulous-ui/utils/maxLength';

if (!maxLength(formData.username, 20)) {
  setError('username', 'Username cannot exceed 20 characters');
}`}</Pre>
          </div>
          <div>
            <SectionLabel $color={pink.m700}>Source</SectionLabel>
            <Pre>{`const maxLength = (value, n) => {
  if (typeof value !== 'string') return false;
  return value.length <= n;
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
  title: 'Utils/Validation Utilities',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    layout: 'fullscreen',
  },
};

export const IsEmail = () => <IsEmailPage />;
IsEmail.storyName = 'isEmail';

export const IsPhone = () => <IsPhonePage />;
IsPhone.storyName = 'isPhone';

export const IsURL = () => <IsURLPage />;
IsURL.storyName = 'isURL';

export const IsPasswordStrong = () => <IsPasswordStrongPage />;
IsPasswordStrong.storyName = 'isPasswordStrong';

export const IsPAN = () => <IsPANPage />;
IsPAN.storyName = 'isPAN';

export const IsAadhaar = () => <IsAadhaarPage />;
IsAadhaar.storyName = 'isAadhaar';

export const IsGST = () => <IsGSTPage />;
IsGST.storyName = 'isGST';

export const IsRequired = () => <IsRequiredPage />;
IsRequired.storyName = 'isRequired';

export const MinLength = () => <MinLengthPage />;
MinLength.storyName = 'minLength';

export const MaxLength = () => <MaxLengthPage />;
MaxLength.storyName = 'maxLength';
