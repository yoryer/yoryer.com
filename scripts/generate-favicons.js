import sharp from 'sharp';
import pngToIco from 'png-to-ico';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateFavicons() {
  const inputSvg = path.join(__dirname, '../public/favicon.svg');
  const outputDir = path.join(__dirname, '../public');
  
  console.log('Generating favicons from SVG...');
  
  // Read SVG and convert to PNG buffer first
  const svgBuffer = await fs.readFile(inputSvg);
  const pngBuffer = await sharp(svgBuffer)
    .resize(512, 512)
    .png()
    .toBuffer();
  
  // Generate PNG versions
  const sizes = [
    { size: 16, name: 'favicon-16x16.png' },
    { size: 32, name: 'favicon-32x32.png' },
    { size: 180, name: 'apple-touch-icon.png' },
    { size: 192, name: 'android-chrome-192x192.png' },
    { size: 512, name: 'android-chrome-512x512.png' }
  ];
  
  for (const { size, name } of sizes) {
    await sharp(pngBuffer)
      .resize(size, size)
      .png()
      .toFile(path.join(outputDir, name));
    console.log(`✓ Generated ${name}`);
  }
  
  // Generate ICO file using png-to-ico
  const icoSizes = [16, 32, 48];
  const pngPaths = [];
  
  for (const size of icoSizes) {
    const tempPath = path.join(outputDir, `temp-${size}.png`);
    await sharp(pngBuffer)
      .resize(size, size)
      .png()
      .toFile(tempPath);
    pngPaths.push(tempPath);
  }
  
  const ico = await pngToIco(pngPaths);
  await fs.writeFile(path.join(outputDir, 'favicon.ico'), ico);
  
  // Clean up temp files
  for (const tempPath of pngPaths) {
    await fs.unlink(tempPath);
  }
  
  console.log('✓ Generated favicon.ico');
  
  console.log('All favicons generated successfully!');
}

generateFavicons().catch(console.error);