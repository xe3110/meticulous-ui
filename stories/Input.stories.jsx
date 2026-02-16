import { useState } from 'react';
import Input from '../src/components/Input/Input';

export default {
  title: 'Components/Input',
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
      defaultValue: 'blue',
    },
    size: {
      control: { type: 'number' },
      description: 'Mandatory numeric prop representing current page',
      defaultValue: 20,
    },
    helperText: {
      control: { type: 'text' },
      description: 'Shows beneath the input box, can be an error statement as well.',
      defaultValue: false,
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Boolean prop, if true then disabled',
      defaultValue: false,
    },
    disableAutoComplete: {
      control: { type: 'boolean' },
      description: 'Boolean prop, if true then auto complete disabled',
      defaultValue: false,
    },
    hasError: {
      control: { type: 'boolean' },
      description: 'Boolean prop, if true then error on input is visible',
      defaultValue: false,
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
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
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
  },
  render: () => {
    const [val1, setVal1] = useState('');
    const [val2, setVal2] = useState('Default value');

    const onChange1 = (v) => setVal1(v.target.value);
    const onChange2 = (v) => setVal2(v.target.value);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
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

Default.storyName = 'Input';
