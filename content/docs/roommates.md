---
title: Roommates and phones
description: Invite your household with single-use codes, install Knock like an app on iPhone or Android, and turn on notifications. Takes about two minutes per person.
updated: 2026-11-20
---
Nobody needs an app store, an account or a password. Each person opens your link, enters a code and their name, and turns on notifications.

## Make an invite code (admin)

1. In Knock, open **Settings**.
2. Find **Invite a roommate**.
3. Choose how long the code lasts: **1 hour**, **1 day** or **7 days**.
4. Press **Make an invite code**. A code like `KNOCK-7QXM-2PTR` appears.
5. Press **Copy invite message** and paste it into a text to your roommate (or press **Share** to use your phone's share sheet).

A roommate needs two things: **your Knock address** and **the code**. The invite message contains both, plus the first steps: open the link on their phone (Safari on iPhone, Chrome on Android), then follow the screens to add Knock to their Home Screen. If you only send the code, they won't know where to type it, so send the whole message.

:::warn The code is shown once, and works once
Once someone uses it, it's gone. The list under "Waiting to be used" only shows a masked hint, never the real code. If a code is lost or sent to the wrong person, press **Rotate: cancel all unused invites**.
:::

## Install it like an app (do this first)

### iPhone (Safari, iOS 16.4 or newer)

1. Open your Knock address **in Safari** (not inside another app's browser).
2. Tap the **Share** button (the square with an arrow, at the bottom of the screen).
3. Choose **Add to Home Screen**, then **Add**.
4. **Close Safari and open Knock from the new Home Screen icon.** This is not optional: iPhone only allows notifications from an app opened this way.

### Android (Chrome)

1. Open your Knock address in Chrome.
2. Tap the **⋮** menu, then **Install app** (or **Add to Home screen**).
3. Open Knock from its icon.


## Join (each roommate)

![The Join screen. An invite code and a name, nothing else.](/docs/img/app-join.png)

1. Open Knock **from the Home Screen icon** you just created (see above).
2. Enter the invite code and a **name**. Others see this name as "Opened by …".
3. Press **Join**.

:::warn Install first, then join
On iPhone, the Home Screen app and Safari don't share a sign-in. If you join in a Safari tab and then install, you'll have to join again, and your code will already be used. Install first, open from the icon, then join.
:::

## Turn on notifications

1. In Knock, open **Settings**.
2. Under **Notifications**, press **Enable notifications** and allow them when your phone asks.
3. Press **Send test notification**. A notification should arrive within a few seconds.

![Settings, with the buzzer number at the top and the notification controls beneath it.](/docs/img/app-settings.png)

If the test notification shows an error, the message names the cause. The most common ones:

| You see | What it means |
|---|---|
| "On iPhone, add Knock to your Home Screen first" | Open it from the Home Screen icon, not Safari. |
| "Notifications are blocked" | In your phone's settings, find **Knock** (or the browser) and allow notifications, then reload. |
| "This phone's subscription expired" | Press **Turn off**, then **Enable notifications** again. |
| "Notifications aren't set up on the server yet" | The admin needs to fix the push keys. See [Troubleshooting](/docs/troubleshooting). |

:::tip If notifications are on but you don't hear them
Check your phone's **Focus** or **Do Not Disturb** mode, and iPhone's **Settings, Notifications, Knock**. Quiet hours inside Knock also silence pings; see [Using Knock](/docs/using-knock).
:::

## Managing people and phones (admin)

In **Settings, People & phones** you can see each person and their phones. **Sign out phone** removes one device (a lost phone, say) without removing the person. **Remove person** deletes the person and all of their phones.

### Make the phone the admin

If you set Knock up on a computer, the computer's browser is the admin. You will usually want the admin on your phone instead. Join from your phone like any roommate (it needs an invite code), then on the computer open **Settings, People & phones**, find your phone's name and tap **Make admin**. Open Knock on your phone and the admin controls are there.

Admins can promote and demote each other, but nobody can change their own role. That way the household can never be left without an admin. To take admin away from the computer's browser, tap **Remove admin** next to its name from your phone.

**Next:** [Connect your building](/docs/connect-building)
