import React from 'react';

export function PostCard({ title, description, date, image, imageAlt, href, moreLabel = 'Ler artigo →', onClick, style }) {
  const [h, setH] = React.useState(false);
  return (
    <a href={href || '#'} onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none', background: 'var(--g-2)', backdropFilter: 'var(--g-blur)', WebkitBackdropFilter: 'var(--g-blur)', border: '1px solid ' + (h ? 'var(--g-border-strong)' : 'var(--g-border)'), borderRadius: 'var(--r-lg)', boxShadow: h ? 'var(--g-shadow-hover)' : 'var(--g-shadow-card)', overflow: 'hidden', transition: 'transform var(--t-slow), border-color var(--t-slow), box-shadow var(--t-slow)', transform: h ? 'translateY(-5px)' : 'none', color: 'var(--text)', height: '100%', ...style }}>
      <div style={{ aspectRatio: '16 / 9', overflow: 'hidden', background: 'var(--g-1)' }}>
        {image && <img src={image} alt={imageAlt || title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform var(--t-slow)', transform: h ? 'scale(1.04)' : 'none' }} />}
      </div>
      <div style={{ padding: '20px 22px 24px', display: 'flex', flexDirection: 'column', flex: 1, gap: 8 }}>
        {date && <p style={{ fontFamily: 'var(--f-mono)', fontSize: '.75rem', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--text-3)', margin: 0 }}>{date}</p>}
        <h3 style={{ fontFamily: 'var(--f-display)', fontWeight: 800, fontSize: '1.2rem', lineHeight: 1.25, letterSpacing: '-.02em', color: 'var(--text)', margin: 0 }}>{title}</h3>
        {description && <p style={{ fontFamily: 'var(--f-body)', fontSize: '.95rem', lineHeight: 1.55, color: 'var(--text-2)', margin: 0, flex: 1, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{description}</p>}
        <span style={{ fontFamily: 'var(--f-display)', fontWeight: 600, fontSize: '.875rem', color: h ? 'var(--c-purple)' : 'var(--c-teal-fg)', marginTop: 4, transition: 'color var(--t-fast)' }}>{moreLabel}</span>
      </div>
    </a>
  );
}
