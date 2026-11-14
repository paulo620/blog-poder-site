/* @ds-bundle: {"format":4,"namespace":"IbeIABlogDesignSystem_8b7900","components":[{"name":"AuroraBackground","sourcePath":"components/brand/AuroraBackground.jsx"},{"name":"LogoSymbol","sourcePath":"components/brand/Logo.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Eyebrow","sourcePath":"components/content/Eyebrow.jsx"},{"name":"Hero","sourcePath":"components/content/Hero.jsx"},{"name":"PostCard","sourcePath":"components/content/PostCard.jsx"},{"name":"Prose","sourcePath":"components/content/Prose.jsx"},{"name":"SectionHeader","sourcePath":"components/content/SectionHeader.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"ThemeToggle","sourcePath":"components/core/ThemeToggle.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"}],"sourceHashes":{"components/brand/AuroraBackground.jsx":"907d03d69ec6","components/brand/Logo.jsx":"256ae6d0adc0","components/content/Eyebrow.jsx":"ce02a926f104","components/content/Hero.jsx":"f000a98af89c","components/content/PostCard.jsx":"75c4f0916716","components/content/Prose.jsx":"aa2f5c733ad7","components/content/SectionHeader.jsx":"6a0b011cd5b0","components/core/Button.jsx":"8f5f46672782","components/core/Icon.jsx":"3f7a5892485e","components/core/ThemeToggle.jsx":"77af5e4e7c57","components/navigation/SiteFooter.jsx":"841f86242d03","components/navigation/SiteHeader.jsx":"a857ce86a1b9","ui_kits/blog/ArticleScreen.jsx":"425a5568ba97","ui_kits/blog/BlogScreen.jsx":"90f77288e7c1","ui_kits/blog/HomeScreen.jsx":"85c89355d0d3","ui_kits/blog/data.js":"c396691c3bae"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.IbeIABlogDesignSystem_8b7900 = window.IbeIABlogDesignSystem_8b7900 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/AuroraBackground.jsx
try { (() => {
const BLOBS = [{
  s: 50,
  bg: 'rgba(0, 204, 177, 0.4)',
  t: 'translate(10%, 10%)'
}, {
  s: 60,
  bg: 'rgba(123, 97, 255, 0.35)',
  t: 'translate(60%, 10%)'
}, {
  s: 45,
  bg: 'rgba(28, 160, 251, 0.35)',
  t: 'translate(20%, 60%)'
}, {
  s: 55,
  bg: 'rgba(255, 73, 219, 0.3)',
  t: 'translate(70%, 50%)'
}, {
  s: 40,
  bg: 'rgba(153, 69, 255, 0.3)',
  t: 'translate(40%, 30%)'
}];
const NOISE = "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")";

/** Fixed full-page aurora backdrop used behind every ibe.IA page. */
function AuroraBackground({
  fixed = true,
  blur = 120
}) {
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: fixed ? 'fixed' : 'absolute',
      inset: 0,
      zIndex: fixed ? -1 : 0,
      pointerEvents: 'none',
      background: 'var(--page-bg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)',
      backgroundSize: '64px 64px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      overflow: 'hidden'
    }
  }, BLOBS.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'absolute',
      borderRadius: '50%',
      filter: 'blur(' + blur + 'px)',
      width: 'min(' + b.s + 'vw, ' + b.s + 'vh)',
      height: 'min(' + b.s + 'vw, ' + b.s + 'vh)',
      background: 'radial-gradient(circle, ' + b.bg + ' 0%, transparent 70%)',
      transform: b.t
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: NOISE,
      backgroundSize: '200px 200px',
      opacity: 0.028,
      mixBlendMode: 'overlay'
    }
  }));
}
Object.assign(__ds_scope, { AuroraBackground });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/AuroraBackground.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
const LOGO_PATHS = ["M 392.421875 28.476562 C 382.21875 32.195312 380.003906 35.597656 367.425781 67.316406 C 363.15625 77.914062 350.417969 109.554688 338.949219 137.636719 C 327.480469 165.71875 314.191406 198.625 309.285156 210.804688 C 304.382812 222.988281 299.082031 235.644531 297.421875 238.886719 C 288.324219 256.765625 273.136719 271.632812 254.074219 281.125 C 250.832031 282.789062 243.710938 285.871094 238.253906 288.085938 C 220.375 295.207031 196.882812 305.015625 138.824219 329.617188 C 107.5 342.90625 76.253906 356.035156 69.453125 358.804688 C 37.730469 371.617188 32.117188 376.761719 32.035156 392.34375 C 32.035156 398.117188 32.351562 399.699219 34.25 403.574219 C 38.523438 412.355469 41.765625 414.253906 77.125 428.570312 C 88.910156 433.316406 120.550781 446.527344 147.523438 457.839844 C 174.5 469.152344 200.679688 480.066406 205.664062 482.125 C 226.863281 490.824219 253.914062 502.613281 258.582031 505.140625 C 265.226562 508.78125 273.769531 515.820312 279.542969 522.386719 C 282.074219 525.234375 284.449219 527.605469 284.84375 527.605469 C 285.238281 527.605469 289.195312 524.679688 293.625 521.042969 C 338.949219 484.574219 342.589844 481.492188 342.191406 480.382812 C 341.164062 477.851562 335.628906 470.101562 331.59375 465.75 C 321.785156 455.230469 313.636719 450.167969 291.171875 440.832031 C 282.15625 437.113281 263.882812 429.441406 250.355469 423.824219 C 236.910156 418.128906 217.765625 410.21875 207.878906 406.1875 C 188.972656 398.355469 180.351562 394.320312 180.351562 393.292969 C 180.351562 391.867188 184.226562 389.101562 188.734375 387.28125 C 191.265625 386.253906 207.085938 379.449219 223.855469 372.25 C 240.625 364.972656 267.203125 353.503906 283.023438 346.703125 C 298.765625 339.976562 314.746094 332.621094 318.460938 330.40625 C 332.542969 321.941406 342.824219 311.105469 350.183594 296.789062 C 352.398438 292.597656 364.261719 263.882812 376.523438 233.113281 C 388.785156 202.339844 399.542969 176.316406 400.332031 175.367188 C 401.597656 173.785156 401.835938 173.785156 402.941406 174.8125 C 404.050781 175.921875 415.757812 204.636719 435.058594 253.519531 C 447.238281 284.527344 453.804688 295.996094 464.878906 306.203125 C 469.941406 310.789062 479.910156 317.671875 480.621094 317.039062 C 480.859375 316.800781 490.191406 303.671875 501.425781 287.851562 L 521.910156 259.058594 L 516.929688 253.757812 C 507.832031 244.109375 503.007812 235.722656 494.382812 214.367188 C 454.515625 115.25 426.121094 46.039062 422.957031 40.105469 C 417.023438 28.792969 404.683594 24.046875 392.421875 28.476562 M 709.9375 67.316406 C 693.957031 71.035156 665.875 84.085938 642.9375 98.5625 C 631.308594 105.996094 625.929688 109.953125 614.617188 119.523438 L 605.523438 127.195312 L 596.425781 127.589844 C 585.113281 128.066406 580.128906 129.410156 569.136719 134.867188 C 543.980469 147.285156 531.007812 166.746094 539.078125 180.035156 C 542.242188 185.253906 546.117188 187.074219 557.429688 188.578125 C 567.238281 189.921875 572.21875 191.898438 573.644531 195.0625 C 574.515625 196.960938 574.277344 197.359375 569.769531 201.550781 C 563.835938 207.167969 562.09375 210.332031 562.09375 215.945312 C 562.015625 221.5625 563.835938 225.203125 570.085938 231.765625 C 578.546875 240.785156 586.933594 243.871094 594.210938 240.707031 C 596.1875 239.757812 599.90625 236.910156 602.59375 234.0625 C 607.421875 229.078125 607.5 229 609.636719 230.183594 C 612.957031 232.003906 615.332031 237.777344 616.515625 246.953125 C 617.78125 256.289062 618.097656 257.316406 620.789062 260.957031 C 625.296875 267.046875 635.265625 268.390625 643.964844 264.039062 C 649.976562 261.035156 659.46875 251.9375 664.375 244.425781 C 672.996094 231.136719 676.316406 220.695312 676.316406 206.851562 L 676.316406 197.992188 L 681.300781 192.136719 C 702.261719 167.457031 718.796875 139.535156 728.605469 112.167969 C 733.902344 97.453125 736.199219 81.949219 733.984375 76.175781 C 731.054688 68.34375 721.167969 64.707031 709.9375 67.316406 M 646.417969 150.769531 C 648.238281 152.035156 650.847656 154.644531 652.191406 156.542969 C 654.328125 159.628906 654.566406 160.496094 654.566406 165.957031 C 654.566406 172.203125 653.851562 174.101562 649.898438 178.613281 C 645.941406 183.121094 637.875 185.257812 631.46875 183.4375 C 626.640625 182.09375 620.628906 176.398438 619.445312 171.96875 C 616.753906 162.394531 620.710938 153.378906 629.253906 149.34375 C 634.234375 147.050781 641.988281 147.683594 646.417969 150.769531", "M 552.839844 252.886719 C 536.386719 265.308594 517.800781 288.40625 481.015625 342.113281 C 474.132812 352.160156 449.375 386.09375 439.410156 399.066406 C 386.648438 467.726562 324.476562 524.996094 275.117188 550.152344 C 249.40625 563.359375 230.820312 565.101562 221.960938 555.292969 C 219.03125 552.050781 216.738281 545.800781 216.738281 541.132812 C 216.738281 533.460938 220.296875 520.488281 224.808594 511.550781 L 227.101562 506.960938 L 220.929688 504.113281 C 217.53125 502.53125 211.914062 500.078125 208.433594 498.65625 L 202.105469 495.964844 L 199.652344 498.734375 C 195.300781 503.640625 184.226562 519.617188 178.691406 529.109375 C 171.808594 540.660156 166.90625 552.285156 163.660156 564.46875 C 161.367188 572.933594 161.128906 574.988281 161.050781 585.351562 C 161.050781 598.324219 162.078125 602.515625 167.378906 610.503906 C 177.898438 626.40625 196.648438 633.367188 221.328125 630.519531 C 270.84375 624.742188 334.441406 586.695312 393.136719 527.6875 C 430.867188 489.71875 461.082031 449.691406 487.027344 403.023438 C 500.632812 378.578125 512.5 353.425781 527.210938 317.910156 C 542.953125 279.859375 548.175781 268.550781 556.480469 254.074219 C 558.0625 251.382812 559.011719 249.167969 558.617188 249.167969 C 558.140625 249.167969 555.609375 250.832031 552.839844 252.886719", "M 559.011719 284.925781 C 557.113281 289.117188 554.265625 295.445312 546.90625 311.34375 C 535.914062 335.390625 531.484375 345.910156 532.117188 346.464844 C 532.433594 346.78125 538.996094 349.628906 546.589844 352.792969 C 570.875 362.839844 634.789062 390.207031 635.816406 391 C 638.269531 392.898438 636.765625 394.558594 629.886719 397.328125 C 611.691406 404.605469 500.710938 452.144531 492.644531 456.019531 C 471.207031 466.539062 457.917969 483.546875 446.605469 515.03125 C 442.574219 526.339844 407.214844 618.414062 405.394531 622.292969 C 404.683594 623.953125 403.65625 624.902344 402.707031 624.902344 C 401.042969 624.902344 397.5625 617.230469 384.433594 583.925781 C 379.292969 571.035156 376.839844 565.734375 376.207031 566.289062 C 375.730469 566.605469 363.789062 575.542969 349.628906 586.0625 C 335.46875 596.582031 322.972656 605.917969 321.707031 606.945312 L 319.570312 608.6875 L 332.066406 639.929688 C 378.894531 756.289062 380.003906 758.898438 383.640625 763.566406 C 388.152344 769.339844 398.039062 773.296875 405.394531 772.347656 C 419.476562 770.527344 424.695312 764.753906 434.109375 740.390625 C 435.929688 735.800781 450.007812 700.207031 465.433594 661.289062 C 480.777344 622.371094 496.203125 583.375 499.527344 574.671875 C 502.925781 565.972656 507.4375 555.371094 509.652344 551.101562 C 516.136719 538.601562 527.6875 525.789062 541.609375 515.582031 C 547.9375 510.917969 556.082031 506.960938 582.976562 495.570312 C 594.921875 490.429688 634.078125 473.582031 669.988281 457.996094 C 705.902344 442.414062 742.527344 426.59375 751.386719 422.875 C 773.535156 413.382812 778.28125 410.0625 781.207031 402.074219 C 782.628906 397.960938 782.550781 387.914062 781.046875 383.40625 C 779.464844 378.738281 774.640625 373.28125 769.421875 370.273438 C 767.125 369.007812 756.605469 364.339844 745.925781 359.910156 C 735.25 355.480469 706.058594 343.222656 681.0625 332.621094 C 644.914062 317.355469 567.710938 285.160156 561.382812 282.707031 C 560.511719 282.390625 559.800781 283.023438 559.011719 284.921875"];
const SIZES = {
  sm: {
    s: 28,
    f: '0.95rem',
    g: 8
  },
  md: {
    s: 40,
    f: '1.25rem',
    g: 10
  },
  lg: {
    s: 56,
    f: '1.75rem',
    g: 12
  }
};
function LogoSymbol({
  size = 28,
  color = 'currentColor',
  style
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 810 810",
    width: size,
    height: size,
    style: {
      display: 'block',
      color,
      flexShrink: 0,
      ...style
    },
    "aria-hidden": "true"
  }, LOGO_PATHS.map((d, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    fill: "currentColor",
    d: d
  })));
}
function Logo({
  size = 'sm',
  showText = true,
  href,
  style
}) {
  const z = SIZES[size] || SIZES.sm;
  const Tag = href ? 'a' : 'span';
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: z.g,
      textDecoration: 'none',
      color: 'var(--text)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(LogoSymbol, {
    size: z.s
  }), showText && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--f-display)',
      fontWeight: 800,
      letterSpacing: '-0.02em',
      lineHeight: 1,
      fontSize: z.f,
      color: 'var(--text)'
    }
  }, "ibe", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--c-purple)'
    }
  }, "."), "IA"));
}
Object.assign(__ds_scope, { LogoSymbol, Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/content/Eyebrow.jsx
try { (() => {
function Eyebrow({
  children,
  color = 'var(--c-purple)',
  style
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--f-mono)',
      fontSize: 12,
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      color,
      margin: '0 0 16px',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/content/Hero.jsx
try { (() => {
function Hero({
  eyebrow = '// blog ibe.IA',
  title,
  titleEm,
  children,
  actions,
  align = 'center',
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'clamp(32px, 5vw, 64px) clamp(16px, 4vw, 32px)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 880,
      margin: '0 auto',
      textAlign: align
    }
  }, eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, null, eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--f-display)',
      fontWeight: 800,
      fontSize: 'clamp(2.25rem, 6.5vw, 4.5rem)',
      lineHeight: 1.05,
      letterSpacing: '-.04em',
      margin: '0 0 16px',
      paddingBottom: '.04em',
      background: 'linear-gradient(180deg, var(--text) 0%, var(--text) 28%, var(--text-3) 100%)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent',
      WebkitTextFillColor: 'transparent'
    }
  }, title, titleEm && /*#__PURE__*/React.createElement(React.Fragment, null, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block'
    }
  }, titleEm))), children && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--f-body)',
      fontSize: 'clamp(1rem, 1.6vw, 1.2rem)',
      lineHeight: 1.65,
      color: 'var(--text-2)',
      maxWidth: 720,
      margin: align === 'center' ? '0 auto 32px' : '0 0 32px'
    }
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 14,
      justifyContent: align === 'center' ? 'center' : 'flex-start'
    }
  }, actions)));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Hero.jsx", error: String((e && e.message) || e) }); }

// components/content/PostCard.jsx
try { (() => {
function PostCard({
  title,
  description,
  date,
  image,
  imageAlt,
  href,
  moreLabel = 'Ler artigo →',
  onClick,
  style
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href || '#',
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      textDecoration: 'none',
      background: 'var(--g-2)',
      backdropFilter: 'var(--g-blur)',
      WebkitBackdropFilter: 'var(--g-blur)',
      border: '1px solid ' + (h ? 'var(--g-border-strong)' : 'var(--g-border)'),
      borderRadius: 'var(--r-lg)',
      boxShadow: h ? 'var(--g-shadow-hover)' : 'var(--g-shadow-card)',
      overflow: 'hidden',
      transition: 'transform var(--t-slow), border-color var(--t-slow), box-shadow var(--t-slow)',
      transform: h ? 'translateY(-5px)' : 'none',
      color: 'var(--text)',
      height: '100%',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '16 / 9',
      overflow: 'hidden',
      background: 'var(--g-1)'
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt || title,
    loading: "lazy",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      transition: 'transform var(--t-slow)',
      transform: h ? 'scale(1.04)' : 'none'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 22px 24px',
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      gap: 8
    }
  }, date && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--f-mono)',
      fontSize: '.75rem',
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--text-3)',
      margin: 0
    }
  }, date), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--f-display)',
      fontWeight: 800,
      fontSize: '1.2rem',
      lineHeight: 1.25,
      letterSpacing: '-.02em',
      color: 'var(--text)',
      margin: 0
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--f-body)',
      fontSize: '.95rem',
      lineHeight: 1.55,
      color: 'var(--text-2)',
      margin: 0,
      flex: 1,
      display: '-webkit-box',
      WebkitLineClamp: 3,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    }
  }, description), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--f-display)',
      fontWeight: 600,
      fontSize: '.875rem',
      color: h ? 'var(--c-purple)' : 'var(--c-teal-fg)',
      marginTop: 4,
      transition: 'color var(--t-fast)'
    }
  }, moreLabel)));
}
Object.assign(__ds_scope, { PostCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PostCard.jsx", error: String((e && e.message) || e) }); }

// components/content/Prose.jsx
try { (() => {
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
function Prose({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, PROSE_CSS), /*#__PURE__*/React.createElement("article", {
    "data-ibe-prose": "",
    style: style
  }, children));
}
Object.assign(__ds_scope, { Prose });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Prose.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeader.jsx
try { (() => {
function SectionHeader({
  title,
  linkLabel = 'Ver todos →',
  href,
  onLinkClick,
  style
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginBottom: 32,
      gap: 16,
      flexWrap: 'wrap',
      ...style
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--f-display)',
      fontWeight: 800,
      fontSize: 'clamp(1.5rem, 3.2vw, 2.25rem)',
      color: 'var(--text)',
      margin: 0,
      letterSpacing: '-.07em',
      lineHeight: 1.1
    }
  }, title), linkLabel && /*#__PURE__*/React.createElement("a", {
    href: href || '#',
    onClick: onLinkClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      fontFamily: 'var(--f-display)',
      fontWeight: 600,
      color: h ? 'var(--c-purple)' : 'var(--c-teal-fg)',
      textDecoration: 'none',
      transition: 'color var(--t-fast)'
    }
  }, linkLabel));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  md: {
    fontSize: '0.95rem',
    padding: '14px 24px'
  },
  sm: {
    fontSize: '0.85rem',
    padding: '10px 18px'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  children,
  disabled,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const isPrimary = variant === 'primary';
  const lift = hover && !disabled ? size === 'sm' ? 'translateY(-1px)' : 'translateY(-2px)' : 'none';
  const s = {
    fontFamily: 'var(--f-display)',
    fontWeight: 700,
    letterSpacing: '-0.01em',
    lineHeight: 1.5,
    ...SIZES[size],
    borderRadius: 'var(--r-md)',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'transform var(--t-fast), box-shadow var(--t-fast), border-color var(--t-fast)',
    transform: lift,
    opacity: disabled ? 0.5 : 1,
    border: 0,
    ...(isPrimary ? {
      color: 'var(--ink-on-cta, #0a0a0a)',
      background: 'var(--cta-gradient)',
      boxShadow: 'var(--shadow-cta)'
    } : {
      color: 'var(--text)',
      background: 'var(--g-2)',
      backdropFilter: 'var(--g-blur)',
      WebkitBackdropFilter: 'var(--g-blur)',
      border: '1px solid ' + (hover && !disabled ? 'var(--g-border-strong)' : 'var(--g-border)'),
      boxShadow: 'var(--g-shadow-card)'
    }),
    ...style
  };
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    style: s,
    disabled: Tag === 'button' ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
// Path data copied verbatim from blog.ibe.ia.br inline SVGs (Lucide-style, 24px grid, stroke 2).
const ICONS = {
  moon: [['path', {
    d: 'M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'
  }]],
  sun: [['circle', {
    cx: 12,
    cy: 12,
    r: 4
  }], ['path', {
    d: 'M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41'
  }]],
  youtube: [['path', {
    d: 'M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 20.2 0 2 2 0 0 1 1.4 1.4 24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.56 49.56 0 0 1-20.2 0 2 2 0 0 1-1.4-1.4z'
  }], ['path', {
    d: 'm9.75 15.02 5.75-3.02-5.75-3.02v6.04z'
  }]],
  instagram: [['rect', {
    width: 20,
    height: 20,
    x: 2,
    y: 2,
    rx: 5,
    ry: 5
  }], ['path', {
    d: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'
  }], ['line', {
    x1: 17.5,
    x2: 17.51,
    y1: 6.5,
    y2: 6.5
  }]]
};
function Icon({
  name,
  size = 16,
  width,
  height,
  strokeWidth = 2,
  style
}) {
  const parts = ICONS[name] || [];
  return /*#__PURE__*/React.createElement("svg", {
    width: width || size,
    height: height || size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    style: {
      display: 'block',
      ...style
    }
  }, parts.map(([tag, attrs], i) => React.createElement(tag, {
    key: i,
    ...attrs
  })));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/ThemeToggle.jsx
try { (() => {
function ThemeToggle({
  value,
  defaultValue = 'dark',
  onChange,
  fixed = false,
  style
}) {
  const [inner, setInner] = React.useState(defaultValue);
  const cur = value || inner;
  const set = v => {
    if (!value) setInner(v);
    onChange && onChange(v);
  };
  const btn = (v, label, icon) => /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": label,
    "aria-pressed": cur === v,
    onClick: () => set(v),
    style: {
      position: 'relative',
      zIndex: 1,
      width: 32,
      height: 32,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'transparent',
      border: 0,
      color: cur === v ? 'var(--text)' : 'var(--text-2)',
      borderRadius: 999,
      cursor: 'pointer',
      transition: 'color .2s',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  }));
  return /*#__PURE__*/React.createElement("div", {
    role: "group",
    "aria-label": "Alternar tema",
    style: {
      position: fixed ? 'fixed' : 'relative',
      top: fixed ? '1rem' : undefined,
      right: fixed ? '1rem' : undefined,
      zIndex: 100,
      display: 'inline-flex',
      alignItems: 'center',
      padding: 3,
      background: 'var(--g-1)',
      backdropFilter: 'var(--g-blur)',
      WebkitBackdropFilter: 'var(--g-blur)',
      border: '1px solid var(--g-border)',
      borderRadius: 999,
      boxShadow: 'var(--shadow-toggle)',
      ...style
    }
  }, btn('dark', 'Tema escuro', 'moon'), btn('light', 'Tema claro', 'sun'), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: 3,
      left: 3,
      width: 32,
      height: 32,
      borderRadius: 999,
      background: 'linear-gradient(135deg, rgba(0,229,204,.22), rgba(175,109,255,.22))',
      border: '1px solid var(--g-border-strong)',
      boxShadow: 'rgba(255,255,255,.3) 0 1px inset, rgba(0,0,0,.18) 0 1px 4px',
      transition: 'transform .28s cubic-bezier(.4,0,.2,1)',
      transform: cur === 'light' ? 'translate(32px)' : 'none',
      pointerEvents: 'none',
      boxSizing: 'border-box'
    }
  }));
}
Object.assign(__ds_scope, { ThemeToggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ThemeToggle.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function FLink({
  label,
  href,
  icon,
  onClick
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href || '#',
    onClick: onClick,
    target: href && href.startsWith('http') ? '_blank' : undefined,
    rel: "noopener",
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      fontFamily: 'var(--f-display)',
      fontWeight: 600,
      fontSize: '0.9rem',
      color: h ? 'var(--text)' : 'var(--text-2)',
      textDecoration: 'none',
      transition: 'color var(--t-fast)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, icon === 'youtube' && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "youtube",
    width: 20,
    height: 16
  }), icon === 'instagram' && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "instagram",
    size: 18
  }), label);
}
const DEFAULT_LINKS = [{
  label: 'Sobre',
  href: '/sobre/'
}, {
  label: 'Blog',
  href: '/blog/'
}, {
  label: 'YouTube',
  href: 'https://youtube.com/renatoasse?sub_confirmation=1',
  icon: 'youtube'
}, {
  label: 'Instagram',
  href: 'https://instagram.com/renatoasse',
  icon: 'instagram'
}, {
  label: 'Política de Privacidade',
  href: 'https://ibe.ia.br/privacidade'
}, {
  label: 'Termos',
  href: 'https://ibe.ia.br/termos'
}];
function SiteFooter({
  links = DEFAULT_LINKS,
  tagline = 'Instituto Brasileiro de Educação em Inteligência Artificial.',
  year = 2026,
  onNavigate,
  style
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      marginTop: 80,
      background: 'var(--g-1)',
      backdropFilter: 'var(--g-blur)',
      WebkitBackdropFilter: 'var(--g-blur)',
      borderTop: '1px solid var(--g-border)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max, 1600px)',
      margin: '0 auto',
      padding: '48px clamp(16px, 4vw, 32px)',
      display: 'grid',
      gap: 32,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    size: "sm",
    href: "/"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--f-body)',
      fontSize: '0.95rem',
      color: 'var(--text-2)',
      margin: 0,
      maxWidth: 480
    }
  }, tagline)), /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Rodap\xE9",
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: 'clamp(16px, 3vw, 28px)'
    }
  }, links.map(l => /*#__PURE__*/React.createElement(FLink, _extends({
    key: l.label
  }, l, {
    onClick: onNavigate && !(l.href || '').startsWith('http') ? e => {
      e.preventDefault();
      onNavigate(l);
    } : undefined
  })))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--f-body)',
      fontSize: '0.825rem',
      color: 'var(--text-3)',
      margin: 0,
      lineHeight: 1.5
    }
  }, "\xA9 ", year, " ibe.IA \u2014 Instituto Brasileiro de Educa\xE7\xE3o em Intelig\xEAncia Artificial. Todos os direitos reservados.")));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NavLink({
  label,
  href,
  active,
  onClick
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href || '#',
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      fontFamily: 'var(--f-display)',
      fontWeight: 600,
      fontSize: '0.95rem',
      letterSpacing: '-0.01em',
      textDecoration: 'none',
      color: h || active ? 'var(--text)' : 'var(--text-2)',
      transition: 'color var(--t-fast)'
    }
  }, label);
}
const DEFAULT_LINKS = [{
  label: 'Home',
  href: '/'
}, {
  label: 'Blog',
  href: '/blog/'
}, {
  label: 'Sobre',
  href: '/sobre/'
}];
function SiteHeader({
  links = DEFAULT_LINKS,
  active,
  ctaLabel = 'Inscreva-se',
  ctaHref = '/newsletter-inscricao/',
  onNavigate,
  onCta,
  compact = false,
  sticky = true,
  ctaOffset = 88
}) {
  const [open, setOpen] = React.useState(false);
  const nav = l => e => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(l);
      setOpen(false);
    }
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: sticky ? 'sticky' : 'relative',
      top: 0,
      zIndex: 50,
      background: 'var(--g-1)',
      backdropFilter: 'var(--g-blur)',
      WebkitBackdropFilter: 'var(--g-blur)',
      borderBottom: '1px solid var(--g-border-dim)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max, 1600px)',
      margin: '0 auto',
      padding: '14px clamp(16px, 4vw, 32px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    size: "sm",
    href: "/"
  }), !compact && /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Principal",
    style: {
      display: 'inline-flex',
      gap: 'clamp(16px, 3vw, 28px)',
      alignItems: 'center'
    }
  }, links.map(l => /*#__PURE__*/React.createElement(NavLink, _extends({
    key: l.label
  }, l, {
    active: active === l.label,
    onClick: nav(l)
  })))), !compact && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    href: ctaHref,
    onClick: onCta ? e => {
      e.preventDefault();
      onCta();
    } : undefined,
    style: {
      marginRight: ctaOffset
    }
  }, /*#__PURE__*/React.createElement("span", null, ctaLabel)), compact && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Abrir menu",
    "aria-expanded": open,
    onClick: () => setOpen(!open),
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      gap: 4,
      background: 'transparent',
      border: 0,
      padding: 8,
      cursor: 'pointer'
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'block',
      width: 22,
      height: 2,
      background: 'var(--text)',
      borderRadius: 1
    }
  })))), compact && open && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      padding: '8px clamp(16px, 4vw, 32px) 20px'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href,
    onClick: nav(l),
    style: {
      fontFamily: 'var(--f-display)',
      fontWeight: 600,
      fontSize: '1.05rem',
      color: 'var(--text)',
      textDecoration: 'none',
      padding: '10px 0'
    }
  }, l.label)), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    href: ctaHref,
    style: {
      alignSelf: 'flex-start',
      marginTop: 8
    }
  }, ctaLabel)));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/blog/ArticleScreen.jsx
try { (() => {
const {
  Prose,
  Eyebrow: AEyebrow,
  SectionHeader: ASectionHeader
} = window.IbeIABlogDesignSystem_8b7900;
// Article page layout not captured; body uses the site's real .prose styles. Sample copy.
function ArticleScreen({
  post,
  go,
  openPost
}) {
  return /*#__PURE__*/React.createElement("main", {
    style: {
      padding: 'clamp(32px,5vw,64px) clamp(16px,4vw,32px) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: '0 auto 32px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#blog",
    onClick: e => {
      e.preventDefault();
      go('Blog');
    },
    style: {
      fontFamily: 'var(--f-display)',
      fontWeight: 600,
      fontSize: '.9rem',
      color: 'var(--c-teal-fg)',
      textDecoration: 'none'
    }
  }, "\u2190 Voltar ao blog"), /*#__PURE__*/React.createElement(AEyebrow, {
    style: {
      marginTop: 24
    }
  }, '// ' + post.date), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--f-display)',
      fontWeight: 800,
      fontSize: 'clamp(1.9rem,4.5vw,3rem)',
      lineHeight: 1.1,
      letterSpacing: '-.04em',
      margin: '0 0 16px',
      color: 'var(--text)',
      textWrap: 'pretty'
    }
  }, post.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'clamp(1rem,1.6vw,1.2rem)',
      lineHeight: 1.65,
      color: 'var(--text-2)',
      margin: 0
    }
  }, post.desc)), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 880,
      margin: '0 auto 40px',
      borderRadius: 'var(--r-lg)',
      overflow: 'hidden',
      border: '1px solid var(--g-border)',
      boxShadow: 'var(--g-shadow-card)',
      aspectRatio: '16/9'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: post.img,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement(Prose, null, /*#__PURE__*/React.createElement("p", null, "Para uma ", /*#__PURE__*/React.createElement("strong", null, "pequena empresa"), ", o site \xE9 muitas vezes o primeiro contato do cliente com a marca. Ele trabalha 24 horas por dia, responde d\xFAvidas e transforma visitas em pedidos."), /*#__PURE__*/React.createElement("h2", null, "O que muda na pr\xE1tica"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Presen\xE7a confi\xE1vel no Google e nas redes"), /*#__PURE__*/React.createElement("li", null, "Capta\xE7\xE3o de contatos com formul\xE1rios simples"), /*#__PURE__*/React.createElement("li", null, "Automa\xE7\xE3o de atendimento com ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "agentes de IA"))), /*#__PURE__*/React.createElement("blockquote", null, /*#__PURE__*/React.createElement("p", null, "Quem n\xE3o \xE9 encontrado online, simplesmente n\xE3o \xE9 considerado.")), /*#__PURE__*/React.createElement("h3", null, "Por onde come\xE7ar"), /*#__PURE__*/React.createElement("p", null, "Comece pequeno: uma p\xE1gina com proposta clara, prova social e um bot\xE3o de contato. Ferramentas visuais e ", /*#__PURE__*/React.createElement("code", null, "no-code"), " resolvem o resto."), /*#__PURE__*/React.createElement("pre", null, /*#__PURE__*/React.createElement("code", null, 'prompt: "Crie uma landing page para uma padaria\nde bairro com botão de WhatsApp"'))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1200,
      margin: '80px auto 0'
    }
  }, /*#__PURE__*/React.createElement(ASectionHeader, {
    title: "Leia tamb\xE9m",
    href: "#blog",
    onLinkClick: e => {
      e.preventDefault();
      go('Blog');
    }
  }), /*#__PURE__*/React.createElement(window.PostGrid, {
    posts: window.IBE_POSTS.filter(p => p.slug !== post.slug).slice(0, 3),
    onOpen: openPost
  })));
}
Object.assign(window, {
  ArticleScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/blog/ArticleScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/blog/BlogScreen.jsx
try { (() => {
const {
  Eyebrow
} = window.IbeIABlogDesignSystem_8b7900;
// Not captured from source — reuses the home grid pattern for the /blog/ index.
function BlogScreen({
  openPost
}) {
  const posts = [...window.IBE_POSTS, ...window.IBE_POSTS.slice(0, 3).map(p => ({
    ...p,
    slug: p.slug + '-b'
  }))];
  return /*#__PURE__*/React.createElement("main", {
    style: {
      padding: 'clamp(32px,5vw,64px) clamp(16px,4vw,32px) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "// blog"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--f-display)',
      fontWeight: 800,
      fontSize: 'clamp(2rem,5vw,3.5rem)',
      lineHeight: 1.05,
      letterSpacing: '-.04em',
      margin: '0 0 40px',
      color: 'var(--text)'
    }
  }, "Todos os posts"), /*#__PURE__*/React.createElement(window.PostGrid, {
    posts: posts,
    onOpen: openPost
  })));
}
Object.assign(window, {
  BlogScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/blog/BlogScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/blog/HomeScreen.jsx
try { (() => {
const {
  Hero,
  Button,
  SectionHeader,
  PostCard
} = window.IbeIABlogDesignSystem_8b7900;
function PostGrid({
  posts,
  onOpen
}) {
  const w = window.innerWidth;
  const cols = w >= 1024 ? 3 : w >= 640 ? 2 : 1;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(' + cols + ', minmax(0,1fr))',
      gap: 24
    }
  }, posts.map(p => /*#__PURE__*/React.createElement(PostCard, {
    key: p.slug,
    image: p.img,
    date: p.date,
    title: p.title,
    description: p.desc,
    href: '#' + p.slug,
    onClick: e => {
      e.preventDefault();
      onOpen(p);
    }
  })));
}
function HomeScreen({
  go,
  openPost
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, {
    title: "O seu portal para",
    titleEm: "criar com IA",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      href: "#blog",
      onClick: e => {
        e.preventDefault();
        go('Blog');
      }
    }, "Ler o Blog"), /*#__PURE__*/React.createElement(Button, {
      href: "https://ibe.ia.br/",
      target: "_blank"
    }, "Conhe\xE7a a ibe.IA \u2192"))
  }, "O melhor lugar para voc\xEA aprender sobre ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text)'
    }
  }, "AI Coding"), ", ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text)'
    }
  }, "Vibe Coding"), ", ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text)'
    }
  }, "No Code"), ", cria\xE7\xE3o de aplicativos e ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text)'
    }
  }, "Agentes IA"), " com ferramentas visuais."), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '64px clamp(16px,4vw,32px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "\xDAltimos posts",
    href: "#blog",
    onLinkClick: e => {
      e.preventDefault();
      go('Blog');
    }
  }), /*#__PURE__*/React.createElement(PostGrid, {
    posts: window.IBE_POSTS,
    onOpen: openPost
  }))));
}
Object.assign(window, {
  HomeScreen,
  PostGrid
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/blog/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/blog/data.js
try { (() => {
window.IBE_POSTS = [{
  slug: 'openai-lanca-chatgpt-wallet',
  date: '13 de nov. de 2026',
  img: '../../assets/images/post-1.webp',
  title: 'OpenAI lança ChatGPT Wallet: o que muda quando agentes de IA podem pagar por você',
  desc: 'A carteira começa nos EUA e exige aprovação por compra. Entenda os limites, os dados envolvidos e o impacto para quem vende ou cria agentes.'
}, {
  slug: 'united-restringe-agentes-de-ia',
  date: '12 de nov. de 2026',
  img: '../../assets/images/post-2.webp',
  title: 'United restringe agentes de IA: o que muda para quem automatiza compras',
  desc: 'A companhia aérea restringiu assistentes que agem pelo passageiro. Entenda o limite entre pesquisar uma viagem e executar uma compra com IA.'
}, {
  slug: 'anthropic-atinge-limiar-de-seguranca',
  date: '11 de nov. de 2026',
  img: '../../assets/images/post-3.webp',
  title: 'Anthropic atinge limiar de segurança: o que significa a IA acelerar a própria pesquisa',
  desc: 'Anthropic declara um alerta de pesquisa acelerada por IA. Entenda o papel das projeções, os limites das evidências e o impacto para empresas.'
}, {
  slug: 'australia-propoe-regras-para-ia-de-fronteira',
  date: '10 de nov. de 2026',
  img: '../../assets/images/post-4.webp',
  title: 'Austrália propõe regras para IA de fronteira: o que muda após o caso Medicare',
  desc: 'Após o acesso indevido de um agente da OpenAI ao portal do Medicare, a Austrália propõe notificação obrigatória de incidentes e um novo regulador.'
}, {
  slug: 'anthropic-lanca-claude-fable-5-2-e-mythos-5-2',
  date: '09 de nov. de 2026',
  img: '../../assets/images/post-5.webp',
  title: 'Anthropic lança Claude Fable 5.2 e Mythos 5.2: o que muda para quem cria com IA',
  desc: 'Fable 5.2 e Mythos 5.2 compartilham o mesmo modelo, mas têm acessos diferentes. Veja o que muda nos filtros, no preço e nos agentes de código.'
}, {
  slug: 'centro-de-seguranca-de-ia-dos-eua-sob-pressao',
  date: '08 de nov. de 2026',
  img: '../../assets/images/post-6.webp',
  title: 'Centro de segurança de IA dos EUA sob pressão (quem fiscaliza os agentes?)',
  desc: 'Um pedido de reporte à Casa Branca abriu o debate sobre quem avalia os riscos da IA. Entenda o caso e o que muda quando um agente pode agir.'
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/blog/data.js", error: String((e && e.message) || e) }); }

__ds_ns.AuroraBackground = __ds_scope.AuroraBackground;

__ds_ns.LogoSymbol = __ds_scope.LogoSymbol;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.PostCard = __ds_scope.PostCard;

__ds_ns.Prose = __ds_scope.Prose;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ThemeToggle = __ds_scope.ThemeToggle;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

})();
