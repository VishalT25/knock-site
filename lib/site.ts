/** One place for every address and name the site uses. Change the env vars, not the code. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://knockbuzzer.app").replace(/\/$/, "");
export const REPO_URL = process.env.NEXT_PUBLIC_REPO_URL ?? "https://github.com/VishalT25/knock";
export const SITE_NAME = "Knock";

/**
 * Vercel "Deploy" button. The app generates its own notification keys, so the only thing Vercel asks for is a
 * setup password. The Neon database is attached through `stores` (see docs/deploy for the manual fallback).
 */
export function deployUrl() {
  const p = new URLSearchParams({
    "repository-url": REPO_URL,
    "project-name": "knock",
    "repository-name": "knock",
    env: "SETUP_TOKEN",
    envDescription: "Pick any long password. You type it once on the first-run screen so nobody else can claim your Knock.",
    envLink: `${SITE_URL}/docs/deploy`,
    stores: JSON.stringify([{ type: "integration", integrationSlug: "neon", productSlug: "neon", protocol: "storage" }]),
  });
  return `https://vercel.com/new/clone?${p.toString()}`;
}

export type DocLink = { slug: string; title: string; group: string; blurb: string };
