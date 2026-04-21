import { useEffect, useState } from 'react';
import Shimmer from '../src/components/Shimmer';

export default {
  title: 'Molecules/Shimmer',
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

  return <Shimmer width={args?.width} height={args?.height} label={args?.label} {...{width:'20rem', height: '10rem'}} />;
};

Default.storyName = 'Shimmer';

Default.args = {
  width:'',
  height:'',
  label:'Loading...',
};
