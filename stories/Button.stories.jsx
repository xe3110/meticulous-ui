import Button from '../src/components/Button/Button';
import { H6 } from '../src/components/Typography/Headings';

const THEMES = [
  'amber',
  'blue',
  'blueGray',
  'brown',
  'cider',
  'cyan',
  'deepOrange',
  'deepPurple',
  'green',
  'grey',
  'indigo',
  'lightBlue',
  'lightGreen',
  'lime',
  'orange',
  'pink',
  'purple',
  'red',
  'teal',
  'violet',
  'white',
  'yellow',
  'black',
];

const SIZES = [
  {
    size: 'small',
    label: 'Small',
  },
  {
    size: 'medium',
    label: 'Medium',
  },
  {
    size: 'large',
    label: 'Large',
  },
  {
    size: 'ex-large',
    label: 'Extra Large',
  },
];

export default {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'A Button component to render & display a button.',
      },
      source: {
        language: 'jsx',
        code: `
          import Button from 'meticulous-ui/components/Button';

          const ButtonWrapper = () => {
            const onClick = (e) => {
              console.log(e);
            };

            return (
              <Button onClick={onClick}>Click me</Button>
            );
          };
        `,
      },
    },
  },
  argTypes: {
    theme: {
      description: 'Color theme key from the meticulous-ui color map',
      control: 'select',
      options: [
        'amber',
        'blue',
        'brown',
        'cyan',
        'deepPurple',
        'grey',
        'indigo',
        'lightGreen',
        'orange',
        'purple',
        'teal',
        'white',
        'black',
        'blueGray',
        'cider',
        'deepOrange',
        'green',
        'lightBlue',
        'lime',
        'pink',
        'red',
        'violet',
        'yellow',
      ],
    },
    size: {
      description: "Button size variant: `'small'`, `'medium'`, `'large'`, or `'ex-large'`",
      control: 'select',
      options: ['small', 'medium', 'large', 'ex-large'],
    },
    width: {
      description: 'Override the button width',
      control: 'number',
    },
    textColor: {
      description: 'Override the label and icon color',
      control: 'text',
    },
    isLoading: {
      description: 'Shows a spinner and disables interaction while true',
    },
    disabled: {
      description: 'Disables the button',
    },
    leftIcon: {
      description: 'Icon component rendered to the left of the label',
    },
    rightIcon: {
      description: 'Icon component rendered to the right of the label',
    },
    children: {
      description: 'Button label or content',
    },
  },
};

// Default story
export const Default = (args) => {
  const onClick = (e) => {
    console.log('Button clicked!', e);
  };

  return (
    <Button {...args} onClick={onClick}>
      Click me
    </Button>
  );
};

export const DifferentSizes = {
  name: 'Different Sizes',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      source: {
        language: 'jsx',
        code: `
import Button from 'meticulous-ui/components/Button';
import { H6 } from 'meticulous-ui/components/Typography/Headings';

const SIZES = [
  { size: 'small', label: 'Small' },
  { size: 'medium', label: 'Medium' },
  { size: 'large', label: 'Large' },
  { size: 'ex-large', label: 'Extra Large' },
];

const DifferentSizes = () => (
  <>
    {SIZES.map(({ size, label }) => (
      <div
        key={size}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '15rem',
        }}
      >
        <H6>{\`\${label}:\`}</H6>
        <Button size={size}>Click me</Button>
      </div>
    ))}
  </>
);
        `,
      },
    },
  },
  render: () => (
    <>
      {SIZES.map(({ size, label }) => (
        <div
          key={size}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            maxWidth: '25rem',
            width: '100%',
          }}
        >
          <H6>{`${label}:`}</H6>
          <Button size={size}>Click me</Button>
        </div>
      ))}
    </>
  ),
};

export const LoadingState = {
  name: 'Loading State',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      source: {
        language: 'jsx',
        code: `
import Button from 'meticulous-ui/components/Button';

const LoadingState = () => <Button isLoading>Click me</Button>;
        `,
      },
    },
  },
  render: () => <Button isLoading>Click me</Button>,
};

export const DisabledState = {
  name: 'Disabled State',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      source: {
        language: 'jsx',
        code: `
import Button from 'meticulous-ui/components/Button';

const DisabledState = () => <Button disabled>Click me</Button>;
        `,
      },
    },
  },
  render: () => <Button disabled>Click me</Button>,
};

export const DifferentThemes = {
  name: 'Different Themes',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      source: {
        language: 'jsx',
        code: `
import Button from 'meticulous-ui/components/Button';
import { H6 } from 'meticulous-ui/components/Typography/Headings';

const THEMES = ['amber', 'blue', 'blueGray', 'brown', 'cider', 'cyan', 'deepOrange',
  'deepPurple', 'green', 'grey', 'indigo', 'lightBlue', 'lightGreen', 'lime',
  'orange', 'pink', 'purple', 'red', 'teal', 'violet', 'white', 'yellow', 'black'];

const DifferentThemes = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
    {THEMES.map((theme) => (
      <div
        key={theme}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}
      >
        <Button theme={theme}>Click me</Button>
        <H6>{theme}</H6>
      </div>
    ))}
  </div>
);
        `,
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
      {THEMES.map((theme) => (
        <div
          key={theme}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}
        >
          <Button theme={theme}>Click me</Button>
          <H6>{theme}</H6>
        </div>
      ))}
    </div>
  ),
};

Default.args = {
  theme: 'blue',
  size: 'medium',
  width: 9,
  textColor: '',
};
