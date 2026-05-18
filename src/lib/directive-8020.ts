export type Directive8020VerificationStatus =
  | 'Confirmed'
  | 'Reported'
  | 'Needs platform capture'
  | 'Needs in-game verification';

export interface Directive8020Media {
  image: string;
  alt: string;
  caption: string;
}

export interface Directive8020Video {
  title: string;
  url: string;
  channel: string;
  duration: string;
}

export interface Directive8020Guide {
  title: string;
  description: string;
  lastUpdated: string;
  timeToRead: string;
  primaryKeyword: string;
  spoilerLevel: 'safe' | 'spoiler';
  verificationStatus: Directive8020VerificationStatus;
  sections: { title: string; id: string }[];
  content: string;
  faqs: { question: string; answer: string }[];
  heroImage: string;
  heroImageAlt: string;
  sectionMedia: Record<string, Directive8020Media>;
  videos: Directive8020Video[];
}

const lastUpdated = '2026-05-15';
const hero = '/games/directive-8020/hero.jpg';
const shot = (index: number) =>
  `/games/directive-8020/screenshots/directive-8020-screenshot-${index}.jpg`;

const videos = {
  officialLaunch: {
    title: 'Directive 8020 Launch Trailer',
    url: 'https://www.youtube.com/watch?v=a75f2z_I7QU',
    channel: 'Supermassive Games',
    duration: 'Official trailer',
  },
  officialStory: {
    title: 'Directive 8020 Story Trailer Reveal',
    url: 'https://www.youtube.com/watch?v=9CtX9O7nZeQ',
    channel: 'Supermassive Games',
    duration: 'Official trailer',
  },
  officialAnnounce: {
    title: 'Directive 8020 Announce Trailer',
    url: 'https://www.youtube.com/watch?v=etXhOhzbXso',
    channel: 'Supermassive Games',
    duration: 'Official trailer',
  },
  fullWalkthrough: {
    title: 'Directive 8020 Full Game Walkthrough',
    url: 'https://www.youtube.com/watch?v=4ZN-WsHMrXA',
    channel: 'MKIceAndFire',
    duration: 'Full game',
  },
  walkthroughPartOne: {
    title: 'Directive 8020 Walkthrough Gameplay Part 1',
    url: 'https://www.youtube.com/watch?v=TAqRTfPGISs',
    channel: 'theRadBrad',
    duration: 'Part 1',
  },
  bestChoices: {
    title: 'Directive 8020 Best Choices Walkthrough',
    url: 'https://www.youtube.com/watch?v=d_z3V62Lezc',
    channel: 'Ben-Gun',
    duration: 'Best choices route',
  },
  endings: {
    title: 'Directive 8020 All Endings',
    url: 'https://www.youtube.com/watch?v=u5oytPGU45I',
    channel: 'Ben-Gun',
    duration: '100% endings',
  },
  saveEveryone: {
    title: 'Directive 8020 Save Everyone Trophy Guide',
    url: 'https://www.youtube.com/watch?v=S8YkYcz0EjY',
    channel: '100% Guides',
    duration: 'Humanitarian route',
  },
  deaths: {
    title: 'Directive 8020 All 44 Death Scenes',
    url: 'https://www.youtube.com/watch?v=l39ohKdu_kM',
    channel: 'Gamerpillar',
    duration: 'All deaths',
  },
  collectibles: {
    title: 'Directive 8020 All Collectible Locations',
    url: 'https://www.youtube.com/watch?v=Ue6tax_buO8',
    channel: 'Ninja Pups',
    duration: 'All collectibles',
  },
  steamDeck: {
    title: 'Directive 8020 Steam Deck Performance',
    url: 'https://www.youtube.com/watch?v=L1fpsnb4F9E',
    channel: 'Deck Wizard',
    duration: 'Performance test',
  },
};

export const directive8020Facts = {
  releaseDate: '2026-05-12',
  displayReleaseDate: 'May 12, 2026',
  platforms: 'PS5, Xbox Series X|S, and PC via Steam',
  developer: 'Supermassive Games',
  publisher: 'Supermassive Games',
  steamId: '2255370',
  officialUrl: 'https://www.thedarkpictures.com/games/directive-8020',
  steamUrl: 'https://store.steampowered.com/app/2255370/Directive_8020/',
};

export const directive8020GuideContent: Record<string, Directive8020Guide> = {
  'trophy-guide': {
    title: 'Directive 8020 Trophy Guide and Platinum Roadmap',
    description:
      'A practical Directive 8020 trophy guide with a spoiler-light first-run plan, missable checklist, cleanup order, platform notes, screenshots, and video routes.',
    lastUpdated,
    timeToRead: '18 min',
    primaryKeyword: 'directive 8020 trophy guide',
    spoilerLevel: 'safe',
    verificationStatus: 'Needs platform capture',
    heroImage: hero,
    heroImageAlt: 'Directive 8020 crew facing a sci-fi horror threat aboard the Cassiopeia',
    sections: [
      { title: 'Quick Trophy Roadmap', id: 'quick-trophy-roadmap' },
      { title: 'Missable Checklist', id: 'missable-checklist' },
      { title: 'Cleanup Order', id: 'cleanup-order' },
      { title: 'Platform Notes', id: 'platform-notes' },
    ],
    sectionMedia: {
      'quick-trophy-roadmap': {
        image: shot(1),
        alt: 'Cassiopeia corridor used as a spoiler-light trophy route reference',
        caption: 'Start with a clean survivor run before you chase destructive trophies.',
      },
      'missable-checklist': {
        image: shot(2),
        alt: 'Directive 8020 character scene for tracking choices and missables',
        caption: 'Missable tracking works best when you log choices, crew state, and collectibles together.',
      },
      'cleanup-order': {
        image: shot(3),
        alt: 'Directive 8020 real-time threat scene for cleanup route planning',
        caption: 'Leave death routing and ending variants until you have reusable Turning Point states.',
      },
      'platform-notes': {
        image: shot(4),
        alt: 'Directive 8020 spaceship environment for platform achievement notes',
        caption: 'Use unlock conditions rather than trophy names until every platform list is fully captured.',
      },
    },
    videos: [videos.officialLaunch, videos.saveEveryone, videos.fullWalkthrough],
    content: `
## Quick Trophy Roadmap

The safest Directive 8020 platinum route is not a speedrun. It is a controlled set of saves and Turning Point replays built around one clean survivor file. The game is designed around trust, mimic suspicion, real-time danger, and route memory, so a messy first completion can make later cleanup harder than it needs to be. Use the first playthrough to learn the Cassiopeia layout, protect the crew whenever possible, and write down the moments where the story clearly branches. After that, collectibles, endings, deaths, and platform-specific trophies become much easier to isolate.

| Step | Goal | Spoiler risk | Verification status |
| --- | --- | --- | --- |
| 1 | Finish one mostly blind survivor run and keep manual notes | Low | Confirmed |
| 2 | Replay major Turning Points instead of restarting from the prologue | Medium | Confirmed |
| 3 | Clean up collectibles before intentionally bad outcomes | Medium | Needs in-game verification |
| 4 | Route endings, all deaths, and bad-state variants last | High | Reported |

For a first platinum attempt, the practical rule is simple: never destroy a useful survivor state until you have copied the information you need from it. If a character survives, if a crew pair trusts each other, or if a collectible route remains open, that state is valuable. Use videos only to confirm the next block you are about to replay, not to replace your own route notes.

## Missable Checklist

Most completion mistakes come from treating Directive 8020 like a linear horror game. It is better to track the whole state of the run. A collectible can be missed because you walked past a room, but it can also be missed because a later choice moved the crew, sealed an area, or pushed you into a threat sequence. A death scene can be missed because you passed the QTE, but it can also be missed because the victim was not alive or isolated in the right state.

| Category | What to record | Why it matters |
| --- | --- | --- |
| Turning Points | Episode, scene goal, selected option, crew state before the choice | Rewinds only help when you know what changed |
| Crew status | Alive, injured, trusted, suspected, isolated, paired | Survival and endings depend on more than life or death |
| Collectibles | Type, nearby objective, room, route dependency | Prevents vague cleanup like search episode three again |
| Death scenes | Victim, trigger, avoid method, prior state | Makes the all-deaths list useful for survival routing too |
| Mode used | Solo Story, Movie Night, Steam Remote Play workaround | Prevents confusion around multiplayer and achievement claims |

Keep this checklist spoiler-light by using your own scene labels. For example, write med bay split or first mimic accusation instead of copying an ending guide phrase. That keeps your first run readable without spoiling later reveals.

## Cleanup Order

The best cleanup order is survivor route, collectibles, endings, deaths, then platform verification. Collectibles come before death routing because bad states often reduce exploration. Endings come before all deaths because ending tests need stable survivor and trust data. All deaths come late because they intentionally break the best save states and can make trophy tracking feel chaotic if you start too early.

Recommended cleanup blocks: finish one survivor run, replay collectible-heavy areas, test save-everyone and best-ending logic, build one suspicion-heavy file, then build one death-heavy file. After each block, compare trophies or achievements before moving on. If a trophy fails to unlock, note the last confirmed state and replay from the closest Turning Point rather than guessing from memory.

## Platform Notes

Steam lists Directive 8020 with achievements and Steam Cloud, while console trophy naming still needs full platform capture before every unlock can be marked final. The route should therefore describe unlock conditions, not only trophy names. If Steam says an achievement unlocked after a death route, but PS5 labels the same condition differently, the guide remains valid because the route condition is what matters.

Steam Deck status and PC features can also affect completion planning. If you play on handheld hardware, avoid doing no-fail QTE or save-everyone cleanup until you know your frame pacing is stable. If you play on PC, update GPU drivers and disable overlays before long cleanup sessions. Completion routes are much easier when the game is not hitching during real-time threat sections.
`,
    faqs: [
      {
        question: 'What is the safest Directive 8020 platinum route?',
        answer:
          'Start with a spoiler-light survivor run, then clean collectibles, endings, and all deaths from separate Turning Point states.',
      },
      {
        question: 'Should I collect everything before routing deaths?',
        answer:
          'Yes. Collectibles are easier before you intentionally create bad crew states or close exploration paths.',
      },
      {
        question: 'Are PS5, Xbox, and Steam achievement lists identical?',
        answer:
          'Treat the exact naming as unverified until each platform list is captured. Route by unlock condition first.',
      },
    ],
  },
  walkthrough: {
    title: 'Directive 8020 Walkthrough: Spoiler-Light Episode Guide',
    description:
      'A spoiler-light Directive 8020 walkthrough for all eight episodes, with route priorities, QTE and stealth checkpoints, screenshots, and video walkthrough references.',
    lastUpdated,
    timeToRead: '20 min',
    primaryKeyword: 'directive 8020 walkthrough',
    spoilerLevel: 'safe',
    verificationStatus: 'Confirmed',
    heroImage: hero,
    heroImageAlt: 'Directive 8020 hero image showing the Cassiopeia sci-fi horror setting',
    sections: [
      { title: 'How to Use This Walkthrough', id: 'how-to-use-this-walkthrough' },
      { title: 'Episode Route Map', id: 'episode-route-map' },
      { title: 'First Run Priorities', id: 'first-run-priorities' },
      { title: 'When to Rewind', id: 'when-to-rewind' },
    ],
    sectionMedia: {
      'how-to-use-this-walkthrough': {
        image: shot(5),
        alt: 'Directive 8020 crew scene used for spoiler-light walkthrough orientation',
        caption: 'This walkthrough tells you what to watch for without naming every reveal.',
      },
      'episode-route-map': {
        image: shot(6),
        alt: 'Directive 8020 spacecraft route reference for episode planning',
        caption: 'Group episodes by route pressure: setup, suspicion, separation, and final lock-in.',
      },
      'first-run-priorities': {
        image: shot(7),
        alt: 'Directive 8020 character exploration scene for first-run priorities',
        caption: 'On a first run, surviving and learning the layout matters more than perfect cleanup.',
      },
      'when-to-rewind': {
        image: shot(8),
        alt: 'Directive 8020 threat encounter for Turning Point rewind advice',
        caption: 'Rewind major state changes, not every tense dialogue beat.',
      },
    },
    videos: [videos.fullWalkthrough, videos.walkthroughPartOne, videos.officialStory],
    content: `
## How to Use This Walkthrough

This page is built for a first or second playthrough where you want help without having every ending spoiled. It focuses on route awareness: what to notice, what to write down, when to explore, and when a mistake is serious enough to rewind. Directive 8020 has more active pressure than older Dark Pictures entries, so the walkthrough treats QTEs, stealth movement, and real-time threat scenes as part of the route instead of as separate action sequences.

Read one episode block before you play, pause after major Turning Points, and keep a short note of crew status. If you want exact final outcomes, use the endings, choices, and save-everyone pages after finishing the story once. If you want a video companion, start with a no-commentary full walkthrough for route confirmation and a Part 1 creator walkthrough for pacing and early tutorial context.

## Episode Route Map

The current route model uses eight episode blocks. Exact scene labels can vary by save and replay route, but the pressure curve is consistent enough for planning: early episodes introduce the crew and ship, middle episodes stress trust and mimic suspicion, and final episodes lock survivor states into endings.

| Episode range | Primary focus | What to write down | Spoiler level |
| --- | --- | --- | --- |
| Episodes 1-2 | Crew setup, ship layout, early trust signals | First major decision, first separated crew pair, first optional rooms | Low |
| Episodes 3-4 | Real-time threats, stealth pressure, route split setup | Failed QTEs, chase outcomes, locked or skipped rooms | Medium |
| Episodes 5-6 | Mimic suspicion, isolation, relationship pressure | Who accuses whom, who has evidence, who is alone | Medium |
| Episodes 7-8 | Ending setup, final crew state, route lock-in | Final survivors, trust state, last Turning Point, final objective | High |

Use this table as a spoiler-light route map. It tells you the type of decision that matters without telling you the outcome. That makes it useful for players who still want the horror to work.

## First Run Priorities

Your first run should answer four practical questions: who can die, which rooms are easy to miss, which choices obviously change trust, and how punishing the real-time threat sections feel on your setup. Do not chase every collectible or death immediately. When the game gives you time to explore, check side rooms before touching the obvious objective. When the game starts a chase, stealth, or QTE sequence, assume exploration is temporarily over.

For choices, avoid panic logic. The mimic premise makes distrust tempting, but not every aggressive accusation is correct. Preserve evidence, protect mobile crew members, and keep cooperative pairs together when possible. If someone survives a scene because another character helped them, mark that relationship. That note often matters more than the dialogue itself.

## When to Rewind

Turning Points are powerful, but using them after every uncomfortable moment makes the route harder to understand. Rewind when a character dies, a major injury blocks later movement, a crew member becomes isolated in a way you did not intend, a collectible path closes, or the final route clearly changes. Do not rewind every cold response or uncertain clue on a first run.

Before rewinding, write three things: current survivors, current trust or suspicion state, and the exact choice or action you are changing. After replaying, compare only those three items first. If nothing changes, the real requirement probably sits earlier in the chain. This small discipline turns the walkthrough into a route lab instead of a list of guesses.
`,
    faqs: [
      {
        question: 'Can I use this Directive 8020 walkthrough without spoilers?',
        answer:
          'Mostly yes. It explains priorities and route pressure but leaves exact ending triggers to spoiler-marked pages.',
      },
      {
        question: 'How many episodes does Directive 8020 have?',
        answer:
          'Current route tracking uses eight episode blocks, with final naming and boundaries verified through playthrough capture.',
      },
      {
        question: 'Should I rewind on my first playthrough?',
        answer:
          'Rewind only for major deaths, route locks, blocked collectibles, or technical mistakes. Let smaller consequences stand.',
      },
    ],
  },
  'all-endings-guide': {
    title: 'Directive 8020 All Endings Guide',
    description:
      'A spoiler-marked Directive 8020 endings guide with route variants, survivor-state logic, best ending priorities, screenshots, videos, and verification labels.',
    lastUpdated,
    timeToRead: '18 min',
    primaryKeyword: 'directive 8020 endings',
    spoilerLevel: 'spoiler',
    verificationStatus: 'Reported',
    heroImage: hero,
    heroImageAlt: 'Directive 8020 ending route guide hero image',
    sections: [
      { title: 'Spoiler Warning', id: 'spoiler-warning' },
      { title: 'Ending Route Matrix', id: 'ending-route-matrix' },
      { title: 'Best Ending Priorities', id: 'best-ending-priorities' },
      { title: 'Ending Cleanup Strategy', id: 'ending-cleanup-strategy' },
    ],
    sectionMedia: {
      'spoiler-warning': {
        image: shot(2),
        alt: 'Directive 8020 tense crew scene for spoiler warning',
        caption: 'Endings depend on survivor state, final decisions, and trust history.',
      },
      'ending-route-matrix': {
        image: shot(4),
        alt: 'Directive 8020 spaceship scene for route matrix planning',
        caption: 'Think of endings as route families, not isolated final button presses.',
      },
      'best-ending-priorities': {
        image: shot(6),
        alt: 'Directive 8020 crew survival scene for best ending priorities',
        caption: 'The best route usually preserves evidence, mobility, and cooperation.',
      },
      'ending-cleanup-strategy': {
        image: shot(8),
        alt: 'Directive 8020 final route scene for ending cleanup',
        caption: 'Keep one good-state file, one suspicion-heavy file, and one death-heavy file.',
      },
    },
    videos: [videos.endings, videos.bestChoices, videos.officialStory],
    content: `
## Spoiler Warning

This page is for players who are ready to route endings. It discusses ending families, final-state logic, survivor counts, and cleanup planning. It does not pretend that every reported route label is final until it is matched against completed saves, but it does explain the structure that makes endings easier to unlock. Finish one playthrough first if you want the final reveals to land naturally.

The most useful way to think about Directive 8020 endings is not how many final cutscenes exist. It is which state produced the cutscene: who survived, who trusted whom, which evidence survived, whether panic choices dominated the route, and what final mission decision you selected. That is the information you need to reproduce a result.

## Ending Route Matrix

| Route family | Core condition | Player value | Verification status |
| --- | --- | --- | --- |
| Best survival route | Maximum crew survival, cooperative final choices, evidence preserved | Best for first completion and good-ending searches | Reported |
| Partial survival route | Some survivors remain, but trust or mobility is damaged | Explains most mid-tier outcomes | Reported |
| Isolation route | Crew separation and suspicion dominate the route | Useful for mimic-risk and ending explained content | Needs in-game verification |
| Failure route | Death-heavy routing or destructive final decisions | Useful for all-deaths cleanup and worst outcome tests | Reported |
| Secret or teaser route | Collectible and final-state requirements appear linked | High search demand, but should stay labeled until verified | Needs in-game verification |

The table is intentionally route-based. Names such as good ending, best ending, worst ending, and secret ending are useful for search, but they can hide the real cause. If two players both say they got the good ending but one had an extra survivor or a different final evidence state, those may be two variants in the same family.

## Best Ending Priorities

Best-ending routing starts long before the final episode. Keep crew members alive, avoid unnecessary isolation, preserve evidence before accusation, and treat failed stealth or QTE scenes as immediate route risks. A choice that feels morally decisive can still be bad if it destroys cooperation too early. When the game asks who to trust, do not assume the most dramatic answer is the most efficient one.

For testing, build a clean survivor file before you try secret or worst-ending experiments. The clean file should have as many crew members alive as possible, no avoidable failed QTEs, and a clear list of major trust decisions. From that file, change one final route variable at a time. If an ending does not change, move earlier in the chain and test suspicion or evidence instead.

## Ending Cleanup Strategy

Do not chase every ending from one messy save. Build three files: a good-state save, a suspicion-heavy save, and a death-heavy save. The good-state save helps confirm best and save-everyone logic. The suspicion-heavy save helps test mimic-risk and isolation variants. The death-heavy save helps confirm worst-ending and all-death interactions without damaging your best route.

After each ending, record the final survivors, the final selected option, the last Turning Point used, and whether important collectibles were complete. That gives you a repeatable route note rather than a vague memory of how the scene felt. If a video guide shows a different ending from the same final choice, compare the earlier crew state first.
`,
    faqs: [
      {
        question: 'How many endings does Directive 8020 have?',
        answer:
          'Current tracking treats five substantial ending families as the useful model, with exact labels still marked by verification status.',
      },
      {
        question: 'What is the best ending in Directive 8020?',
        answer:
          'The best route prioritizes maximum survival, preserved evidence, high cooperation, and compatible final choices.',
      },
      {
        question: 'Is there a secret ending?',
        answer:
          'A secret or teaser route is reported, but exact collectible and final-state requirements should remain labeled until verified.',
      },
    ],
  },
  'choices-guide': {
    title: 'Directive 8020 Choices Guide: Turning Points and Consequences',
    description:
      'A spoiler-marked Directive 8020 choices guide for Turning Points, trust decisions, mimic-risk choices, crew state tracking, screenshots, and videos.',
    lastUpdated,
    timeToRead: '18 min',
    primaryKeyword: 'directive 8020 choices',
    spoilerLevel: 'spoiler',
    verificationStatus: 'Confirmed',
    heroImage: hero,
    heroImageAlt: 'Directive 8020 choices guide hero image with sci-fi horror atmosphere',
    sections: [
      { title: 'Spoiler Warning', id: 'spoiler-warning' },
      { title: 'How Turning Points Work', id: 'how-turning-points-work' },
      { title: 'Choice Tracking Table', id: 'choice-tracking-table' },
      { title: 'Best Choices Framework', id: 'best-choices-framework' },
    ],
    sectionMedia: {
      'spoiler-warning': {
        image: shot(3),
        alt: 'Directive 8020 decision scene for choices spoiler warning',
        caption: 'Choice pages are useful after a first run because route logic can spoil reveals.',
      },
      'how-turning-points-work': {
        image: shot(5),
        alt: 'Directive 8020 Turning Points style route scene',
        caption: 'Turning Points are strongest when you track the state before and after each replay.',
      },
      'choice-tracking-table': {
        image: shot(7),
        alt: 'Directive 8020 crew scene for choice tracking table',
        caption: 'Record trust, suspicion, survival, and access changes in the same table.',
      },
      'best-choices-framework': {
        image: shot(1),
        alt: 'Directive 8020 threat scene for best choices framework',
        caption: 'Best choices usually protect evidence and cooperation before drama.',
      },
    },
    videos: [videos.bestChoices, videos.saveEveryone, videos.officialAnnounce],
    content: `
## Spoiler Warning

This guide discusses decision categories and consequence tracking. It avoids turning every scene into a line-by-line spoiler, but any choices guide will reveal how the game thinks. If you want a clean horror run, use the walkthrough first and come back here after the credits.

The core mistake players make is asking only what option should I pick. In Directive 8020, the better question is what state does this option change. A choice might affect trust, suspicion, survivor mobility, evidence, a future rescue, or an ending family. The visible dialogue is only the surface.

## How Turning Points Work

Turning Points are the replay framework for major consequences. They let you revisit important branches without replaying the entire story, but they are not a magic answer key. A later Turning Point can show you the final symptom of a route problem while the real cause sits two episodes earlier. That is why state tracking matters.

Before replaying a Turning Point, write down who is alive, who is injured, who trusts each other, who is suspected, which collectibles are already collected, and which objective is active. After changing the choice, replay far enough to see whether any of those state fields changed. If only dialogue changes, the choice may be flavor or delayed. If crew state changes, mark it as route-critical.

## Choice Tracking Table

| Choice type | What changes | What to record | Verification status |
| --- | --- | --- | --- |
| Trust decision | Cooperation, future rescue options, dialogue access | Speaker, target, witness, immediate reaction | Confirmed |
| Mimic-risk decision | Suspicion, safety, possible death or isolation route | Accused character, evidence used, outcome | Confirmed |
| Real-time threat | Injury, death, separation, route pressure | QTE result, stealth path, survivor state | Confirmed |
| Crew separation | Who can help in later scenes | Pairing, location, locked doors, tools available | Reported |
| Final route decision | Ending family and epilogue variant | Survivors, trust state, final selected option | Reported |

Keep the table short enough to use while playing. The goal is not to transcribe the whole script. The goal is to make your next replay faster and more accurate.

## Best Choices Framework

There is no universal best option in every scene, but good-route choices follow patterns. Preserve evidence before accusation. Keep useful crew pairs together. Do not sacrifice someone to simplify a short-term problem unless you are intentionally routing deaths. Treat fear-based decisions as suspicious until you can confirm their long-term effect.

When two choices both look safe, choose the one that leaves more future options open. A reversible uncertainty is better than an irreversible death. If the game gives you a way to verify a threat rather than act on panic, that is usually the better route for save-everyone and best-ending attempts. For second runs, test the opposite choice and compare the same state fields.
`,
    faqs: [
      {
        question: 'Can one choice ruin a Directive 8020 run?',
        answer:
          'Yes. Some choices can kill a character or redirect a route, but Turning Points make recovery easier if you track state.',
      },
      {
        question: 'What should I record before changing a Turning Point?',
        answer:
          'Record survivors, injuries, trust, suspicion, collectibles, and the active objective before replaying.',
      },
      {
        question: 'Are the safest choices always the best choices?',
        answer:
          'No. A safe-looking choice can damage evidence or trust, so compare the resulting state rather than the tone.',
      },
    ],
  },
  'save-everyone-guide': {
    title: 'Directive 8020 Save Everyone Guide',
    description:
      'A spoiler-marked Directive 8020 save everyone guide with survival rules, crew-state tracker, recovery strategy, screenshots, and route videos.',
    lastUpdated,
    timeToRead: '18 min',
    primaryKeyword: 'directive 8020 how to save everyone',
    spoilerLevel: 'spoiler',
    verificationStatus: 'Reported',
    heroImage: hero,
    heroImageAlt: 'Directive 8020 save everyone guide hero image',
    sections: [
      { title: 'Spoiler Warning', id: 'spoiler-warning' },
      { title: 'Everyone Lives Route Rules', id: 'everyone-lives-route-rules' },
      { title: 'Crew-State Tracker', id: 'crew-state-tracker' },
      { title: 'Recovery Strategy', id: 'recovery-strategy' },
    ],
    sectionMedia: {
      'spoiler-warning': {
        image: shot(4),
        alt: 'Directive 8020 crew survival scene for spoiler warning',
        caption: 'A save-everyone route necessarily reveals survival logic.',
      },
      'everyone-lives-route-rules': {
        image: shot(6),
        alt: 'Directive 8020 teamwork scene for everyone lives route rules',
        caption: 'Good survival routing keeps evidence, trust, and movement options alive.',
      },
      'crew-state-tracker': {
        image: shot(8),
        alt: 'Directive 8020 character state scene for crew tracker',
        caption: 'Track more than alive or dead: injuries, suspicion, and pairings matter.',
      },
      'recovery-strategy': {
        image: shot(2),
        alt: 'Directive 8020 threat scene for recovery strategy',
        caption: 'Recover from the closest useful Turning Point, then replay just far enough to confirm.',
      },
    },
    videos: [videos.saveEveryone, videos.bestChoices, videos.fullWalkthrough],
    content: `
## Spoiler Warning

This page is for players who want a survival route and accept spoilers about route structure. It does not list every story reveal, but it talks about the logic that keeps people alive: evidence, trust, suspicion, movement, and failed threat sequences. If you are still on a first blind run, bookmark this page and use the spoiler-light walkthrough instead.

The save-everyone route is less about choosing nice dialogue and more about avoiding irreversible state damage. A character can be alive but doomed if they are isolated, injured, distrusted, or unable to reach a later objective. Your job is to keep the crew alive and functional.

## Everyone Lives Route Rules

Prioritize evidence before accusation. The mimic premise is designed to make paranoia feel rational, but acting without proof can damage trust or remove a future helper. Keep crew pairs cooperative when the game offers a clear teamwork option. Avoid choices that solve a short-term threat by sacrificing a long-term rescue path.

Treat failed stealth, chase, and QTE sections as immediate rewind candidates during a survival run. Some failures may be recoverable, but a first save-everyone attempt should be conservative. If the game gives you a dangerous shortcut and a slower cooperative path, test the cooperative path first. Leave all-deaths and worst-ending cleanup for a separate file.

## Crew-State Tracker

| State | Good-route target | Risk signal | Verification status |
| --- | --- | --- | --- |
| Alive | Every playable crew member remains alive through the final episode | Death, severe injury, impossible rescue | Reported |
| Trusted | Key crew pairs can still cooperate | Panic accusation, hidden evidence, betrayal | Reported |
| Cleared or testable | Suspicion can be resolved through evidence | Acting on fear without proof | Needs in-game verification |
| Mobile | Character can reach later objectives | Chase injury, failed stealth, blocked tool use | Reported |
| Final-ready | Survivors enter the finale with compatible priorities | Conflicting final goals or missing evidence | Needs in-game verification |

Use the tracker after every major Turning Point. If all five people are alive but one person is isolated or mistrusted, treat the run as unstable until later scenes prove otherwise.

## Recovery Strategy

If someone dies, do not restart immediately. Identify the last moment where their state changed, replay from that Turning Point, and continue only until the death is avoided or repeated. If changing the obvious scene does not save them, the requirement likely sits earlier in the trust, suspicion, or mobility chain.

For repeated failures, split the problem into three questions. Did the person have the right helper available? Did they have enough trust or evidence for that helper to act? Did the real-time section succeed? This approach keeps route testing concrete and prevents the common mistake of changing random dialogue choices until something works.
`,
    faqs: [
      {
        question: 'Can everyone survive in Directive 8020?',
        answer:
          'A full survival route is reported and should be built around evidence, trust, mobility, and successful threat sections.',
      },
      {
        question: 'Should I rewind every injury?',
        answer:
          'Rewind injuries that block movement, cooperation, evidence access, or final-route options.',
      },
      {
        question: 'What is the safest save-everyone rule?',
        answer:
          'Preserve evidence and cooperation before taking irreversible action against a suspected crew member.',
      },
    ],
  },
  'collectibles-guide': {
    title: 'Directive 8020 Collectibles Guide: Secrets, Recordings, and Heirlooms',
    description:
      'A Directive 8020 collectibles guide covering Secrets, Simms Recordings, O Death Secrets, Heirlooms, screenshot checkpoints, and video location routes.',
    lastUpdated,
    timeToRead: '17 min',
    primaryKeyword: 'directive 8020 collectibles',
    spoilerLevel: 'safe',
    verificationStatus: 'Needs in-game verification',
    heroImage: hero,
    heroImageAlt: 'Directive 8020 collectibles guide hero image',
    sections: [
      { title: 'Collectible Types', id: 'collectible-types' },
      { title: 'Tracking Method', id: 'tracking-method' },
      { title: 'Checklist Table', id: 'checklist-table' },
      { title: 'Cleanup Tips', id: 'cleanup-tips' },
    ],
    sectionMedia: {
      'collectible-types': {
        image: shot(1),
        alt: 'Directive 8020 interior scene for collectible types',
        caption: 'Collectibles should be grouped by in-game type and route dependency.',
      },
      'tracking-method': {
        image: shot(3),
        alt: 'Directive 8020 exploration scene for collectible tracking',
        caption: 'Track the nearby objective and whether a room closes after a threat sequence.',
      },
      'checklist-table': {
        image: shot(5),
        alt: 'Directive 8020 environmental detail for checklist planning',
        caption: 'Use verification labels while category names and totals are still being checked.',
      },
      'cleanup-tips': {
        image: shot(7),
        alt: 'Directive 8020 corridor screenshot for collectible cleanup',
        caption: 'Collect before death routing so exploration paths stay open.',
      },
    },
    videos: [videos.collectibles, videos.fullWalkthrough, videos.officialLaunch],
    content: `
## Collectible Types

Directive 8020 collectible searches currently cluster around Secrets, Simms Recordings, O Death Secrets, Heirlooms, dolls, and all collectibles. Until every category name and total is verified in captured saves, the most useful guide format is a spoiler-aware tracker rather than a fake-perfect numbered list. The player value comes from knowing what to search for, when areas become risky, and how to avoid locking yourself out.

Treat every optional room as a possible collectible room before advancing a high-pressure objective. When the game shifts into a chase, stealth, or QTE scene, exploration usually stops. If you hear new dialogue, enter a new objective state, or move through a one-way transition, pause and ask whether you have checked the current space.

## Tracking Method

Track collectibles by episode, area, nearby objective, route state, and pickup type. A raw number such as collectible 17 is less useful than med bay side room before alarm objective, because the latter tells you how to find it again. If a collectible appears only after a specific choice, add the prior state. If it disappears after a character dies or moves, add the crew dependency.

For screenshot-assisted cleanup, compare environmental landmarks instead of relying only on text labels. Use the local screenshot set and video location guides to identify room shape, lighting, door placement, and nearby interactables. This is especially helpful in a ship setting where corridors can look similar during tense sequences.

## Checklist Table

| Collectible category | Search demand | What to record | Verification status |
| --- | --- | --- | --- |
| Secrets | High | Episode, room, clue name, route dependency | Needs in-game verification |
| Simms Recordings | Medium | Terminal, recorder, or audio location | Needs in-game verification |
| O Death Secrets | High | Scene context, pickup condition, gallery progress | Needs in-game verification |
| Heirlooms | Medium | Crew association and pickup room | Needs in-game verification |
| Dolls or doll-like items | High | Exact in-game label and location | Needs in-game verification |

This table is intentionally conservative. It keeps the terms players search for while making clear what still needs platform or save verification.

## Cleanup Tips

Do collectible cleanup before all-deaths cleanup. Death-heavy states can move characters, close doors, skip exploration, or push you into emergency pacing. A clean survivor file is usually better for collectible sweeps because more rooms and interactions remain accessible. If you already have a messy save, use videos to confirm a target room first, then replay from the closest Turning Point that still gives you free movement.

When a collectible does not appear, test route state before assuming the guide is wrong. Was the same character alive? Was the same objective active? Did you enter the room before or after a threat sequence? Those details often explain missing pickups better than broad episode labels.
`,
    faqs: [
      {
        question: 'Should I use a collectibles guide on my first run?',
        answer:
          'Use a spoiler-light checklist only. Save exact route-dependent locations for cleanup after one completion.',
      },
      {
        question: 'Are dolls confirmed as a collectible category?',
        answer:
          'Players search for dolls, but exact in-game category naming should remain labeled until capture confirms it.',
      },
      {
        question: 'Can collectibles affect endings?',
        answer:
          'Some route reports suggest secret content may depend on collectibles, but exact requirements need verification.',
      },
    ],
  },
  'all-deaths-guide': {
    title: 'Directive 8020 All Deaths Guide',
    description:
      'A spoiler-marked Directive 8020 all deaths guide for the reported 44 death scenes, with routing rules, tracker table, screenshots, and video references.',
    lastUpdated,
    timeToRead: '19 min',
    primaryKeyword: 'directive 8020 all deaths',
    spoilerLevel: 'spoiler',
    verificationStatus: 'Reported',
    heroImage: hero,
    heroImageAlt: 'Directive 8020 all deaths guide hero image',
    sections: [
      { title: 'Spoiler Warning', id: 'spoiler-warning' },
      { title: 'Death Scene Routing', id: 'death-scene-routing' },
      { title: 'Death Tracker Table', id: 'death-tracker-table' },
      { title: 'Cleanup Order', id: 'cleanup-order' },
    ],
    sectionMedia: {
      'spoiler-warning': {
        image: shot(8),
        alt: 'Directive 8020 horror threat scene for death guide spoiler warning',
        caption: 'All-deaths routing is inherently spoiler-heavy and should come after one story run.',
      },
      'death-scene-routing': {
        image: shot(6),
        alt: 'Directive 8020 real-time threat scene for death routing',
        caption: 'Route deaths by trigger type: QTE fail, stealth fail, choice, or prior state.',
      },
      'death-tracker-table': {
        image: shot(4),
        alt: 'Directive 8020 corridor scene for death tracker table',
        caption: 'A good death tracker also records the avoid method for survival-route value.',
      },
      'cleanup-order': {
        image: shot(2),
        alt: 'Directive 8020 crew scene for death cleanup order',
        caption: 'Build a separate bad-state file so death cleanup does not damage your best route.',
      },
    },
    videos: [videos.deaths, videos.fullWalkthrough, videos.endings],
    content: `
## Spoiler Warning

This page is spoiler-heavy by design. It discusses death routing, triggers, avoid methods, and cleanup order. If you care about surprise, finish the story first and return after you know the crew and threat structure. The goal here is completion efficiency, not a clean horror experience.

The reported completion target is 44 death scenes. Until every gallery entry and platform achievement is matched, keep the number labeled as reported and verify progress in your own save. The most useful death guide is not only how to kill everyone. It also explains how to avoid each death, because the same knowledge supports save-everyone routing.

## Death Scene Routing

Death scenes usually fall into four practical categories: failed QTE or chase, failed stealth, fatal choice, and prior-state death. QTE and stealth deaths are often easiest to test because they happen close to the visible threat. Choice deaths can require earlier setup. Prior-state deaths are the hardest because the character may need to be injured, isolated, mistrusted, or paired with the wrong person before the scene even starts.

Do not collect deaths during your first survivor run. Keep one good save, then build a separate bad-state route where you can fail sections on purpose. If a death video shows a scene you cannot trigger, compare the prior state instead of replaying the same moment repeatedly.

## Death Tracker Table

| Tracker field | Why it matters | Verification status |
| --- | --- | --- |
| Episode | Groups cleanup into short replay blocks | Confirmed |
| Victim | Prevents duplicate counting when scenes look similar | Reported |
| Trigger | Choice, QTE fail, stealth fail, or route condition | Reported |
| Avoid method | Turns the death list into survival help | Reported |
| Required prior state | Captures injury, trust, isolation, or tool requirements | Needs in-game verification |

Add one row per unique gallery entry or achievement progress tick. If two scenes look similar but unlock separately, keep them separate. If one scene has different camera angles but no separate progress, keep it as one entry and note the variant.

## Cleanup Order

Start with QTE and stealth failures because they are easy to reproduce and easy to compare with videos. Next, test obvious fatal choices from close Turning Points. After that, build prior-state deaths that require earlier isolation or damaged trust. Leave mutually exclusive or finale-dependent deaths until you have a stable death-heavy route.

After each block, check progress before moving to the next. If you trigger a death and no progress changes, it may be a duplicate, a variant, or a scene that does not count for the target list. Write it down anyway, but mark it unverified. That keeps your tracker honest and prevents inflated counts.
`,
    faqs: [
      {
        question: 'How many death scenes are in Directive 8020?',
        answer:
          'The current reported target is 44 death scenes, pending full gallery and platform verification.',
      },
      {
        question: 'Can I collect all deaths in one playthrough?',
        answer:
          'No. Use Turning Points and separate route states because many deaths conflict with survival and ending requirements.',
      },
      {
        question: 'Should I fail QTEs on purpose?',
        answer:
          'Only during death cleanup. On a first or save-everyone run, failed QTEs should usually be rewound.',
      },
    ],
  },
  'multiplayer-performance-guide': {
    title: 'Directive 8020 Multiplayer, Movie Night, Steam Deck, and PC Performance Guide',
    description:
      'A practical Directive 8020 guide covering Movie Night, online co-op confusion, Steam Remote Play, Steam Deck status, PC performance, screenshots, and videos.',
    lastUpdated,
    timeToRead: '16 min',
    primaryKeyword: 'directive 8020 online co-op',
    spoilerLevel: 'safe',
    verificationStatus: 'Confirmed',
    heroImage: hero,
    heroImageAlt: 'Directive 8020 multiplayer and performance guide hero image',
    sections: [
      { title: 'Multiplayer Modes', id: 'multiplayer-modes' },
      { title: 'Steam Deck and PC Status', id: 'steam-deck-and-pc-status' },
      { title: 'Crash and Performance Checklist', id: 'crash-and-performance-checklist' },
      { title: 'What to Tell Players', id: 'what-to-tell-players' },
    ],
    sectionMedia: {
      'multiplayer-modes': {
        image: shot(5),
        alt: 'Directive 8020 crew scene for Movie Night and co-op explanation',
        caption: 'Movie Night and native online co-op are different promises; keep the wording precise.',
      },
      'steam-deck-and-pc-status': {
        image: shot(1),
        alt: 'Directive 8020 PC gameplay scene for Steam Deck and performance status',
        caption: 'Handheld and PC players should verify frame pacing before no-fail cleanup.',
      },
      'crash-and-performance-checklist': {
        image: shot(3),
        alt: 'Directive 8020 real-time threat scene for crash and performance checklist',
        caption: 'Performance stability matters most during chases, QTEs, and stealth transitions.',
      },
      'what-to-tell-players': {
        image: shot(7),
        alt: 'Directive 8020 ship scene for player-facing multiplayer advice',
        caption: 'Be clear when a workaround is not the same as built-in online Shared Story.',
      },
    },
    videos: [videos.steamDeck, videos.officialLaunch, videos.walkthroughPartOne],
    content: `
## Multiplayer Modes

Directive 8020 creates a lot of player confusion because older Dark Pictures fans know two different social formats: Movie Night and Shared Story. Movie Night is the local group format where players pass control or assign characters in the same session. Native online Shared Story is a separate feature expectation. Steam feature labels and community posts should not be blended into one answer.

| Mode or feature | Current player-facing answer | Verification status |
| --- | --- | --- |
| Solo Story | Supported | Confirmed |
| Movie Night | Local group play for couch or shared-session groups | Confirmed |
| Shared Story online co-op | Not the same as Movie Night; verify current store and patch state before promising it | Confirmed |
| Steam Remote Play | Possible workaround for some groups, not native online co-op | Reported |
| Post-launch online features | Mentioned in official messaging, but timing and scope should be checked before page updates | Needs platform capture |

The practical copy for users is: yes, you can play socially through Movie Night style play; no, do not assume that means every online co-op format from prior entries is present in the same way.

## Steam Deck and PC Status

Steam and SteamDB currently indicate Steam Deck Playable rather than Verified, so handheld players should treat performance as workable but still worth checking. The most important moments are not quiet exploration scenes; they are QTE prompts, real-time threats, video transitions, and autosaves near Turning Points. Those are the sections where hitching can damage a save-everyone or no-fail attempt.

On PC, use the Steam page as the source of truth for requirements and supported features. If the store updates minimum or recommended specs, update the guide rather than relying on launch-week memory. For completion routes, stable frame pacing is more valuable than maximum visual settings.

## Crash and Performance Checklist

- Update GPU drivers before long route-cleanup sessions.
- Verify game files after crashes, missing cutscenes, or save-load errors.
- Disable overlays if crashes happen during video scenes, QTE prompts, or Steam Remote Play.
- Lower high-cost visual settings before testing save-everyone or no-fail sections.
- Restart the game after repeated Turning Point reloads if performance begins to degrade.
- Record the episode, objective, and Turning Point if a crash repeats.

If a crash happens during a cleanup route, do not immediately overwrite your best save. Reload the closest stable Turning Point and confirm whether achievement or collectible progress persisted.

## What to Tell Players

Use precise language in FAQs and snippets. Movie Night is not the same as native online Shared Story. Steam Remote Play is a workaround, not a built-in co-op promise. Steam Deck Playable is not the same as Verified. Those distinctions matter because players make purchase and route decisions based on them.

For a guide site, the best answer is short but conditional: check the current store feature list, patch notes, and player reports before promising online functionality. That keeps the page useful without overstating features.
`,
    faqs: [
      {
        question: 'Does Directive 8020 have online co-op?',
        answer:
          'Do not treat Movie Night as native online Shared Story. Verify the current store and patch state before promising online co-op.',
      },
      {
        question: 'Does Directive 8020 have Movie Night mode?',
        answer:
          'Yes. Movie Night style group play is the safer confirmed social-play answer.',
      },
      {
        question: 'Is Directive 8020 Steam Deck verified?',
        answer:
          'Current tracking treats it as Steam Deck Playable, so handheld players should still check performance in QTE-heavy scenes.',
      },
    ],
  },
};

export const directive8020GuideOrder = [
  'trophy-guide',
  'walkthrough',
  'all-endings-guide',
  'choices-guide',
  'save-everyone-guide',
  'collectibles-guide',
  'all-deaths-guide',
  'multiplayer-performance-guide',
] as const;

export const directive8020Guides = directive8020GuideOrder.map((slug) => ({
  slug,
  title: directive8020GuideContent[slug].title.replace(/^Directive 8020:?\s*/, ''),
  description: directive8020GuideContent[slug].description,
}));

export const directive8020HubContent = {
  overview: `Directive 8020 is Supermassive Games' sci-fi survival horror entry in The Dark Pictures line, released on ${directive8020Facts.displayReleaseDate} for ${directive8020Facts.platforms}. The current player questions are not generic "is it scary?" questions. They are practical route questions: how to keep everyone alive, when to use Turning Points, which choices affect the ending, how to clean collectibles and O Death secrets, and whether PC performance or stealth sections change the buying decision.

This hub is built around those live needs. It separates spoiler-light first-run help from spoiler-heavy cleanup, then points trophy hunters, ending hunters, and completionists to the correct page without forcing every reader into the clone twist, all-deaths routes, or late-game O Death content too early.`,
  features: [
    'Released May 12, 2026 for PS5, Xbox Series X|S, and PC via Steam',
    'Developed and published by Supermassive Games',
    'Player demand clusters around walkthrough, trophy roadmap, save everyone, endings, choices, deaths, collectibles, and PC performance',
    'Turning Points are useful for completion cleanup, but first-run players should avoid overusing them if they want consequences to land',
    'O Death / Curator secrets and other collectibles are high-intent cleanup topics after the first clear',
    'Ending discussions are spoiler-heavy because players disagree about whether the final twist makes survival choices feel meaningful',
    'PC buyers are asking about ray tracing, path tracing, frame generation, and whether watching a playthrough is safer than buying immediately',
  ],
  guides: directive8020Guides,
  tips: [
    'First run: open the walkthrough only when stuck, and avoid endings, all-deaths, and save-everyone spoilers.',
    'Completion run: protect one everyone-survives file before branching into deaths, bad endings, and collectible cleanup.',
    'Trophy route: use Turning Points to reduce replay time, but track which survivor count and final message produced each ending.',
    'Collectibles route: separate normal Secrets, Simms Recordings, and O Death / Curator secrets so you do not mix first-run clues with post-game cleanup.',
    'PC route: check performance reports before enabling ray tracing or path tracing, especially if you are sensitive to unstable frame pacing.',
  ],
  faq: [
    {
      question: 'When did Directive 8020 release?',
      answer: `Directive 8020 released on ${directive8020Facts.displayReleaseDate}.`,
    },
    {
      question: 'What platforms is Directive 8020 on?',
      answer: `Directive 8020 is available on ${directive8020Facts.platforms}.`,
    },
    {
      question: 'Does Directive 8020 have online co-op?',
      answer:
        'Movie Night is the safer confirmed group-play answer; do not describe Steam Remote Play or post-launch online features as native Shared Story unless the current platform page confirms it.',
    },
    {
      question: 'Which Directive 8020 guide should I read first?',
      answer:
        'Read the spoiler-light walkthrough first if you are still playing. Use trophy, save-everyone, endings, choices, deaths, and collectibles pages after one clear or when you are deliberately routing cleanup.',
    },
    {
      question: 'Is Directive 8020 worth using Turning Points for?',
      answer:
        'Yes for cleanup, endings, trophies, and death routes. For a first run, use Turning Points lightly because Reddit discussion shows many players care about whether choices feel meaningful.',
    },
    {
      question: 'What are players searching for most after finishing Directive 8020?',
      answer:
        'The strongest post-finish needs are endings explained, save everyone, O Death / Curator secrets, all collectibles, all deaths, and whether the final twist changes the value of survival choices.',
    },
  ],
};
