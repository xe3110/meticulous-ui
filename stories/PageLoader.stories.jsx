import { useEffect, useState } from 'react';
import PageLoader from '../src/components/PageLoader';

export default {
  title: 'Atoms/PageLoader',
  component: PageLoader,
  parameters: {
    docs: {
      description: {
        component: 'Default',
      },
      source: {
        language: 'jsx',
        code: `
          import PageLoader from 'meticulous-ui/components/PageLoader';

          export const Default = () => {
            return <PageLoader />;
          };
        `,
      },
    },
  },
  argTypes: {
    theme: {
      control: 'select',
      options: [
        'blue',
        'green',
        'red',
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
    color: {
      control: 'text',
      description: 'Custom color for the loader. Overrides theme color if provided.',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};

// Default story
export const Default = (args) => {
  return <PageLoader {...args} />;
};

Default.storyName = 'Page Loader';

Default.args = {
  theme: 'blue',
  color: '',
};
