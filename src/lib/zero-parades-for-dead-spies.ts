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
  sectionVideos?: Record<string, ZeroParadesVideo[]>;
  videos: ZeroParadesVideo[];
}

const lastUpdated = '2026-05-21';
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
  features: {
    title: 'ZERO PARADES: For Dead Spies - Features & Gameplay Trailer',
    url: 'https://youtu.be/6QCWM7WnovE',
    channel: 'ZA/UM',
    duration: 'Official gameplay trailer',
  },
  showcase: {
    title: 'ZERO PARADES: For Dead Spies - Developer Showcase',
    url: 'https://www.youtube.com/watch?v=FynVunoMLHA',
    channel: 'ZA/UM',
    duration: 'Developer showcase',
  },
  deepDive: {
    title: 'ZERO PARADES: For Dead Spies - Gameplay Deep Dive',
    url: 'https://youtu.be/cMrfwqMlSpQ',
    channel: 'ZA/UM',
    duration: 'Gameplay deep dive',
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
  unlockTime: '11:00 UTC / 19:00 China Standard Time on May 21, 2026',
  redditCommunityUrl: 'https://www.reddit.com/r/ZeroParades/',
  redditReleaseThread:
    'https://www.reddit.com/r/ZeroParades/comments/1s8qdro/zero_parades_for_dead_spies_arrives_on_pc_may_21st/',
  redditFeaturesThread:
    'https://www.reddit.com/r/ZeroParades/comments/1t6krk8/zero_parades_for_dead_spies_features_gameplay/',
  redditShowcaseThread:
    'https://www.reddit.com/r/ZeroParades/comments/1te6ip1/zero_parades_for_dead_spies_developer_showcase/',
  redditDeepDiveThread:
    'https://www.reddit.com/r/ZeroParades/comments/1thqzzn/zero_parades_for_dead_spies_gameplay_deep_dive/',
  launchLanguages:
    'Full English voice-over plus German, Spanish (Latin America), Chinese (Simplified), and Russian text at launch',
  laterLanguages:
    'French, Italian, Japanese, Korean, Polish, Portuguese (Brazilian), Chinese (Traditional), and Turkish planned as free updates later in 2026',
};

const prereleaseNote =
  'This launch-day guide was checked on May 21, 2026 before broad player-route data existed. It uses the official ZERO PARADES press page, live Steam listing, storefront pages, ZA/UM posts on r/ZeroParades, official YouTube videos, and public review or preview coverage. Final walkthrough routes, achievements, choices, endings, player-review sentiment, and launch performance still need hands-on verification after the PC build unlocks.';

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
    sectionVideos: {
      'direct-release-answer': [videos.release],
      'platform-and-storefront-status': [videos.release, videos.showcase],
      'steam-features-and-languages': [videos.release],
      'pc-requirements-and-launch-checks': [videos.deepDive],
    },
    videos: [videos.release, videos.showcase, videos.deepDive],
    content: `
## Direct Release Answer

ZERO PARADES: For Dead Spies is a launch-day PC release for ${zeroParadesFacts.displayReleaseDate}. The most precise timing to use right now is ${zeroParadesFacts.unlockTime}. That means the game is on its release date today in China, but players should still distinguish the calendar date from the exact store unlock time. Steam and SteamDB both point to the same UTC unlock window, while the official ZA/UM Reddit announcement says the game is coming to PC on May 21 through Steam, Epic Games Store, and GOG for ${zeroParadesFacts.price}. The official press page names ZA/UM as developer and publisher, and the Steam page positions the game as an espionage RPG from the studio behind Disco Elysium.

The clean answer is: PC launches today, PS5 is later in 2026, and the first complete route guides should not be written until the live build can be tested. That distinction matters for search quality. A player typing "ZERO PARADES release date" usually wants a direct answer, store links, platform wording, language support, and whether the game is actually unlocked in their time zone. A player typing "ZERO PARADES walkthrough" wants solved routes, and that content still needs real play evidence. Mixing those two tasks would create a page that feels current but cannot be trusted.

${prereleaseNote}

| Item | Current answer | Verification status |
| --- | --- | --- |
| PC release date | May 21, 2026 | Official / Steam-listed |
| Current unlock window | 11:00 UTC / 19:00 China Standard Time | Steam / SteamDB-listed |
| Developer and publisher | ZA/UM | Official |
| Steam app ID | 2863680 | Steam-listed |
| Genre signal | Espionage RPG / CRPG / story-rich RPG | Official / Steam-listed |
| Steam Deck | Steam Deck Verified | Steam-listed |
| Launch price | $39.99 | Store-listed |
| User reviews | No broad player-review consensus before release | Needs launch verification |

The Reddit release thread is useful because it comes from a ZA/UM account with a studio flair and gives details that players are already asking about: price, storefronts, Steam Deck verification, launch languages, and later localization updates. It should be treated as a supporting official-community source, not as a replacement for storefront pages. Storefronts remain the best source for purchase availability, regional pricing, requirements, achievements, and last-minute feature labels.

## Platform And Storefront Status

The current platform answer is PC first. Steam, Epic Games Store, and GOG all have public store pages for ZERO PARADES. The official press page also lists PlayStation 5 for 2026, but that does not mean PS5 has the same May 21 PC date. Keep the page language precise: PC on May 21, PS5 later in 2026 unless the official page changes.

This is also one of the strongest community questions on Reddit. In the feature-trailer thread, players ask whether the May 21 date applies to console; another user clarifies that public information points to PC first and PS5 later in 2026. In the release-date thread, console players react to the "on PC" wording and ask how long the PS5 version will take. That is enough demand to make the PS5 answer visible in the first half of the page, but not enough to invent a month, season, preorder window, Xbox version, or physical edition. The safest page copy is short and explicit: PC today, PS5 planned for 2026, no confirmed same-day console launch.

| Platform or store | Current status | Best wording |
| --- | --- | --- |
| Steam | Listed for PC | Launch storefront |
| Epic Games Store | Listed for PC | Launch storefront |
| GOG | Listed for PC | Launch storefront |
| PlayStation 5 | Listed for 2026 | Later platform, not the PC launch date |

Store choice depends on what the player values. Steam has the clearest community and Steam Deck discovery path, Epic may fit players already using its library, and GOG is the obvious choice for players who care about DRM-free ownership when available in their region. The guide should not tell everyone to use one store. It should give the verified store set and let readers choose based on their account, refund preference, Deck use, and regional price.

## Steam Features And Languages

Steam currently lists ZERO PARADES as a single-player game with Steam achievements, Steam Cloud, Family Sharing, and Steam Deck Verified status. Storefront labels are useful because players ask whether it is multiplayer, whether saves sync, whether achievements exist, and whether it can be played handheld. They should not be stretched into claims about trophy difficulty, save-scumming, chapter select, or route structure before the live build is available.

Language support is now a stronger launch-day answer because ZA/UM's Reddit announcement gives an unusually clear localization note. The post says ZERO PARADES launches with full English voice-over and four text localizations: German, Spanish (Latin America), Chinese (Simplified), and Russian. It also says eight more languages are planned as free updates later in 2026: French, Italian, Japanese, Korean, Polish, Portuguese (Brazilian), Chinese (Traditional), and Turkish. That is a useful answer for English and Chinese search traffic because it avoids a common mistake: treating every planned language as a launch language.

| Language question | Current answer | How to word it |
| --- | --- | --- |
| English voice-over | Full English voice-over listed for launch | Launch feature |
| Simplified Chinese | Listed as launch text localization | Launch text language |
| Traditional Chinese | Planned as a later free update | Not launch text unless storefront changes |
| Japanese and Korean | Planned as later free updates | Not launch text unless storefront changes |
| Translation quality | Not knowable from a store label | Needs player testing |

Steam Deck Verified is also worth presenting carefully. ZA/UM's Reddit reply says the demo is not Steam Deck Verified but the full release on May 21 will be. Steam currently also lists Steam Deck Verified. That is a strong purchase signal for handheld players, but a text-heavy CRPG still needs practical checks: font size, battery life, input comfort, cloud-save reliability, and how readable Tactical View feels on the Deck screen.

## PC Requirements And Launch Checks

Steam currently lists a 16 GB RAM minimum, DirectX 11, Windows 10 minimum, and a GTX 1060 6 GB class GPU as the minimum graphics target. Recommended requirements currently move to Windows 11 and a higher Nvidia GPU class. These are storefront requirements, not performance proof. They tell readers what the publisher is willing to list, not what the game feels like across a long session with dense text, scene transitions, and Tactical View usage.

| Launch-week check | Why it matters |
| --- | --- |
| Steam Deck status | Steam Deck Verified is listed, but font size, battery life, and long-session comfort still need player checks |
| Ultra-wide and controller comfort | Tactical View and dialogue menus need UI testing |
| Save and cloud behavior | Story-rich RPGs need reliable rollback and sync behavior |
| Accessibility options | Subtitles, input remapping, and readable UI are essential for long dialogue sessions |

The best launch-day update path is therefore practical, not speculative. Test the first hour on keyboard and mouse, test controller movement and dialogue selection, confirm whether Steam Cloud syncs cleanly between devices, verify whether achievements trigger normally, and check whether the game exposes enough save slots for players who want to preserve major choices. For Steam Deck, the page should add a real note about default font readability, battery estimate, frame pacing, and whether docked play changes the control feel.

Sources checked: the official ZERO PARADES press page, Steam store page, Epic Games Store page, GOG page, ZA/UM posts on r/ZeroParades, official ZA/UM YouTube videos, SteamDB release timing, and recent PC release coverage.
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
    sectionVideos: {
      'short-answer-for-disco-elysium-fans': [videos.features],
      'what-looks-familiar': [videos.deepDive],
      'what-is-clearly-different': [videos.showcase],
      'should-disco-elysium-fans-play-it': [videos.features, videos.deepDive],
    },
    videos: [videos.features, videos.deepDive, videos.showcase, videos.release, videos.reveal],
    content: `
## Short Answer For Disco Elysium Fans

ZERO PARADES is like Disco Elysium in the ways most players are asking about: it is a dialogue-heavy, choice-driven RPG from ZA/UM, with internal systems that comment on your decisions, dice-driven uncertainty, and a world that appears to carry political and cultural pressure into ordinary conversations. It is not currently positioned as Disco Elysium 2, a direct sequel, or the same detective story with new names. The correct comparison is about player expectation, not canon.

${prereleaseNote}

The useful comparison is this: Disco Elysium is the obvious reference point for writing, skills, and failure-forward RPG structure; ZERO PARADES is an espionage CRPG with its own spy-thriller premise, protagonist, city politics, and pressure systems. The official and storefront language points toward a game about intelligence work, subterfuge, deduction, violence, and personal strain. That is different from waking up as an amnesiac detective and solving a murder through a collapsing self. The overlap is in how the RPG thinks. The difference is in what the player is asked to be.

Reddit discussion shows why this page needs to be careful. Some players are excited because they loved the demo, art direction, and the idea of a new ZA/UM RPG. Others question the "from the creators of Disco Elysium" framing because of the public history around ZA/UM and the original Disco Elysium leads. A good comparison page should not flatten that argument into marketing copy. It should tell readers what can be verified: ZA/UM is the named developer and publisher, ZERO PARADES shares several visible design signals with Disco Elysium-style RPGs, and it is still a separate game with a separate creative identity.

## What Looks Familiar

Steam and official materials describe a game where skills can talk to you, dice rolls can shape outcomes, and failure does not simply stop the story. That is why Disco Elysium players are paying attention. The appeal is not only that the same studio name appears. It is that the store page is selling a similar kind of thinking RPG: dialogue, consequence, internal voices, and scenes where a bad roll may become a new route instead of a game over.

| Familiar element | Why it matters to Disco Elysium players |
| --- | --- |
| Talking skill system | Suggests internal commentary and personality-driven checks |
| Dice-driven outcomes | Makes uncertainty part of conversations and encounters |
| Failure-forward design | Bad rolls can create story consequences instead of hard stops |
| Political and cultural setting | The city appears to matter as more than a backdrop |

The official Gameplay Deep Dive and Features & Gameplay Trailer reinforce the same cluster. They put emphasis on Portofiro as a place to read, not just move through; they show conversations, UI-driven decisions, and scenes built around inspection instead of reflex combat. That is the search-intent reason this page exists. A player who asks "is ZERO PARADES like Disco Elysium?" is usually not asking whether the two games share a plot. They want to know if the appeal is still writing-first, systems-first, and choice-aware.

The safest answer is "yes, for the RPG texture." Expect dense dialogue, strange characters, a strong visual identity, skill pressure, and failures that may become part of the story. Do not expect confirmed Disco Elysium characters, Revachol continuity, the same Thought Cabinet, or the same exact comic rhythm. Those would be different claims, and they are not supported by current public sources.

## What Is Clearly Different

ZERO PARADES is framed around espionage. The protagonist, Hershel Wilk, is pulled back into spy work after a disastrous past mission, and public descriptions reference intelligence, subterfuge, violence, deduction, and a three-way cultural or ideological struggle. That gives the game a different fantasy from a police investigation or amnesiac detective structure.

The Steam page also highlights Tactical View, Pressures, Exertion, and conditions such as Fatigue, Anxiety, and Delirium. Those terms point to a more explicit spy-operation layer where physical and psychological strain are systems, not just flavor text.

That difference matters for actual buying advice. If you loved Disco Elysium because it felt like an interactive novel about identity, politics, addiction, policing, shame, and memory, ZERO PARADES may still appeal to you, but it is asking a different question. It appears more interested in what spy work does to a person, how a compromised operative reads a room, and how a state of pressure changes the available options. The official videos do not present it as a nostalgic return to Revachol. They present it as Portofiro: a new city, a new assignment, and a new set of pressures.

The tone may also land differently. Reddit comments around the showcase include excitement about side quests and art design, but also concern from some players about whether comic or surreal details fit a political espionage thriller. That is a legitimate taste question, not a technical fact. The page should acknowledge it without turning a few comments into a broad review consensus. Until the full game is widely played, the most reliable phrasing is that ZERO PARADES uses an unusual tone and art direction that looks attractive to some Disco Elysium fans and risky to others.

## Should Disco Elysium Fans Play It

You should watch ZERO PARADES closely if your favorite part of Disco Elysium was writing, internal conflict, role-playing failure, political tension, and unusual RPG structure. You should be more cautious if what you want is the exact tone, exact humor, exact detective pacing, or a confirmed continuation of Revachol-related story threads.

The launch-day recommendation depends on what you value most. If you want a blind run through a text-heavy RPG where choices, failures, and strange social encounters matter, ZERO PARADES is a strong day-one candidate. If you are buying only because of the Disco Elysium name association, wait for player reviews and long-form impressions. If you care about the public ZA/UM dispute, creator continuity, or whether the writing carries the same authority as Disco Elysium, wait for critical analysis that engages with the finished game rather than trailers.

| If you loved Disco Elysium for... | ZERO PARADES fit |
| --- | --- |
| Internal skill voices and checks | Strong fit based on public systems |
| Political writing and strange social spaces | Likely fit, pending full-game quality |
| Detective pacing and murder investigation structure | Different premise |
| Revachol continuity | Not confirmed |
| One-of-a-kind tone from the original lead creatives | Wait for reviews and player consensus |

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
    sectionVideos: {
      'what-kind-of-rpg-is-it': [videos.features],
      'skills-conditioning-and-checks': [videos.deepDive],
      'dramatic-encounters-and-tactical-view': [videos.showcase],
      'pressure-exertion-and-failure': [videos.deepDive, videos.features],
    },
    videos: [videos.features, videos.deepDive, videos.showcase],
    content: `
## What Kind Of RPG Is It

ZERO PARADES is best described as an espionage CRPG with dialogue-heavy decision-making, skill checks, and failure-forward outcomes. The storefront tags and official feature list point toward Story Rich, Choices Matter, CRPG, Political, Dialogue Heavy, Isometric, and Thriller intent. That means players should not expect a cover-shooter spy game or a stealth-action mission chain as the default structure. It is a spy RPG about reading people, locations, and pressure rather than a game where stealth takedowns or gunplay carry every scene.

${prereleaseNote}

The official Features & Gameplay Trailer and Gameplay Deep Dive are useful because they show how ZA/UM wants players to understand the game before launch. The emphasis is on Portofiro, a returning operative, operant skills, encounters, and decisions under stress. The marketing does not frame ZERO PARADES as a pure visual novel, an action game, or a tactical squad RPG. It sits in a narrower space: a single-player narrative CRPG where the main mechanical questions are "what do you notice," "what can you say," "what are you willing to risk," and "what does failure do to the next scene."

That matters for guide planning. A responsible launch-day guide can explain the systems and prepare readers for how to think. It should not publish solved builds, best choices, ending routes, or achievement paths until the live game is tested. In a failure-forward RPG, a "best answer" may only be best for one character concept or one desired outcome. The early guide should teach the shape of the system, then convert into route advice once evidence exists.

## Skills Conditioning And Checks

The official press page describes 15 unique operant skills and a system called Conditioning. The practical question for players is not just how many skills exist. It is whether skill investment changes what you notice, what dialogue options appear, how scenes resolve, and how much internal commentary you receive.

| Public system | What it likely answers for players | Verification status |
| --- | --- | --- |
| 15 operant skills | Build identity and scene options | Official |
| Conditioning | How your spy profile develops under pressure | Official |
| Dice rolls | Uncertain outcomes in checks and scenes | Steam-listed |
| Failure-forward scenes | Whether a bad outcome can still continue the story | Steam-listed |

Skills in this kind of RPG should be treated as both mechanics and voice. A normal stat guide asks "which number is strongest." A ZERO PARADES skill guide should ask better questions: which skills open observation text, which skills create new dialogue, which skills help during Dramatic Encounters, which skills push you toward risk, and which skills change the tone of internal advice. Until players can test those outcomes, the safest guidance is conceptual. Pick skills that match the kind of spy you want to role-play, not only the build that looks efficient on a spreadsheet.

Conditioning also deserves caution. Public sources name it, but they do not fully expose how it scales, whether it can be reversed, whether it locks routes, or how strongly it modifies checks. If Conditioning reacts to repeated behavior, stress, or pressure states, it may make blind play more interesting than min-maxing. If it functions more like a conventional progression layer, then a later build guide can rank early choices. The current page should mark that as launch verification instead of pretending to know exact thresholds.

## Dramatic Encounters And Tactical View

Official materials call out Dramatic Encounters and Tactical View. Steam describes Tactical View as a way to pause time, inspect the scene, and decide how to act. This is the main reason the game should not be covered like a normal dialogue-only RPG. There appears to be a readable encounter layer where positioning, options, and consequences matter.

The launch version should be tested for three things: whether Tactical View is used often enough to matter, whether it adds clarity or slows the game down, and whether different skill builds create meaningfully different encounter solutions.

For players, the best mental model is not "combat mode" yet. It is "decision mode." Tactical View sounds like a tool for stopping the rush of a scene, reading objects or people, and choosing an approach with better information. Dramatic Encounters sound like authored high-pressure scenes where the game cares about timing, context, and your current state. Those may include violence, deduction, escape, interrogation, stealth, or social pressure. They should be explained as a structure until the live game confirms the exact range.

| Encounter question | What launch testing should record |
| --- | --- |
| How often does Tactical View appear? | Frequency across the first three hours and later chapters |
| Does it pause fully? | Whether players can inspect without time pressure |
| Do skills change encounter options? | Compare at least two builds in the same scene |
| Are there fail states? | Whether failed choices continue, wound, lock, or redirect |
| Is controller support comfortable? | Menu navigation, camera movement, and option selection |

This is also where YouTube is especially helpful. Official showcase footage gives readers a visible reference for what the interface and pacing look like, while later creator videos will likely show solved routes. The written guide should embed the official videos now and add tested clips or timestamps only after release.

## Pressure Exertion And Failure

Steam references Pressures and Exertion, including Fatigue, Anxiety, and Delirium. That language suggests the game wants stress to be part of the role-playing system. Exertion appears to let players push dice odds at a cost, which is exactly the kind of mechanic that can create memorable consequences if balanced well.

The important point for players is that "failure-forward" does not mean "failure is always good." It means the game can keep moving after failure. A failed roll might cost health, add pressure, close a clean route, open a messier scene, alter a relationship, or reveal a different piece of information. Exertion is therefore a role-playing decision, not only a probability button. If you exert every time, you may create a spy who survives by burning themselves down. If you never exert, you may leave important opportunities on the table.

Launch testing should record specific examples without spoiling the whole game too early. The first update can use spoiler-safe categories: early social check, early Tactical View check, early pressure gain, early exertion cost, and whether the game explains recovery clearly. Later updates can split into dedicated pages for best builds, choices, endings, and achievement cleanup.

After release, this page should become a practical guide: when to exert, which pressure states are dangerous, whether failure closes routes, and how often a failed check produces useful story content rather than pure punishment. Until then, the best advice is to play deliberately. Read the scene, decide whether the outcome matters to your version of Hershel Wilk, and do not reload every failure unless you are testing a specific route.
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
    sectionVideos: {
      'fast-buyer-verdict': [videos.release],
      'use-reviews-without-overreading-them': [videos.showcase],
      'buy-now-if-these-are-your-priorities': [videos.features],
      'wait-if-these-questions-matter': [videos.deepDive],
      'launch-week-update-plan': [videos.release, videos.deepDive],
    },
    videos: [videos.release, videos.features, videos.deepDive, videos.showcase, videos.reveal],
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

On launch day, the decision is less about whether the game exists and more about whether your question can be answered yet. The release date, PC stores, price signal, Steam Deck label, English voice-over, launch text languages, and broad RPG pitch are source-backed. The quality of late-game choices, ending count, missable achievements, exact build strength, and long-session performance are not solved by a store page. A buyer guide should separate those categories clearly so readers know what is fact and what is still evidence-gathering.

The current Reddit signal is mixed in a useful way. The release thread shows excitement around May 21, localization, Steam Deck Verified status, and PC availability. The features thread shows players praising the art direction and demo, while also raising questions about console timing and ZA/UM's relationship to Disco Elysium. The showcase thread includes players who want to go in blind, players who liked side quests in the demo, and players who are still unsure about tone. That is enough to recommend the game to the right player, but not enough to pretend there is settled player consensus.

## Use Reviews Without Overreading Them

Pre-release reviews can help answer whether the writing, tone, and RPG structure are landing for critics. They cannot fully answer every player task this site will need after launch. Achievement missables, route consequences, Steam Deck battery life, cloud-save edge cases, and late-game build advice still require broader player evidence and hands-on checks.

The user-friendly framing is therefore not "wait for reviews" in general. It is more specific: use reviews for quality confidence, then use launch-player reports for platform comfort and route certainty.

This distinction is especially important for a narrative CRPG. A reviewer can say whether the game is interesting, well written, too slow, too strange, or mechanically satisfying. A reviewer usually cannot answer every route question a search page needs: whether one early failure locks an ending, whether an achievement requires a second playthrough, whether a pressure state can be cleared before a specific encounter, or whether the game has enough save flexibility for route testing. Search pages that publish those answers too early tend to become unreliable quickly.

Use reviews for three things: broad confidence, tonal fit, and whether the finished game respects your time. Use player reports for three different things: bugs, hardware comfort, route edge cases, and Steam Deck details. Use official videos for a third category: how the interface and presentation look before you spend money. That gives readers a better decision stack than a simple score roundup.

## Buy Now If These Are Your Priorities

ZERO PARADES is a better launch-day fit if your main priorities are story density, unusual RPG systems, political or cultural worldbuilding, internal skill commentary, and the possibility that a failed roll creates a new scene. Those are the signals official materials keep emphasizing.

It is also a stronger fit for players who do not need an optimized route immediately. If you enjoy blind RPG runs, day one may be the most interesting time to play because community consensus has not yet flattened every choice into a recommended path.

Buy now if you want to meet Portofiro without a solved wiki beside you. That is the best version of a failure-forward RPG for many players: making choices before the community decides which ones are optimal, accepting pressure states before you know every recovery method, and letting a bad roll produce a version of Hershel Wilk that feels specific to your run. If you approach the game as a story-rich RPG rather than a checklist, early play may be a feature rather than a risk.

Buy now if Steam Deck Verified status is enough to get you started but you are willing to adjust settings or switch devices if text comfort is imperfect. Buy now if Simplified Chinese launch text or English voice-over matters to you and the current language support matches your needs. Buy now if you already watched the official Features & Gameplay Trailer or Deep Dive and the slow, talkative, visually stylized presentation is exactly what you want.

Do not buy now just because it is from ZA/UM. That is a weak purchase reason by itself. Buy it because the actual game pitch fits you: espionage CRPG, skill voices, dice checks, Tactical View, pressure, and dense writing.

## Wait If These Questions Matter

Wait for first-player reports if you need hard answers on performance across weaker PCs, accessibility, Steam Deck text comfort, save behavior, achievement difficulty, route structure, or how often Dramatic Encounters appear. Those are not good launch-eve promises. They are launch-week tests.

| Question | Why waiting helps |
| --- | --- |
| Is the writing consistently strong? | Only the full game can answer pacing and payoff |
| Does Tactical View matter? | Public descriptions do not prove frequency or depth |
| Is performance stable on your hardware? | Store requirements and review PCs are not universal benchmarks |
| Are choices meaningful? | Route consequences need complete-play evidence |

Wait if you are a PS5 player. Public sources point to PlayStation 5 in 2026, but not the May 21 PC date. Wait if you are sensitive to unresolved creator-credit debates around ZA/UM and Disco Elysium; reviews can judge the finished game, but they cannot make that personal decision for you. Wait if you only enjoy CRPGs once a best build, full choice map, and achievement roadmap are available. Those are normal search intents, but they should become separate pages after the community has evidence.

Wait if your language is listed as a later update rather than a launch language. French, Italian, Japanese, Korean, Polish, Portuguese (Brazilian), Traditional Chinese, and Turkish are planned as free updates later in 2026 according to ZA/UM's Reddit announcement. That does not make them available on day one unless the storefront changes. For a text-heavy game, playing in a preferred language can matter more than joining the first week.

## Launch Week Update Plan

After the May 21 PC release, this guide should be updated with hands-on notes: first-hour stability, text readability, controller and mouse comfort, Steam Deck battery and font comfort, achievement list behavior, save slots, early build recommendations, and whether the game deserves dedicated walkthrough, endings, choices, and build pages.

That update path is important for search quality. A useful launch-day buying guide should become a real buyer guide as soon as evidence exists. The first update should not try to solve the entire game. It should answer the purchase questions that block readers today: is the PC build stable, does it run well on minimum-ish hardware, is Steam Deck text readable, do achievements work, does Steam Cloud behave, and does the first chapter communicate its systems clearly?

The second update can branch into deeper pages. If players search heavily for endings, choices, builds, achievements, pressure states, or Tactical View routes, those should become focused URLs with tested evidence. If search demand stays centered on buying advice and Disco Elysium comparison, the hub should strengthen those pages instead of creating thin walkthroughs. That is the GEO rule for this launch: one page per real intent, not one page per guessed keyword.
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

This hub is intentionally narrow on launch day. It answers the questions players are already asking: whether the PC version unlocks today, whether it is like Disco Elysium, what the skill and encounter systems actually promise, whether it is single-player, and whether day-one buyers should wait for performance and route evidence.`,
  features: [
    'PC release date is May 21, 2026, with an 11:00 UTC / 19:00 China Standard Time unlock window',
    'Steam, Epic Games Store, and GOG storefronts are public',
    'PlayStation 5 version is listed for 2026, separate from the PC launch',
    'Steam currently lists the game as Steam Deck Verified',
    'Current launch price signal is $39.99',
    'Launch support includes full English voice-over plus German, Spanish (Latin America), Chinese (Simplified), and Russian text',
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
      question: 'How many guides should exist on launch day?',
      answer: 'Four is enough for now: release facts, Disco Elysium comparison, gameplay systems, and buying advice. Walkthrough, endings, and choices should wait for hands-on evidence.',
    },
  ],
};
