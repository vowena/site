# Contributing to Vowena Site

Thanks for contributing to the Vowena site. This repository is where many people will meet the project for the first time, so polish, clarity, performance, and accessibility all matter here.

## Good contributions

- Landing page and product copy improvements
- Blog posts and technical explainers
- Accessibility fixes
- Performance and SEO improvements
- Visual refinements that match the existing brand
- Tooling and CI improvements

If you are new, look for issues labeled `good first issue` or `help wanted`.

## Local setup

### Prerequisites

- Node.js 22 or later
- npm 10 or later

### Install

```bash
git clone https://github.com/vowena/site.git
cd site
npm install
cp .env.example .env.local
npm run dev
```

The local site runs at [http://localhost:3000](http://localhost:3000).

## Blog posts

Blog content lives in `content/blog/` as `.mdx` files. The filename becomes the URL slug.

Example frontmatter:

```mdx
---
title: "Your post title"
description: "Short summary for SEO and social cards"
date: "2026-04-10"
author: "Your Name"
cover: "https://images.unsplash.com/photo-example?w=1200&h=630&fit=crop"
---

Your content here.
```

All frontmatter fields are required except `cover`.

### Available MDX components

- `<Video src="..." title="..." />`
- `<Callout type="info|warning|tip">...</Callout>`
- `<InstallTabs />`

## Verification

Run all of these before you push:

```bash
npm run lint
npm run typecheck
npm run build
```

## Frontend expectations

- Use server components by default.
- Add `"use client"` only when hooks, browser APIs, or event handlers require it.
- Keep reusable UI in `src/components/` and route code in `src/app/`.
- Match the current visual language unless the task is explicitly a redesign.
- Test UI work on mobile and desktop.
- Include screenshots for visible changes.

## Branch naming

- `feat/add-pricing-faq`
- `fix/nav-mobile-overflow`
- `content/blog-stellar-integration`
- `docs/update-readme`
- `chore/upgrade-next`

## Commit messages

Use [Conventional Commits](https://www.conventionalcommits.org/):

```text
feat: add pricing comparison section
fix: resolve dark mode flash on first paint
content: publish post about pull-based billing
docs: clarify local site setup
chore: upgrade next to 16.2.3
```

## Pull requests

- Keep the change focused.
- Explain what changed and why.
- Link related issues when there are any.
- Attach screenshots or recordings for visual changes.
- Update docs or copy if the behavior changed.

## Security

Do not disclose vulnerabilities in public issues. Follow [SECURITY.md](SECURITY.md).

## Conduct

This repository follows [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).
