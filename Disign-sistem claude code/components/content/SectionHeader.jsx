import React from 'react';

export function SectionHeader({ title, linkLabel = 'Ver todos →', href, onLinkClick, style }) {
  const [h, setH] = React.useState(false);
  return (
    <header style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 32, gap: 16, flexWrap: 'wrap', ...style }}>
      <h2 style={{ fontFamily: 'var(--f-display)', fontWeight: 800, fontSize: 'clamp(1.5rem, 3.2vw, 2.25rem)', color: 'var(--text)', margin: 0, letterSpacing: '-.07em', lineHeight: 1.1 }}>{title}</h2>
      {linkLabel && (
        <a href={href || '#'} onClick={onLinkClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
          style={{ fontFamily: 'var(--f-display)', fontWeight: 600, color: h ? 'var(--c-purple)' : 'var(--c-teal-fg)', textDecoration: 'none', transition: 'color var(--t-fast)' }}>{linkLabel}</a>
      )}
    </header>
  );
}
