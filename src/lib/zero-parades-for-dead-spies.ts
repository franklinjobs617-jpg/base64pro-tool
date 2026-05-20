export type ZeroParadesVerificationStatus =
  | 'Official'
  | 'Steam-listed'
  | 'Press-listed'
  | 'Review-reported'
  | 'Preview-reported'
  | 'Needs hands-on verification';

export interface ZeroParadesMedia {
  image: string;
  alt: string;
  caption: string;
}

export interface ZeroParadesVideo {
  title: string;
  url: string;
  channel: string;
  duration: string;
}

export interface ZeroParadesGuide {
  title: string;
  description: string;
  lastUpdated: string;
  timeToRead: string;
  primaryKeyword: string;
  spoilerLevel: 'safe' | 'spoiler';
  verificationStatus: ZeroParadesVerificationStatus;
  sections: { title: string; id: string }[];
  content: string;
  faqs: { question: string; answer: string }[];
  heroImage: string;
  heroImageAlt: string;
  sectionMedia: Record<string, ZeroParadesMedia>;
  videos: ZeroParadesVideo[];
}

const lastUpdated = '2026-05-20';
const base = '/games/zero-parades-for-dead-spies';
const hero = `${base}/hero.webp`;
const shot = (index: number) => `${base}/screenshots/zero-parades-screenshot-${index}.webp`;

const videos = {
  release: {
    title: 'ZERO PARADES - PC Release Date Trailer',
    url: 'https://youtu.be/p540bCD_Hac',
    channel: 'ZA/UM Studio',
    duration: 'Official trailer',
  },
  reveal: {
    title: 'ZERO PARADES: For Dead Spies - Announcement Teaser',
    url: 'https://youtu.be/hx42cSlFs7Q',
    channel: 'PlayStation',
    duration: 'Official trailer coverage',
  },
};

export const zeroParadesFacts = {
  releaseDate: '2026-05-21',
  displayReleaseDate: 'May 21, 2026',
  platforms: 'PC via Steam, Epic Games Store, and GOG; PlayStation 5 planned in 2026',
  developer: 'ZA/UM',
  publisher: 'ZA/UM',
  steamId: '2863680',
  steamUrl: 'https://store.steampowered.com/app/2863680/ZERO_PARADES_For_Dead_Spies/',
  gogUrl: 'https://www.gog.com/en/game/zero_parades',
  epicUrl: 'https://store.epicgames.com/en-US/p/zero-parades-ed90f8',
  officialUrl: 'https://zeroparades.com/',
  pressUrl: 'https://zeroparades.com/press',
  genre: 'Espionage CRPG',
  steamDeck: 'Steam Deck Verified',
  price: '$39.99',
  reviewSignal:
    'Pre-release review coverage is available, but player reviews, route data, achievements, and final launch performance still need post-release verification.',
};

const prereleaseNote =
  'This is a launch-eve guide checked on May 20, 2026. It uses the official ZERO PARADES press page, live Steam listing, storefront pages, and public review or preview coverage. Final walkthrough routes, achievements, choices, endings, player-review sentiment, and launch performance still need hands-on verification after the PC release.';

export const zeroParadesGuideContent: Record<string, ZeroParadesGuide> = {
  'release-date-platforms-language-guide': {
    title: 'ZERO PARADES Release Date, Platforms, and Language Guide',
    description:
      'A factual ZERO PARADES guide covering the May 21, 2026 PC release date, Steam/Epic/GOG storefronts, PS5 timing, Steam features, languages, and PC requirements.',
    lastUpdated,
    timeToRead: '12 min',
    primaryKeyword: 'ZERO PARADES release date',
    spoilerLevel: 'safe',
    verificationStatus: 'Steam-listed',
    heroImage: hero,
    heroImageAlt: 'ZERO PARADES: For Dead Spies key art for release date and platforms guide',
    sections: [
      { title: 'Direct Release Answer', id: 'direct-release-answer' },
      { title: 'Platform And Storefront Status', id: 'platform-and-storefront-status' },
      { title: 'Steam Features And Languages', id: 'steam-features-and-languages' },
      { title: 'PC Requirements And Launch Checks', id: 'pc-requirements-and-launch-checks' },
    ],
    sectionMedia: {
      'direct-release-answer': {
        image: shot(1),
        alt: 'ZERO PARADES - RPG game release date guide screenshot',
        caption: 'The PC release is currently listed for May 21, 2026.',
      },
      'platform-and-storefront-status': {
        image: shot(2),
        alt: 'ZERO PARADES - RPG game platform and storefront guide screenshot',
        caption: 'PC storefronts and PS5 timing should be separated because they do not share one launch date.',
      },
      'steam-features-and-languages': {
        image: shot(3),
        alt: 'ZERO PARADES - RPG game Steam features and language guide screenshot',
        caption: 'Steam feature labels answer buyer questions, but they do not replace launch-week testing.',
      },
      'pc-requirements-and-launch-checks': {
        image: shot(4),
        alt: 'ZERO PARADES - RPG game PC requirements guide screenshot',
        caption: 'The most useful launch update will be a real settings and Steam Deck check.',
      },
    },
    videos: [videos.release],
    content: `
## Direct Release Answer

ZERO PARADES: For Dead Spies is currently listed for a PC release on ${zeroParadesFacts.displayReleaseDate}. The official press page names ZA/UM as developer and publisher, and the Steam page positions the game as an espionage RPG from the creators of Disco Elysium. This page is built for players who need release facts before launch, not a fake full walkthrough.

${prereleaseNote}

| Item | Current answer | Verification status |
| --- | --- | --- |
| PC release date | May 21, 2026 | Official / Steam-listed |
| Developer and publisher | ZA/UM | Official |
| Steam app ID | 2863680 | Steam-listed |
| Genre signal | Espionage RPG / CRPG / story-rich RPG | Official / Steam-listed |
| Steam Deck | Steam Deck Verified | Steam-listed |
| Launch price | $39.99 | Store-listed |
| User reviews | No broad player-review consensus before release | Needs launch verification |

## Platform And Storefront Status

The current platform answer is PC first. Steam, Epic Games Store, and GOG all have public store pages for ZERO PARADES. The official press page also lists PlayStation 5 for 2026, but that does not mean PS5 has the same May 21 PC date. Keep the page language precise: PC on May 21, PS5 later in 2026 unless the official page changes.

| Platform or store | Current status | Best wording |
| --- | --- | --- |
| Steam | Listed for PC | Launch storefront |
| Epic Games Store | Listed for PC | Launch storefront |
| GOG | Listed for PC | Launch storefront |
| PlayStation 5 | Listed for 2026 | Later platform, not the PC launch date |

## Steam Features And Languages

Steam currently lists ZERO PARADES as a single-player game with Steam achievements, Steam Cloud, Family Sharing, and Steam Deck Verified status. Storefront labels are useful because players ask whether it is multiplayer, whether saves sync, whether achievements exist, and whether it can be played handheld. They should not be stretched into claims about trophy difficulty, save-scumming, chapter select, or route structure before the live build is available.

For language support, use the live storefront as the source of truth at the time of purchase. Language grids can change close to release, and translation quality can only be judged after players test the final text-heavy build.

## PC Requirements And Launch Checks

Steam currently lists a 16 GB RAM minimum, DirectX 11, Windows 10 minimum, and a GTX 1060 6 GB class GPU as the minimum graphics target. Recommended requirements currently move to Windows 11 and a higher Nvidia GPU class. These are storefront requirements, not performance proof.

| Launch-week check | Why it matters |
| --- | --- |
| Steam Deck status | Steam Deck Verified is listed, but font size, battery life, and long-session comfort still need player checks |
| Ultra-wide and controller comfort | Tactical View and dialogue menus need UI testing |
| Save and cloud behavior | Story-rich RPGs need reliable rollback and sync behavior |
| Accessibility options | Subtitles, input remapping, and readable UI are essential for long dialogue sessions |

Sources checked: the official ZERO PARADES press page, Steam store page, Epic Games Store page, GOG page, and recent PC release coverage.
`,
    faqs: [
      {
        question: 'When does ZERO PARADES release?',
        answer: 'ZERO PARADES: For Dead Spies is currently listed for PC on May 21, 2026.',
      },
      {
        question: 'Is ZERO PARADES coming to PS5?',
        answer: 'Yes. The official press page lists PlayStation 5 for 2026, separate from the May 21 PC launch.',
      },
      {
        question: 'Is ZERO PARADES Steam Deck Verified?',
        answer: 'Steam currently lists ZERO PARADES as Steam Deck Verified, but text readability and battery life still need launch-player checks.',
      },
      {
        question: 'Is ZERO PARADES multiplayer?',
        answer: 'Steam currently lists ZERO PARADES as a single-player game.',
      },
    ],
  },
  'is-it-like-disco-elysium-guide': {
    title: 'Is ZERO PARADES Like Disco Elysium?',
    description:
      'A careful comparison for Disco Elysium players, covering what ZERO PARADES appears to share, what is different, and why it should not be treated as a direct sequel.',
    lastUpdated,
    timeToRead: '13 min',
    primaryKeyword: 'is ZERO PARADES like Disco Elysium',
    spoilerLevel: 'safe',
    verificationStatus: 'Preview-reported',
    heroImage: `${base}/card.webp`,
    heroImageAlt: 'ZERO PARADES: For Dead Spies comparison guide key art',
    sections: [
      { title: 'Short Answer For Disco Elysium Fans', id: 'short-answer-for-disco-elysium-fans' },
      { title: 'What Looks Familiar', id: 'what-looks-familiar' },
      { title: 'What Is Clearly Different', id: 'what-is-clearly-different' },
      { title: 'Should Disco Elysium Fans Play It', id: 'should-disco-elysium-fans-play-it' },
    ],
    sectionMedia: {
      'short-answer-for-disco-elysium-fans': {
        image: shot(5),
        alt: 'ZERO PARADES - RPG game Disco Elysium comparison screenshot',
        caption: 'The shared appeal is narrative RPG tension, not a direct sequel relationship.',
      },
      'what-looks-familiar': {
        image: shot(6),
        alt: 'ZERO PARADES - RPG game dialogue and skill comparison screenshot',
        caption: 'Talking skills, dice pressure, and consequence-heavy scenes are the familiar signals.',
      },
      'what-is-clearly-different': {
        image: shot(7),
        alt: 'ZERO PARADES - RPG game espionage setting comparison screenshot',
        caption: 'ZERO PARADES moves the identity toward espionage, intelligence work, and tactical pressure.',
      },
      'should-disco-elysium-fans-play-it': {
        image: shot(8),
        alt: 'ZERO PARADES - RPG game buyer fit comparison screenshot',
        caption: 'The safest recommendation is based on player taste, not nostalgia alone.',
      },
    },
    videos: [videos.release, videos.reveal],
    content: `
## Short Answer For Disco Elysium Fans

ZERO PARADES is like Disco Elysium in the ways most players are asking about: it is a dialogue-heavy, choice-driven RPG from ZA/UM, with internal systems that comment on your decisions and dice-driven uncertainty. It is not currently positioned as Disco Elysium 2, a direct sequel, or the same detective story with new names.

${prereleaseNote}

The useful comparison is this: Disco Elysium is the obvious reference point for writing, skills, and failure-forward RPG structure; ZERO PARADES is an espionage CRPG with its own spy-thriller premise, protagonist, city politics, and pressure systems.

## What Looks Familiar

Steam and official materials describe a game where skills can talk to you, dice rolls can shape outcomes, and failure does not simply stop the story. That is why Disco Elysium players are paying attention. The appeal is not only that the same studio name appears. It is that the store page is selling a similar kind of thinking RPG: dialogue, consequence, internal voices, and scenes where a bad roll may become a new route instead of a game over.

| Familiar element | Why it matters to Disco Elysium players |
| --- | --- |
| Talking skill system | Suggests internal commentary and personality-driven checks |
| Dice-driven outcomes | Makes uncertainty part of conversations and encounters |
| Failure-forward design | Bad rolls can create story consequences instead of hard stops |
| Political and cultural setting | The city appears to matter as more than a backdrop |

## What Is Clearly Different

ZERO PARADES is framed around espionage. The protagonist, Hershel Wilk, is pulled back into spy work after a disastrous past mission, and public descriptions reference intelligence, subterfuge, violence, deduction, and a three-way cultural or ideological struggle. That gives the game a different fantasy from a police investigation or amnesiac detective structure.

The Steam page also highlights Tactical View, Pressures, Exertion, and conditions such as Fatigue, Anxiety, and Delirium. Those terms point to a more explicit spy-operation layer where physical and psychological strain are systems, not just flavor text.

## Should Disco Elysium Fans Play It

You should watch ZERO PARADES closely if your favorite part of Disco Elysium was writing, internal conflict, role-playing failure, political tension, and unusual RPG structure. You should be more cautious if what you want is the exact tone, exact humor, exact detective pacing, or a confirmed continuation of Revachol-related story threads.

The launch-week update should answer the real comparison questions: whether the writing lands, whether skills feel meaningfully different, whether failure creates satisfying consequences, and whether the espionage systems add depth instead of only new terminology.
`,
    faqs: [
      {
        question: 'Is ZERO PARADES Disco Elysium 2?',
        answer: 'No. Public materials describe ZERO PARADES as a new espionage RPG, not Disco Elysium 2.',
      },
      {
        question: 'Is ZERO PARADES from the Disco Elysium studio?',
        answer: 'Yes. Official and Steam materials identify ZA/UM as the developer and publisher.',
      },
      {
        question: 'Should Disco Elysium fans buy ZERO PARADES?',
        answer: 'It is a strong watchlist pick if you want a dialogue-heavy, failure-forward RPG, but final writing and system quality need launch testing.',
      },
    ],
  },
  'gameplay-skills-encounters-guide': {
    title: 'ZERO PARADES Gameplay, Skills, and Encounters Guide',
    description:
      'A spoiler-light guide to ZERO PARADES gameplay systems, including operant skills, Conditioning, Tactical View, Dramatic Encounters, Pressures, and Exertion.',
    lastUpdated,
    timeToRead: '14 min',
    primaryKeyword: 'ZERO PARADES gameplay',
    spoilerLevel: 'safe',
    verificationStatus: 'Official',
    heroImage: `${base}/homepage-feature.webp`,
    heroImageAlt: 'ZERO PARADES: For Dead Spies gameplay systems guide image',
    sections: [
      { title: 'What Kind Of RPG Is It', id: 'what-kind-of-rpg-is-it' },
      { title: 'Skills Conditioning And Checks', id: 'skills-conditioning-and-checks' },
      { title: 'Dramatic Encounters And Tactical View', id: 'dramatic-encounters-and-tactical-view' },
      { title: 'Pressure Exertion And Failure', id: 'pressure-exertion-and-failure' },
    ],
    sectionMedia: {
      'what-kind-of-rpg-is-it': {
        image: shot(9),
        alt: 'ZERO PARADES - RPG game gameplay overview screenshot',
        caption: 'ZERO PARADES should be read as a narrative CRPG, not as a traditional action spy game.',
      },
      'skills-conditioning-and-checks': {
        image: shot(10),
        alt: 'ZERO PARADES - RPG game skills and checks screenshot',
        caption: 'The official feature list calls out 15 unique operant skills.',
      },
      'dramatic-encounters-and-tactical-view': {
        image: shot(11),
        alt: 'ZERO PARADES - RPG game Dramatic Encounters and Tactical View screenshot',
        caption: 'Tactical View is described as a pause-and-read layer for encounter decisions.',
      },
      'pressure-exertion-and-failure': {
        image: `${base}/screenshots/zero-parades-screenshot-12.webp`,
        alt: 'ZERO PARADES - RPG game pressure exertion and failure screenshot',
        caption: 'Fatigue, Anxiety, and Delirium are named pressure states in public materials.',
      },
    },
    videos: [videos.release],
    content: `
## What Kind Of RPG Is It

ZERO PARADES is best described as an espionage CRPG with dialogue-heavy decision-making, skill checks, and failure-forward outcomes. The storefront tags and official feature list point toward Story Rich, Choices Matter, CRPG, Political, Dialogue Heavy, Isometric, and Thriller intent. That means players should not expect a cover-shooter spy game or a stealth-action mission chain as the default structure.

${prereleaseNote}

## Skills Conditioning And Checks

The official press page describes 15 unique operant skills and a system called Conditioning. The practical question for players is not just how many skills exist. It is whether skill investment changes what you notice, what dialogue options appear, how scenes resolve, and how much internal commentary you receive.

| Public system | What it likely answers for players | Verification status |
| --- | --- | --- |
| 15 operant skills | Build identity and scene options | Official |
| Conditioning | How your spy profile develops under pressure | Official |
| Dice rolls | Uncertain outcomes in checks and scenes | Steam-listed |
| Failure-forward scenes | Whether a bad outcome can still continue the story | Steam-listed |

## Dramatic Encounters And Tactical View

Official materials call out Dramatic Encounters and Tactical View. Steam describes Tactical View as a way to pause time, inspect the scene, and decide how to act. This is the main reason the game should not be covered like a normal dialogue-only RPG. There appears to be a readable encounter layer where positioning, options, and consequences matter.

The launch version should be tested for three things: whether Tactical View is used often enough to matter, whether it adds clarity or slows the game down, and whether different skill builds create meaningfully different encounter solutions.

## Pressure Exertion And Failure

Steam references Pressures and Exertion, including Fatigue, Anxiety, and Delirium. That language suggests the game wants stress to be part of the role-playing system. Exertion appears to let players push dice odds at a cost, which is exactly the kind of mechanic that can create memorable consequences if balanced well.

After release, this page should become a practical guide: when to exert, which pressure states are dangerous, whether failure closes routes, and how often a failed check produces useful story content rather than pure punishment.
`,
    faqs: [
      {
        question: 'Does ZERO PARADES have combat?',
        answer: 'Public materials emphasize Dramatic Encounters, Tactical View, subterfuge, violence, deduction, and dice-driven decisions rather than traditional action combat.',
      },
      {
        question: 'How many skills are in ZERO PARADES?',
        answer: 'The official press page describes 15 unique operant skills.',
      },
      {
        question: 'Can you fail checks in ZERO PARADES?',
        answer: 'Yes. Steam materials describe dice rolls and failure-forward outcomes where a bad roll can hurt but does not necessarily end the story.',
      },
    ],
  },
  'should-you-buy-guide': {
    title: 'Should You Buy ZERO PARADES at Launch?',
    description:
      'A buyer-focused ZERO PARADES guide for launch-week players deciding whether to buy day one, use pre-release reviews, trust Steam Deck Verified, or wait for PS5 and player reports.',
    lastUpdated,
    timeToRead: '12 min',
    primaryKeyword: 'should you buy ZERO PARADES',
    spoilerLevel: 'safe',
    verificationStatus: 'Review-reported',
    heroImage: `${base}/homepage/should-you-buy-guide.webp`,
    heroImageAlt: 'ZERO PARADES: For Dead Spies buyer guide image',
    sections: [
      { title: 'Fast Buyer Verdict', id: 'fast-buyer-verdict' },
      { title: 'Buy Now If These Are Your Priorities', id: 'buy-now-if-these-are-your-priorities' },
      { title: 'Use Reviews Without Overreading Them', id: 'use-reviews-without-overreading-them' },
      { title: 'Wait If These Questions Matter', id: 'wait-if-these-questions-matter' },
      { title: 'Launch Week Update Plan', id: 'launch-week-update-plan' },
    ],
    sectionMedia: {
      'fast-buyer-verdict': {
        image: shot(13),
        alt: 'ZERO PARADES - RPG game launch buyer verdict screenshot',
        caption: 'Day-one confidence depends on whether you value writing and role-playing over solved routes.',
      },
      'buy-now-if-these-are-your-priorities': {
        image: shot(14),
        alt: 'ZERO PARADES - RPG game buy now priority screenshot',
        caption: 'Narrative RPG players have the strongest reason to pay attention at launch.',
      },
      'wait-if-these-questions-matter': {
        image: shot(15),
        alt: 'ZERO PARADES - RPG game wait for reviews screenshot',
        caption: 'Performance, accessibility, and route clarity need evidence from the live build.',
      },
      'use-reviews-without-overreading-them': {
        image: shot(8),
        alt: 'ZERO PARADES - RPG game review signal screenshot',
        caption: 'Pre-release reviews can help with quality signals, but they do not replace player checks for route and platform details.',
      },
      'launch-week-update-plan': {
        image: shot(16),
        alt: 'ZERO PARADES - RPG game launch week update plan screenshot',
        caption: 'The page should convert into hands-on advice after May 21, not stay as pre-release copy.',
      },
    },
    videos: [videos.release, videos.reveal],
    content: `
## Fast Buyer Verdict

Buy ZERO PARADES at launch if you are comfortable with a text-heavy espionage CRPG and want to experience its writing, skills, choices, and failure systems before guides solve the game. Pre-release review coverage is already useful for broad quality signals, and Steam currently lists the game as Steam Deck Verified. Still wait if your decision depends on PS5 timing, achievement routes, exact route consequences, or player-tested performance across your own hardware.

${prereleaseNote}

| Player type | Best move before May 21 | Reason |
| --- | --- | --- |
| Disco Elysium-style RPG fan | Strong watchlist / possible day-one buy | The public systems match narrative RPG intent |
| Achievement hunter | Wait | Trophy and achievement routes need live verification |
| Steam Deck player | Possible buy, but check readability reports | Steam Deck Verified is listed, but text comfort still matters |
| PS5 player | Wait | PS5 is listed for 2026, not the PC launch date |

## Use Reviews Without Overreading Them

Pre-release reviews can help answer whether the writing, tone, and RPG structure are landing for critics. They cannot fully answer every player task this site will need after launch. Achievement missables, route consequences, Steam Deck battery life, cloud-save edge cases, and late-game build advice still require broader player evidence and hands-on checks.

The user-friendly framing is therefore not "wait for reviews" in general. It is more specific: use reviews for quality confidence, then use launch-player reports for platform comfort and route certainty.

## Buy Now If These Are Your Priorities

ZERO PARADES is a better launch-day fit if your main priorities are story density, unusual RPG systems, political or cultural worldbuilding, internal skill commentary, and the possibility that a failed roll creates a new scene. Those are the signals official materials keep emphasizing.

It is also a stronger fit for players who do not need an optimized route immediately. If you enjoy blind RPG runs, day one may be the most interesting time to play because community consensus has not yet flattened every choice into a recommended path.

## Wait If These Questions Matter

Wait for first-player reports if you need hard answers on performance across weaker PCs, accessibility, Steam Deck text comfort, save behavior, achievement difficulty, route structure, or how often Dramatic Encounters appear. Those are not good launch-eve promises. They are launch-week tests.

| Question | Why waiting helps |
| --- | --- |
| Is the writing consistently strong? | Only the full game can answer pacing and payoff |
| Does Tactical View matter? | Public descriptions do not prove frequency or depth |
| Is performance stable on your hardware? | Store requirements and review PCs are not universal benchmarks |
| Are choices meaningful? | Route consequences need complete-play evidence |

## Launch Week Update Plan

After the May 21 PC release, this guide should be updated with hands-on notes: first-hour stability, text readability, controller and mouse comfort, Steam Deck battery and font comfort, achievement list behavior, save slots, early build recommendations, and whether the game deserves dedicated walkthrough, endings, choices, and build pages.

That update path is important for search quality. A useful pre-release buying guide should become a real buyer guide as soon as evidence exists.
`,
    faqs: [
      {
        question: 'Should I buy ZERO PARADES on day one?',
        answer: 'Buy day one if you want a blind narrative CRPG run; wait if you need PS5 timing, achievement-route certainty, or player-tested performance on your exact setup.',
      },
      {
        question: 'Should achievement hunters wait?',
        answer: 'Yes. Achievement routes and missables need the live build before they can be covered responsibly.',
      },
      {
        question: 'Is ZERO PARADES worth watching for RPG fans?',
        answer: 'Yes. The official feature set is highly relevant for players who like dialogue-heavy, choice-driven CRPGs.',
      },
    ],
  },
};

export const zeroParadesGuideOrder = [
  'release-date-platforms-language-guide',
  'is-it-like-disco-elysium-guide',
  'gameplay-skills-encounters-guide',
  'should-you-buy-guide',
] as const;

export const zeroParadesGuides = zeroParadesGuideOrder.map((slug) => ({
  slug,
  title: zeroParadesGuideContent[slug].title.replace(/^ZERO PARADES:?\s*/, ''),
  description: zeroParadesGuideContent[slug].description,
}));

export const zeroParadesHubContent = {
  overview: `ZERO PARADES: For Dead Spies is a new espionage CRPG from ZA/UM, currently listed for a May 21, 2026 PC release through Steam, Epic Games Store, and GOG. The official press page also lists PlayStation 5 for 2026, so this hub keeps PC launch timing and later PS5 timing separate.

This hub is intentionally narrow before launch. It answers the questions players are already asking: when it releases, whether it is like Disco Elysium, what the skill and encounter systems actually promise, whether it is single-player, and whether day-one buyers should wait for performance and route evidence.`,
  features: [
    'PC release date currently listed for May 21, 2026',
    'Steam, Epic Games Store, and GOG storefronts are public',
    'PlayStation 5 version is listed for 2026, separate from the PC launch',
    'Steam currently lists the game as Steam Deck Verified',
    'Current launch price signal is $39.99',
    'Official materials describe an espionage RPG from ZA/UM',
    'Steam lists single-player, achievements, Steam Cloud, and Family Sharing',
    'Public feature list names 15 unique operant skills',
    'Tactical View, Dramatic Encounters, Pressures, and Exertion need live-build testing',
  ],
  guides: zeroParadesGuides,
  tips: [
    'Start with the release guide if you need platform, storefront, and PC requirement facts.',
    'Use the Disco Elysium comparison before assuming this is a direct sequel or the same kind of story.',
    'Open the gameplay guide if you want the cleanest explanation of skills, Tactical View, Pressures, and failure.',
    'Use the buying guide if you are deciding between day-one PC, Steam Deck Verified confidence, or waiting for PS5.',
  ],
  faq: [
    {
      question: 'When does ZERO PARADES release?',
      answer: 'ZERO PARADES: For Dead Spies is currently listed for PC on May 21, 2026.',
    },
    {
      question: 'What platforms is ZERO PARADES on?',
      answer: 'PC storefronts include Steam, Epic Games Store, and GOG. The official press page lists PlayStation 5 for 2026.',
    },
    {
      question: 'Is ZERO PARADES like Disco Elysium?',
      answer: 'It shares narrative RPG and failure-forward signals, but public materials describe ZERO PARADES as a new espionage RPG rather than Disco Elysium 2.',
    },
    {
      question: 'How many guides should exist before launch?',
      answer: 'Four is enough for now: release facts, Disco Elysium comparison, gameplay systems, and buying advice. Walkthrough, endings, and choices should wait for hands-on evidence.',
    },
  ],
};
