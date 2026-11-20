# Knock site

The landing page and documentation for [Knock](https://github.com/VishalT25/knock), the self-hosted PWA door buzzer. A small static Next.js site: plain CSS, no database, no analytics.

- **Home** (`/`): an intercom-panel hero, a live demo of the app's Open screen, a "will it work in my building?" checker, features, honest costs, setup overview, safety notice and FAQ.
- **Docs** (`/docs`): 19 pages of Markdown in `content/docs/`, including six Telnyx pages with screenshots and a troubleshooting page built from real setup mistakes.

It uses the app's design language unchanged (Liquid Glass over a warm gradient, orange glass keys, dot-matrix readouts, light/dark). See `DESIGN.md`.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run check    # links, images, anchors, descriptions
npm run build
```

## Configure

Two environment variables, both optional:

| Variable | Default | Used for |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://knockbuzzer.app` | Canonical URLs, sitemap, social cards, structured data |
| `NEXT_PUBLIC_REPO_URL` | `https://github.com/VishalT25/knock` | The "GitHub" link and the Deploy to Vercel button |

Everything that mentions an address lives in `lib/site.ts`.

## Deploy

1. Push this folder to its own GitHub repository.
2. Import it in Vercel (free plan is fine). No settings are needed.
3. When you buy the domain, add it under **Settings, Domains**, and set `NEXT_PUBLIC_SITE_URL` to it (no trailing slash). Redeploy so the sitemap and canonical URLs use it.
4. Submit `https://<your-domain>/sitemap.xml` in Google Search Console.

## Writing docs

Add a Markdown file under `content/docs/` and an entry in `lib/docs-nav.ts` (order there is reading order, and drives previous/next).

```markdown
---
title: Page title
description: One or two sentences, 60 to 200 characters. Becomes the search snippet.
updated: 2026-11-20
---
Body in Markdown.

:::tip Optional title
A callout. Kinds: tip, warn, danger, seen ("Seen in the wild").
:::

![Alt text is also the caption](/docs/img/example.png)
```

Images go in `public/docs/img/`. Names starting with `app-` or `phone-` are shown as phone-width figures. `npm run check` fails on broken links, missing images, bad anchors and missing or over-long descriptions.

### Screenshot rules

- **Never** include an API key, a real phone number, an email address or a balance. Blur or crop. The Telnyx pages here were captured from a real account with everything personal blurred or absent.
- App screenshots use sample data (Flat 4B, Sam, Maya, Eve, a fictional 555 number).
- Telnyx's portal changes its layout; each Telnyx page says when its screenshots were taken. Retake them if the menus move.

## SEO notes

- One `h1` per page, per-page title and description, canonical URLs, Open Graph and Twitter cards (the share image is generated in `app/opengraph-image.tsx`).
- Home has `SoftwareApplication` and `FAQPage` structured data; docs have `TechArticle` and `BreadcrumbList`.
- `sitemap.xml` and `robots.txt` are generated.
- Rankings depend on more than code: links from other sites, a good GitHub README with topics, and content that matches what people search for. See the search ideas in the project notes.

## License

MIT, see `LICENSE`.
