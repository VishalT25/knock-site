---
title: "Telnyx setup: overview"
description: Telnyx is the account that answers your building's phone call. This section walks through every click, with screenshots, in six short steps.
updated: 2026-11-20
---
Telnyx answers your building's call and presses the unlock digit when someone taps **Open door**. It's the longest part of setup, so it's split into six short pages.

## What you will end up with

By the end you will have four values to give to Knock, and a working phone number:

| What | Where it comes from | Knock setting |
|---|---|---|
| A phone number | You buy it in Telnyx | `TELNYX_NUMBER` |
| The application ID | Created with the Call Control app | `TELNYX_CONNECTION_ID` |
| An API key | Telnyx account settings | `TELNYX_API_KEY` |
| A public key | Telnyx account settings | `TELNYX_PUBLIC_KEY` |

## The six steps

1. [Create and verify your account](/docs/telnyx/account) (5 min)
2. [Upgrade to Paid](/docs/telnyx/upgrade) (5 min). Do not skip this.
3. [Buy a phone number](/docs/telnyx/number) (2 min)
4. [Create the Call Control app](/docs/telnyx/call-control) (4 min)
5. [Get your keys](/docs/telnyx/keys) (3 min)
6. [Give the keys to Knock](/docs/telnyx/connect) (3 min)

:::seen Seen in the wild
The Telnyx portal changes its menu layout from time to time. If a menu item isn't where this guide says, use the **search icon** at the top right of the portal and type what you need: "buy numbers", "API keys", "outbound voice profiles". Screenshots here were taken in November 2026.
:::

:::tip Keep your secrets out of chat and email
You will handle an API key. Telnyx shows it **once**. Paste it straight into Vercel and nowhere else. Never send it to anyone, and never put it in a screenshot.
:::

