import React from 'react';
import { Logo } from '../brand/Logo.jsx';
import { Button } from '../core/Button.jsx';

function NavLink({ label, href, active, onClick }) {
  const [h, setH] = React.useState(false);
  return (
    <a href={href || '#'} onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ fontFamily: 'var(--f-display)', fontWeight: 600, fontSize: '0.95rem', letterSpacing: '-0.01em', textDecoration: 'none', color: h || active ? 'var(--text)' : 'var(--text-2)', transition: 'color var(--t-fast)' }}>
      {label}
    </a>
  );
}

const DEFAULT_LINKS = [{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog/' }, { label: 'Sobre', href: '/sobre/' }];

export function SiteHeader({ links = DEFAULT_LINKS, active, ctaLabel = 'Inscreva-se', ctaHref = '/newsletter-inscricao/', onNavigate, onCta, compact = false, sticky = true, ctaOffset = 88 }) {
  const [open, setOpen] = React.useState(false);
  const nav = (l) => (e) => { if (onNavigate) { e.preventDefault(); onNavigate(l); setOpen(false); } };
  return (
    <header style={{ position: sticky ? 'sticky' : 'relative', top: 0, zIndex: 50, background: 'var(--g-1)', backdropFilter: 'var(--g-blur)', WebkitBackdropFilter: 'var(--g-blur)', borderBottom: '1px solid var(--g-border-dim)' }}>
      <div style={{ maxWidth: 'var(--content-max, 1600px)', margin: '0 auto', padding: '14px clamp(16px, 4vw, 32px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <Logo size="sm" href="/" />
        {!compact && (
          <nav aria-label="Principal" style={{ display: 'inline-flex', gap: 'clamp(16px, 3vw, 28px)', alignItems: 'center' }}>
            {links.map((l) => <NavLink key={l.label} {...l} active={active === l.label} onClick={nav(l)} />)}
          </nav>
        )}
        {!compact && (
          <Button size="sm" href={ctaHref} onClick={onCta ? (e) => { e.preventDefault(); onCta(); } : undefined} style={{ marginRight: ctaOffset }}>
            <span>{ctaLabel}</span>
          </Button>
        )}
        {compact && (
          <button type="button" aria-label="Abrir menu" aria-expanded={open} onClick={() => setOpen(!open)}
            style={{ display: 'inline-flex', flexDirection: 'column', gap: 4, background: 'transparent', border: 0, padding: 8, cursor: 'pointer' }}>
            {[0, 1, 2].map((i) => <span key={i} style={{ display: 'block', width: 22, height: 2, background: 'var(--text)', borderRadius: 1 }} />)}
          </button>
        )}
      </div>
      {compact && open && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, padding: '8px clamp(16px, 4vw, 32px) 20px' }}>
          {links.map((l) => <a key={l.label} href={l.href} onClick={nav(l)} style={{ fontFamily: 'var(--f-display)', fontWeight: 600, fontSize: '1.05rem', color: 'var(--text)', textDecoration: 'none', padding: '10px 0' }}>{l.label}</a>)}
          <Button size="sm" href={ctaHref} style={{ alignSelf: 'flex-start', marginTop: 8 }}>{ctaLabel}</Button>
        </div>
      )}
    </header>
  );
}
