---
title: 4. Create the Call Control app
description: The Call Control application tells Telnyx where to send call events, and it is how Knock answers calls and presses the unlock digit. Four short sub-steps.
updated: 2026-11-20
---
Telnyx needs three things wired together: an **outbound voice profile**, a **Voice API application**, and your **number**. You do them in that order.

## A. Create an outbound voice profile

An outbound voice profile is what lets Knock place calls: the wizard's test call to your phone, and the optional backup call. Without it those calls fail.

1. In the portal menu choose **Outbound Voice** (under **Voice**).
2. Press **Create Profile**.
3. Name it `knock`.
4. Keep the defaults. If the form asks which destinations are allowed, make sure **your own country** is ticked (and your backup number's country, if different).
5. Save.

![Outbound Voice Profiles. Ring 1: Create Profile. The row shown is an example profile that is already attached to one application.](/docs/img/telnyx-outbound-profile.png)

## B. Create the Voice API application

- In the portal menu choose **Programmable Voice**, then **Voice API Applications**.
- Press **Create Voice App**.

The form looks like this when it's filled in. The orange rings on the picture are labelled **ring 1** to **ring 4**, and the steps below say which ring to look at. (Tap the picture to enlarge it.)

![The Create Voice API applications form, filled in. Ring 1: Application name. Ring 2: Webhook URL, your Knock address ending in /api/telnyx. Ring 3: Webhook API version, API v2. Ring 4: Create. The address shown is an example; use your own.](/docs/img/telnyx-create-app.png)

1. **Application name** (ring 1): type `Knock`.
2. Leave **AnchorSite** on its default (**Latency**) and **Tags** empty.
3. **Webhook URL** (ring 2): your Knock address followed by `/api/telnyx`. For example `https://knock-yourname.vercel.app/api/telnyx`. Copy your address from your browser's address bar and add `/api/telnyx` yourself so there are no typos.
4. Leave **Webhook Failover URL** empty.
5. **Webhook API Version** (ring 3): choose **API v2**. This matters: Knock verifies version-2 signatures.
6. Leave **Advanced settings** alone for now (see the tip below).
7. Press **Create** (ring 4).

:::tip About the DTMF Type setting
Under **Advanced settings** there is a **DTMF Type** (the default is **RFC 2833**). That is how Telnyx sends the unlock tone. If everything works but your building's door never unlocks, this is the first thing to try changing. Leave it for now; see [Troubleshooting](/docs/troubleshooting).
:::

:::warn Get the webhook address exactly right
No spaces, no trailing slash, and `https` (not `http`). It must end in `/api/telnyx`. A typo here is the single most common reason calls reach Telnyx but never reach Knock.
:::

## C. Attach the outbound voice profile to the app

1. Open the application you just created (the **Edit** link next to it).
2. It has tabs: **Details**, **Inbound**, **Outbound**, **Recording**, **Numbers**. Open **Outbound**.
3. Under **Outbound Voice Profile**, choose the `knock` profile from step A.
4. Save.

![The application's Outbound tab. Ring 1: the Outbound tab. Ring 2: Outbound Voice Profile; pick the profile you made in step A.](/docs/img/telnyx-app-outbound.png)

## D. Assign your number to the app

1. In the same application, open the **Numbers** tab.
2. Press **Assign numbers** and choose your Knock number.
3. Save.

You can also check it from the number side: **Phone Numbers**, where the **Connection/Application** column should now read **Call Control** (or the name you gave the app).

## What you should see

- **Voice API Applications** lists your app with the correct webhook URL.
- **Phone Numbers** shows your number with the app in the **Connection/Application** column.

## Copy the application ID now

Open the application, **Details** tab. There is an **Application ID**, a long number. Copy it somewhere for the next page. This is `TELNYX_CONNECTION_ID`.

**Next:** [Get your keys](/docs/telnyx/keys)
