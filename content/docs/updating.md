---
title: Updating and removing Knock
description: How to get new versions of Knock into your copy, and how to take everything down cleanly if you stop using it.
updated: 2026-11-20
---
## Updating

The one-click deploy copied Knock into **your own GitHub repository**. It is a separate copy, not a fork, so GitHub's "Sync fork" button usually isn't there. Vercel redeploys your copy every time it changes, so updating means bringing the new code into it.

### With Git (a few commands)

You need [Git](https://git-scm.com/downloads) and a copy of your repository on your computer.

```
git clone https://github.com/YOUR-NAME/knock.git
cd knock
git remote add upstream https://github.com/VishalT25/knock.git
git pull upstream main
git push
```

- The first two lines download your copy.
- `git remote add upstream` points at the original project. You only do this once.
- `git pull upstream main` brings in the new version. If Git reports a conflict, you changed a file the project also changed; keep your version of settings-style files and the project's version of code files.
- `git push` sends it to GitHub, and Vercel redeploys on its own.

Next time, you only need `git pull upstream main` and `git push`.

### Without Git

Skip the update. Knock keeps working as it is. The only reason to update is a new feature or a fix you want. If you'd rather start fresh, deploy a new copy with the button, attach the same Neon database, and delete the old Vercel project.

### After an update

Wait for the green tick in Vercel's **Deployments**, then close and reopen Knock on each phone.

:::tip Your data is safe
Updates change the code only. Your household, people, log and settings live in your Neon database, which an update doesn't touch. New versions add any database columns they need automatically the first time they load.
:::

## Rotating secrets

Do these when a key might have leaked, or when someone leaves the household.

| What | How |
|---|---|
| Telnyx API key | Telnyx, **API keys**: create a new one, update `TELNYX_API_KEY` in Vercel, redeploy, then delete the old one. |
| A lost phone | Knock, **Settings, People & phones**, **Sign out phone**. |
| Outstanding invite codes | **Settings, Invite a roommate**, **Rotate: cancel all unused invites**. |
| A person leaving | **Settings, People & phones**, **Remove person**. |
| `SETUP_TOKEN` | Only matters before setup. After setup it does nothing. |

## Removing Knock completely

Do these in any order. Each is independent.

1. **Tell your building** to go back to the old number, so visitors don't ring a dead line.
2. **Vercel:** open the project, **Settings**, scroll to the bottom and choose **Delete Project**.
3. **Neon:** delete the database (from the Storage tab in Vercel, or the Neon console). This permanently erases the call log and your household.
4. **GitHub:** delete the repository if you don't want the code copy.
5. **Telnyx:** release the number (from **Phone Numbers**), delete the Call Control application and the outbound voice profile, and delete the API key. Telnyx's page warns that number charges are not refundable.
6. **Phones:** remove the Knock icon from each Home Screen.

:::warn Do step 1 first
Releasing the number while the building still dials it means visitors get "not available" and nobody can be buzzed in remotely until it's fixed.
:::
