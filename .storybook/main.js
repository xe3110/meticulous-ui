/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    '../stories/*.stories.jsx',
    '../stories/**/*.mdx'
  ],
  addons: [
    '@storybook/addon-docs',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  // experimental_indexers: async (existingIndexers) => {
  //   const { mdxIndexer } = await import('@storybook/mdx2-csf');
  //   return [...existingIndexers, mdxIndexer];
  // },
};

export default config;
