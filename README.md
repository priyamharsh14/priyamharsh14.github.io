# priyamharsh14.github.io

Personal site for [Priyam Harsh](https://priyamharsh14.github.io). Static [Astro](https://astro.build) site with MDX posts, Tailwind, an RSS feed, and a sitemap. It deploys to GitHub Pages from the `master` branch.

The previous placeholder (`index.html` with “Welcome to priyamharsh14.github.io”, plus this README’s old one-liner) is on the [`legacy-site`](https://github.com/priyamharsh14/priyamharsh14.github.io/tree/legacy-site) branch, at the same commit that was on `master` before this change (`da3618b`). It is also still in `master` history.

## Develop

Node 22.12 or newer. This repo uses pnpm.

```bash
pnpm install
pnpm dev
```

`pnpm build` and `npm run build` both run the production build. `pnpm preview` serves `dist/`.

## Write a post

Posts are MDX files in `src/content/writing/`. Add one in Cursor and push; you do not need a CMS.

1. Create `src/content/writing/your-slug.mdx`. The filename becomes the URL: `/writing/your-slug/`.
2. Start from this frontmatter:

```yaml
---
title: "Post title"
description: "One or two sentences for the index, RSS, and social cards."
pubDate: 2026-10-20
draft: true
tags:
  - note
---
```

3. Write the body in Markdown. MDX is there if a post later needs a component.
4. Keep `draft: true` until you want it public. Drafts are omitted from the production build, the sitemap, and `/rss.xml`. Run `pnpm dev` to preview a draft locally; it is listed under “Drafts” on `/writing/` in dev only.
5. Set `draft: false` and push to `master` (after this pull request is merged). GitHub Actions publishes the site, and the post shows up on `/writing/` and in the RSS feed.

`src/content/writing/hello-world.mdx` is a sample draft (“Hello, world: why I'm starting to write”). It is not published. Edit or delete it before flipping `draft`.

There is a short TODO on `/writing/` pointing at that file. Remove that paragraph once you do not need the reminder.

## Pages

| Path | What it is |
| --- | --- |
| `/` | Home |
| `/work/` | One short employment entry, plus generic capability areas |
| `/projects/` | Empty for now. Hidden from the header and command menu until `showProjectsInNav` in `src/config.ts` is `true` |
| `/security/` | Security research, past tense |
| `/writing/` | Blog index |
| `/now/` | Placeholder |
| `/uses/` | Mac and Cursor; the rest is placeholder |
| `/about/` | Timeline, skills, education, resume placeholder |
| `/contact/` | Email, and a form that is off until you enable it |
| `/rss.xml` | Feed of published posts |
| `/404` | Missing pages |

Search the repo for `TODO:` before you treat the copy as final. Placeholders and drafts are marked that way on purpose.

## Turn on the free extras

Nothing here phones home until you fill in `src/config.ts`. Analytics, the contact form endpoint, and comments ship disabled.

- **GoatCounter** (analytics, no cookies): create a free site, set `goatcounter.enabled` to `true`, and set `code` to the site code only (`yoursite`, not the full hostname).
- **Web3Forms** (contact form, free tier): create an access key, set `web3forms.enabled` to `true`, and paste the key. Until then, `/contact/` and the home page use `mailto:priyamharsh14@gmail.com`.
- **giscus** (comments on posts): enable Discussions on this repo, fill in the ids from [giscus.app](https://giscus.app), and set `giscus.enabled` to `true`. The widget follows the operating system theme.

Do not commit a key you are not comfortable storing in a public repo. Web3Forms access keys are designed to be public; still read their docs before you paste one.

## GitHub Pages

The workflow is `.github/workflows/deploy.yml`. It uses the official Astro action (`withastro/action`) and `actions/deploy-pages`, and it runs on every push to `master`.

One setting has to be changed by hand, once:

1. Open **Settings → Pages** for this repository.
2. Under **Build and deployment**, set **Source** to **GitHub Actions** (not “Deploy from a branch”).

Until that is set, the workflow can succeed at building and still have nowhere to publish. Pushes to other branches, including pull requests, do not deploy.

This is a user site (`priyamharsh14.github.io`), so `astro.config.mjs` sets `site` and does not set `base`.

## Optional domain later (`priyam.is-a.dev`)

Do not add a `CNAME` file yet. Add it only after an [is-a.dev](https://github.com/is-a-dev/register) pull request for the name has merged.

1. Open a pull request on `is-a-dev/register` for `priyam.is-a.dev`, following that repo’s current instructions. Keep `https://priyamharsh14.github.io` working either way; the subdomain is community-run.
2. After that pull request merges, create `public/CNAME` containing exactly:

   ```text
   priyam.is-a.dev
   ```

3. In `astro.config.mjs`, set `site` to `https://priyam.is-a.dev`. Leave `base` unset.
4. In **Settings → Pages**, set the custom domain to `priyam.is-a.dev` and wait for DNS to check out.
5. Update the sitemap URL in `public/robots.txt` if you want it to match the new host.

A paid `.dev` or `.com` domain is optional and not required for this site.
