import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'MeticulousUI',
      fileName: (format) => `meticulous-ui.${format}.js`,
      formats: ['es'], // only ESM; simplest for tree-shakable libs
    },
    rollupOptions: {
      external: ['react', 'react-dom'], // don’t bundle React
      output: {
        preserveModules: true,          // keep file per component
        preserveModulesRoot: 'src',     // make dist/ mirror src/
        dir: 'dist',                    // output directory
        entryFileNames: '[name].js',    // cleaner filenames
        chunkFileNames: '[name].js',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    sourcemap: true,
  },
});
