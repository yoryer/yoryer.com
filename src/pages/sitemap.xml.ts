import { getCollection } from "astro:content";

export async function GET() {
  const posts = await getCollection("blog");
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Homepage -->
  <url>
    <loc>https://yoryer.com/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- Spanish Homepage -->
  <url>
    <loc>https://yoryer.com/es/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- Blog Posts -->
  ${posts.map(post => `
  <url>
    <loc>https://yoryer.com/blog/${post.slug}</loc>
    <lastmod>${post.data.date.toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`).join('')}
</urlset>`;

  return new globalThis.Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}