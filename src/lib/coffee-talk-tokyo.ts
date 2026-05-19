export type CoffeeTalkTokyoVerificationStatus =
  | 'Official'
  | 'Steam-listed'
  | 'Trailer-observed'
  | 'Preview-reported'
  | 'Needs hands-on verification';

export interface CoffeeTalkTokyoMedia {
  image: string;
  alt: string;
  caption: string;
}

export interface CoffeeTalkTokyoVideo {
  title: string;
  url: string;
  channel: string;
  duration: string;
}

export interface CoffeeTalkTokyoGuide {
  title: string;
  description: string;
  lastUpdated: string;
  timeToRead: string;
  primaryKeyword: string;
  spoilerLevel: 'safe' | 'spoiler';
  verificationStatus: CoffeeTalkTokyoVerificationStatus;
  sections: { title: string; id: string }[];
  content: string;
  faqs: { question: string; answer: string }[];
  heroImage: string;
  heroImageAlt: string;
  sectionMedia: Record<string, CoffeeTalkTokyoMedia>;
  videos: CoffeeTalkTokyoVideo[];
}

const lastUpdated = '2026-05-16';
const hero = '/games/coffee-talk-tokyo/hero.webp';
const shot = (index: number) =>
  `/games/coffee-talk-tokyo/screenshots/coffee-talk-tokyo-screenshot-${index}.webp`;

const videos = {
  reveal: {
    title: 'Coffee Talk Tokyo - Reveal Trailer',
    url: 'https://www.youtube.com/watch?v=xf47HZjKzQY',
    channel: 'Toge Productions',
    duration: 'Official trailer',
  },
  nintendo: {
    title: 'Coffee Talk Tokyo at Indie World Showcase 8.27.2024',
    url: 'https://www.youtube.com/watch?v=ae4dp4ZKREo',
    channel: 'Nintendo of America',
    duration: 'Showcase trailer',
  },
  summerGameFest: {
    title: 'Coffee Talk Tokyo Official Trailer - SEA Games Showcase: Summer Game Fest Edition',
    url: 'https://www.youtube.com/watch?v=HV94Zy6-p7k',
    channel: 'SEA Games Showcase',
    duration: 'Official showcase trailer',
  },
};

export const coffeeTalkTokyoFacts = {
  releaseDate: '2026-05-21',
  displayReleaseDate: 'May 21, 2026',
  platforms: 'PC via Steam, PlayStation 5, Xbox Series X|S, and Nintendo Switch',
  developer: 'Chorus Worldwide Games, Toge Productions',
  publisher: 'Chorus Worldwide Games',
  steamId: '3161220',
  steamUrl: 'https://store.steampowered.com/app/3161220/Coffee_Talk_Tokyo/',
  officialUrl: 'https://chorusworldwide.com/coffee-talk-tokyo/',
  playstationUrl: 'https://store.playstation.com/en-us/product/JP0211-PPSA26148_00-0103363365947797',
  demoScope: 'The official demo includes the full Day 1 and the early part of Day 2.',
  deluxeItems: 'Seattle Prologue Chapter, 10 additional in-game City Pop tracks, and a digital artbook.',
};

const prereleaseNote =
  'This is a pre-release guide set. It uses Steam, Chorus Worldwide pages, PlayStation Store details, official trailers, and official Steam news posts. Complete drink lists, final branching outcomes, full achievement conditions, and full route maps need hands-on verification after release.';

export const coffeeTalkTokyoGuideContent: Record<string, CoffeeTalkTokyoGuide> = {
  'release-date-platforms-guide': {
    title: 'Coffee Talk Tokyo Release Date, Platforms, and Early Access Guide',
    description:
      'A factual Coffee Talk Tokyo release date guide covering May 21, 2026, confirmed platforms, Steam features, PS5 preorder details, Deluxe Edition bonuses, and what still needs launch verification.',
    lastUpdated,
    timeToRead: '13 min',
    primaryKeyword: 'coffee talk tokyo release date',
    spoilerLevel: 'safe',
    verificationStatus: 'Official',
    heroImage: hero,
    heroImageAlt: 'Coffee Talk Tokyo key art for release date and platform guide',
    sections: [
      { title: 'Direct Answer', id: 'direct-answer' },
      { title: 'Platform Breakdown', id: 'platform-breakdown' },
      { title: 'Preorder and Deluxe Status', id: 'preorder-and-deluxe-status' },
      { title: 'What Still Needs Verification', id: 'what-still-needs-verification' },
    ],
    sectionMedia: {
      'direct-answer': {
        image: shot(1),
        alt: 'Coffee Talk Tokyo cafe scene used for release date answer',
        caption: 'The current release target is May 21, 2026 across the announced platforms.',
      },
      'platform-breakdown': {
        image: shot(4),
        alt: 'Coffee Talk Tokyo customer ordering scene for platform breakdown',
        caption: 'Platform messaging should stay grounded in store pages and official announcements.',
      },
      'preorder-and-deluxe-status': {
        image: shot(5),
        alt: 'Coffee Talk Tokyo familiar cast screenshot for edition details',
        caption: 'Deluxe details are useful only when they are tied to a specific storefront and clearly labeled.',
      },
      'what-still-needs-verification': {
        image: shot(2),
        alt: 'Coffee Talk Tokyo concert and summer-night screenshot for verification planning',
        caption: 'Launch-week updates should confirm live storefront parity, localization, and save behavior.',
      },
    },
    videos: [videos.reveal, videos.nintendo, videos.summerGameFest],
    content: `
## Direct Answer

Coffee Talk Tokyo is currently set to release on ${coffeeTalkTokyoFacts.displayReleaseDate}. Steam lists the game under app ID ${coffeeTalkTokyoFacts.steamId}, while Chorus Worldwide's official page and the PlayStation Store both align around the same May 21, 2026 timing. The game is developed by ${coffeeTalkTokyoFacts.developer} and published by ${coffeeTalkTokyoFacts.publisher}. The safest user-facing summary is that Coffee Talk Tokyo is a story-rich late-night cafe game with conversation choices, drink making, Tomodachill social posts, and new stencil-based latte presentation.

Some readers are still landing on older March 5, 2026 posts or cached announcement coverage. The current official date to trust is May 21, 2026. That is the date reflected across the live official page and current storefront coverage, so this guide should treat May 21 as the canonical launch date unless those official sources change again.

${prereleaseNote}

| Item | Current answer | Verification status |
| --- | --- | --- |
| Release date | May 21, 2026 | Official |
| Steam store page | Live | Steam-listed |
| Platforms | PC, PS5, Xbox Series X|S, Nintendo Switch | Official |
| Steam features | Single-player, Steam Achievements, Save Anytime, Steam Cloud | Steam-listed |
| Full launch review score or performance verdict | Not available before release | Needs hands-on verification |

For search intent, the main job of this page is to stop readers from bouncing between half-updated posts. They usually want one clean answer: when does the game come out, where can I play it, and is any version offering early access or extra content. Give that answer first, then separate confirmed facts from store-specific extras.

## Platform Breakdown

The platform wording matters because cozy narrative games often receive inconsistent store copy. Steam is the cleanest source for PC facts. The PlayStation Store confirms a PS5 version and also shows a free demo and Deluxe Edition listing. Official reveal coverage also places the game on console beyond PC, so platform copy should not imply that Coffee Talk Tokyo is a Steam-only release.

That still does not mean every platform will have identical launch timing, pricing, language support, or preorder offers. A good guide should say that the broad platform set is confirmed, then advise players to check their exact storefront before preordering. This is especially important when a store has regional release-hour differences or different wording around preorder bonuses.

| Platform question | Best current answer | Verification status |
| --- | --- | --- |
| Is it on PC? | Yes, through Steam | Steam-listed |
| Is it on PS5? | Yes, there is a live PS5 store page and demo listing | Official |
| Is it on Xbox Series X|S? | Announced in official platform messaging | Official |
| Is it on Nintendo Switch? | Announced in official platform messaging | Official |
| Is there Mac support? | Not currently confirmed in official store messaging | Needs hands-on verification |

## Preorder and Deluxe Status

The PlayStation Store currently advertises a Deluxe Edition with three named extras: a Seattle Prologue Chapter, 10 additional in-game City Pop tracks, and a digital artbook. That is useful because it gives buyers a concrete reason to compare editions rather than guessing. The same PS5 listing also mentions a 72-hour early access preorder bonus, which is meaningful, but it should be labeled as a storefront-specific claim until every platform page is checked.

Preorder pages can easily become low-trust SEO bait because they repeat buzzwords without explaining what those extras actually mean. The better approach is to translate each item into a real player question. Do you want more story? The Seattle prologue matters. Do you mainly care about the core Tokyo campaign? Standard edition may be enough. Do you buy these games for atmosphere and collectible extras? Then the bonus music and artbook may matter more than early access.

## What Still Needs Verification

Before release, avoid making platform-parity promises. We do not yet have hands-on confirmation for launch-hour synchronization across regions, whether the demo progress carries over to the full game, exact controller behavior on every platform, or how much of the Deluxe content is accessible from the first boot. We also should not invent full language coverage unless each storefront exposes it clearly.

That makes this a better guide, not a weaker one. A pre-release page earns trust by telling readers exactly what the known facts are, what they should verify on their own storefront, and what this page will update during launch week.
`,
    faqs: [
      {
        question: 'When does Coffee Talk Tokyo release?',
        answer: 'Coffee Talk Tokyo is currently set for May 21, 2026.',
      },
      {
        question: 'What platforms is Coffee Talk Tokyo on?',
        answer:
          'Current official platform messaging points to PC via Steam, PlayStation 5, Xbox Series X|S, and Nintendo Switch.',
      },
      {
        question: 'Does Coffee Talk Tokyo have early access?',
        answer:
          'The PlayStation Store currently advertises a 72-hour early access preorder bonus on PS5. Check your own storefront before assuming every platform matches it.',
      },
      {
        question: 'What is in the Deluxe Edition?',
        answer:
          'The PS5 Deluxe listing currently names a Seattle Prologue Chapter, 10 additional in-game City Pop tracks, and a digital artbook.',
      },
      {
        question: 'Was Coffee Talk Tokyo delayed?',
        answer:
          'Some older coverage still shows March 5, 2026, but the current official launch date used by the live official page and storefront coverage is May 21, 2026.',
      },
    ],
  },
  'demo-length-save-transfer-guide': {
    title: 'Coffee Talk Tokyo Demo Length, Save Transfer, and What the Demo Confirms',
    description:
      'A practical Coffee Talk Tokyo demo guide covering how much of the story the demo includes, what systems are already visible, what not to infer from a short slice, and whether save transfer is confirmed.',
    lastUpdated,
    timeToRead: '12 min',
    primaryKeyword: 'coffee talk tokyo demo',
    spoilerLevel: 'safe',
    verificationStatus: 'Official',
    heroImage: hero,
    heroImageAlt: 'Coffee Talk Tokyo demo guide key art',
    sections: [
      { title: 'Direct Demo Answer', id: 'direct-demo-answer' },
      { title: 'What the Demo Actually Covers', id: 'what-the-demo-actually-covers' },
      { title: 'What You Can Learn Without Overreading It', id: 'what-you-can-learn-without-overreading-it' },
      { title: 'Save Transfer and Launch Checklist', id: 'save-transfer-and-launch-checklist' },
    ],
    sectionMedia: {
      'direct-demo-answer': {
        image: shot(4),
        alt: 'Coffee Talk Tokyo drink order screenshot for demo guide',
        caption: 'The demo is useful because it shows real systems, not just marketing text.',
      },
      'what-the-demo-actually-covers': {
        image: shot(1),
        alt: 'Coffee Talk Tokyo bar counter and customer scene from the demo',
        caption: 'Official messaging says the demo covers the whole Day 1 and the early part of Day 2.',
      },
      'what-you-can-learn-without-overreading-it': {
        image: shot(3),
        alt: 'Coffee Talk Tokyo stencil and latte art screenshot',
        caption: 'The demo confirms tone, interface rhythm, and system changes such as cold drinks and expanded Tomodachill features.',
      },
      'save-transfer-and-launch-checklist': {
        image: shot(2),
        alt: 'Coffee Talk Tokyo nighttime scene for save transfer planning',
        caption: 'Do not assume demo progress carries over unless the live build or official notes confirm it.',
      },
    },
    videos: [videos.summerGameFest, videos.reveal, videos.nintendo],
    content: `
## Direct Demo Answer

The official Coffee Talk Tokyo demo includes the complete Day 1 and a first look at the early part of Day 2. Official Steam news also says the demo showcases expanded Tomodachill functionality with clickable hashtags, new drink options including cold beverages, and refinements across dialogue and presentation. That is enough material to judge whether the Tokyo setting, writing tone, and updated systems fit what you want from the next Coffee Talk.

${prereleaseNote}

| Demo question | Current answer | Verification status |
| --- | --- | --- |
| How much story is in the demo? | Full Day 1 and the early part of Day 2 | Official |
| Does the demo show Tomodachill changes? | Yes, expanded functionality with clickable hashtags is officially mentioned | Official |
| Are cold drinks visible in the demo? | Yes, official demo messaging says new drink options include cold beverages | Official |
| Does progress carry to the full game? | Not clearly confirmed yet | Needs hands-on verification |
| Does the demo reveal full character arcs? | No, it is an early slice | Needs hands-on verification |

## What the Demo Actually Covers

The useful mistake to avoid here is treating demo coverage as a complete content map. Early slices in Coffee Talk games are designed to establish rhythm, tone, and a few central relationships. They are not proof of total route count, all possible customers, or how the game's emotional peaks will land later. The demo is still valuable, but for the right reasons.

You can use it to answer practical buyer questions. Does the new Tokyo summer setting feel distinct from Seattle? Does the interface read cleanly on your display? Does the balance between making drinks and reading dialogue still feel relaxing rather than slow? Do Tomodachill and stencils feel like meaningful additions or just surface-level features? Those are first-session questions the demo really can answer.

It also gives content creators a better way to structure early articles. A solid pre-release page should say exactly where the demo stops, which systems are confirmed inside that slice, and what later-game assumptions are still premature. That helps both readers and search engines understand the scope of the page.

## What You Can Learn Without Overreading It

The demo confirms that Coffee Talk Tokyo is not simply reskinning the prior games. The new setting changes the emotional texture, and the confirmed additions are not random bullet points. Clickable Tomodachill hashtags make social context easier to parse. Cold beverages suggest a broader recipe surface than the earlier entries. Stencil-based decoration changes how you think about presentation, especially if certain customer reactions care about the final look of the drink and not just the base recipe.

What the demo does not confirm is equally important. It does not prove the total length of the full game. It does not confirm whether every major customer arc branches in multiple large ways. It does not validate a final drink encyclopedia, all achievements, or the long-term narrative weight of every social media clue. Pre-release pages that jump from one demo slice to claims like "all endings" or "full recipes" lose credibility fast.

## Save Transfer and Launch Checklist

The most common practical question after demo availability is whether progress transfers into the retail game. As of now, that should be labeled unconfirmed unless a store page, in-game prompt, or launch-day note says otherwise. The right way to write about it is simple: the demo is worth playing for tone, system familiarity, and early character setup; any save carryover claim needs release-day proof.

Here is the user-first launch checklist:

| Launch-week check | Why it matters | Verification status |
| --- | --- | --- |
| Demo save carryover | Avoid replay confusion | Needs hands-on verification |
| Full language list | Helps players decide platform | Needs hands-on verification |
| Controller feel and readability | Important for long text sessions | Needs hands-on verification |
| Whether stencil prompts are optional or graded | Impacts low-stress play | Needs hands-on verification |
| Day 1 patch notes | May change pacing, bugs, or UI | Needs hands-on verification |

That gives the reader something concrete to do. It also keeps the page honest: use the demo to understand the game's direction, not to pretend the full release has already been documented.
`,
    faqs: [
      {
        question: 'How long is the Coffee Talk Tokyo demo?',
        answer:
          'Official messaging says the demo includes the complete Day 1 and the early part of Day 2, so it is a meaningful early slice rather than a one-scene teaser.',
      },
      {
        question: 'Does the demo include new features?',
        answer:
          'Yes. Official demo notes mention expanded Tomodachill functionality, clickable hashtags, and new drink options including cold beverages.',
      },
      {
        question: 'Does the Coffee Talk Tokyo demo save transfer to the full game?',
        answer:
          'That has not been clearly confirmed yet, so it should be treated as unverified until launch.',
      },
    ],
  },
  'beginner-night-shift-guide': {
    title: 'Coffee Talk Tokyo Beginner Night Shift Guide',
    description:
      'A spoiler-light Coffee Talk Tokyo beginner guide for first-time players who want to enjoy the Tokyo cafe setting, track customer hints, use Tomodachill well, and avoid turning a cozy narrative game into checklist homework.',
    lastUpdated,
    timeToRead: '14 min',
    primaryKeyword: 'coffee talk tokyo beginner guide',
    spoilerLevel: 'safe',
    verificationStatus: 'Official',
    heroImage: hero,
    heroImageAlt: 'Coffee Talk Tokyo beginner guide key art',
    sections: [
      { title: 'Beginner Answer Summary', id: 'beginner-answer-summary' },
      { title: 'How to Read a Coffee Talk Night Properly', id: 'how-to-read-a-coffee-talk-night-properly' },
      { title: 'A Better First-Run Note-Taking System', id: 'a-better-first-run-note-taking-system' },
      { title: 'What to Avoid on Your First Playthrough', id: 'what-to-avoid-on-your-first-playthrough' },
    ],
    sectionMedia: {
      'beginner-answer-summary': {
        image: shot(1),
        alt: 'Coffee Talk Tokyo barista scene for beginner answer summary',
        caption: 'The first goal is not perfection. It is understanding the rhythm of the cafe and its guests.',
      },
      'how-to-read-a-coffee-talk-night-properly': {
        image: shot(5),
        alt: 'Coffee Talk Tokyo character scene for first-run reading tips',
        caption: 'Customer dialogue, body language, and social posts matter as much as the order ticket.',
      },
      'a-better-first-run-note-taking-system': {
        image: shot(4),
        alt: 'Coffee Talk Tokyo order interface for note-taking advice',
        caption: 'Good notes for this series are short and practical, not exhaustive lore dumps.',
      },
      'what-to-avoid-on-your-first-playthrough': {
        image: shot(2),
        alt: 'Coffee Talk Tokyo nighttime setting for first-playthrough advice',
        caption: 'Do not flatten a conversation game into a recipe spreadsheet too early.',
      },
    },
    videos: [videos.reveal, videos.summerGameFest, videos.nintendo],
    content: `
## Beginner Answer Summary

Coffee Talk Tokyo should be played like a night shift with emotional pattern recognition, not like a speedrun puzzle. If you are new to the series, the most useful beginner advice is to slow down, read every line carefully, and notice how customer requests, side remarks, and Tomodachill posts reinforce one another. The game is built around hospitality and observation. You are helping people through a difficult night, not simply combining ingredients in the right order.

${prereleaseNote}

| First-run priority | Why it matters | Verification status |
| --- | --- | --- |
| Read the request and the subtext | Customers often reveal more than the exact drink name | Official |
| Check Tomodachill between conversations | Social posts may add context that the spoken line does not carry alone | Official |
| Notice hot versus cold drink framing | Official demo messaging confirms cold drink options | Official |
| Keep simple notes, not massive spreadsheets | You want memory support without killing the vibe | Preview-reported |
| Avoid spoiler guides on night one | Character outcomes and later routes still need hands-on capture | Needs hands-on verification |

## How to Read a Coffee Talk Night Properly

The best Coffee Talk sessions work when you pay attention to mood before optimization. Listen to what the customer is actually asking for, then listen again for what they are avoiding saying directly. A game like this lives in emotional gaps. Someone may present a drink order as a practical preference, but the conversation around it reveals stress, nostalgia, fear, or uncertainty. The Tokyo setting seems especially tuned for this because the official descriptions lean on a summer atmosphere where people are escaping the heat, carrying private burdens, and looking for a quiet place to think.

For beginners, that means a good routine is: read the spoken request, glance at Tomodachill, build the drink carefully, then watch the response without rushing the next line. Even if you know the prior Coffee Talk formula, the point here is not to brute-force memory from the earlier games. New tools such as clickable hashtags and stencil presentation mean the game wants you to engage with context more actively.

## A Better First-Run Note-Taking System

Players often overcomplicate note-taking in narrative comfort games. A giant route spreadsheet is not the best starting point. Instead, use a three-column note system:

| Note type | What to write | Example of a useful note |
| --- | --- | --- |
| Customer cue | A short emotional or situational hint | "Kenji talks like retirement is a crisis, not a vacation." |
| Drink clue | Temperature, flavor, or presentation detail | "Cold request mattered more than exact tone." |
| Follow-up marker | Something to revisit if a customer returns | "Check hashtag after next scene." |

That style of note helps without stripping away the game's warmth. It also keeps your first run spoiler-light. You are tracking what the game is teaching you, not trying to reverse engineer every later consequence from minute one.

## What to Avoid on Your First Playthrough

Do not begin by hunting a fake "perfect route" article. Coffee Talk Tokyo is still pre-release, so many exact route guides would have to invent information. More importantly, even a future accurate guide should probably not be your first stop. These games are memorable because they feel like conversations you shared, not boxes you checked.

Avoid three specific traps:

1. Do not treat every drink scene as a pass-fail quiz.
2. Do not skip Tomodachill because it looks like optional flavor text.
3. Do not assume earlier-series habits cover every new Tokyo system.

If you want the highest-value first run, aim for understanding rather than completion. Learn the rhythm, recognize the new systems, and let your second pass become the cleaner route if the full release ends up rewarding that.
`,
    faqs: [
      {
        question: 'Is Coffee Talk Tokyo a hard game for beginners?',
        answer:
          'No. The core challenge is observation and empathy, not fast execution. The best beginner habit is to read slowly and use short notes.',
      },
      {
        question: 'Should I use a guide on my first Coffee Talk Tokyo run?',
        answer:
          'Use factual release or demo guides, not full route spoilers. A first run works better when you discover the tone and customer dynamics naturally.',
      },
      {
        question: 'Do I need to play the previous Coffee Talk games first?',
        answer:
          'The Tokyo setting is built to stand on its own, though returning players will understand the broader universe more quickly.',
      },
    ],
  },
  'drink-recipes-guide': {
    title: 'Coffee Talk Tokyo Drink Recipes Guide: What Is Safe to Publish Before Launch',
    description:
      'A pre-release Coffee Talk Tokyo recipe guide explaining what is confirmed about hot and cold drinks, how to track recipes responsibly, and why a fake full drink database helps neither players nor search visibility.',
    lastUpdated,
    timeToRead: '15 min',
    primaryKeyword: 'coffee talk tokyo drink recipes',
    spoilerLevel: 'safe',
    verificationStatus: 'Needs hands-on verification',
    heroImage: hero,
    heroImageAlt: 'Coffee Talk Tokyo drink recipes guide key art',
    sections: [
      { title: 'Recipe Answer First', id: 'recipe-answer-first' },
      { title: 'What the Official Material Confirms', id: 'what-the-official-material-confirms' },
      { title: 'How to Build a Reliable Day-One Recipe Notebook', id: 'how-to-build-a-reliable-day-one-recipe-notebook' },
      { title: 'What Not to Fake Before Release', id: 'what-not-to-fake-before-release' },
    ],
    sectionMedia: {
      'recipe-answer-first': {
        image: shot(4),
        alt: 'Coffee Talk Tokyo order board and drink scene for recipe guide',
        caption: 'Recipe guides are high-demand pages, so they need stronger truth standards than generic blog copy.',
      },
      'what-the-official-material-confirms': {
        image: shot(3),
        alt: 'Coffee Talk Tokyo stencil close-up for confirmed drink system details',
        caption: 'Official demo messaging confirms cold drinks and updated presentation options, not a complete launch-day recipe list.',
      },
      'how-to-build-a-reliable-day-one-recipe-notebook': {
        image: shot(1),
        alt: 'Coffee Talk Tokyo cafe counter screenshot for recipe note-taking workflow',
        caption: 'The best early recipe guide is structured capture: request, result, reaction, and retry notes.',
      },
      'what-not-to-fake-before-release': {
        image: shot(5),
        alt: 'Coffee Talk Tokyo customer lineup used for recipe publishing policy',
        caption: 'A large recipe table is useful only when every row reflects a tested in-game result.',
      },
    },
    videos: [videos.reveal, videos.summerGameFest, videos.nintendo],
    content: `
## Recipe Answer First

There is not yet a fully verified public Coffee Talk Tokyo recipe database that should be presented as complete. What is confirmed today is narrower and still useful: official demo messaging says the game includes new drink options including cold beverages, while official pages frame drink making, presentation, and customer context as core systems. That means the honest version of a recipe guide is not "here are all drinks." It is "here is what the game has confirmed, here is how to capture recipes properly on day one, and here is how not to publish guesswork as fact."

${prereleaseNote}

| Recipe topic | Current answer | Verification status |
| --- | --- | --- |
| Are there new drinks? | Yes, official demo messaging mentions new options including cold beverages | Official |
| Are stencils part of drink presentation? | Yes, official pages describe sprinkle stencils as a new feature | Official |
| Is a complete drink list confirmed? | No | Needs hands-on verification |
| Can earlier Coffee Talk recipes be copied directly? | Some logic may feel familiar, but Tokyo adds new systems and should be retested | Needs hands-on verification |
| Should a pre-release page promise every secret drink? | No | Needs hands-on verification |

## What the Official Material Confirms

The official material gives you a solid structure without giving you every final answer. Coffee Talk Tokyo still revolves around brewing the right order for customers in a late-night cafe, but it now explicitly adds cold beverages and stencil-driven presentation. That matters because it expands the meaning of a correct drink. In earlier cozy conversation games, readers often focused only on the ingredient combination. Tokyo's published materials suggest that presentation, timing, and contextual reading may carry more weight now.

For a user-first recipe page, that means your first table should separate system facts from recipe claims. Example: yes, cold beverages are in; yes, stencil customization is in; no, a full complete ingredient matrix is not yet verified. That helps players understand the current state immediately instead of scrolling through filler paragraphs.

## How to Build a Reliable Day-One Recipe Notebook

Once the full game is live, this page should become a tested recipe notebook, not a generic article. The best structure is simple:

| Field | What to capture | Why it matters |
| --- | --- | --- |
| Customer | Who asked for the drink | Helps track repeating story contexts |
| Stated request | Exact wording | Some requests are direct, others indirect |
| Build used | Ingredient order, hot or cold choice, presentation note | Lets you reproduce the result |
| Reaction | Accepted, neutral, or rejected | The only useful correctness signal |
| Follow-up | Whether it affects a later conversation | Separates one-off success from story relevance |

This structure is more valuable than a bloated launch-night list because it tells the reader how the answer was verified. If you later publish a complete drink index, you can still keep that testing logic visible. That is good for readers and also good for GEO because it makes the guide extractable and trustworthy.

## What Not to Fake Before Release

Do not publish a fake "all drinks and secret recipes" page before launch. It may look like SEO coverage, but it weakens the whole cluster because readers click in expecting tested answers and immediately notice recycled guesses. Cozy narrative games depend on trust. If a site lies about something small, players assume it will lie about route advice too.

The correct pre-release posture is:

1. Confirm the systems that official sources name.
2. Explain how recipe verification will be done after release.
3. Offer useful demo-based advice instead of empty certainty.

That still gives the reader value. Someone searching today can learn whether the recipe layer has genuinely expanded, whether cold drinks are real, and how to approach the game without being misled by placeholder "guides" that are not guides at all.
`,
    faqs: [
      {
        question: 'Does Coffee Talk Tokyo have cold drinks?',
        answer:
          'Yes. Official demo messaging says the game includes new drink options including cold beverages.',
      },
      {
        question: 'Is there a full Coffee Talk Tokyo recipe list yet?',
        answer:
          'Not a verified one. A complete recipe database should wait until the full release can be tested directly.',
      },
      {
        question: 'Will old Coffee Talk recipes still work?',
        answer:
          'Some drink logic may feel familiar, but Coffee Talk Tokyo adds new systems and should be retested instead of assumed.',
      },
    ],
  },
  'characters-story-guide': {
    title: 'Coffee Talk Tokyo Characters and Story Guide',
    description:
      'A spoiler-light Coffee Talk Tokyo character guide covering Kenji, Vin, Ayame, the Tokyo setting, major story themes visible before launch, and how to talk about the cast without pretending the full route map is already solved.',
    lastUpdated,
    timeToRead: '14 min',
    primaryKeyword: 'coffee talk tokyo characters',
    spoilerLevel: 'safe',
    verificationStatus: 'Official',
    heroImage: hero,
    heroImageAlt: 'Coffee Talk Tokyo characters guide key art',
    sections: [
      { title: 'Direct Cast Answer', id: 'direct-cast-answer' },
      { title: 'The Three Publicly Named Characters', id: 'the-three-publicly-named-characters' },
      { title: 'What Tokyo Changes in the Story Tone', id: 'what-tokyo-changes-in-the-story-tone' },
      { title: 'How to Keep a Character Guide Honest', id: 'how-to-keep-a-character-guide-honest' },
    ],
    sectionMedia: {
      'direct-cast-answer': {
        image: shot(5),
        alt: 'Coffee Talk Tokyo cast image for direct character answer',
        caption: 'Pre-release character pages should identify the visible cast and their themes without spoiling unverified later outcomes.',
      },
      'the-three-publicly-named-characters': {
        image: shot(2),
        alt: 'Coffee Talk Tokyo emotional scene used for named character guide',
        caption: 'Kenji, Vin, and Ayame already suggest very different social pressures and emotional registers.',
      },
      'what-tokyo-changes-in-the-story-tone': {
        image: shot(1),
        alt: 'Coffee Talk Tokyo cafe environment for Tokyo setting analysis',
        caption: 'Tokyo is not just a backdrop; it changes the social energy around work, grief, identity, and heat.',
      },
      'how-to-keep-a-character-guide-honest': {
        image: shot(4),
        alt: 'Coffee Talk Tokyo order scene for story guide publishing standards',
        caption: 'A strong character page explains what is known today and leaves room for route-specific updates after release.',
      },
    },
    videos: [videos.reveal, videos.nintendo, videos.summerGameFest],
    content: `
## Direct Cast Answer

The publicly named Coffee Talk Tokyo characters currently include Kenji, Vin, and Ayame. Official descriptions are already strong enough to tell readers why these characters matter. Kenji is a traditional kappa salaryman trying to find meaning after retirement. Vin is the barista's assistant, carrying a fractured past and the consequences of a prior disaster. Ayame is a cheerful but recently deceased It girl trying to understand her new afterlife. That is already more specific than a generic "new cast in Tokyo" summary, and it gives the story guide a real foundation.

${prereleaseNote}

| Character topic | Current answer | Verification status |
| --- | --- | --- |
| Kenji | Retired kappa salaryman searching for purpose | Official |
| Vin | Assistant barista dealing with a fractured past | Official |
| Ayame | Recently deceased It girl adapting to afterlife | Official |
| Final route count for each character | Not confirmed | Needs hands-on verification |
| Best ending or relationship route | Not confirmed | Needs hands-on verification |

## The Three Publicly Named Characters

Kenji immediately signals that Coffee Talk Tokyo is interested in work, identity, and life after structure. Retirement is often described as freedom, but Kenji's official description frames it more as a search for meaning. That alone gives players a reason to watch how the game handles aging, labor, and social usefulness in a city that rarely slows down.

Vin appears to be the connective tissue of the cafe. Official messaging says they were created to provide a more constant presence in the story, and that matches the role of an assistant barista who sees customers come and go while carrying private damage of their own. That makes Vin especially important for a spoiler-light guide because they are likely to anchor the player's ongoing emotional orientation inside the cafe.

Ayame brings a different energy. Her description places her at the edge between glamour and loss, life and afterlife, visibility and confusion. She sounds playful on the surface, but the premise carries obvious emotional weight. For readers, that matters because Coffee Talk is strongest when it uses fantasy identities to talk about recognizably human changes.

## What Tokyo Changes in the Story Tone

Official copy repeatedly emphasizes Tokyo as a place where old and new coexist. That is not empty setting flavor. It tells you how to read the stories. Retirement, disaster fallout, social image, and afterlife identity all hit differently in a city described through paper, steel, heat, and constant movement. Tokyo also introduces a summer pressure that fits Coffee Talk especially well: customers come into the cafe not only for comfort but for relief.

That makes a better story guide than a list of names and species. A useful character page should help the reader anticipate the kind of emotional conflicts the game is likely to explore, while still preserving the actual scene-by-scene reveals. It should explain why these characters feel distinct, not just who they are.

## How to Keep a Character Guide Honest

Do not pretend a pre-release character page already knows every branch, route, and ending. The honest version of this guide should do four things well:

| Guide job | Why it helps readers |
| --- | --- |
| Identify confirmed characters and their public descriptions | Gives fast, searchable answers |
| Explain the major visible themes around them | Adds real interpretation value |
| Mark later outcomes as unverified | Prevents fake spoiler claims |
| Update after launch with route-specific pages if demand exists | Keeps the cluster scalable |

That is the correct standard for Coffee Talk Tokyo before release. It keeps the page useful today and leaves a clean path for future updates once the full story can actually be played and documented.
`,
    faqs: [
      {
        question: 'Who are the main confirmed Coffee Talk Tokyo characters?',
        answer:
          'The publicly named characters currently include Kenji, Vin, and Ayame, each with official descriptions on the Chorus Worldwide page.',
      },
      {
        question: 'Is Coffee Talk Tokyo connected to earlier Coffee Talk games?',
        answer:
          'It shares the same wider universe and emotional identity, but the Tokyo setting and its cast are designed to stand on their own.',
      },
      {
        question: 'Are all character endings known yet?',
        answer:
          'No. Full route outcomes and ending structures need hands-on verification after release.',
      },
    ],
  },
  'tomodachill-social-guide': {
    title: 'Coffee Talk Tokyo Tomodachill Social Guide',
    description:
      'A focused Coffee Talk Tokyo Tomodachill guide covering what the in-game social network does, why clickable hashtags matter, how it supports character reading, and how players should use it without getting spoiled.',
    lastUpdated,
    timeToRead: '13 min',
    primaryKeyword: 'coffee talk tokyo tomodachill',
    spoilerLevel: 'safe',
    verificationStatus: 'Official',
    heroImage: hero,
    heroImageAlt: 'Coffee Talk Tokyo Tomodachill guide key art',
    sections: [
      { title: 'Direct Tomodachill Answer', id: 'direct-tomodachill-answer' },
      { title: 'Why Tomodachill Matters More in Tokyo', id: 'why-tomodachill-matters-more-in-tokyo' },
      { title: 'Clickable Hashtags and Reading Customer Context', id: 'clickable-hashtags-and-reading-customer-context' },
      { title: 'Best Practice for First-Run Use', id: 'best-practice-for-first-run-use' },
    ],
    sectionMedia: {
      'direct-tomodachill-answer': {
        image: shot(4),
        alt: 'Coffee Talk Tokyo interface screenshot for Tomodachill guide',
        caption: 'Tomodachill is not background flavor. It is a reading tool for understanding customers better.',
      },
      'why-tomodachill-matters-more-in-tokyo': {
        image: shot(2),
        alt: 'Coffee Talk Tokyo social atmosphere scene for Tomodachill context',
        caption: "Tokyo's public-facing identities and private anxieties make the social layer more narratively useful.",
      },
      'clickable-hashtags-and-reading-customer-context': {
        image: shot(5),
        alt: 'Coffee Talk Tokyo character screenshot for hashtag reading advice',
        caption: 'Clickable hashtags can turn vague emotional context into something more legible before a conversation escalates.',
      },
      'best-practice-for-first-run-use': {
        image: shot(1),
        alt: 'Coffee Talk Tokyo cafe interior for first-run Tomodachill workflow',
        caption: 'The best way to use Tomodachill is to check it deliberately between scenes, not doomscroll it constantly.',
      },
    },
    videos: [videos.summerGameFest, videos.reveal, videos.nintendo],
    content: `
## Direct Tomodachill Answer

Tomodachill is Coffee Talk Tokyo's in-game social network, and official messaging says it helps you understand customers better and connect them with the truth or relationships they need. Official demo notes also mention expanded Tomodachill functionality with clickable hashtags. That is enough to treat Tomodachill as a major system, not just side flavor.

${prereleaseNote}

| Tomodachill question | Current answer | Verification status |
| --- | --- | --- |
| Is Tomodachill a core system? | Yes, official pages frame it as a key feature | Official |
| Does the demo expand it? | Yes, official demo notes mention expanded functionality and clickable hashtags | Official |
| Does it affect customer understanding? | Yes, official copy says it helps you learn more about their stories | Official |
| Are all late-game consequences known? | No | Needs hands-on verification |

## Why Tomodachill Matters More in Tokyo

Coffee Talk has always been about what people say and what they cannot quite say. Tomodachill gives Tokyo a stronger public-private contrast. A customer may walk into the cafe with a polished social presence, then reveal a much messier internal state through conversation or small post details. In a city where image, work, performance, and belonging carry pressure, that social layer is not cosmetic. It is one of the cleanest ways for the game to show who a person is when they are not speaking directly to you.

This is also why a good guide should not reduce Tomodachill to "read every post." The useful advice is to explain what kind of information it seems built to carry: emotional context, social ties, recurring concerns, hints toward future conversation beats, and sometimes the gap between how a character performs online and how they feel in the booth across from you.

## Clickable Hashtags and Reading Customer Context

Clickable hashtags are a small feature with large consequences. They mean the social layer is easier to navigate and more intentionally designed than a simple linear feed. For players, that changes the strategy. Instead of scanning posts passively, you can follow clusters of topics, recurring names, and thematic signals. That helps especially when the game wants you to connect one customer's issue to another person's perspective or to a wider social mood around Tokyo.

| Tomodachill use case | Why it matters |
| --- | --- |
| Checking a post before a repeat visit | Refreshes emotional context without replaying old dialogue |
| Following a hashtag cluster | Helps identify relationship or theme connections |
| Comparing post tone with spoken tone | Reveals what a character is hiding or softening |
| Tracking social references around an event | Useful if multiple customers react to the same topic |

This is the kind of value players actually need. It is less about "where is the button" and more about "how should I interpret the feature so it makes me better at the game."

## Best Practice for First-Run Use

The best first-run rule is deliberate checks, not constant interruption. Read Tomodachill before a new customer's big conversation, after a meaningful scene, and whenever the game itself nudges you toward social context. That keeps the emotional pacing intact while still giving you the information the system is meant to provide.

Avoid turning Tomodachill into a spoiler hunt. Because the full release is not playable yet, many route assumptions would be invented. The useful pre-release claim is simpler: Tomodachill is one of Tokyo's real upgrades, and players who ignore it will probably miss part of what the writing is doing.
`,
    faqs: [
      {
        question: 'What is Tomodachill in Coffee Talk Tokyo?',
        answer:
          'It is the in-game social network, used to learn more about customers and their stories.',
      },
      {
        question: 'Does Coffee Talk Tokyo have clickable hashtags?',
        answer:
          'Yes. Official demo notes say Tomodachill now includes clickable hashtags.',
      },
      {
        question: 'Should I read Tomodachill on my first run?',
        answer:
          'Yes, but use it deliberately between important scenes rather than constantly interrupting the story flow.',
      },
    ],
  },
  'latte-art-sprinkle-stencils-guide': {
    title: 'Coffee Talk Tokyo Latte Art and Sprinkle Stencils Guide',
    description:
      'A Coffee Talk Tokyo stencil guide covering the new sprinkle stencil feature, how it changes drink presentation, why it matters for cozy-game UX, and what still needs practical testing in the launch build.',
    lastUpdated,
    timeToRead: '12 min',
    primaryKeyword: 'coffee talk tokyo sprinkle stencils',
    spoilerLevel: 'safe',
    verificationStatus: 'Official',
    heroImage: hero,
    heroImageAlt: 'Coffee Talk Tokyo sprinkle stencils guide key art',
    sections: [
      { title: 'Direct Stencil Answer', id: 'direct-stencil-answer' },
      { title: 'How the New Presentation Layer Works', id: 'how-the-new-presentation-layer-works' },
      { title: 'Why This Feature Matters for Players', id: 'why-this-feature-matters-for-players' },
      { title: 'Launch-Day Testing Checklist', id: 'launch-day-testing-checklist' },
    ],
    sectionMedia: {
      'direct-stencil-answer': {
        image: shot(3),
        alt: 'Coffee Talk Tokyo stencil screenshot used for direct answer',
        caption: 'Sprinkle stencils are one of the clearest visual additions in Coffee Talk Tokyo.',
      },
      'how-the-new-presentation-layer-works': {
        image: shot(4),
        alt: 'Coffee Talk Tokyo drink finishing screenshot for stencil workflow',
        caption: 'Official copy describes a layered process: apply a powdered stencil, then personalize the finish with milk and etching.',
      },
      'why-this-feature-matters-for-players': {
        image: shot(1),
        alt: 'Coffee Talk Tokyo cafe screenshot for player experience analysis',
        caption: 'This is not just decoration. It changes how expressive drink delivery feels in a conversation game.',
      },
      'launch-day-testing-checklist': {
        image: shot(5),
        alt: 'Coffee Talk Tokyo cast scene for launch-day stencil testing',
        caption: 'The live build still needs to confirm how strict customer reactions are around stencil usage.',
      },
    },
    videos: [videos.summerGameFest, videos.reveal, videos.nintendo],
    content: `
## Direct Stencil Answer

Coffee Talk Tokyo adds sprinkle stencils as a new way to elevate latte art. Official copy describes the feature clearly: you can create beautiful latte art by sprinkling a powdered design on a customer's drink, then personalize it further with milk and etching. For a game series that already used drink making as emotional communication, that is a meaningful addition. It gives the presentation step more structure and makes the final cup feel more intentional.

${prereleaseNote}

| Stencil question | Current answer | Verification status |
| --- | --- | --- |
| Are sprinkle stencils a real new feature? | Yes | Official |
| Do they affect drink presentation? | Yes | Official |
| Can you still personalize the drink after applying one? | Official copy says you can add milk and etching afterward | Official |
| Are customer reactions to stencil use fully mapped? | No | Needs hands-on verification |

## How the New Presentation Layer Works

The official description matters because it shows the feature is more than a cosmetic stamp. The sequence implies a layered presentation workflow: choose the design, apply it, then continue shaping the visual identity of the drink. That gives Coffee Talk Tokyo a stronger tactile finish than earlier-series expectations might suggest.

For content planning, this changes how a guide should be organized. The question is no longer only "what recipe do I make?" It can also become "how should I present it?" If certain customers care about style, memory, symbolism, or mood, the stencil system could reinforce those themes without requiring twitch gameplay. That is exactly the sort of mechanical depth that fits Coffee Talk's tone when implemented well.

## Why This Feature Matters for Players

Many pre-release articles would stop at "new latte art feature." That is not enough. The real user value is understanding why the feature could change the experience:

| Player concern | Why stencils matter |
| --- | --- |
| Cozy immersion | The finishing step makes the act of serving feel more personal |
| Readability of choices | A presentation tool may communicate intention even when recipes are similar |
| Accessibility of expression | Stencils can let players make a nice-looking drink without needing extremely precise freehand control |
| Series freshness | It gives returning players something new to learn without abandoning the series identity |

This is the kind of explanation that helps readers decide whether the new system sounds meaningful. It also makes the page more than a feature recap.

## Launch-Day Testing Checklist

The live build still needs real testing before any deeper guide can claim certainty. The first questions to verify are practical:

1. Are stencils always optional, or are some customers explicitly grading them?
2. How forgiving is the input flow compared with earlier latte-art expectations?
3. Can a visually nice stencil still fail if the base drink is wrong?
4. Are some stencil interactions story-relevant, or mainly cosmetic?

Those answers should only be published after direct play. Until then, the honest takeaway is simple: sprinkle stencils are a real upgrade, and they likely matter because Coffee Talk Tokyo wants drink presentation to feel more expressive and more readable.
`,
    faqs: [
      {
        question: 'What are sprinkle stencils in Coffee Talk Tokyo?',
        answer:
          'They are a new latte presentation feature that lets you apply a powdered design before adding your own finishing touches.',
      },
      {
        question: 'Can you still customize drinks after using a stencil?',
        answer:
          'Yes. Official copy says you can continue by adding milk and etching after the stencil layer.',
      },
      {
        question: 'Do stencils affect customer outcomes?',
        answer:
          'That still needs hands-on testing in the full release, so outcome rules should be treated as unverified for now.',
      },
    ],
  },
  'deluxe-edition-soundtrack-guide': {
    title: 'Coffee Talk Tokyo Deluxe Edition and Soundtrack Guide',
    description:
      'A buyer-focused Coffee Talk Tokyo Deluxe guide covering the Seattle Prologue Chapter, 10 extra City Pop tracks, digital artbook, AJ Jeremy soundtrack context, and who should buy the upgraded edition.',
    lastUpdated,
    timeToRead: '13 min',
    primaryKeyword: 'coffee talk tokyo deluxe edition',
    spoilerLevel: 'safe',
    verificationStatus: 'Official',
    heroImage: hero,
    heroImageAlt: 'Coffee Talk Tokyo Deluxe Edition and soundtrack guide key art',
    sections: [
      { title: 'Deluxe Buyer Answer', id: 'deluxe-buyer-answer' },
      { title: 'What the Deluxe Edition Actually Adds', id: 'what-the-deluxe-edition-actually-adds' },
      { title: 'Why the AJ Jeremy Music Matters', id: 'why-the-aj-jeremy-music-matters' },
      { title: 'Who Should Buy Standard vs Deluxe', id: 'who-should-buy-standard-vs-deluxe' },
    ],
    sectionMedia: {
      'deluxe-buyer-answer': {
        image: shot(2),
        alt: 'Coffee Talk Tokyo atmospheric screenshot for deluxe buyer answer',
        caption: 'Edition pages should help readers decide, not just repeat bonus bullet points.',
      },
      'what-the-deluxe-edition-actually-adds': {
        image: shot(5),
        alt: 'Coffee Talk Tokyo cast scene for deluxe contents guide',
        caption: 'The Deluxe page already has concrete content names, which makes it far more useful than a vague preorder bonus list.',
      },
      'why-the-aj-jeremy-music-matters': {
        image: shot(1),
        alt: 'Coffee Talk Tokyo cafe ambience screenshot for soundtrack guide',
        caption: "AJ Jeremy's return matters because the music is part of the series identity, not just background filler.",
      },
      'who-should-buy-standard-vs-deluxe': {
        image: shot(3),
        alt: 'Coffee Talk Tokyo stencil screenshot for edition comparison advice',
        caption: 'A good edition guide should map bonuses to player priorities rather than pushing every reader toward the highest tier.',
      },
    },
    videos: [videos.reveal, videos.summerGameFest, videos.nintendo],
    content: `
## Deluxe Buyer Answer

The current Coffee Talk Tokyo Deluxe Edition adds three named items: a Seattle Prologue Chapter, 10 additional in-game City Pop tracks, and a digital artbook. That is strong enough to build a real buying guide because the bonuses split cleanly into story, atmosphere, and collectible extras. The same PS5 listing also advertises a 72-hour early access preorder bonus, which readers should treat as storefront-specific until every platform page is checked.

${prereleaseNote}

| Buyer question | Current answer | Verification status |
| --- | --- | --- |
| Does Deluxe add story content? | Yes, a Seattle Prologue Chapter is listed | Official |
| Does Deluxe add music? | Yes, 10 additional in-game City Pop tracks are listed | Official |
| Is there a digital artbook? | Yes | Official |
| Is early access universal on every platform? | Not confirmed | Needs hands-on verification |

## What the Deluxe Edition Actually Adds

The biggest mistake on edition pages is failing to translate the bonus list into real decision logic. The Seattle Prologue Chapter is the clearest differentiator because it adds narrative material. That matters for returning Coffee Talk players who care about universe continuity, character texture, or simply more time in this world. The extra City Pop tracks matter most for players who treat Coffee Talk as a comfort-space game they revisit for mood as much as plot. The digital artbook is the least gameplay-relevant item, but for fans of the series' visual identity it still carries value.

| Deluxe item | Who it is really for |
| --- | --- |
| Seattle Prologue Chapter | Returning fans who want more story context |
| 10 additional City Pop tracks | Players who value the game's atmosphere and replayable chill factor |
| Digital artbook | Collectors and fans of the art direction |
| 72-hour early access preorder note | Players who want to start early and whose platform confirms the offer |

This is a better structure than hype language because it helps the reader self-sort quickly.

## Why the AJ Jeremy Music Matters

AJ Jeremy returning is not a trivial detail. The music in Coffee Talk has always done more than fill silence. It creates the emotional space where conversation can breathe. Official messaging for Tokyo leans into that by presenting the soundtrack as part of the city's lo-fi identity, not as a marketing extra tacked onto the store page.

That also explains why soundtrack-related bonuses matter more here than they would in a typical action game. Coffee Talk is one of those rare series where the mood layer is part of the product value. If you come to these games to settle into a nightly rhythm, the promise of more City Pop and AJ Jeremy's continued authorship is relevant purchase information, not trivia.

## Who Should Buy Standard vs Deluxe

Buy the standard edition if your main goal is to experience the new Tokyo story and you are not especially attached to bonus chapters or collectible extras. Buy Deluxe if one or more of these is true:

1. You already love the Coffee Talk universe and want extra story context.
2. The soundtrack is part of why you return to the series.
3. You enjoy artbooks and complete-edition style purchases.

Wait for release-day confirmation if your decision depends on early access, storefront parity, or whether Deluxe content is available immediately on all platforms. That is the buyer-first approach: understand what the extras mean, then buy based on the way you actually play these games.
`,
    faqs: [
      {
        question: 'What is included in the Coffee Talk Tokyo Deluxe Edition?',
        answer:
          'The current Deluxe listing names a Seattle Prologue Chapter, 10 additional in-game City Pop tracks, and a digital artbook.',
      },
      {
        question: 'Who composes the music in Coffee Talk Tokyo?',
        answer:
          'AJ Jeremy returns to score Coffee Talk Tokyo, continuing the lo-fi sound the series is known for.',
      },
      {
        question: 'Should I buy standard or Deluxe?',
        answer:
          'Standard is fine for players who mainly want the core Tokyo story. Deluxe makes more sense for returning fans who care about extra story, atmosphere, and collectible extras.',
      },
    ],
  },
};

export const coffeeTalkTokyoGuideOrder = [
  'release-date-platforms-guide',
  'demo-length-save-transfer-guide',
  'beginner-night-shift-guide',
  'drink-recipes-guide',
  'characters-story-guide',
  'tomodachill-social-guide',
  'latte-art-sprinkle-stencils-guide',
  'deluxe-edition-soundtrack-guide',
] as const;

export const coffeeTalkTokyoGuides = coffeeTalkTokyoGuideOrder.map((slug) => ({
  slug,
  title: coffeeTalkTokyoGuideContent[slug].title.replace(/^Coffee Talk Tokyo:?\s*/, ''),
  description: coffeeTalkTokyoGuideContent[slug].description,
}));

export const coffeeTalkTokyoHubContent = {
  overview: `Coffee Talk Tokyo is the upcoming Tokyo-set entry in the Coffee Talk series, currently scheduled for ${coffeeTalkTokyoFacts.displayReleaseDate}. Official sources confirm new customers, Tomodachill social browsing, sprinkle stencils for drink presentation, cold beverage support in the demo, and a soundtrack once again led by AJ Jeremy.

This hub is built for pre-release trust. It answers the high-intent questions readers actually have before launch: release date, demo scope, edition differences, beginner reading strategy, drink-system changes, and the cast you can safely discuss today.`,
  features: [
    'Official release date: May 21, 2026',
    'Ignore older March 5, 2026 posts; current official date is May 21, 2026',
    'Confirmed platforms: PC, PS5, Xbox Series X|S, and Nintendo Switch',
    'Official demo covers the full Day 1 and the early part of Day 2',
    'Tomodachill now has expanded features including clickable hashtags',
    'Cold drink options are officially mentioned in demo messaging',
    'Sprinkle stencils add a new drink presentation layer',
    'Guide pages use visible verification labels instead of fake complete-route claims',
  ],
  guides: coffeeTalkTokyoGuides,
  tips: [
    'Start with release date and demo scope if you are deciding whether to buy now or wait.',
    'If you still see March 5 in search results or old posts, use the release-date page first to clear that up.',
    'Use the beginner, Tomodachill, and stencil pages if you care more about experience quality than raw completion.',
    'Treat any page promising all recipes or all endings before launch as low-trust until it shows tested evidence.',
    'Check Deluxe only if bonus story content or extra soundtrack value matters to you.',
    'Return after launch for verified recipe tables and route updates.',
  ],
  faq: [
    {
      question: 'When does Coffee Talk Tokyo release?',
      answer: 'Coffee Talk Tokyo is currently scheduled for May 21, 2026.',
    },
    {
      question: 'Why do some pages still show March 5, 2026?',
      answer:
        'That is older date coverage. The current official date used by the live official page and storefront coverage is May 21, 2026.',
    },
    {
      question: 'How much of Coffee Talk Tokyo is in the demo?',
      answer:
        'Official demo messaging says it includes the complete Day 1 and the early part of Day 2.',
    },
    {
      question: 'What is Tomodachill?',
      answer:
        'Tomodachill is the in-game social network, used to understand customers and their stories better.',
    },
    {
      question: 'Does Coffee Talk Tokyo have cold drinks?',
      answer:
        'Yes. Official demo messaging says new drink options include cold beverages.',
    },
  ],
};
