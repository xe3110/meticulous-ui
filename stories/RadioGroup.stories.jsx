import { useEffect, useState } from 'react';
import RadioGroup from '../src/components/Input/RadioGroup';

const OPTIONS = [
  { label: 'New York', value: 'New York' },
  { label: 'Shanghai', value: 'Shanghai', disabled: true },
  { label: 'London', value: 'London' },
  { label: 'Delhi', value: 'Delhi' },
];

export default {
  title: 'Molecules/RadioGroup',
  component: RadioGroup,
  parameters: {
    docs: {
      description: {
        component: 'RadioGroup',
      },
      source: {
        language: 'jsx',
        code: `
          import RadioGroup from 'meticulous-ui/components/Input/RadioGroup';

          const OPTIONS = [
            { label: 'New York', value: 'New York' },
            { label: 'Shanghai', value: 'Shanghai', disabled: true },
            { label: 'London', value: 'London' },
            { label: 'Delhi', value: 'Delhi' },
          ];

          export const Default = (args) => {
            const [val, setVal] = useState('');

            const onChange = (val) => {
              setVal(val);
            };

            return <RadioGroup options={OPTIONS} value={val} onChange={onChange} />;
          };
        `,
      },
    },
  },
  argTypes: {
    value: {
      description: 'Currently selected value',
      control: 'text',
    },
    isHorizonatal: {
      description: 'Renders options in a row when true',
      control: 'boolean',
    },
    options: { description: "Array of option objects: `{ value, label, disabled? }`" },
    onChange: { description: 'Called with the selected value when a radio is clicked' },
    label: { description: 'Visible legend text for the radio group' },
    ariaLabel: { description: 'Accessible label when no visible label is provided' },
    name: { description: 'HTML name attribute shared by all radio inputs in the group' },
    color: {
      description: 'Color theme key for the radio accent',
      control: 'select',
      options: [
        'blue',
        'green',
        'red',
        'yellow',
        'orange',
        'black',
        'grey',
        'violet',
        'teal',
        'purple',
        'pink',
      ],
    },
  },
};

// Default story
export const Default = (args) => {
  const [val, setVal] = useState('');

  useEffect(() => {
    setVal(args?.value);
  }, [args?.value]);

  const onChange = (val) => {
    setVal(val);
  };

  return (
    <div style={{ maxWidth: '40rem', width: '100%' }}>
      <RadioGroup {...args} value={val} options={OPTIONS} onChange={onChange} />
    </div>
  );
};

export const Horizontal = {
  name: 'Horizontal',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      source: {
        language: 'jsx',
        code: `
import { useState } from 'react';
import RadioGroup from 'meticulous-ui/components/Input/RadioGroup';

const OPTIONS = [
  { label: 'New York', value: 'New York' },
  { label: 'Shanghai', value: 'Shanghai', disabled: true },
  { label: 'London', value: 'London' },
  { label: 'Delhi', value: 'Delhi' },
];

const Horizontal = () => {
  const [val, setVal] = useState('');
  return (
    <div style={{ maxWidth: '80rem', width: '100%' }}>
      <RadioGroup value={val} options={OPTIONS} onChange={setVal} isHorizonatal />
    </div>
  );
};
        `,
      },
    },
  },
  render: () => {
    const [val, setVal] = useState('');

    const onChange = (val) => {
      setVal(val);
    };

    return (
      <div style={{ maxWidth: '80rem', width: '100%' }}>
        <RadioGroup value={val} options={OPTIONS} onChange={onChange} isHorizonatal />
      </div>
    );
  },
};

const HorizontalRadioGrp = ({ clr }) => {
  const [val, setVal] = useState('');

  const onChange = (val) => {
    setVal(val);
  };

  return (
    <div style={{ maxWidth: '40rem', width: '100%' }}>
      <RadioGroup
        value={val}
        options={OPTIONS.filter((opt) => !opt.disabled)}
        color={clr}
        onChange={onChange}
      />
    </div>
  );
};

export const DifferentColors = {
  name: 'Different Colors',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      source: {
        language: 'jsx',
        code: `
import { useState } from 'react';
import RadioGroup from 'meticulous-ui/components/Input/RadioGroup';

const OPTIONS = [
  { label: 'New York', value: 'New York' },
  { label: 'London', value: 'London' },
  { label: 'Delhi', value: 'Delhi' },
];

const COLORS = ['blue', 'green', 'red', 'yellow', 'orange', 'black', 'grey', 'violet', 'teal', 'purple', 'pink'];

const ColorGroup = ({ color }) => {
  const [val, setVal] = useState('');
  return (
    <div style={{ maxWidth: '40rem', width: '100%' }}>
      <RadioGroup value={val} options={OPTIONS} color={color} onChange={setVal} />
    </div>
  );
};

const DifferentColors = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
    {COLORS.map((color) => (
      <div key={color}>
        <h2>{color}</h2>
        <ColorGroup color={color} />
      </div>
    ))}
  </div>
);
        `,
      },
    },
  },
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
        {[
          'blue',
          'green',
          'red',
          'yellow',
          'orange',
          'black',
          'grey',
          'violet',
          'teal',
          'purple',
          'pink',
        ].map((clr) => (
          <div key={clr}>
            <h2>{clr}</h2>
            <HorizontalRadioGrp key={clr} {...{ clr }} />
          </div>
        ))}
      </div>
    );
  },
};

Default.storyName = 'Default';

Default.args = {
  value: '',
  isHorizonatal: false,
  color: 'blue',
};
