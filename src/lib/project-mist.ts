export type ProjectMistVerificationStatus =
  | 'Confirmed'
  | 'Steam-listed'
  | 'Trailer-observed'
  | 'Needs hands-on verification';

export interface ProjectMistMedia {
  image: string;
  alt: string;
  caption: string;
}

export interface ProjectMistVideo {
  title: string;
  url: string;
  channel: string;
  duration: string;
}

export interface ProjectMistGuide {
  title: string;
  description: string;
  lastUpdated: string;
  timeToRead: string;
  primaryKeyword: string;
  spoilerLevel: 'safe' | 'spoiler';
  verificationStatus: ProjectMistVerificationStatus;
  sections: { title: string; id: string }[];
  content: string;
  faqs: { question: string; answer: string }[];
  heroImage: string;
  heroImageAlt: string;
  sectionMedia: Record<string, ProjectMistMedia>;
  videos: ProjectMistVideo[];
}

const lastUpdated = '2026-05-15';
const hero = '/games/project-mist/hero.jpg';
const shot = (index: number) =>
  `/games/project-mist/screenshots/project-mist-screenshot-${index}.jpg`;

const videos = {
  releaseDate: {
    title: 'Project: Mist Official Early Access Release Date Trailer',
    url: 'https://www.youtube.com/watch?v=sNE_ACSlxhs',
    channel: 'IGN',
    duration: 'Release date trailer',
  },
  gravityGun: {
    title: 'Project: Mist Gravity Gun, Train Base, and Giant Creatures Preview',
    url: 'https://www.youtube.com/watch?v=cyIdyWG1k3c',
    channel: 'IndieVoice',
    duration: 'Gameplay preview',
  },
  gameplayPartOne: {
    title: 'Project: Mist Gameplay Walkthrough No Commentary Part 1',
    url: 'https://www.youtube.com/watch?v=ig7Oqu3fIQA',
    channel: 'Zhain Gaming',
    duration: 'Gameplay walkthrough',
  },
  survivalPreview: {
    title: 'Project: Mist Open World Survival Gameplay Preview',
    url: 'https://www.youtube.com/watch?v=KY7uwbiopIg',
    channel: 'The AxeMan',
    duration: 'Gameplay preview',
  },
};

export const projectMistFacts = {
  releaseDate: '2026-05-19',
  displayReleaseDate: 'May 19, 2026',
  platforms: 'PC via Steam',
  developer: 'Chicken Launcher',
  publisher: 'Chicken Launcher',
  steamId: '2383130',
  steamUrl: 'https://store.steampowered.com/app/2383130/Project_Mist/',
  earlyAccess: 'Early Access',
  players: 'Solo, multiplayer, co-op, and online co-op are listed on Steam',
};

const prereleaseNote =
  'This is a pre-release guide. It uses Steam, official trailer footage, and clearly marked player-facing assumptions. Exact numbers, map routes, enemy weaknesses, and final progression values need hands-on verification after launch.';

export const projectMistGuideContent: Record<string, ProjectMistGuide> = {
  'beginner-survival-guide': {
    title: 'Project: Mist Beginner Survival Guide',
    description:
      'A pre-release Project: Mist beginner guide for first-day priorities, survival planning, base setup, Gravity Gun use, and what still needs hands-on verification.',
    lastUpdated,
    timeToRead: '15 min',
    primaryKeyword: 'project mist beginner guide',
    spoilerLevel: 'safe',
    verificationStatus: 'Steam-listed',
    heroImage: hero,
    heroImageAlt: 'Project: Mist open world island survival scene',
    sections: [
      { title: 'Pre-release Survival Answer', id: 'pre-release-survival-answer' },
      { title: 'First Hour Priorities', id: 'first-hour-priorities' },
      { title: 'Mistake Checklist', id: 'mistake-checklist' },
      { title: 'Launch Update Plan', id: 'launch-update-plan' },
    ],
    sectionMedia: {
      'pre-release-survival-answer': {
        image: shot(1),
        alt: 'Project: Mist island environment used for beginner survival planning',
        caption: 'Project: Mist is built around an island, hostile wildlife, facilities, and survival decisions.',
      },
      'first-hour-priorities': {
        image: shot(2),
        alt: 'Project: Mist equipment and outdoor survival scene',
        caption: 'The first hour should focus on safe movement, resource recognition, and a simple fallback route.',
      },
      'mistake-checklist': {
        image: shot(3),
        alt: 'Project: Mist creature encounter scene',
        caption: 'Do not treat every giant creature as an early fight; observation may be safer than aggression.',
      },
      'launch-update-plan': {
        image: shot(4),
        alt: 'Project: Mist facility exploration screenshot',
        caption: 'Facility routes and progression gates will need hands-on verification after Early Access begins.',
      },
    },
    videos: [videos.releaseDate, videos.gravityGun, videos.gameplayPartOne],
    content: `
## Pre-release Survival Answer

${prereleaseNote}

Project: Mist should be approached as a survival routing problem before it is approached as a combat game. Steam describes an open-world survival horror island with solo and online co-op play, a Gravity Gun, a moving train base, gear upgrades, giant creatures, critter catching, and abandoned facilities. That means a good first run is about building a stable loop: gather, scout, return, upgrade, and only then push deeper into danger.

The safest pre-release recommendation is to avoid absolute promises. We do not know the final resource density, enemy damage, repair costs, hunger pressure, or train upgrade order. What we can say is that players should learn how the island communicates danger before committing rare materials. If the game rewards observation, then your first hour should produce information as much as loot.

| Topic | Current answer | Verification status |
| --- | --- | --- |
| Release timing | May 19, 2026 on Steam | Steam-listed |
| Play style | Solo, multiplayer, co-op, online co-op | Steam-listed |
| Core tool | Gravity Gun for manipulating objects and enemies | Steam-listed |
| Main base idea | Build and upgrade a moving train base | Steam-listed |
| Exact best route | Unknown until launch capture | Needs hands-on verification |

## First Hour Priorities

Start by mapping safety, not by chasing the biggest landmark. On a first save, identify the nearest resource nodes, water or food loop if present, fallback shelter, and the route back to your train base. If the Gravity Gun is available early, test it on low-risk objects before using it in a fight. If it has energy, cooldown, weight, or durability limits, those limits will define early survival more than raw damage.

For co-op groups, split roles without splitting too far. One player can scout resources, one can watch threats, and one can manage base upgrades, but everyone should be able to return to the train quickly. If Project: Mist uses shared inventory, revive rules, or host-owned saves, those details should be checked before a long group session.

## Mistake Checklist

| Mistake | Why it is risky | Better launch-week habit |
| --- | --- | --- |
| Fighting giant creatures immediately | Trailer footage implies scale and danger, not early farmability | Observe pathing and escape routes first |
| Spending rare materials on style upgrades | Upgrade costs are unknown before hands-on testing | Prioritize storage, defense, movement, and repair |
| Ignoring facilities | Steam highlights abandoned mysterious facilities | Mark entrances and return with gear |
| Treating co-op as automatically easier | Scaling, loot sharing, and save ownership are unverified | Test a short session before committing |

## Launch Update Plan

After Early Access opens, this guide should be updated with a real first-hour route, safe starter base advice, confirmed resource names, and verified beginner mistakes. Until then, the useful value is preparation: know the systems, know what is confirmed, and know which claims should not be trusted yet.
`,
    faqs: [
      {
        question: 'Is this a full Project: Mist walkthrough?',
        answer:
          'No. This is a pre-release beginner guide, and exact routes need hands-on verification after launch.',
      },
      {
        question: 'What should I do first in Project: Mist?',
        answer:
          'Scout safe resources, learn the Gravity Gun, identify a return route to the train base, and avoid unnecessary giant creature fights.',
      },
      {
        question: 'Can I play Project: Mist solo?',
        answer:
          'Yes. Steam lists single-player alongside multiplayer, co-op, and online co-op.',
      },
    ],
  },
  'release-date-platforms-guide': {
    title: 'Project: Mist Release Date, Platforms, and Early Access Guide',
    description:
      'A factual Project: Mist release date and platform guide covering Steam, Early Access, co-op tags, achievements, Steam Cloud, and what buyers should verify.',
    lastUpdated,
    timeToRead: '12 min',
    primaryKeyword: 'project mist release date',
    spoilerLevel: 'safe',
    verificationStatus: 'Steam-listed',
    heroImage: hero,
    heroImageAlt: 'Project: Mist release date guide key art',
    sections: [
      { title: 'Direct Answer', id: 'direct-answer' },
      { title: 'Steam Feature Checklist', id: 'steam-feature-checklist' },
      { title: 'Buying Before Launch', id: 'buying-before-launch' },
      { title: 'What Needs Verification', id: 'what-needs-verification' },
    ],
    sectionMedia: {
      'direct-answer': {
        image: shot(5),
        alt: 'Project: Mist landscape screenshot for release date answer',
        caption: 'Steam is the source of truth for the current launch date and feature labels.',
      },
      'steam-feature-checklist': {
        image: shot(6),
        alt: 'Project: Mist action screenshot for Steam feature checklist',
        caption: 'Steam lists solo, multiplayer, online co-op, achievements, cloud saves, and accessibility tags.',
      },
      'buying-before-launch': {
        image: shot(7),
        alt: 'Project: Mist train and survival scene for buyer guidance',
        caption: 'Early Access buyers should expect systems to change after launch.',
      },
      'what-needs-verification': {
        image: shot(8),
        alt: 'Project: Mist mysterious facility screenshot for verification planning',
        caption: 'Performance, progression, co-op save behavior, and final tuning need launch-week testing.',
      },
    },
    videos: [videos.releaseDate, videos.survivalPreview, videos.gravityGun],
    content: `
## Direct Answer

Project: Mist is currently listed on Steam for ${projectMistFacts.displayReleaseDate}. The game is developed and published by ${projectMistFacts.developer}, and the Steam page presents it as an Early Access open-world survival horror game for PC. The store description highlights a remote island, multiplayer co-op, a Gravity Gun, a moving train base, giant creatures, critter catching, gear upgrades, and abandoned mysterious facilities.

Because this is pre-release information, the date and features should be treated as current Steam-listed facts, not permanent guarantees. Store pages can change before launch. A good guide should show the current date, link users to Steam, and keep a visible update date so readers understand when the page was checked.

| Item | Current listing | Verification status |
| --- | --- | --- |
| Release date | May 19, 2026 | Steam-listed |
| Platform | PC via Steam | Steam-listed |
| Development model | Early Access | Steam-listed |
| Developer and publisher | Chicken Launcher | Steam-listed |
| Native console versions | Not listed in the current Steam data | Needs hands-on verification |

## Steam Feature Checklist

Steam lists single-player, multiplayer, co-op, online co-op, Steam achievements, Steam Cloud, Family Sharing, adjustable difficulty, custom volume controls, playable without timed input, stereo sound, and surround sound. These labels are useful, but they do not answer every practical question. For example, online co-op does not automatically explain host migration, save ownership, dedicated servers, revive rules, or loot sharing.

For SEO and user trust, keep the label and the practical meaning separate. Say Steam lists online co-op. Do not say the game has a specific server model unless that model is documented or tested.

## Buying Before Launch

Project: Mist is an Early Access game, so buyers should expect changes to balancing, content amount, performance, UI, and progression. That is not a negative point by itself; it is the nature of Early Access. The useful buyer question is whether the current concept matches what they want: survival horror, co-op island exploration, a mobile train base, and large-scale creature encounters.

Players who only want a fully finished map, complete story, final achievement guide, or optimized Steam Deck profile should wait for launch-week reports. Players who enjoy watching systems evolve may benefit from getting in early, especially if they want to learn base building and co-op routes before broader competition.

## What Needs Verification

The launch update should verify performance, controller support feel, save behavior, co-op session flow, achievement unlocks, resource names, crafting costs, train upgrades, and whether giant creature encounters are avoidable, farmable, or gated. Those details should not be guessed before hands-on testing.
`,
    faqs: [
      {
        question: 'When does Project: Mist release?',
        answer: 'Project: Mist is currently listed on Steam for May 19, 2026.',
      },
      {
        question: 'Is Project: Mist Early Access?',
        answer: 'Yes. Steam currently lists Project: Mist as an Early Access game.',
      },
      {
        question: 'What platform is Project: Mist on?',
        answer: 'The currently verified platform is PC via Steam.',
      },
      {
        question: 'Does Project: Mist have achievements?',
        answer: 'Steam lists Steam achievements, but exact achievement conditions need launch verification.',
      },
    ],
  },
  'multiplayer-coop-guide': {
    title: 'Project: Mist Multiplayer and Co-op Guide',
    description:
      'A pre-release Project: Mist multiplayer guide covering Steam-listed online co-op, group roles, save questions, scaling risks, and launch-week verification.',
    lastUpdated,
    timeToRead: '14 min',
    primaryKeyword: 'project mist multiplayer co-op',
    spoilerLevel: 'safe',
    verificationStatus: 'Steam-listed',
    heroImage: hero,
    heroImageAlt: 'Project: Mist co-op survival guide key art',
    sections: [
      { title: 'Co-op Status', id: 'co-op-status' },
      { title: 'Recommended Team Roles', id: 'recommended-team-roles' },
      { title: 'Co-op Risk Table', id: 'co-op-risk-table' },
      { title: 'Launch Test Checklist', id: 'launch-test-checklist' },
    ],
    sectionMedia: {
      'co-op-status': {
        image: shot(2),
        alt: 'Project: Mist open world scene for co-op status',
        caption: 'Steam lists multiplayer, co-op, and online co-op, but practical session rules still need testing.',
      },
      'recommended-team-roles': {
        image: shot(4),
        alt: 'Project: Mist facility exploration scene for co-op roles',
        caption: 'A good group should divide scouting, base work, and threat watching without splitting too far.',
      },
      'co-op-risk-table': {
        image: shot(6),
        alt: 'Project: Mist combat screenshot for co-op risk planning',
        caption: 'Co-op can add safety, but it can also create scaling, loot, and coordination problems.',
      },
      'launch-test-checklist': {
        image: shot(8),
        alt: 'Project: Mist base route screenshot for co-op launch testing',
        caption: 'Verify host saves, rejoin behavior, loot sharing, and revive rules before long sessions.',
      },
    },
    videos: [videos.releaseDate, videos.gameplayPartOne, videos.survivalPreview],
    content: `
## Co-op Status

Steam currently lists Project: Mist with single-player, multiplayer, co-op, and online co-op. That is enough to answer the basic question: yes, Project: Mist is presented as a co-op survival game. It is not enough to answer deeper launch questions about servers, world ownership, save transfer, player limits in practice, or scaling. Those details should be verified after Early Access begins.

The safest pre-release wording is that online co-op is Steam-listed and that the guide will verify session behavior at launch. Survival games often live or die by practical co-op details: can friends join an existing world, who keeps the save, how death works, whether resources are shared, and whether enemies scale with player count.

| Question | Current answer | Verification status |
| --- | --- | --- |
| Is co-op listed? | Yes, Steam lists co-op and online co-op | Steam-listed |
| Is solo supported? | Yes, Steam lists single-player | Steam-listed |
| Are dedicated servers confirmed? | Not confirmed from Steam feature tags alone | Needs hands-on verification |
| Does difficulty scale by player count? | Unknown before testing | Needs hands-on verification |

## Recommended Team Roles

For launch week, a three-role structure should work better than everyone wandering independently. One player scouts resources and landmarks. One player manages train base upgrades, storage, and repair priorities. One player watches threats and tests the Gravity Gun in low-risk encounters. In a two-player group, combine scouting and threat watching, while the second player keeps the base loop stable.

Avoid long-distance splitting until revive rules and fast travel are verified. Open-world survival games punish distance when a player dies far from supplies or when a host triggers danger before the rest of the group is ready. Use short scouting loops at first, then expand once you know how the island handles respawns and recovery.

## Co-op Risk Table

| Risk | Why it matters | Safer first-session habit |
| --- | --- | --- |
| Save ownership | The host may control world progress | Let the long-term host create the first world |
| Loot sharing | Scarce resources can slow group upgrades | Agree on storage rules early |
| Enemy scaling | More players may increase danger | Test small fights before giant creatures |
| Voice coordination | Gravity Gun and train movement may need timing | Call out experiments before using rare tools |

## Launch Test Checklist

The first co-op session should be short and diagnostic. Test joining, leaving, rejoining, death, dropped items, shared storage, train access, crafting benches, achievements, and whether progress persists for non-host players. After that, start the long world. This protects the group from discovering a save limitation after several hours of work.
`,
    faqs: [
      {
        question: 'Does Project: Mist have online co-op?',
        answer: 'Yes. Steam currently lists co-op and online co-op for Project: Mist.',
      },
      {
        question: 'Can Project: Mist be played solo?',
        answer: 'Yes. Steam lists single-player support.',
      },
      {
        question: 'How many players does Project: Mist support?',
        answer:
          'The exact practical player limit and scaling behavior should be verified at launch before being treated as final.',
      },
    ],
  },
  'gravity-gun-guide': {
    title: 'Project: Mist Gravity Gun Guide',
    description:
      'A pre-release Project: Mist Gravity Gun guide explaining confirmed uses, combat planning, object manipulation, co-op utility, and limits that need testing.',
    lastUpdated,
    timeToRead: '15 min',
    primaryKeyword: 'project mist gravity gun',
    spoilerLevel: 'safe',
    verificationStatus: 'Steam-listed',
    heroImage: hero,
    heroImageAlt: 'Project: Mist Gravity Gun guide key art',
    sections: [
      { title: 'What Is Confirmed', id: 'what-is-confirmed' },
      { title: 'Best Uses to Test First', id: 'best-uses-to-test-first' },
      { title: 'Limits That Matter', id: 'limits-that-matter' },
      { title: 'Co-op Utility', id: 'co-op-utility' },
    ],
    sectionMedia: {
      'what-is-confirmed': {
        image: shot(3),
        alt: 'Project: Mist Gravity Gun style gameplay screenshot',
        caption: 'Steam describes a Gravity Gun for manipulating objects and enemies.',
      },
      'best-uses-to-test-first': {
        image: shot(6),
        alt: 'Project: Mist combat encounter for Gravity Gun testing',
        caption: 'Test utility before damage: moving objects, interrupting threats, and creating space.',
      },
      'limits-that-matter': {
        image: shot(7),
        alt: 'Project: Mist survival equipment screenshot for Gravity Gun limits',
        caption: 'Energy, cooldown, object weight, and enemy immunity will define the real meta.',
      },
      'co-op-utility': {
        image: shot(2),
        alt: 'Project: Mist co-op exploration scene for Gravity Gun utility',
        caption: 'In co-op, the Gravity Gun may be as useful for setup and rescue as for fighting.',
      },
    },
    videos: [videos.gravityGun, videos.releaseDate, videos.gameplayPartOne],
    content: `
## What Is Confirmed

The Gravity Gun is one of Project: Mist's clearest hooks. Steam says players can manipulate objects and enemies with it, which implies it is not just a weapon but a survival tool. It may help with combat spacing, moving resources, environmental interaction, creature control, or facility traversal. Exact values and restrictions are not confirmed until hands-on testing.

Do not build early guides around assumed damage numbers. The useful pre-release approach is to define test categories. Does the tool lift heavy objects? Does it interrupt enemy attacks? Does it consume energy? Can it move base materials? Does it work on giant creatures or only smaller threats? These are the questions that should shape the launch update.

| Use case | Why players care | Verification status |
| --- | --- | --- |
| Object manipulation | Building, puzzle solving, moving resources | Steam-listed |
| Enemy manipulation | Crowd control and emergency defense | Steam-listed |
| Giant creature control | Could change boss-style encounters | Needs hands-on verification |
| Co-op rescue | Pulling threats or objects away from teammates | Needs hands-on verification |

## Best Uses to Test First

Start with low-risk objects near your base. Test pickup range, throw distance, whether objects damage enemies, and whether repeated use has a cost. Then test smaller enemies before using the tool near a giant creature. A survival game can make a tool look powerful in a trailer while still limiting it through cooldowns, weight classes, battery charge, or enemy resistance.

For base building, check whether the Gravity Gun speeds up hauling or construction. If it can move bulky materials, it may become the highest priority tool for early efficiency. If it is mostly combat-focused, then storage and train upgrades may matter more.

## Limits That Matter

The launch guide should verify five limits: energy cost, cooldown, object weight, enemy category, and friendly-fire risk. Energy cost decides whether the tool is a daily workhorse or an emergency option. Weight decides whether it helps with base logistics. Enemy category decides whether it is strong against wildlife, facility threats, or only small enemies. Friendly-fire risk matters in co-op because a physics tool can create chaos if players can hit each other with objects.

## Co-op Utility

In co-op, the Gravity Gun should be tested as a support tool. One player can control space while another gathers, repairs, or revives. A player near the train may use it to clear a path or move objects into defensive positions. The best group use may not be damage; it may be buying time.
`,
    faqs: [
      {
        question: 'Is the Gravity Gun confirmed in Project: Mist?',
        answer: 'Yes. Steam describes a Gravity Gun that manipulates objects and enemies.',
      },
      {
        question: 'Can the Gravity Gun defeat giant creatures?',
        answer:
          'That is not verified before launch. Treat giant creature interactions as a hands-on test item.',
      },
      {
        question: 'Is the Gravity Gun useful in co-op?',
        answer:
          'It should be useful, but exact co-op rescue and friendly-fire behavior need launch testing.',
      },
    ],
  },
  'train-base-building-guide': {
    title: 'Project: Mist Train Base Building Guide',
    description:
      'A pre-release Project: Mist train base guide covering the moving base concept, upgrade priorities, defense planning, storage, and launch-week verification.',
    lastUpdated,
    timeToRead: '16 min',
    primaryKeyword: 'project mist train base',
    spoilerLevel: 'safe',
    verificationStatus: 'Steam-listed',
    heroImage: hero,
    heroImageAlt: 'Project: Mist train base building guide key art',
    sections: [
      { title: 'Moving Train Base Answer', id: 'moving-train-base-answer' },
      { title: 'Upgrade Priorities', id: 'upgrade-priorities' },
      { title: 'Defense and Storage', id: 'defense-and-storage' },
      { title: 'What to Verify at Launch', id: 'what-to-verify-at-launch' },
    ],
    sectionMedia: {
      'moving-train-base-answer': {
        image: shot(4),
        alt: 'Project: Mist train base environment screenshot',
        caption: 'Steam confirms a moving train base as a major survival system.',
      },
      'upgrade-priorities': {
        image: shot(5),
        alt: 'Project: Mist base upgrade planning screenshot',
        caption: 'Early upgrades should favor survival loops over cosmetic improvements.',
      },
      'defense-and-storage': {
        image: shot(6),
        alt: 'Project: Mist hostile encounter near base route',
        caption: 'A mobile base still needs defense planning if creatures can pressure travel routes.',
      },
      'what-to-verify-at-launch': {
        image: shot(7),
        alt: 'Project: Mist crafting and base systems screenshot',
        caption: 'Upgrade costs, placement limits, and train damage rules need hands-on testing.',
      },
    },
    videos: [videos.gravityGun, videos.releaseDate, videos.survivalPreview],
    content: `
## Moving Train Base Answer

Project: Mist's Steam page highlights a moving train base, which is one of the strongest search hooks for the game. A mobile base changes survival planning because home is not only a storage box; it is a route, a retreat point, and possibly a progression gate. Until launch, the exact upgrade tree and travel rules are unknown, so this guide should focus on priorities rather than fake recipes.

The best first principle is to make the train reliable before making it specialized. If the game has fuel, repair, power, storage, crafting stations, defenses, or route unlocks, the early meta will be built around whichever of those systems prevents run-ending failure.

| Base system | Why it likely matters | Verification status |
| --- | --- | --- |
| Storage | Survival games punish disorganized resources | Needs hands-on verification |
| Repair or durability | A moving base may take damage | Needs hands-on verification |
| Crafting stations | Gear upgrades need a stable production loop | Steam-listed concept |
| Defense | Giant creatures may threaten travel or stops | Trailer-observed |

## Upgrade Priorities

For launch week, prioritize upgrades that reduce repeated friction: storage, crafting access, repair capability, safe sleep or respawn if present, and route mobility. Damage upgrades can wait unless the game quickly forces base defense. A train that cannot store materials or support crafting will slow every other system.

In co-op, assign one player to base inventory standards. Survival groups often lose time because every box becomes a random dump. If Project: Mist supports shared storage, create categories early: food, building materials, weapon materials, tools, research or facility items, and emergency supplies.

## Defense and Storage

Do not assume mobility equals safety. If creatures patrol routes, if events attack the train, or if facilities require parking near danger, defensive planning matters. Test whether enemies can damage the train, whether storage can be lost, whether players can build defenses on or near the train, and whether the Gravity Gun can move objects into protective positions.

Storage should support exploration loops. A good loop is leave train, scout facility or resource area, return, sort, craft, repair, move. If the train can be upgraded for speed, capacity, or access to new biomes, those upgrades may outrank weapons.

## What to Verify at Launch

The launch guide should capture upgrade names, material costs, build limits, placement rules, whether the train has health, whether it needs fuel, and whether co-op players share build permissions. These details should replace pre-release assumptions as soon as hands-on testing is available.
`,
    faqs: [
      {
        question: 'Can you build a train base in Project: Mist?',
        answer: 'Yes. Steam describes building a moving train base as a core feature.',
      },
      {
        question: 'What train upgrades should I get first?',
        answer:
          'Before launch, the safest priority is storage, crafting, repair, and mobility, pending hands-on verification.',
      },
      {
        question: 'Can creatures damage the train?',
        answer:
          'That needs launch testing. Do not treat train damage or defense rules as confirmed yet.',
      },
    ],
  },
  'creatures-guide': {
    title: 'Project: Mist Creatures Guide',
    description:
      'A pre-release Project: Mist creatures guide for giant creature encounters, observation, combat caution, escape planning, and post-launch verification.',
    lastUpdated,
    timeToRead: '14 min',
    primaryKeyword: 'project mist creatures',
    spoilerLevel: 'safe',
    verificationStatus: 'Trailer-observed',
    heroImage: hero,
    heroImageAlt: 'Project: Mist giant creatures guide key art',
    sections: [
      { title: 'Creature Answer Summary', id: 'creature-answer-summary' },
      { title: 'Fight, Flee, or Observe', id: 'fight-flee-or-observe' },
      { title: 'Encounter Tracking Table', id: 'encounter-tracking-table' },
      { title: 'Post-launch Weakness Testing', id: 'post-launch-weakness-testing' },
    ],
    sectionMedia: {
      'creature-answer-summary': {
        image: shot(3),
        alt: 'Project: Mist large creature encounter screenshot',
        caption: 'Giant creatures are a confirmed theme, but exact species and weaknesses need capture.',
      },
      'fight-flee-or-observe': {
        image: shot(6),
        alt: 'Project: Mist hostile wildlife combat screenshot',
        caption: 'Observation is safer than early aggression until damage and escape rules are known.',
      },
      'encounter-tracking-table': {
        image: shot(1),
        alt: 'Project: Mist island biome screenshot for encounter tracking',
        caption: 'Track biome, time, behavior, aggro range, and reward before writing weakness claims.',
      },
      'post-launch-weakness-testing': {
        image: shot(8),
        alt: 'Project: Mist facility and creature route screenshot',
        caption: 'Facility enemies and island creatures may use different rules.',
      },
    },
    videos: [videos.releaseDate, videos.survivalPreview, videos.gravityGun],
    content: `
## Creature Answer Summary

Project: Mist markets giant creatures as a major survival threat. Steam says players can fight giant creatures, catch critters, and survive a hostile world shaped by abandoned facilities. Trailer footage supports the large-creature hook, but a responsible guide should not invent a bestiary before launch. Names, health, loot, weaknesses, spawn rules, and biome behavior all need hands-on capture.

The best pre-release advice is to treat creatures as systems to study. Watch pathing, sound cues, aggro distance, safe terrain, whether the Gravity Gun works on them, and whether the train base can be used as a retreat. If a creature is too large to fight early, the correct strategy may be avoidance or environmental routing.

## Fight, Flee, or Observe

Use three categories when you first meet a creature. Fight only if it is small, isolated, and you can recover safely. Flee if it threatens the train, blocks a facility entrance, or appears during a resource run with valuable loot. Observe if it is large, slow, territorial, or tied to a landmark. Observation is not wasted time; it reveals whether the creature is a boss, a roaming hazard, a resource source, or a set-piece threat.

Co-op groups should avoid everyone attacking at once until friendly fire, revive rules, and scaling are known. One player can watch behavior while another tests range or sound. If the Gravity Gun interacts with the creature, record exactly what it does.

## Encounter Tracking Table

| Field | Why it matters | Verification status |
| --- | --- | --- |
| Biome or landmark | Spawn patterns may be location-based | Needs hands-on verification |
| Aggro trigger | Sight, sound, proximity, or attack may differ | Needs hands-on verification |
| Gravity Gun effect | Could interrupt, move, stagger, or fail | Needs hands-on verification |
| Reward | Loot determines whether fighting is worth it | Needs hands-on verification |
| Escape route | Survival value matters more than kill speed | Trailer-observed |

## Post-launch Weakness Testing

After launch, creature pages should be updated by test blocks: observe without attacking, test basic tools, test Gravity Gun, test ranged weapons, test traps or environment, then test co-op scaling. Do not publish a weakness unless it is repeatable. If a creature dies after several factors, separate the likely cause from the confirmed cause.
`,
    faqs: [
      {
        question: 'Does Project: Mist have giant creatures?',
        answer: 'Yes. Steam and trailer footage highlight giant creatures as a core threat.',
      },
      {
        question: 'Can every creature be killed?',
        answer:
          'That is not verified before launch. Some creatures may be hazards, bosses, or avoidance challenges.',
      },
      {
        question: 'Will this guide list all weaknesses?',
        answer:
          'Only after hands-on testing. Pre-release weakness lists would be unreliable.',
      },
    ],
  },
  'crafting-gear-upgrades-guide': {
    title: 'Project: Mist Crafting and Gear Upgrades Guide',
    description:
      'A pre-release Project: Mist crafting guide covering gear upgrades, resources, critter catching, food loops, and what needs launch verification.',
    lastUpdated,
    timeToRead: '15 min',
    primaryKeyword: 'project mist crafting gear upgrades',
    spoilerLevel: 'safe',
    verificationStatus: 'Steam-listed',
    heroImage: hero,
    heroImageAlt: 'Project: Mist crafting and gear upgrades guide key art',
    sections: [
      { title: 'Crafting Answer Summary', id: 'crafting-answer-summary' },
      { title: 'Upgrade Priority Framework', id: 'upgrade-priority-framework' },
      { title: 'Resource Categories', id: 'resource-categories' },
      { title: 'Verification Plan', id: 'verification-plan' },
    ],
    sectionMedia: {
      'crafting-answer-summary': {
        image: shot(7),
        alt: 'Project: Mist crafting and gear screenshot',
        caption: 'Steam confirms gear upgrades, but exact recipes and costs need testing.',
      },
      'upgrade-priority-framework': {
        image: shot(5),
        alt: 'Project: Mist survival gear planning screenshot',
        caption: 'Prioritize upgrades that keep exploration loops stable.',
      },
      'resource-categories': {
        image: shot(1),
        alt: 'Project: Mist island resource environment screenshot',
        caption: 'Resource categories should be tracked by use, not guessed by name.',
      },
      'verification-plan': {
        image: shot(4),
        alt: 'Project: Mist facility screenshot for crafting verification',
        caption: 'Facilities may gate advanced materials or upgrade stations.',
      },
    },
    videos: [videos.survivalPreview, videos.gravityGun, videos.gameplayPartOne],
    content: `
## Crafting Answer Summary

Steam says Project: Mist lets players upgrade gear, build a moving train base, catch critters, and survive a hostile island. That strongly implies crafting and resource routing are central, but exact recipe names, station types, material costs, and upgrade tiers are not verified before launch. This guide should prepare the framework, then replace placeholders with tested values after Early Access starts.

The best pre-release upgrade logic is survival first, damage second, convenience third. In a hostile open world, the strongest early upgrade is often the one that lets you return alive with more resources, not the one with the largest number on a weapon.

## Upgrade Priority Framework

| Priority | Why it matters | Verification status |
| --- | --- | --- |
| Storage and carrying | More materials per loop improves every system | Needs hands-on verification |
| Repair and durability | Survival tools may degrade | Needs hands-on verification |
| Food and critter systems | Steam mentions catching critters | Steam-listed |
| Gravity Gun support | Utility may depend on energy or upgrades | Needs hands-on verification |
| Weapons and defenses | Needed once creature behavior is known | Trailer-observed |

Start with upgrades that reduce failed trips. If you can carry more, heal more reliably, repair gear, or craft at the train, every later objective becomes easier. Damage upgrades matter once you know which creatures must be fought.

## Resource Categories

Track resources by function: building, repair, food, weapon, utility, facility, and rare upgrade. This is more useful than a raw item list during launch week because names can be learned quickly, but function tells players what not to waste. If an item appears in a facility, mark whether it respawns, whether it is needed for the train, and whether co-op players share it.

Critter catching should be tested separately from hunting. If critters provide food, crafting materials, farming systems, or train upgrades, they may become a low-risk resource loop. If they are mostly optional, they belong later in progression.

## Verification Plan

After launch, update this page with confirmed station names, recipe costs, upgrade tiers, durability rules, food values, and whether multiplayer changes resource yield. Each recipe should have a source context: crafted at train, found in facility, unlocked by upgrade, or dropped by creature. That prevents a guide from becoming a flat list with no route value.
`,
    faqs: [
      {
        question: 'Does Project: Mist have crafting?',
        answer:
          'Steam describes gear upgrades, base building, critter catching, and survival systems, but exact crafting recipes need verification.',
      },
      {
        question: 'What should I upgrade first?',
        answer:
          'Before launch, prioritize storage, repair, food stability, and core tools over pure damage.',
      },
      {
        question: 'Are all recipes known?',
        answer: 'No. Recipe names and costs should be captured after Early Access launches.',
      },
    ],
  },
  'map-facilities-guide': {
    title: 'Project: Mist Map and Facilities Guide',
    description:
      'A pre-release Project: Mist map guide for island exploration, abandoned facilities, route notes, landmarks, and the launch-week mapping plan.',
    lastUpdated,
    timeToRead: '14 min',
    primaryKeyword: 'project mist map facilities',
    spoilerLevel: 'safe',
    verificationStatus: 'Steam-listed',
    heroImage: hero,
    heroImageAlt: 'Project: Mist map and facilities guide key art',
    sections: [
      { title: 'Map Answer Summary', id: 'map-answer-summary' },
      { title: 'Exploration Framework', id: 'exploration-framework' },
      { title: 'Facility Checklist', id: 'facility-checklist' },
      { title: 'Launch Mapping Rules', id: 'launch-mapping-rules' },
    ],
    sectionMedia: {
      'map-answer-summary': {
        image: shot(1),
        alt: 'Project: Mist island landscape for map guide',
        caption: 'The island should be mapped by safe loops, landmarks, and facility access.',
      },
      'exploration-framework': {
        image: shot(2),
        alt: 'Project: Mist open-world exploration screenshot',
        caption: 'Exploration should expand from the train base in repeatable loops.',
      },
      'facility-checklist': {
        image: shot(8),
        alt: 'Project: Mist abandoned facility screenshot',
        caption: 'Facilities are likely progression hotspots and need careful launch-week capture.',
      },
      'launch-mapping-rules': {
        image: shot(4),
        alt: 'Project: Mist route planning screenshot',
        caption: 'A useful map guide records access requirements, threats, and return routes.',
      },
    },
    videos: [videos.releaseDate, videos.gameplayPartOne, videos.survivalPreview],
    content: `
## Map Answer Summary

Project: Mist is described as an open-world survival horror game on a remote island with abandoned mysterious facilities. That is enough to plan a map guide, but not enough to publish a complete map before launch. The correct pre-release structure is a mapping framework: landmarks, safe loops, facility entrances, resource zones, creature zones, train routes, and return points.

Open-world survival maps are useful when they answer route questions. Where can I go safely? What do I need before entering a facility? Where can I return to the train? Which areas are likely dangerous? A screenshot gallery alone is not enough.

## Exploration Framework

Start from the train base and create loops. A loop should have an objective, resource expectation, risk level, and return route. Early loops should be short. Facility loops should begin only after you know whether there are locks, power requirements, environmental hazards, or enemy density. If the Gravity Gun opens paths, mark those paths separately from normal movement.

For co-op, map communication matters. Use simple names for landmarks: broken tower, beach facility, red pipe station, giant rib field. These names can be replaced with official map labels later, but they help groups coordinate before the full map is known.

## Facility Checklist

| Facility detail | Why it matters | Verification status |
| --- | --- | --- |
| Entrance location | Helps players plan routes from the train | Needs hands-on verification |
| Access requirement | Tools, power, key items, or combat may gate entry | Needs hands-on verification |
| Threat type | Facility enemies may differ from island creatures | Needs hands-on verification |
| Loot category | Determines whether a facility is worth repeating | Needs hands-on verification |
| Exit route | Survival value depends on leaving safely | Needs hands-on verification |

## Launch Mapping Rules

Do not publish a complete map until it has been walked. For the first launch update, prioritize a starter route, first facility route, safe resource loop, train stop notes, and any high-danger zones. Mark every untested branch as unverified. The map guide should earn trust by being honest about what has and has not been captured.
`,
    faqs: [
      {
        question: 'Does Project: Mist have a large map?',
        answer:
          'Steam describes an open-world island, but exact map size and region count need launch verification.',
      },
      {
        question: 'Are facilities important in Project: Mist?',
        answer:
          'Yes. Steam mentions abandoned mysterious facilities, so they are likely important exploration targets.',
      },
      {
        question: 'Will this page include a full map?',
        answer:
          'After launch, it should be updated with tested routes and landmarks. Pre-release full maps would be speculative.',
      },
    ],
  },
};

export const projectMistGuideOrder = [
  'beginner-survival-guide',
  'release-date-platforms-guide',
  'multiplayer-coop-guide',
  'gravity-gun-guide',
  'train-base-building-guide',
  'creatures-guide',
  'crafting-gear-upgrades-guide',
  'map-facilities-guide',
] as const;

export const projectMistGuides = projectMistGuideOrder.map((slug) => ({
  slug,
  title: projectMistGuideContent[slug].title.replace(/^Project: Mist:?\s*/, ''),
  description: projectMistGuideContent[slug].description,
}));

export const projectMistHubContent = {
  overview: `Project: Mist is a pre-release open-world survival horror game from ${projectMistFacts.developer}, currently listed on Steam for ${projectMistFacts.displayReleaseDate}. The Steam page highlights solo play, multiplayer, co-op, online co-op, a Gravity Gun, a moving train base, giant creatures, critter catching, gear upgrades, and abandoned mysterious facilities.

This hub is intentionally built as a pre-release answer center. It helps players decide what is confirmed, what is likely based on trailers, and what should wait for hands-on verification after Early Access begins.`,
  features: [
    'Steam-listed release date: May 19, 2026',
    'Developed and published by Chicken Launcher',
    'Early Access open-world survival horror',
    'Solo, multiplayer, co-op, and online co-op listed on Steam',
    'Gravity Gun for manipulating objects and enemies',
    'Moving train base, gear upgrades, critter catching, and giant creatures',
    'Guide pages use verification labels to avoid fake pre-launch certainty',
  ],
  guides: projectMistGuides,
  tips: [
    'Start with the release date and beginner guides if you are deciding whether to wishlist or buy.',
    'Use the multiplayer guide before planning a group world.',
    'Treat creature weaknesses, map routes, and crafting costs as unverified until launch.',
    'Watch Gravity Gun and train base systems first because they define the game identity.',
    'Return after Early Access launch for hands-on route updates.',
  ],
  faq: [
    {
      question: 'When does Project: Mist release?',
      answer: 'Project: Mist is currently listed on Steam for May 19, 2026.',
    },
    {
      question: 'Is Project: Mist multiplayer?',
      answer: 'Yes. Steam lists multiplayer, co-op, and online co-op, plus single-player.',
    },
    {
      question: 'Is Project: Mist Early Access?',
      answer: 'Yes. Steam currently lists Project: Mist as an Early Access game.',
    },
    {
      question: 'Can you build a train base?',
      answer: 'Yes. Steam describes building a moving train base as a core feature.',
    },
  ],
};
