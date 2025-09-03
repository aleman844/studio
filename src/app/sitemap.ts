
import { MetadataRoute } from 'next'
import { products, blogPosts } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
  const languages = ['en', 'es'];

  const staticPages = [
    '',
    '/products',
    '/about',
    '/blog',
    '/contact',
    '/tools/seo',
    '/tools/article-generator',
  ];

  const staticUrls = staticPages.flatMap(page => 
    languages.map(lang => ({
      url: `${siteUrl}/${lang}${page}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: page === '' ? 1 : 0.8,
    }))
  );

  const productUrls = products.flatMap(product => 
    languages.map(lang => ({
        url: `${siteUrl}/${lang}/products/${product.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7
    }))
  );

  const blogUrls = blogPosts.flatMap(post =>
    languages.map(lang => ({
        url: `${siteUrl}/${lang}/blog/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9
    }))
  );

  return [
    ...staticUrls,
    ...productUrls,
    ...blogUrls,
  ];
}
