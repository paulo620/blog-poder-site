# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # dev server at localhost:4321
npm run build     # production build to ./dist/
npm run preview   # preview the dist/ build locally
```

> The dev server (`npm run dev`) must be started manually in an external terminal — it does not stay alive when launched as a background tool call. After editing files, run `npm run build` and inspect `dist/` to verify output.

## Stack

- **Astro v7.4.12** — static output, no SSR
- **@astrojs/sitemap** — auto-generates `sitemap-index.xml` on build
- **Deploy target**: Cloudflare Pages (`site: 'https://blog-poder-site.pages.dev'` in `astro.config.mjs`)
- No framework components (React/Vue/Svelte) — pure `.astro` files only
- No Tailwind — all styles are scoped `<style>` blocks inside `.astro` files or `src/styles/global.css`

## Content Collections

Posts live in `src/content/blog/*.md`. There is no `src/content/config.ts` — Astro 7 uses the implicit `glob` loader, so any `.md` file dropped in that folder is automatically picked up.

Frontmatter schema used by existing posts:
```yaml
title: string
description: string
pubDate: YYYY-MM-DD
tags: string[]        # optional
image: string         # optional, path relative to public/
```

In page code, use `post.id` (not `post.slug`) for URLs, and `render(post)` imported from `astro:content` to get the `Content` component.

## Design System

All CSS tokens are defined in `src/styles/global.css` and imported once in `BaseLayout.astro`. Key conventions:

- **Dark-first**: `:root` and `[data-theme="dark"]` carry dark values; `[data-theme="light"]` overrides. Default is dark — set by an inline `<script is:inline>` in `BaseLayout.astro` that reads `localStorage` before paint.
- **Glass surfaces**: use `var(--g-1/2/3)` for fill, `var(--g-blur)` for `backdrop-filter`, `var(--g-border)` for border, `var(--g-shadow-card)` for box-shadow.
- **Typography stack**: `var(--f-display)` = Sora, `var(--f-body)` = Plus Jakarta Sans, `var(--f-mono)` = JetBrains Mono — all loaded via Google Fonts in `BaseLayout.astro`.
- **Buttons**: `.btn.btn-primary` = lime gradient CTA (`--cta-gradient`, `--shadow-cta`); `.btn.btn-ghost` = glass ghost.
- **Eyebrow labels**: `<span class="eyebrow">` — JetBrains Mono, 12px, 0.2em spacing, uppercase, `var(--c-purple-fg)`.
- **Aurora background**: fixed `<div class="aurora-bg">` injected in `BaseLayout.astro`, styled entirely in `global.css`.
- **Old variables** (`--color-primary`, `--color-dark`, `--color-gray`, `--color-white`, `--color-border`, `--color-light`, `--font-base`, `--space-*`, `--radius`, `--max-width`, `--max-width-prose`) **no longer exist**. Use the DS tokens instead.

## Layout & Routing

```
BaseLayout.astro          ← HTML shell, aurora bg, header, footer, Google Fonts
  BlogPostLayout.astro    ← wraps BaseLayout; used by src/pages/blog/[slug].astro
```

Page routes: `/` → `index.astro`, `/blog` → `blog/index.astro`, `/blog/[slug]` → `blog/[slug].astro`, `/sobre`, `/contato`, `/404`.

## Contact Form

`ContactForm.astro` submits to [Web3Forms](https://web3forms.com). The access key placeholder `YOUR_ACCESS_KEY_HERE` in the `access_key` hidden field must be replaced with a real key before the form works in production.
