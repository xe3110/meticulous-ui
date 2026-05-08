/** @type { import('@storybook/react-vite').Preview } */

const withRootFontSize = (Story) => {
  document.documentElement.style.fontSize = '62.5%';
  return Story();
};

const preview = {
  decorators: [withRootFontSize],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          'Atoms',
          'Molecules',
          'Organisms',
          'Layout',
          'Foundation',
          'Tokens',
          'Utilities',
          'React Utilities',
          'Hooks',
        ],
      },
    },
  },
};

export default preview;
