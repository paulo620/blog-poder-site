Sticky frosted header with logo, Home/Blog/Sobre links, and green "Inscreva-se" CTA.

```jsx
<SiteHeader active="Blog" onNavigate={(l) => go(l.label)} />
<SiteHeader compact />
```

- `compact` = mobile burger layout. `ctaOffset` (default 88) leaves room for the fixed ThemeToggle.
