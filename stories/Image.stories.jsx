import Image from '../src/components/Image';

export default {
  title: 'Atoms/Image',
  component: Image,
  parameters: {
    docs: {
      description: {
        component: 'Image with shimmer placeholder until loaded.',
      },
      source: {
        language: 'jsx',
        code: `
          import Image from 'meticulous-ui/components/Image';

          const Example = () => (
            <Image
              src='https://picsum.photos/4000/3000?random=1'
              alt='Sample image'
              width='600px'
              height='400px'
            />
          );
        `,
      },
    },
  },
  argTypes: {
    src: {
      control: { type: 'text' },
      description: 'URL of the image to display',
    },
    alt: {
      control: { type: 'text' },
      description: 'Alt text for the image',
    },
    width: {
      control: { type: 'text' },
      description: 'Width of the image (CSS value or number in rem)',
    },
    height: {
      control: { type: 'text' },
      description: 'Height of the image (CSS value or number in rem)',
    },
    borderRadius: {
      control: { type: 'text' },
      description: 'Border radius of the image',
    },
    loadLow: {
      control: { type: 'boolean' },
      description: 'Show a blurred low-res placeholder while the full image loads',
    },
    lowSrc: {
      control: { type: 'text' },
      description: 'URL of the low-resolution placeholder image (used when loadLow is true)',
    },
  },
};

export const Default = (args) => <Image {...args} />;

Default.storyName = 'Image';

Default.args = {
  src: 'https://picsum.photos/4000/3000?random=1',
  alt: 'Sample image',
  width: '100%',
  height: '400px',
  borderRadius: '0.4rem',
  loadLow: false,
  lowSrc: '',
};

export const Rounded = (args) => <Image {...args} />;

Rounded.storyName = 'Rounded';

Rounded.args = {
  src: 'https://picsum.photos/4000/4000?random=2',
  alt: 'Rounded image',
  width: '400px',
  height: '400px',
  borderRadius: '50%',
};

Rounded.parameters = {
  controls: { disable: true },
  actions: { disable: true },
  docs: {
    source: {
      language: 'jsx',
      code: `
        import Image from 'meticulous-ui/components/Image';

        const Rounded = () => (
          <Image
            src='https://picsum.photos/4000/4000?random=2'
            alt='Rounded image'
            width='400px'
            height='400px'
            borderRadius='50%'
          />
        );
      `,
    },
  },
};

export const LoadLow = (args) => {
  const loadLowSeed = Math.random().toString(36).slice(2);
  return (
    <Image
      src={`https://picsum.photos/seed/${loadLowSeed}/4000/3000`}
      lowSrc={`https://picsum.photos/seed/${loadLowSeed}/60/45`}
      {...args}
    />
  );
};

LoadLow.storyName = 'Load Low';

LoadLow.args = {
  loadLow: true,
  alt: 'Progressive image',
  width: '100%',
  height: '400px',
  borderRadius: '0.4rem',
};

LoadLow.parameters = {
  controls: { disable: true },
  actions: { disable: true },
  docs: {
    description: {
      story:
        'Shimmer shows until the tiny low-res version loads, then a blurred placeholder is visible while the full image fetches.',
    },
    source: {
      language: 'jsx',
      code: `
        import Image from 'meticulous-ui/components/Image';

        const LoadLow = () => (
          <Image
            src='https://picsum.photos/seed/meticulous/4000/3000'
            lowSrc='https://picsum.photos/seed/meticulous/60/45'
            loadLow
            alt='Progressive image'
            width='600px'
            height='400px'
          />
        );
      `,
    },
  },
};
