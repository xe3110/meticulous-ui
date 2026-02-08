import { useState } from 'react';
import Input from '../src/components/Input/Input';

const InputWrapper = () => {
  const [val, setVal] = useState('');

  const onChange = (v) => {
    setVal(v.target.value);
  };

  return <Input label='Value' value={val} color='green' size='20' onChange={onChange} />;
};

export default {
  title: 'Components/Input',
  component: InputWrapper,
  parameters: {
    docs: {
      description: {
        component: 'Input component',
      },
    },
    controls: { disable: true },
    actions: { disable: true },
  },
};

// Default story
export const Default = () => {
  // import Input from 'meticulous-ui/components/Input';

  // return (
  //   <Input label='Value' value={val} onChange={onChange} color='blue' size='20' disableAutoComplete />
  // )

  return <InputWrapper />;
};

Default.storyName = 'Input';
