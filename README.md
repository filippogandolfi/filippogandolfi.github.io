# filippogandolfi — CV + diary

Personal site built with [Astro](https://astro.build). CV on the homepage, blog as a personal diary, deployed for free on GitHub Pages.

**Palette**: soft green paper with lkhrs-style ferns — a bright leaf and a deep moss as the two accents.

## Quick start

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
```

## Deploy (one-time setup)

1. Push this repo to GitHub (branch `main`).
2. Repo → **Settings → Pages → Source: GitHub Actions**.
3. Every push to `main` now builds and deploys via `.github/workflows/deploy.yml`.

### Custom domain (the only thing you pay for)

1. Repo → Settings → Pages → **Custom domain** → enter your domain, save. This commits a `CNAME` file.
2. At your DNS provider: `CNAME www → <youruser>.github.io`, and for the apex either `ALIAS`/`ANAME` or GitHub's four `A` record IPs (check GitHub's current docs).
3. Tick **Enforce HTTPS** once the certificate is issued.
4. Update `site` in `astro.config.mjs` to your real domain (canonical URLs + RSS).

## Writing from your iPhone

**Option A — Pages CMS (nicest editor).** Go to `app.pagescms.org`, sign in with GitHub, install the app on this repo. The `.pages.yml` here already describes the diary: new post, drag photos, save → commit → auto-deploy. Works in mobile Safari.

**Option B — Working Copy + any Markdown editor.** Clone the repo in Working Copy, write in `src/content/blog/`, drop photos into `src/assets/blog/`, commit and push. Fully offline-capable.

### Post format

```markdown
---
title: 'A day in Genoa'
date: 2026-07-12
description: 'Optional one-liner shown in lists and RSS.'
tags: ['travel', 'photos']
cover: '../../assets/blog/genoa.jpg'   # optional, auto-optimized
coverAlt: 'The old port at sunset'
draft: false                            # true = hidden from the site
---

Markdown body here. Images placed in src/assets/blog and referenced
relatively get converted to responsive WebP/AVIF at build time.
```

## Where things live

```
src/data/cv.ts            ← edit your CV here (homepage re-renders)
src/content/blog/         ← diary posts (Markdown)
src/assets/blog/          ← photos (optimized at build)
src/styles/global.css     ← palette & design tokens
src/lib/sounds.ts         ← the navigation sounds (WebAudio, no files)
src/components/SoundToggle.svelte  ← the Svelte island
.pages.yml                ← Pages CMS config
```

## The fun stuff

- **View transitions**: Astro's `<ClientRouter />` + CSS `::view-transition` keyframes in `global.css`. Post titles and covers morph between the list and the article (`transition:name`). Disabled automatically for users with `prefers-reduced-motion`.
- **Sounds**: synthesized with the Web Audio API (no audio assets). A blip on navigation, a tick on nav hovers. Toggle in the header, preference persisted in `localStorage`, silent until the first user interaction (browser autoplay policy).

## Notes

- Your phone number from the PDF CV is intentionally **not** published (`src/data/cv.ts` has a note) — personal sites get scraped. Add it back if you want.
- The LinkedIn URL in `src/data/cv.ts` is a guess — fix it.
# ctrlFG
# ctrlFG
# ctrlFG
