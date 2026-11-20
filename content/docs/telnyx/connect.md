---
title: 6. Give the keys to Knock
description: Add your four Telnyx values to your Vercel project, redeploy once, and Knock is connected.
updated: 2026-11-20
---
Knock reads its Telnyx settings from your Vercel project's **environment variables**, which only the server can see. They are never sent to anyone's phone or browser.

## Add the four values

1. Open [vercel.com](https://vercel.com), then your Knock project.
2. Go to **Settings**, then **Environment Variables**.
3. Add these four, one at a time. For each, enter the name exactly as shown, paste the value, and leave all environments ticked.

| Name | Value |
|---|---|
| `TELNYX_API_KEY` | the API key you copied |
| `TELNYX_PUBLIC_KEY` | the public key |
| `TELNYX_CONNECTION_ID` | the application ID |
| `TELNYX_NUMBER` | your number in international format, like `+14155550123` |

Double-check each value for stray spaces, quotes or commas. Knock cleans up the number and keys, but exactness avoids a debugging session.

## Redeploy

Environment variables only take effect on the next deployment.

1. Go to **Deployments**.
2. Open the menu on the latest deployment and choose **Redeploy**.
3. Wait for it to turn green, about a minute.

:::seen Seen in the wild
The app kept saying the Telnyx values were missing after they had been added. They had been added after the last deployment and no redeploy had happened. Every variable change needs a redeploy.
:::

## Check it

Open Knock and run first-time setup. The **Checks** screen should show five rows. If all five are green, Telnyx and Knock are connected.

If a row is red, it says why. The [first-time setup page](/docs/first-run) explains each one.

**Next:** [First-time setup and test call](/docs/first-run)
