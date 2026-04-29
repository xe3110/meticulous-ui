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
    // 1. Clean up library-specific build settings
    if (config.build) {
      delete config.build.lib;
      if (config.build.rollupOptions) {
        delete config.build.rollupOptions.output;
      }
    }

    // 2. FORCE alias to source to bypass any 'dist' or package.json logic
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        'meticulous-ui': path.resolve(__dirname, '../src/index.js'),
      },
    };

    // 3. DISABLE Tree-shaking for the Storybook build
    // This bypasses the MemberExpression.bind logic that is crashing
    if (config.build) {
      config.build.rollupOptions = {
        ...config.build.rollupOptions,
        treeshake: false,
      };
    }

    // 4. Handle styled-components optimization
    config.optimizeDeps = {
      ...config.optimizeDeps,
      include: [...(config.optimizeDeps?.include || []), 'styled-components'],
    };

    return config;
  },
};

export default config;
