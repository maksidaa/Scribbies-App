# Scribbies Artwork Rules

**READ THIS FIRST before creating any creature.**

## Golden Rules

1. **NEVER freestyle** - Always copy HorseBuddy.html structure
2. **Test standalone first** - Edit workshop.html, verify in browser, THEN integrate
3. **Ears/horns INSIDE head div** - Position relative to head, not container
4. **Hide attachment points** - Tail must overlap body
5. **No flat colors** - Every surface uses radial-gradient

---

## Container & Positioning

```
Container: 240×285px (scaled from 320×380 at 0.75)

STANDARD POSITIONS (from Horse - copy exactly):
┌─────────────────────────────────────┐
│  Ears: top:-15px (inside head div)  │
│  Head: top:0-12px, left:64px        │
│        98×120px                     │
│                                     │
│  Neck: top:79px, left:86px          │
│        49×68px                      │
│                                     │
│  Body: top:113px, left:45px         │
│        135×105px                    │
│                                     │
│  Tail: top:128-130px, overlapping   │
│        body (z-index 5)             │
│                                     │
│  Front legs: top:180px              │
│              left:56px, left:135px  │
│                                     │
│  Back legs: top:173px               │
│             left:86px, left:154px   │
└─────────────────────────────────────┘
```

---

## Z-Index Layering (CRITICAL)

```css
tail:        z-index: 5   /* Behind everything */
back-legs:   z-index: 15  /* Behind body */
body:        z-index: 20  /* Main layer */
neck:        z-index: 21  /* Just above body */
front-legs:  z-index: 25  /* In front of body */
ears:        z-index: 30  /* On head */
accessories: z-index: 35  /* Hats, etc */
head:        z-index: 40  /* Top layer */
horns/tuft:  z-index: 45  /* Above head */
```

---

## 3D Effect Techniques

### Body/Head Gradient (light source top-left)
```css
background: radial-gradient(
    ellipse at 38% 28%,
    #LIGHTEST 0%,
    #LIGHT 35%,
    #BASE 70%,
    #DARK 100%
);
```

### Inner Shadows for Depth
```css
box-shadow:
    inset 8px 8px 20px rgba(255,255,255,0.5),  /* highlight */
    inset -5px -5px 12px rgba(0,0,0,0.2);      /* shadow */
```

### Highlight Overlay (place inside element)
```html
<div style="position:absolute;width:30px;height:22px;
    background:rgba(255,255,255,0.5);border-radius:50%;
    top:10px;left:15px;filter:blur(5px);"></div>
```

---

## Standard Eye Pattern

```html
<div style="width:15px;height:18px;
    background:radial-gradient(circle at 35% 35%, #4a3a30, #1a1a1a);
    border-radius:50%;position:relative;
    animation:CREATURE-blink 4s infinite;">
    <!-- Main sparkle -->
    <div style="position:absolute;width:5px;height:5px;
        background:white;border-radius:50%;top:3px;left:3px;"></div>
    <!-- Secondary sparkle (optional) -->
    <div style="position:absolute;width:2px;height:2px;
        background:white;border-radius:50%;bottom:4px;right:3px;
        opacity:0.5;"></div>
</div>
```

---

## Standard Leg Pattern

```html
<div style="position:absolute;width:29px;height:60px;
    background:radial-gradient(ellipse at 40% 30%, #LIGHT, #BASE, #DARK);
    border:3px solid #OUTLINE;
    border-radius:8px 8px 11px 11px;
    top:180px;left:56px;z-index:25;
    box-shadow:inset 3px 3px 8px rgba(255,255,255,0.4),
               inset -2px -2px 5px rgba(0,0,0,0.2);">
    <!-- Hoof/paw -->
    <div style="position:absolute;bottom:-2px;width:100%;height:17px;
        background:radial-gradient(ellipse at 50% 40%, #HOOF_LIGHT, #HOOF_DARK);
        border-radius:0 0 8px 8px;"></div>
</div>
```

---

## Pre-Submit Checklist

Before saying "done", verify ALL of these:

- [ ] Copied structure from HorseBuddy.html
- [ ] Ears positioned INSIDE head div
- [ ] Horns/accessories INSIDE head div
- [ ] Tail overlaps body (attachment not visible)
- [ ] All surfaces use radial-gradient
- [ ] Highlight divs added for 3D effect
- [ ] Border color matches darker body shade
- [ ] Blink animation on eyes
- [ ] Main bounce/float animation on container
- [ ] overflow:visible on head if ears extend beyond
- [ ] overflow:visible on muzzle if items extend beyond
- [ ] Z-index follows standard layering

---

## Common Mistakes to Avoid

❌ Positioning ears relative to container (they float away)
✅ Position ears inside head div with left:-18px or similar

❌ Tail positioned past body edge (looks disconnected)
✅ Tail overlaps body with lower z-index (attachment hidden)

❌ Flat background colors
✅ Always use radial-gradient for 3D depth

❌ Animating entire muzzle for chewing
✅ Create separate lower-jaw div, animate only that

❌ Starting from scratch
✅ Copy Horse → change colors → adjust features

---

## Color Palette Examples

### Horse (warm brown)
```css
--coat: #b07d62;
--coat-light: #c99b7a;
--coat-dark: #8d5d46;
--mane: #4a3728;
--muzzle: #d9b9a6;
```

### Cow (white with spots)
```css
--body: #f5f5f5;
--body-light: #ffffff;
--spots: #3a3a3a;
--muzzle: #ffd0cc;
--horn: #d4c4a8;
```

### Fox (orange)
```css
--fur: #f97316;
--fur-light: #fb923c;
--fur-dark: #ea580c;
--chest: #fef3c7;
--nose: #1a1a1a;
```

### Bear (brown)
```css
--fur: #8b5a2b;
--fur-light: #a67c52;
--fur-dark: #6b4423;
--muzzle: #d4b896;
--nose: #2d2323;
```

---

## Workflow

1. Open `workshop.html` in browser
2. Claude edits `workshop.html` creature div
3. User refreshes browser to see changes
4. Iterate until approved
5. Copy final creature to standalone file
6. Copy to index.html mammalDesigns object
7. Update adultVariants/adultNames arrays
