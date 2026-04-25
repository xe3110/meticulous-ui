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
    argTypes: {
      width: {
        control: 'text',
      },
      height: {
        control: 'text',
      },
      label: {
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
