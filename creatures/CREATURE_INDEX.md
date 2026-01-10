# Scribbies Creature Index

Quick reference for all creature designs. Each standalone HTML file can be opened directly in a browser for testing.

## Container Standards
- **Adult creatures**: 240×285px (scaled from 320×380 at 0.75)
- **All positioning**: Absolute within container

## Z-Index Layering (CRITICAL)
```
tail:        z-index 5  (behind body, attachment hidden)
back-legs:   z-index 15
body:        z-index 20
neck:        z-index 21
front-legs:  z-index 25
ears:        z-index 30 (inside head div for proper positioning)
horns/acc:   z-index 35-45
head:        z-index 40
```

## Standard Positioning (from Horse - use as template)
```
Ears:       top:-15px, left:62px / right:75px (or inside head div)
Tail:       top:128px, overlap with body so attachment hidden
Back legs:  top:173px, left:86px / left:154px
Neck:       top:79px, left:86px, 49×68px
Body:       top:113px, left:45px, 135×105px
Front legs: top:180px, left:56px / left:135px
Head:       top:0-12px, left:64px, 98×120px
```

---

## MAMMALS (renderAdultMammal)

| Variant | Name | File | Notes |
|---------|------|------|-------|
| 0 | Bunny | Scripture Buddies/BunnyBuddy.html | White, floppy ears |
| 1 | Kitty | Scripture Buddies/KittyBuddy.html | Orange tabby |
| 2 | Koala | Scripture Buddies/Koala_Buddy.html | Gray, round ears |
| 3 | Fox | Scripture Buddies/FoxBuddy.html | Orange with white chest |
| 4 | Mouse | Scripture Buddies/MouseBuddy.html | Gray, big round ears |
| 5 | Trash Panda | Scripture Buddies/TrashPandyBuddy.html | Raccoon with mask |
| 6 | Red Panda | Scripture Buddies/RedPanda.html | Red/orange with stripes |
| 7 | Sloth | Scripture Buddies/Sloth_Buddy.html | Brown, hanging pose |
| 8 | Fox In Sox | Scripture Buddies/Fox_In_Sox_Buddy.html | Fox with socks |
| 9 | Panda | Scripture Buddies/Panda_Buddy.html | Black and white |
| 10 | Puppy | Scripture Buddies/PuppyBuddy.html | Golden retriever |
| 11 | Squirrel | (inline) | Brown with fluffy tail |
| 12 | Bear | (inline) | Brown bear |
| 13 | Horse | creatures/HorseBuddy.html | Brown with mane |
| 14 | Cow | creatures/CowBuddy.html | White with black spots, chewing straw |

---

## MYSTICAL (renderAdultMystical)

| Variant | Name | File | Notes |
|---------|------|------|-------|
| 0 | Fairy | (inline) | Ethereal blob with energy wings, halo |
| 10 | Unicorn | creatures/UnicornBuddy.html | Majestic! Rainbow mane/tail, golden horn, sparkles |

---

## REPTILES (renderAdultReptile)

| Variant | Name | File | Notes |
|---------|------|------|-------|
| 0 | Gecko | Scripture Buddies/gecko_buddy.html | Green gecko |
| 1 | Frog | Scripture Buddies/frog_buddy.html | Green frog |
| 2 | Turtle | Scripture Buddies/turtle_buddy.html | Green shell |
| 3 | Cobra | Scripture Buddies/cobra_buddy.html | Hood snake |
| 4 | Python | Scripture Buddies/emerald_python.html | Emerald green |
| 5 | Purple Snake | Scripture Buddies/purple_snake_buddy.html | Purple coils |
| 6 | Rattlesnake | Scripture Buddies/rattlesnake_buddy.html | With rattle |
| 7 | Coiled Rattler | Scripture Buddies/rattlesnake_coiled_buddy.html | Coiled pose |
| 8 | Rainbow Snake | Scripture Buddies/RainbowSnake.html | Multicolor |
| 9 | Purple Cobra | Scripture Buddies/purple_cobra_buddy.html | Purple hood |
| 10 | Fire Cobra | Scripture Buddies/flaming_cobra_buddy.html | Fire effects |
| 11 | Ice Cobra | Scripture Buddies/ice_cobra_buddy.html | Ice/frost effects |

---

## PREHISTORIC (renderAdultPrehistoric)

| Variant | Name | File | Notes |
|---------|------|------|-------|
| 0 | T-Rex | Scripture Buddies/TRexBuddy.html | Green dino |
| 1 | Lil T-Rex | Scripture Buddies/LilTRexBuddy.html | Smaller, cuter |
| 2 | Bronto | Scripture Buddies/BrontoBuddy.html | Long neck |
| 3 | Stego | Scripture Buddies/StegoBuddy.html | Purple with plates |

---

## BIRDS (renderAdultBird)

| Variant | Name | File | Notes |
|---------|------|------|-------|
| 0 | Duck | (inline) | Yellow duck |
| 1 | Dove | (inline) | White dove |
| 2 | Eagle | (inline) | Brown eagle |
| 3 | Mallard | (inline) | Green head duck |
| 4 | Owl | (inline) | Brown owl |
| 5 | Peacock | (inline) | Colorful tail |
| 6 | Parrot | (inline) | Green parrot |
| 7 | Swan | (inline) | White swan |
| 8 | Flamingo | (inline) | Pink flamingo |
| 9 | Royal Swan | (inline) | Swan with crown |
| 10 | Penguin | creatures/PenguinBuddy.html | Slate blue, waddle animation, cute beak |

---

## AQUATIC (renderAdultAquatic - if exists)

| Variant | Name | File | Notes |
|---------|------|------|-------|
| 0 | Jellyfish | Scripture Buddies/Jellyfish_Buddy.html | Transparent |
| 1 | Lil Jellyfish | Scripture Buddies/Lil_Jellyfish_Buddy.html | Smaller |
| 2 | Axolotl | Scripture Buddies/Axolotl_Buddy.html | Pink with gills |
| 3 | Narwhal | Scripture Buddies/Narwhal_Buddy.html | With horn |

---

## INSECTS (renderAdultInsect - if exists)

| Variant | Name | File | Notes |
|---------|------|------|-------|
| 0 | Bumblebee | Scripture Buddies/Bumblebee_Buddy.html | Yellow/black stripes |
| 1 | Purple Butterfly | Scripture Buddies/PurpleButterflyBuddy.html | Purple wings |
| 2 | Rainbow Butterfly | Scripture Buddies/RainbowButterflyBuddy.html | Multicolor wings |

---

## Creating New Creatures

1. **Copy HorseBuddy.html** as template (best structured)
2. **Modify colors** using CSS variables in :root
3. **Adjust features** while keeping positioning
4. **Test standalone** by opening HTML in browser
5. **Add to mammalDesigns** object in index.html
6. **Update adultVariants/adultNames** arrays

### Key Reminders
- Ears/horns go INSIDE head div (position relative to head)
- Tail must OVERLAP body (attachment point hidden)
- All colors use radial-gradient (never flat)
- Include highlight divs for 3D effect
- Add blink animation to eyes
