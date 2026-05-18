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

  return {
    title: `${game.name} Guide - Walkthrough, Tips & Strategies`,
    description: `Complete ${game.name} guide with walkthroughs, tips, strategies, and everything you need to master the game. ${game.description}`,
    keywords: [
      game.name,
      `${game.name} guide`,
      `${game.name} walkthrough`,
      `${game.name} tips`,
      `${game.name} strategies`,
      `${game.name} wiki`,
      ...game.tags,
    ],
    openGraph: {
      title: `${game.name} Guide - Walkthrough, Tips & Strategies | Base64Pro`,
      description: `Complete ${game.name} guide with walkthroughs, tips, strategies, and everything you need to master the game.`,
      type: 'article',
    },
    alternates: {
      canonical: `https://base64pro.top/game/${game.slug}`,
    },
  };
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
      : gameSlug === 'thick-as-thieves'
        ? thickAsThievesHubContent
        : gameSlug === 'coffee-talk-tokyo'
          ? coffeeTalkTokyoHubContent
        : gameSlug === '007-first-light'
          ? firstLight007HubContent
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
          : gameSlug === 'thick-as-thieves'
            ? thickAsThievesFacts.publisher
          : gameSlug === 'coffee-talk-tokyo'
            ? coffeeTalkTokyoFacts.publisher
          : gameSlug === '007-first-light'
            ? firstLight007Facts.publisher
          : siteConfig.name,
    creator:
      gameSlug === 'directive-8020'
        ? 'Supermassive Games'
        : gameSlug === 'project-mist'
          ? projectMistFacts.developer
          : gameSlug === 'thick-as-thieves'
            ? thickAsThievesFacts.developer
          : gameSlug === 'coffee-talk-tokyo'
            ? coffeeTalkTokyoFacts.developer
          : gameSlug === '007-first-light'
            ? firstLight007Facts.developer
          : siteConfig.name,
    applicationCategory: 'Game',
    operatingSystem:
      gameSlug === 'directive-8020'
        ? 'Windows, PlayStation 5, Xbox Series X|S'
        : gameSlug === 'coffee-talk-tokyo'
          ? 'Windows, PlayStation 5, Xbox Series X|S, Nintendo Switch'
        : 'Windows',
    offers: {
      '@type': 'Offer',
      availability: game.status === 'released' ? 'https://schema.org/InStock' : 'https://schema.org/PreOrder',
      seller: {
        '@type': 'Organization',
        name: 'Steam',
      },
    },
  };

  if (gameSlug === 'directive-8020') {
    const guideCards = directive8020GuideOrder.map((guideSlug, index) => {
      const guide = directive8020GuideContent[guideSlug];
      const firstMedia = Object.values(guide.sectionMedia)[0];

      return {
        slug: guideSlug,
        title: guide.title.replace(/^Directive 8020:?\s*/, ''),
        description: guide.description,
        image: firstMedia?.image || guide.heroImage,
        imageAlt: firstMedia?.alt || guide.heroImageAlt,
        status: guide.verificationStatus,
        spoilerLevel: guide.spoilerLevel,
        index,
      };
    });

    const startHere = [
      {
        title: 'First run',
        href: `/game/${game.slug}/walkthrough`,
        body: 'Use the spoiler-light walkthrough before opening ending or death routes.',
      },
      {
        title: 'Completion',
        href: `/game/${game.slug}/trophy-guide`,
        body: 'Build one survivor file, then clean collectibles, endings, and deaths.',
      },
      {
        title: 'Co-op checks',
        href: `/game/${game.slug}/multiplayer-performance-guide`,
        body: 'Separate Movie Night, Steam Remote Play, and native online co-op claims.',
      },
    ];

    return (
      <article className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Breadcrumbs items={breadcrumbs} />

        <header className="overflow-hidden rounded-2xl border bg-card shadow-sm">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_460px]">
            <div className="p-5 sm:p-8 lg:p-10">
              <div className="mb-5 flex flex-wrap items-center gap-2">
                <Badge className="rounded-full px-3">Now Available</Badge>
                <Badge variant="outline" className="rounded-full px-3">
                  {directive8020Facts.platforms}
                </Badge>
              </div>

              <h1 className="font-serif text-4xl font-normal leading-tight tracking-normal sm:text-5xl lg:text-[56px]">
                Directive 8020 Guide Hub
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
                Spoiler-aware routes, trophy planning, endings, choices, deaths, collectibles,
                and performance notes for Supermassive&apos;s sci-fi horror story aboard the
                Cassiopeia.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-11">
                  <Link href={`/game/${game.slug}/walkthrough`}>
                    Start Walkthrough
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-11">
                  <Link href={`/game/${game.slug}/trophy-guide`}>Trophy Roadmap</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-11">
                  <a
                    href={directive8020Facts.steamUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Steam
                    <ExternalLink className="ml-2 h-3.5 w-3.5" />
                  </a>
                </Button>
              </div>

              <div className="mt-8 grid gap-3 text-sm text-muted-foreground sm:grid-cols-3">
                <div className="rounded-xl border bg-background p-3">
                  <p className="text-xs uppercase text-muted-foreground">Release</p>
                  <p className="mt-1 font-medium text-foreground">
                    {directive8020Facts.displayReleaseDate}
                  </p>
                </div>
                <div className="rounded-xl border bg-background p-3">
                  <p className="text-xs uppercase text-muted-foreground">Studio</p>
                  <p className="mt-1 font-medium text-foreground">
                    {directive8020Facts.developer}
                  </p>
                </div>
                <div className="rounded-xl border bg-background p-3">
                  <p className="text-xs uppercase text-muted-foreground">Guides</p>
                  <p className="mt-1 font-medium text-foreground">
                    {guideCards.length} implemented
                  </p>
                </div>
              </div>
            </div>

            <figure className="border-t bg-muted/20 p-3 lg:border-l lg:border-t-0">
              <div className="relative aspect-video overflow-hidden rounded-xl bg-zinc-950">
                <Image
                  src="/games/directive-8020/hero.jpg"
                  alt="Directive 8020 Cassiopeia sci-fi horror key art"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 460px"
                  className="object-contain"
                />
              </div>
              <figcaption className="px-1 pt-3 text-sm leading-6 text-muted-foreground">
                The Hub stays spoiler-light. Open endings, choices, deaths, or save-everyone only
                after one playthrough.
              </figcaption>
            </figure>
          </div>
        </header>

        <section className="mt-8 grid gap-4 lg:grid-cols-3" aria-labelledby="start-here">
          <div className="lg:col-span-3">
            <h2 id="start-here" className="font-serif text-2xl font-normal tracking-normal">
              Start here
            </h2>
          </div>
          {startHere.map((item) => (
            <Link key={item.title} href={item.href} className="group">
              <Card className="h-full rounded-2xl transition-shadow hover:shadow-md">
                <CardContent className="p-5">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border bg-background text-muted-foreground transition-colors group-hover:text-primary">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                  <h3 className="font-serif text-xl font-normal tracking-normal">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.body}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </section>

        <section className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-8">
            <section className="rounded-2xl border bg-card p-5 shadow-sm sm:p-7">
              <h2 className="font-serif text-2xl font-normal tracking-normal">
                Spoiler-aware answer center
              </h2>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {content.overview.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-sm leading-7 text-muted-foreground sm:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            <section aria-labelledby="guide-library">
              <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 id="guide-library" className="font-serif text-3xl font-normal tracking-normal">
                    Guide library
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Each page includes screenshots, tables, FAQs, and verification labels.
                  </p>
                </div>
                <Badge variant="outline" className="w-fit rounded-full px-3">
                  {guideCards.length} pages
                </Badge>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {guideCards.map((guide) => (
                  <Link key={guide.slug} href={`/game/${game.slug}/${guide.slug}`} className="group">
                    <Card className="h-full overflow-hidden rounded-2xl transition-shadow hover:shadow-md">
                      <div className="relative aspect-[16/9] bg-muted">
                        <Image
                          src={guide.image}
                          alt={guide.imageAlt}
                          fill
                          sizes="(max-width: 640px) 100vw, 50vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-5">
                        <div className="mb-3 flex flex-wrap gap-2">
                          <Badge variant={guide.spoilerLevel === 'spoiler' ? 'destructive' : 'secondary'} className="rounded-full">
                            {guide.spoilerLevel === 'spoiler' ? 'Spoilers' : 'Spoiler-light'}
                          </Badge>
                          <Badge variant="outline" className="rounded-full">
                            {guide.status}
                          </Badge>
                        </div>
                        <h3 className="font-serif text-xl font-normal leading-snug tracking-normal group-hover:text-primary">
                          {guide.title}
                        </h3>
                        <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted-foreground">
                          {guide.description}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-5">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="font-serif text-xl font-normal tracking-normal">
                  Route map
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {content.tips.map((tip, index) => (
                  <div key={tip} className="flex gap-3 rounded-xl border bg-background p-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                      {index + 1}
                    </span>
                    <p className="text-sm leading-6 text-muted-foreground">{tip}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="font-serif text-xl font-normal tracking-normal">
                  FAQ
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {content.faq.map((item) => (
                  <article key={item.question}>
                    <h3 className="text-sm font-medium">{item.question}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.answer}</p>
                  </article>
                ))}
              </CardContent>
            </Card>
          </aside>
        </section>
      </article>
    );
  }

  if (gameSlug === 'project-mist') {
    const guideCards = projectMistGuideOrder.map((guideSlug) => {
      const guide = projectMistGuideContent[guideSlug];
      const firstMedia = Object.values(guide.sectionMedia)[0];

      return {
        slug: guideSlug,
        title: guide.title.replace(/^Project: Mist:?\s*/, ''),
        description: guide.description,
        image: firstMedia?.image || guide.heroImage,
        imageAlt: firstMedia?.alt || guide.heroImageAlt,
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
        body: 'Start with safe scouting, train-base basics, Gravity Gun tests, and pre-launch survival priorities.',
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
      { label: 'Platform', value: projectMistFacts.platforms, status: 'Steam-listed' },
      { label: 'Developer', value: projectMistFacts.developer, status: 'Steam-listed' },
      { label: 'Co-op', value: 'Solo, multiplayer, co-op, online co-op', status: 'Steam-listed' },
      { label: 'Train base', value: 'Moving train base is a core feature', status: 'Steam-listed' },
      { label: 'Final routes', value: 'Map, recipes, and weaknesses need testing', status: 'Needs verification' },
    ];

    return (
      <article className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Breadcrumbs items={breadcrumbs} />

        <header className="overflow-hidden rounded-2xl border bg-card shadow-sm">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_460px]">
            <div className="p-5 sm:p-8 lg:p-10">
              <div className="mb-5 flex flex-wrap items-center gap-2">
                <Badge variant="secondary" className="rounded-full px-3">
                  Pre-release guide hub
                </Badge>
                <Badge variant="outline" className="rounded-full px-3">
                  {projectMistFacts.earlyAccess}
                </Badge>
              </div>

              <h1 className="font-serif text-4xl font-normal leading-tight tracking-normal sm:text-5xl lg:text-[56px]">
                Project: Mist Guide Hub
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
                Pre-release survival guides for Chicken Launcher&apos;s open-world horror game:
                Gravity Gun testing, moving train base planning, online co-op questions, giant
                creatures, crafting, and facilities.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-11">
                  <Link href={`/game/${game.slug}/beginner-survival-guide`}>
                    Start Beginner Guide
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-11">
                  <Link href={`/game/${game.slug}/release-date-platforms-guide`}>
                    Release Facts
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-11">
                  <a
                    href={projectMistFacts.steamUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Steam
                    <ExternalLink className="ml-2 h-3.5 w-3.5" />
                  </a>
                </Button>
              </div>

              <div className="mt-8 grid gap-3 text-sm text-muted-foreground sm:grid-cols-3">
                <div className="rounded-xl border bg-background p-3">
                  <p className="text-xs uppercase text-muted-foreground">Release</p>
                  <p className="mt-1 font-medium text-foreground">
                    {projectMistFacts.displayReleaseDate}
                  </p>
                </div>
                <div className="rounded-xl border bg-background p-3">
                  <p className="text-xs uppercase text-muted-foreground">Studio</p>
                  <p className="mt-1 font-medium text-foreground">
                    {projectMistFacts.developer}
                  </p>
                </div>
                <div className="rounded-xl border bg-background p-3">
                  <p className="text-xs uppercase text-muted-foreground">Guides</p>
                  <p className="mt-1 font-medium text-foreground">
                    {guideCards.length} pre-release pages
                  </p>
                </div>
              </div>
            </div>

            <figure className="border-t bg-muted/20 p-3 lg:border-l lg:border-t-0">
              <div className="relative aspect-video overflow-hidden rounded-xl bg-zinc-950">
                <Image
                  src="/games/project-mist/hero.jpg"
                  alt="Project: Mist island survival horror key art"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 460px"
                  className="object-contain"
                />
              </div>
              <figcaption className="px-1 pt-3 text-sm leading-6 text-muted-foreground">
                This hub is honest about pre-launch uncertainty. Exact map routes, crafting costs,
                and creature weaknesses will be updated after hands-on testing.
              </figcaption>
            </figure>
          </div>
        </header>

        <section className="mt-8 grid gap-4 lg:grid-cols-3" aria-labelledby="start-here">
          <div className="lg:col-span-3">
            <h2 id="start-here" className="font-serif text-2xl font-normal tracking-normal">
              Start here
            </h2>
          </div>
          {startHere.map((item) => (
            <Link key={item.title} href={item.href} className="group">
              <Card className="h-full rounded-2xl transition-shadow hover:shadow-md">
                <CardContent className="p-5">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border bg-background text-muted-foreground transition-colors group-hover:text-primary">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                  <h3 className="font-serif text-xl font-normal tracking-normal">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.body}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </section>

        <section className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-8">
            <section className="rounded-2xl border bg-card p-5 shadow-sm sm:p-7">
              <h2 className="font-serif text-2xl font-normal tracking-normal">
                Pre-release answer center
              </h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {answerCards.map((item) => (
                  <div key={item.label} className="rounded-xl border bg-background p-4">
                    <p className="text-xs uppercase text-muted-foreground">{item.label}</p>
                    <p className="mt-2 text-sm font-medium leading-6 text-foreground">{item.value}</p>
                    <p className="mt-2 text-xs text-muted-foreground">{item.status}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {content.overview.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-sm leading-7 text-muted-foreground sm:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            <section aria-labelledby="guide-library">
              <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 id="guide-library" className="font-serif text-3xl font-normal tracking-normal">
                    Guide library
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Screenshot-backed pages with tables, FAQs, and visible verification labels.
                  </p>
                </div>
                <Badge variant="outline" className="w-fit rounded-full px-3">
                  {guideCards.length} pages
                </Badge>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {guideCards.map((guide) => (
                  <Link key={guide.slug} href={`/game/${game.slug}/${guide.slug}`} className="group">
                    <Card className="h-full overflow-hidden rounded-2xl transition-shadow hover:shadow-md">
                      <div className="relative aspect-[16/9] bg-muted">
                        <Image
                          src={guide.image}
                          alt={guide.imageAlt}
                          fill
                          sizes="(max-width: 640px) 100vw, 50vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-5">
                        <div className="mb-3 flex flex-wrap gap-2">
                          <Badge variant="secondary" className="rounded-full">
                            Pre-release
                          </Badge>
                          <Badge variant="outline" className="rounded-full">
                            {guide.status}
                          </Badge>
                        </div>
                        <h3 className="font-serif text-xl font-normal leading-snug tracking-normal group-hover:text-primary">
                          {guide.title}
                        </h3>
                        <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted-foreground">
                          {guide.description}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-5">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="font-serif text-xl font-normal tracking-normal">
                  Route map
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {content.tips.map((tip, index) => (
                  <div key={tip} className="flex gap-3 rounded-xl border bg-background p-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                      {index + 1}
                    </span>
                    <p className="text-sm leading-6 text-muted-foreground">{tip}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="font-serif text-xl font-normal tracking-normal">
                  FAQ
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {content.faq.map((item) => (
                  <article key={item.question}>
                    <h3 className="text-sm font-medium">{item.question}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.answer}</p>
                  </article>
                ))}
              </CardContent>
            </Card>
          </aside>
        </section>
      </article>
    );
  }

  if (gameSlug === 'thick-as-thieves') {
    const guideCards = thickAsThievesGuideOrder.map((guideSlug) => {
      const guide = thickAsThievesGuideContent[guideSlug];
      const firstMedia = Object.values(guide.sectionMedia)[0];

      return {
        slug: guideSlug,
        title: guide.title.replace(/^Thick As Thieves:?\s*/, ''),
        description: guide.description,
        image: firstMedia?.image || guide.heroImage,
        imageAlt: firstMedia?.alt || guide.heroImageAlt,
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
      { label: 'Campaign scope', value: '3 maps, 16 contracts, at least 4 hours', status: 'Official' },
      { label: 'Live service', value: 'Official FAQ says no', status: 'Official' },
    ];

    return (
      <article className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Breadcrumbs items={breadcrumbs} />

        <header className="overflow-hidden rounded-2xl border bg-card shadow-sm">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_460px]">
            <div className="p-5 sm:p-8 lg:p-10">
              <div className="mb-5 flex flex-wrap items-center gap-2">
                <Badge variant="secondary" className="rounded-full px-3">
                  Pre-release guide hub
                </Badge>
                <Badge variant="outline" className="rounded-full px-3">
                  Stealth heist campaign
                </Badge>
              </div>

              <h1 className="font-serif text-4xl font-normal leading-tight tracking-normal sm:text-5xl lg:text-[56px]">
                Thick As Thieves Guide Hub
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
                Original pre-release guides for Thick As Thieves: release facts, solo versus
                co-op setup, stealth fundamentals, campaign scope, gear planning, PC readiness,
                and roadmap questions without recycled PvPvE-era summaries.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-11">
                  <Link href={`/game/${game.slug}/release-date-platforms-guide`}>
                    Release Facts
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-11">
                  <Link href={`/game/${game.slug}/solo-coop-campaign-guide`}>
                    Solo and Co-op
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-11">
                  <a
                    href={thickAsThievesFacts.steamUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Steam
                    <ExternalLink className="ml-2 h-3.5 w-3.5" />
                  </a>
                </Button>
              </div>

              <div className="mt-8 grid gap-3 text-sm text-muted-foreground sm:grid-cols-3">
                <div className="rounded-xl border bg-background p-3">
                  <p className="text-xs uppercase text-muted-foreground">Release</p>
                  <p className="mt-1 font-medium text-foreground">
                    {thickAsThievesFacts.displayReleaseDate}
                  </p>
                </div>
                <div className="rounded-xl border bg-background p-3">
                  <p className="text-xs uppercase text-muted-foreground">Studio</p>
                  <p className="mt-1 font-medium text-foreground">
                    {thickAsThievesFacts.developer}
                  </p>
                </div>
                <div className="rounded-xl border bg-background p-3">
                  <p className="text-xs uppercase text-muted-foreground">Guides</p>
                  <p className="mt-1 font-medium text-foreground">
                    {guideCards.length} pre-release pages
                  </p>
                </div>
              </div>
            </div>

            <figure className="border-t bg-muted/20 p-3 lg:border-l lg:border-t-0">
              <div className="relative aspect-video overflow-hidden rounded-xl bg-zinc-950">
                <Image
                  src="/games/thick-as-thieves/hero.jpg"
                  alt="Thick As Thieves key art"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 460px"
                  className="object-contain"
                />
              </div>
              <figcaption className="px-1 pt-3 text-sm leading-6 text-muted-foreground">
                This hub is built around the current Steam page and the official FAQ. Co-op flow,
                mission routing, exact gear behavior, and Steam Deck feel still need launch-day
                testing after May 20, 2026.
              </figcaption>
            </figure>
          </div>
        </header>

        <section className="mt-8 grid gap-4 lg:grid-cols-3" aria-labelledby="start-here">
          <div className="lg:col-span-3">
            <h2 id="start-here" className="font-serif text-2xl font-normal tracking-normal">
              Start here
            </h2>
          </div>
          {startHere.map((item) => (
            <Link key={item.title} href={item.href} className="group">
              <Card className="h-full rounded-2xl transition-shadow hover:shadow-md">
                <CardContent className="p-5">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border bg-background text-muted-foreground transition-colors group-hover:text-primary">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                  <h3 className="font-serif text-xl font-normal tracking-normal">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.body}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </section>

        <section className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-8">
            <section className="rounded-2xl border bg-card p-5 shadow-sm sm:p-7">
              <h2 className="font-serif text-2xl font-normal tracking-normal">
                Pre-release answer center
              </h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {answerCards.map((item) => (
                  <div key={item.label} className="rounded-xl border bg-background p-4">
                    <p className="text-xs uppercase text-muted-foreground">{item.label}</p>
                    <p className="mt-2 text-sm font-medium leading-6 text-foreground">{item.value}</p>
                    <p className="mt-2 text-xs text-muted-foreground">{item.status}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {content.overview.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-sm leading-7 text-muted-foreground sm:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            <section aria-labelledby="guide-library">
              <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 id="guide-library" className="font-serif text-3xl font-normal tracking-normal">
                    Guide library
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Screenshot-backed pages with real tables, visible verification labels, and
                    answers to the practical launch questions stealth players actually have.
                  </p>
                </div>
                <Badge variant="outline" className="w-fit rounded-full px-3">
                  {guideCards.length} pages
                </Badge>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {guideCards.map((guide) => (
                  <Link key={guide.slug} href={`/game/${game.slug}/${guide.slug}`} className="group">
                    <Card className="h-full overflow-hidden rounded-2xl transition-shadow hover:shadow-md">
                      <div className="relative aspect-[16/9] bg-muted">
                        <Image
                          src={guide.image}
                          alt={guide.imageAlt}
                          fill
                          sizes="(max-width: 640px) 100vw, 50vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-5">
                        <div className="mb-3 flex flex-wrap gap-2">
                          <Badge variant="secondary" className="rounded-full">
                            Pre-release
                          </Badge>
                          <Badge variant="outline" className="rounded-full">
                            {guide.status}
                          </Badge>
                        </div>
                        <h3 className="font-serif text-xl font-normal leading-snug tracking-normal group-hover:text-primary">
                          {guide.title}
                        </h3>
                        <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted-foreground">
                          {guide.description}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-5">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="font-serif text-xl font-normal tracking-normal">
                  Route map
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {content.tips.map((tip, index) => (
                  <div key={tip} className="flex gap-3 rounded-xl border bg-background p-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                      {index + 1}
                    </span>
                    <p className="text-sm leading-6 text-muted-foreground">{tip}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="font-serif text-xl font-normal tracking-normal">
                  FAQ
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {content.faq.map((item) => (
                  <article key={item.question}>
                    <h3 className="text-sm font-medium">{item.question}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.answer}</p>
                  </article>
                ))}
              </CardContent>
            </Card>
          </aside>
        </section>
      </article>
    );
  }

  if (gameSlug === 'coffee-talk-tokyo') {
    const guideCards = coffeeTalkTokyoGuideOrder.map((guideSlug) => {
      const guide = coffeeTalkTokyoGuideContent[guideSlug];
      const firstMedia = Object.values(guide.sectionMedia)[0];

      return {
        slug: guideSlug,
        title: guide.title.replace(/^Coffee Talk Tokyo:?\s*/, ''),
        description: guide.description,
        image: firstMedia?.image || guide.heroImage,
        imageAlt: firstMedia?.alt || guide.heroImageAlt,
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
        body: 'See exactly what the demo covers, what it confirms, and what you still should not assume before launch.',
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
      <article className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Breadcrumbs items={breadcrumbs} />

        <header className="overflow-hidden rounded-2xl border bg-card shadow-sm">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_460px]">
            <div className="p-5 sm:p-8 lg:p-10">
              <div className="mb-5 flex flex-wrap items-center gap-2">
                <Badge variant="secondary" className="rounded-full px-3">
                  Pre-release guide hub
                </Badge>
                <Badge variant="outline" className="rounded-full px-3">
                  Tokyo late-night cafe
                </Badge>
              </div>

              <h1 className="font-serif text-4xl font-normal leading-tight tracking-normal sm:text-5xl lg:text-[56px]">
                Coffee Talk Tokyo Guide Hub
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
                Original pre-release guides for Coffee Talk Tokyo: release facts, demo scope,
                Tomodachill, cold drinks, sprinkle stencils, character context, and edition
                decisions that are actually useful before launch.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-11">
                  <Link href={`/game/${game.slug}/release-date-platforms-guide`}>
                    Release Facts
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-11">
                  <Link href={`/game/${game.slug}/demo-length-save-transfer-guide`}>
                    Demo Guide
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-11">
                  <a
                    href={coffeeTalkTokyoFacts.steamUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Steam
                    <ExternalLink className="ml-2 h-3.5 w-3.5" />
                  </a>
                </Button>
              </div>

              <div className="mt-8 grid gap-3 text-sm text-muted-foreground sm:grid-cols-3">
                <div className="rounded-xl border bg-background p-3">
                  <p className="text-xs uppercase text-muted-foreground">Release</p>
                  <p className="mt-1 font-medium text-foreground">
                    {coffeeTalkTokyoFacts.displayReleaseDate}
                  </p>
                </div>
                <div className="rounded-xl border bg-background p-3">
                  <p className="text-xs uppercase text-muted-foreground">Studio</p>
                  <p className="mt-1 font-medium text-foreground">
                    {coffeeTalkTokyoFacts.publisher}
                  </p>
                </div>
                <div className="rounded-xl border bg-background p-3">
                  <p className="text-xs uppercase text-muted-foreground">Guides</p>
                  <p className="mt-1 font-medium text-foreground">
                    {guideCards.length} pre-release pages
                  </p>
                </div>
              </div>
            </div>

            <figure className="border-t bg-muted/20 p-3 lg:border-l lg:border-t-0">
              <div className="relative aspect-video overflow-hidden rounded-xl bg-zinc-950">
                <Image
                  src="/games/coffee-talk-tokyo/hero.jpg"
                  alt="Coffee Talk Tokyo key art"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 460px"
                  className="object-contain"
                />
              </div>
              <figcaption className="px-1 pt-3 text-sm leading-6 text-muted-foreground">
                This hub stays spoiler-light and pre-release honest. Full route charts, complete
                recipes, and ending pages should wait for hands-on launch capture.
              </figcaption>
            </figure>
          </div>
        </header>

        <section className="mt-8 grid gap-4 lg:grid-cols-3" aria-labelledby="start-here">
          <div className="lg:col-span-3">
            <h2 id="start-here" className="font-serif text-2xl font-normal tracking-normal">
              Start here
            </h2>
          </div>
          {startHere.map((item) => (
            <Link key={item.title} href={item.href} className="group">
              <Card className="h-full rounded-2xl transition-shadow hover:shadow-md">
                <CardContent className="p-5">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border bg-background text-muted-foreground transition-colors group-hover:text-primary">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                  <h3 className="font-serif text-xl font-normal tracking-normal">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.body}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </section>

        <section className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-8">
            <section className="rounded-2xl border bg-card p-5 shadow-sm sm:p-7">
              <h2 className="font-serif text-2xl font-normal tracking-normal">
                Pre-release answer center
              </h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {answerCards.map((item) => (
                  <div key={item.label} className="rounded-xl border bg-background p-4">
                    <p className="text-xs uppercase text-muted-foreground">{item.label}</p>
                    <p className="mt-2 text-sm font-medium leading-6 text-foreground">{item.value}</p>
                    <p className="mt-2 text-xs text-muted-foreground">{item.status}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {content.overview.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-sm leading-7 text-muted-foreground sm:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            <section aria-labelledby="guide-library">
              <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 id="guide-library" className="font-serif text-3xl font-normal tracking-normal">
                    Guide library
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Editorial-style pages with screenshots, direct-answer tables, visible verification
                    labels, and FAQ blocks that match the visible content.
                  </p>
                </div>
                <Badge variant="outline" className="w-fit rounded-full px-3">
                  {guideCards.length} pages
                </Badge>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {guideCards.map((guide) => (
                  <Link key={guide.slug} href={`/game/${game.slug}/${guide.slug}`} className="group">
                    <Card className="h-full overflow-hidden rounded-2xl transition-shadow hover:shadow-md">
                      <div className="relative aspect-[16/9] bg-muted">
                        <Image
                          src={guide.image}
                          alt={guide.imageAlt}
                          fill
                          sizes="(max-width: 640px) 100vw, 50vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-5">
                        <div className="mb-3 flex flex-wrap gap-2">
                          <Badge variant="secondary" className="rounded-full">
                            Pre-release
                          </Badge>
                          <Badge variant="outline" className="rounded-full">
                            {guide.status}
                          </Badge>
                        </div>
                        <h3 className="font-serif text-xl font-normal leading-snug tracking-normal group-hover:text-primary">
                          {guide.title}
                        </h3>
                        <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted-foreground">
                          {guide.description}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-5">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="font-serif text-xl font-normal tracking-normal">
                  Route map
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {content.tips.map((tip, index) => (
                  <div key={tip} className="flex gap-3 rounded-xl border bg-background p-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                      {index + 1}
                    </span>
                    <p className="text-sm leading-6 text-muted-foreground">{tip}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="font-serif text-xl font-normal tracking-normal">
                  FAQ
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {content.faq.map((item) => (
                  <article key={item.question}>
                    <h3 className="text-sm font-medium">{item.question}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.answer}</p>
                  </article>
                ))}
              </CardContent>
            </Card>
          </aside>
        </section>
      </article>
    );
  }

  if (gameSlug === '007-first-light') {
    const guideCards = firstLight007GuideOrder.map((guideSlug) => {
      const guide = firstLight007GuideContent[guideSlug];
      const firstMedia = Object.values(guide.sectionMedia)[0];

      return {
        slug: guideSlug,
        title: guide.title.replace(/^007 First Light:?\s*/, ''),
        description: guide.description,
        image: firstMedia?.image || guide.heroImage,
        imageAlt: firstMedia?.alt || guide.heroImageAlt,
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

    return (
      <article className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Breadcrumbs items={breadcrumbs} />

        <header className="overflow-hidden rounded-2xl border bg-card shadow-sm">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_460px]">
            <div className="p-5 sm:p-8 lg:p-10">
              <div className="mb-5 flex flex-wrap items-center gap-2">
                <Badge variant="secondary" className="rounded-full px-3">
                  Pre-release guide hub
                </Badge>
                <Badge variant="outline" className="rounded-full px-3">
                  {firstLight007Facts.genre}
                </Badge>
              </div>

              <h1 className="font-serif text-4xl font-normal leading-tight tracking-normal sm:text-5xl lg:text-[56px]">
                007 First Light Guide Hub
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
                Spoiler-safe pre-release guides for IO Interactive&apos;s Bond origin story:
                release facts, editions, spycraft, stealth versus action, gadgets, missions,
                PC performance, and cast context.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-11">
                  <Link href={`/game/${game.slug}/release-date-platforms-guide`}>
                    Release Facts
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-11">
                  <Link href={`/game/${game.slug}/beginner-spycraft-guide`}>
                    Spycraft Guide
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-11">
                  <a
                    href={firstLight007Facts.steamUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Steam
                    <ExternalLink className="ml-2 h-3.5 w-3.5" />
                  </a>
                </Button>
              </div>

              <div className="mt-8 grid gap-3 text-sm text-muted-foreground sm:grid-cols-3">
                <div className="rounded-xl border bg-background p-3">
                  <p className="text-xs uppercase text-muted-foreground">Release</p>
                  <p className="mt-1 font-medium text-foreground">
                    {firstLight007Facts.displayReleaseDate}
                  </p>
                </div>
                <div className="rounded-xl border bg-background p-3">
                  <p className="text-xs uppercase text-muted-foreground">Studio</p>
                  <p className="mt-1 font-medium text-foreground">
                    {firstLight007Facts.developer}
                  </p>
                </div>
                <div className="rounded-xl border bg-background p-3">
                  <p className="text-xs uppercase text-muted-foreground">Guides</p>
                  <p className="mt-1 font-medium text-foreground">
                    {guideCards.length} pre-release pages
                  </p>
                </div>
              </div>
            </div>

            <figure className="border-t bg-muted/20 p-3 lg:border-l lg:border-t-0">
              <div className="relative aspect-video overflow-hidden rounded-xl bg-zinc-950">
                <Image
                  src="/games/007-first-light/hero.jpg"
                  alt="007 First Light young James Bond key art"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 460px"
                  className="object-contain"
                />
              </div>
              <figcaption className="px-1 pt-3 text-sm leading-6 text-muted-foreground">
                This hub avoids fake full walkthrough claims until the game is playable. Complete
                mission routes and collectibles need hands-on capture after launch.
              </figcaption>
            </figure>
          </div>
        </header>

        <section className="mt-8 grid gap-4 lg:grid-cols-3" aria-labelledby="start-here">
          <div className="lg:col-span-3">
            <h2 id="start-here" className="font-serif text-2xl font-normal tracking-normal">
              Start here
            </h2>
          </div>
          {startHere.map((item) => (
            <Link key={item.title} href={item.href} className="group">
              <Card className="h-full rounded-2xl transition-shadow hover:shadow-md">
                <CardContent className="p-5">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border bg-background text-muted-foreground transition-colors group-hover:text-primary">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                  <h3 className="font-serif text-xl font-normal tracking-normal">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.body}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </section>

        <section className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-8">
            <section className="rounded-2xl border bg-card p-5 shadow-sm sm:p-7">
              <h2 className="font-serif text-2xl font-normal tracking-normal">
                Pre-release answer center
              </h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {answerCards.map((item) => (
                  <div key={item.label} className="rounded-xl border bg-background p-4">
                    <p className="text-xs uppercase text-muted-foreground">{item.label}</p>
                    <p className="mt-2 text-sm font-medium leading-6 text-foreground">{item.value}</p>
                    <p className="mt-2 text-xs text-muted-foreground">{item.status}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {content.overview.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-sm leading-7 text-muted-foreground sm:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            <section aria-labelledby="guide-library">
              <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 id="guide-library" className="font-serif text-3xl font-normal tracking-normal">
                    Guide library
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Each page uses official facts, trailer-observed details, screenshots, tables, FAQs,
                    and visible verification labels.
                  </p>
                </div>
                <Badge variant="outline" className="w-fit rounded-full px-3">
                  {guideCards.length} pages
                </Badge>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {guideCards.map((guide) => (
                  <Link key={guide.slug} href={`/game/${game.slug}/${guide.slug}`} className="group">
                    <Card className="h-full overflow-hidden rounded-2xl transition-shadow hover:shadow-md">
                      <div className="relative aspect-[16/9] bg-muted">
                        <Image
                          src={guide.image}
                          alt={guide.imageAlt}
                          fill
                          sizes="(max-width: 640px) 100vw, 50vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-5">
                        <div className="mb-3 flex flex-wrap gap-2">
                          <Badge variant="secondary" className="rounded-full">
                            Pre-release
                          </Badge>
                          <Badge variant="outline" className="rounded-full">
                            {guide.status}
                          </Badge>
                        </div>
                        <h3 className="font-serif text-xl font-normal leading-snug tracking-normal group-hover:text-primary">
                          {guide.title}
                        </h3>
                        <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted-foreground">
                          {guide.description}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-5">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="font-serif text-xl font-normal tracking-normal">
                  Route map
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {content.tips.map((tip, index) => (
                  <div key={tip} className="flex gap-3 rounded-xl border bg-background p-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                      {index + 1}
                    </span>
                    <p className="text-sm leading-6 text-muted-foreground">{tip}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="font-serif text-xl font-normal tracking-normal">
                  FAQ
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {content.faq.map((item) => (
                  <article key={item.question}>
                    <h3 className="text-sm font-medium">{item.question}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.answer}</p>
                  </article>
                ))}
              </CardContent>
            </Card>
          </aside>
        </section>
      </article>
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
            src={`/games/${game.slug}/hero.jpg`}
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
                        src={`/games/${relatedGame.slug}/hero.jpg`}
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
