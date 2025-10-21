/**
 * generate-icons.js
 *
 * Converts all SVG files in ./svg into React components inside ./src/components/Icons,
 * each inside its own folder with a component file.
 * Main index.js exports all icons with named exports.
 *
 * Usage: node scripts/generate-icons.js
 */

import fs from 'fs';
import path from 'path';

const ROOT_SVG_DIR = path.resolve('svg');
const OUT_DIR = path.resolve('src/components/Icons');
const MAIN_INDEX = path.join(OUT_DIR, 'index.js');

fs.mkdirSync(OUT_DIR, { recursive: true });

// helper: file name → PascalCase
const toPascalCase = (str) =>
  str
    .replace(/[-_](.)/g, (_, c) => c.toUpperCase())
    .replace(/^(.)/, (c) => c.toUpperCase())
    .replace(/\.svg$/i, '');

// read all SVG files
const svgFiles = fs.readdirSync(ROOT_SVG_DIR).filter((f) => f.endsWith('.svg'));

for (const file of svgFiles) {
  const name = toPascalCase(file);
  const componentName = `${name}Icon`;

  const svgContent = fs.readFileSync(path.join(ROOT_SVG_DIR, file), 'utf8');

  // Extract original viewBox
  const viewBoxMatch = svgContent.match(/viewBox="([^"]+)"/);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';

  // Clean inner SVG
  let innerSvg = svgContent
    .replace(/<\?xml[^>]*>/g, '')
    .replace(/<!DOCTYPE[^>]*>/g, '')
    .replace(/<!--.*?-->/gs, '')
    .replace(/<svg[^>]*>/, '')
    .replace(/<\/svg>/, '')
    .replace(/<path(?=\w)/g, '<path ')
    .replace(/\b(fill|stroke)="(?!none)([^"]*)"/g, '$1={color}')
    .replace(/\b(fill|stroke)='(?!none)([^']*)'/g, '$1={color}')
    .trim();

  // each icon in its own folder
  const iconDir = path.join(OUT_DIR, name);
  fs.mkdirSync(iconDir, { recursive: true });

  // component file
  const componentFile = path.join(iconDir, `${name}.jsx`);

  const component = `
import React from 'react';

const ${componentName} = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="${viewBox}"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    ${innerSvg}
  </svg>
);

export default ${componentName};
`;

  fs.writeFileSync(componentFile, component);
}

// --- Generate main index.js with named exports + default export ---

let mainIndexImports = [];
let mainIndexExports = [];

for (const file of svgFiles) {
  const name = toPascalCase(file); // e.g., ArrowUp
  mainIndexImports.push(`import ${name} from './${name}/${name}.jsx';`);
  mainIndexExports.push(`  ${name},`);
}

const mainIndexContent = `${mainIndexImports.join('\n')}

export {
${mainIndexExports.join('\n')}
};

export default {
${mainIndexExports.join('\n')}
};
`;

fs.writeFileSync(MAIN_INDEX, mainIndexContent, 'utf8');

console.log(`✅ Generated main index.js with ${svgFiles.length} icons and default export`);

fs.writeFileSync(MAIN_INDEX, mainIndexContent);

console.log(`✅ Generated ${svgFiles.length} icons in ${OUT_DIR}`);
