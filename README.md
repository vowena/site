# Vowena Site

The public-facing marketing website for the [Vowena](https://github.com/vowena/protocol) protocol, live at [vowena.xyz](https://vowena.xyz).

[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](LICENSE)
[![CI](https://github.com/vowena/site/actions/workflows/ci.yml/badge.svg)](https://github.com/vowena/site/actions/workflows/ci.yml)
[![Next.js](https://img.shields.io/badge/Next.js-16.2-black.svg)](https://nextjs.org/)

## What is this?

Vowena is a recurring payment protocol for the Stellar network. This repository contains the marketing site that explains what Vowena does, how pricing works, and publishes technical blog posts about the protocol.

### Features

- **Landing page** with protocol overview, code examples, and partner logos
- **Pricing page** with plan comparison
- **Blog** powered by MDX with syntax highlighting, copy buttons, and custom components
- **Legal pages** for terms of service and privacy policy
- **SEO** with dynamic Open Graph and Twitter card images for every route
- **Dark mode** with system preference detection and manual toggle
- **Analytics** via Umami (privacy-friendly, cookie-free)

### Tech stack

Next.js 16, React 19, TypeScript, Tailwind CSS 4, next-mdx-remote v6, highlight.js, next-themes

## Getting started

### Prerequisites

- Node.js 22 or later

### Setup

```bash
git clone https://github.com/vowena/site.git
cd site
npm install
cp .env.example .env.local
npm run dev
```

The site will be running at [http://localhost:3000](http://localhost:3000).

## Blog

Blog posts live in `content/blog/` as `.mdx` files. To add a new post, create a file like `content/blog/my-post-slug.mdx` with this frontmatter:

```mdx
---
title: "Your post title"
description: "A short summary for SEO and social cards"
date: "2026-04-10"
author: "Your Name"
cover: "https://images.unsplash.com/photo-example?w=1200&h=630&fit=crop"
---

Your content here. You can use standard markdown, GFM tables, and fenced code blocks with syntax highlighting.
```

### Custom MDX components

These components are available in any blog post without importing them:

- `<Video src="https://youtube.com/embed/..." title="Demo" />` for embedded videos
- `<Callout type="info|warning|tip">Text here</Callout>` for highlighted callouts
- `<InstallTabs />` for tabbed install instructions

## Related repositories

| Repository | Description |
|---|---|
| [protocol](https://github.com/vowena/protocol) | Soroban smart contracts |
| [sdk](https://github.com/vowena/sdk) | TypeScript SDK |
| [dashboard](https://github.com/vowena/dashboard) | Merchant and subscriber dashboard |
| [docs](https://github.com/vowena/docs) | Documentation site |

## Contributing

We welcome contributions. Please read our [Contributing Guide](CONTRIBUTING.md) before submitting a pull request.

## License

Licensed under the [Apache License 2.0](LICENSE).
