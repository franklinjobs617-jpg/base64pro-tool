// Site configuration for base64pro.top
export const siteConfig = {
  name: 'Base64Pro',
  description:
    'Game guides, walkthroughs, release dates, trophy routes, co-op answers, demo guides, Early Access explainers, and launch-week hubs for new and upcoming games.',
  url: 'https://base64pro.top',
  ogImage: '/og-image.png',
  links: {
    twitter: 'https://twitter.com/base64pro',
    reddit: 'https://www.reddit.com/r/enjoy4game/',
  },
  creator: 'Base64Pro Team',
};

export const games = [
  {
    id: 'paralives',
    name: 'Paralives',
    slug: 'paralives',
    steamId: '1118520',
    releaseDate: '2026-05-25',
    status: 'upcoming' as const,
    category: 'Simulation',
    tags: ['Simulation', 'Life Sim', 'Open World', 'Sandbox'],
    description: 'Paralives is an upcoming Early Access life simulation game where you build homes with gridless tools, create Parafolks in the Paramaker, explore an open-world town, share creations through Steam Workshop, and track roadmap features like pets, cars, and town editing.',
    heroImage: '/games/paralives/hero.webp',
    cardImage: '/games/paralives/card.webp',
  },
  {
    id: 'farming-simulator-26',
    name: 'Farming Simulator 26',
    slug: 'farming-simulator-26',
    steamId: '',
    releaseDate: '2026-05-19',
    status: 'upcoming' as const,
    category: 'Simulation',
    tags: ['Simulation', 'Farming', 'Casual', 'Family Friendly'],
    description: 'Farming Simulator 26 is the portable-focused farming game from GIANTS Software for Nintendo Switch and mobile, featuring two maps, 120-plus machines, 15 crops, livestock, production chains, GPS guidance, and a new challenge system.',
    heroImage: '/games/farming-simulator-26/hero.webp',
    cardImage: '/games/farming-simulator-26/card.webp',
  },
  {
    id: 'directive-8020',
    name: 'Directive 8020',
    slug: 'directive-8020',
    steamId: '2255370',
    releaseDate: '2026-05-12',
    status: 'released' as const,
    category: 'Horror',
    tags: ['Horror', 'Adventure', 'Narrative', 'Sci-Fi'],
    description: 'A sci-fi survival horror game from Supermassive Games set aboard the Cassiopeia, where an alien organism can mimic its prey and every Turning Point can change who survives.',
    heroImage: '/games/directive-8020/hero.webp',
    cardImage: '/games/directive-8020/card.webp',
  },
  {
    id: 'project-mist',
    name: 'Project: Mist',
    slug: 'project-mist',
    steamId: '2383130',
    releaseDate: '2026-05-19',
    status: 'released' as const,
    category: 'Survival',
    tags: ['Survival', 'Horror', 'Open World', 'Crafting'],
    description: 'Project: Mist is a launch-day Early Access open-world survival horror game from Chicken Launcher where you explore a remote island, use a Gravity Gun, build a moving train base, fight giant creatures, upgrade gear, test the current demo, and survive solo or in seamless 1-4 player co-op.',
    heroImage: '/games/project-mist/hero.webp',
    cardImage: '/games/project-mist/card.webp',
  },
  {
    id: 'thick-as-thieves',
    name: 'Thick As Thieves',
    slug: 'thick-as-thieves',
    steamId: '3341000',
    releaseDate: '2026-05-20',
    status: 'released' as const,
    category: 'Stealth',
    tags: ['Stealth', 'Action', 'Co-op', 'Heist'],
    description: 'Thick As Thieves is a $4.99 PC-first stealth-action heist game from OtherSide Entertainment where you play solo or with one online co-op partner, tackle 16 contracts across 2 replayable maps, compare SPIDER and CHAMELEON thief styles, unlock 6 gear pieces, and judge a focused introductory campaign without treating it as a live-service launch.',
    heroImage: '/games/thick-as-thieves/hero.webp',
    cardImage: '/games/thick-as-thieves/card.webp',
  },
  {
    id: 'coffee-talk-tokyo',
    name: 'Coffee Talk Tokyo',
    slug: 'coffee-talk-tokyo',
    steamId: '3161220',
    releaseDate: '2026-05-21',
    status: 'upcoming' as const,
    category: 'Visual Novel',
    tags: ['Visual Novel', 'Simulation', 'Casual', 'Story Rich'],
    description: 'Coffee Talk Tokyo is the new late-night cafe story game from Chorus Worldwide Games and Toge Productions, blending drink making, Tomodachill social reading, sprinkle stencils, and heartfelt Tokyo conversations across humans and yokai.',
    heroImage: '/games/coffee-talk-tokyo/hero.webp',
    cardImage: '/games/coffee-talk-tokyo/card.webp',
  },
  {
    id: 'zero-parades-for-dead-spies',
    name: 'ZERO PARADES: For Dead Spies',
    slug: 'zero-parades-for-dead-spies',
    steamId: '2863680',
    releaseDate: '2026-05-21',
    status: 'upcoming' as const,
    category: 'RPG',
    tags: ['RPG', 'CRPG', 'Story Rich', 'Choices Matter'],
    description: 'ZERO PARADES: For Dead Spies is an espionage CRPG from ZA/UM, listed for a May 21, 2026 PC release through Steam, Epic Games Store, and GOG, with PS5 planned in 2026 and systems built around skills, dice rolls, Dramatic Encounters, Tactical View, Pressures, and failure-forward choices.',
    heroImage: '/games/zero-parades-for-dead-spies/hero.webp',
    cardImage: '/games/zero-parades-for-dead-spies/card.webp',
  },
  {
    id: '007-first-light',
    name: '007 First Light',
    slug: '007-first-light',
    steamId: '3768760',
    releaseDate: '2026-05-27',
    status: 'upcoming' as const,
    category: 'Action Adventure',
    tags: ['Action', 'Adventure', 'Stealth', 'Spy'],
    description: '007 First Light is an espionage action-adventure origin story from IO Interactive A/S. Follow a young James Bond through MI6 training, spycraft, gadgets, stealth, action, and the path toward earning the number.',
    heroImage: '/games/007-first-light/hero.webp',
    cardImage: '/games/007-first-light/card.webp',
  },
] as const;

export type Game = typeof games[number];
export type GameStatus = 'released' | 'upcoming';

export function getGameBySlug(slug: string): Game | undefined {
  return games.find((game) => game.slug === slug);
}

export function getGamesByCategory(category: string): Game[] {
  return games.filter((game) => game.category === category);
}

export function getReleasedGames(): Game[] {
  return games.filter((game) => game.status === 'released');
}

export function getUpcomingGames(): Game[] {
  return games.filter((game) => game.status === 'upcoming');
}

export const categories = [
  { name: 'Horror', slug: 'horror', description: 'Survive the nightmares' },
  { name: 'Survival', slug: 'survival', description: 'Craft, build, survive' },
  { name: 'Stealth', slug: 'stealth', description: 'Move in shadows' },
  { name: 'Simulation', slug: 'simulation', description: 'Build, manage, and shape living systems' },
  { name: 'Visual Novel', slug: 'visual-novel', description: 'Story-driven experiences' },
  { name: 'RPG', slug: 'rpg', description: 'Choices, builds, stories, and consequences' },
  { name: 'Action Adventure', slug: 'action-adventure', description: 'Epic journeys await' },
] as const;
