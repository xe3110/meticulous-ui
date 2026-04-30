import { useState } from 'react';
import Dropdown from '../src/components/Dropdown/Dropdown';
import { H6 } from '../src/components/Typography/Headings';
import blue from '../src/colors/blue';

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
  title: 'Molecules/Dropdown',
  component: Dropdown,
  parameters: {
    docs: {
      description: {
        component: 'A Dropdown component to select one option out of many.',
      },
      source: {
        language: 'jsx',
        code: `
          import Dropdown from 'meticulous-ui/components/Dropdown';

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

          const DropdownWrapper = () => {
            const [value, setValue] = useState(null);

            const onChange = (v) => {
              setValue(v);
            };

            return (
              <Dropdown onChange={onChange} value={value} options={OPTIONS} placeholder='Select a value' />
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
    loaderColor: {
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
    isLoading: {
      control: 'boolean',
    },
    isDisabled: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
    searchPh: {
      control: 'text',
    },
    searchable: {
      control: 'boolean',
    },
    hasMore: {
      control: 'boolean',
    },
    isLoadingMore: {
      control: 'boolean',
    },
  },
};

const DropdownThemeWrapper = ({ theme }) => {
  const [value, setValue] = useState(null);

  const onChange = (v) => {
    setValue(v);
  };

  return (
    <Dropdown
      onChange={onChange}
      value={value}
      options={OPTIONS}
      placeholder='Select a value'
      theme={theme}
    />
  );
};

// Default story
export const Default = (args) => {
  const [value, setValue] = useState(null);

  const onChange = (v) => {
    setValue(v);
  };

  return <Dropdown {...args} onChange={onChange} value={value} options={OPTIONS} />;
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
import Dropdown from 'meticulous-ui/components/Dropdown';

const WithSearch = () => {
  const [value, setValue] = useState(null);
  return (
    <Dropdown
      onChange={setValue}
      value={value}
      searchable
      options={OPTIONS}
      placeholder='Select a value'
    />
  );
};
        `,
      },
    },
  },
  render: () => {
    const [value, setValue] = useState(null);

    const onChange = (v) => {
      setValue(v);
    };

    return (
      <Dropdown
        onChange={onChange}
        value={value}
        searchable
        options={OPTIONS}
        placeholder='Select a value'
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
import Dropdown from 'meticulous-ui/components/Dropdown';

const Disabled = () => {
  const [value, setValue] = useState(null);
  return (
    <Dropdown
      onChange={setValue}
      value={value}
      options={OPTIONS}
      placeholder='Select a value'
      isDisabled
    />
  );
};
        `,
      },
    },
  },
  render: () => {
    const [value, setValue] = useState(null);

    return (
      <Dropdown
        onChange={setValue}
        value={value}
        options={OPTIONS}
        placeholder='Select a value'
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
import Dropdown from 'meticulous-ui/components/Dropdown';

const WithDisabledOptions = () => {
  const [value, setValue] = useState(null);
  return (
    <Dropdown
      onChange={setValue}
      value={value}
      options={OPTIONS.map((v, i) => ({ ...v, disabled: i > 3 }))}
      placeholder='Select a value'
    />
  );
};
        `,
      },
    },
  },
  render: () => {
    const [value, setValue] = useState(null);

    const onChange = (v) => {
      setValue(v);
    };

    return (
      <Dropdown
        onChange={onChange}
        value={value}
        options={OPTIONS.map((v, i) => ({ ...v, disabled: i > 3 }))}
        placeholder='Select a value'
      />
    );
  },
};

export const WithAsyncLoadMore = {
  name: 'With Async Load More',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      source: {
        language: 'jsx',
        code: `
import { useState } from 'react';
import Dropdown from 'meticulous-ui/components/Dropdown';

const WithAsyncLoadMore = () => {
  const [options, setOptions] = useState(OPTIONS.slice(0, 10));
  const [value, setValue] = useState(null);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const handleLoadMore = () => {
    if (isLoadingMore || !hasMore) return;
    setIsLoadingMore(true);
    setTimeout(() => {
      const nextBatch = OPTIONS.slice(options.length, options.length + 10);
      if (nextBatch.length > 0) {
        setOptions((prev) => [...prev, ...nextBatch]);
      } else {
        setHasMore(false);
      }
      setIsLoadingMore(false);
    }, 1500);
  };

  return (
    <Dropdown
      placeholder='Search and scroll down...'
      searchable
      value={value}
      onChange={setValue}
      options={options}
      onLoadMore={handleLoadMore}
      hasMore={hasMore}
      isLoadingMore={isLoadingMore}
    />
  );
};
        `,
      },
    },
  },
  render: () => {
    // 1. Manage options and loading state locally for the demo
    const [options, setOptions] = useState(OPTIONS.slice(0, 10)); // Start with first 10
    const [value, setValue] = useState(null);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const handleLoadMore = () => {
      // Prevent multiple calls if already loading or no more data
      if (isLoadingMore || !hasMore) return;

      setIsLoadingMore(true);

      // Simulate an API call delay
      setTimeout(() => {
        const currentLength = options.length;
        const nextBatch = OPTIONS.slice(currentLength, currentLength + 10);

        if (nextBatch.length > 0) {
          setOptions((prev) => [...prev, ...nextBatch]);
        } else {
          setHasMore(false);
        }

        setIsLoadingMore(false);
      }, 1500); // 1.5s delay to see the spinner
    };

    return (
      <Dropdown
        placeholder='Search and scroll down...'
        searchable
        value={value}
        onChange={(v) => setValue(v)}
        options={options}
        onLoadMore={handleLoadMore}
        hasMore={hasMore}
        isLoadingMore={isLoadingMore}
        loaderColor={blue.m500} // Match your theme
      />
    );
  },
};

export const LoadingState = {
  name: 'Loading State',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      source: {
        language: 'jsx',
        code: `
import { useState } from 'react';
import Dropdown from 'meticulous-ui/components/Dropdown';

const LoadingState = () => {
  const [value, setValue] = useState(null);
  return (
    <Dropdown
      onChange={setValue}
      value={value}
      options={OPTIONS}
      placeholder='Select a value'
      isLoading
    />
  );
};
        `,
      },
    },
  },
  render: () => {
    const [value, setValue] = useState(null);

    const onChange = (v) => {
      setValue(v);
    };

    return (
      <Dropdown
        onChange={onChange}
        value={value}
        options={OPTIONS}
        placeholder='Select a value'
        isLoading
      />
    );
  },
};

export const Themes = {
  name: 'Different Themes',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      source: {
        language: 'jsx',
        code: `
import { useState } from 'react';
import Dropdown from 'meticulous-ui/components/Dropdown';
import { H6 } from 'meticulous-ui/components/Typography/Headings';

const THEMES = ['amber', 'blue', 'brown', 'cyan', 'deepPurple', 'grey', 'indigo',
  'lightGreen', 'orange', 'purple', 'teal', 'black', 'blueGray', 'cider',
  'deepOrange', 'green', 'lightBlue', 'lime', 'pink', 'red', 'violet', 'yellow'];

const ThemeDropdown = ({ theme }) => {
  const [value, setValue] = useState(null);
  return (
    <Dropdown onChange={setValue} value={value} options={OPTIONS} placeholder='Select a value' theme={theme} />
  );
};

const Themes = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    {THEMES.map((theme) => (
      <div key={theme} style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <H6>{theme}</H6>
        <ThemeDropdown theme={theme} />
      </div>
    ))}
  </div>
);
        `,
      },
    },
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
          <DropdownThemeWrapper theme={clr} />
        </div>
      ))}
    </div>
  ),
};

Default.args = {
  theme: 'blue',
  width: '32rem',
  menuHeight: '32rem',
  loaderColor: 'green',
  isLoading: false,
  isDisabled: false,
  placeholder: 'Select a value',
  searchable: false,
  hasMore: false,
  isLoadingMore: false,
  searchPh: 'Search...',
};
