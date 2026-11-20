---
title: Settings and environment variables
description: Every setting in Knock, what it does, its default, and where to change it: inside the app, or in Vercel's environment variables.
updated: 2026-11-20
---
Settings live in two places. **In the app**, the admin changes behaviour under **Settings**. **In Vercel**, environment variables hold the secrets and some defaults. The saved in-app value wins over the matching environment default.

## In the app (admin)

| Setting | What it does | Default |
|---|---|---|
| **Household name** | Shown at the top of the app. | What you typed at setup |
| **Time zone** | Used for quiet hours. | Your browser's time zone at setup |
| **Unlock digit(s)** | What Knock presses on the building's call to open the door. | `9` |
| **Ask everyone after (seconds)** | How long the first group has before everyone is asked loudly. | `8` |
| **Backup call after (seconds)** | How long before Knock rings the backup number. | `20` |
| **Fallback number** | The backup number, in international format. Leave empty for none. | Empty |
| **Longest auto-open window (minutes)** | The ceiling for auto-open. Hard cap is 60. | `60` |
| **Say "One moment please" to the visitor** | Optional spoken greeting. Off by default. | Off |

**Unlock digit(s):** allows `0-9`, `*` and `#`, up to 8 characters. If your building wants `#`, put `#` here.

**The greeting:** Telnyx adds its own automated-call announcement before spoken words on most accounts, so the visitor would hear Telnyx's line first. Silence is usually better. If your intercom hangs up on a silent line, turn the greeting on and test.

**Fallback number:** needs your Telnyx account to be Paid and your outbound voice profile to allow calling that country. Knock transfers the held call so the person at the backup number can press the digit themselves.

Everyone can set their own **Quiet hours** and **Appearance**, and admins can manage **People & phones** and **Invites**, in the same Settings screen.

## In Vercel (environment variables)

Open your project in Vercel, **Settings, Environment Variables**. Changing any of these needs a **Redeploy**.

| Name | Needed | What it is |
|---|---|---|
| `SETUP_TOKEN` | **Yes** | The password for first-run setup. |
| `DATABASE_URL` | **Yes** | Set by the Neon database you attached in Vercel's Storage tab. |
| `TELNYX_API_KEY` | **Yes** | Your Telnyx API key. Secret. |
| `TELNYX_PUBLIC_KEY` | **Yes** | Your Telnyx public key. |
| `TELNYX_CONNECTION_ID` | **Yes** | The Call Control application's ID. |
| `TELNYX_NUMBER` | **Yes** | Your Knock number, like `+14155550123`. |
| `UNLOCK_DIGIT` | No | Default unlock digit. Default `9`. |
| `ESCALATE_AFTER` | No | Default for "Ask everyone after". Default `8`. |
| `BACKUP_TIMEOUT` | No | Default for "Backup call after". Default `20`. |
| `FALLBACK_NUMBER` | No | Default backup number. |
| `AUTO_OPEN_MAX_MINUTES` | No | Default ceiling for auto-open. Maximum `60`. |
| `GREETING` | No | `1` turns the spoken greeting on by default. |
| `APP_URL` | No | Your public address. Usually unnecessary on Vercel. |
| `VAPID_PUBLIC_KEY`, `VAPID_PRIVATE_KEY`, `VAPID_SUBJECT` | No | Your own notification keys. If you leave them out, Knock creates its own. If you set one, set both. |

:::warn Setting your own notification keys
Leave the `VAPID_` settings out unless you have a reason. If you set them, they must be a matching pair, and `VAPID_SUBJECT` should look like `mailto:you@example.com`. Phones that subscribed under a different key will need to turn notifications off and on again.
:::

## What is stored where

| Stored | Where |
|---|---|
| Household name, people, call log, settings, invite hashes, sign-in sessions, notification subscriptions | Your Neon database |
| The notification keys Knock generated (if you didn't set your own) | Your Neon database |
| Your Telnyx API key and public key | Vercel environment variables only. Never in the database, never sent to phones. |
