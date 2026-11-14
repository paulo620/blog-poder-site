import React from 'react';

const SIZES = {
  md: { fontSize: '0.95rem', padding: '14px 24px' },
  sm: { fontSize: '0.85rem', padding: '10px 18px' },
};

export function Button({ variant = 'primary', size = 'md', href, onClick, children, disabled, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const isPrimary = variant === 'primary';
  const lift = hover && !disabled ? (size === 'sm' ? 'translateY(-1px)' : 'translateY(-2px)') : 'none';
  const s = {
    fontFamily: 'var(--f-display)', fontWeight: 700, letterSpacing: '-0.01em', lineHeight: 1.5,
    ...SIZES[size], borderRadius: 'var(--r-md)', textDecoration: 'none',
    display: 'inline-flex', alignItems: 'center', gap: 8, cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'transform var(--t-fast), box-shadow var(--t-fast), border-color var(--t-fast)',
    transform: lift, opacity: disabled ? 0.5 : 1, border: 0,
    ...(isPrimary
      ? { color: 'var(--ink-on-cta, #0a0a0a)', background: 'var(--cta-gradient)', boxShadow: 'var(--shadow-cta)' }
      : { color: 'var(--text)', background: 'var(--g-2)', backdropFilter: 'var(--g-blur)', WebkitBackdropFilter: 'var(--g-blur)', border: '1px solid ' + (hover && !disabled ? 'var(--g-border-strong)' : 'var(--g-border)'), boxShadow: 'var(--g-shadow-card)' }),
    ...style,
  };
  const Tag = href ? 'a' : 'button';
  return (
    <Tag href={href} onClick={disabled ? undefined : onClick} style={s} disabled={Tag === 'button' ? disabled : undefined}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} {...rest}>
      {children}
    </Tag>
  );
}
