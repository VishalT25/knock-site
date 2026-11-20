---
title: Troubleshooting
description: Find your symptom and get the fix. Covers "customer not available", Telnyx trial accounts, the door not unlocking, notifications on iPhone, push errors, and setup checks.
updated: 2026-11-20
---
Start with the symptom closest to yours. Every fix here comes from a real setup.

## Quick index

- [The caller hears "the customer you have dialed is not available"](#the-caller-hears-the-customer-you-have-dialed-is-not-available)
- [Knock shows nothing when someone buzzes](#knock-shows-nothing-when-someone-buzzes)
- [The setup checks are red](#the-setup-checks-are-red)
- [The test call fails](#the-test-call-fails)
- [Knock says Opened but the door stays shut](#knock-says-opened-but-the-door-stays-shut)
- [The intercom hangs up straight away](#the-intercom-hangs-up-straight-away)
- [Notifications don't work](#notifications-dont-work)
- [Push errors on screen](#push-errors-on-screen)
- [The buzzer number looks wrong](#the-buzzer-number-looks-wrong)
- [Escalation or the backup call never happens](#escalation-or-the-backup-call-never-happens)
- [I'm signed out or can't join](#im-signed-out-or-cant-join)
- [Deploy or database problems](#deploy-or-database-problems)

## The caller hears "the customer you have dialed is not available"

This means the call never reached Knock. In order of likelihood:

1. **Your Telnyx account is still on Trial.** Trial accounts only accept calls from the one number you verified. A call from your own phone works; your intercom's does not. Fix: [upgrade to Paid](/docs/telnyx/upgrade) (add about $5 of credit). This was the cause in the setup this guide is based on: everything else was correct.
2. **The number isn't attached to the app.** In Telnyx, open **Phone Numbers** and check the **Connection/Application** column names your Call Control app. If it's empty, assign the number on the application's **Numbers** tab.
3. **Telnyx can't reach your site, or Knock rejects the call.** Check the application's webhook address is exactly `https://your-site/api/telnyx` (no spaces or trailing slash, `https`, **API v2**). If `TELNYX_PUBLIC_KEY` is wrong or missing, Knock rejects every event. Fix the key and **redeploy**.
4. **Vercel is blocking public access.** If you turned on Vercel Authentication or Password Protection for the production site, Telnyx can't call your webhook. Turn it off for production.
5. **Variables added but not redeployed.** Every change to a variable needs a redeploy.

:::tip The quickest test
Call your Knock number from any phone that is **not** your verified one. If Knock rings, the chain works. If you hear "not available," start at item 1.
:::

## Knock shows nothing when someone buzzes

The call reached the building's equipment but not Knock.

- **The building is still dialling the old number.** Check that it has been changed (or that forwarding is on). Test by calling your Knock number yourself.
- **Your phone is offline.** The Open screen needs internet. The top bar shows **Live** when connected and **Reconnecting** when not.
- **The tab is old.** Close and reopen Knock, or pull down to reload.

## The setup checks are red

| Red row | Fix |
|---|---|
| **Telnyx API key** | `TELNYX_API_KEY` is missing, mistyped, or from a deleted key. Create a new key, paste it into Vercel, redeploy. |
| **Webhook signing key** | `TELNYX_PUBLIC_KEY` is missing. Copy it from Telnyx's **API keys, Public Key** tab, with no quotes or spaces. |
| **Call Control application** | `TELNYX_CONNECTION_ID` (the application's ID) or `TELNYX_NUMBER` is missing. |
| **Webhook reachable** | The site isn't reachable at its public address. Check `APP_URL` (usually unnecessary), and that Vercel protection is off for production. |
| **Notification keys** | You set your own `VAPID_` keys and one is wrong. Delete both and Knock creates its own. |

Press **Check again** after each fix. Changes to variables need a redeploy first.

:::seen Seen in the wild
"Webhook reachable" and "Notification keys" were green while the three Telnyx rows were red. That is exactly what a fresh install looks like: the site is fine, and only the Telnyx values still need adding.
:::

## The test call fails

| What you see | Cause and fix |
|---|---|
| Phone never rings | Trial account: only your verified mobile can be called. [Upgrade](/docs/telnyx/upgrade). Or the number is typed wrongly. |
| An error naming Telnyx and a status like 401 or 403 | The API key is wrong or the account is restricted. Make a new key; check the account level. |
| "Enter the number in international format" | Use `+14155550123`: a plus sign, country code, digits, no spaces. |
| Rings, but nothing ticks after you answer | The webhook isn't reaching Knock. Check the application's webhook address and `TELNYX_PUBLIC_KEY`. |
| Call fails to start | The application has no **outbound voice profile**. Attach one on the application's **Outbound** tab. |

## Knock says "Opened" but the door stays shut

Knock sent the tone, but the intercom didn't act on it.

1. **Wrong digit.** The default is `9`. Ask whoever used to answer, or the building. Change it under **Settings, Unlock digit(s)**.
2. **The tone is sent in a form the intercom ignores.** In Telnyx, open your Call Control application, **Details** tab, **Advanced settings**, **DTMF Type**. The default is **RFC 2833**. Try **Inband**, save, and test again.
3. **The tone is too short or the intercom wants a pause.** Rare. Ask the building whether the intercom needs the key press at a specific moment.
4. **The call really is a different kind of system.** Re-read [Will it work with my intercom?](/docs/will-it-work).

## The intercom hangs up straight away

Some intercoms drop a call that stays silent. Knock holds the line silently by default.

- Turn on **Say "One moment please" to the visitor** in **Settings** and test again.
- Remember Telnyx adds its own announcement before spoken words on most accounts, so the visitor hears that first.
- If it still hangs up, ask the building how long it waits for a key press.

## Notifications don't work

Run through these in order.

1. **On iPhone, is Knock opened from the Home Screen icon?** If it's in a Safari tab, notifications are impossible. Add to Home Screen, open it from there. iOS 16.4 or newer is required.
2. **Press Send test notification** in **Settings, Notifications**. It reports exactly what happened.
3. **Is permission blocked?** On iPhone, **Settings, Notifications, Knock**. On Android, the app's notification settings. Then reload Knock.
4. **Focus or Do Not Disturb** can hold them back.
5. **Turn notifications off and on again** in Knock. This renews the phone's subscription.
6. **Are quiet hours on?** They silence pings unless you're expecting someone.

:::seen Seen in the wild
Notifications "didn't work" on a laptop and a phone for two different reasons. On the laptop the push keys in Vercel were invalid, so the server couldn't send. On the phone, Knock was running in a Safari tab. Both look identical from the outside. The **Send test notification** button names the real cause.
:::

## Push errors on screen

| Message | Meaning and fix |
|---|---|
| "Notifications aren't set up on the server yet" | The server couldn't create or load its push keys. If you set your own `VAPID_` keys, delete both so Knock makes its own, or fix them as a matching pair. Redeploy. |
| "The server couldn't set up push. The push library said …" | A push setting is malformed. `VAPID_SUBJECT` should look like `mailto:you@example.com`. Knock repairs a bare email, but not a nonsense value. |
| "…not a pair" | Both `VAPID_` keys are valid but belong to different pairs. Use both from the same set, or delete both. |
| "The push service rejected the server's keys (HTTP 403)" | The keys changed after this phone subscribed. Press **Turn off**, then **Enable notifications** on that phone. |
| "This phone's subscription expired (HTTP 410)" | Same fix: turn off and on again. |
| "Your phone refused to subscribe" | The browser blocked it. Check the permission, and on iPhone use the Home Screen app. |

## The buzzer number looks wrong

Settings shows the number from `TELNYX_NUMBER`. It should read like `+1 415 555 0123`. If it shows a trailing comma, spaces or brackets, you pasted extra characters into the variable. Knock cleans these up, but retype the value as `+` followed by digits only, and redeploy.

If it says **Not set**, `TELNYX_NUMBER` isn't saved. Add it in Vercel and redeploy.

## Escalation or the backup call never happens

- **Everyone isn't asked after 8 seconds:** make sure someone actually set **I'm expecting someone**. Without it, everyone is asked at once.
- **The backup call never rings:** a **Fallback number** must be set under Settings, your Telnyx account must be Paid, and your outbound voice profile must allow calling that country.
- **Timers run late:** the background work finishes while the page is open. Open phones keep it moving, but a call that nobody is watching may escalate slightly late on Vercel's free plan.

## I'm signed out or can't join

- **"Invalid, used or expired code":** codes work once and expire. Ask the admin for a new one.
- **Joined, then installed, and was signed out:** on iPhone, Safari and the Home Screen app don't share sign-in. Install first, then join from the icon. You'll need a new code.
- **Too many attempts:** wait a few minutes. Invites and the door are rate-limited.
- **A phone was signed out by the admin:** use a new invite code.

## Deploy or database problems

- **"DATABASE_URL is not set" or the setup page errors:** attach Neon under Vercel's **Storage** tab, then **Redeploy**.
- **Setup says the token is wrong:** use exactly the `SETUP_TOKEN` you saved in Vercel, with no spaces.
- **The site still looks old after an update:** reload. If it persists, close the Home Screen app and reopen it.

## Still stuck?

Open an issue on the repository. Include which step you're on and the **exact text** of any error on screen. Never include your API key, setup token or invite codes.
