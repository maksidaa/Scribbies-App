# Scribbies

A scripture memorization game about hatching and raising creatures. Choose a starter egg, learn short verses, explore three trails, and bring new companions back to camp.

## Play and develop

```sh
npm ci
npm run dev
```

The local preview runs at http://127.0.0.1:5173. `npm run check` validates the game logic and render templates. `npm run build` creates the production app and an offline asset cache in `dist/`.

## The adventure

- Eighteen collectible species, three starter choices, three habitats, and eighteen trail encounters.
- Eggs earn warmth through practice and care. Hatched companions grow through baby, teen, adult, and radiant stages.
- Feed berries, play a matching game, choose a traveling companion, and collect wearable charms. Pets stay safe when the player takes a break.
- Five memorization modes: next-word recognition, missing words, word order, first-letter prompts, and full recall. Reading and optional on-device speech precede practice.
- Recognition alone cannot earn full mastery. Later-day unassisted recall earns the highest level; due dates bring learned verses back for review.
- A grown-up area for custom verses, backup, restore, sound and motion settings, and resetting progress.

The included passages use the King James Version. Custom verses keep the wording entered by a parent. Parents should select passages and translations appropriate for their child.

## Saves and privacy

The web app saves locally; the native app uses Capacitor Preferences. A previous snapshot protects against a damaged latest save. JSON backup and restore are available in the grown-up area; iOS uses the native share sheet. There are no game accounts, analytics, ads, chat, purchases, or backend services in this edition. The private web host has its own access and hosting services.

Compatible original `sb` saves migrate automatically without deleting the original save. Not every original creature has a corresponding adventure species. The original application is preserved as `classic.html`; original source art remains under `js/creatures/`. Classic features such as Firebase accounts and trading are not part of the new release.

## Artwork

Original CSS and SVG creatures remain the basis of the collection. Fox and axolotl rendering and selected baby designs have been refined. New meadow and camp illustrations and the Luma guardian are in `art-source/`, with optimized shipping assets in `public/assets/`. Source prompts are documented in `docs/`. The app includes idle, hatch, care, growth, and reward motion, with a reduced-motion setting.

`npm run build` regenerates the combined creature module and legacy keyframes. Edit original creature files, not `src/creature-art.js`.

## iOS and release

```sh
npm run ios:sync
npm run ios:open
```

The native app is `com.maksidaa.scribbies`, version 2.0.0. It uses the same developer team as Stake Admin, with a separate EAS project and app identity. See [the release guide](docs/ios-release.md) for the EAS workflow and validation limits.
