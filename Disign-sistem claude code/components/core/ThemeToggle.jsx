import React from 'react';
import { Icon } from './Icon.jsx';

export function ThemeToggle({ value, defaultValue = 'dark', onChange, fixed = false, style }) {
  const [inner, setInner] = React.useState(defaultValue);
  const cur = value || inner;
  const set = (v) => { if (!value) setInner(v); onChange && onChange(v); };
  const btn = (v, label, icon) => (
    <button type="button" aria-label={label} aria-pressed={cur === v} onClick={() => set(v)}
      style={{ position: 'relative', zIndex: 1, width: 32, height: 32, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', border: 0, color: cur === v ? 'var(--text)' : 'var(--text-2)', borderRadius: 999, cursor: 'pointer', transition: 'color .2s', padding: 0 }}>
      <Icon name={icon} size={16} />
    </button>
  );
  return (
    <div role="group" aria-label="Alternar tema"
      style={{ position: fixed ? 'fixed' : 'relative', top: fixed ? '1rem' : undefined, right: fixed ? '1rem' : undefined, zIndex: 100, display: 'inline-flex', alignItems: 'center', padding: 3, background: 'var(--g-1)', backdropFilter: 'var(--g-blur)', WebkitBackdropFilter: 'var(--g-blur)', border: '1px solid var(--g-border)', borderRadius: 999, boxShadow: 'var(--shadow-toggle)', ...style }}>
      {btn('dark', 'Tema escuro', 'moon')}
      {btn('light', 'Tema claro', 'sun')}
      <span aria-hidden="true" style={{ position: 'absolute', top: 3, left: 3, width: 32, height: 32, borderRadius: 999, background: 'linear-gradient(135deg, rgba(0,229,204,.22), rgba(175,109,255,.22))', border: '1px solid var(--g-border-strong)', boxShadow: 'rgba(255,255,255,.3) 0 1px inset, rgba(0,0,0,.18) 0 1px 4px', transition: 'transform .28s cubic-bezier(.4,0,.2,1)', transform: cur === 'light' ? 'translate(32px)' : 'none', pointerEvents: 'none', boxSizing: 'border-box' }} />
    </div>
  );
}
