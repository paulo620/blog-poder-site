# UI kit — Blog ibe.IA

Click-through recreation of blog.ibe.ia.br.

- `index.html` — app shell: AuroraBackground, fixed ThemeToggle, SiteHeader, routed screen, SiteFooter. Route persists in localStorage.
- `HomeScreen.jsx` — **faithful** to the captured home page (hero + "Últimos posts" grid, real copy + images).
- `BlogScreen.jsx` — /blog/ index. *Not captured* — reuses the home grid pattern.
- `ArticleScreen.jsx` — post page. *Layout not captured*; body uses the site's real `.prose` rules via `<Prose>`. Sample copy.
- `data.js` — the six posts from the capture.

Sobre / newsletter pages were not in the source and are intentionally omitted.
