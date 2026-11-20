---
title: Updating and removing Knock
description: How to get new versions of Knock into your copy, and how to take everything down cleanly if you stop using it.
updated: 2026-11-20
---
## Updating

The one-click deploy copies Knock into **your own GitHub repository**. It is a snapshot, not a fork and not a live link: it has no shared history with the original project, so improvements I publish don't reach your copy by themselves, and GitHub's **Sync fork** button and `git pull` don't work on it. Knock has its own way to update instead.

### Automatic: a pull request you merge (recommended)

New installs include a GitHub Action called **Update Knock**. Every Monday it checks for a newer Knock. If there is one, it opens a pull request titled **Update Knock** in your repository. **Nothing changes until you merge it.** Merge it, wait for Vercel to redeploy, and you're updated.

- **Check now:** in your repository open **Actions**, then **Update Knock**, then **Run workflow**.
- **The app tells you too.** In **Settings**, admins see "Knock x.y.z is available" when a newer version exists.
- **First time:** GitHub may ask you to enable Actions (the Actions tab shows a green button). If the workflow can't open the pull request by itself, it still pushes a branch called `knock-update`, and the run's summary has a link that opens the pull request for you. Or turn on **Settings, Actions, General, Allow GitHub Actions to create and approve pull requests**.
- **Why a pull request and not automatic?** Knock can unlock a door. You should be able to look at new code before it goes live.

### If you installed before this existed (one time)

Your repository doesn't have the Update Knock workflow yet. Add it once:

1. On GitHub, open your repository, choose **Add file, Create new file**.
2. Name it `.github/workflows/update-knock.yml`.
3. Paste in the contents of [the workflow file](https://raw.githubusercontent.com/VishalT25/knock/main/.github/workflows/update-knock.yml) and commit.
4. Open **Actions, Update Knock, Run workflow** to get the first update straight away.

### By hand, with one command

If you'd rather do it yourself, you need [Git](https://git-scm.com/downloads):

```
git clone https://github.com/YOUR-NAME/YOUR-REPO.git
cd YOUR-REPO
curl -fsSL https://raw.githubusercontent.com/VishalT25/knock/main/scripts/sync-upstream.sh | bash
git push
```

The script makes your code files match the latest Knock exactly and commits the result. **Don't use `git pull`**: on a one-click copy it stops with "refusing to merge unrelated histories". The script leaves the `.github` folder alone, and it does nothing if you're already up to date.

If you changed any code files yourself, the update replaces them. Your changes are still in the repository's history, so you can look at them with `git log` and bring them back.

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
| `SETUP_TOKEN` | Used at first-run setup, and later if you need to [make a phone an admin](/docs/roommates). Change it in Vercel and redeploy if it leaks. |

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
