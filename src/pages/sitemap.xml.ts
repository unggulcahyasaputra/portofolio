import { getCollection } from 'astro:content';

export async function GET() {
  const posts = await getCollection('blog');
  const experiences = await getCollection('experiences');
  const ventures = await getCollection('ventures');

  const site = 'https://unggul.top';

  const pages = [
    '',
    '/about',
    '/experience',
    '/ventures',
    '/skills',
    '/certifications',
    '/blog',
    '/contact',
    '/resume',
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
  <url>
    <loc>${site}${page}</loc>
    <changefreq>${page === '' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
  ${posts.map(post => `
  <url>
    <loc>${site}/blog/${post.slug}</loc>
    <lastmod>${post.data.publishedAt}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}