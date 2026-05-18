export type ParalivesVerificationStatus =
  | 'Official'
  | 'Steam-listed'
  | 'FAQ-listed'
  | 'Needs hands-on verification';

export interface ParalivesMedia {
  image: string;
  alt: string;
  caption: string;
}

export interface ParalivesGuide {
  title: string;
  description: string;
  lastUpdated: string;
  timeToRead: string;
  primaryKeyword: string;
  spoilerLevel: 'safe' | 'spoiler';
  verificationStatus: ParalivesVerificationStatus;
  sections: { title: string; id: string }[];
  content: string;
  faqs: { question: string; answer: string }[];
  heroImage: string;
  heroImageAlt: string;
  sectionMedia: Record<string, ParalivesMedia>;
  videos: {
    title: string;
    url: string;
    channel: string;
    duration: string;
  }[];
}

const lastUpdated = '2026-05-18';
const hero = '/games/paralives/hero.jpg';
const shot = (index: number) =>
  `/games/paralives/screenshots/paralives-screenshot-${index}.jpg`;

const prereleaseNote =
  'This is a pre-release guide set. It uses the current Steam store page, the official Paralives FAQ, and live official messaging checked on May 18, 2026. Exact performance, final save behavior, bug level, full feature depth, and first-week balance need hands-on verification after Early Access starts.';

export const paralivesFacts = {
  releaseDate: '2026-05-25',
  displayReleaseDate: 'May 25, 2026',
  platforms: 'PC and Mac via Steam',
  developer: 'Alex Masse and the Paralives Team',
  publisher: 'Alex Masse and the Paralives Team',
  steamId: '1118520',
  steamUrl: 'https://store.steampowered.com/app/1118520/Paralives/',
  faqUrl: 'https://www.paralives.com/faq',
  earlyAccess: 'Early Access',
  price: '$39.99 USD during Early Access',
  pricingPlan:
    'The official FAQ says Paralives will cost $39.99 USD during Early Access and the price will increase later.',
  noPaidDlc:
    'Official FAQ and Steam wording both say there will be no paid DLCs, only free updates and expansions.',
  consolePlan: 'The official FAQ currently says there are no plans for console versions.',
  modSupport:
    'Steam and the official FAQ say players can share creations, custom content, and mods through Steam Workshop.',
  scriptMods: 'The official FAQ says script mods are not planned at the moment.',
  launchLaterFeatures:
    'Steam says pets, cars, houseboats, town creation tools, weather, seasons, pools, gardening, fishing, and more are planned during Early Access rather than guaranteed on day one.',
};

export const paralivesGuideContent: Record<string, ParalivesGuide> = {
  'release-date-early-access-guide': {
    title: 'Paralives Release Date and Early Access Guide',
    description:
      'A factual Paralives release date guide covering the May 25, 2026 Early Access launch, Steam status, PC and Mac availability, and what readers should verify after release.',
    lastUpdated,
    timeToRead: '11 min',
    primaryKeyword: 'paralives release date',
    spoilerLevel: 'safe',
    verificationStatus: 'Official',
    heroImage: hero,
    heroImageAlt: 'Paralives life simulation key art for release date guide',
    sections: [
      { title: 'Direct Answer', id: 'direct-answer' },
      { title: 'Early Access Scope', id: 'early-access-scope' },
      { title: 'Platform and Storefront Facts', id: 'platform-and-storefront-facts' },
      { title: 'What Still Needs Verification', id: 'what-still-needs-verification' },
    ],
    sectionMedia: {
      'direct-answer': {
        image: shot(1),
        alt: 'Paralives open-world town screenshot for release date answer',
        caption: 'The current Steam page is the source of truth for the listed launch date.',
      },
      'early-access-scope': {
        image: shot(2),
        alt: 'Paralives house building screenshot for Early Access scope',
        caption: 'The useful buyer question is not only when Paralives launches, but what the Early Access label actually means.',
      },
      'platform-and-storefront-facts': {
        image: shot(3),
        alt: 'Paralives Paramaker screenshot for platform facts',
        caption: 'Official platform wording is currently PC and Mac through Steam.',
      },
      'what-still-needs-verification': {
        image: shot(4),
        alt: 'Paralives town life screenshot for launch-week verification plan',
        caption: 'Performance and day-one feature depth still need live testing after May 25.',
      },
    },
    videos: [],
    content: `
## Direct Answer

Paralives is currently set to launch in ${paralivesFacts.earlyAccess} on ${paralivesFacts.displayReleaseDate}. Both the official Paralives FAQ and the live Steam page point to the same date, which makes the current launch timing unusually clear for a pre-release life sim page. The game will be available on Steam, and the official FAQ says it will launch for PC and Mac.

${prereleaseNote}

| Item | Current answer | Verification status |
| --- | --- | --- |
| Release date | May 25, 2026 | Official |
| Launch model | Early Access | Steam-listed |
| Platform | PC and Mac via Steam | Official |
| Console version | No current console plans | FAQ-listed |
| Launch price | $39.99 USD during Early Access | FAQ-listed |

The reason this page has real value is that many readers are not asking a generic hype question. They are asking whether Paralives is actually about to be playable, whether it is launching as a full 1.0 release, and whether they should expect missing systems at the start. A strong release-date page should answer all three immediately.

## Early Access Scope

Steam's Early Access section matters because it explains why Paralives is launching this way and what players should expect. The store page says Early Access is being used so players can give feedback on the systems already developed, while the team keeps expanding the game over time. That means buyers should not read the launch as final feature completion. They should read it as the first public version of a game that still has major roadmap items ahead.

This distinction matters for trust. A bad pre-release guide says "Paralives launches May 25" and stops there. A good guide says "Paralives enters Early Access on May 25, and some major features are planned for later updates." That is a cleaner answer for users and for search.

## Platform and Storefront Facts

The official FAQ currently says the game will be available on Steam for PC and Mac. It also says there are no console plans right now. That should be stated plainly because console speculation is one of the easiest ways for a life-sim page to become low-trust. If a storefront or roadmap changes later, the page can be updated. For now, the public answer is simple: Steam, PC, and Mac.

## What Still Needs Verification

Do not overstate what a date page can prove before launch. A release page cannot confirm actual laptop performance, bug level, load times, whether early mod workflows are smooth, or how deep each life-sim system feels in the launch build. Those are release-week tests. The right pre-launch habit is to separate the confirmed launch facts from the things that only direct play can answer.
`,
    faqs: [
      {
        question: 'When does Paralives release?',
        answer: 'Paralives is currently set to enter Early Access on May 25, 2026.',
      },
      {
        question: 'Is Paralives launching in Early Access?',
        answer: 'Yes. The current Steam page presents Paralives as an Early Access release.',
      },
      {
        question: 'What platforms is Paralives coming to first?',
        answer: 'The official FAQ currently says Paralives will be available on Steam for PC and Mac.',
      },
      {
        question: 'Is Paralives coming to consoles?',
        answer: 'The official FAQ currently says there are no plans for console versions at the moment.',
      },
    ],
  },
  'price-platforms-mac-guide': {
    title: 'Paralives Price, Platforms, and Mac Guide',
    description:
      'A buyer-focused Paralives guide covering the official $39.99 Early Access price, PC and Mac support, no-console status, and the unanswered launch-week performance questions.',
    lastUpdated,
    timeToRead: '11 min',
    primaryKeyword: 'paralives price',
    spoilerLevel: 'safe',
    verificationStatus: 'FAQ-listed',
    heroImage: hero,
    heroImageAlt: 'Paralives key art for price and platform guide',
    sections: [
      { title: 'Direct Buyer Answer', id: 'direct-buyer-answer' },
      { title: 'Platform Breakdown', id: 'platform-breakdown' },
      { title: 'Mac and Low-End PC Expectations', id: 'mac-and-low-end-pc-expectations' },
      { title: 'What To Check At Launch', id: 'what-to-check-at-launch' },
    ],
    sectionMedia: {
      'direct-buyer-answer': {
        image: shot(2),
        alt: 'Paralives build mode screenshot for buyer answer',
        caption: 'The official price and platform wording is already strong enough to answer purchase planning questions.',
      },
      'platform-breakdown': {
        image: shot(1),
        alt: 'Paralives town overview screenshot for platform breakdown',
        caption: 'Use the official FAQ first instead of guessing console or non-Steam plans.',
      },
      'mac-and-low-end-pc-expectations': {
        image: shot(4),
        alt: 'Paralives neighborhood screenshot for Mac and laptop expectations',
        caption: 'Official wording says the team is working on optimization, but exact specs are not public yet.',
      },
      'what-to-check-at-launch': {
        image: shot(5),
        alt: 'Paralives family life screenshot for launch checks',
        caption: 'Price is known before launch. Actual performance and comfort are not.',
      },
    },
    videos: [],
    content: `
## Direct Buyer Answer

The official Paralives FAQ currently says the game will cost ${paralivesFacts.price}. The same FAQ says the price will increase after that, which means this is not a vague placeholder. It is a concrete Early Access price statement. For readers deciding whether to buy now or wait, that is one of the most useful facts available before launch.

| Buyer question | Current answer | Verification status |
| --- | --- | --- |
| Early Access price | $39.99 USD | FAQ-listed |
| Price later | Planned to increase after Early Access | FAQ-listed |
| PC support | Yes | Official |
| Mac support | Yes | Official |
| Console version | No current plans | FAQ-listed |

## Platform Breakdown

The current public platform answer is narrower than many players assume. Paralives is being positioned for Steam on PC and Mac, not for every platform at once. The official FAQ also says there are no console plans right now. That should not be softened into "maybe later" on the page unless the official messaging changes.

For SEO and user trust, this matters a lot. One of the fastest ways to weaken a pre-release guide is to pad it with platform speculation. If the official answer is Steam on PC and Mac, say that directly. If console readers ask later, that question should stay in the FAQ with the current "no plans" answer.

## Mac and Low-End PC Expectations

The official FAQ says the team is working on optimizing the game so it can run on laptops and lower-end computers as much as possible, but also says specific requirements will come closer to release. That gives you one useful sentence and one important limit. It is fair to say the team is thinking about optimization. It is not fair to publish fake minimum specs before the developers do.

That means this page should help readers ask the right launch-day questions:

| Launch-day check | Why it matters |
| --- | --- |
| Initial load time | Open-world life sims can feel bad even before frame rate becomes the problem |
| Build mode responsiveness | Input lag matters more than raw benchmark numbers for builders |
| Paramaker smoothness | Character editing is a core loop, not a side feature |
| Laptop thermals and battery drain | Relevant because the official FAQ specifically mentions lower-end systems |

## What To Check At Launch

Price and platform are confirmed. Real buying comfort is not. Check the live system requirements, the first round of player reports, and whether Mac performance looks stable enough for long play sessions. That is the honest split between pre-release information and release-week evidence.
`,
    faqs: [
      {
        question: 'How much does Paralives cost?',
        answer: 'The official FAQ currently says Paralives will cost $39.99 USD during Early Access.',
      },
      {
        question: 'Will the price of Paralives increase later?',
        answer: 'Yes. The official FAQ says the price will increase after Early Access.',
      },
      {
        question: 'Is Paralives coming to Mac?',
        answer: 'Yes. The official FAQ currently says Paralives will be available on Steam for PC and Mac.',
      },
      {
        question: 'Does Paralives have confirmed system requirements yet?',
        answer: 'Not yet. The official FAQ says specific requirements will be shared closer to release.',
      },
    ],
  },
  'early-access-roadmap-guide': {
    title: 'Paralives Early Access Roadmap Guide',
    description:
      'A roadmap-style Paralives guide covering what is in the launch version, which major features are planned during Early Access, and how to read the current roadmap without overclaiming.',
    lastUpdated,
    timeToRead: '13 min',
    primaryKeyword: 'paralives early access features',
    spoilerLevel: 'safe',
    verificationStatus: 'Steam-listed',
    heroImage: hero,
    heroImageAlt: 'Paralives key art for Early Access roadmap guide',
    sections: [
      { title: 'What Early Access Means Here', id: 'what-early-access-means-here' },
      { title: 'Features Confirmed For Later', id: 'features-confirmed-for-later' },
      { title: 'How To Read The Roadmap Properly', id: 'how-to-read-the-roadmap-properly' },
      { title: 'Launch-Week Update Priorities', id: 'launch-week-update-priorities' },
    ],
    sectionMedia: {
      'what-early-access-means-here': {
        image: shot(3),
        alt: 'Paralives Paramaker screenshot for Early Access explanation',
        caption: 'Paralives is not framing Early Access as a tiny prototype, but it is also not claiming feature completion.',
      },
      'features-confirmed-for-later': {
        image: shot(6),
        alt: 'Paralives outdoor life screenshot for roadmap items',
        caption: 'Several of the most searched features are explicitly listed for later updates rather than day one.',
      },
      'how-to-read-the-roadmap-properly': {
        image: shot(2),
        alt: 'Paralives house building screenshot for roadmap reading advice',
        caption: 'The right question is not whether features are popular, but whether they are listed for launch or later.',
      },
      'launch-week-update-priorities': {
        image: shot(1),
        alt: 'Paralives town screenshot for launch-week priorities',
        caption: 'The first live update should confirm what really exists in the launch build before adding wishlist coverage.',
      },
    },
    videos: [],
    content: `
## What Early Access Means Here

Paralives is using Early Access in the serious, literal sense. The Steam page says the team wants players to use the systems already built and provide feedback while the game continues growing. That should change how the hub is written. The hub should not pretend all expected life-sim systems are present on day one. It should separate launch features from planned additions.

${prereleaseNote}

## Features Confirmed For Later

One of the strongest things the Steam page does is list a clear group of features planned during the Early Access phase. That makes this page more useful than a generic "roadmap soon" article.

| Planned during Early Access | Current source |
| --- | --- |
| Weather and seasons | Steam Early Access section |
| Dogs, cats, and horses | Steam Early Access section |
| Cars and bikes | Steam Early Access section |
| Boats and houseboats | Steam Early Access section |
| Pools and swimming | Steam Early Access section |
| Parties, weddings, and other social events | Steam Early Access section |
| Story progression for NPCs | Steam Early Access section |
| Family tree | Steam Early Access section |
| Gardening and fishing | Steam Early Access section |
| Tools to edit and create towns | Steam Early Access section |

This list is why topics like pets, cars, and town creation deserve dedicated pages now. Players are already searching them, but the honest answer is that they are planned during Early Access rather than confirmed for the launch build.

## How To Read The Roadmap Properly

The mistake many pre-release guides make is treating every planned feature as if it exists already. That creates weak pages and weak trust. The better approach is to answer three different user questions:

| Question | Better page answer |
| --- | --- |
| Is this feature promised at all? | Use the official roadmap or Steam wording |
| Is it available at Early Access launch? | Only say yes if the current launch materials support it |
| Should I wait for it before buying? | Explain the tradeoff instead of forcing a yes or no |

If pets or cars are the reason someone wants Paralives, the roadmap page should tell them clearly that those are planned later items. If build mode and life-sim basics already satisfy them, then buying at launch may still make sense.

## Launch-Week Update Priorities

After Early Access opens, the first update should confirm which launch systems feel complete enough for normal play, how much of town life is already active, and whether the feature set already supports long saves or mainly experimentation. That is more useful than padding the page with future wishlist speculation once the game is finally live.
`,
    faqs: [
      {
        question: 'Will Paralives have pets at launch?',
        answer: 'The current Steam Early Access section lists pets as planned during Early Access, not as a confirmed launch-day feature.',
      },
      {
        question: 'Are cars in Paralives at launch?',
        answer: 'Cars are currently listed as a planned Early Access feature, so they should not be treated as launch-day confirmed yet.',
      },
      {
        question: 'Does Paralives have weather and seasons yet?',
        answer: 'Weather and seasons are listed in the current Steam roadmap as planned during Early Access.',
      },
      {
        question: 'Will Paralives get town creation tools?',
        answer: 'Yes, town creation tools are listed on the Steam page as planned during the Early Access phase.',
      },
    ],
  },
  'build-mode-paramaker-guide': {
    title: 'Paralives Build Mode and Paramaker Guide',
    description:
      'A pre-release Paralives guide covering gridless building, curved walls, split levels, the Paramaker, and the questions players should test first once Early Access starts.',
    lastUpdated,
    timeToRead: '12 min',
    primaryKeyword: 'paralives build mode',
    spoilerLevel: 'safe',
    verificationStatus: 'Steam-listed',
    heroImage: hero,
    heroImageAlt: 'Paralives key art for build mode and Paramaker guide',
    sections: [
      { title: 'Build Mode Answer Summary', id: 'build-mode-answer-summary' },
      { title: 'What The Paramaker Already Promises', id: 'what-the-paramaker-already-promises' },
      { title: 'Camera And Control Expectations', id: 'camera-and-control-expectations' },
      { title: 'First-Day Builder Checklist', id: 'first-day-builder-checklist' },
    ],
    sectionMedia: {
      'build-mode-answer-summary': {
        image: shot(2),
        alt: 'Paralives build mode screenshot for answer summary',
        caption: 'Paralives is already making its strongest public case through building flexibility.',
      },
      'what-the-paramaker-already-promises': {
        image: shot(3),
        alt: 'Paralives Paramaker screenshot for character creation guide',
        caption: 'The current store page describes a detailed character creator with body and personality controls.',
      },
      'camera-and-control-expectations': {
        image: shot(5),
        alt: 'Paralives interior screenshot for camera and control expectations',
        caption: 'The official FAQ answers one common confusion directly: no first-person or third-person mode is planned.',
      },
      'first-day-builder-checklist': {
        image: shot(4),
        alt: 'Paralives neighborhood build screenshot for builder checklist',
        caption: 'The first thing builders should test is not only visual freedom, but comfort and speed.',
      },
    },
    videos: [],
    content: `
## Build Mode Answer Summary

The Steam page already gives Paralives one of its clearest differentiators: gridless construction with curved walls, split-level floors, free placement, resizing, recoloring, and a heavily tactile build flow. If you are evaluating whether Paralives is worth watching before launch, build mode is one of the best reasons to care now rather than later.

| Build question | Current answer | Verification status |
| --- | --- | --- |
| Gridless construction | Yes | Steam-listed |
| Curved walls | Yes | Steam-listed |
| Split-level floors | Yes | Steam-listed |
| Free item placement and resizing | Yes | Steam-listed |
| Detailed character creator | Yes, the Paramaker | Steam-listed |

## What The Paramaker Already Promises

Steam describes the Paramaker as an advanced creator that lets players adjust height, facial and body features, outfits, and personalities. That is a strong claim because it goes beyond cosmetic presets. It signals that Paralives sees identity creation as a core loop, not just a setup screen before the "real" game starts.

That also makes this page important for user intent. Players searching Paralives build mode often really mean one of two things: "Can I make spaces the way I want?" and "Can I make people the way I want?" The build-mode page should answer both, because the current public materials link those two fantasies together.

## Camera And Control Expectations

The official FAQ answers one recurring question very directly: Paralives does not currently plan a first-person or third-person mode. Instead, it uses a free 3D camera like other simulation games. That matters because it sets the expectations correctly before people buy in for the wrong reason.

The better pre-release angle is not to argue about whether that choice is good or bad. It is to tell the reader exactly what to expect and what to test at launch:

| Launch test | Why it matters |
| --- | --- |
| Camera rotation smoothness | Builders need comfort during long sessions |
| Precision of free placement | Gridless systems only matter if they feel stable |
| Resizing and recolor speed | Friction here can make build mode feel slower than it sounds |
| Paramaker loading and responsiveness | The character creator is one of the main selling points |

## First-Day Builder Checklist

The first live builder guide should verify whether the public promises feel as good in practice as they look in trailers and screenshots. That means checking camera comfort, drag precision, snapping behavior if present, recolor workflow, stacking freedom, and whether large lots still feel fast to edit. Build mode is where Paralives can either earn real loyalty or lose it quickly, so the page should stay focused on tested usability rather than vague praise.
`,
    faqs: [
      {
        question: 'Does Paralives have gridless building?',
        answer: 'Yes. The current Steam page says Paralives supports truly gridless construction.',
      },
      {
        question: 'What is the Paramaker in Paralives?',
        answer: 'The Paramaker is Paralives\' advanced character creator for adjusting height, body features, outfits, and personalities.',
      },
      {
        question: 'Does Paralives have a first-person mode?',
        answer: 'No. The official FAQ says Paralives does not currently have a first-person or third-person mode and instead uses a free 3D camera.',
      },
    ],
  },
  'mods-workshop-guide': {
    title: 'Paralives Mods and Steam Workshop Guide',
    description:
      'A trust-first Paralives mods guide covering the in-game modding interface, Steam Workshop support, script mod limits, and how to read the mod promise without overclaiming launch depth.',
    lastUpdated,
    timeToRead: '11 min',
    primaryKeyword: 'paralives mods',
    spoilerLevel: 'safe',
    verificationStatus: 'Official',
    heroImage: hero,
    heroImageAlt: 'Paralives key art for mods and Workshop guide',
    sections: [
      { title: 'Direct Mod Support Answer', id: 'direct-mod-support-answer' },
      { title: 'What Can Be Shared', id: 'what-can-be-shared' },
      { title: 'The Script Mod Limitation', id: 'the-script-mod-limitation' },
      { title: 'What To Verify After Launch', id: 'what-to-verify-after-launch' },
    ],
    sectionMedia: {
      'direct-mod-support-answer': {
        image: shot(1),
        alt: 'Paralives town screenshot for mod support answer',
        caption: 'Paralives already has one unusually clear official mod answer before launch.',
      },
      'what-can-be-shared': {
        image: shot(2),
        alt: 'Paralives house building screenshot for Workshop sharing',
        caption: 'The official promise covers creations, custom content, and mods rather than only prebuilt houses.',
      },
      'the-script-mod-limitation': {
        image: shot(3),
        alt: 'Paralives character creator screenshot for script mod limitation',
        caption: 'This is where precision matters most: Steam Workshop is confirmed, but script mods are not planned at the moment.',
      },
      'what-to-verify-after-launch': {
        image: shot(6),
        alt: 'Paralives outdoor screenshot for launch mod checklist',
        caption: 'The first real mod guide should test upload friction, discovery flow, and how stable the import process feels.',
      },
    },
    videos: [],
    content: `
## Direct Mod Support Answer

Paralives does have confirmed mod support in public messaging. The Steam page says players can experiment with an in-game modding interface to edit or add content, and both Steam and the official FAQ say players will be able to find community-made mods, houses, and Parafolks through Steam Workshop.

| Mod question | Current answer | Verification status |
| --- | --- | --- |
| Steam Workshop support | Yes | Official |
| Custom content sharing | Yes | Official |
| Houses and characters sharing | Yes | Official |
| In-game modding interface | Yes | Steam-listed |
| Script mods | Not planned at the moment | FAQ-listed |

## What Can Be Shared

This is where a useful guide needs to be more precise than a headline. The public promise is not only "mods exist." It is that players should be able to share creations, custom content, and mods, and browse community-made houses and Parafolks as well. That suggests the community loop is part of the product vision, not a side tool for advanced users only.

For users, that creates several real reasons to care before release. Builders want to know how easy it will be to distribute lots. Character creators want to know whether Parafolks can be shared cleanly. Modders want to know whether content workflows are friendly enough to matter. The right page structure should separate those needs rather than flatten everything into one word: mods.

## The Script Mod Limitation

The official FAQ adds one important limit: script mods are not planned at the moment. That line should stay visible because it changes expectations dramatically. It means Workshop and custom content support should not be automatically translated into fully open scripting behavior.

That is not bad news. It is useful scope control. A trusted page should say that Paralives is supporting content sharing and modding tools, while also noting that the current official FAQ does not promise script mods.

## What To Verify After Launch

The first live mod guide should test workflow, not just restate policy. Check whether Workshop uploads feel simple, whether tagging and browsing are usable, whether import conflicts are obvious, and how stable custom content remains after restarting the game. Pre-release users mostly need the official support answer. Post-launch users need friction reports.
`,
    faqs: [
      {
        question: 'Does Paralives support mods?',
        answer: 'Yes. Steam and the official FAQ both say Paralives supports sharing mods and community-made content through Steam Workshop.',
      },
      {
        question: 'Will Paralives have Steam Workshop?',
        answer: 'Yes. The current Steam page and official FAQ both mention Steam Workshop support.',
      },
      {
        question: 'Are script mods confirmed for Paralives?',
        answer: 'No. The official FAQ says script mods are not planned at the moment.',
      },
    ],
  },
  'pets-cars-town-tools-guide': {
    title: 'Paralives Pets, Cars, and Town Tools Guide',
    description:
      'A high-intent Paralives guide covering whether pets, cars, bikes, and town creation tools are in the launch build or planned for later during Early Access.',
    lastUpdated,
    timeToRead: '12 min',
    primaryKeyword: 'paralives pets',
    spoilerLevel: 'safe',
    verificationStatus: 'Steam-listed',
    heroImage: hero,
    heroImageAlt: 'Paralives key art for pets cars and town tools guide',
    sections: [
      { title: 'Direct Answer For Launch Buyers', id: 'direct-answer-for-launch-buyers' },
      { title: 'Pets And Transport Roadmap', id: 'pets-and-transport-roadmap' },
      { title: 'Town Creation And Life Systems', id: 'town-creation-and-life-systems' },
      { title: 'Should You Buy Now Or Wait', id: 'should-you-buy-now-or-wait' },
    ],
    sectionMedia: {
      'direct-answer-for-launch-buyers': {
        image: shot(6),
        alt: 'Paralives outdoor neighborhood screenshot for launch buyer answer',
        caption: 'This page exists because several of Paralives\' most searched features are roadmap items rather than launch-day promises.',
      },
      'pets-and-transport-roadmap': {
        image: shot(5),
        alt: 'Paralives daily life screenshot for pets and transport roadmap',
        caption: 'Pets, cars, and bikes are currently framed as planned during Early Access.',
      },
      'town-creation-and-life-systems': {
        image: shot(4),
        alt: 'Paralives family life screenshot for town tools and life systems',
        caption: 'Town editing, family-tree systems, and social-event tools are also roadmap items, not confirmed launch-complete systems.',
      },
      'should-you-buy-now-or-wait': {
        image: shot(1),
        alt: 'Paralives open-world town screenshot for buy-now-or-wait guidance',
        caption: 'A good guide should help different player types self-sort instead of pushing everyone to the same conclusion.',
      },
    },
    videos: [],
    content: `
## Direct Answer For Launch Buyers

If you are searching Paralives pets, cars, bikes, or town tools right now, the most honest answer is this: the current Steam Early Access section lists them as planned during the Early Access phase, not as guaranteed launch-day features. That does not mean they are fake. It means they belong to the growth path of the game rather than the confirmed first playable version.

${prereleaseNote}

## Pets And Transport Roadmap

Steam currently lists several later additions very clearly.

| Feature | Current public status |
| --- | --- |
| Dogs, cats, and horses | Planned during Early Access |
| Cars and bikes | Planned during Early Access |
| Boats and houseboats | Planned during Early Access |
| Pools and swimming | Planned during Early Access |

This table alone answers a large share of pre-release user intent. Many life-sim readers are really deciding whether to jump in at launch or wait until their favorite fantasy layer arrives. If pets or transport systems are your top priority, waiting may be the better call.

## Town Creation And Life Systems

The roadmap also points to broader simulation growth: tools to edit and create towns, story progression for NPCs, family trees, gardening, fishing, and calendar-driven social events such as parties and weddings. These are not tiny extras. They shape whether Paralives feels like a strong launch sandbox or a longer-term platform that becomes more complete over time.

That is why this page should not pretend every expected life-sim fantasy is present at launch. It should tell readers which fantasies are already supported by current build-mode and life-sim basics, and which are explicitly part of the roadmap.

## Should You Buy Now Or Wait

Buy at Early Access launch if your main interest is build mode, character creation, a new open-world life sim, and watching the game evolve with community feedback. Wait if your decision depends on pets, vehicles, weather, seasons, or town editing being available immediately. This is the kind of direct guidance that helps a pre-release page stay useful instead of sounding like a wishlist document.
`,
    faqs: [
      {
        question: 'Will Paralives have pets?',
        answer: 'Yes, pets are planned, but the current Steam page lists them as later Early Access additions rather than confirmed launch-day systems.',
      },
      {
        question: 'Are cars in Paralives?',
        answer: 'Cars and bikes are currently listed on Steam as planned during Early Access.',
      },
      {
        question: 'Can you create towns in Paralives?',
        answer: 'Town creation tools are listed in the current Steam roadmap as planned during Early Access.',
      },
      {
        question: 'Should I wait for pets and cars before buying Paralives?',
        answer: 'If those features are your main reason to play, waiting is the safer choice because they are currently roadmap items rather than confirmed launch-day features.',
      },
    ],
  },
};

export const paralivesGuideOrder = [
  'release-date-early-access-guide',
  'price-platforms-mac-guide',
  'early-access-roadmap-guide',
  'build-mode-paramaker-guide',
  'mods-workshop-guide',
  'pets-cars-town-tools-guide',
] as const;

export const paralivesGuides = paralivesGuideOrder.map((slug) => ({
  slug,
  title: paralivesGuideContent[slug].title.replace(/^Paralives:?\s*/, ''),
  description: paralivesGuideContent[slug].description,
}));

export const paralivesHubContent = {
  overview: `Paralives is an upcoming life simulation game currently scheduled for ${paralivesFacts.displayReleaseDate} in Early Access. The current official messaging is already unusually useful: the FAQ confirms a $39.99 USD Early Access price, PC and Mac support through Steam, no console plans right now, and no paid DLCs. The Steam page also clearly lists several major features that are planned later in Early Access rather than guaranteed on day one.

This hub is built around that split. It is not trying to fake a complete life-sim wiki before launch. It is designed to answer the real user questions that exist right now: release timing, price, Mac support, build mode depth, mod support, roadmap features like pets and cars, and when it makes more sense to wait.`,
  features: [
    'Official release date: May 25, 2026',
    'Early Access launch on Steam',
    'Official FAQ says PC and Mac support through Steam',
    'Official FAQ says the Early Access price is $39.99 USD',
    'Official FAQ says there are no current console plans',
    'Steam and FAQ both confirm Steam Workshop support',
    'Script mods are not planned at the moment',
    'Pets, cars, weather, seasons, and town tools are roadmap items, not automatic launch-day assumptions',
  ],
  guides: paralivesGuides,
  tips: [
    'Start with release date and price if you are deciding whether to buy or wait.',
    'Open the roadmap page before trusting any post that treats pets or cars as confirmed launch systems.',
    'Use the build mode page if your main reason to care is building freedom or Paramaker depth.',
    'Use the mods page if community sharing matters more to you than first-week life-sim content breadth.',
    'Treat performance, save stability, and content depth as launch-week verification topics rather than pre-release guarantees.',
  ],
  faq: [
    {
      question: 'When does Paralives release?',
      answer: 'Paralives is currently set to enter Early Access on May 25, 2026.',
    },
    {
      question: 'How much will Paralives cost?',
      answer: 'The official FAQ currently says Paralives will cost $39.99 USD during Early Access.',
    },
    {
      question: 'Is Paralives coming to Mac?',
      answer: 'Yes. The official FAQ currently says Paralives will be available on Steam for PC and Mac.',
    },
    {
      question: 'Does Paralives support mods?',
      answer: 'Yes. Steam and the official FAQ both point to Steam Workshop support for mods and community-made content.',
    },
    {
      question: 'Are pets and cars in the launch build?',
      answer: 'The current Steam roadmap lists them as planned during Early Access, so they should not be treated as confirmed launch-day systems.',
    },
  ],
};
