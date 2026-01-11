# Scribbies App - Claude Instructions

## Project Overview
Scribbies is a virtual pet web app where users raise "Scribbies" (cute creatures) by reading scriptures. Single HTML file app with CSS-only creature and furniture designs.

## GitHub Repository
- **Repo:** https://github.com/maksidaa/Scribbies-App
- **Live Site:** https://maksidaa.github.io/Scribbies-App/

## Deployment Workflow
After every 3-5 significant changes, **offer to commit and push to GitHub**. The user's friend tests the live site, so keeping it updated is important.

```bash
git add . && git commit -m "Description of changes" && git push
```

## Key Files
- `index.html` - Main app (all HTML, CSS, JS in one file - 14k+ lines)
- `Scripture Buddies/` - Individual creature HTML designs (reference files)
- `creatures/` - New creature files, workshop, and documentation
- `css/styles.css` - Extracted CSS (reference)

## Design Principles
- CSS-only designs (no external images) for icons, furniture, creatures
- Scalable designs using percentage-based sizing
- Cute, child-friendly aesthetic
- Uses Tailwind CSS via CDN

---

## 🎨 ARTWORK CREATION (CRITICAL)

### Before Creating Any Creature
1. **READ** `creatures/ARTWORK_RULES.md` - Contains all positioning rules
2. **REFERENCE** `creatures/HorseBuddy.html` - Best template to copy
3. **USE** `creatures/workshop.html` - Live preview environment

### Artwork Workflow
```
1. Open creatures/workshop.html in browser (user does this)
2. Claude edits workshop.html - paste creature in #creature div
3. User refreshes browser to see changes
4. Iterate until approved
5. Save to standalone file (creatures/NewCreature.html)
6. Copy to index.html mammalDesigns object
7. Update adultVariants/adultNames arrays
```

### Golden Rules (NEVER VIOLATE)
1. **ALWAYS copy HorseBuddy.html structure** - Never freestyle positioning
2. **Ears/horns go INSIDE head div** - Not in main container
3. **Tail OVERLAPS body** - Attachment point must be hidden
4. **No flat colors** - Every surface uses radial-gradient
5. **Test in workshop.html first** - Before touching index.html

### Standard Container
- Size: 240×285px
- All positioning is absolute within container

### Z-Index Layering
```
tail:        5   (behind body)
back-legs:   15
body:        20
neck:        21
front-legs:  25
ears:        30  (inside head)
head:        40
horns:       45
```

### Pre-Submit Checklist
Before saying "done" on any creature:
- [ ] Copied structure from HorseBuddy.html
- [ ] Ears INSIDE head div
- [ ] Tail overlaps body (attachment hidden)
- [ ] All colors use radial-gradient
- [ ] Highlight divs for 3D effect
- [ ] Blink animation on eyes
- [ ] Main animation on container
- [ ] overflow:visible where needed

### Key Files for Artwork
| File | Purpose |
|------|---------|
| `creatures/ARTWORK_RULES.md` | Full positioning/styling rules |
| `creatures/CREATURE_INDEX.md` | Map of all creatures & variants |
| `creatures/workshop.html` | Live preview environment |
| `creatures/HorseBuddy.html` | Best template to copy |
| `creatures/CowBuddy.html` | Example with special features |

### When User Asks for New Creature
1. Ask: "What animal? What colors? Any special features?"
2. Copy HorseBuddy.html structure
3. Edit workshop.html with new creature
4. Have user verify in browser
5. Only after approval, integrate to index.html

---

## File Size Warning
`index.html` is 14,500+ lines. For creature work:
- DON'T read entire file
- DO read specific sections (grep for function names)
- DO use standalone creature files for reference
- DO edit workshop.html for iteration
