# Scripture Buddy

A gamified scripture memorization app that helps you learn and master scriptures and inspirational quotes through various interactive practice modes.

## Features

### Core Features
- **XP System**: Earn experience points for daily logins and practice sessions
- **Daily Streaks**: Build momentum with consecutive daily logins
- **Mastery Levels**: Track progress from "New" to "Mastered" for each verse
- **Buddy Pet**: Virtual companion that starts as an egg (waiting to hatch!)
- **Daily Goals**: Complete 3 practice sessions per day

### Practice Modes
1. **Predict** (⭐ - Easy): Predict the next word with multiple choice
2. **Fill Blanks** (⭐⭐): Fill in missing words (every 4th word)
3. **Word Jumble** (⭐⭐⭐): Arrange scrambled words in correct order
4. **First Letters** (⭐⭐⭐⭐): Type words using first-letter hints
5. **Full Recall** (⭐⭐⭐⭐⭐): Recite the entire verse from memory

### Verse Management
- Add custom scriptures and quotes
- Organize with tags (Faith, Hope, Charity, etc.)
- Edit and delete verses
- Track mastery progress for each verse

## How to Use

1. **Open**: Simply open `index.html` in any web browser
2. **Start with defaults**: App comes preloaded with 12 starter verses
3. **Practice**: Choose a practice mode and start memorizing
4. **Add verses**: Go to "Verses" tab and click "+ Add"
5. **Track progress**: View your XP, streak, and stats on the home screen

## Technical Details

- **Single-file app**: Everything in one HTML file
- **No server required**: Runs entirely in the browser
- **Data storage**: Uses localStorage for persistence
- **Styling**: TailwindCSS via CDN
- **Mobile-friendly**: Responsive design optimized for mobile devices

## Data Storage

All data is stored locally in your browser's localStorage under the key `sb`. To reset:
- Go to Settings tab and click "Reset Progress", or
- Clear your browser's localStorage

## XP Rewards

- Daily login: +10 XP
- First practice of the day: +15 XP bonus
- Predict mode: 1-5 XP (based on accuracy)
- Fill Blanks: +5 XP
- Word Jumble: +7 XP
- First Letters: +8 XP
- Full Recall: +10-15 XP (15 for perfect score)
- Mastering a verse: +50 XP
- 7-day streak milestone: +50 XP
- 30-day streak milestone: +200 XP

## Starter Verses

Includes 12 preloaded verses:
- LDS scriptures (Alma, Moroni, 2 Nephi, Ether, D&C, Mosiah)
- Bible verses (Proverbs, Philippians, Joshua)
- Quotes from LDS leaders (Uchtdorf, Hinckley, Holland)
