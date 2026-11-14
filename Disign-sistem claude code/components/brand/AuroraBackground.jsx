import React from 'react';

const BLOBS = [
  { s: 50, bg: 'rgba(0, 204, 177, 0.4)', t: 'translate(10%, 10%)' },
  { s: 60, bg: 'rgba(123, 97, 255, 0.35)', t: 'translate(60%, 10%)' },
  { s: 45, bg: 'rgba(28, 160, 251, 0.35)', t: 'translate(20%, 60%)' },
  { s: 55, bg: 'rgba(255, 73, 219, 0.3)', t: 'translate(70%, 50%)' },
  { s: 40, bg: 'rgba(153, 69, 255, 0.3)', t: 'translate(40%, 30%)' },
];
const NOISE = "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")";

/** Fixed full-page aurora backdrop used behind every ibe.IA page. */
export function AuroraBackground({ fixed = true, blur = 120 }) {
  return (
    <div aria-hidden="true" style={{ position: fixed ? 'fixed' : 'absolute', inset: 0, zIndex: fixed ? -1 : 0, pointerEvents: 'none', background: 'var(--page-bg)' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        {BLOBS.map((b, i) => (
          <div key={i} style={{ position: 'absolute', borderRadius: '50%', filter: 'blur(' + blur + 'px)', width: 'min(' + b.s + 'vw, ' + b.s + 'vh)', height: 'min(' + b.s + 'vw, ' + b.s + 'vh)', background: 'radial-gradient(circle, ' + b.bg + ' 0%, transparent 70%)', transform: b.t }} />
        ))}
      </div>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: NOISE, backgroundSize: '200px 200px', opacity: 0.028, mixBlendMode: 'overlay' }} />
    </div>
  );
}
