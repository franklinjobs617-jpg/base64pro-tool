export type LorainVerificationStatus =
  | 'Official'
  | 'Steam-listed'
  | 'Store-listed'
  | 'Needs hands-on verification';

export interface LorainMedia {
  image: string;
  alt: string;
  caption: string;
}

export interface LorainVideo {
  title: string;
  url: string;
  channel: string;
  duration: string;
}

export interface LorainGuide {
  title: string;
  description: string;
  lastUpdated: string;
  timeToRead: string;
  primaryKeyword: string;
  spoilerLevel: 'safe' | 'spoiler';
  verificationStatus: LorainVerificationStatus;
  sections: { title: string; id: string }[];
  content: string;
  faqs: { question: string; answer: string }[];
  heroImage: string;
  heroImageAlt: string;
  sectionMedia: Record<string, LorainMedia>;
  videos: LorainVideo[];
}

const lastUpdated = '2026-05-16';
const hero = '/games/lorain/hero.jpg';
const shot = (index: number) => `/games/lorain/screenshots/lorain-screenshot-${index}.jpg`;

export const lorainFacts = {
  releaseDate: '2026-05-13',
  displayReleaseDate: 'May 13, 2026',
  platforms: 'Windows PC via Steam and the Kagura Games store',
  developer: 'OmenOcta',
  publisher: 'Pink Pixel Games',
  steamId: '3415060',
  steamUrl: 'https://store.steampowered.com/app/3415060/Lorain/',
  kaguraUrl: 'https://www.kaguragames.com/product/lorain/',
  genres: 'Platformer and casual',
  languages: 'English, Japanese, Russian, and Simplified Chinese',
  storePitch:
    'A platformer where upgrades help Lorain turn the tables on enemies that captured her earlier.',
  contentHooks:
    'Multiple endings, over 20 unique scenes, and 9 enemy monster girls are described on the official product page.',
};

const releasedNote =
  'This guide set is based on the current Steam store page, the Kagura Games product page, and visible store assets. Because the public product messaging is narrow, route logic, exact scene unlock conditions, hidden path counts, and any ending-specific step order still need direct in-game verification before they should be presented as final.';

export const lorainGuideContent: Record<string, LorainGuide> = {
  'release-date-platforms-guide': {
    title: 'Lorain Release Date, Platforms, Price, and Store Status Guide',
    description:
      'A factual Lorain release guide covering the May 13, 2026 launch date, Windows PC availability, Steam and Kagura store status, supported languages, and what players should verify before buying.',
    lastUpdated,
    timeToRead: '12 min',
    primaryKeyword: 'lorain release date',
    spoilerLevel: 'safe',
    verificationStatus: 'Official',
    heroImage: hero,
    heroImageAlt: 'Lorain key art for release date and platform guide',
    sections: [
      { title: 'Direct Answer', id: 'direct-answer' },
      { title: 'Storefront Breakdown', id: 'storefront-breakdown' },
      { title: 'Language and Feature Checklist', id: 'language-and-feature-checklist' },
      { title: 'What Still Needs Verification', id: 'what-still-needs-verification' },
    ],
    sectionMedia: {
      'direct-answer': {
        image: shot(1),
        alt: 'Lorain gameplay screenshot used for release date answer',
        caption: 'Lorain is already released, so the goal is not hype but accurate buyer information.',
      },
      'storefront-breakdown': {
        image: shot(2),
        alt: 'Lorain platforming screenshot for storefront breakdown',
        caption: 'Steam and Kagura currently provide the clearest public facts about how the game is sold.',
      },
      'language-and-feature-checklist': {
        image: shot(3),
        alt: 'Lorain progression screenshot for language and feature checklist',
        caption: 'Language support and store features are concrete buyer questions that deserve direct answers.',
      },
      'what-still-needs-verification': {
        image: shot(4),
        alt: 'Lorain combat screenshot for verification planning',
        caption: 'The public pages do not answer every practical question, so the guide should say what remains untested.',
      },
    },
    videos: [],
    content: `
## Direct Answer

Lorain released on ${lorainFacts.displayReleaseDate}. The current Steam page lists the game under app ID ${lorainFacts.steamId}, and the Kagura Games product page also presents Lorain as a live release rather than a pre-order or upcoming title. The public developer and publisher credits currently point to ${lorainFacts.developer} and ${lorainFacts.publisher}. Platform availability is presently focused on Windows PC storefronts rather than consoles.

${releasedNote}

| Item | Current answer | Verification status |
| --- | --- | --- |
| Release date | May 13, 2026 | Steam-listed |
| Developer | OmenOcta | Steam-listed |
| Publisher | Pink Pixel Games | Store-listed |
| Platforms | Windows PC via Steam and Kagura Games store | Official |
| Price seen on Steam (US snapshot) | $8.79 at time of research | Steam-listed |

The most useful thing this page can do is separate product facts from assumptions. A lot of low-quality game pages blur those together. For Lorain that would be a mistake, because the official public messaging is fairly compact. It tells you what kind of game this is, where it is sold, and the broad content hooks, but it does not automatically justify made-up claims about route counts, exact collectibles, or systems the store page never names.

## Storefront Breakdown

Lorain currently has two important public storefront anchors. Steam is the cleanest source for release timing, platform support, language coverage, and store feature badges such as Steam Cloud and Family Sharing. The Kagura Games product page adds broader product framing and extra commercial context beyond the raw Steam metadata. Together, those two sources are enough to build a clean release-and-buying page.

| Storefront question | Best current answer | Verification status |
| --- | --- | --- |
| Can I buy Lorain on Steam? | Yes | Steam-listed |
| Is Lorain also sold outside Steam? | Yes, via the Kagura Games store | Store-listed |
| Does the current public data list Mac or Linux builds? | No | Steam-listed |
| Is this a console release? | No current official console listing was found | Needs hands-on verification |

This is also where a good guide should avoid overpromising. If you have not checked refund policies, DRM behavior, launcher behavior, or patch parity directly, do not state them as fixed truths. Buyers need precise answers, not confident guesses.

## Language and Feature Checklist

Steam currently lists Lorain with support for English, Japanese, Russian, and Simplified Chinese. It also lists Single-player, Steam Cloud, and Family Sharing. That matters because players searching for this game are often trying to answer practical questions before they think about endings or gallery completion.

| Feature area | Current answer | Verification status |
| --- | --- | --- |
| Languages | English, Japanese, Russian, Simplified Chinese | Steam-listed |
| Steam Cloud | Listed | Steam-listed |
| Family Sharing | Listed | Steam-listed |
| Steam Achievements | Not currently listed | Steam-listed |
| Controller support | Not clearly listed in the current store data | Needs hands-on verification |

The absence of listed Steam achievements is a good example of why accuracy matters. If the store does not currently list achievements, a guide should not fabricate an achievement roadmap just because that content format tends to attract clicks.

## What Still Needs Verification

The public product pages do not answer everything a serious player may want to know. Input feel, save slot behavior, exact gallery progression, ending requirements, and whether some routes are missable all need live testing. The correct editorial move is to surface those gaps clearly and then update the guide after direct capture, rather than filling the page with generic platformer filler.
`,
    faqs: [
      {
        question: 'When did Lorain release?',
        answer: 'Lorain released on May 13, 2026.',
      },
      {
        question: 'What platforms is Lorain on?',
        answer: 'Current public listings point to Windows PC via Steam and the Kagura Games store.',
      },
      {
        question: 'Does Lorain have Steam achievements?',
        answer: 'Steam does not currently list achievements for Lorain.',
      },
    ],
  },
  'beginner-platforming-guide': {
    title: 'Lorain Beginner Platforming Guide',
    description:
      'A practical Lorain beginner guide focused on first-session priorities, how to read its capture-and-upgrade loop, and what players should track before chasing endings or full scene completion.',
    lastUpdated,
    timeToRead: '14 min',
    primaryKeyword: 'lorain beginner guide',
    spoilerLevel: 'safe',
    verificationStatus: 'Store-listed',
    heroImage: hero,
    heroImageAlt: 'Lorain beginner platforming guide key art',
    sections: [
      { title: 'Beginner Answer Summary', id: 'beginner-answer-summary' },
      { title: 'How to Read Lorain Correctly', id: 'how-to-read-lorain-correctly' },
      { title: 'A Better Early-Run Tracking Method', id: 'a-better-early-run-tracking-method' },
      { title: 'Mistakes to Avoid in the First Sessions', id: 'mistakes-to-avoid-in-the-first-sessions' },
    ],
    sectionMedia: {
      'beginner-answer-summary': {
        image: shot(1),
        alt: 'Lorain opening screenshot for beginner guide',
        caption: 'The first job is to understand the loop: fail, learn, upgrade, and come back stronger.',
      },
      'how-to-read-lorain-correctly': {
        image: shot(5),
        alt: 'Lorain side-scrolling scene for reading the game loop',
        caption: 'Official messaging frames upgrades as the main answer to earlier setbacks.',
      },
      'a-better-early-run-tracking-method': {
        image: shot(3),
        alt: 'Lorain exploration screenshot for early-run tracking',
        caption: 'Simple note-taking is more useful than pretending you already know every route.',
      },
      'mistakes-to-avoid-in-the-first-sessions': {
        image: shot(4),
        alt: 'Lorain action screenshot for first-session mistakes',
        caption: 'Do not confuse repeated capture scenes with a dead end before you understand the upgrade loop.',
      },
    },
    videos: [],
    content: `
## Beginner Answer Summary

Lorain should not be approached like a standard one-pass platformer where every early failure means you played badly. The official product messaging says the point is that new upgrades eventually let Lorain turn the tables on enemies that captured her before. That immediately tells you how to think about the first sessions: treat setbacks as information, look for progression signals, and avoid assuming that the first solution you tried was supposed to work.

${releasedNote}

| First-run priority | Why it matters | Verification status |
| --- | --- | --- |
| Learn where the game expects retreat and return | The official pitch is built around later upgrades changing earlier outcomes | Store-listed |
| Separate progress blocks from execution mistakes | Not every failure means your route was wrong | Needs hands-on verification |
| Track unusual enemy encounters | Public store pages emphasize scene variety and enemy-specific content | Store-listed |
| Delay full completionism until systems are understood | Multiple endings and scene tracking become easier once the loop is clear | Store-listed |

## How to Read Lorain Correctly

The key beginner mistake is trying to brute-force a route before you understand the game's upgrade logic. Lorain is sold as a platformer where the player gradually gains the tools needed to reverse earlier power imbalances. That means the first hours are best treated as systems discovery rather than full optimization. You are learning which hazards are permanent skill checks, which are future revisit points, and which are tied to enemy-specific interactions the game wants you to see before you outgrow them.

That is also why a useful beginner guide should be careful with language. If you have not tested exact stage routing, do not promise the "best path." What you can say is that a good early run is one that keeps track of blocked routes, repeated capture points, and any branch indicators that look like they may matter later for endings or gallery progression.

## A Better Early-Run Tracking Method

For a game like Lorain, the best early tracking method is not a giant route spreadsheet. Use a short note format:

| Note type | What to write | Why it helps |
| --- | --- | --- |
| Blocked route | Where progress stopped | Helps you return after upgrades |
| Enemy encounter | Which enemy or scene type appeared | Useful for later gallery completion |
| Upgrade gate | What felt missing at the time | Helps distinguish lack of skill from lack of progression |
| Branch suspicion | Where the game may have diverged | Supports later ending testing |

This note system is lightweight enough that it does not kill pacing, but it gives you much better data than vague memory. It also keeps your first sessions useful even if you are not ready to write or follow a complete route map.

## Mistakes to Avoid in the First Sessions

The first mistake is reading every setback as failure rather than design. The second is assuming a guide claiming full ending logic is trustworthy just because the game is already released. Lorain's public pages clearly advertise multiple endings and a large scene set, which means route advice can become wrong very quickly if it is not backed by direct testing.

The third mistake is overcommitting to completion before you even know what is counted. Steam currently does not list achievements, so a normal completionist framework from other games does not map cleanly here. For now, the high-value beginner goal is simple: understand the progression loop, track where the game changes state, and save the full branch audit for a more informed second pass.
`,
    faqs: [
      {
        question: 'What is the best way to start Lorain?',
        answer:
          'Treat early failures as part of the progression loop, note blocked routes, and learn how upgrades change earlier encounters.',
      },
      {
        question: 'Should I try to 100% Lorain on the first run?',
        answer:
          'Probably not. It is better to understand the upgrade loop and route structure before chasing full scene or ending completion.',
      },
      {
        question: 'Does Lorain reward revisiting earlier areas?',
        answer:
          'The official upgrade-focused pitch strongly suggests that earlier situations change once Lorain becomes stronger, so revisit logic is likely important.',
      },
    ],
  },
  'upgrades-progression-guide': {
    title: 'Lorain Upgrades and Progression Guide',
    description:
      'A Lorain progression guide built around the official upgrade loop, showing how to think about power growth, revisit points, and route testing without inventing unverified upgrade names or hidden stats.',
    lastUpdated,
    timeToRead: '13 min',
    primaryKeyword: 'lorain upgrades guide',
    spoilerLevel: 'safe',
    verificationStatus: 'Store-listed',
    heroImage: hero,
    heroImageAlt: 'Lorain upgrades and progression guide key art',
    sections: [
      { title: 'Direct Progression Answer', id: 'direct-progression-answer' },
      { title: 'What the Official Upgrade Pitch Tells Us', id: 'what-the-official-upgrade-pitch-tells-us' },
      { title: 'How to Test Progression Cleanly', id: 'how-to-test-progression-cleanly' },
      { title: 'What Needs Live Route Verification', id: 'what-needs-live-route-verification' },
    ],
    sectionMedia: {
      'direct-progression-answer': {
        image: shot(2),
        alt: 'Lorain upgrade-focused screenshot for progression guide',
        caption: 'Lorain is publicly framed around upgrades that change the balance of power.',
      },
      'what-the-official-upgrade-pitch-tells-us': {
        image: shot(5),
        alt: 'Lorain progression scene for official upgrade analysis',
        caption: 'The store copy makes progression the center of the experience, not a side feature.',
      },
      'how-to-test-progression-cleanly': {
        image: shot(3),
        alt: 'Lorain traversal screenshot for testing progression',
        caption: 'The right progression guide explains how to verify power growth instead of making up stat sheets.',
      },
      'what-needs-live-route-verification': {
        image: shot(4),
        alt: 'Lorain enemy encounter screenshot for progression verification',
        caption: 'Exact upgrade order and scene-specific breakpoints still need direct gameplay capture.',
      },
    },
    videos: [],
    content: `
## Direct Progression Answer

The clearest public fact about Lorain's progression is this: upgrades are the core answer to earlier disadvantage. The official product description explicitly says that as you unlock new upgrades, Lorain can turn the tables on enemies that captured her previously. That matters because it changes how players should read both failure and progress. The game is not simply asking for clean platforming execution; it is asking you to recognize when the world becomes easier or more open because Lorain herself has changed.

${releasedNote}

| Progression question | Current answer | Verification status |
| --- | --- | --- |
| Are upgrades central to the game? | Yes | Store-listed |
| Do upgrades affect earlier enemy encounters? | Official wording strongly says yes | Store-listed |
| Is an exact upgrade tree publicly documented? | No | Needs hands-on verification |
| Should players revisit prior areas after upgrading? | Very likely, based on the official loop | Needs hands-on verification |

## What the Official Upgrade Pitch Tells Us

The official pitch is concise, but it is enough to anchor a useful progression guide. If upgrades are the point of reversal, then the game probably expects three kinds of player behavior: testing a route before you are fully ready, recognizing a power gap, and then revisiting that space after growth. That is a meaningful difference from a linear platformer where every obstacle is supposed to be solvable immediately.

This also means a high-quality guide should not invent names, numbers, or damage values unless they were captured directly. Public product pages are not a design document. The value here is in helping the player think about what upgrades do structurally: they can open movement paths, change how threatening certain enemies are, or alter which scene outcomes remain available.

## How to Test Progression Cleanly

Once you are playing, the cleanest way to verify Lorain's progression is to track the same route before and after an upgrade. Compare:

| Test point | Before upgrade | After upgrade |
| --- | --- | --- |
| Route reachability | Was the path blocked or impractical? | Did the route become realistic? |
| Enemy pressure | Did one enemy type force failure immediately? | Can Lorain now contest that encounter? |
| Scene outcomes | Did the same setup produce a different result? | Did new options or safer routes appear? |
| Time to recover | Was retry cost high? | Did the upgrade reduce repetition or risk? |

That table is the backbone of a real progression guide. It does not guess. It asks the right questions and turns later route writing into something auditable.

## What Needs Live Route Verification

The exact order of upgrades, the best sequence for route efficiency, and whether some scenes become missable after certain power thresholds all need live verification. The worst version of this page would be a fake "all upgrades list" assembled from assumption. The right version is more disciplined: explain the official progression premise now, then layer in tested route specifics after direct capture.
`,
    faqs: [
      {
        question: 'Are upgrades important in Lorain?',
        answer:
          'Yes. Upgrades are one of the central features named in the official product description.',
      },
      {
        question: 'Do upgrades let Lorain beat enemies that captured her earlier?',
        answer:
          'That is the core idea described on the official store page, though exact encounter-by-encounter effects still need direct testing.',
      },
      {
        question: 'Is there a verified best upgrade order yet?',
        answer:
          'Not from public store material alone. A best-order guide needs direct gameplay verification.',
      },
    ],
  },
  'endings-scenes-guide': {
    title: 'Lorain Endings and Scene Completion Guide',
    description:
      'A spoiler-marked Lorain endings guide that focuses on what the official product pages actually confirm, how to test route branches cleanly, and how to avoid publishing fake ending names or exact triggers before they are verified.',
    lastUpdated,
    timeToRead: '14 min',
    primaryKeyword: 'lorain endings guide',
    spoilerLevel: 'spoiler',
    verificationStatus: 'Store-listed',
    heroImage: hero,
    heroImageAlt: 'Lorain endings and scene completion guide key art',
    sections: [
      { title: 'What Is Confirmed About Endings', id: 'what-is-confirmed-about-endings' },
      { title: 'How to Track Branches Without Guessing', id: 'how-to-track-branches-without-guessing' },
      { title: 'Scene Completion and Ending Testing', id: 'scene-completion-and-ending-testing' },
      { title: 'What This Guide Will Not Fake', id: 'what-this-guide-will-not-fake' },
    ],
    sectionMedia: {
      'what-is-confirmed-about-endings': {
        image: shot(1),
        alt: 'Lorain screenshot used for endings confirmation',
        caption: 'The official product pages confirm multiple endings, but not a full public route chart.',
      },
      'how-to-track-branches-without-guessing': {
        image: shot(2),
        alt: 'Lorain route-testing screenshot for endings guide',
        caption: 'A real endings guide starts with branch logging, not invented ending names.',
      },
      'scene-completion-and-ending-testing': {
        image: shot(5),
        alt: 'Lorain progression screenshot for scene completion testing',
        caption: 'Endings and scene completion likely intersect, so they should be tracked together.',
      },
      'what-this-guide-will-not-fake': {
        image: shot(4),
        alt: 'Lorain action screenshot for verification warning',
        caption: 'Strong route pages are honest about what still needs direct verification.',
      },
    },
    videos: [],
    content: `
## What Is Confirmed About Endings

The official Lorain product pages explicitly mention multiple endings. That is enough to justify an endings guide, but not enough to justify fake ending labels, step-by-step route claims, or hidden-value theories unless those were observed directly in play. Right now the useful value of an endings page is to tell readers what is confirmed, how they should test branches, and how to avoid confusing scene variety with ending variety.

${releasedNote}

| Endings question | Current answer | Verification status |
| --- | --- | --- |
| Does Lorain have multiple endings? | Yes | Store-listed |
| Are the ending names publicly listed? | No | Needs hands-on verification |
| Is there a public route chart? | No | Needs hands-on verification |
| Can endings likely interact with scene completion? | Very possible, but not yet verified | Needs hands-on verification |

## How to Track Branches Without Guessing

If you are trying to map Lorain endings, the right first move is branch logging. Record where your run changed, not just where it ended. Public product pages are too thin to support exact route certainty on their own, so your evidence has to come from deliberate replay.

Use a branch log like this:

| Branch field | What to capture |
| --- | --- |
| Save point label | Where the route meaningfully split |
| Upgrade state | What Lorain had unlocked at that time |
| Encounter state | Which enemy or scene type was involved |
| Choice or action difference | What changed from the prior test |
| Ending result | Whether the final result changed |

That framework is boring compared to fake ending names, but it is much more useful. It produces a guide that can be trusted.

## Scene Completion and Ending Testing

Because the official product messaging also pushes scene variety, there is a strong chance that full scene completion and ending testing overlap in practice. That does not mean every scene equals a different ending, and it does not mean every ending requires 100% scene completion. It means route testers should track both at the same time. If one branch opens extra scenes but closes an ending path, that is exactly the kind of information players want from a real guide.

| Test goal | Why it matters |
| --- | --- |
| Preserve clean branch saves | Prevents replay waste |
| Compare the same area before and after upgrades | Helps isolate progression-related route changes |
| Log which scenes appeared on each branch | Supports gallery and ending research together |
| Separate route claims from route evidence | Keeps the guide credible |

## What This Guide Will Not Fake

This page will not invent final ending names, exact trigger combinations, or a "true ending" label until those can be verified directly. The same applies to any claim about mandatory scene counts or a perfect route order. Store pages can confirm that endings exist. They cannot confirm how to reach each one. That distinction is the difference between a useful endings guide and a misleading one.
`,
    faqs: [
      {
        question: 'Does Lorain have multiple endings?',
        answer: 'Yes. The official product page explicitly says Lorain has multiple endings.',
      },
      {
        question: 'Are all Lorain ending routes publicly confirmed?',
        answer:
          'No. Exact route conditions still need direct in-game verification before they should be treated as final.',
      },
      {
        question: 'Should scene completion be tracked while testing endings?',
        answer:
          'Yes. Because scene variety is also part of the official pitch, it makes sense to track both together while replaying branches.',
      },
    ],
  },
  'gallery-scene-unlock-guide': {
    title: 'Lorain Gallery and Scene Unlock Guide',
    description:
      'A Lorain gallery guide based on the official promise of over 20 unique scenes and 9 enemy monster girls, with a cleaner framework for tracking unlocks than the usual fake collectible checklist.',
    lastUpdated,
    timeToRead: '13 min',
    primaryKeyword: 'lorain gallery guide',
    spoilerLevel: 'spoiler',
    verificationStatus: 'Store-listed',
    heroImage: hero,
    heroImageAlt: 'Lorain gallery and scene unlock guide key art',
    sections: [
      { title: 'Direct Gallery Answer', id: 'direct-gallery-answer' },
      { title: 'What the Official Content Count Confirms', id: 'what-the-official-content-count-confirms' },
      { title: 'A Better Unlock Tracking Sheet', id: 'a-better-unlock-tracking-sheet' },
      { title: 'How to Avoid Bad Completion Data', id: 'how-to-avoid-bad-completion-data' },
    ],
    sectionMedia: {
      'direct-gallery-answer': {
        image: shot(3),
        alt: 'Lorain screenshot used for gallery answer',
        caption: 'Official marketing already frames Lorain around scene variety, so gallery tracking is a real player need.',
      },
      'what-the-official-content-count-confirms': {
        image: shot(1),
        alt: 'Lorain screenshot for official scene count discussion',
        caption: 'The public product page names over 20 unique scenes and 9 enemy monster girls, which is enough to build a real tracking page.',
      },
      'a-better-unlock-tracking-sheet': {
        image: shot(5),
        alt: 'Lorain route-testing screenshot for unlock tracking',
        caption: 'A gallery sheet should explain evidence, not just dump unchecked boxes onto the reader.',
      },
      'how-to-avoid-bad-completion-data': {
        image: shot(4),
        alt: 'Lorain screenshot for completion-data warning',
        caption: 'Completion data gets bad quickly when players mix route assumptions with verified unlocks.',
      },
    },
    videos: [],
    content: `
## Direct Gallery Answer

The official Lorain product page says the game includes over 20 unique scenes and 9 enemy monster girls. That is enough to confirm that gallery-style completion is a genuine part of player interest. It is not enough, by itself, to prove the exact unlock conditions for every scene. So the right gallery guide is a tracking framework first and a verified unlock list later.

${releasedNote}

| Gallery question | Current answer | Verification status |
| --- | --- | --- |
| Does Lorain advertise many scenes? | Yes, over 20 unique scenes | Store-listed |
| Are enemy-specific encounter categories part of the pitch? | Yes, 9 enemy monster girls are named | Store-listed |
| Is there a public full unlock list? | No | Needs hands-on verification |
| Should a gallery guide exist anyway? | Yes, because the official content pitch makes it relevant | Store-listed |

## What the Official Content Count Confirms

The count matters because it tells you completion is not a fringe concern. Players are not imagining a gallery metagame here; the official store pitch itself invites that kind of tracking. What it does not do is explain whether the scenes are tied to route branches, upgrades, enemy order, intentional failure states, or ending logic. That uncertainty is where many low-quality guides go wrong.

A good page should tell the reader that the scene count is real, the enemy-specific framing is real, and the unlock logic still requires structured testing. That already saves the user time by setting expectations correctly.

## A Better Unlock Tracking Sheet

If you are trying to complete Lorain's scene set cleanly, use a sheet like this:

| Field | Why it matters |
| --- | --- |
| Scene label you assign | Gives each verified scene a stable reference name |
| Enemy type | Helps separate the 9 enemy categories |
| Route location | Shows where the unlock happened |
| Upgrade state | Important if a scene only appears before or after power growth |
| Outcome state | Distinguishes capture, reversal, or branch variation |
| Verified? | Prevents rumor from becoming fact |

This approach is much stronger than publishing a fake "all scenes list" on day one. It also makes later updates easy because every new verified row has a clear place in the system.

## How to Avoid Bad Completion Data

Most bad completion data comes from three mistakes:

1. Treating every route rumor as a confirmed unlock path.
2. Failing to log upgrade state when a scene appears.
3. Mixing ending testing and gallery testing without noting which variable changed.

If this page is going to help users, it has to be more disciplined than that. The official count gives you a target. Direct play gives you evidence. A good guide keeps those separate until the evidence is strong enough.
`,
    faqs: [
      {
        question: 'How many scenes does Lorain officially advertise?',
        answer: 'The official product page says Lorain includes over 20 unique scenes.',
      },
      {
        question: 'How many enemy monster girls are officially mentioned?',
        answer: 'The product page currently mentions 9 enemy monster girls.',
      },
      {
        question: 'Is there a verified full gallery unlock list yet?',
        answer:
          'Not from public product pages alone. Exact unlock conditions need direct in-game verification.',
      },
    ],
  },
  'controls-save-language-guide': {
    title: 'Lorain Controls, Save, Language, and Steam Status Guide',
    description:
      'A practical Lorain support guide for players checking language support, save expectations, Steam Cloud, controller uncertainty, and whether achievements are currently listed.',
    lastUpdated,
    timeToRead: '11 min',
    primaryKeyword: 'lorain controls save language',
    spoilerLevel: 'safe',
    verificationStatus: 'Steam-listed',
    heroImage: hero,
    heroImageAlt: 'Lorain controls and language guide key art',
    sections: [
      { title: 'Direct Support Answer', id: 'direct-support-answer' },
      { title: 'Language and Store Feature Facts', id: 'language-and-store-feature-facts' },
      { title: 'Save and Replay Questions', id: 'save-and-replay-questions' },
      { title: 'What Players Should Check Themselves', id: 'what-players-should-check-themselves' },
    ],
    sectionMedia: {
      'direct-support-answer': {
        image: shot(2),
        alt: 'Lorain screenshot used for controls and support answer',
        caption: 'Support pages are often low effort, but they are exactly where precise facts matter most.',
      },
      'language-and-store-feature-facts': {
        image: shot(3),
        alt: 'Lorain screenshot for language and store feature facts',
        caption: 'Steam currently provides the strongest public support facts for Lorain.',
      },
      'save-and-replay-questions': {
        image: shot(1),
        alt: 'Lorain screenshot for save and replay discussion',
        caption: 'Store metadata can tell you part of the story, but not every replay convenience feature.',
      },
      'what-players-should-check-themselves': {
        image: shot(5),
        alt: 'Lorain screenshot for player self-checks',
        caption: 'When the store page is silent, the guide should say so plainly instead of pretending certainty.',
      },
    },
    videos: [],
    content: `
## Direct Support Answer

Steam currently lists Lorain as a Windows PC single-player game with Steam Cloud and Family Sharing. It also lists support for English, Japanese, Russian, and Simplified Chinese. At the same time, Steam does not currently show achievements in the public feature set, and the store metadata does not clearly answer every control or save-management question that some players will search for.

${releasedNote}

| Support question | Current answer | Verification status |
| --- | --- | --- |
| Languages | English, Japanese, Russian, Simplified Chinese | Steam-listed |
| Steam Cloud | Listed | Steam-listed |
| Family Sharing | Listed | Steam-listed |
| Steam achievements | Not currently listed | Steam-listed |
| Controller support | Not clearly listed | Needs hands-on verification |

## Language and Store Feature Facts

This is the kind of page where simple facts provide real value. A surprising amount of search traffic comes from players trying to answer basic compatibility questions before they buy or before they recommend a game to someone else. If a guide can answer those in one screen, it has already done something useful.

Steam's current language list is concrete enough to publish directly. Steam Cloud and Family Sharing are also concrete enough. What should not be inflated is anything the store page does not mention. If the page does not clearly state controller support, you should not imply it.

## Save and Replay Questions

Players interested in multiple endings and scene completion naturally care about saves and replay flow. Unfortunately, public store metadata usually stops short of answering the most important practical details: number of save slots, autosave behavior, chapter-style revisit options, and whether route recovery is forgiving. Those answers belong in a future tested support update, not in a speculative help page.

Still, this page can help by framing the right questions:

| Replay concern | Why it matters |
| --- | --- |
| Save slot count | Important for branch testing |
| Manual vs automatic save behavior | Affects ending and gallery experiments |
| Revisit convenience | Reduces replay friction |
| Controller feel | Matters for platforming comfort |

## What Players Should Check Themselves

Before committing to a long completion run, players should check the live settings menu, see whether the game exposes rebinding or controller prompts clearly, and verify how forgiving the save structure is. If you are writing a future support update, those are the first places to capture screenshots. For now, the support guide earns trust by giving the verified store facts and refusing to fake the rest.
`,
    faqs: [
      {
        question: 'What languages does Lorain support?',
        answer:
          'Steam currently lists English, Japanese, Russian, and Simplified Chinese.',
      },
      {
        question: 'Does Lorain have Steam Cloud?',
        answer: 'Yes. Steam currently lists Steam Cloud support.',
      },
      {
        question: 'Does Lorain have controller support?',
        answer:
          'That is not clearly listed in the current public store data, so it should be checked directly in the live build.',
      },
    ],
  },
};

export const lorainGuideOrder = [
  'release-date-platforms-guide',
  'beginner-platforming-guide',
  'upgrades-progression-guide',
  'endings-scenes-guide',
  'gallery-scene-unlock-guide',
  'controls-save-language-guide',
] as const;

export const lorainGuides = lorainGuideOrder.map((slug) => ({
  slug,
  title: lorainGuideContent[slug].title.replace(/^Lorain:?\s*/, ''),
  description: lorainGuideContent[slug].description,
}));

export const lorainHubContent = {
  overview: `Lorain is a released Windows PC platformer from ${lorainFacts.developer}, live on Steam and the Kagura Games store since ${lorainFacts.displayReleaseDate}. Public product messaging centers on capture-and-reversal progression, multiple endings, over 20 unique scenes, 9 enemy monster girls, and upgrades that let Lorain retake control of earlier situations.

This hub is designed to be more trustworthy than the usual thin completion page. It answers what is actually confirmed today, flags what still requires direct verification, and gives readers practical ways to track routes without pretending the full game has already been perfectly mapped.`,
  features: [
    'Released on May 13, 2026',
    'Windows PC via Steam and Kagura Games store',
    'Developer: OmenOcta',
    'Publisher: Pink Pixel Games',
    'Official product page mentions multiple endings',
    'Official product page mentions over 20 unique scenes and 9 enemy monster girls',
    'Steam currently lists Steam Cloud and Family Sharing, but not achievements',
  ],
  guides: lorainGuides,
  tips: [
    'Start with release facts and beginner guidance before chasing endings or gallery completion.',
    'Treat the upgrade loop as the center of the game, not just a side mechanic.',
    'Track branches and scene unlocks together instead of guessing from memory.',
    'Do not trust fake achievement pages when Steam does not currently list achievements.',
    'Use a second pass for verification-heavy completion routes after learning the progression flow.',
  ],
  faq: [
    {
      question: 'When did Lorain release?',
      answer: 'Lorain released on May 13, 2026.',
    },
    {
      question: 'Does Lorain have multiple endings?',
      answer: 'Yes. The official product page explicitly mentions multiple endings.',
    },
    {
      question: 'Does Lorain have Steam achievements?',
      answer: 'Steam does not currently list achievements for Lorain.',
    },
    {
      question: 'How many scenes does Lorain officially advertise?',
      answer: 'The official product page says Lorain includes over 20 unique scenes.',
    },
  ],
};
