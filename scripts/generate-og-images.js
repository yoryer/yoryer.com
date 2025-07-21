/* eslint-env node */
import fs from 'fs';
import path from 'path';
import { createCanvas, loadImage, registerFont } from 'canvas';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

// Register Poppins font if available
try {
  // Try to register Poppins font from system or Google Fonts
  // This is optional and will fallback to Arial if not available
  registerFont(path.join(process.cwd(), 'public/fonts/Poppins-Medium.ttf'), { family: 'Poppins', weight: '500' });
} catch (error) {
  console.log('Poppins font not found, using fallback font', error);
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROJECT_ROOT = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.join(PROJECT_ROOT, 'public');
const CONTENT_DIR = path.join(PROJECT_ROOT, 'src', 'content', 'blog');
const OG_OUTPUT_DIR = path.join(PUBLIC_DIR, 'og');

// OG image dimensions (recommended: 1200x630)
const OG_WIDTH = 1200;
const OG_HEIGHT = 630;

// Safe area for text (centered)
const SAFE_AREA_WIDTH = 1000;
const SAFE_AREA_HEIGHT = 500;
const SAFE_AREA_X = (OG_WIDTH - SAFE_AREA_WIDTH) / 2;
const SAFE_AREA_Y = (OG_HEIGHT - SAFE_AREA_HEIGHT) / 2;

// Additional safe area to avoid photo on the right
const PHOTO_SAFE_AREA = 360;

async function ensureOutputDir() {
  if (!fs.existsSync(OG_OUTPUT_DIR)) {
    fs.mkdirSync(OG_OUTPUT_DIR, { recursive: true });
  }
}

function wrapText(context, text, maxWidth) {
  const words = text.split(' ');
  const lines = [];
  let currentLine = words[0];

  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    const width = context.measureText(currentLine + ' ' + word).width;
    if (width < maxWidth) {
      currentLine += ' ' + word;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  }
  lines.push(currentLine);
  return lines;
}

async function generateOGImage(title, subtitle, outputPath, fontSize = 48) {
  try {
    // Load base image
    const baseImagePath = path.join(PUBLIC_DIR, 'og-base.png');
    const baseImage = await loadImage(baseImagePath);
    
    // Create canvas
    const canvas = createCanvas(OG_WIDTH, OG_HEIGHT);
    const ctx = canvas.getContext('2d');
    
    // Draw base image (resize to fit)
    ctx.drawImage(baseImage, 0, 0, OG_WIDTH, OG_HEIGHT);
    
    // Configure text styling
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    
    // Title styling
    ctx.font = `500 ${fontSize}px Poppins, Arial, sans-serif`;
    ctx.fillStyle = '#D7ECFF';
    
    // Text area width excluding photo safe area
    const textAreaWidth = SAFE_AREA_WIDTH - PHOTO_SAFE_AREA;
    
    // Wrap title text
    const titleLines = wrapText(ctx, title, textAreaWidth);
    
    // Calculate bottom left positioning
    const totalTextHeight = (titleLines.length * fontSize * 1.2) + (subtitle ? 60 : 0);
    let currentY = SAFE_AREA_Y + SAFE_AREA_HEIGHT - totalTextHeight - 56; // 40px + 16px extra padding from bottom
    
    // Draw title
    titleLines.forEach(line => {
      ctx.fillText(line, SAFE_AREA_X, currentY); // No extra left padding
      currentY += fontSize * 1.2;
    });
    
    // Draw subtitle if provided
    if (subtitle) {
      currentY += 20;
      ctx.font = '32px Arial, sans-serif';
      ctx.fillStyle = '#e91e63'; // Pink color from your theme
      
      const subtitleLines = wrapText(ctx, subtitle, textAreaWidth);
      subtitleLines.forEach(line => {
        ctx.fillText(line, SAFE_AREA_X, currentY); // No extra left padding
        currentY += 40;
      });
    }
    
    // Convert canvas to buffer and save as PNG
    const buffer = canvas.toBuffer('image/png');
    
    // Use sharp to optimize the image
    await sharp(buffer)
      .png({ quality: 90 })
      .toFile(outputPath);
    
    console.log(`Generated OG image: ${outputPath}`);
    
  } catch (error) {
    console.error(`Error generating OG image for "${title}":`, error);
  }
}

async function parseBlogPost(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
    
    if (!frontmatterMatch) {
      throw new Error('No frontmatter found');
    }
    
    const frontmatter = frontmatterMatch[1];
    const titleMatch = frontmatter.match(/title:\s*["'](.+?)["']/);
    const descriptionMatch = frontmatter.match(/description:\s*["'](.+?)["']/);
    const langMatch = frontmatter.match(/lang:\s*["'](.+?)["']/);
    const slugMatch = frontmatter.match(/slug:\s*["'](.+?)["']/);
    
    return {
      title: titleMatch ? titleMatch[1] : null,
      description: descriptionMatch ? descriptionMatch[1] : null,
      lang: langMatch ? langMatch[1] : 'en',
      slug: slugMatch ? slugMatch[1] : path.basename(filePath, '.md')
    };
  } catch (error) {
    console.error(`Error parsing ${filePath}:`, error);
    return null;
  }
}

async function generateBlogOGImages() {
  await ensureOutputDir();
  
  try {
    const blogFiles = fs.readdirSync(CONTENT_DIR).filter(file => file.endsWith('.md'));
    
    for (const file of blogFiles) {
      const filePath = path.join(CONTENT_DIR, file);
      const blogPost = await parseBlogPost(filePath);
      
      if (blogPost && blogPost.title) {
        const outputPath = path.join(OG_OUTPUT_DIR, `${blogPost.slug}.png`);
        await generateOGImage(
          blogPost.title,
          null, // You can use blogPost.description if you want
          outputPath
        );
      }
    }
  } catch (error) {
    console.error('Error generating blog OG images:', error);
  }
}

async function generateMainOGImages() {
  await ensureOutputDir();
  
  // Load translations
  const enTranslations = JSON.parse(fs.readFileSync(path.join(PROJECT_ROOT, 'src/i18n/en.json'), 'utf-8'));
  const esTranslations = JSON.parse(fs.readFileSync(path.join(PROJECT_ROOT, 'src/i18n/es.json'), 'utf-8'));
  
  // Combine description2, description3, description4 for each language
  const enText = `${enTranslations.hero.description2} ${enTranslations.hero.description3} ${enTranslations.hero.description4}`;
  const esText = `${esTranslations.hero.description2} ${esTranslations.hero.description3} ${esTranslations.hero.description4}`;
  
  // Generate English version
  const enOutputPath = path.join(OG_OUTPUT_DIR, 'main-en.png');
  await generateOGImage(enText, null, enOutputPath, 32);
  
  // Generate Spanish version
  const esOutputPath = path.join(OG_OUTPUT_DIR, 'main-es.png');
  await generateOGImage(esText, null, esOutputPath, 32);
  
  // Also create a default main.png (English version)
  const mainOutputPath = path.join(OG_OUTPUT_DIR, 'main.png');
  await generateOGImage(enText, null, mainOutputPath, 32);
}

async function main() {
  console.log('🎨 Generating OG images...');
  
  await generateMainOGImages();
  await generateBlogOGImages();
  
  console.log('✅ OG image generation complete!');
}

// Run if called directly
if (process.argv[1] === __filename) {
  main().catch(console.error);
}

export { generateMainOGImages, generateBlogOGImages, main as generateAllOGImages };