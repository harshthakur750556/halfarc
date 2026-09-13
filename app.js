/* ============================================================================
   HALFARC — Catalogue & Gallery Application
   84 Component Groups · 17,640 Animated Monochrome Variants
   ========================================================================== */
(function () {
'use strict';
if (typeof document === 'undefined') return;

const { BUILDERS, BAKED, SPECS, FAMILIES, UTIL } = window.SC || {};
const { GROUPS, CATEGORIES, getGroup, getVariant, renderThumbnail, SUB_FAMILIES } = window.HA_CATALOG || {};

const $ = s => document.querySelector(s);
const $$ = s => Array.from(document.querySelectorAll(s));
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

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
const FKEY = 'halfarc.favourites.v2';
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
  if (modalCurrent && modalCurrent.id === id) {
    $('#m-fav').classList.toggle('on', isFav(id));
    $('#m-fav').textContent = isFav(id) ? '★ Favourited' : '☆ Favourite';
  }
}
function updateFavCount() {
  $('#fav-count').textContent = FAVS.size;
  $('#btn-fav').classList.toggle('on', onlyFav && FAVS.size >= 0);
}

/* ------------------------------------------------------------------- toast */
let toastT;
function toast(msg) {
  const t = $('#toast'); t.textContent = msg; t.classList.add('on');
  clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('on'), 1900);
}

/* ------------------------------------------------------------------- state */
let currentView = 'catalog'; // 'catalog' | 'group'
let currentGroupId = null;
let currentGroup = null;
let activeCat = 'all';
let activeFam = 'all';
let query = '';
let onlyFav = false;
let slow = false;

let modalCurrent = null;
let modalCurrentIndex = 0;
let modalPct = 68;
let modalTab = 'html';

const styleEl = document.createElement('style');
styleEl.id = 'ha-runtime-styles';
document.head.appendChild(styleEl);

/* --------------------------------------------------------- speed / motion */
function setSpeed(r) {
  if (!document.getAnimations) return;
  document.getAnimations().forEach(a => { try { a.playbackRate = r; } catch (e) {} });
}
function syncSpeed() { if (slow) requestAnimationFrame(() => setSpeed(.45)); }

/* --------------------------------------------------------- lazy observer */
const io = new IntersectionObserver(entries => {
  entries.forEach(en => {
    const el = en.target;
    if (en.isIntersecting) {
      if (el.classList.contains('group-card')) fillGroupCard(el);
      else if (el.classList.contains('card')) fillVariantCard(el);
      el.querySelector('.stage')?.classList.remove('sc-paused');
    } else {
      el.querySelector('.stage')?.classList.add('sc-paused');
    }
  });
}, { rootMargin: '280px 0px' });

/* -------------------------------------------------------------------------
   CATALOGUE HOMEPAGE VIEW (84 Groups)
   ----------------------------------------------------------------------- */
function renderCategoryRail() {
  const rail = $('#cat-rail');
  rail.innerHTML = CATEGORIES.map(c => 
    `<button class="cat-pill${c.id === activeCat ? ' on' : ''}" data-cat="${c.id}" title="${c.note}">${c.label} <b>${c.count}</b></button>`
  ).join('');

  rail.addEventListener('click', e => {
    const b = e.target.closest('.cat-pill');
    if (!b) return;
    activeCat = b.dataset.cat;
    $$('.cat-pill').forEach(x => x.classList.toggle('on', x === b));
    applyCatalogFilter();
  });
}

function renderGroupCards() {
  const grid = $('#grid-groups');
  grid.innerHTML = GROUPS.map(g => `
    <article class="group-card" data-id="${g.id}" data-cat="${g.cat}" data-search="${(g.idx + ' ' + g.name + ' ' + g.catLabel + ' ' + g.desc).toLowerCase()}" tabindex="0" role="button" aria-label="${g.name}">
      <div class="stage"><div class="ha-slot" data-gid="${g.id}"></div></div>
      <div class="group-body">
        <div class="group-meta">
          <span class="group-idx">${g.idx}</span>
          <span class="cat-badge">${g.catLabel}</span>
        </div>
        <h3>${g.name}</h3>
        <p class="group-desc">${g.desc}</p>
        <div class="group-foot">
          <span class="group-count">${g.count} variants</span>
          <span class="group-cta">Explore →</span>
        </div>
      </div>
    </article>
  `).join('');

  $$('.group-card').forEach(c => io.observe(c));
}

function fillGroupCard(card) {
  const slot = card.querySelector('.ha-slot');
  if (!slot || slot.dataset.done) return;
  const gid = slot.dataset.gid;
  slot.innerHTML = renderThumbnail(gid, 68);
  slot.dataset.done = '1';
  syncSpeed();
}

function applyCatalogFilter() {
  const q = query.trim().toLowerCase();
  let shown = 0;
  $$('.group-card').forEach(c => {
    const okCat = activeCat === 'all' || c.dataset.cat === activeCat;
    const okQ = !q || c.dataset.search.includes(q) || q.split(/\s+/).every(t => c.dataset.search.includes(t));
    const vis = okCat && okQ;
    c.style.display = vis ? '' : 'none';
    if (vis) shown++;
  });

  $('#empty').hidden = shown !== 0;
  $('#status').textContent = shown + (shown === 1 ? ' component group' : ' component groups') +
    (activeCat !== 'all' ? ' · ' + CATEGORIES.find(c => c.id === activeCat)?.label : '') +
    (q ? ' · “' + query.trim() + '”' : '');
  $('#hint').textContent = 'Click any group card to explore its 200+ variants & inspect code';
}

/* -------------------------------------------------------------------------
   GROUP VARIANTS VIEW (210 Variants)
   ----------------------------------------------------------------------- */
function showGroupView(gid) {
  const grp = getGroup(gid);
  if (!grp) { showCatalogView(); return; }

  currentView = 'group';
  currentGroupId = gid;
  currentGroup = grp;
  activeFam = 'all';
  query = '';
  $('#q').value = '';

  $('#app').dataset.view = 'group';
  $('#view-catalog').hidden = true;
  $('#view-group').hidden = false;
  $('#cat-rail').style.display = 'none';

  // Render Group Hero Header
  const hero = $('#group-hero');
  hero.innerHTML = `
    <div class="nav-crumb">
      <button class="btn-back" id="btn-back">← Back to Catalogue</button>
      <span class="crumb-sep">/</span>
      <span>${grp.catLabel}</span>
      <span class="crumb-sep">/</span>
      <span class="crumb-cur">${grp.name}</span>
    </div>
    <div class="group-hero-main">
      <div>
        <div class="group-hero-title">
          <h2>${grp.name}</h2>
          <span class="group-badge">${grp.count} VARIANTS</span>
        </div>
        <p class="group-hero-desc">${grp.desc}</p>
      </div>
    </div>
  `;

  $('#btn-back').addEventListener('click', () => {
    window.location.hash = '#/';
  });

  // Render Sub-Family Rail
  const famRail = $('#families');
  let fams = [];
  if (gid === 'semi-circle-indicator' && window.SC && window.SC.FAMILIES) {
    fams = window.SC.FAMILIES.map(f => ({ id: f.label, label: f.label, count: 7 }));
  } else {
    fams = SUB_FAMILIES.map(f => ({ id: f, label: f, count: 14 }));
  }

  famRail.innerHTML = `<button class="fam on" data-fam="all">All <b>${grp.count}</b></button>` +
    fams.map(f => `<button class="fam" data-fam="${f.id}">${f.label} <b>${f.count}</b></button>`).join('');

  famRail.onclick = (e) => {
    const b = e.target.closest('.fam');
    if (!b) return;
    activeFam = b.dataset.fam;
    $$('.fam').forEach(x => x.classList.toggle('on', x === b));
    applyVariantFilter();
  };

  // Render Variant Cards Stubs (210 variants)
  const grid = $('#grid-variants');
  const items = [];
  for (let i = 0; i < grp.count; i++) {
    let fam = '';
    let name = '';
    let id = '';
    if (gid === 'semi-circle-indicator' && window.SC && window.SC.SPECS) {
      const s = window.SC.SPECS[i];
      fam = window.SC.FAMILIES.find(f => f.id === s.f)?.label || 'Indicator';
      name = s.n;
      id = 'V-' + String(i + 1).padStart(3, '0');
    } else {
      const famIdx = Math.floor(i / 14) % SUB_FAMILIES.length;
      fam = SUB_FAMILIES[famIdx];
      id = `${grp.prefix}-${String(i + 1).padStart(3, '0')}`;
      name = `${grp.name.split(' ')[0]} ${fam}`;
    }

    items.push(`
      <article class="card${isFav(id) ? ' fav' : ''}" data-id="${id}" data-gid="${grp.id}" data-idx="${i}" data-vidx="${i}" data-fam="${fam}" data-search="${(id + ' ' + name + ' ' + fam).toLowerCase()}" tabindex="0" role="button" aria-label="${id} ${name}">
        <button class="favmark${isFav(id) ? ' on' : ''}" aria-label="Favourite" data-fav>
          <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 2.6 12.2 7l4.8.7-3.5 3.4.8 4.8L10 13.6 5.7 15.9l.8-4.8L3 7.7 7.8 7z" fill="${isFav(id) ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>
        </button>
        <div class="stage"><div class="var-slot" data-vidx="${i}"></div></div>
        <div class="card-body">
          <div><span class="famtag">${fam}</span><h3>${name}</h3></div>
          <span class="id">${id}</span>
        </div>
      </article>
    `);
  }
  grid.innerHTML = items.join('');

  $$('#grid-variants .card').forEach(c => io.observe(c));

  // Pre-fill first visible cards immediately
  $$('#grid-variants .card').slice(0, 24).forEach(fillVariantCard);

  applyVariantFilter();
  if (typeof window.scrollTo === 'function') window.scrollTo({ top: 0, behavior: 'smooth' });
}

function fillVariantCard(card) {
  const slot = card.querySelector('.var-slot');
  if (!slot || slot.dataset.done) return;
  const gid = card.dataset.gid;
  const rawIdx = card.dataset.idx ?? card.dataset.vidx ?? slot.dataset.vidx;
  const vidx = parseInt(rawIdx, 10);
  if (isNaN(vidx)) return;

  const v = getVariant(gid, vidx, 68);
  if (!v) return;

  slot.innerHTML = v.html;
  slot.dataset.done = '1';
  syncSpeed();
}

function applyVariantFilter() {
  const q = query.trim().toLowerCase();
  let shown = 0;
  $$('#grid-variants .card').forEach(c => {
    const okFam = activeFam === 'all' || c.dataset.fam === activeFam;
    const okQ = !q || c.dataset.search.includes(q) || q.split(/\s+/).every(t => c.dataset.search.includes(t));
    const okFav = !onlyFav || isFav(c.dataset.id);
    const vis = okFam && okQ && okFav;
    c.style.display = vis ? '' : 'none';
    if (vis) shown++;
  });

  $('#empty').hidden = shown !== 0;
  $('#status').textContent = shown + (shown === 1 ? ' variant' : ' variants') +
    (activeFam !== 'all' ? ' · ' + activeFam : '') +
    (onlyFav ? ' · favourites' : '') +
    (q ? ' · “' + query.trim() + '”' : '');
  $('#hint').textContent = 'Click any card to inspect, customize & copy code';
}

/* -------------------------------------------------------------------------
   CATALOGUE HOMEPAGE VIEW SWITCH
   ----------------------------------------------------------------------- */
function showCatalogView() {
  currentView = 'catalog';
  currentGroupId = null;
  currentGroup = null;

  $('#app').dataset.view = 'catalog';
  $('#view-catalog').hidden = false;
  $('#view-group').hidden = true;
  $('#cat-rail').style.display = '';

  applyCatalogFilter();
  if (typeof window.scrollTo === 'function') window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* -------------------------------------------------------------------------
   HASH ROUTER
   ----------------------------------------------------------------------- */
function handleRoute() {
  const hash = window.location.hash || '';
  if (hash.startsWith('#/group/')) {
    const gid = hash.slice('#/group/'.length).trim();
    showGroupView(gid);
  } else {
    showCatalogView();
  }
}

window.addEventListener('hashchange', handleRoute);

/* -------------------------------------------------------------------------
   SEARCH & FILTERS
   ----------------------------------------------------------------------- */
$('#q').addEventListener('input', e => {
  query = e.target.value;
  if (currentView === 'catalog') applyCatalogFilter();
  else applyVariantFilter();
});

$('#btn-fav').addEventListener('click', () => {
  onlyFav = !onlyFav;
  $('#btn-fav').classList.toggle('on', onlyFav);
  if (currentView === 'catalog') {
    toast(onlyFav ? 'Filter: Groups with favourites' : 'All groups');
  } else {
    applyVariantFilter();
    if (onlyFav && !FAVS.size) toast('No favourites yet — tap the star on a card');
  }
});

$('#btn-reset').addEventListener('click', () => {
  query = '';
  $('#q').value = '';
  onlyFav = false;
  $('#btn-fav').classList.remove('on');
  if (currentView === 'catalog') {
    activeCat = 'all';
    $$('.cat-pill').forEach((x, i) => x.classList.toggle('on', i === 0));
    applyCatalogFilter();
  } else {
    activeFam = 'all';
    $$('.fam').forEach((x, i) => x.classList.toggle('on', i === 0));
    applyVariantFilter();
  }
});

$('#btn-invert').addEventListener('click', e => {
  const html = document.documentElement;
  const next = html.dataset.theme === 'dark' ? 'light' : 'dark';
  html.dataset.theme = next;
  e.currentTarget.classList.toggle('on', next === 'light');
  toast(next === 'light' ? 'Light palette' : 'Dark palette');
});

$('#btn-slow').addEventListener('click', e => {
  slow = !slow;
  e.currentTarget.classList.toggle('on', slow);
  setSpeed(slow ? .45 : 1);
  toast(slow ? '0.45× motion' : 'Normal speed');
});

$('#btn-replay').addEventListener('click', () => {
  if (currentView === 'catalog') {
    $$('.group-card').forEach(c => {
      const slot = c.querySelector('.ha-slot');
      if (slot && slot.dataset.done) {
        slot.innerHTML = renderThumbnail(slot.dataset.gid, 68);
      }
    });
  } else {
    $$('#grid-variants .card').forEach(c => {
      const slot = c.querySelector('.var-slot');
      if (slot && slot.dataset.done) {
        const idx = parseInt(c.dataset.idx ?? c.dataset.vidx, 10);
        const v = getVariant(c.dataset.gid, idx, 68);
        if (v) slot.innerHTML = v.html;
      }
    });
  }
  syncSpeed();
  toast('Replayed entrance animations');
});

$('#brand-home').addEventListener('click', () => {
  window.location.hash = '#/';
});

/* -------------------------------------------------------------------------
   GRID CLICKS (Navigation into Group or Inspector Modal)
   ----------------------------------------------------------------------- */
// Homepage group card click
$('#grid-groups').addEventListener('click', e => {
  const card = e.target.closest('.group-card');
  if (!card) return;
  const gid = card.dataset.id;
  window.location.hash = `#/group/${gid}`;
});

$('#grid-groups').addEventListener('keydown', e => {
  if (e.key !== 'Enter' && e.key !== ' ') return;
  const card = e.target.closest('.group-card');
  if (!card) return;
  e.preventDefault();
  window.location.hash = `#/group/${card.dataset.id}`;
});

// Variant card click -> Open Inspector Modal
$('#grid-variants').addEventListener('click', e => {
  const favBtn = e.target.closest('[data-fav]');
  if (favBtn) {
    e.stopPropagation();
    toggleFav(favBtn.closest('.card').dataset.id);
    return;
  }
  const card = e.target.closest('.card');
  if (!card) return;
  const idx = parseInt(card.dataset.idx ?? card.dataset.vidx, 10);
  if (isNaN(idx)) return;
  openInspectorModal(card.dataset.gid, idx);
});

$('#grid-variants').addEventListener('keydown', e => {
  if (e.key !== 'Enter' && e.key !== ' ') return;
  const card = e.target.closest('.card');
  if (!card) return;
  e.preventDefault();
  const idx = parseInt(card.dataset.idx ?? card.dataset.vidx, 10);
  if (isNaN(idx)) return;
  openInspectorModal(card.dataset.gid, idx);
});

/* -------------------------------------------------------------------------
   INSPECTOR MODAL
   ----------------------------------------------------------------------- */
const modal = $('#modal');
const mStage = $('#m-stage');
let mStyle = null;

function openInspectorModal(gid, vidx, pct) {
  currentGroupId = gid;
  currentGroup = getGroup(gid);

  const v = getVariant(gid, vidx, pct === undefined ? modalPct : pct);
  if (!v) return;

  modalCurrent = v;
  modalCurrentIndex = vidx;
  modalPct = pct === undefined ? (v.demoPct || 68) : pct;

  $('#m-index').textContent = `${v.id} · ${v.fam} · Group: ${currentGroup?.name || 'HALFARC'}`;
  $('#m-name').textContent = v.name;
  $('#m-desc').textContent = v.desc;
  $('#m-val').value = Math.round(modalPct);
  $('#m-val-out').textContent = Math.round(modalPct) + '%';
  $('#m-fav').classList.toggle('on', isFav(v.id));
  $('#m-fav').textContent = isFav(v.id) ? '★ Favourited' : '☆ Favourite';

  mountModalStage(modalPct, true);

  const row = (k, val) => `<div><dt>${k}</dt><dd>${val}</dd></div>`;
  $('#m-spec').innerHTML =
    row('Group', currentGroup ? currentGroup.name : 'Monochrome') +
    row('Family', v.fam) +
    row('Drive Contract', 'Live custom property (--p)') +
    row('Motion', 'Keyframe accelerated, GPU composited') +
    row('Dependencies', 'Zero (Self-contained HTML+CSS)') +
    row('Export Size', (v.snippet.length / 1024).toFixed(1) + ' KB snippet');

  updateModalCode();
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  setTimeout(() => $('#m-copy').focus(), 60);
}

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = '';
}

function mountModalStage(pct, animate) {
  if (!modalCurrent) return;
  const v = getVariant(currentGroupId, modalCurrentIndex, pct);
  if (!v) return;

  modalCurrent = v;
  if (!mStyle) {
    mStyle = document.createElement('style');
    mStyle.id = 'inspector-style';
    document.head.appendChild(mStyle);
  }
  mStyle.textContent = '\n/* Inspector Scoped Styles */\n' + v.css;
  mStage.innerHTML = v.html;
  syncSpeed();
}

function updateModalValue(pct) {
  modalPct = pct;
  $('#m-val').value = Math.round(pct);
  $('#m-val-out').textContent = Math.round(pct) + '%';

  // Live update CSS property --p on root stage container
  const comp = mStage.querySelector('.ha-comp') || mStage.querySelector('.sc-ind');
  if (comp) comp.style.setProperty('--p', pct);

  mountModalStage(pct, false);
  updateModalCode();
}

function updateModalCode() {
  if (!modalCurrent) return;
  const code = modalTab === 'html' ? modalCurrent.snippet : modalCurrent.fullFile;
  $('#m-code').firstElementChild.innerHTML = hl(code);
  $('#m-meta').textContent = (code.length / 1024).toFixed(1) + ' KB · ' + modalCurrent.id + ' · value ' + Math.round(modalPct) + '%';
  $('#m-code').dataset.raw = code;
}

$('#m-val').addEventListener('input', e => updateModalValue(+e.target.value));
$('#m-replay').addEventListener('click', () => { mountModalStage(modalPct, true); toast('Replayed'); });
$('#m-rand').addEventListener('click', () => updateModalValue(Math.round(12 + Math.random() * 80)));
$('#m-fav').addEventListener('click', () => {
  if (modalCurrent) toggleFav(modalCurrent.id);
});

$$('.tab').forEach(t => t.addEventListener('click', () => {
  modalTab = t.dataset.tab;
  $$('.tab').forEach(x => x.classList.toggle('on', x === t));
  updateModalCode();
}));

modal.addEventListener('click', e => {
  if (e.target.closest('[data-close]')) closeModal();
});

$('#m-copy').addEventListener('click', async () => {
  const text = $('#m-code').dataset.raw || '';
  try {
    if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(text);
    else throw new Error('no clipboard api');
    toast('Copied ' + modalCurrent.id + ' to clipboard');
  } catch (err) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    let ok = false;
    try { ok = document.execCommand('copy'); } catch (e2) {}
    ta.remove();
    toast(ok ? 'Copied ' + modalCurrent.id : 'Please select and copy manually');
  }
});

$('#m-download').addEventListener('click', () => {
  if (!modalCurrent) return;
  const text = modalCurrent.fullFile;
  const blob = new Blob([text], { type: 'text/html' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'halfarc-' + modalCurrent.id.toLowerCase() + '.html';
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 4000);
  toast('Downloaded ' + modalCurrent.id + '.html');
});

/* -------------------------------------------------------------------------
   KEYBOARD SHORTCUTS
   ----------------------------------------------------------------------- */
document.addEventListener('keydown', e => {
  const typing = /input|textarea/i.test(document.activeElement?.tagName || '');
  if (e.key === '/' && !typing) {
    e.preventDefault();
    $('#q').focus();
    $('#q').select();
  }
  if (e.key === 'Escape') {
    if (!modal.hidden) closeModal();
    else if (typing) document.activeElement.blur();
  }
  if (!modal.hidden) {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      const step = e.key === 'ArrowRight' ? 1 : -1;
      let nextIdx = modalCurrentIndex + step;
      const count = currentGroup ? currentGroup.count : 210;
      if (nextIdx < 0) nextIdx = count - 1;
      if (nextIdx >= count) nextIdx = 0;
      openInspectorModal(currentGroupId, nextIdx, modalPct);
    }
    if ((e.key === 'c' || e.key === 'C') && !typing) {
      e.preventDefault();
      $('#m-copy').click();
    }
  }
});

/* -------------------------------------------------------------------------
   BOOTSTRAP
   ----------------------------------------------------------------------- */
renderCategoryRail();
renderGroupCards();
updateFavCount();
handleRoute();

// Pre-fill initial visible cards
setTimeout(() => {
  $$('.group-card').slice(0, 24).forEach(fillGroupCard);
}, 40);

window.HALFARC = {
  GROUPS,
  CATEGORIES,
  getGroup,
  getVariant,
  showGroupView,
  showCatalogView
};

})();
