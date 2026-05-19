import type { Metadata } from 'next';
import { HomepagePortal, type HomeGameCard, type HomeGenreCard, type HomeGuideCard, type HomeUpdateCard } from '@/components/home/HomepagePortal';
import {
  directive8020Facts,
  directive8020GuideContent,
} from '@/lib/directive-8020';
import {
  firstLight007Facts,
  firstLight007GuideContent,
} from '@/lib/first-light-007';
import {
  coffeeTalkTokyoFacts,
  coffeeTalkTokyoGuideContent,
} from '@/lib/coffee-talk-tokyo';
import {
  projectMistFacts,
  projectMistGuideContent,
} from '@/lib/project-mist';
import {
  paralivesFacts,
  paralivesGuideContent,
} from '@/lib/paralives';
import {
  farmingSimulator26Facts,
  farmingSimulator26GuideContent,
} from '@/lib/farming-simulator-26';
import { categories, games } from '@/lib/site';
import {
  thickAsThievesFacts,
  thickAsThievesGuideContent,
} from '@/lib/thick-as-thieves';
import {
  zeroParadesFacts,
  zeroParadesGuideContent,
} from '@/lib/zero-parades-for-dead-spies';
import { buildHomeMetadata } from '@/lib/seo';

export const metadata: Metadata = buildHomeMetadata();

function leadMedia<T extends { heroImage: string; heroImageAlt: string; sectionMedia: Record<string, { image: string; alt: string }> }>(
  guide: T
) {
  const firstSection = Object.values(guide.sectionMedia)[0];

  return {
    image: firstSection?.image ?? guide.heroImage,
    alt: firstSection?.alt ?? guide.heroImageAlt,
  };
}

const platformBySlug = {
  'directive-8020': directive8020Facts.platforms,
  'project-mist': projectMistFacts.platforms,
  paralives: paralivesFacts.platforms,
  'farming-simulator-26': farmingSimulator26Facts.platforms,
  'thick-as-thieves': thickAsThievesFacts.platforms,
  'coffee-talk-tokyo': coffeeTalkTokyoFacts.platforms,
  '007-first-light': firstLight007Facts.platforms,
  'zero-parades-for-dead-spies': zeroParadesFacts.platforms,
} as const;

const storeUrlBySlug = {
  'directive-8020': directive8020Facts.steamUrl,
  'project-mist': projectMistFacts.steamUrl,
  paralives: paralivesFacts.steamUrl,
  'farming-simulator-26': farmingSimulator26Facts.officialUrl,
  'thick-as-thieves': thickAsThievesFacts.steamUrl,
  'coffee-talk-tokyo': coffeeTalkTokyoFacts.steamUrl,
  '007-first-light': firstLight007Facts.steamUrl,
  'zero-parades-for-dead-spies': zeroParadesFacts.steamUrl,
} as const;

const homepageImageBySlug = {
  'directive-8020': '/games/directive-8020/homepage-feature.png',
  'project-mist': '/games/project-mist/homepage-feature.png',
  paralives: '/games/paralives/homepage-feature.jpg',
  'farming-simulator-26': '/games/farming-simulator-26/homepage-feature.webp',
  'thick-as-thieves': '/games/thick-as-thieves/homepage-feature.png',
  'coffee-talk-tokyo': '/games/coffee-talk-tokyo/homepage-feature.png',
  '007-first-light': '/games/007-first-light/homepage-feature.png',
  'zero-parades-for-dead-spies': '/games/zero-parades-for-dead-spies/homepage-feature.jpg',
} as const;

const heroPriority = [
  'farming-simulator-26',
  'project-mist',
  'zero-parades-for-dead-spies',
  'paralives',
  'directive-8020',
  'thick-as-thieves',
  'coffee-talk-tokyo',
  '007-first-light',
] as const;

const gamesBySlug = Object.fromEntries(games.map((game) => [game.slug, game])) as Record<
  (typeof games)[number]['slug'],
  (typeof games)[number]
>;

const homeGames: HomeGameCard[] = heroPriority.map((slug) => {
  const game = gamesBySlug[slug];

  return {
    id: game.id,
    name: game.name,
    slug: game.slug,
    status: game.status,
    category: game.category,
    releaseDate: game.releaseDate,
    description: game.description,
    heroImage: homepageImageBySlug[slug],
    cardImage: homepageImageBySlug[slug],
    tags: [...game.tags],
    platforms: platformBySlug[slug],
    storeUrl: storeUrlBySlug[slug],
  };
});

const directiveTrophy = directive8020GuideContent['trophy-guide'];
const directiveWalkthrough = directive8020GuideContent.walkthrough;
const projectMistFirstSteps = projectMistGuideContent['first-steps-survival-guide'];
const paralivesRelease = paralivesGuideContent['release-date-early-access-guide'];
const farmingRelease = farmingSimulator26GuideContent['release-date-platforms-guide'];
const thickAsThievesStealth = thickAsThievesGuideContent['beginner-stealth-guide'];
const coffeeTalkDemo = coffeeTalkTokyoGuideContent['demo-length-save-transfer-guide'];
const firstLightPreorder = firstLight007GuideContent['preorder-editions-guide'];
const firstLightPcSpecs = firstLight007GuideContent['pc-specs-performance-guide'];
const projectMistCoop = projectMistGuideContent['multiplayer-coop-guide'];
const zeroParadesComparison = zeroParadesGuideContent['is-it-like-disco-elysium-guide'];
const zeroParadesRelease = zeroParadesGuideContent['release-date-platforms-language-guide'];

const directiveTrophyLead = leadMedia(directiveTrophy);
const directiveWalkthroughLead = leadMedia(directiveWalkthrough);
const projectMistFirstStepsLead = leadMedia(projectMistFirstSteps);
const paralivesReleaseLead = leadMedia(paralivesRelease);
const farmingReleaseLead = leadMedia(farmingRelease);
const thickAsThievesStealthLead = leadMedia(thickAsThievesStealth);
const coffeeTalkDemoLead = leadMedia(coffeeTalkDemo);
const firstLightPreorderLead = leadMedia(firstLightPreorder);
const firstLightPcLead = leadMedia(firstLightPcSpecs);
const projectMistCoopLead = leadMedia(projectMistCoop);
const zeroParadesComparisonLead = leadMedia(zeroParadesComparison);
const zeroParadesReleaseLead = leadMedia(zeroParadesRelease);

const popularGuides: HomeGuideCard[] = [
  {
    href: '/game/zero-parades-for-dead-spies/is-it-like-disco-elysium-guide',
    title: 'ZERO PARADES vs Disco Elysium',
    game: 'ZERO PARADES: For Dead Spies',
    tag: 'Comparison',
    description:
      'A careful pre-release read on what looks familiar, what is different, and why this should not be treated as Disco Elysium 2.',
    image: zeroParadesComparisonLead.image,
    imageAlt: zeroParadesComparisonLead.alt,
    verificationStatus: zeroParadesComparison.verificationStatus,
    timeToRead: zeroParadesComparison.timeToRead,
    updatedAt: zeroParadesComparison.lastUpdated,
  },
  {
    href: '/game/directive-8020/trophy-guide',
    title: 'Directive 8020 Trophy Roadmap',
    game: 'Directive 8020',
    tag: 'Platinum Route',
    description:
      'Missables, cleanup order, and first-run planning for players who want a route before replay fatigue sets in.',
    image: directiveTrophyLead.image,
    imageAlt: directiveTrophyLead.alt,
    verificationStatus: directiveTrophy.verificationStatus,
    timeToRead: directiveTrophy.timeToRead,
    updatedAt: directiveTrophy.lastUpdated,
  },
  {
    href: '/game/directive-8020/walkthrough',
    title: 'Directive 8020 Walkthrough',
    game: 'Directive 8020',
    tag: 'Spoiler-light',
    description:
      'Episode flow, QTE awareness, and safe early-route guidance without forcing a full spoiler dump on first-run players.',
    image: directiveWalkthroughLead.image,
    imageAlt: directiveWalkthroughLead.alt,
    verificationStatus: directiveWalkthrough.verificationStatus,
    timeToRead: directiveWalkthrough.timeToRead,
    updatedAt: directiveWalkthrough.lastUpdated,
  },
  {
    href: '/game/project-mist/first-steps-survival-guide',
    title: 'Project: Mist First Steps',
    game: 'Project: Mist',
    tag: 'Launch Prep',
    description:
      'Transcript-backed starter route for chest loot, the first axe, flashlight use, food setup, and the whale warning.',
    image: projectMistFirstStepsLead.image,
    imageAlt: projectMistFirstStepsLead.alt,
    verificationStatus: projectMistFirstSteps.verificationStatus,
    timeToRead: projectMistFirstSteps.timeToRead,
    updatedAt: projectMistFirstSteps.lastUpdated,
  },
  {
    href: '/game/paralives/release-date-early-access-guide',
    title: 'Paralives Early Access Facts',
    game: 'Paralives',
    tag: 'Release Guide',
    description:
      'Price, Mac support, no-console status, and the split between launch systems and later roadmap features.',
    image: paralivesReleaseLead.image,
    imageAlt: paralivesReleaseLead.alt,
    verificationStatus: paralivesRelease.verificationStatus,
    timeToRead: paralivesRelease.timeToRead,
    updatedAt: paralivesRelease.lastUpdated,
  },
  {
    href: '/game/thick-as-thieves/beginner-stealth-guide',
    title: 'Thick As Thieves Stealth Basics',
    game: 'Thick As Thieves',
    tag: 'Beginner Guide',
    description:
      'A cleaner first read on sightlines, co-op role separation, and how not to turn an immersive sim into a brawl.',
    image: thickAsThievesStealthLead.image,
    imageAlt: thickAsThievesStealthLead.alt,
    verificationStatus: thickAsThievesStealth.verificationStatus,
    timeToRead: thickAsThievesStealth.timeToRead,
    updatedAt: thickAsThievesStealth.lastUpdated,
  },
  {
    href: '/game/coffee-talk-tokyo/demo-length-save-transfer-guide',
    title: 'Coffee Talk Tokyo Demo Scope',
    game: 'Coffee Talk Tokyo',
    tag: 'Demo Guide',
    description:
      'What the demo really covers, what carries confidence before launch, and what still should not be oversold.',
    image: coffeeTalkDemoLead.image,
    imageAlt: coffeeTalkDemoLead.alt,
    verificationStatus: coffeeTalkDemo.verificationStatus,
    timeToRead: coffeeTalkDemo.timeToRead,
    updatedAt: coffeeTalkDemo.lastUpdated,
  },
  {
    href: '/game/007-first-light/preorder-editions-guide',
    title: '007 First Light Editions Check',
    game: '007 First Light',
    tag: 'Buying Guide',
    description:
      'A store-page grounded read on editions, preorder logic, and which rewards actually matter before you spend.',
    image: firstLightPreorderLead.image,
    imageAlt: firstLightPreorderLead.alt,
    verificationStatus: firstLightPreorder.verificationStatus,
    timeToRead: firstLightPreorder.timeToRead,
    updatedAt: firstLightPreorder.lastUpdated,
  },
];

const recentUpdates: HomeUpdateCard[] = [
  {
    href: '/game/zero-parades-for-dead-spies/release-date-platforms-language-guide',
    title: 'ZERO PARADES PC Release Facts',
    game: 'ZERO PARADES: For Dead Spies',
    badge: 'May 21',
    updatedAt: zeroParadesRelease.lastUpdated,
    description:
      'PC release timing, Steam/Epic/GOG storefronts, PS5 2026 wording, and the launch checks that still need hands-on verification.',
    image: zeroParadesReleaseLead.image,
    imageAlt: zeroParadesReleaseLead.alt,
  },
  {
    href: '/game/farming-simulator-26/release-date-platforms-guide',
    title: 'Farming Simulator 26 Release Facts',
    game: 'Farming Simulator 26',
    badge: 'New',
    updatedAt: farmingRelease.lastUpdated,
    description:
      'Switch and mobile platforms, launch date, and the official feature set now that release day is here.',
    image: farmingReleaseLead.image,
    imageAlt: farmingReleaseLead.alt,
  },
  {
    href: '/game/project-mist/multiplayer-coop-guide',
    title: 'Project: Mist Co-op and Save Questions',
    game: 'Project: Mist',
    badge: 'Updated',
    updatedAt: projectMistCoop.lastUpdated,
    description:
      'Quick answers for solo play, seamless 1-4 player co-op, and which save behaviors still need live Early Access testing.',
    image: projectMistCoopLead.image,
    imageAlt: projectMistCoopLead.alt,
  },
  {
    href: '/game/007-first-light/pc-specs-performance-guide',
    title: '007 First Light PC Specs',
    game: '007 First Light',
    badge: 'Tech',
    updatedAt: firstLightPcSpecs.lastUpdated,
    description:
      'SSD, RAM, DLSS, path tracing, and launch-week performance questions in one buyer-facing page.',
    image: firstLightPcLead.image,
    imageAlt: firstLightPcLead.alt,
  },
  {
    href: '/game/thick-as-thieves/release-date-platforms-guide',
    title: 'Thick As Thieves Release Facts',
    game: 'Thick As Thieves',
    badge: 'Launch Week',
    updatedAt: thickAsThievesGuideContent['release-date-platforms-guide'].lastUpdated,
    description:
      'Release timing, PC-only status, co-op wording, and the details that players keep searching before launch.',
    image: leadMedia(thickAsThievesGuideContent['release-date-platforms-guide']).image,
    imageAlt: leadMedia(thickAsThievesGuideContent['release-date-platforms-guide']).alt,
  },
  {
    href: '/game/coffee-talk-tokyo/release-date-platforms-guide',
    title: 'Coffee Talk Tokyo Release Hub',
    game: 'Coffee Talk Tokyo',
    badge: 'Pre-release',
    updatedAt: coffeeTalkTokyoGuideContent['release-date-platforms-guide'].lastUpdated,
    description:
      'Platform set, demo scope, storefront extras, and a cleaner answer center for launch-week readers.',
    image: leadMedia(coffeeTalkTokyoGuideContent['release-date-platforms-guide']).image,
    imageAlt: leadMedia(coffeeTalkTokyoGuideContent['release-date-platforms-guide']).alt,
  },
];

const genreCards: HomeGenreCard[] = categories.map((category) => ({
  name: category.name,
  slug: category.slug,
  description: category.description,
  count: games.filter((game) => game.category === category.name).length,
  featuredGame:
    games.find((game) => game.category === category.name)?.name ?? 'View guides',
}));

export default function HomePage() {
  return (
    <HomepagePortal
      games={homeGames}
      popularGuides={popularGuides}
      recentUpdates={recentUpdates}
      genres={genreCards}
    />
  );
}
