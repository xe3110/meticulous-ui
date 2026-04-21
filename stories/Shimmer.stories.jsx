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
    <div style={{ width: args?.width || '20rem', height: args?.height || '10rem' }}>
      <Shimmer label={args?.label} />
    </div>
  );
};

Default.storyName = 'Shimmer';

Default.args = {
  width: '20rem',
  height: '10rem',
  label: 'Loading...',
};
