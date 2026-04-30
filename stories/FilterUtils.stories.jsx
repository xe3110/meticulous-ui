import styled from 'styled-components';

import blueGray from '../src/colors/blueGray';
import violet from '../src/colors/violet';
import teal from '../src/colors/teal';
import pink from '../src/colors/pink';
import blue from '../src/colors/blue';
import white from '../src/colors/white';

import fuzzySearch from '../src/utils/fuzzySearch';
import filterByKey from '../src/utils/filterByKey';
import multiSort from '../src/utils/multiSort';
import paginate from '../src/utils/paginate';

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

// ═════════════════════════════════════════════════════════════════════════════
// fuzzySearch — violet
// ═════════════════════════════════════════════════════════════════════════════

const FuzzySearchPage = () => (
  <StoryPage $bg={violet.m50}>
    <MaxWidth>
      <Card $accent={violet.m500}>
        <CardHeader $bg={white} $border={violet.m100}>
          <div>
            <FnName $color={violet.m900} $bg={violet.m100}>
              fuzzySearch
            </FnName>
            <Signature>(data: any[], query: string) → any[]</Signature>
          </div>
          <Description>
            Filters an array of strings or objects by fuzzy-matching <Code>query</Code>. Each
            character in <Code>query</Code> must appear in order somewhere in the target string.
            Case-insensitive. For objects, all string-valued fields are searched.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={violet.m700}>Examples</SectionLabel>
            <ExamplesTable
              outputColor={violet.m700}
              rows={[
                {
                  input: `fuzzySearch(['apple', 'apricot', 'banana'], 'ap')`,
                  output: `['apple', 'apricot']`,
                  note: "'ap' matches in order",
                },
                {
                  input: `fuzzySearch(['apple', 'apricot', 'banana'], 'an')`,
                  output: `['banana']`,
                  note: "'a'…'n' found in 'banana'",
                },
                {
                  input: `fuzzySearch([{name:'Alice'},{name:'Bob'}], 'ali')`,
                  output: `[{name:'Alice'}]`,
                  note: 'Searches string fields of objects',
                },
                {
                  input: `fuzzySearch(['apple', 'banana'], '')`,
                  output: `['apple', 'banana']`,
                  note: 'Empty query returns all items',
                },
                {
                  input: `fuzzySearch(['apple'], 'xyz')`,
                  output: `[]`,
                  note: 'No match → empty array',
                },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={violet.m700}>Usage</SectionLabel>
            <Pre>{`import fuzzySearch from 'meticulous-ui/utils/fuzzySearch';

const users = [
  { name: 'Alice Johnson', role: 'admin' },
  { name: 'Bob Smith',     role: 'user'  },
  { name: 'Alan Turing',   role: 'admin' },
];

fuzzySearch(users, 'al');
// → [{ name: 'Alice Johnson', ... }, { name: 'Alan Turing', ... }]`}</Pre>
          </div>
          <div>
            <SectionLabel $color={violet.m700}>Source</SectionLabel>
            <Pre>{`const fuzzySearch = (data, query) => {
  if (!query) return data;
  const q = query.toLowerCase();
  const matches = (str) => {
    let i = 0;
    const s = str.toLowerCase();
    for (const ch of q) {
      i = s.indexOf(ch, i);
      if (i === -1) return false;
      i++;
    }
    return true;
  };
  return data.filter((item) => {
    if (typeof item === 'string') return matches(item);
    return Object.values(item).some((v) => typeof v === 'string' && matches(v));
  });
};`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// filterByKey — teal
// ═════════════════════════════════════════════════════════════════════════════

const FilterByKeyPage = () => (
  <StoryPage $bg={teal.m50}>
    <MaxWidth>
      <Card $accent={teal.m500}>
        <CardHeader $bg={white} $border={teal.m100}>
          <div>
            <FnName $color={teal.m900} $bg={teal.m100}>
              filterByKey
            </FnName>
            <Signature>(data: object[], key: string, value: any) → object[]</Signature>
          </div>
          <Description>
            Returns items from <Code>data</Code> where <Code>item[key] === value</Code>. Uses strict
            equality so types must match.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={teal.m700}>Examples</SectionLabel>
            <ExamplesTable
              outputColor={teal.m700}
              rows={[
                {
                  input: `filterByKey([{r:'admin'},{r:'user'},{r:'admin'}], 'r', 'admin')`,
                  output: `[{r:'admin'},{r:'admin'}]`,
                  note: 'Strict equality match',
                },
                {
                  input: `filterByKey([{active:true},{active:false}], 'active', true)`,
                  output: `[{active:true}]`,
                  note: 'Works with booleans',
                },
                {
                  input: `filterByKey([{id:1},{id:2},{id:1}], 'id', 1)`,
                  output: `[{id:1},{id:1}]`,
                  note: 'Works with numbers',
                },
                {
                  input: `filterByKey([{r:'admin'}], 'r', 'guest')`,
                  output: `[]`,
                  note: 'No match → empty array',
                },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={teal.m700}>Usage</SectionLabel>
            <Pre>{`import filterByKey from 'meticulous-ui/utils/filterByKey';

const products = [
  { name: 'Chair', category: 'furniture' },
  { name: 'Lamp',  category: 'lighting'  },
  { name: 'Desk',  category: 'furniture' },
];

filterByKey(products, 'category', 'furniture');
// → [{ name: 'Chair', ... }, { name: 'Desk', ... }]`}</Pre>
          </div>
          <div>
            <SectionLabel $color={teal.m700}>Source</SectionLabel>
            <Pre>{`const filterByKey = (data, key, value) =>
  data.filter((item) => item[key] === value);`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// multiSort — pink
// ═════════════════════════════════════════════════════════════════════════════

const MultiSortPage = () => (
  <StoryPage $bg={pink.m50}>
    <MaxWidth>
      <Card $accent={pink.m500}>
        <CardHeader $bg={white} $border={pink.m100}>
          <div>
            <FnName $color={pink.m900} $bg={pink.m100}>
              multiSort
            </FnName>
            <Signature>(data: object[], config: {'{ key, order? }[]'}) → object[]</Signature>
          </div>
          <Description>
            Sorts an array by multiple keys in priority order. Each config entry specifies a{' '}
            <Code>key</Code> (string or function) and an optional <Code>order</Code> (
            <Code>'asc'</Code> or <Code>'desc'</Code>, defaulting to <Code>'asc'</Code>). The
            original array is not mutated.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={pink.m700}>Examples</SectionLabel>
            <ExamplesTable
              outputColor={pink.m700}
              rows={[
                {
                  input: `multiSort([{a:2,b:1},{a:1,b:2},{a:1,b:1}], [{key:'a'},{key:'b'}])`,
                  output: `[{a:1,b:1},{a:1,b:2},{a:2,b:1}]`,
                  note: 'Sort by a asc, then b asc',
                },
                {
                  input: `multiSort([{n:'B',age:25},{n:'A',age:25},{n:'A',age:30}], [{key:'age',order:'desc'},{key:'n'}])`,
                  output: `[{n:'A',age:30},{n:'A',age:25},{n:'B',age:25}]`,
                  note: 'age desc, then name asc',
                },
                {
                  input: `multiSort([{x:1},{x:2}], [{key:'x',order:'desc'}])`,
                  output: `[{x:2},{x:1}]`,
                  note: 'Single key descending',
                },
                {
                  input: `multiSort([], [{key:'name'}])`,
                  output: `[]`,
                  note: 'Empty array returned unchanged',
                },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={pink.m700}>Usage</SectionLabel>
            <Pre>{`import multiSort from 'meticulous-ui/utils/multiSort';

const employees = [
  { name: 'Carol', dept: 'Engineering', salary: 90000 },
  { name: 'Alice', dept: 'Engineering', salary: 95000 },
  { name: 'Bob',   dept: 'Design',      salary: 80000 },
];

multiSort(employees, [
  { key: 'dept' },
  { key: 'salary', order: 'desc' },
]);
// → [Bob(Design,80k), Alice(Eng,95k), Carol(Eng,90k)]`}</Pre>
          </div>
          <div>
            <SectionLabel $color={pink.m700}>Source</SectionLabel>
            <Pre>{`const multiSort = (data, config) =>
  [...data].sort((a, b) => {
    for (const { key, order = 'asc' } of config) {
      const av = typeof key === 'function' ? key(a) : a[key];
      const bv = typeof key === 'function' ? key(b) : b[key];
      if (av < bv) return order === 'asc' ? -1 : 1;
      if (av > bv) return order === 'asc' ? 1 : -1;
    }
    return 0;
  });`}</Pre>
          </div>
        </CardBody>
      </Card>
    </MaxWidth>
  </StoryPage>
);

// ═════════════════════════════════════════════════════════════════════════════
// paginate — blue
// ═════════════════════════════════════════════════════════════════════════════

const PaginatePage = () => (
  <StoryPage $bg={blue.m50}>
    <MaxWidth>
      <Card $accent={blue.m500}>
        <CardHeader $bg={white} $border={blue.m100}>
          <div>
            <FnName $color={blue.m900} $bg={blue.m100}>
              paginate
            </FnName>
            <Signature>
              (data: any[], page: number, limit: number) →{' '}
              {'{ data, total, page, limit, totalPages }'}
            </Signature>
          </div>
          <Description>
            Slices <Code>data</Code> for the given 1-indexed <Code>page</Code> and{' '}
            <Code>limit</Code>. Returns the page slice alongside pagination metadata:{' '}
            <Code>total</Code>, <Code>totalPages</Code>, <Code>page</Code>, and <Code>limit</Code>.
          </Description>
        </CardHeader>
        <CardBody>
          <div>
            <SectionLabel $color={blue.m700}>Examples</SectionLabel>
            <ExamplesTable
              outputColor={blue.m700}
              rows={[
                {
                  input: `paginate([1,2,3,4,5], 1, 2)`,
                  output: `{ data:[1,2], total:5, page:1, limit:2, totalPages:3 }`,
                  note: 'First page',
                },
                {
                  input: `paginate([1,2,3,4,5], 2, 2)`,
                  output: `{ data:[3,4], total:5, page:2, limit:2, totalPages:3 }`,
                  note: 'Second page',
                },
                {
                  input: `paginate([1,2,3,4,5], 3, 2)`,
                  output: `{ data:[5], total:5, page:3, limit:2, totalPages:3 }`,
                  note: 'Last page may be smaller',
                },
                {
                  input: `paginate([], 1, 10)`,
                  output: `{ data:[], total:0, page:1, limit:10, totalPages:0 }`,
                  note: 'Empty array',
                },
              ]}
            />
          </div>
          <div>
            <SectionLabel $color={blue.m700}>Usage</SectionLabel>
            <Pre>{`import paginate from 'meticulous-ui/utils/paginate';

const allItems = fetchAllProducts(); // 250 items

const { data, total, totalPages } = paginate(allItems, 3, 20);
// data      → items 41–60
// total     → 250
// totalPages → 13`}</Pre>
          </div>
          <div>
            <SectionLabel $color={blue.m700}>Source</SectionLabel>
            <Pre>{`const paginate = (data, page, limit) => {
  const total = data.length;
  const totalPages = Math.ceil(total / limit);
  const start = (page - 1) * limit;
  return {
    data: data.slice(start, start + limit),
    total,
    page,
    limit,
    totalPages,
  };
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
  title: 'Utilities/Filter Utils',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    layout: 'fullscreen',
  },
};

export const FuzzySearch = () => <FuzzySearchPage />;
FuzzySearch.storyName = 'fuzzySearch';

export const FilterByKey = () => <FilterByKeyPage />;
FilterByKey.storyName = 'filterByKey';

export const MultiSort = () => <MultiSortPage />;
MultiSort.storyName = 'multiSort';

export const Paginate = () => <PaginatePage />;
Paginate.storyName = 'paginate';
