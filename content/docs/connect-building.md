---
title: Connect your building
description: The last step is getting your building's intercom to call your Knock number. What to ask your property manager, a ready-to-send email, and two ways to do it.
updated: 2026-11-20
---
Everything so far was on your side. Now your building has to dial your Knock number instead of one person's phone.

## Before you ask: prove it works without the building

You can test almost the whole chain without touching the building.

1. From **any phone**, call your Knock number.
2. Knock should show **At the door** and your phones should ring.
3. Tap **Open door**. The phone that called hears a short beep and the call ends. That beep is the unlock tone.

If this works, Telnyx, your number, the webhook and the app are all fine. The only thing left to confirm is that your intercom accepts the tone, and a real visitor tests that.

:::warn If this test fails with "the customer you have dialed is not available"
Your Telnyx account is probably still on Trial. Trial accounts only take calls from your verified number. [Upgrade to Paid](/docs/telnyx/upgrade) first.
:::

## Two ways to point the building at Knock

### Option A: The building changes the number on file (best)

Ask your property manager or intercom company to replace the phone number for your unit with your Knock number. When it's done, a visitor buzzing your unit rings Knock.

### Option B: Forward calls from the number that's on file

If the building can't or won't change the number, keep it and set that phone to **forward all calls** to your Knock number. Your carrier's call-forwarding feature does this, usually by dialling a short code (such as `*72`) or from the phone's settings.

The downside is that the person whose number is on file stays in the loop, and forwarding stops working if their phone is off, out of service or changed.

## Ask the right person

Often the number on file is held by a property management company, a front desk or the intercom vendor. If you don't know who, ask whoever manages your building.

### Template email

> **Subject:** Update the intercom phone number for Unit 501
>
> Hi,
>
> Could you please update the phone number the intercom calls for my unit (501) to **+1 XXX XXX XXXX**?
>
> It's an internet phone number from a service that lets my roommates and me all answer the door. When a visitor buzzes, the call should work exactly as it does today: the intercom dials the number, and pressing the usual digit to unlock the door should still open it.
>
> Please let me know once it's changed, and if there's anything I need to do. Thank you!

Replace `501` and the number. If the person asks, a straightforward answer is: *"It's a phone number that rings several phones in my household instead of one."*

## After they change it

1. Ask a friend to buzz your unit from the street.
2. Knock should show **At the door** and your phones should ring.
3. Tap **Open door**. The door should unlock.
4. If it doesn't unlock, see "The door doesn't open" below.

:::tip Warn the person who used to get the calls
If you used to receive calls on one specific phone, tell that person it is no longer going to ring, so a visitor isn't ignored while everyone assumes someone else has it.
:::

## If the door doesn't unlock

If Knock says **Opened** but the door stays shut:

- **Wrong digit.** Check your unlock digit under [Settings](/docs/settings). Your building's digit might be `#`, `*` or another number. Ask whoever answered calls before, or the building.
- **The tone type.** In Telnyx, your Call Control application has a **DTMF Type** under Advanced settings. It defaults to **RFC 2833**. Some intercoms need a different type, and **Inband** is the usual alternative. Change it, save, and try again.
- **A silent line.** Some intercoms hang up if they hear nothing. Knock stays silent by default. Turn on the optional greeting in [Settings](/docs/settings) and test again.
- **The call never reaches Knock.** If Knock shows nothing at all when the visitor buzzes, the building is probably still dialling the old number.

More fixes are on [Troubleshooting](/docs/troubleshooting).

