export type FirstLight007VerificationStatus =
  | 'Official'
  | 'Steam-listed'
  | 'Trailer-observed'
  | 'Preview-reported'
  | 'Needs hands-on verification';

export interface FirstLight007Media {
  image: string;
  alt: string;
  caption: string;
}

export interface FirstLight007Video {
  title: string;
  url: string;
  channel: string;
  duration: string;
}

export interface FirstLight007Guide {
  title: string;
  description: string;
  lastUpdated: string;
  timeToRead: string;
  primaryKeyword: string;
  spoilerLevel: 'safe' | 'spoiler';
  verificationStatus: FirstLight007VerificationStatus;
  sections: { title: string; id: string }[];
  content: string;
  faqs: { question: string; answer: string }[];
  heroImage: string;
  heroImageAlt: string;
  sectionMedia: Record<string, FirstLight007Media>;
  videos: FirstLight007Video[];
}

const lastUpdated = '2026-05-16';
const hero = '/games/007-first-light/hero.jpg';
const shot = (index: number) =>
  `/games/007-first-light/screenshots/007-first-light-screenshot-${index}.jpg`;

const videos = {
  gameplay: {
    title: '007 First Light Gameplay Trailer',
    url: 'https://www.youtube.com/watch?v=JzkajshTCsA',
    channel: 'IO Interactive',
    duration: 'Official trailer',
  },
  story: {
    title: '007 First Light Story Trailer',
    url: 'https://www.youtube.com/watch?v=P1HPe_xl1AY',
    channel: 'IO Interactive',
    duration: 'Official trailer',
  },
  spycraft: {
    title: '007 First Light Rules of Spycraft Trailer',
    url: 'https://www.youtube.com/watch?v=1_gNnq1lPHU',
    channel: 'IGN',
    duration: 'Official trailer coverage',
  },
  cast: {
    title: 'Patrick Gibson Cast Sessions',
    url: 'https://www.youtube.com/watch?v=Wne-K8h6Lak',
    channel: '007 First Light',
    duration: 'Cast feature',
  },
  pathTracing: {
    title: '007 First Light Path Tracing Reveal',
    url: 'https://www.youtube.com/watch?v=-evOlpsFdXM',
    channel: 'NVIDIA GeForce',
    duration: 'PC tech preview',
  },
  dlss: {
    title: '007 First Light with DLSS 4',
    url: 'https://www.youtube.com/watch?v=0Y4D6D9mdHM',
    channel: 'NVIDIA GeForce',
    duration: 'PC tech preview',
  },
};

export const firstLight007Facts = {
  releaseDate: '2026-05-27',
  displayReleaseDate: 'May 27, 2026',
  platforms:
    'PS5, Xbox Series X|S, PC via Steam and Epic Games Store; Nintendo Switch 2 later in summer 2026',
  developer: 'IO Interactive A/S',
  publisher: 'IO Interactive A/S',
  steamId: '3768760',
  steamUrl: 'https://store.steampowered.com/app/3768760/007_First_Light/',
  officialUrl: 'https://007firstlight.com/',
  genre: 'Espionage action-adventure',
};

const prereleaseNote =
  'This is a pre-release guide. It uses official 007 First Light materials, Steam data, and trailer-observed details. Mission solutions, collectible routes, upgrade values, and final difficulty advice need hands-on verification after launch.';

export const firstLight007GuideContent: Record<string, FirstLight007Guide> = {
  'release-date-platforms-guide': {
    title: '007 First Light Release Date and Platforms Guide',
    description:
      'A factual 007 First Light release date guide covering May 27, 2026, platforms, Switch 2 timing, PC stores, controller support, and buying questions.',
    lastUpdated,
    timeToRead: '13 min',
    primaryKeyword: '007 First Light release date',
    spoilerLevel: 'safe',
    verificationStatus: 'Steam-listed',
    heroImage: hero,
    heroImageAlt: '007 First Light key art for release date and platforms guide',
    sections: [
      { title: 'Direct Answer', id: 'direct-answer' },
      { title: 'Platform Status', id: 'platform-status' },
      { title: 'Steam Feature Checklist', id: 'steam-feature-checklist' },
      { title: 'What Needs Verification', id: 'what-needs-verification' },
    ],
    sectionMedia: {
      'direct-answer': {
        image: shot(1),
        alt: '007 First Light action scene for release date guide',
        caption: 'Steam lists 007 First Light for May 27, 2026.',
      },
      'platform-status': {
        image: shot(2),
        alt: '007 First Light mission environment for platform status',
        caption: 'Platform messaging should separate launch platforms from Switch 2 timing.',
      },
      'steam-feature-checklist': {
        image: shot(3),
        alt: '007 First Light stealth scene for Steam feature checklist',
        caption: 'Steam currently lists single-player and full controller support, not multiplayer.',
      },
      'what-needs-verification': {
        image: shot(4),
        alt: '007 First Light cinematic mission screenshot',
        caption: 'Performance, editions, and mission structure should be rechecked at launch.',
      },
    },
    videos: [videos.gameplay, videos.story, videos.spycraft],
    content: `
## Direct Answer

007 First Light is currently listed for ${firstLight007Facts.displayReleaseDate}. Steam lists the developer and publisher as ${firstLight007Facts.developer}, and the official site frames the game as an espionage action-adventure origin story where a young James Bond earns the number. This page should be treated as a pre-release factual hub, not a review or full walkthrough.

${prereleaseNote}

| Item | Current answer | Verification status |
| --- | --- | --- |
| Release date | May 27, 2026 | Steam-listed |
| Developer / publisher | IO Interactive A/S | Steam-listed |
| Steam app id | 3768760 | Steam-listed |
| Genre | Espionage action-adventure | Official |
| Multiplayer | Steam lists single-player, not multiplayer | Steam-listed |

## Platform Status

The core launch platforms are PS5, Xbox Series X|S, and PC storefronts including Steam and Epic Games Store. Nintendo Switch 2 messaging needs careful wording because recent public reporting places that version later in summer 2026 rather than the main May 27 launch. Do not collapse those into one universal date unless the official platform page changes.

For SEO snippets, the safest answer is: 007 First Light launches May 27, 2026 for PS5, Xbox Series X|S, and PC, with Switch 2 expected later in summer 2026. If a store page updates, the guide should update the visible date and schema together.

## Steam Feature Checklist

Steam currently lists single-player, full controller support, camera comfort, custom volume controls, adjustable difficulty, subtitle options, and Family Sharing. These labels answer important buyer questions but do not describe mission count, collectible structure, gadget upgrades, or trophy requirements.

## What Needs Verification

Launch-week updates should verify final platform parity, PC performance, accessibility options in the live build, save behavior, difficulty settings, mission replay, and whether any edition bonuses affect progression. Until then, this guide should avoid hard claims about length, full mission list, or collectibles.
`,
    faqs: [
      {
        question: 'When does 007 First Light release?',
        answer: '007 First Light is currently listed for May 27, 2026.',
      },
      {
        question: 'Is 007 First Light multiplayer?',
        answer: 'Steam currently lists 007 First Light as single-player.',
      },
      {
        question: 'Is 007 First Light on Nintendo Switch 2?',
        answer:
          'Switch 2 has been publicly discussed for later in summer 2026, separate from the main May 27 launch timing.',
      },
    ],
  },
  'preorder-editions-guide': {
    title: '007 First Light Preorder, Editions, and Bonuses Guide',
    description:
      'A pre-release 007 First Light editions guide covering preorder logic, Deluxe Upgrade questions, IOI Account rewards, and what buyers should verify before launch.',
    lastUpdated,
    timeToRead: '14 min',
    primaryKeyword: '007 First Light preorder editions',
    spoilerLevel: 'safe',
    verificationStatus: 'Preview-reported',
    heroImage: hero,
    heroImageAlt: '007 First Light preorder editions guide key art',
    sections: [
      { title: 'Buyer Answer Summary', id: 'buyer-answer-summary' },
      { title: 'Edition Decision Table', id: 'edition-decision-table' },
      { title: 'IOI Account Rewards', id: 'ioi-account-rewards' },
      { title: 'Preorder Verification Checklist', id: 'preorder-verification-checklist' },
    ],
    sectionMedia: {
      'buyer-answer-summary': {
        image: shot(5),
        alt: '007 First Light Bond scene for buyer answer summary',
        caption: 'Preorder pages should separate official facts from retailer-specific bundles.',
      },
      'edition-decision-table': {
        image: shot(6),
        alt: '007 First Light action screenshot for editions table',
        caption: 'Buy based on access, cosmetics, platform, and whether bonuses affect progression.',
      },
      'ioi-account-rewards': {
        image: shot(7),
        alt: '007 First Light spycraft screenshot for IOI rewards',
        caption: 'IOI Account rewards should be checked in the live account flow before launch.',
      },
      'preorder-verification-checklist': {
        image: shot(8),
        alt: '007 First Light cinematic screenshot for preorder verification',
        caption: 'Always verify the exact storefront text before promising early access or bonuses.',
      },
    },
    videos: [videos.story, videos.gameplay, videos.cast],
    content: `
## Buyer Answer Summary

${prereleaseNote}

Preorder and edition pages are high-converting but easy to get wrong. 007 First Light has public discussion around Deluxe upgrades, early access windows, IOI Account rewards, and named bonus packs, but the safest guide should treat each storefront as the source of truth. A Steam listing, PlayStation listing, Xbox listing, Epic listing, and Switch 2 listing can differ in wording, timing, or entitlement.

The user value is not hype. The user value is a decision framework: which edition gives early access, which bonuses are cosmetic, which rewards require an IOI Account, and whether any platform has a timing difference.

## Edition Decision Table

| Buyer question | What to check | Verification status |
| --- | --- | --- |
| Do I get early access? | Storefront edition text and local unlock time | Needs hands-on verification |
| Are bonuses cosmetic? | Edition content descriptions | Preview-reported |
| Is IOI Account required? | Official account reward flow | Needs hands-on verification |
| Is Switch 2 timing different? | Platform-specific store date | Preview-reported |
| Do bonuses affect gameplay? | Launch build progression and unlock menus | Needs hands-on verification |

## IOI Account Rewards

IO Interactive often uses account-linked reward systems, and player questions already cluster around whether wishlist or account rewards appear correctly. The guide should explain how to verify account linking without promising untested unlocks. After launch, add a step-by-step flow with screenshots only if the live account system confirms it.

## Preorder Verification Checklist

Before buying, check platform, edition, early access wording, local unlock time, refund rules, and whether bonuses are tied to a specific storefront. If you are buying for Steam Deck or PC path tracing, also check performance requirements first. If you are buying Switch 2, verify the Switch 2 date specifically rather than assuming the main May 27 date applies.
`,
    faqs: [
      {
        question: 'Should I preorder 007 First Light?',
        answer:
          'Preorder only if the edition bonuses, early access wording, and platform timing match what you want.',
      },
      {
        question: 'Are Deluxe bonuses required for gameplay?',
        answer:
          'That needs launch verification. Treat public bonus descriptions as edition content, not progression requirements.',
      },
      {
        question: 'Do IOI Account rewards require account linking?',
        answer:
          'Likely yes for account rewards, but the exact live flow should be verified close to launch.',
      },
    ],
  },
  'beginner-spycraft-guide': {
    title: '007 First Light Beginner Spycraft Guide',
    description:
      'A pre-release beginner guide for 007 First Light covering spycraft basics, stealth/action thinking, gadgets, observation, and mission replay expectations.',
    lastUpdated,
    timeToRead: '15 min',
    primaryKeyword: '007 First Light beginner guide',
    spoilerLevel: 'safe',
    verificationStatus: 'Official',
    heroImage: hero,
    heroImageAlt: '007 First Light beginner spycraft guide key art',
    sections: [
      { title: 'Spycraft Answer Summary', id: 'spycraft-answer-summary' },
      { title: 'First Mission Mindset', id: 'first-mission-mindset' },
      { title: 'Beginner Mistake Table', id: 'beginner-mistake-table' },
      { title: 'Launch Update Plan', id: 'launch-update-plan' },
    ],
    sectionMedia: {
      'spycraft-answer-summary': {
        image: shot(2),
        alt: '007 First Light stealth approach screenshot',
        caption: 'Spycraft should be understood as information, access, timing, and clean execution.',
      },
      'first-mission-mindset': {
        image: shot(3),
        alt: '007 First Light mission scene for first mission mindset',
        caption: 'Do not treat every mission like a shooter; read the space before acting.',
      },
      'beginner-mistake-table': {
        image: shot(6),
        alt: '007 First Light action sequence for beginner mistakes',
        caption: 'Going loud may be supported, but that does not make it the best first solution.',
      },
      'launch-update-plan': {
        image: shot(1),
        alt: '007 First Light Bond action screenshot for launch update plan',
        caption: 'After launch, this page should become a real first-hour route and systems primer.',
      },
    },
    videos: [videos.spycraft, videos.gameplay, videos.story],
    content: `
## Spycraft Answer Summary

007 First Light is not simply a Hitman mission pack and not simply a third-person shooter. Official messaging emphasizes becoming 007, using spycraft, choosing whether to go silent or loud, and replaying MI6 scenarios with modifiers. The best pre-release beginner advice is to prepare for a hybrid action-adventure where observation, tools, movement, and timing matter.

${prereleaseNote}

| Beginner pillar | Practical meaning | Verification status |
| --- | --- | --- |
| Observation | Read guards, routes, cameras, doors, and cover | Trailer-observed |
| Gadgets | Q-Branch tools support access and problem solving | Official |
| Silent or loud | Stealth and action both appear supported | Official |
| Replay | MI6 replay/modifiers are mentioned officially | Official |

## First Mission Mindset

On a first run, slow down before the first failure. Watch how enemies react, whether social spaces matter, how gadgets are introduced, and whether the game rewards clean infiltration. IO Interactive's background makes players expect systemic spaces, but 007 First Light also appears to be more cinematic and character-driven than Hitman.

The safest habit is to enter a new area with three questions: what is my objective, what information do I have, and what tool changes the room. If you cannot answer those, explore before escalating.

## Beginner Mistake Table

| Mistake | Why it hurts | Better habit |
| --- | --- | --- |
| Playing every encounter as a gunfight | Action may be possible but costly | Observe patrols and gadget options first |
| Ignoring phone or Q-Watch prompts | Tools may reveal access or intel | Check tools after entering new spaces |
| Assuming Hitman rules exactly apply | Bond has different pacing and goals | Learn 007 First Light on its own terms |
| Skipping replay systems | MI6 replay may expose route depth | Revisit missions after one clean run |

## Launch Update Plan

After release, this guide should add a verified first-hour route, controller settings, early gadget tutorial notes, stealth detection behavior, health rules, checkpoint behavior, and difficulty recommendations. Until then, it should teach the correct mindset without pretending to know every mission.
`,
    faqs: [
      {
        question: 'Is 007 First Light like Hitman?',
        answer:
          'It shares IO Interactive pedigree, but official materials frame it as a Bond origin action-adventure with spycraft, stealth, and action.',
      },
      {
        question: 'Can I play stealthily?',
        answer: 'Official messaging says players can go silent or go loud, so stealth is clearly supported.',
      },
      {
        question: 'Should I watch guide videos before playing?',
        answer:
          'Use pre-release videos for systems context, but wait for hands-on guides before following exact routes.',
      },
    ],
  },
  'stealth-vs-action-guide': {
    title: '007 First Light Stealth vs Action Guide',
    description:
      'A pre-release 007 First Light stealth and action guide explaining silent routes, loud combat, spycraft choices, and why it is not just Hitman.',
    lastUpdated,
    timeToRead: '15 min',
    primaryKeyword: '007 First Light stealth action',
    spoilerLevel: 'safe',
    verificationStatus: 'Official',
    heroImage: hero,
    heroImageAlt: '007 First Light stealth versus action guide key art',
    sections: [
      { title: 'Silent or Loud Answer', id: 'silent-or-loud-answer' },
      { title: 'How to Choose an Approach', id: 'how-to-choose-an-approach' },
      { title: 'Hitman Comparison Table', id: 'hitman-comparison-table' },
      { title: 'What to Test at Launch', id: 'what-to-test-at-launch' },
    ],
    sectionMedia: {
      'silent-or-loud-answer': {
        image: shot(4),
        alt: '007 First Light action and stealth scene',
        caption: 'Official messaging supports both silent and loud approaches.',
      },
      'how-to-choose-an-approach': {
        image: shot(5),
        alt: '007 First Light infiltration screenshot',
        caption: 'Choose based on information, objective pressure, and gadget options.',
      },
      'hitman-comparison-table': {
        image: shot(3),
        alt: '007 First Light mission route screenshot',
        caption: 'Expect IOI design DNA, but not a one-to-one Hitman ruleset.',
      },
      'what-to-test-at-launch': {
        image: shot(6),
        alt: '007 First Light combat screenshot',
        caption: 'Detection, checkpointing, enemy reinforcement, and score systems need live testing.',
      },
    },
    videos: [videos.gameplay, videos.spycraft, videos.story],
    content: `
## Silent or Loud Answer

Official 007 First Light messaging says players can go silent or go loud. That makes stealth vs action one of the most important pre-release search topics. The right answer is not that one style is always best. The right answer is that Bond should choose the approach that protects the mission objective, preserves information, and keeps escape options open.

${prereleaseNote}

## How to Choose an Approach

Stealth should be the default when you lack information. It lets you observe patrols, identify security, use gadgets, and avoid escalation. Action becomes more attractive when the mission turns into pursuit, when the objective is time-sensitive, or when a loud route is clearly supported by set-piece design. Bond fantasy includes both precision and spectacle, so the game may shift between them more often than Hitman.

The best first-run habit is soft stealth. Move carefully, gather information, and be ready to improvise. If the game allows recovery after detection, learn how reinforcements, alarms, and checkpoints work before chasing perfect stealth.

## Hitman Comparison Table

| Question | 007 First Light pre-release answer | Verification status |
| --- | --- | --- |
| Is it a Hitman reskin? | No, official materials frame a Bond origin action-adventure | Official |
| Are stealth routes supported? | Yes, silent play is part of the pitch | Official |
| Are loud routes supported? | Yes, action and car chases are shown | Trailer-observed |
| Are disguises confirmed? | Not enough to promise Hitman-style disguise systems | Needs hands-on verification |
| Is mission replay confirmed? | MI6 replay/modifiers are officially referenced | Official |

## What to Test at Launch

Launch testing should measure detection radius, alarm persistence, enemy search behavior, non-lethal options, checkpoint recovery, and whether missions reward stealth with score, unlocks, or dialogue. Until those systems are verified, guide content should avoid saying stealth is mandatory or action is optimal.
`,
    faqs: [
      {
        question: 'Can you go loud in 007 First Light?',
        answer: 'Yes. Official messaging and trailers show action routes as part of the experience.',
      },
      {
        question: 'Can you play 007 First Light fully stealth?',
        answer:
          'Stealth is supported, but whether every mission supports full stealth needs hands-on verification.',
      },
      {
        question: 'Is 007 First Light just Hitman with Bond?',
        answer:
          'No. It has IO Interactive design DNA, but official materials describe a distinct Bond origin action-adventure.',
      },
    ],
  },
  'gadgets-guide': {
    title: '007 First Light Gadgets Guide',
    description:
      'A pre-release 007 First Light gadgets guide covering Q-Watch, Phone, Earphones, Lighter, Pen, gadget roles, and launch verification.',
    lastUpdated,
    timeToRead: '14 min',
    primaryKeyword: '007 First Light gadgets',
    spoilerLevel: 'safe',
    verificationStatus: 'Official',
    heroImage: hero,
    heroImageAlt: '007 First Light gadgets guide key art',
    sections: [
      { title: 'Confirmed Gadgets', id: 'confirmed-gadgets' },
      { title: 'Gadget Role Table', id: 'gadget-role-table' },
      { title: 'How to Use Gadgets Safely', id: 'how-to-use-gadgets-safely' },
      { title: 'Launch Verification', id: 'launch-verification' },
    ],
    sectionMedia: {
      'confirmed-gadgets': {
        image: shot(7),
        alt: '007 First Light gadget-oriented scene',
        caption: 'Official site materials list Q-Watch, Phone, Earphones, Lighter, and Pen.',
      },
      'gadget-role-table': {
        image: shot(2),
        alt: '007 First Light spy tool screenshot',
        caption: 'Pre-release gadget guides should explain roles without inventing exact upgrades.',
      },
      'how-to-use-gadgets-safely': {
        image: shot(5),
        alt: '007 First Light stealth space for gadget use',
        caption: 'Use gadgets to gather information before forcing combat.',
      },
      'launch-verification': {
        image: shot(8),
        alt: '007 First Light cinematic gadget guide screenshot',
        caption: 'Cooldowns, upgrades, mission locks, and failure states need launch testing.',
      },
    },
    videos: [videos.spycraft, videos.gameplay, videos.story],
    content: `
## Confirmed Gadgets

The official 007 First Light site currently lists several Q-Branch-style tools: Q-Watch, Phone, Earphones, Lighter, and Pen. That is enough to build a useful pre-release gadget guide, but not enough to write upgrade trees, exact puzzle solutions, or cooldown values. Treat each gadget as a role until launch confirms mechanics.

${prereleaseNote}

## Gadget Role Table

| Gadget | Likely guide role | Verification status |
| --- | --- | --- |
| Q-Watch | Intel, status, scanning, or mission interface | Official |
| Phone | Communication, photos, remote interaction, or intel | Official |
| Earphones | Audio monitoring or mission communication | Official |
| Lighter | Distraction, ignition, or Bond-style utility | Official |
| Pen | Classic spy gadget utility, exact use unverified | Official |

## How to Use Gadgets Safely

Use tools before escalation. In a spycraft game, gadgets often reveal options that are invisible if you rush forward. Check new rooms with information tools, listen for objective cues, and look for environmental prompts. If a gadget has limited charges or a cooldown, treat it as a route resource.

Gadgets should also be tested for stealth value. A tool that creates a distraction may be more valuable than a weapon if it avoids alarms. A scanning tool may be more important than damage if it reveals a non-combat route.

## Launch Verification

After launch, this guide should add exact tutorial unlock timing, input controls, upgrade requirements, mission-specific uses, optional uses, and whether gadgets affect mission scores. Do not assume classic Bond gadget behavior until the live build confirms it.
`,
    faqs: [
      {
        question: 'What gadgets are confirmed in 007 First Light?',
        answer: 'The official site lists Q-Watch, Phone, Earphones, Lighter, and Pen.',
      },
      {
        question: 'Do gadgets have upgrades?',
        answer:
          'Upgrade behavior is not verified before launch and should not be treated as confirmed.',
      },
      {
        question: 'Are gadgets required for stealth?',
        answer:
          'They appear central to spycraft, but exact stealth requirements need hands-on verification.',
      },
    ],
  },
  'locations-missions-guide': {
    title: '007 First Light Locations and Missions Guide',
    description:
      'A pre-release 007 First Light locations guide covering Slovakia, Kensington, MI6 training, mission structure, replay, and what not to fake before launch.',
    lastUpdated,
    timeToRead: '14 min',
    primaryKeyword: '007 First Light missions locations',
    spoilerLevel: 'safe',
    verificationStatus: 'Official',
    heroImage: hero,
    heroImageAlt: '007 First Light locations and missions guide key art',
    sections: [
      { title: 'Known Locations', id: 'known-locations' },
      { title: 'Mission Structure Expectations', id: 'mission-structure-expectations' },
      { title: 'Location Tracking Table', id: 'location-tracking-table' },
      { title: 'Launch Walkthrough Rules', id: 'launch-walkthrough-rules' },
    ],
    sectionMedia: {
      'known-locations': {
        image: shot(1),
        alt: '007 First Light location screenshot',
        caption: 'Official materials identify Slovakia and Kensington as known locations.',
      },
      'mission-structure-expectations': {
        image: shot(4),
        alt: '007 First Light mission scene screenshot',
        caption: 'Mission replay and modifiers suggest routes matter, but full structure needs testing.',
      },
      'location-tracking-table': {
        image: shot(3),
        alt: '007 First Light environment screenshot for location tracking',
        caption: 'Location guides should track objectives, tools, route types, and replay value.',
      },
      'launch-walkthrough-rules': {
        image: shot(6),
        alt: '007 First Light action route screenshot',
        caption: 'Do not publish complete mission solutions before the missions are actually played.',
      },
    },
    videos: [videos.story, videos.gameplay, videos.spycraft],
    content: `
## Known Locations

Official 007 First Light materials identify Slovakia and Kensington, England as locations. The story also involves MI6 training and the wider Bond origin setup. That gives enough basis for a location guide, but not enough to publish a complete mission list. This page should remain a pre-release route framework until launch.

${prereleaseNote}

## Mission Structure Expectations

IO Interactive's official messaging references MI6 replay and modifiers, which suggests missions have replay value. That does not automatically mean they follow Hitman-style sandboxes. 007 First Light appears to combine cinematic action, stealth, gadgets, driving, and story scenes. A good guide should track each mission by objective type rather than forcing it into a single genre template.

## Location Tracking Table

| Location or mode | What is known | Verification status |
| --- | --- | --- |
| Slovakia | Officially listed location | Official |
| Kensington, England | Officially listed location | Official |
| MI6 training | Central to young Bond origin | Official |
| Mission replay | MI6 replay/modifiers referenced | Official |
| Complete mission count | Not confirmed pre-launch | Needs hands-on verification |

## Launch Walkthrough Rules

When the game launches, build mission pages from actual capture: objective, route options, gadget opportunities, stealth breaks, action set-pieces, collectibles if any, and replay modifiers. Until then, do not write fake full walkthroughs. Users trust a pre-release guide when it clearly separates known locations from unknown mission details.
`,
    faqs: [
      {
        question: 'What locations are confirmed in 007 First Light?',
        answer: 'Official materials identify Slovakia and Kensington, England.',
      },
      {
        question: 'How many missions are in 007 First Light?',
        answer: 'The complete mission count is not verified before launch.',
      },
      {
        question: 'Does 007 First Light have mission replay?',
        answer: 'Official materials reference MI6 replay and modifiers.',
      },
    ],
  },
  'pc-specs-performance-guide': {
    title: '007 First Light PC Specs and Performance Guide',
    description:
      'A factual 007 First Light PC guide covering minimum specs, recommended specs, 80GB SSD, DLSS 4, path tracing, controller support, and performance questions.',
    lastUpdated,
    timeToRead: '13 min',
    primaryKeyword: '007 First Light PC specs',
    spoilerLevel: 'safe',
    verificationStatus: 'Steam-listed',
    heroImage: hero,
    heroImageAlt: '007 First Light PC specs guide key art',
    sections: [
      { title: 'PC Specs Answer', id: 'pc-specs-answer' },
      { title: 'Minimum vs Recommended', id: 'minimum-vs-recommended' },
      { title: 'DLSS and Path Tracing', id: 'dlss-and-path-tracing' },
      { title: 'Performance Checklist', id: 'performance-checklist' },
    ],
    sectionMedia: {
      'pc-specs-answer': {
        image: shot(8),
        alt: '007 First Light high fidelity PC screenshot',
        caption: 'Steam lists 80GB SSD and 16GB RAM for both minimum and recommended specs.',
      },
      'minimum-vs-recommended': {
        image: shot(5),
        alt: '007 First Light PC gameplay screenshot',
        caption: 'Recommended GPU class starts around RTX 3060 Ti / RX 6700 XT.',
      },
      'dlss-and-path-tracing': {
        image: shot(7),
        alt: '007 First Light path tracing scene',
        caption: 'NVIDIA has shown DLSS and path tracing materials, but live performance still needs testing.',
      },
      'performance-checklist': {
        image: shot(6),
        alt: '007 First Light action screenshot for performance checklist',
        caption: 'Action, driving, and cinematic transitions are the sections to stress test.',
      },
    },
    videos: [videos.pathTracing, videos.dlss, videos.gameplay],
    content: `
## PC Specs Answer

Steam currently lists 007 First Light with a 64-bit Windows 10/11 requirement, 16GB RAM, and 80GB available storage with SSD required. Minimum GPU is listed as GTX 1660, RX 5700, or Intel discrete GPU equivalent. Recommended GPU is listed as RTX 3060 Ti, RX 6700 XT, or Intel discrete GPU equivalent.

${prereleaseNote}

## Minimum vs Recommended

| Tier | CPU | GPU | RAM | Storage | Verification status |
| --- | --- | --- | --- | --- | --- |
| Minimum | Intel Core i5-9500 / Ryzen 5 3500 | GTX 1660 / RX 5700 / Intel equivalent | 16GB | 80GB SSD | Steam-listed |
| Recommended | Intel Core i5-13500 / Ryzen 5 7600 | RTX 3060 Ti / RX 6700 XT / Intel equivalent | 16GB | 80GB SSD | Steam-listed |

The SSD requirement is important. If the game uses cinematic transitions, driving, dense environments, or rapid reloads, storage speed can affect smoothness even when GPU power is sufficient.

## DLSS and Path Tracing

NVIDIA has published 007 First Light materials around DLSS and path tracing. Those previews are useful for PC buyers with RTX hardware, but live settings, frame rates, VRAM usage, and quality modes need testing after release. Do not promise path tracing performance on a specific GPU until benchmarks exist.

## Performance Checklist

Launch testing should cover native resolution, DLSS modes, frame generation if available, path tracing, controller input latency, shader compilation, mission transitions, driving scenes, and stealth-heavy locations. Also check whether Steam Deck status appears after launch; do not mark it verified before Valve or player reports support that.
`,
    faqs: [
      {
        question: 'How much storage does 007 First Light need on PC?',
        answer: 'Steam currently lists 80GB available space and says SSD required.',
      },
      {
        question: 'What GPU is recommended for 007 First Light?',
        answer: 'Steam lists RTX 3060 Ti, RX 6700 XT, or Intel discrete GPU equivalent as recommended.',
      },
      {
        question: 'Does 007 First Light support path tracing?',
        answer:
          'NVIDIA has shown path tracing materials, but live performance and settings need release testing.',
      },
    ],
  },
  'cast-story-guide': {
    title: '007 First Light Cast and Story Guide',
    description:
      'A pre-release 007 First Light story guide covering young James Bond, Patrick Gibson, MI6, M, Q, Moneypenny, Bawma, Greenway, and spoiler-safe story context.',
    lastUpdated,
    timeToRead: '14 min',
    primaryKeyword: '007 First Light cast story',
    spoilerLevel: 'safe',
    verificationStatus: 'Official',
    heroImage: hero,
    heroImageAlt: '007 First Light cast and story guide key art',
    sections: [
      { title: 'Story Answer Summary', id: 'story-answer-summary' },
      { title: 'Known Cast and Characters', id: 'known-cast-and-characters' },
      { title: 'Continuity and Bond Origin', id: 'continuity-and-bond-origin' },
      { title: 'Spoiler Policy', id: 'spoiler-policy' },
    ],
    sectionMedia: {
      'story-answer-summary': {
        image: shot(1),
        alt: '007 First Light young Bond story scene',
        caption: 'The story follows a young Bond before he becomes 007.',
      },
      'known-cast-and-characters': {
        image: shot(2),
        alt: '007 First Light character scene for cast guide',
        caption: 'Official cast materials include Patrick Gibson as James Bond.',
      },
      'continuity-and-bond-origin': {
        image: shot(4),
        alt: '007 First Light MI6 story screenshot',
        caption: 'Treat this as an original game origin story, not a direct film adaptation.',
      },
      'spoiler-policy': {
        image: shot(5),
        alt: '007 First Light cinematic scene for spoiler policy',
        caption: 'Pre-release story pages should stay spoiler-safe and avoid invented plot twists.',
      },
    },
    videos: [videos.cast, videos.story, videos.gameplay],
    content: `
## Story Answer Summary

007 First Light follows a young, resourceful, sometimes reckless James Bond as he enters MI6's training programme and moves toward earning the number. Official materials position it as a Bond origin story from IO Interactive rather than a direct retelling of a film. That matters because players should not expect Daniel Craig continuity, Pierce Brosnan continuity, or a simple adaptation of an existing movie.

${prereleaseNote}

## Known Cast and Characters

Patrick Gibson is publicly presented as James Bond in cast materials. Official site materials also identify familiar MI6 roles and story figures including M, Q, Moneypenny, Bawma, and Greenway. A good cast guide should keep confirmed names separate from speculation about plot importance or mission outcomes.

| Character or role | Current public context | Verification status |
| --- | --- | --- |
| James Bond | Young MI6 recruit earning the number | Official |
| Patrick Gibson | Presented in cast sessions as Bond | Official |
| M | MI6 leadership role | Official |
| Q | Gadget and support role | Official |
| Moneypenny | MI6 character presence | Official |
| Bawma / Greenway | Story figures in official materials | Official |

## Continuity and Bond Origin

This is best described as an original Bond origin story. That avoids misleading film-continuity claims and answers one of the biggest user questions: do you need to know the movies? You do not need to treat it as a sequel to a film timeline. Familiar Bond concepts are present, but the game is building its own version of Bond's early career.

## Spoiler Policy

Before release, keep story content spoiler-safe. Do not infer deaths, betrayals, final missions, or endings from trailer edits. After launch, story pages can split into spoiler-free cast pages and spoiler-marked ending or story explained pages if search demand appears.
`,
    faqs: [
      {
        question: 'Who plays James Bond in 007 First Light?',
        answer: 'Patrick Gibson is presented in official cast materials as James Bond.',
      },
      {
        question: 'Is 007 First Light connected to the movies?',
        answer:
          'It is best described as an original game origin story, not a direct adaptation of a film timeline.',
      },
      {
        question: 'Is Daniel Craig in 007 First Light?',
        answer:
          'Current official cast materials focus on Patrick Gibson as the young James Bond.',
      },
    ],
  },
};

export const firstLight007GuideOrder = [
  'release-date-platforms-guide',
  'preorder-editions-guide',
  'beginner-spycraft-guide',
  'stealth-vs-action-guide',
  'gadgets-guide',
  'locations-missions-guide',
  'pc-specs-performance-guide',
  'cast-story-guide',
] as const;

export const firstLight007Guides = firstLight007GuideOrder.map((slug) => ({
  slug,
  title: firstLight007GuideContent[slug].title.replace(/^007 First Light:?\s*/, ''),
  description: firstLight007GuideContent[slug].description,
}));

export const firstLight007HubContent = {
  overview: `007 First Light is IO Interactive's pre-release espionage action-adventure origin story for a young James Bond, currently listed on Steam for ${firstLight007Facts.displayReleaseDate}. The official pitch focuses on earning the number, spycraft, gadgets, stealth or action choices, MI6 replay, and cinematic Bond set-pieces.

This hub is spoiler-safe and pre-release honest. It explains what is official, what is visible in trailers, and what should wait for hands-on verification after launch.`,
  features: [
    'Steam-listed release date: May 27, 2026',
    'Developed and published by IO Interactive A/S',
    'Young James Bond origin story starring Patrick Gibson',
    'Official spycraft pitch: go silent or go loud',
    'Known gadgets include Q-Watch, Phone, Earphones, Lighter, and Pen',
    'Steam PC specs list 16GB RAM and 80GB SSD',
    'Guide pages use verification labels instead of fake pre-launch certainty',
  ],
  guides: firstLight007Guides,
  tips: [
    'Start with release date and platform facts before choosing a preorder.',
    'Use the spycraft and stealth-vs-action guides to understand the gameplay direction.',
    'Treat complete mission routes and collectibles as unverified until launch.',
    'Check PC specs before planning path tracing or DLSS settings.',
    'Use cast and story pages for spoiler-safe context.',
  ],
  faq: [
    {
      question: 'When does 007 First Light release?',
      answer: '007 First Light is currently listed for May 27, 2026.',
    },
    {
      question: 'Who develops 007 First Light?',
      answer: '007 First Light is developed and published by IO Interactive A/S.',
    },
    {
      question: 'Is 007 First Light multiplayer?',
      answer: 'Steam currently lists 007 First Light as single-player.',
    },
    {
      question: 'Is 007 First Light just Hitman?',
      answer:
        'No. It has IO Interactive design DNA, but official materials frame it as a distinct Bond origin action-adventure.',
    },
  ],
};
