import { useState, useCallback } from 'react';
import Selectbox from '../src/components/Selectbox/Selectbox';
import { H6 } from '../src/components/Typography/Headings';

const OPTIONS = [
  { label: 'New York', value: 'New York' },
  { label: 'Tokyo', value: 'Tokyo' },
  { label: 'Los Angeles', value: 'Los Angeles' },
  { label: 'San Francisco', value: 'San Francisco' },
  { label: 'Seoul', value: 'Seoul' },
  { label: 'Paris', value: 'Paris' },
  { label: 'Chicago', value: 'Chicago' },
  { label: 'Pyongyang', value: 'Pyongyang', disabled: true },
  { label: 'Shanghai', value: 'Shanghai' },
  { label: 'London', value: 'London' },
  { label: 'Delhi', value: 'Delhi' },
];

export default {
  title: 'Molecules/Selectbox',
  component: Selectbox,
  parameters: {
    docs: {
      description: {
        component:
          'A multi-select dropdown where each option has a checkbox. The trigger shows how many items are selected.',
      },
      source: {
        language: 'jsx',
        code: `
import { useState } from 'react';
import Selectbox from 'meticulous-ui/components/Selectbox';

const OPTIONS = [
  { label: 'New York', value: 'New York' },
  { label: 'Tokyo', value: 'Tokyo' },
  { label: 'Los Angeles', value: 'Los Angeles' },
];

const SelectboxWrapper = () => {
  const [value, setValue] = useState([]);

  return (
    <Selectbox onChange={setValue} value={value} options={OPTIONS} placeholder='Select cities' />
  );
};
        `,
      },
    },
  },
  argTypes: {
    theme: {
      control: 'select',
      options: [
        'amber',
        'blue',
        'brown',
        'cyan',
        'deepPurple',
        'grey',
        'indigo',
        'lightGreen',
        'orange',
        'purple',
        'teal',
        'white',
        'black',
        'blueGray',
        'cider',
        'deepOrange',
        'green',
        'lightBlue',
        'lime',
        'pink',
        'red',
        'violet',
        'yellow',
      ],
    },
    isDisabled: { control: 'boolean' },
    placeholder: { control: 'text' },
    searchPh: { control: 'text' },
    searchable: { control: 'boolean' },
  },
};

export const Default = (args) => {
  const [value, setValue] = useState([]);
  return <Selectbox {...args} onChange={setValue} value={value} options={OPTIONS} />;
};

Default.args = {
  theme: 'blue',
  width: '30rem',
  menuHeight: '30rem',
  isDisabled: false,
  placeholder: 'Select cities',
  searchable: false,
  searchPh: 'Search...',
};

export const WithSearch = {
  name: 'With Search',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      source: {
        language: 'jsx',
        code: `
import { useState } from 'react';
import Selectbox from 'meticulous-ui/components/Selectbox';

const WithSearch = () => {
  const [value, setValue] = useState([]);
  return (
    <Selectbox
      onChange={setValue}
      value={value}
      searchable
      options={OPTIONS}
      placeholder='Select cities'
    />
  );
};
        `,
      },
    },
  },
  render: () => {
    const [value, setValue] = useState([]);
    return (
      <Selectbox
        onChange={setValue}
        value={value}
        searchable
        options={OPTIONS}
        placeholder='Select cities'
      />
    );
  },
};

export const Disabled = {
  name: 'Disabled',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      source: {
        language: 'jsx',
        code: `
import { useState } from 'react';
import Selectbox from 'meticulous-ui/components/Selectbox';

const Disabled = () => {
  const [value, setValue] = useState([]);
  return (
    <Selectbox
      onChange={setValue}
      value={value}
      options={OPTIONS}
      placeholder='Select cities'
      isDisabled
    />
  );
};
        `,
      },
    },
  },
  render: () => {
    const [value, setValue] = useState([]);
    return (
      <Selectbox
        onChange={setValue}
        value={value}
        options={OPTIONS}
        placeholder='Select cities'
        isDisabled
      />
    );
  },
};

export const WithDisabledOptions = {
  name: 'With Disabled Options',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      source: {
        language: 'jsx',
        code: `
import { useState } from 'react';
import Selectbox from 'meticulous-ui/components/Selectbox';

const WithDisabledOptions = () => {
  const [value, setValue] = useState([]);
  return (
    <Selectbox
      onChange={setValue}
      value={value}
      options={OPTIONS.map((v, i) => ({ ...v, disabled: i > 3 }))}
      placeholder='Select cities'
    />
  );
};
        `,
      },
    },
  },
  render: () => {
    const [value, setValue] = useState([]);
    return (
      <Selectbox
        onChange={setValue}
        value={value}
        options={OPTIONS.map((v, i) => ({ ...v, disabled: i > 3 }))}
        placeholder='Select cities'
      />
    );
  },
};

const ALL_CITIES = [
  'New York',
  'Tokyo',
  'Los Angeles',
  'San Francisco',
  'Seoul',
  'Paris',
  'Chicago',
  'Shanghai',
  'London',
  'Delhi',
  'Berlin',
  'Sydney',
  'Toronto',
  'Dubai',
  'Singapore',
  'Mumbai',
  'São Paulo',
  'Mexico City',
  'Cairo',
  'Bangkok',
  'Istanbul',
  'Jakarta',
  'Lagos',
  'Karachi',
  'Osaka',
].map((city) => ({ label: city, value: city }));

const PAGE_SIZE = 7;

const AsyncLoadMoreWrapper = () => {
  const [value, setValue] = useState([]);
  const [options, setOptions] = useState(ALL_CITIES.slice(0, PAGE_SIZE));
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [page, setPage] = useState(1);

  const hasMore = options.length < ALL_CITIES.length;

  const handleLoadMore = useCallback(async () => {
    setIsLoadingMore(true);
    await new Promise((res) => setTimeout(res, 1200));
    const nextPage = page + 1;
    setOptions(ALL_CITIES.slice(0, nextPage * PAGE_SIZE));
    setPage(nextPage);
    setIsLoadingMore(false);
  }, [page]);

  return (
    <Selectbox
      options={options}
      onChange={setValue}
      value={value}
      placeholder='Select cities'
      onLoadMore={handleLoadMore}
      hasMore={hasMore}
      isLoadingMore={isLoadingMore}
    />
  );
};

export const Loading = {
  name: 'Loading',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
  render: () => {
    const [value, setValue] = useState([]);
    return (
      <Selectbox
        options={OPTIONS}
        onChange={setValue}
        value={value}
        placeholder='Select cities'
        isLoading
      />
    );
  },
};

export const WithAsyncLoadMore = {
  name: 'Async Load More',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
  render: () => <AsyncLoadMoreWrapper />,
};

const SelectboxThemeWrapper = ({ theme }) => {
  const [value, setValue] = useState([]);
  return (
    <Selectbox
      onChange={setValue}
      value={value}
      options={OPTIONS}
      placeholder='Select cities'
      theme={theme}
    />
  );
};

export const Themes = {
  name: 'Different Themes',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {[
        'amber',
        'blue',
        'brown',
        'cyan',
        'deepPurple',
        'grey',
        'indigo',
        'lightGreen',
        'orange',
        'purple',
        'teal',
        'black',
        'blueGray',
        'cider',
        'deepOrange',
        'green',
        'lightBlue',
        'lime',
        'pink',
        'red',
        'violet',
        'yellow',
      ].map((clr) => (
        <div key={clr} style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <H6>{clr}</H6>
          <SelectboxThemeWrapper theme={clr} />
        </div>
      ))}
    </div>
  ),
};
