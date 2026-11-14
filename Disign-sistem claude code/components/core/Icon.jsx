import React from 'react';

// Path data copied verbatim from blog.ibe.ia.br inline SVGs (Lucide-style, 24px grid, stroke 2).
const ICONS = {
  moon: [['path', { d: 'M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z' }]],
  sun: [['circle', { cx: 12, cy: 12, r: 4 }], ['path', { d: 'M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41' }]],
  youtube: [['path', { d: 'M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 20.2 0 2 2 0 0 1 1.4 1.4 24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.56 49.56 0 0 1-20.2 0 2 2 0 0 1-1.4-1.4z' }], ['path', { d: 'm9.75 15.02 5.75-3.02-5.75-3.02v6.04z' }]],
  instagram: [['rect', { width: 20, height: 20, x: 2, y: 2, rx: 5, ry: 5 }], ['path', { d: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' }], ['line', { x1: 17.5, x2: 17.51, y1: 6.5, y2: 6.5 }]],
};

export function Icon({ name, size = 16, width, height, strokeWidth = 2, style }) {
  const parts = ICONS[name] || [];
  return (
    <svg width={width || size} height={height || size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: 'block', ...style }}>
      {parts.map(([tag, attrs], i) => React.createElement(tag, { key: i, ...attrs }))}
    </svg>
  );
}
