import { MetadataRoute } from 'next';
import { games, siteConfig } from '@/lib/site';
import { directive8020GuideOrder } from '@/lib/directive-8020';
import { projectMistGuideOrder } from '@/lib/project-mist';
import { firstLight007GuideOrder } from '@/lib/first-light-007';
import { coffeeTalkTokyoGuideOrder } from '@/lib/coffee-talk-tokyo';
import { lorainGuideOrder } from '@/lib/lorain';
import { thickAsThievesGuideOrder } from '@/lib/thick-as-thieves';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/category`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/category/horror`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/category/platformer`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/category/survival`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/category/stealth`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/category/visual-novel`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/category/action-adventure`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ];

  // Game hub pages
  const gamePages: MetadataRoute.Sitemap = games.map((game) => ({
    url: `${baseUrl}/game/${game.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Game guide pages (if they exist)
  const guidePages: MetadataRoute.Sitemap = [];
  const gameGuides: Record<string, string[]> = {
    'directive-8020': [...directive8020GuideOrder],
    lorain: [...lorainGuideOrder],
    'project-mist': [...projectMistGuideOrder],
    'thick-as-thieves': [...thickAsThievesGuideOrder],
    'coffee-talk-tokyo': [...coffeeTalkTokyoGuideOrder],
    '007-first-light': [...firstLight007GuideOrder],
  };

  Object.entries(gameGuides).forEach(([gameSlug, guides]) => {
    guides.forEach((guideSlug) => {
      guidePages.push({
        url: `${baseUrl}/game/${gameSlug}/${guideSlug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      });
    });
  });

  return [...staticPages, ...gamePages, ...guidePages];
}
