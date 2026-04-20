import { useEffect, useState } from 'react';
import Checkbox from '../src/components/Input/Checkbox';

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component: 'Checkbox input.',
      },
      source: {
        language: 'jsx',
        code: `
          import Checkbox from 'meticulous-ui/components/Input/Checkbox';

          export const Default = (args) => {
            const [val, setVal] = useState(false);

            const onChange = (val) => {
              setVal(val);
            };

            return <Checkbox value={val} color='blue' textColor={grey.m700} label='Click Please' onChange={onChange} />;
          };
        `,
      },
    },
  },
  argTypes: {
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
    label: {
      control: 'text',
    },
    value: {
      control: { type: 'boolean' },
    },
    textColor: {
      control: 'text',
    },
  },
};

// Default story
export const Default = (args) => {
  const [val, setVal] = useState(false);

  const onChange = (val) => {
    setVal(val);
    console.log(val);
  };

  return <Checkbox label='Click Please' {...args} value={val} onChange={onChange} />;
};

const CbWrapper = ({ clr, params = {} }) => {
  const [val, setVal] = useState(false);

  const onChange = (val) => {
    setVal(val);
  };

  return (
    <Checkbox color={clr} value={val} label={`${clr} color`} {...params} onChange={onChange} />
  );
};

export const MultipleColors = {
  name: 'Multiple Colors',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      source: {
        language: 'jsx',
        code: `
import { useState } from 'react';
import Checkbox from 'meticulous-ui/components/Input/Checkbox';

const COLORS = ['blue', 'green', 'red', 'yellow', 'orange', 'black', 'grey', 'violet', 'teal', 'purple', 'pink'];

const ColorCheckbox = ({ color }) => {
  const [val, setVal] = useState(false);
  return (
    <Checkbox color={color} value={val} label={\`\${color} color\`} onChange={setVal} />
  );
};

const MultipleColors = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
    {COLORS.map((color) => (
      <ColorCheckbox key={color} color={color} />
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
          <CbWrapper key={clr} {...{ clr }} />
        ))}
      </div>
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
import Checkbox from 'meticulous-ui/components/Input/Checkbox';

const Disabled = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
    <Checkbox value={false} disabled label='Disabled Checkbox without value' onChange={() => {}} />
    <Checkbox value={true} disabled label='Disabled Checkbox with value' onChange={() => {}} />
  </div>
);
        `,
      },
    },
  },
  render: () => {
    const [val, setVal] = useState(false);

    const onChange = (val) => {
      setVal(val);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
        <CbWrapper
          key='no'
          params={{
            value: false,
            disabled: true,
            label: 'Disabled Checkbox without value',
            onChange: onChange,
          }}
        />
        <CbWrapper
          key='yes'
          params={{
            value: true,
            disabled: true,
            label: 'Disabled Checkbox with value',
            onChange: onChange,
          }}
        />
      </div>
    );
  },
};

Default.storyName = 'Checkbox';

Default.args = {
  value: false,
  label: 'Click me',
  color: 'blue',
  textColor: '#616161',
};
