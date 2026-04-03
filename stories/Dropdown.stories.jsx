import { useState } from 'react';
import Dropdown from '../src/components/Dropdown/Dropdown';
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
  title: 'Components/Dropdown',
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
      control: 'select',
      options: [false, true],
    },
    isDisabled: {
      control: 'select',
      options: [false, true],
    },
    placeholder: {
      control: 'text',
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

export const WithDisabledOptions = {
  name: 'With Disabled Options',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
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

export const LoadingState = {
  name: 'Loading State',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
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
  width: '20rem',
  menuHeight: '20rem',
  loaderColor: 'green',
  isLoading: false,
  isDisabled: false,
  placeholder: 'Select a value',
};
