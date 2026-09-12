/* ============================================================================
   HALFARC — variant engine
   --------------------------------------------------------------------------
   One source of truth: build(spec, {pct, cls, uid}) -> {html, css}
   The grid card and the exported snippet come from the same function, so
   "copy code" always gives you exactly what you see.

   Everything lives in a 100 x 58 viewBox (semi-circle, centre 50,50) and is
   driven by a single custom property:  --p  (0 - 100).
   Change --p and the whole indicator follows — no JS required.
   ========================================================================== */
(function (global) {
'use strict';

/* ---------------------------------------------------------------- helpers */
const R2 = n => Math.round(n * 100) / 100;
const pol = (cx, cy, r, deg) => [R2(cx + r * Math.cos(deg * Math.PI / 180)), R2(cy + r * Math.sin(deg * Math.PI / 180))];
const arcD = (cx, cy, r, a0, a1) => {
  const s = pol(cx, cy, r, a0), e = pol(cx, cy, r, a1);
  const big = Math.abs(a1 - a0) > 180 ? 1 : 0;
  return `M${s[0]} ${s[1]}A${r} ${r} 0 ${big} 1 ${e[0]} ${e[1]}`;
};
const HALF = (cx, cy, r) => arcD(cx, cy, r, 180, 360);
const ang = p => -90 + 1.8 * p;
const num = (v, d = 0, suf = '%') => (d ? Number(v).toFixed(d) : String(Math.round(v))) + suf;
const range = n => Array.from({ length: n }, (_, i) => i);
const css = (sel, obj) => {
  const body = Object.keys(obj).filter(k => obj[k] !== undefined && obj[k] !== null && obj[k] !== '')
    .map(k => `${k}:${obj[k]}`).join(';');
  return body ? `${sel}{${body}}` : '';
};
const join = a => a.filter(Boolean).join('\n');
const lag = (i, n, step, dir) => {
  const t = dir === 'out' ? (n - 1 - i) : dir === 'center' ? Math.abs(i - (n - 1) / 2) : i;
  return R2(t * (step || 0.02));
};

/* dash-offset reveal driven by --p (paths all carry pathLength="100") */
const OFF = 'calc((100 - var(--p)) * 1px)';
const OFFk = k => `max(0px, calc((100 - (var(--p) - ${k})) * 1px))`;
const ROT = 'calc(-90deg + var(--p) * 1.8deg)';   /* elements drawn pointing UP (needles) */
const ROTH = 'calc(var(--p) * 1.8deg)';            /* elements drawn at the left end (heads) */
/* hard-ish switch for discrete elements: off below --thr, on above */
const SW = (off, on, k) => `clamp(${off}, calc((var(--p) - var(--thr)) * ${k || 6}), ${on})`;

const KF = {
  draw:   '@keyframes scDraw{from{stroke-dashoffset:100px}to{stroke-dashoffset:var(--o)}}',
  fade:   '@keyframes scFade{from{opacity:0}to{opacity:var(--fo,1)}}',
  orbit:  '@keyframes scOrbit{from{transform:rotate(0deg)}to{transform:rotate(var(--rot))}}',
  wobble: '@keyframes scWobble{0%{transform:rotate(-90deg)}100%{transform:rotate(var(--rot))}}',
  sweep:  '@keyframes scSweep{0%,100%{transform:rotate(-90deg)}50%{transform:rotate(90deg)}}',
  pulse:  '@keyframes scPulse{0%,100%{opacity:.42}50%{opacity:1}}',
  blink:  '@keyframes scBlink{0%,100%{opacity:1}50%{opacity:.16}}',
  bob:    '@keyframes scBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-1.4px)}}',
  march:  '@keyframes scMarch{to{stroke-dashoffset:var(--mstep)}}',
  wave:   '@keyframes scWave{to{transform:translateX(-40px)}}',
  wave2:  '@keyframes scWave2{to{transform:translateX(-28px)}}',
  rise:   '@keyframes scRise{from{transform:translateY(var(--rise0))}to{transform:translateY(var(--rise))}}',
  float:  '@keyframes scFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-2.4px)}}',
  flicker:'@keyframes scFlicker{0%,100%{opacity:1}42%{opacity:1}44%{opacity:.3}46%{opacity:1}78%{opacity:1}80%{opacity:.5}82%{opacity:1}}',
  pop:    '@keyframes scPop{0%{transform:scale(.2);opacity:0}62%{transform:scale(1.22);opacity:1}100%{transform:scale(1);opacity:1}}',
  breathe:'@keyframes scBreathe{0%,100%{transform:scale(1);opacity:.82}50%{transform:scale(1.05);opacity:1}}',
  slide:  '@keyframes scSlide{from{transform:translateY(5px);opacity:0}to{transform:translateY(0);opacity:1}}',
  growX:  '@keyframes scGrowX{from{transform:scaleX(.02)}to{transform:scaleX(1)}}',
  growY:  '@keyframes scGrowY{from{transform:scaleY(.02)}to{transform:scaleY(1)}}',
  trail:  '@keyframes scTrail{0%{opacity:0}25%{opacity:.9}100%{opacity:0}}',
  spin:   '@keyframes scSpin{to{transform:rotate(360deg)}}',
  glitch: '@keyframes scGlitch{0%,100%{transform:translate(0,0)}20%{transform:translate(-.5px,.35px)}40%{transform:translate(.45px,-.3px)}60%{transform:translate(-.35px,-.35px)}80%{transform:translate(.35px,.3px)}}',
  shimmer:'@keyframes scShimmer{0%{transform:translateX(-120px)}100%{transform:translateX(120px)}}'
};

function svg(body) {
  return `<svg viewBox="0 0 100 58" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="semi-circle progress indicator">${body}</svg>`;
}
function root(c, inner) {
  return `<div class="sc-ind ${c.cls}" style="--p:${c.pct}">${inner}</div>`;
}
const box = o => ({ x: o.x ?? 50, y: o.y ?? 50 });
/* a group pinned to the arc's left end, rotated into place by --p */
function headG(x, y, cls, inner, extra) {
  return `<g class="${cls}" style="--rot:${ROTH};transform-box:view-box;transform-origin:${x}px ${y}px${extra ? ';' + extra : ''}">${inner}</g>`;
}
const valTxt = (o, p, x, y, dvy) => o.value ? `<text class="val" x="${x}" y="${y - (o.vy ?? dvy ?? 0)}" text-anchor="middle" style="font-size:${o.vs ?? 15}px">${num(p, o.dec || 0, o.suf === undefined ? '%' : o.suf)}</text>` : '';
const lblTxt = (o, x, y) => o.label ? `<text class="lbl" x="${x}" y="${y + (o.ly ?? 0)}" text-anchor="middle" style="font-size:${o.ls ?? 5}px">${String(o.label).toUpperCase()}</text>` : '';

/* ========================================================================
   1. DRAW — one continuous arc: weights, caps, textures, motion
   ====================================================================== */
function b_draw(o, c) {
  const { x, y } = box(o);
  const w = o.w ?? 3, r = o.r ?? 42, p = c.pct, cap = o.cap || 'round';
  const dur = o.dur ?? 1.5, del = o.del ?? 0, e = o.ease || 'quart', id = c.uid;
  const kf = new Set(['draw']);
  const d = HALF(x, y, r);
  const dash = o.dash || '';
  const clip = `<clipPath id="cp${id}"><rect x="0" y="0" width="100" height="${R2(y + Math.max(2, w * .5))}"/></clipPath>`;
  let extraDefs = '';
  const parts = [];
  if (o.track !== 0) parts.push(`<path class="t" d="${d}" pathLength="100" fill="none" stroke-width="${w}"${cap === 'round' && o.trackCap !== 0 ? ' stroke-linecap="round"' : ''}${o.tdash ? ` stroke-dasharray="${o.tdash}"` : ''} opacity="${o.top ?? .5}"/>`);
  if (o.rail) parts.push(`<path class="t" d="${HALF(x, y, r + o.rail)}" fill="none" stroke-width="${o.railw ?? .6}" opacity=".45"/>`);
  if (o.fx === 'glow' || o.glow) {
    extraDefs += `<filter id="bl${id}" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="${o.blur ?? 2.4}"/></filter>`;
    kf.add('fade');
    parts.push(`<path class="g" d="${d}" pathLength="100" fill="none" stroke-width="${R2(w + 4)}" stroke-linecap="round" filter="url(#bl${id})"/>`);
  }
  if (o.fx === 'shimmer') {
    extraDefs += `<linearGradient id="sg${id}" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".5" stop-color="#fff" stop-opacity=".6"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>`;
    kf.add('shimmer');
    parts.push(`<g clip-path="url(#cp${id})"><path class="v" d="${d}" pathLength="100" fill="none" stroke-width="${w}"${cap === 'round' ? ' stroke-linecap="round"' : ''}${dash ? ` stroke-dasharray="${dash}"` : ''}/><g class="sh"><rect x="-34" y="0" width="30" height="58" fill="url(#sg${id})"/></g></g>`);
  } else {
    parts.push(`<g clip-path="url(#cp${id})"><path class="v" d="${d}" pathLength="100" fill="none" stroke-width="${w}"${cap === 'round' ? ' stroke-linecap="round"' : ''}${dash ? ` stroke-dasharray="${dash}"` : ''}/></g>`);
  }
  if (o.tip || o.bubble) {
    kf.add('orbit'); kf.add('fade');
    const inner = o.bubble
      ? `<g class="bub"><circle cx="${x - r}" cy="${y - (o.bubbleOut ?? 8)}" r="${o.bubbleR ?? 6.2}" fill="var(--ink)"/><text x="${x - r}" y="${R2(y - (o.bubbleOut ?? 8) + 1.9)}" text-anchor="middle" font-size="${o.bfs ?? 5}" fill="var(--sc-bgf)" font-family="ui-monospace,monospace">${num(p, o.dec || 0, '')}</text></g>`
      : `<circle class="tip" cx="${x - r}" cy="${y}" r="${o.tip}"/>`;
    parts.push(headG(x, y, 'head', inner));
  }
  parts.push(valTxt(o, p, x, y), lblTxt(o, x, y));

  let marchKf = '';
  if (o.fx === 'march' && dash) {
    const sum = dash.split(' ').map(Number).reduce((a, b) => a + b, 0);
    kf.add('march');
    marchKf = `@keyframes scMarch${id}{to{stroke-dashoffset:${R2(-sum)}px}}`;
  }
  const body = `<defs>${clip}${extraDefs}</defs>` + parts.join('');
  const c2 = join([
    css(`.${c.cls}`, { '--o': OFF, '--dur': dur + 's', '--del': del + 's', '--rot': ROT, transition: 'transform .5s var(--e-out)' }),
    css(`.${c.cls} .v`, { stroke: 'var(--ink)', 'stroke-dashoffset': 'var(--o)', animation: `scDraw var(--dur) var(--e-${e}) var(--del) backwards`, transition: 'stroke-dashoffset .7s var(--e-out)' }),
    css(`.${c.cls} .g`, { stroke: 'var(--ink)', opacity: o.glowOp ?? .22, 'stroke-dashoffset': 'var(--o)', animation: `scDraw var(--dur) var(--e-${e}) var(--del) backwards` , transition: 'stroke-dashoffset .7s var(--e-out)'}),
    css(`.${c.cls} .sh`, { animation: `scShimmer ${o.shDur ?? 2.8}s linear ${R2(dur * .6)}s infinite` }),
    css(`.${c.cls} .tip`, { fill: 'var(--ink)', animation: `scFade .5s ease ${R2(dur * .75 + del)}s backwards` }),
    css(`.${c.cls} .bub`, { animation: `scFade .5s ease ${R2(dur * .8 + del)}s backwards` }),
    css(`.${c.cls} .val,.${c.cls} .lbl`, { animation: (kf.add('fade'), 'scFade .8s ease .35s backwards') }),
    o.fx === 'march' && dash ? css(`.${c.cls} .v`, { animation: `scDraw var(--dur) var(--e-${e}) var(--del) backwards, scMarch${id} ${o.marchDur ?? 2.4}s linear ${R2(dur + del)}s infinite` }) : '',
    o.fx === 'pulse' ? (kf.add('pulse'), css(`.${c.cls} .v`, { animation: `scDraw var(--dur) var(--e-${e}) var(--del) backwards, scPulse ${o.pulseDur ?? 2.2}s ease-in-out ${R2(dur * .8)}s infinite` })) : '',
    o.fx === 'flicker' ? (kf.add('flicker'), css(`.${c.cls} .v`, { animation: `scDraw var(--dur) var(--e-${e}) var(--del) backwards, scFlicker ${o.flDur ?? 5}s steps(1,end) ${R2(dur + del)}s infinite` })) : '',
    o.fx === 'breathe' ? (kf.add('breathe'), css(`.${c.cls}`, { 'transform-origin': '50% 92%', animation: `scBreathe ${o.brDur ?? 3.6}s ease-in-out infinite` })) : '',
    o.fx === 'float' ? (kf.add('float'), css(`.${c.cls}`, { animation: `scFloat ${o.flDur ?? 3.2}s ease-in-out infinite` })) : '',
    o.fx === 'glitch' ? (kf.add('glitch'), css(`.${c.cls} .v`, { animation: `scDraw var(--dur) var(--e-${e}) var(--del) backwards, scGlitch .45s steps(2,end) ${R2(dur)}s 3` })) : '',
    o.fx === 'blink' ? (kf.add('blink'), css(`.${c.cls} .v`, { animation: `scDraw var(--dur) var(--e-${e}) var(--del) backwards, scBlink ${o.blDur ?? 1.6}s steps(1,end) ${R2(dur)}s infinite` })) : '',
    css(`.${c.cls}:hover`, o.hover === 0 ? {} : { transform: o.hoverScale ? `scale(${o.hoverScale})` : 'scale(1.03)' }),
    css(`.${c.cls}:hover .v`, o.hoverW ? { 'stroke-width': o.hoverW } : {}),
    css(`.${c.cls}:hover .g`, o.fx === 'glow' || o.glow ? { opacity: o.hoverGlow ?? .42 } : {}),
    marchKf,
    Array.from(kf).map(k => KF[k]).join('\n')
  ]);
  return { html: root(c, svg(body)), css: c2 };
}

/* ========================================================================
   2. SEG — segmented blocks
   ====================================================================== */
function b_seg(o, c) {
  const { x, y } = box(o);
  const n = o.n ?? 16, r = o.r ?? 42, w = o.w ?? 7, g = o.g ?? 1.2, p = c.pct;
  const litF = o.lit ?? .55, cap = o.cap || 'butt', kf = new Set(['fade']);
  const step = 180 / n, span = Math.max(.6, step - g);
  const off = o.offOp ?? .13;
  const segs = range(n).map(i => {
    const a0 = 180 + i * step + g / 2;
    const thr = R2((i + litF) / n * 100);
    const sw = o.var ? R2(w * (.45 + .55 * Math.abs(Math.sin(i * (o.varF ?? 1.4))))) : w;
    return `<path class="s" d="${arcD(x, y, r, a0, a0 + span)}" pathLength="100" fill="none" stroke-width="${sw}"${cap === 'round' ? ' stroke-linecap="round"' : ''} style="--thr:${thr};--d:${lag(i, n, o.step ?? .022, o.dir)}s;--fo:${(i + litF) / n * 100 <= p ? 1 : off}"/>`;
  }).join('');
  const body = (o.track === 0 ? '' : `<path class="t" d="${HALF(x, y, r)}" fill="none" stroke-width="${w}" opacity="${o.top ?? .28}"${cap === 'round' ? ' stroke-linecap="round"' : ''}/>` +
    (o.top2 ? `<path class="t" d="${HALF(x, y, r)}" pathLength="100" fill="none" stroke-width="${w}" stroke-dasharray="${R2(span / step * 100)} ${R2(g / step * 100)}" opacity="${o.top2}"/>` : '')) +
    `<g class="segs">${segs}</g>` + valTxt(o, p, x, y) + lblTxt(o, x, y);
  const c2 = join([
    css(`.${c.cls}`, { '--off': off, transition: 'transform .45s var(--e-out)' }),
    css(`.${c.cls} .s`, { stroke: 'var(--ink)', opacity: SW(off, o.onOp ?? 1), transition: 'opacity .45s var(--e-out) var(--d), stroke-width .35s var(--e-out)', animation: `scFade ${o.fdur ?? .5}s ease var(--d) backwards` }),
    css(`.${c.cls} .val,.${c.cls} .lbl`, { animation: 'scFade .7s ease .3s backwards' }),
    o.fx === 'wave' ? (kf.add('bob'), css(`.${c.cls} .s`, { 'transform-box': 'view-box', 'transform-origin': `${x}px ${y}px`, animation: `scFade .4s ease var(--d) backwards, scBob ${o.waveDur ?? 1.8}s ease-in-out calc(var(--d) + .6s) infinite` })) : '',
    o.fx === 'blink' ? (kf.add('blink'), css(`.${c.cls} .s`, { animation: `scFade .4s ease var(--d) backwards, scBlink ${o.blDur ?? 2.2}s steps(1,end) calc(var(--thr) * .02s + 1s) infinite` })) : '',
    o.fx === 'pulse' ? (kf.add('pulse'), css(`.${c.cls} .s`, { animation: `scFade .4s ease var(--d) backwards, scPulse ${o.puDur ?? 2.4}s ease-in-out calc(var(--thr) * .02s) infinite` })) : '',
    o.fx === 'glow' ? css(`.${c.cls} .s`, { filter: `drop-shadow(0 0 ${o.glowR ?? 2}px var(--mid))` }) : '',
    o.fx === 'grow' ? (kf.add('growY'), css(`.${c.cls} .s`, { 'transform-box': 'view-box', 'transform-origin': `${x}px ${y}px`, animation: `scGrowY .5s var(--e-out) var(--d) backwards, scFade .4s ease var(--d) backwards` })) : '',
    css(`.${c.cls}:hover`, o.hover === 0 ? {} : { transform: o.hoverScale ? `scale(${o.hoverScale})` : 'scale(1.035)' }),
    css(`.${c.cls}:hover .s`, o.hoverW ? { 'stroke-width': o.hoverW } : {}),
    Array.from(kf).map(k => KF[k]).join('\n')
  ]);
  return { html: root(c, svg(body)), css: c2 };
}

/* ========================================================================
   3. DOTS — dot rail
   ====================================================================== */
function b_dots(o, c) {
  const { x, y } = box(o);
  const n = o.n ?? 20, r = o.r ?? 42, s = o.size ?? 1.6, p = c.pct, kf = new Set(['fade']);
  const litF = o.lit ?? .6, off = o.offOp ?? .13;
  let dots = range(n).map(i => {
    const q = pol(x, y, r, 180 + (i + .5) * (180 / n));
    const thr = R2((i + litF) / n * 100);
    const rr = o.taper ? R2(s * (.4 + .6 * (i / (n - 1)))) : s;
    return `<circle class="d" cx="${q[0]}" cy="${q[1]}" r="${rr}" style="--thr:${thr};--d:${lag(i, n, o.step ?? .02, o.dir)}s;--fo:${thr <= p ? 1 : off}"/>`;
  }).join('');
  if (o.double) dots += range(n).map(i => {
    const q = pol(x, y, r - (o.doubleGap ?? 5.5), 180 + (i + .5) * (180 / n));
    const thr = R2((i + litF) / n * 100 + (o.doubleShift ?? 16));
    return `<circle class="d d2" cx="${q[0]}" cy="${q[1]}" r="${R2(s * .55)}" style="--thr:${thr};--d:${lag(i, n, .02, 'out')}s;--fo:${thr <= p ? .5 : .1}"/>`;
  }).join('');
  if (o.tip) { kf.add('orbit'); dots += headG(x, y, 'head', `<circle class="tip" cx="${x - r}" cy="${y}" r="${R2(s * 1.8)}"/>`); }
  const body = (o.ring ? `<path class="t" d="${HALF(x, y, r)}" fill="none" stroke-width="${o.ringW ?? .5}" opacity=".4"/>` : '') +
    `<g class="dots">${dots}</g>` + valTxt(o, p, x, y) + lblTxt(o, x, y);
  const c2 = join([
    css(`.${c.cls}`, { transition: 'transform .45s var(--e-out)' }),
    css(`.${c.cls} .d`, { fill: 'var(--ink)', opacity: SW(off, 1, o.k ?? 6), transition: 'opacity .45s var(--e-out) var(--d)', animation: `scFade .45s ease var(--d) backwards` }),
    css(`.${c.cls} .d2`, { opacity: SW(.1, o.d2on ?? .55, 6) }),
    css(`.${c.cls} .tip`, { fill: 'none', stroke: 'var(--ink)', 'stroke-width': .6, opacity: .75, animation: (kf.add('orbit'), 'scFade .5s ease .6s backwards') }),
    css(`.${c.cls} .val,.${c.cls} .lbl`, { animation: 'scFade .7s ease .3s backwards' }),
    o.fx === 'blink' ? (kf.add('blink'), css(`.${c.cls} .d`, { animation: `scFade .45s ease var(--d) backwards, scBlink ${o.blDur ?? 1.9}s steps(1,end) calc(var(--thr) * .03s) infinite` })) : '',
    o.fx === 'pulse' ? (kf.add('pulse'), css(`.${c.cls} .d`, { animation: `scFade .45s ease var(--d) backwards, scPulse ${o.puDur ?? 1.7}s ease-in-out calc(var(--thr) * .025s) infinite` })) : '',
    o.fx === 'trail' ? (kf.add('trail'), css(`.${c.cls} .d`, { animation: `scFade .45s ease var(--d) backwards, scTrail ${o.trDur ?? 2.6}s linear calc(var(--thr) * .026s) infinite` })) : '',
    o.fx === 'glow' ? css(`.${c.cls} .d`, { filter: `drop-shadow(0 0 ${o.glowR ?? 1.8}px var(--mid))` }) : '',
    o.fx === 'pop' ? (kf.add('pop'), css(`.${c.cls} .d`, { 'transform-box': 'fill-box', 'transform-origin': 'center', animation: `scPop .5s var(--e-out) var(--d) backwards` })) : '',
    css(`.${c.cls}:hover`, o.hover === 0 ? {} : { transform: o.hoverScale ? `scale(${o.hoverScale})` : 'scale(1.04)' }),
    Array.from(kf).map(k => KF[k]).join('\n')
  ]);
  return { html: root(c, svg(body)), css: c2 };
}

/* ========================================================================
   4. BARS — radial comb / teeth
   ====================================================================== */
function b_bars(o, c) {
  const { x, y } = box(o);
  const n = o.n ?? 28, len = o.len ?? 8, w = o.w ?? 1.6, r = o.r ?? 42, p = c.pct;
  const kf = new Set(['fade']), inward = o.inward ? -1 : 1, off = o.offOp ?? .14;
  const r0 = inward ? r - len : r, r1 = inward ? r : r + len;
  const bars = range(n).map(i => {
    const a = 180 + (i + .5) * (180 / n);
    const A = pol(x, y, r0, a), B = pol(x, y, r1, a);
    const thr = R2((i + .55) / n * 100);
    return `<line class="b" x1="${A[0]}" y1="${A[1]}" x2="${B[0]}" y2="${B[1]}" stroke-width="${w}" style="--thr:${thr};--d:${lag(i, n, o.step ?? .016, o.dir)}s;--fo:${thr <= p ? .95 : off}"/>`;
  }).join('');
  const body = (o.track === 0 ? '' : `<path class="t" d="${HALF(x, y, inward ? r : r + len)}" fill="none" stroke-width="${o.tw ?? .6}" opacity=".45"/>`) +
    `<g class="bars">${bars}</g>` + valTxt(o, p, x, y) + lblTxt(o, x, y);
  const c2 = join([
    css(`.${c.cls}`, { transition: 'transform .45s var(--e-out)' }),
    css(`.${c.cls} .b`, { stroke: 'var(--ink)', 'stroke-linecap': o.cap || 'butt', opacity: SW(off, o.onOp ?? .95, o.k ?? 8), transition: 'opacity .4s var(--e-out) var(--d), stroke-width .3s var(--e-out)', animation: `scFade .4s ease var(--d) backwards` }),
    css(`.${c.cls} .val,.${c.cls} .lbl`, { animation: 'scFade .7s ease .3s backwards' }),
    o.fx === 'blink' ? (kf.add('blink'), css(`.${c.cls} .b`, { animation: `scFade .4s ease var(--d) backwards, scBlink ${o.blDur ?? 2.2}s steps(1,end) calc(var(--thr) * .02s) infinite` })) : '',
    o.fx === 'pulse' ? (kf.add('pulse'), css(`.${c.cls} .b`, { animation: `scFade .4s ease var(--d) backwards, scPulse ${o.puDur ?? 1.9}s ease-in-out calc(var(--thr) * .022s) infinite` })) : '',
    o.fx === 'glow' ? css(`.${c.cls} .b`, { filter: `drop-shadow(0 0 ${o.glowR ?? 1.6}px var(--mid))` }) : '',
    o.fx === 'grow' ? (kf.add('growY'), css(`.${c.cls} .b`, { 'transform-box': 'view-box', 'transform-origin': `${x}px ${y}px`, animation: `scGrowY .55s var(--e-out) var(--d) backwards` })) : '',
    css(`.${c.cls}:hover`, o.hover === 0 ? {} : { transform: o.hoverScale ? `scale(${o.hoverScale})` : 'scale(1.03)' }),
    css(`.${c.cls}:hover .b`, o.hoverW ? { 'stroke-width': o.hoverW } : {}),
    Array.from(kf).map(k => KF[k]).join('\n')
  ]);
  return { html: root(c, svg(body)), css: c2 };
}

/* ========================================================================
   5. NEEDLE — pointer dials
   ====================================================================== */
function b_needle(o, c) {
  const { x, y } = box(o);
  const r = o.r ?? 42, p = c.pct, kf = new Set(['fade']), dur = o.dur ?? 1.6, e = o.ease || 'expo';
  const style = o.style || 'needle';
  let needle = '';
  if (style === 'needle') needle = `<path d="M${x} ${y - 2.4}L${x} ${y - (r - (o.short ?? 6))}" stroke-width="${o.nw ?? 1.6}" stroke-linecap="round" fill="none"/>`;
  if (style === 'blade')  needle = `<path d="M${x - 3.2} ${y}L${x} ${y - (r - 4)}L${x + 3.2} ${y}Z"/>`;
  if (style === 'hair')   needle = `<path d="M${x} ${y}L${x} ${y - (r + 3)}" stroke-width=".7" fill="none"/><circle cx="${x}" cy="${y - (r + 3)}" r="1.1"/>`;
  if (style === 'dot')    needle = `<circle cx="${x}" cy="${y - (r - 3)}" r="${o.dr ?? 2.6}"/><path d="M${x} ${y}L${x} ${y - (r - 8)}" stroke-width=".8" opacity=".45" fill="none"/>`;
  if (style === 'fork')   needle = `<path d="M${x - 2.8} ${y - (r - 6)}L${x} ${y - 3}L${x + 2.8} ${y - (r - 6)}" fill="none" stroke-width="1.4" stroke-linecap="round"/>`;
  if (style === 'arrow')  needle = `<path d="M${x} ${y - (r - 1)}L${x - 3} ${y - (r - 8)}L${x + 3} ${y - (r - 8)}Z"/><path d="M${x} ${y}L${x} ${y - (r - 7)}" stroke-width="1" fill="none"/>`;
  if (style === 'bar')    needle = `<rect x="${x - 1.4}" y="${y - (r - 2)}" width="2.8" height="${r - 6}" rx="1.4"/>`;
  const tn = o.tn ?? 21;
  const ticks = o.ticks === 0 ? '' : range(tn).map(i => {
    const a = 180 + i * (180 / (tn - 1));
    const mj = o.major ? i % o.major === 0 : false;
    const A = pol(x, y, r + 1.5, a), B = pol(x, y, r + (mj ? 5 : 3), a);
    return `<line class="tk${mj ? ' mj' : ''}" x1="${A[0]}" y1="${A[1]}" x2="${B[0]}" y2="${B[1]}" stroke-width="${mj ? .9 : .5}"/>`;
  }).join('');
  const body = (o.track === 0 ? '' : `<path class="t" d="${HALF(x, y, r)}" fill="none" stroke-width="${o.tw ?? .8}" opacity=".5"${o.tdash ? ` stroke-dasharray="${o.tdash}"` : ''}/>`) +
    ticks +
    (o.arc ? `<path class="v" d="${HALF(x, y, r - (o.arcOff ?? 5))}" pathLength="100" fill="none" stroke-width="${o.aw ?? 2.4}" stroke-linecap="round"/>` : '') +
    `<g class="ndl">${needle}</g>` +
    (o.hub === 0 ? '' : `<circle class="hub" cx="${x}" cy="${y}" r="${o.hubR ?? 2.6}"/>`) +
    valTxt(o, p, x, y) + lblTxt(o, x, y);
  const anim = o.mode === 'sweep' ? (kf.add('sweep'), `scSweep ${o.swDur ?? 4.6}s var(--e-inout) infinite`) : (kf.add('wobble'), `scWobble ${dur}s var(--e-${e}) ${o.del ?? .12}s backwards`);
  const c2 = join([
    css(`.${c.cls}`, { '--rot': ROT, transition: 'transform .45s var(--e-out)' }),
    css(`.${c.cls} .ndl`, { fill: 'var(--ink)', stroke: 'var(--ink)', 'transform-box': 'view-box', 'transform-origin': `${x}px ${y}px`, transform: 'rotate(var(--rot))', transition: 'transform .85s var(--e-out)', animation: anim }),
    css(`.${c.cls} .tk`, { stroke: 'var(--ink)', opacity: .2, transition: 'opacity .3s' }),
    css(`.${c.cls} .tk.mj`, { opacity: .5 }),
    css(`.${c.cls} .hub`, { fill: 'var(--sc-bg)', stroke: 'var(--ink)', 'stroke-width': 1.2 }),
    css(`.${c.cls} .v`, { stroke: 'var(--ink)', opacity: .5, 'stroke-dashoffset': OFF, animation: (kf.add('draw'), `scDraw ${dur}s var(--e-${e}) backwards`), transition: 'stroke-dashoffset .85s var(--e-out)' }),
    css(`.${c.cls} .val,.${c.cls} .lbl`, { animation: 'scFade .7s ease .4s backwards' }),
    css(`.${c.cls}:hover .ndl`, o.hover === 0 ? {} : { transform: `rotate(calc(var(--rot) + ${o.hoverTilt ?? 2.5}deg))` }),
    css(`.${c.cls}:hover .tk`, { opacity: .42 }),
    css(`.${c.cls}:hover`, o.hoverScale ? { transform: `scale(${o.hoverScale})` } : {}),
    Array.from(kf).map(k => KF[k]).join('\n')
  ]);
  return { html: root(c, svg(body)), css: c2 };
}

/* ========================================================================
   6. RINGS — concentric half rings
   ====================================================================== */
function b_rings(o, c) {
  const { x, y } = box(o);
  const n = o.n ?? 3, r0 = o.r0 ?? 44, r1 = o.r1 ?? 22, w = o.w ?? 3, p = c.pct;
  const kf = new Set(['draw', 'fade']), dur = o.dur ?? 1.4, e = o.ease || 'quart';
  const rings = range(n).map(i => {
    const t = n === 1 ? 0 : i / (n - 1);
    const r = R2(r0 + (r1 - r0) * t);
    const drop = o.stagger ? i * (o.staggerAmt ?? 11) : (o.mixed ? i * (o.mixedAmt ?? 16) : 0);
    const ww = o.taper ? R2(w * (1 - i * .2)) : w;
    return `<path class="rg" d="${HALF(x, y, r)}" pathLength="100" fill="none" stroke-width="${ww}"${o.cap ? ' stroke-linecap="round"' : ''}${o.dash ? ` stroke-dasharray="${o.dash}"` : ''} style="--i:${i};--o:${OFFk(drop)};--dl:${R2(i * (o.step ?? .12))}s;--op:${o.echo ? R2(1 - i * .22) : 1}"/>`;
  }).join('');
  const tracks = o.track === 0 ? '' : range(n).map(i => {
    const t = n === 1 ? 0 : i / (n - 1);
    const r = R2(r0 + (r1 - r0) * t);
    return `<path class="t" d="${HALF(x, y, r)}" fill="none" stroke-width="${o.taper ? R2(w * (1 - i * .2)) : w}" opacity="${o.top ?? .28}"/>`;
  }).join('');
  const body = tracks + `<g class="rings">${rings}</g>` + valTxt(o, p, x, y) + lblTxt(o, x, y);
  const c2 = join([
    css(`.${c.cls}`, { transition: 'transform .5s var(--e-out)' }),
    css(`.${c.cls} .rg`, { stroke: 'var(--ink)', opacity: 'var(--op)', 'stroke-dashoffset': 'var(--o)', animation: `scDraw ${dur}s var(--e-${e}) var(--dl) backwards`, transition: 'stroke-dashoffset .85s var(--e-out)' }),
    css(`.${c.cls} .val,.${c.cls} .lbl`, { animation: 'scFade .7s ease .35s backwards' }),
    o.fx === 'pulse' ? (kf.add('pulse'), css(`.${c.cls} .rg`, { animation: `scDraw ${dur}s var(--e-${e}) var(--dl) backwards, scPulse ${o.puDur ?? 2.8}s ease-in-out calc(var(--dl) + ${dur}s) infinite` })) : '',
    o.fx === 'glow' ? css(`.${c.cls} .rg`, { filter: `drop-shadow(0 0 ${o.glowR ?? 2}px var(--mid))` }) : '',
    o.fx === 'breathe' ? (kf.add('breathe'), css(`.${c.cls} .rings`, { 'transform-box': 'view-box', 'transform-origin': `${x}px ${y}px`, animation: `scBreathe ${o.brDur ?? 4}s ease-in-out infinite` })) : '',
    css(`.${c.cls}:hover`, o.hover === 0 ? {} : { transform: o.hoverScale ? `scale(${o.hoverScale})` : 'scale(1.04)' }),
    css(`.${c.cls}:hover .rg`, o.hoverW ? { 'stroke-width': o.hoverW } : {}),
    Array.from(kf).map(k => KF[k]).join('\n')
  ]);
  return { html: root(c, svg(body)), css: c2 };
}

/* ========================================================================
   7. REV — masked reveal of a textured stroke (fills up)
   ====================================================================== */
function b_rev(o, c) {
  const { x, y } = box(o);
  const r = o.r ?? 42, w = o.w ?? 9, p = c.pct, id = c.uid, kf = new Set(['fade']);
  const L = R2(Math.PI * r), per = R2(L / 100);            /* real path length, px per 1% */
  const tex = o.tex || 'solid';
  let dash = '';
  if (tex === 'seg') { const N = o.n || 14, sU = 100 / N; dash = `${R2(sU * .62)} ${R2(sU * .38)}`; }
  if (tex === 'dot') { dash = `0.01 ${R2((w + (o.gapPx ?? 3)) / per)}`; }
  if (tex === 'bars') { const N = o.n || 22, sU = 100 / N; dash = `${R2(sU * .3)} ${R2(sU * .7)}`; }
  if (tex === 'comb') { const N = o.n || 44, sU = 100 / N; dash = `${R2(sU * .18)} ${R2(sU * .82)}`; }
  if (tex === 'dash') { dash = o.dashV || '4 2'; }
  const d = HALF(x, y, r);
  const body = `<defs><mask id="mk${id}" maskUnits="userSpaceOnUse">
<path class="mk" d="${d}" fill="none" stroke="#fff" stroke-width="${R2(w + 4)}" stroke-dasharray="${L} ${L}"/>
</mask>${o.soft ? `<filter id="sf${id}" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="${o.soft}"/></filter>` : ''}</defs>` +
    (o.track === 0 ? '' : `<path class="t" d="${d}" pathLength="100" fill="none" stroke-width="${w}"${dash ? ` stroke-dasharray="${dash}"` : ''} stroke-linecap="${tex === 'dot' ? 'round' : 'butt'}" opacity="${o.top ?? .26}"/>`) +
    `<g mask="url(#mk${id})"${o.soft ? ` filter="url(#sf${id})"` : ''}>
<path class="fill" d="${d}" pathLength="100" fill="none" stroke-width="${w}"${dash ? ` stroke-dasharray="${dash}"` : ''} stroke-linecap="${tex === 'dot' ? 'round' : (o.cap || 'butt')}"/>
${o.double ? `<path class="fill f2" d="${HALF(x, y, r - w - 2.5)}" pathLength="100" fill="none" stroke-width="${R2(w * .45)}"/>` : ''}
</g>` +
    (o.tip ? headG(x, y, 'head', `<circle class="tip" cx="${x - r}" cy="${y}" r="${R2(w / 2 + .5)}" fill="none" stroke="var(--ink)" stroke-width=".7" opacity=".65"/>`) : '') +
    valTxt(o, p, x, y) + lblTxt(o, x, y);
  const dur = o.dur ?? 1.6, e = o.ease || 'quart';
  if (o.tip) kf.add('orbit');
  const c2 = join([
    `@keyframes scRev${id}{from{stroke-dashoffset:${L}px}to{stroke-dashoffset:var(--o)}}`,
    css(`.${c.cls}`, { '--o': `calc(${L}px - var(--p) * ${per}px)`, transition: 'transform .45s var(--e-out)' }),
    css(`.${c.cls} .mk`, { 'stroke-dashoffset': 'var(--o)', animation: `scRev${id} ${dur}s var(--e-${e}) backwards`, transition: 'stroke-dashoffset .85s var(--e-out)' }),
    css(`.${c.cls} .fill`, { stroke: 'var(--ink)' }),
    css(`.${c.cls} .f2`, { opacity: o.f2op ?? .35 }),
    css(`.${c.cls} .val,.${c.cls} .lbl`, { animation: 'scFade .7s ease .3s backwards' }),
    o.fx === 'pulse' ? (kf.add('pulse'), css(`.${c.cls} .fill`, { animation: `scPulse ${o.puDur ?? 2.6}s ease-in-out infinite` })) : '',
    o.fx === 'flicker' ? (kf.add('flicker'), css(`.${c.cls} .fill`, { animation: `scFlicker ${o.flDur ?? 6}s steps(1,end) 1.6s infinite` })) : '',
    css(`.${c.cls}:hover`, o.hover === 0 ? {} : { transform: o.hoverScale ? `scale(${o.hoverScale})` : 'scale(1.03)' }),
    Array.from(kf).map(k => KF[k]).join('\n')
  ]);
  return { html: root(c, svg(body)), css: c2 };
}

/* ========================================================================
   8. LIQUID — wave fill inside the half disc
   ====================================================================== */
function b_liquid(o, c) {
  const { x, y } = box(o);
  const R = o.r ?? 42, p = c.pct, id = c.uid, kf = new Set(['fade', 'rise', 'wave']);
  const k = R2(R / 100);                       /* px per percent */
  const amp = o.amp ?? 2.4;
  const wavePath = (wy, a) => {
    let d = `M-70 ${wy}`;
    for (let i = 0; i < 12; i++) d += `q10 ${-a} 20 0q10 ${a} 20 0`;
    return d + 'V90H-70Z';
  };
  const half = `M${x - R} ${y}A${R} ${R} 0 0 1 ${x + R} ${y}Z`;
  const count = o.waves ?? 2;
  const waves = range(count).map(i =>
    `<path class="wv wv${i}" d="${wavePath(y, R2(amp * (1 - i * .3)))}" opacity="${i === 0 ? (o.dark ? .95 : 1) : R2(.3 - i * .08)}"/>`).join('');
  const bubbles = o.bubbles ? range(o.bn ?? 5).map(i => {
    kf.add('float');
    const bx = R2(x - R * .6 + (i * R * 1.2) / (o.bn ?? 5));
    return `<circle class="bb" cx="${bx}" cy="${R2(y - 6 - (i % 3) * 4)}" r="${R2(.5 + (i % 3) * .35)}" style="--i:${i}"/>`;
  }).join('') : '';
  const body = `<defs><clipPath id="cl${id}"><path d="${half}"/></clipPath></defs>` +
    `<g clip-path="url(#cl${id})"><g class="lvl">${waves}${bubbles}</g></g>` +
    `<path class="t" d="${half}" fill="none" stroke-width="${o.sw ?? 1.1}"/>` +
    (o.marks ? range(5).map(i => `<line class="mk2" x1="${x + R - 1.5}" y1="${R2(y - R * i / 4)}" x2="${x + R - 5.5}" y2="${R2(y - R * i / 4)}" stroke-width=".6"/>`).join('') : '') +
    (o.edge ? `<g class="lvl2"><line class="edge" x1="${x - R}" y1="${y}" x2="${x + R}" y2="${y}" stroke-width=".5" opacity=".55"/></g>` : '') +
    valTxt(o, p, x, y, 16) + lblTxt(o, x, y);
  const spd = o.speed === 'fast' ? .7 : o.speed === 'slow' ? 3.1 : 1.6;
  const c2 = join([
    css(`.${c.cls}`, { '--rise': `calc(var(--p) * ${-k}px)`, '--rise0': '0px', transition: 'transform .5s var(--e-out)' }),
    css(`.${c.cls} .lvl,.${c.cls} .lvl2`, { transform: 'translateY(var(--rise))', transition: 'transform .9s var(--e-out)', animation: `scRise ${o.dur ?? 1.6}s var(--e-${o.ease || 'quart'}) backwards` }),
    css(`.${c.cls} .wv`, { fill: 'var(--ink)' }),
    css(`.${c.cls} .wv0`, { animation: `scWave ${R2(spd * 2.6)}s linear infinite` }),
    css(`.${c.cls} .wv1`, { animation: (kf.add('wave2'), `scWave2 ${R2(spd * 3.6)}s linear infinite`) }),
    css(`.${c.cls} .wv2`, { animation: `scWave ${R2(spd * 5)}s linear infinite reverse` }),
    css(`.${c.cls} .bb`, { fill: 'var(--sc-bg)', opacity: .45, animation: `scFloat ${R2(2 + spd)}s ease-in-out calc(var(--i) * .4s) infinite` }),
    css(`.${c.cls} .mk2`, { stroke: 'var(--ink)', opacity: .35 }),
    css(`.${c.cls} .edge`, { stroke: 'var(--ink)' }),
    css(`.${c.cls} .val,.${c.cls} .lbl`, { animation: 'scFade .8s ease .4s backwards' }),
    css(`.${c.cls} .val`, { 'mix-blend-mode': 'difference' }),
    o.fx === 'breathe' ? (kf.add('breathe'), css(`.${c.cls}`, { 'transform-origin': '50% 90%', animation: `scBreathe ${o.brDur ?? 5}s ease-in-out infinite` })) : '',
    css(`.${c.cls}:hover`, o.hover === 0 ? {} : { transform: 'scale(1.03)' }),
    css(`.${c.cls}:hover .wv0`, { 'animation-duration': R2(spd * 1.2) + 's' }),
    Array.from(kf).map(k => KF[k]).join('\n')
  ]);
  return { html: root(c, svg(body)), css: c2 };
}

/* ========================================================================
   9. COUNTER — typography-led  (geometry baked: rebuilds on value change)
   ====================================================================== */
function b_counter(o, c) {
  const { x, y } = box(o);
  const p = c.pct, kf = new Set(['fade']), style = o.style || 'big';
  const v = num(p, o.dec || 0, '');
  let body = '';
  if (style === 'big') {
    body = `<text class="val" x="${x}" y="${y + 1}" text-anchor="middle" style="font-size:${o.vs ?? 30}px;font-weight:${o.wt ?? 300};letter-spacing:${o.ls ?? '-.04em'}">${v}<tspan style="font-size:${R2((o.vs ?? 30) * .34)}px" dx="1">%</tspan></text>
<line class="rule" x1="${x - 21}" y1="${y + 6.5}" x2="${x + 21}" y2="${y + 6.5}" stroke-width=".7"/>
<text class="lbl" x="${x}" y="${y + 12}" text-anchor="middle" style="font-size:4.2px">${(o.label || 'complete').toUpperCase()}</text>`;
  } else if (style === 'arc') {
    kf.add('draw');
    body = `<path class="t" d="${HALF(x, y - 11, 27)}" pathLength="100" fill="none" stroke-width="${o.w ?? 2}"/>
<path class="v" d="${HALF(x, y - 11, 27)}" pathLength="100" fill="none" stroke-width="${o.w ?? 2}" stroke-linecap="round" style="--o:${R2(100 - p)}px"/>
<text class="val" x="${x}" y="${y - 13}" text-anchor="middle" style="font-size:${o.vs ?? 17}px">${v}<tspan style="font-size:5px" dx=".6">%</tspan></text>
<text class="lbl" x="${x}" y="${y - 5}" text-anchor="middle" style="font-size:4px">${(o.label || 'load').toUpperCase()}</text>`;
  } else if (style === 'frac') {
    kf.add('draw');
    body = `<text class="val" x="${x}" y="${y - 4}" text-anchor="middle" style="font-size:${o.vs ?? 21}px;font-weight:${o.wt ?? 300}">${v}<tspan style="font-size:${R2((o.vs ?? 21) * .48)}px" dx="1" opacity=".45">/100</tspan></text>
<path class="t" d="${HALF(x, y + 6, 34)}" pathLength="100" fill="none" stroke-width="1.3" stroke-dasharray="1 2.4"/>
<path class="v" d="${HALF(x, y + 6, 34)}" pathLength="100" fill="none" stroke-width="1.3" stroke-linecap="round" style="--o:${R2(100 - p)}px"/>`;
  } else if (style === 'stack') {
    body = `<text class="lbl" x="${x}" y="${y - 19}" text-anchor="middle" style="font-size:4.4px">${(o.label || 'progress').toUpperCase()}</text>
<text class="val" x="${x}" y="${y - 5}" text-anchor="middle" style="font-size:${o.vs ?? 23}px;font-weight:200">${v}%</text>
<g class="minis">${range(10).map(i => `<rect class="mi${(i + .6) * 10 <= p ? ' on' : ''}" x="${R2(x - 21 + i * 4.6)}" y="${y - 1}" width="3.4" height="3.4" rx=".7" style="--i:${i}"/>`).join('')}</g>`;
  } else if (style === 'micro') {
    kf.add('draw');
    body = `<text class="val" x="${x}" y="${y - 6}" text-anchor="middle" style="font-size:${o.vs ?? 9}px;letter-spacing:.36em">${v}</text>
<path class="t" d="${HALF(x, y + 4, 30)}" pathLength="100" fill="none" stroke-width=".7"/>
<path class="v" d="${HALF(x, y + 4, 30)}" pathLength="100" fill="none" stroke-width=".7" style="--o:${R2(100 - p)}px"/>
<text class="lbl" x="${x}" y="${y + 11}" text-anchor="middle" style="font-size:3.8px">${(o.label || 'indexed').toUpperCase()}</text>`;
  } else if (style === 'odo') {
    kf.add('draw'); kf.add('slide');
    const s3 = String(Math.round(p)).padStart(3, '0');
    body = `<g class="odo">${range(3).map(i => `<text class="dg" x="${R2(x - 13 + i * 13)}" y="${y - 3}" text-anchor="middle" style="font-size:${o.vs ?? 23}px;font-weight:${o.wt ?? 300};--i:${i}">${s3[i]}</text>`).join('')}</g>
<text class="pc" x="${x + 16}" y="${y - 3}" text-anchor="middle" style="font-size:7px" opacity=".5">%</text>
<path class="t" d="${HALF(x, y + 7, 36)}" pathLength="100" fill="none" stroke-width="1" stroke-dasharray="2 2"/>
<path class="v" d="${HALF(x, y + 7, 36)}" pathLength="100" fill="none" stroke-width="1" style="--o:${R2(100 - p)}px"/>`;
  } else { /* flip */
    kf.add('draw');
    body = `<text class="val" x="${x}" y="${y + 1}" text-anchor="middle" style="font-size:${o.vs ?? 21}px;font-weight:${o.wt ?? 300}">${v}%</text>
<text class="lbl" x="${x}" y="${y - 6}" text-anchor="middle" style="font-size:4.2px">${(o.label || 'synced').toUpperCase()}</text>
<path class="t" d="${HALF(x, y + 9, 27)}" pathLength="100" fill="none" stroke-width="1.6"/>
<path class="v" d="${HALF(x, y + 9, 27)}" pathLength="100" fill="none" stroke-width="1.6" stroke-linecap="round" style="--o:${R2(100 - p)}px"/>`;
  }
  const c2 = join([
    css(`.${c.cls}`, { transition: 'transform .45s var(--e-out)' }),
    css(`.${c.cls} .val,.${c.cls} .pc`, { animation: 'scFade .8s ease .2s backwards' }),
    css(`.${c.cls} .lbl`, { animation: 'scFade .8s ease .4s backwards', opacity: .55 }),
    css(`.${c.cls} .rule`, { stroke: 'var(--ink)', opacity: .35, animation: 'scFade .8s ease .4s backwards' }),
    css(`.${c.cls} .v`, { stroke: 'var(--ink)', 'stroke-dashoffset': 'var(--o)', animation: `scDraw ${o.dur ?? 1.4}s var(--e-${o.ease || 'quart'}) backwards` }),
    css(`.${c.cls} .mi`, { fill: 'var(--ink)', opacity: .14, transition: 'opacity .35s', animation: 'scFade .4s ease calc(var(--i) * .05s) backwards', '--fo': .14 }),
    css(`.${c.cls} .mi.on`, { opacity: 1, '--fo': 1 }),
    css(`.${c.cls} .dg`, { animation: 'scSlide .5s var(--e-out) calc(var(--i) * .08s) backwards' }),
    o.fx === 'flicker' ? (kf.add('flicker'), css(`.${c.cls} .val`, { animation: 'scFade .6s ease backwards, scFlicker 5s steps(1,end) 1.2s infinite' })) : '',
    o.fx === 'glitch' ? (kf.add('glitch'), css(`.${c.cls} .val`, { animation: 'scFade .6s ease backwards, scGlitch .55s steps(2,end) 1s 2' })) : '',
    css(`.${c.cls}:hover`, o.hover === 0 ? {} : { transform: 'scale(1.04)' }),
    css(`.${c.cls}:hover .lbl`, { opacity: 1 }),
    Array.from(kf).map(k => KF[k]).join('\n')
  ]);
  return { html: root(c, svg(body)), css: c2 };
}

/* ========================================================================
   10. SCALE — ruler / graduated scale
   ====================================================================== */
function b_scale(o, c) {
  const { x, y } = box(o);
  const r = o.r ?? 42, n = o.n ?? 40, p = c.pct, kf = new Set(['fade']);
  const inward = o.inward ? -1 : 1, off = o.offOp ?? .2;
  const major = o.major ?? Math.max(1, Math.round(n / 5));
  const tks = range(n + 1).map(i => {
    const a = 180 + i * (180 / n), mj = i % major === 0;
    const L = mj ? (o.mjLen ?? 5.5) : (o.mnLen ?? 2.8);
    const A = pol(x, y, r, a), B = pol(x, y, r + inward * L, a);
    const thr = R2(i / n * 100);
    return `<line class="tk${mj ? ' mj' : ''}" x1="${A[0]}" y1="${A[1]}" x2="${B[0]}" y2="${B[1]}" stroke-width="${mj ? (o.mjw ?? .9) : (o.mnw ?? .5)}" style="--thr:${thr};--d:${lag(i, n + 1, o.step ?? .011, o.dir)}s;--fo:${thr <= p ? 1 : off}"/>`;
  }).join('');
  const labels = o.labels ? range(5).map(i => {
    const a = 180 + i * 45, q = pol(x, y, r + inward * 11.5, a);
    return `<text class="tl" x="${q[0]}" y="${R2(q[1] + 1.5)}" text-anchor="middle" style="font-size:3.9px;--i:${i}">${i * 25}</text>`;
  }).join('') : '';
  const body = (o.arc === 0 ? '' : `<path class="t" d="${HALF(x, y, r)}" fill="none" stroke-width="${o.aw ?? .7}" opacity=".55"/>`) +
    (o.arc2 ? `<path class="v" d="${HALF(x, y, r - inward * 8)}" pathLength="100" fill="none" stroke-width="${o.aw2 ?? 2}" stroke-linecap="round"/>` : '') +
    `<g class="tks">${tks}</g>${labels}` +
    (o.tip ? headG(x, y, 'head', `<circle class="tip" cx="${x - r - inward * 7}" cy="${y}" r="1.5"/>`) : '') +
    valTxt(o, p, x, y);
  if (o.arc2) kf.add('draw');
  if (o.tip) kf.add('orbit');
  const c2 = join([
    css(`.${c.cls}`, { transition: 'transform .45s var(--e-out)' }),
    css(`.${c.cls} .tk`, { stroke: 'var(--ink)', opacity: SW(off, 1, 8), transition: 'opacity .35s var(--e-out) var(--d)', animation: `scFade .35s ease var(--d) backwards` }),
    css(`.${c.cls} .tk.mj`, { opacity: SW(R2(off + .12), 1, 8) }),
    css(`.${c.cls} .tl`, { fill: 'var(--mid)', animation: 'scFade .6s ease calc(var(--i) * .06s + .3s) backwards' }),
    css(`.${c.cls} .v`, { stroke: 'var(--ink)', opacity: .55, 'stroke-dashoffset': OFF, animation: `scDraw ${o.dur ?? 1.4}s var(--e-quart) backwards`, transition: 'stroke-dashoffset .7s var(--e-out)' }),
    css(`.${c.cls} .tip`, { fill: 'var(--ink)', animation: 'scPop .6s var(--e-out) .8s backwards' }),
    css(`.${c.cls} .val`, { animation: 'scFade .7s ease .3s backwards' }),
    o.fx === 'blink' ? (kf.add('blink'), css(`.${c.cls} .tk`, { animation: `scFade .35s ease var(--d) backwards, scBlink 2.6s steps(1,end) calc(var(--thr) * .02s) infinite` })) : '',
    css(`.${c.cls}:hover`, o.hover === 0 ? {} : { transform: 'scale(1.035)' }),
    Array.from(kf).map(k => KF[k]).join('\n')
  ]);
  return { html: root(c, svg(body)), css: c2 };
}

/* ========================================================================
   11. MARCH — perpetually travelling dashes inside a revealed mask
   ====================================================================== */
function b_march(o, c) {
  const { x, y } = box(o);
  const r = o.r ?? 42, w = o.w ?? 2.4, p = c.pct, id = c.uid, kf = new Set(['draw', 'fade', 'march']);
  const dash = o.dash || '3 3';
  const sum = dash.split(' ').map(Number).reduce((a, b) => a + b, 0);
  const spd = o.speed ?? 2.4;
  const d = HALF(x, y, r), L = R2(Math.PI * r), per = R2(L / 100);
  const r2b = r - (o.s2off ?? 5.5), L2 = R2(Math.PI * r2b), per2 = R2(L2 / 100);
  const body = `<defs>
<mask id="mk${id}" maskUnits="userSpaceOnUse"><path class="mk" d="${d}" fill="none" stroke="#fff" stroke-width="${R2(w + 3)}" stroke-dasharray="${L} ${L}"/></mask>
${o.second ? `<mask id="m2${id}" maskUnits="userSpaceOnUse"><path class="mk mk2" d="${HALF(x, y, r2b)}" fill="none" stroke="#fff" stroke-width="${R2((o.w2 ?? 1) + 3)}" stroke-dasharray="${L2} ${L2}"/></mask>` : ''}
</defs>
<path class="t" d="${d}" pathLength="100" fill="none" stroke-width="${w}" stroke-dasharray="${dash}" opacity="${o.top ?? .28}"/>
<g mask="url(#mk${id})"><path class="v" d="${d}" pathLength="100" fill="none" stroke-width="${w}" stroke-dasharray="${dash}" stroke-linecap="${o.cap || 'butt'}"/></g>
${o.second ? `<path class="t" d="${HALF(x, y, r - (o.s2off ?? 5.5))}" pathLength="100" fill="none" stroke-width="${o.w2 ?? 1}" stroke-dasharray="${o.dash2 || '1 4'}" opacity=".2"/><g mask="url(#m2${id})"><path class="v v2" d="${HALF(x, y, r - (o.s2off ?? 5.5))}" pathLength="100" fill="none" stroke-width="${o.w2 ?? 1}" stroke-dasharray="${o.dash2 || '1 4'}"/></g>` : ''}
${valTxt(o, p, x, y)}${lblTxt(o, x, y)}`;
  const c2 = join([
    `@keyframes scMarch${id}{to{stroke-dashoffset:${R2(-sum)}px}}`,
    o.second ? `@keyframes scMarch2${id}{to{stroke-dashoffset:${R2(-(o.dash2 || '1 4').split(' ').map(Number).reduce((a, b) => a + b, 0))}px}}` : '',
    `@keyframes scRev${id}{from{stroke-dashoffset:${L}px}to{stroke-dashoffset:var(--o)}}`,
    `@keyframes scRev2${id}{from{stroke-dashoffset:${L2}px}to{stroke-dashoffset:var(--o2)}}`,
    css(`.${c.cls}`, { '--o': `calc(${L}px - var(--p) * ${per}px)`, '--o2': `max(0px, calc(${L2}px - (var(--p) - ${o.s2drop ?? 14}) * ${per2}px))`, '--mstep': `${R2(-sum)}px`, transition: 'transform .45s var(--e-out)' }),
    css(`.${c.cls} .mk`, { 'stroke-dashoffset': 'var(--o)', animation: `scRev${id} ${o.dur ?? 1.3}s var(--e-quart) backwards`, transition: 'stroke-dashoffset .8s var(--e-out)' }),
    css(`.${c.cls} .mk2`, { 'stroke-dashoffset': 'var(--o2)', animation: `scRev2${id} ${o.dur ?? 1.3}s var(--e-quart) .12s backwards`, transition: 'stroke-dashoffset .8s var(--e-out)' }),
    css(`.${c.cls} .v`, { stroke: 'var(--ink)', animation: `scMarch${id} ${spd}s linear infinite` }),
    css(`.${c.cls} .v2`, { stroke: 'var(--ink)', opacity: o.v2op ?? .45, animation: `scMarch2${id} ${R2(spd * 1.6)}s linear infinite reverse` }),
    css(`.${c.cls} .val,.${c.cls} .lbl`, { animation: 'scFade .7s ease .3s backwards' }),
    css(`.${c.cls}:hover`, o.hover === 0 ? {} : { transform: 'scale(1.035)' }),
    css(`.${c.cls}:hover .v`, { 'animation-duration': R2(spd / 2.4) + 's' }),
    Array.from(kf).map(k => KF[k]).join('\n')
  ]);
  return { html: root(c, svg(body)), css: c2 };
}

/* ========================================================================
   12. KNOB — rotary dial
   ====================================================================== */
function b_knob(o, c) {
  const { x, y } = box(o);
  const R = o.r ?? 29, p = c.pct, kf = new Set(['fade', 'wobble']), tn = o.tn ?? 25;
  const ticks = range(tn).map(i => {
    const a = 180 + i * (180 / (tn - 1));
    const thr = R2(i / (tn - 1) * 100);
    const A = pol(x, y, R + 5, a), B = pol(x, y, R + 9, a);
    return `<line class="tk" x1="${A[0]}" y1="${A[1]}" x2="${B[0]}" y2="${B[1]}" stroke-width="${o.tw ?? .9}" style="--thr:${thr};--fo:${thr <= p ? .95 : .2}"/>`;
  }).join('');
  const body = ticks +
    `<circle class="knob" cx="${x}" cy="${y}" r="${R}" stroke-width="${o.sw ?? 1}"/>` +
    `<circle class="knob2" cx="${x}" cy="${y}" r="${R2(R * .76)}" stroke-width=".6"/>` +
    `<g class="ind"><line x1="${x}" y1="${R2(y - R * .76)}" x2="${x}" y2="${y - R + 2.5}" stroke-width="${o.nw ?? 2}" stroke-linecap="round"/><circle cx="${x}" cy="${R2(y - R * .5)}" r="${o.dr ?? 1.3}"/></g>` +
    `<circle class="hub" cx="${x}" cy="${y}" r="${o.hubR ?? 1.9}"/>` +
    valTxt(o, p, x, y);
  const c2 = join([
    css(`.${c.cls}`, { '--rot': ROT, transition: 'transform .5s var(--e-out)' }),
    css(`.${c.cls} .knob`, { fill: 'var(--sc-knobf)', stroke: 'var(--ink)', opacity: .85 }),
    css(`.${c.cls} .knob2`, { fill: 'none', stroke: 'var(--ink)', opacity: .16 }),
    css(`.${c.cls} .tk`, { stroke: 'var(--ink)', opacity: SW(.2, .95, 8), transition: 'opacity .35s var(--e-out) calc(var(--thr) * .004s)' }),
    css(`.${c.cls} .ind`, { fill: 'var(--ink)', stroke: 'var(--ink)', 'transform-box': 'view-box', 'transform-origin': `${x}px ${y}px`, transform: 'rotate(var(--rot))', transition: 'transform .9s var(--e-out)', animation: `scWobble ${o.dur ?? 1.7}s var(--e-expo) .1s backwards` }),
    css(`.${c.cls} .hub`, { fill: 'var(--ink)', opacity: .9 }),
    css(`.${c.cls} .val`, { animation: 'scFade .7s ease .4s backwards' }),
    o.fx === 'spin' ? (kf.add('spin'), css(`.${c.cls} .knob2`, { 'transform-box': 'view-box', 'transform-origin': `${x}px ${y}px`, 'stroke-dasharray': o.k2dash || '6 4', animation: `scSpin ${o.spDur ?? 14}s linear infinite` })) : '',
    o.fx === 'pulse' ? (kf.add('pulse'), css(`.${c.cls} .knob`, { animation: `scPulse ${o.puDur ?? 3}s ease-in-out infinite` })) : '',
    css(`.${c.cls}:hover`, o.hover === 0 ? {} : { transform: 'scale(1.045)' }),
    css(`.${c.cls}:hover .ind`, { transform: `rotate(calc(var(--rot) + ${o.hoverTilt ?? 3.5}deg))` }),
    Array.from(kf).map(k => KF[k]).join('\n')
  ]);
  return { html: root(c, svg(body)), css: c2 };
}

/* ========================================================================
   13. ORBIT — travelling head with trail
   ====================================================================== */
function b_orbit(o, c) {
  const { x, y } = box(o);
  const r = o.r ?? 42, p = c.pct, kf = new Set(['fade', 'orbit']);
  const body = `<path class="t" d="${HALF(x, y, r)}" fill="none" stroke-width="${o.tw ?? .8}" opacity="${o.top ?? .4}"${o.tdash ? ` stroke-dasharray="${o.tdash}"` : ''}/>` +
    (o.trail === 0 ? '' : `<path class="v" d="${HALF(x, y, r)}" pathLength="100" fill="none" stroke-width="${o.w ?? 2}" stroke-linecap="round"/>`) +
    (o.comet ? range(o.cn ?? 6).map(i =>
      `<g class="cm" style="--rot:calc(var(--p) * 1.8deg - ${R2(i * (o.cspread ?? 2.6))}deg);transform-box:view-box;transform-origin:${x}px ${y}px"><circle cx="${x - r}" cy="${y}" r="${R2(Math.max(.35,(o.hr ?? 2.6) * (1 - i * .14)))}" opacity="${R2(.3 - i * .045)}"/></g>`).join('') : '') +
    `<g class="orb" style="--rot:${ROTH};transform-box:view-box;transform-origin:${x}px ${y}px">
      ${o.halo ? `<circle class="hl" cx="${x - r}" cy="${y}" r="${R2((o.hr ?? 2.6) + 3.2)}"/>` : ''}
      <circle class="hd" cx="${x - r}" cy="${y}" r="${o.hr ?? 2.6}"/>
    </g>` +
    valTxt(o, p, x, y) + lblTxt(o, x, y);
  if (o.trail !== 0) kf.add('draw');
  if (o.halo) kf.add('pulse');
  const c2 = join([
    css(`.${c.cls}`, { '--rot': ROT, transition: 'transform .45s var(--e-out)' }),
    css(`.${c.cls} .v`, { stroke: 'var(--ink)', opacity: o.trailOp ?? .5, 'stroke-dashoffset': OFF, animation: `scDraw ${o.dur ?? 1.5}s var(--e-${o.ease || 'expo'}) backwards`, transition: 'stroke-dashoffset .85s var(--e-out)' }),
    css(`.${c.cls} .orb`, { transform: 'rotate(var(--rot))', transition: 'transform .9s var(--e-out)', animation: o.mode === 'sweep' ? (kf.add('sweep'), `scSweep ${o.swDur ?? 5.2}s var(--e-inout) infinite`) : `scOrbit ${o.dur ?? 1.5}s var(--e-${o.ease || 'expo'}) backwards` }),
    css(`.${c.cls} .hd`, { fill: 'var(--ink)' }),
    css(`.${c.cls} .hl`, { fill: 'none', stroke: 'var(--ink)', 'stroke-width': .5, opacity: .35, animation: 'scPulse 2.2s ease-in-out infinite' }),
    css(`.${c.cls} .cm`, { fill: 'var(--ink)', transform: 'rotate(var(--rot))', transition: 'transform .9s var(--e-out)', animation: `scOrbit ${o.dur ?? 1.5}s var(--e-expo) backwards` }),
    css(`.${c.cls} .val,.${c.cls} .lbl`, { animation: 'scFade .7s ease .4s backwards' }),
    css(`.${c.cls}:hover`, o.hover === 0 ? {} : { transform: 'scale(1.04)' }),
    css(`.${c.cls}:hover .hl`, { opacity: .6 }),
    Array.from(kf).map(k => KF[k]).join('\n')
  ]);
  return { html: root(c, svg(body)), css: c2 };
}

/* ========================================================================
   14. PULSE — layered breathing arcs
   ====================================================================== */
function b_pulse(o, c) {
  const { x, y } = box(o);
  const r = o.r ?? 42, w = o.w ?? 3, p = c.pct, kf = new Set(['draw', 'pulse', 'fade']);
  const layers = range(o.layers ?? 3).map(i =>
    `<path class="pl" d="${HALF(x, y, R2(r - i * (o.gap ?? 4.5)))}" pathLength="100" fill="none" stroke-width="${R2(w * (1 - i * .22))}" stroke-linecap="round" style="--o:${OFFk(i * (o.drop ?? 9))};--i:${i}"/>`).join('');
  const beat = o.beat ? range(13).map(i => {
    const a = 180 + i * 15, q = pol(x, y, r + 5.5, a), thr = R2(i / 12 * 100);
    return `<circle class="bt" cx="${q[0]}" cy="${q[1]}" r="${R2(.7 + (i % 3) * .3)}" style="--thr:${thr};--fo:${thr <= p ? .9 : .15}"/>`;
  }).join('') : '';
  const body = `<path class="t" d="${HALF(x, y, r)}" pathLength="100" fill="none" stroke-width="${w}" opacity="${o.top ?? .22}"/>` + layers + beat +
    valTxt(o, p, x, y) + lblTxt(o, x, y);
  const c2 = join([
    css(`.${c.cls}`, { transition: 'transform .45s var(--e-out)' }),
    css(`.${c.cls} .pl`, { stroke: 'var(--ink)', 'stroke-dashoffset': 'var(--o)', animation: `scDraw ${o.dur ?? 1.4}s var(--e-quart) calc(var(--i) * .1s) backwards, scPulse ${o.puDur ?? 2.4}s ease-in-out calc(var(--i) * .${o.phase ?? 24}s + ${o.dur ?? 1.4}s) infinite`, transition: 'stroke-dashoffset .85s var(--e-out)' }),
    css(`.${c.cls} .bt`, { fill: 'var(--ink)', opacity: SW(.15, .9, 8), transition: 'opacity .3s' }),
    css(`.${c.cls} .val,.${c.cls} .lbl`, { animation: 'scFade .7s ease .3s backwards' }),
    o.beat ? (kf.add('blink'), css(`.${c.cls} .bt`, { animation: `scBlink ${o.blDur ?? 1.8}s ease-in-out calc(var(--thr) * .02s) infinite` })) : '',
    o.fx === 'breathe' ? (kf.add('breathe'), css(`.${c.cls}`, { 'transform-origin': '50% 90%', animation: `scBreathe ${o.brDur ?? 3.8}s ease-in-out infinite` })) : '',
    css(`.${c.cls}:hover`, o.hover === 0 ? {} : { transform: 'scale(1.04)' }),
    css(`.${c.cls}:hover .pl`, { 'animation-duration': `${o.dur ?? 1.4}s, ${R2((o.puDur ?? 2.4) / 2)}s` }),
    Array.from(kf).map(k => KF[k]).join('\n')
  ]);
  return { html: root(c, svg(body)), css: c2 };
}

/* ========================================================================
   15. BLOOM — rays opening from the centre
   ====================================================================== */
function b_bloom(o, c) {
  const { x, y } = box(o);
  const n = o.n ?? 13, r = o.r ?? 40, p = c.pct, kf = new Set(['fade']), off = o.offOp ?? .14;
  const petals = range(n).map(i => {
    const a = 180 + (i + .5) * (180 / n);
    const thr = R2((i + .6) / n * 100);
    const A = pol(x, y, r - (o.inner ?? 13), a), B = pol(x, y, r, a);
    return `<line class="pt" x1="${A[0]}" y1="${A[1]}" x2="${B[0]}" y2="${B[1]}" stroke-width="${o.w ?? 2.4}" stroke-linecap="${o.cap || 'round'}" style="--thr:${thr};--d:${lag(i, n, .03, o.dir || 'center')}s;--fo:${thr <= p ? 1 : off}"/>`;
  }).join('');
  const body = `<circle class="core" cx="${x}" cy="${y}" r="${o.core ?? 5}" stroke-width=".8"/>` +
    `<path class="t" d="${HALF(x, y, r + 3.5)}" fill="none" stroke-width=".6" opacity=".3"/>` + petals + valTxt(o, p, x, y) + lblTxt(o, x, y);
  const c2 = join([
    css(`.${c.cls}`, { transition: 'transform .5s var(--e-out)' }),
    css(`.${c.cls} .pt`, { stroke: 'var(--ink)', opacity: SW(off, 1, 6), transition: 'opacity .4s var(--e-out) var(--d)', animation: 'scFade .5s ease var(--d) backwards' }),
    css(`.${c.cls} .core`, { fill: 'none', stroke: 'var(--ink)', opacity: .45 }),
    css(`.${c.cls} .val,.${c.cls} .lbl`, { animation: 'scFade .7s ease .4s backwards' }),
    o.fx === 'breathe' ? (kf.add('breathe'), css(`.${c.cls} .pt`, { 'transform-box': 'view-box', 'transform-origin': `${x}px ${y}px`, animation: 'scFade .5s ease var(--d) backwards, scBreathe 3.2s ease-in-out calc(var(--d) + .6s) infinite' })) : '',
    o.fx === 'blink' ? (kf.add('blink'), css(`.${c.cls} .pt`, { animation: `scFade .5s ease var(--d) backwards, scBlink 2.4s steps(1,end) calc(var(--thr) * .02s) infinite` })) : '',
    o.fx === 'grow' ? (kf.add('growY'), css(`.${c.cls} .pt`, { 'transform-box': 'view-box', 'transform-origin': `${x}px ${y}px`, animation: 'scGrowY .6s var(--e-out) var(--d) backwards, scFade .4s ease var(--d) backwards' })) : '',
    css(`.${c.cls}:hover`, o.hover === 0 ? {} : { transform: `scale(1.05) rotate(${o.hoverRot ?? -1}deg)` }),
    Array.from(kf).map(k => KF[k]).join('\n')
  ]);
  return { html: root(c, svg(body)), css: c2 };
}

/* ========================================================================
   16. GRID — cell matrix inside the half disc
   ====================================================================== */
function b_grid(o, c) {
  const { x, y } = box(o);
  const R = o.r ?? 42, cell = o.cell ?? 5.4, gap = o.gap ?? 1.1, p = c.pct, kf = new Set(['fade']);
  const rows = Math.ceil(R / (cell + gap)), cols = Math.ceil((R * 2) / (cell + gap));
  const list = [];
  for (let rI = 0; rI < rows; rI++) for (let cI = 0; cI < cols; cI++) {
    const cx0 = x - R + cI * (cell + gap), cy0 = y - R + rI * (cell + gap);
    const ccx = cx0 + cell / 2, ccy = cy0 + cell / 2;
    if (ccy > y - .6 || Math.hypot(ccx - x, ccy - y) > R - 1.2) continue;
    list.push({ cx0, cy0 });
  }
  /* order: by angle so the fill sweeps left -> right like the arc */
  list.sort((a, b) => Math.atan2(a.cy0 - y, a.cx0 - x) - Math.atan2(b.cy0 - y, b.cx0 - x));
  const total = list.length, off = o.offOp ?? .1;
  const cells = list.map((q, k) => {
    const thr = R2((k + .6) / total * 100);
    return `<rect class="c" x="${R2(q.cx0)}" y="${R2(q.cy0)}" width="${cell}" height="${cell}" rx="${o.rx ?? 1}" style="--thr:${thr};--d:${lag(k, total, o.step ?? .01, o.dir)}s;--fo:${thr <= p ? .95 : off}"/>`;
  }).join('');
  const body = `<g class="cells">${cells}</g>` + valTxt(o, p, x, y) + lblTxt(o, x, y);
  const c2 = join([
    css(`.${c.cls}`, { transition: 'transform .45s var(--e-out)' }),
    css(`.${c.cls} .c`, { fill: 'var(--ink)', opacity: SW(off, o.onOp ?? .95, 6), transition: 'opacity .4s var(--e-out) var(--d), transform .4s var(--e-out) var(--d)', animation: 'scFade .4s ease var(--d) backwards', 'transform-box': 'fill-box', 'transform-origin': 'center' }),
    css(`.${c.cls} .val,.${c.cls} .lbl`, { animation: 'scFade .8s ease .5s backwards' }),
    o.fx === 'pop' ? (kf.add('pop'), css(`.${c.cls} .c`, { animation: 'scPop .5s var(--e-out) var(--d) backwards' })) : '',
    o.fx === 'blink' ? (kf.add('blink'), css(`.${c.cls} .c`, { animation: `scFade .4s ease var(--d) backwards, scBlink 2.8s steps(1,end) calc(var(--thr) * .03s) infinite` })) : '',
    css(`.${c.cls}:hover`, o.hover === 0 ? {} : { transform: 'scale(1.04)' }),
    css(`.${c.cls}:hover .c`, { transform: 'scale(1.05)' }),
    Array.from(kf).map(k => KF[k]).join('\n')
  ]);
  return { html: root(c, svg(body)), css: c2 };
}

/* ========================================================================
   17. HALO — blurred glow stack
   ====================================================================== */
function b_halo(o, c) {
  const { x, y } = box(o);
  const r = o.r ?? 40, w = o.w ?? 5, p = c.pct, id = c.uid, kf = new Set(['draw', 'fade']);
  const layers = range(o.layers ?? 3).map(i =>
    `<path class="hl" d="${HALF(x, y, R2(r - i * (o.rstep ?? 1.2)))}" pathLength="100" fill="none" stroke-width="${R2(w + i * (o.wstep ?? 3))}" stroke-linecap="round" filter="url(#bl${id})" style="--o:${OFFk(i * (o.drop ?? 3))};--i:${i}"/>`).join('');
  const body = `<defs><filter id="bl${id}" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="${o.blur ?? 3}"/></filter></defs>` +
    `<path class="t" d="${HALF(x, y, r)}" pathLength="100" fill="none" stroke-width="${w}" opacity="${o.top ?? .16}"/>` + layers +
    `<path class="v" d="${HALF(x, y, r)}" pathLength="100" fill="none" stroke-width="${R2(w * .5)}" stroke-linecap="round"/>` +
    valTxt(o, p, x, y) + lblTxt(o, x, y);
  const c2 = join([
    css(`.${c.cls}`, { transition: 'transform .5s var(--e-out)' }),
    css(`.${c.cls} .hl`, { stroke: 'var(--ink)', opacity: o.haloOp ?? .2, 'stroke-dashoffset': 'var(--o)', animation: `scDraw ${o.dur ?? 1.7}s var(--e-quart) calc(var(--i) * .08s) backwards`, transition: 'stroke-dashoffset .85s var(--e-out)' }),
    css(`.${c.cls} .v`, { stroke: 'var(--ink)', 'stroke-dashoffset': OFF, animation: `scDraw ${o.dur ?? 1.7}s var(--e-quart) backwards`, transition: 'stroke-dashoffset .85s var(--e-out)' }),
    css(`.${c.cls} .val,.${c.cls} .lbl`, { animation: 'scFade .7s ease .35s backwards' }),
    o.fx === 'breathe' ? (kf.add('breathe'), css(`.${c.cls} .hl`, { 'transform-box': 'view-box', 'transform-origin': `${x}px ${y}px`, animation: `scDraw ${o.dur ?? 1.7}s var(--e-quart) backwards, scBreathe ${o.brDur ?? 3.4}s ease-in-out ${o.dur ?? 1.7}s infinite` })) : '',
    o.fx === 'pulse' ? (kf.add('pulse'), css(`.${c.cls} .hl`, { animation: `scDraw ${o.dur ?? 1.7}s var(--e-quart) backwards, scPulse ${o.puDur ?? 2.6}s ease-in-out ${o.dur ?? 1.7}s infinite` })) : '',
    css(`.${c.cls}:hover`, o.hover === 0 ? {} : { transform: 'scale(1.04)' }),
    css(`.${c.cls}:hover .hl`, { opacity: o.hoverHalo ?? .4 }),
    Array.from(kf).map(k => KF[k]).join('\n')
  ]);
  return { html: root(c, svg(body)), css: c2 };
}

/* ========================================================================
   18. MICRO — small arc with side label
   ====================================================================== */
function b_micro(o, c) {
  const { x, y } = box(o);
  const r = o.r ?? 15, p = c.pct, kf = new Set(['draw', 'fade', 'growX']);
  const cx = o.align === 'right' ? x + 25 : x - 25;
  const tx = o.align === 'right' ? x - 15 : x + 15;
  const anchor = o.align === 'right' ? 'end' : 'start';
  const body = `<g class="mic">
<path class="t" d="${HALF(cx, y - 3, r)}" pathLength="100" fill="none" stroke-width="${o.tw ?? 1.4}" opacity=".35"/>
<path class="v" d="${HALF(cx, y - 3, r)}" pathLength="100" fill="none" stroke-width="${o.w ?? 1.4}" stroke-linecap="${o.cap || 'round'}"/>
${o.dot ? headG(cx, y - 3, 'head', `<circle class="dt" cx="${cx - r}" cy="${y - 3}" r="1.2"/>`) : ''}
</g>
<text class="val" x="${tx}" y="${y - 4}" text-anchor="${anchor}" style="font-size:${o.vs ?? 15}px;letter-spacing:${o.ls ?? '-.02em'}">${num(p, o.dec || 0, o.suf === undefined ? '%' : o.suf)}</text>
<text class="lbl" x="${tx}" y="${y + 2}" text-anchor="${anchor}" style="font-size:4.1px">${(o.label || 'complete').toUpperCase()}</text>
${o.rule ? `<line class="rule" x1="${tx}" y1="${y + 5}" x2="${R2(tx + (o.align === 'right' ? -30 : 30))}" y2="${y + 5}" stroke-width=".6"/>` : ''}`;
  if (o.dot) kf.add('orbit');
  const c2 = join([
    css(`.${c.cls}`, { '--rot': ROT, transition: 'transform .45s var(--e-out)' }),
    css(`.${c.cls} .v`, { stroke: 'var(--ink)', 'stroke-dashoffset': OFF, animation: `scDraw ${o.dur ?? 1.1}s var(--e-quart) backwards`, transition: 'stroke-dashoffset .6s var(--e-out)' }),
    css(`.${c.cls} .dt`, { fill: 'var(--ink)', opacity: .7 }),
    css(`.${c.cls} .val`, { animation: 'scFade .7s ease .2s backwards' }),
    css(`.${c.cls} .lbl`, { animation: 'scFade .7s ease .35s backwards', opacity: .55 }),
    css(`.${c.cls} .rule`, { stroke: 'var(--ink)', opacity: .3, 'transform-box': 'view-box', 'transform-origin': o.align === 'right' ? `${tx}px ${y}px` : `${tx}px ${y}px`, animation: 'scGrowX .8s var(--e-out) .4s backwards' }),
    o.fx === 'pulse' ? (kf.add('pulse'), css(`.${c.cls} .dt`, { animation: 'scPulse 1.9s ease-in-out infinite' })) : '',
    css(`.${c.cls}:hover`, o.hover === 0 ? {} : { transform: 'translateY(-1px) scale(1.02)' }),
    css(`.${c.cls}:hover .lbl`, { opacity: 1 }),
    Array.from(kf).map(k => KF[k]).join('\n')
  ]);
  return { html: root(c, svg(body)), css: c2 };
}

/* ========================================================================
   19. DUAL — two related arcs
   ====================================================================== */
function b_dual(o, c) {
  const { x, y } = box(o);
  const r1 = o.r1 ?? 44, r2 = o.r2 ?? 33, p = c.pct, kf = new Set(['draw', 'fade']);
  const p2 = o.mode === 'inverse' ? R2(100 - p) : R2(Math.min(100, p * (o.factor ?? .72)));
  const body = `<path class="t" d="${HALF(x, y, r1)}" pathLength="100" fill="none" stroke-width="${o.w1 ?? 3}" opacity=".2"/>
<path class="t" d="${HALF(x, y, r2)}" pathLength="100" fill="none" stroke-width="${o.w2 ?? 3}" opacity=".2"/>
<path class="v v1" d="${HALF(x, y, r1)}" pathLength="100" fill="none" stroke-width="${o.w1 ?? 3}" stroke-linecap="${o.cap1 || 'round'}"/>
<path class="v v2" d="${HALF(x, y, r2)}" pathLength="100" fill="none" stroke-width="${o.w2 ?? 3}" stroke-linecap="${o.cap2 || 'round'}" style="--o2:${o.mode === 'inverse' ? `calc((var(--p)) * 1px)` : `max(0px, calc((100 - var(--p) * ${o.factor ?? .72}) * 1px))`}"/>
${o.link ? range(9).map(i => { const a = 180 + i * 22.5, A = pol(x, y, r2 + 2.5, a), B = pol(x, y, r1 - 2.5, a); return `<line class="lk" x1="${A[0]}" y1="${A[1]}" x2="${B[0]}" y2="${B[1]}" stroke-width=".5" style="--i:${i}"/>`; }).join('') : ''}
${valTxt(o, p, x, y)}
${o.sub ? `<text class="lbl" x="${x}" y="${y + (o.ly ?? 0)}" text-anchor="middle" style="font-size:4.1px">${String(o.sub).toUpperCase()} · ${num(p2, 0, '%')}</text>` : ''}`;
  const c2 = join([
    css(`.${c.cls}`, { transition: 'transform .5s var(--e-out)' }),
    css(`.${c.cls} .v`, { stroke: 'var(--ink)', 'stroke-dashoffset': OFF, transition: 'stroke-dashoffset .85s var(--e-out)' }),
    css(`.${c.cls} .v1`, { animation: `scDraw ${o.dur ?? 1.5}s var(--e-${o.ease || 'quart'}) backwards` }),
    css(`.${c.cls} .v2`, { opacity: o.o2 ?? .5, 'stroke-dashoffset': 'var(--o2)', animation: `scDraw ${o.dur ?? 1.5}s var(--e-${o.ease || 'quart'}) ${o.del2 ?? .18}s backwards` }),
    css(`.${c.cls} .lk`, { stroke: 'var(--ink)', opacity: .16, animation: 'scFade .5s ease calc(var(--i) * .05s + .4s) backwards' }),
    css(`.${c.cls} .val,.${c.cls} .lbl`, { animation: 'scFade .7s ease .4s backwards' }),
    o.fx === 'pulse' ? (kf.add('pulse'), css(`.${c.cls} .v2`, { animation: `scDraw ${o.dur ?? 1.5}s var(--e-quart) ${o.del2 ?? .18}s backwards, scPulse 2.8s ease-in-out 1.6s infinite` })) : '',
    o.fx === 'march' ? (kf.add('march'), css(`.${c.cls} .v2`, { 'stroke-dasharray': o.dash2 || '2 3', '--mstep': '-5px', animation: `scMarch ${o.mDur ?? 3}s linear infinite` })) : '',
    css(`.${c.cls}:hover`, o.hover === 0 ? {} : { transform: 'scale(1.04)' }),
    css(`.${c.cls}:hover .v2`, { opacity: o.hoverO2 ?? .95 }),
    Array.from(kf).map(k => KF[k]).join('\n')
  ]);
  return { html: root(c, svg(body)), css: c2 };
}

/* ========================================================================
   20. GROOVE — channel with rolling head / growing cap
   ====================================================================== */
function b_groove(o, c) {
  const { x, y } = box(o);
  const r = o.r ?? 42, p = c.pct, kf = new Set(['draw', 'orbit', 'fade']);
  const body = `<path class="gr" d="${HALF(x, y, r)}" pathLength="100" fill="none" stroke-width="${o.gw ?? 6}" opacity="${o.gop ?? .45}"/>` +
    (o.grooveLine ? `<path class="gl" d="${HALF(x, y, r)}" fill="none" stroke-width=".5" opacity=".45"/>` : '') +
    `<path class="v" d="${HALF(x, y, r)}" pathLength="100" fill="none" stroke-width="${o.w ?? 3}" stroke-linecap="${o.cap || 'round'}"/>` +
    (o.ball ? `<g class="orb" style="--rot:${ROTH};transform-box:view-box;transform-origin:${x}px ${y}px"><circle class="hd" cx="${x - r}" cy="${y}" r="${o.br ?? 3}"/></g>` : '') +
    (o.capdot ? `<g class="orb capg" style="--rot:${ROTH};transform-box:view-box;transform-origin:${x}px ${y}px"><circle class="cap" cx="${x - r}" cy="${y}" r="${o.capR ?? 3.4}"/></g>` : '') +
    (o.notches ? range(o.nn ?? 5).map(i => { const q = pol(x, y, r, 180 + i * 45); return `<circle class="nt" cx="${q[0]}" cy="${q[1]}" r=".8" style="--i:${i}"/>`; }).join('') : '') +
    valTxt(o, p, x, y) + lblTxt(o, x, y);
  const c2 = join([
    css(`.${c.cls}`, { '--rot': ROT, transition: 'transform .45s var(--e-out)' }),
    css(`.${c.cls} .gr`, { stroke: 'var(--track)' }),
    css(`.${c.cls} .gl`, { stroke: 'var(--ink)', opacity: .5 }),
    css(`.${c.cls} .v`, { stroke: 'var(--ink)', 'stroke-dashoffset': OFF, animation: `scDraw ${o.dur ?? 1.4}s var(--e-${o.ease || 'expo'}) backwards`, transition: 'stroke-dashoffset .85s var(--e-out)' }),
    css(`.${c.cls} .orb`, { transform: 'rotate(var(--rot))', transition: 'transform .9s var(--e-out)', animation: `scOrbit ${o.dur ?? 1.4}s var(--e-expo) backwards` }),
    css(`.${c.cls} .hd`, { fill: 'var(--ink)', stroke: 'var(--sc-bg)', 'stroke-width': .9 }),
    css(`.${c.cls} .cap`, { fill: 'var(--ink)', opacity: .9, animation: 'scFade .5s ease .7s backwards' }),
    css(`.${c.cls} .nt`, { fill: 'var(--ink)', opacity: .3, animation: 'scFade .4s ease calc(var(--i) * .08s + .3s) backwards' }),
    css(`.${c.cls} .val,.${c.cls} .lbl`, { animation: 'scFade .7s ease .35s backwards' }),
    o.fx === 'pulse' ? (kf.add('pulse'), css(`.${c.cls} .cap`, { animation: 'scFade .5s ease .7s backwards, scPulse 2s ease-in-out 1.2s infinite' })) : '',
    css(`.${c.cls}:hover`, o.hover === 0 ? {} : { transform: 'scale(1.035)' }),
    css(`.${c.cls}:hover .gr`, { opacity: o.hoverGop ?? .7 }),
    Array.from(kf).map(k => KF[k]).join('\n')
  ]);
  return { html: root(c, svg(body)), css: c2 };
}

/* ========================================================================
   21. LADDER — equaliser columns
   ====================================================================== */
function b_ladder(o, c) {
  const { x, y } = box(o);
  const n = o.n ?? 16, r = o.r ?? 42, p = c.pct, kf = new Set(['fade']), off = o.offOp ?? .13;
  const cols = range(n).map(i => {
    const a = 180 + (i + .5) * (180 / n);
    const thr = R2((i + .6) / n * 100);
    const h = o.curve === 'center' ? R2((o.max ?? 12) * (.35 + .65 * Math.sin((i + .5) / n * Math.PI)))
      : o.curve === 'up' ? R2((o.max ?? 12) * ((i + 1) / n))
      : o.curve === 'down' ? R2((o.max ?? 12) * (1 - i / n))
      : o.curve === 'rand' ? R2((o.max ?? 12) * (.3 + .7 * Math.abs(Math.sin(i * 2.3))))
      : (o.max ?? 12);
    const A = pol(x, y, r - h, a), B = pol(x, y, r, a);
    return `<line class="cl" x1="${A[0]}" y1="${A[1]}" x2="${B[0]}" y2="${B[1]}" stroke-width="${o.w ?? 2.6}" stroke-linecap="${o.cap || 'butt'}" style="--thr:${thr};--d:${lag(i, n, .03, o.dir || 'center')}s;--fo:${thr <= p ? 1 : off}"/>`;
  }).join('');
  const body = `<path class="t" d="${HALF(x, y, r + 2)}" fill="none" stroke-width=".6" opacity=".35"/>` + cols +
    valTxt(o, p, x, y) + lblTxt(o, x, y);
  const c2 = join([
    css(`.${c.cls}`, { transition: 'transform .45s var(--e-out)' }),
    css(`.${c.cls} .cl`, { stroke: 'var(--ink)', opacity: SW(off, o.onOp ?? 1, 6), transition: 'opacity .4s var(--e-out) var(--d), stroke-width .3s var(--e-out)', animation: 'scFade .45s ease var(--d) backwards' }),
    css(`.${c.cls} .val,.${c.cls} .lbl`, { animation: 'scFade .7s ease .4s backwards' }),
    o.fx === 'blink' ? (kf.add('blink'), css(`.${c.cls} .cl`, { animation: `scFade .45s ease var(--d) backwards, scBlink ${o.blDur ?? 1.5}s steps(1,end) calc(var(--thr) * .025s) infinite` })) : '',
    o.fx === 'pulse' ? (kf.add('pulse'), css(`.${c.cls} .cl`, { animation: `scFade .45s ease var(--d) backwards, scPulse ${o.puDur ?? 1.9}s ease-in-out calc(var(--thr) * .02s) infinite` })) : '',
    o.fx === 'glow' ? css(`.${c.cls} .cl`, { filter: `drop-shadow(0 0 ${o.glowR ?? 1.6}px var(--mid))` }) : '',
    o.fx === 'grow' ? (kf.add('growY'), css(`.${c.cls} .cl`, { 'transform-box': 'view-box', 'transform-origin': `${x}px ${y}px`, animation: 'scGrowY .6s var(--e-out) var(--d) backwards' })) : '',
    css(`.${c.cls}:hover`, o.hover === 0 ? {} : { transform: 'scale(1.04)' }),
    css(`.${c.cls}:hover .cl`, { 'stroke-width': R2((o.w ?? 2.6) * (o.hoverK ?? 1.25)) }),
    Array.from(kf).map(k => KF[k]).join('\n')
  ]);
  return { html: root(c, svg(body)), css: c2 };
}

/* ========================================================================
   22. SPLIT — deviation gauge filling from centre  (baked geometry)
   ====================================================================== */
function b_split(o, c) {
  const { x, y } = box(o);
  const r = o.r ?? 42, w = o.w ?? 5, p = c.pct, kf = new Set(['fade', 'growX']);
  const dev = (p - 50) / 50, side = dev >= 0 ? 1 : -1, frac = Math.abs(dev);
  const a0 = side > 0 ? 270 : 270 - 90 * frac, a1 = side > 0 ? 270 + 90 * frac : 270;
  const seg = frac < .004 ? '' : `<path class="v" d="${arcD(x, y, r, a0, a1)}" fill="none" stroke-width="${w}" stroke-linecap="${o.cap || 'round'}"/>`;
  const ticks = range(11).map(i => {
    const a = 180 + i * 18, A = pol(x, y, r + 3, a), B = pol(x, y, r + (i === 5 ? 6.6 : 4.6), a);
    return `<line class="tk${i === 5 ? ' mid' : ''}" x1="${A[0]}" y1="${A[1]}" x2="${B[0]}" y2="${B[1]}" stroke-width="${i === 5 ? .9 : .5}"/>`;
  }).join('');
  const body = `<path class="t" d="${HALF(x, y, r)}" pathLength="100" fill="none" stroke-width="${w}" opacity="${o.top ?? .2}"/>` + seg + ticks +
    `<line class="zero" x1="${x}" y1="${y - r - 7}" x2="${x}" y2="${y - r + 7}" stroke-width=".6" opacity=".5"/>` +
    (o.value ? `<text class="val" x="${x}" y="${y - (o.vy ?? 4)}" text-anchor="middle" style="font-size:${o.vs ?? 15}px">${o.signed ? (dev >= 0 ? '+' : '−') + num(Math.abs(R2(dev * 100)), o.dec || 0, '') : num(p, o.dec || 0, '')}${o.suf === undefined ? '%' : o.suf}</text>` : '') +
    lblTxt(o, x, y);
  const c2 = join([
    css(`.${c.cls}`, { transition: 'transform .45s var(--e-out)' }),
    css(`.${c.cls} .v`, { stroke: 'var(--ink)', 'transform-box': 'view-box', 'transform-origin': `${x}px ${y}px`, animation: `scGrowX ${o.dur ?? 1.1}s var(--e-expo) backwards` }),
    css(`.${c.cls} .tk`, { stroke: 'var(--ink)', opacity: .2 }),
    css(`.${c.cls} .tk.mid`, { opacity: .6 }),
    css(`.${c.cls} .zero`, { stroke: 'var(--ink)' }),
    css(`.${c.cls} .val,.${c.cls} .lbl`, { animation: 'scFade .7s ease .3s backwards' }),
    o.fx === 'pulse' ? (kf.add('pulse'), css(`.${c.cls} .v`, { animation: `scGrowX ${o.dur ?? 1.1}s var(--e-expo) backwards, scPulse 2.6s ease-in-out 1.4s infinite` })) : '',
    css(`.${c.cls}:hover`, o.hover === 0 ? {} : { transform: 'scale(1.04)' }),
    Array.from(kf).map(k => KF[k]).join('\n')
  ]);
  return { html: root(c, svg(body)), css: c2 };
}

/* ========================================================================
   23. FRAME — arc inside technical brackets
   ====================================================================== */
function b_frame(o, c) {
  const { x, y } = box(o);
  const r = o.r ?? 33, w = o.w ?? 3, p = c.pct, kf = new Set(['draw', 'fade']);
  const br = o.br ?? 5, bw = o.bw ?? 46, bh = o.bh ?? 43;
  const bx0 = x - bw, bx1 = x + bw, by0 = y - bh, by1 = y + 6;
  const body = (o.brackets === 0 ? '' : `<g class="brk">
<path d="M${bx0} ${by0 + br}V${by0}H${bx0 + br}"/><path d="M${bx1 - br} ${by0}H${bx1}V${by0 + br}"/>
<path d="M${bx0} ${by1 - br}V${by1}H${bx0 + br}"/><path d="M${bx1 - br} ${by1}H${bx1}V${by1 - br}"/></g>`) +
    (o.grid ? `<g class="gr">${range(5).map(i => `<line x1="${bx0}" y1="${R2(by0 + i * 11)}" x2="${bx1}" y2="${R2(by0 + i * 11)}" stroke-width=".3"/>`).join('')}</g>` : '') +
    `<path class="t" d="${HALF(x, y, r)}" pathLength="100" fill="none" stroke-width="${w}" opacity="${o.top ?? .25}"/>` +
    `<path class="v" d="${HALF(x, y, r)}" pathLength="100" fill="none" stroke-width="${w}" stroke-linecap="${o.cap || 'round'}"/>` +
    (o.cross ? `<g class="cr"><line x1="${x - 4}" y1="${y}" x2="${x + 4}" y2="${y}" stroke-width=".5"/><line x1="${x}" y1="${y - 4}" x2="${x}" y2="${y + 4}" stroke-width=".5"/></g>` : '') +
    valTxt(o, p, x, y - 8) +
    `<text class="lbl tl" x="${bx0}" y="${by0 - 3}" text-anchor="start" style="font-size:3.7px">${(o.label || 'unit 01').toUpperCase()}</text>` +
    (o.meta ? `<text class="lbl tr" x="${bx1}" y="${by0 - 3}" text-anchor="end" style="font-size:3.7px">${String(o.meta).toUpperCase()}</text>` : '');
  const c2 = join([
    css(`.${c.cls}`, { transition: 'transform .45s var(--e-out)' }),
    css(`.${c.cls} .brk path`, { fill: 'none', stroke: 'var(--ink)', 'stroke-width': .8, opacity: .45, animation: 'scFade .6s ease backwards' }),
    css(`.${c.cls} .gr line`, { stroke: 'var(--ink)', opacity: .07, transition: 'opacity .3s' }),
    css(`.${c.cls} .cr line`, { stroke: 'var(--ink)', opacity: .3 }),
    css(`.${c.cls} .v`, { stroke: 'var(--ink)', 'stroke-dashoffset': OFF, animation: `scDraw ${o.dur ?? 1.3}s var(--e-${o.ease || 'quart'}) .2s backwards`, transition: 'stroke-dashoffset .7s var(--e-out)' }),
    css(`.${c.cls} .val,.${c.cls} .tl,.${c.cls} .tr`, { animation: 'scFade .7s ease .4s backwards' }),
    css(`.${c.cls}:hover`, o.hover === 0 ? {} : { transform: 'scale(1.03)' }),
    css(`.${c.cls}:hover .brk path`, { opacity: 1 }),
    css(`.${c.cls}:hover .gr line`, { opacity: .15 }),
    Array.from(kf).map(k => KF[k]).join('\n')
  ]);
  return { html: root(c, svg(body)), css: c2 };
}

/* ========================================================================
   24. STACK — offset layers of the same arc
   ====================================================================== */
function b_stack(o, c) {
  const { x, y } = box(o);
  const r = o.r ?? 40, w = o.w ?? 3, p = c.pct, kf = new Set(['draw', 'fade']), L = o.layers ?? 4;
  const layers = range(L).map(i => {
    const dx = (i - (L - 1) / 2) * (o.dx ?? 1.2), dy = i * (o.dy ?? .8);
    return `<path class="ly" d="${arcD(R2(x + dx), R2(y + dy), r, 180, 360)}" pathLength="100" fill="none" stroke-width="${R2(w - i * (o.tw ?? .3))}" stroke-linecap="${o.cap || 'round'}" style="--o:${OFFk(i * (o.drop ?? 6))};--i:${i};--op:${R2(1 - i * (o.fade ?? .2))}"/>`;
  }).join('');
  const body = layers + valTxt(o, p, x, y) + lblTxt(o, x, y);
  const c2 = join([
    css(`.${c.cls}`, { transition: 'transform .5s var(--e-out)' }),
    css(`.${c.cls} .ly`, { stroke: 'var(--ink)', opacity: 'var(--op)', 'stroke-dashoffset': 'var(--o)', animation: `scDraw ${o.dur ?? 1.4}s var(--e-${o.ease || 'quart'}) calc(var(--i) * ${o.step ?? .09}s) backwards`, transition: 'stroke-dashoffset .85s var(--e-out), opacity .35s' }),
    css(`.${c.cls} .val,.${c.cls} .lbl`, { animation: 'scFade .7s ease .45s backwards' }),
    o.fx === 'pulse' ? (kf.add('pulse'), css(`.${c.cls} .ly`, { animation: `scDraw ${o.dur ?? 1.4}s var(--e-quart) calc(var(--i) * .09s) backwards, scPulse 3.2s ease-in-out calc(var(--i) * .2s + 1.4s) infinite` })) : '',
    css(`.${c.cls}:hover`, o.hover === 0 ? {} : { transform: 'scale(1.04)' }),
    css(`.${c.cls}:hover .ly`, { opacity: 1 }),
    Array.from(kf).map(k => KF[k]).join('\n')
  ]);
  return { html: root(c, svg(body)), css: c2 };
}

/* ========================================================================
   25. SHADE — grayscale tone bands
   ====================================================================== */
function b_shade(o, c) {
  const { x, y } = box(o);
  const r = o.r ?? 42, w = o.w ?? 8, n = o.n ?? 6, p = c.pct, kf = new Set(['fade']);
  const step = 180 / n, g = o.g ?? .7;
  const bands = range(n).map(i => {
    const a0 = 180 + i * step + g / 2, thr = R2((i + .7) / n * 100);
    const tone = R2(1 - (i / (n - 1)) * (o.spread ?? .72));
    return `<path class="bd" d="${arcD(x, y, r, a0, a0 + step - g)}" fill="none" stroke-width="${w}" stroke-linecap="${o.cap || 'butt'}" style="--thr:${thr};--tone:${tone};--d:${lag(i, n, .05, o.dir)}s;--fo:${thr <= p ? tone : R2(tone * .22)}"/>`;
  }).join('');
  const body = (o.track === 0 ? '' : `<path class="t" d="${HALF(x, y, r)}" pathLength="100" fill="none" stroke-width="${w}" opacity="${o.top ?? .16}"/>`) + bands +
    valTxt(o, p, x, y) + lblTxt(o, x, y);
  const c2 = join([
    css(`.${c.cls}`, { transition: 'transform .45s var(--e-out)' }),
    css(`.${c.cls} .bd`, { stroke: 'var(--ink)', opacity: `calc(var(--tone) * ${SW(o.dim ?? .22, 1, 6)})`, transition: 'opacity .5s var(--e-out) var(--d)', animation: 'scFade .5s ease var(--d) backwards' }),
    css(`.${c.cls} .val,.${c.cls} .lbl`, { animation: 'scFade .7s ease .4s backwards' }),
    o.fx === 'blink' ? (kf.add('blink'), css(`.${c.cls} .bd`, { animation: `scFade .5s ease var(--d) backwards, scBlink 3.2s steps(1,end) calc(var(--thr) * .03s) infinite` })) : '',
    css(`.${c.cls}:hover`, o.hover === 0 ? {} : { transform: 'scale(1.03)' }),
    css(`.${c.cls}:hover .bd`, { opacity: 'var(--tone)' }),
    Array.from(kf).map(k => KF[k]).join('\n')
  ]);
  return { html: root(c, svg(body)), css: c2 };
}

/* ========================================================================
   26. RIBBON — monochrome gradient stroke
   ====================================================================== */
function b_ribbon(o, c) {
  const { x, y } = box(o);
  const r = o.r ?? 42, w = o.w ?? 7, p = c.pct, id = c.uid, kf = new Set(['draw', 'fade']);
  const stops = o.stops || [[0, 1], [.5, .55], [1, .12]];
  const rev = o.dir === 'rev';
  const grad = `<linearGradient id="g${id}" x1="${rev ? 1 : 0}" y1="0" x2="${rev ? 0 : 1}" y2="0">${stops.map(s => `<stop offset="${s[0]}" stop-color="var(--ink)" stop-opacity="${s[1]}"/>`).join('')}</linearGradient>`;
  const d = HALF(x, y, r);
  const body = `<defs>${grad}${o.blur ? `<filter id="bl${id}" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="${o.blur}"/></filter>` : ''}</defs>` +
    (o.track === 0 ? '' : `<path class="t" d="${d}" pathLength="100" fill="none" stroke-width="${w}" opacity="${o.top ?? .14}"/>`) +
    (o.blur ? `<path class="bl" d="${d}" pathLength="100" fill="none" stroke="url(#g${id})" stroke-width="${R2(w + 2)}" stroke-linecap="round" filter="url(#bl${id})"/>` : '') +
    `<path class="v" d="${d}" pathLength="100" fill="none" stroke="url(#g${id})" stroke-width="${w}" stroke-linecap="${o.cap || 'round'}"/>` +
    (o.tip ? headG(x, y, 'head', `<circle class="tip" cx="${x - r}" cy="${y}" r="${o.tip}"/>`) : '') +
    valTxt(o, p, x, y) + lblTxt(o, x, y);
  if (o.tip) kf.add('orbit');
  const c2 = join([
    css(`.${c.cls}`, { '--o': OFF, transition: 'transform .5s var(--e-out)' }),
    css(`.${c.cls} .v,.${c.cls} .bl`, { 'stroke-dashoffset': 'var(--o)', transition: 'stroke-dashoffset .85s var(--e-out)' }),
    css(`.${c.cls} .v`, { animation: `scDraw ${o.dur ?? 1.7}s var(--e-${o.ease || 'quint'}) backwards` }),
    css(`.${c.cls} .bl`, { opacity: o.blOp ?? .38, animation: `scDraw ${o.dur ?? 1.7}s var(--e-quint) backwards` }),
    css(`.${c.cls} .tip`, { fill: 'var(--ink)', animation: 'scFade .5s ease 1s backwards' }),
    css(`.${c.cls} .val,.${c.cls} .lbl`, { animation: 'scFade .7s ease .4s backwards' }),
    o.fx === 'breathe' ? (kf.add('breathe'), css(`.${c.cls} .bl`, { 'transform-box': 'view-box', 'transform-origin': `${x}px ${y}px`, animation: `scDraw ${o.dur ?? 1.7}s var(--e-quint) backwards, scBreathe 3.6s ease-in-out 1.7s infinite` })) : '',
    o.fx === 'pulse' ? (kf.add('pulse'), css(`.${c.cls} .bl`, { animation: `scDraw ${o.dur ?? 1.7}s var(--e-quint) backwards, scPulse 2.8s ease-in-out 1.7s infinite` })) : '',
    css(`.${c.cls}:hover`, o.hover === 0 ? {} : { transform: 'scale(1.04)' }),
    css(`.${c.cls}:hover .bl`, { opacity: o.hoverBl ?? .72 }),
    Array.from(kf).map(k => KF[k]).join('\n')
  ]);
  return { html: root(c, svg(body)), css: c2 };
}

/* ========================================================================
   27. SPARK — particles thrown off the head
   ====================================================================== */
function b_spark(o, c) {
  const { x, y } = box(o);
  const r = o.r ?? 40, p = c.pct, kf = new Set(['draw', 'fade', 'trail', 'orbit']);
  const n = o.n ?? 9;
  const sparks = range(n).map(i => {
    const a = -12 - i * (o.spread ?? 7);
    const q = pol(x - r, y, (i % 3) * 2.4, a);
    return `<circle class="sp" cx="${q[0]}" cy="${q[1]}" r="${R2(.35 + (i % 4) * .26)}" style="--i:${i}"/>`;
  }).join('');
  const body = `<path class="t" d="${HALF(x, y, r)}" pathLength="100" fill="none" stroke-width="${o.tw ?? .8}" opacity=".35"${o.tdash ? ` stroke-dasharray="${o.tdash}"` : ''}/>` +
    `<path class="v" d="${HALF(x, y, r)}" pathLength="100" fill="none" stroke-width="${o.w ?? 2}" stroke-linecap="round"/>` +
    (o.sparks === 0 ? '' : headG(x, y, 'sparks', sparks)) +
    headG(x, y, 'head', `<circle class="hd" cx="${x - r}" cy="${y}" r="${o.hr ?? 2}"/>`) +
    valTxt(o, p, x, y) + lblTxt(o, x, y);
  const c2 = join([
    css(`.${c.cls}`, { '--rot': ROT, transition: 'transform .45s var(--e-out)' }),
    css(`.${c.cls} .v`, { stroke: 'var(--ink)', 'stroke-dashoffset': OFF, animation: `scDraw ${o.dur ?? 1.4}s var(--e-expo) backwards`, transition: 'stroke-dashoffset .85s var(--e-out)' }),
    css(`.${c.cls} .hd`, { fill: 'var(--ink)', animation: 'scFade .4s ease 1s backwards' }),
    css(`.${c.cls} .sparks`, { transform: 'rotate(var(--rot))', transition: 'transform .9s var(--e-out)', animation: 'scOrbit 1.4s var(--e-expo) backwards' }),
    css(`.${c.cls} .sp`, { fill: 'var(--ink)', opacity: 0, animation: `scTrail ${o.spDur ?? 1.9}s ease-out calc(var(--i) * ${o.stagger ?? .13}s + 1s) infinite` }),
    css(`.${c.cls} .val,.${c.cls} .lbl`, { animation: 'scFade .7s ease .35s backwards' }),
    css(`.${c.cls}:hover`, o.hover === 0 ? {} : { transform: 'scale(1.04)' }),
    css(`.${c.cls}:hover .sp`, { 'animation-duration': R2((o.spDur ?? 1.9) / 2.2) + 's' }),
    Array.from(kf).map(k => KF[k]).join('\n')
  ]);
  return { html: root(c, svg(body)), css: c2 };
}

/* ========================================================================
   28. WEDGE — filled sector  (baked geometry)
   ====================================================================== */
function b_wedge(o, c) {
  const { x, y } = box(o);
  const R = o.r ?? 42, p = c.pct, id = c.uid, kf = new Set(['fade']);
  const a1 = 180 + 1.8 * p;                                  /* path-space angle */
  const e = pol(x, y, R, a1);
  const large = (a1 - 180) > 180 ? 1 : 0;
  const Lm = R2(Math.PI * (R / 2)), perm = R2(Lm / 100);
  const sector = p <= .3 ? '' : `<path class="wd" d="M${x} ${y}L${x - R} ${y}A${R} ${R} 0 ${large} 1 ${e[0]} ${e[1]}Z"/>`;
  const rings = o.rings ? range(o.rings).map(i => `<path class="rn" d="${HALF(x, y, R2(R * (.34 + i * .3)))}" fill="none" stroke-width=".4" opacity=".2"/>`).join('') : '';
  const body = `<defs><mask id="wm${id}" maskUnits="userSpaceOnUse">
<path class="wmk" d="${HALF(x, y, R2(R / 2))}" fill="none" stroke="#fff" stroke-width="${R + 3}" stroke-dasharray="${Lm} ${Lm}"/>
</mask></defs>` +
    `<path class="t" d="M${x - R} ${y}A${R} ${R} 0 0 1 ${x + R} ${y}Z" fill="none" stroke-width="${o.sw ?? .9}" opacity=".5"/>` +
    rings +
    (sector ? `<g mask="url(#wm${id})">${sector}</g>` : '') +
    (o.edge && p > .3 ? `<line class="ed" x1="${x}" y1="${y}" x2="${e[0]}" y2="${e[1]}" stroke-width=".7" opacity=".65"/>` : '') +
    (o.value ? (() => {
      const on = p >= 30, q = pol(x, y, R * .52, 180 + .9 * p);
      const tx = on ? q[0] : x, ty = on ? R2(q[1] + (o.vs ?? 13) * .34) : y + 7;
      return `<text class="val${on ? ' infill' : ''}" x="${tx}" y="${ty}" text-anchor="middle" style="font-size:${o.vs ?? 13}px">${num(p, o.dec || 0, o.suf === undefined ? '%' : o.suf)}</text>`;
    })() : '') + lblTxt(o, x, y);
  const c2 = join([
    `@keyframes scSweepW${id}{from{stroke-dashoffset:${Lm}px}to{stroke-dashoffset:var(--wo)}}`,
    css(`.${c.cls}`, { '--wo': `calc(${Lm}px - var(--p) * ${perm}px)`, transition: 'transform .5s var(--e-out)' }),
    css(`.${c.cls} .wmk`, { 'stroke-dashoffset': 'var(--wo)', animation: `scSweepW${id} ${o.dur ?? 1.2}s var(--e-${o.ease || 'expo'}) backwards`, transition: 'stroke-dashoffset .8s var(--e-out)' }),
    css(`.${c.cls} .wd`, { fill: 'var(--ink)', opacity: o.wop ?? .9, transition: 'opacity .3s' }),
    css(`.${c.cls} .ed`, { stroke: 'var(--ink)' }),
    css(`.${c.cls} .rn`, { stroke: 'var(--ink)' }),
    css(`.${c.cls} .val,.${c.cls} .lbl`, { animation: 'scFade .7s ease .4s backwards' }),
    css(`.${c.cls} .val.infill`, { 'mix-blend-mode': 'difference' }),
    o.fx === 'pulse' ? (kf.add('pulse'), css(`.${c.cls} .wd`, { animation: `scPulse ${o.puDur ?? 3}s ease-in-out ${o.dur ?? 1.2}s infinite` })) : '',
    css(`.${c.cls}:hover`, o.hover === 0 ? {} : { transform: 'scale(1.04)' }),
    css(`.${c.cls}:hover .wd`, { opacity: o.hoverWop ?? 1 }),
    Array.from(kf).map(k => KF[k]).join('\n')
  ]);
  return { html: root(c, svg(body)), css: c2 };
}

/* ========================================================================
   29. ECHO — ghost copies fading behind
   ====================================================================== */
function b_echo(o, c) {
  const { x, y } = box(o);
  const r = o.r ?? 42, w = o.w ?? 3, p = c.pct, kf = new Set(['draw', 'fade']), n = o.layers ?? 4;
  const ghosts = range(n).map(i =>
    `<path class="gh" d="${HALF(x, y, R2(r - i * (o.gap ?? 3)))}" pathLength="100" fill="none" stroke-width="${R2(w * (1 - i * .12))}" stroke-linecap="${o.cap || 'round'}" style="--o:${OFFk(i * (o.drop ?? 4))};--i:${i};--dl:${R2(i * (o.step ?? .16))}s;--op:${R2(Math.max(.06, (o.op ?? .5) - i * (o.fade ?? .13)))}"/>`).join('');
  const body = ghosts +
    `<path class="v" d="${HALF(x, y, r)}" pathLength="100" fill="none" stroke-width="${w}" stroke-linecap="${o.cap || 'round'}"/>` +
    valTxt(o, p, x, y) + lblTxt(o, x, y);
  const c2 = join([
    css(`.${c.cls}`, { transition: 'transform .5s var(--e-out)' }),
    css(`.${c.cls} .gh`, { stroke: 'var(--ink)', opacity: 'var(--op)', 'stroke-dashoffset': 'var(--o)', animation: `scDraw ${o.dur ?? 1.3}s var(--e-quart) var(--dl) backwards`, transition: 'stroke-dashoffset .85s var(--e-out), opacity .4s' }),
    css(`.${c.cls} .v`, { stroke: 'var(--ink)', 'stroke-dashoffset': OFF, animation: `scDraw ${o.dur ?? 1.3}s var(--e-quart) backwards`, transition: 'stroke-dashoffset .85s var(--e-out)' }),
    css(`.${c.cls} .val,.${c.cls} .lbl`, { animation: 'scFade .7s ease .4s backwards' }),
    o.fx === 'pulse' ? (kf.add('pulse'), css(`.${c.cls} .gh`, { animation: `scDraw ${o.dur ?? 1.3}s var(--e-quart) var(--dl) backwards, scPulse 3s ease-in-out calc(var(--dl) + 1.3s) infinite` })) : '',
    o.fx === 'march' ? (kf.add('march'), css(`.${c.cls} .gh`, { 'stroke-dasharray': o.dash || '2 3', '--mstep': '-5px', animation: `scMarch ${o.mDur ?? 3.4}s linear infinite` })) : '',
    css(`.${c.cls}:hover`, o.hover === 0 ? {} : { transform: 'scale(1.04)' }),
    css(`.${c.cls}:hover .gh`, { opacity: R2((o.op ?? .5) + .22) }),
    Array.from(kf).map(k => KF[k]).join('\n')
  ]);
  return { html: root(c, svg(body)), css: c2 };
}

/* ========================================================================
   30. COIL — spiral / helical stroke
   ====================================================================== */
function b_coil(o, c) {
  const { x, y } = box(o);
  const turns = o.turns ?? 2, r0 = o.r0 ?? 13, r1 = o.r1 ?? 44, p = c.pct, kf = new Set(['draw', 'fade']);
  const N = o.samples ?? 96;
  let d = '';
  for (let i = 0; i <= N; i++) {
    const t = i / N;
    const a = (180 + 180 * turns * t) * Math.PI / 180;
    const r = r0 + (r1 - r0) * t;
    d += (i ? 'L' : 'M') + R2(x + r * Math.cos(a)) + ' ' + R2(y + r * Math.sin(a));
  }
  const body = `<path class="t" d="${d}" pathLength="100" fill="none" stroke-width="${o.tw ?? .7}" opacity="${o.top ?? .28}"/>` +
    `<path class="v" d="${d}" pathLength="100" fill="none" stroke-width="${o.w ?? 2}" stroke-linecap="${o.cap || 'round'}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>` +
    valTxt(o, p, x, y) + lblTxt(o, x, y);
  const c2 = join([
    css(`.${c.cls}`, { transition: 'transform .5s var(--e-out)' }),
    css(`.${c.cls} .v`, { stroke: 'var(--ink)', 'stroke-dashoffset': OFF, animation: `scDraw ${o.dur ?? 2.1}s var(--e-${o.ease || 'quint'}) backwards`, transition: 'stroke-dashoffset .9s var(--e-out)' }),
    css(`.${c.cls} .val,.${c.cls} .lbl`, { animation: 'scFade .7s ease .5s backwards' }),
    o.fx === 'pulse' ? (kf.add('pulse'), css(`.${c.cls} .v`, { animation: `scDraw ${o.dur ?? 2.1}s var(--e-quint) backwards, scPulse 3.4s ease-in-out 2.1s infinite` })) : '',
    o.fx === 'flicker' ? (kf.add('flicker'), css(`.${c.cls} .v`, { animation: `scDraw ${o.dur ?? 2.1}s var(--e-quint) backwards, scFlicker 6s steps(1,end) 2.1s infinite` })) : '',
    css(`.${c.cls}:hover`, o.hover === 0 ? {} : { transform: `scale(1.05) rotate(${o.hoverRot ?? -1.5}deg)` }),
    Array.from(kf).map(k => KF[k]).join('\n')
  ]);
  return { html: root(c, svg(body)), css: c2 };
}

/* ------------------------------------------------------------ builder map */
const BUILDERS = {
  draw: b_draw, seg: b_seg, dots: b_dots, bars: b_bars, needle: b_needle,
  rings: b_rings, rev: b_rev, liquid: b_liquid, counter: b_counter, scale: b_scale,
  march: b_march, knob: b_knob, orbit: b_orbit, pulse: b_pulse, bloom: b_bloom,
  grid: b_grid, halo: b_halo, micro: b_micro, dual: b_dual, groove: b_groove,
  ladder: b_ladder, split: b_split, frame: b_frame, stack: b_stack, shade: b_shade,
  ribbon: b_ribbon, spark: b_spark, wedge: b_wedge, echo: b_echo, coil: b_coil
};
/* variants whose geometry is baked and must be rebuilt when the value changes */
const BAKED = { counter: 1, wedge: 1, split: 1 };

global.SC = global.SC || {};
global.SC.BUILDERS = BUILDERS;
global.SC.BAKED = BAKED;
global.SC.UTIL = { R2, pol, arcD, HALF, ang, num, range, css, join, lag, KF, OFF, ROT, SW, svg, root };
})(typeof window !== 'undefined' ? window : globalThis);
