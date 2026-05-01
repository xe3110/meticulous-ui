import { useEffect, useState } from 'react';
import Shimmer from '../src/components/Shimmer';

export default {
  title: 'Atoms/Shimmer',
  component: Shimmer,
  parameters: {
    docs: {
      description: {
        component: 'Shimmer effect',
      },
      source: {
        language: 'jsx',
        code: `
          import Shimmer from 'meticulous-ui/components/Shimmer';

          export const Default = () => {
            return <Shimmer width={10} height={10} />;
          };
        `,
      },
    },
  },
  argTypes: {
    width: {
      description: 'Width of the shimmer block (rem string or number)',
      control: 'text',
    },
    height: {
      description: 'Height of the shimmer block (rem string or number)',
      control: 'text',
    },
    label: {
      description: 'Accessible label for screen readers',
      control: 'text',
    },
    borderRadius: {
      description: 'Border-radius of the shimmer block',
      control: 'text',
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
    <div style={{ width: args?.width || '40rem', height: args?.height || '20rem' }}>
      <Shimmer label={args?.label} />
    </div>
  );
};

Default.storyName = 'Shimmer';

Default.args = {
  width: '40rem',
  height: '20rem',
  label: 'Loading...',
  borderRadius: '0.64rem',
};

export const CustomBorderRadius = (args) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
    <Shimmer width={args?.width} height={args?.height} borderRadius='0' />
    <Shimmer width={args?.width} height={args?.height} borderRadius='0.4rem' />
    <Shimmer width={args?.width} height={args?.height} borderRadius='1rem' />
    <Shimmer width={args?.width} height={args?.height} borderRadius='50%' />
  </div>
);

CustomBorderRadius.storyName = 'Custom Border Radius';

CustomBorderRadius.args = {
  width: '30rem',
  height: '6rem',
};

CustomBorderRadius.parameters = {
  controls: { disable: true },
  actions: { disable: true },
  docs: {
    source: {
      language: 'jsx',
      code: `
        import Shimmer from 'meticulous-ui/components/Shimmer';

        export const CustomBorderRadius = () => (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <Shimmer width='30rem' height='6rem' borderRadius='0' />
            <Shimmer width='30rem' height='6rem' borderRadius='0.4rem' />
            <Shimmer width='30rem' height='6rem' borderRadius='1rem' />
            <Shimmer width='30rem' height='6rem' borderRadius='50%' />
          </div>
        );
      `,
    },
  },
};
