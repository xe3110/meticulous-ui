import { useEffect, useState } from 'react';
import OtpInput from '../src/components/OtpInput';

export default {
  title: 'Molecules/OtpInput',
  component: OtpInput,
  parameters: {
    docs: {
      description: {
        component: 'OTP input.',
      },
      source: {
        language: 'jsx',
        code: `
          import OtpInput from 'meticulous-ui/components/OtpInput';

          export const Default = (args) => {
            const [val, setVal] = useState('');

            const onChange = (val) => {
              setVal(val);
            };

            return <OtpInput value={val} onComplete={onChange} onChange={onChange} />;
          };
        `,
      },
    },
    argTypes: {
      length: {
        control: 'number',
      },
      value: {
        control: 'text',
      },
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
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <OtpInput length={args?.length} value={val} onComplete={onChange} onChange={onChange} />
    </div>
  );
};

Default.storyName = 'OTP Entry';

Default.args = {
  length: 6,
  value: '',
};
