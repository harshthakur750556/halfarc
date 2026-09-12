/* ============================================================================
   HALFARC — catalogue app
   ========================================================================== */
(function () {
'use strict';
if (typeof document === 'undefined') return;

const { BUILDERS, BAKED, SPECS, FAMILIES, UTIL } = window.SC;
const { num } = UTIL;
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const $ = s => document.querySelector(s);
const $$ = s => Array.from(document.querySelectorAll(s));

/* ------------------------------------------------------------ variant list */
const DEMO = [68, 74, 42, 88, 31, 57, 92, 23, 64, 79, 48, 85, 36, 71, 53, 96, 27, 62, 81, 44,
              89, 58, 33, 76, 49, 91, 25, 67, 83, 38, 72, 46, 87, 29, 61, 94, 51, 35, 78, 19];
const VARIANTS = SPECS.map((s, i) => {
  const id = String(i + 1).padStart(3, '0');
  return {
    idx: i + 1, id: 'V-' + id, fam: s.f, name: s.n, desc: s.d, o: s.o || {},
    cls: 'v-' + id, uid: 'a' + id, demo: DEMO[i % DEMO.length],
    label: FAMILIES.find(f => f.id === s.f).label
  };
});
const BY_ID = Object.fromEntries(VARIANTS.map(v => [v.id, v]));

/* --------------------------------------------------------- export base css */
const BASE_CSS = `.sc-ind{
  /* ---- drive the whole indicator with this one property (0 - 100) ---- */
  --p:68;
  /* monochrome palette */
  --ink:#eaeaea; --track:rgba(255,255,255,.09); --mid:rgba(255,255,255,.34);
  --sc-bg:#0a0a0a; --sc-bgf:#0a0a0a; --sc-knobf:rgba(255,255,255,.05);
  /* easings */
  --e-out:cubic-bezier(.16,1,.3,1);   --e-inout:cubic-bezier(.65,0,.35,1);
  --e-quart:cubic-bezier(.76,0,.24,1);--e-quint:cubic-bezier(.83,0,.17,1);
  --e-expo:cubic-bezier(.16,1,.3,1);  --e-sine:cubic-bezier(.37,0,.63,1);
  position:relative; width:100%; isolation:isolate;
}
@media (prefers-color-scheme:light){
  .sc-ind{--ink:#141414;--track:rgba(0,0,0,.09);--mid:rgba(0,0,0,.32);
          --sc-bg:#f4f4f3;--sc-bgf:#fff;--sc-knobf:rgba(0,0,0,.045)}
}
.sc-ind>svg{display:block;width:100%;height:auto;overflow:visible}
.sc-ind text{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;fill:var(--ink)}
.sc-ind .t{fill:none;stroke:var(--track)}
.sc-ind .lbl{fill:var(--mid)}
.sc-ind .head{transform:rotate(var(--rot));transition:transform .9s var(--e-out);animation:scOrbit 1.5s var(--e-expo) backwards}
@keyframes scOrbit{from{transform:rotate(0deg)}to{transform:rotate(var(--rot))}}
.sc-ind .val{font-weight:500;letter-spacing:-.03em}`;

/* ------------------------------------------------------------------ build */
function build(v, pct, noAnim) {
  const out = BUILDERS[v.fam](v.o, { cls: v.cls, uid: v.uid, pct: pct });
  let cssText = out.css;
  if (noAnim) cssText = cssText.replace(/animation:[^;}]*(;|})/g, (m, g) => g);
  return { html: out.html, css: cssText };
}
function snippet(v, pct) {
  const b = build(v, pct, false);
  return `<!-- ${v.id} · ${v.name} — from the HALFARC semi-circle catalogue -->
<!-- Family: ${v.label}. Drive it by changing --p on .sc-ind (0–100). No JS needed. -->
<!-- Any printed number is baked at ${Math.round(pct)}% — edit that text node if you show one. -->
${b.html}

<style>
/* ---------- shared base ---------- */
${BASE_CSS}

/* ---------- ${v.id} · ${v.name} ---------- */
${b.css}
</style>`;
}
function fullFile(v, pct) {
  const b = build(v, pct, false);
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${v.id} · ${v.name} — HALFARC</title>
<style>
html,body{margin:0;height:100%;background:#0a0a0a}
body{display:grid;place-items:center;gap:28px;padding:32px;font-family:ui-monospace,Menlo,Consolas,monospace}
.wrap{width:min(420px,90vw)}
input[type=range]{width:100%;accent-color:#eaeaea}
@media (prefers-color-scheme:light){html,body{background:#f4f4f3}input[type=range]{accent-color:#141414}}

/* ---------- shared base ---------- */
${BASE_CSS}

/* ---------- ${v.id} · ${v.name} ---------- */
${b.css}
</style>
</head>
<body>
<div class="wrap">
${b.html}
</div>
<label><input id="p" type="range" min="0" max="100" value="${Math.round(pct)}"> <span id="o">${Math.round(pct)}%</span></label>
<script>
/* ${BAKED[v.fam] ? 'This variant bakes its geometry, so it needs a rebuild for a new value.\n   In the snippet above, search for the numbers derived from the value and update them,\n   or re-generate it from the HALFARC catalogue at the value you want.' : 'Live: this variant is driven entirely by --p.'} */
const el=document.querySelector('.sc-ind'),r=document.getElementById('p'),o=document.getElementById('o');
r.addEventListener('input',()=>{
  el.style.setProperty('--p',r.value); o.textContent=r.value+'%';
  const t=el.querySelector('text.val');                       /* baked label, if plain */
  if(t && !t.querySelector('tspan')) t.textContent=r.value+'%';
  const bb=el.querySelector('.bub text'); if(bb) bb.textContent=r.value;
});
<\/script>
</body>
</html>`;
}

/* --------------------------------------------------------------- highlight */
function hl(src) {
  const toks = [];
  const keep = s => { toks.push(s); return '\u0000' + (toks.length - 1) + '\u0000'; };
  let s = esc(src);
  s = s.replace(/(&lt;!--[\s\S]*?--&gt;)/g, m => keep('<span class="c">' + m + '</span>'));
  s = s.replace(/(\/\*[\s\S]*?\*\/)/g, m => keep('<span class="c">' + m + '</span>'));
  s = s.replace(/"([^"\n]*)"/g, (m, g) => '"<span class="s">' + g + '</span>"');
  s = s.replace(/(&lt;\/?)([a-zA-Z][\w-]*)/g, (m, a, b) => a + '<span class="tg">' + b + '</span>');
  s = s.replace(/(^|\n)([^\n{};<>]+?)(\{)/g, (m, a, b, c) => a + '<span class="sl">' + b + '</span>' + c);
  s = s.replace(/([{;])\s*(-{0,2}[a-z-]+)\s*:/g, (m, a, b) => a + '<span class="pr">' + b + '</span>:');
  s = s.replace(/(@[\w-]+)/g, '<span class="at">$1</span>');
  s = s.replace(/\u0000(\d+)\u0000/g, (m, i) => toks[+i]);
  return s;
}

/* --------------------------------------------------------------- favourite */
const FKEY = 'halfarc.favourites.v1';
let FAVS = new Set();
try { FAVS = new Set(JSON.parse(localStorage.getItem(FKEY) || '[]')); } catch (e) { FAVS = new Set(); }
function saveFavs() { try { localStorage.setItem(FKEY, JSON.stringify(Array.from(FAVS))); } catch (e) {} }
function isFav(id) { return FAVS.has(id); }
function toggleFav(id) {
  if (FAVS.has(id)) FAVS.delete(id); else FAVS.add(id);
  saveFavs(); updateFavCount();
  const card = document.querySelector(`.card[data-id="${id}"] .favmark`);
  if (card) card.classList.toggle('on', isFav(id));
  const c2 = document.querySelector(`.card[data-id="${id}"]`);
  if (c2) c2.classList.toggle('fav', isFav(id));
  if (current && current.id === id) $('#m-fav').classList.toggle('on', isFav(id)), $('#m-fav').textContent = isFav(id) ? '★ Favourited' : '☆ Favourite';
}
function updateFavCount() { $('#fav-count').textContent = FAVS.size; $('#btn-fav').classList.toggle('on', onlyFav && FAVS.size >= 0); }

/* ------------------------------------------------------------------- state */
let query = '', famFilter = 'all', onlyFav = false, slow = false;
let current = null, currentPct = 68, currentTab = 'html';
const injected = new Set();
const styleEl = document.createElement('style');
document.head.appendChild(styleEl);

/* --------------------------------------------------------------- grid build */
const grid = $('#grid');
function cardHTML(v) {
  return `<article class="card${isFav(v.id) ? ' fav' : ''}" data-id="${v.id}" data-fam="${v.fam}" data-search="${(v.id + ' ' + v.name + ' ' + v.label + ' ' + v.fam + ' ' + v.desc).toLowerCase()}" tabindex="0" role="button" aria-label="${v.id} ${v.name}">
    <button class="favmark${isFav(v.id) ? ' on' : ''}" aria-label="Favourite" data-fav>
      <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 2.6 12.2 7l4.8.7-3.5 3.4.8 4.8L10 13.6 5.7 15.9l.8-4.8L3 7.7 7.8 7z" fill="${isFav(v.id) ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>
    </button>
    <div class="stage"><div data-slot="${v.idx}"></div></div>
    <div class="card-body">
      <div><span class="famtag">${v.label}</span><h3>${v.name}</h3></div>
      <span class="id">${v.id}</span>
    </div>
  </article>`;
}
grid.innerHTML = VARIANTS.map(cardHTML).join('');

function fill(card) {
  const slot = card.querySelector('[data-slot]');
  if (!slot || slot.dataset.done) return;
  const v = BY_ID[card.dataset.id];
  if (!injected.has(v.cls)) { styleEl.textContent += '\n/* ' + v.id + ' ' + v.name + ' */\n' + build(v, v.demo, false).css; injected.add(v.cls); }
  slot.dataset.done = '1';
  slot.innerHTML = build(v, v.demo, false).html;
  syncSpeed();
}

/* lazy mount + pause off-screen animation */
const io = new IntersectionObserver(entries => {
  entries.forEach(en => {
    const card = en.target;
    if (en.isIntersecting) { fill(card); card.querySelector('.stage')?.classList.remove('sc-paused'); }
    else card.querySelector('.stage')?.classList.add('sc-paused');
  });
}, { rootMargin: '240px 0px' });
$$('.card').forEach(c => io.observe(c));

/* ------------------------------------------------------------- family rail */
const rail = $('#families');
rail.innerHTML = `<button class="fam on" data-fam="all">All <b>${VARIANTS.length}</b></button>` +
  FAMILIES.map(f => `<button class="fam" data-fam="${f.id}" title="${f.note}">${f.label} <b>${VARIANTS.filter(v => v.fam === f.id).length}</b></button>`).join('');
rail.addEventListener('click', e => {
  const b = e.target.closest('.fam'); if (!b) return;
  famFilter = b.dataset.fam;
  $$('.fam').forEach(x => x.classList.toggle('on', x === b));
  applyFilter();
});

/* ----------------------------------------------------------------- filter */
function applyFilter() {
  const q = query.trim().toLowerCase();
  let shown = 0;
  $$('.card').forEach(c => {
    const okF = famFilter === 'all' || c.dataset.fam === famFilter;
    const okQ = !q || c.dataset.search.includes(q) || q.split(/\s+/).every(t => c.dataset.search.includes(t));
    const okFav = !onlyFav || isFav(c.dataset.id);
    const vis = okF && okQ && okFav;
    c.style.display = vis ? '' : 'none';
    if (vis) shown++;
  });
  $('#empty').hidden = shown !== 0;
  $('#status').textContent = shown + (shown === 1 ? ' variant' : ' variants') +
    (famFilter !== 'all' ? ' · ' + FAMILIES.find(f => f.id === famFilter).label : '') +
    (onlyFav ? ' · favourites' : '') + (q ? ' · “' + query.trim() + '”' : '');
}

$('#q').addEventListener('input', e => { query = e.target.value; applyFilter(); });
$('#btn-fav').addEventListener('click', () => {
  onlyFav = !onlyFav; $('#btn-fav').classList.toggle('on', onlyFav); applyFilter();
  if (onlyFav && !FAVS.size) toast('No favourites yet — tap the star on a card');
});
$('#btn-reset').addEventListener('click', () => {
  query = ''; $('#q').value = ''; famFilter = 'all'; onlyFav = false;
  $('#btn-fav').classList.remove('on');
  $$('.fam').forEach((x, i) => x.classList.toggle('on', i === 0));
  applyFilter();
});
$('#btn-invert').addEventListener('click', e => {
  const html = document.documentElement;
  const next = html.dataset.theme === 'dark' ? 'light' : 'dark';
  html.dataset.theme = next;
  e.currentTarget.classList.toggle('on', next === 'light');
  toast(next === 'light' ? 'Light palette' : 'Dark palette');
});
function setSpeed(r) {
  if (!document.getAnimations) return;
  document.getAnimations().forEach(a => { try { a.playbackRate = r; } catch (e) {} });
}
function syncSpeed() { if (slow) requestAnimationFrame(() => setSpeed(.45)); }
$('#btn-slow').addEventListener('click', e => {
  slow = !slow;
  e.currentTarget.classList.toggle('on', slow);
  setSpeed(slow ? .45 : 1);
  toast(slow ? '0.45× motion' : 'Normal speed');
});
$('#btn-replay').addEventListener('click', () => {
  $$('.card').forEach(c => {
    const slot = c.querySelector('[data-slot]');
    if (!slot || !slot.dataset.done) return;
    const v = BY_ID[c.dataset.id];
    slot.innerHTML = build(v, v.demo, false).html;
  });
  syncSpeed();
  toast('Replayed');
});

/* -------------------------------------------------------------- grid click */
grid.addEventListener('click', e => {
  const favBtn = e.target.closest('[data-fav]');
  if (favBtn) { e.stopPropagation(); toggleFav(favBtn.closest('.card').dataset.id); return; }
  const card = e.target.closest('.card'); if (!card) return;
  openModal(card.dataset.id);
});
grid.addEventListener('keydown', e => {
  if (e.key !== 'Enter' && e.key !== ' ') return;
  const card = e.target.closest('.card'); if (!card) return;
  e.preventDefault(); openModal(card.dataset.id);
});

/* ------------------------------------------------------------------ modal */
const modal = $('#modal'), mStage = $('#m-stage');
let mStyle = null;

function openModal(id, pct) {
  const v = BY_ID[id]; if (!v) return;
  current = v; currentPct = pct === undefined ? v.demo : pct;
  $('#m-index').textContent = v.id + ' · ' + v.label + ' family · ' + (BAKED[v.fam] ? 'geometry baked' : 'live --p');
  $('#m-name').textContent = v.name;
  $('#m-desc').textContent = v.desc;
  $('#m-val').value = Math.round(currentPct);
  $('#m-val-out').textContent = Math.round(currentPct) + '%';
  $('#m-fav').classList.toggle('on', isFav(v.id));
  $('#m-fav').textContent = isFav(v.id) ? '★ Favourited' : '☆ Favourite';
  mountModal(currentPct, true);
  const fam = FAMILIES.find(f => f.id === v.fam);
  const built = BUILDERS[v.fam](v.o, { cls: v.cls, uid: v.uid, pct: currentPct });
  const nodes = (built.html.match(/<[a-zA-Z]/g) || []).length;
  const anims = Array.from(new Set((built.css.match(/sc[A-Z][\w]*/g) || []))).length;
  const row = (k, val) => `<div><dt>${k}</dt><dd>${val}</dd></div>`;
  $('#m-spec').innerHTML =
    row('Family', fam.label + ' — ' + fam.note) +
    row('Drive', BAKED[v.fam] ? 'rebuild per value' : 'live · one custom property') +
    row('Nodes', nodes + ' svg elements') +
    row('Motion', anims + ' keyframe hooks') +
    row('Hover', /:hover/.test(built.css) ? 'yes — inspect & try it' : 'static') +
    row('Export', (snippet(v, currentPct).length / 1024).toFixed(1) + ' kb html+css');
  updateCode();
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  setTimeout(() => $('#m-copy').focus(), 60);
}
function closeModal() {
  modal.hidden = true; document.body.style.overflow = '';
  const card = document.querySelector(`.card[data-id="${current?.id}"]`);
  if (card) card.focus({ preventScroll: true });
}
function mountModal(pct, animate) {
  const cls = current.cls + '-m', uid = current.uid + 'm';
  const out = BUILDERS[current.fam](current.o, { cls, uid, pct });
  const cssText = animate ? out.css : out.css.replace(/animation:[^;}]*(;|})/g, (m, g) => g);
  if (!mStyle) { mStyle = document.createElement('style'); mStyle.id = 'modal-style'; document.head.appendChild(mStyle); }
  mStyle.textContent = '\n/* inspector */\n' + cssText;
  mStage.innerHTML = out.html;
  currentPct = pct;
  syncSpeed();
}
function updateValue(pct, animate) {
  $('#m-val').value = Math.round(pct);
  $('#m-val-out').textContent = Math.round(pct) + '%';
  if (BAKED[current.fam]) { mountModal(pct, !!animate); updateCode(); return; }
  const el = mStage.querySelector('.sc-ind');
  if (el) {
    el.style.setProperty('--p', pct);
    const t = el.querySelector('text.val');
    if (t && !t.querySelector('tspan')) t.textContent = num(pct, current.o.dec || 0, current.o.suf === undefined ? '%' : current.o.suf);
    const bub = el.querySelector('.bub text');
    if (bub) bub.textContent = num(pct, current.o.dec || 0, '');
  }
  currentPct = pct;
  updateCode();
}
function updateCode() {
  if (!current) return;
  const code = currentTab === 'html' ? snippet(current, currentPct) : fullFile(current, currentPct);
  $('#m-code').firstElementChild.innerHTML = hl(code);
  $('#m-meta').textContent = (code.length / 1024).toFixed(1) + ' kb · ' + current.id + ' · value ' + Math.round(currentPct) + '%';
  $('#m-code').dataset.raw = code;
}

$('#m-val').addEventListener('input', e => updateValue(+e.target.value, false));
$('#m-replay').addEventListener('click', () => { mountModal(currentPct, true); toast('Replayed'); });
$('#m-rand').addEventListener('click', () => updateValue(Math.round(8 + Math.random() * 88), true));
$('#m-fav').addEventListener('click', () => toggleFav(current.id));
$$('.tab').forEach(t => t.addEventListener('click', () => {
  currentTab = t.dataset.tab;
  $$('.tab').forEach(x => x.classList.toggle('on', x === t));
  updateCode();
}));
modal.addEventListener('click', e => { if (e.target.closest('[data-close]')) closeModal(); });
$('#m-copy').addEventListener('click', async () => {
  const text = $('#m-code').dataset.raw || '';
  try {
    if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(text);
    else throw new Error('no clipboard api');
    toast('Copied ' + current.id + ' to clipboard');
  } catch (err) {
    const ta = document.createElement('textarea');
    ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select();
    let ok = false; try { ok = document.execCommand('copy'); } catch (e2) {}
    ta.remove();
    toast(ok ? 'Copied ' + current.id : 'Select the code and copy manually');
  }
});
$('#m-download').addEventListener('click', () => {
  const text = fullFile(current, currentPct);
  const blob = new Blob([text], { type: 'text/html' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'halfarc-' + current.id.toLowerCase() + '-' + current.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '.html';
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 4000);
  toast('Downloaded ' + current.id);
});

/* ------------------------------------------------------------------ toast */
let toastT;
function toast(msg) {
  const t = $('#toast'); t.textContent = msg; t.classList.add('on');
  clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('on'), 1900);
}

/* --------------------------------------------------------------- keyboard */
document.addEventListener('keydown', e => {
  const typing = /input|textarea/i.test(document.activeElement?.tagName || '');
  if (e.key === '/' && !typing) { e.preventDefault(); $('#q').focus(); $('#q').select(); }
  if (e.key === 'Escape') { if (!modal.hidden) closeModal(); else if (typing) document.activeElement.blur(); }
  if (modal.hidden) return;
  if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
    e.preventDefault();
    const step = e.key === 'ArrowRight' ? 1 : -1;
    let i = VARIANTS.findIndex(v => v.id === current.id) + step;
    if (i < 0) i = VARIANTS.length - 1;
    if (i >= VARIANTS.length) i = 0;
    openModal(VARIANTS[i].id);
  }
  if ((e.key === 'c' || e.key === 'C') && !typing) { e.preventDefault(); $('#m-copy').click(); }
});

/* ------------------------------------------------------------------- boot */
updateFavCount();
applyFilter();
$('#btn-fav').classList.remove('on');
setTimeout(() => { $$('.card').slice(0, 12).forEach(fill); }, 30);
window.SC_APP = { VARIANTS, build, snippet, fullFile, openModal };
})();
