import type { Metadata } from 'next';
import type { Game } from '@/lib/site';
import { siteConfig } from '@/lib/site';

interface SeoGuideContent {
  title: string;
  description: string;
  primaryKeyword?: string;
  lastUpdated?: string;
  heroImage?: string;
}

interface PageSeo {
  title: string;
  description: string;
  keywords: string[];
}

export const homeSeo: PageSeo = {
  title: 'Base64Pro - Game Guides, Walkthroughs & Launch Hubs',
  description:
    'Find release dates, walkthroughs, trophy routes, co-op answers, demo guides, and launch-week hubs for Directive 8020, Project: Mist, 007 First Light, and more.',
  keywords: [
    'game guides',
    'walkthroughs',
    'launch guides',
    'trophy guide',
    'Project Mist guide',
    'Directive 8020 guide',
    '007 First Light guide',
    'Coffee Talk Tokyo guide',
    'Thick As Thieves guide',
  ],
};

export const gameHubSeo: Record<string, PageSeo> = {
  'directive-8020': {
    title: 'Directive 8020 Guide Hub - Walkthrough, Trophies & Endings',
    description:
      'Directive 8020 guide hub with spoiler-aware walkthroughs, trophy routes, endings, choices, deaths, collectibles, save-everyone planning, and performance notes.',
    keywords: [
      'Directive 8020 guide',
      'Directive 8020 walkthrough',
      'Directive 8020 trophy guide',
      'Directive 8020 endings',
      'Directive 8020 choices',
      'Directive 8020 deaths',
      'Directive 8020 collectibles',
    ],
  },
  'project-mist': {
    title: 'Project: Mist Guide Hub - Release Date, Co-op & Survival',
    description:
      'Project: Mist guide hub for the May 19, 2026 Steam Early Access launch, demo facts, co-op questions, Gravity Gun, train base, creatures, crafting, and facilities.',
    keywords: [
      'Project Mist guide',
      'Project Mist release date',
      'Project Mist demo',
      'Project Mist multiplayer',
      'Project Mist co-op',
      'Project Mist Gravity Gun',
      'Project Mist train base',
    ],
  },
  'thick-as-thieves': {
    title: 'Thick As Thieves Guide Hub - Co-op, Stealth & PC Facts',
    description:
      'Thick As Thieves guide hub with release date, PC platform facts, solo and co-op campaign answers, stealth basics, contracts, gear, specs, and roadmap questions.',
    keywords: [
      'Thick As Thieves guide',
      'Thick As Thieves release date',
      'Thick As Thieves co-op',
      'Thick As Thieves stealth guide',
      'Thick As Thieves PC specs',
      'Thick As Thieves roadmap',
    ],
  },
  'coffee-talk-tokyo': {
    title: 'Coffee Talk Tokyo Guide Hub - Demo, Recipes & Characters',
    description:
      'Coffee Talk Tokyo guide hub with release date, platform facts, demo scope, save transfer questions, drink recipes, Tomodachill, characters, stencils, and Deluxe Edition details.',
    keywords: [
      'Coffee Talk Tokyo guide',
      'Coffee Talk Tokyo release date',
      'Coffee Talk Tokyo demo',
      'Coffee Talk Tokyo recipes',
      'Coffee Talk Tokyo characters',
      'Coffee Talk Tokyo Tomodachill',
      'Coffee Talk Tokyo Deluxe Edition',
    ],
  },
  '007-first-light': {
    title: '007 First Light Guide Hub - Editions, Spycraft & PC Specs',
    description:
      '007 First Light guide hub with release date, platform timing, preorder editions, beginner spycraft, stealth versus action, gadgets, missions, PC specs, and cast context.',
    keywords: [
      '007 First Light guide',
      '007 First Light release date',
      '007 First Light preorder',
      '007 First Light editions',
      '007 First Light spycraft',
      '007 First Light PC specs',
      '007 First Light gadgets',
    ],
  },
};

function normalizeText(value: string) {
  return value.replace(/\s+/g, ' ').trim();
}

function withoutGamePrefix(title: string, gameName: string) {
  const escapedName = gameName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return normalizeText(title.replace(new RegExp(`^${escapedName}:?\\s*`, 'i'), ''));
}

function fitDescription(description: string, fallback: string) {
  const normalized = normalizeText(description);
  const expanded = normalized.length >= 120 ? normalized : `${normalized} ${fallback}`;

  if (expanded.length <= 160) {
    return expanded;
  }

  const trimmed = expanded.slice(0, 157);
  const lastSpace = trimmed.lastIndexOf(' ');
  return `${trimmed.slice(0, lastSpace > 120 ? lastSpace : 157)}...`;
}

export function buildHomeMetadata(): Metadata {
  return {
    title: { absolute: homeSeo.title },
    description: homeSeo.description,
    keywords: homeSeo.keywords,
    alternates: {
      canonical: siteConfig.url,
    },
    openGraph: {
      title: homeSeo.title,
      description: homeSeo.description,
      url: siteConfig.url,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: homeSeo.title,
      description: homeSeo.description,
    },
  };
}

export function buildGameHubMetadata(game: Game): Metadata {
  const seo = gameHubSeo[game.slug] ?? {
    title: `${game.name} Guide Hub - Walkthroughs, Tips & Wiki`,
    description: fitDescription(
      game.description,
      `Find ${game.name} guides, walkthroughs, release facts, FAQs, and related game hub pages.`
    ),
    keywords: [
      `${game.name} guide`,
      `${game.name} walkthrough`,
      `${game.name} wiki`,
      `${game.name} tips`,
      ...game.tags,
    ],
  };

  return {
    title: { absolute: seo.title },
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical: `${siteConfig.url}/game/${game.slug}`,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `${siteConfig.url}/game/${game.slug}`,
      type: 'article',
      images: [{ url: game.heroImage, alt: `${game.name} guide hub key art` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: [game.heroImage],
    },
  };
}

export function buildGuideMetadata(game: Game, guideSlug: string, content: SeoGuideContent): Metadata {
  const cleanTitle = withoutGamePrefix(content.title, game.name);
  const title = `${game.name} ${cleanTitle} | Base64Pro`;
  const description = fitDescription(
    content.description,
    `Covers ${game.name} ${cleanTitle.toLowerCase()}, direct answers, tables, FAQs, and verification notes.`
  );
  const canonical = `${siteConfig.url}/game/${game.slug}/${guideSlug}`;
  const keywords = [
    content.primaryKeyword,
    `${game.name} ${cleanTitle}`,
    `${game.name} guide`,
    `${game.name} walkthrough`,
    cleanTitle,
    ...game.tags.map((tag) => `${game.name} ${tag}`),
  ].filter(Boolean) as string[];

  return {
    title: { absolute: title },
    description,
    keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'article',
      modifiedTime: content.lastUpdated,
      images: content.heroImage ? [{ url: content.heroImage, alt: content.title }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: content.heroImage ? [content.heroImage] : undefined,
    },
  };
}
