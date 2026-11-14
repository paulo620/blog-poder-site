import React from 'react';
import { Eyebrow } from './Eyebrow.jsx';

export function Hero({ eyebrow = '// blog ibe.IA', title, titleEm, children, actions, align = 'center', style }) {
  return (
    <section style={{ padding: 'clamp(32px, 5vw, 64px) clamp(16px, 4vw, 32px)', ...style }}>
      <div style={{ maxWidth: 880, margin: '0 auto', textAlign: align }}>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h1 style={{ fontFamily: 'var(--f-display)', fontWeight: 800, fontSize: 'clamp(2.25rem, 6.5vw, 4.5rem)', lineHeight: 1.05, letterSpacing: '-.04em', margin: '0 0 16px', paddingBottom: '.04em', background: 'linear-gradient(180deg, var(--text) 0%, var(--text) 28%, var(--text-3) 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', WebkitTextFillColor: 'transparent' }}>
          {title}{titleEm && <> <span style={{ display: 'inline-block' }}>{titleEm}</span></>}
        </h1>
        {children && <p style={{ fontFamily: 'var(--f-body)', fontSize: 'clamp(1rem, 1.6vw, 1.2rem)', lineHeight: 1.65, color: 'var(--text-2)', maxWidth: 720, margin: align === 'center' ? '0 auto 32px' : '0 0 32px' }}>{children}</p>}
        {actions && <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: align === 'center' ? 'center' : 'flex-start' }}>{actions}</div>}
      </div>
    </section>
  );
}
