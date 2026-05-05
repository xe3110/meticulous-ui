import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { analyzer } from 'vite-bundle-analyzer';
import { adapter } from 'vite-bundle-analyzer';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function createIndexes(dir, ext = 'js') {
  if (!fs.existsSync(dir)) return;

  const items = fs.readdirSync(dir, { withFileTypes: true });

  items.forEach((item) => {
    const fullPath = resolve(dir, item.name);

    if (item.isDirectory()) {
      createIndexes(fullPath, ext);

      const files = fs.readdirSync(fullPath);
      const extFiles = files.filter((f) => f.endsWith(`.${ext}`) && f !== `index.${ext}`);
      const hasIndex = files.includes(`index.${ext}`);

      if (!hasIndex && extFiles.length === 1) {
        const isCjs = ext === 'cjs';
        const content = isCjs
          ? `'use strict';\nmodule.exports = require('./${extFiles[0]}');\n`
          : `export * from './${extFiles[0]}';\nexport { default } from './${extFiles[0]}';\n`;
        fs.writeFileSync(resolve(fullPath, `index.${ext}`), content);
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

function buildEntries(root) {
  const entries = { index: resolve(root, 'src/index.js') };

  // Add each util as its own entry (no barrel index in utils)
  const utilsDir = resolve(root, 'src/utils');
  fs.readdirSync(utilsDir)
    .filter((f) => f.endsWith('.js'))
    .forEach((f) => {
      entries[`utils/${f.replace('.js', '')}`] = resolve(utilsDir, f);
    });

  // Icons as a standalone entry for tree-shakeable icon imports
  entries['components/Icons/index'] = resolve(root, 'src/components/Icons/index.js');

  // hooks and reactUtils have index files
  entries['hooks/index'] = resolve(root, 'src/hooks/index.js');
  entries['reactUtils/index'] = resolve(root, 'src/reactUtils/index.js');

  return entries;
}

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ['annotate-pure-calls'],
      },
    }),
    {
      name: 'pure-styled-components',
      // generateBundle fires once per output after rollup emits — the only place where
      // pure annotations survive into dist (rollup strips them from transform/renderChunk output).
      generateBundle(_options, bundle) {
        for (const chunk of Object.values(bundle)) {
          if (chunk.type !== 'chunk' || !chunk.code.includes('styled')) continue;
          chunk.code = chunk.code.replace(
            /\b(styled(?:\.[a-zA-Z]\w*|\([^)]*\)(?:\.attrs\([^)]*\))?))`/g,
            '/*@__PURE__*/$1`'
          );
        }
      },
    },
    svgr(),
    // analyzer(),
    {
      name: 'meticulous-ui-post-build',
      closeBundle() {
        createIndexes(resolve(__dirname, 'dist/components'));
        createIndexes(resolve(__dirname, 'dist/cjs/components'), 'cjs');
        removeVirtualDir();
      },
    },
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false,
    target: 'es2018',
    minify: false,
    commonjsOptions: {
      transformMixedEsModules: false,
    },
    lib: {
      entry: buildEntries(__dirname),
      formats: ['es'],
    },
    rollupOptions: {
      treeshake: true,
      preserveEntrySignatures: 'strict',
      external: ['react', 'react-dom', 'react/jsx-runtime', 'styled-components', 'prop-types'],
      output: [
        {
          format: 'es',
          dir: 'dist',
          preserveModules: true,
          preserveModulesRoot: 'src',
          entryFileNames: '[name].js',
          chunkFileNames: 'chunks/[name]-[hash].js',
          assetFileNames: 'assets/[name].[ext]',
          exports: 'named',
          interop: 'auto',
        },
        {
          format: 'cjs',
          dir: 'dist/cjs',
          preserveModules: true,
          preserveModulesRoot: 'src',
          entryFileNames: '[name].cjs',
          chunkFileNames: 'chunks/[name]-[hash].cjs',
          exports: 'named',
          interop: 'auto',
        },
      ],
    },
  },
});
