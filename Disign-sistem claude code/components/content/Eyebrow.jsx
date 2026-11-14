import React from 'react';

export function Eyebrow({ children, color = 'var(--c-purple)', style }) {
  return (
    <p style={{ fontFamily: 'var(--f-mono)', fontSize: 12, letterSpacing: '.2em', textTransform: 'uppercase', color, margin: '0 0 16px', ...style }}>{children}</p>
  );
}
