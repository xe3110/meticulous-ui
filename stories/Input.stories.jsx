import { useState } from 'react';
import Input from '../src/components/Input/Input';
import Search from '../src/components/Icons/Search';
import StarOutline from '../src/components/Icons/StarOutline';

export default {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component: 'A simple input component that shows a box with content given by the user.',
      },
      source: {
        language: 'jsx',
        code: `
          import Input from 'meticulous-ui/components/Input/Input';

          function ExampleInput() {
            const [val, setVal] = useState('');
            const onChange = (v) => setVal(v.target.value);

            return (
              <Input label='Value' value={val} onChange={onChange} color='blue' size='20' />
            )
          }
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
        'green',
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
    size: {
      control: { type: 'number' },
      description: 'Mandatory numeric prop representing current page',
    },
    helperText: {
      control: { type: 'text' },
      description: 'Shows beneath the input box, can be an error statement as well.',
    },
    background: {
      control: { type: 'text' },
      description: 'Defines background color of Input box',
    },
    outerBackground: {
      control: { type: 'text' },
      description: 'Defines background color of Label, when over Input box line',
    },
    leftIcon: {
      control: false,
      description: 'Icon component placed on the left inside the input box.',
    },
    rightIcon: {
      control: false,
      description: 'Icon component placed on the right inside the input box.',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Boolean prop, if true then disabled',
    },
    disableAutoComplete: {
      control: { type: 'boolean' },
      description: 'Boolean prop, if true then auto complete disabled',
    },
    hasError: {
      control: { type: 'boolean' },
      description: 'Boolean prop, if true then error on input is visible',
    },
    autoFocus: {
      control: { type: 'boolean' },
      description: 'Boolean prop, if true then auto focuses on input',
    },
  },
};

// Default story
export const Default = (args) => {
  const [val, setVal] = useState('');

  const onChange = (v) => {
    setVal(v.target.value);
  };

  return (
    <Input
      label='Value'
      value={val}
      color={args?.color}
      size={args?.size}
      disabled={!!args?.disabled}
      hasError={!!args?.hasError}
      helperText={args?.helperText}
      background={args?.background}
      outerBackground={args?.outerBackground}
      disableAutoComplete={!!args?.disableAutoComplete}
      onChange={onChange}
    />
  );
};

export const DifferentColor = {
  name: 'Different Color',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      source: {
        language: 'jsx',
        code: `
import { useState } from 'react';
import Input from 'meticulous-ui/components/Input/Input';

const COLORS = ['blue', 'yellow', 'red', 'green', 'orange', 'black', 'grey', 'violet', 'teal', 'purple', 'pink'];

const DifferentColor = () => {
  const [vals, setVals] = useState(Object.fromEntries(COLORS.map((c) => [c, ''])));
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {COLORS.map((color) => (
        <Input
          key={color}
          label={color.charAt(0).toUpperCase() + color.slice(1)}
          value={vals[color]}
          color={color}
          size='30'
          onChange={(e) => setVals((v) => ({ ...v, [color]: e.target.value }))}
        />
      ))}
    </div>
  );
};
        `,
      },
    },
  },
  render: () => {
    const [val1, setVal1] = useState('');
    const [val2, setVal2] = useState('');
    const [val3, setVal3] = useState('');
    const [val4, setVal4] = useState('');
    const [val5, setVal5] = useState('');
    const [val6, setVal6] = useState('');
    const [val7, setVal7] = useState('');
    const [val8, setVal8] = useState('');
    const [val9, setVal9] = useState('');
    const [val10, setVal10] = useState('');
    const [val11, setVal11] = useState('');

    const onChange1 = (v) => setVal1(v.target.value);
    const onChange2 = (v) => setVal2(v.target.value);
    const onChange3 = (v) => setVal3(v.target.value);
    const onChange4 = (v) => setVal4(v.target.value);
    const onChange5 = (v) => setVal5(v.target.value);
    const onChange6 = (v) => setVal6(v.target.value);
    const onChange7 = (v) => setVal7(v.target.value);
    const onChange8 = (v) => setVal8(v.target.value);
    const onChange9 = (v) => setVal9(v.target.value);
    const onChange10 = (v) => setVal10(v.target.value);
    const onChange11 = (v) => setVal11(v.target.value);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
        <Input label='Blue' value={val1} color='blue' size='30' onChange={onChange1} />
        <Input label='Yellow' value={val2} color='yellow' size='30' onChange={onChange2} />
        <Input label='Red' value={val3} color='red' size='30' onChange={onChange3} />
        <Input label='Green' value={val4} color='green' size='30' onChange={onChange4} />
        <Input label='Orange' value={val5} color='orange' size='30' onChange={onChange5} />
        <Input label='Black' value={val6} color='black' size='30' onChange={onChange6} />
        <Input label='Grey' value={val7} color='grey' size='30' onChange={onChange7} />
        <Input label='Violet' value={val8} color='violet' size='30' onChange={onChange8} />
        <Input label='Teal' value={val9} color='teal' size='30' onChange={onChange9} />
        <Input label='Purple' value={val10} color='purple' size='30' onChange={onChange10} />
        <Input label='Pink' value={val11} color='pink' size='30' onChange={onChange11} />
      </div>
    );
  },
};

export const NoAutoComplete = {
  name: 'Without Auto Complete',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      source: {
        language: 'jsx',
        code: `
import { useState } from 'react';
import Input from 'meticulous-ui/components/Input/Input';

const NoAutoComplete = () => {
  const [val, setVal] = useState('');
  return (
    <Input
      label='Without AutoComplete'
      value={val}
      color='blue'
      size='30'
      onChange={(e) => setVal(e.target.value)}
      disableAutoComplete
    />
  );
};
        `,
      },
    },
  },
  render: () => {
    const [val, setVal] = useState('');

    const onChange = (v) => setVal(v.target.value);

    return (
      <Input
        label='Without AutoComplete'
        value={val}
        color='blue'
        size='30'
        onChange={onChange}
        disableAutoComplete
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
import Input from 'meticulous-ui/components/Input/Input';

const Disabled = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
    <Input label='Disabled without value' value='' color='blue' size='30' onChange={() => {}} disabled />
    <Input label='Disabled with value' value='Default value' color='blue' size='30' onChange={() => {}} disabled />
  </div>
);
        `,
      },
    },
  },
  render: () => {
    const [val1, setVal1] = useState('');
    const [val2, setVal2] = useState('Default value');

    const onChange1 = (v) => setVal1(v.target.value);
    const onChange2 = (v) => setVal2(v.target.value);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
        <Input
          label='Disabled without value'
          value={val1}
          color='blue'
          size='30'
          onChange={onChange1}
          disabled
        />
        <Input
          label='Disabled with value'
          value={val2}
          color='blue'
          size='30'
          onChange={onChange2}
          disabled
        />
      </div>
    );
  },
};

export const HelperText = {
  name: 'With Helper Text',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      source: {
        language: 'jsx',
        code: `
import { useState } from 'react';
import Input from 'meticulous-ui/components/Input/Input';

const MAX_CHARS_LIMIT = 30;

const HelperText = () => {
  const [val, setVal] = useState('');
  const onChange = (e) => {
    if (e.target.value.length <= MAX_CHARS_LIMIT) setVal(e.target.value);
  };
  return (
    <Input
      label='With helper text'
      value={val}
      color='blue'
      size='30'
      onChange={onChange}
      helperText={\`\${MAX_CHARS_LIMIT - val.length}/\${MAX_CHARS_LIMIT} characters allowed\`}
    />
  );
};
        `,
      },
    },
  },
  render: () => {
    const MAX_CHARS_LIMIT = 30;
    const [val1, setVal1] = useState('');

    const onChange1 = (v) => {
      if (v.target.value.length <= MAX_CHARS_LIMIT) setVal1(v.target.value);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Input
          label='With helper text'
          value={val1}
          color='blue'
          size='30'
          onChange={onChange1}
          helperText={`${MAX_CHARS_LIMIT - val1.length}/${MAX_CHARS_LIMIT} characters allowed`}
        />
      </div>
    );
  },
};

export const ErrorState = {
  name: 'Error State',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      source: {
        language: 'jsx',
        code: `
import { useState } from 'react';
import Input from 'meticulous-ui/components/Input/Input';

const MAX_CHARS_LIMIT = 10;

const ErrorState = () => {
  const [val, setVal] = useState('This value exceeds limit.');
  return (
    <Input
      label='Error State'
      value={val}
      color='blue'
      size='30'
      onChange={(e) => setVal(e.target.value.slice(0, MAX_CHARS_LIMIT))}
      helperText={\`Max. \${MAX_CHARS_LIMIT} characters allowed\`}
      hasError={val.length > MAX_CHARS_LIMIT}
    />
  );
};
        `,
      },
    },
  },
  render: () => {
    const MAX_CHARS_LIMIT = 10;
    const [val1, setVal1] = useState('This value exceeds limit.');

    const onChange1 = (v) => {
      setVal1(v.target.value.slice(0, MAX_CHARS_LIMIT));
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Input
          label='Error State'
          value={val1}
          color='blue'
          size='30'
          onChange={onChange1}
          helperText={`Max. ${MAX_CHARS_LIMIT} characters allowed`}
          hasError={val1.length > MAX_CHARS_LIMIT}
        />
      </div>
    );
  },
};

export const AutoFocus = {
  name: 'Auto Focus',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      source: {
        language: 'jsx',
        code: `
import { useState } from 'react';
import Input from 'meticulous-ui/components/Input/Input';

const AutoFocus = () => {
  const [val, setVal] = useState('');
  return (
    <Input
      label='Auto Focus'
      value={val}
      color='blue'
      size='30'
      onChange={(e) => setVal(e.target.value)}
      autoFocus
    />
  );
};
        `,
      },
    },
  },
  render: () => {
    const MAX_CHARS_LIMIT = 10;
    const [val1, setVal1] = useState('');

    const onChange1 = (v) => {
      setVal1(v.target.value);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Input
          label='Auto Focus'
          value={val1}
          color='blue'
          size='30'
          onChange={onChange1}
          autoFocus
        />
      </div>
    );
  },
};

export const WithoutLabel = {
  name: 'Without Label',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      source: {
        language: 'jsx',
        code: `
import { useState } from 'react';
import Input from 'meticulous-ui/components/Input/Input';

const WithoutLabel = () => {
  const [val, setVal] = useState('');
  return (
    <Input
      placeholder='With helper text'
      value={val}
      color='blue'
      size='30'
      onChange={(e) => setVal(e.target.value)}
    />
  );
};
        `,
      },
    },
  },
  render: () => {
    const [val1, setVal1] = useState('');

    const onChange1 = (v) => {
      setVal1(v.target.value);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Input
          placeholder='With helper text'
          value={val1}
          color='blue'
          size='30'
          onChange={onChange1}
        />
      </div>
    );
  },
};

export const WithLeftIcon = {
  name: 'With Left Icon',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      source: {
        language: 'jsx',
        code: `
import { useState } from 'react';
import Input from 'meticulous-ui/components/Input/Input';
import Search from 'meticulous-ui/components/Icons/Search';

const WithLeftIcon = () => {
  const [val, setVal] = useState('');
  return (
    <Input
      label='With Left Icon'
      value={val}
      color='blue'
      size='30'
      onChange={(e) => setVal(e.target.value)}
      leftIcon={Search}
    />
  );
};
        `,
      },
    },
  },
  render: () => {
    const [val1, setVal1] = useState('');

    const onChange1 = (v) => {
      setVal1(v.target.value);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Input
          label='With Left Icon'
          value={val1}
          color='blue'
          size='30'
          onChange={onChange1}
          leftIcon={Search}
        />
      </div>
    );
  },
};

export const WithRightIcon = {
  name: 'With Right Icon',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      source: {
        language: 'jsx',
        code: `
import { useState } from 'react';
import Input from 'meticulous-ui/components/Input/Input';
import StarOutline from 'meticulous-ui/components/Icons/StarOutline';

const WithRightIcon = () => {
  const [val, setVal] = useState('');
  return (
    <Input
      label='With Right Icon'
      value={val}
      color='blue'
      size='30'
      onChange={(e) => setVal(e.target.value)}
      rightIcon={StarOutline}
    />
  );
};
        `,
      },
    },
  },
  render: () => {
    const [val1, setVal1] = useState('');

    const onChange1 = (v) => {
      setVal1(v.target.value);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Input
          label='With Right Icon'
          value={val1}
          color='blue'
          size='30'
          onChange={onChange1}
          rightIcon={StarOutline}
        />
      </div>
    );
  },
};

Default.storyName = 'Input';

Default.args = {
  name: 'input',
  color: 'blue',
  size: 20,
  helperText: '',
  background: 'transparent',
  outerBackground: 'white',
  disableAutoComplete: false,
  disabled: false,
  hasError: false,
  autoFocus: false,
};
