import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const pkg = require('./package.json');

export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
        dimensions: false,
      },
    }),
  ],
  build: {
    outDir: 'dist',
    minify: 'esbuild',
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        ...Object.keys(pkg.dependencies || {}),
        ...Object.keys(pkg.peerDependencies || {}),
        'react/jsx-runtime',
        'react/jsx-dev-runtime',
        /^styled-components/,
      ],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
        inlineDynamicImports: false,
        entryFileNames: (chunkInfo) => {
          const parts = chunkInfo.name.split('/');
          const fileName = parts.pop();

          if (chunkInfo.name.includes('Icons/')) {
            return `components/Icons/${fileName.replace(/\.(jsx|js)$/, '')}.js`;
          }

          const topLevelDirs = ['components', 'colors', 'hooks', 'utils'];
          const currentTopDir = parts[0];

          if (topLevelDirs.includes(currentTopDir)) {
            return `${currentTopDir}/${fileName.replace(/\.(jsx|js)$/, '')}.js`;
          }

          return chunkInfo.name.replace(/\.(jsx|js)$/, '') + '.js';
        },
        exports: 'named',
      },
      treeshake: {
        moduleSideEffects: false,
      },
    },
    sourcemap: false,
  },
});
