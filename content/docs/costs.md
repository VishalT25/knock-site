---
title: Costs, accounts and time
description: What Knock costs to run (about $1 to $2 a month), which accounts you need, and the Telnyx trial-account catch that stops most first attempts.
updated: 2026-11-20
---
Knock the software is free and open source. You run it on accounts you own, and the real costs are small.

## What you pay

| Item | Cost | Notes |
|---|---|---|
| Knock | Free | MIT licensed. |
| Hosting on Vercel | Free | The Hobby plan is enough for one household. |
| Database on Neon | Free | The free tier is enough. |
| Telnyx phone number | About $1 a month | Telnyx's published price for a local number. |
| Calls through Telnyx | About half a cent a minute | A buzz that lasts under a minute costs a fraction of a cent. |

A household that gets 30 short buzzes a month should expect roughly **$1 to $2 a month** in total. Telnyx may change its prices, so check [Telnyx's number pricing](https://telnyx.com/pricing/numbers) before you buy. The Telnyx documentation we checked does not state a minimum top-up; if it asks for one when you add a card, you'll see it before you pay.

## The accounts you need

You create all of these yourself, so you own your data and your phone number.

| Account | What it's for | Needs a card? |
|---|---|---|
| **GitHub** | Vercel copies the Knock code into your GitHub account when you click Deploy. | No |
| **Vercel** | Runs the app. | No (free plan) |
| **Neon** | The database, attached from inside Vercel. | No (free plan) |
| **Telnyx** | Answers your building's phone call. | **Yes, to upgrade** (see below) |

You also need a **mobile number that can receive a text or call**, for Telnyx's verification.

## The catch: Telnyx trial accounts

:::seen Seen in the wild
A new Telnyx account starts as a **Trial**. On a trial, Telnyx only lets the number you verified call your Knock number. So the test call to your own phone works, and then your building's intercom is rejected. The caller hears *"the customer you have dialed is currently not available."* Nothing is wrong with Knock; the account is simply still on Trial.
:::

According to Telnyx's own documentation, a trial account is limited to **one verified phone number**, for both calls in and calls out. Spoken words and transfers on trial accounts also get an automated-call announcement added in front. The fix is to **upgrade the account to Paid**, which needs a card, a verified mobile number and a service address. The step-by-step is on [Upgrade to Paid](/docs/telnyx/upgrade).

:::warn Upgrade before your number is reclaimed
Telnyx's trial documentation says a trial's phone number is reclaimed within 30 days if the account isn't upgraded. Don't leave it.
:::

