---
title: FAQ
description: Short answers to the most common questions about Knock, its costs, how it works and what it needs.
updated: 2026-11-20
---
## Will Knock work with my intercom?

If your intercom calls a regular phone number when a visitor buzzes, and unlocks the door when it hears a key press (usually 9) on that call, yes. Many apartment buildings work this way. Wall handsets and vendor-app-only systems don't. See [Will it work with my intercom?](/docs/will-it-work).

## Is it really free?

The software, Vercel's free tier and Neon's free tier cost nothing. The Telnyx number is about $1 a month, plus about half a cent a minute for calls, and upgrading a new Telnyx account needs a card and some credit. About $5 worked for us. See [Costs](/docs/costs).

## Why do I need to upgrade Telnyx?

A Trial account only takes calls from the single number you verified. Your building's intercom isn't that number, so it's rejected. See [Upgrade to Paid](/docs/telnyx/upgrade).

## Do my roommates have to install an app?

No app store. Knock is a web app added to the Home Screen. Each roommate opens your link, enters a one-time code and their name, and turns on notifications. See [Roommates and phones](/docs/roommates).

## Does it work on iPhone?

Yes, on iOS 16.4 or newer, when installed to the Home Screen and opened from there. Notifications need that.

## What if nobody opens the door?

The people expecting a visitor are asked first, then everyone, then (if you set a backup number) Knock rings the backup number and connects the visitor so someone can press the digit. See [Using Knock](/docs/using-knock).

## Can the visitor hear anything?

By default Knock answers silently and holds the line. There's an optional spoken greeting, off by default, because Telnyx adds its own automated-call announcement before spoken words on most accounts.

## Who can open my door? Is it secure?

Only phones that joined with a single-use invite code. Telnyx's events are verified with a signature. The real risks are a signed-in lost phone and auto-open. Read [Security and safety](/docs/security).

## Can anyone else see my calls or my number?

No. Your data is in your own database and your own Vercel project. There is no central Knock server and no analytics.

## Does it work for a house or an office?

Yes, for anything that dials a phone number and unlocks on a key press. Check the same two requirements.

## Why Telnyx, not Twilio or another provider?

Knock is built on Telnyx's call-control API, which lets it answer, hold, send a tone and transfer a call. Other providers would need code changes.

## Is it allowed in my building?

Check your lease and house rules. Knock changes nothing in the building: you only put a different phone number on file.

## How do I turn off auto-open?

Press **Cancel** on the yellow banner, which shows on every phone while it's on. It also always expires by itself.

## How do I stop everything?

Delete the Vercel project, the Neon database and, if you like, release the Telnyx number. See [Updating and removing Knock](/docs/updating).
