import { MetadataRoute } from 'next';
import { games, siteConfig } from '@/lib/site';
import { directive8020GuideContent, directive8020GuideOrder } from '@/lib/directive-8020';
import { projectMistGuideContent, projectMistGuideOrder } from '@/lib/project-mist';
import { paralivesGuideContent, paralivesGuideOrder } from '@/lib/paralives';
import { farmingSimulator26GuideContent, farmingSimulator26GuideOrder } from '@/lib/farming-simulator-26';
import { firstLight007GuideContent, firstLight007GuideOrder } from '@/lib/first-light-007';
import { coffeeTalkTokyoGuideContent, coffeeTalkTokyoGuideOrder } from '@/lib/coffee-talk-tokyo';
import { thickAsThievesGuideContent, thickAsThievesGuideOrder } from '@/lib/thick-as-thieves';
import { zeroParadesGuideContent, zeroParadesGuideOrder } from '@/lib/zero-parades-for-dead-spies';

type DatedGuideContent = Record<string, { lastUpdated: string }>;

function toDate(value: string) {
  return new Date(`${value}T00:00:00Z`);
}

function latestGuideDate(order: readonly string[], content: DatedGuideContent) {
  return order.reduce((latest, slug) => {
    const candidate = content[slug]?.lastUpdated;
    if (!candidate) return latest;

    return toDate(candidate) > toDate(latest) ? candidate : latest;
  }, '2026-05-12');
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const staticDates = {
    home: '2026-05-19',
    about: '2026-05-19',
    contact: '2026-05-12',
    privacy: '2026-05-12',
    terms: '2026-05-12',
    category: '2026-05-19',
  } as const;
  const gameUpdatedDates: Record<string, string> = {
    'directive-8020': latestGuideDate(directive8020GuideOrder, directive8020GuideContent),
    'project-mist': latestGuideDate(projectMistGuideOrder, projectMistGuideContent),
    paralives: latestGuideDate(paralivesGuideOrder, paralivesGuideContent),
    'farming-simulator-26': latestGuideDate(farmingSimulator26GuideOrder, farmingSimulator26GuideContent),
    'thick-as-thieves': latestGuideDate(thickAsThievesGuideOrder, thickAsThievesGuideContent),
    'coffee-talk-tokyo': latestGuideDate(coffeeTalkTokyoGuideOrder, coffeeTalkTokyoGuideContent),
    '007-first-light': latestGuideDate(firstLight007GuideOrder, firstLight007GuideContent),
    'zero-parades-for-dead-spies': latestGuideDate(zeroParadesGuideOrder, zeroParadesGuideContent),
  };

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: toDate(staticDates.home),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: toDate(staticDates.about),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: toDate(staticDates.contact),
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: toDate(staticDates.privacy),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: toDate(staticDates.terms),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/category`,
      lastModified: toDate(staticDates.category),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/category/horror`,
      lastModified: toDate(staticDates.category),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/category/survival`,
      lastModified: toDate(staticDates.category),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/category/stealth`,
      lastModified: toDate(staticDates.category),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/category/simulation`,
      lastModified: toDate(staticDates.category),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/category/visual-novel`,
      lastModified: toDate(staticDates.category),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/category/action-adventure`,
      lastModified: toDate(staticDates.category),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/category/rpg`,
      lastModified: toDate(staticDates.category),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ];

  // Game hub pages
  const gamePages: MetadataRoute.Sitemap = games.map((game) => ({
    url: `${baseUrl}/game/${game.slug}`,
    lastModified: toDate(gameUpdatedDates[game.slug] ?? staticDates.home),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Game guide pages (if they exist)
  const guidePages: MetadataRoute.Sitemap = [];
  const gameGuides: Record<string, string[]> = {
    'directive-8020': [...directive8020GuideOrder],
    'project-mist': [...projectMistGuideOrder],
    paralives: [...paralivesGuideOrder],
    'farming-simulator-26': [...farmingSimulator26GuideOrder],
    'thick-as-thieves': [...thickAsThievesGuideOrder],
    'coffee-talk-tokyo': [...coffeeTalkTokyoGuideOrder],
    '007-first-light': [...firstLight007GuideOrder],
    'zero-parades-for-dead-spies': [...zeroParadesGuideOrder],
  };
  const gameGuidesContent: Record<string, DatedGuideContent> = {
    'directive-8020': directive8020GuideContent,
    'project-mist': projectMistGuideContent,
    paralives: paralivesGuideContent,
    'farming-simulator-26': farmingSimulator26GuideContent,
    'thick-as-thieves': thickAsThievesGuideContent,
    'coffee-talk-tokyo': coffeeTalkTokyoGuideContent,
    '007-first-light': firstLight007GuideContent,
    'zero-parades-for-dead-spies': zeroParadesGuideContent,
  };

  Object.entries(gameGuides).forEach(([gameSlug, guides]) => {
    guides.forEach((guideSlug) => {
      guidePages.push({
        url: `${baseUrl}/game/${gameSlug}/${guideSlug}`,
        lastModified: toDate(gameGuidesContent[gameSlug]?.[guideSlug]?.lastUpdated ?? gameUpdatedDates[gameSlug] ?? staticDates.home),
        changeFrequency: 'weekly',
        priority: 0.7,
      });
    });
  });

  return [...staticPages, ...gamePages, ...guidePages];
}
