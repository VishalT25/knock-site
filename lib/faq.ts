/** The five questions people ask first. The docs FAQ has the rest. */
export const FAQ: { q: string; a: string }[] = [
  { q: "Will it work with my intercom?", a: "If your intercom calls a phone number and unlocks when you press a digit (usually 9), yes. Wall handsets and vendor-app-only systems don't work. The checker above takes a minute." },
  { q: "Is it really free?", a: "The software is. Hosting and the database use free tiers. The Telnyx number is about $1 a month plus about half a cent a minute, and Telnyx needs a card on file." },
  { q: "Do my roommates install an app?", a: "No app store. They open your link, enter a one-time code, and add it to their Home Screen. About two minutes each." },
  { q: "What if nobody opens the door?", a: "The people expecting a visitor ring first, then everyone. Optionally Knock rings a backup number and connects the visitor." },
  { q: "Is it secure?", a: "Only phones with a one-time invite can open the door, and Telnyx's calls are signature-checked. The real risks are a lost phone and auto-open; the security page covers both." },
];
