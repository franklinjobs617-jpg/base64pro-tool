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

const lastUpdated = '2026-05-20';
const hero = '/games/project-mist/hero.webp';
const shot = (index: number) =>
  `/games/project-mist/screenshots/project-mist-screenshot-${index}.webp`;

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
  players: 'Steam currently describes Project: Mist as playable solo or in seamless 1-4 player co-op',
  demo: 'Steam currently lists a playable demo',
  currentStatus: 'Released on Steam Early Access',
  xboxStatus: 'No official Xbox version is confirmed in the current store data.',
  steamReviewSignal: '7 Steam user reviews, not enough to generate a score at the latest check',
  achievementCount: '31 Steam achievements',
  introductoryOffer: 'Steam currently shows a 10% introductory offer ending May 26, 2026',
  earlyAccessDuration:
    'Steam says the developer expects Early Access to last approximately 6 months, though that may change with feedback and progress.',
  plannedFullVersion:
    'Steam says the full version is planned to add more bosses, enemies, skills, items, structures, systems, optimization, polish, and community-inspired features.',
  earlyAccessState:
    'Steam says all core features shown in the trailer, screenshots, and About This Game section are already implemented and playable in the Early Access version.',
  pricingPlan:
    'Steam says the price is expected to increase when the full version releases.',
};

const launchDayNote =
  'This is a post-launch Early Access guide set checked against the Steam store, Steam Community, and public gameplay coverage after the May 19, 2026 release. Project: Mist is available on Steam Early Access, but exact numbers, map routes, enemy weaknesses, save behavior, co-op edge cases, and final progression values still need hands-on verification.';

export const projectMistGuideContent: Record<string, ProjectMistGuide> = {
  'beginner-survival-guide': {
    title: 'Project: Mist Beginner Survival Guide',
    description:
      'A post-launch Project: Mist beginner guide for first-hour priorities, survival planning, base setup, Gravity Gun use, and what still needs hands-on verification.',
    lastUpdated,
    timeToRead: '15 min',
    primaryKeyword: 'project mist beginner guide',
    spoilerLevel: 'safe',
    verificationStatus: 'Steam-listed',
    heroImage: hero,
    heroImageAlt: 'Project: Mist open world island survival scene',
    sections: [
      { title: 'Post-Launch Survival Answer', id: 'pre-release-survival-answer' },
      { title: 'First Hour Priorities', id: 'first-hour-priorities' },
      { title: 'Mistake Checklist', id: 'mistake-checklist' },
      { title: 'Update Plan', id: 'launch-update-plan' },
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
## Post-Launch Survival Answer

${launchDayNote}

Project: Mist should be approached as a survival routing problem before it is approached as a combat game. Steam describes an open-world survival horror island with solo and online co-op play, a Gravity Gun, a moving train base, gear upgrades, giant creatures, critter catching, and abandoned facilities. That means a good first run is about building a stable loop: gather, scout, return, upgrade, and only then push deeper into danger.

The safest post-launch recommendation is still to avoid absolute promises until routes are tested. We do not yet have verified resource density, enemy damage, repair costs, hunger pressure, or train upgrade order. What we can say is that players should learn how the island communicates danger before committing rare materials. If the game rewards observation, then your first hour should produce information as much as loot.

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

## Update Plan

This guide should be updated with a tested first-hour route, safe starter base advice, confirmed resource names, and verified beginner mistakes. Until then, the useful value is preparation: know the systems, know what is confirmed, and know which claims should not be trusted yet.
`,
    faqs: [
      {
        question: 'Is this a full Project: Mist walkthrough?',
        answer:
          'No. This is a beginner guide with verified store facts and observed opening footage; exact full routes still need hands-on verification.',
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
  'first-steps-survival-guide': {
    title: 'Project: Mist First Steps Survival Guide',
    description:
      'A tutorial-style Project: Mist opening guide based on the current demo flow, covering the first chest, axe crafting, flashlight use, objective tracking, cooking, and the giant whale warning.',
    lastUpdated,
    timeToRead: '13 min',
    primaryKeyword: 'project mist first steps',
    spoilerLevel: 'safe',
    verificationStatus: 'Trailer-observed',
    heroImage: hero,
    heroImageAlt: 'Project: Mist first steps tutorial key art',
    sections: [
      { title: 'Wake Up and Take the First Supplies', id: 'wake-up-and-take-the-first-supplies' },
      { title: 'Learn the Core Buttons', id: 'learn-the-core-buttons' },
      { title: 'Craft the Axe Before You Wander', id: 'craft-the-axe-before-you-wander' },
      { title: 'Build the First Food Loop', id: 'build-the-first-food-loop' },
      { title: 'Do Not Fight the Whale', id: 'do-not-fight-the-whale' },
    ],
    sectionMedia: {
      'wake-up-and-take-the-first-supplies': {
        image: shot(1),
        alt: 'Project: Mist opening room screenshot for first steps',
        caption: 'The demo starts by giving you a room, a small chest, and a push toward the first objective.',
      },
      'learn-the-core-buttons': {
        image: shot(2),
        alt: 'Project: Mist interface screenshot for core buttons',
        caption: 'The first tutorial value is learning the interaction keys before the world opens up.',
      },
      'craft-the-axe-before-you-wander': {
        image: shot(3),
        alt: 'Project: Mist crafting and survival screenshot for axe crafting',
        caption: 'Craft the axe first so you can cut wood, open routes, and avoid wasting time on weak melee.',
      },
      'build-the-first-food-loop': {
        image: shot(4),
        alt: 'Project: Mist camp and resource screenshot for food loop setup',
        caption: 'A small cooking loop matters more than chasing combat before you understand the island.',
      },
      'do-not-fight-the-whale': {
        image: shot(5),
        alt: 'Project: Mist giant whale screenshot for hazard warning',
        caption: 'The floating power whale is a map-level hazard, not an early fight to test for fun.',
      },
    },
    videos: [videos.survivalPreview, videos.gravityGun, videos.gameplayPartOne],
    content: `
## Wake Up and Take the First Supplies

The opening scene gives you a clear objective and a small starter chest. The right move is not to roam aimlessly. Take the supplies, save immediately, and read the objective prompt before you start chopping or fighting. The transcript-backed opening flow is simple: learn the room, check the chest, and follow the first objective rather than trying to invent your own route.

| First-step action | Why it matters |
| --- | --- |
| Save immediately | Protects the run before you test anything risky |
| Open the starter chest | Gives you the first survival items without wandering blind |
| Read the objective prompt | Keeps you aligned with the intended tutorial flow |
| Leave the room only after checking tools | Prevents wasting stamina and resources on unnecessary detours |

## Learn the Core Buttons

The video makes the UI work matter more than combat. You see the close-talk key, the flashlight key, the inventory/crafting flow, and the objective tracker all before the world gets dangerous. For players, that means the first tutorial is not "how to kill things." It is "how to stop being lost."

| Input | What it does in the demo |
| --- | --- |
| \`T\` | Closes dialogue or interaction text |
| \`G\` | Toggles the flashlight |
| \`Tab\` | Opens building categories and utilities |
| \`Enter\` | Closes the craft station prompt |
| \`Space\` | Rotates pieces while building |
| \`Alt\` | Dodges or helps movement in risky spaces |

If you only remember two things from the transcript, remember the flashlight and the objective tracker. Dark survival games punish players who ignore visibility, and the bottom-left objective marker is the safest way to keep the first hour structured.

## Craft the Axe Before You Wander

The transcript shows the axe as the first real tool worth making. That is the correct survival priority because wood and light gathering matter before combat does. Once the axe is built, you can cut trees, clear space, and stop relying on whatever weak starter weapon the game gives you. The same opening also shows that melee against early threats is a bad trade unless you already know the enemy pattern.

The practical rule is simple: if the game hands you an upgrade path, take the utility tool before you take the hero swing. The axe helps with resource collection, route opening, and general map confidence. The crossbow or ranged tools may still be useful, but the video clearly shows that early, low-confidence melee is how you lose momentum.

## Build the First Food Loop

The first survival loop is not about perfect combat. It is about keeping food, water, and movement stable enough that the island stops feeling like a guess. The demo shows cooking station prompts, logs for building, and survival stats in the bottom-left. That means a good first route is: gather a log, learn the build menu, make the cooking station, then check whether your inventory actually supports a food loop before you push farther out.

Do not overbuild too early. The transcript shows the player discovering materials, a cooking station, and basic shelter ideas in the same opening stretch. That suggests Project: Mist wants a practical base rhythm, not a decorative one. Your first camp should exist to reduce friction: cook, store, recover, and leave.

One useful extra detail from the longer YouTube gameplay transcript is that the early route quickly starts tying survival basics to objective progress. The observed story prompt points the player toward entering the greenhouse to find a train gate key, and the route appears to open only after collecting the required mech part. That makes the first loop clearer: stabilize food and health first, then move on the greenhouse objective instead of wandering the island aimlessly.

## Do Not Fight the Whale

The floating power whale is the clearest "respect the world" moment in the video. It is tagged, marked on the map, and explicitly framed as something you should not provoke. That makes it a great tutorial lesson because a lot of survival players instinctively test big targets too early. In Project: Mist, that mindset is the wrong call.

Treat the whale as a danger signal, not a loot pinata. If a giant creature is floating, glowing, or clearly marked as a special hazard, do not use it as your first combat benchmark. Observe it, mark it, and move on. The value of the early game is learning where not to go as much as where to go.

## What This Tutorial Should Teach You

The best first-run loop from the transcript is not complicated: save, learn the keys, craft the axe, build a small survival loop, and keep your distance from world hazards until you understand the map. That is a real tutorial because it helps the player avoid the mistakes the video naturally highlights.

The same gameplay video also shows several practical early-game signals worth carrying into the guide. Bear traps are worth picking up. Boxes and crates may hide loot. Facility traversal can include acid-floor hazards and jump sections rather than only combat. Those are small details, but they make the page more useful because they come from actual route friction rather than generic survival filler.

After launch, this page should be updated with exact recipe names, final objective flow, and any real early-game combat rules that the full build confirms. Until then, the transcript already gives enough signal to make a useful tutorial rather than a speculative one.
`,
    faqs: [
      {
        question: 'Is this based on real gameplay or guesses?',
        answer: 'It is based on the current demo-style gameplay video and its visible UI flow, not on guessed routes.',
      },
      {
        question: 'What should I do first in Project: Mist?',
        answer: 'Save, take the starter supplies, learn the keys, craft the axe, and follow the first objective marker.',
      },
      {
        question: 'What is the first major objective shown in the current gameplay route?',
        answer: 'The observed gameplay route points the player toward the greenhouse to find a train gate key after basic setup and required part collection.',
      },
      {
        question: 'Should I fight the whale?',
        answer: 'No. The video frames it as a major hazard, so the safe move is to avoid provoking it.',
      },
      {
        question: 'What are the most useful early keys?',
        answer: 'The video shows `T`, `G`, `Tab`, `Enter`, `Space`, and `Alt` as the first useful controls to learn.',
      },
    ],
  },
  'release-date-platforms-guide': {
    title: 'Project: Mist Release Date, Platforms, and Early Access Guide',
    description:
      'A factual Project: Mist release date and platform guide covering Steam, the current demo, Early Access status, 1-4 player co-op, pricing notes, and what buyers should verify.',
    lastUpdated,
    timeToRead: '12 min',
    primaryKeyword: 'project mist release date',
    spoilerLevel: 'safe',
    verificationStatus: 'Steam-listed',
    heroImage: hero,
    heroImageAlt: 'Project: Mist release date guide key art',
    sections: [
      { title: 'Direct Answer', id: 'direct-answer' },
      { title: 'Steam and Demo Checklist', id: 'steam-and-demo-checklist' },
      { title: 'Buying On Launch Day', id: 'buying-before-launch' },
      { title: 'What Needs Verification', id: 'what-needs-verification' },
    ],
    sectionMedia: {
      'direct-answer': {
        image: shot(5),
        alt: 'Project: Mist landscape screenshot for release date answer',
        caption: 'Steam is the source of truth for the current launch date and feature labels.',
      },
      'steam-and-demo-checklist': {
        image: shot(6),
        alt: 'Project: Mist action screenshot for Steam and demo checklist',
        caption: 'Steam currently exposes the demo, solo play, seamless 1-4 player co-op, achievements, and cloud support.',
      },
      'buying-before-launch': {
        image: shot(7),
        alt: 'Project: Mist train and survival scene for buyer guidance',
        caption: 'Early Access buyers should expect systems to keep changing after release.',
      },
      'what-needs-verification': {
        image: shot(8),
        alt: 'Project: Mist mysterious facility screenshot for verification planning',
        caption: 'Performance, progression, co-op save behavior, and final tuning need hands-on testing.',
      },
    },
    videos: [videos.releaseDate, videos.survivalPreview, videos.gravityGun],
    content: `
## Direct Answer

Project: Mist released on Steam Early Access on ${projectMistFacts.displayReleaseDate}. The game is developed and published by ${projectMistFacts.developer}, and the Steam page presents it as an Early Access open-world survival horror game for PC. The store description highlights a remote island, multiplayer co-op, a Gravity Gun, a moving train base, giant creatures, critter catching, gear upgrades, and abandoned mysterious facilities.

This page has to be more precise than a generic release-date post because the game is already out. A good guide should say both things clearly: the release date was May 19, 2026, and the current verified platform is PC via Steam. Deeper guide claims still need testing because Early Access balance, performance, and co-op behavior can change quickly after launch.

| Item | Current listing | Verification status |
| --- | --- | --- |
| Release status | Released May 19, 2026 on Steam Early Access | Steam-listed |
| Platform | PC via Steam | Steam-listed |
| Xbox version | No official Xbox version is confirmed in the current store data | Needs official confirmation |
| Development model | Early Access | Steam-listed |
| Demo | Steam currently lists a playable demo | Steam-listed |
| Player count | Steam store copy says seamless 1-4 player co-op | Steam-listed |
| Steam achievements | 31 achievements | Steam-listed |
| Steam features | Online Co-op, Steam Cloud, Family Sharing | Steam-listed |
| Current review status | 7 Steam user reviews, not enough to generate a score at latest check | Steam-listed |
| Developer and publisher | Chicken Launcher | Steam-listed |
| Native console versions | Not confirmed in current store data | Needs official confirmation |

## Steam and Demo Checklist

Steam lists single-player, online co-op, Steam achievements, Steam Cloud, Family Sharing, adjustable difficulty, custom volume controls, playable without timed input, stereo sound, and surround sound. The current store copy is also more specific than a tag list alone because it explicitly says the game supports seamless 1-4 player co-op. That matters for users because "has co-op" and "supports four players" are very different buying questions.

Steam also currently exposes a demo. That is one of the biggest practical user questions because players can test the survival feel before buying Early Access. If a demo exists, say it plainly and tell the reader what it does not prove. A demo can confirm performance feel, tone, and some mechanics, but it does not automatically confirm final balance, save carryover, paid-build progression, or co-op stability.

For GEO and user trust, keep the label and the practical meaning separate. Say Steam lists seamless 1-4 player co-op. Do not invent dedicated servers, host migration, save rules, or shared-world ownership unless official documentation or hands-on testing confirms them.

## Buying After Early Access Launch

Project: Mist is an Early Access game, so buyers should expect changes to balancing, content amount, performance, UI, and progression. That is not a negative point by itself; it is the nature of Early Access. The useful buyer question after launch is whether the current concept matches what they want: survival horror, co-op island exploration, a mobile train base, and large-scale creature encounters, and whether they are comfortable buying before Steam has enough user reviews to generate a score.

Steam's Early Access section currently says all core features shown in the trailer, screenshots, and About This Game section are already implemented and playable in the Early Access version. It also says the price is planned to increase when the full version releases. Those two details are strong buyer-facing facts. They tell readers this is not a concept-only shell, but they also frame early access as the cheaper entry point for players who are comfortable with evolving systems.

Steam also says the developer expects Early Access to last approximately 6 months, though that may change with player feedback and development progress. The full version is planned to expand the current build with more bosses, enemies, skills, items, structures, gameplay systems, optimization, polish, and community-inspired features. That makes the buy-now decision clearer: buy for the current playable sandbox, not for every planned 1.0 feature.

Players who only want a fully finished map, complete story, final achievement guide, or optimized Steam Deck profile should wait for more post-launch reports. Players who enjoy watching systems evolve may benefit from getting in early, especially if they want to learn base building and co-op routes before broader competition.

## What Needs Verification

The first post-launch update should verify performance, controller support feel, save behavior, co-op session flow, achievement unlocks, resource names, crafting costs, train upgrades, and whether giant creature encounters are avoidable, farmable, or gated. Those details should not be guessed without hands-on testing.
`,
    faqs: [
      {
        question: 'When does Project: Mist release?',
        answer: 'Project: Mist released on Steam Early Access on May 19, 2026.',
      },
      {
        question: 'Is Project: Mist Early Access?',
        answer: 'Yes. Steam currently lists Project: Mist as an Early Access game.',
      },
      {
        question: 'Does Project: Mist have a demo?',
        answer: 'Yes. The current Steam page lists a playable demo.',
      },
      {
        question: 'How many players does Project: Mist support?',
        answer: 'Current Steam store copy describes Project: Mist as playable solo or in seamless 1-4 player co-op.',
      },
      {
        question: 'What platform is Project: Mist on?',
        answer: 'The currently verified platform is PC via Steam.',
      },
      {
        question: 'Is Project: Mist on Xbox?',
        answer:
          'No official Xbox version is confirmed in the current store data. The verified platform is PC via Steam.',
      },
      {
        question: 'Does Project: Mist have achievements?',
        answer: 'Steam lists Steam achievements, but exact achievement conditions still need hands-on verification.',
      },
    ],
  },
  'demo-player-count-pricing-guide': {
    title: 'Project: Mist Demo, Player Count, and Early Access Pricing Guide',
    description:
      'A practical Project: Mist guide covering demo availability, seamless 1-4 player co-op, current Early Access pricing signals, and the buyer questions that still need post-launch testing.',
    lastUpdated,
    timeToRead: '12 min',
    primaryKeyword: 'project mist demo',
    spoilerLevel: 'safe',
    verificationStatus: 'Steam-listed',
    heroImage: hero,
    heroImageAlt: 'Project: Mist demo and co-op buyer guide key art',
    sections: [
      { title: 'Direct Buyer Answer', id: 'direct-buyer-answer' },
      { title: 'What the Demo Confirms', id: 'what-the-demo-confirms' },
      { title: '1-4 Player Co-op Meaning', id: '1-4-player-co-op-meaning' },
      { title: 'Early Access Price and Wait-or-Buy Call', id: 'early-access-price-and-wait-or-buy-call' },
    ],
    sectionMedia: {
      'direct-buyer-answer': {
        image: shot(1),
        alt: 'Project: Mist island screenshot for demo and player count answer',
        caption: 'The current Steam page answers three immediate buyer questions: demo, release date, and player count.',
      },
      'what-the-demo-confirms': {
        image: shot(3),
        alt: 'Project: Mist creature scene used for demo coverage',
        caption: 'A demo is useful for feel and readability, but not enough to promise full-launch balance or progression details.',
      },
      '1-4-player-co-op-meaning': {
        image: shot(4),
        alt: 'Project: Mist exploration screenshot for 1-4 player co-op section',
        caption: 'Steam now gives a stronger co-op signal than a generic multiplayer tag by naming seamless 1-4 player co-op directly.',
      },
      'early-access-price-and-wait-or-buy-call': {
        image: shot(7),
        alt: 'Project: Mist train base screenshot for early access pricing section',
        caption: 'Steam says the price is planned to increase at full release, which matters for readers deciding whether to jump in during Early Access.',
      },
    },
    videos: [videos.releaseDate, videos.gravityGun, videos.survivalPreview],
    content: `
## Direct Buyer Answer

The current Steam page for Project: Mist gives three unusually useful post-launch facts in one place. First, the game released on Steam Early Access on May 19, 2026. Second, Steam currently lists a playable demo. Third, the store copy says the game can be played solo or in seamless 1-4 player co-op. Those facts matter because they answer the exact questions players ask before buying: can I try it, how many friends can join, and what does Early Access actually mean here?

| Buyer question | Current answer | Verification status |
| --- | --- | --- |
| Is there a Project: Mist demo? | Yes, Steam currently lists a demo | Steam-listed |
| How many players can play together? | Steam store copy says seamless 1-4 player co-op | Steam-listed |
| Is the launch an Early Access release? | Yes | Steam-listed |
| Will the price stay the same forever? | Steam says the price is planned to increase at full release | Steam-listed |
| Is there an introductory offer? | Steam currently shows a 10% offer ending May 26, 2026 | Steam-listed |
| Does the demo prove final optimization and save behavior? | No | Needs hands-on verification |

This is the kind of page that helps a user make a real decision. It does not pretend the whole survival loop is solved. It just tells readers what they can act on now.

## What the Demo Confirms

The demo matters because it lowers buyer risk. A demo can confirm whether Project: Mist's movement, atmosphere, visibility, interface readability, and general tension loop are actually appealing on your hardware. It can also help players decide whether the game's identity is strong enough to care about the Gravity Gun, giant creatures, and moving train base before spending money on the Early Access release.

What the demo should not be stretched into is a fake final review. A demo does not prove the later island structure, endgame crafting depth, creature variety, or co-op stability under post-launch load. It also does not prove that the paid Early Access build will behave exactly the same as the demo branch. That is why the strongest buyer-facing copy is conservative: use the demo to judge feel, not to promise late-game route quality.

## 1-4 Player Co-op Meaning

Project: Mist now has a stronger co-op answer than it did earlier in the content cluster. The current Steam store copy says the game is playable solo or in seamless 1-4 player co-op. That is more useful than a generic "online co-op" tag because it immediately answers group planning questions. A lot of survival players search co-op pages because they want to know whether the game is really built for a full friend group or only for a duo. Right now the safest public answer is that the intended upper range is four players.

That still leaves several post-launch questions open. Seamless 1-4 player co-op does not automatically explain who owns the world state, how reconnects work, whether a dedicated server exists, or whether creature pressure scales well from one player to four. Those details need testing in the paid build. But the top-level player-count question is strong enough to surface clearly on the hub and in buyer-facing FAQ content.

## Early Access Price and Wait-or-Buy Call

Steam's Early Access section currently says the price is planned to increase when the full version releases. That is important because it changes the buyer decision from "is this cheaper because it is unfinished?" to "is this an early entry point into a game that expects to grow?" Combined with the statement that the currently advertised core features are already implemented and playable, the page now supports a sharper recommendation.

Buy during Early Access if you specifically want to learn the systems early, join friends immediately, and do not mind missing polish or waiting for balance updates. Wait if your priority is a stable long-term progression read, a fully proven co-op structure, or better hardware/performance guidance. For user trust, that is the right framing: cheaper entry can be a benefit, but only for players whose tolerance matches what Early Access actually means.
`,
    faqs: [
      {
        question: 'Does Project: Mist have a demo on Steam?',
        answer: 'Yes. The current Steam page lists a playable demo.',
      },
      {
        question: 'How many players does Project: Mist support in co-op?',
        answer: 'Current Steam store copy says the game supports seamless 1-4 player co-op, alongside solo play.',
      },
      {
        question: 'Will Project: Mist get more expensive later?',
        answer: 'Steam currently says the price is planned to increase when the full version releases.',
      },
      {
        question: 'Should I buy Project: Mist now or wait?',
        answer: 'Buy now if you are comfortable with Early Access iteration and want to learn the systems early. Wait if you need verified performance, save behavior, and full co-op testing first.',
      },
    ],
  },
  'should-you-buy-project-mist-early-access-guide': {
    title: 'Should You Buy Project: Mist Early Access?',
    description:
      'A user-first Project: Mist buying guide for deciding whether to buy Early Access now, try the demo first, wait for more patches, or skip if you need console support.',
    lastUpdated,
    timeToRead: '13 min',
    primaryKeyword: 'should you buy project mist',
    spoilerLevel: 'safe',
    verificationStatus: 'Steam-listed',
    heroImage: hero,
    heroImageAlt: 'Project: Mist Early Access buyer guide key art',
    sections: [
      { title: 'Fast Buyer Verdict', id: 'fast-buyer-verdict' },
      { title: 'What Steam Reviews Mean Right Now', id: 'what-steam-reviews-mean-right-now' },
      { title: 'Demo Versus Early Access Build', id: 'demo-versus-early-access-build' },
      { title: 'Co-op Buyer Notes', id: 'co-op-buyer-notes' },
      { title: 'Wait If These Risks Matter', id: 'wait-if-these-risks-matter' },
    ],
    sectionMedia: {
      'fast-buyer-verdict': {
        image: shot(7),
        alt: 'Project: Mist train base screenshot for Early Access buyer verdict',
        caption: 'The best buying decision depends on whether you want the evolving survival sandbox now or a more stable version later.',
      },
      'what-steam-reviews-mean-right-now': {
        image: shot(5),
        alt: 'Project: Mist island screenshot for Steam review signal',
        caption: 'The early review count is still too small for a Steam score, so buyers should read specifics rather than treat it as a verdict.',
      },
      'demo-versus-early-access-build': {
        image: shot(3),
        alt: 'Project: Mist creature scene for demo versus Early Access comparison',
        caption: 'The demo is useful for feel, controls, and atmosphere, but it cannot prove late-game balance.',
      },
      'co-op-buyer-notes': {
        image: shot(4),
        alt: 'Project: Mist co-op exploration screenshot for buyer notes',
        caption: 'Co-op is one of the strongest reasons to buy, but session rules still need careful verification.',
      },
      'wait-if-these-risks-matter': {
        image: shot(8),
        alt: 'Project: Mist facility screenshot for Early Access risk checklist',
        caption: 'Players who need polished performance, final routes, or console support should wait for more evidence.',
      },
    },
    videos: [videos.releaseDate, videos.survivalPreview, videos.gravityGun],
    content: `
## Fast Buyer Verdict

Buy Project: Mist now if you want to join an evolving Early Access survival game, test the Gravity Gun, build around a moving train base, and play solo or with up to three friends in online co-op. Try the demo first if you mainly want to check performance, controls, UI readability, and atmosphere before paying. Wait if you need a polished full-release experience, verified late-game routes, stable co-op evidence, or an Xbox version.

${launchDayNote}

| Player situation | Best move | Why |
| --- | --- | --- |
| You like Early Access survival games | Buy if the current Steam facts and early review count feel acceptable | The core concept is already playable, but balance and polish can change |
| You are unsure about performance or feel | Try the demo first | The demo can answer basic movement, visibility, and hardware comfort questions |
| You want to play with friends | Buy only if everyone accepts Early Access risk | Steam lists seamless 1-4 co-op, but host saves, reconnects, and scaling need testing |
| You need Xbox or console support | Wait | The verified platform is PC via Steam; Xbox is not confirmed in current store data |
| You need a finished walkthrough or final map | Wait | Routes, recipes, creature weaknesses, and late-game systems still need capture |

This is not a review score page. It is a buying decision page. The user value is clarity: what is confirmed, what the demo can answer, and what still has to be proven by the paid Early Access build.

## What Steam Reviews Mean Right Now

Steam currently shows 7 user reviews for Project: Mist, which is not enough to generate a Steam review score. That matters because a tiny review pool can highlight useful issues, but it should not be treated as a stable verdict. Early Access survival games often receive feedback around performance, UI friction, bugs, content amount, and co-op stability, even when the underlying idea is interesting. A useful guide should not flatten a small sample into "good" or "bad" without reading the substance of player reports.

Use the review count as a caution marker. If you are excited by the premise and comfortable with rough edges, the lack of a score may not be a dealbreaker. If you only buy polished survival games after systems settle, wait for more reviews, patches, and specific player reports.

## Demo Versus Early Access Build

The demo is the safest first step for undecided players. It can tell you whether Project: Mist feels good on your PC, whether the atmosphere works, whether the UI is readable, and whether the survival loop sounds appealing. It can also help you decide if the Gravity Gun, giant creatures, and train-base premise are worth following.

The demo cannot prove everything. It does not guarantee save carryover, final optimization, late-game crafting depth, long-session co-op stability, full map quality, or how often the train base becomes meaningful after the opening hours. Use it as a feel check, not as proof that every paid-build system is solved.

## Co-op Buyer Notes

Co-op is one of Project: Mist's strongest buying hooks because Steam describes the game as playable solo or in seamless 1-4 player co-op. That makes it more attractive for groups than a survival game with vague multiplayer plans. But a buyer still needs practical answers before committing a whole group.

| Co-op question | Current answer | Verification status |
| --- | --- | --- |
| Does the game support online co-op? | Yes | Steam-listed |
| How many players? | Solo or seamless 1-4 player co-op | Steam-listed |
| Who owns the world save? | Not clearly verified here | Needs hands-on verification |
| Can friends reconnect cleanly? | Not clearly verified here | Needs hands-on verification |
| Does enemy pressure scale with group size? | Not clearly verified here | Needs hands-on verification |

If you are buying for a group, test one short session before treating it as your main co-op world. Confirm who hosts, how saves behave, whether loot sharing feels fair, and whether everyone can run the game comfortably.

## Wait If These Risks Matter

Wait if you need a stable finished game, a full map, a route-optimized walkthrough, confirmed best gear, verified creature weaknesses, polished controller support, or console availability. Those are legitimate needs, but they are not what Early Access is best at on day one.

The stronger post-launch strategy is to let the first wave of player reports answer the risky questions. If reviews improve, patches land quickly, and co-op reports are stable, the buying case becomes stronger. If reports focus on performance, unclear progression, or session issues, waiting will probably save frustration.
`,
    faqs: [
      {
        question: 'Should I buy Project: Mist Early Access now?',
        answer:
          'Buy now if you like evolving survival games and accept Early Access risk. Try the demo first if performance, controls, or feel are your main concern.',
      },
      {
        question: 'Should I try the Project: Mist demo before buying?',
        answer:
          'Yes. The demo is the safest way to check performance, movement, UI readability, and atmosphere before paying for Early Access.',
      },
      {
        question: 'Is Project: Mist worth it for co-op?',
        answer:
          'It may be, because Steam lists seamless 1-4 player co-op, but host saves, reconnects, loot sharing, and scaling still need hands-on verification.',
      },
      {
        question: 'Should Xbox players buy Project: Mist?',
        answer:
          'Xbox players should wait. The currently verified platform is PC via Steam, and no official Xbox version is confirmed in current store data.',
      },
    ],
  },
  'multiplayer-coop-guide': {
    title: 'Project: Mist Multiplayer and Co-op Guide',
    description:
      'A post-launch Project: Mist multiplayer guide covering Steam-listed online co-op, group roles, host saves, reconnect questions, loot sharing, scaling risks, and verification needs.',
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

Steam currently lists Project: Mist with single-player, multiplayer, co-op, and online co-op. The store copy also says solo or seamless 1-4 player co-op, which is enough to answer the basic question: yes, Project: Mist is presented as a co-op survival game. It is not enough to answer deeper questions about servers, world ownership, save transfer, reconnect behavior, loot sharing, or scaling. Those details should be verified in the paid Early Access build.

The safest post-launch wording is that online co-op and 1-4 player support are Steam-listed, while practical session behavior still needs testing. Survival games often live or die by practical co-op details: can friends join an existing world, who keeps the save, how death works, whether resources are shared, and whether enemies scale with player count.

| Question | Current answer | Verification status |
| --- | --- | --- |
| Is co-op listed? | Yes, Steam lists co-op and online co-op | Steam-listed |
| Is solo supported? | Yes, Steam lists single-player | Steam-listed |
| How many players are listed? | Solo or seamless 1-4 player co-op | Steam-listed |
| Are dedicated servers confirmed? | Not confirmed from Steam feature tags alone | Needs hands-on verification |
| Can players reconnect cleanly? | Not confirmed from Steam feature tags alone | Needs hands-on verification |
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
          'Steam store copy says solo or seamless 1-4 player co-op. Practical scaling and session behavior still need hands-on verification.',
      },
    ],
  },
  'gravity-gun-guide': {
    title: 'Project: Mist Gravity Gun Guide',
    description:
      'A post-launch Project: Mist Gravity Gun guide explaining confirmed uses, combat planning, object manipulation, co-op utility, and limits that need testing.',
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

Do not build early guides around assumed damage numbers. The useful post-launch approach is to define test categories. Does the tool lift heavy objects? Does it interrupt enemy attacks? Does it consume energy? Can it move base materials? Does it work on giant creatures or only smaller threats? These are the questions that should shape the next update.

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
          'That is not verified yet. Treat giant creature interactions as a hands-on test item.',
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
      'A post-launch Project: Mist train base guide covering the moving base concept, upgrade priorities, defense planning, storage, and verification needs.',
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

The next guide update should capture upgrade names, material costs, build limits, placement rules, whether the train has health, whether it needs fuel, and whether co-op players share build permissions. These details should replace assumptions as soon as hands-on testing is available.
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
      'A post-launch Project: Mist creatures guide for giant creature encounters, observation, combat caution, escape planning, and verification needs.',
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

Project: Mist markets giant creatures as a major survival threat. Steam says players can fight giant creatures, catch critters, and survive a hostile world shaped by abandoned facilities. Trailer footage supports the large-creature hook, but a responsible guide should not invent a bestiary without testing. Names, health, loot, weaknesses, spawn rules, and biome behavior all need hands-on capture.

The best early post-launch advice is to treat creatures as systems to study. Watch pathing, sound cues, aggro distance, safe terrain, whether the Gravity Gun works on them, and whether the train base can be used as a retreat. If a creature is too large to fight early, the correct strategy may be avoidance or environmental routing.

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
          'That is not verified yet. Some creatures may be hazards, bosses, or avoidance challenges.',
      },
      {
        question: 'Will this guide list all weaknesses?',
        answer:
          'Only after hands-on testing. Untested weakness lists would be unreliable.',
      },
    ],
  },
  'crafting-gear-upgrades-guide': {
    title: 'Project: Mist Crafting and Gear Upgrades Guide',
    description:
      'A post-launch Project: Mist crafting guide covering gear upgrades, resources, critter catching, food loops, and what still needs verification.',
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

Steam says Project: Mist lets players upgrade gear, build a moving train base, catch critters, and survive a hostile island. That strongly implies crafting and resource routing are central, but exact recipe names, station types, material costs, and upgrade tiers are not fully verified here yet. This guide should prepare the framework, then replace placeholders with tested values.

The best early upgrade logic is survival first, damage second, convenience third. In a hostile open world, the strongest early upgrade is often the one that lets you return alive with more resources, not the one with the largest number on a weapon.

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

One of the stronger additions from the long-form YouTube gameplay transcript is that it surfaces a few concrete crafting-adjacent observations without pretending the whole recipe tree is solved. The player reaches a facility with a crafting bench, notes that copper can be used to make more ammo, finds a distiller and filtered water, and picks up a frag grenade blueprint. They also loot a Blaze Fern Trinket that gives a 30% weapon-damage increase at full health, plus better boots. That is enough to strengthen the page in a user-first way: facilities are not only lore spaces, they appear to be early upgrade and utility checkpoints.

| Observed item or station | What it suggests | Evidence type |
| --- | --- | --- |
| Crafting bench | Facilities may contain upgrade stations instead of only loot boxes | Gameplay-video observed |
| Copper for ammo | Ammunition may rely on material conversion rather than pure drops | Gameplay-video observed |
| Distiller and filtered water | Water processing may matter as a real survival utility loop | Gameplay-video observed |
| Frag grenade blueprint | Blueprints appear to be a real progression hook | Gameplay-video observed |
| Blaze Fern Trinket | Gear bonuses can meaningfully affect combat, at least in observed builds | Gameplay-video observed |

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
      {
        question: 'Has any real crafting station or blueprint been seen in gameplay?',
        answer: 'Yes. A longer gameplay transcript shows a crafting bench, a distiller, filtered water, copper ammo notes, and a frag grenade blueprint, but the full recipe tree is still not verified.',
      },
    ],
  },
  'map-facilities-guide': {
    title: 'Project: Mist Map and Facilities Guide',
    description:
      'A post-launch Project: Mist map guide for island exploration, abandoned facilities, route notes, landmarks, and the mapping verification plan.',
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

Project: Mist is described as an open-world survival horror game on a remote island with abandoned mysterious facilities. That is enough to plan a map guide, but not enough to publish a complete map without walking it. The correct structure is a mapping framework: landmarks, safe loops, facility entrances, resource zones, creature zones, train routes, and return points.

Open-world survival maps are useful when they answer route questions. Where can I go safely? What do I need before entering a facility? Where can I return to the train? Which areas are likely dangerous? A screenshot gallery alone is not enough.

## Exploration Framework

Start from the train base and create loops. A loop should have an objective, resource expectation, risk level, and return route. Early loops should be short. Facility loops should begin only after you know whether there are locks, power requirements, environmental hazards, or enemy density. If the Gravity Gun opens paths, mark those paths separately from normal movement.

For co-op, map communication matters. Use simple names for landmarks: broken tower, beach facility, red pipe station, giant rib field. These names can be replaced with official map labels later, but they help groups coordinate before the full map is known.

The longer YouTube gameplay transcript gives one genuinely useful example route: a greenhouse objective tied to finding a train gate key, with the approach gated by prior progress and the interior mixing combat, traversal, and utility loot. That is valuable because it shows facilities are not only map pins. They may be progression gates with vertical navigation, hazard floors, shutters, hidden loot behind crates, and station access.

## Facility Checklist

| Facility detail | Why it matters | Verification status |
| --- | --- | --- |
| Entrance location | Helps players plan routes from the train | Needs hands-on verification |
| Access requirement | Tools, power, key items, or combat may gate entry | Needs hands-on verification |
| Threat type | Facility enemies may differ from island creatures | Needs hands-on verification |
| Loot category | Determines whether a facility is worth repeating | Needs hands-on verification |
| Exit route | Survival value depends on leaving safely | Needs hands-on verification |

For the greenhouse-style route seen in gameplay, add a second layer to the checklist:

| Observed greenhouse route detail | Why it matters | Evidence type |
| --- | --- | --- |
| Objective points to train gate key | Confirms facilities may unlock travel progression | Gameplay-video observed |
| Acid or corrosive floor hazards | Traversal risk is not only enemy damage | Gameplay-video observed |
| Crates can hide loot | Thorough room clearing has real reward value | Gameplay-video observed |
| Interior stations and blueprints | Facilities may double as upgrade checkpoints | Gameplay-video observed |

## Launch Mapping Rules

Do not publish a complete map until it has been walked. For the next update, prioritize a starter route, first facility route, safe resource loop, train stop notes, and any high-danger zones. Mark every untested branch as unverified. The map guide should earn trust by being honest about what has and has not been captured.
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
        question: 'What is one facility objective already seen in gameplay?',
        answer:
          'A longer gameplay route shows the player entering a greenhouse to find a train gate key, which suggests facilities can gate travel progression rather than serving as optional side areas only.',
      },
      {
        question: 'Will this page include a full map?',
        answer:
          'It should be updated with tested routes and landmarks. Untested full maps would be speculative.',
      },
    ],
  },
};

export const projectMistGuideOrder = [
  'beginner-survival-guide',
  'first-steps-survival-guide',
  'release-date-platforms-guide',
  'demo-player-count-pricing-guide',
  'should-you-buy-project-mist-early-access-guide',
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
  overview: `Project: Mist is a released Early Access open-world survival horror game from ${projectMistFacts.developer}. It launched on Steam Early Access on ${projectMistFacts.displayReleaseDate}. The current Steam page also exposes a playable demo and describes the game as playable solo or in seamless 1-4 player co-op. It highlights a Gravity Gun, a moving train base, giant creatures, critter catching, gear upgrades, and abandoned mysterious facilities.

This hub is intentionally built as a post-launch answer center. It separates what Steam and public gameplay already confirm from what still needs hands-on verification in the paid Early Access build.`,
  features: [
    'Released on Steam Early Access on May 19, 2026',
    'Steam currently lists a playable demo',
    'Developed and published by Chicken Launcher',
    'Early Access open-world survival horror',
    'Steam store copy says seamless 1-4 player co-op',
    'Steam lists 31 achievements, Steam Cloud, and Family Sharing',
    'Steam currently shows 7 user reviews, not enough to generate a score at the latest check',
    'No official Xbox version is confirmed in the current store data',
    'Gravity Gun for manipulating objects and enemies',
    'Moving train base, gear upgrades, critter catching, and giant creatures',
    'Steam says the price is planned to increase at full release',
    'Guide pages use verification labels to avoid fake post-launch certainty',
  ],
  guides: projectMistGuides,
  tips: [
    'Start with the release date, demo, and buy-or-wait guides if you are deciding whether to buy Early Access now.',
    'Use the first-steps tutorial if you want a clean opening loop from the current gameplay video.',
    'Use the multiplayer guide before planning a group world.',
    'Treat creature weaknesses, map routes, and crafting costs as unverified until the paid Early Access build is tested.',
    'Watch Gravity Gun and train base systems first because they define the game identity.',
    'Prioritize the real player questions first: Xbox status, performance, save behavior, doors and base building, languages, and co-op session rules.',
  ],
  faq: [
    {
      question: 'When does Project: Mist release?',
      answer: 'Project: Mist released on Steam Early Access on May 19, 2026.',
    },
    {
      question: 'Is Project: Mist multiplayer?',
      answer: 'Yes. Current Steam store copy says Project: Mist supports solo play or seamless 1-4 player co-op.',
    },
    {
      question: 'Is Project: Mist Early Access?',
      answer: 'Yes. Steam currently lists Project: Mist as an Early Access game.',
    },
    {
      question: 'Does Project: Mist have a demo?',
      answer: 'Yes. The current Steam page lists a playable demo.',
    },
    {
      question: 'Is Project: Mist on Xbox?',
      answer: 'No official Xbox version is confirmed in the current store data. The verified platform is PC via Steam.',
    },
    {
      question: 'Can you build a train base?',
      answer: 'Yes. Steam describes building a moving train base as a core feature.',
    },
  ],
};
