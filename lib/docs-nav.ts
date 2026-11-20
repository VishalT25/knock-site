/** The docs tree. Order here is the reading order (previous/next follow it). */
export type NavItem = { slug: string; title: string; blurb: string; time?: string };
export type NavGroup = { title: string; items: NavItem[] };

export const NAV: NavGroup[] = [
  {
    title: "Start here",
    items: [
      { slug: "will-it-work", title: "Will it work with my intercom?", blurb: "The two things your building must do, and a five-minute test.", time: "5 min" },
      { slug: "costs", title: "Costs, accounts and time", blurb: "What you pay, what you sign up for, and the trial-account catch.", time: "3 min" },
    ],
  },
  {
    title: "Set it up",
    items: [
      { slug: "deploy", title: "Deploy Knock (one click)", blurb: "Vercel, Neon and your setup password.", time: "5 min" },
      { slug: "telnyx", title: "Telnyx setup: overview", blurb: "The longest part, broken into six short pages.", time: "15 min" },
      { slug: "telnyx/account", title: "1. Create and verify your account", blurb: "Sign up and pass the identity check.", time: "5 min" },
      { slug: "telnyx/upgrade", title: "2. Upgrade to Paid", blurb: "Why trial accounts fail, and how to upgrade.", time: "5 min" },
      { slug: "telnyx/number", title: "3. Buy a phone number", blurb: "Your Knock number: the one your building will call.", time: "2 min" },
      { slug: "telnyx/call-control", title: "4. Create the Call Control app", blurb: "The webhook that connects Telnyx to Knock.", time: "4 min" },
      { slug: "telnyx/keys", title: "5. Get your keys", blurb: "API key, public key and application ID.", time: "3 min" },
      { slug: "telnyx/connect", title: "6. Give the keys to Knock", blurb: "Add them to Vercel and redeploy.", time: "3 min" },
      { slug: "first-run", title: "First-time setup and test call", blurb: "Create your household and prove the call works.", time: "3 min" },
      { slug: "roommates", title: "Roommates and phones", blurb: "Invite codes, installing the app, turning on notifications.", time: "5 min" },
      { slug: "connect-building", title: "Connect your building", blurb: "What to ask your property manager, with a template email.", time: "1-2 days" },
    ],
  },
  {
    title: "Use it",
    items: [
      { slug: "using-knock", title: "Using Knock day to day", blurb: "Expecting someone, auto-open, Not mine, quiet hours, the log.", time: "4 min" },
      { slug: "settings", title: "Settings and environment variables", blurb: "Every setting, what it does, and its default.", time: "4 min" },
    ],
  },
  {
    title: "Help",
    items: [
      { slug: "troubleshooting", title: "Troubleshooting", blurb: "Find your symptom, get the fix.", time: "" },
      { slug: "security", title: "Security and safety", blurb: "What can go wrong, and how to keep it safe.", time: "5 min" },
      { slug: "faq", title: "FAQ", blurb: "Quick answers.", time: "" },
      { slug: "updating", title: "Updating and removing Knock", blurb: "Get new versions, or take everything down.", time: "3 min" },
    ],
  },
];

export const FLAT: (NavItem & { group: string })[] = NAV.flatMap((g) => g.items.map((i) => ({ ...i, group: g.title })));
export const bySlug = (slug: string) => FLAT.find((i) => i.slug === slug);
