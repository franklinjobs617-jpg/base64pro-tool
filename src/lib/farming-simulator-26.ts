export type FarmingSimulator26VerificationStatus =
  | 'Official'
  | 'Press-listed'
  | 'Site-listed'
  | 'Needs hands-on verification';

export interface FarmingSimulator26Media {
  image: string;
  alt: string;
  caption: string;
}

export interface FarmingSimulator26Guide {
  title: string;
  description: string;
  lastUpdated: string;
  timeToRead: string;
  primaryKeyword: string;
  spoilerLevel: 'safe' | 'spoiler';
  verificationStatus: FarmingSimulator26VerificationStatus;
  sections: { title: string; id: string }[];
  content: string;
  faqs: { question: string; answer: string }[];
  heroImage: string;
  heroImageAlt: string;
  sectionMedia: Record<string, FarmingSimulator26Media>;
  videos: {
    title: string;
    url: string;
    channel: string;
    duration: string;
  }[];
}

const lastUpdated = '2026-05-19';
const hero = '/games/farming-simulator-26/hero.webp';
const shot = (index: number) =>
  `/games/farming-simulator-26/screenshots/farming-simulator-26-screenshot-${index}.webp`;

const launchDayNote =
  'This guide set was rechecked against the live SEGA Asia site and GIANTS Software press material on May 19, 2026. The release date is now current, but real-world Switch comfort, mobile touch feel, regional pricing, and version-specific differences still need hands-on verification.';

export const farmingSimulator26Facts = {
  releaseDate: '2026-05-19',
  displayReleaseDate: 'May 19, 2026',
  platforms: 'Nintendo Switch, iPhone, iPad, and Android devices',
  developer: 'GIANTS Software',
  publisher: 'GIANTS Software',
  officialUrl: 'https://asia.sega.com/farming-simulator-26/en/',
  giantsUrl: 'https://www.giants-software.com/games.php',
  pressUrl: 'https://press.giants-software.com/category/fs20Download?lang=en',
  featureSummary:
    'Official pages describe two new maps, more than 120 machines, 15 crops, production chains, GPS guidance, and improved tutorials.',
  challengeSystem:
    'GIANTS Software says Farming Simulator 26 adds a challenge system with weekly or seasonal tasks and rewards.',
  maps: 'Two maps: Dawnridge and Harburck, based on North American and European landscapes.',
  animals:
    'Official pages mention cows, pigs, horses, sheep, chickens, and goats, including their offspring.',
};

export const farmingSimulator26GuideContent: Record<string, FarmingSimulator26Guide> = {
  'release-date-platforms-guide': {
    title: 'Farming Simulator 26 Release Date and Platforms Guide',
    description:
      'A factual Farming Simulator 26 guide covering the May 19, 2026 release date, Switch and mobile platforms, and the key official features already confirmed on launch day.',
    lastUpdated,
    timeToRead: '10 min',
    primaryKeyword: 'farming simulator 26 release date',
    spoilerLevel: 'safe',
    verificationStatus: 'Official',
    heroImage: hero,
    heroImageAlt: 'Farming Simulator 26 official key art for release date guide',
    sections: [
      { title: 'Direct Answer', id: 'direct-answer' },
      { title: 'Platform Breakdown', id: 'platform-breakdown' },
      { title: 'What Is Already Confirmed', id: 'what-is-already-confirmed' },
      { title: 'What Still Needs Verification', id: 'what-still-needs-verification' },
    ],
    sectionMedia: {
      'direct-answer': {
        image: shot(1),
        alt: 'Farming Simulator 26 map screenshot for release date answer',
        caption: 'The release date and platform set are already public and consistent across official sources.',
      },
      'platform-breakdown': {
        image: shot(2),
        alt: 'Farming Simulator 26 countryside screenshot for platform breakdown',
        caption: 'This game is being positioned for Switch and mobile, not for the main PC and console release pattern many readers assume.',
      },
      'what-is-already-confirmed': {
        image: shot(3),
        alt: 'Farming Simulator 26 machinery screenshot for confirmed features',
        caption: 'Official sources already give enough detail to answer the main buying questions without filler.',
      },
      'what-still-needs-verification': {
        image: shot(4),
        alt: 'Farming Simulator 26 farming screenshot for verification planning',
        caption: 'Touch controls, frame pacing, and platform-specific differences still need live testing.',
      },
    },
    videos: [],
    content: `
## Direct Answer

Farming Simulator 26 is currently scheduled to release on ${farmingSimulator26Facts.displayReleaseDate}. The official SEGA Asia site and the GIANTS Software press release both point to the same date. Official messaging also says the game is coming to Nintendo Switch and mobile devices rather than following the usual PC-first expectation some players may assume.

${launchDayNote}

| Item | Current answer | Verification status |
| --- | --- | --- |
| Release date | May 19, 2026 | Official |
| Platforms | Nintendo Switch, iPhone, iPad, and Android | Official |
| Developer | GIANTS Software | Press-listed |
| Core additions | Challenge system, two maps, 120+ machines, 15 crops, production chains | Official |

## Platform Breakdown

This page matters because Farming Simulator 26 is not being sold in the same way many readers expect from the larger PC and console entries. The official messaging is specifically about Nintendo Switch and mobile devices. That should stay explicit on the page because it changes the buying question. The right user question is not only "when does it come out?" but also "what kind of Farming Simulator release is this?"

## What Is Already Confirmed

Official materials already confirm several concrete features: two new maps, more than 120 authentic machines, 15 crops, production chains, GPS guidance, improved tutorials, and a new challenge system that adds optional direction and rewards. That is enough to write a useful launch-day page without inventing technical details or version comparisons.

## What Still Needs Verification

On launch day, do not promise exact performance on older Switch hardware, battery impact on mobile, controller parity, or how smooth touchscreen interactions feel during long sessions. Those are release-week questions. The right page gives the official scope first, then marks the platform comfort questions as pending hands-on verification.
`,
    faqs: [
      {
        question: 'When does Farming Simulator 26 release?',
        answer: 'Farming Simulator 26 is currently scheduled for May 19, 2026.',
      },
      {
        question: 'What platforms is Farming Simulator 26 on?',
        answer: 'Official messaging currently points to Nintendo Switch, iPhone, iPad, and Android devices.',
      },
      {
        question: 'Is Farming Simulator 26 coming to Steam?',
        answer: 'The current official pages reviewed for this guide focus on Nintendo Switch and mobile devices rather than a Steam release.',
      },
    ],
  },
  'maps-crops-animals-guide': {
    title: 'Farming Simulator 26 Maps, Crops, and Animals Guide',
    description:
      'A practical Farming Simulator 26 guide covering the two confirmed maps, 15 crops, livestock lineup, forestry, and production-chain planning at launch.',
    lastUpdated,
    timeToRead: '11 min',
    primaryKeyword: 'farming simulator 26 maps',
    spoilerLevel: 'safe',
    verificationStatus: 'Official',
    heroImage: hero,
    heroImageAlt: 'Farming Simulator 26 key art for maps crops and animals guide',
    sections: [
      { title: 'Direct Farming Scope Answer', id: 'direct-farming-scope-answer' },
      { title: 'The Two Confirmed Maps', id: 'the-two-confirmed-maps' },
      { title: 'Crops, Animals, and Forestry', id: 'crops-animals-and-forestry' },
      { title: 'What To Test After Launch', id: 'what-to-test-after-launch' },
    ],
    sectionMedia: {
      'direct-farming-scope-answer': {
        image: shot(1),
        alt: 'Farming Simulator 26 map screenshot for farming scope answer',
        caption: 'The official pages are already clear that Farming Simulator 26 is more than fieldwork alone.',
      },
      'the-two-confirmed-maps': {
        image: shot(2),
        alt: 'Farming Simulator 26 landscape screenshot for two maps guide',
        caption: 'The two-map setup is one of the cleanest feature hooks in the current official material.',
      },
      'crops-animals-and-forestry': {
        image: shot(5),
        alt: 'Farming Simulator 26 animals screenshot for crop and animal guide',
        caption: 'The public feature list already confirms a broad mix of crops, livestock, and forestry work.',
      },
      'what-to-test-after-launch': {
        image: shot(6),
        alt: 'Farming Simulator 26 production screenshot for post-launch testing',
        caption: 'The official overview is strong, but route efficiency and economy tuning still need real play.',
      },
    },
    videos: [],
    content: `
## Direct Farming Scope Answer

Farming Simulator 26 is already being framed as a broad farming package rather than a stripped-down checklist. Official pages mention two maps, 15 crops, forestry, multiple livestock types, and expanded production chains. That gives this page real user value because players searching maps or crops usually want to know how varied the game looks before they buy in.

## The Two Confirmed Maps

The official site names two environments: Dawnridge and Harburck. They are described as North American and European landscapes. That matters because map identity is part of the fantasy in farming sims. A guide should surface those names clearly instead of burying them under generic feature copy.

| Map question | Current answer |
| --- | --- |
| How many maps are confirmed? | Two |
| What are they called? | Dawnridge and Harburck |
| What styles do they use? | North American and European landscapes |

## Crops, Animals, and Forestry

Official materials say the game supports more than 15 crops, forestry work, and animal husbandry with cows, pigs, horses, sheep, chickens, and goats, including their offspring. That is strong enough to tell readers this is not only about driving tractors in circles. The page should also note that production chains are being expanded, which gives the resource loop more structure than field harvest alone.

## What To Test After Launch

The open questions are not whether those systems exist. The open questions are how deep they feel on Switch and mobile, how readable the interfaces are on smaller screens, and how balanced the production-chain economy becomes during normal play. Those are the details to add after release rather than pretending they are already known.
`,
    faqs: [
      {
        question: 'How many maps are in Farming Simulator 26?',
        answer: 'Official materials currently confirm two maps: Dawnridge and Harburck.',
      },
      {
        question: 'How many crops does Farming Simulator 26 have?',
        answer: 'Official pages say the game includes more than 15 crops.',
      },
      {
        question: 'What animals are in Farming Simulator 26?',
        answer: 'Official materials mention cows, pigs, horses, sheep, chickens, and goats, including their offspring.',
      },
    ],
  },
  'machines-features-guide': {
    title: 'Farming Simulator 26 Machines and New Features Guide',
    description:
      'A feature-focused Farming Simulator 26 guide covering the 120+ machines, challenge system, GPS guidance, improved tutorials, and what those additions mean for different players.',
    lastUpdated,
    timeToRead: '11 min',
    primaryKeyword: 'farming simulator 26 machines',
    spoilerLevel: 'safe',
    verificationStatus: 'Press-listed',
    heroImage: hero,
    heroImageAlt: 'Farming Simulator 26 key art for machines and features guide',
    sections: [
      { title: 'Direct Feature Answer', id: 'direct-feature-answer' },
      { title: '120 Plus Machines', id: '120-plus-machines' },
      { title: 'Challenge System And Tutorials', id: 'challenge-system-and-tutorials' },
      { title: 'Who These Features Matter To', id: 'who-these-features-matter-to' },
    ],
    sectionMedia: {
      'direct-feature-answer': {
        image: shot(3),
        alt: 'Farming Simulator 26 machinery screenshot for feature answer',
        caption: 'The feature set matters because this release is trying to stay accessible without feeling thin.',
      },
      '120-plus-machines': {
        image: shot(4),
        alt: 'Farming Simulator 26 farm equipment screenshot for machine lineup',
        caption: 'Official copy already names a large machine roster from major real-world brands.',
      },
      'challenge-system-and-tutorials': {
        image: shot(2),
        alt: 'Farming Simulator 26 map screenshot for challenge system guide',
        caption: 'GIANTS Software is using the challenge system and improved tutorials as key selling points for this version.',
      },
      'who-these-features-matter-to': {
        image: shot(6),
        alt: 'Farming Simulator 26 production screenshot for player-fit analysis',
        caption: 'The best guide translates feature bullets into player-fit decisions instead of repeating marketing copy.',
      },
    },
    videos: [],
    content: `
## Direct Feature Answer

Official sources say Farming Simulator 26 includes more than 120 authentic machines, a new challenge system, GPS guidance, improved tutorials, and expanded production chains. That is a strong feature set for a launch-day info page because it tells players how the game is trying to balance relaxed sandbox play with more directed progression.

## 120 Plus Machines

The official machine lineup already names major brands including Case IH, CLAAS, DEUTZ-FAHR, Fendt, John Deere, KRONE, Kubota, Massey Ferguson, New Holland, and Valtra. The point of this section is not to dump a brand list for padding. It is to show readers that the machine variety is being used as a real selling point and not just implied.

## Challenge System And Tutorials

GIANTS Software says the new challenge system gives players tasks and rewards while still letting them play at their own pace. The same official messaging highlights GPS guidance and improved tutorials, specifically as ways to make the game more approachable on mobile devices and Nintendo Switch. That makes the new-player experience one of the most important practical questions around this release.

| Feature | Why it matters |
| --- | --- |
| Challenge system | Gives structure to players who do not want a fully self-directed sandbox |
| GPS guidance | Helps reduce friction during repeated field work |
| Improved tutorials | Important on Switch and mobile where player patience can be lower |
| Production chains | Adds long-term planning beyond basic harvesting |

## Who These Features Matter To

These additions matter most to two kinds of players: newcomers who want clearer direction, and returning players who want a bit more structure without losing the relaxed rhythm of farming. The launch-week update should focus on whether that balance actually works in practice rather than assuming the official wording guarantees it.
`,
    faqs: [
      {
        question: 'How many machines are in Farming Simulator 26?',
        answer: 'Official materials currently say the game includes more than 120 authentic machines.',
      },
      {
        question: 'What is new in Farming Simulator 26?',
        answer: 'Officially confirmed additions include a challenge system, GPS guidance, improved tutorials, expanded production chains, two new maps, and a large machine roster.',
      },
      {
        question: 'Does Farming Simulator 26 have tutorials for beginners?',
        answer: 'Yes. GIANTS Software says the game includes improved in-game tutorials.',
      },
    ],
  },
  'switch-mobile-buying-guide': {
    title: 'Farming Simulator 26 Switch and Mobile Buying Guide',
    description:
      'A buying-focused Farming Simulator 26 guide covering what is confirmed for Switch and mobile, who should care about this version, and which practical comfort questions still need launch-day testing.',
    lastUpdated,
    timeToRead: '10 min',
    primaryKeyword: 'farming simulator 26 switch',
    spoilerLevel: 'safe',
    verificationStatus: 'Official',
    heroImage: hero,
    heroImageAlt: 'Farming Simulator 26 key art for Switch and mobile buying guide',
    sections: [
      { title: 'Direct Buyer Answer', id: 'direct-buyer-answer' },
      { title: 'Why This Release Exists', id: 'why-this-release-exists' },
      { title: 'Best Fit Players', id: 'best-fit-players' },
      { title: 'Launch-Day Comfort Checks', id: 'launch-day-comfort-checks' },
    ],
    sectionMedia: {
      'direct-buyer-answer': {
        image: shot(1),
        alt: 'Farming Simulator 26 landscape screenshot for direct buyer answer',
        caption: 'This release is built around portability and accessibility, so buyer guidance should focus on comfort as much as feature count.',
      },
      'why-this-release-exists': {
        image: shot(3),
        alt: 'Farming Simulator 26 machinery screenshot for release positioning',
        caption: 'The official messaging is clearly about bringing structured farming play to Switch and mobile devices.',
      },
      'best-fit-players': {
        image: shot(5),
        alt: 'Farming Simulator 26 animals screenshot for player fit analysis',
        caption: 'A useful page should help readers decide whether this version fits their habits rather than overselling it to everyone.',
      },
      'launch-day-comfort-checks': {
        image: shot(4),
        alt: 'Farming Simulator 26 fieldwork screenshot for comfort checks',
        caption: 'The last unresolved question is not feature scope. It is how comfortable the version feels on the device you plan to use.',
      },
    },
    videos: [],
    content: `
## Direct Buyer Answer

Farming Simulator 26 looks most relevant for players who want a portable or lower-friction farming experience on Nintendo Switch or mobile rather than a large-box simulation setup on a high-end PC. The official materials already make that positioning clear by emphasizing accessibility features like GPS guidance and improved tutorials alongside the usual farming systems.

${launchDayNote}

## Why This Release Exists

The official press release frames Farming Simulator 26 as a guided but still relaxed version of the series. The challenge system gives players structured tasks and rewards, while the maps, machines, crops, livestock, and production chains keep the broader sandbox intact. That makes the product easier to position than many pre-release pages suggest.

## Best Fit Players

This version is probably a strong fit if one or more of these describe you:

1. You want Farming Simulator on the go.
2. You prefer optional guidance instead of inventing every goal yourself.
3. You like production chains and farm growth but do not need the heaviest possible sim complexity on day one.

It is less clearly targeted at players whose only question is how it compares with a full PC setup. The currently reviewed official pages are centered on Switch and mobile convenience, not on matching every expectation from larger-platform versions.

## Launch-Day Comfort Checks

The first real buying update should test four things: control comfort, readability on smaller screens, battery or heat behavior on mobile, and how much friction the challenge system actually removes for new players. Those are the practical questions that decide whether a portable sim is worth your time.
`,
    faqs: [
      {
        question: 'Is Farming Simulator 26 worth watching on Nintendo Switch?',
        answer: 'Yes, if you want a portable farming experience with clearer guidance and official support for Switch from day one.',
      },
      {
        question: 'Is Farming Simulator 26 made for mobile too?',
        answer: 'Yes. Official messaging currently includes iPhone, iPad, and Android devices alongside Nintendo Switch.',
      },
      {
        question: 'What should I check before buying Farming Simulator 26 on mobile?',
        answer: 'Check launch-day reports on control comfort, readability, performance, battery impact, and how smooth the tutorial flow feels on your device.',
      },
    ],
  },
};

export const farmingSimulator26GuideOrder = [
  'release-date-platforms-guide',
  'maps-crops-animals-guide',
  'machines-features-guide',
  'switch-mobile-buying-guide',
] as const;

export const farmingSimulator26Guides = farmingSimulator26GuideOrder.map((slug) => ({
  slug,
  title: farmingSimulator26GuideContent[slug].title.replace(/^Farming Simulator 26:?\s*/, ''),
  description: farmingSimulator26GuideContent[slug].description,
}));

export const farmingSimulator26HubContent = {
  overview: `Farming Simulator 26 is the portable-focused entry from ${farmingSimulator26Facts.developer}, released on ${farmingSimulator26Facts.displayReleaseDate}. Official pages already confirm a clear set of features: Nintendo Switch and mobile platforms, two maps, more than 120 machines, more than 15 crops, livestock, forestry, expanded production chains, GPS guidance, improved tutorials, and a new challenge system.

This hub stays narrow on purpose. It does not force fake walkthrough content onto a game that has just hit launch day. It answers the real user questions that matter first: supported platforms, maps, crops, animals, machine lineup, accessibility direction, and whether this Switch and mobile version fits the way they play.`,
  features: [
    'Official release date: May 19, 2026',
    'Official platforms: Nintendo Switch, iPhone, iPad, and Android',
    'Two maps: Dawnridge and Harburck',
    'More than 120 authentic machines',
    'More than 15 crops plus forestry and livestock',
    'Challenge system with tasks and rewards',
    'GPS guidance and improved tutorials for easier onboarding',
    'Expanded production chains and logistics',
  ],
  guides: farmingSimulator26Guides,
  tips: [
    'Start with release date and platform facts if you are checking whether this is the Switch and mobile Farming Simulator release you want.',
    'Use the maps and crops page if farm variety matters more to you than pure tech details.',
    'Use the machines page if you care most about brand lineup, challenge flow, and beginner accessibility.',
    'Treat controls, battery behavior, and real mobile comfort as the first live verification questions.',
  ],
  faq: [
    {
      question: 'When does Farming Simulator 26 release?',
      answer: 'Farming Simulator 26 is currently scheduled for May 19, 2026.',
    },
    {
      question: 'What platforms is Farming Simulator 26 on?',
      answer: 'Official messaging currently points to Nintendo Switch, iPhone, iPad, and Android devices.',
    },
    {
      question: 'How many maps are confirmed for Farming Simulator 26?',
      answer: 'Official pages currently confirm two maps: Dawnridge and Harburck.',
    },
    {
      question: 'What is new in Farming Simulator 26?',
      answer: 'Officially confirmed additions include a challenge system, GPS guidance, improved tutorials, expanded production chains, and a 120-plus machine lineup.',
    },
  ],
};
