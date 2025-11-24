import fs from 'fs';
import path from 'path';

// ---- CONFIG ----
const INPUT_DIR = './svg';
const ROOT_OUTPUT_DIR = './src/components';
const ICON_COMPONENTS_DIR = path.join(ROOT_OUTPUT_DIR, 'Icons');
const generatedComponentNames = [];

// ---- Ensure folder exists ----
function setupDirectories() {
  if (!fs.existsSync(ICON_COMPONENTS_DIR)) {
    fs.mkdirSync(ICON_COMPONENTS_DIR, { recursive: true });
  }
}

// Convert "arrow-left.svg" → "ArrowLeft"
function toComponentName(filename) {
  const base = path.basename(filename, '.svg');
  return base
    .split(/[^a-zA-Z0-9]/)
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join('');
}

// ---- Extract + clean SVG ----
function extractSvg(svgContent) {
  const viewBoxMatch = svgContent.match(/viewBox=["']([^"']*)["']/i);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';

  let svg = svgContent;

  // Remove width/height
  svg = svg.replace(/\s(width|height)=["'][^"']*["']/gi, '');

  // Remove style + id + class
  svg = svg.replace(/\s(class|id)=["'][^"']*["']/gi, '');
  svg = svg.replace(/<style[\s\S]*?<\/style>/gi, '');

  // ---- REMOVE ONLY REAL COLORS, KEEP "none" ----
  svg = svg.replace(/\sfill=["'](?!none)([^"']*)["']/gi, ' fill="CURRENT_FILL"');
  svg = svg.replace(/\sstroke=["'](?!none)([^"']*)["']/gi, ' stroke="CURRENT_STROKE"');

  // Get inner content
  const innerMatch = svg.match(/<svg[^>]*>([\s\S]*)<\/svg>/i);
  const innerContent = innerMatch ? innerMatch[1].trim() : '';

  return { viewBox, innerContent };
}

// ---- Replace placeholders with props ----
function applyDynamicColor(svg) {
  return svg
    .replace(/fill="CURRENT_FILL"/g, 'fill={color}')
    .replace(/stroke="CURRENT_STROKE"/g, 'stroke={color}');
}

const KEYWORDS = ['truck', 'email'];

function convertAttributesToReact(svg, file) {
  const hasOutlined = file.includes('outlined');
  const hasKeyword = KEYWORDS.some((word) => file.includes(word)); // TODO: fix hack

  let copied = svg
    .replace(/fill-rule=/gi, 'fillRule=')
    .replace(/clip-rule=/gi, 'clipRule=')
    .replace(/stroke-width=/gi, 'strokeWidth=')
    .replace(/stroke-linecap=/gi, 'strokeLinecap=')
    .replace(/stroke-linejoin=/gi, 'strokeLinejoin=')
    .replace(/stroke-miterlimit=/gi, 'strokeMiterlimit=');

  if (hasOutlined || hasKeyword) {
    copied = copied.replace(/<path(?![^>]*\bfill=)/g, '<path fill={color}');
  }

  return copied;
}

// ---- MAIN ----
function generateComponents() {
  setupDirectories();

  const files = fs.readdirSync(INPUT_DIR).filter((f) => f.endsWith('.svg'));

  files.forEach((file) => {
    const svgPath = path.join(INPUT_DIR, file);
    const name = toComponentName(file);
    const componentDir = path.join(ICON_COMPONENTS_DIR, name);

    generatedComponentNames.push(name);
    if (!fs.existsSync(componentDir)) fs.mkdirSync(componentDir);

    const svgContent = fs.readFileSync(svgPath, 'utf8');
    const { viewBox, innerContent } = extractSvg(svgContent);

    const finalSvg = convertAttributesToReact(applyDynamicColor(innerContent), file);

    const componentCode = `const ${name} = ({ size = 24, color = "currentColor", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="${viewBox}"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    ${finalSvg}
  </svg>
);

export default ${name};
`;

    fs.writeFileSync(path.join(componentDir, `${name}.jsx`), componentCode);

    fs.writeFileSync(
      path.join(componentDir, 'index.js'),
      `import ${name} from './${name}.jsx';\nexport default ${name};\n`
    );
  });

  // Root index file
  const imports = generatedComponentNames
    .map((n) => `import ${n} from './${n}/${n}.jsx';`)
    .join('\n');

  const exportsBlock = generatedComponentNames.map((n) => `  ${n},`).join('\n');

  const indexFile = `
${imports}

export {
${exportsBlock}
};

export default {
${exportsBlock}
};
`;

  fs.writeFileSync(path.join(ICON_COMPONENTS_DIR, 'index.js'), indexFile);

  console.log(`✅ Generated ${generatedComponentNames.length} icons`);
}

generateComponents();
