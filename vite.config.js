import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Auto-create missing folder index.js files after build
function createIndexes(dir) {
  if (!fs.existsSync(dir)) return;

  const items = fs.readdirSync(dir, { withFileTypes: true });

  items.forEach((item) => {
    const fullPath = resolve(dir, item.name);

    if (item.isDirectory()) {
      createIndexes(fullPath);

      const files = fs.readdirSync(fullPath);
      const jsFiles = files.filter((f) => f.endsWith('.js') && f !== 'index.js');
      const hasIndex = files.includes('index.js');

      if (!hasIndex && jsFiles.length === 1) {
        fs.writeFileSync(
          resolve(fullPath, 'index.js'),
          `export { default } from './${jsFiles[0]}';\n`
        );
      }
    }
  });
}

// Remove _virtual folder after build
function removeVirtualDir() {
  const virtualPath = resolve(__dirname, 'dist/_virtual');

  if (fs.existsSync(virtualPath)) {
    fs.rmSync(virtualPath, { recursive: true, force: true });
  }
}

export default defineConfig({
  plugins: [
    react(),
    svgr(),

    {
      name: 'meticulous-ui-post-build',
      closeBundle() {
        createIndexes(resolve(__dirname, 'dist/components'));
        removeVirtualDir();
      },
    },
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false,
    target: 'esnext',
    minify: 'esbuild',
    commonjsOptions: {
      transformMixedEsModules: false,
    },
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', 'styled-components'],
      output: {
        format: 'es',
        dir: 'dist',
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: '[name].js',
        chunkFileNames: 'chunks/[name]-[hash].js',
        assetFileNames: 'assets/[name].[ext]',
        exports: 'named',
        interop: 'auto',
        generatedCode: 'es2015',
      },
    },
  },
});
