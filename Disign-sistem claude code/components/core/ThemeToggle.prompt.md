Glass pill with moon/sun buttons and sliding gradient thumb; switches `data-theme` dark/light.

```jsx
<ThemeToggle fixed onChange={(t) => document.documentElement.dataset.theme = t} />
```

- `fixed` pins it top-right (1rem) as on the site; header reserves 88px for it.
