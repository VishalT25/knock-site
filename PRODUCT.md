# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Delegated (user confirmed): Next.js App Router + TypeScript, Vercel free tier, Neon Postgres (`@neondatabase/serverless`), `web-push` (VAPID), Telnyx Call Control API, SSE with polling fallback, Vitest. For CSS the user asked to use Tailwind CSS + daisyUI (they found it and want it used); daisyUI supplies base components (toggle, input, tabs, modal, badge) under a custom theme; the Open button and identity pieces are bespoke.

## Users

One household of three roommates on iOS and Android. They use the app mostly hurried and one-handed: the phone buzzes mid-task, often in dim light or at night, and they need to let a visitor in right now. One admin (setup, invites, settings); everyone else is a member.

## Product Purpose

A building intercom dials the household's Telnyx number when a visitor enters the unit code. Today only one person's phone is on file and they press 9. Knock lets anyone in the household open the building door from their own phone, with routing so the person expecting a visitor is notified first. Success: the right person taps once, the door opens, everyone else sees who opened it.

## Positioning

Self-hosted, open-source (MIT), single-household, no signup and no third-party buzzer service. Name: Knock.

## Operating Context

Telnyx answers the intercom call, holds it, and sends the unlock DTMF digit (default 9) when someone taps Open. Web push notifies devices; iOS notifications cannot show action buttons, so every notification opens straight to the Open screen. Installed as a PWA.

## Capabilities and Constraints

- Screens: Open, Log, Household (members, expecting/auto-open), Settings (admin), Setup wizard.
- First tap wins (atomic claim). Auto-open window max 60 min. Expecting toggle expires (default 45 min) and clears after the first door opened.
- This app can unlock a building entrance; README must say so plainly.
- Telnyx secrets stay server-side.

## Brand Commitments

Name "Knock". Original branding only. License MIT.

## Evidence on Hand

None: no real call logs, screenshots or users yet. Demo data must be labelled synthetic.

## Product Principles

1. The Open button is the product; everything else serves it.
2. Honest state: always show waiting / opening / opened by X / not opened.
3. Fail loud, never silent: a missed buzz or denied push must be visible.
4. Security before convenience: auto-open is explicit, time-boxed and announced to everyone.

## Accessibility & Inclusion

Large tap targets, strong contrast in light and dark, visible focus, reduced-motion respected, haptics optional.
