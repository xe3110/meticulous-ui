import OtpInput from '../src/components/OtpInput/OtpInput';

const OtpInputWrapper = () => {
  const onChange = (v) => {
    console.log(v);
  };

  return <OtpInput onChange={onChange} />;
};

export default {
  title: 'Components/OTP',
  component: OtpInputWrapper,
  parameters: {
    docs: {
      description: {
        component: 'OTP input.',
      },
    },
    controls: { disable: true },
    actions: { disable: true },
  },
};

// Default story
export const Default = () => {
  // import OtpInput from 'meticulous-ui/components/OtpInput';

  // return (
  //   <OtpInput length={6} value='123456' onComplete={onChange} onChange={onChange} />
  // )

  return <OtpInputWrapper />;
};

Default.storyName = 'OTP Entry';
