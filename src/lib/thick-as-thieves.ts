export type ThickAsThievesVerificationStatus =
  | 'Official'
  | 'Steam-listed'
  | 'Trailer-observed'
  | 'Needs hands-on verification';

export interface ThickAsThievesMedia {
  image: string;
  alt: string;
  caption: string;
}

export interface ThickAsThievesVideo {
  title: string;
  url: string;
  channel: string;
  duration: string;
}

export interface ThickAsThievesGuide {
  title: string;
  description: string;
  lastUpdated: string;
  timeToRead: string;
  primaryKeyword: string;
  spoilerLevel: 'safe' | 'spoiler';
  verificationStatus: ThickAsThievesVerificationStatus;
  sections: { title: string; id: string }[];
  content: string;
  faqs: { question: string; answer: string }[];
  heroImage: string;
  heroImageAlt: string;
  sectionMedia: Record<string, ThickAsThievesMedia>;
  videos: ThickAsThievesVideo[];
}

const lastUpdated = '2026-05-16';
const hero = '/games/thick-as-thieves/hero.jpg';
const shot = (index: number) =>
  `/games/thick-as-thieves/screenshots/thick-as-thieves-screenshot-${index}.jpg`;

const videos = {
  welcome: {
    title: 'Thick as Thieves | Welcome to Kilcairn',
    url: 'https://www.youtube.com/watch?v=NZ-uZ1K-KxY',
    channel: 'Megabit Publishing',
    duration: 'Gameplay overview',
  },
  gameplay: {
    title: 'Thick as Thieves | Triple-i Showcase Gameplay Trailer',
    url: 'https://www.youtube.com/watch?v=NcGUxFveZHU',
    channel: 'Megabit Publishing',
    duration: 'Gameplay trailer',
  },
  releaseDate: {
    title: 'Thick as Thieves - Release Date Trailer | The Triple-i Initiative',
    url: 'https://www.youtube.com/watch?v=go-dwmrGRHc',
    channel: 'The Triple-i Initiative',
    duration: 'Release date trailer',
  },
  announce: {
    title: 'Thick As Thieves - Announce Trailer',
    url: 'https://www.youtube.com/watch?v=4z9nK5Tj4Rw',
    channel: 'Thick As Thieves',
    duration: 'Announcement trailer',
  },
};

export const thickAsThievesFacts = {
  releaseDate: '2026-05-20',
  displayReleaseDate: 'May 20, 2026',
  platforms: 'PC via Steam',
  developer: 'OtherSide Entertainment',
  publisher: 'Megabit Publishing',
  steamId: '3341000',
  steamUrl: 'https://store.steampowered.com/app/3341000/Thick_As_Thieves/',
  officialUrl: 'https://megabit-publishing.com/games/thick-as-thieves',
  faqUrl: 'https://megabit-publishing.com/thick-as-thieves-faqs',
  players: 'Solo or online co-op with one partner',
  campaignScope:
    'The launch build is currently described as an introductory campaign with 3 maps, 16 contracts, at least 4 hours, and 6 unique pieces of gear.',
  languages:
    'Steam lists English with full audio plus French, German, Spanish - Spain, Japanese, Portuguese - Brazil, Simplified Chinese, and Traditional Chinese.',
  pcMinimum: {
    os: 'Windows 10',
    processor: 'Intel Core i5-4570',
    memory: '12 GB RAM',
    graphics: 'NVIDIA GeForce GTX 1060 6GB or equivalent',
    directx: 'Version 12',
    storage: '10 GB available space',
    notes: 'SSD required',
  },
  pcRecommended: {
    os: 'Windows 11',
    processor: 'Intel Core i7-8700',
    memory: '16 GB RAM',
    graphics: 'NVIDIA GeForce RTX 2070 8GB or equivalent',
    directx: 'Version 12',
    storage: '10 GB available space',
    notes: 'SSD required',
  },
};

const prereleaseNote =
  'This is a pre-release guide set. It uses the current Steam store page, Megabit Publishing FAQ and announcement pages, and official trailer footage. Save structure, matchmaking flow, exact gear names, full mission routing, and launch performance still need hands-on verification once the PC release is live on May 20, 2026.';

export const thickAsThievesGuideContent: Record<string, ThickAsThievesGuide> = {
  'release-date-platforms-guide': {
    title: 'Thick As Thieves Release Date, Platforms, and Store Facts Guide',
    description:
      'A factual Thick As Thieves release date guide covering May 20, 2026, PC platform status, Steam features, language support, and what still needs launch-day verification.',
    lastUpdated,
    timeToRead: '12 min',
    primaryKeyword: 'thick as thieves release date',
    spoilerLevel: 'safe',
    verificationStatus: 'Steam-listed',
    heroImage: hero,
    heroImageAlt: 'Thick As Thieves key art for release date guide',
    sections: [
      { title: 'Direct Answer', id: 'direct-answer' },
      { title: 'Platform Status', id: 'platform-status' },
      { title: 'Steam Feature Checklist', id: 'steam-feature-checklist' },
      { title: 'Launch-Week Verification', id: 'launch-week-verification' },
    ],
    sectionMedia: {
      'direct-answer': {
        image: shot(1),
        alt: 'Thick As Thieves city scene for release date answer',
        caption: 'Steam currently lists Thick As Thieves for May 20, 2026.',
      },
      'platform-status': {
        image: shot(2),
        alt: 'Thick As Thieves stealth mission screenshot for platform status',
        caption: 'Current public messaging is centered on the PC Steam release, not a multi-platform day-one launch.',
      },
      'steam-feature-checklist': {
        image: shot(3),
        alt: 'Thick As Thieves heist screenshot for Steam feature checklist',
        caption: 'Steam already answers several buyer questions: controller support, cloud saves, online co-op, and accessibility flags.',
      },
      'launch-week-verification': {
        image: shot(4),
        alt: 'Thick As Thieves alley infiltration screenshot for launch verification',
        caption: 'Useful pre-release coverage marks what is store-listed and what still needs live testing.',
      },
    },
    videos: [videos.releaseDate, videos.gameplay, videos.announce],
    content: `
## Direct Answer

Thick As Thieves is currently listed on Steam for ${thickAsThievesFacts.displayReleaseDate}. The store page names ${thickAsThievesFacts.developer} as developer and ${thickAsThievesFacts.publisher} as publisher, and the current public platform target is PC via Steam. The short store description is also much more specific than many early store pages: this is framed as a stealth-action heist game that can be played solo or with a partner in co-op multiplayer, not as a giant forever-service sandbox.

${prereleaseNote}

| Item | Current answer | Verification status |
| --- | --- | --- |
| Release date | May 20, 2026 | Steam-listed |
| Launch platform | PC via Steam | Steam-listed |
| Developer | OtherSide Entertainment | Steam-listed |
| Publisher | Megabit Publishing | Steam-listed |
| Play modes | Single-player, multiplayer, co-op, online co-op | Steam-listed |
| Console launch date | Not currently announced | Needs hands-on verification |

For readers, the main value of this page is clarity. A lot of older coverage still talks about Thick As Thieves as if its original PvPvE pitch is the whole story. The current official Steam copy is narrower and easier to act on: a PC launch, a stealth campaign, and optional co-op with a partner.

## Platform Status

As of May 16, 2026, the safest platform summary is simple: Thick As Thieves launches first on PC through Steam. The official FAQ does say the team would like to have the game on as many platforms as possible, but it also says the current focus is preparing the PC release for launch. That means this site should not imply a confirmed console version, cloud streaming rollout, or day-one cross-platform parity unless a store page or official announcement changes.

This matters because buyers do not search only for the date. They also search for whether they can wait for console, whether friends can join from another platform, and whether they should expect a polished PC-first release. Right now the honest answer is that PC is the only clearly documented launch platform, while console ambition exists at the FAQ level without a launch commitment.

## Steam Feature Checklist

Steam currently lists single-player, multiplayer, co-op, online co-op, full controller support, Steam Cloud, Family Sharing, adjustable difficulty, playable without timed input, and custom volume controls. Those tags are useful because they answer real purchase questions, but they should not be overinterpreted. Online co-op does not automatically confirm crossplay, dedicated servers, host migration, drop-in recovery rules, or account progression sync.

Steam also lists the current language set, with English full audio support and multiple additional interface and subtitle languages. That makes this one of the cleaner pre-release store pages in the project, because it already gives global readers something concrete to work with instead of vague regional promises.

## Launch-Week Verification

Launch week should re-check at least four things before the page is treated as final. First, verify whether the Steam release time stays locked to May 20, 2026 in all major regions. Second, confirm the live co-op flow: invitation method, host ownership, reconnect behavior, and whether public matchmaking exists. Third, test controller feel, cloud sync behavior, and whether the accessibility options present on Steam are fully exposed in the live build. Fourth, recheck console messaging, because official FAQ pages can change quickly around launch.

That is the difference between a useful pre-release guide and SEO filler. The useful guide gives the reader what is known now, uses the exact date that is currently public, and keeps a short list of what must be retested once real players get access.
`,
    faqs: [
      {
        question: 'When does Thick As Thieves release?',
        answer: 'Thick As Thieves is currently listed on Steam for May 20, 2026.',
      },
      {
        question: 'What platforms is Thick As Thieves on?',
        answer: 'The current public launch platform is PC via Steam.',
      },
      {
        question: 'Is Thick As Thieves on console?',
        answer:
          'Console versions are not currently announced for launch. The official FAQ says the team would like broader platform coverage later, but the focus right now is the PC release.',
      },
      {
        question: 'Does Thick As Thieves support co-op?',
        answer:
          'Yes. Steam lists co-op and online co-op, and the official FAQ says you can play solo or with a partner in crime.',
      },
    ],
  },
  'solo-coop-campaign-guide': {
    title: 'Thick As Thieves Solo, Co-op, and Campaign Scope Guide',
    description:
      'A practical Thick As Thieves guide to solo versus co-op play, campaign scope, replay expectations, and the session details that still need launch verification.',
    lastUpdated,
    timeToRead: '13 min',
    primaryKeyword: 'thick as thieves co op',
    spoilerLevel: 'safe',
    verificationStatus: 'Official',
    heroImage: hero,
    heroImageAlt: 'Thick As Thieves solo and co-op guide key art',
    sections: [
      { title: 'Quick Mode Answer', id: 'quick-mode-answer' },
      { title: 'Solo Versus Co-op', id: 'solo-versus-co-op' },
      { title: 'Campaign Scope Today', id: 'campaign-scope-today' },
      { title: 'What Co-op Players Still Need to Test', id: 'what-co-op-players-still-need-to-test' },
    ],
    sectionMedia: {
      'quick-mode-answer': {
        image: shot(5),
        alt: 'Thick As Thieves rooftop scene for solo and co-op answer',
        caption: 'Official messaging is clear that the game supports both solo play and partner co-op.',
      },
      'solo-versus-co-op': {
        image: shot(6),
        alt: 'Thick As Thieves stealth duo screenshot for solo versus co-op section',
        caption: 'Co-op should change how you cover risk, but it should not be described as a completely separate game until launch testing confirms that.',
      },
      'campaign-scope-today': {
        image: shot(7),
        alt: 'Thick As Thieves mission environment screenshot for campaign scope',
        caption: 'The current official scope is an introductory campaign rather than an endless live-service roadmap.',
      },
      'what-co-op-players-still-need-to-test': {
        image: shot(8),
        alt: 'Thick As Thieves escape route screenshot for co-op testing checklist',
        caption: 'Practical co-op questions like hosting, reconnects, and session progress need live verification.',
      },
    },
    videos: [videos.welcome, videos.gameplay, videos.releaseDate],
    content: `
## Quick Mode Answer

The best current summary is that Thick As Thieves supports both solo play and online co-op with one partner. That is not speculation. The official FAQ says the game is playable solo or with a partner in crime in co-op multiplayer, and Steam lists single-player, multiplayer, co-op, and online co-op. That combination is important because it tells readers this is not a co-op-only experiment and not a purely solitary stealth sim either.

| Question | Current answer | Verification status |
| --- | --- | --- |
| Can you play alone? | Yes | Official |
| Can you play online co-op? | Yes | Steam-listed |
| How many campaign partners? | Current messaging points to one partner in crime | Official |
| Is split-screen confirmed? | No public confirmation yet | Needs hands-on verification |
| Is crossplay confirmed? | No public confirmation yet | Needs hands-on verification |

The page should stay disciplined here. Readers searching for co-op answers usually want certainty, and the wrong move is to stretch a Steam tag into features that no official source has named yet.

## Solo Versus Co-op

The interesting design question is not whether solo and co-op both exist. It is how the game is likely to feel in each mode. In solo, your play rhythm will probably center on personal timing, patience, and recovery from mistakes. In co-op, the obvious advantage is shared coverage: one player can watch patrols or exits while the other commits to the objective. Trailer footage and the current marketing tone strongly suggest that teamwork is part of the appeal, but the game is still sold as a stealth campaign first, not a chaotic extraction shooter.

That means the best pre-launch advice is to choose your first run based on learning goals. If you want to understand the layouts, pressure, and tool timing, start solo. If you mainly want social problem solving and improvisation, start in co-op. What should not be assumed yet is that co-op automatically makes every contract easier. Some stealth games become louder and sloppier with another player, especially when one mistake drags the whole room into alert.

## Campaign Scope Today

Megabit's current release messaging describes Thick As Thieves as an introductory campaign with 3 maps, 16 contracts, at least 4 hours of content, and high replayability. That wording matters. It tells readers that the launch build is scoped and focused, not pretending to be a hundred-hour forever game. For user trust, this should be explained as a strength or limitation depending on taste, not spun as a hidden massive game.

Four hours also should not be read as a strict full-completion ceiling. In stealth games, route learning, difficulty variation, contract replays, and gear experimentation can stretch a short main path into much more time. A careful first pass can easily be slower than the headline number if you are checking routes, restarting errors, and testing alternative entries. The safe public claim is that the official campaign scope is modest but intentionally replayable.

## What Co-op Players Still Need to Test

Launch-week testing should answer the practical questions the store page cannot. Does the host own all story progress, or do both players retain completion state? Is there join-in-progress? Can a disconnected partner re-enter a contract without restarting? Are there invite-only rooms, public lobbies, or friend-code flows? None of that is documented in the sources reviewed so far.

This is exactly where pre-release content can still be useful. Instead of pretending those answers exist, the guide can help readers prepare their own checklist. If you are planning a day-one session, test one short contract before committing a whole evening. Confirm voice chat plan, controller setup, and who hosts. That is the kind of advice that respects the reader's time even before the servers are live.
`,
    faqs: [
      {
        question: 'Can Thick As Thieves be played solo?',
        answer: 'Yes. The official FAQ explicitly says you can play Thick As Thieves solo.',
      },
      {
        question: 'How many players are in co-op?',
        answer:
          'Current public wording points to playing with one partner in crime, so two-player co-op is the safest interpretation until launch testing confirms more.',
      },
      {
        question: 'Is Thick As Thieves split-screen?',
        answer: 'There is no confirmed split-screen support in the current public materials.',
      },
      {
        question: 'How long is the campaign?',
        answer:
          'The official FAQ says the introductory campaign is made up of 16 contracts running to at least four hours.',
      },
    ],
  },
  'beginner-stealth-guide': {
    title: 'Thick As Thieves Beginner Stealth Guide',
    description:
      'A pre-release Thick As Thieves beginner guide focused on stealth habits, route planning, partner coordination, and what the trailers already make clear about how the game should be approached.',
    lastUpdated,
    timeToRead: '14 min',
    primaryKeyword: 'thick as thieves beginner guide',
    spoilerLevel: 'safe',
    verificationStatus: 'Trailer-observed',
    heroImage: hero,
    heroImageAlt: 'Thick As Thieves beginner stealth guide key art',
    sections: [
      { title: 'First-Run Mindset', id: 'first-run-mindset' },
      { title: 'Route Before Loot', id: 'route-before-loot' },
      { title: 'How to Use a Partner Well', id: 'how-to-use-a-partner-well' },
      { title: 'Launch-Day Mistakes to Avoid', id: 'launch-day-mistakes-to-avoid' },
    ],
    sectionMedia: {
      'first-run-mindset': {
        image: shot(2),
        alt: 'Thick As Thieves rooftop infiltration screenshot for first-run mindset',
        caption: 'The trailers sell stealth, timing, and line-of-sight discipline more than brute-force action.',
      },
      'route-before-loot': {
        image: shot(3),
        alt: 'Thick As Thieves interior mission screenshot for route planning',
        caption: 'The first lesson in a stealth game is usually entry and exit planning, not maximum loot greed.',
      },
      'how-to-use-a-partner-well': {
        image: shot(6),
        alt: 'Thick As Thieves duo movement screenshot for partner coordination',
        caption: 'A second player is most useful when they create information and safety, not noise.',
      },
      'launch-day-mistakes-to-avoid': {
        image: shot(4),
        alt: 'Thick As Thieves narrow alley screenshot for launch mistakes',
        caption: 'Most launch-week mistakes come from treating every stealth room like an action sequence.',
      },
    },
    videos: [videos.welcome, videos.gameplay, videos.announce],
    content: `
## First-Run Mindset

The current footage makes one thing obvious: Thick As Thieves should be learned as a stealth-routing game before it is treated like a combat sandbox. The store description, announcement language, and gameplay trailers all lean on cunning, heists, and dynamic stealth. That means your first job is not to finish fast. It is to understand how the game communicates risk: patrol movement, visibility, timing windows, alternate paths, and when the situation begins to collapse.

${prereleaseNote}

If you are starting on launch day, your first contract should be a learning run. Accept that you may miss loot, take longer, or even restart after a bad chain reaction. That is normal in a stealth game where mastery comes from information. The players who end up saying a game feels shallow are often the ones who rush straight for the objective before they understand the level.

## Route Before Loot

A useful beginner rule is simple: establish entry, establish fallback, then chase profit. Before you pick up the first high-value target, ask three things. Where did I enter from? What path gets me out if guards pivot? What space lets me recover if the room turns hot? Even without hands-on play, the trailer footage already suggests vertical routes, cover transitions, and layered interiors where a greedy detour can cost the whole attempt.

| Beginner priority | Why it matters | Status |
| --- | --- | --- |
| Find an entry path | Prevents improvising under pressure | Trailer-observed |
| Identify one safe reset space | Helps recover from suspicion or noise | Trailer-observed |
| Learn one clean exit | Lets you leave with partial success | Trailer-observed |
| Test greed last | Protects the run from one bad detour | Trailer-observed |

This is also where solo players and co-op pairs diverge. Solo play rewards quiet consistency. Co-op lets you divide observation, but it also creates more opportunities for misalignment. If one player is looting while the other is still mapping the escape, the team is already off-balance.

## How to Use a Partner Well

The best pre-launch co-op advice is to divide responsibility, not to duplicate movement. One player should usually be the information player and one should be the committing player. The information player tracks routes, patrols, and escape timing. The committing player handles the high-risk interaction once the window is clear. Those roles can swap, but both players doing the same thing at the same time usually creates noise without adding safety.

This is also the right place to set expectations. Co-op should not be described as a magical difficulty skip. In many stealth games, two people can make a plan easier to imagine and harder to execute. If Thick As Thieves follows that pattern, then disciplined communication will matter more than raw confidence. Call routes in short phrases. Agree on abort signals. If the heist goes loud, prioritize a shared exit instead of squeezing out one more optional pickup.

## Launch-Day Mistakes to Avoid

The most likely launch-week mistake is overcommitting to a room after something small goes wrong. In stealth games, small mistakes are often recoverable if you disengage early. They become full failures only when the player doubles down. The second common mistake is assuming that a trailer-highlight move is a default answer to every space. Cool-looking traversal or takedown moments do not tell you how expensive, loud, or risky those actions are in the real build.

The third mistake is reading the official four-hour campaign estimate as a signal to rush. For a first run, treat time as irrelevant. What matters is building a clean mental model of how contracts work, where alert states come from, how fast reset opportunities appear, and whether gear changes your approach meaningfully. Once those answers are real, speed comes naturally.
`,
    faqs: [
      {
        question: 'What is the best way to start Thick As Thieves?',
        answer:
          'Treat your first contract as a learning run. Focus on entry, fallback, and exit routes before trying to maximize every optional reward.',
      },
      {
        question: 'Should I start solo or co-op?',
        answer:
          'Solo is better if you want to learn the systems cleanly. Co-op is better if you want shared route planning and social improvisation, but it also adds coordination risk.',
      },
      {
        question: 'Is Thick As Thieves an action game or a stealth game?',
        answer:
          'Current public messaging frames it as a stealth-action heist game, and the safest first-run assumption is to prioritize stealth over brute-force action.',
      },
    ],
  },
  'contracts-maps-replayability-guide': {
    title: 'Thick As Thieves Contracts, Maps, and Replayability Guide',
    description:
      'A factual Thick As Thieves guide to the current 3-map, 16-contract campaign scope, how replayability should be understood before launch, and why the four-hour estimate is not the whole story.',
    lastUpdated,
    timeToRead: '12 min',
    primaryKeyword: 'thick as thieves contracts',
    spoilerLevel: 'safe',
    verificationStatus: 'Official',
    heroImage: hero,
    heroImageAlt: 'Thick As Thieves contracts guide key art',
    sections: [
      { title: 'Current Campaign Scope', id: 'current-campaign-scope' },
      { title: 'What 3 Maps and 16 Contracts Really Suggest', id: 'what-3-maps-and-16-contracts-really-suggest' },
      { title: 'How Replayability Should Be Read', id: 'how-replayability-should-be-read' },
      { title: 'What Needs Live Testing', id: 'what-needs-live-testing' },
    ],
    sectionMedia: {
      'current-campaign-scope': {
        image: shot(1),
        alt: 'Thick As Thieves urban skyline screenshot for campaign scope',
        caption: 'Current official messaging sets expectations around a contained introductory campaign, not an endless launch package.',
      },
      'what-3-maps-and-16-contracts-really-suggest': {
        image: shot(5),
        alt: 'Thick As Thieves mission screenshot for map and contract structure',
        caption: 'A small number of maps can still support a lot of stealth variation if contracts remix goals and routes well.',
      },
      'how-replayability-should-be-read': {
        image: shot(7),
        alt: 'Thick As Thieves mission route screenshot for replayability',
        caption: 'Replayability claims matter only if routes, pressure, and gear actually create different decisions.',
      },
      'what-needs-live-testing': {
        image: shot(8),
        alt: 'Thick As Thieves extraction screenshot for live testing checklist',
        caption: 'Launch-week testing should verify how contract variety and route remixing feel in practice.',
      },
    },
    videos: [videos.gameplay, videos.welcome, videos.releaseDate],
    content: `
## Current Campaign Scope

The most useful official scope statement right now comes from Megabit's release messaging: Thick As Thieves launches with an introductory campaign built around 3 maps, 16 contracts, and 6 unique pieces of gear, with a runtime of at least four hours. That is unusually concrete language for a pre-release page, and it should be surfaced clearly because it helps readers set the right expectations before spending money or planning co-op time.

| Scope item | Current public answer | Verification status |
| --- | --- | --- |
| Maps | 3 | Official |
| Contracts | 16 | Official |
| Gear pieces | 6 unique pieces | Official |
| Campaign length | At least 4 hours | Official |
| Long-term content cadence | No fixed release schedule announced | Official |

This makes Thick As Thieves easier to position honestly than many unreleased games. It is not promising a giant open world. It is promising a tighter stealth campaign that aims to get replay value out of contract structure and route variation.

## What 3 Maps and 16 Contracts Really Suggest

Three maps does not automatically mean low content value. In stealth design, dense spaces are often better than a large number of shallow spaces. If one map supports multiple entries, timing windows, patrol states, and objective layouts, it can stay interesting far longer than a one-and-done corridor level. Sixteen contracts also suggests that the game is not asking players to clear each map once and move on forever. The likely structure is repeated returns under different objectives, risk levels, or route demands.

That is also why the wrong coverage angle would be to dismiss the game as short without context. A four-hour first-clear estimate tells you about scope, not necessarily about replay depth. What matters at launch is whether contracts truly change your decision-making or simply send you back through the same route with a new label. That answer needs hands-on testing, but the current structure at least points toward deliberate replayability rather than filler length.

## How Replayability Should Be Read

Developers often use the word replayable too loosely. A good guide should translate it into player questions. Does replayability come from alternate routes, variable threat pressure, optional loot, cleaner stealth grades, co-op coordination, or gear-driven strategy changes? If replay value comes from those systems, then a smaller campaign can still hold attention. If replay value only means replaying identical routes with no new friction, the marketing claim will feel thin.

For pre-release readers, the best way to use the current scope is to decide whether this is the kind of stealth game they want. If you prefer one enormous story campaign with a long list of scripted missions, the current scope may feel small. If you enjoy polishing routes, learning spaces, and comparing solo and co-op approaches, the launch package may land much better than the raw hour count suggests.

## What Needs Live Testing

There are four big launch-day checks for this page. First, verify whether contract objectives actually remix the 3 maps meaningfully. Second, see whether higher-difficulty or later-game pressure changes route logic instead of only raising punishment. Third, test whether co-op creates new tactical value or mostly duplicates solo movement. Fourth, confirm whether gear progression opens genuinely new approaches across repeated contracts.

Until those checks are done, the page should stay grounded: 3 maps, 16 contracts, at least 4 hours, strong replayability claims, and no invented numbers beyond that. That gives readers a usable expectation without overselling what has not been proven yet.
`,
    faqs: [
      {
        question: 'How many maps are in Thick As Thieves?',
        answer: 'Current official release messaging says Thick As Thieves launches with 3 maps.',
      },
      {
        question: 'How many contracts are in Thick As Thieves?',
        answer: 'Current official release messaging says the introductory campaign includes 16 contracts.',
      },
      {
        question: 'How long is Thick As Thieves?',
        answer:
          'The official FAQ says the introductory campaign runs to at least four hours, with replayability intended to add more time.',
      },
      {
        question: 'Is Thick As Thieves a long game?',
        answer:
          'The currently announced launch scope is compact. Its value will depend more on route variety and replayability than on a headline hour count.',
      },
    ],
  },
  'gear-loadout-guide': {
    title: 'Thick As Thieves Gear, Loadout, and Progression Guide',
    description:
      'A pre-release Thick As Thieves gear guide explaining what is officially known about progression, how to think about loadouts before launch, and which equipment details still need real gameplay confirmation.',
    lastUpdated,
    timeToRead: '13 min',
    primaryKeyword: 'thick as thieves gear guide',
    spoilerLevel: 'safe',
    verificationStatus: 'Official',
    heroImage: hero,
    heroImageAlt: 'Thick As Thieves gear guide key art',
    sections: [
      { title: 'What Is Confirmed About Gear', id: 'what-is-confirmed-about-gear' },
      { title: 'How to Build a Smart First Loadout', id: 'how-to-build-a-smart-first-loadout' },
      { title: 'Progression Without Fake Numbers', id: 'progression-without-fake-numbers' },
      { title: 'Launch-Day Gear Questions', id: 'launch-day-gear-questions' },
    ],
    sectionMedia: {
      'what-is-confirmed-about-gear': {
        image: shot(3),
        alt: 'Thick As Thieves infiltration screenshot for gear confirmation',
        caption: 'Official messaging confirms gear progression, but not every exact item name or stat sheet.',
      },
      'how-to-build-a-smart-first-loadout': {
        image: shot(4),
        alt: 'Thick As Thieves stealth tool screenshot for first loadout planning',
        caption: 'A strong first loadout in any stealth game balances information, flexibility, and recovery.',
      },
      'progression-without-fake-numbers': {
        image: shot(6),
        alt: 'Thick As Thieves escape scene for progression guidance',
        caption: 'Useful pre-release advice should explain decision frameworks instead of inventing upgrade costs.',
      },
      'launch-day-gear-questions': {
        image: shot(7),
        alt: 'Thick As Thieves close-quarters mission screenshot for launch-day gear questions',
        caption: 'Launch players should verify which gear expands route options and which only adds comfort.',
      },
    },
    videos: [videos.welcome, videos.gameplay, videos.releaseDate],
    content: `
## What Is Confirmed About Gear

The official release messaging says Thick As Thieves launches with 6 unique pieces of gear, and the official FAQ says players progress through the Thieves Guild, complete contracts, and unlock new gear on the road to becoming a Master Thief. That is enough to support a real guide, but not enough to support fake wikis full of made-up item names, upgrade tiers, and costs. The right approach is to separate confirmed structure from unverified specifics.

| Gear question | Current answer | Verification status |
| --- | --- | --- |
| Does gear exist? | Yes | Official |
| Is gear unlocked through progression? | Yes, through contracts and Thieves Guild progression | Official |
| How many unique pieces are currently announced? | 6 | Official |
| Are exact stats and costs public? | No | Needs hands-on verification |
| Are all item names public? | Not comprehensively | Needs hands-on verification |

That means the page should be about decision quality. Readers do not need fake spreadsheets yet. They need a reliable framework for evaluating gear once the game goes live.

## How to Build a Smart First Loadout

For a first run, think in roles rather than item names. A stealth loadout usually needs three jobs covered: information, commitment, and recovery. Information tools help you read the space before taking risk. Commitment tools help you actually secure the objective once the window opens. Recovery tools help you survive the moment the plan stops being clean. Even if Thick As Thieves adds unique twists, that structure is the most practical way to think about the first unlocks.

Players often waste early progression by overvaluing style. A loud or flashy tool can feel powerful in a trailer, but first-run stealth success usually comes from tools that reduce uncertainty. If one unlock gives you better room knowledge and another only helps after the room has already collapsed, the knowledge tool is often stronger for a beginner. This is advice that stays useful even before exact item names are public.

## Progression Without Fake Numbers

A strong pre-release progression guide should help players avoid bad assumptions. Do not assume that the first six gear pieces are evenly balanced. Do not assume the unlock order is linear. Do not assume that co-op makes support gear less important. In fact, co-op often increases the value of tools that create information, because better information lets two players synchronize rather than drift.

The safest public recommendation is to spend early unlocks on tools that widen your options across many contracts. A niche tool may become excellent later, but early-game progression is usually about consistency. If the live build proves otherwise, the guide should update with specific examples and contract references after launch.

## Launch-Day Gear Questions

The live build needs to answer five things quickly. Which gear pieces are available earliest? Which pieces are shared across solo and co-op progression? Which tools actually open new routes versus simply smooth mistakes? Are there cooldowns or hard-use limits that change how often a tool can carry a run? And how much does gear interact with difficulty settings or higher-pressure contracts?

Once those answers are tested, this page can become a true upgrade route guide. Before then, the honest version is still valuable: 6 unique pieces of gear are officially announced, progression is contract-driven, and beginners should prioritize loadouts that improve information and recovery before pure style.
`,
    faqs: [
      {
        question: 'How many gear pieces are announced for Thick As Thieves?',
        answer: 'Current official release messaging says the launch build includes 6 unique pieces of gear.',
      },
      {
        question: 'How do you unlock gear in Thick As Thieves?',
        answer:
          'The official FAQ says you progress through the Thieves Guild by completing heists and contracts and unlock new gear along the way.',
      },
      {
        question: 'Are the full gear stats public yet?',
        answer: 'No. Exact stats, upgrade costs, and final item behavior still need hands-on verification.',
      },
    ],
  },
  'pc-specs-controller-cloud-guide': {
    title: 'Thick As Thieves PC Specs, Controller, and Steam Cloud Guide',
    description:
      'A factual Thick As Thieves PC guide covering minimum and recommended specs, controller support, Steam Cloud, accessibility tags, and what PC players should verify on launch day.',
    lastUpdated,
    timeToRead: '12 min',
    primaryKeyword: 'thick as thieves system requirements',
    spoilerLevel: 'safe',
    verificationStatus: 'Steam-listed',
    heroImage: hero,
    heroImageAlt: 'Thick As Thieves PC specs guide key art',
    sections: [
      { title: 'Quick PC Answer', id: 'quick-pc-answer' },
      { title: 'System Requirements Table', id: 'system-requirements-table' },
      { title: 'Controller Cloud and Accessibility', id: 'controller-cloud-and-accessibility' },
      { title: 'PC Launch Checklist', id: 'pc-launch-checklist' },
    ],
    sectionMedia: {
      'quick-pc-answer': {
        image: shot(1),
        alt: 'Thick As Thieves night city screenshot for PC guide',
        caption: 'Steam already provides a solid baseline for PC buyers before launch.',
      },
      'system-requirements-table': {
        image: shot(5),
        alt: 'Thick As Thieves mission scene for system requirements table',
        caption: 'A useful specs guide keeps the official numbers intact and resists adding fake optimization advice too early.',
      },
      'controller-cloud-and-accessibility': {
        image: shot(3),
        alt: 'Thick As Thieves stealth setup screenshot for controller and cloud support',
        caption: 'Steam tags matter because they answer practical launch questions beyond frame rate.',
      },
      'pc-launch-checklist': {
        image: shot(8),
        alt: 'Thick As Thieves escape screenshot for launch-day checklist',
        caption: 'Steam Deck feel, controller aim tuning, and co-op stability all need live testing after launch.',
      },
    },
    videos: [videos.releaseDate, videos.gameplay, videos.welcome],
    content: `
## Quick PC Answer

Thick As Thieves is currently a PC-first launch through Steam, and the store page already exposes more useful hardware and feature information than many unreleased games. The minimum configuration lists Windows 10, an Intel Core i5-4570, 12 GB of RAM, a GTX 1060 6GB-class GPU, DirectX 12, 10 GB of storage, and an SSD requirement. The recommended specification moves to Windows 11, an Intel Core i7-8700, 16 GB of RAM, and an RTX 2070 8GB-class GPU.

| PC feature | Current answer | Verification status |
| --- | --- | --- |
| Full controller support | Yes | Steam-listed |
| Steam Cloud | Yes | Steam-listed |
| Family Sharing | Yes | Steam-listed |
| Adjustable difficulty | Yes | Steam-listed |
| Steam Deck rating | Not currently listed | Needs hands-on verification |

That is enough to help readers make real decisions now, especially if they are choosing between desktop, laptop, or a portable PC setup for launch week.

## System Requirements Table

| Tier | OS | CPU | Memory | GPU | API | Storage |
| --- | --- | --- | --- | --- | --- | --- |
| Minimum | Windows 10 | Intel Core i5-4570 | 12 GB RAM | NVIDIA GeForce GTX 1060 6GB or equivalent | DirectX 12 | 10 GB SSD |
| Recommended | Windows 11 | Intel Core i7-8700 | 16 GB RAM | NVIDIA GeForce RTX 2070 8GB or equivalent | DirectX 12 | 10 GB SSD |

These numbers should be presented cleanly and without premature tuning claims. A lot of pre-release system-requirement pages immediately jump into fake “best settings” advice. That is low-trust content. Before launch, the useful move is to keep the official numbers visible, point out the SSD requirement, and remind co-op players that network stability matters as much as raw GPU power for a smooth session.

## Controller Cloud and Accessibility

Steam currently lists full controller support, which is important for a stealth game where some players will prefer analog movement over keyboard strafing. Steam Cloud also matters here because short contract-based games tend to invite play across more than one machine. Family Sharing is listed as well, which answers another common purchase question without needing speculation.

The accessibility tags are also worth showing because they are practical, not cosmetic. Adjustable difficulty, playable without timed input, custom volume controls, stereo sound, and other store-listed flags can shape whether a player buys on day one. The guide should stay precise, though: store tags do not guarantee every reader will love the default control layout or sensitivity options. Those details still need real testing in the live build.

## PC Launch Checklist

There are five launch-day checks this page should pick up immediately. Confirm whether controller prompts swap cleanly in real time. Test Steam Cloud between two PCs. Check whether the SSD requirement feels justified by load behavior and streaming stability. Verify whether co-op introduces extra CPU or bandwidth pressure. And check whether a Steam Deck or other handheld PC setup is functionally playable, even if it is not yet officially rated.

Until then, the best version of the page is the honest one: exact official specs, exact listed Steam features, and a short list of PC questions that still need real-world confirmation after May 20, 2026.
`,
    faqs: [
      {
        question: 'What are the minimum PC specs for Thick As Thieves?',
        answer:
          'Steam currently lists Windows 10, an Intel Core i5-4570, 12 GB RAM, a GTX 1060 6GB-class GPU, DirectX 12, and 10 GB of SSD storage.',
      },
      {
        question: 'Does Thick As Thieves support controller?',
        answer: 'Yes. Steam currently lists full controller support.',
      },
      {
        question: 'Does Thick As Thieves support Steam Cloud?',
        answer: 'Yes. Steam currently lists Steam Cloud support.',
      },
      {
        question: 'Is Thick As Thieves verified for Steam Deck?',
        answer:
          'There is no Steam Deck compatibility verdict in the current public information, so that still needs launch-week testing.',
      },
    ],
  },
  'live-service-roadmap-console-guide': {
    title: 'Thick As Thieves Live Service, Roadmap, and Console Guide',
    description:
      'A factual Thick As Thieves guide to the current post-launch messaging, why the game is not being positioned as a live service, and what is and is not known about future content and console plans.',
    lastUpdated,
    timeToRead: '13 min',
    primaryKeyword: 'is thick as thieves live service',
    spoilerLevel: 'safe',
    verificationStatus: 'Official',
    heroImage: hero,
    heroImageAlt: 'Thick As Thieves roadmap guide key art',
    sections: [
      { title: 'Direct Answer', id: 'direct-answer' },
      { title: 'What Post-launch Support Currently Means', id: 'what-post-launch-support-currently-means' },
      { title: 'Console Status Today', id: 'console-status-today' },
      { title: 'How This Affects Buyer Expectations', id: 'how-this-affects-buyer-expectations' },
    ],
    sectionMedia: {
      'direct-answer': {
        image: shot(2),
        alt: 'Thick As Thieves street screenshot for roadmap answer',
        caption: 'The official FAQ directly answers one of the biggest reader questions: this is not currently being framed as a live service game.',
      },
      'what-post-launch-support-currently-means': {
        image: shot(7),
        alt: 'Thick As Thieves mission screenshot for post-launch support section',
        caption: 'The team says more content is planned, but without a fixed schedule or roadmap promise.',
      },
      'console-status-today': {
        image: shot(4),
        alt: 'Thick As Thieves city pursuit screenshot for console status',
        caption: 'Console ambition exists, but a concrete launch promise does not.',
      },
      'how-this-affects-buyer-expectations': {
        image: shot(6),
        alt: 'Thick As Thieves duo screenshot for buyer expectation section',
        caption: 'Expectation-setting is where pre-release guide quality really matters.',
      },
    },
    videos: [videos.releaseDate, videos.welcome, videos.announce],
    content: `
## Direct Answer

No, Thick As Thieves is not currently being described by its publisher as a live service game. The official FAQ answers this directly: the team is looking to bring more content post-launch, but there is no predetermined release schedule. That is a meaningful distinction because it separates planned support from the kind of seasonal content treadmill people often associate with live-service publishing.

| Question | Current answer | Verification status |
| --- | --- | --- |
| Is Thick As Thieves a live service game? | No | Official |
| Will it get more content after launch? | Yes, that is the current intention | Official |
| Is there a fixed roadmap? | No predetermined release schedule has been announced | Official |
| Are console versions confirmed for launch? | No | Official |
| Is the launch build Early Access? | Current public pages do not frame it as Early Access | Steam-listed |

This is one of the most important pages in the cluster because it corrects expectations before they harden into bad assumptions.

## What Post-launch Support Currently Means

The FAQ wording matters here. It does not promise a giant roadmap, battle pass, or monthly cadence. It says future content will be developed based on player feedback and released when the team feels the time is right after the game's initial reception. That is a much looser support promise than a full live-service plan, and readers should understand that difference before turning a compact launch campaign into a disappointment narrative.

For this site, the better editorial move is to describe the launch version as a focused introductory campaign with room to grow. That is coherent with the official scope, coherent with the FAQ, and more trustworthy than either extreme. Do not oversell endless future content, and do not undersell the possibility that the game expands if the response is strong.

## Console Status Today

The official FAQ says the current focus is preparing the PC release for launch and that the team would love to bring Thick As Thieves to as many platforms as possible. That is encouraging, but it is not a date, a storefront, or a version announcement. The clean answer for readers is that console interest exists, while launch confirmation does not.

This distinction matters for search traffic. A lot of gaming queries are really purchase timing queries. If someone is deciding whether to buy on Steam now or wait for console, a vague “maybe later” answer is still useful as long as it is labeled honestly. The guide should resist the temptation to guess which console comes first or whether cross-progression would exist.

## How This Affects Buyer Expectations

The practical takeaway is straightforward. If you want a compact stealth game on PC on May 20, 2026, the current messaging supports that expectation. If you want a guaranteed multi-year roadmap, a console launch date, or a live-service content engine, the current messaging does not support that expectation. Neither answer is negative by itself. The point is to align the buyer's expectation with the product that is actually being sold.

That makes this page more valuable than a generic news rewrite. It helps the reader decide whether to buy now, wait for more content, or wait for a potential future platform announcement. Those are real decisions, and the source-backed answer is better than pretending certainty where none exists.
`,
    faqs: [
      {
        question: 'Is Thick As Thieves a live service game?',
        answer: 'No. The official FAQ explicitly says Thick As Thieves is not a live service game.',
      },
      {
        question: 'Will Thick As Thieves get post-launch content?',
        answer:
          'Current official messaging says more content is intended, but there is no predetermined release schedule.',
      },
      {
        question: 'Is Thick As Thieves coming to console?',
        answer:
          'There is no confirmed console launch announcement yet. The official FAQ says the current focus is the PC release.',
      },
      {
        question: 'Is Thick As Thieves Early Access?',
        answer:
          'The current Steam and FAQ messaging does not frame Thick As Thieves as an Early Access release.',
      },
    ],
  },
  'kilcairn-lore-factions-guide': {
    title: 'Thick As Thieves Kilcairn, Factions, and Story Setup Guide',
    description:
      'A pre-release Thick As Thieves lore guide covering Kilcairn, the Thieves Guild, the Constabulary, influential families, and the story context that is already public before launch.',
    lastUpdated,
    timeToRead: '11 min',
    primaryKeyword: 'thick as thieves story',
    spoilerLevel: 'safe',
    verificationStatus: 'Official',
    heroImage: hero,
    heroImageAlt: 'Thick As Thieves lore guide key art',
    sections: [
      { title: 'Setting Answer', id: 'setting-answer' },
      { title: 'The Thieves Guild and Your Role', id: 'the-thieves-guild-and-your-role' },
      { title: 'Constabulary Nobility and Power', id: 'constabulary-nobility-and-power' },
      { title: 'What We Should Not Pretend To Know Yet', id: 'what-we-should-not-pretend-to-know-yet' },
    ],
    sectionMedia: {
      'setting-answer': {
        image: shot(1),
        alt: 'Thick As Thieves skyline screenshot for setting overview',
        caption: 'Kilcairn is already being marketed as a character in its own right, not just a mission backdrop.',
      },
      'the-thieves-guild-and-your-role': {
        image: shot(5),
        alt: 'Thick As Thieves guild-themed mission screenshot',
        caption: 'Public messaging ties your progression directly to the Thieves Guild and contract work.',
      },
      'constabulary-nobility-and-power': {
        image: shot(2),
        alt: 'Thick As Thieves guarded street screenshot for power structure section',
        caption: 'The official story framing highlights the Constabulary and influential families as key forces in Kilcairn.',
      },
      'what-we-should-not-pretend-to-know-yet': {
        image: shot(7),
        alt: 'Thick As Thieves secretive interior screenshot for unanswered story questions',
        caption: 'Good pre-release lore writing explains the public setup without inventing twists or full character arcs.',
      },
    },
    videos: [videos.welcome, videos.announce, videos.gameplay],
    content: `
## Setting Answer

The current public story setup for Thick As Thieves is cleaner than a lot of pre-launch stealth games. Official messaging centers on the city of Kilcairn, the Thieves Guild, the Constabulary, and the influential families whose money and history shape the world. The player is not being sold a blank sandbox. They are being sold a social world where power, theft, and status collide inside a city built for stealth stories.

That matters because it gives the hub a stronger editorial angle than “here are some missions.” Players interested in Thick As Thieves are also likely interested in mood, setting, and faction pressure. The page should capture that without wandering into fake lore. Right now the honest answer is that Kilcairn is the core stage, the Thieves Guild is your progression lane, and the city's power structures are part of the tension rather than simple window dressing.

## The Thieves Guild and Your Role

The official FAQ says players progress through the Thieves Guild as they complete heists and contracts and unlock gear on the way to becoming a Master Thief. That gives you the core fantasy immediately. You are not just sneaking through isolated levels for disconnected reasons. You are climbing a criminal structure, improving your tools, and proving yourself through contract work.

This is also why the game's compact campaign scope can still feel satisfying if executed well. A focused stealth game with a clear ladder of criminal progression can be more compelling than a giant but unfocused campaign. The site should reflect that framing and resist overexpanding it into invented guild politics or specific quest chains that are not public yet.

## Constabulary Nobility and Power

Megabit's release messaging also highlights the history of Kilcairn and its influential families, while the current promotional wording points to the Constabulary as a force you will push against. That is enough to describe the power landscape. The city is not neutral terrain. It is a place where wealth, law, and secrecy produce targets worth stealing from and systems worth subverting.

The good version of a pre-release lore page keeps this visible because it helps players understand the tone of the game. Thick As Thieves is not only about movement and tools. It is also about operating under pressure from institutions that are stronger, richer, and more entrenched than you are. That power imbalance is usually where stealth fiction gets its best tension.

## What We Should Not Pretend To Know Yet

We should not invent the full political history of Kilcairn, the identities of every important family, or the complete character arcs of the thieves involved. We also should not write spoiler pages for unreleased contracts or pretend the public trailers reveal the entire story. What the official material supports today is tone, structure, and power relationships. What it does not support yet is a complete wiki.

That boundary is worth keeping. Readers looking for story setup get a useful grounding in the world. Readers looking for late-campaign twists will need to come back after release. Keeping those two jobs separate is how the page stays credible.
`,
    faqs: [
      {
        question: 'What city is Thick As Thieves set in?',
        answer: 'Current official messaging centers the game around the city of Kilcairn.',
      },
      {
        question: 'What is the Thieves Guild in Thick As Thieves?',
        answer:
          'The official FAQ says you progress through the Thieves Guild by completing heists and contracts and unlocking new gear.',
      },
      {
        question: 'Who opposes the player in Thick As Thieves?',
        answer:
          'Current public story framing points to the Constabulary and the influential families of Kilcairn as major power forces in the setting.',
      },
    ],
  },
};

export const thickAsThievesGuideOrder = [
  'release-date-platforms-guide',
  'solo-coop-campaign-guide',
  'beginner-stealth-guide',
  'contracts-maps-replayability-guide',
  'gear-loadout-guide',
  'pc-specs-controller-cloud-guide',
  'live-service-roadmap-console-guide',
  'kilcairn-lore-factions-guide',
] as const;

export const thickAsThievesGuides = thickAsThievesGuideOrder.map((slug) => ({
  slug,
  title: thickAsThievesGuideContent[slug].title.replace(/^Thick As Thieves:?\s*/, ''),
  description: thickAsThievesGuideContent[slug].description,
}));

export const thickAsThievesHubContent = {
  overview: `Thick As Thieves is scheduled to launch on ${thickAsThievesFacts.displayReleaseDate} for PC via Steam. Current official messaging presents it as a stealth-action heist game from ${thickAsThievesFacts.developer} that can be played solo or with a partner in online co-op, with a focused introductory campaign rather than an endless live-service launch.

This hub exists to fix the exact kinds of problems that usually show up around stealth games before release: outdated PvPvE summaries, fake console launch claims, invented roadmap promises, and made-up gear pages. The useful work right now is to separate what Steam and the official FAQ already confirm from what still needs real launch-day testing.`,
  features: [
    'Steam currently lists release date: May 20, 2026',
    'PC launch through Steam',
    'Playable solo or in online co-op with a partner',
    'Official launch messaging says 3 maps and 16 contracts',
    'Official launch messaging says 6 unique pieces of gear',
    'Official FAQ says the campaign runs at least 4 hours and is built for replayability',
    'Official FAQ says it is not a live service game',
  ],
  guides: thickAsThievesGuides,
  tips: [
    'Start with release facts and mode setup before reading any old PvPvE-era coverage.',
    'Treat the 4-hour estimate as campaign scope, not a full value verdict.',
    'Use the co-op page to decide whether your first run should be solo learning or partner coordination.',
    'Use the PC page before launch night if your group depends on controller support or cloud saves.',
    'Keep launch-day questions focused on session flow, route variety, and real gear utility.',
  ],
  faq: [
    {
      question: 'When does Thick As Thieves release?',
      answer: 'Thick As Thieves is currently listed on Steam for May 20, 2026.',
    },
    {
      question: 'Is Thick As Thieves solo or co-op?',
      answer: 'It supports both. Official messaging says you can play solo or with a partner in online co-op.',
    },
    {
      question: 'Is Thick As Thieves a live service game?',
      answer: 'No. The official FAQ explicitly says it is not a live service game.',
    },
    {
      question: 'How big is the launch campaign?',
      answer:
        'The current public scope is 3 maps, 16 contracts, 6 unique gear pieces, and at least 4 hours of campaign runtime.',
    },
  ],
};
