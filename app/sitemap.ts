import type { MetadataRoute } from 'next';
import { business } from '@/lib/business';
import { categories } from '@/data/content';
import { guideArticles } from '@/data/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = business.website;

  const staticPages = [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1 },
    { url: `${base}/products`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${base}/faqs`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${base}/guides`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  ];

  const categoryPages = categories.map((c) => ({
    url: `${base}/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const guidePages = guideArticles.map((a) => ({
    url: `${base}/guides/${a.slug}`,
    lastModified: new Date(a.updated),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...categoryPages, ...guidePages];
}
