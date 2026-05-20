import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, ExternalLink, Globe, Trophy, Map, BookOpen, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Breadcrumbs, type BreadcrumbItem } from '@/components/Breadcrumbs';
import { GameHubPortalPage } from '@/components/game/GameHubPortalPage';
import { games, getGameBySlug, siteConfig } from '@/lib/site';
import {
  directive8020Facts,
  directive8020GuideContent,
  directive8020GuideOrder,
  directive8020HubContent,
} from '@/lib/directive-8020';
import {
  projectMistFacts,
  projectMistGuideContent,
  projectMistGuideOrder,
  projectMistHubContent,
} from '@/lib/project-mist';
import {
  paralivesFacts,
  paralivesGuideContent,
  paralivesGuideOrder,
  paralivesHubContent,
} from '@/lib/paralives';
import {
  farmingSimulator26Facts,
  farmingSimulator26GuideContent,
  farmingSimulator26GuideOrder,
  farmingSimulator26HubContent,
} from '@/lib/farming-simulator-26';
import {
  firstLight007Facts,
  firstLight007GuideContent,
  firstLight007GuideOrder,
  firstLight007HubContent,
} from '@/lib/first-light-007';
import {
  coffeeTalkTokyoFacts,
  coffeeTalkTokyoGuideContent,
  coffeeTalkTokyoGuideOrder,
  coffeeTalkTokyoHubContent,
} from '@/lib/coffee-talk-tokyo';
import {
  thickAsThievesFacts,
  thickAsThievesGuideContent,
  thickAsThievesGuideOrder,
  thickAsThievesHubContent,
} from '@/lib/thick-as-thieves';
import {
  zeroParadesFacts,
  zeroParadesGuideContent,
  zeroParadesGuideOrder,
  zeroParadesHubContent,
} from '@/lib/zero-parades-for-dead-spies';
import { buildGameHubMetadata } from '@/lib/seo';

interface GamePageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static paths for all games
export async function generateStaticParams() {
  return games.map((game) => ({
    slug: game.slug,
  }));
}

// Generate metadata for each game page
export async function generateMetadata({ params }: GamePageProps): Promise<Metadata> {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) {
    return {
      title: 'Game Not Found',
    };
  }

  return buildGameHubMetadata(game);
}

// Game-specific content data
const gameContent: Record<string, {
  overview: string;
  features: string[];
  guides: { title: string; description: string; slug: string }[];
  tips: string[];
  faq: { question: string; answer: string }[];
}> = {
  'directive-8020': {
    overview: `Directive 8020 is the latest entry in The Dark Pictures Anthology from Supermassive Games, the studio behind Until Dawn and The Quarry. Released on May 12, 2025, this sci-fi survival horror takes the series to deep space for the first time, and it might just be their most ambitious narrative experiment yet.

The setup is classic sci-fi horror: Earth is dying, and humanity's last hope lies 12 light-years away on Tau Ceti f. The colonial starship Cassiopeia was supposed to establish a new home. But when the crew arrives, they discover they're not alone. An alien organism has infected the ship, and it can perfectly mimic any living being. Your crewmates could be your allies—or deadly impostors.

What makes Directive 8020 special is the Turning Points system. Unlike previous games where choices felt binary, here your decisions cascade through interconnected systems. Trust matters. Suspicion spreads. And with 44 potential death scenes across the five playable characters, every choice carries real weight. The game tracks your relationships, suspicions, and secrets, weaving them into a narrative that feels genuinely personal.

Fans of The Thing and Alien will find plenty to love here. The claustrophobic corridors of the Cassiopeia, the paranoia of not knowing who to trust, the desperate struggle for survival—it's all executed with Supermassive's signature cinematic flair. Hollywood actress Lashana Lynch (The Woman King, Bob Marley: One Love) brings gravitas to the role of "Young," a pioneering astronaut that adds star power to an already impressive production.`,
    features: [
      'Five playable characters with 44 potential death scenes',
      'Revolutionary Turning Points system with cascading consequences',
      'Alien organism that can mimic any crew member',
      'Trust and suspicion mechanics that affect story outcomes',
      'Multiple endings based on who survives and your choices',
      'Movie Night mode for up to 5 players locally',
      'Starring Lashana Lynch as astronaut "Young"',
    ],
    guides: [
      {
        title: 'Platinum & Trophy Guide',
        description: 'Complete walkthrough for all trophies and achievements. Minimum playthroughs required, difficulty tips, and step-by-step instructions.',
        slug: 'trophy-guide-walkthrough',
      },
      {
        title: 'Save All Crew - Choices Guide',
        description: 'How to keep all five crew members alive. Every Turning Point explained with the right decisions.',
        slug: 'save-all-crew-choices',
      },
      {
        title: 'All Collectibles, Dolls & Secrets',
        description: 'Find every doll, O Death secret, and data tape. Chapter-by-chapter locations with screenshots.',
        slug: 'all-collectibles-dolls-secrets',
      },
      {
        title: 'All Endings Guide',
        description: 'How to unlock all endings including the secret ending.',
        slug: 'all-endings-guide',
      },
      {
        title: 'All Deaths Guide',
        description: 'How to trigger all 44 death scenes for the completionist.',
        slug: 'all-deaths-guide',
      },
      {
        title: 'Wedge Tool & Scanner Guide',
        description: 'Master the utility tools for survival. Stealth tips and environment interactions.',
        slug: 'tools-guide',
      },
      {
        title: 'Survivor vs Explorer Mode',
        description: 'Understanding the difference between game modes and which to choose for your playstyle.',
        slug: 'game-modes-guide',
      },
      {
        title: 'Best Ending Guide',
        description: 'How to achieve the optimal ending for your playthrough.',
        slug: 'best-ending-guide',
      },
    ],
    tips: [
      'Pay attention to character behaviors—subtle changes might indicate infection',
      'The Turning Points chart reveals how your choices connect',
      'QTE timing is tighter than previous games—stay focused',
      'Trust is earned through actions, not just dialogue choices',
      'Check every room thoroughly—secrets and dolls are everywhere',
      'Some deaths can only be triggered by specific failure conditions',
    ],
    faq: [
      {
        question: 'How many endings does Directive 8020 have?',
        answer: 'The game features multiple distinct endings based on which characters survive and the cumulative effect of your choices throughout the story.',
      },
      {
        question: 'How long is the game?',
        answer: 'A single playthrough takes 6-8 hours. Completing all content including all endings and collectibles can take 15-20 hours.',
      },
      {
        question: 'Can you save everyone in Directive 8020?',
        answer: 'Yes, it is possible to save all five characters, but it requires careful decision-making throughout the entire game.',
      },
      {
        question: 'Is there online multiplayer?',
        answer: 'The game features Movie Night mode for local play with up to 5 players, but does not have online multiplayer.',
      },
      {
        question: 'How many dolls are there to collect?',
        answer: 'There are multiple hidden dolls scattered throughout the Cassiopeia. Finding all of them unlocks special content.',
      },
      {
        question: 'Do choices from previous Dark Pictures games matter?',
        answer: 'No, Directive 8020 is a standalone story with no connections to previous entries in the anthology.',
      },
    ],
  },
  'project-mist': {
    overview: `Project: Mist is an ambitious Early Access open-world survival horror listed for May 19, 2026 on Steam. Set on a mysterious island teeming with colossal creatures, this game promises to blend the base-building depth of survival games with genuine horror encounters.

What's got players excited is the sheer scope of survival mechanics. You're not just fighting to stay alive—you're establishing bases, researching the island's mysteries, and developing weapons powerful enough to take down creatures the size of buildings. The gravity gun mechanic adds a unique twist to both combat and exploration.

The demo already showcases impressive creature design and atmosphere. Giant beasts roam the landscape, and players can choose to engage, evade, or observe. The crafting system extends beyond basic survival gear to siege weapons and traps, suggesting deep strategic gameplay for those who want to tackle the island's threats head-on.`,
    features: [
      'Open-world survival horror with giant creatures',
      'Deep base-building and defense mechanics',
      'Gravity gun for combat and puzzle-solving',
      'Farming, cooking, and resource management',
      'Multiple approaches to encounters (fight, flee, or observe)',
      'Research system to uncover island secrets',
    ],
    guides: [
      {
        title: 'Beginner Survival Guide',
        description: 'Everything you need to survive your first days on the island.',
        slug: 'beginner-survival-guide',
      },
      {
        title: 'Release Date & Platforms',
        description: 'Steam release date, Early Access status, platforms, and buying advice.',
        slug: 'release-date-platforms-guide',
      },
      {
        title: 'Multiplayer & Co-op Guide',
        description: 'Online co-op facts, group roles, save questions, and launch-week verification.',
        slug: 'multiplayer-coop-guide',
      },
      {
        title: 'Gravity Gun Guide',
        description: 'Known Gravity Gun uses, combat planning, and limits that need testing.',
        slug: 'gravity-gun-guide',
      },
    ],
    tips: [
      'Scout areas before building—creature migration routes matter',
      'The gravity gun can move resources as well as enemies',
      'Keep multiple escape routes from your base',
      'Nighttime is more dangerous; plan accordingly',
      'Research unlocks new crafting recipes',
    ],
    faq: [
      {
        question: 'Is Project: Mist multiplayer?',
        answer: 'The game supports single-player with planned cooperative multiplayer features.',
      },
      {
        question: 'How big is the map?',
        answer: 'The island features multiple distinct biomes with hours of exploration content.',
      },
      {
        question: 'Can you kill the giant creatures?',
        answer: 'Yes, with proper preparation and weapons, even the largest creatures can be hunted.',
      },
      {
        question: 'What happens if your base is destroyed?',
        answer: 'You can rebuild, but losing resources means starting over in that area.',
      },
    ],
  },
  'thick-as-thieves': {
    overview: `Thick As Thieves is the stealth-action heist game that caught everyone's attention at TGA 2024. Helmed by legendary designer Warren Spector, this title promises a return to immersive sim gameplay where player choice drives the experience.

Set in an alternative 1910s metropolis where magic and industry coexist, the game drops you into a world of heists, conspiracies, and moral choices. What makes Thick As Thieves special is its commitment to player agency—every mission can be approached multiple ways, and the world reacts to your choices.

Originally announced as PvPvE, the developers have since pivoted to focus on single-player and co-op experiences, allowing for deeper narrative and more refined stealth mechanics. The May 20, 2025 release is positioned as an "introductory campaign" with plans for continued content updates.`,
    features: [
      'Immersive sim gameplay with player choice',
      'Alternative 1910s setting with magic elements',
      'Single-player and co-op heist missions',
      'Multiple approach options for every objective',
      'Dynamic AI that adapts to your playstyle',
      'Rich narrative with branching storylines',
    ],
    guides: [
      {
        title: 'Stealth Fundamentals',
        description: 'Master the art of staying unseen.',
        slug: 'stealth-fundamentals',
      },
      {
        title: 'Walkthrough: All Missions',
        description: 'Complete walkthrough for every heist.',
        slug: 'all-missions-walkthrough',
      },
      {
        title: 'Best Tools & Gadgets',
        description: 'Equipment guide for different playstyles.',
        slug: 'best-tools-gadgets',
      },
      {
        title: 'Hidden Collectibles',
        description: 'Find every secret and collectible in the game.',
        slug: 'hidden-collectibles',
      },
    ],
    tips: [
      'Patience is key—rushing leads to detection',
      'Use environmental distractions to create openings',
      'Learn guard patrol patterns before making moves',
      'The magic system offers creative solutions',
      'Save before risky maneuvers',
    ],
    faq: [
      {
        question: 'Is there PvP?',
        answer: 'The game has shifted focus to single-player and co-op, with PvP elements reduced or removed.',
      },
      {
        question: 'How long is the campaign?',
        answer: 'The introductory campaign offers 8-12 hours of content, with more planned post-launch.',
      },
      {
        question: 'Can I play stealth-only?',
        answer: 'Yes, the game supports ghost runs where you never alert anyone.',
      },
      {
        question: 'Is there character customization?',
        answer: 'Players can customize their thief with various tools and abilities.',
      },
    ],
  },
  'coffee-talk-tokyo': {
    overview: `Coffee Talk Tokyo is currently lined up for May 21, 2026 and pushes the series into a Tokyo summer setting with a stronger social layer, new customers, and a more tactile drink presentation flow.

Official material already confirms meaningful upgrades: Tomodachill now has clickable hashtags, the demo covers the full Day 1 and the early part of Day 2, cold drinks are in, and sprinkle stencils give latte art a more structured finishing step.

The right pre-release coverage is not fake completeness. It is a trustworthy answer center for release details, demo scope, new systems, the publicly named cast, and the edition differences readers can actually verify today.`,
    features: [
      'Tokyo summer late-night cafe setting',
      'Tomodachill social browsing with clickable hashtags',
      'New drink options including cold beverages',
      'Sprinkle stencils, milk, and etching for presentation',
      'Official demo covers Day 1 and the early part of Day 2',
      'AJ Jeremy returns for the soundtrack',
    ],
    guides: [
      {
        title: 'Release Date & Platforms Guide',
        description: 'Current release date, platform set, Steam features, and storefront-specific extras.',
        slug: 'release-date-platforms-guide',
      },
      {
        title: 'Demo Length & Save Transfer Guide',
        description: 'What the demo actually includes and what still needs launch verification.',
        slug: 'demo-length-save-transfer-guide',
      },
      {
        title: 'Beginner Night Shift Guide',
        description: 'How to approach a first run without flattening the story into checklist play.',
        slug: 'beginner-night-shift-guide',
      },
      {
        title: 'Tomodachill Social Guide',
        description: 'Why the social layer matters and how to use it well.',
        slug: 'tomodachill-social-guide',
      },
    ],
    tips: [
      'Start with release date and demo pages if you are deciding whether to buy at launch.',
      'Use short notes for customer cues, drink clues, and follow-up markers.',
      'Check Tomodachill deliberately between scenes rather than ignoring it or over-scanning it.',
      'Treat pre-release full recipe lists as unverified unless they show tested results.',
      'Buy Deluxe only if the Seattle prologue or extra soundtrack genuinely matters to you.',
    ],
    faq: [
      {
        question: 'When does Coffee Talk Tokyo release?',
        answer: 'Coffee Talk Tokyo is currently scheduled for May 21, 2026.',
      },
      {
        question: 'How much of Coffee Talk Tokyo is in the demo?',
        answer: 'Official messaging says the demo includes the complete Day 1 and the early part of Day 2.',
      },
      {
        question: 'Does Coffee Talk Tokyo have cold drinks?',
        answer: 'Yes. Official demo notes say new drink options include cold beverages.',
      },
      {
        question: 'What is Tomodachill?',
        answer: 'Tomodachill is the in-game social network used to better understand customers and their stories.',
      },
    ],
  },
  '007-first-light': {
    overview: `007 First Light is IO Interactive's ambitious take on the James Bond origin story, releasing May 27, 2026. Coming from the studio behind the Hitman series, this spy thriller promises to let players earn their 00 status through a blend of stealth, action, and espionage.

What's exciting is IO's pedigree with sandbox-style gameplay. Expect missions that offer multiple approaches—go in quiet with gadgets and disguises, or take a more direct route when subtlety fails. The story follows a young Bond as he's recruited into the 00 program and faces a conspiracy that threatens everything.

Early previews show a game that respects Bond's legacy while carving its own identity. This isn't just another licensed game—it's a full-budget action adventure from a studio that knows how to make players feel like professional operatives.`,
    features: [
      'Origin story of James Bond',
      'IO Interactive sandbox-style mission design',
      'Blend of stealth, action, and espionage',
      'Gadgets and signature Bond equipment',
      'Globe-trotting locations',
      'Choices that affect mission outcomes',
    ],
    guides: [
      {
        title: 'Release Date & Platforms',
        description: 'Release date, platforms, Switch 2 timing, and Steam feature facts.',
        slug: 'release-date-platforms-guide',
      },
      {
        title: 'Preorder & Editions',
        description: 'Edition decisions, Deluxe upgrade questions, and IOI Account reward checks.',
        slug: 'preorder-editions-guide',
      },
      {
        title: 'Beginner Spycraft Guide',
        description: 'Spoiler-safe guide to stealth, action, gadgets, and first-run thinking.',
        slug: 'beginner-spycraft-guide',
      },
      {
        title: 'Stealth vs Action Guide',
        description: 'Best approaches for different playstyles.',
        slug: 'stealth-vs-action-guide',
      },
    ],
    tips: [
      'Observe before acting—intel is your best weapon',
      'Use the environment for creative takedowns',
      'Save your gadgets for when you really need them',
      'Multiple paths exist for every objective',
      'Your choices influence later story developments',
    ],
    faq: [
      {
        question: 'Is this connected to the movies?',
        answer: '007 First Light tells an original story, separate from the film continuity.',
      },
      {
        question: 'Will there be multiplayer?',
        answer: 'The game focuses on a single-player campaign experience.',
      },
      {
        question: 'How does stealth work?',
        answer: 'IO\'s Hitman experience shines through with disguise mechanics and environmental opportunities.',
      },
      {
        question: 'Is Daniel Craig voicing Bond?',
        answer: 'The game features a new voice actor for this original take on the character.',
      },
    ],
  },
};

interface HubGuideImage {
  image: string;
  imageAlt: string;
}

const hubGuideImages: Record<string, Record<string, HubGuideImage>> = {
  'directive-8020': {
    'trophy-guide': {
      image: '/games/directive-8020/homepage/trophy-guide.webp',
      imageAlt: 'Directive 8020 - Horror game trophy guide screenshot',
    },
    walkthrough: {
      image: '/games/directive-8020/homepage/walkthrough.webp',
      imageAlt: 'Directive 8020 - Horror game walkthrough screenshot',
    },
    'all-endings-guide': {
      image: '/games/directive-8020/homepage/all-endings-guide.webp',
      imageAlt: 'Directive 8020 - Horror game all endings guide screenshot',
    },
    'choices-guide': {
      image: '/games/directive-8020/homepage/choices-guide.webp',
      imageAlt: 'Directive 8020 - Horror game choices and consequences guide screenshot',
    },
    'save-everyone-guide': {
      image: '/games/directive-8020/homepage/save-everyone-guide.webp',
      imageAlt: 'Directive 8020 - Horror game save everyone guide screenshot',
    },
    'collectibles-guide': {
      image: '/games/directive-8020/homepage/collectibles-guide.webp',
      imageAlt: 'Directive 8020 - Horror game collectibles guide screenshot',
    },
    'all-deaths-guide': {
      image: '/games/directive-8020/homepage/all-deaths-guide.webp',
      imageAlt: 'Directive 8020 - Horror game all deaths guide screenshot',
    },
    'multiplayer-performance-guide': {
      image: '/games/directive-8020/homepage/multiplayer-performance-guide.webp',
      imageAlt: 'Directive 8020 - Horror game multiplayer and performance guide screenshot',
    },
  },
  'project-mist': {
    'beginner-survival-guide': {
      image: '/games/project-mist/homepage/beginner-survival-guide.webp',
      imageAlt: 'Project: Mist - Survival game beginner survival guide screenshot',
    },
    'first-steps-survival-guide': {
      image: '/games/project-mist/homepage/first-steps-survival-guide.webp',
      imageAlt: 'Project: Mist - Survival game first steps guide screenshot',
    },
    'release-date-platforms-guide': {
      image: '/games/project-mist/homepage/release-date-platforms-guide.webp',
      imageAlt: 'Project: Mist - Survival game release date and platforms guide screenshot',
    },
    'demo-player-count-pricing-guide': {
      image: '/games/project-mist/homepage/demo-player-count-pricing-guide.webp',
      imageAlt: 'Project: Mist - Survival game demo player count and pricing guide screenshot',
    },
    'multiplayer-coop-guide': {
      image: '/games/project-mist/homepage/multiplayer-coop-guide.webp',
      imageAlt: 'Project: Mist - Survival game multiplayer co-op guide screenshot',
    },
    'gravity-gun-guide': {
      image: '/games/project-mist/homepage/gravity-gun-guide.webp',
      imageAlt: 'Project: Mist - Survival game Gravity Gun guide screenshot',
    },
    'train-base-building-guide': {
      image: '/games/project-mist/homepage/train-base-building-guide.webp',
      imageAlt: 'Project: Mist - Survival game train base building guide screenshot',
    },
    'creatures-guide': {
      image: '/games/project-mist/homepage/creatures-guide.webp',
      imageAlt: 'Project: Mist - Survival game creatures guide screenshot',
    },
    'crafting-gear-upgrades-guide': {
      image: '/games/project-mist/homepage/crafting-gear-upgrades-guide.webp',
      imageAlt: 'Project: Mist - Survival game crafting gear upgrades guide screenshot',
    },
    'map-facilities-guide': {
      image: '/games/project-mist/homepage/map-facilities-guide.webp',
      imageAlt: 'Project: Mist - Survival game map and facilities guide screenshot',
    },
  },
  paralives: {
    'release-date-early-access-guide': {
      image: '/games/paralives/homepage/release-date-early-access-guide.webp',
      imageAlt: 'Paralives - Simulation game release date and Early Access guide screenshot',
    },
    'price-platforms-mac-guide': {
      image: '/games/paralives/homepage/price-platforms-mac-guide.webp',
      imageAlt: 'Paralives - Simulation game price platforms and Mac guide screenshot',
    },
    'early-access-roadmap-guide': {
      image: '/games/paralives/homepage/early-access-roadmap-guide.webp',
      imageAlt: 'Paralives - Simulation game Early Access roadmap guide screenshot',
    },
    'build-mode-paramaker-guide': {
      image: '/games/paralives/homepage/build-mode-paramaker-guide.webp',
      imageAlt: 'Paralives - Simulation game build mode and Paramaker guide screenshot',
    },
    'mods-workshop-guide': {
      image: '/games/paralives/homepage/mods-workshop-guide.webp',
      imageAlt: 'Paralives - Simulation game mods and Steam Workshop guide screenshot',
    },
    'pets-cars-town-tools-guide': {
      image: '/games/paralives/homepage/pets-cars-town-tools-guide.webp',
      imageAlt: 'Paralives - Simulation game pets cars and town tools guide screenshot',
    },
  },
  'farming-simulator-26': {
    'release-date-platforms-guide': {
      image: '/games/farming-simulator-26/homepage/release-date-platforms-guide.webp',
      imageAlt: 'Farming Simulator 26 - Simulation game release date and platforms guide screenshot',
    },
    'maps-crops-animals-guide': {
      image: '/games/farming-simulator-26/homepage/maps-crops-animals-guide.webp',
      imageAlt: 'Farming Simulator 26 - Simulation game maps crops and animals guide screenshot',
    },
    'machines-features-guide': {
      image: '/games/farming-simulator-26/homepage/machines-features-guide.webp',
      imageAlt: 'Farming Simulator 26 - Simulation game machines and features guide screenshot',
    },
    'switch-mobile-buying-guide': {
      image: '/games/farming-simulator-26/homepage/switch-mobile-buying-guide.webp',
      imageAlt: 'Farming Simulator 26 - Simulation game Switch and mobile buying guide screenshot',
    },
  },
  'thick-as-thieves': {
    'release-date-platforms-guide': {
      image: '/games/thick-as-thieves/homepage/release-date-platforms-guide.webp',
      imageAlt: 'Thick As Thieves - Stealth game release date and platforms guide screenshot',
    },
    'solo-coop-campaign-guide': {
      image: '/games/thick-as-thieves/homepage/solo-coop-campaign-guide.webp',
      imageAlt: 'Thick As Thieves - Stealth game solo co-op campaign guide screenshot',
    },
    'beginner-stealth-guide': {
      image: '/games/thick-as-thieves/homepage/beginner-stealth-guide.webp',
      imageAlt: 'Thick As Thieves - Stealth game beginner stealth guide screenshot',
    },
    'contracts-maps-replayability-guide': {
      image: '/games/thick-as-thieves/homepage/contracts-maps-replayability-guide.webp',
      imageAlt: 'Thick As Thieves - Stealth game contracts maps replayability guide screenshot',
    },
    'gear-loadout-guide': {
      image: '/games/thick-as-thieves/homepage/gear-loadout-guide.webp',
      imageAlt: 'Thick As Thieves - Stealth game gear loadout guide screenshot',
    },
    'pc-specs-controller-cloud-guide': {
      image: '/games/thick-as-thieves/homepage/pc-specs-controller-cloud-guide.webp',
      imageAlt: 'Thick As Thieves - Stealth game PC specs controller cloud guide screenshot',
    },
    'live-service-roadmap-console-guide': {
      image: '/games/thick-as-thieves/homepage/live-service-roadmap-console-guide.webp',
      imageAlt: 'Thick As Thieves - Stealth game live service roadmap console guide screenshot',
    },
    'kilcairn-lore-factions-guide': {
      image: '/games/thick-as-thieves/homepage/kilcairn-lore-factions-guide.webp',
      imageAlt: 'Thick As Thieves - Stealth game Kilcairn lore factions guide screenshot',
    },
  },
  'coffee-talk-tokyo': {
    'release-date-platforms-guide': {
      image: '/games/coffee-talk-tokyo/homepage/release-date-platforms-guide.webp',
      imageAlt: 'Coffee Talk Tokyo - Visual Novel game release date and platforms guide screenshot',
    },
    'demo-length-save-transfer-guide': {
      image: '/games/coffee-talk-tokyo/homepage/demo-length-save-transfer-guide.webp',
      imageAlt: 'Coffee Talk Tokyo - Visual Novel game demo length save transfer guide screenshot',
    },
    'beginner-night-shift-guide': {
      image: '/games/coffee-talk-tokyo/homepage/beginner-night-shift-guide.webp',
      imageAlt: 'Coffee Talk Tokyo - Visual Novel game beginner night shift guide screenshot',
    },
    'drink-recipes-guide': {
      image: '/games/coffee-talk-tokyo/homepage/drink-recipes-guide.webp',
      imageAlt: 'Coffee Talk Tokyo - Visual Novel game drink recipes guide screenshot',
    },
    'characters-story-guide': {
      image: '/games/coffee-talk-tokyo/homepage/characters-story-guide.webp',
      imageAlt: 'Coffee Talk Tokyo - Visual Novel game characters story guide screenshot',
    },
    'tomodachill-social-guide': {
      image: '/games/coffee-talk-tokyo/homepage/tomodachill-social-guide.webp',
      imageAlt: 'Coffee Talk Tokyo - Visual Novel game Tomodachill social guide screenshot',
    },
    'latte-art-sprinkle-stencils-guide': {
      image: '/games/coffee-talk-tokyo/homepage/latte-art-sprinkle-stencils-guide.webp',
      imageAlt: 'Coffee Talk Tokyo - Visual Novel game latte art sprinkle stencils guide screenshot',
    },
    'deluxe-edition-soundtrack-guide': {
      image: '/games/coffee-talk-tokyo/homepage/deluxe-edition-soundtrack-guide.webp',
      imageAlt: 'Coffee Talk Tokyo - Visual Novel game Deluxe Edition soundtrack guide screenshot',
    },
  },
  '007-first-light': {
    'release-date-platforms-guide': {
      image: '/games/007-first-light/homepage/release-date-platforms-guide.webp',
      imageAlt: '007 First Light - Action Adventure game release date and platforms guide screenshot',
    },
    'preorder-editions-guide': {
      image: '/games/007-first-light/homepage/preorder-editions-guide.webp',
      imageAlt: '007 First Light - Action Adventure game preorder editions guide screenshot',
    },
    'beginner-spycraft-guide': {
      image: '/games/007-first-light/homepage/beginner-spycraft-guide.webp',
      imageAlt: '007 First Light - Action Adventure game beginner spycraft guide screenshot',
    },
    'stealth-vs-action-guide': {
      image: '/games/007-first-light/homepage/stealth-vs-action-guide.webp',
      imageAlt: '007 First Light - Action Adventure game stealth versus action guide screenshot',
    },
    'gadgets-guide': {
      image: '/games/007-first-light/homepage/gadgets-guide.webp',
      imageAlt: '007 First Light - Action Adventure game gadgets guide screenshot',
    },
    'locations-missions-guide': {
      image: '/games/007-first-light/homepage/locations-missions-guide.webp',
      imageAlt: '007 First Light - Action Adventure game locations missions guide screenshot',
    },
    'pc-specs-performance-guide': {
      image: '/games/007-first-light/homepage/pc-specs-performance-guide.webp',
      imageAlt: '007 First Light - Action Adventure game PC specs performance guide screenshot',
    },
    'cast-story-guide': {
      image: '/games/007-first-light/homepage/cast-story-guide.webp',
      imageAlt: '007 First Light - Action Adventure game cast story guide screenshot',
    },
  },
  'zero-parades-for-dead-spies': {
    'release-date-platforms-language-guide': {
      image: '/games/zero-parades-for-dead-spies/homepage/release-date-platforms-language-guide.webp',
      imageAlt: 'ZERO PARADES: For Dead Spies - RPG game release date platforms and language guide screenshot',
    },
    'is-it-like-disco-elysium-guide': {
      image: '/games/zero-parades-for-dead-spies/homepage/is-it-like-disco-elysium-guide.webp',
      imageAlt: 'ZERO PARADES: For Dead Spies - RPG game Disco Elysium comparison guide screenshot',
    },
    'gameplay-skills-encounters-guide': {
      image: '/games/zero-parades-for-dead-spies/homepage/gameplay-skills-encounters-guide.webp',
      imageAlt: 'ZERO PARADES: For Dead Spies - RPG game gameplay skills and encounters guide screenshot',
    },
    'should-you-buy-guide': {
      image: '/games/zero-parades-for-dead-spies/homepage/should-you-buy-guide.webp',
      imageAlt: 'ZERO PARADES: For Dead Spies - RPG game launch buying guide screenshot',
    },
  },
};

function getHubGuideImage(gameSlug: string, guideSlug: string, fallback: HubGuideImage): HubGuideImage {
  return hubGuideImages[gameSlug]?.[guideSlug] ?? fallback;
}

function Directive8020PlayerResearch() {
  const sections = [
    {
      id: 'first-run-vs-spoiler-cleanup',
      title: 'First-run players want help without losing the story',
      image: '/games/directive-8020/homepage/walkthrough.webp',
      imageAlt: 'Directive 8020 - Horror game spoiler-light walkthrough guide image',
      body:
        'Reddit discussion around Directive 8020 focuses heavily on whether choices, Turning Points, and the final twist make the story feel earned. The hub should protect first-run readers by sending them to the walkthrough first, while keeping endings, choices, deaths, and save-everyone pages clearly marked as spoiler-heavy cleanup.',
    },
    {
      id: 'trophy-platinum-route',
      title: 'Trophy hunters need a route, not a loose checklist',
      image: '/games/directive-8020/homepage/trophy-guide.webp',
      imageAlt: 'Directive 8020 - Horror game trophy and platinum roadmap guide image',
      body:
        'YouTube and guide searches cluster around trophy guide, platinum walkthrough, all deaths, endings, collectibles, and save everyone. A useful hub should explain the recommended order: one clean survivor file, then collectibles and secrets, then death routes and alternate endings.',
    },
    {
      id: 'save-everyone-endings',
      title: 'Save-everyone and ending pages answer different questions',
      image: '/games/directive-8020/homepage/save-everyone-guide.webp',
      imageAlt: 'Directive 8020 - Horror game save everyone route guide image',
      body:
        'Players searching save everyone usually want direct route protection. Players searching endings often want interpretation, final-message differences, and whether survival changes the outcome. Keeping those pages separate avoids spoiling people who only need survival help.',
    },
    {
      id: 'secrets-collectibles-cleanup',
      title: 'Collectibles need category clarity',
      image: '/games/directive-8020/homepage/collectibles-guide.webp',
      imageAlt: 'Directive 8020 - Horror game collectibles and secrets guide image',
      body:
        'Collectible searches do not only mean dolls. Players also look for Secrets, Simms Recordings, O Death Secrets, Heirlooms, and Curator-related cleanup. The hub should frame collectibles as a post-run tracker so players know which guide to open before replaying chapters.',
    },
    {
      id: 'pc-performance-and-coop',
      title: 'Performance and co-op wording should stay precise',
      image: '/games/directive-8020/homepage/multiplayer-performance-guide.webp',
      imageAlt: 'Directive 8020 - Horror game multiplayer performance guide image',
      body:
        'PC-focused coverage and storefront pages discuss ray tracing, path tracing, frame generation, Steam Deck status, and group-play wording. The hub should avoid blending Movie Night, Steam Remote Play, and native online co-op into one claim because those are different user expectations.',
    },
  ];

  const questionRows = [
    {
      question: 'What should I read before my first playthrough?',
      answer: 'Use the walkthrough only when stuck. Avoid endings, all-deaths, choices, and save-everyone pages until you are ready for spoilers.',
      source: 'Reddit spoiler discussions and walkthrough searches',
    },
    {
      question: 'What is the best completion order?',
      answer: 'Build one survivor file, clean collectibles and secrets, then route deaths, endings, and platinum cleanup with Turning Points.',
      source: 'Trophy and platinum guide demand',
    },
    {
      question: 'Can I save everyone?',
      answer: 'Yes, but that intent belongs on a dedicated route page because it reveals major survival conditions and late-game choices.',
      source: 'Save-everyone guide searches',
    },
    {
      question: 'What are O Death / Curator secrets?',
      answer: 'They are post-run cleanup targets that should be tracked separately from normal collectibles and first-run story clues.',
      source: 'Collectible and secret guide demand',
    },
    {
      question: 'Is PC performance part of the buying decision?',
      answer: 'Yes. PC readers need separate guidance for ray tracing, path tracing, frame generation, Steam Deck, and whether a video walkthrough is enough.',
      source: 'PC review and performance coverage',
    },
  ];

  return (
    <section id="directive-8020-player-research" aria-labelledby="directive-8020-player-research-title" className="rounded-[30px] border border-white/8 bg-[#070910] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.22)] sm:p-7">
      <div className="max-w-3xl">
        <p className="text-[11px] uppercase tracking-[0.18em] text-emerald-300">
          Player demand research
        </p>
        <h2 id="directive-8020-player-research-title" className="mt-3 text-3xl font-semibold tracking-tight text-white">
          What Directive 8020 Players Actually Search After Release
        </h2>
        <p className="mt-3 text-sm leading-8 text-zinc-300 sm:text-base">
          This hub is organized around visible post-release demand from Reddit discussion, YouTube walkthrough behavior, and guide searches: spoiler-light help first, then trophies, save-everyone routes, endings, deaths, collectibles, and PC performance checks.
        </p>
      </div>

      <div className="mt-6 grid gap-5">
        {sections.map((section) => (
          <article key={section.id} id={section.id} className="grid gap-4 rounded-[24px] border border-white/8 bg-white/[0.03] p-4 md:grid-cols-[240px_minmax(0,1fr)]">
            <figure className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-zinc-950">
              <Image
                src={section.image}
                alt={section.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 240px"
                className="object-cover"
              />
            </figure>
            <div>
              <h3 className="text-xl font-semibold tracking-tight text-white">
                {section.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-400">{section.body}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 overflow-x-auto rounded-[24px] border border-white/8">
        <table className="w-full border-collapse text-left text-sm">
          <caption className="sr-only">
            Directive 8020 player questions, recommended hub answer, and source type
          </caption>
          <thead className="bg-white/[0.06] text-white">
            <tr>
              <th scope="col" className="px-4 py-3 font-medium">Player question</th>
              <th scope="col" className="px-4 py-3 font-medium">Best hub answer</th>
              <th scope="col" className="px-4 py-3 font-medium">Demand signal</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/8 bg-black/20 text-zinc-400">
            {questionRows.map((row) => (
              <tr key={row.question}>
                <td className="px-4 py-4 align-top font-medium text-zinc-100">{row.question}</td>
                <td className="px-4 py-4 align-top leading-7">{row.answer}</td>
                <td className="px-4 py-4 align-top">{row.source}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-5">
        <h3 className="text-sm font-medium text-white">Sources checked</h3>
        <ul className="mt-3 space-y-2 text-sm leading-7 text-zinc-400">
          <li>
            <a className="text-cyan-200 underline decoration-cyan-200/30 underline-offset-4 hover:text-white" href="https://www.reddit.com/r/DarkPicturesAnthology/search/?q=Directive%208020&restrict_sr=1" target="_blank" rel="noopener noreferrer">
              Reddit discussions in r/DarkPicturesAnthology for Directive 8020
            </a>
          </li>
          <li>
            <a className="text-cyan-200 underline decoration-cyan-200/30 underline-offset-4 hover:text-white" href="https://www.youtube.com/results?search_query=Directive+8020+walkthrough+trophy+guide+all+endings+all+deaths" target="_blank" rel="noopener noreferrer">
              YouTube walkthrough, trophy, endings, and deaths searches
            </a>
          </li>
          <li>
            <a className="text-cyan-200 underline decoration-cyan-200/30 underline-offset-4 hover:text-white" href="https://store.steampowered.com/app/2255370/Directive_8020/" target="_blank" rel="noopener noreferrer">
              Steam store page for platform and feature context
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

function ProjectMistCommunityResearch() {
  const sections = [
    {
      id: 'performance-demo-feedback',
      title: 'Performance and demo stability are the first trust check',
      image: '/games/project-mist/homepage/release-date-platforms-guide.webp',
      imageAlt: 'Project: Mist - Survival game performance and demo feedback screenshot',
      body:
        'Steam discussion threads around the demo repeatedly point to optimization, loud GPU load, save reliability, chest interactions, and object physics as the issues players want answered before a long Early Access save. The useful page angle is not just "can my PC run it?" but "what should I test in the first 30 minutes before committing a world?"',
    },
    {
      id: 'gravity-gun-combat-ai',
      title: 'The Gravity Gun needs practical limits, not hype',
      image: '/games/project-mist/homepage/gravity-gun-guide.webp',
      imageAlt: 'Project: Mist - Survival game Gravity Gun combat feedback screenshot',
      body:
        'YouTube gameplay and Steam player questions both circle the same mechanic: the Gravity Gun looks like the signature tool, but players want to know whether it works on heavy enemies, whether it has cooldowns or energy limits, and whether giant creature AI can create real pressure instead of simple pathing loops.',
    },
    {
      id: 'train-base-survival-loop',
      title: 'The train base is the clearest long-tail search hook',
      image: '/games/project-mist/homepage/train-base-building-guide.webp',
      imageAlt: 'Project: Mist - Survival game train base survival loop screenshot',
      body:
        'Players are already asking about building doors, moving-base customization, storage, farming, water, automation, and whether the train becomes a true mobile fortress. This should become a dedicated answer surface because it combines survival-game intent with a feature that makes Project: Mist distinct.',
    },
    {
      id: 'multiplayer-coop-questions',
      title: 'Co-op intent is high, but the important details are still unknown',
      image: '/games/project-mist/homepage/multiplayer-coop-guide.webp',
      imageAlt: 'Project: Mist - Survival game multiplayer co-op questions screenshot',
      body:
        'Steam lists solo, multiplayer, co-op, and online co-op. The unresolved player questions are more specific: host-owned saves, loot sharing, revive rules, enemy scaling, session stability, and whether cross-play exists. The page should state confirmed co-op support and clearly mark every launch-test item.',
    },
    {
      id: 'buyer-questions-before-launch',
      title: 'Price, languages, demo access, and Early Access risk shape launch-day buying intent',
      image: '/games/project-mist/homepage/demo-player-count-pricing-guide.webp',
      imageAlt: 'Project: Mist - Survival game buyer questions before launch screenshot',
      body:
        'The strongest buyer-intent questions are about the May 19, 2026 Steam Early Access release, whether the demo remains available, regional language support, launch price, and whether Chicken Launcher will keep updating the game. Those questions should sit close to release and demo sections, not be buried under generic feature copy.',
    },
  ];

  const questionRows = [
    {
      question: 'Will Project: Mist run well after launch?',
      answer: 'Unknown until the May 19, 2026 Early Access build is tested; demo feedback makes performance a priority verification item.',
      source: 'Steam discussions',
    },
    {
      question: 'Can I play Project: Mist with friends?',
      answer: 'Steam lists solo play plus online co-op, but save ownership, scaling, and stability still need launch-week testing.',
      source: 'Steam store',
    },
    {
      question: 'Does the Gravity Gun work on every monster?',
      answer: 'Not confirmed. The guide should test enemy weight limits, cooldowns, stun behavior, and boss resistance separately.',
      source: 'Gameplay videos',
    },
    {
      question: 'How deep is the train base system?',
      answer: 'Steam confirms a moving train base, but door placement, storage, automation, farming, and defense depth need hands-on capture.',
      source: 'Steam store and discussions',
    },
    {
      question: 'Is the demo enough to judge the game?',
      answer: 'The demo is useful for controls, performance, first crafting, and tone, but it cannot verify late-game facilities or co-op progression.',
      source: 'Steam discussions',
    },
  ];

  return (
    <section id="project-mist-community-research" aria-labelledby="project-mist-community-research-title" className="rounded-[30px] border border-white/8 bg-[#070910] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.22)] sm:p-7">
      <div className="max-w-3xl">
        <p className="text-[11px] uppercase tracking-[0.18em] text-emerald-300">
          Research updated May 19, 2026
        </p>
        <h2 id="project-mist-community-research-title" className="mt-3 text-3xl font-semibold tracking-tight text-white">
          Project: Mist Community Questions Before Early Access
        </h2>
        <p className="mt-3 text-sm leading-8 text-zinc-300 sm:text-base">
          This research brief turns Steam community threads, current Steam store facts, and YouTube gameplay coverage into answerable guide topics. Reddit search still did not surface a stronger Project: Mist discussion cluster than Steam, so Steam player questions should be treated as the main public feedback source on launch day.
        </p>
      </div>

      <div className="mt-6 grid gap-5">
        {sections.map((section) => (
          <article key={section.id} id={section.id} className="grid gap-4 rounded-[24px] border border-white/8 bg-white/[0.03] p-4 md:grid-cols-[240px_minmax(0,1fr)]">
            <figure className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-zinc-950">
              <Image
                src={section.image}
                alt={section.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 240px"
                className="object-cover"
              />
            </figure>
            <div>
              <h3 className="text-xl font-semibold tracking-tight text-white">
                {section.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-400">{section.body}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 overflow-x-auto rounded-[24px] border border-white/8">
        <table className="w-full border-collapse text-left text-sm">
          <caption className="sr-only">
            Project: Mist player questions, current answers, and source types before Early Access
          </caption>
          <thead className="bg-white/[0.06] text-white">
            <tr>
              <th scope="col" className="px-4 py-3 font-medium">Player question</th>
              <th scope="col" className="px-4 py-3 font-medium">Current answer for the page</th>
              <th scope="col" className="px-4 py-3 font-medium">Source type</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/8 bg-black/20 text-zinc-400">
            {questionRows.map((row) => (
              <tr key={row.question}>
                <td className="px-4 py-4 align-top font-medium text-zinc-100">{row.question}</td>
                <td className="px-4 py-4 align-top leading-7">{row.answer}</td>
                <td className="px-4 py-4 align-top">{row.source}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-5">
        <h3 className="text-sm font-medium text-white">Sources checked</h3>
        <ul className="mt-3 space-y-2 text-sm leading-7 text-zinc-400">
          <li>
            <a className="text-cyan-200 underline decoration-cyan-200/30 underline-offset-4 hover:text-white" href="https://store.steampowered.com/app/2383130/Project_Mist/" target="_blank" rel="noopener noreferrer">
              Steam store page for Project: Mist
            </a>
          </li>
          <li>
            <a className="text-cyan-200 underline decoration-cyan-200/30 underline-offset-4 hover:text-white" href="https://steamcommunity.com/app/2383130/discussions/" target="_blank" rel="noopener noreferrer">
              Steam Community discussions for Project: Mist
            </a>
          </li>
          <li>
            <a className="text-cyan-200 underline decoration-cyan-200/30 underline-offset-4 hover:text-white" href="https://www.youtube.com/results?search_query=Project%3A+Mist+gameplay+demo+gravity+gun+train+base" target="_blank" rel="noopener noreferrer">
              YouTube gameplay and demo searches for Project: Mist
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default async function GamePage({ params }: GamePageProps) {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) {
    notFound();
  }
  const gameSlug: string = game.slug;

  const content =
    gameSlug === 'directive-8020'
      ? directive8020HubContent
      : gameSlug === 'project-mist'
        ? projectMistHubContent
      : gameSlug === 'paralives'
        ? paralivesHubContent
      : gameSlug === 'farming-simulator-26'
        ? farmingSimulator26HubContent
      : gameSlug === 'thick-as-thieves'
        ? thickAsThievesHubContent
        : gameSlug === 'coffee-talk-tokyo'
          ? coffeeTalkTokyoHubContent
        : gameSlug === '007-first-light'
          ? firstLight007HubContent
        : gameSlug === 'zero-parades-for-dead-spies'
          ? zeroParadesHubContent
      : gameContent[game.slug] || {
          overview: game.description,
          features: [],
          guides: [],
          tips: [],
          faq: [],
        };

  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Games', href: '/' },
    { label: game.name },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: game.name,
    description: game.description,
    genre: game.tags,
    datePublished: game.releaseDate,
    publisher:
      gameSlug === 'directive-8020'
        ? 'Supermassive Games'
        : gameSlug === 'project-mist'
          ? projectMistFacts.publisher
          : gameSlug === 'paralives'
            ? paralivesFacts.publisher
          : gameSlug === 'farming-simulator-26'
            ? farmingSimulator26Facts.publisher
          : gameSlug === 'thick-as-thieves'
            ? thickAsThievesFacts.publisher
          : gameSlug === 'coffee-talk-tokyo'
            ? coffeeTalkTokyoFacts.publisher
          : gameSlug === '007-first-light'
            ? firstLight007Facts.publisher
          : gameSlug === 'zero-parades-for-dead-spies'
            ? zeroParadesFacts.publisher
          : siteConfig.name,
    creator:
      gameSlug === 'directive-8020'
        ? 'Supermassive Games'
        : gameSlug === 'project-mist'
          ? projectMistFacts.developer
          : gameSlug === 'paralives'
            ? paralivesFacts.developer
          : gameSlug === 'farming-simulator-26'
            ? farmingSimulator26Facts.developer
          : gameSlug === 'thick-as-thieves'
            ? thickAsThievesFacts.developer
          : gameSlug === 'coffee-talk-tokyo'
            ? coffeeTalkTokyoFacts.developer
          : gameSlug === '007-first-light'
            ? firstLight007Facts.developer
          : gameSlug === 'zero-parades-for-dead-spies'
            ? zeroParadesFacts.developer
          : siteConfig.name,
    applicationCategory: 'Game',
    operatingSystem:
      gameSlug === 'directive-8020'
        ? 'Windows, PlayStation 5, Xbox Series X|S'
        : gameSlug === 'paralives'
          ? 'Windows, macOS'
        : gameSlug === 'farming-simulator-26'
          ? 'Nintendo Switch, iOS, Android'
        : gameSlug === 'coffee-talk-tokyo'
          ? 'Windows, PlayStation 5, Xbox Series X|S, Nintendo Switch'
        : gameSlug === 'zero-parades-for-dead-spies'
          ? 'Windows, PlayStation 5'
        : 'Windows',
    offers: {
      '@type': 'Offer',
      availability: game.status === 'released' ? 'https://schema.org/InStock' : 'https://schema.org/PreOrder',
      seller: {
        '@type': 'Organization',
        name:
          gameSlug === 'farming-simulator-26'
            ? 'SEGA'
            : 'Steam',
      },
    },
  };

  if (gameSlug === 'directive-8020') {
    const guideCards = directive8020GuideOrder.map((guideSlug, index) => {
      const guide = directive8020GuideContent[guideSlug];
      const firstMedia = Object.values(guide.sectionMedia)[0];
      const guideImage = getHubGuideImage(game.slug, guideSlug, {
        image: firstMedia?.image || guide.heroImage,
        imageAlt: firstMedia?.alt || guide.heroImageAlt,
      });

      return {
        slug: guideSlug,
        title: guide.title.replace(/^Directive 8020:?\s*/, ''),
        description: guide.description,
        image: guideImage.image,
        imageAlt: guideImage.imageAlt,
        status: guide.verificationStatus,
        spoilerLevel: guide.spoilerLevel,
        index,
      };
    });

    const startHere = [
      {
        title: 'Spoiler-light first run',
        href: `/game/${game.slug}/walkthrough`,
        body: 'Use the walkthrough only when stuck, then return to spoiler-heavy pages after one clear.',
      },
      {
        title: 'Trophy and platinum route',
        href: `/game/${game.slug}/trophy-guide`,
        body: 'Start with one clean survivor file before collectibles, all deaths, endings, and cleanup.',
      },
      {
        title: 'Save everyone route',
        href: `/game/${game.slug}/save-everyone-guide`,
        body: 'Open this when you are ready to protect every crew member and accept route spoilers.',
      },
    ];

    const spotlightCards = [
      {
        label: 'Release',
        value: directive8020Facts.displayReleaseDate,
        note: 'Playable now across PS5, Xbox Series X|S, and PC',
      },
      {
        label: 'Best first click',
        value: 'Walkthrough',
        note: 'The safest page for stuck first-run players',
      },
      {
        label: 'Cleanup order',
        value: 'Survivors first',
        note: 'Then route collectibles, deaths, endings, and trophies',
      },
    ];

    const answerCards = [
      { label: 'Developer', value: directive8020Facts.developer, status: 'Confirmed' },
      { label: 'Platforms', value: directive8020Facts.platforms, status: 'Confirmed' },
      { label: 'First-run risk', value: 'Endings, choices, deaths, and save-everyone pages contain major spoilers', status: 'Editorial policy' },
      { label: 'Completion focus', value: 'Trophies, survivor routing, O Death secrets, collectibles, deaths, and endings', status: 'Player demand' },
      { label: 'Route tool', value: 'Turning Points are best used for cleanup, not for every first-run decision', status: 'Route advice' },
      { label: 'Buying check', value: 'PC performance and group-play wording deserve a separate page before purchase', status: 'User intent' },
    ];

    return (
      <GameHubPortalPage
        breadcrumbs={breadcrumbs}
        jsonLd={jsonLd}
        heroImage="/games/directive-8020/hero.webp"
        heroImageAlt="Directive 8020 Cassiopeia sci-fi horror key art"
        heroBadges={[
          { label: 'Released hub', tone: 'success' },
          { label: directive8020Facts.platforms },
          { label: directive8020Facts.displayReleaseDate },
        ]}
        title="Directive 8020 Guide Hub"
        description="A post-release Directive 8020 answer hub built around what players actually search: spoiler-light walkthrough help, trophies, save-everyone routes, endings, choices, deaths, O Death secrets, collectibles, and PC performance."
        ctas={[
          { label: 'Start Walkthrough', href: `/game/${game.slug}/walkthrough` },
          { label: 'Trophy Roadmap', href: `/game/${game.slug}/trophy-guide`, variant: 'outline' },
          { label: 'Steam', href: directive8020Facts.steamUrl, external: true, variant: 'outline' },
        ]}
        spotlightCards={spotlightCards}
        sideNotes={[
          {
            label: 'Spoiler policy',
            body: 'The hub stays spoiler-light. Open endings, choices, deaths, or save-everyone only after one full playthrough.',
          },
          {
            label: 'Best route',
            body: 'Walkthrough first, trophy second, then endings or deaths once you are ready to route cleanup deliberately.',
          },
        ]}
        startHereTitle="Start here"
        startHereIntro="The cleanest sequence for a first run, survivor routing, and completion cleanup without opening the wrong spoiler too early."
        startHere={startHere}
        answerTitle="Player-question answer center"
        answerCards={answerCards}
        overviewParagraphs={content.overview.split('\n\n')}
        communityResearch={<Directive8020PlayerResearch />}
        guideSectionDescription="Choose the page by intent: spoiler-light play, trophy routing, save-everyone planning, ending interpretation, all-deaths cleanup, collectibles, or PC performance."
        guideCountLabel={`${guideCards.length} pages`}
        guideCards={guideCards.map((guide) => ({
          href: `/game/${game.slug}/${guide.slug}`,
          title: guide.title,
          description: guide.description,
          image: guide.image,
          imageAlt: guide.imageAlt,
          badges: [
            {
              label: guide.spoilerLevel === 'spoiler' ? 'Spoilers' : 'Spoiler-light',
              tone: guide.spoilerLevel === 'spoiler' ? 'danger' : 'accent',
            },
            { label: guide.status },
          ],
        }))}
        routeMapTitle="Route map"
        tips={content.tips}
        faq={content.faq}
      />
    );
  }

  if (gameSlug === 'project-mist') {
    const guideCards = projectMistGuideOrder.map((guideSlug) => {
      const guide = projectMistGuideContent[guideSlug];
      const firstMedia = Object.values(guide.sectionMedia)[0];
      const guideImage = getHubGuideImage(game.slug, guideSlug, {
        image: firstMedia?.image || guide.heroImage,
        imageAlt: firstMedia?.alt || guide.heroImageAlt,
      });

      return {
        slug: guideSlug,
        title: guide.title.replace(/^Project: Mist:?\s*/, ''),
        description: guide.description,
        image: guideImage.image,
        imageAlt: guideImage.imageAlt,
        status: guide.verificationStatus,
      };
    });

    const startHere = [
      {
        title: 'First steps',
        href: `/game/${game.slug}/first-steps-survival-guide`,
        body: 'Follow the opening demo flow: save, craft the axe, learn the UI, and avoid the whale.',
      },
      {
        title: 'Beginner plan',
        href: `/game/${game.slug}/beginner-survival-guide`,
        body: 'Start with safe scouting, train-base basics, Gravity Gun tests, and the first launch-day survival priorities.',
      },
      {
        title: 'Release facts',
        href: `/game/${game.slug}/release-date-platforms-guide`,
        body: 'Check the current Steam-listed date, Early Access status, platform, and feature labels.',
      },
      {
        title: 'Co-op setup',
        href: `/game/${game.slug}/multiplayer-coop-guide`,
        body: 'Plan group roles and know which host, save, loot, and scaling rules still need launch testing.',
      },
    ];

    const answerCards = [
      { label: 'Release date', value: projectMistFacts.displayReleaseDate, status: 'Steam-listed' },
      { label: 'Store access', value: 'Steam still showed unlock later today at latest check', status: 'Steam-listed' },
      { label: 'Platform', value: projectMistFacts.platforms, status: 'Steam-listed' },
      { label: 'Developer', value: projectMistFacts.developer, status: 'Steam-listed' },
      { label: 'Co-op', value: 'Solo or seamless 1-4 player co-op', status: 'Steam-listed' },
      { label: 'Train base', value: 'Moving train base is a core feature', status: 'Steam-listed' },
      { label: 'Live guide gap', value: 'Map routes, recipes, and weaknesses still need testing', status: 'Needs verification' },
    ];
    return (
      <GameHubPortalPage
        breadcrumbs={breadcrumbs}
        jsonLd={jsonLd}
        heroImage="/games/project-mist/hero.webp"
        heroImageAlt="Project: Mist island survival horror key art"
        heroBadges={[
          { label: 'Launch-day guide hub', tone: 'accent' },
          { label: projectMistFacts.earlyAccess },
          { label: projectMistFacts.displayReleaseDate },
        ]}
        title="Project: Mist Guide Hub"
        description="Launch-day survival guides for Chicken Launcher's open-world horror game: Steam unlock status, Gravity Gun testing, moving train base planning, online co-op questions, giant creatures, crafting, and facilities."
        ctas={[
          { label: 'Start Beginner Guide', href: `/game/${game.slug}/beginner-survival-guide` },
          { label: 'Release Facts', href: `/game/${game.slug}/release-date-platforms-guide`, variant: 'outline' },
          { label: 'Steam', href: projectMistFacts.steamUrl, external: true, variant: 'outline' },
        ]}
        spotlightCards={[
          { label: 'Launch date', value: projectMistFacts.displayReleaseDate, note: 'Steam currently lists Early Access on May 19, 2026' },
          { label: 'Current status', value: 'Unlocks later today', note: 'The Steam page still showed the game as unavailable at the latest May 19 check' },
          { label: 'Play style', value: 'Solo or 1-4 co-op', note: 'Current listing supports solo plus seamless online co-op' },
          { label: 'Core hook', value: 'Train base + Gravity Gun', note: 'The train base and object-control tool are the clearest differentiators so far' },
        ]}
        sideNotes={[
          {
            label: 'Verification focus',
            body: 'Exact map routes, crafting costs, save behavior, and creature weaknesses should stay provisional until the live Early Access build is tested.',
          },
          {
            label: 'Best first click',
            body: 'Open the release facts page first if you want the current Steam unlock context, then move into first steps and co-op setup.',
          },
        ]}
        startHereTitle="Start here"
        startHereIntro="The best order for opening demo-backed guidance, general survival planning, release facts, and co-op setup."
        startHere={startHere}
        answerTitle="Launch-day answer center"
        answerCards={answerCards}
        overviewParagraphs={content.overview.split('\n\n')}
        communityResearch={<ProjectMistCommunityResearch />}
        guideSectionDescription="Screenshot-backed pages with tables, FAQs, and visible verification labels."
        guideCountLabel={`${guideCards.length} pages`}
        guideCards={guideCards.map((guide) => ({
          href: `/game/${game.slug}/${guide.slug}`,
          title: guide.title,
          description: guide.description,
          image: guide.image,
          imageAlt: guide.imageAlt,
          badges: [{ label: 'Pre-release', tone: 'accent' }, { label: guide.status }],
        }))}
        routeMapTitle="Route map"
        tips={content.tips}
        faq={content.faq}
      />
    );
  }

  if (gameSlug === 'zero-parades-for-dead-spies') {
    const guideCards = zeroParadesGuideOrder.map((guideSlug) => {
      const guide = zeroParadesGuideContent[guideSlug];
      const firstMedia = Object.values(guide.sectionMedia)[0];
      const guideImage = getHubGuideImage(game.slug, guideSlug, {
        image: firstMedia?.image || guide.heroImage,
        imageAlt: firstMedia?.alt || guide.heroImageAlt,
      });

      return {
        slug: guideSlug,
        title: guide.title.replace(/^ZERO PARADES:?\s*/, ''),
        description: guide.description,
        image: guideImage.image,
        imageAlt: guideImage.imageAlt,
        status: guide.verificationStatus,
      };
    });

    const startHere = [
      {
        title: 'Release facts',
        href: `/game/${game.slug}/release-date-platforms-language-guide`,
        body: 'Start here for the May 21 PC date, Steam/Epic/GOG links, PS5 2026 wording, languages, and PC requirement checks.',
      },
      {
        title: 'Disco comparison',
        href: `/game/${game.slug}/is-it-like-disco-elysium-guide`,
        body: 'Use this before assuming ZERO PARADES is Disco Elysium 2 or the same kind of detective RPG.',
      },
      {
        title: 'Gameplay systems',
        href: `/game/${game.slug}/gameplay-skills-encounters-guide`,
        body: 'Read the current official explanation of operant skills, Conditioning, Dramatic Encounters, Tactical View, Pressures, and Exertion.',
      },
      {
        title: 'Buy or wait',
        href: `/game/${game.slug}/should-you-buy-guide`,
        body: 'Decide whether to buy day one, trust Steam Deck Verified, use review signals, or wait for PS5, achievement, and player performance evidence.',
      },
    ];

    const answerCards = [
      { label: 'PC release', value: zeroParadesFacts.displayReleaseDate, status: 'Official / Steam-listed' },
      { label: 'PC stores', value: 'Steam, Epic Games Store, and GOG', status: 'Store-listed' },
      { label: 'PS5', value: 'Planned in 2026', status: 'Press-listed' },
      { label: 'Developer', value: zeroParadesFacts.developer, status: 'Official' },
      { label: 'Play mode', value: 'Single-player', status: 'Steam-listed' },
      { label: 'Steam Deck', value: zeroParadesFacts.steamDeck, status: 'Steam-listed' },
      { label: 'Best current pages', value: 'Release facts, Disco comparison, systems, buying advice', status: 'Launch-eve content plan' },
    ];

    return (
      <GameHubPortalPage
        breadcrumbs={breadcrumbs}
        jsonLd={jsonLd}
        heroImage="/games/zero-parades-for-dead-spies/hero.webp"
        heroImageAlt="ZERO PARADES: For Dead Spies official key art"
        heroBadges={[
          { label: 'Launch-eve guide hub', tone: 'accent' },
          { label: 'Espionage CRPG' },
          { label: zeroParadesFacts.displayReleaseDate },
        ]}
        title="ZERO PARADES: For Dead Spies Guide Hub"
        description="Source-backed launch-eve guides for ZERO PARADES: release date and platforms, Steam Deck Verified status, whether it is like Disco Elysium, what skills and Dramatic Encounters promise, and whether you should buy at launch or wait for player reports."
        ctas={[
          { label: 'Start Release Guide', href: `/game/${game.slug}/release-date-platforms-language-guide` },
          { label: 'Disco Elysium Comparison', href: `/game/${game.slug}/is-it-like-disco-elysium-guide`, variant: 'outline' },
          { label: 'Steam', href: zeroParadesFacts.steamUrl, external: true, variant: 'outline' },
        ]}
        spotlightCards={[
          { label: 'Launch timing', value: 'PC on May 21, 2026', note: 'PS5 is listed separately for 2026, so the date should not be merged across platforms' },
          { label: 'Core hook', value: 'Espionage CRPG', note: 'Skills, dice rolls, Tactical View, and failure-forward decisions are the useful launch-eve hooks' },
          { label: 'Content stance', value: 'No fake walkthroughs', note: 'Endings, choices, builds, achievements, and routes should wait for the live build' },
        ]}
        sideNotes={[
          {
            label: 'Source policy',
            body: 'Facts come from the official press page, Steam, Epic, GOG, and public review or trailer coverage. Anything that requires a finished playthrough is marked for launch-week verification.',
          },
          {
            label: 'Best first click',
            body: 'Open the release guide for store facts. Open the Disco comparison if you are coming from Disco Elysium search intent.',
          },
        ]}
        startHereTitle="Start here"
        startHereIntro="The cleanest four-page path for a game that has strong launch-eve demand but no verified full routes yet."
        startHere={startHere}
        answerTitle="Launch-eve answer center"
        answerCards={answerCards}
        overviewParagraphs={content.overview.split('\n\n')}
        guideSectionDescription="Four source-backed pages with real tables, direct FAQs, unique official images, and visible verification labels. Full walkthrough-style coverage waits until the May 21 PC build can be tested."
        guideCountLabel={`${guideCards.length} pages`}
        guideCards={guideCards.map((guide) => ({
          href: `/game/${game.slug}/${guide.slug}`,
          title: guide.title,
          description: guide.description,
          image: guide.image,
          imageAlt: guide.imageAlt,
          badges: [{ label: 'Launch-eve', tone: 'accent' }, { label: guide.status }],
        }))}
        routeMapTitle="Route map"
        tips={content.tips}
        faq={content.faq}
      />
    );
  }

  if (gameSlug === 'paralives') {
    const guideCards = paralivesGuideOrder.map((guideSlug) => {
      const guide = paralivesGuideContent[guideSlug];
      const firstMedia = Object.values(guide.sectionMedia)[0];
      const guideImage = getHubGuideImage(game.slug, guideSlug, {
        image: firstMedia?.image || guide.heroImage,
        imageAlt: firstMedia?.alt || guide.heroImageAlt,
      });

      return {
        slug: guideSlug,
        title: guide.title.replace(/^Paralives:?\s*/, ''),
        description: guide.description,
        image: guideImage.image,
        imageAlt: guideImage.imageAlt,
        status: guide.verificationStatus,
      };
    });

    const startHere = [
      {
        title: 'Release facts',
        href: `/game/${game.slug}/release-date-early-access-guide`,
        body: 'Start with the date, Early Access status, and the cleanest source-backed answer for launch timing.',
      },
      {
        title: 'Price and Mac support',
        href: `/game/${game.slug}/price-platforms-mac-guide`,
        body: 'Check the $39.99 Early Access price, Mac support, no-console status, and what still lacks hard specs.',
      },
      {
        title: 'Roadmap split',
        href: `/game/${game.slug}/early-access-roadmap-guide`,
        body: 'Use this before trusting posts that treat pets, cars, or town tools as confirmed day-one systems.',
      },
      {
        title: 'Build and mods',
        href: `/game/${game.slug}/build-mode-paramaker-guide`,
        body: 'Open build mode or Workshop pages if creative tools matter more to you than first-week life-sim breadth.',
      },
    ];

    const answerCards = [
      { label: 'Release date', value: paralivesFacts.displayReleaseDate, status: 'Official' },
      { label: 'Platform', value: paralivesFacts.platforms, status: 'Official' },
      { label: 'Price', value: paralivesFacts.price, status: 'FAQ-listed' },
      { label: 'Console', value: 'No current console plans', status: 'FAQ-listed' },
      { label: 'Mods', value: 'Steam Workshop plus an in-game modding interface', status: 'Official' },
      { label: 'Roadmap split', value: 'Pets, cars, weather, and town tools are later Early Access items', status: 'Steam-listed' },
    ];

    return (
      <GameHubPortalPage
        breadcrumbs={breadcrumbs}
        jsonLd={jsonLd}
        heroImage="/games/paralives/hero.webp"
        heroImageAlt="Paralives life simulation key art"
        heroBadges={[
          { label: 'Pre-release guide hub', tone: 'accent' },
          { label: paralivesFacts.earlyAccess },
          { label: paralivesFacts.displayReleaseDate },
        ]}
        title="Paralives Guide Hub"
        description="Pre-release Paralives guides for the questions that actually matter before launch: release date, price, Mac support, build mode, Steam Workshop, and whether roadmap features like pets or cars are in the first Early Access build."
        ctas={[
          { label: 'Start Release Guide', href: `/game/${game.slug}/release-date-early-access-guide` },
          { label: 'Roadmap Guide', href: `/game/${game.slug}/early-access-roadmap-guide`, variant: 'outline' },
          { label: 'Steam', href: paralivesFacts.steamUrl, external: true, variant: 'outline' },
        ]}
        spotlightCards={[
          { label: 'Launch model', value: 'Early Access', note: 'The right question is what is playable on day one, not what might exist later' },
          { label: 'Current price', value: paralivesFacts.price, note: 'The official FAQ says the price will rise after Early Access' },
          { label: 'Best hook', value: 'Build mode + Paramaker', note: 'Gridless construction and flexible character creation are the clearest present-tense strengths' },
        ]}
        sideNotes={[
          {
            label: 'Trust policy',
            body: 'This hub separates launch facts from roadmap items so pets, cars, weather, and town tools are not misrepresented as automatic day-one features.',
          },
          {
            label: 'Best first click',
            body: 'Open the release or price page first if you are deciding whether to buy now. Open build mode or mods if your interest is more creative than completion-focused.',
          },
        ]}
        startHereTitle="Start here"
        startHereIntro="The cleanest reading order for launch timing, platform and price, roadmap expectations, and build or mod interest."
        startHere={startHere}
        answerTitle="Pre-release answer center"
        answerCards={answerCards}
        overviewParagraphs={content.overview.split('\n\n')}
        guideSectionDescription="Source-backed pages with tables, direct FAQs, and visible labels for what is official today versus what still needs live testing."
        guideCountLabel={`${guideCards.length} pages`}
        guideCards={guideCards.map((guide) => ({
          href: `/game/${game.slug}/${guide.slug}`,
          title: guide.title,
          description: guide.description,
          image: guide.image,
          imageAlt: guide.imageAlt,
          badges: [{ label: 'Launch day', tone: 'accent' }, { label: guide.status }],
        }))}
        routeMapTitle="Route map"
        tips={content.tips}
        faq={content.faq}
      />
    );
  }

  if (gameSlug === 'farming-simulator-26') {
    const guideCards = farmingSimulator26GuideOrder.map((guideSlug) => {
      const guide = farmingSimulator26GuideContent[guideSlug];
      const firstMedia = Object.values(guide.sectionMedia)[0];
      const guideImage = getHubGuideImage(game.slug, guideSlug, {
        image: firstMedia?.image || guide.heroImage,
        imageAlt: firstMedia?.alt || guide.heroImageAlt,
      });

      return {
        slug: guideSlug,
        title: guide.title.replace(/^Farming Simulator 26:?\s*/, ''),
        description: guide.description,
        image: guideImage.image,
        imageAlt: guideImage.imageAlt,
        status: guide.verificationStatus,
      };
    });

    const startHere = [
      {
        title: 'Release and platform facts',
        href: `/game/${game.slug}/release-date-platforms-guide`,
        body: 'Confirm the May 19, 2026 release date and that this version is currently being positioned for Switch and mobile.',
      },
      {
        title: 'Maps and farm scope',
        href: `/game/${game.slug}/maps-crops-animals-guide`,
        body: 'Check the two maps, 15-plus crops, livestock lineup, forestry support, and production-chain scope.',
      },
      {
        title: 'Machines and guidance',
        href: `/game/${game.slug}/machines-features-guide`,
        body: 'Open this if you care most about the 120-plus machines, challenge system, GPS guidance, and onboarding quality.',
      },
      {
        title: 'Switch and mobile fit',
        href: `/game/${game.slug}/switch-mobile-buying-guide`,
        body: 'Use the buying guide if comfort, controls, battery, and portable-play fit matter more than pure feature bullets.',
      },
    ];

    const answerCards = [
      { label: 'Release date', value: farmingSimulator26Facts.displayReleaseDate, status: 'Official' },
      { label: 'Platform set', value: farmingSimulator26Facts.platforms, status: 'Official' },
      { label: 'Maps', value: 'Dawnridge and Harburck', status: 'Official' },
      { label: 'Machines', value: '120-plus authentic machines', status: 'Official' },
      { label: 'Core farming', value: '15-plus crops, forestry, and livestock', status: 'Official' },
      { label: 'Open question', value: 'Real Switch and mobile comfort still needs live testing', status: 'Needs hands-on verification' },
    ];

    return (
      <GameHubPortalPage
        breadcrumbs={breadcrumbs}
        jsonLd={jsonLd}
        heroImage="/games/farming-simulator-26/hero.webp"
        heroImageAlt="Farming Simulator 26 official key art"
        heroBadges={[
          { label: 'Launch-day guide hub', tone: 'success' },
          { label: 'Switch + mobile' },
          { label: farmingSimulator26Facts.displayReleaseDate },
        ]}
        title="Farming Simulator 26 Guide Hub"
        description="Launch-day Farming Simulator 26 guides focused on the real buyer questions now that release is live: Switch and mobile platforms, maps, crops, animals, machines, challenge structure, and portable-play fit."
        ctas={[
          { label: 'Start Release Guide', href: `/game/${game.slug}/release-date-platforms-guide` },
          { label: 'Maps and Animals', href: `/game/${game.slug}/maps-crops-animals-guide`, variant: 'outline' },
          { label: 'Official Site', href: farmingSimulator26Facts.officialUrl, external: true, variant: 'outline' },
        ]}
        spotlightCards={[
          { label: 'Launch date', value: farmingSimulator26Facts.displayReleaseDate, note: 'Official pages align around the same May 19, 2026 release date' },
          { label: 'Platform focus', value: 'Switch and mobile', note: 'This is the key context that shapes every buying question around the game' },
          { label: 'Best hook', value: 'Portable farming with guidance', note: 'Challenge tasks, GPS support, and improved tutorials point to an accessibility-first release' },
        ]}
        sideNotes={[
          {
            label: 'Content policy',
            body: 'This hub stays narrow on purpose. It answers the public feature set and first live-buying questions without forcing fake walkthrough coverage onto a game that just launched.',
          },
          {
            label: 'Best first click',
            body: 'Open the release or buying guide first if you are deciding whether this Switch and mobile version fits the way you actually play farming sims.',
          },
        ]}
        startHereTitle="Start here"
        startHereIntro="The best order for release facts, farm scope, new features, and practical Switch or mobile buying questions."
        startHere={startHere}
        answerTitle="Launch-day answer center"
        answerCards={answerCards}
        overviewParagraphs={content.overview.split('\n\n')}
        guideSectionDescription="Focused pages for release facts, maps and animals, machine and challenge details, and Switch or mobile fit without padding the topic cluster."
        guideCountLabel={`${guideCards.length} pages`}
        guideCards={guideCards.map((guide) => ({
          href: `/game/${game.slug}/${guide.slug}`,
          title: guide.title,
          description: guide.description,
          image: guide.image,
          imageAlt: guide.imageAlt,
          badges: [{ label: 'Launch day', tone: 'success' }, { label: guide.status }],
        }))}
        routeMapTitle="Route map"
        tips={content.tips}
        faq={content.faq}
      />
    );
  }

  if (gameSlug === 'thick-as-thieves') {
    const guideCards = thickAsThievesGuideOrder.map((guideSlug) => {
      const guide = thickAsThievesGuideContent[guideSlug];
      const firstMedia = Object.values(guide.sectionMedia)[0];
      const guideImage = getHubGuideImage(game.slug, guideSlug, {
        image: firstMedia?.image || guide.heroImage,
        imageAlt: firstMedia?.alt || guide.heroImageAlt,
      });

      return {
        slug: guideSlug,
        title: guide.title.replace(/^Thick As Thieves:?\s*/, ''),
        description: guide.description,
        image: guideImage.image,
        imageAlt: guideImage.imageAlt,
        status: guide.verificationStatus,
      };
    });

    const startHere = [
      {
        title: 'Release facts',
        href: `/game/${game.slug}/release-date-platforms-guide`,
        body: 'Confirm the May 20, 2026 Steam launch, platform status, languages, and storefront feature labels.',
      },
      {
        title: 'Solo or co-op',
        href: `/game/${game.slug}/solo-coop-campaign-guide`,
        body: 'Decide whether to learn the game solo first or jump in with a partner once co-op is live.',
      },
      {
        title: 'Stealth basics',
        href: `/game/${game.slug}/beginner-stealth-guide`,
        body: 'Start with route discipline, clean exits, and co-op role separation instead of treating launch like an action rush.',
      },
    ];

    const answerCards = [
      { label: 'Release date', value: thickAsThievesFacts.displayReleaseDate, status: 'Steam-listed' },
      { label: 'Platform', value: thickAsThievesFacts.platforms, status: 'Steam-listed' },
      { label: 'Developer', value: thickAsThievesFacts.developer, status: 'Steam-listed' },
      { label: 'Play modes', value: thickAsThievesFacts.players, status: 'Official' },
      { label: 'Campaign scope', value: '2 maps, 3 mission types, 16 contracts, at least 4 hours', status: 'Official' },
      { label: 'Live service', value: 'Official FAQ says no', status: 'Official' },
    ];
    return (
      <GameHubPortalPage
        breadcrumbs={breadcrumbs}
        jsonLd={jsonLd}
        heroImage="/games/thick-as-thieves/hero.webp"
        heroImageAlt="Thick As Thieves key art"
        heroBadges={[
          { label: 'Launch-day guide hub', tone: 'accent' },
          { label: 'Stealth heist campaign' },
          { label: thickAsThievesFacts.displayReleaseDate },
        ]}
        title="Thick As Thieves Guide Hub"
        description="Launch-day Thick As Thieves guides: release facts, $4.99 scope, solo versus co-op setup, SPIDER versus CHAMELEON basics, gear planning, PC readiness, and roadmap questions without recycled PvPvE-era summaries."
        ctas={[
          { label: 'Release Facts', href: `/game/${game.slug}/release-date-platforms-guide` },
          { label: 'Solo and Co-op', href: `/game/${game.slug}/solo-coop-campaign-guide`, variant: 'outline' },
          { label: 'Steam', href: thickAsThievesFacts.steamUrl, external: true, variant: 'outline' },
        ]}
        spotlightCards={[
          { label: 'Launch date', value: thickAsThievesFacts.displayReleaseDate, note: 'Steam currently positions this as a focused introductory campaign launch' },
          { label: 'Play modes', value: thickAsThievesFacts.players, note: 'The current message is solo or one online co-op partner, not PvPvE' },
          { label: 'Campaign scope', value: '2 maps, 16 contracts, 6 gear pieces', note: 'Players need campaign size, mission replay, and gear clarity on launch day' },
        ]}
        sideNotes={[
          {
            label: 'Verification focus',
            body: 'Co-op flow, mission routing, exact gear behavior, controller feel, and Steam Deck playability still need live testing after the PC build unlocks.',
          },
          {
            label: 'Best first click',
            body: 'Open release facts first, then solo or co-op setup if you are deciding how to approach the launch campaign.',
          },
        ]}
        startHereTitle="Start here"
        startHereIntro="A cleaner order for launch facts, co-op decisions, and stealth fundamentals."
        startHere={startHere}
        answerTitle="Pre-release answer center"
        answerCards={answerCards}
        overviewParagraphs={content.overview.split('\n\n')}
        guideSectionDescription="Screenshot-backed pages with real tables, visible verification labels, and answers to the practical launch questions stealth players actually have."
        guideCountLabel={`${guideCards.length} pages`}
        guideCards={guideCards.map((guide) => ({
          href: `/game/${game.slug}/${guide.slug}`,
          title: guide.title,
          description: guide.description,
          image: guide.image,
          imageAlt: guide.imageAlt,
          badges: [{ label: 'Pre-release', tone: 'accent' }, { label: guide.status }],
        }))}
        routeMapTitle="Route map"
        tips={content.tips}
        faq={content.faq}
      />
    );
  }

  if (gameSlug === 'coffee-talk-tokyo') {
    const guideCards = coffeeTalkTokyoGuideOrder.map((guideSlug) => {
      const guide = coffeeTalkTokyoGuideContent[guideSlug];
      const firstMedia = Object.values(guide.sectionMedia)[0];
      const guideImage = getHubGuideImage(game.slug, guideSlug, {
        image: firstMedia?.image || guide.heroImage,
        imageAlt: firstMedia?.alt || guide.heroImageAlt,
      });

      return {
        slug: guideSlug,
        title: guide.title.replace(/^Coffee Talk Tokyo:?\s*/, ''),
        description: guide.description,
        image: guideImage.image,
        imageAlt: guideImage.imageAlt,
        status: guide.verificationStatus,
      };
    });

    const startHere = [
      {
        title: 'Release facts',
        href: `/game/${game.slug}/release-date-platforms-guide`,
        body: 'Confirm the May 21, 2026 launch date, platforms, Steam features, and which edition claims are storefront-specific.',
      },
      {
        title: 'Demo scope',
        href: `/game/${game.slug}/demo-length-save-transfer-guide`,
        body: 'See exactly what the demo covers, what it confirms, and what still needs launch verification.',
      },
      {
        title: 'First night',
        href: `/game/${game.slug}/beginner-night-shift-guide`,
        body: 'Learn how to read customer hints, use Tomodachill well, and keep your first run cozy instead of checklist-driven.',
      },
    ];

    const answerCards = [
      { label: 'Release date', value: coffeeTalkTokyoFacts.displayReleaseDate, status: 'Official' },
      { label: 'Platforms', value: coffeeTalkTokyoFacts.platforms, status: 'Official' },
      { label: 'Demo scope', value: 'Full Day 1 and early Day 2', status: 'Official' },
      { label: 'New social layer', value: 'Tomodachill with clickable hashtags', status: 'Official' },
      { label: 'Drink changes', value: 'Cold drinks and sprinkle stencils', status: 'Official' },
      { label: 'Full recipes', value: 'Wait for launch-week testing', status: 'Needs verification' },
    ];
    return (
      <GameHubPortalPage
        breadcrumbs={breadcrumbs}
        jsonLd={jsonLd}
        heroImage="/games/coffee-talk-tokyo/hero.webp"
        heroImageAlt="Coffee Talk Tokyo key art"
        heroBadges={[
          { label: 'Launch-eve guide hub', tone: 'accent' },
          { label: 'Tokyo late-night cafe' },
          { label: coffeeTalkTokyoFacts.displayReleaseDate },
        ]}
        title="Coffee Talk Tokyo Guide Hub"
        description="Launch-eve guides for Coffee Talk Tokyo: release facts, demo scope, Tomodachill, cold drinks, sprinkle stencils, character context, and edition decisions that are useful before launch."
        ctas={[
          { label: 'Release Facts', href: `/game/${game.slug}/release-date-platforms-guide` },
          { label: 'Demo Guide', href: `/game/${game.slug}/demo-length-save-transfer-guide`, variant: 'outline' },
          { label: 'Steam', href: coffeeTalkTokyoFacts.steamUrl, external: true, variant: 'outline' },
        ]}
        spotlightCards={[
          { label: 'Launch date', value: coffeeTalkTokyoFacts.displayReleaseDate, note: 'Platform set is already public, but route and recipe completeness should wait' },
          { label: 'Demo scope', value: 'Day 1 + early Day 2', note: 'The demo already answers several buyer questions before the full launch' },
          { label: 'New systems', value: 'Tomodachill + cold drinks', note: 'Those two upgrades are where most player curiosity currently clusters' },
        ]}
        sideNotes={[
          {
            label: 'Verification focus',
            body: 'Full route charts, complete recipes, and ending pages should wait for hands-on launch capture.',
          },
          {
            label: 'Best first click',
            body: 'Open release facts first if you are deciding whether to buy, then check the demo page before reading deeper system guides.',
          },
        ]}
        startHereTitle="Start here"
        startHereIntro="The cleanest sequence for release facts, demo scope, and a spoiler-light first-night read."
        startHere={startHere}
        answerTitle="Launch-eve answer center"
        answerCards={answerCards}
        overviewParagraphs={content.overview.split('\n\n')}
        guideSectionDescription="Editorial-style pages with screenshots, direct-answer tables, visible verification labels, and FAQ blocks that match the visible content."
        guideCountLabel={`${guideCards.length} pages`}
        guideCards={guideCards.map((guide) => ({
          href: `/game/${game.slug}/${guide.slug}`,
          title: guide.title,
          description: guide.description,
          image: guide.image,
          imageAlt: guide.imageAlt,
          badges: [{ label: 'Launch-eve', tone: 'accent' }, { label: guide.status }],
        }))}
        routeMapTitle="Route map"
        tips={content.tips}
        faq={content.faq}
      />
    );
  }

  if (gameSlug === '007-first-light') {
    const guideCards = firstLight007GuideOrder.map((guideSlug) => {
      const guide = firstLight007GuideContent[guideSlug];
      const firstMedia = Object.values(guide.sectionMedia)[0];
      const guideImage = getHubGuideImage(game.slug, guideSlug, {
        image: firstMedia?.image || guide.heroImage,
        imageAlt: firstMedia?.alt || guide.heroImageAlt,
      });

      return {
        slug: guideSlug,
        title: guide.title.replace(/^007 First Light:?\s*/, ''),
        description: guide.description,
        image: guideImage.image,
        imageAlt: guideImage.imageAlt,
        status: guide.verificationStatus,
      };
    });

    const startHere = [
      {
        title: 'Release facts',
        href: `/game/${game.slug}/release-date-platforms-guide`,
        body: 'Confirm the May 27, 2026 launch date, platform timing, Steam features, and Switch 2 wording.',
      },
      {
        title: 'Spycraft basics',
        href: `/game/${game.slug}/beginner-spycraft-guide`,
        body: 'Learn how to think about stealth, gadgets, action, and MI6 replay before launch.',
      },
      {
        title: 'PC readiness',
        href: `/game/${game.slug}/pc-specs-performance-guide`,
        body: 'Check 80GB SSD, 16GB RAM, recommended GPUs, DLSS, and path tracing expectations.',
      },
    ];

    const answerCards = [
      { label: 'Release date', value: firstLight007Facts.displayReleaseDate, status: 'Steam-listed' },
      { label: 'Developer', value: firstLight007Facts.developer, status: 'Steam-listed' },
      { label: 'Genre', value: firstLight007Facts.genre, status: 'Official' },
      { label: 'Multiplayer', value: 'Single-player currently listed on Steam', status: 'Steam-listed' },
      { label: 'Known gadgets', value: 'Q-Watch, Phone, Earphones, Lighter, Pen', status: 'Official' },
      { label: 'PC storage', value: '80GB SSD required', status: 'Steam-listed' },
    ];

    const spotlightCards = [
      {
        label: 'Launch date',
        value: firstLight007Facts.displayReleaseDate,
        note: 'Main launch on PS5, Xbox Series X|S, and PC',
      },
      {
        label: 'Play style',
        value: 'Single-player espionage',
        note: 'Steam currently lists no multiplayer mode',
      },
      {
        label: 'Platform watch',
        value: 'Switch 2 later',
        note: 'Do not merge summer timing into the May 27 date',
      },
    ];

    return (
      <GameHubPortalPage
        breadcrumbs={breadcrumbs}
        jsonLd={jsonLd}
        heroImage="/games/007-first-light/hero.webp"
        heroImageAlt="007 First Light young James Bond key art"
        heroBadges={[
          { label: 'Pre-release guide hub', tone: 'accent' },
          { label: firstLight007Facts.genre },
          { label: firstLight007Facts.displayReleaseDate },
        ]}
        title="007 First Light Guide Hub"
        description="Spoiler-safe pre-release coverage for release timing, editions, spycraft, stealth-versus-action decisions, gadgets, missions, PC readiness, and cast context without pretending the full game has already been solved."
        ctas={[
          { label: 'Release Facts', href: `/game/${game.slug}/release-date-platforms-guide` },
          { label: 'Spycraft Guide', href: `/game/${game.slug}/beginner-spycraft-guide`, variant: 'outline' },
          { label: 'Steam', href: firstLight007Facts.steamUrl, external: true, variant: 'outline' },
        ]}
        spotlightCards={spotlightCards}
        sideNotes={[
          {
            label: 'Verification focus',
            body: 'Launch platforms are clear. Mission structure, collectibles, and exact replay flow still need hands-on verification.',
          },
          {
            label: 'Best first click',
            body: 'Start with the release-date page if you are buying, then move to the spycraft guide if you are already committed to a first run.',
          },
        ]}
        startHereTitle="Start here"
        startHereIntro="The first three pages most players should open before they chase preorder noise or fake full walkthrough claims."
        startHere={startHere}
        answerTitle="Pre-release answer center"
        answerCards={answerCards}
        overviewParagraphs={content.overview.split('\n\n')}
        guideSectionDescription="Visual entry points into the pages that matter most before launch: release, buying, spycraft, gadgets, missions, PC specs, and story context."
        guideCountLabel={`${guideCards.length} pages`}
        guideCards={guideCards.map((guide) => ({
          href: `/game/${game.slug}/${guide.slug}`,
          title: guide.title,
          description: guide.description,
          image: guide.image,
          imageAlt: guide.imageAlt,
          badges: [{ label: 'Pre-release', tone: 'accent' }, { label: guide.status }],
        }))}
        routeMapTitle="Route map"
        tips={content.tips}
        faq={content.faq}
      />
    );
  }

  return (
    <div className="container px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Breadcrumbs items={breadcrumbs} />

      {/* Game Hero Image */}
      <section className="mb-8 -mx-4 sm:mx-0">
        <div className="relative aspect-video sm:rounded-xl overflow-hidden bg-muted">
          <Image
            src={`/games/${game.slug}/hero.webp`}
            alt={`${game.name} - ${game.tags.slice(0, 2).join(' ')} game guide and walkthrough`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <Badge variant="secondary" className="bg-primary text-primary-foreground">
                Coming Soon
              </Badge>
              <Badge variant="outline" className="bg-black/50 text-white border-white/20">
                {game.category}
              </Badge>
              <span className="text-sm text-white/80 flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {game.releaseDate}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
              {game.name} Guide & Wiki
            </h1>
            <p className="text-lg text-white/80 max-w-2xl">{game.description}</p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      {content.guides.length > 0 && (
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Star className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-bold">Popular Guides</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {content.guides.slice(0, 4).map((guide) => (
              <Link key={guide.slug} href={`/game/${game.slug}/${guide.slug}`}>
                <Card className="h-full hover:shadow-md transition-all hover:border-primary group">
                  <CardContent className="p-4 text-center">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      {guide.slug.includes('trophy') && <Trophy className="h-4 w-4 text-muted-foreground group-hover:text-primary" />}
                      {guide.slug.includes('walkthrough') && <BookOpen className="h-4 w-4 text-muted-foreground group-hover:text-primary" />}
                      {guide.slug.includes('ending') && <Star className="h-4 w-4 text-muted-foreground group-hover:text-primary" />}
                      {(guide.slug.includes('choice') || guide.slug.includes('collectible') || guide.slug.includes('death')) && <Map className="h-4 w-4 text-muted-foreground group-hover:text-primary" />}
                    </div>
                    <span className="text-sm font-medium group-hover:text-primary transition-colors">
                      {guide.title}
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Game Header */}
      <section className="mb-8">
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <a
              href={`https://store.steampowered.com/app/${game.steamId}/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Globe className="mr-2 h-4 w-4" />
              View on Steam
              <ExternalLink className="ml-2 h-3 w-3" />
            </a>
          </Button>
        </div>
      </section>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Overview */}
          <section>
            <h2 className="text-2xl font-bold mb-4">About {game.name}</h2>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              {content.overview.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-muted-foreground mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          {/* Game Features */}
          {content.features.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="space-y-2">
                {content.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Guides Section */}
          {content.guides.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-4">Guides & Walkthroughs</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {content.guides.map((guide) => (
                  <Card key={guide.slug} className="group hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        <Link href={`/game/${game.slug}/${guide.slug}`}>{guide.title}</Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{guide.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* Tips Section */}
          {content.tips.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-4">Quick Tips</h2>
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {content.tips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-medium">
                          {index + 1}
                        </span>
                        <span className="text-muted-foreground">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </section>
          )}

          {/* FAQ Section */}
          {content.faq.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {content.faq.map((item, index) => (
                  <article key={index} className="p-4 rounded-lg border">
                    <h3 className="font-semibold mb-2">{item.question}</h3>
                    <p className="text-muted-foreground">{item.answer}</p>
                  </article>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Game Info Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Game Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Release Date</span>
                <span className="font-medium">{game.releaseDate}</span>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Status</span>
                <Badge variant="secondary">
                  Upcoming
                </Badge>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Category</span>
                <span className="font-medium">{game.category}</span>
              </div>
              <Separator />
              <div>
                <span className="text-muted-foreground block mb-2">Tags</span>
                <div className="flex flex-wrap gap-1">
                  {game.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Steam Link */}
          <Card>
            <CardContent className="pt-6">
              <Button asChild className="w-full">
                <a
                  href={`https://store.steampowered.com/app/${game.steamId}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Globe className="mr-2 h-4 w-4" />
                  View on Steam
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Related Games */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Similar Games</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {games
                .filter((g) => {
                  if (g.id === game.id) return false;
                  const gameTags = game.tags as readonly string[];
                  return g.tags.some((tag) => gameTags.includes(tag));
                })
                .slice(0, 3)
                .map((relatedGame) => (
                  <Link
                    key={relatedGame.id}
                    href={`/game/${relatedGame.slug}`}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors"
                  >
                    <div className="relative w-12 h-12 rounded overflow-hidden bg-muted">
                      <Image
                        src={`/games/${relatedGame.slug}/hero.webp`}
                        alt={`${relatedGame.name} game cover`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{relatedGame.name}</p>
                      <p className="text-xs text-muted-foreground">{relatedGame.category}</p>
                    </div>
                  </Link>
                ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
