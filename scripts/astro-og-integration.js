import { generateAllOGImages } from './generate-og-images.js';

export default function ogImageIntegration() {
  return {
    name: 'og-image-generator',
    hooks: {
      'astro:build:start': async () => {
        console.log('🎨 Generating OG images during build...');
        try {
          await generateAllOGImages();
          console.log('✅ OG images generated successfully!');
        } catch (error) {
          console.error('❌ Failed to generate OG images:', error);
          // Don't fail the build if OG generation fails
        }
      }
    }
  };
}