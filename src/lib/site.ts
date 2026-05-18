// Site configuration for base64pro.top
export const siteConfig = {
  name: 'Base64Pro',
  description: 'Ultimate Gaming Guides, Walkthroughs & Wiki - Your go-to source for comprehensive game guides, tips, and strategies.',
  url: 'https://base64pro.top',
  ogImage: '/og-image.png',
  links: {
    twitter: 'https://twitter.com/base64pro',
  },
  creator: 'Base64Pro Team',
};

export const games = [
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
    heroImage: '/games/directive-8020/hero.jpg',
    cardImage: '/games/directive-8020/card.jpg',
  },
  {
    id: 'project-mist',
    name: 'Project: Mist',
    slug: 'project-mist',
    steamId: '2383130',
    releaseDate: '2026-05-19',
    status: 'upcoming' as const,
    category: 'Survival',
    tags: ['Survival', 'Horror', 'Open World', 'Crafting'],
    description: 'Project: Mist is an Early Access open-world survival horror game from Chicken Launcher where you explore a remote island, use a Gravity Gun, build a moving train base, fight giant creatures, upgrade gear, test the current demo, and survive solo or in seamless 1-4 player co-op.',
    heroImage: '/games/project-mist/hero.jpg',
    cardImage: '/games/project-mist/card.jpg',
  },
  {
    id: 'thick-as-thieves',
    name: 'Thick As Thieves',
    slug: 'thick-as-thieves',
    steamId: '3341000',
    releaseDate: '2026-05-20',
    status: 'upcoming' as const,
    category: 'Stealth',
    tags: ['Stealth', 'Action', 'Co-op', 'Heist'],
    description: 'Thick As Thieves is a PC stealth-action heist game from OtherSide Entertainment where you play solo or with a partner in online co-op, take on contracts across Kilcairn, unlock gear through the Thieves Guild, and work through a focused introductory campaign.',
    heroImage: '/games/thick-as-thieves/hero.jpg',
    cardImage: '/games/thick-as-thieves/card.jpg',
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
    heroImage: '/games/coffee-talk-tokyo/hero.jpg',
    cardImage: '/games/coffee-talk-tokyo/card.jpg',
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
    heroImage: '/games/007-first-light/hero.jpg',
    cardImage: '/games/007-first-light/card.jpg',
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
  { name: 'Visual Novel', slug: 'visual-novel', description: 'Story-driven experiences' },
  { name: 'Action Adventure', slug: 'action-adventure', description: 'Epic journeys await' },
] as const;
