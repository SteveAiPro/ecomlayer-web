import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog-data';
import { supportedLocales } from '@/lib/i18n';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ecomlayer.ai';
  const routes: MetadataRoute.Sitemap = [];

  // 1. Root & 4 Core Landing Pages
  const corePages = ['', '/replace-text', '/translate-image', '/remove-logo', '/white-background', '/pricing', '/blog', '/privacy', '/terms'];

  corePages.forEach((page) => {
    routes.push({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: page === '' ? 1.0 : 0.9,
    });
  });

  // 2. i18n Locales
  supportedLocales
    .filter((loc) => loc !== 'en')
    .forEach((locale) => {
      routes.push({
        url: `${baseUrl}/${locale}`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.85,
      });
    });

  // 3. 10 Technical Guides
  blogPosts.forEach((post) => {
    routes.push({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'weekly',
      priority: 0.8,
    });
  });

  return routes;
}
