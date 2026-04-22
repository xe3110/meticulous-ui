import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

export default defineConfig({
  plugins: [react(), svgr()],
  build: {
    outDir: 'dist',
    minify: 'esbuild',
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'MeticulousUI',
      formats: ['es'],
    },
    rollupOptions: {
      external: (id) =>
        ['react', 'react-dom', 'react/jsx-runtime', 'styled-components'].some(
          (pkg) => id === pkg || id.startsWith(pkg + '/')
        ),
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: '[name].js',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'styled-components': 'styled',
        },
      },
    },
    sourcemap: false,
  },
});
