---
title: Security and safety
description: Knock can unlock a building entrance. What can go wrong, what protects you, and the habits that keep your household and your neighbours safe.
updated: 2026-11-20
---
:::danger This can unlock a building entrance
Anyone who can use a signed-in phone, or who gets into your Vercel or Telnyx account, can open a door that protects other people's homes. Treat Knock like a physical key.
:::

## The honest risks

1. **A lost or stolen phone that's signed in.** It can open the door. Sign it out in **Settings, People & phones** straight away.
2. **Auto-open.** While it's on, anyone who buzzes is let in with no human check. That includes strangers, people who guess your unit number and anyone who slips in behind a delivery. Keep windows short, use it only when you're home and expecting someone, and cancel it when they arrive. Knock tells everyone whenever it's on and every time it fires, and logs each one.
3. **Your accounts.** Whoever controls your Vercel project or your Telnyx account controls Knock. Use strong, unique passwords and two-factor sign-in on both.
4. **A leaked Telnyx API key.** It lets someone place calls on your account. Create a new key and delete the old one from **API keys** in Telnyx.
5. **Invite codes.** A code works once and expires, but until it's used, whoever has it can join your household. Send it privately and only to the person it is for.

## What protects you

| Protection | What it does |
|---|---|
| **Signed webhooks** | Telnyx signs every event. Knock verifies the signature with your public key, and rejects anything unsigned, tampered with or older than five minutes. |
| **Single-use invites** | Each code works once, expires, and can be cancelled. Knock stores only a hash of it. |
| **Per-phone sessions** | Each phone has its own private sign-in cookie. Every request except Telnyx's webhook needs one. The admin can sign any phone out. |
| **Rate limits** | Opening the door and redeeming invites are rate-limited, to blunt guessing. |
| **Secrets stay on the server** | The Telnyx API key never reaches a phone or a browser. |
| **First-run lock** | Setup needs the password you chose, so nobody can claim an unconfigured deployment. |
| **First tap wins** | Opening the door is one atomic action, so two people can't send two tones. |

## Habits worth having

- Turn on two-factor sign-in for GitHub, Vercel and Telnyx.
- Keep the repository **private** unless you mean to share it.
- Use a password manager for `SETUP_TOKEN` and your Telnyx keys.
- Tell your household how auto-open works before anyone uses it.
- Don't screenshot the Telnyx API key or paste it into a chat or a support ticket.

## Reporting a problem

If you find a security issue, report it privately to the repository maintainer through the repository's security page, not in a public issue.
