import { useState } from 'react';
import Textarea from '../src/components/Input/Textarea';

export default {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    docs: {
      description: {
        component: 'A simple Textarea component that shows a box with content given by the user.',
      },
      source: {
        language: 'jsx',
        code: `
          import Textarea from 'meticulous-ui/components/Input/Textarea';

          function ExampleTextarea() {
            const [val, setVal] = useState('');
            const onChange = (v) => setVal(v.target.value);

            return (
              <Textarea name='description' label='Value' value={val} onChange={onChange} color='blue' />
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
    name: {
      control: { type: 'text' },
      description: 'Defines the type of value of Textarea',
    },
    rows: {
      control: { type: 'text' },
      description: 'Defines the height of the Textarea',
    },
    cols: {
      control: { type: 'text' },
      description: 'Defines the width of the Textarea',
    },
    helperText: {
      control: { type: 'text' },
      description: 'Shows beneath the Textarea box, can be an error statement as well.',
    },
    background: {
      control: { type: 'text' },
      description: 'Defines background color of Textarea box',
    },
    outerBackground: {
      control: { type: 'text' },
      description: 'Defines background color of Label, when over Textbox box line',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Boolean prop, if true then disabled',
    },
    hasError: {
      control: { type: 'boolean' },
      description: 'Boolean prop, if true then error on Textarea is visible',
    },
    autoFocus: {
      control: { type: 'boolean' },
      description: 'Boolean prop, if true then auto focuses on Textarea',
    },
    isDynamic: {
      control: { type: 'boolean' },
      description: 'Boolean prop, if true then Textarea has no scroll or resize but dynamic height',
    },
    isResizeNone: {
      control: { type: 'boolean' },
      description: 'Boolean prop, if true then cannot resize Textarea',
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
    <Textarea
      label='Value'
      value={val}
      color={args?.color}
      disabled={!!args?.disabled}
      hasError={!!args?.hasError}
      autoFocus={!!args?.autoFocus}
      isDynamic={!!args?.isDynamic}
      isResizeNone={!!args?.isResizeNone}
      helperText={args?.helperText}
      background={args?.background}
      outerBackground={args?.outerBackground}
      rows={args?.rows}
      cols={args?.cols}
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
        <Textarea label='Blue' value={val1} color='blue' onChange={onChange1} />
        <Textarea label='Yellow' value={val2} color='yellow' onChange={onChange2} />
        <Textarea label='Red' value={val3} color='red' onChange={onChange3} />
        <Textarea label='Green' value={val4} color='green' onChange={onChange4} />
        <Textarea label='Orange' value={val5} color='orange' onChange={onChange5} />
        <Textarea label='Black' value={val6} color='black' onChange={onChange6} />
        <Textarea label='Grey' value={val7} color='grey' onChange={onChange7} />
        <Textarea label='Violet' value={val8} color='violet' onChange={onChange8} />
        <Textarea label='Teal' value={val9} color='teal' onChange={onChange9} />
        <Textarea label='Purple' value={val10} color='purple' onChange={onChange10} />
        <Textarea label='Pink' value={val11} color='pink' onChange={onChange11} />
      </div>
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
        <Textarea
          label='Disabled without value'
          value={val1}
          color='blue'
          onChange={onChange1}
          disabled
        />
        <Textarea
          label='Disabled with value'
          value={val2}
          color='blue'
          onChange={onChange2}
          disabled
        />
      </div>
    );
  },
};

export const DynamicHeight = {
  name: 'With Dynamic Height',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
  render: () => {
    const [val1, setVal1] = useState('');

    const onChange1 = (v) => {
      setVal1(v.target.value);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Textarea label='Dynamic Height' value={val1} color='blue' onChange={onChange1} isDynamic />
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
        <Textarea
          label='With helper text'
          value={val1}
          color='blue'
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
    const MAX_CHARS_LIMIT = 20;
    const [val1, setVal1] = useState('This value exceeds limit.');

    const onChange1 = (v) => {
      setVal1(v.target.value.slice(0, MAX_CHARS_LIMIT));
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Textarea
          label='Error State'
          value={val1}
          color='blue'
          outerBackground='white'
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
  },
  render: () => {
    const MAX_CHARS_LIMIT = 10;
    const [val1, setVal1] = useState('');

    const onChange1 = (v) => {
      setVal1(v.target.value);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Textarea label='Auto Focus' value={val1} color='blue' onChange={onChange1} autoFocus />
      </div>
    );
  },
};

export const WithoutLabel = {
  name: 'Without Label',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
  render: () => {
    const [val1, setVal1] = useState('');

    const onChange1 = (v) => {
      setVal1(v.target.value);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Textarea placeholder='With helper text' value={val1} color='blue' onChange={onChange1} />
      </div>
    );
  },
};

Default.storyName = 'Textarea';

Default.args = {
  name: 'Textarea',
  color: 'blue',
  helperText: '',
  background: 'transparent',
  outerBackground: 'white',
  disabled: false,
  hasError: false,
  autoFocus: false,
  isDynamic: false,
  isResizeNone: false,
  rows: '2',
  cols: '20',
};
