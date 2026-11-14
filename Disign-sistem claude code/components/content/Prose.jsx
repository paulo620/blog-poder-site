import React from 'react';

// Article body styles, ported from blog.ibe.ia.br's .prose rules. Scoped via a data attribute.
const PROSE_CSS = `
[data-ibe-prose]{max-width:var(--prose-max,760px);background:var(--g-2);backdrop-filter:var(--g-blur);-webkit-backdrop-filter:var(--g-blur);border:1px solid var(--g-border);border-radius:var(--r-lg);box-shadow:var(--g-shadow-card);color:var(--text);font-family:var(--f-body);isolation:isolate;margin-inline:auto;padding:clamp(24px,5vw,48px);font-size:1.0625rem;line-height:1.75;position:relative}
[data-ibe-prose]>:first-child{margin-top:0}[data-ibe-prose]>:last-child{margin-bottom:0}
[data-ibe-prose] p,[data-ibe-prose] ul,[data-ibe-prose] ol,[data-ibe-prose] blockquote{margin-block:1rem}
[data-ibe-prose] h2,[data-ibe-prose] h3,[data-ibe-prose] h4{font-family:var(--f-display);letter-spacing:-.02em;color:var(--text);margin-top:2.25rem;margin-bottom:.75rem;font-weight:800;line-height:1.2}
[data-ibe-prose] h2{font-size:clamp(1.5rem,3.2vw,2rem)}[data-ibe-prose] h3{font-size:clamp(1.25rem,2.6vw,1.5rem)}[data-ibe-prose] h4{font-size:1.125rem}
[data-ibe-prose] ul{padding-left:1.75rem;list-style:disc outside}[data-ibe-prose] ol{padding-left:1.75rem;list-style:decimal}
[data-ibe-prose] li{margin-block:.4rem;padding-left:.25rem}[data-ibe-prose] li::marker{color:var(--c-purple)}
[data-ibe-prose] a{color:var(--c-teal-fg);text-underline-offset:4px;font-weight:600;text-decoration:underline 1.5px}[data-ibe-prose] a:hover{color:var(--c-purple)}
[data-ibe-prose] blockquote{background:var(--g-3);border:0;border-left:3px solid var(--c-green-bright);border-radius:var(--r-md);color:var(--text-2);padding:16px 20px;font-style:italic;margin-inline:0}
[data-ibe-prose] blockquote p{margin:0}
[data-ibe-prose] img{border-radius:var(--r-md);border:1px solid var(--g-border);max-width:100%;height:auto;box-shadow:var(--g-shadow-card);margin-block:1.5rem;margin-inline:auto;display:block}
[data-ibe-prose] code{font-family:var(--f-mono);background:var(--g-1);border:1px solid var(--g-border-dim);border-radius:var(--r-sm);color:var(--c-teal-fg);padding:2px 6px;font-size:.92em}
[data-ibe-prose] pre{border:1px solid var(--g-border);border-radius:var(--r-md);font-family:var(--f-mono);background:rgba(0,0,0,.55);padding:16px 18px;font-size:.9rem;line-height:1.6;overflow-x:auto}
[data-ibe-prose] pre code{color:inherit;background:0 0;border:0;padding:0}
[data-ibe-prose] hr{border:0;border-top:1px solid var(--g-border);margin-block:2.5rem}
[data-ibe-prose] strong{color:var(--text);font-weight:700}
[data-theme="light"] [data-ibe-prose] code{color:var(--c-blue);background:rgba(15,23,42,.07);border-color:rgba(15,23,42,.12)}
[data-theme="light"] [data-ibe-prose] pre{color:#f8fafc;background:rgba(15,23,42,.92)}
`;

export function Prose({ children, style }) {
  return (
    <>
      <style>{PROSE_CSS}</style>
      <article data-ibe-prose="" style={style}>{children}</article>
    </>
  );
}
