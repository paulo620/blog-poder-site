import React from 'react';
import { Logo } from '../brand/Logo.jsx';
import { Icon } from '../core/Icon.jsx';

function FLink({ label, href, icon, onClick }) {
  const [h, setH] = React.useState(false);
  return (
    <a href={href || '#'} onClick={onClick} target={href && href.startsWith('http') ? '_blank' : undefined} rel="noopener"
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ fontFamily: 'var(--f-display)', fontWeight: 600, fontSize: '0.9rem', color: h ? 'var(--text)' : 'var(--text-2)', textDecoration: 'none', transition: 'color var(--t-fast)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
      {icon === 'youtube' && <Icon name="youtube" width={20} height={16} />}
      {icon === 'instagram' && <Icon name="instagram" size={18} />}
      {label}
    </a>
  );
}

const DEFAULT_LINKS = [
  { label: 'Sobre', href: '/sobre/' }, { label: 'Blog', href: '/blog/' },
  { label: 'YouTube', href: 'https://youtube.com/renatoasse?sub_confirmation=1', icon: 'youtube' },
  { label: 'Instagram', href: 'https://instagram.com/renatoasse', icon: 'instagram' },
  { label: 'Política de Privacidade', href: 'https://ibe.ia.br/privacidade' }, { label: 'Termos', href: 'https://ibe.ia.br/termos' },
];

export function SiteFooter({ links = DEFAULT_LINKS, tagline = 'Instituto Brasileiro de Educação em Inteligência Artificial.', year = 2026, onNavigate, style }) {
  return (
    <footer style={{ marginTop: 80, background: 'var(--g-1)', backdropFilter: 'var(--g-blur)', WebkitBackdropFilter: 'var(--g-blur)', borderTop: '1px solid var(--g-border)', ...style }}>
      <div style={{ maxWidth: 'var(--content-max, 1600px)', margin: '0 auto', padding: '48px clamp(16px, 4vw, 32px)', display: 'grid', gap: 32, textAlign: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          <Logo size="sm" href="/" />
          <p style={{ fontFamily: 'var(--f-body)', fontSize: '0.95rem', color: 'var(--text-2)', margin: 0, maxWidth: 480 }}>{tagline}</p>
        </div>
        <nav aria-label="Rodapé" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'clamp(16px, 3vw, 28px)' }}>
          {links.map((l) => <FLink key={l.label} {...l} onClick={onNavigate && !(l.href || '').startsWith('http') ? (e) => { e.preventDefault(); onNavigate(l); } : undefined} />)}
        </nav>
        <p style={{ fontFamily: 'var(--f-body)', fontSize: '0.825rem', color: 'var(--text-3)', margin: 0, lineHeight: 1.5 }}>
          © {year} ibe.IA — Instituto Brasileiro de Educação em Inteligência Artificial. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
