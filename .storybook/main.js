import path from 'path';
/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ['../stories/*.stories.jsx', '../stories/**/*.mdx'],
  addons: ['@storybook/addon-docs'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  async viteFinal(config) {
    if (config.build) {
      delete config.build.lib;
      if (config.build.rollupOptions) {
        delete config.build.rollupOptions.output;
      }
    }
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        'meticulous-ui': path.resolve(__dirname, '../src/index.js'),
      },
    };
    config.optimizeDeps = {
      ...config.optimizeDeps,
      include: [...(config.optimizeDeps?.include || []), 'styled-components'],
    };

    return config;
  },
};

export default config;
