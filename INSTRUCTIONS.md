# Scripture Buddy - Project Instructions

## Important: Living Document

**This is an initial build.** These instructions represent our starting vision, but the app will evolve as we build it. As the AI assistant on this project, you should:

1. **Be flexible** - Adapt to new ideas and changes as they come up
2. **Make suggestions** - If you see ways to improve the app, user experience, or engagement, speak up!
3. **Think like a user** - What would make this more fun, more addicting, more meaningful?
4. **Enhance ideas** - When the user describes something, feel free to expand on it with complementary features
5. **Flag concerns** - If something seems technically difficult or might not work well, say so early
6. **Remember context** - Build on previous conversations and decisions within this project

**Good suggestions might include:**
- "What if we also added X when the user does Y?"
- "This could be even more engaging if..."
- "I noticed we could connect this feature to..."
- "Players might enjoy it more if..."

The goal is a collaborative build process where we create the best possible scripture memorization app together.

---

## Overview

Scripture Buddy is a gamified scripture and quote memorization app featuring virtual pet companions. Users memorize scriptures, earn XP, hatch creatures, and grow their collection of buddies.

**Target Platform:** Standalone web app hosted on GitHub Pages or Netlify. Users add to their phone's home screen for app-like experience.

**No accounts required.** Each user's data saves locally via localStorage.

---

## Build Phases

This app is too large to build in one response. Follow these phases in order, asking for each one separately:

### Phase 1: Core App Shell
**Ask:** "Build Phase 1 - Core App Shell"

Includes:
- HTML template with React/Tailwind via CDN
- localStorage save/load system
- Basic navigation (Home, Verses, Practice, Settings)
- State management structure
- Empty placeholder screens

**Output:** Single HTML file, ~200 lines

---

### Phase 2: Scripture & Quote Management
**Ask:** "Build Phase 2 - Scripture Management"

Includes:
- Add custom verse/quote form (manual entry)
- Smart paste detection
- My Verses list view
- Edit and delete functionality
- Sample starter content (~20 verses/quotes)
- Topic tagging system

**Output:** Updated HTML file, ~400 lines

---

### Phase 3: Practice Modes
**Ask:** "Build Phase 3 - Practice Modes"

Includes:
- Word Reveal mode
- Fill in the Blanks mode
- Word Jumble mode
- First Letters mode
- Full Recall mode
- Answer checking logic
- Mastery tracking (6 levels)

**Output:** Updated HTML file, ~600 lines

---

### Phase 4: XP & Rewards System
**Ask:** "Build Phase 4 - XP System"

Includes:
- XP counter and tracking
- Daily login bonus (+10 XP)
- Practice XP rewards
- Streak tracking (daily, 7-day, 30-day)
- Milestone achievements
- Daily goals panel

**Output:** Updated HTML file, ~700 lines

---

### Phase 5: Buddy System - Basics
**Ask:** "Build Phase 5 - Buddy Basics"

Includes:
- Egg state and hatching mechanic
- Creature type randomization (10 types)
- Growth stages (Egg → Blob → Child → Teen → Adult)
- Feeding system with snacks
- Basic buddy display (emoji or simple CSS art)
- Buddy speech bubbles

**Output:** Updated HTML file, ~900 lines

---

### Phase 6: Buddy System - Advanced
**Ask:** "Build Phase 6 - Buddy Advanced"

Includes:
- Accessories/gifts (hats, glasses, items)
- Closet/inventory screen
- Backgrounds
- Happiness meter
- Hibernation system (neglect consequences)
- Care mode settings (Relaxed/Classic/Tamagotchi)

**Output:** Updated HTML file, ~1100 lines

---

### Phase 7: Buddy Collection & Polish
**Ask:** "Build Phase 7 - Collection & Polish"

Includes:
- Multiple buddy support
- Buddy collection screen
- Hatching new eggs (500 XP / 2000 XP golden)
- Switch active buddy
- Creature personalities and unique dialogue
- Animations and visual polish

**Output:** Updated HTML file, ~1300 lines

---

### Phase 8: Room Decoration System
**Ask:** "Build Phase 8 - Room System"

Includes:
- Room view for each buddy
- Furniture placement (drag and drop or grid)
- Furniture shop
- Room themes
- Buddy interacts with furniture
- Save room layout per buddy

**Output:** Updated HTML file

---

### Phase 9: Content Database
**Ask:** "Build Phase 9 - Scripture Database"

Includes:
- Browse by topic screen
- Pre-loaded essential quotes (~100)
- Topic index (20 categories)
- Search/filter functionality
- One-tap add to My Verses

**Output:** Separate JSON file + updated HTML

---

### Phase 10: Pixel Art & Animations
**Ask:** "Build Phase 10 - Pixel Art"

Includes:
- CSS pixel art for all 10 creatures
- All growth stages per creature
- Accessory sprites (layered)
- Idle animations (bounce, blink)
- Special animations (celebrate, sleep, eat)

**Output:** CSS/SVG sprite definitions to add to HTML

---

### Phase 11: Final Polish & PWA
**Ask:** "Build Phase 11 - Final Polish"

Includes:
- PWA manifest for "Add to Home Screen"
- Loading states
- Error handling
- Empty states with helpful prompts
- Onboarding/tutorial for new users
- Final bug fixes

**Output:** Complete production-ready HTML + manifest.json

---

## Technical Specifications

### Storage Structure (localStorage)

```javascript
const defaultState = {
  // User progress
  xp: 0,
  streak: 0,
  lastLogin: null,
  lastPractice: null,

  // Scriptures
  verses: [
    {
      id: 1,
      type: "scripture", // or "quote"
      reference: "Alma 32:21", // or author for quotes
      text: "Faith is not to have...",
      tags: ["faith"],
      mastery: 0, // 0-5
      dateAdded: "2025-01-01"
    }
  ],

  // Buddies
  activeBuddy: 0,
  buddies: [
    {
      id: 0,
      type: null, // set at hatch
      name: "Buddy",
      stage: "egg", // egg, blob, child, teen, adult
      fedAmount: 0,
      happiness: 5,
      lastCared: null,
      accessories: {
        hat: null,
        eyewear: null,
        held: null,
        costume: null,
        effect: null
      },
      room: {
        theme: "cozy-home",
        furniture: [
          { id: "bed-1", item: "basic-bed", x: 2, y: 3 },
          { id: "lamp-1", item: "basic-lamp", x: 5, y: 2 }
        ]
      }
    }
  ],

  // Inventory
  ownedAccessories: ["meadow"],
  ownedFurniture: ["basic-bed", "basic-lamp"],
  ownedThemes: ["cozy-home"],

  // Achievements
  milestones: [], // ["first-verse", "master-10", etc.]

  // Settings
  settings: {
    careMode: "relaxed" // relaxed, classic, tamagotchi
  }
};
```

### HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="default">
  <meta name="theme-color" content="#1e293b">
  <title>Scripture Buddy</title>
  <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-50">
  <div id="root"></div>
  <script type="text/babel">
    const { useState, useEffect } = React;
    // App code here
    ReactDOM.createRoot(document.getElementById('root')).render(<App />);
  </script>
</body>
</html>
```

---

## Feature Specifications

### Practice Modes

| Mode | Difficulty | XP | Description |
|------|------------|-----|-------------|
| Word Reveal | ⭐ | +3 | Shows words one at a time |
| Fill in Blanks | ⭐⭐ | +5 | Every 4th word removed |
| Word Jumble | ⭐⭐⭐ | +7 | Words scrambled, arrange in order |
| First Letters | ⭐⭐⭐⭐ | +8 | Only first letter shown |
| Full Recall | ⭐⭐⭐⭐⭐ | +10 | Type from memory |

### Mastery Levels

| Level | Name | Color |
|-------|------|-------|
| 0 | New | Gray |
| 1 | Learning | Red |
| 2 | Familiar | Orange |
| 3 | Practicing | Yellow |
| 4 | Almost | Lime |
| 5 | Mastered | Green |

### XP Rewards

| Action | XP |
|--------|-----|
| Open app daily | +10 |
| First practice of day | +15 |
| Complete practice | +5 base |
| Mode bonus | +3 to +10 |
| Perfect score | +10 |
| 7-day streak | +50 |
| 30-day streak | +200 |
| Master a verse | +50 |

### Creature Types

| Creature | Rarity | Odds |
|----------|--------|------|
| Fluffkin | Common | 20% |
| Barksby | Common | 20% |
| Hopple | Uncommon | 10% |
| Cubbins | Uncommon | 12% |
| Foxlet | Uncommon | 10% |
| Hootling | Uncommon | 8% |
| Sparkscale | Rare | 8% |
| Goldmane | Rare | 7% |
| Shimmer | Epic | 4% |
| Celestine | Legendary | 1% |

### Growth Stages

| Stage | XP Required | Snacks to Advance |
|-------|-------------|-------------------|
| Egg | 0 | Hatch at 100 XP earned |
| Blob | 100 | 5 snacks (25 XP each) |
| Child | 225 | 7 snacks (35 XP each) |
| Teen | 470 | 10 snacks (50 XP each) |
| Adult | 970 | Fully grown! |

### Accessories

**Hats:** Baseball Cap (50), Beanie (75), Cowboy Hat (100), Crown (200), Halo (500)

**Eyewear:** Round Glasses (50), Sunglasses (75), Star Glasses (150)

**Held Items:** Balloon (50), Flower (75), Scriptures (100), Liahona (500), Golden Plates (1000)

**Backgrounds:** Meadow (free), Mountains (150), Temple Grounds (300), Sacred Grove (400)

### Buddy Care Modes

| Mode | Behavior |
|------|----------|
| Relaxed | Buddies hibernate if neglected. Always safe. |
| Classic | Buddies run away after 7 days. Win back with 10 verses. |
| Tamagotchi | Buddies can pass on. Memorial garden for lost friends. |

### Neglect Timeline (Relaxed Mode)

| Day | Status |
|-----|--------|
| 1 | Sad 😢 |
| 2 | Tired 😴 |
| 3 | Sleepy 💤 |
| 4+ | Hibernating (safe, needs 3 practices to wake) |

---

## Custom Entry System

**Manual Form Fields:**
- Type toggle: Scripture / Quote
- Reference (scripture) or Author (quote)
- Text area for content
- Year (optional, quotes only)
- Tags (multi-select)

**Smart Paste Detection:**
- Text in "quotes" → extract as content
- Scripture pattern (Book #:#) → scripture type
- Name after dash → author
- 4-digit number → year
- User confirms before saving

---

---

## Content Catalog

### Foods - Yummy (Always Accepted)

| Food | Cost | Animation |
|------|------|-----------|
| 🍪 Cookie | 25 XP | Eyes go wide, crumbs fly |
| 🍕 Pizza | 30 XP | Happy dance while eating |
| 🌮 Taco | 30 XP | Crunchy chomp |
| 🍔 Hamburger | 35 XP | Big satisfied bite |
| 🍟 Fries | 25 XP | Eats one at a time, fast |
| 🍩 Donut | 30 XP | Gets sprinkles on face |
| 🧇 Waffle | 35 XP | Syrup drips, licks lips |
| 🍦 Ice Cream | 35 XP | Brain freeze → then happy |
| 🍰 Cake | 40 XP | Frosting on nose |
| 🍫 Chocolate | 30 XP | Melts in paws, licks them |
| 🍿 Popcorn | 25 XP | Catches pieces in mouth |
| 🥞 Pancakes | 35 XP | Stacks them, eats whole stack |
| 🍣 Sushi | 40 XP | Uses tiny chopsticks! |
| 🥤 Boba Tea | 35 XP | Slurps up the pearls |
| 🧁 Cupcake | 30 XP | Eats frosting first |

### Foods - Healthy (Sometimes Refused!)

| Food | Cost | Accept % | Accepted | Refused |
|------|------|----------|----------|---------|
| 🥦 Broccoli | 15 XP | 40% | Surprised it's good! | "Bleh!" turns away |
| 🥕 Carrot | 15 XP | 60% | Bunny-style cronch | Sniffs, pushes away |
| 🍎 Apple | 20 XP | 80% | Happy crunch | Not in the mood |
| 🥗 Salad | 15 XP | 30% | Actually fresh! | Looks for hidden pizza |
| 🥬 Spinach | 10 XP | 25% | Popeye flex! | Dramatic faint |
| 🍌 Banana | 20 XP | 70% | Peels it cutely | Slips on peel |
| 🥒 Cucumber | 15 XP | 35% | Refreshing! | Too crunchy, nope |
| 🍇 Grapes | 20 XP | 75% | Pops like candy | Meh face |

### Foods - Absurdly Large

| Food | Cost | Animation |
|------|------|-----------|
| 🍕 Pizza Bigger Than Creature | 50 XP | Struggles to hold, tips over |
| 🍔 Comically Tall Burger | 60 XP | Unhinges jaw like snake |
| 🌭 Infinite Hot Dog | 45 XP | Keeps pulling, never ends |
| 🧁 Giant Cupcake | 55 XP | Climbs on top to eat frosting |
| 🍩 Donut Tower | 50 XP | Wears as rings, then eats |
| 🌯 Burrito as Big as Creature | 55 XP | Rolls around inside it |

### Foods - Weird Combos & Cursed

| Food | Cost | Animation |
|------|------|-----------|
| 🥒🍦 Pickle Ice Cream | 25 XP | Confused... but intrigued? |
| 🍕🍍 Pineapple Pizza | 30 XP | Takes a stance (loves or hates) |
| 🥣 Cereal with Water | 15 XP | Disappointed sigh, eats anyway |
| 🍳 Raw Egg | 10 XP | Cracks on head by accident |
| 🧀 Spray Cheese | 20 XP | Sprays directly into mouth |
| 🥪 Ketchup Sandwich | 15 XP | "Really? This is what we're doing?" |
| 🌮 Taco Inside a Taco | 45 XP | Mind blown animation |
| 🍝 Spaghetti Taco | 35 XP | Total mess everywhere |
| 🥓 Bacon-Wrapped Bacon | 40 XP | Ascends to heaven briefly |
| 🍕 Cold Pizza from Fridge | 20 XP | "Just like 3am" nostalgia |
| 🥤 Flat Soda | 10 XP | Grimaces, drinks anyway |
| 🍪 Gas Station Sushi | 15 XP | 50% chance tummy rumble |
| 🧊 Just Ice | 5 XP | Cronch cronch cronch |

### Foods - Creature Cooks

| Food | Cost | Animation |
|------|------|-----------|
| 👨‍🍳 "I Made This" Pancake | 30 XP | Burnt and lumpy, so proud |
| 🍳 "Homemade" Egg | 25 XP | Shell still in it |
| 🎂 "Nailed It" Cake | 40 XP | Disaster cake, happy tears |

### Foods - Fight Back

| Food | Cost | Animation |
|------|------|-----------|
| 🦀 Angry Crab | 35 XP | Pinches nose first |
| 🌶️🌶️🌶️ Carolina Reaper | 30 XP | Fire shoots out ears |
| 🐙 Wiggly Octopus | 40 XP | Tentacle grabs face, wrestling |
| 🦞 Escape Artist Lobster | 45 XP | Chase sequence first |
| 🌽 Corn That Pops | 25 XP | Explodes into popcorn |

### Foods - Meme Foods

| Food | Cost | Animation |
|------|------|-----------|
| 🥑 Avocado Toast | 100 XP | "There goes my house savings" |
| 🧋 Overpriced Boba | 50 XP | Takes photo first |
| 🥤 Pumpkin Spice Steamer | 45 XP | Immediately puts on scarf |
| 🍱 Unboxing Mukbang | 60 XP | Sets up tiny camera |
| 🥗 Sad Desk Salad | 20 XP | Eats while staring blankly |
| 🍕 "Just One Slice" | 25 XP | Eats 5 more slices |

### Foods - Premium/Fancy

| Food | Cost | Animation |
|------|------|-----------|
| 🦞 Lobster | 75 XP | Puts on tiny bib |
| 🥩 Steak | 60 XP | Chef's kiss |
| 🍱 Bento Box | 50 XP | Eats each section carefully |
| 🎂 Birthday Cake | 100 XP | Candles + wish animation |
| 🧀 Cheese Board | 45 XP | Sophisticated nodding |
| 🍝 Spaghetti | 40 XP | Lady & the Tramp moment |

### Foods - LDS Culture Favorites

| Food | Cost | Animation |
|------|------|-----------|
| 🥧 Funeral Potatoes | 35 XP | Comfort food warmth |
| 🍬 Green Jello with Carrots | 20 XP | "It's a Utah thing" |
| 🥛 Milk and Graham Crackers | 20 XP | Primary class nostalgia |
| 🍞 Bread from Sister's Kitchen | 25 XP | Heavenly choir sound |
| 🥤 Dirty Soda | 40 XP | Adds 5 different syrups |
| 🍪 Cookies for Missionaries | 30 XP | Saves one for the elders |
| 🥣 Lion House Rolls | 35 XP | Warm and buttery heaven |
| 🍩 Conference Donuts | 30 XP | Watches TV while eating |
| 🥤 Swig/Fiiz Cup | 45 XP | Sugar cookie flavor! |
| 🍦 BYU Creamery Ice Cream | 40 XP | Graham Canyon or bust |
| 🥧 Jello Salad (any color) | 25 XP | Cool Whip on top |
| 🌽 Ward BBQ Corn | 20 XP | Butter dripping everywhere |
| 🥔 Relief Society Potatoes | 35 XP | Casserole dish included |
| 🍝 Scout Camp Tinfoil Dinner | 30 XP | Slightly burnt, perfect |
| 🍫 Missionary Chocolate | 35 XP | From a foreign country |
| 🥤 Arctic Circle Shake | 40 XP | Brain freeze guaranteed |
| 🍪 Crumbl Cookie | 50 XP | Pink box and everything |
| 🥪 Stadium Nachos | 35 XP | BYU game day vibes |
| 🍩 Krispy Kreme Fundraiser | 25 XP | For the youth trip |
| 🧁 Baptism Cupcakes | 30 XP | White frosting, so pure |

### Creature Food Preferences

| Creature | Loves (bonus animation) | Lower Accept Rate |
|----------|------------------------|-------------------|
| Fluffkin (cat) | Sushi, Fish | Vegetables |
| Barksby (dog) | Hamburger, Steak | Spicy foods |
| Hopple (bunny) | Carrots, Salad | Junk food |
| Cubbins (bear) | Honey, Berries | Nothing! Eats all |
| Foxlet (fox) | Berries, Fancy foods | Too-sweet desserts |
| Hootling (owl) | Fancy foods, Tea | Messy foods |
| Sparkscale (dragon) | Spicy foods! | Ice cream |
| Goldmane (lion) | Steak, Meat | Vegetables |
| Shimmer (unicorn) | Sparkly sweets, Fruit | Anything not pretty |
| Celestine (dragon) | Everything mystical | Nothing (too wise) |

---

### Accessories - Hats

| Item | Cost | Vibe/Effect |
|------|------|-------------|
| 🧢 Baseball Cap | 50 XP | Casual cool |
| 🎩 Top Hat | 100 XP | Fancy |
| 👒 Sun Hat | 75 XP | Beach ready |
| 🤠 Cowboy Hat | 100 XP | Yeehaw |
| 👑 Crown | 200 XP | Royalty |
| 🎓 Graduation Cap | 400 XP | Scholar |
| 😇 Halo | 500 XP | Angelic |
| 🏴‍☠️ Pirate Hat | 150 XP | Arrr! |
| 🐻 Bear Ears | 75 XP | Cute |
| 🦄 Unicorn Horn | 200 XP | Magical |
| 🎅 Santa Hat | 150 XP | Festive |
| 🧙 Wizard Hat | 175 XP | Magical |
| 👷 Hard Hat | 100 XP | Working hard |
| 🍳 Chef Hat | 125 XP | Cooking! |
| 🌸 Flower Crown | 100 XP | Springtime |

### Accessories - Silly Hats

| Item | Cost | Effect |
|------|------|--------|
| 🪣 Bucket | 30 XP | Can't see, bumps into things |
| 📦 Box on Head | 25 XP | "I'm hiding" but legs visible |
| 🥫 Pot on Head | 35 XP | Knight vibes, clang sound |
| 🍳 Frying Pan Hat | 40 XP | Flips tiny pancake |
| 🧻 TP Mummy Wrap | 45 XP | Trails behind |
| 🗑️ Tiny Trash Can | 50 XP | Oscar the Grouch energy |
| 🍌 Banana Peel | 20 XP | Keeps slipping off |
| 🐙 Octopus Friend | 75 XP | Waves at you |
| 🪺 Bird's Nest | 60 XP | Bird lives there now |
| 🎂 Birthday Cake | 80 XP | Candles still lit |
| 🌵 Cactus | 40 XP | Looks mildly concerned |

### Accessories - Eyewear

| Item | Cost | Vibe |
|------|------|------|
| 👓 Round Glasses | 50 XP | Smart |
| 🕶️ Sunglasses | 75 XP | Cool |
| ⭐ Star Glasses | 150 XP | Superstar |
| 🥽 Goggles | 100 XP | Adventure |
| 🧐 Monocle | 200 XP | Distinguished |
| 😎 Pixel Shades | 125 XP | Deal with it |
| 🩷 Heart Glasses | 100 XP | Lovely |
| 🤿 Snorkel Mask | 150 XP | Underwater |
| 👁️ Eye Patch | 75 XP | Pirate! |
| 🔮 Galaxy Glasses | 250 XP | Cosmic |

### Accessories - Silly Eyewear

| Item | Cost | Effect |
|------|------|--------|
| 👃 Nose + Glasses + Mustache | 60 XP | Classic disguise |
| 👀 Googly Eyes | 40 XP | Wiggle constantly |
| 🔍 Sherlock Magnifier | 65 XP | One giant eye |
| 😴 Sleep Mask (worn up) | 35 XP | "5 more minutes" |
| 📺 VR Headset | 125 XP | Bumps into walls |
| 🛡️ Face Shield | 50 XP | COVID prepared |

### Accessories - Held Items

| Item | Cost | Vibe |
|------|------|------|
| 🎈 Balloon | 50 XP | Floaty |
| 🌸 Flower | 75 XP | Sweet |
| 📖 Scriptures | 100 XP | Studious |
| ⚔️ Tiny Sword | 150 XP | Brave |
| 🪄 Magic Wand | 200 XP | Wizardry |
| 🎸 Guitar | 175 XP | Musical |
| 🧸 Teddy Bear | 100 XP | Cuddly |
| 🏆 Trophy | 250 XP | Winner! |
| 🌂 Umbrella | 100 XP | Prepared |
| 🧭 Liahona | 500 XP | Guided |
| 📜 Golden Plates | 1000 XP | Sacred |

### Accessories - Silly Held Items

| Item | Cost | Effect |
|------|------|--------|
| 🪠 Plunger | 30 XP | No explanation given |
| 🧹 Broom | 40 XP | Sweeps the background |
| 📞 Banana Phone | 45 XP | "Ring ring ring" |
| 🧲 Magnet | 50 XP | Random items stick |
| 🏳️ White Flag | 30 XP | Surrenders dramatically |
| 🪦 Tiny Tombstone | 60 XP | "RIP My Free Time" |
| 🧸 Clone of Itself | 150 XP | Tiny plushie of itself |
| 📋 "My Plan" | 35 XP | Paper on fire |
| 🧯 Fire Extinguisher | 55 XP | For the fire plan |
| 🎺 Sad Trombone | 100 XP | Plays on wrong answers |
| 🪃 Boomerang | 60 XP | Throws it, bonks self |
| 📸 Selfie Stick | 70 XP | Takes photos constantly |
| 🎣 Fishing Rod | 65 XP | Catches random items |
| 🧲 "World's Best Buddy" Mug | 40 XP | Sips hot cocoa with you |

### Accessories - Costumes

| Item | Cost | Effect |
|------|------|--------|
| 🦖 Dino Costume | 200 XP | Tiny T-Rex arms |
| 🐔 Chicken Suit | 150 XP | Bawks occasionally |
| 🌭 Hot Dog Costume | 175 XP | Existential crisis |
| 🎃 Pumpkin Costume | 150 XP | Round and rolly |
| 📦 Cardboard Robot | 125 XP | "BEEP BOOP" |
| 🦸 Superhero Cape + Undies | 175 XP | Outside the pants |
| 🧜 Mermaid Tail | 200 XP | Flops on land |
| 🧟 Zombie Costume | 150 XP | Arms fall off (reattach) |
| 👻 Ghost Sheet | 100 XP | "BOO!" then giggles |
| 💪 Inflatable Muscles | 125 XP | Pops occasionally |

### Accessories - Backgrounds

| Item | Cost | Scene |
|------|------|-------|
| 🌿 Meadow | Free | Sunny grass field |
| ⛰️ Mountains | 150 XP | Majestic peaks |
| 🏖️ Beach | 150 XP | Sand and waves |
| 🏠 Cozy Room | 200 XP | Warm indoor |
| 🌙 Night Sky | 200 XP | Stars and moon |
| 🌸 Cherry Blossoms | 250 XP | Pink petals falling |
| 🌊 Underwater | 300 XP | Bubbles and fish |
| ⛪ Temple Grounds | 300 XP | Peaceful temple |
| 🌲 Sacred Grove | 400 XP | Light through trees |
| 🏰 Castle | 350 XP | Royal vibes |
| 🚀 Space | 400 XP | Stars and planets |
| ✨ Celestial Room | 1000 XP | Glowing and bright |

### Accessories - Special Effects

| Item | Cost | Effect |
|------|------|--------|
| 🦸 Cape | 200 XP | Flutters in wind |
| 👼 Wings | 500 XP | Gentle flapping |
| 🌈 Rainbow Trail | 500 XP | Follows movement |
| ✨ Sparkle Aura | 400 XP | Constant shimmer |
| 💫 Glowing Aura | 750 XP | Holy glow |
| 🔥 Flame Effect | 600 XP | Friendly fire outline |
| ❄️ Snow Effect | 600 XP | Snowflakes falling |
| 💖 Heart Bubbles | 300 XP | Hearts float up |
| 🛸 Tiny UFO | 250 XP | Abducted occasionally |
| 🕳️ Portable Hole | 200 XP | Falls in sometimes |
| 🌪️ Tiny Tornado | 200 XP | Spins around |
| 💭 Thought Bubble | 100 XP | Shows random thoughts |
| 🌧️ Personal Rain Cloud | 150 XP | Only rains on them |

---

### Room Decoration System

Like Animal Crossing, creatures have a room they live in that users can decorate!

**Room Basics:**
- Each buddy has their own room
- Start with empty basic room
- Earn/buy furniture and decorations
- Place items anywhere in room
- Room reflects personality and progress

**Furniture Categories:**

### Beds & Comfort
| Item | Cost | Description |
|------|------|-------------|
| 🛏️ Basic Bed | Free | Simple starter bed |
| 🛋️ Cozy Couch | 100 XP | Plush and comfy |
| 🧸 Bean Bag | 75 XP | Sinks right in |
| 👒 Hammock | 150 XP | Swings gently |
| 🏰 Princess Bed | 300 XP | Canopy and everything |
| 🚀 Rocket Bed | 300 XP | Blast off to dreamland |
| ☁️ Cloud Bed | 400 XP | Floats and glows |
| 🌙 Crescent Moon Bed | 350 XP | Magical dreams |

### Tables & Storage
| Item | Cost | Description |
|------|------|-------------|
| 🪑 Small Table | 50 XP | Basic surface |
| 📚 Bookshelf | 100 XP | Filled with tiny books |
| 🗄️ Dresser | 100 XP | Stores accessories |
| 📖 Scripture Stand | 150 XP | Displays open scriptures |
| 🎒 Backpack Hook | 75 XP | Ready for adventure |
| 🏆 Trophy Shelf | 200 XP | Shows achievements |
| 🗃️ Treasure Chest | 175 XP | Sparkles occasionally |

### Lighting
| Item | Cost | Description |
|------|------|-------------|
| 💡 Basic Lamp | 50 XP | Warm glow |
| 🕯️ Candles | 75 XP | Flickers softly |
| ⭐ Star Lights | 100 XP | String of stars |
| 🌈 Rainbow Lamp | 150 XP | Color changing |
| 🔮 Crystal Ball Light | 175 XP | Mystical glow |
| 🏮 Paper Lantern | 100 XP | Floats gently |
| ✨ Fairy Lights | 125 XP | Magical sparkles |
| 🌙 Moon Lamp | 150 XP | Soft lunar glow |

### Wall Decorations
| Item | Cost | Description |
|------|------|-------------|
| 🖼️ Family Picture | 75 XP | Frame with hearts |
| 🗺️ World Map | 100 XP | Mark mission locations! |
| 🎨 Painting | 125 XP | Masterpiece art |
| 🪞 Mirror | 100 XP | Buddy checks self out |
| 📜 CTR Poster | 50 XP | Choose the right! |
| 🏛️ Temple Picture | 150 XP | Beautiful and peaceful |
| ⭐ Achievement Wall | 200 XP | Shows earned badges |
| 🌅 Sunset Window | 175 XP | Fake window, real vibes |
| 📅 Calendar | 75 XP | Tracks streak visually |
| 🎯 Goal Board | 100 XP | Shows current goals |

### Rugs & Flooring
| Item | Cost | Description |
|------|------|-------------|
| 🟫 Basic Rug | 50 XP | Cozy brown rug |
| 🌈 Rainbow Rug | 100 XP | Colorful and fun |
| ⭐ Star Rug | 125 XP | Sparkly surface |
| 🌸 Flower Rug | 100 XP | Garden vibes |
| 🏖️ Beach Mat | 100 XP | Sandy texture |
| ❄️ Fluffy White Rug | 150 XP | Cloud-like softness |
| 🎮 Game Mat | 125 XP | Controller pattern |

### Plants & Nature
| Item | Cost | Description |
|------|------|-------------|
| 🪴 Small Plant | 50 XP | Little greenery |
| 🌻 Sunflower | 75 XP | Follows the light |
| 🌵 Cactus | 75 XP | Low maintenance friend |
| 🌳 Mini Tree | 150 XP | Grows over time! |
| 🌸 Cherry Blossom | 200 XP | Petals fall |
| 🍄 Mushroom Set | 100 XP | Cute cluster |
| 🌿 Hanging Vines | 125 XP | Drapes from ceiling |
| 💐 Flower Bouquet | 100 XP | Fresh and pretty |

### Fun & Entertainment
| Item | Cost | Description |
|------|------|-------------|
| 📺 Tiny TV | 150 XP | Plays General Conference |
| 🎮 Game Console | 200 XP | Buddy plays sometimes |
| 🎹 Piano | 250 XP | Plays hymns |
| 🎸 Guitar Stand | 175 XP | For musical buddies |
| 🎨 Art Easel | 150 XP | Buddy paints |
| 📻 Radio | 100 XP | Plays Mo-Tab |
| 🧩 Puzzle Table | 125 XP | Always in progress |
| 🎯 Dart Board | 125 XP | Buddy practices |
| 🏀 Basketball Hoop | 150 XP | Mini indoor hoop |

### Food & Kitchen
| Item | Cost | Description |
|------|------|-------------|
| 🍪 Cookie Jar | 75 XP | Never empty |
| 🧊 Mini Fridge | 150 XP | Stocked with treats |
| 🍿 Popcorn Machine | 175 XP | Movie night ready |
| 🧁 Cupcake Stand | 100 XP | Display treats |
| 🥤 Soda Fountain | 200 XP | Dirty sodas on tap |
| 🍕 Pizza Box Stack | 75 XP | Collection growing |

### LDS-Themed Items
| Item | Cost | Description |
|------|------|-------------|
| 📖 Scripture Set | 100 XP | Quad on display |
| 🏛️ Mini Temple Model | 300 XP | Your favorite temple |
| 🗓️ Missionary Countdown | 150 XP | Days tracking |
| 🎒 Mission Suitcase | 125 XP | Ready to serve |
| 📜 Family Proclamation | 100 XP | Framed on wall |
| 🌳 Family Tree | 200 XP | Genealogy display |
| 🕊️ Christus Statue | 250 XP | Small replica |
| 🎼 Hymn Book Stand | 100 XP | Open to favorite |
| 🏅 Eagle Scout Display | 175 XP | Earned with honor |
| 👔 Missionary Name Tag | 50 XP | On the wall |
| 🤝 CTR Ring Display | 75 XP | Collection of rings |
| 📿 Young Women Torch | 125 XP | Glows warmly |

### Seasonal/Special
| Item | Cost | Description |
|------|------|-------------|
| 🎄 Christmas Tree | 200 XP | Lights and ornaments |
| 🎃 Pumpkin Decor | 100 XP | Fall vibes |
| 🐰 Easter Basket | 100 XP | Pastel colors |
| ❤️ Valentine Hearts | 75 XP | Love is in the air |
| 🎆 Fireworks Poster | 100 XP | Pioneer Day! |
| 🦃 Thanksgiving Spread | 150 XP | Grateful display |
| 🌸 Spring Flowers | 100 XP | Fresh blooms |

### Silly/Fun Items
| Item | Cost | Description |
|------|------|-------------|
| 🚽 Golden Toilet | 500 XP | Ultimate flex |
| 🗿 Mysterious Statue | 200 XP | No one knows why |
| 🎪 Circus Tent Corner | 175 XP | Party zone |
| 🛸 UFO Model | 150 XP | Hangs from ceiling |
| 🦖 Dino Skeleton | 250 XP | Museum vibes |
| 🎰 Gumball Machine | 125 XP | Colorful spheres |
| 🧲 Magnet Wall | 150 XP | Stuff sticks to it |
| 🎈 Permanent Balloon | 100 XP | Never deflates |
| 🪄 Magic Hat | 125 XP | Rabbit peeks out |
| 📦 Mystery Box | 75 XP | What's inside?? |
| 🧸 Giant Teddy | 200 XP | Bigger than buddy |
| 🎠 Mini Carousel | 300 XP | Actually spins |

---

### Room Themes

Users can unlock full room themes that change walls/floor together:

| Theme | Cost | Description |
|-------|------|-------------|
| 🏠 Cozy Home | Free | Basic warm room |
| 🌊 Underwater | 400 XP | Bubbles, fish swimming |
| 🚀 Space Station | 400 XP | Stars, floating objects |
| 🏰 Castle | 450 XP | Stone walls, royal |
| 🌸 Cherry Blossom Garden | 400 XP | Pink, peaceful |
| 🌲 Forest Treehouse | 450 XP | Wooden, nature |
| ☁️ Sky/Clouds | 400 XP | Heavenly, bright |
| 🏛️ Temple Interior | 500 XP | White, glowing, peaceful |
| 🏖️ Beach Hut | 400 XP | Sandy, tropical |
| 🎪 Circus Tent | 400 XP | Colorful, fun |
| 🍬 Candy Land | 450 XP | Sweet, colorful |
| 📚 Library | 400 XP | Books everywhere |
| 🎮 Arcade | 450 XP | Neon, games |
| 🌙 Nighttime | 350 XP | Cozy, stars outside |

---

### Room Interactions

**Buddy interacts with furniture:**
- Sleeps in bed (when hibernating or tired)
- Sits on couch while you browse verses
- Looks in mirror with new accessories
- Plays piano/guitar occasionally
- Watches TV during idle
- Reads books from bookshelf
- Waters plants
- Bounces on bean bag

**Room reflects progress:**
- Trophy shelf fills with achievements
- Calendar marks practice days
- Goal board updates automatically
- Scripture stand shows current verse

---

**Food + Accessory Combos:**

| If Wearing | And Eating | Special Animation |
|------------|------------|-------------------|
| Chef Hat | Anything | Critiques it, "needs salt" |
| Sunglasses | Hot Pepper | "Too hot? No. I'm too cool." |
| Crown | Fancy foods | Servant appears to serve |
| Scuba Gear | Sushi | Dives into the sushi |
| Cowboy Hat | Taco | "Howdy pardner" to taco |
| Wizard Hat | Anything | Levitates food to mouth |
| VR Headset | Anything | Misses mouth completely |

**Rare Random Events:**

| Event | Chance | What Happens |
|-------|--------|--------------|
| Food Stealer | 2% | Bird swoops in, steals food |
| Golden Food | 1% | Food turns gold, 2x growth |
| Food Fight | 1% | Throws food at screen |
| Chef's Kiss | 3% | Italian chef appears |
| Sharing | 5% | Offers you some |
| Food Critic | 2% | Pulls out notepad, rates meal |

---

### Achievements

| Achievement | Requirement | Reward |
|-------------|-------------|--------|
| Picky Eater | Food refused 10 times | "No Veggies" sign |
| Garbage Disposal | Feed 100 foods | Trash Can hat |
| Fancy Pants | Only premium foods 20x | Monocle |
| Veggie Monster | Accept all vegetables | Broccoli hat |
| Fire Breather | Feed 10 spicy foods | Fire Effect |
| Big Spender | Spend 5000 XP on food | Money Wings |
| Fashionista | Own 20 accessories | Fashion Crown |
| Scripture Scholar | Master 100 verses | Golden Plates |
| Streaker | 30-day streak | Rainbow Trail |
| Collector | All 10 creature types | Celestine unlock boost |

---

### Random Idle Behaviors

Creatures occasionally do these unprompted:
- Falls asleep briefly, snores, wakes up
- Chases butterfly across screen
- Trips over nothing, looks embarrassed
- Finds a coin, looks excited
- Sneezes adorably
- Does a little dance
- Waves at you
- Yawns and stretches
- Looks around suspiciously
- Pulls out tiny book and reads
- Checks tiny watch
- Does stretches/yoga
- Plays with own tail/ears
- Makes a sandwich (then eats it)

---

## Adding New Creature Designs

Creature designs are created externally (e.g., with Gemini AI) and saved as standalone HTML files in the `Scripture Buddies` folder. To add a new creature to the app:

### File Locations
- **Source designs:** `/Users/adamgoodwin/Desktop/scripture-buddy/Scripture Buddies/[CreatureName].html`
- **CSS styles:** `/Users/adamgoodwin/Desktop/scripture-buddy/creatures.css`
- **Render functions:** `/Users/adamgoodwin/Desktop/scripture-buddy/index.html`

### Critical: CSS Naming Convention (PREVENTS COLLISIONS)

**Every CSS class MUST be prefixed with `{category}{variantNumber}-`**

```
Format: {category}{variant}-classname

Examples:
- mammals4-ear, mammals4-body, mammals4-tail
- birds0-wing, birds0-beak
- reptiles5-scale, reptiles5-tongue
```

Categories: `mammals`, `birds`, `aquatic`, `reptiles`, `dragons`, `insects`, `fantasy`, `prehistoric`, `alien`, `mystical`

### Critical: Animation Naming Convention (PREVENTS CONFLICTS)

**Every @keyframes animation MUST be prefixed with the creature name:**

```css
/* BAD - Generic names cause conflicts between creatures */
@keyframes ear-wiggle-l { ... }  /* Fox uses this */
@keyframes ear-wiggle-r { ... }  /* Puppy accidentally uses Fox's animation! */
@keyframes bounce { ... }        /* Which creature? */
@keyframes blink { ... }         /* Conflicts everywhere */

/* GOOD - Creature-prefixed names are unique */
@keyframes fox-ear-l { ... }
@keyframes fox-ear-r { ... }
@keyframes fox-bounce { ... }
@keyframes fox-blink-l { ... }

@keyframes puppy-ear-l { ... }   /* Puppy has its own animation */
@keyframes puppy-ear-r { ... }
@keyframes puppy-bounce { ... }
@keyframes puppy-blink { ... }
```

**Why this matters:**
- All creatures share the same `<style>` block in index.html
- Generic animation names like `ear-wiggle-l` get reused accidentally
- Example bug: Puppy used Fox's `ear-wiggle-l` animation, causing ears to rotate from -25deg instead of +20deg
- Creature-specific prefixes ensure each creature has isolated, correct animations

**Naming format:**
```
{creature-name}-{body-part}-{direction/type}

Examples:
- fox-ear-l, fox-ear-r
- puppy-ear-l, puppy-ear-r
- kitty-tail-swish
- bunny-hop
- sloth-arm-sway-l
- koala-blink
```

**When adding animations for a new creature:**
1. Check if an existing creature already has a similar animation
2. If yes, create a NEW animation with your creature's name prefix
3. Never reuse another creature's animation unless the motion is truly identical

### Critical: 3D Effects (REQUIRED FOR ALL SCRIBBIES)

**Every adult Scribby MUST have 3D shading effects to match the visual style of blobs, babies, teens, and mammals.**

**The 4 Essential 3D Techniques:**

**1. Radial Gradients for Body Shapes (Most Important!)**
Replace flat colors with gradients that simulate a light source at upper-left (35% 30%):

```css
/* BAD - Flat color looks 2D */
background: #8cc63f;

/* GOOD - Gradient adds depth and dimension */
background: radial-gradient(ellipse at 35% 30%,
  #b8e06d 0%,      /* Light - at light source */
  #8cc63f 50%,     /* Medium - main color */
  #65a30d 100%     /* Dark - shadow edge */
);
```

**Color progression rule:** Light version → Main color → Darker version

**2. Inner Box Shadows for Depth**
Add two inset shadows - light reflection top-left, shadow bottom-right:

```css
/* Template */
box-shadow:
  inset 4px 4px 12px rgba(LIGHT_COLOR, 0.5),    /* Light reflection */
  inset -3px -3px 8px rgba(DARK_COLOR, 0.3);    /* Shadow */

/* Example for green body */
box-shadow:
  inset 4px 4px 12px rgba(200,240,120,0.5),
  inset -3px -3px 8px rgba(80,130,40,0.3);
```

**3. Highlight Spots (Light Reflections)**
Add blurred white/light ellipses where light hits the surface:

```css
<!-- Template -->
<div style="position:absolute;width:28px;height:20px;
  background:rgba(255,255,255,0.4);
  border-radius:50%;
  top:10%;left:18%;
  filter:blur(3px);"></div>

<!-- Place in: Head (upper-left), Body (upper-left) -->
```

**4. Eye Sparkles (Multiple Highlights)**
Give eyes depth with multiple white dots:

```css
<!-- Primary highlight - larger, top-left -->
<div style="position:absolute;width:7px;height:7px;background:white;border-radius:50%;top:3px;left:3px;"></div>

<!-- Secondary highlight - smaller, bottom-right, semi-transparent -->
<div style="position:absolute;width:3px;height:3px;background:white;border-radius:50%;bottom:5px;right:5px;opacity:0.5;"></div>
```

**Complete Example - Body with Full 3D:**
```html
<div style="position:absolute;top:107px;left:70px;width:98px;height:60px;
  background:radial-gradient(ellipse at 35% 30%, #b8e06d 0%, #8cc63f 50%, #65a30d 100%);
  border:3px solid #3f6212;
  border-radius:50% 50% 45% 45% / 60% 60% 40% 40%;
  box-shadow:inset 4px 4px 12px rgba(200,240,120,0.5), inset -3px -3px 8px rgba(80,130,40,0.3);">

  <!-- Highlight spot -->
  <div style="position:absolute;width:25px;height:18px;background:rgba(255,255,255,0.35);border-radius:50%;top:8px;left:15px;filter:blur(3px);"></div>

  <!-- Rest of body content... -->
</div>
```

**For SVG Elements (tails, etc.):**
Use `<linearGradient>` or `<radialGradient>` in `<defs>`:

```html
<svg viewBox="0 0 160 130">
  <defs>
    <linearGradient id="tailGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#b8e06d" />
      <stop offset="50%" style="stop-color:#8cc63f" />
      <stop offset="100%" style="stop-color:#65a30d" />
    </linearGradient>
  </defs>
  <path d="..." fill="url(#tailGrad)" stroke="#3f6212" stroke-width="4"/>
</svg>
```

**3D Checklist for New Creatures:**
- [ ] Body uses `radial-gradient(ellipse at 35% 30%, light, medium, dark)`
- [ ] Body has `box-shadow: inset ... inset ...` for depth
- [ ] Body has highlight spot div with blur
- [ ] Head uses same gradient pattern as body
- [ ] Head has highlight spot div with blur
- [ ] Eyes use gradient for iris/sclera
- [ ] Eyes have multiple sparkle highlights
- [ ] Limbs use gradients (can be simpler than body)
- [ ] SVG elements (tails) use gradient fills
- [ ] Belly/underside uses lighter gradient

### Critical: Canvas Size (ENSURES PROPER DISPLAY)

**Every creature must fit INSIDE a 240px × 280px container:**

```html
<div style="position:relative;width:240px;height:280px;animation:...">
  <!-- creature parts with position:absolute -->
</div>
```

**CRITICAL RULES:**
- ❌ NO negative positions (e.g., `top:-45px` will overflow!)
- ❌ NO elements extending outside the 240×280 box
- ✅ Ears/top elements: `top: 0-30px`
- ✅ All parts must stay within canvas boundaries

**Vertical positioning guidelines:**
- Ears/top: y position 0-30px from top
- Head: y ~30-100px from top
- Body: y ~100-170px from top
- Feet: y ~240-270px from top
- Visual center of mass: ~140px from top

**If source file has larger canvas (e.g., 260×340):**
- Scale all dimensions by ~0.85-0.92
- Adjust all positions proportionally
- Ensure NOTHING extends outside 240×280

### Step-by-Step: Adding a Creature

**STEP 1:** Determine the variant number
- Search `index.html` for `function renderAdult{Category}`
- Find highest variant number in the designs object
- New variant = highest + 1

**STEP 2:** Read source file
- Path: `Scripture Buddies/[CreatureName].html`
- Note the canvas size (width/height of outer container)
- Note any animations used

**STEP 3:** Convert to INLINE STYLES (REQUIRED!)
```html
<!-- DO NOT use CSS classes - use inline styles only! -->

<!-- BEFORE (class-based) -->
<div class="bunny-head">

<!-- AFTER (inline styles) -->
<div style="position:absolute;width:120px;height:100px;background:#ffffff;...">
```
- Convert CSS variables `var(--color)` to hardcoded hex values
- This is more reliable and doesn't require CSS file updates

**STEP 4:** Scale to fit 240×280 canvas
- If source is larger (e.g., 260×340), scale down by ~0.85
- **NO negative positions!** `top:-45px` is BAD
- Ears at `top:0-30px`, head at `top:30-100px`, body at `top:100-170px`

**STEP 5:** Check animations exist in index.html
Common existing animations:
- `bunny-hop`, `bunny-blink`, `bunny-ear-wiggle`, `tail-wiggle`
- `kitty-bounce`, `kitty-blink`, `paw-step`
- `sloth-hang`, `sloth-blink`, `arm-sway-l`, `arm-sway-r`
- `fox-bounce`, `fox-blink-l`, `fox-blink-r`

If animation doesn't exist, add `@keyframes` to `<style>` section in index.html

**STEP 6:** Add to render function in `index.html`
```javascript
// In renderAdult{Category} function, add to designs object:
// ===== [CREATURE NAME] - [Category] Variant [N] =====
// Source: [filename].html (converted to inline styles)
{N}:`
  <div style="position:relative;width:240px;height:280px;animation:...">
    <!-- inline styled HTML here -->
  </div>
`,
```

**STEP 6b:** Update `renderBuddyVisual()` for buddy card display
```javascript
// Find renderBuddyVisual() function (around line 889)
// In the adult stage section, ensure category is included:
}else if(S.creatureCategory==='{category}'){
  buddyHTML=renderAdult{Category}(S.creatureVariant);
}
```
**This is critical!** Without this, creatures only show in the guide, not the main game.

**STEP 7:** Update `CREATURE_CATEGORIES` arrays
- Add name to `adultNames` array at index N
- Add emoji to `adultVariants` array at index N

**STEP 8:** Test in creature guide
- Verify creature FITS in the grid cell (not too big)
- Verify it's centered and aligned with others
- If too big, check for elements outside 240×280 canvas

### Two Display Contexts

Creatures appear in TWO places with different scales:

**1. Buddy Card (main game view)**
- Function: `renderBuddyVisual()` → `renderAdult{Category}()`
- Scale: 45% (via `.buddy-node` class)
- Shows current buddy with equipped accessories
- **Must update `renderBuddyVisual()` to include new categories!**

**2. Creature Guide (preview all variants)**
- Scale: 35% (inline style)
- Container: 84×98px wrapper (matches scaled visual size)
- Shows all 10 variants in 5-column grid
- Name label below with `mt-2` spacing

Both use the SAME render function—just different scales.

### Common Mistakes to Avoid

- ✗ Forgetting to prefix animation names (`@keyframes`)
- ✗ Missing prefixes in nested CSS selectors
- ✗ Using generic class names without prefix
- ✗ Not using 240×280px container
- ✗ Creature not vertically centered
- ✗ Forgetting to update BOTH `adultNames` AND `adultVariants` arrays
- ✗ **Forgetting to update `renderBuddyVisual()`** — creature won't show in main game!

---

## Response Guidelines

1. **One phase at a time** - Don't try to build multiple phases in one response

2. **Complete, working code** - Each phase should produce a functional app

3. **Preserve previous work** - Each phase builds on the last

4. **Mobile-first** - Design for phone screens

5. **Test mentally** - Verify logic before providing code

6. **Use localStorage** - Not window.storage (this is for standalone hosting, not Claude artifacts)

---

## Hosting Instructions (Provide at Phase 10)

**GitHub Pages:**
1. Create repository named `scripture-buddy`
2. Upload index.html + manifest.json
3. Settings → Pages → Source: main branch
4. Live at: `https://username.github.io/scripture-buddy`

**Netlify:**
1. Go to app.netlify.com/drop
2. Drag files onto page
3. Get instant URL

**Add to Home Screen:**
- iPhone: Safari → Share → Add to Home Screen
- Android: Chrome → Menu → Add to Home Screen
