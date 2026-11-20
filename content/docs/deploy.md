---
title: Deploy Knock (one click)
description: Put your own copy of Knock online with the Deploy to Vercel button. You will have a working web address and an empty database in about five minutes.
updated: 2026-11-20
---
This step puts Knock on the internet at an address like `https://knock-yourname.vercel.app`. You need that address for the next step, because Telnyx has to know where to send phone-call events.

:::tip You can do this before you have a Telnyx number
Deploying first is intentional. Telnyx asks for a webhook address, and that address only exists once Knock is deployed.
:::

## Before you start

- A [GitHub](https://github.com/signup) account (free). The button copies the Knock code into it.
- A [Vercel](https://vercel.com/signup) account (free). Signing up with GitHub is the quickest.

## 1. Press the button

Use the **Deploy to Vercel** button on the [home page](/) or at the top of the [docs overview](/docs). It opens Vercel with the Knock code ready to copy.

## 2. Follow Vercel's screens

1. **Create a Git repository.** Vercel asks to copy Knock into a new repository in your GitHub account. Keep the suggested name, `knock`, and choose **private** if it offers the choice.
2. **Add the database.** Vercel offers a Neon Postgres database. Press **Add**, keep the **Free** plan (no card needed) and press **Continue**, then **Create**. You can leave Neon's *Auth* switch as it is; Knock doesn't use it. This is what stores your household, call log and notification settings, and it creates the `DATABASE_URL` setting for you.
3. **Choose a setup password.** Vercel asks for one value, `SETUP_TOKEN`. This is *a password you invent*. You will type it once on Knock's first-run screen so nobody else can claim your deployment in the minutes before you do. Make it long and unguessable, and keep it somewhere safe (a password manager is ideal).
4. **Press Deploy.** The first time on a new Vercel account, it may ask you to verify your identity with a 6-digit code emailed to you. Enter it and the deploy carries on. It takes about a minute.

:::tip If Vercel did not add the database
Open your project in Vercel, go to **Storage**, choose **Create**, pick **Neon**, and connect it to the project. This sets `DATABASE_URL`. Then go to **Deployments**, open the menu on the latest one and choose **Redeploy**.
:::

## 3. Note your address

When it finishes, Vercel shows your site's address, for example `https://knock-yourname.vercel.app`. **Write it down.** You will paste it into Telnyx as `https://knock-yourname.vercel.app/api/telnyx`.

Open the address in a browser. You should see Knock's first-run screen asking for a household name. **Don't set it up yet.** The Telnyx step comes first so the setup checks can all go green.

## What happens next

You now have an app with no phone line behind it. Next you will create the Telnyx account that answers your building's call: [Telnyx setup](/docs/telnyx).

