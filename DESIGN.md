# Knock site design system

The site **inherits the Knock app's world unchanged**: iOS-style Liquid Glass over a warm gradient with one orange accent, orange glass keys, dot-matrix (Doto) readouts, and a light/dark switch. The tokens in `app/globals.css` are copied from the app's themes (`--base-*`, `--primary`, `--glass-*`, `--bg-*`, `--orb`, `--orange-ink`), so a colour changed in the app should be changed here too.

## What the site adds

- **The hero is the app.** Headline and two buttons on the left; on the right a working, tappable replica of the Open screen that plays itself through standby, ringing, opening and opened. A glass notification ("Someone is at the door") appears beside it while it rings and an "Opened by Maya" pill when it opens, and the orange glow behind it brightens on a buzz. (An earlier version used an intercom-panel hero with a readout and buzzer buttons; it was too wordy and did not show the product, so it was removed.)
- **The intercom checker:** three questions that return a verdict (good, maybe, bad) with the next link.
- **Docs (Read mode):** a calm glass reading layout: sticky section nav, 46rem measure, on-page table of contents, callouts (tip, warn, danger, "seen in the wild"), and annotated screenshots whose numbered orange rings are called "ring 1…n" in the text.

## Restraint

The home page says each thing once: a hero that is the product, four short "how it works" beats, a problem in two lines, a checker, four tiles, three cost rows, a one-sentence safety note and five questions. Detail lives in the docs. Buzzers and readouts inside the hero plate are outlined, not glass, so glass is never nested in glass.

## Rules

- Doto only for readouts, countdowns, invite codes and the demo phone. Everything else is the UI face (system font on Apple devices, Hanken Grotesk fallback).
- Muted text is at least 72% ink (about 6:1 on light glass). Orange text and icons on light glass use `--orange-ink`, never the bright key orange.
- Glass falls back to a solid surface without `backdrop-filter` or with reduced transparency. Reduced motion stops the cursor blink, the orb and the demo's auto-play.
- One `h1` per page, headings in order, no `h4` without an `h3`.
- Screenshots never contain keys, emails, balances or real phone numbers. App figures use sample data and a fictional 555 number.

## Verified

Headless Chrome on the production build, light and dark, at 1440 and 390 wide: all 21 pages fit a phone without horizontal scroll, every image loads, every page has one `h1`, a canonical URL and a unique title and description. An independent finish review scored the eight material fixes (6 resolved, 2 partial); the last small batch (numbering, tap-to-enlarge hint, light-mode tile fill, title length, image seam) was not re-reviewed.

## Known gaps

No videos. No screenshots of Telnyx sign-up, the identity check, phone verification or Vercel's environment-variable screens. The upgrade page uses one figure for a multi-step task. Light-mode glass on the buzzers and tiles is firmer than before but still pale on the cream page.
