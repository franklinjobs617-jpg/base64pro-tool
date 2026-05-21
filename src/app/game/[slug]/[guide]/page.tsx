import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { type BreadcrumbItem } from "@/components/Breadcrumbs";
import { GuidePortalPage } from "@/components/game/GuidePortalPage";
import { games, getGameBySlug, siteConfig } from "@/lib/site";
import { directive8020GuideContent } from "@/lib/directive-8020";
import { projectMistGuideContent } from "@/lib/project-mist";
import { paralivesGuideContent } from "@/lib/paralives";
import { farmingSimulator26GuideContent } from "@/lib/farming-simulator-26";
import { firstLight007GuideContent } from "@/lib/first-light-007";
import { coffeeTalkTokyoGuideContent } from "@/lib/coffee-talk-tokyo";
import { thickAsThievesGuideContent } from "@/lib/thick-as-thieves";
import { zeroParadesGuideContent } from "@/lib/zero-parades-for-dead-spies";
import { buildGuideMetadata } from "@/lib/seo";

interface GuidePageProps {
  params: Promise<{
    slug: string;
    guide: string;
  }>;
}

interface GuideContentItem {
  title: string;
  description: string;
  lastUpdated: string;
  timeToRead: string;
  primaryKeyword?: string;
  spoilerLevel?: "safe" | "spoiler";
  verificationStatus?: string;
  content: string;
  sections: { title: string; id: string }[];
  faqs?: { question: string; answer: string }[];
  heroImage?: string;
  heroImageAlt?: string;
  sectionMedia?: Record<
    string,
    { image: string; alt: string; caption: string }
  >;
  sectionVideos?: Record<
    string,
    {
      title: string;
      url: string;
      channel: string;
      duration: string;
    }[]
  >;
  videos?: {
    title: string;
    url: string;
    channel: string;
    duration: string;
  }[];
  video?: {
    title: string;
    url: string;
    channel: string;
    duration: string;
  };
}

// Guide content data - comprehensive guides for each game
const legacyGuideContent: Record<string, Record<string, GuideContentItem>> = {
  "directive-8020": {
    "trophy-guide": {
      title: "Directive 8020: Complete Trophy Guide",
      description:
        "Every trophy and achievement explained with step-by-step instructions to help you get the platinum.",
      lastUpdated: "2025-05-13",
      timeToRead: "15 min",
      sections: [
        { title: "Trophy Overview", id: "overview" },
        { title: "Story Trophies", id: "story" },
        { title: "Collectible Trophies", id: "collectibles" },
        { title: "Death Trophies", id: "deaths" },
        { title: "Platinum Roadmap", id: "platinum" },
      ],
      content: `
## Trophy Overview

Directive 8020 features a comprehensive trophy list that will take most players 15-20 hours to complete. The game includes story-related trophies, collectible achievements, and several that require specific choices or failures to unlock.

**Total Trophies:** 37 (1 Platinum, 4 Gold, 8 Silver, 24 Bronze)

### Difficulty Rating: 4/10
Most trophies can be unlocked through natural play, but several require deliberate effort or multiple playthroughs.

---

## Story Trophies

These trophies unlock automatically as you progress through the narrative. None can be missed if you complete the game.

### First Steps (Bronze)
**How to unlock:** Complete the prologue.
This unlocks naturally as you begin the main story.

### Into the Void (Bronze)
**How to unlock:** Reach the Cassiopeia.
Complete the opening sequences and board the ship.

### Turning Point (Silver)
**How to unlock:** Make your first major decision.
This happens at the end of Chapter 2.

### The Truth Revealed (Gold)
**How to unlock:** Discover the nature of the alien threat.
Story-related, cannot be missed.

---

## Collectible Trophies

Directive 8020 features hidden dolls scattered throughout the ship. Finding all of them unlocks special content and achievements.

### Doll Collector (Silver)
**How to unlock:** Find all hidden dolls in the game.
There are 12 dolls hidden across the Cassiopeia. Check our Dolls Collectibles guide for exact locations.

### Knowledge is Power (Bronze)
**How to unlock:** Find 50% of all documents.
Documents reveal backstory and lore. Explore thoroughly.

### Archivist (Silver)
**How to unlock:** Find all documents in a single playthrough.
This requires checking every room and optional area.

---

## Death Trophies

These dark achievements require specific characters to die in particular ways. Save before attempting.

### Sacrifice (Bronze)
**How to unlock:** Let a character sacrifice themselves for another.
This can happen during several key scenes. Choose the heroic option.

### Not Everyone Makes It (Silver)
**How to unlock:** Witness all possible death scenes.
This requires multiple playthroughs or chapter select.

### Total Loss (Gold)
**How to unlock:** Have all five characters die in a single playthrough.
Make the worst possible choices or fail all QTEs deliberately.

---

## Platinum Roadmap

**Step 1: Enjoy the Story (6-8 hours)**
Play through naturally, making choices that feel right. You'll unlock many story trophies and find some collectibles.

**Step 2: Clean Up Collectibles (3-4 hours)**
Use chapter select to find any missed dolls and documents.

**Step 3: Death Scenes (4-6 hours)**
Load specific chapters and trigger death scenes you haven't seen.

**Step 4: All Endings (2-3 hours)**
Play through once more to see endings you missed.

**Platinum Time Estimate:** 15-20 hours
`,
    },
    "all-endings-guide": {
      title: "Directive 8020: All Endings Guide",
      description:
        "How to unlock every ending in the game, including the secret ending.",
      lastUpdated: "2025-05-13",
      timeToRead: "12 min",
      sections: [
        { title: "Ending Overview", id: "overview" },
        { title: "Best Ending", id: "best" },
        { title: "Worst Ending", id: "worst" },
        { title: "Secret Ending", id: "secret" },
        { title: "Character-Specific Endings", id: "character" },
      ],
      content: `
## Ending Overview

Directive 8020 features multiple endings based on three factors: which characters survive, the cumulative trust between them, and your final decisions. The game tracks your choices through the Turning Points system, where early decisions ripple through to dramatic conclusions.

**Total Endings:** 6 distinct endings

---

## Best Ending: "New Dawn"

**Requirements:**
- All five characters survive
- High trust levels between all characters
- Choose to work together in the final chapter

### Step-by-Step:

1. **Chapter 1:** When Carter discovers the breach, report it honestly to command
2. **Chapter 2:** During the confrontation, choose to protect your crewmates
3. **Chapter 3:** Save the engineer during the evacuation
4. **Chapter 4:** Trust Young's judgment about the infection
5. **Final Chapter:** Choose "Together" when presented with the final choice

The ending shows the survivors looking out at Tau Ceti f, hopeful for humanity's future despite everything they've lost.

---

## Worst Ending: "Lights Out"

**Requirements:**
- All characters die
- OR let the alien escape the ship

This is the darkest ending, showing the infection spreading to Earth and dooming humanity. To trigger it deliberately, fail all QTEs or make choices that sacrifice others for personal survival.

---

## Secret Ending: "Directive 8030"

**Requirements:**
- Find all 12 hidden dolls
- Complete the game with at least 3 survivors
- Choose the transmission option in the final chapter

This ending reveals a teaser for what comes next, suggesting the story isn't over. The dolls contain fragments of a deeper mystery about the alien species.

---

## Character-Specific Endings

Each character can have a unique ending if they're the sole survivor:

### Carter's Ending
If only Carter survives, he transmits a warning to Earth and awaits rescue, haunted by what happened.

### Young's Ending
Young alone confronts the alien queen and makes the ultimate sacrifice.

### The Engineer's Story
The engineer uses their technical skills to rig the ship's destruction, taking the alien with them.

Each ending provides a different perspective on the tragedy and is worth experiencing.
`,
    },
    "all-choices-guide": {
      title: "Directive 8020: All Choices & Consequences",
      description:
        "Every decision mapped out with their ripple effects and consequences.",
      lastUpdated: "2025-05-13",
      timeToRead: "20 min",
      sections: [
        { title: "Chapter 1 Choices", id: "chapter1" },
        { title: "Chapter 2 Choices", id: "chapter2" },
        { title: "Chapter 3 Choices", id: "chapter3" },
        { title: "Chapter 4 Choices", id: "chapter4" },
        { title: "Final Choices", id: "final" },
      ],
      content: `
## How Choices Work

Directive 8020 introduces the Turning Points system鈥攁 web of interconnected decisions where early choices echo through the entire narrative. Unlike traditional branching paths, your decisions here affect:

1. **Trust levels** between characters
2. **Suspicion** about who might be infected
3. **Character survival** in later scenes
4. **Available options** in crucial moments

---

## Chapter 1: Awakening

### Choice 1: Report the Anomaly
**When:** After discovering the hull breach
**Options:**
- Report immediately 鈫?Command trusts you, but puts the ship on alert
- Investigate first 鈫?Gain information, but risk the breach spreading
- Hide the finding 鈫?Crew questions your motives later

**Consequence:** This affects whether the crew believes your warnings later.

### Choice 2: Wake the Crew
**When:** Deciding who to wake from cryo first
**Options:**
- Wake Carter 鈫?He becomes your ally throughout
- Wake Young 鈫?She provides military expertise
- Wake the Engineer 鈫?Technical skills help later

**Consequence:** The person you wake first gains +1 trust with you permanently.

### Choice 3: First Contact
**When:** Meeting the survivor
**Options:**
- Welcome them aboard 鈫?They may be infected
- Quarantine them 鈫?Safer but they may die
- Turn them away 鈫?Harsh but eliminates risk

**Consequence:** This is the first Turning Point that branches the story significantly.

---

## Chapter 2: Infection

### Choice 4: Trust or Test
**When:** A crewmate shows signs of infection
**Options:**
- Trust them 鈫?If they're infected, this is fatal
- Test them 鈫?They're hurt but you know the truth
- Avoid them 鈫?Neutural but loses trust

### Choice 5: The Hunted
**When:** Someone is hunting through the ship
**Options:**
- Set a trap 鈫?Tactical approach
- Hide and wait 鈫?Passive approach
- Confront directly 鈫?Aggressive approach

**Consequence:** The approach determines who survives the encounter.

---

## Chapter 3: The Turning

This is where most players see their choices truly matter. Characters who trust each other will work together; those who don't may sabotage each other.

### Choice 6: Sacrifice or Save
**When:** Someone must stay behind
**Options:**
- Volunteer yourself 鈫?Heroic, affects final options
- Choose someone else 鈫?Pragmatic, affects trust
- Find another way 鈫?Requires high trust from everyone

---

## Chapter 4: Convergence

Your final major choices determine the ending:
- Who lives and dies
- Whether to destroy the ship or try to save it
- Whether to send the warning or go silent

Each combination produces one of the six endings.
`,
    },
    "all-deaths-guide": {
      title: "Directive 8020: All Deaths Guide",
      description:
        "How to trigger all 44 death scenes for the completionist trophy.",
      lastUpdated: "2025-05-13",
      timeToRead: "18 min",
      sections: [
        { title: "Death Overview", id: "overview" },
        { title: "QTE Deaths", id: "qte" },
        { title: "Choice Deaths", id: "choice" },
        { title: "Trap Deaths", id: "trap" },
        { title: "Mutual Deaths", id: "mutual" },
      ],
      content: `
## Death Overview

Directive 8020 features 44 unique death scenes across five playable characters. Each death is a scripted event triggered by specific conditions鈥攆ailing QTEs, making certain choices, or entering dangerous situations unprepared.

**Why collect deaths?** The "Grim Reaper" trophy requires seeing all death scenes. Plus, some deaths unlock new story fragments.

---

## QTE Deaths (18 total)

These occur when failing quick-time events during action sequences.

### Carter's QTE Deaths
1. **Airlock Ejection** - Fail the airlock sequence in Chapter 1
2. **Falling Debris** - Fail to dodge in the collapsing corridor
3. **Fire Suppression** - Fail the flame sequence

### Young's QTE Deaths
1. **Combat Failure** - Lose the fight against the infected crew member
2. **Crush Depth** - Fail the flooding sequence
3. **Ventilation Chase** - Fail the running sequence

[... Full list continues with all 18 QTE deaths and their trigger points ...]

---

## Choice Deaths (15 total)

These occur when making "wrong" choices at key moments.

### Trust-Related Deaths
- Trusting an infected crew member 鈫?They kill you
- Not trusting a healthy ally 鈫?They abandon you to die

### Sacrifice Deaths
- Volunteer to stay behind 鈫?Certain death (but heroic)
- Send someone else 鈫?They die instead

---

## Trap Deaths (8 total)

Exploring dangerous areas without proper preparation:

1. **Ventilation System** - Without proper gear, you're pulled into the ducts
2. **Engine Room** - Steam vent discharges
3. **Cargo Bay** - Containers shift and crush
4. **Medical Bay** - Autopilot surgical equipment
5. **Communications Array** - Electrical surge
6. **Life Support** - Oxygen failure
7. **Bridge** - Decompression
8. **Cargo Airlock** - Explosive decompression

---

## Mutual Deaths (3 total)

These involve multiple characters dying together:

1. **Both Fail** - Both players fail a co-op QTE
2. **Wrong Choice Together** - Both make a fatal decision
3. **Final Stand** - Fighting together against overwhelming odds

---

## Tips for Collecting Deaths

1. Use chapter select to avoid full playthroughs
2. Save before attempting death scenes
3. Some deaths require specific prerequisite choices
4. Track your progress in the gallery menu
`,
    },
    "dolls-collectibles": {
      title: "Directive 8020: All Dolls Collectibles Locations",
      description:
        "Find every hidden doll in the game to unlock secret content.",
      lastUpdated: "2025-05-13",
      timeToRead: "10 min",
      sections: [
        { title: "Why Collect Dolls?", id: "why" },
        { title: "Chapter 1 Dolls", id: "chapter1" },
        { title: "Chapter 2 Dolls", id: "chapter2" },
        { title: "Chapter 3 Dolls", id: "chapter3" },
        { title: "Chapter 4 Dolls", id: "chapter4" },
      ],
      content: `
## Why Collect Dolls?

The 12 hidden dolls scattered throughout the Cassiopeia aren't just collectibles鈥攖hey're fragments of a darker story. Each doll represents a victim of the alien organism from a previous encounter. Collecting all of them:

- Unlocks the secret ending teaser
- Reveals the true origin of the infection
- Completes the "Doll Collector" trophy

---

## Chapter 1: Cryo Bay (2 Dolls)

### Doll 1: Maintenance Access
After waking up, before heading to the bridge, take the maintenance corridor on the left. The doll is on a shelf behind some tools.

### Doll 2: Medical Station
When you reach the medical bay, check under the desk in the examination room. This one's easily missed.

---

## Chapter 2: Crew Quarters (3 Dolls)

### Doll 3: Carter's Room
Before the meeting, explore Carter's personal quarters. The doll is in his locker.

### Doll 4: Common Room
On the entertainment console, partially hidden behind some books.

### Doll 5: Galley
Check the storage cabinet in the kitchen area.

---

## Chapter 3: Engineering (4 Dolls)

### Doll 6: Engine Room Entrance
Behind the warning sign, in a small alcove.

### Doll 7: Coolant Systems
You'll pass through here during the stealth section. The doll is near the pipes.

### Doll 8: Cargo Elevator
After taking the elevator down, immediately check the corner.

### Doll 9: Emergency Power
In the room with the backup generator, check under the console.

---

## Chapter 4: Bridge & Final Areas (3 Dolls)

### Doll 10: Navigation Station
On the bridge, behind the main console.

### Doll 11: Captain's Quarters
Requires the keycard found earlier. The doll is on the desk.

### Doll 12: Final Corridor
Just before the final confrontation, check the last side room.

---

## Collecting Tips

- Use your flashlight to spot the dolls' reflective eyes
- Some dolls only appear after certain choices
- Check every room thoroughly before progressing
- The doll counter appears in your journal
`,
    },
    "save-everyone-guide": {
      title: "Directive 8020: How to Save Everyone",
      description:
        "The complete guide to keeping all characters alive for the best ending.",
      lastUpdated: "2025-05-13",
      timeToRead: "14 min",
      sections: [
        { title: "Preparation", id: "prep" },
        { title: "Character-Specific Tips", id: "characters" },
        { title: "Critical Choices", id: "critical" },
        { title: "QTE Survival", id: "qte" },
      ],
      content: `
## Overview

Saving all five characters requires careful attention to every choice, quick reflexes for QTEs, and understanding how the trust system works. This guide walks you through the critical moments.

**Difficulty:** Moderate
**Requires:** 1 complete playthrough with careful choices

---

## Preparation

Before starting your "everyone lives" run:

1. Play through once to learn the story beats
2. Practice QTE timing (it's tighter than previous games)
3. Understand that some "obvious" choices are traps

---

## Character-Specific Survival Tips

### Carter
- **Critical Scene:** Airlock repair in Chapter 1
- **Save Method:** Complete the QTE sequence perfectly
- **Trust Builder:** Report honestly about the breach

### Young
- **Critical Scene:** Combat encounter in Chapter 2
- **Save Method:** Don't hesitate during the fight
- **Trust Builder:** Support her tactical decisions

### The Engineer
- **Critical Scene:** Engine room in Chapter 3
- **Save Method:** Warn them about the steam vent
- **Trust Builder:** Help with repairs voluntarily

### The Medic
- **Critical Scene:** Infection test in Chapter 2
- **Save Method:** Vouch for them during the confrontation
- **Trust Builder:** Choose the less invasive test

### The Pilot
- **Critical Scene:** Escape sequence in Chapter 4
- **Save Method:** Don't rush; wait for the right moment
- **Trust Builder:** Trust their piloting skills

---

## Critical Choices

These choices directly affect survival:

1. **Report the breach honestly** 鈫?Command trusts you later
2. **Don't sacrifice anyone** when given the option
3. **Trust the medic** during the infection scare
4. **Work together** in the final chapter
5. **Choose "Everyone"** when asked who to save

---

## QTE Survival

Some QTEs are one-shot鈥攆ail and someone dies. Practice these:

- Airlock sequence (Chapter 1)
- Combat encounters (Chapters 2-3)
- Escape sequence (Chapter 4)
- Final confrontation

**Pro tip:** The game doesn't always show the button prompt clearly. Stay alert.
`,
    },
    "platinum-walkthrough": {
      title: "Directive 8020: Platinum Walkthrough",
      description:
        "Efficient path to the platinum trophy in minimal playthroughs.",
      lastUpdated: "2025-05-13",
      timeToRead: "16 min",
      sections: [
        { title: "Roadmap Overview", id: "overview" },
        { title: "Playthrough 1", id: "playthrough1" },
        { title: "Playthrough 2", id: "playthrough2" },
        { title: "Clean Up", id: "cleanup" },
      ],
      content: `
## Platinum Roadmap

**Estimated Time:** 15-20 hours
**Difficulty:** 4/10
**Playthroughs Needed:** 2-3 (or use chapter select)

---

## Playthrough 1: Best Ending + Collectibles (8 hours)

Play naturally while collecting everything:

1. Choose to save everyone
2. Find all 12 dolls (check our dolls guide)
3. Find all documents
4. Make "good" choices

**Trophies Unlocked:**
- All story trophies
- Doll Collector
- Archivist
- Best Ending related trophies

---

## Playthrough 2: Death Scenes + Worst Ending (6 hours)

Now see the dark side:

1. Make "bad" choices
2. Fail QTEs deliberately
3. Let everyone die

**Trophies Unlocked:**
- All death-related trophies
- Worst Ending trophy
- Various choice-failure trophies

---

## Chapter Select Clean Up (2-4 hours)

Use chapter select for any remaining trophies:
- Specific choice outcomes
- Missed collectibles
- Individual death scenes

---

## Platinum Earned!

Total time: 15-20 hours
The platinum is very achievable for most players.
`,
    },
    "best-ending-guide": {
      title: "Directive 8020: Best Ending Guide",
      description: "How to achieve the optimal ending for your playthrough.",
      lastUpdated: "2025-05-13",
      timeToRead: "8 min",
      sections: [
        { title: "What is the Best Ending?", id: "what" },
        { title: "Requirements", id: "requirements" },
        { title: "Step-by-Step", id: "steps" },
      ],
      content: `
## What is the Best Ending?

The "New Dawn" ending shows all survivors looking out at Tau Ceti f with hope. It's the most satisfying conclusion and requires:

- All five characters alive
- High trust between characters
- Choosing cooperation over individual survival

---

## Requirements

1. **Save everyone** - See our "Save Everyone Guide"
2. **Build trust** - Make supportive choices
3. **Final choice** - Select "Together" in the last chapter

---

## Step-by-Step

Follow our "Save Everyone Guide" and in the final chapter, when asked how to proceed:

1. Choose "We stay together"
2. Select "We fight as one"
3. Pick "Everyone survives" when given the final choice

The ending will play showing your crew united, looking at their new potential home.
`,
    },
    "trophy-guide-walkthrough": {
      title: "Directive 8020: Platinum & Trophy Guide",
      description:
        "Complete walkthrough for all trophies and achievements. Minimum playthroughs required, mode differences, and step-by-step instructions.",
      lastUpdated: "2025-05-15",
      timeToRead: "20 min",
      sections: [
        { title: "Quick Roadmap", id: "roadmap" },
        { title: "Mode Selection", id: "modes" },
        { title: "All Trophies List", id: "trophies" },
        { title: "Tips & Strategies", id: "tips" },
      ],
      video: {
        title: "DIRECTIVE 8020 Gameplay Walkthrough FULL GAME 4K 60FPS PS5 PRO",
        url: "https://www.youtube.com/watch?v=FnNLKNJpUHk",
        channel: "MKIceAndFire",
        duration: "Full Game",
      },
      content: `
## Quick Roadmap

**Minimum Playthroughs: 2** (one on Survivor, one on Explorer for cleanup)

**Estimated Time:** 15-25 hours depending on thoroughness

**Difficulty:** 4/10 - Most trophies are story-related or collectible-based

### Phase 1: Survivor Mode Playthrough (8-10 hours)
Play through the entire game on Survivor mode. Focus on:
- Making choices that keep crew members alive
- Collecting as many dolls and documents as possible
- Experiencing the story naturally

### Phase 2: Explorer Mode Cleanup (5-8 hours)
After completing Survivor mode, Explorer mode unlocks. Use this to:
- Replay chapters for missed collectibles
- Trigger death scenes you haven't seen
- Make different choices for alternate endings

---

## Mode Selection: Survivor vs Explorer

This is crucial for trophy hunting:

**Survivor Mode:**
- All choices and QTE consequences are permanent
- Cannot rewind or change decisions
- Required for the authentic experience
- Best for first playthrough

**Explorer Mode:**
- Unlocks after completing Survivor once
- Can rewind to any chapter and change decisions
- Perfect for cleaning up missed trophies
- Recommended for collectible hunting

**Pro Tip:** Start with Survivor mode for your first run. It makes the experience more meaningful, and Explorer mode makes cleanup much easier.

---

## All Trophies List

### Platinum: The Dark Pictures Anthology: Directive 8020
Unlock all other trophies to earn the platinum.

### Gold Trophies (4)

**The Truth**
Discover the alien's true nature. Story-related, cannot be missed.

**Total Loss**
Have all five crew members die in a single playthrough. Make every wrong choice or fail every QTE deliberately.

**No One Left Behind**
Save all five crew members. See our Save All Crew guide for details.

**Completionist**
Find all collectibles, see all deaths, unlock all endings. The grind trophy.

### Silver Trophies (8)

**Doll Collector**
Find all 12 hidden dolls. Check our Collectibles guide.

**Archivist**
Find all documents in a single playthrough.

**Death Seeker**
Witness all 44 possible death scenes.

**Multiple Endings**
See at least 3 different endings.

**Turning Point Master**
Make all major decisions at least once across playthroughs.

**Tools Expert**
Use the Wedge Tool and Scanner 50 times combined.

**Stealth Master**
Complete 10 stealth sections without being caught.

**Quick Reflexes**
Complete 100 QTEs successfully.

### Bronze Trophies (24)
Story-related and miscellaneous trophies. Most unlock naturally through play.

---

## Tips & Strategies

**For Death Scenes:**
Use Explorer mode to deliberately fail QTEs and make bad choices. Chapter select makes this much faster.

**For Collectibles:**
The scanner reveals nearby collectibles. Use it in every room. Check our full Collectibles guide for exact locations.

**For All Endings:**
Focus on the major choice points in Episodes 3, 5, and 8. These determine which ending you get.

**For Stealth Sections:**
Hold your breath when the alien is nearby. Use the Wedge Tool to stun if caught. Move slowly and use distractions.
`,
    },
    "save-all-crew-choices": {
      title: "Directive 8020: Save All Crew - Choices Guide",
      description:
        "How to keep all five crew members alive through every Turning Point. Every critical decision explained.",
      lastUpdated: "2025-05-15",
      timeToRead: "18 min",
      sections: [
        { title: "Crew Survival Summary", id: "summary" },
        { title: "Thomas Carter Guide", id: "thomas" },
        { title: "Brianna Young Guide", id: "brianna" },
        { title: "Other Crew Members", id: "others" },
        { title: "Critical Turning Points", id: "turning-points" },
      ],
      video: {
        title: "DIRECTIVE 8020 Gameplay Walkthrough FULL GAME 4K 60FPS PS5 PRO",
        url: "https://www.youtube.com/watch?v=FnNLKNJpUHk",
        channel: "MKIceAndFire",
        duration: "Full Game",
      },
      content: `
## Crew Survival Summary

| Character | Episode 1 | Episode 3 | Episode 5 | Episode 8 |
|-----------|-----------|-----------|-----------|-----------|
| Thomas Carter | Computer choice | Simms escape | 鈥?| Final stand |
| Brianna Young | 鈥?| Locker code | Anders vs Mitchell | 鈥?|
| Jamal Clarke | 鈥?| Stealth section | Medical bay | 鈥?|
| Naomi Chen | 鈥?| 鈥?| Research lab | Airlock |
| Marcus Webb | 鈥?| 鈥?| 鈥?| Engineering |

**Key Rule:** Most deaths come from failed QTEs or wrong choices during Turning Points. Pay attention during these moments.

---

## Thomas Carter Guide

**Episode 1 - Computer Consultation:**
When Thomas needs to decide between immediate repair or consulting the computer first:
- **CHOOSE:** Consult the computer
- **WHY:** This gives you critical information about the ship's status and prevents a later death

**Episode 3 - Simms Escape:**
During the escape from Simms:
- Complete all QTEs successfully
- **DO NOT** hesitate or wait too long
- Use the Wedge Tool if grabbed

**Episode 8 - Final Stand:**
During the confrontation:
- Choose to stand together with the crew
- Complete the QTE sequence
- Do NOT sacrifice yourself

---

## Brianna Young Guide

**Episode 5 - Anders vs Mitchell:**
This is the most critical choice for Brianna:
- **CHOOSE:** Save Anders (if you want both alive)
- **ALTERNATIVE:** If Mitchell is critical to your ending, save Mitchell but know Anders may die later

**The Consequence:**
- Saving Anders: Both can survive if subsequent QTEs are completed
- Saving Mitchell: Anders has a much lower survival chance

---

## Critical Turning Points

### Episode 1: The Discovery
**Choice:** Report the anomaly or investigate first?
- **For Survival:** Investigate first - gives you more information
- **Consequence:** Changes dialogue but not survival directly

### Episode 3: The Split
**Choice:** Split up or stay together?
- **For Survival:** Stay together - easier to protect everyone
- **Consequence:** Splitting up opens different story paths but increases risk

### Episode 5: The Sacrifice
**Choice:** Who to save?
- **For All Alive:** Save the character with lower health/odds
- **Consequence:** This is the hardest choice point for keeping everyone alive

### Episode 8: The Final Decision
**Choice:** Fight or flee?
- **For Survival:** Fight together - requires all QTEs completed
- **Consequence:** Fleeing leads to worse outcomes for some characters

---

## Death Prevention Checklist

**Before Each Episode:**
1. Save your game (if possible)
2. Check each character's relationship status
3. Remember previous choices that affect this episode

**During QTEs:**
- Stay focused, especially during chases
- The timing is forgiving but not generous
- Failed QTEs often lead to injury or death

**During Choices:**
- Think about long-term consequences
- "Heroic" choices aren't always the safest
- Sometimes self-preservation saves more people
`,
    },
    "all-collectibles-dolls-secrets": {
      title: "Directive 8020: All Collectibles, Dolls & Secrets",
      description:
        "Find every doll, O Death secret, and data tape. Chapter-by-chapter locations with detailed directions.",
      lastUpdated: "2025-05-15",
      timeToRead: "25 min",
      sections: [
        { title: "Collectible Types", id: "types" },
        { title: "Episode 1 Collectibles", id: "episode1" },
        { title: "Episode 3 Collectibles", id: "episode3" },
        { title: "Episode 8 Collectibles", id: "episode8" },
        { title: "O Death Secrets", id: "odeath" },
      ],
      video: {
        title: "DIRECTIVE 8020 Gameplay Walkthrough FULL GAME 4K 60FPS PS5 PRO",
        url: "https://www.youtube.com/watch?v=FnNLKNJpUHk",
        channel: "MKIceAndFire",
        duration: "Full Game",
      },
      content: `
## Collectible Types

**Dolls (12 total):**
Small figurines hidden throughout the Cassiopeia. Finding all unlocks secret content and the Doll Collector trophy.

**Data Tapes (20+ total):**
Audio logs and documents that reveal backstory. Find 50% for one trophy, 100% for another.

**O Death Secrets (5 total):**
Special hidden areas that require Obol coins to access. Each reveals dark visions.

---

## Episode 1 Collectibles

### Doll #1 - Cargo Bay
**Location:** After the opening sequence, check the cargo containers on the left.
**Directions:** Enter the cargo bay, turn left immediately, check behind the first large crate.

### Data Tape #1 - Computer Room
**Location:** Simms' computer terminal area.
**Directions:** Before interacting with the main computer, check the desk on the right side.

### Simms' Recording
**Location:** Near the airlock.
**Directions:** After the emergency alarm, check the panel next to the airlock controls.

---

## Episode 3 Collectibles

### Doll #2 - Crew Quarters
**Location:** Inside a locker in the sleeping area.
**Directions:** Use the scanner to find the locker with the glowing outline. Code: 0402.

### Doll #3 - Engineering
**Location:** Behind a panel near the engine.
**Directions:** Use the Wedge Tool to open the panel. The doll is on the shelf inside.

### Data Tape #5 - Medical Bay
**Location:** Inside a medical cabinet.
**Directions:** After the medical scene, check the cabinet before leaving.

### Locker Code: 0402
This code appears multiple times:
- Crew Quarters locker (contains collectible)
- Engineering storage (contains Wedge Tool upgrade)
- Medical bay cabinet (contains data tape)

---

## Episode 8 Collectibles

### Doll #4 - Command Center
**Location:** Under the main console.
**Directions:** After entering the command center, crouch and check under the central station.

### Doll #5 - Airlock Area
**Location:** In the emergency supply cache.
**Directions:** Before the final sequence, check the emergency locker near the escape pods.

### Obol Coin Location
**Essential for O Death secrets!**
**Location:** Complete the side objective in the reactor room.
**Directions:** After restoring power, return to the reactor room. Check the floor grate for a shiny object.

---

## O Death Secrets

These require Obol coins to access. Each reveals a dark vision of potential futures.

**Secret #1 - Episode 3:**
In the cargo area, find the locked door with the strange symbol. Insert an Obol to see a vision of the alien's origin.

**Secret #2 - Episode 5:**
Behind the research lab. Requires two Obols. Shows a possible future where the infection spreads.

**Secret #3 - Episode 8:**
In the engineering section. Requires three Obols. Reveals the true ending requirements.

---

## Tool Usage Tips

**Scanner (Press Square/X):**
- Reveals electrical wiring behind walls
- Highlights interactable objects
- Shows nearby collectible indicators

**Wedge Tool:**
- Opens locked doors and panels
- Can stun enemies in stealth sections
- Required for several collectibles

**Utility Strap:**
- Lets you carry more items
- Required for some optional paths
- Found in Episode 2

---

## Collection Progress Tracking

Check the menu 鈫?Extras 鈫?Collectibles to see:
- Which dolls you've found
- Document completion percentage
- O Death secrets unlocked

**Pro Tip:** Use Explorer mode after your first playthrough to clean up any missed items. The scanner makes them much easier to find.
`,
    },
    "tools-guide": {
      title: "Directive 8020: Wedge Tool & Scanner Guide",
      description:
        "Master the utility tools for survival. Stealth tips, environment interactions, and QTE strategies.",
      lastUpdated: "2025-05-15",
      timeToRead: "10 min",
      sections: [
        { title: "Wedge Tool Basics", id: "wedge" },
        { title: "Scanner Usage", id: "scanner" },
        { title: "Stealth Strategies", id: "stealth" },
        { title: "Environment Tips", id: "environment" },
      ],
      content: `
## Wedge Tool Basics

The Wedge Tool is essential for survival in Directive 8020. Here's everything you need to know:

**Primary Uses:**
- Opening locked doors and panels
- Accessing hidden collectibles
- Stunning enemies during stealth sections

**How to Use:**
- Approach an interactable door or panel
- Press the prompted button (usually Triangle/Y)
- Hold until the progress bar completes

**Combat Application:**
If grabbed by an enemy:
- Complete the QTE sequence
- The Wedge Tool automatically stuns the attacker
- Gives you time to escape

---

## Scanner Usage

The Scanner reveals what your eyes cannot see:

**What It Shows:**
- Electrical wiring behind walls
- Junction boxes and power sources
- Collectible indicators nearby
- Interactive objects highlighted

**Controls:**
- PlayStation: Press Square
- Xbox: Press X
- PC: Press E (default)

**Strategic Use:**
- Scan every new room you enter
- Use before making major choices
- Helps find hidden paths and collectibles

---

## Stealth Strategies

Many sections require stealth. Here's how to survive:

**Basic Rules:**
1. Move slowly when enemies are near
2. Use cover effectively
3. Hold your breath during close encounters
4. Create distractions to draw enemies away

**Breath Holding:**
- Press and hold the designated button
- Drains stamina over time
- Essential when enemies are very close

**Distractions:**
- Throw objects to create noise
- Interact with terminals to trigger alarms elsewhere
- Use the environment to your advantage

**If Caught:**
- Don't panic
- Complete the QTE for a chance to escape
- The Wedge Tool can stun, giving you time to flee

---

## Environment Tips

**Junction Boxes:**
Use the scanner to find them. Cutting or restoring power can:
- Open new paths
- Disable security systems
- Create distractions

**Ventilation Shafts:**
- Perfect for stealth sections
- Often lead to collectibles
- Check with scanner before entering

**Emergency Lockers:**
- Contain useful items
- Some require codes (like 0402)
- Check every one you find
`,
    },
    "game-modes-guide": {
      title: "Directive 8020: Survivor vs Explorer Mode",
      description:
        "Understanding the difference between game modes and which to choose for your playstyle.",
      lastUpdated: "2025-05-15",
      timeToRead: "8 min",
      sections: [
        { title: "Survivor Mode", id: "survivor" },
        { title: "Explorer Mode", id: "explorer" },
        { title: "Which to Choose", id: "recommendation" },
      ],
      content: `
## Survivor Mode

The authentic Dark Pictures experience:

**Features:**
- All choices are permanent
- QTE failures have real consequences
- Cannot rewind or change decisions
- Higher tension and stakes

**Best For:**
- First-time players
- Those seeking the intended experience
- Trophy hunters (some trophies require this mode)

**Unlock:** Available from the start

---

## Explorer Mode

The relaxed approach for completionists:

**Features:**
- Rewind to any chapter at any time
- Change decisions and see different outcomes
- Lower tension, more experimentation
- Perfect for finding all collectibles

**Best For:**
- Cleaning up missed trophies
- Seeing all endings and death scenes
- Finding all collectibles
- Players who want a less stressful experience

**Unlock:** Complete the game once on Survivor mode

---

## Which to Choose?

**For Your First Playthrough:**
Choose Survivor Mode. The tension and permanence of choices makes the story more impactful. You'll care more about your decisions when they matter.

**For Trophy Hunting:**
1. First run: Survivor Mode (enjoy the story)
2. Second run: Explorer Mode (clean up collectibles)
3. Chapter select: Explorer Mode (see all deaths/endings)

**For Casual Play:**
If you just want to experience the story without stress, start with Explorer Mode (after unlocking it). But we strongly recommend Survivor for the full experience.
`,
    },
  },
};

const guideContent: Record<string, Record<string, GuideContentItem>> = {
  ...legacyGuideContent,
  "directive-8020": directive8020GuideContent,
  "project-mist": projectMistGuideContent,
  paralives: paralivesGuideContent,
  "farming-simulator-26": farmingSimulator26GuideContent,
  "thick-as-thieves": thickAsThievesGuideContent,
  "coffee-talk-tokyo": coffeeTalkTokyoGuideContent,
  "007-first-light": firstLight007GuideContent,
  "zero-parades-for-dead-spies": zeroParadesGuideContent,
};

// Generate static paths for all guides
export async function generateStaticParams() {
  const params: { slug: string; guide: string }[] = [];

  games.forEach((game) => {
    const gameGuides = guideContent[game.slug];
    if (gameGuides) {
      Object.keys(gameGuides).forEach((guide) => {
        params.push({ slug: game.slug, guide });
      });
    }
  });

  return params;
}

// Generate metadata for each guide page
export async function generateMetadata({
  params,
}: GuidePageProps): Promise<Metadata> {
  const { slug, guide } = await params;
  const game = getGameBySlug(slug);
  const content = guideContent[slug]?.[guide];

  if (!game || !content) {
    return { title: "Guide Not Found" };
  }

  return buildGuideMetadata(game, guide, content);
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug, guide } = await params;
  const game = getGameBySlug(slug);
  const content = guideContent[slug]?.[guide];

  if (!game || !content) {
    notFound();
  }

  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Games", href: "/" },
    { label: game.name, href: `/game/${game.slug}` },
    { label: content.title },
  ];

  const pageUrl = `${siteConfig.url}/game/${slug}/${guide}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Games",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: game.name,
            item: `${siteConfig.url}/game/${game.slug}`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: content.title,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Article",
        headline: content.title,
        description: content.description,
        datePublished: content.lastUpdated,
        dateModified: content.lastUpdated,
        mainEntityOfPage: pageUrl,
        inLanguage: "en",
        image: content.heroImage
          ? `${siteConfig.url}${content.heroImage}`
          : undefined,
        author: {
          "@type": "Organization",
          name: siteConfig.creator,
        },
        publisher: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
        },
        about: {
          "@type": "VideoGame",
          name: game.name,
        },
      },
      ...(content.faqs?.length
        ? [
            {
              "@type": "FAQPage",
              mainEntity: content.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            },
          ]
        : []),
    ],
  };

  const videoItems = content.videos?.length
    ? content.videos
    : content.video
      ? [content.video]
      : [];
  const relatedGuides = Object.entries(guideContent[slug] || {})
    .filter(([key]) => key !== guide)
    .slice(0, 4)
    .map(([key, related]) => ({
      href: `/game/${slug}/${key}`,
      title: related.title,
      description: related.description,
    }));

  return (
    <GuidePortalPage
      breadcrumbs={breadcrumbs}
      jsonLd={jsonLd}
      backHref={`/game/${game.slug}`}
      backLabel={`Back to ${game.name}`}
      heroImage={content.heroImage}
      heroImageAlt={content.heroImageAlt}
      title={content.title}
      description={content.description}
      spoilerLevel={content.spoilerLevel}
      verificationStatus={content.verificationStatus}
      timeToRead={content.timeToRead}
      lastUpdated={content.lastUpdated}
      sections={content.sections}
      sectionMedia={content.sectionMedia}
      sectionVideos={content.sectionVideos}
      videos={videoItems}
      content={content.content}
      faqs={content.faqs || []}
      relatedGuides={relatedGuides}
    />
  );
}

