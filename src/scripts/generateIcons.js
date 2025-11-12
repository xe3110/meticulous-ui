import fs from 'fs';
import path from 'path';

// --- Configuration ---
const INPUT_DIR = './svg';
// Base folder where the root index.js and the icon folders will go
const ROOT_OUTPUT_DIR = './src/components';
// Nested folder for the individual icon directories (e.g., .../Icons/HomeIcon)
const ICON_COMPONENTS_DIR = path.join(ROOT_OUTPUT_DIR, 'Icons');

// This array will store the names of all generated components for the root index.js
const generatedComponentNames = [];

// --- Utility Functions ---

// Creates directories recursively
function setupDirectories() {
  if (!fs.existsSync(ICON_COMPONENTS_DIR)) {
    fs.mkdirSync(ICON_COMPONENTS_DIR, { recursive: true });
    console.log(`Created output directory: ${ICON_COMPONENTS_DIR}`);
  }
}

// Converts a filename (e.g., 'my-icon.svg') to a component name (e.g., 'MyIcon')
function toComponentName(filename) {
  const baseName = path.basename(filename, path.extname(filename));
  // Split by non-alphanumeric (like hyphen or underscore) and capitalize each part
  return baseName
    .split(/[^a-zA-Z0-9]/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

// Extracts viewBox and cleans/extracts inner content (paths/shapes) from SVG
function extractPaths(svgContent) {
  const viewBoxMatch = svgContent.match(/viewBox=["']([^"']*)["']/i);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';

  let cleanedContent = svgContent;

  // 1. Remove all <style> blocks (Fixes JSX parsing error and hardcoded colors)
  cleanedContent = cleanedContent.replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '');

  // 2. Remove class and id attributes (They reference the removed styles)
  cleanedContent = cleanedContent.replace(/\s(class|id)=["'][^"']*["']/gi, ' ');

  // 3. Critically, remove all hardcoded fill attributes from inner elements.
  // This prevents shapes from defaulting to black fill.
  cleanedContent = cleanedContent.replace(/\sfill=["'](?:[^"']*)["']/gi, ' ');

  // 4. Remove hardcoded stroke attributes from inner elements.
  // This allows the outer stroke={color} to control line colors universally.
  cleanedContent = cleanedContent.replace(/\sstroke=["'](?:[^"']*)["']/gi, ' ');

  // 5. Extract the inner content of the <svg> tag
  const innerContentMatch = cleanedContent.match(/<svg[^>]*>([\s\S]*)<\/svg>/i);
  const innerContent = innerContentMatch ? innerContentMatch[1].trim() : '';

  return { viewBox, innerContent };
}

// --- Main Script Execution ---

function generateComponents() {
  setupDirectories();
  console.log(`\nReading SVG files from: ${INPUT_DIR}`);

  try {
    const files = fs.readdirSync(INPUT_DIR);
    const svgFiles = files.filter((file) => path.extname(file).toLowerCase() === '.svg');

    if (svgFiles.length === 0) {
      console.log(`No SVG files found in ${INPUT_DIR}.`);
      return;
    }

    svgFiles.forEach((svgFile) => {
      const svgPath = path.join(INPUT_DIR, svgFile);
      const componentName = toComponentName(svgFile);
      const componentDir = path.join(ICON_COMPONENTS_DIR, componentName);

      // Add to the list for the root index file
      generatedComponentNames.push(componentName);

      // 1. Read and extract SVG data
      const svgContent = fs.readFileSync(svgPath, 'utf8');
      const { viewBox, innerContent } = extractPaths(svgContent);

      if (!innerContent) {
        console.warn(`Skipping ${svgFile}: Could not find inner content/paths after cleaning.`);
        return;
      }

      // Create the individual component's folder
      if (!fs.existsSync(componentDir)) {
        fs.mkdirSync(componentDir);
      }

      console.log({ componentName });

      // 2. Create component.jsx (The actual React component)
      const componentJsxContent = `
import grey from '../../../colors/grey';\n
/**
 * A dynamic icon component generated from ${svgFile}.
 * @param {{ size?: number, color?: string, className?: string }} props 
 */
const ${componentName} = ({ size = 24, color = grey.m500, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="${viewBox}"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
      ${
        componentName.includes('Filled')
          ? `
        fill={color}
        stroke="none"
        strokeWidth="1"
      `
          : `
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      `
      }
    >
      ${innerContent}
    </svg>
  );
};

export default ${componentName};
`;
      fs.writeFileSync(path.join(componentDir, `${componentName}.jsx`), componentJsxContent);

      // 3. Create index.js (Exports the component from its folder)
      const indexJsContent = `import ${componentName} from './${componentName}.jsx';\n\n`;
      const exportContent = `export default ${componentName};\n`;
      fs.writeFileSync(path.join(componentDir, 'index.js'), indexJsContent + exportContent);

      console.log(`✅ Generated component folder: ${componentName}`);
    });

    // 4. Create the root index.js file for bulk exports
    const rootIndexFilePath = path.join(ICON_COMPONENTS_DIR, 'index.js');
    const rootImports = generatedComponentNames
      // Note the path: it's relative from ROOT_OUTPUT_DIR to the component folder
      .map((name) => `import ${name} from './${name}/${name}';`)
      .join('\n');
    const rootExports = generatedComponentNames
      // Note the path: it's relative from ROOT_OUTPUT_DIR to the component folder
      .map((name) => `  ${name},`)
      .join('\n');

    const namedExportsBlock = `export {\n${rootExports}\n};\n`;
    const defaultExportBlock = `\nexport default {\n${rootExports}\n};\n`;

    fs.writeFileSync(
      rootIndexFilePath,
      rootImports + '\n\n' + namedExportsBlock + defaultExportBlock
    );

    console.log(`\n✨ Successfully generated ${generatedComponentNames.length} components.`);
    console.log(`📄 Created root export file: ${rootIndexFilePath}`);
  } catch (err) {
    console.error(`\n🚨 An error occurred: ${err.message}`);
    if (err.code === 'ENOENT' && err.path.includes(INPUT_DIR)) {
      console.error(`Please ensure the input folder '${INPUT_DIR}' exists and contains SVGs.`);
    }
  }
}

generateComponents();
