/* ============================================================================
   HALFARC — Global Component Catalogue & Generator Engine
   84 Component Groups · 17,640 Animated Monochrome Variants
   ========================================================================== */
(function(global) {
'use strict';

const CATEGORIES = [
  { id: 'all', label: 'All Catalogue', count: 84, note: '84 Component Groups · 17,640 Variants' },
  { id: 'indicators', label: 'Indicators & Gauges', count: 10, note: 'Arcs, circular rings, bars & dial scales' },
  { id: 'controls', label: 'Controls & Inputs', count: 10, note: 'Knobs, toggles, tactile buttons & faders' },
  { id: 'audio', label: 'Audio & Signal', count: 10, note: 'Equalizers, waveforms, oscilloscopes & VU meters' },
  { id: 'feedback', label: 'Feedback & Status', count: 10, note: 'Spinners, beacons, glitches, shimmers & matrix rain' },
  { id: 'navigation', label: 'Navigation & Steps', count: 10, note: 'Breadcrumbs, paginations, wizards & tree views' },
  { id: 'data', label: 'Data Vis & Charts', count: 10, note: 'Sparklines, mini-bars, heatmaps & candlestick charts' },
  { id: 'forms', label: 'Form Controls', count: 10, note: 'Inputs, search bars, PIN boxes & swatches' },
  { id: 'surfaces', label: 'HUD & Surfaces', count: 10, note: 'HUD bezels, cards, terminal windows & code boxes' },
  { id: 'media', label: 'Media & Utilities', count: 4, note: 'Keyboard caps, star ratings & media scrubbers' }
];

const SUB_FAMILIES = [
  "Hairline", "Segmented", "Dual Channel", "Tachometer", "Tick Calibrated",
  "Halo Glow", "Dashed Rail", "Center Hub", "Triple Stack", "Inset Channel",
  "Stepped Matrix", "Framed Bezel", "Monolithic Slab", "Micro Orbit", "Gradient Sweep"
];

const VARIANT_ARCHETYPES = [
  "Pure Minimal", "Fast Orbit", "Heavy Bold", "Rounded Soft", "Inverted Sweep",
  "Pulsing Ambient", "Marching Dashes", "Numeric Readout", "Staggered Arrival", "Glitched Micro",
  "High Density", "Broad Gauge", "Sub-Pixel Hairline", "Overdrive Peak"
];

const LABELS = ['SYS_INIT', 'EXECUTE', 'SYNC_LIVE', 'PULSE_CH', 'OVERRIDE', 'DEPLOY', 'CALIBRATE', 'RUN_CMD', 'STANDBY', 'ARMED', 'PURGE', 'ENGAGE', 'LINK_OK', 'RESET'];
const ICONS = ['▶', '⚡', '◉', '◈', '▲', '◆', '⬡', '✦', '⎋', '⌁', '⏻', '⟲', '⤹', '⌖'];
const CODES = ['0x1F', '0x2A', '0x3C', '0x4E', '0x5D', '0x6B', '0x77', '0x8A', '0x99', '0xA4', '0xB8', '0xC2', '0xDE', '0xFF'];

const SHARED_BASE_CSS = `
/* Monochrome UI Component Core Variables */
.ha-comp {
  --ink: #eaeaea;
  --line: rgba(255,255,255,.09);
  --line2: rgba(255,255,255,.16);
  --panel: #121212;
  --panel2: #171717;
  --ink2: #a3a3a3;
  --ink3: #6b6b6b;
  --ink4: #454545;
  --track: rgba(255,255,255,.085);
  --sc-bg: #0a0a0a;
  --p: 68;
  position: relative;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
}
html[data-theme="light"] .ha-comp {
  --ink: #141414;
  --line: rgba(0,0,0,.10);
  --line2: rgba(0,0,0,.20);
  --panel: #ffffff;
  --panel2: #f7f7f6;
  --ink2: #4d4d4d;
  --ink3: #828282;
  --ink4: #b9b9b9;
  --track: rgba(0,0,0,.09);
  --sc-bg: #f4f4f3;
}
@keyframes haSpin { to { transform: rotate(360deg); } }
@keyframes haSpinRev { to { transform: rotate(-360deg); } }
@keyframes haPulse { 0%,100% { opacity: .35; transform: scale(0.97); } 50% { opacity: 1; transform: scale(1.03); } }
@keyframes haBreathe { 0%,100% { opacity: .55; } 50% { opacity: 1; } }
@keyframes haMarch { to { stroke-dashoffset: -40px; } }
@keyframes haShimmer { 0% { transform: translateX(-140%); } 100% { transform: translateX(140%); } }
@keyframes haScan { 0% { transform: translateY(-30px); } 100% { transform: translateY(30px); } }
@keyframes haGlitch { 0%,100% { transform: translate(0); } 20% { transform: translate(-1.5px, 1px); } 40% { transform: translate(1.5px, -1px); } 60% { transform: translate(-1px, -0.5px); } 80% { transform: translate(1px, 1px); } }
@keyframes haBounce { 0%,100% { transform: scaleY(0.25); } 50% { transform: scaleY(1); } }
@keyframes haPing { 0% { transform: scale(0.6); opacity: 1; } 100% { transform: scale(1.8); opacity: 0; } }
@keyframes haBlink { 0%,100% { opacity: 1; } 50% { opacity: 0.12; } }
@keyframes haSweep { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }

.ha-spin { animation: haSpin 1.4s linear infinite; }
.ha-spin-rev { animation: haSpinRev 1.4s linear infinite; }
.ha-pulse { animation: haPulse 1.8s ease-in-out infinite; }
.ha-breathe { animation: haBreathe 2s ease-in-out infinite; }
.ha-march { animation: haMarch 1.2s linear infinite; }
.ha-shimmer { animation: haShimmer 2.4s infinite ease-in-out; }
.ha-scan { animation: haScan 2s infinite linear; }
.ha-glitch { animation: haGlitch 2.2s infinite steps(2); }
.ha-bounce { animation: haBounce 1.4s infinite ease-in-out; }
.ha-ping { animation: haPing 1.8s infinite cubic-bezier(0,0,0.2,1); }
.ha-blink { animation: haBlink 0.8s infinite; }
.ha-sweep { animation: haSweep 2.5s linear infinite; }
.ha-orbit-dot { animation: haSpin 2s linear infinite; }
.hud-frame { position: relative; padding: 10px; box-sizing: border-box; width: 100%; }
.hud-c { position: absolute; width: 6px; height: 6px; border-color: var(--ink); border-style: solid; }
.hud-c.tl { top: -1px; left: -1px; border-width: 1.5px 0 0 1.5px; }
.hud-c.tr { top: -1px; right: -1px; border-width: 1.5px 1.5px 0 0; }
.hud-c.bl { bottom: -1px; left: -1px; border-width: 0 0 1.5px 1.5px; }
.hud-c.br { bottom: -1px; right: -1px; border-width: 0 1.5px 1.5px 0; }
.hud-tag { font-family: ui-monospace, monospace; font-size: 8px; letter-spacing: .12em; color: var(--ink3); text-transform: uppercase; }
`;

function getFamProps(famIdx) {
  const f = Math.abs(famIdx || 0) % 15;
  return {
    isHairline: f === 0,
    isSegmented: f === 1,
    isDual: f === 2,
    isTach: f === 3,
    isCalibrated: f === 4,
    isHalo: f === 5,
    isDashed: f === 6,
    isHub: f === 7,
    isTriple: f === 8,
    isInset: f === 9,
    isMatrix: f === 10,
    isBezel: f === 11,
    isSlab: f === 12,
    isOrbit: f === 13,
    isGradient: f === 14,
    strokeW: f === 0 ? 1.0 : (f === 12 ? 3.4 : (f === 2 ? 1.2 : 2.0)),
    dashArray: f === 6 ? '4 3' : (f === 1 ? '6 4' : 'none'),
    haloStyle: f === 5 ? 'filter: drop-shadow(0 0 8px rgba(255,255,255,0.45));' : '',
    insetStyle: f === 9 ? 'box-shadow: inset 0 2px 6px rgba(0,0,0,0.8);' : '',
    radius: f === 12 ? '2px' : (f === 3 ? '4px' : '8px')
  };
}

function getArchProps(varIdx) {
  const a = Math.abs(varIdx || 0) % 14;
  return {
    isMinimal: a === 0,
    isFastOrbit: a === 1,
    isBold: a === 2,
    isRounded: a === 3,
    isInverted: a === 4,
    isPulsing: a === 5,
    isMarching: a === 6,
    isReadout: a === 7,
    isStaggered: a === 8,
    isGlitch: a === 9,
    isHighDensity: a === 10,
    isBroad: a === 11,
    isSubPixel: a === 12,
    isOverdrive: a === 13,
    label: LABELS[a],
    icon: ICONS[a],
    code: CODES[a],
    animClass: a === 5 ? 'ha-pulse' : (a === 9 ? 'ha-glitch' : (a === 12 ? 'ha-breathe' : (a === 13 ? 'ha-blink' : '')))
  };
}

function wrapContainer(fp, ap, innerHtml, width, cls) {
  const w = width || 210;
  const animCls = ap.animClass || '';
  const invertStyle = ap.isInverted ? 'background:var(--ink);color:var(--sc-bg);border-radius:6px;padding:8px;' : '';
  const frame = fp.isBezel ? `<div class="hud-frame" style="width:100%;max-width:${w}px;"><span class="hud-c tl"></span><span class="hud-c tr"></span><span class="hud-c bl"></span><span class="hud-c br"></span>${innerHtml}</div>` : innerHtml;
  const tag = ap.isReadout ? `<div class="hud-tag" style="margin-top:6px;display:flex;justify-content:space-between;width:100%;max-width:${w}px;"><span>${ap.code}</span><span>${ap.label}</span></div>` : '';
  const orbit = (fp.isOrbit || ap.isFastOrbit) ? `<div style="position:absolute;inset:0;pointer-events:none;display:flex;align-items:center;justify-content:center;"><div class="ha-orbit-dot" style="width:5px;height:5px;border-radius:50%;background:var(--ink);box-shadow:0 0 5px var(--ink);transform:rotate(0deg) translateX(36px);"></div></div>` : '';

  return `<div class="ha-comp ${cls} ${animCls}" style="--p:var(--p,68);width:100%;max-width:${w}px;position:relative;${fp.haloStyle}${fp.insetStyle}${invertStyle}">
    ${orbit}
    ${frame}
    ${tag}
  </div>`;
}
const GROUPS = [
  { id: 'semi-circle-indicator', name: 'Semi-Circular Scroll Indicators', cat: 'indicators', prefix: 'SCI', count: 210, desc: 'The signature precision semi-circle indicators driven by --p.' },
  { id: 'circular-gauges', name: 'Circular Progress Gauges & Rings', cat: 'indicators', prefix: 'CPG', count: 210, desc: 'Full 360° progress rings, tachometers, dial needles, and calibrated orbits.' },
  { id: 'linear-progress', name: 'Linear Progress Bars & Micro-Tracks', cat: 'indicators', prefix: 'LIN', count: 210, desc: 'Sleek horizontal tracks, laser scanning heads, hazard stripes, and LED rails.' },
  { id: 'step-progress', name: 'Step Progress Trackers & Workflow Steppers', cat: 'indicators', prefix: 'STP', count: 210, desc: 'Multi-stage node pipelines, connected circuits, and milestone beacons.' },
  { id: 'segmented-meters', name: 'Segmented Level Meters & Discrete Bars', cat: 'indicators', prefix: 'SEG', count: 210, desc: 'Discrete LED block columns, studio level ladders, and threshold bars.' },
  { id: 'battery-indicators', name: 'Battery & Power Level Cells', cat: 'indicators', prefix: 'BAT', count: 210, desc: 'Precision battery housings, charging bolt glyphs, cell stacks, and plasma cores.' },
  { id: 'signal-meters', name: 'Signal Strength & Connectivity Bars', cat: 'indicators', prefix: 'SIG', count: 210, desc: 'Ascending cellular bars, radial Wi-Fi arcs, antenna towers, and broadcast arrays.' },
  { id: 'speedometer-gauges', name: 'Speedometer & Tachometer Dials', cat: 'indicators', prefix: 'SPD', count: 210, desc: '240° and 270° sweeping needles, high-RPM redline zones, and digital odometers.' },
  { id: 'compass-rings', name: 'Compass Rings & Heading Reticles', cat: 'indicators', prefix: 'CMP', count: 210, desc: 'Azimuth bearing rings, navigation gyros, 360° degree rims, and military stars.' },
  { id: 'altimeter-scales', name: 'Vertical Altimeter & Depth Scales', cat: 'indicators', prefix: 'ALT', count: 210, desc: 'Vertical graduation tapes, rolling elevation carats, and depth meters.' },
  { id: 'rotary-knobs', name: 'Rotary Knobs & Potentiometer Dials', cat: 'controls', prefix: 'KNB', count: 210, desc: 'Tactile volume wheels, knurled metal rims, pointer notches, and detent encoders.' },
  { id: 'toggle-switches', name: 'Toggle Switches & Bistable Levers', cat: 'controls', prefix: 'TOG', count: 210, desc: 'Mechanical toggle levers, pill sliders, rocker plates, and status LEDs.' },
  { id: 'range-sliders', name: 'Range Sliders & Dual-Thumb Faders', cat: 'controls', prefix: 'SLD', count: 210, desc: 'Precision horizontal tracks, floating value bubbles, and dual-boundary thumbs.' },
  { id: 'push-buttons', name: 'Tactile Push Buttons & Micro-Capsules', cat: 'controls', prefix: 'BTN', count: 210, desc: 'Tactile press-down buttons, chamfered tactical triggers, and glowing borders.' },
  { id: 'segmented-controls', name: 'Segmented Tabs & Selector Bars', cat: 'controls', prefix: 'SGC', count: 210, desc: 'Sliding pill switchers, bordered modular blocks, and monospace rails.' },
  { id: 'radio-selectors', name: 'Radio Buttons & Precision Discs', cat: 'controls', prefix: 'RAD', count: 210, desc: 'Concentric target discs, animated inner pop dots, and diamond radios.' },
  { id: 'checkbox-states', name: 'Checkboxes & Multi-State Ticks', cat: 'controls', prefix: 'CHK', count: 210, desc: 'Cyber square checkboxes, animated drawing checkmarks, and indeterminate dashes.' },
  { id: 'icon-buttons', name: 'Icon Action Buttons & Tool Triggers', cat: 'controls', prefix: 'ICN', count: 210, desc: 'Square, round, and hex icon housings with hover crosshair frames.' },
  { id: 'split-buttons', name: 'Split Action Buttons & Drop Triggers', cat: 'controls', prefix: 'SPL', count: 210, desc: 'Dual-action split buttons, primary command + chevron drop triggers.' },
  { id: 'volume-faders', name: 'Vertical Studio Faders & Console Channels', cat: 'controls', prefix: 'FAD', count: 210, desc: 'Studio console faders, grip line thumbs, and decibel scales.' },
  { id: 'audio-equalizer', name: 'Audio Equalizers & Multi-Band Graphic Bars', cat: 'audio', prefix: 'AEE', count: 210, desc: '8, 16, and 32-band equalizer columns bouncing in organic rhythms.' },
  { id: 'waveform-monitors', name: 'Waveform Monitors & Audio Timeline Tracks', cat: 'audio', prefix: 'WFM', count: 210, desc: 'Symmetrical sound wave envelopes and scanning playhead needles.' },
  { id: 'oscilloscope-traces', name: 'Oscilloscope CRT Traces & Lissajous Curves', cat: 'audio', prefix: 'OSC', count: 210, desc: 'CRT oscilloscope traces, phosphor sine waves, and Lissajous loops.' },
  { id: 'vu-meters', name: 'Analog VU Meters & Decibel Gauges', cat: 'audio', prefix: 'VUM', count: 210, desc: 'Galvanometer needles, backlit dials, -20dB to +3dB scales, and peak LEDs.' },
  { id: 'bpm-metronomes', name: 'BPM Tappers & Metronome Needles', cat: 'audio', prefix: 'BPM', count: 210, desc: 'Inverted pendulum tempo arms, sliding counter-weights, and tap triggers.' },
  { id: 'spectrum-analyzers', name: 'Frequency Spectrum Ribbons & Cascades', cat: 'audio', prefix: 'SPC', count: 210, desc: 'FFT waterfall cascades, logarithmic bands, and filled ribbons.' },
  { id: 'radar-sweeps', name: 'Radar Sweeps & Sonar Pings', cat: 'audio', prefix: 'RDR', count: 210, desc: 'Rotating 360° radar beams, glowing phosphor blips, and sonar echo circles.' },
  { id: 'crosshair-reticles', name: 'Crosshair Reticles & Targeting Sights', cat: 'audio', prefix: 'RET', count: 210, desc: 'Tactical HUD reticles, sniper mil-dots, and locking brackets.' },
  { id: 'telemetry-hud', name: 'Telemetry HUDs & Flight Avionics', cat: 'audio', prefix: 'HUD', count: 210, desc: 'Fighter jet pitch ladders, artificial horizons, and flight vectors.' },
  { id: 'acoustics-visualizers', name: 'Acoustic Nodes & Audio Rings', cat: 'audio', prefix: 'ACS', count: 210, desc: 'Omnidirectional sound ripples, speaker cone excursions, and particle lattices.' },
  { id: 'loading-spinners', name: 'Loading Spinners & Gyro Orbiters', cat: 'feedback', prefix: 'SPN', count: 210, desc: 'Counter-rotating gyro rings, orbital bead satellites, and rotors.' },
  { id: 'pulse-beacons', name: 'Pulsing Status Beacons & Ping Nodes', cat: 'feedback', prefix: 'BCN', count: 210, desc: 'Concentric radiating ripples, glowing presence dots, and alive pulses.' },
  { id: 'skeleton-shimmers', name: 'Skeleton Loaders & Ghost Wireframes', cat: 'feedback', prefix: 'SKL', count: 210, desc: 'Ghost text lines, avatar plates, and card wireframes with scanning shimmer.' },
  { id: 'status-pills', name: 'Status Pill Badges & Live State Chips', cat: 'feedback', prefix: 'PIL', count: 210, desc: 'Monospaced status pills with live blinking status LEDs.' },
  { id: 'notification-dots', name: 'Notification Badges & Unread Counter Pips', cat: 'feedback', prefix: 'NOT', count: 210, desc: 'Bell badges, unread counter pills, and pinging corner dots.' },
  { id: 'glitch-elements', name: 'Cyber Glitch Decoders & Signal Faults', cat: 'feedback', prefix: 'GLT', count: 210, desc: 'Fractured cyber typography, horizontal scanline offsets, and jitter decoders.' },
  { id: 'matrix-streams', name: 'Matrix Rain & Digital Bit Streams', cat: 'feedback', prefix: 'MTX', count: 210, desc: 'Cascading columns of binary bits and hex bytes raining in rhythms.' },
  { id: 'shimmer-bars', name: 'Indeterminate Progress & Laser Sweepers', cat: 'feedback', prefix: 'SHM', count: 210, desc: 'Endless scanning lasers, sweeping frosted highlights, and travelling dashes.' },
  { id: 'banner-alerts', name: 'System Alert Banners & Callout Strips', cat: 'feedback', prefix: 'BNR', count: 210, desc: 'Technical system alert callouts, warning brackets, and dismiss crosses.' },
  { id: 'toast-popups', name: 'Toast Notifications & Console Snackbars', cat: 'feedback', prefix: 'TST', count: 210, desc: 'Floating notification snackbars with timeout countdown progress hairlines.' },
  { id: 'breadcrumb-navs', name: 'Breadcrumb Paths & Chevron Hierarchies', cat: 'navigation', prefix: 'BRD', count: 210, desc: 'Stepped path breadcrumbs, slash/chevron delimiters, and active node glows.' },
  { id: 'pagination-bars', name: 'Pagination Controls & Page Number Strips', cat: 'navigation', prefix: 'PGN', count: 210, desc: 'Number strips, active page boxes, ellipsis jumpers, and micro arrow buttons.' },
  { id: 'step-wizards', name: 'Multi-Step Wizards & Milestone Ladders', cat: 'navigation', prefix: 'WZD', count: 210, desc: 'Linear multi-step wizards, completed check circles, and active flags.' },
  { id: 'tab-navigators', name: 'Tab Navigators & Underline Sliders', cat: 'navigation', prefix: 'TAB', count: 210, desc: 'Top tab rails, sliding underline track indicators, and pill tab docks.' },
  { id: 'tree-views', name: 'Hierarchical Tree Views & Branch Nodes', cat: 'navigation', prefix: 'TRE', count: 210, desc: 'Collapsible folder trees, directory branch lines, and document glyphs.' },
  { id: 'floating-action-menus', name: 'Floating Action Hubs & Radial Docks', cat: 'navigation', prefix: 'FAB', count: 210, desc: 'Expandable floating action hubs and radial action satellites.' },
  { id: 'context-menus', name: 'Context Menus & Hover Flyout Stacks', cat: 'navigation', prefix: 'CTX', count: 210, desc: 'Floating context menus, keyboard shortcut chips, and submenu chevrons.' },
  { id: 'timeline-nodes', name: 'Vertical Timeline Nodes & Event Stems', cat: 'navigation', prefix: 'TML', count: 210, desc: 'Vertical milestone stems, event timestamps, and pulse junction dots.' },
  { id: 'accordion-drawers', name: 'Accordion Drawers & Expandable Shelves', cat: 'navigation', prefix: 'ACD', count: 210, desc: 'Collapsible drawer headers, rotating chevrons, and expanding shelves.' },
  { id: 'nav-rails', name: 'Slim Sidebar Rails & Icon Anchors', cat: 'navigation', prefix: 'RAL', count: 210, desc: 'Vertical navigation rails, active indicator pips, and compact docks.' },
  { id: 'sparkline-charts', name: 'Sparkline Trend Lines & Hairline Curves', cat: 'data', prefix: 'SPK', count: 210, desc: 'Micro trend lines, cubic splines, glowing terminal endpoints, and fill fades.' },
  { id: 'mini-bar-charts', name: 'Mini Column Charts & Distribution Bars', cat: 'data', prefix: 'MBC', count: 210, desc: 'Discrete distribution columns, staggered entrance heights, and hover bars.' },
  { id: 'area-graph-plots', name: 'Area Graph Silhouettes & Gradient Meshes', cat: 'data', prefix: 'ARA', count: 210, desc: 'Filled area graph curves, dual-layer comparative plots, and backdrop grids.' },
  { id: 'donut-charts', name: 'Donut Charts & Proportional Rings', cat: 'data', prefix: 'DNT', count: 210, desc: 'Segmented proportional rings, concentric metric donuts, and center total readouts.' },
  { id: 'kpi-metric-cards', name: 'KPI Metric Cards & Stat Counters', cat: 'data', prefix: 'KPI', count: 210, desc: 'Brutalist metric stat cards, large bold digits, trend delta pills, and sparklines.' },
  { id: 'heatmap-grids', name: 'Heatmap Density Grids & Activity Matrices', cat: 'data', prefix: 'HTM', count: 210, desc: 'Activity matrices, contribution squares, and pulsating density levels.' },
  { id: 'scatter-matrices', name: 'Scatter Plots & Dot Matrix Coordinates', cat: 'data', prefix: 'SCT', count: 210, desc: 'Coordinate grids, scattered data points, cluster distributions, and crosshairs.' },
  { id: 'candlestick-bars', name: 'Financial Candlestick Bars & High-Low Spikes', cat: 'data', prefix: 'CSK', count: 210, desc: 'Candlestick bars, upper/lower wick hairlines, and hollow/filled bodies.' },
  { id: 'data-tables', name: 'Minimal Data Table Rows & Grid Cells', cat: 'data', prefix: 'TBL', count: 210, desc: 'Tabular rows, monospace columns, alignment guides, and scanline hovers.' },
  { id: 'diff-viewers', name: 'Code Diff Comparisons & Inline Patches', cat: 'data', prefix: 'DIF', count: 210, desc: 'Code diff views, +/- gutter indicators, modified line highlights, and chunk markers.' },
  { id: 'text-inputs', name: 'Monospaced Text Inputs & Ghost Fields', cat: 'forms', prefix: 'TXT', count: 210, desc: 'Text inputs, blinking block cursors, active border brackets, and prefixes.' },
  { id: 'search-bars', name: 'Quick Search Bars & Command Palettes', cat: 'forms', prefix: 'SRC', count: 210, desc: 'Search input fields, magnifying glass icons, and keyboard shortcut tags.' },
  { id: 'password-masks', name: 'Password Mask Fields & Cipher Discs', cat: 'forms', prefix: 'PWD', count: 210, desc: 'Masked password fields, cipher dot rows, reveal eye toggles, and strength bars.' },
  { id: 'pin-code-boxes', name: 'OTP PIN Code Inputs & Segmented Digits', cat: 'forms', prefix: 'PIN', count: 210, desc: 'Segmented verification digit cells and active focus borders.' },
  { id: 'color-swatches', name: 'Monochrome Swatch Pickers & Tone Scales', cat: 'forms', prefix: 'CLR', count: 210, desc: 'Greyscale palette ramp pickers, tone chips, and active selector rings.' },
  { id: 'date-pickers', name: 'Minimal Date Pickers & Month Matrices', cat: 'forms', prefix: 'DAT', count: 210, desc: 'Compact calendar matrices, day header rows, and active date selection dots.' },
  { id: 'time-selectors', name: 'Time Selector Dials & Digital 24H Digits', cat: 'forms', prefix: 'TIM', count: 210, desc: 'Digital 24H time displays, blinking colon separators, and AM/PM toggles.' },
  { id: 'file-dropzones', name: 'File Upload Dropzones & Boundary Frames', cat: 'forms', prefix: 'DRP', count: 210, desc: 'Dashed drag-and-drop targets, upload arrow vectors, and progress states.' },
  { id: 'tag-inputs', name: 'Tag Cloud Inputs & Token Pills', cat: 'forms', prefix: 'TAG', count: 210, desc: 'Multi-token input clouds, removable tag pills with cross icons, and text prompts.' },
  { id: 'stepper-inputs', name: 'Numeric Counter Steppers & Plus/Minus Increments', cat: 'forms', prefix: 'STP', count: 210, desc: 'Tactile counter steppers, - and + micro triggers, and numeric readouts.' },
  { id: 'hud-panels', name: 'Cyberpunk HUD Panels & Technical Bezels', cat: 'surfaces', prefix: 'HPN', count: 210, desc: 'Corner-bracketed HUD enclosures, tech metadata headers, and chamfers.' },
  { id: 'card-containers', name: 'Minimalist Surface Cards & Framed Modules', cat: 'surfaces', prefix: 'CRD', count: 210, desc: 'Brutalist surface cards, hairline divider rules, and subtle inset panels.' },
  { id: 'tooltip-balloons', name: 'Precision Tooltip Balloons & Target Callouts', cat: 'surfaces', prefix: 'TIP', count: 210, desc: 'Floating pointer flags, anchor chevrons, and dark bubble frames.' },
  { id: 'popover-cards', name: 'Popover Dialogs & Anchored Modals', cat: 'surfaces', prefix: 'POP', count: 210, desc: 'Anchored popover boxes, header close crosses, and elevation backdrops.' },
  { id: 'user-avatars', name: 'User Avatar Rings & Presence Badges', cat: 'surfaces', prefix: 'AVT', count: 210, desc: 'Monogram avatar discs, presence beacon dots, and concentric rings.' },
  { id: 'profile-cards', name: 'Identity Profile Badges & ID Badges', cat: 'surfaces', prefix: 'PRF', count: 210, desc: 'Compact identity badges, avatar circles, handle tags, role badges, and status lines.' },
  { id: 'pricing-cards', name: 'Tier Pricing Cards & Spec Tables', cat: 'surfaces', prefix: 'PRC', count: 210, desc: 'Tier comparison cards, large currency numerals, billing frequency tags, and CTAs.' },
  { id: 'feature-lists', name: 'Feature Comparison Checks & Bullet Grids', cat: 'surfaces', prefix: 'FTR', count: 210, desc: 'Vertical feature checklists, crisp SVG tick icons, and muted negative crosses.' },
  { id: 'terminal-windows', name: 'Terminal Prompt Windows & Shell Headers', cat: 'surfaces', prefix: 'TRM', count: 210, desc: 'Unix terminal headers, traffic light window dots, and blinking block cursor.' },
  { id: 'code-boxes', name: 'Code Snippet Boxes & Syntax Badges', cat: 'surfaces', prefix: 'COD', count: 210, desc: 'Code container blocks, language badges, line numbers, and copy buttons.' },
  { id: 'keybinding-kbd', name: 'Keyboard Shortcut Chips & Key Caps', cat: 'media', prefix: 'KBD', count: 210, desc: 'Raised tactile keyboard key caps and modifier glyphs.' },
  { id: 'rating-stars', name: 'Precision Star Ratings & Review Ranks', cat: 'media', prefix: 'RAT', count: 210, desc: '5-star precision rating tracks, fractional star fills, and numeric scores.' },
  { id: 'media-scrubbers', name: 'Media Player Scrubber Rails & Playheads', cat: 'media', prefix: 'SCR', count: 210, desc: 'Video/audio player progress rails, timecodes, buffer bars, and thumbs.' },
  { id: 'barcode-qr', name: 'QR Code Matrix Frames & Technical Barcodes', cat: 'media', prefix: 'QRC', count: 210, desc: 'Wireframe QR code matrix frames, corner finder targets, and laser scanlines.' },
];

/* --- Domain Builders --- */

/* ----------------------------------------------------------------------------
   PROCEDURAL DOMAIN BUILDERS (15 Distinct Sub-Family Architectures Per Domain)
   -------------------------------------------------------------------------- */

function buildGauge(gid, p, famIdx, varIdx, cls, fp, ap) {
  const lbl = ap.label;
  const isSpeed = gid === 'speedometer-gauges';
  const isCompass = gid === 'compass-rings';
  const rot = isSpeed ? (-120 + p * 2.4) : (isCompass ? (p * 3.6) : (-90 + p * 3.6));
  const valStr = isSpeed ? (Math.round(p * 2.2) + ' KM/H') : (isCompass ? (Math.round(p * 3.6) + '° N') : (Math.round(p) + '%'));
  let inner = '';
  
  if (famIdx === 0) { // Hairline Minimal
    inner = `<svg viewBox="0 0 100 100" width="86" height="86" style="display:block;">
      <circle cx="50" cy="50" r="42" fill="none" stroke="var(--line2)" stroke-width="1"/>
      <circle cx="50" cy="50" r="42" fill="none" stroke="var(--ink)" stroke-width="1" stroke-dasharray="264" stroke-dashoffset="${264 * (1 - p/100)}" stroke-linecap="round" transform="rotate(-90 50 50)"/>
      <text x="50" y="54" text-anchor="middle" font-size="10" font-family="ui-monospace,monospace" fill="var(--ink)">${valStr}</text>
    </svg>`;
  } else if (famIdx === 1) { // Segmented Ladder
    inner = `<svg viewBox="0 0 100 100" width="86" height="86" style="display:block;">
      <circle cx="50" cy="50" r="40" fill="none" stroke="var(--track)" stroke-width="6" stroke-dasharray="8 5"/>
      <circle cx="50" cy="50" r="40" fill="none" stroke="var(--ink)" stroke-width="6" stroke-dasharray="8 5" stroke-dashoffset="${251 * (1 - p/100)}" transform="rotate(-90 50 50)"/>
      <text x="50" y="54" text-anchor="middle" font-size="11" font-weight="bold" font-family="ui-monospace,monospace" fill="var(--ink)">${valStr}</text>
    </svg>`;
  } else if (famIdx === 2) { // Dual Channel
    inner = `<svg viewBox="0 0 100 100" width="86" height="86" style="display:block;">
      <circle cx="50" cy="50" r="42" fill="none" stroke="var(--track)" stroke-width="2"/>
      <circle cx="50" cy="50" r="42" fill="none" stroke="var(--ink)" stroke-width="2" stroke-dasharray="264" stroke-dashoffset="${264 * (1 - p/100)}" transform="rotate(-90 50 50)"/>
      <circle cx="50" cy="50" r="32" fill="none" stroke="var(--track)" stroke-width="2"/>
      <circle cx="50" cy="50" r="32" fill="none" stroke="var(--ink3)" stroke-width="2" stroke-dasharray="201" stroke-dashoffset="${201 * (1 - Math.min(100, p*1.2)/100)}" transform="rotate(-90 50 50)"/>
      <text x="50" y="53" text-anchor="middle" font-size="8.5" font-family="ui-monospace,monospace" fill="var(--ink)">CH_A/B</text>
    </svg>`;
  } else if (famIdx === 3) { // Tachometer Dial
    inner = `<svg viewBox="0 0 100 100" width="86" height="86" style="display:block;">
      <path d="M 22 78 A 40 40 0 1 1 78 78" fill="none" stroke="var(--track)" stroke-width="4"/>
      <path d="M 22 78 A 40 40 0 1 1 78 78" fill="none" stroke="var(--ink)" stroke-width="4" stroke-dasharray="190" stroke-dashoffset="${190 * (1 - p/100)}"/>
      <g transform="translate(50,50) rotate(${rot})">
        <line x1="0" y1="0" x2="32" y2="0" stroke="var(--ink)" stroke-width="2.5" stroke-linecap="round"/>
        <circle cx="0" cy="0" r="4" fill="var(--ink)"/>
      </g>
      <text x="50" y="90" text-anchor="middle" font-size="8" font-family="ui-monospace,monospace" fill="var(--ink)">${valStr}</text>
    </svg>`;
  } else if (famIdx === 4) { // Tick Calibrated
    inner = `<svg viewBox="0 0 100 100" width="86" height="86" style="display:block;">
      <circle cx="50" cy="50" r="38" fill="none" stroke="var(--line2)" stroke-width="1.5"/>
      <circle cx="50" cy="50" r="38" fill="none" stroke="var(--ink)" stroke-width="3" stroke-dasharray="239" stroke-dashoffset="${239 * (1 - p/100)}" transform="rotate(-90 50 50)"/>
      ${Array.from({length: 12}, (_, i) => `<line x1="50" y1="6" x2="50" y2="12" stroke="var(--ink3)" stroke-width="1.2" transform="rotate(${i * 30} 50 50)"/>`).join('')}
      <text x="50" y="54" text-anchor="middle" font-size="10" font-family="ui-monospace,monospace" fill="var(--ink)">${valStr}</text>
    </svg>`;
  } else if (famIdx === 5) { // Halo Glow
    inner = `<svg viewBox="0 0 100 100" width="86" height="86" style="display:block;filter:drop-shadow(0 0 8px rgba(255,255,255,0.4));">
      <circle cx="50" cy="50" r="38" fill="none" stroke="var(--track)" stroke-width="3"/>
      <circle cx="50" cy="50" r="38" fill="none" stroke="var(--ink)" stroke-width="4" stroke-dasharray="239" stroke-dashoffset="${239 * (1 - p/100)}" transform="rotate(-90 50 50)"/>
      <circle cx="50" cy="50" r="8" fill="var(--ink)" class="ha-pulse"/>
      <text x="50" y="82" text-anchor="middle" font-size="9" font-family="ui-monospace,monospace" fill="var(--ink)">${valStr}</text>
    </svg>`;
  } else if (famIdx === 6) { // Dashed Rail
    inner = `<svg viewBox="0 0 100 100" width="86" height="86" style="display:block;">
      <circle cx="50" cy="50" r="40" fill="none" stroke="var(--ink)" stroke-width="2" stroke-dasharray="5 4" class="ha-spin"/>
      <circle cx="50" cy="50" r="30" fill="none" stroke="var(--ink)" stroke-width="3" stroke-dasharray="188" stroke-dashoffset="${188 * (1 - p/100)}" transform="rotate(-90 50 50)"/>
      <text x="50" y="54" text-anchor="middle" font-size="10" font-family="ui-monospace,monospace" fill="var(--ink)">${valStr}</text>
    </svg>`;
  } else if (famIdx === 7) { // Center Hub
    inner = `<svg viewBox="0 0 100 100" width="86" height="86" style="display:block;">
      <circle cx="50" cy="50" r="42" fill="none" stroke="var(--track)" stroke-width="2"/>
      <circle cx="50" cy="50" r="42" fill="none" stroke="var(--ink)" stroke-width="3" stroke-dasharray="264" stroke-dashoffset="${264 * (1 - p/100)}" transform="rotate(-90 50 50)"/>
      <circle cx="50" cy="50" r="22" fill="var(--panel2)" stroke="var(--ink)" stroke-width="2"/>
      <circle cx="50" cy="50" r="6" fill="var(--ink)"/>
      <text x="50" y="86" text-anchor="middle" font-size="8" font-family="ui-monospace,monospace" fill="var(--ink3)">${valStr}</text>
    </svg>`;
  } else if (famIdx === 8) { // Triple Stack
    inner = `<svg viewBox="0 0 100 100" width="86" height="86" style="display:block;">
      <circle cx="50" cy="50" r="42" fill="none" stroke="var(--line2)" stroke-width="2"/>
      <circle cx="50" cy="50" r="42" fill="none" stroke="var(--ink)" stroke-width="2" stroke-dasharray="264" stroke-dashoffset="${264 * (1 - p/100)}" transform="rotate(-90 50 50)"/>
      <circle cx="50" cy="50" r="32" fill="none" stroke="var(--line2)" stroke-width="2"/>
      <circle cx="50" cy="50" r="32" fill="none" stroke="var(--ink)" stroke-width="2" stroke-dasharray="201" stroke-dashoffset="${201 * (1 - Math.min(100, p*1.2)/100)}" transform="rotate(-90 50 50)"/>
      <circle cx="50" cy="50" r="22" fill="none" stroke="var(--line2)" stroke-width="2"/>
      <circle cx="50" cy="50" r="22" fill="none" stroke="var(--ink)" stroke-width="2" stroke-dasharray="138" stroke-dashoffset="${138 * (1 - Math.min(100, p*1.5)/100)}" transform="rotate(-90 50 50)"/>
    </svg>`;
  } else if (famIdx === 9) { // Inset Channel
    inner = `<div style="width:84px;height:84px;border-radius:50%;background:var(--panel);box-shadow:inset 0 4px 10px rgba(0,0,0,0.9), inset 0 0 0 1px var(--line);display:grid;place-items:center;">
      <svg viewBox="0 0 80 80" width="76" height="76"><circle cx="40" cy="40" r="32" fill="none" stroke="var(--ink)" stroke-width="3" stroke-dasharray="201" stroke-dashoffset="${201 * (1 - p/100)}" transform="rotate(-90 40 40)"/><text x="40" y="44" text-anchor="middle" font-size="11" font-weight="bold" font-family="ui-monospace,monospace" fill="var(--ink)">${valStr}</text></svg>
    </div>`;
  } else if (famIdx === 10) { // Stepped Matrix
    inner = `<svg viewBox="0 0 100 100" width="86" height="86" style="display:block;">
      ${Array.from({length: 20}, (_, i) => { const a = (i / 20) * Math.PI * 2; const x = 50 + 38 * Math.cos(a); const y = 50 + 38 * Math.sin(a); const lit = (i / 20) <= (p / 100); return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${lit ? 3 : 1.8}" fill="${lit ? 'var(--ink)' : 'var(--track)'}"/>`; }).join('')}
      <text x="50" y="54" text-anchor="middle" font-size="10" font-family="ui-monospace,monospace" fill="var(--ink)">${valStr}</text>
    </svg>`;
  } else if (famIdx === 11) { // Framed Bezel
    inner = `<div class="hud-frame" style="display:inline-block;"><span class="hud-c tl"></span><span class="hud-c tr"></span><span class="hud-c bl"></span><span class="hud-c br"></span>
      <svg viewBox="0 0 80 80" width="74" height="74"><circle cx="40" cy="40" r="32" fill="none" stroke="var(--line2)" stroke-width="1.5"/><circle cx="40" cy="40" r="32" fill="none" stroke="var(--ink)" stroke-width="2.5" stroke-dasharray="201" stroke-dashoffset="${201 * (1 - p/100)}" transform="rotate(-90 40 40)"/><text x="40" y="44" text-anchor="middle" font-size="10" font-family="ui-monospace,monospace" fill="var(--ink)">${valStr}</text></svg>
    </div>`;
  } else if (famIdx === 12) { // Monolithic Slab
    inner = `<div style="width:84px;height:84px;background:var(--ink);border-radius:3px;box-shadow:3px 3px 0 var(--line2);display:grid;place-items:center;color:var(--sc-bg);">
      <div style="text-align:center;font-family:ui-monospace,monospace;"><div style="font-size:7px;letter-spacing:.14em;opacity:.7;">DIAL_SLAB</div><div style="font-size:16px;font-weight:900;">${valStr}</div><div style="font-size:7px;opacity:.7;">ACTIVE</div></div>
    </div>`;
  } else if (famIdx === 13) { // Micro Orbit
    inner = `<div style="position:relative;width:86px;height:86px;display:grid;place-items:center;">
      <div class="ha-spin" style="position:absolute;inset:0;"><div style="width:5px;height:5px;border-radius:50%;background:var(--ink);box-shadow:0 0 6px var(--ink);"></div></div>
      <svg viewBox="0 0 80 80" width="74" height="74"><circle cx="40" cy="40" r="32" fill="none" stroke="var(--line2)" stroke-width="1"/><circle cx="40" cy="40" r="32" fill="none" stroke="var(--ink)" stroke-width="2" stroke-dasharray="201" stroke-dashoffset="${201 * (1 - p/100)}" transform="rotate(-90 40 40)"/><text x="40" y="44" text-anchor="middle" font-size="10" font-family="ui-monospace,monospace" fill="var(--ink)">${valStr}</text></svg>
    </div>`;
  } else { // Gradient Sweep
    inner = `<svg viewBox="0 0 100 100" width="86" height="86" style="display:block;">
      <circle cx="50" cy="50" r="38" fill="none" stroke="var(--track)" stroke-width="3"/>
      <circle cx="50" cy="50" r="38" fill="none" stroke="var(--ink)" stroke-width="3.5" stroke-dasharray="239" stroke-dashoffset="${239 * (1 - p/100)}" stroke-linecap="round" transform="rotate(-90 50 50)"/>
      <text x="50" y="54" text-anchor="middle" font-size="11" font-weight="bold" font-family="ui-monospace,monospace" fill="var(--ink)">${valStr}</text>
    </svg>`;
  }

  return {
    html: wrapContainer(fp, ap, inner, 190, cls),
    css: `.${cls} { isolation: isolate; }`
  };
}


function buildLinearMeter(gid, p, famIdx, varIdx, cls, fp, ap) {
  const lbl = ap.label;
  const isBat = gid === 'battery-indicators';
  const isSig = gid === 'signal-meters';
  const isStep = gid === 'step-progress';
  const isAlt = gid === 'altimeter-scales';
  const isSeg = gid === 'segmented-meters';
  let inner = '';

  if (famIdx === 0) { // Hairline Minimal
    inner = `<div style="width:100%;max-width:180px;display:flex;flex-direction:column;gap:5px;">
      <div style="display:flex;justify-content:space-between;font-size:8px;color:var(--ink3);"><span>${lbl}</span><span>${Math.round(p)}%</span></div>
      <div style="height:2px;background:var(--track);position:relative;">
        <div style="width:${p}%;height:100%;background:var(--ink);"></div>
        <div style="position:absolute;left:${p}%;top:-3px;width:1px;height:8px;background:var(--ink);"></div>
      </div>
    </div>`;
  } else if (famIdx === 1) { // Segmented Ladder
    const blocks = isSig ? 5 : (isBat ? 4 : 10);
    const lit = Math.round((p / 100) * blocks);
    inner = `<div style="width:100%;max-width:190px;display:flex;flex-direction:column;gap:5px;">
      <div style="display:flex;gap:3px;height:${isSig ? 28 : 14}px;align-items:flex-end;">
        ${Array.from({length: blocks}, (_, i) => `<div style="flex:1;height:${isSig ? (10 + i * 4) : 100}%;background:${i < lit ? 'var(--ink)' : 'var(--track)'};border-radius:1px;"></div>`).join('')}
      </div>
      <div style="display:flex;justify-content:space-between;font-size:8px;color:var(--ink3);"><span>CH_LADDER</span><span>${lit}/${blocks} BLOCKS</span></div>
    </div>`;
  } else if (famIdx === 2) { // Dual Channel
    inner = `<div style="width:100%;max-width:190px;display:flex;flex-direction:column;gap:4px;">
      <div style="display:flex;justify-content:space-between;font-size:7.5px;color:var(--ink3);"><span>PRI // ${Math.round(p)}%</span><span>SEC // ${Math.round(100 - p)}%</span></div>
      <div style="height:4px;background:var(--track);border-radius:1px;overflow:hidden;"><div style="width:${p}%;height:100%;background:var(--ink);"></div></div>
      <div style="height:4px;background:var(--track);border-radius:1px;overflow:hidden;"><div style="width:${100 - p}%;height:100%;background:var(--ink3);"></div></div>
    </div>`;
  } else if (famIdx === 3) { // Tachometer Style
    inner = `<div style="width:100%;max-width:180px;display:flex;flex-direction:column;gap:4px;">
      <div style="display:flex;gap:2px;align-items:flex-end;height:12px;">
        ${Array.from({length: 12}, (_, i) => `<div style="flex:1;height:${6 + i * 0.6}px;background:${(i/12) <= (p/100) ? (i >= 9 ? 'var(--ink)' : 'var(--ink)') : 'var(--track)'};opacity:${(i/12) <= (p/100) ? 1 : 0.2};"></div>`).join('')}
      </div>
      <div style="height:3px;background:var(--ink);width:${p}%;"></div>
      <div style="font-size:7.5px;color:var(--ink3);text-align:right;">RPM_LIMIT // 0${Math.floor(p/10)}</div>
    </div>`;
  } else if (famIdx === 4) { // Tick Calibrated
    inner = `<div style="width:100%;max-width:190px;display:flex;flex-direction:column;gap:3px;">
      <div style="display:flex;justify-content:space-between;font-size:7.5px;font-family:ui-monospace,monospace;color:var(--ink3);"><span>00</span><span>25</span><span>50</span><span>75</span><span>100</span></div>
      <div style="height:5px;background:var(--track);position:relative;border:1px solid var(--line2);">
        <div style="width:${p}%;height:100%;background:var(--ink);"></div>
      </div>
      <div style="display:flex;justify-content:space-between;height:4px;">
        ${Array.from({length: 9}, () => `<span style="width:1px;height:4px;background:var(--ink3);"></span>`).join('')}
      </div>
    </div>`;
  } else if (famIdx === 5) { // Halo Glow
    inner = `<div style="width:100%;max-width:180px;padding:6px;filter:drop-shadow(0 0 6px rgba(255,255,255,0.4));">
      <div style="height:8px;border-radius:999px;background:var(--panel2);border:1px solid var(--ink);padding:1px;position:relative;">
        <div style="width:${p}%;height:100%;background:var(--ink);border-radius:999px;"></div>
      </div>
      <div style="text-align:center;font-size:8px;font-family:ui-monospace,monospace;color:var(--ink);margin-top:4px;">LUMEN_CORE // ${Math.round(p)}%</div>
    </div>`;
  } else if (famIdx === 6) { // Dashed Rail
    inner = `<div style="width:100%;max-width:190px;padding:4px;border:1px dashed var(--ink);border-radius:4px;">
      <div style="height:6px;background:var(--track);position:relative;overflow:hidden;">
        <div style="width:${p}%;height:100%;background:var(--ink);"></div>
      </div>
      <div style="display:flex;justify-content:space-between;font-size:7.5px;color:var(--ink3);margin-top:4px;"><span>SAFETY_RAIL</span><span>ZONE: OK</span></div>
    </div>`;
  } else if (famIdx === 7) { // Center Hub
    inner = `<div style="width:100%;max-width:190px;display:flex;align-items:center;gap:6px;">
      <div style="flex:1;height:4px;background:var(--track);display:flex;justify-content:flex-end;"><div style="width:${Math.max(0, 50 - p/2)}%;background:var(--ink);"></div></div>
      <div style="width:18px;height:18px;border-radius:50%;background:var(--panel2);border:2px solid var(--ink);display:grid;place-items:center;font-size:8px;font-weight:bold;color:var(--ink);">C</div>
      <div style="flex:1;height:4px;background:var(--track);"><div style="width:${Math.max(0, p/2)}%;background:var(--ink);"></div></div>
    </div>`;
  } else if (famIdx === 8) { // Triple Stack
    inner = `<div style="width:100%;max-width:180px;display:flex;flex-direction:column;gap:3px;">
      <div style="height:3px;background:var(--track);"><div style="width:${p}%;height:100%;background:var(--ink);"></div></div>
      <div style="height:3px;background:var(--track);"><div style="width:${Math.min(100, p*1.2)}%;height:100%;background:var(--ink2);"></div></div>
      <div style="height:3px;background:var(--track);"><div style="width:${Math.min(100, p*1.5)}%;height:100%;background:var(--ink3);"></div></div>
      <div style="display:flex;justify-content:space-between;font-size:7px;color:var(--ink3);"><span>3-TIER STACK</span><span>VAL: ${Math.round(p)}</span></div>
    </div>`;
  } else if (famIdx === 9) { // Inset Channel
    inner = `<div style="width:100%;max-width:180px;padding:6px;background:var(--panel);border-radius:6px;box-shadow:inset 0 2px 6px rgba(0,0,0,0.8);">
      <div style="height:6px;background:rgba(255,255,255,0.05);border-radius:3px;overflow:hidden;">
        <div style="width:${p}%;height:100%;background:var(--ink);"></div>
      </div>
    </div>`;
  } else if (famIdx === 10) { // Stepped Matrix
    inner = `<div style="width:100%;max-width:180px;display:grid;grid-template-columns:repeat(10,1fr);gap:2px;">
      ${Array.from({length: 20}, (_, i) => `<div style="height:6px;background:${(i/20) <= (p/100) ? 'var(--ink)' : 'var(--track)'};border-radius:1px;"></div>`).join('')}
    </div>`;
  } else if (famIdx === 11) { // Framed Bezel
    inner = `<div class="hud-frame" style="width:100%;max-width:190px;">
      <span class="hud-c tl"></span><span class="hud-c tr"></span><span class="hud-c bl"></span><span class="hud-c br"></span>
      <div style="display:flex;justify-content:space-between;font-size:7.5px;color:var(--ink3);margin-bottom:3px;"><span>SYS.BAR</span><span>${Math.round(p)}%</span></div>
      <div style="height:6px;border:1px solid var(--line2);padding:1px;"><div style="width:${p}%;height:100%;background:var(--ink);"></div></div>
    </div>`;
  } else if (famIdx === 12) { // Monolithic Slab
    inner = `<div style="width:100%;max-width:180px;background:var(--ink);color:var(--sc-bg);padding:8px 12px;border-radius:2px;box-shadow:2px 2px 0 var(--line2);font-family:ui-monospace,monospace;">
      <div style="display:flex;justify-content:space-between;font-size:8px;font-weight:900;"><span>SLAB_TRACK</span><span>${Math.round(p)}%</span></div>
      <div style="height:4px;background:rgba(0,0,0,0.3);margin-top:4px;"><div style="width:${p}%;height:100%;background:var(--sc-bg);"></div></div>
    </div>`;
  } else if (famIdx === 13) { // Micro Orbit
    inner = `<div style="width:100%;max-width:180px;display:flex;align-items:center;gap:8px;">
      <div style="flex:1;height:5px;background:var(--track);border-radius:999px;position:relative;">
        <div style="width:${p}%;height:100%;background:var(--ink);border-radius:999px;"></div>
      </div>
      <div class="ha-spin" style="width:14px;height:14px;border-radius:50%;border:1px dashed var(--ink);position:relative;">
        <div style="position:absolute;top:0;left:50%;transform:translate(-50%,-50%);width:3px;height:3px;border-radius:50%;background:var(--ink);"></div>
      </div>
    </div>`;
  } else { // Gradient Sweep
    inner = `<div style="width:100%;max-width:180px;display:flex;flex-direction:column;gap:4px;">
      <div style="height:6px;border-radius:999px;background:var(--track);position:relative;overflow:hidden;">
        <div style="width:${p}%;height:100%;background:linear-gradient(90deg,var(--ink3),var(--ink));border-radius:999px;"></div>
      </div>
      <div style="font-size:7.5px;color:var(--ink3);text-align:right;">GRADIENT // ${Math.round(p)}%</div>
    </div>`;
  }

  return {
    html: wrapContainer(fp, ap, inner, 200, cls),
    css: `.${cls} { isolation: isolate; }`
  };
}


function buildRotaryFader(gid, p, famIdx, varIdx, cls, fp, ap) {
  const lbl = ap.label;
  const isKnob = gid === 'rotary-knobs';
  const isSlider = gid === 'range-sliders';
  const rot = -135 + (p * 2.7);
  let inner = '';

  if (famIdx === 0) { // Hairline Minimal
    inner = isKnob ? `<svg viewBox="0 0 80 80" width="70" height="70"><circle cx="40" cy="40" r="30" fill="none" stroke="var(--line2)" stroke-width="1"/><g transform="translate(40,40) rotate(${rot})"><line x1="0" y1="-12" x2="0" y2="-28" stroke="var(--ink)" stroke-width="1.5"/></g><text x="40" y="44" text-anchor="middle" font-size="9" font-family="ui-monospace,monospace" fill="var(--ink)">${Math.round(p)}</text></svg>`
      : `<div style="width:100%;max-width:180px;"><div style="height:2px;background:var(--line2);position:relative;"><div style="position:absolute;left:${p}%;top:50%;transform:translate(-50%,-50%);width:10px;height:10px;border:1px solid var(--ink);background:var(--panel);"></div></div></div>`;
  } else if (famIdx === 1) { // Segmented Ladder
    inner = isKnob ? `<svg viewBox="0 0 80 80" width="70" height="70"><circle cx="40" cy="40" r="28" fill="var(--panel2)" stroke="var(--track)" stroke-width="5" stroke-dasharray="6 4"/><g transform="translate(40,40) rotate(${rot})"><line x1="0" y1="0" x2="0" y2="-22" stroke="var(--ink)" stroke-width="3"/></g><circle cx="40" cy="40" r="4" fill="var(--ink)"/></svg>`
      : `<div style="width:100%;max-width:180px;display:flex;gap:3px;">${Array.from({length:8}, (_,i)=>`<div style="flex:1;height:8px;background:${(i/8)<=(p/100)?'var(--ink)':'var(--track)'};border-radius:1px;"></div>`).join('')}</div>`;
  } else if (famIdx === 2) { // Dual Channel
    inner = isKnob ? `<svg viewBox="0 0 80 80" width="70" height="70"><circle cx="40" cy="40" r="32" fill="none" stroke="var(--track)" stroke-width="2"/><circle cx="40" cy="40" r="22" fill="none" stroke="var(--line2)" stroke-width="1.5"/><g transform="translate(40,40) rotate(${rot})"><line x1="0" y1="-8" x2="0" y2="-30" stroke="var(--ink)" stroke-width="2"/></g></svg>`
      : `<div style="width:100%;max-width:180px;display:flex;flex-direction:column;gap:4px;"><div style="height:3px;background:var(--track);position:relative;"><div style="width:${p}%;height:100%;background:var(--ink);"></div></div><div style="height:3px;background:var(--track);position:relative;"><div style="width:${100-p}%;height:100%;background:var(--ink3);"></div></div></div>`;
  } else if (famIdx === 3) { // Tachometer Style
    inner = `<svg viewBox="0 0 80 80" width="70" height="70"><path d="M 18 62 A 28 28 0 1 1 62 62" fill="none" stroke="var(--track)" stroke-width="3"/><g transform="translate(40,40) rotate(${rot})"><line x1="0" y1="0" x2="0" y2="-24" stroke="var(--ink)" stroke-width="2"/></g><text x="40" y="74" text-anchor="middle" font-size="8" font-family="ui-monospace,monospace" fill="var(--ink)">${Math.round(p)}</text></svg>`;
  } else if (famIdx === 4) { // Tick Calibrated
    inner = isKnob ? `<svg viewBox="0 0 80 80" width="70" height="70">${Array.from({length:10}, (_,i)=>`<line x1="40" y1="8" x2="40" y2="14" stroke="var(--ink3)" stroke-width="1.2" transform="rotate(${-135 + i * 30} 40 40)"/>`).join('')}<circle cx="40" cy="40" r="22" fill="var(--panel2)" stroke="var(--ink)" stroke-width="1.5"/><g transform="translate(40,40) rotate(${rot})"><line x1="0" y1="0" x2="0" y2="-18" stroke="var(--ink)" stroke-width="2"/></g></svg>`
      : `<div style="width:100%;max-width:180px;"><div style="display:flex;justify-content:space-between;font-size:7px;color:var(--ink3);"><span>0</span><span>5</span><span>10</span></div><div style="height:4px;background:var(--track);position:relative;margin-top:2px;"><div style="position:absolute;left:${p}%;top:50%;transform:translate(-50%,-50%);width:12px;height:12px;border-radius:2px;background:var(--ink);"></div></div></div>`;
  } else if (famIdx === 5) { // Halo Glow
    inner = `<div style="padding:6px;filter:drop-shadow(0 0 8px rgba(255,255,255,0.4));"><svg viewBox="0 0 70 70" width="60" height="60"><circle cx="35" cy="35" r="24" fill="var(--panel2)" stroke="var(--ink)" stroke-width="2"/><g transform="translate(35,35) rotate(${rot})"><line x1="0" y1="0" x2="0" y2="-20" stroke="var(--ink)" stroke-width="2.5"/></g></svg></div>`;
  } else if (famIdx === 6) { // Dashed Rail
    inner = `<div style="padding:4px;border:1px dashed var(--ink);border-radius:6px;"><svg viewBox="0 0 70 70" width="60" height="60"><circle cx="35" cy="35" r="24" fill="none" stroke="var(--line2)" stroke-width="1.5"/><g transform="translate(35,35) rotate(${rot})"><line x1="0" y1="-8" x2="0" y2="-22" stroke="var(--ink)" stroke-width="2"/></g></svg></div>`;
  } else if (famIdx === 7) { // Center Hub
    inner = `<svg viewBox="0 0 80 80" width="70" height="70"><circle cx="40" cy="40" r="32" fill="var(--panel2)" stroke="var(--ink)" stroke-width="2"/><circle cx="40" cy="40" r="14" fill="var(--panel)" stroke="var(--line2)" stroke-width="1.5"/><g transform="translate(40,40) rotate(${rot})"><circle cx="0" cy="-22" r="3.5" fill="var(--ink)"/></g></svg>`;
  } else if (famIdx === 8) { // Triple Stack
    inner = `<svg viewBox="0 0 80 80" width="70" height="70"><circle cx="40" cy="40" r="32" fill="var(--panel)" stroke="var(--line)" stroke-width="1"/><circle cx="40" cy="40" r="24" fill="var(--panel2)" stroke="var(--line2)" stroke-width="1"/><circle cx="40" cy="40" r="16" fill="var(--panel)" stroke="var(--ink)" stroke-width="1.5"/><g transform="translate(40,40) rotate(${rot})"><line x1="0" y1="0" x2="0" y2="-14" stroke="var(--ink)" stroke-width="2"/></g></svg>`;
  } else if (famIdx === 9) { // Inset Channel
    inner = `<div style="width:70px;height:70px;border-radius:50%;background:var(--panel);box-shadow:inset 0 3px 8px rgba(0,0,0,0.9);display:grid;place-items:center;"><svg viewBox="0 0 60 60" width="56" height="56"><g transform="translate(30,30) rotate(${rot})"><line x1="0" y1="0" x2="0" y2="-20" stroke="var(--ink)" stroke-width="2.5"/><circle cx="0" cy="0" r="3" fill="var(--ink)"/></g></svg></div>`;
  } else if (famIdx === 10) { // Stepped Matrix
    inner = `<div style="display:flex;flex-direction:column;align-items:center;gap:4px;"><svg viewBox="0 0 60 60" width="50" height="50"><circle cx="30" cy="30" r="20" fill="var(--panel2)" stroke="var(--line2)" stroke-width="1"/><g transform="translate(30,30) rotate(${rot})"><line x1="0" y1="0" x2="0" y2="-16" stroke="var(--ink)" stroke-width="2"/></g></svg><div style="font-size:7px;color:var(--ink3);">ENC // ${Math.round(p)}</div></div>`;
  } else if (famIdx === 11) { // Framed Bezel
    inner = `<div class="hud-frame" style="display:inline-block;"><span class="hud-c tl"></span><span class="hud-c tr"></span><span class="hud-c bl"></span><span class="hud-c br"></span><svg viewBox="0 0 60 60" width="52" height="52"><circle cx="30" cy="30" r="22" fill="none" stroke="var(--line2)" stroke-width="1.5"/><g transform="translate(30,30) rotate(${rot})"><line x1="0" y1="0" x2="0" y2="-18" stroke="var(--ink)" stroke-width="2"/></g></svg></div>`;
  } else if (famIdx === 12) { // Monolithic Slab
    inner = `<div style="width:68px;height:68px;background:var(--ink);color:var(--sc-bg);display:grid;place-items:center;box-shadow:2px 2px 0 var(--line2);font-family:ui-monospace,monospace;"><div style="font-size:16px;font-weight:900;">${Math.round(p)}</div><div style="font-size:7px;">VAL</div></div>`;
  } else if (famIdx === 13) { // Micro Orbit
    inner = `<div style="position:relative;width:70px;height:70px;display:grid;place-items:center;"><div class="ha-spin" style="position:absolute;inset:0;"><div style="width:4px;height:4px;border-radius:50%;background:var(--ink);box-shadow:0 0 5px var(--ink);"></div></div><svg viewBox="0 0 60 60" width="54" height="54"><circle cx="30" cy="30" r="20" fill="var(--panel2)" stroke="var(--line2)" stroke-width="1"/><g transform="translate(30,30) rotate(${rot})"><line x1="0" y1="0" x2="0" y2="-16" stroke="var(--ink)" stroke-width="2"/></g></svg></div>`;
  } else { // Gradient Sweep
    inner = `<div style="width:100%;max-width:180px;display:flex;flex-direction:column;gap:5px;"><div style="height:6px;border-radius:999px;background:var(--track);position:relative;overflow:hidden;"><div style="width:${p}%;height:100%;background:linear-gradient(90deg,var(--ink3),var(--ink));"></div></div><div style="display:flex;justify-content:space-between;font-size:8px;color:var(--ink3);"><span>0</span><span>${Math.round(p)}</span><span>100</span></div></div>`;
  }

  return {
    html: wrapContainer(fp, ap, inner, 190, cls),
    css: `.${cls} { isolation: isolate; }`
  };
}

function buildButton(gid, p, famIdx, varIdx, cls, fp, ap) {
  const lbl = ap.label;
  const icon = ap.icon;
  let inner = '';

  if (famIdx === 0) { // Hairline
    inner = `<button class="ha-btn-tactile" style="background:transparent;border:1px solid var(--line2);color:var(--ink);padding:8px 18px;border-radius:2px;font-family:ui-monospace,monospace;font-size:10.5px;letter-spacing:.12em;display:inline-flex;align-items:center;gap:8px;"><span style="color:var(--ink3);">+</span><span>${lbl}</span><span style="color:var(--ink3);">+</span></button>`;
  } else if (famIdx === 1) { // Segmented
    inner = `<button class="ha-btn-tactile" style="background:var(--panel2);border:1px solid var(--line);color:var(--ink);padding:4px;border-radius:4px;display:inline-flex;align-items:center;gap:4px;"><span style="width:8px;height:18px;background:var(--ink);border-radius:1px;display:inline-block;"></span><span style="font-family:ui-monospace,monospace;font-weight:bold;font-size:10.5px;padding:0 8px;">${lbl}</span><span style="width:8px;height:18px;background:var(--line2);border-radius:1px;display:inline-block;"></span></button>`;
  } else if (famIdx === 2) { // Dual Channel
    inner = `<button class="ha-btn-tactile" style="background:var(--panel);border:2px double var(--ink);color:var(--ink);padding:8px 20px;border-radius:6px;font-family:ui-monospace,monospace;font-size:11px;font-weight:bold;display:inline-flex;align-items:center;gap:8px;"><span style="width:4px;height:4px;border-radius:50%;background:var(--ink);"></span><span>${lbl}</span><span style="width:4px;height:4px;border-radius:50%;background:var(--ink);"></span></button>`;
  } else if (famIdx === 3) { // Tachometer
    inner = `<div style="display:inline-flex;align-items:center;position:relative;padding:12px;"><svg viewBox="0 0 60 60" width="56" height="56" style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);"><circle cx="30" cy="30" r="26" fill="none" stroke="var(--track)" stroke-width="2"/><circle cx="30" cy="30" r="26" fill="none" stroke="var(--ink)" stroke-width="2" stroke-dasharray="120 40" stroke-linecap="round"/></svg><button class="ha-btn-tactile" style="width:38px;height:38px;border-radius:50%;background:var(--panel2);border:1.5px solid var(--ink);color:var(--ink);display:grid;place-items:center;font-size:12px;">${icon}</button></div>`;
  } else if (famIdx === 4) { // Tick Calibrated
    inner = `<div style="display:inline-flex;flex-direction:column;align-items:center;gap:4px;"><button class="ha-btn-tactile" style="background:var(--panel2);border:1px solid var(--line2);color:var(--ink);padding:8px 18px;border-radius:4px;font-family:ui-monospace,monospace;font-size:10.5px;font-weight:bold;letter-spacing:.08em;">${lbl}</button><div style="display:flex;justify-content:space-between;width:100%;padding:0 4px;"><span style="height:4px;width:1px;background:var(--ink3);"></span><span style="height:3px;width:1px;background:var(--ink4);"></span><span style="height:5px;width:1px;background:var(--ink);"></span><span style="height:3px;width:1px;background:var(--ink4);"></span><span style="height:4px;width:1px;background:var(--ink3);"></span></div></div>`;
  } else if (famIdx === 5) { // Halo Glow
    inner = `<button class="ha-btn-tactile" style="background:var(--panel);border:1px solid var(--ink);color:var(--ink);padding:9px 20px;border-radius:8px;font-family:ui-monospace,monospace;font-size:11px;font-weight:bold;box-shadow:0 0 14px rgba(255,255,255,0.3);display:inline-flex;align-items:center;gap:8px;"><span class="ha-pulse" style="width:6px;height:6px;border-radius:50%;background:var(--ink);display:inline-block;box-shadow:0 0 6px var(--ink);"></span><span>${lbl}</span></button>`;
  } else if (famIdx === 6) { // Dashed Rail
    inner = `<button class="ha-btn-tactile" style="background:transparent;border:1.5px dashed var(--ink);color:var(--ink);padding:8px 18px;border-radius:6px;font-family:ui-monospace,monospace;font-size:10.5px;font-weight:bold;letter-spacing:.1em;display:inline-flex;align-items:center;gap:8px;"><span>${icon}</span><span>${lbl}</span></button>`;
  } else if (famIdx === 7) { // Center Hub
    inner = `<button class="ha-btn-tactile" style="width:52px;height:52px;border-radius:50%;background:var(--panel2);border:2px solid var(--ink);color:var(--ink);box-shadow:0 4px 10px rgba(0,0,0,0.5);display:grid;place-items:center;position:relative;"><div style="width:24px;height:24px;border-radius:50%;background:var(--panel);border:1.5px solid var(--line2);display:grid;place-items:center;"><div style="width:8px;height:8px;border-radius:50%;background:var(--ink);"></div></div></button>`;
  } else if (famIdx === 8) { // Triple Stack
    inner = `<div style="display:inline-flex;padding:3px;background:var(--track);border:1px solid var(--line);border-radius:8px;"><div style="padding:2px;background:var(--panel2);border-radius:6px;"><button class="ha-btn-tactile" style="background:var(--panel);border:1px solid var(--line2);color:var(--ink);padding:7px 16px;border-radius:4px;font-family:ui-monospace,monospace;font-size:10.5px;font-weight:bold;">${lbl}</button></div></div>`;
  } else if (famIdx === 9) { // Inset Channel
    inner = `<div style="display:inline-flex;padding:6px 8px;background:var(--panel);border-radius:8px;box-shadow:inset 0 3px 8px rgba(0,0,0,0.9),inset 0 0 0 1px var(--line);"><button class="ha-btn-tactile" style="background:var(--panel2);border:1px solid var(--line2);color:var(--ink);padding:7px 16px;border-radius:5px;font-family:ui-monospace,monospace;font-size:10px;font-weight:bold;">${lbl}</button></div>`;
  } else if (famIdx === 10) { // Stepped Matrix
    inner = `<button class="ha-btn-tactile" style="background:var(--panel2);border:1px solid var(--line2);color:var(--ink);padding:7px 14px;border-radius:4px;display:inline-flex;align-items:center;gap:8px;font-family:ui-monospace,monospace;font-size:10.5px;"><div style="display:grid;grid-template-columns:repeat(2,4px);gap:2px;"><span style="width:4px;height:4px;background:var(--ink);border-radius:1px;"></span><span style="width:4px;height:4px;background:var(--line2);border-radius:1px;"></span><span style="width:4px;height:4px;background:var(--line2);border-radius:1px;"></span><span style="width:4px;height:4px;background:var(--ink);border-radius:1px;"></span></div><span>${lbl}</span></button>`;
  } else if (famIdx === 11) { // Framed Bezel
    inner = `<div class="hud-frame" style="display:inline-block;"><span class="hud-c tl"></span><span class="hud-c tr"></span><span class="hud-c bl"></span><span class="hud-c br"></span><button class="ha-btn-tactile" style="background:var(--panel2);border:1px solid var(--line2);color:var(--ink);padding:8px 18px;font-family:ui-monospace,monospace;font-size:10.5px;font-weight:bold;letter-spacing:.12em;">[ ${lbl} ]</button></div>`;
  } else if (famIdx === 12) { // Monolithic Slab
    inner = `<button class="ha-btn-tactile" style="background:var(--ink);border:none;color:var(--sc-bg);padding:11px 24px;border-radius:2px;font-family:ui-monospace,monospace;font-size:11px;font-weight:900;letter-spacing:.14em;box-shadow:3px 3px 0 var(--line2);cursor:pointer;">${lbl}</button>`;
  } else if (famIdx === 13) { // Micro Orbit
    inner = `<div style="display:inline-flex;align-items:center;position:relative;padding:8px;"><div class="ha-spin" style="position:absolute;inset:0;pointer-events:none;"><div style="width:5px;height:5px;border-radius:50%;background:var(--ink);box-shadow:0 0 5px var(--ink);"></div></div><button class="ha-btn-tactile" style="background:var(--panel2);border:1px solid var(--line2);color:var(--ink);padding:8px 18px;border-radius:999px;font-family:ui-monospace,monospace;font-size:10.5px;font-weight:bold;">${lbl}</button></div>`;
  } else { // Gradient Sweep
    inner = `<button class="ha-btn-tactile" style="background:linear-gradient(90deg, var(--panel2), var(--line2), var(--panel2));border:1px solid var(--line2);color:var(--ink);padding:9px 22px;border-radius:6px;font-family:ui-monospace,monospace;font-size:11px;font-weight:bold;letter-spacing:.1em;position:relative;overflow:hidden;"><span style="position:relative;z-index:2;">${lbl}</span></button>`;
  }

  return {
    html: wrapContainer(fp, ap, inner, 210, cls),
    css: `.${cls} button:active { transform: translateY(2px); }`
  };
}

function buildToggleSelector(gid, p, famIdx, varIdx, cls, fp, ap) {
  const on = p >= 50;
  const lbl = ap.label;
  let inner = '';

  if (famIdx === 0) { // Hairline
    inner = `<div style="width:48px;height:24px;border-radius:999px;border:1px solid var(--line2);position:relative;padding:2px;box-sizing:border-box;"><div style="width:18px;height:18px;border-radius:50%;border:1px solid var(--ink);background:${on?'var(--ink)':'transparent'};transform:translateX(${on?'24px':'0'});transition:.2s;"></div></div>`;
  } else if (famIdx === 1) { // Segmented
    inner = `<div style="display:flex;background:var(--panel2);padding:2px;border-radius:4px;border:1px solid var(--line);gap:2px;"><div style="padding:4px 8px;font-size:8.5px;background:${!on?'var(--ink)':'transparent'};color:${!on?'var(--sc-bg)':'var(--ink3)'};">OFF</div><div style="padding:4px 8px;font-size:8.5px;background:${on?'var(--ink)':'transparent'};color:${on?'var(--sc-bg)':'var(--ink3)'};">ON</div></div>`;
  } else if (famIdx === 2) { // Dual Channel
    inner = `<div style="display:flex;gap:8px;"><div style="width:18px;height:32px;background:var(--panel2);border:1px solid var(--line2);border-radius:4px;padding:2px;"><div style="width:12px;height:12px;background:${on?'var(--ink)':'var(--line)'};border-radius:2px;transform:translateY(${on?'14px':'0'});transition:.2s;"></div></div><div style="width:18px;height:32px;background:var(--panel2);border:1px solid var(--line2);border-radius:4px;padding:2px;"><div style="width:12px;height:12px;background:${!on?'var(--ink)':'var(--line)'};border-radius:2px;transform:translateY(${!on?'14px':'0'});transition:.2s;"></div></div></div>`;
  } else if (famIdx === 3) { // Tachometer Style
    inner = `<svg viewBox="0 0 60 40" width="60" height="40"><path d="M 10 35 A 25 25 0 0 1 50 35" fill="none" stroke="var(--track)" stroke-width="3"/><circle cx="${on?45:15}" cy="22" r="6" fill="var(--ink)"/></svg>`;
  } else if (famIdx === 4) { // Tick Calibrated
    inner = `<div style="width:70px;display:flex;flex-direction:column;gap:3px;"><div style="display:flex;justify-content:space-between;font-size:7px;color:var(--ink3);"><span>0</span><span>1</span></div><div style="height:14px;background:var(--panel2);border:1px solid var(--line2);border-radius:3px;padding:1px;position:relative;"><div style="width:18px;height:10px;background:var(--ink);border-radius:2px;transform:translateX(${on?'48px':'0'});transition:.2s;"></div></div></div>`;
  } else if (famIdx === 5) { // Halo Glow
    inner = `<div style="padding:6px;filter:drop-shadow(0 0 6px ${on?'rgba(255,255,255,0.6)':'transparent'});"><div style="width:48px;height:26px;border-radius:999px;background:${on?'var(--ink)':'var(--panel2)'};border:1.5px solid var(--ink);padding:2px;box-sizing:border-box;"><div style="width:18px;height:18px;border-radius:50%;background:${on?'var(--sc-bg)':'var(--ink)'};transform:translateX(${on?'22px':'0'});transition:.2s;"></div></div></div>`;
  } else if (famIdx === 6) { // Dashed Rail
    inner = `<div style="padding:4px;border:1px dashed var(--ink);border-radius:999px;"><div style="width:44px;height:22px;border-radius:999px;background:var(--panel2);position:relative;padding:2px;box-sizing:border-box;"><div style="width:16px;height:16px;border-radius:50%;background:var(--ink);transform:translateX(${on?'22px':'0'});transition:.2s;"></div></div></div>`;
  } else if (famIdx === 7) { // Center Hub
    inner = `<div style="width:42px;height:42px;border-radius:50%;border:2px solid var(--ink);background:var(--panel2);display:grid;place-items:center;"><div style="width:16px;height:16px;border-radius:50%;background:${on?'var(--ink)':'transparent'};border:1.5px solid var(--ink);"></div></div>`;
  } else if (famIdx === 8) { // Triple Stack
    inner = `<div style="display:flex;gap:3px;background:var(--track);padding:2px;border-radius:6px;"><div style="padding:3px 6px;font-size:8px;background:${p<33?'var(--ink)':'transparent'};color:${p<33?'var(--sc-bg)':'var(--ink3)'};border-radius:3px;">L</div><div style="padding:3px 6px;font-size:8px;background:${p>=33&&p<66?'var(--ink)':'transparent'};color:${p>=33&&p<66?'var(--sc-bg)':'var(--ink3)'};border-radius:3px;">M</div><div style="padding:3px 6px;font-size:8px;background:${p>=66?'var(--ink)':'transparent'};color:${p>=66?'var(--sc-bg)':'var(--ink3)'};border-radius:3px;">H</div></div>`;
  } else if (famIdx === 9) { // Inset Channel
    inner = `<div style="width:56px;height:28px;border-radius:999px;background:var(--panel);box-shadow:inset 0 2px 6px rgba(0,0,0,0.9);padding:3px;box-sizing:border-box;"><div style="width:20px;height:20px;border-radius:50%;background:var(--ink);transform:translateX(${on?'28px':'0'});transition:.2s;"></div></div>`;
  } else if (famIdx === 10) { // Stepped Matrix
    inner = `<div style="display:flex;align-items:center;gap:6px;"><div style="display:grid;grid-template-columns:repeat(2,5px);gap:2px;"><span style="width:5px;height:5px;background:${on?'var(--ink)':'var(--line)'};border-radius:1px;"></span><span style="width:5px;height:5px;background:${on?'var(--ink)':'var(--line)'};border-radius:1px;"></span><span style="width:5px;height:5px;background:${!on?'var(--ink)':'var(--line)'};border-radius:1px;"></span><span style="width:5px;height:5px;background:${!on?'var(--ink)':'var(--line)'};border-radius:1px;"></span></div><span style="font-size:9px;font-family:ui-monospace,monospace;color:var(--ink);">${on?'STATE_1':'STATE_0'}</span></div>`;
  } else if (famIdx === 11) { // Framed Bezel
    inner = `<div class="hud-frame" style="display:inline-block;"><span class="hud-c tl"></span><span class="hud-c tr"></span><span class="hud-c bl"></span><span class="hud-c br"></span><div style="padding:4px 8px;font-size:9px;font-family:ui-monospace,monospace;color:var(--ink);font-weight:bold;">[ ${on?'ARMED':'SAFE'} ]</div></div>`;
  } else if (famIdx === 12) { // Monolithic Slab
    inner = `<div style="padding:6px 14px;background:${on?'var(--ink)':'var(--panel2)'};border:1.5px solid var(--ink);color:${on?'var(--sc-bg)':'var(--ink)'};font-family:ui-monospace,monospace;font-size:10px;font-weight:900;letter-spacing:.1em;box-shadow:2px 2px 0 var(--line2);">${on?'ENABLED':'DISABLED'}</div>`;
  } else if (famIdx === 13) { // Micro Orbit
    inner = `<div style="position:relative;width:52px;height:30px;display:grid;place-items:center;"><div class="ha-spin" style="position:absolute;inset:0;"><div style="width:4px;height:4px;border-radius:50%;background:var(--ink);"></div></div><div style="width:36px;height:18px;border-radius:999px;border:1px solid var(--ink);padding:1px;"><div style="width:14px;height:14px;border-radius:50%;background:var(--ink);transform:translateX(${on?'18px':'0'});transition:.2s;"></div></div></div>`;
  } else { // Gradient Sweep
    inner = `<div style="width:54px;height:26px;border-radius:999px;background:linear-gradient(90deg,var(--panel2),var(--line2));border:1px solid var(--line2);padding:2px;box-sizing:border-box;"><div style="width:20px;height:20px;border-radius:50%;background:var(--ink);transform:translateX(${on?'28px':'0'});transition:.2s;"></div></div>`;
  }

  return {
    html: wrapContainer(fp, ap, inner, 190, cls),
    css: `.${cls} { user-select: none; }`
  };
}


function buildAudioSignal(gid, p, famIdx, varIdx, cls, fp, ap) {
  const lbl = ap.label;
  const isOsc = gid === 'oscilloscope-traces';
  const isWave = gid === 'waveform-monitors';
  let inner = '';

  if (famIdx === 0) { // Hairline Minimal
    inner = `<div style="display:flex;gap:3px;align-items:flex-end;height:38px;">
      ${[35,70,95,50,85,60,75,40].map((h, i) => `<div class="ha-bounce" style="width:2px;height:${h * (p/100)}%;background:var(--ink);animation-delay:${i * 0.12}s;"></div>`).join('')}
    </div>`;
  } else if (famIdx === 1) { // Segmented Ladder
    inner = `<div style="display:flex;gap:4px;align-items:flex-end;height:42px;">
      ${[4, 6, 8, 5, 7, 3].map(n => `<div style="display:flex;flex-direction:column-reverse;gap:2px;width:8px;">${Array.from({length: n}, (_, i) => `<div style="height:3px;background:${(i/n) <= (p/100) ? 'var(--ink)' : 'var(--track)'};border-radius:1px;"></div>`).join('')}</div>`).join('')}
    </div>`;
  } else if (famIdx === 2) { // Dual Channel
    inner = `<div style="display:flex;flex-direction:column;gap:3px;align-items:center;">
      <div style="display:flex;gap:3px;align-items:flex-end;height:20px;">${[30,75,50,90,60].map((h, i) => `<div class="ha-bounce" style="width:5px;height:${h * (p/100)}%;background:var(--ink);animation-delay:${i * 0.1}s;"></div>`).join('')}</div>
      <div style="width:60px;height:1px;background:var(--line2);"></div>
      <div style="display:flex;gap:3px;align-items:flex-start;height:20px;">${[40,60,85,45,70].map((h, i) => `<div class="ha-bounce" style="width:5px;height:${h * (p/100)}%;background:var(--ink3);animation-delay:${i * 0.15}s;"></div>`).join('')}</div>
    </div>`;
  } else if (famIdx === 3) { // Tachometer Style
    inner = `<svg viewBox="0 0 80 50" width="76" height="46"><path d="M 15 45 A 32 32 0 0 1 65 45" fill="none" stroke="var(--track)" stroke-width="3"/><g transform="translate(40,45) rotate(${-45 + p * 0.9})"><line x1="0" y1="0" x2="0" y2="-30" stroke="var(--ink)" stroke-width="2"/></g><text x="40" y="48" text-anchor="middle" font-size="7" fill="var(--ink)">VU // -${Math.round(20 - p*0.2)}dB</text></svg>`;
  } else if (famIdx === 4) { // Tick Calibrated
    inner = `<div style="display:flex;flex-direction:column;gap:3px;width:100%;max-width:170px;">
      <div style="display:flex;justify-content:space-between;font-size:7px;color:var(--ink3);"><span>-20</span><span>-12</span><span>-6</span><span>0</span><span>+3</span></div>
      <div style="display:flex;gap:3px;align-items:flex-end;height:28px;">${[20,40,65,85,95,70,50].map((h, i) => `<div class="ha-bounce" style="flex:1;height:${h * (p/100)}%;background:var(--ink);animation-delay:${i * 0.08}s;"></div>`).join('')}</div>
    </div>`;
  } else if (famIdx === 5) { // Halo Glow
    inner = `<div style="display:flex;gap:4px;align-items:flex-end;height:38px;filter:drop-shadow(0 0 8px rgba(255,255,255,0.45));">
      ${[40,80,95,65,90,50].map((h, i) => `<div class="ha-bounce" style="width:7px;height:${h * (p/100)}%;background:var(--ink);border-radius:2px;animation-delay:${i * 0.1}s;"></div>`).join('')}
    </div>`;
  } else if (famIdx === 6) { // Dashed Rail
    inner = `<div style="display:flex;gap:4px;align-items:flex-end;height:36px;padding:3px;border-bottom:1px dashed var(--ink);">
      ${[30,60,85,55,75,45].map((h, i) => `<div class="ha-bounce" style="width:6px;height:${h * (p/100)}%;border:1px solid var(--ink);border-bottom:none;animation-delay:${i * 0.1}s;"></div>`).join('')}
    </div>`;
  } else if (famIdx === 7) { // Center Hub
    inner = `<div style="position:relative;width:60px;height:60px;display:grid;place-items:center;">
      <div class="ha-spin" style="position:absolute;width:50px;height:50px;border-radius:50%;border:1.5px dashed var(--line2);"></div>
      <div style="width:18px;height:18px;border-radius:50%;background:var(--ink);"></div>
    </div>`;
  } else if (famIdx === 8) { // Triple Stack
    inner = `<div style="display:flex;flex-direction:column;gap:3px;width:100%;max-width:160px;">
      <div style="display:flex;justify-content:space-between;font-size:7px;color:var(--ink3);"><span>BASS</span><span>MID</span><span>TREB</span></div>
      <div style="height:5px;background:var(--track);"><div style="width:${p}%;height:100%;background:var(--ink);"></div></div>
      <div style="height:5px;background:var(--track);"><div style="width:${Math.min(100, p*1.2)}%;height:100%;background:var(--ink2);"></div></div>
      <div style="height:5px;background:var(--track);"><div style="width:${Math.min(100, p*1.4)}%;height:100%;background:var(--ink3);"></div></div>
    </div>`;
  } else if (famIdx === 9) { // Inset Channel
    inner = `<div style="padding:6px;background:var(--panel);border-radius:6px;box-shadow:inset 0 3px 8px rgba(0,0,0,0.8);display:flex;gap:3px;align-items:flex-end;height:32px;">
      ${[30,55,80,60,90,45].map((h, i) => `<div class="ha-bounce" style="width:6px;height:${h * (p/100)}%;background:var(--ink);animation-delay:${i * 0.1}s;"></div>`).join('')}
    </div>`;
  } else if (famIdx === 10) { // Stepped Matrix
    inner = `<div style="display:grid;grid-template-columns:repeat(6,6px);grid-template-rows:repeat(5,4px);gap:2px;">
      ${Array.from({length: 30}, (_, i) => `<div style="background:${(i % 5) <= Math.round(p/20) ? 'var(--ink)' : 'var(--track)'};border-radius:1px;"></div>`).join('')}
    </div>`;
  } else if (famIdx === 11) { // Framed Bezel
    inner = `<div class="hud-frame" style="display:inline-block;"><span class="hud-c tl"></span><span class="hud-c tr"></span><span class="hud-c bl"></span><span class="hud-c br"></span>
      <div style="display:flex;gap:3px;align-items:flex-end;height:30px;padding:2px 6px;">
        ${[40,75,90,60,85,50].map((h, i) => `<div class="ha-bounce" style="width:5px;height:${h * (p/100)}%;background:var(--ink);animation-delay:${i * 0.1}s;"></div>`).join('')}
      </div>
    </div>`;
  } else if (famIdx === 12) { // Monolithic Slab
    inner = `<div style="display:flex;gap:4px;align-items:flex-end;height:36px;padding:4px 8px;background:var(--ink);border-radius:2px;box-shadow:2px 2px 0 var(--line2);">
      ${[50,80,95,70,90].map(h => `<div style="width:7px;height:${h * (p/100)}%;background:var(--sc-bg);"></div>`).join('')}
    </div>`;
  } else if (famIdx === 13) { // Micro Orbit
    inner = `<div style="position:relative;width:64px;height:64px;display:grid;place-items:center;">
      <div class="ha-spin" style="position:absolute;inset:0;"><div style="width:4px;height:4px;border-radius:50%;background:var(--ink);box-shadow:0 0 5px var(--ink);"></div></div>
      <div class="ha-pulse" style="width:24px;height:24px;border-radius:50%;border:1.5px solid var(--ink);"></div>
    </div>`;
  } else { // Gradient Sweep
    inner = `<svg viewBox="0 0 80 40" width="76" height="38"><polygon points="5,35 20,15 40,25 60,10 75,20 75,35 5,35" fill="linear-gradient(to top, var(--line2), var(--ink))" stroke="var(--ink)" stroke-width="1.5"/></svg>`;
  }

  return {
    html: wrapContainer(fp, ap, inner, 190, cls),
    css: `.${cls} { isolation: isolate; }`
  };
}

function buildRadarHud(gid, p, famIdx, varIdx, cls, fp, ap) {
  const lbl = ap.label;
  let inner = '';

  if (famIdx === 0) { // Hairline Minimal
    inner = `<svg viewBox="0 0 80 80" width="74" height="74"><circle cx="40" cy="40" r="32" fill="none" stroke="var(--line2)" stroke-width="1"/><line x1="40" y1="5" x2="40" y2="75" stroke="var(--line2)" stroke-width="0.8"/><line x1="5" y1="40" x2="75" y2="40" stroke="var(--line2)" stroke-width="0.8"/><circle cx="40" cy="40" r="16" fill="none" stroke="var(--line2)" stroke-width="0.8"/><circle cx="${40 + Math.cos(p)*20}" cy="${40 + Math.sin(p)*20}" r="2.5" fill="var(--ink)"/></svg>`;
  } else if (famIdx === 1) { // Segmented Ladder
    inner = `<svg viewBox="0 0 80 80" width="74" height="74"><circle cx="40" cy="40" r="32" fill="none" stroke="var(--track)" stroke-width="3" stroke-dasharray="10 4"/><circle cx="40" cy="40" r="20" fill="none" stroke="var(--line2)" stroke-width="2" stroke-dasharray="8 4"/><circle cx="52" cy="32" r="3" fill="var(--ink)"/></svg>`;
  } else if (famIdx === 2) { // Dual Channel
    inner = `<div style="position:relative;width:68px;height:68px;border-radius:50%;border:1px solid var(--line2);display:grid;place-items:center;"><div class="ha-spin" style="position:absolute;inset:4px;border-radius:50%;border:1px solid var(--ink);border-top-color:transparent;"></div><div class="ha-spin-rev" style="position:absolute;inset:12px;border-radius:50%;border:1px solid var(--ink3);border-bottom-color:transparent;"></div></div>`;
  } else if (famIdx === 3) { // Tachometer Style
    inner = `<svg viewBox="0 0 80 50" width="74" height="46"><path d="M 12 45 A 32 32 0 0 1 68 45" fill="none" stroke="var(--track)" stroke-width="3"/><g transform="translate(40,45) rotate(${-60 + p * 1.2})"><line x1="0" y1="0" x2="0" y2="-30" stroke="var(--ink)" stroke-width="1.5"/></g></svg>`;
  } else if (famIdx === 4) { // Tick Calibrated
    inner = `<svg viewBox="0 0 80 80" width="74" height="74">${Array.from({length:8}, (_,i)=>`<line x1="40" y1="6" x2="40" y2="12" stroke="var(--ink3)" stroke-width="1" transform="rotate(${i * 45} 40 40)"/>`).join('')}<circle cx="40" cy="40" r="28" fill="none" stroke="var(--ink)" stroke-width="1.5"/><circle cx="40" cy="40" r="14" fill="none" stroke="var(--line2)" stroke-width="1"/><circle cx="40" cy="40" r="2" fill="var(--ink)"/></svg>`;
  } else if (famIdx === 5) { // Halo Glow
    inner = `<div style="position:relative;width:68px;height:68px;border-radius:50%;border:2px solid var(--ink);display:grid;place-items:center;filter:drop-shadow(0 0 8px rgba(255,255,255,0.45));"><div class="ha-pulse" style="width:14px;height:14px;border-radius:50%;background:var(--ink);"></div></div>`;
  } else if (famIdx === 6) { // Dashed Rail
    inner = `<div style="width:68px;height:68px;border-radius:50%;border:1.5px dashed var(--ink);display:grid;place-items:center;" class="ha-spin"><div style="width:20px;height:20px;border-radius:50%;border:1px solid var(--ink);"></div></div>`;
  } else if (famIdx === 7) { // Center Hub
    inner = `<svg viewBox="0 0 80 80" width="72" height="72"><circle cx="40" cy="40" r="34" fill="none" stroke="var(--track)" stroke-width="2"/><circle cx="40" cy="40" r="18" fill="var(--panel2)" stroke="var(--ink)" stroke-width="2"/><circle cx="40" cy="40" r="6" fill="var(--ink)"/><line x1="40" y1="6" x2="40" y2="22" stroke="var(--ink)" stroke-width="1.5"/></svg>`;
  } else if (famIdx === 8) { // Triple Stack
    inner = `<svg viewBox="0 0 80 80" width="74" height="74"><circle cx="40" cy="40" r="34" fill="none" stroke="var(--line2)" stroke-width="1.5"/><circle cx="40" cy="40" r="24" fill="none" stroke="var(--ink)" stroke-width="1.5"/><circle cx="40" cy="40" r="14" fill="none" stroke="var(--line2)" stroke-width="1.5"/><circle cx="40" cy="40" r="4" fill="var(--ink)"/></svg>`;
  } else if (famIdx === 9) { // Inset Channel
    inner = `<div style="width:72px;height:72px;border-radius:50%;background:var(--panel);box-shadow:inset 0 3px 8px rgba(0,0,0,0.9);display:grid;place-items:center;"><div style="width:40px;height:40px;border-radius:50%;border:1px solid var(--ink);display:grid;place-items:center;"><div style="width:6px;height:6px;border-radius:50%;background:var(--ink);"></div></div></div>`;
  } else if (famIdx === 10) { // Stepped Matrix
    inner = `<svg viewBox="0 0 80 80" width="72" height="72"><line x1="10" y1="40" x2="70" y2="40" stroke="var(--line2)" stroke-width="1"/><line x1="40" y1="10" x2="40" y2="70" stroke="var(--line2)" stroke-width="1"/>${[[25,25],[55,25],[25,55],[55,55]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="2.5" fill="var(--ink)"/>`).join('')}<circle cx="40" cy="40" r="3" fill="var(--ink)"/></svg>`;
  } else if (famIdx === 11) { // Framed Bezel
    inner = `<div class="hud-frame" style="display:inline-block;"><span class="hud-c tl"></span><span class="hud-c tr"></span><span class="hud-c bl"></span><span class="hud-c br"></span><svg viewBox="0 0 70 70" width="60" height="60"><circle cx="35" cy="35" r="24" fill="none" stroke="var(--ink)" stroke-width="1.5"/><line x1="35" y1="11" x2="35" y2="21" stroke="var(--ink)" stroke-width="1.5"/><line x1="35" y1="49" x2="35" y2="59" stroke="var(--ink)" stroke-width="1.5"/><line x1="11" y1="35" x2="21" y2="35" stroke="var(--ink)" stroke-width="1.5"/><line x1="49" y1="35" x2="59" y2="35" stroke="var(--ink)" stroke-width="1.5"/><circle cx="35" cy="35" r="3" fill="var(--ink)"/></svg></div>`;
  } else if (famIdx === 12) { // Monolithic Slab
    inner = `<div style="width:72px;height:72px;background:var(--ink);color:var(--sc-bg);display:grid;place-items:center;box-shadow:3px 3px 0 var(--line2);font-family:ui-monospace,monospace;"><div style="font-size:8px;font-weight:bold;">LOCK_ON</div><div style="font-size:11px;font-weight:900;">TGT-01</div></div>`;
  } else if (famIdx === 13) { // Micro Orbit
    inner = `<div style="position:relative;width:72px;height:72px;display:grid;place-items:center;"><div class="ha-spin" style="position:absolute;inset:0;"><div style="width:5px;height:5px;border-radius:50%;background:var(--ink);box-shadow:0 0 6px var(--ink);"></div></div><svg viewBox="0 0 60 60" width="54" height="54"><circle cx="30" cy="30" r="22" fill="none" stroke="var(--ink)" stroke-width="1.5"/><circle cx="30" cy="30" r="3" fill="var(--ink)"/></svg></div>`;
  } else { // Gradient Sweep
    inner = `<div style="position:relative;width:72px;height:72px;border-radius:50%;border:1.5px solid var(--ink);background:var(--panel2);display:grid;place-items:center;"><div class="ha-sweep" style="position:absolute;width:100%;height:100%;border-radius:50%;background:conic-gradient(from 0deg, transparent 270deg, var(--ink) 360deg);opacity:.4;"></div><div style="width:6px;height:6px;border-radius:50%;background:var(--ink);"></div></div>`;
  }

  return {
    html: wrapContainer(fp, ap, inner, 190, cls),
    css: `.${cls} { isolation: isolate; }`
  };
}


function buildStatusFeedback(gid, p, famIdx, varIdx, cls, fp, ap) {
  const lbl = ap.label;
  const isSpn = gid === 'loading-spinners';
  const isBcn = gid === 'pulse-beacons';
  let inner = '';

  if (famIdx === 0) { // Hairline Minimal
    inner = isSpn ? `<div class="ha-spin" style="width:34px;height:34px;border-radius:50%;border:1px solid var(--line2);border-top-color:var(--ink);"></div>`
      : `<div style="position:relative;width:34px;height:34px;display:grid;place-items:center;"><div class="ha-ping" style="position:absolute;width:100%;height:100%;border-radius:50%;border:1px solid var(--ink);"></div><div style="width:6px;height:6px;border-radius:50%;background:var(--ink);"></div></div>`;
  } else if (famIdx === 1) { // Segmented Ladder
    inner = `<div class="ha-spin" style="width:36px;height:36px;border-radius:50%;border:3px dashed var(--ink);"></div>`;
  } else if (famIdx === 2) { // Dual Channel
    inner = `<div style="position:relative;width:40px;height:40px;display:grid;place-items:center;"><div class="ha-spin" style="position:absolute;inset:0;border-radius:50%;border:2px solid var(--ink);border-right-color:transparent;"></div><div class="ha-spin-rev" style="position:absolute;inset:6px;border-radius:50%;border:1.5px solid var(--ink3);border-left-color:transparent;"></div></div>`;
  } else if (famIdx === 3) { // Tachometer Style
    inner = `<svg viewBox="0 0 60 40" width="56" height="38"><path d="M 10 35 A 20 20 0 0 1 50 35" fill="none" stroke="var(--track)" stroke-width="3"/><g transform="translate(30,35) rotate(${-60 + p * 1.2})"><line x1="0" y1="0" x2="0" y2="-18" stroke="var(--ink)" stroke-width="2"/></g></svg>`;
  } else if (famIdx === 4) { // Tick Calibrated
    inner = `<svg viewBox="0 0 60 60" width="52" height="52">${Array.from({length:8}, (_,i)=>`<line x1="30" y1="6" x2="30" y2="10" stroke="var(--ink3)" stroke-width="1.2" transform="rotate(${i * 45} 30 30)"/>`).join('')}<circle cx="30" cy="30" r="16" fill="none" stroke="var(--ink)" stroke-width="2" class="ha-spin"/></svg>`;
  } else if (famIdx === 5) { // Halo Glow
    inner = `<div style="padding:6px;filter:drop-shadow(0 0 8px rgba(255,255,255,0.6));"><div class="ha-pulse" style="width:28px;height:28px;border-radius:50%;background:var(--ink);"></div></div>`;
  } else if (famIdx === 6) { // Dashed Rail
    inner = `<div class="ha-spin" style="width:38px;height:38px;border-radius:50%;border:2px dashed var(--ink);display:grid;place-items:center;"><div style="width:10px;height:10px;border-radius:50%;background:var(--ink);"></div></div>`;
  } else if (famIdx === 7) { // Center Hub
    inner = `<div style="width:44px;height:44px;border-radius:50%;border:2px solid var(--ink);background:var(--panel2);display:grid;place-items:center;"><div class="ha-pulse" style="width:18px;height:18px;border-radius:50%;background:var(--ink);"></div></div>`;
  } else if (famIdx === 8) { // Triple Stack
    inner = `<div style="position:relative;width:44px;height:44px;display:grid;place-items:center;"><div class="ha-spin" style="position:absolute;inset:0;border-radius:50%;border:1px solid var(--ink);border-top-color:transparent;"></div><div class="ha-spin-rev" style="position:absolute;inset:6px;border-radius:50%;border:1px solid var(--ink2);border-bottom-color:transparent;"></div><div class="ha-spin" style="position:absolute;inset:12px;border-radius:50%;border:1px solid var(--ink3);border-left-color:transparent;"></div></div>`;
  } else if (famIdx === 9) { // Inset Channel
    inner = `<div style="width:48px;height:48px;border-radius:50%;background:var(--panel);box-shadow:inset 0 3px 8px rgba(0,0,0,0.9);display:grid;place-items:center;"><div class="ha-spin" style="width:24px;height:24px;border-radius:50%;border:2px solid var(--track);border-top-color:var(--ink);"></div></div>`;
  } else if (famIdx === 10) { // Stepped Matrix
    inner = `<div style="display:grid;grid-template-columns:repeat(3,6px);gap:3px;"><span class="ha-pulse" style="width:6px;height:6px;border-radius:1px;background:var(--ink);"></span><span style="width:6px;height:6px;border-radius:1px;background:var(--track);"></span><span class="ha-pulse" style="width:6px;height:6px;border-radius:1px;background:var(--ink);"></span><span style="width:6px;height:6px;border-radius:1px;background:var(--track);"></span><span class="ha-pulse" style="width:6px;height:6px;border-radius:1px;background:var(--ink);"></span><span style="width:6px;height:6px;border-radius:1px;background:var(--track);"></span></div>`;
  } else if (famIdx === 11) { // Framed Bezel
    inner = `<div class="hud-frame" style="display:inline-block;"><span class="hud-c tl"></span><span class="hud-c tr"></span><span class="hud-c bl"></span><span class="hud-c br"></span><div class="ha-spin" style="width:28px;height:28px;border-radius:50%;border:2px solid var(--track);border-top-color:var(--ink);"></div></div>`;
  } else if (famIdx === 12) { // Monolithic Slab
    inner = `<div style="padding:8px 14px;background:var(--ink);color:var(--sc-bg);font-family:ui-monospace,monospace;font-size:10px;font-weight:900;letter-spacing:.12em;box-shadow:2px 2px 0 var(--line2);">${lbl} // ON</div>`;
  } else if (famIdx === 13) { // Micro Orbit
    inner = `<div style="position:relative;width:44px;height:44px;display:grid;place-items:center;"><div class="ha-spin" style="position:absolute;inset:0;"><div style="width:5px;height:5px;border-radius:50%;background:var(--ink);box-shadow:0 0 5px var(--ink);"></div></div><div style="width:12px;height:12px;border-radius:50%;background:var(--ink);"></div></div>`;
  } else { // Gradient Sweep
    inner = `<div class="ha-spin" style="width:36px;height:36px;border-radius:50%;background:conic-gradient(from 0deg, transparent, var(--ink));-webkit-mask:radial-gradient(farthest-side, transparent 65%, #000 66%);mask:radial-gradient(farthest-side, transparent 65%, #000 66%);"></div>`;
  }

  return {
    html: wrapContainer(fp, ap, inner, 180, cls),
    css: `.${cls} { isolation: isolate; }`
  };
}

function buildCyberStream(gid, p, famIdx, varIdx, cls, fp, ap) {
  const lbl = ap.label;
  let inner = '';

  if (famIdx === 0) { // Hairline Minimal
    inner = `<div style="font-family:ui-monospace,monospace;font-size:8px;line-height:1.2;color:var(--ink);text-align:left;"><div>101010</div><div>010101</div><div>110011</div></div>`;
  } else if (famIdx === 1) { // Segmented Ladder
    inner = `<div style="display:flex;gap:3px;font-family:ui-monospace,monospace;font-size:8px;"><div style="padding:2px 4px;background:var(--panel2);border:1px solid var(--line);">0x1F</div><div style="padding:2px 4px;background:var(--ink);color:var(--sc-bg);">0x8A</div></div>`;
  } else if (famIdx === 2) { // Dual Channel
    inner = `<div style="display:flex;gap:8px;font-family:ui-monospace,monospace;font-size:8px;color:var(--ink3);"><div>TX: 0101<br>RX: 1010</div><div>PACKET: OK<br>LOSS: 0%</div></div>`;
  } else if (famIdx === 3) { // Tachometer Style
    inner = `<div class="ha-spin" style="width:40px;height:40px;border-radius:50%;border:2px dashed var(--ink);display:grid;place-items:center;font-size:7px;font-family:ui-monospace,monospace;">HEX</div>`;
  } else if (famIdx === 4) { // Tick Calibrated
    inner = `<div style="padding:4px 8px;border:1px solid var(--line2);font-family:ui-monospace,monospace;font-size:7.5px;color:var(--ink);"><code>0x000: 48 41 4C 46</code></div>`;
  } else if (famIdx === 5) { // Halo Glow
    inner = `<div style="padding:6px 12px;filter:drop-shadow(0 0 6px rgba(255,255,255,0.45));font-family:ui-monospace,monospace;font-size:10px;font-weight:bold;color:var(--ink);">MATRIX // STREAM</div>`;
  } else if (famIdx === 6) { // Dashed Rail
    inner = `<div style="padding:6px 10px;border:1px dashed var(--ink);font-family:ui-monospace,monospace;font-size:8px;color:var(--ink);">DATA_BUS: ACTIVE</div>`;
  } else if (famIdx === 7) { // Center Hub
    inner = `<div style="position:relative;width:50px;height:50px;display:grid;place-items:center;"><div class="ha-ping" style="position:absolute;width:40px;height:40px;border-radius:50%;background:var(--line);"></div><div style="font-size:8px;font-weight:bold;color:var(--ink);z-index:2;">HUB</div></div>`;
  } else if (famIdx === 8) { // Triple Stack
    inner = `<div style="display:flex;flex-direction:column;gap:2px;font-family:ui-monospace,monospace;font-size:7px;color:var(--ink3);text-align:left;"><div>STREAM_A: 100%</div><div>STREAM_B: 75%</div><div>STREAM_C: 50%</div></div>`;
  } else if (famIdx === 9) { // Inset Channel
    inner = `<div style="padding:6px 10px;background:var(--panel);border-radius:4px;box-shadow:inset 0 2px 6px rgba(0,0,0,0.9);font-family:ui-monospace,monospace;font-size:8px;color:var(--ink);">TERMINAL_IO</div>`;
  } else if (famIdx === 10) { // Stepped Matrix
    inner = `<div style="display:grid;grid-template-columns:repeat(4,6px);gap:2px;">${Array.from({length:16}, (_,i)=>`<div style="width:6px;height:6px;background:${(i%3)===0?'var(--ink)':'var(--track)'};border-radius:1px;"></div>`).join('')}</div>`;
  } else if (famIdx === 11) { // Framed Bezel
    inner = `<div class="hud-frame" style="display:inline-block;"><span class="hud-c tl"></span><span class="hud-c tr"></span><span class="hud-c bl"></span><span class="hud-c br"></span><div style="padding:4px 8px;font-family:ui-monospace,monospace;font-size:8px;color:var(--ink);">SYS.LOG: OK</div></div>`;
  } else if (famIdx === 12) { // Monolithic Slab
    inner = `<div style="padding:8px 14px;background:var(--ink);color:var(--sc-bg);font-family:ui-monospace,monospace;font-size:10px;font-weight:900;letter-spacing:.1em;box-shadow:2px 2px 0 var(--line2);">DATA_STREAM</div>`;
  } else if (famIdx === 13) { // Micro Orbit
    inner = `<div style="position:relative;padding:8px 16px;"><div class="ha-spin" style="position:absolute;inset:0;"><div style="width:4px;height:4px;border-radius:50%;background:var(--ink);"></div></div><span style="font-family:ui-monospace,monospace;font-size:8.5px;color:var(--ink);">ORBIT_FEED</span></div>`;
  } else { // Gradient Sweep
    inner = `<div style="width:120px;height:12px;background:linear-gradient(90deg,transparent,var(--ink),transparent);opacity:.8;"></div>`;
  }

  return {
    html: wrapContainer(fp, ap, inner, 190, cls),
    css: `.${cls} { isolation: isolate; }`
  };
}


function buildNavigation(gid, p, famIdx, varIdx, cls, fp, ap) {
  const lbl = ap.label;
  const icon = ap.icon;
  const isBread = gid === 'breadcrumb-navs';
  const isPgn = gid === 'pagination-bars';
  const isWzd = gid === 'step-wizards';
  const isTab = gid === 'tab-navigators';
  const isTree = gid === 'tree-views';
  const isFab = gid === 'floating-action-menus';
  const isCtx = gid === 'context-menus';
  const isTml = gid === 'timeline-nodes';
  const isAcd = gid === 'accordion-drawers';
  const isRail = gid === 'nav-rails';
  let inner = '';

  if (famIdx === 0) { // Hairline Minimal
    if (isBread) {
      inner = `<div style="display:flex;align-items:center;gap:6px;font-size:9.5px;color:var(--ink3);font-family:ui-monospace,monospace;"><span>SYS</span><span style="opacity:.4;">/</span><span>CORE</span><span style="opacity:.4;">/</span><span style="color:var(--ink);font-weight:bold;">${lbl}</span></div>`;
    } else if (isPgn) {
      inner = `<div style="display:flex;gap:4px;align-items:center;font-family:ui-monospace,monospace;font-size:9px;"><span style="color:var(--ink3);cursor:pointer;">«</span><span style="border-bottom:1px solid var(--ink);color:var(--ink);padding:0 4px;font-weight:bold;">01</span><span style="color:var(--ink3);padding:0 4px;">02</span><span style="color:var(--ink3);padding:0 4px;">03</span><span style="color:var(--ink3);cursor:pointer;">»</span></div>`;
    } else if (isTab) {
      inner = `<div style="display:flex;gap:16px;border-bottom:1px solid var(--line2);padding-bottom:4px;font-size:9.5px;font-family:ui-monospace,monospace;"><span style="color:var(--ink);border-bottom:1.5px solid var(--ink);padding-bottom:4px;">MAIN</span><span style="color:var(--ink3);">LOGS</span><span style="color:var(--ink3);">DIAG</span></div>`;
    } else {
      inner = `<div style="display:flex;align-items:center;gap:8px;font-family:ui-monospace,monospace;font-size:9px;color:var(--ink);"><span style="width:5px;height:5px;border-radius:50%;border:1px solid var(--ink);"></span><span>NAV // ${lbl}</span></div>`;
    }
  } else if (famIdx === 1) { // Segmented Ladder
    if (isPgn || isTab) {
      inner = `<div style="display:flex;gap:2px;background:var(--panel2);padding:2px;border:1px solid var(--line);border-radius:4px;"><span style="padding:4px 8px;background:var(--ink);color:var(--sc-bg);font-size:8.5px;font-weight:bold;border-radius:2px;">SEC_01</span><span style="padding:4px 8px;font-size:8.5px;color:var(--ink3);">SEC_02</span><span style="padding:4px 8px;font-size:8.5px;color:var(--ink3);">SEC_03</span></div>`;
    } else if (isWzd) {
      inner = `<div style="display:flex;align-items:center;gap:4px;">${[1,2,3].map(n => `<div style="padding:3px 8px;background:${n<=2?'var(--ink)':'var(--track)'};color:${n<=2?'var(--sc-bg)':'var(--ink3)'};font-size:8.5px;font-family:ui-monospace,monospace;font-weight:bold;border-radius:2px;">PH_${n}</div>`).join('')}</div>`;
    } else {
      inner = `<div style="display:flex;gap:3px;align-items:center;"><span style="width:14px;height:14px;background:var(--ink);color:var(--sc-bg);display:grid;place-items:center;font-size:8px;font-weight:bold;">1</span><span style="width:14px;height:14px;background:var(--line2);display:inline-block;"></span><span style="font-size:9px;color:var(--ink);">${lbl}</span></div>`;
    }
  } else if (famIdx === 2) { // Dual Channel
    inner = `<div style="display:flex;flex-direction:column;gap:3px;width:100%;max-width:180px;font-family:ui-monospace,monospace;font-size:8.5px;">
      <div style="display:flex;justify-content:space-between;color:var(--ink);"><span>CH_A: /SYS/ROOT</span><span>OK</span></div>
      <div style="height:1px;background:var(--line2);"></div>
      <div style="display:flex;justify-content:space-between;color:var(--ink3);"><span>CH_B: /SYS/${lbl}</span><span>ACT</span></div>
    </div>`;
  } else if (famIdx === 3) { // Tachometer Style
    inner = `<svg viewBox="0 0 70 42" width="66" height="40">
      <path d="M 12 38 A 26 26 0 0 1 58 38" fill="none" stroke="var(--track)" stroke-width="2.5"/>
      <path d="M 12 38 A 26 26 0 0 1 58 38" fill="none" stroke="var(--ink)" stroke-width="2.5" stroke-dasharray="82" stroke-dashoffset="${82 * (1 - p/100)}"/>
      <text x="35" y="38" text-anchor="middle" font-size="8" font-family="ui-monospace,monospace" fill="var(--ink)">STEP ${Math.ceil(p/33)}</text>
    </svg>`;
  } else if (famIdx === 4) { // Tick Calibrated
    inner = `<div style="display:flex;flex-direction:column;gap:2px;width:100%;max-width:180px;">
      <div style="display:flex;justify-content:space-between;font-size:8px;font-family:ui-monospace,monospace;color:var(--ink3);"><span>01</span><span>02</span><span>03</span><span>04</span></div>
      <div style="display:flex;justify-content:space-between;height:4px;">${Array.from({length:7}, (_,i)=>`<span style="width:1px;height:${i%2===0?4:2}px;background:var(--ink);"></span>`).join('')}</div>
      <div style="font-size:8.5px;font-family:ui-monospace,monospace;color:var(--ink);font-weight:bold;margin-top:2px;">POS // ${lbl}</div>
    </div>`;
  } else if (famIdx === 5) { // Halo Glow
    inner = `<div style="padding:6px 12px;filter:drop-shadow(0 0 8px rgba(255,255,255,0.4));background:var(--panel2);border:1px solid var(--ink);border-radius:20px;display:flex;align-items:center;gap:8px;">
      <span class="ha-pulse" style="width:6px;height:6px;border-radius:50%;background:var(--ink);"></span>
      <span style="font-family:ui-monospace,monospace;font-size:9.5px;font-weight:bold;color:var(--ink);">${lbl}</span>
    </div>`;
  } else if (famIdx === 6) { // Dashed Rail
    inner = `<div style="padding:5px 10px;border:1px dashed var(--ink);border-radius:4px;display:flex;align-items:center;gap:6px;font-family:ui-monospace,monospace;font-size:9px;">
      <span style="color:var(--ink3);">PATH:</span><span style="color:var(--ink);font-weight:bold;">${lbl}</span><span class="ha-spin" style="display:inline-block;font-size:8px;">☼</span>
    </div>`;
  } else if (famIdx === 7) { // Center Hub
    inner = `<div style="width:54px;height:54px;border-radius:50%;border:1.5px solid var(--line2);position:relative;display:grid;place-items:center;">
      <div style="position:absolute;inset:4px;border-radius:50%;border:1px solid var(--ink);display:grid;place-items:center;">
        <div style="font-family:ui-monospace,monospace;font-size:8px;font-weight:bold;color:var(--ink);">${Math.ceil(p/25)}</div>
      </div>
      <div class="ha-spin" style="position:absolute;inset:0;"><span style="position:absolute;top:-3px;left:50%;transform:translateX(-50%);width:5px;height:5px;background:var(--ink);border-radius:50%;"></span></div>
    </div>`;
  } else if (famIdx === 8) { // Triple Stack
    inner = `<div style="display:flex;flex-direction:column;gap:2px;width:100%;max-width:160px;font-family:ui-monospace,monospace;font-size:7.5px;">
      <div style="padding:2px 6px;background:var(--panel2);border-left:2px solid var(--ink);color:var(--ink);">LVL 1 // SECTOR</div>
      <div style="padding:2px 6px;background:var(--panel2);border-left:2px solid var(--ink2);color:var(--ink2);margin-left:6px;">LVL 2 // CLUSTER</div>
      <div style="padding:2px 6px;background:var(--panel2);border-left:2px solid var(--ink);color:var(--ink);font-weight:bold;margin-left:12px;">LVL 3 // ${lbl}</div>
    </div>`;
  } else if (famIdx === 9) { // Inset Channel
    inner = `<div style="padding:6px 12px;background:var(--panel);border-radius:6px;box-shadow:inset 0 3px 8px rgba(0,0,0,0.85);display:flex;align-items:center;gap:8px;font-family:ui-monospace,monospace;font-size:9.5px;">
      <span style="color:var(--ink3);">NAV:</span><span style="color:var(--ink);font-weight:bold;">${lbl}</span>
    </div>`;
  } else if (famIdx === 10) { // Stepped Matrix
    inner = `<div style="display:flex;align-items:center;gap:8px;">
      <div style="display:grid;grid-template-columns:repeat(3,5px);gap:2px;">${Array.from({length:9}, (_,i)=>`<span style="width:5px;height:5px;background:${i<=Math.floor(p/12)?'var(--ink)':'var(--track)'};border-radius:1px;"></span>`).join('')}</div>
      <span style="font-family:ui-monospace,monospace;font-size:9px;color:var(--ink);font-weight:bold;">MTRX // ${lbl}</span>
    </div>`;
  } else if (famIdx === 11) { // Framed Bezel
    inner = `<div class="hud-frame" style="display:inline-block;"><span class="hud-c tl"></span><span class="hud-c tr"></span><span class="hud-c bl"></span><span class="hud-c br"></span>
      <div style="padding:4px 10px;font-family:ui-monospace,monospace;font-size:9px;color:var(--ink);font-weight:bold;">[ NAV :: ${lbl} ]</div>
    </div>`;
  } else if (famIdx === 12) { // Monolithic Slab
    inner = `<div style="padding:8px 16px;background:var(--ink);color:var(--sc-bg);font-family:ui-monospace,monospace;font-size:10.5px;font-weight:900;letter-spacing:.12em;box-shadow:2px 2px 0 var(--line2);">
      ${lbl} // 0${Math.ceil(p/20)}
    </div>`;
  } else if (famIdx === 13) { // Micro Orbit
    inner = `<div style="position:relative;padding:8px 18px;display:inline-flex;align-items:center;gap:6px;">
      <div class="ha-spin" style="position:absolute;inset:0;"><div style="width:4px;height:4px;border-radius:50%;background:var(--ink);box-shadow:0 0 5px var(--ink);"></div></div>
      <span style="font-family:ui-monospace,monospace;font-size:9.5px;color:var(--ink);font-weight:bold;">${lbl}</span>
    </div>`;
  } else { // Gradient Sweep
    inner = `<div style="width:100%;max-width:180px;height:24px;border-radius:4px;background:linear-gradient(90deg,var(--panel2),var(--line2));border:1px solid var(--line2);display:flex;align-items:center;justify-content:space-between;padding:0 8px;font-family:ui-monospace,monospace;font-size:8.5px;color:var(--ink);">
      <span>SWEEP</span><span style="font-weight:bold;">${lbl}</span>
    </div>`;
  }

  return {
    html: wrapContainer(fp, ap, inner, 210, cls),
    css: `.${cls} { isolation: isolate; }`
  };
}


function buildDataChart(gid, p, famIdx, varIdx, cls, fp, ap) {
  const lbl = ap.label;
  const isKpi = gid === 'kpi-metric-cards';
  const isDonut = gid === 'donut-charts';
  const isTable = gid === 'data-tables';
  const isCandle = gid === 'candlestick-bars';
  let inner = '';

  if (famIdx === 0) { // Hairline Minimal
    inner = `<svg viewBox="0 0 100 44" width="94" height="40" style="display:block;">
      <path d="M 5 36 Q 25 ${38 - p*0.3} 50 ${26 - p*0.2} T 95 ${12 + (100-p)*0.2}" fill="none" stroke="var(--ink)" stroke-width="1.2"/>
      <circle cx="95" cy="${12 + (100-p)*0.2}" r="2" fill="var(--ink)"/>
    </svg>`;
  } else if (famIdx === 1) { // Segmented Ladder
    inner = `<div style="display:flex;gap:3px;align-items:flex-end;height:36px;width:100%;max-width:140px;">
      ${[20, 45, 75, 55, 90, 65, 80, 40].map((h, i) => `<div style="flex:1;height:${h * (p/100)}%;background:${i%2===0?'var(--ink)':'var(--ink3)'};border-radius:1px;"></div>`).join('')}
    </div>`;
  } else if (famIdx === 2) { // Dual Channel
    inner = `<svg viewBox="0 0 100 44" width="94" height="40" style="display:block;">
      <path d="M 5 32 Q 30 10 55 24 T 95 8" fill="none" stroke="var(--ink)" stroke-width="1.5"/>
      <path d="M 5 38 Q 30 24 55 35 T 95 20" fill="none" stroke="var(--ink3)" stroke-width="1" stroke-dasharray="3 2"/>
    </svg>`;
  } else if (famIdx === 3) { // Tachometer Style
    inner = `<svg viewBox="0 0 80 50" width="76" height="46">
      <path d="M 15 45 A 30 30 0 1 1 65 45" fill="none" stroke="var(--track)" stroke-width="3"/>
      <path d="M 15 45 A 30 30 0 1 1 65 45" fill="none" stroke="var(--ink)" stroke-width="3" stroke-dasharray="140" stroke-dashoffset="${140 * (1 - p/100)}"/>
      <text x="40" y="44" text-anchor="middle" font-size="9" font-family="ui-monospace,monospace" font-weight="bold" fill="var(--ink)">${Math.round(p)}%</text>
    </svg>`;
  } else if (famIdx === 4) { // Tick Calibrated
    inner = `<div style="display:flex;flex-direction:column;gap:2px;width:100%;max-width:160px;">
      <div style="display:flex;justify-content:space-between;font-size:7px;color:var(--ink3);font-family:ui-monospace,monospace;"><span>0K</span><span>50K</span><span>100K</span></div>
      <svg viewBox="0 0 100 28" width="100%" height="28">
        <line x1="0" y1="26" x2="100" y2="26" stroke="var(--line2)" stroke-width="1"/>
        ${[0,25,50,75,100].map(x=>`<line x1="${x}" y1="24" x2="${x}" y2="28" stroke="var(--ink3)" stroke-width="1"/>`).join('')}
        <polyline points="0,22 25,14 50,18 75,${26 - p*0.2} 100,6" fill="none" stroke="var(--ink)" stroke-width="1.5"/>
      </svg>
    </div>`;
  } else if (famIdx === 5) { // Halo Glow
    inner = `<div style="padding:4px;filter:drop-shadow(0 0 8px rgba(255,255,255,0.45));">
      <svg viewBox="0 0 100 38" width="94" height="36">
        <path d="M 5 30 Q 30 5 60 22 T 95 8" fill="none" stroke="var(--ink)" stroke-width="2.5" class="ha-pulse"/>
      </svg>
    </div>`;
  } else if (famIdx === 6) { // Dashed Rail
    inner = `<div style="border:1px dashed var(--line2);padding:6px;width:100%;max-width:150px;box-sizing:border-box;">
      <svg viewBox="0 0 90 30" width="100%" height="30">
        <line x1="0" y1="15" x2="90" y2="15" stroke="var(--line2)" stroke-dasharray="3 3"/>
        <polyline points="5,22 25,12 45,18 65,${28 - p*0.2} 85,8" fill="none" stroke="var(--ink)" stroke-width="1.5"/>
      </svg>
    </div>`;
  } else if (famIdx === 7) { // Center Hub
    inner = `<svg viewBox="0 0 70 70" width="64" height="64">
      <circle cx="35" cy="35" r="28" fill="none" stroke="var(--track)" stroke-width="4"/>
      <circle cx="35" cy="35" r="28" fill="none" stroke="var(--ink)" stroke-width="4" stroke-dasharray="175" stroke-dashoffset="${175 * (1 - p/100)}" transform="rotate(-90 35 35)"/>
      <circle cx="35" cy="35" r="14" fill="var(--panel2)" stroke="var(--ink)" stroke-width="1.5"/>
      <text x="35" y="38" text-anchor="middle" font-size="8" font-family="ui-monospace,monospace" fill="var(--ink)">${Math.round(p)}%</text>
    </svg>`;
  } else if (famIdx === 8) { // Triple Stack
    inner = `<div style="display:flex;flex-direction:column;gap:3px;width:100%;max-width:150px;">
      <div style="height:6px;background:var(--track);border-radius:1px;overflow:hidden;"><div style="width:${p}%;height:100%;background:var(--ink);"></div></div>
      <div style="height:6px;background:var(--track);border-radius:1px;overflow:hidden;"><div style="width:${Math.min(100, p*1.2)}%;height:100%;background:var(--ink2);"></div></div>
      <div style="height:6px;background:var(--track);border-radius:1px;overflow:hidden;"><div style="width:${Math.min(100, p*0.8)}%;height:100%;background:var(--ink3);"></div></div>
    </div>`;
  } else if (famIdx === 9) { // Inset Channel
    inner = `<div style="padding:6px;background:var(--panel);border-radius:6px;box-shadow:inset 0 3px 8px rgba(0,0,0,0.85);width:100%;max-width:150px;box-sizing:border-box;">
      <svg viewBox="0 0 90 30" width="100%" height="30">
        <path d="M 5 25 Q 30 8 50 18 T 85 6" fill="none" stroke="var(--ink)" stroke-width="1.8"/>
      </svg>
    </div>`;
  } else if (famIdx === 10) { // Stepped Matrix
    inner = `<div style="display:grid;grid-template-columns:repeat(8,6px);gap:3px;">
      ${Array.from({length: 24}, (_, i) => `<span style="width:6px;height:6px;background:${(i/24)<=(p/100)?'var(--ink)':'var(--track)'};border-radius:1px;"></span>`).join('')}
    </div>`;
  } else if (famIdx === 11) { // Framed Bezel
    inner = `<div class="hud-frame" style="width:100%;max-width:160px;">
      <span class="hud-c tl"></span><span class="hud-c tr"></span><span class="hud-c bl"></span><span class="hud-c br"></span>
      <div style="display:flex;justify-content:space-between;font-size:7.5px;color:var(--ink3);font-family:ui-monospace,monospace;margin-bottom:2px;"><span>DATA.STREAM</span><span>${Math.round(p)}%</span></div>
      <svg viewBox="0 0 80 24" width="100%" height="24"><polyline points="2,20 20,8 40,16 60,${24-p*0.2} 78,4" fill="none" stroke="var(--ink)" stroke-width="1.5"/></svg>
    </div>`;
  } else if (famIdx === 12) { // Monolithic Slab
    inner = `<div style="width:100%;max-width:160px;background:var(--ink);color:var(--sc-bg);padding:8px 12px;border-radius:2px;box-shadow:2px 2px 0 var(--line2);font-family:ui-monospace,monospace;">
      <div style="font-size:7px;letter-spacing:.12em;opacity:.7;">KPI_METRIC</div>
      <div style="font-size:16px;font-weight:900;">${(p * 14.2).toFixed(1)}k</div>
      <div style="font-size:7px;opacity:.8;">▲ +${Math.round(p/5)}% TREND</div>
    </div>`;
  } else if (famIdx === 13) { // Micro Orbit
    inner = `<div style="position:relative;width:64px;height:64px;display:grid;place-items:center;">
      <div class="ha-spin" style="position:absolute;inset:0;"><div style="width:4px;height:4px;border-radius:50%;background:var(--ink);box-shadow:0 0 5px var(--ink);"></div></div>
      <svg viewBox="0 0 50 50" width="46" height="46"><circle cx="25" cy="25" r="18" fill="none" stroke="var(--ink)" stroke-width="1.5"/><circle cx="25" cy="25" r="6" fill="var(--ink)"/></svg>
    </div>`;
  } else { // Gradient Sweep
    inner = `<svg viewBox="0 0 100 40" width="94" height="38">
      <defs><linearGradient id="g_${cls}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="var(--ink)" stop-opacity="0.6"/><stop offset="100%" stop-color="var(--ink)" stop-opacity="0"/></linearGradient></defs>
      <polygon points="5,35 25,15 55,25 80,${35-p*0.25} 95,8 95,35" fill="url(#g_${cls})"/>
      <polyline points="5,35 25,15 55,25 80,${35-p*0.25} 95,8" fill="none" stroke="var(--ink)" stroke-width="1.5"/>
    </svg>`;
  }

  return {
    html: wrapContainer(fp, ap, inner, 200, cls),
    css: `.${cls} { isolation: isolate; }`
  };
}


function buildFormInput(gid, p, famIdx, varIdx, cls, fp, ap) {
  const lbl = ap.label;
  const isPin = gid === 'pin-code-boxes';
  const isSearch = gid === 'search-bars';
  const isDrop = gid === 'file-dropzones';
  const isStep = gid === 'stepper-inputs';
  let inner = '';

  if (famIdx === 0) { // Hairline Minimal
    inner = `<div style="width:100%;max-width:180px;border-bottom:1px solid var(--ink);padding:6px 2px;display:flex;justify-content:space-between;align-items:center;font-family:ui-monospace,monospace;font-size:10px;">
      <span style="color:var(--ink);">${lbl.toLowerCase()}_value</span>
      <span class="ha-blink" style="width:6px;height:12px;background:var(--ink);display:inline-block;"></span>
    </div>`;
  } else if (famIdx === 1) { // Segmented Ladder
    inner = `<div style="display:flex;gap:4px;justify-content:center;">
      ${[4, 8, 2, 7].map((d, i) => `<div style="width:26px;height:32px;background:var(--panel2);border:1px solid var(--line2);border-radius:3px;display:grid;place-items:center;font-family:ui-monospace,monospace;font-size:12px;font-weight:bold;color:${i<2?'var(--ink)':'var(--ink3)'};">${i<2?d:'•'}</div>`).join('')}
    </div>`;
  } else if (famIdx === 2) { // Dual Channel
    inner = `<div style="width:100%;max-width:180px;display:flex;border:1px solid var(--line2);border-radius:4px;overflow:hidden;font-family:ui-monospace,monospace;font-size:9.5px;">
      <div style="background:var(--panel2);padding:6px 8px;color:var(--ink3);border-right:1px solid var(--line2);">PRE</div>
      <div style="flex:1;background:var(--panel);padding:6px 8px;color:var(--ink);">${lbl}</div>
      <div style="background:var(--panel2);padding:6px 8px;color:var(--ink3);border-left:1px solid var(--line2);">.LOG</div>
    </div>`;
  } else if (famIdx === 3) { // Tachometer Style
    inner = `<div style="display:flex;align-items:center;gap:8px;">
      <svg viewBox="0 0 50 30" width="46" height="28"><path d="M 8 26 A 18 18 0 0 1 42 26" fill="none" stroke="var(--track)" stroke-width="2"/><circle cx="25" cy="26" r="2" fill="var(--ink)"/><line x1="25" y1="26" x2="${25 + Math.cos(-Math.PI + (p/100)*Math.PI)*14}" y2="${26 + Math.sin(-Math.PI + (p/100)*Math.PI)*14}" stroke="var(--ink)" stroke-width="1.5"/></svg>
      <span style="font-family:ui-monospace,monospace;font-size:10px;font-weight:bold;color:var(--ink);">${Math.round(p)}</span>
    </div>`;
  } else if (famIdx === 4) { // Tick Calibrated
    inner = `<div style="width:100%;max-width:180px;display:flex;flex-direction:column;gap:3px;">
      <div style="display:flex;justify-content:space-between;background:var(--panel2);border:1px solid var(--line2);padding:5px 8px;border-radius:3px;font-family:ui-monospace,monospace;font-size:9.5px;color:var(--ink);"><span>INPUT: ${Math.round(p)}</span><span class="ha-blink">_</span></div>
      <div style="display:flex;justify-content:space-between;padding:0 2px;">${Array.from({length:9},()=>`<span style="width:1px;height:3px;background:var(--ink3);"></span>`).join('')}</div>
    </div>`;
  } else if (famIdx === 5) { // Halo Glow
    inner = `<div style="width:100%;max-width:180px;padding:6px 12px;background:var(--panel2);border:1.5px solid var(--ink);border-radius:6px;filter:drop-shadow(0 0 6px rgba(255,255,255,0.4));display:flex;justify-content:space-between;font-family:ui-monospace,monospace;font-size:10px;color:var(--ink);">
      <span>${lbl}</span><span class="ha-pulse" style="width:6px;height:6px;border-radius:50%;background:var(--ink);"></span>
    </div>`;
  } else if (famIdx === 6) { // Dashed Rail
    inner = `<div style="width:100%;max-width:180px;padding:8px 12px;border:1.5px dashed var(--ink);border-radius:4px;display:flex;align-items:center;justify-content:space-between;font-family:ui-monospace,monospace;font-size:9.5px;color:var(--ink);">
      <span>${isDrop?'DROP_PAYLOAD':lbl}</span><span style="font-size:11px;">⇣</span>
    </div>`;
  } else if (famIdx === 7) { // Center Hub
    inner = `<div style="display:flex;align-items:center;gap:6px;width:100%;max-width:180px;justify-content:center;">
      <button class="ha-btn-tactile" style="width:24px;height:24px;border-radius:50%;background:var(--panel2);border:1px solid var(--line2);color:var(--ink);cursor:pointer;">-</button>
      <div style="padding:4px 12px;background:var(--panel);border:1.5px solid var(--ink);border-radius:12px;font-family:ui-monospace,monospace;font-size:10px;font-weight:bold;color:var(--ink);">${Math.round(p)}</div>
      <button class="ha-btn-tactile" style="width:24px;height:24px;border-radius:50%;background:var(--panel2);border:1px solid var(--line2);color:var(--ink);cursor:pointer;">+</button>
    </div>`;
  } else if (famIdx === 8) { // Triple Stack
    inner = `<div style="width:100%;max-width:180px;display:flex;flex-direction:column;gap:2px;font-family:ui-monospace,monospace;">
      <div style="font-size:7.5px;color:var(--ink3);">FIELD_LABEL</div>
      <div style="padding:5px 8px;background:var(--panel2);border:1px solid var(--line2);border-radius:3px;font-size:10px;color:var(--ink);">${lbl}</div>
      <div style="font-size:7px;color:var(--ink4);">INPUT VERIFIED // 200 OK</div>
    </div>`;
  } else if (famIdx === 9) { // Inset Channel
    inner = `<div style="width:100%;max-width:180px;padding:7px 12px;background:var(--panel);border-radius:6px;box-shadow:inset 0 3px 8px rgba(0,0,0,0.9);display:flex;justify-content:space-between;align-items:center;font-family:ui-monospace,monospace;font-size:10px;color:var(--ink);">
      <span>${lbl}</span><span style="opacity:.5;">⎋</span>
    </div>`;
  } else if (famIdx === 10) { // Stepped Matrix
    inner = `<div style="display:flex;flex-direction:column;gap:4px;align-items:center;">
      <div style="display:grid;grid-template-columns:repeat(5,6px);gap:2px;">${Array.from({length:10},(_,i)=>`<span style="width:6px;height:6px;background:${(i/10)<=(p/100)?'var(--ink)':'var(--track)'};border-radius:1px;"></span>`).join('')}</div>
      <span style="font-family:ui-monospace,monospace;font-size:8.5px;color:var(--ink);">${lbl} // ${Math.round(p)}</span>
    </div>`;
  } else if (famIdx === 11) { // Framed Bezel
    inner = `<div class="hud-frame" style="width:100%;max-width:180px;">
      <span class="hud-c tl"></span><span class="hud-c tr"></span><span class="hud-c bl"></span><span class="hud-c br"></span>
      <div style="padding:4px 8px;font-family:ui-monospace,monospace;font-size:9.5px;color:var(--ink);display:flex;justify-content:space-between;"><span>${lbl}</span><span class="ha-blink">▌</span></div>
    </div>`;
  } else if (famIdx === 12) { // Monolithic Slab
    inner = `<div style="width:100%;max-width:180px;background:var(--ink);color:var(--sc-bg);padding:8px 12px;border-radius:2px;box-shadow:2px 2px 0 var(--line2);font-family:ui-monospace,monospace;display:flex;justify-content:space-between;align-items:center;">
      <span style="font-size:10px;font-weight:900;letter-spacing:.1em;">${lbl}</span>
      <span style="font-size:8px;opacity:.8;">ACT</span>
    </div>`;
  } else if (famIdx === 13) { // Micro Orbit
    inner = `<div style="position:relative;width:100%;max-width:180px;display:flex;align-items:center;">
      <div class="ha-spin" style="position:absolute;left:-6px;top:50%;margin-top:-8px;width:16px;height:16px;"><div style="width:3px;height:3px;border-radius:50%;background:var(--ink);"></div></div>
      <div style="width:100%;padding:6px 12px 6px 16px;background:var(--panel2);border:1px solid var(--line2);border-radius:999px;font-family:ui-monospace,monospace;font-size:9.5px;color:var(--ink);">${lbl}</div>
    </div>`;
  } else { // Gradient Sweep
    inner = `<div style="width:100%;max-width:180px;padding:7px 12px;border-radius:4px;background:linear-gradient(90deg,var(--panel2),var(--line2));border:1px solid var(--line2);display:flex;justify-content:space-between;font-family:ui-monospace,monospace;font-size:9.5px;color:var(--ink);">
      <span>${lbl}</span><span>◈</span>
    </div>`;
  }

  return {
    html: wrapContainer(fp, ap, inner, 210, cls),
    css: `.${cls} { isolation: isolate; }`
  };
}


function buildSurfaceHUD(gid, p, famIdx, varIdx, cls, fp, ap) {
  const lbl = ap.label;
  const isTrm = gid === 'terminal-windows';
  const isAvt = gid === 'user-avatars';
  const isCode = gid === 'code-boxes';
  const isCard = gid === 'card-containers';
  let inner = '';

  if (famIdx === 0) { // Hairline Minimal
    inner = `<div style="width:100%;max-width:180px;border:1px solid var(--line2);padding:8px;font-family:ui-monospace,monospace;font-size:9px;color:var(--ink);text-align:left;">
      <div style="font-size:7px;color:var(--ink3);margin-bottom:4px;">SYS.SURFACE // 0x01</div>
      <div>> ${lbl}</div>
      <div style="font-size:7.5px;color:var(--ink3);margin-top:4px;">STATUS: ACTIVE</div>
    </div>`;
  } else if (famIdx === 1) { // Segmented Ladder
    inner = `<div style="width:100%;max-width:180px;background:var(--panel2);border:1px solid var(--line);border-radius:4px;overflow:hidden;font-family:ui-monospace,monospace;">
      <div style="display:flex;gap:2px;background:var(--panel);padding:3px 6px;border-bottom:1px solid var(--line);font-size:7.5px;color:var(--ink3);"><span style="width:6px;height:6px;background:var(--ink);border-radius:1px;"></span><span>PANEL</span></div>
      <div style="padding:8px;font-size:9.5px;color:var(--ink);font-weight:bold;">${lbl}</div>
    </div>`;
  } else if (famIdx === 2) { // Dual Channel
    inner = `<div style="width:100%;max-width:180px;display:flex;gap:4px;">
      <div style="flex:1;background:var(--panel2);border:1px solid var(--line2);padding:6px;font-family:ui-monospace,monospace;font-size:8px;color:var(--ink);text-align:left;">
        <div style="color:var(--ink3);">CH_A</div><div>${lbl}</div>
      </div>
      <div style="flex:1;background:var(--panel2);border:1px solid var(--line2);padding:6px;font-family:ui-monospace,monospace;font-size:8px;color:var(--ink3);text-align:left;">
        <div>CH_B</div><div>${Math.round(p)}%</div>
      </div>
    </div>`;
  } else if (famIdx === 3) { // Tachometer Style
    inner = `<div style="width:68px;height:68px;border-radius:50%;border:2px solid var(--track);display:grid;place-items:center;position:relative;">
      <svg viewBox="0 0 70 70" width="68" height="68" style="position:absolute;inset:0;"><circle cx="35" cy="35" r="30" fill="none" stroke="var(--ink)" stroke-width="2" stroke-dasharray="80 30"/></svg>
      <span style="font-family:ui-monospace,monospace;font-size:8px;font-weight:bold;color:var(--ink);">${lbl.substring(0,3)}</span>
    </div>`;
  } else if (famIdx === 4) { // Tick Calibrated
    inner = `<div style="width:100%;max-width:180px;border:1px solid var(--line2);padding:6px 8px;position:relative;font-family:ui-monospace,monospace;">
      <div style="position:absolute;top:-4px;left:8px;background:var(--panel);padding:0 4px;font-size:7px;color:var(--ink3);">SPEC // 04</div>
      <div style="font-size:9.5px;color:var(--ink);margin-top:2px;">${lbl}</div>
      <div style="display:flex;justify-content:space-between;margin-top:4px;">${Array.from({length:7},()=>`<span style="width:1px;height:3px;background:var(--ink3);"></span>`).join('')}</div>
    </div>`;
  } else if (famIdx === 5) { // Halo Glow
    inner = `<div style="width:100%;max-width:180px;background:var(--panel2);border:1.5px solid var(--ink);border-radius:6px;padding:8px 12px;filter:drop-shadow(0 0 8px rgba(255,255,255,0.4));font-family:ui-monospace,monospace;display:flex;justify-content:space-between;align-items:center;">
      <span style="font-size:10px;font-weight:bold;color:var(--ink);">${lbl}</span>
      <span class="ha-pulse" style="width:7px;height:7px;border-radius:50%;background:var(--ink);"></span>
    </div>`;
  } else if (famIdx === 6) { // Dashed Rail
    inner = `<div style="width:100%;max-width:180px;border:1.5px dashed var(--ink);border-radius:4px;padding:8px;font-family:ui-monospace,monospace;text-align:left;">
      <div style="font-size:7.5px;color:var(--ink3);">DASHED_FRAME</div>
      <div style="font-size:9.5px;color:var(--ink);font-weight:bold;margin-top:2px;">${lbl}</div>
    </div>`;
  } else if (famIdx === 7) { // Center Hub
    inner = `<div style="width:62px;height:62px;border-radius:50%;background:var(--panel2);border:2px solid var(--ink);display:grid;place-items:center;box-shadow:0 3px 8px rgba(0,0,0,0.6);">
      <div style="width:28px;height:28px;border-radius:50%;background:var(--ink);color:var(--sc-bg);display:grid;place-items:center;font-family:ui-monospace,monospace;font-size:9px;font-weight:bold;">${lbl.substring(0,2)}</div>
    </div>`;
  } else if (famIdx === 8) { // Triple Stack
    inner = `<div style="width:100%;max-width:180px;position:relative;padding-top:8px;">
      <div style="position:absolute;top:0;left:10px;right:10px;height:6px;background:var(--line);border-radius:4px 4px 0 0;"></div>
      <div style="position:absolute;top:4px;left:5px;right:5px;height:6px;background:var(--line2);border-radius:4px 4px 0 0;"></div>
      <div style="background:var(--panel2);border:1px solid var(--line2);border-radius:4px;padding:8px;font-family:ui-monospace,monospace;font-size:9.5px;color:var(--ink);position:relative;z-index:2;">${lbl}</div>
    </div>`;
  } else if (famIdx === 9) { // Inset Channel
    inner = `<div style="width:100%;max-width:180px;background:var(--panel);border-radius:6px;box-shadow:inset 0 3px 8px rgba(0,0,0,0.9);padding:8px 12px;font-family:ui-monospace,monospace;text-align:left;">
      <div style="font-size:7px;color:var(--ink3);">WELL_INSET</div>
      <div style="font-size:10px;color:var(--ink);font-weight:bold;margin-top:2px;">${lbl}</div>
    </div>`;
  } else if (famIdx === 10) { // Stepped Matrix
    inner = `<div style="width:100%;max-width:180px;background:var(--panel2);border:1px solid var(--line2);padding:6px;border-radius:4px;display:flex;align-items:center;gap:8px;">
      <div style="display:grid;grid-template-columns:repeat(3,4px);gap:2px;">${Array.from({length:9},(_,i)=>`<span style="width:4px;height:4px;background:${i<5?'var(--ink)':'var(--track)'};border-radius:1px;"></span>`).join('')}</div>
      <span style="font-family:ui-monospace,monospace;font-size:9.5px;color:var(--ink);">${lbl}</span>
    </div>`;
  } else if (famIdx === 11) { // Framed Bezel
    inner = `<div class="hud-frame" style="width:100%;max-width:180px;">
      <span class="hud-c tl"></span><span class="hud-c tr"></span><span class="hud-c bl"></span><span class="hud-c br"></span>
      <div style="padding:6px 10px;font-family:ui-monospace,monospace;font-size:9.5px;color:var(--ink);font-weight:bold;text-align:left;">
        <div style="font-size:7px;color:var(--ink3);letter-spacing:.14em;">HUD.SURFACE</div>
        <div style="margin-top:2px;">${lbl}</div>
      </div>
    </div>`;
  } else if (famIdx === 12) { // Monolithic Slab
    inner = `<div style="width:100%;max-width:180px;background:var(--ink);color:var(--sc-bg);padding:10px 14px;border-radius:2px;box-shadow:3px 3px 0 var(--line2);font-family:ui-monospace,monospace;text-align:left;">
      <div style="font-size:7px;letter-spacing:.16em;opacity:.7;">SLAB_PANEL</div>
      <div style="font-size:12px;font-weight:900;letter-spacing:.1em;margin-top:2px;">${lbl}</div>
    </div>`;
  } else if (famIdx === 13) { // Micro Orbit
    inner = `<div style="position:relative;width:100%;max-width:180px;background:var(--panel2);border:1px solid var(--line2);border-radius:999px;padding:6px 14px;display:flex;align-items:center;justify-content:space-between;font-family:ui-monospace,monospace;font-size:9.5px;color:var(--ink);">
      <div class="ha-spin" style="position:absolute;left:-4px;top:50%;margin-top:-7px;width:14px;height:14px;"><div style="width:3px;height:3px;border-radius:50%;background:var(--ink);"></div></div>
      <span>${lbl}</span><span style="font-size:8px;color:var(--ink3);">0x${Math.round(p).toString(16)}</span>
    </div>`;
  } else { // Gradient Sweep
    inner = `<div style="width:100%;max-width:180px;border-radius:4px;background:linear-gradient(135deg,var(--panel2),var(--line2));border:1px solid var(--line2);padding:8px 12px;font-family:ui-monospace,monospace;font-size:9.5px;color:var(--ink);text-align:left;">
      <div style="font-size:7px;color:var(--ink3);">GRADIENT</div>
      <div style="font-weight:bold;margin-top:2px;">${lbl}</div>
    </div>`;
  }

  return {
    html: wrapContainer(fp, ap, inner, 210, cls),
    css: `.${cls} { isolation: isolate; }`
  };
}


function buildMediaUtility(gid, p, famIdx, varIdx, cls, fp, ap) {
  const lbl = ap.label;
  const isKbd = gid === 'keybinding-kbd';
  const isRat = gid === 'rating-stars';
  const isScrub = gid === 'media-scrubbers';
  const isQr = gid === 'barcode-qr';
  let inner = '';

  if (famIdx === 0) { // Hairline Minimal
    if (isKbd) {
      inner = `<div style="display:inline-flex;gap:4px;"><span style="border:1px solid var(--line2);padding:4px 8px;border-radius:3px;font-family:ui-monospace,monospace;font-size:10px;color:var(--ink);">⌘</span><span style="border:1px solid var(--line2);padding:4px 8px;border-radius:3px;font-family:ui-monospace,monospace;font-size:10px;color:var(--ink);">${lbl.substring(0,1)}</span></div>`;
    } else if (isRat) {
      inner = `<div style="display:flex;gap:3px;color:var(--ink);font-size:12px;">${[1,2,3,4,5].map(n=>`<span>${n<=(p/20)?'★':'☆'}</span>`).join('')}</div>`;
    } else {
      inner = `<div style="width:100%;max-width:180px;"><div style="height:2px;background:var(--track);position:relative;"><div style="width:${p}%;height:100%;background:var(--ink);"></div><div style="position:absolute;left:${p}%;top:-3px;width:2px;height:8px;background:var(--ink);"></div></div></div>`;
    }
  } else if (famIdx === 1) { // Segmented Ladder
    inner = `<div style="width:100%;max-width:180px;display:flex;gap:3px;">
      ${Array.from({length:8}, (_, i) => `<div style="flex:1;height:12px;background:${(i/8)<=(p/100)?'var(--ink)':'var(--track)'};border-radius:1px;"></div>`).join('')}
    </div>`;
  } else if (famIdx === 2) { // Dual Channel
    inner = `<div style="width:100%;max-width:180px;display:flex;flex-direction:column;gap:3px;font-family:ui-monospace,monospace;font-size:8px;">
      <div style="display:flex;justify-content:space-between;color:var(--ink3);"><span>01:24</span><span>03:45</span></div>
      <div style="height:3px;background:var(--track);position:relative;"><div style="width:85%;height:100%;background:var(--line2);"></div><div style="width:${p}%;height:100%;background:var(--ink);"></div></div>
    </div>`;
  } else if (famIdx === 3) { // Tachometer Style
    inner = `<svg viewBox="0 0 60 40" width="56" height="38">
      <path d="M 10 35 A 22 22 0 0 1 50 35" fill="none" stroke="var(--track)" stroke-width="3"/>
      <path d="M 10 35 A 22 22 0 0 1 50 35" fill="none" stroke="var(--ink)" stroke-width="3" stroke-dasharray="70" stroke-dashoffset="${70*(1-p/100)}"/>
      <text x="30" y="36" text-anchor="middle" font-size="8" font-family="ui-monospace,monospace" fill="var(--ink)">${Math.round(p)}%</text>
    </svg>`;
  } else if (famIdx === 4) { // Tick Calibrated
    inner = `<div style="width:100%;max-width:180px;display:flex;flex-direction:column;gap:3px;">
      <div style="height:4px;background:var(--track);position:relative;"><div style="width:${p}%;height:100%;background:var(--ink);"></div></div>
      <div style="display:flex;justify-content:space-between;">${Array.from({length:9},()=>`<span style="width:1px;height:3px;background:var(--ink3);"></span>`).join('')}</div>
      <div style="display:flex;justify-content:space-between;font-size:7px;color:var(--ink3);font-family:ui-monospace,monospace;"><span>0:00</span><span>1:30</span><span>3:00</span></div>
    </div>`;
  } else if (famIdx === 5) { // Halo Glow
    inner = `<div style="padding:6px;filter:drop-shadow(0 0 8px rgba(255,255,255,0.45));">
      <div style="width:120px;height:8px;border-radius:999px;background:var(--panel2);border:1px solid var(--ink);padding:1px;box-sizing:border-box;">
        <div style="width:${p}%;height:100%;background:var(--ink);border-radius:999px;"></div>
      </div>
    </div>`;
  } else if (famIdx === 6) { // Dashed Rail
    inner = `<div style="width:100%;max-width:180px;padding:4px;border:1px dashed var(--ink);border-radius:4px;">
      <div style="height:6px;background:var(--track);position:relative;"><div style="width:${p}%;height:100%;background:var(--ink);"></div></div>
    </div>`;
  } else if (famIdx === 7) { // Center Hub
    inner = `<div style="width:52px;height:52px;border-radius:50%;border:2px solid var(--ink);background:var(--panel2);display:grid;place-items:center;">
      <div class="ha-pulse" style="width:18px;height:18px;border-radius:50%;background:var(--ink);display:grid;place-items:center;color:var(--sc-bg);font-size:8px;">▶</div>
    </div>`;
  } else if (famIdx === 8) { // Triple Stack
    inner = `<div style="width:100%;max-width:180px;display:flex;flex-direction:column;gap:2px;">
      <div style="height:3px;background:var(--track);"><div style="width:${p}%;height:100%;background:var(--ink);"></div></div>
      <div style="height:3px;background:var(--track);"><div style="width:${Math.min(100,p*1.2)}%;height:100%;background:var(--ink2);"></div></div>
      <div style="height:3px;background:var(--track);"><div style="width:${Math.min(100,p*1.4)}%;height:100%;background:var(--ink3);"></div></div>
    </div>`;
  } else if (famIdx === 9) { // Inset Channel
    inner = `<div style="width:100%;max-width:180px;padding:6px;background:var(--panel);border-radius:6px;box-shadow:inset 0 3px 8px rgba(0,0,0,0.85);">
      <div style="height:5px;background:rgba(255,255,255,.05);border-radius:3px;overflow:hidden;"><div style="width:${p}%;height:100%;background:var(--ink);"></div></div>
    </div>`;
  } else if (famIdx === 10) { // Stepped Matrix
    inner = `<div style="display:grid;grid-template-columns:repeat(5,6px);gap:2px;">
      ${Array.from({length:25}, (_,i)=>`<span style="width:6px;height:6px;background:${(i%2===0)?'var(--ink)':'var(--panel2)'};border-radius:1px;"></span>`).join('')}
    </div>`;
  } else if (famIdx === 11) { // Framed Bezel
    inner = `<div class="hud-frame" style="width:100%;max-width:180px;">
      <span class="hud-c tl"></span><span class="hud-c tr"></span><span class="hud-c bl"></span><span class="hud-c br"></span>
      <div style="display:flex;justify-content:space-between;font-size:7.5px;color:var(--ink3);font-family:ui-monospace,monospace;margin-bottom:3px;"><span>PLAYHEAD</span><span>${Math.round(p)}%</span></div>
      <div style="height:4px;background:var(--track);"><div style="width:${p}%;height:100%;background:var(--ink);"></div></div>
    </div>`;
  } else if (famIdx === 12) { // Monolithic Slab
    inner = `<div style="background:var(--ink);color:var(--sc-bg);padding:8px 16px;border-radius:2px;box-shadow:2px 2px 0 var(--line2);font-family:ui-monospace,monospace;font-size:11px;font-weight:900;letter-spacing:.12em;">
      ${lbl}
    </div>`;
  } else if (famIdx === 13) { // Micro Orbit
    inner = `<div style="position:relative;width:60px;height:60px;display:grid;place-items:center;">
      <div class="ha-spin" style="position:absolute;inset:0;"><div style="width:4px;height:4px;border-radius:50%;background:var(--ink);box-shadow:0 0 5px var(--ink);"></div></div>
      <div style="width:22px;height:22px;border-radius:50%;border:1.5px solid var(--ink);display:grid;place-items:center;font-size:8px;">★</div>
    </div>`;
  } else { // Gradient Sweep
    inner = `<div style="width:100%;max-width:180px;height:8px;border-radius:999px;background:var(--track);overflow:hidden;">
      <div style="width:${p}%;height:100%;background:linear-gradient(90deg,transparent,var(--ink));"></div>
    </div>`;
  }

  return {
    html: wrapContainer(fp, ap, inner, 200, cls),
    css: `.${cls} { isolation: isolate; }`
  };
}


/* --- Thumbnail Builders --- */
const THUMB_BUILDERS = {
'semi-circle-indicator': (p) => {
    const rot = -90 + p * 1.8;
    return `<div class="sc-ind" style="--p:${p};--rot:${rot}deg;width:100%;max-width:140px;">
      <svg viewBox="0 0 100 58" style="width:100%;height:auto;display:block;">
        <path class="t" d="M 10 50 A 40 40 0 0 1 90 50" stroke-width="2.4" fill="none"/>
        <path d="M 10 50 A 40 40 0 0 1 90 50" stroke="var(--ink)" stroke-width="2.6" fill="none"
              pathLength="100" stroke-dasharray="100" stroke-dashoffset="${100 - p}" stroke-linecap="round"/>
        <g transform="translate(50,50) rotate(${rot})">
          <circle cx="0" cy="-40" r="3" fill="var(--ink)"/>
          <line x1="0" y1="-40" x2="0" y2="-45" stroke="var(--ink)" stroke-width="1.2"/>
        </g>
        <circle cx="50" cy="50" r="2" fill="var(--ink)"/>
      </svg>
    </div>`;
  },

  'circular-gauges': (p) => {
    const circ = 238.76;
    const off = circ * (1 - p / 100);
    const rot = (p * 3.6) - 90;
    return `<svg viewBox="0 0 100 100" width="76" height="76" style="display:block;">
      <circle cx="50" cy="50" r="38" fill="none" stroke="var(--track)" stroke-width="3"/>
      <circle cx="50" cy="50" r="38" fill="none" stroke="var(--ink)" stroke-width="3.2" stroke-linecap="round"
              stroke-dasharray="${circ}" stroke-dashoffset="${off}" transform="rotate(-90 50 50)"/>
      <g transform="translate(50,50) rotate(${rot})">
        <line x1="0" y1="0" x2="34" y2="0" stroke="var(--ink)" stroke-width="1.5"/>
        <circle cx="0" cy="0" r="3" fill="var(--ink)"/>
      </g>
      <text x="50" y="54" text-anchor="middle" font-size="10" fill="var(--ink)">${Math.round(p)}%</text>
    </svg>`;
  },

  'linear-progress': (p) => {
    return `<div style="width:100%;max-width:130px;display:flex;flex-direction:column;gap:7px;">
      <div style="display:flex;justify-content:space-between;font-size:9.5px;color:var(--ink3);">
        <span>PROGRESS</span><span>${Math.round(p)}%</span>
      </div>
      <div style="height:6px;border-radius:999px;background:var(--track);overflow:hidden;position:relative;">
        <div style="width:${p}%;height:100%;background:var(--ink);border-radius:999px;"></div>
      </div>
    </div>`;
  },

  'step-progress': (p) => {
    const step = p < 33 ? 1 : p < 66 ? 2 : p < 95 ? 3 : 4;
    return `<div style="display:flex;align-items:center;gap:4px;width:100%;max-width:140px;justify-content:center;">
      <div style="width:18px;height:18px;border-radius:50%;background:var(--ink);color:var(--sc-bg);display:grid;place-items:center;font-size:9px;font-weight:bold;">${step > 1 ? '✓' : '1'}</div>
      <div style="flex:1;height:2px;background:${step >= 2 ? 'var(--ink)' : 'var(--track)'};"></div>
      <div style="width:18px;height:18px;border-radius:50%;background:${step >= 2 ? 'var(--ink)' : 'var(--panel2)'};border:1px solid var(--line2);color:${step >= 2 ? 'var(--sc-bg)' : 'var(--ink)'};display:grid;place-items:center;font-size:9px;">${step > 2 ? '✓' : '2'}</div>
      <div style="flex:1;height:2px;background:${step >= 3 ? 'var(--ink)' : 'var(--track)'};"></div>
      <div style="width:18px;height:18px;border-radius:50%;background:${step >= 3 ? 'var(--ink)' : 'var(--panel2)'};border:1px solid var(--line2);color:${step >= 3 ? 'var(--sc-bg)' : 'var(--ink)'};display:grid;place-items:center;font-size:9px;">3</div>
    </div>`;
  },

  'segmented-meters': (p) => {
    const total = 10;
    const active = Math.round((p / 100) * total);
    return `<div style="display:flex;gap:3px;align-items:flex-end;height:38px;padding:4px;">
      ${Array.from({length:total}, (_,i) => `
        <div style="width:7px;height:${12 + i * 2.4}px;border-radius:1px;background:${i < active ? 'var(--ink)' : 'var(--track)'};"></div>
      `).join('')}
    </div>`;
  },

  'battery-indicators': (p) => {
    return `<div style="display:flex;align-items:center;gap:2px;">
      <div style="width:56px;height:28px;border:2px solid var(--ink);border-radius:5px;padding:2px;box-sizing:border-box;position:relative;">
        <div style="width:${p}%;height:100%;background:var(--ink);border-radius:2px;"></div>
        <span style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);font-size:9px;font-weight:700;color:var(--sc-bg);mix-blend-mode:difference;">${Math.round(p)}%</span>
      </div>
      <div style="width:3px;height:12px;background:var(--ink);border-radius:0 2px 2px 0;"></div>
    </div>`;
  },

  'signal-meters': (p) => {
    const bars = 5;
    const active = Math.round((p / 100) * bars);
    return `<div style="display:flex;align-items:flex-end;gap:4px;height:36px;">
      ${Array.from({length:bars}, (_,i) => `
        <div style="width:6px;height:${8 + i * 6}px;border-radius:2px;background:${i < active ? 'var(--ink)' : 'var(--track)'};"></div>
      `).join('')}
    </div>`;
  },

  'speedometer-gauges': (p) => {
    const rot = -120 + (p * 2.4);
    return `<svg viewBox="0 0 100 80" width="80" height="64" style="display:block;">
      <path d="M 20 70 A 40 40 0 1 1 80 70" fill="none" stroke="var(--track)" stroke-width="4"/>
      <path d="M 20 70 A 40 40 0 1 1 80 70" fill="none" stroke="var(--ink)" stroke-width="4.2"
            pathLength="100" stroke-dasharray="100" stroke-dashoffset="${100 - p}"/>
      <g transform="translate(50,50) rotate(${rot})">
        <line x1="0" y1="0" x2="30" y2="0" stroke="var(--ink)" stroke-width="2"/>
        <circle cx="0" cy="0" r="4" fill="var(--ink)"/>
      </g>
      <text x="50" y="74" text-anchor="middle" font-size="9" fill="var(--ink)">${Math.round(p * 1.6)} KM/H</text>
    </svg>`;
  },

  'compass-rings': (p) => {
    const rot = p * 3.6;
    return `<svg viewBox="0 0 80 80" width="68" height="68" style="display:block;">
      <circle cx="40" cy="40" r="36" fill="none" stroke="var(--line2)" stroke-width="1.5"/>
      <g transform="translate(40,40) rotate(${rot})">
        <polygon points="0,-30 6,-8 0,0 -6,-8" fill="var(--ink)"/>
        <polygon points="0,30 6,8 0,0 -6,8" fill="var(--track)"/>
      </g>
      <text x="40" y="14" text-anchor="middle" font-size="7" font-weight="bold" fill="var(--ink)">N</text>
    </svg>`;
  },

  'altimeter-scales': (p) => {
    const y = 80 - (p * 0.7);
    return `<svg viewBox="0 0 100 90" width="80" height="72" style="display:block;">
      <line x1="45" y1="10" x2="45" y2="80" stroke="var(--line2)" stroke-width="1.5"/>
      ${[10, 24, 38, 52, 66, 80].map(pos => `<line x1="38" y1="${pos}" x2="45" y2="${pos}" stroke="var(--ink3)" stroke-width="1.2"/>`).join('')}
      <polygon points="50,${y} 62,${y - 6} 62,${y + 6}" fill="var(--ink)"/>
      <text x="70" y="${y + 3}" font-size="8" font-family="ui-monospace, monospace" fill="var(--ink)">${Math.round(p * 120)} FT</text>
    </svg>`;
  },
'rotary-knobs': (p) => {
    const rot = -135 + (p * 2.7);
    return `<svg viewBox="0 0 80 80" width="68" height="68" style="display:block;">
      <circle cx="40" cy="40" r="32" fill="var(--panel2)" stroke="var(--ink)" stroke-width="2"/>
      <circle cx="40" cy="40" r="26" fill="var(--panel)" stroke="var(--line2)" stroke-width="1.2"/>
      <g transform="translate(40,40) rotate(${rot})">
        <line x1="0" y1="-14" x2="0" y2="-24" stroke="var(--ink)" stroke-width="2.5" stroke-linecap="round"/>
      </g>
    </svg>`;
  },

  'toggle-switches': (p) => {
    const on = p >= 50;
    return `<div style="width:52px;height:28px;border-radius:999px;background:${on ? 'var(--ink)' : 'var(--panel2)'};border:2px solid var(--line2);position:relative;padding:2px;box-sizing:border-box;">
      <div style="width:20px;height:20px;border-radius:50%;background:${on ? 'var(--sc-bg)' : 'var(--ink)'};transform:translateX(${on ? '24px' : '0'});transition:transform .3s;"></div>
    </div>`;
  },

  'range-sliders': (p) => {
    return `<div style="width:100%;max-width:130px;display:flex;flex-direction:column;gap:5px;">
      <div style="height:4px;border-radius:999px;background:var(--track);position:relative;">
        <div style="width:${p}%;height:100%;background:var(--ink);border-radius:999px;"></div>
        <div style="position:absolute;left:${p}%;top:50%;transform:translate(-50%,-50%);width:14px;height:14px;border-radius:50%;background:var(--ink);border:2px solid var(--panel);"></div>
      </div>
      <div style="font-size:9px;color:var(--ink3);text-align:right;">${Math.round(p)}</div>
    </div>`;
  },

  'push-buttons': (p) => {
    return `<div style="padding:8px 16px;border-radius:6px;background:var(--panel2);border:1px solid var(--line2);box-shadow:0 3px 0 var(--line);font-size:10px;font-weight:700;letter-spacing:.08em;color:var(--ink);">
      TRIGGER [${Math.round(p)}]
    </div>`;
  },

  'segmented-controls': (p) => {
    const sel = p < 33 ? 0 : p < 66 ? 1 : 2;
    return `<div style="display:flex;background:var(--panel2);padding:2px;border-radius:6px;border:1px solid var(--line);gap:2px;">
      ${['A','B','C'].map((lbl, i) => `
        <div style="padding:4px 10px;border-radius:4px;font-size:9px;font-weight:bold;background:${i === sel ? 'var(--ink)' : 'transparent'};color:${i === sel ? 'var(--sc-bg)' : 'var(--ink3)'};">
          ${lbl}
        </div>
      `).join('')}
    </div>`;
  },

  'radio-selectors': (p) => {
    const sel = p >= 50;
    return `<div style="display:flex;flex-direction:column;gap:5px;">
      <div style="display:flex;align-items:center;gap:6px;">
        <div style="width:14px;height:14px;border-radius:50%;border:1.5px solid var(--ink);display:grid;place-items:center;">
          <div style="width:6px;height:6px;border-radius:50%;background:${sel ? 'var(--ink)' : 'transparent'};"></div>
        </div>
        <span style="font-size:9.5px;color:var(--ink);">PRIMARY</span>
      </div>
    </div>`;
  },

  'checkbox-states': (p) => {
    const chk = p >= 50;
    return `<div style="display:flex;align-items:center;gap:6px;">
      <div style="width:16px;height:16px;border-radius:4px;border:1.5px solid var(--ink);background:${chk ? 'var(--ink)' : 'transparent'};color:var(--sc-bg);display:grid;place-items:center;font-size:10px;font-weight:bold;">
        ${chk ? '✓' : ''}
      </div>
      <span style="font-size:9.5px;color:var(--ink);">ENABLE</span>
    </div>`;
  },

  'icon-buttons': (p) => {
    return `<div style="width:36px;height:36px;border-radius:8px;border:1px solid var(--line2);background:var(--panel2);display:grid;place-items:center;color:var(--ink);">
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="8"/>
        <line x1="12" y1="2" x2="12" y2="6"/>
        <line x1="12" y1="18" x2="12" y2="22"/>
        <line x1="2" y1="12" x2="6" y2="12"/>
        <line x1="18" y1="12" x2="22" y2="12"/>
      </svg>
    </div>`;
  },

  'split-buttons': (p) => {
    return `<div style="display:inline-flex;border-radius:6px;border:1px solid var(--line2);overflow:hidden;background:var(--panel2);font-size:9.5px;color:var(--ink);">
      <span style="padding:6px 10px;border-right:1px solid var(--line);font-weight:bold;">ACTION</span>
      <span style="padding:6px 8px;">▾</span>
    </div>`;
  },

  'volume-faders': (p) => {
    const y = 50 - (p * 0.4);
    return `<div style="width:24px;height:60px;position:relative;display:flex;justify-content:center;">
      <div style="width:3px;height:100%;background:var(--track);border-radius:2px;"></div>
      <div style="position:absolute;top:${y}px;width:20px;height:10px;border-radius:3px;background:var(--ink);border:1px solid var(--line2);box-shadow:0 1px 3px rgba(0,0,0,.5);"></div>
    </div>`;
  },
'audio-equalizer': (p) => {
    return `<div style="display:flex;align-items:flex-end;gap:3px;height:38px;padding:4px;">
      ${[0.6, 0.9, 0.4, 1.0, 0.7, 0.3, 0.8, 0.5].map((h, i) => `
        <div style="width:5px;height:${Math.max(4, Math.round(h * 32 * (p / 100)))}px;background:var(--ink);border-radius:1px;animation:haBounce 1.${2 + i}s infinite ease-in-out;"></div>
      `).join('')}
    </div>`;
  },

  'waveform-monitors': (p) => {
    return `<svg viewBox="0 0 100 40" width="80" height="32" style="display:block;">
      <line x1="0" y1="20" x2="100" y2="20" stroke="var(--track)" stroke-width="1"/>
      <path d="M 0 20 Q 15 5 30 20 T 60 20 T 90 20 L 100 20" fill="none" stroke="var(--ink)" stroke-width="1.8"/>
      <line x1="${p}" y1="2" x2="${p}" y2="38" stroke="var(--ink)" stroke-width="1.5" stroke-dasharray="2 2"/>
    </svg>`;
  },

  'oscilloscope-traces': (p) => {
    return `<svg viewBox="0 0 80 50" width="70" height="44" style="display:block;">
      <rect x="0" y="0" width="80" height="50" rx="4" fill="var(--panel2)" stroke="var(--line)"/>
      <line x1="0" y1="25" x2="80" y2="25" stroke="var(--line2)" stroke-dasharray="2 3"/>
      <path d="M 5 25 Q 20 5 40 25 T 75 25" fill="none" stroke="var(--ink)" stroke-width="1.8"/>
    </svg>`;
  },

  'vu-meters': (p) => {
    const rot = -45 + (p * 0.9);
    return `<svg viewBox="0 0 80 50" width="70" height="44" style="display:block;">
      <path d="M 15 45 A 35 35 0 0 1 65 45" fill="none" stroke="var(--track)" stroke-width="3"/>
      <g transform="translate(40,45) rotate(${rot})">
        <line x1="0" y1="0" x2="0" y2="-32" stroke="var(--ink)" stroke-width="1.5"/>
      </g>
      <text x="40" y="38" text-anchor="middle" font-size="7" fill="var(--ink3)">VU dB</text>
    </svg>`;
  },

  'bpm-metronomes': (p) => {
    return `<svg viewBox="0 0 60 70" width="50" height="58" style="display:block;">
      <polygon points="15,65 45,65 35,10 25,10" fill="var(--panel2)" stroke="var(--line2)"/>
      <line x1="30" y1="60" x2="30" y2="18" stroke="var(--ink)" stroke-width="2"/>
      <circle cx="30" cy="${30 + Math.round((100 - p) * 0.2)}" r="4" fill="var(--ink)"/>
    </svg>`;
  },

  'spectrum-analyzers': (p) => {
    return `<div style="display:flex;gap:2px;align-items:flex-end;height:36px;">
      ${[20, 32, 14, 28, 35, 18, 24, 30].map(h => `
        <div style="width:6px;height:${Math.round(h * (p / 100))}px;background:var(--ink);opacity:.85;"></div>
      `).join('')}
    </div>`;
  },

  'radar-sweeps': (p) => {
    return `<svg viewBox="0 0 80 80" width="68" height="68" style="display:block;">
      <circle cx="40" cy="40" r="34" fill="none" stroke="var(--line2)" stroke-width="1.2"/>
      <circle cx="40" cy="40" r="20" fill="none" stroke="var(--track)" stroke-width="1"/>
      <line x1="40" y1="6" x2="40" y2="74" stroke="var(--track)"/>
      <line x1="6" y1="40" x2="74" y2="40" stroke="var(--track)"/>
      <circle cx="52" cy="28" r="2.5" fill="var(--ink)" opacity=".9"/>
      <line x1="40" y1="40" x2="64" y2="16" stroke="var(--ink)" stroke-width="1.8" stroke-linecap="round"/>
    </svg>`;
  },

  'crosshair-reticles': (p) => {
    return `<svg viewBox="0 0 80 80" width="68" height="68" style="display:block;">
      <circle cx="40" cy="40" r="24" fill="none" stroke="var(--ink)" stroke-width="1.4"/>
      <circle cx="40" cy="40" r="2" fill="var(--ink)"/>
      <line x1="40" y1="8" x2="40" y2="24" stroke="var(--ink)" stroke-width="1.4"/>
      <line x1="40" y1="56" x2="40" y2="72" stroke="var(--ink)" stroke-width="1.4"/>
      <line x1="8" y1="40" x2="24" y2="40" stroke="var(--ink)" stroke-width="1.4"/>
      <line x1="56" y1="40" x2="72" y2="40" stroke="var(--ink)" stroke-width="1.4"/>
    </svg>`;
  },

  'telemetry-hud': (p) => {
    return `<svg viewBox="0 0 90 60" width="76" height="52" style="display:block;">
      <line x1="15" y1="30" x2="35" y2="30" stroke="var(--ink)" stroke-width="1.5"/>
      <line x1="55" y1="30" x2="75" y2="30" stroke="var(--ink)" stroke-width="1.5"/>
      <circle cx="45" cy="30" r="4" fill="none" stroke="var(--ink)" stroke-width="1.2"/>
    </svg>`;
  },

  'acoustics-visualizers': (p) => {
    return `<svg viewBox="0 0 70 70" width="60" height="60" style="display:block;">
      <circle cx="35" cy="35" r="10" fill="none" stroke="var(--ink)" stroke-width="1.5"/>
      <circle cx="35" cy="35" r="20" fill="none" stroke="var(--line2)" stroke-width="1.2" stroke-dasharray="3 3"/>
      <circle cx="35" cy="35" r="30" fill="none" stroke="var(--track)" stroke-width="1"/>
    </svg>`;
  },
'loading-spinners': (p) => {
    return `<svg viewBox="0 0 50 50" width="44" height="44" style="display:block;animation:haSpin 1.4s linear infinite;">
      <circle cx="25" cy="25" r="18" fill="none" stroke="var(--track)" stroke-width="3"/>
      <circle cx="25" cy="25" r="18" fill="none" stroke="var(--ink)" stroke-width="3.2" stroke-dasharray="80" stroke-dashoffset="50" stroke-linecap="round"/>
    </svg>`;
  },

  'pulse-beacons': (p) => {
    return `<div style="position:relative;width:44px;height:44px;display:grid;place-items:center;">
      <div style="position:absolute;inset:4px;border-radius:50%;border:1.5px solid var(--ink);animation:haPing 1.8s cubic-bezier(0,0,0.2,1) infinite;"></div>
      <div style="width:12px;height:12px;border-radius:50%;background:var(--ink);"></div>
    </div>`;
  },

  'skeleton-shimmers': (p) => {
    return `<div style="width:100%;max-width:120px;display:flex;flex-direction:column;gap:5px;">
      <div style="height:10px;background:var(--panel2);border-radius:3px;position:relative;overflow:hidden;">
        <div style="position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.15),transparent);animation:haShimmer 1.5s infinite;"></div>
      </div>
      <div style="height:10px;width:70%;background:var(--panel2);border-radius:3px;"></div>
    </div>`;
  },

  'status-pills': (p) => {
    return `<div style="display:inline-flex;align-items:center;gap:6px;padding:4px 10px;border-radius:999px;border:1px solid var(--line2);background:var(--panel2);font-size:9.5px;font-weight:bold;color:var(--ink);">
      <span style="width:6px;height:6px;border-radius:50%;background:var(--ink);box-shadow:0 0 5px var(--ink);animation:haBlink 1.4s infinite;"></span>
      ONLINE
    </div>`;
  },

  'notification-dots': (p) => {
    return `<div style="position:relative;display:inline-block;padding:4px;">
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="var(--ink)" stroke-width="2">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
        <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
      </svg>
      <div style="position:absolute;top:2px;right:2px;width:8px;height:8px;border-radius:50%;background:var(--ink);border:1.5px solid var(--panel);"></div>
    </div>`;
  },

  'glitch-elements': (p) => {
    return `<div style="font-size:13px;font-weight:900;letter-spacing:.2em;color:var(--ink);text-transform:uppercase;animation:haGlitch 1.2s infinite steps(2);">
      //GLITCH
    </div>`;
  },

  'matrix-streams': (p) => {
    return `<div style="display:flex;gap:5px;font-size:9px;color:var(--ink);font-family:ui-monospace,monospace;line-height:1.2;">
      <div>1<br>0<br>1</div>
      <div style="opacity:.6;">0<br>1<br>0</div>
      <div style="opacity:.3;">1<br>1<br>0</div>
    </div>`;
  },

  'shimmer-bars': (p) => {
    return `<div style="width:100%;max-width:120px;height:6px;border-radius:999px;background:var(--track);position:relative;overflow:hidden;">
      <div style="position:absolute;top:0;bottom:0;width:40px;background:var(--ink);filter:blur(3px);animation:haShimmer 1.8s infinite;"></div>
    </div>`;
  },

  'banner-alerts': (p) => {
    return `<div style="padding:6px 10px;background:var(--panel2);border:1px solid var(--line2);border-radius:4px;display:flex;align-items:center;gap:6px;font-size:9px;color:var(--ink);">
      <span style="font-weight:bold;">▲ ALERT:</span> SYSTEM OK
    </div>`;
  },

  'toast-popups': (p) => {
    return `<div style="padding:5px 12px;border-radius:999px;background:var(--ink);color:var(--sc-bg);font-size:9.5px;font-weight:bold;">
      SAVED // OK
    </div>`;
  },
'breadcrumb-navs': (p) => {
    return `<div style="display:flex;align-items:center;gap:6px;font-size:9.5px;font-family:ui-monospace,monospace;color:var(--ink3);">
      <span>ROOT</span><span>/</span><span>CORE</span><span>/</span><span style="color:var(--ink);font-weight:bold;">NODE</span>
    </div>`;
  },

  'pagination-bars': (p) => {
    return `<div style="display:flex;gap:3px;align-items:center;">
      <div style="width:20px;height:20px;border-radius:4px;border:1px solid var(--line2);display:grid;place-items:center;font-size:9px;color:var(--ink3);">‹</div>
      <div style="width:20px;height:20px;border-radius:4px;background:var(--ink);color:var(--sc-bg);display:grid;place-items:center;font-size:9px;font-weight:bold;">1</div>
      <div style="width:20px;height:20px;border-radius:4px;border:1px solid var(--line2);display:grid;place-items:center;font-size:9px;color:var(--ink3);">2</div>
      <div style="width:20px;height:20px;border-radius:4px;border:1px solid var(--line2);display:grid;place-items:center;font-size:9px;color:var(--ink3);">›</div>
    </div>`;
  },

  'step-wizards': (p) => {
    return `<div style="display:flex;align-items:center;gap:4px;">
      <div style="width:16px;height:16px;border-radius:50%;background:var(--ink);color:var(--sc-bg);display:grid;place-items:center;font-size:8.5px;font-weight:bold;">1</div>
      <div style="width:20px;height:2px;background:var(--ink);"></div>
      <div style="width:16px;height:16px;border-radius:50%;border:1.5px solid var(--ink);display:grid;place-items:center;font-size:8.5px;font-weight:bold;color:var(--ink);">2</div>
    </div>`;
  },

  'tab-navigators': (p) => {
    return `<div style="display:flex;gap:12px;border-bottom:1px solid var(--line);padding-bottom:4px;font-size:9.5px;font-family:ui-monospace,monospace;">
      <span style="color:var(--ink);font-weight:bold;border-bottom:2px solid var(--ink);padding-bottom:2px;">SYS</span>
      <span style="color:var(--ink3);">LOGS</span>
      <span style="color:var(--ink3);">CONF</span>
    </div>`;
  },

  'tree-views': (p) => {
    return `<div style="display:flex;flex-direction:column;gap:3px;font-size:9px;font-family:ui-monospace,monospace;color:var(--ink);">
      <div>📁 /SYS</div>
      <div style="padding-left:10px;color:var(--ink3);">└ 📄 core.bin</div>
    </div>`;
  },

  'floating-action-menus': (p) => {
    return `<div style="width:36px;height:36px;border-radius:50%;background:var(--ink);color:var(--sc-bg);display:grid;place-items:center;font-size:16px;font-weight:bold;box-shadow:0 3px 8px rgba(0,0,0,.5);">
      +
    </div>`;
  },

  'context-menus': (p) => {
    return `<div style="background:var(--panel2);border:1px solid var(--line2);border-radius:6px;padding:4px 8px;font-size:9px;font-family:ui-monospace,monospace;color:var(--ink);display:flex;flex-direction:column;gap:3px;">
      <div>COPY</div><div style="color:var(--ink3);">PASTE</div>
    </div>`;
  },

  'timeline-nodes': (p) => {
    return `<div style="display:flex;align-items:center;gap:6px;font-size:9px;font-family:ui-monospace,monospace;color:var(--ink);">
      <div style="width:8px;height:8px;border-radius:50%;background:var(--ink);"></div>
      <span>12:00 INIT</span>
    </div>`;
  },

  'accordion-drawers': (p) => {
    return `<div style="width:100%;max-width:120px;background:var(--panel2);border:1px solid var(--line2);border-radius:4px;padding:5px 8px;display:flex;justify-content:space-between;font-size:9px;color:var(--ink);">
      <span>MODULE</span><span>▾</span>
    </div>`;
  },

  'nav-rails': (p) => {
    return `<div style="display:flex;flex-direction:column;gap:6px;align-items:center;padding:4px;">
      <div style="width:14px;height:14px;border-radius:3px;background:var(--ink);"></div>
      <div style="width:14px;height:14px;border-radius:3px;border:1px solid var(--line2);"></div>
    </div>`;
  },
'sparkline-charts': (p) => {
    return `<svg viewBox="0 0 100 40" width="80" height="32" style="display:block;">
      <path d="M 5 35 Q 30 10 55 25 T 95 10" fill="none" stroke="var(--ink)" stroke-width="2"/>
      <circle cx="95" cy="10" r="3" fill="var(--ink)"/>
    </svg>`;
  },

  'mini-bar-charts': (p) => {
    return `<div style="display:flex;gap:3px;align-items:flex-end;height:32px;">
      ${[12, 22, 16, 28, 18, 30, 24].map(h => `<div style="width:5px;height:${h}px;background:var(--ink);border-radius:1px;"></div>`).join('')}
    </div>`;
  },

  'area-graph-plots': (p) => {
    return `<svg viewBox="0 0 100 45" width="80" height="36" style="display:block;">
      <polygon points="5,40 25,20 50,30 75,10 95,25 95,40 5,40" fill="var(--line2)" stroke="var(--ink)" stroke-width="1.5"/>
    </svg>`;
  },

  'donut-charts': (p) => {
    return `<svg viewBox="0 0 60 60" width="48" height="48" style="display:block;">
      <circle cx="30" cy="30" r="20" fill="none" stroke="var(--track)" stroke-width="6"/>
      <circle cx="30" cy="30" r="20" fill="none" stroke="var(--ink)" stroke-width="6.2" stroke-dasharray="125" stroke-dashoffset="${125 - p * 1.25}" stroke-linecap="round" transform="rotate(-90 30 30)"/>
    </svg>`;
  },

  'kpi-metric-cards': (p) => {
    return `<div style="padding:4px 8px;border:1px solid var(--line2);border-radius:4px;font-family:ui-monospace,monospace;">
      <div style="font-size:7px;color:var(--ink3);">REVENUE</div>
      <div style="font-size:13px;font-weight:bold;color:var(--ink);">$${Math.round(p * 84)}K</div>
    </div>`;
  },

  'heatmap-grids': (p) => {
    return `<div style="display:grid;grid-template-columns:repeat(5, 7px);gap:2px;">
      ${[0.2, 0.6, 0.9, 0.4, 0.8, 0.5, 0.1, 0.7, 1.0, 0.3].map(o => `<div style="width:7px;height:7px;border-radius:1px;background:var(--ink);opacity:${o};"></div>`).join('')}
    </div>`;
  },

  'scatter-matrices': (p) => {
    return `<svg viewBox="0 0 50 50" width="40" height="40" style="display:block;">
      <rect width="50" height="50" fill="none" stroke="var(--line2)"/>
      <circle cx="15" cy="20" r="2" fill="var(--ink)"/>
      <circle cx="35" cy="15" r="2.5" fill="var(--ink)"/>
      <circle cx="28" cy="38" r="2" fill="var(--ink)"/>
    </svg>`;
  },

  'candlestick-bars': (p) => {
    return `<div style="display:flex;gap:5px;align-items:center;height:36px;">
      <div style="width:5px;height:20px;background:var(--ink);position:relative;"><div style="position:absolute;left:2px;top:-6px;bottom:-6px;width:1px;background:var(--ink);"></div></div>
      <div style="width:5px;height:14px;border:1px solid var(--ink);position:relative;"><div style="position:absolute;left:2px;top:-4px;bottom:-4px;width:1px;background:var(--ink);"></div></div>
    </div>`;
  },

  'data-tables': (p) => {
    return `<div style="font-size:8px;font-family:ui-monospace,monospace;color:var(--ink);line-height:1.4;">
      <div style="border-bottom:1px solid var(--line);">PID // CPU</div>
      <div style="color:var(--ink3);">01 // ${Math.round(p)}%</div>
    </div>`;
  },

  'diff-viewers': (p) => {
    return `<div style="font-size:8px;font-family:ui-monospace,monospace;line-height:1.3;">
      <div style="color:var(--ink);">+ const A = 1</div>
      <div style="color:var(--ink3);">- const B = 0</div>
    </div>`;
  },
'text-inputs': (p) => {
    return `<div style="width:100%;max-width:120px;padding:6px 8px;background:var(--panel2);border:1px solid var(--line2);border-radius:4px;font-size:9px;font-family:ui-monospace,monospace;color:var(--ink);display:flex;align-items:center;gap:4px;">
      <span>input_val</span><span style="width:1px;height:10px;background:var(--ink);" class="ha-blink"></span>
    </div>`;
  },

  'search-bars': (p) => {
    return `<div style="display:flex;align-items:center;gap:6px;background:var(--panel2);border:1px solid var(--line2);border-radius:999px;padding:4px 10px;font-size:9px;color:var(--ink3);">
      <span>🔍</span><span>search…</span>
    </div>`;
  },

  'password-masks': (p) => {
    return `<div style="display:flex;gap:4px;align-items:center;padding:6px 10px;background:var(--panel2);border:1px solid var(--line2);border-radius:4px;">
      ${[1,2,3,4,5,6].map(() => `<div style="width:5px;height:5px;border-radius:50%;background:var(--ink);"></div>`).join('')}
    </div>`;
  },

  'pin-code-boxes': (p) => {
    return `<div style="display:flex;gap:4px;">
      ${['4','2','8','_'].map(d => `<div style="width:18px;height:22px;border:1px solid var(--line2);background:var(--panel2);display:grid;place-items:center;font-size:10px;font-weight:bold;color:var(--ink);border-radius:3px;">${d}</div>`).join('')}
    </div>`;
  },

  'color-swatches': (p) => {
    return `<div style="display:flex;gap:4px;align-items:center;">
      <div style="width:16px;height:16px;border-radius:50%;background:#ffffff;border:1px solid var(--line);"></div>
      <div style="width:16px;height:16px;border-radius:50%;background:#888888;"></div>
      <div style="width:16px;height:16px;border-radius:50%;background:#222222;border:1.5px solid var(--ink);"></div>
    </div>`;
  },

  'date-pickers': (p) => {
    return `<div style="display:grid;grid-template-columns:repeat(4, 10px);gap:3px;font-size:7px;color:var(--ink3);text-align:center;">
      <div>1</div><div style="color:var(--ink);font-weight:bold;">2</div><div>3</div><div>4</div>
    </div>`;
  },

  'time-selectors': (p) => {
    return `<div style="padding:4px 8px;border-radius:4px;border:1px solid var(--line2);background:var(--panel2);font-size:10px;font-family:ui-monospace,monospace;font-weight:bold;color:var(--ink);">
      14:28:00
    </div>`;
  },

  'file-dropzones': (p) => {
    return `<div style="border:1.5px dashed var(--line2);border-radius:4px;padding:6px 12px;font-size:8.5px;color:var(--ink3);text-align:center;">
      DROP FILE
    </div>`;
  },

  'tag-inputs': (p) => {
    return `<div style="display:flex;gap:3px;">
      <span style="padding:2px 6px;border-radius:3px;background:var(--line2);font-size:8px;color:var(--ink);">TAG</span>
      <span style="padding:2px 6px;border-radius:3px;background:var(--line2);font-size:8px;color:var(--ink);">UI</span>
    </div>`;
  },

  'stepper-inputs': (p) => {
    return `<div style="display:flex;align-items:center;border:1px solid var(--line2);border-radius:4px;background:var(--panel2);font-size:9.5px;color:var(--ink);">
      <span style="padding:3px 6px;border-right:1px solid var(--line);">-</span>
      <span style="padding:3px 8px;font-weight:bold;">${Math.round(p)}</span>
      <span style="padding:3px 6px;border-left:1px solid var(--line);">+</span>
    </div>`;
  },
'hud-panels': (p) => {
    return `<div style="position:relative;padding:10px 14px;border:1px solid var(--line2);background:var(--panel2);font-size:8px;font-family:ui-monospace,monospace;color:var(--ink);">
      <div style="font-weight:bold;">[HUD_SECTOR]</div>
      <div style="color:var(--ink3);">SYS_ONLINE</div>
    </div>`;
  },

  'card-containers': (p) => {
    return `<div style="padding:8px 10px;background:var(--panel2);border:1px solid var(--line2);border-radius:6px;font-size:9px;color:var(--ink);">
      <div style="font-weight:bold;margin-bottom:3px;">CARD_ITEM</div>
      <div style="font-size:7.5px;color:var(--ink3);">Container module</div>
    </div>`;
  },

  'tooltip-balloons': (p) => {
    return `<div style="position:relative;display:inline-block;padding:5px 10px;background:var(--ink);color:var(--sc-bg);border-radius:4px;font-size:8px;font-weight:bold;font-family:ui-monospace,monospace;">
      INFO_TIP
    </div>`;
  },

  'popover-cards': (p) => {
    return `<div style="border:1px solid var(--line2);background:var(--panel2);border-radius:6px;padding:6px 10px;font-size:8.5px;color:var(--ink);box-shadow:0 4px 12px rgba(0,0,0,.4);">
      POPOVER // MODAL
    </div>`;
  },

  'user-avatars': (p) => {
    return `<div style="width:36px;height:36px;border-radius:50%;border:2px solid var(--ink);background:var(--panel2);display:grid;place-items:center;font-size:11px;font-weight:bold;color:var(--ink);position:relative;">
      HA
      <div style="position:absolute;bottom:0;right:0;width:8px;height:8px;border-radius:50%;background:var(--ink);border:1.5px solid var(--panel);"></div>
    </div>`;
  },

  'profile-cards': (p) => {
    return `<div style="display:flex;align-items:center;gap:6px;padding:4px 8px;border:1px solid var(--line2);border-radius:6px;">
      <div style="width:20px;height:20px;border-radius:50%;background:var(--ink);"></div>
      <div style="font-size:8.5px;font-family:ui-monospace,monospace;color:var(--ink);">OPERATOR</div>
    </div>`;
  },

  'pricing-cards': (p) => {
    return `<div style="padding:6px 8px;border:1.5px solid var(--ink);border-radius:6px;text-align:center;font-family:ui-monospace,monospace;">
      <div style="font-size:7px;color:var(--ink3);">PRO TIER</div>
      <div style="font-size:12px;font-weight:bold;color:var(--ink);">$49/MO</div>
    </div>`;
  },

  'feature-lists': (p) => {
    return `<div style="display:flex;flex-direction:column;gap:3px;font-size:8px;font-family:ui-monospace,monospace;color:var(--ink);">
      <div>✓ LOW LATENCY</div>
      <div>✓ 100% MONO</div>
    </div>`;
  },

  'terminal-windows': (p) => {
    return `<div style="background:var(--panel2);border:1px solid var(--line2);border-radius:4px;overflow:hidden;width:100%;max-width:110px;">
      <div style="display:flex;gap:3px;padding:4px 6px;background:var(--panel);border-bottom:1px solid var(--line);">
        <div style="width:4px;height:4px;border-radius:50%;background:var(--ink3);"></div>
        <div style="width:4px;height:4px;border-radius:50%;background:var(--ink3);"></div>
      </div>
      <div style="padding:4px 6px;font-size:7.5px;font-family:ui-monospace,monospace;color:var(--ink);">$ init</div>
    </div>`;
  },

  'code-boxes': (p) => {
    return `<div style="padding:6px 8px;background:var(--panel2);border:1px solid var(--line2);border-radius:4px;font-family:ui-monospace,monospace;font-size:8px;color:var(--ink);">
      <code>export default UI;</code>
    </div>`;
  },
'keybinding-kbd': (p) => {
    return `<div style="display:flex;gap:4px;">
      <kbd style="padding:4px 8px;border-radius:4px;background:var(--panel2);border:1px solid var(--line2);box-shadow:0 2px 0 var(--line);font-size:9px;font-family:ui-monospace,monospace;color:var(--ink);">⌘</kbd>
      <kbd style="padding:4px 8px;border-radius:4px;background:var(--panel2);border:1px solid var(--line2);box-shadow:0 2px 0 var(--line);font-size:9px;font-family:ui-monospace,monospace;color:var(--ink);">K</kbd>
    </div>`;
  },

  'rating-stars': (p) => {
    return `<div style="display:flex;gap:3px;font-size:12px;color:var(--ink);">
      <span>★</span><span>★</span><span>★</span><span>★</span><span style="opacity:.3;">★</span>
    </div>`;
  },

  'media-scrubbers': (p) => {
    return `<div style="width:100%;max-width:120px;display:flex;flex-direction:column;gap:4px;">
      <div style="height:4px;border-radius:999px;background:var(--track);position:relative;">
        <div style="width:${p}%;height:100%;background:var(--ink);border-radius:999px;"></div>
      </div>
      <div style="font-size:7.5px;color:var(--ink3);display:flex;justify-content:space-between;">
        <span>01:14</span><span>03:45</span>
      </div>
    </div>`;
  },

  'barcode-qr': (p) => {
    return `<div style="display:flex;gap:2px;align-items:center;height:28px;">
      ${[2,1,3,1,2,1,4,1,2,3,1,2].map(w => `<div style="width:${w}px;height:100%;background:var(--ink);"></div>`).join('')}
    </div>`;
  },
};

/* ----------------------------------------------------------------------------
   THUMBNAIL RENDERER FOR HOMEPAGE GRID
   -------------------------------------------------------------------------- */
function renderThumbnail(groupId, pct) {
  const p = pct === undefined ? 68 : pct;
  const fn = THUMB_BUILDERS[groupId];
  if (fn) return fn(p);
  const comp = buildComponent(groupId, 0, 0, p, 'ha-thumb');
  return comp.html;
}

/* ----------------------------------------------------------------------------
   MASTER PROCEDURAL COMPONENT DISPATCHER (84 Groups · 15 Sub-Families)
   -------------------------------------------------------------------------- */
function buildComponent(groupId, famIdx, varIdx, pct, cls) {
  const p = pct === undefined ? 68 : pct;
  const fp = getFamProps(famIdx);
  const ap = getArchProps(varIdx);

  // Category 1: Indicators (10 groups)
  if (groupId === 'semi-circle-indicator' || groupId === 'circular-gauges' || 
      groupId === 'speedometer-gauges' || groupId === 'compass-rings') {
    return buildGauge(groupId, p, famIdx, varIdx, cls, fp, ap);
  }
  if (groupId === 'linear-progress' || groupId === 'step-progress' || 
      groupId === 'segmented-meters' || groupId === 'battery-indicators' || 
      groupId === 'signal-meters' || groupId === 'altimeter-scales') {
    return buildLinearMeter(groupId, p, famIdx, varIdx, cls, fp, ap);
  }

  // Category 2: Controls & Inputs (10 groups)
  if (groupId === 'rotary-knobs' || groupId === 'volume-faders' || groupId === 'range-sliders') {
    return buildRotaryFader(groupId, p, famIdx, varIdx, cls, fp, ap);
  }
  if (groupId === 'push-buttons' || groupId === 'icon-buttons' || groupId === 'split-buttons') {
    return buildButton(groupId, p, famIdx, varIdx, cls, fp, ap);
  }
  if (groupId === 'toggle-switches' || groupId === 'segmented-controls' || 
      groupId === 'radio-selectors' || groupId === 'checkbox-states') {
    return buildToggleSelector(groupId, p, famIdx, varIdx, cls, fp, ap);
  }

  // Category 3: Audio & Signal (10 groups)
  if (groupId === 'radar-sweeps' || groupId === 'crosshair-reticles' || groupId === 'telemetry-hud') {
    return buildRadarHud(groupId, p, famIdx, varIdx, cls, fp, ap);
  }
  if (groupId === 'audio-equalizer' || groupId === 'waveform-monitors' || 
      groupId === 'oscilloscope-traces' || groupId === 'vu-meters' || 
      groupId === 'bpm-metronomes' || groupId === 'spectrum-analyzers' || 
      groupId === 'acoustics-visualizers') {
    return buildAudioSignal(groupId, p, famIdx, varIdx, cls, fp, ap);
  }

  // Category 4: Feedback & Status (10 groups)
  if (groupId === 'glitch-elements' || groupId === 'matrix-streams' || groupId === 'shimmer-bars') {
    return buildCyberStream(groupId, p, famIdx, varIdx, cls, fp, ap);
  }
  if (groupId === 'loading-spinners' || groupId === 'pulse-beacons' || 
      groupId === 'skeleton-shimmers' || groupId === 'status-pills' || 
      groupId === 'notification-dots' || groupId === 'banner-alerts' || 
      groupId === 'toast-popups') {
    return buildStatusFeedback(groupId, p, famIdx, varIdx, cls, fp, ap);
  }

  // Category 5: Navigation & Steps (10 groups)
  if (groupId === 'breadcrumb-navs' || groupId === 'pagination-bars' || 
      groupId === 'step-wizards' || groupId === 'tab-navigators' || 
      groupId === 'tree-views' || groupId === 'floating-action-menus' || 
      groupId === 'context-menus' || groupId === 'timeline-nodes' || 
      groupId === 'accordion-drawers' || groupId === 'nav-rails') {
    return buildNavigation(groupId, p, famIdx, varIdx, cls, fp, ap);
  }

  // Category 6: Data Vis & Charts (10 groups)
  if (groupId === 'sparkline-charts' || groupId === 'mini-bar-charts' || 
      groupId === 'area-graph-plots' || groupId === 'donut-charts' || 
      groupId === 'kpi-metric-cards' || groupId === 'heatmap-grids' || 
      groupId === 'scatter-matrices' || groupId === 'candlestick-bars' || 
      groupId === 'data-tables' || groupId === 'diff-viewers') {
    return buildDataChart(groupId, p, famIdx, varIdx, cls, fp, ap);
  }

  // Category 7: Form Controls (10 groups)
  if (groupId === 'text-inputs' || groupId === 'search-bars' || 
      groupId === 'password-masks' || groupId === 'pin-code-boxes' || 
      groupId === 'color-swatches' || groupId === 'date-pickers' || 
      groupId === 'time-selectors' || groupId === 'file-dropzones' || 
      groupId === 'tag-inputs' || groupId === 'stepper-inputs') {
    return buildFormInput(groupId, p, famIdx, varIdx, cls, fp, ap);
  }

  // Category 8: HUD & Surfaces (10 groups)
  if (groupId === 'hud-panels' || groupId === 'card-containers' || 
      groupId === 'tooltip-balloons' || groupId === 'popover-cards' || 
      groupId === 'user-avatars' || groupId === 'profile-cards' || 
      groupId === 'pricing-cards' || groupId === 'feature-lists' || 
      groupId === 'terminal-windows' || groupId === 'code-boxes') {
    return buildSurfaceHUD(groupId, p, famIdx, varIdx, cls, fp, ap);
  }

  // Category 9: Media & Utilities (4 groups)
  if (groupId === 'keybinding-kbd' || groupId === 'rating-stars' || 
      groupId === 'media-scrubbers' || groupId === 'barcode-qr') {
    return buildMediaUtility(groupId, p, famIdx, varIdx, cls, fp, ap);
  }

  // Fallback
  return buildGauge(groupId, p, famIdx, varIdx, cls, fp, ap);
}

const COMP_BUILDERS = {};
for (const g of GROUPS) {
  COMP_BUILDERS[g.id] = (p, famIdx, varIdx, cls) => buildComponent(g.id, famIdx, varIdx, p, cls);
}

/* ----------------------------------------------------------------------------
   GET VARIANT METADATA & ARTIFACT GENERATOR
   -------------------------------------------------------------------------- */
function getVariant(grpId, variantIdx, demoPct) {
  const grp = GROUPS.find(g => g.id === grpId) || GROUPS[0];
  const safeIdx = Math.max(0, Math.min(209, parseInt(variantIdx, 10) || 0));
  const famIdx = Math.floor(safeIdx / 14);
  const varIdx = safeIdx % 14;
  const famName = SUB_FAMILIES[famIdx];
  const archName = VARIANT_ARCHETYPES[varIdx];
  const varId = `${grp.prefix}-${String(safeIdx + 1).padStart(3, '0')}`;
  const varName = `${famName} · ${archName}`;
  const p = demoPct === undefined ? 68 : demoPct;
  const cls = `ha-${grp.prefix.toLowerCase()}-${safeIdx + 1}`;

  const built = buildComponent(grp.id, famIdx, varIdx, p, cls);

  const snippet = `<!-- ${varId} · ${varName} — from HALFARC -->
<!-- Responsive monochrome UI component. Drive by modifying --p (0 to 100). Zero JS dependencies. -->
${built.html}

<style>
${SHARED_BASE_CSS}
${built.css}
</style>`;

  const fullFile = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>HALFARC — ${varId} ${varName}</title>
<style>
body{margin:0;min-height:100vh;display:grid;place-items:center;background:#0a0a0a;font-family:ui-monospace,monospace;}
.stage{width:min(440px,92vw);padding:24px;}
${SHARED_BASE_CSS}
${built.css}
</style>
</head>
<body>
<div class="stage">
  ${built.html}
</div>
</body>
</html>`;

  return {
    idx: safeIdx + 1,
    id: varId,
    name: varName,
    fam: famName,
    arch: archName,
    desc: `${famName} sub-family with ${archName.toLowerCase()} motion and layout profile in ${grp.name}.`,
    html: built.html,
    css: built.css,
    snippet,
    fullFile,
    demoPct: p
  };
}

global.HA_CATALOG = {
  CATEGORIES,
  GROUPS,
  getGroup: (id) => GROUPS.find(g => g.id === id),
  getVariant,
  renderThumbnail,
  SUB_FAMILIES,
  VARIANT_ARCHETYPES,
  THUMB_BUILDERS,
  COMP_BUILDERS,
  getFamProps,
  getArchProps,
  wrapContainer,
  buildComponent
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = global.HA_CATALOG;
}

})(typeof window !== 'undefined' ? window : globalThis);
