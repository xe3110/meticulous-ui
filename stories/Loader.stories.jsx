import Loader from '../src/components/Loader/Loader';
import { H6 } from '../src/components/Typography/Headings';

const THEMES = [
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
];

const SIZES = [
  { size: 'small', label: 'Small' },
  { size: 'medium', label: 'Medium' },
  { size: 'large', label: 'Large' },
];

export default {
  title: 'Atomic Components/Loader',
  component: Loader,
  parameters: {
    docs: {
      description: {
        component:
          'A wave-bounce dot Loader to indicate a loading state. Five dots animate sequentially with a mint-to-blue color gradient.',
      },
      source: {
        language: 'jsx',
        code: `
import Loader from 'meticulous-ui/components/Loader';

const Example = () => {
  return <Loader />;
};
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    theme: {
      control: 'select',
      options: THEMES,
    },
    isBounce: {
      control: 'boolean',
    },
  },
};

export const Default = (args) => <Loader {...args} />;

Default.args = {
  size: 'medium',
  isBounce: 'false',
  theme: 'blue',
};

export const Sizes = {
  name: 'Different Sizes',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      source: {
        language: 'jsx',
        code: `
import Loader from 'meticulous-ui/components/Loader';
import { H6 } from 'meticulous-ui/components/Typography/Headings';

const SIZES = [
  { size: 'small', label: 'Small' },
  { size: 'medium', label: 'Medium' },
  { size: 'large', label: 'Large' },
];

const Sizes = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', margin: '1rem 2rem' }}>
    {SIZES.map(({ size, label }) => (
      <div key={size} style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <H6 style={{ width: '5rem' }}>{label}:</H6>
        <Loader size={size} />
      </div>
    ))}
  </div>
);
        `,
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', margin: '1rem 2rem' }}>
      {SIZES.map(({ size, label }) => (
        <div key={size} style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <H6 style={{ width: '5rem' }}>{`${label}:`}</H6>
          <Loader size={size} />
        </div>
      ))}
    </div>
  ),
};

export const BounceAnimation = {
  name: 'Bounce Animation',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      source: {
        language: 'jsx',
        code: `
import Loader from 'meticulous-ui/components/Loader';
import { H6 } from 'meticulous-ui/components/Typography/Headings';

const SIZES = [
  { size: 'small', label: 'Small' },
  { size: 'medium', label: 'Medium' },
  { size: 'large', label: 'Large' },
];

const BounceAnimation = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', margin: '1rem 2rem' }}>
    {SIZES.map(({ size, label }) => (
      <div key={size} style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <H6 style={{ width: '5rem' }}>{label}:</H6>
        <Loader size={size} isBounce />
      </div>
    ))}
  </div>
);
        `,
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', margin: '1rem 2rem' }}>
      {SIZES.map(({ size, label }) => (
        <div key={size} style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <H6 style={{ width: '5rem' }}>{`${label}:`}</H6>
          <Loader size={size} isBounce />
        </div>
      ))}
    </div>
  ),
};

export const Themes = {
  name: 'Different Themes',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: {
      source: {
        language: 'jsx',
        code: `
import Loader from 'meticulous-ui/components/Loader';
import { H6 } from 'meticulous-ui/components/Typography/Headings';

const THEMES = ['blue', 'green', 'red', 'yellow', 'orange', 'black', 'grey', 'violet', 'teal', 'purple', 'pink'];

const Themes = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', margin: '1rem 2rem' }}>
    {THEMES.map((theme) => (
      <div key={theme} style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <H6 style={{ width: '5rem', textTransform: 'capitalize' }}>{theme}:</H6>
        <Loader theme={theme} />
      </div>
    ))}
  </div>
);
        `,
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', margin: '1rem 2rem' }}>
      {THEMES.map((theme) => (
        <div key={theme} style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <H6 style={{ width: '5rem', textTransform: 'capitalize' }}>{theme}:</H6>
          <Loader theme={theme} />
        </div>
      ))}
    </div>
  ),
};
