# ibe.IA Blog — Design System

Design system for a Portuguese-language (pt-BR) **news blog about the power of websites, AI and no-code for small businesses**, built on the visual language of **blog.ibe.ia.br** — the blog of *ibe.IA, Instituto Brasileiro de Educação em Inteligência Artificial*. Tagline on the source: "O seu portal para criar com IA". Topics: AI Coding, Vibe Coding, No Code, app creation, AI agents, and (per the brief) how a website drives growth for small companies ("poder de um site").

## Sources
- Attached codebase `Disign-Sistem/` — a DOM/CSS capture of https://blog.ibe.ia.br/ (home page only, 2026-11-14): `page.html`, `styles.raw.css`, `styles.computed.json`, `layout.json`, `references.json`, auto-extracted `blog.ibe.ia.br-design.md`. Site is built with Astro 5 + Tailwind v4.
- Copies of `page.html` and the extracted DESIGN.md live in `_source/`.
- Fonts and post images were downloaded from blog.ibe.ia.br/_astro/.

Only the **home page** was captured. Blog index, article, Sobre and newsletter pages are not in the source.

## Index
- `styles.css` — entry point (imports only) → `tokens/` fonts, colors (dark + `[data-theme="light"]`), typography, spacing, radius, effects, base.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `components/` — React primitives (see below), each with `.d.ts` + `.prompt.md` and one card per folder.
- `ui_kits/blog/` — click-through blog recreation (Home, Blog, Article).
- `assets/` — `logo-symbol.svg`, `icons/` (moon, sun, youtube, instagram), `images/` (6 post heroes, OG image `semcodar-logotipo-3d.jpg`, favicon), `fonts/` (woff2).
- `thumbnail.html`, `SKILL.md`.

## Components
- **brand/** — `Logo` (+ `LogoSymbol` export), `AuroraBackground`
- **core/** — `Button` (primary / ghost, md / sm), `ThemeToggle`, `Icon`
- **navigation/** — `SiteHeader`, `SiteFooter`
- **content/** — `Hero`, `Eyebrow`, `SectionHeader`, `PostCard`, `Prose`

### Intentional additions
- `Icon` — wraps the four inline SVG glyphs from the source so components don't repeat path data.
- `Eyebrow` — extracted from the hero's `// blog ibe.IA` kicker so it can be reused on other pages.
- `Prose` — the site ships `.prose` article styles (not visible on the captured home page); ported as a component.

## CONTENT FUNDAMENTALS
- **Language:** Brazilian Portuguese, informal-but-informative journalism. Addresses the reader as **"você"** ("O melhor lugar para você aprender…", "o que muda quando agentes de IA podem pagar por você"). The brand speaks as an institute, rarely "nós".
- **Headline formula:** *News fact* + colon + *reader consequence*: "OpenAI lança ChatGPT Wallet: o que muda quando agentes de IA podem pagar por você"; "United restringe agentes de IA: o que muda para quem automatiza compras". "o que muda" is a recurring hook; parentheticals pose questions: "(quem fiscaliza os agentes?)".
- **Excerpts:** two sentences — context, then "Entenda …" / "Veja o que muda …". ~140–160 chars.
- **Casing:** Sentence case everywhere (titles, buttons, nav). Proper nouns and tech terms kept in English and Title Case: *AI Coding, Vibe Coding, No Code, Agentes IA*. "IA" always uppercase; brand written **ibe.IA**.
- **CTAs:** short imperative verbs — "Ler o Blog", "Inscreva-se", "Ler artigo →", "Ver todos →", "Conheça a ibe.IA →". Forward links end with a typed **→**.
- **Eyebrows** use a code-comment prefix: `// blog ibe.IA`.
- **Dates:** pt-BR short: "13 de nov. de 2026", rendered mono uppercase.
- **Emoji:** none. Unicode arrow → is the only glyph used in copy.
- **Vibe:** tech-forward, optimistic, practical — "criar com IA", tools for non-programmers.

## VISUAL FOUNDATIONS
- **Theme:** dark by default (`data-theme="dark"`), near-black body `#08080e`, cream text `#fbf9f4`. A light "cream paper" theme (`#fbf9f4`) exists via a fixed top-right toggle.
- **Color:** neutral greys carry the UI; accents are electric: teal `#00e5cc` (links, "Ler artigo →"), purple `#af6dff` (eyebrows, logo dot, link hover, list markers), lime/green gradient `#63d059→#84cc16` (the only filled CTA), green-bright `#b5ff2b` (blockquote bar). Blue, yellow, red are defined but rarely used. Text ramp: `--text` / `--text-2 #b2b2b2` / `--text-3 #8a8a8a`.
- **Backgrounds:** a fixed "aurora" layer — faint radial tints of teal/violet/green, a 64px hairline grid (`#ffffff05`), five huge 120px-blurred colour blobs (teal, violet, blue, magenta, purple) and a 2.8% SVG noise overlay. No photography in backgrounds; no full-bleed images.
- **Glass (liquid-glass) surfaces:** everything sits on translucent white fills `--g-1/2/3` (5–12% white) with `backdrop-filter: blur(28px) saturate(200%) brightness(108%)` and 16% white borders. Header, footer, cards, ghost buttons, prose and the toggle all use it. Blur is disabled under 760px.
- **Shadows:** layered — 1px inset top highlight, 1px inset bottom dark, then two deep drops tinted navy (`#000a2870`). Hover adds a 1px white ring and deeper drop. The CTA gets a green glow (`#84cc164d 0 8px 24px`).
- **Type:** Sora (display, 600–800, very tight tracking −0.04em to −0.07em), Plus Jakarta Sans (body, 400/600/700, −0.02em, lh 1.6), JetBrains Mono (eyebrows, dates, code; uppercase with wide tracking). Yellowtail script is loaded but unused on the captured page.
- **Heading treatment:** default headings are gradient-clipped (`--heading-gradient`: white→periwinkle→lilac→mint) with a soft drop-shadow; `.heading-solid` opts out. The hero title instead fades vertically from `--text` to `--text-3`.
- **Corner radii:** 14px buttons/blockquotes/images, 22px cards & prose, 8px inline code, 999px toggle. No sharp corners on surfaces.
- **Cards:** 16:9 image on top, body padding 20/22/24, gap 8, glass fill, 22px radius, card shadow. No coloured left borders (only the prose blockquote has a green-bright left bar).
- **Hover:** lift (cards −5px, buttons −2px, header CTA −1px), borders brighten to `--g-border-strong`, images zoom 1.04, teal links turn purple, grey nav/footer links turn `--text`. No opacity fades.
- **Press/focus:** no press shrink defined; focus-visible = 2px teal outline, offset 2–3px.
- **Motion:** `--t-fast .2s ease` for colour/small lifts, `--t-slow .38s cubic-bezier(.4,0,.2,1)` for card lift; aurora card bloom uses `cubic-bezier(.16,1,.3,1)`. Respects `prefers-reduced-motion`.
- **Layout:** sticky glass header (14px vertical padding), content max 1600px, post container 1200px, hero 880px, prose 760px. Fluid gutter `clamp(16px,4vw,32px)`. Post grid 1 → 2 (≥640) → 3 (≥1024) columns, gap 24. Fixed elements: theme toggle (top-right 1rem) and sticky header; the header CTA reserves 88px for the toggle. Centered footer.
- **Imagery:** post heroes are 16:9 editorial illustrations/renders — cool, saturated, tech-themed, framed by glass card borders.
- **Transparency & blur:** used for every chrome surface; never for text colour (text is solid).

## ICONOGRAPHY
- No icon font or sprite. The site inlines a handful of **Lucide-style** SVGs (24px grid, `stroke-width 2`, round caps/joins, `fill none`, `currentColor`): moon, sun (theme toggle), YouTube, Instagram (footer). Copied to `assets/icons/` and exposed via `<Icon>`.
- For new icons use **Lucide** (CDN: https://unpkg.com/lucide-static) — same geometry. *(Substitution: Lucide is inferred from the path data; not confirmed as a dependency.)*
- The burger menu is three 22×2px CSS bars, not an icon.
- Unicode **→** is used as the link/CTA arrow. No emoji.
- **Logo:** `assets/logo-symbol.svg` — four-point star with rocket, extracted from the inline SVG (`fill: currentColor`). Lockup = symbol + "ibe.IA" set in Sora 800 with a purple dot. The OG image `semcodar-logotipo-3d.jpg` is a 3D logo render.
