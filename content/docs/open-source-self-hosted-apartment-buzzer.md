---
title: An open source, self-hosted apartment buzzer app
description: Knock is a free, MIT-licensed apartment buzzer app you run on your own accounts. What open source and self-hosted mean here, what you control, and what you take on.
updated: 2026-11-20
---
Most apartment buzzer apps are services: you install the app, pay a subscription, and the company runs everything. Knock works the other way. It is **open source** and **self-hosted**, so the whole thing runs on accounts you own.

## What "open source" means here

Knock's code is public on [GitHub](https://github.com/VishalT25/knock) under the **MIT licence**. Anyone can read it, check what it does with your call and your door, copy it, change it, and contribute fixes. There is no paywalled tier and nothing to sign up for with Knock itself.

## What "self-hosted" means here

You deploy your own copy. Three accounts, all yours:

- **Vercel** runs the app (free plan is enough for one household).
- **Neon** stores your household, call log and settings (free plan).
- **Telnyx** provides the phone number your building calls (about $1 to $2 a month).

Deployment is one button, then a setup wizard. See [Deploy Knock](/docs/deploy) and [costs](/docs/costs).

## What you control

- **Your data.** The call log and the list of who lives with you stay in your own database. Nobody else, including the author of Knock, can see it.
- **Your phone number.** It is yours in your own Telnyx account. You can keep it or take it elsewhere.
- **Your updates.** You choose when to take a new version. See [Updating and removing Knock](/docs/updating).
- **Your off switch.** Delete the project and the number, and everything is gone. See the same page.

## What you take on

Self-hosting is not free of work, and it is worth being honest about that:

- **Setup takes about 30 minutes**, mostly creating a Telnyx account, compared with two minutes for a hosted app.
- **You are the operator.** If a service Knock depends on changes, you update your copy. There is no support desk, though the [troubleshooting guide](/docs/troubleshooting) covers the usual problems.
- **It can unlock a building entrance.** Treat your accounts and invite codes like a physical key. Read [Security and safety](/docs/security).

## Is it right for you?

If you want the simplest possible install and don't mind a subscription, a hosted app may suit you better. See [apartment buzzer apps compared](/docs/apartment-buzzer-app-alternatives). If you like owning your setup, live with roommates, and want something you can inspect, Knock is built for that.

Your building also has to work with it. Check with the [five-minute test](/docs/will-it-work).
