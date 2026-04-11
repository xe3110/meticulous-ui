import { useEffect, useState } from 'react';
import RadioGroup from '../src/components/Input/RadioGroup';

const OPTIONS = [
  { label: 'New York', value: 'New York' },
  { label: 'Shanghai', value: 'Shanghai', disabled: true },
  { label: 'London', value: 'London' },
  { label: 'Delhi', value: 'Delhi' },
];

export default {
  title: 'Components/RadioGroup',
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
      control: 'text',
    },
    isHorizonatal: {
      control: 'boolean',
    },
    color: {
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
    <div style={{ width: '40rem' }}>
      <RadioGroup {...args} value={val} options={OPTIONS} onChange={onChange} />
    </div>
  );
};

export const Horizontal = {
  name: 'Horizontal',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
  render: () => {
    const [val, setVal] = useState('');

    const onChange = (val) => {
      setVal(val);
    };

    return (
      <div style={{ width: '40rem' }}>
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
    <div style={{ width: '40rem' }}>
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
