import Button from '../src/components/Button/Button';
import { H6 } from '../src/components/Typography/Headings';

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
  title: 'Components/Button',
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
            return (
              <Button>Click me</Button>
            );
          };
        `,
      },
    },
  },
  argTypes: {
    theme: {
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
      control: 'select',
      options: ['small', 'medium', 'large', 'ex-large'],
    },
    width: {
      control: 'number',
    },
  },
};

// Default story
export const Default = (args) => {
  return <Button {...args}>Click me</Button>;
};

export const DifferentSizes = {
  name: 'Different Sizes',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
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
            width: '15rem',
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
  },
  render: () => <Button isLoading>Click me</Button>,
};

export const DisabledState = {
  name: 'Disabled State',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
  render: () => <Button disabled>Click me</Button>,
};

Default.args = {
  theme: 'blue',
  size: 'medium',
  width: 6,
};
