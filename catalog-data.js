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
  display: grid;
  place-items: center;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
}
@media (prefers-color-scheme: light) {
  .ha-comp {
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
}
@keyframes haSpin { to { transform: rotate(360deg); } }
@keyframes haSpinRev { to { transform: rotate(-360deg); } }
@keyframes haPulse { 0%,100% { opacity: .4; transform: scale(0.98); } 50% { opacity: 1; transform: scale(1.02); } }
@keyframes haBreathe { 0%,100% { opacity: .65; } 50% { opacity: 1; } }
@keyframes haMarch { to { stroke-dashoffset: -40px; } }
@keyframes haShimmer { 0% { transform: translateX(-120%); } 100% { transform: translateX(120%); } }
@keyframes haScan { 0% { transform: translateY(-40px); } 100% { transform: translateY(40px); } }
@keyframes haGlitch { 0%,100% { transform: translate(0); } 20% { transform: translate(-1.2px, 0.8px); } 40% { transform: translate(1px, -1px); } 60% { transform: translate(-0.8px, -0.6px); } 80% { transform: translate(1px, 0.8px); } }
@keyframes haBounce { 0%,100% { transform: scaleY(0.3); } 50% { transform: scaleY(1); } }
@keyframes haPing { 0% { transform: scale(0.6); opacity: 1; } 100% { transform: scale(1.8); opacity: 0; } }
@keyframes haBlink { 0%,100% { opacity: 1; } 50% { opacity: 0.15; } }
@keyframes haSweep { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }

.ha-spin { animation: haSpin 1.4s linear infinite; }
.ha-spin-rev { animation: haSpinRev 1.4s linear infinite; }
.ha-pulse { animation: haPulse 2s ease-in-out infinite; }
.ha-breathe { animation: haBreathe 2s ease-in-out infinite; }
.ha-march { animation: haMarch 1.2s linear infinite; }
.ha-shimmer { animation: haShimmer 2.5s infinite; }
.ha-scan { animation: haScan 2s infinite linear; }
.ha-glitch { animation: haGlitch 2.5s infinite steps(2); }
.ha-bounce { animation: haBounce 1.5s infinite ease-in-out; }
.ha-ping { animation: haPing 1.8s infinite cubic-bezier(0,0,0.2,1); }
.ha-blink { animation: haBlink 0.9s infinite; }
.ha-sweep { animation: haSweep 2.5s linear infinite; }

.hud-frame { position: relative; padding: 10px; box-sizing: border-box; }
.hud-c { position: absolute; width: 6px; height: 6px; border-color: var(--ink); border-style: solid; }
.hud-c.tl { top: -1px; left: -1px; border-width: 1.5px 0 0 1.5px; }
.hud-c.tr { top: -1px; right: -1px; border-width: 1.5px 1.5px 0 0; }
.hud-c.bl { bottom: -1px; left: -1px; border-width: 0 0 1.5px 1.5px; }
.hud-c.br { bottom: -1px; right: -1px; border-width: 0 1.5px 1.5px 0; }
.hud-tag { font-family: ui-monospace, monospace; font-size: 8px; letter-spacing: .12em; color: var(--ink3); text-transform: uppercase; }
`;

const GROUPS = [
  {"id": "semi-circle-indicator", "idx": "GRP-01", "name": "Semi-Circular Scroll Indicators", "cat": "indicators", "prefix": "V", "desc": "The signature 210 precision semi-circle indicators in 30 families driven by single property --p.", "catLabel": "Indicators & Gauges"},
  {"id": "circular-gauges", "idx": "GRP-02", "name": "Circular Progress Gauges & Rings", "cat": "indicators", "prefix": "CPG", "desc": "Full 360° progress rings, tachometers, dial needles, and calibrated concentric orbits.", "catLabel": "Indicators & Gauges"},
  {"id": "linear-progress", "idx": "GRP-03", "name": "Linear Progress Bars & Micro-Tracks", "cat": "indicators", "prefix": "LPB", "desc": "Sleek horizontal tracks, laser scanning heads, hazard stripes, and segmented LED rails.", "catLabel": "Indicators & Gauges"},
  {"id": "step-progress", "idx": "GRP-04", "name": "Step Progress Trackers & Workflow Steppers", "cat": "indicators", "prefix": "STP", "desc": "Multi-stage node pipelines, connected circuits, pulse junctions, and milestone beacons.", "catLabel": "Indicators & Gauges"},
  {"id": "segmented-meters", "idx": "GRP-05", "name": "Segmented Level Meters & Discrete Bars", "cat": "indicators", "prefix": "SGM", "desc": "Discrete LED block columns, studio level ladders, and chamfered threshold bars.", "catLabel": "Indicators & Gauges"},
  {"id": "battery-indicators", "idx": "GRP-06", "name": "Battery & Power Level Cells", "cat": "indicators", "prefix": "BAT", "desc": "Precision battery housings, charging bolt glyphs, cell stacks, and plasma cores.", "catLabel": "Indicators & Gauges"},
  {"id": "signal-meters", "idx": "GRP-07", "name": "Signal Strength & Connectivity Bars", "cat": "indicators", "prefix": "SIG", "desc": "Ascending cellular bars, radial Wi-Fi arcs, antenna towers, and broadcast arrays.", "catLabel": "Indicators & Gauges"},
  {"id": "speedometer-gauges", "idx": "GRP-08", "name": "Speedometer & Tachometer Dials", "cat": "indicators", "prefix": "SPD", "desc": "240° and 270° sweeping needles, high-RPM redline zones, and digital odometer windows.", "catLabel": "Indicators & Gauges"},
  {"id": "compass-rings", "idx": "GRP-09", "name": "Compass Rings & Heading Reticles", "cat": "indicators", "prefix": "CMP", "desc": "Azimuth bearing rings, navigation gyros, 360° degree rims, and military four-point roses.", "catLabel": "Indicators & Gauges"},
  {"id": "altimeter-scales", "idx": "GRP-10", "name": "Vertical Altimeter & Depth Scales", "cat": "indicators", "prefix": "ALT", "desc": "Vertical graduation tapes, rolling elevation carats, pressure bars, and depth meters.", "catLabel": "Indicators & Gauges"},

  {"id": "rotary-knobs", "idx": "GRP-11", "name": "Rotary Knobs & Potentiometer Dials", "cat": "controls", "prefix": "KNB", "desc": "Tactile volume wheels, knurled metal rims, pointer notches, and 10-step detent encoders.", "catLabel": "Controls & Inputs"},
  {"id": "toggle-switches", "idx": "GRP-12", "name": "Toggle Switches & Bistable Levers", "cat": "controls", "prefix": "TOG", "desc": "Mechanical toggle levers, pill sliders, rocker plates, and illuminated LED status toggles.", "catLabel": "Controls & Inputs"},
  {"id": "range-sliders", "idx": "GRP-13", "name": "Range Sliders & Dual-Thumb Faders", "cat": "controls", "prefix": "SLD", "desc": "Precision horizontal tracks, floating value bubbles, dual-boundary thumbs, and calibrated pips.", "catLabel": "Controls & Inputs"},
  {"id": "push-buttons", "idx": "GRP-14", "name": "Tactile Push Buttons & Micro-Capsules", "cat": "controls", "prefix": "BTN", "desc": "Tactile press-down buttons, chamfered tactical triggers, glowing borders, and corner frames.", "catLabel": "Controls & Inputs"},
  {"id": "segmented-controls", "idx": "GRP-15", "name": "Segmented Tabs & Selector Bars", "cat": "controls", "prefix": "SGC", "desc": "Sliding pill switchers, bordered modular blocks, bracketed selectors, and monospace rails.", "catLabel": "Controls & Inputs"},
  {"id": "radio-selectors", "idx": "GRP-16", "name": "Radio Buttons & Precision Discs", "cat": "controls", "prefix": "RAD", "desc": "Concentric target discs, animated inner pop dots, diamond radios, and cyber rings.", "catLabel": "Controls & Inputs"},
  {"id": "checkbox-states", "idx": "GRP-17", "name": "Checkboxes & Multi-State Ticks", "cat": "controls", "prefix": "CHK", "desc": "Cyber square checkboxes, animated drawing checkmarks, cross marks, and indeterminate dashes.", "catLabel": "Controls & Inputs"},
  {"id": "icon-buttons", "idx": "GRP-18", "name": "Icon Action Buttons & Tool Triggers", "cat": "controls", "prefix": "ICN", "desc": "Square, round, and hex icon housings, floating tool anchors, and hover crosshair frames.", "catLabel": "Controls & Inputs"},
  {"id": "split-buttons", "idx": "GRP-19", "name": "Split Action Buttons & Drop Triggers", "cat": "controls", "prefix": "SPL", "desc": "Dual-action split buttons, primary command + chevron drop trigger, and tactical joints.", "catLabel": "Controls & Inputs"},
  {"id": "volume-faders", "idx": "GRP-20", "name": "Vertical Studio Faders & Console Channels", "cat": "controls", "prefix": "FAD", "desc": "Studio mixing console faders, grip line thumbs, decibel scales, and motorized channels.", "catLabel": "Controls & Inputs"},

  {"id": "audio-equalizer", "idx": "GRP-21", "name": "Audio Equalizers & Multi-Band Graphic Bars", "cat": "audio", "prefix": "AEE", "desc": "Multi-band frequency visualizers, jumping peak-hold pips, and animated bar cascades.", "catLabel": "Audio & Signal"},
  {"id": "waveform-monitors", "idx": "GRP-22", "name": "Waveform Monitors & Audio Timeline Tracks", "cat": "audio", "prefix": "WFM", "desc": "Oscillating audio waveforms, center-zero scan lines, playback playheads, and min/max envelopes.", "catLabel": "Audio & Signal"},
  {"id": "oscilloscope-traces", "idx": "GRP-23", "name": "Oscilloscope CRT Traces & Lissajous Curves", "cat": "audio", "prefix": "OSC", "desc": "Green-phosphor CRT grid simulators, sine-wave traces, square waves, and Lissajous loops.", "catLabel": "Audio & Signal"},
  {"id": "vu-meters", "idx": "GRP-24", "name": "Analog VU Meters & Decibel Gauges", "cat": "audio", "prefix": "VUM", "desc": "Ballistic analog needle meters, curved dB graduation plates, redline zones, and zero pips.", "catLabel": "Audio & Signal"},
  {"id": "bpm-metronomes", "idx": "GRP-25", "name": "BPM Tappers & Metronome Needles", "cat": "audio", "prefix": "BPM", "desc": "Inverted pendulum tempo arms, sliding counter-weights, tap BPM triggers, and beat pulses.", "catLabel": "Audio & Signal"},
  {"id": "spectrum-analyzers", "idx": "GRP-26", "name": "Frequency Spectrum Ribbons & Cascades", "cat": "audio", "prefix": "SPC", "desc": "Fast Fourier Transform (FFT) waterfall cascades, logarithmic bands, and filled ribbons.", "catLabel": "Audio & Signal"},
  {"id": "radar-sweeps", "idx": "GRP-27", "name": "Radar Sweeps & Sonar Pings", "cat": "audio", "prefix": "RDR", "desc": "Rotating 360° radar beams, glowing phosphor blips, range rings, and sonar echo circles.", "catLabel": "Audio & Signal"},
  {"id": "crosshair-reticles", "idx": "GRP-28", "name": "Crosshair Reticles & Targeting Sights", "cat": "audio", "prefix": "RET", "desc": "Tactical HUD reticles, sniper mil-dots, dynamic expanding sights, and locking brackets.", "catLabel": "Audio & Signal"},
  {"id": "telemetry-hud", "idx": "GRP-29", "name": "Telemetry HUDs & Flight Avionics", "cat": "audio", "prefix": "HUD", "desc": "Fighter jet pitch ladders, artificial horizons, roll angle indicators, and flight vectors.", "catLabel": "Audio & Signal"},
  {"id": "acoustics-visualizers", "idx": "GRP-30", "name": "Acoustic Nodes & Audio Rings", "cat": "audio", "prefix": "ACS", "desc": "Omnidirectional sound wave ripples, speaker cone excursions, and sonic particle lattices.", "catLabel": "Audio & Signal"},

  {"id": "loading-spinners", "idx": "GRP-31", "name": "Loading Spinners & Gyro Orbiters", "cat": "feedback", "prefix": "SPN", "desc": "Counter-rotating gyro rings, orbital bead satellites, and segmented spinning rotors.", "catLabel": "Feedback & Status"},
  {"id": "pulse-beacons", "idx": "GRP-32", "name": "Pulsing Status Beacons & Ping Nodes", "cat": "feedback", "prefix": "BCN", "desc": "Concentric radiating ripples, glowing presence dots, and alive status pulses.", "catLabel": "Feedback & Status"},
  {"id": "skeleton-shimmers", "idx": "GRP-33", "name": "Skeleton Loaders & Ghost Wireframes", "cat": "feedback", "prefix": "SKL", "desc": "Ghost text lines, avatar plates, and technical card wireframes with scanning shimmer.", "catLabel": "Feedback & Status"},
  {"id": "status-pills", "idx": "GRP-34", "name": "Status Pill Badges & Live State Chips", "cat": "feedback", "prefix": "PIL", "desc": "Monospaced status pills with live blinking status LEDs (Online, Syncing, Standby, Error).", "catLabel": "Feedback & Status"},
  {"id": "notification-dots", "idx": "GRP-35", "name": "Notification Badges & Unread Counter Pips", "cat": "feedback", "prefix": "NOT", "desc": "Bell badges, unread counter pills, pinging corner dots, and micro notification tabs.", "catLabel": "Feedback & Status"},
  {"id": "glitch-elements", "idx": "GRP-36", "name": "Cyber Glitch Decoders & Signal Faults", "cat": "feedback", "prefix": "GLT", "desc": "Fractured cyber typography, horizontal scanline offsets, and signal jitter decoders.", "catLabel": "Feedback & Status"},
  {"id": "matrix-streams", "idx": "GRP-37", "name": "Matrix Rain & Digital Bit Streams", "cat": "feedback", "prefix": "MTX", "desc": "Cascading columns of binary bits, hex bytes, and monospace glyphs raining in rhythms.", "catLabel": "Feedback & Status"},
  {"id": "shimmer-bars", "idx": "GRP-38", "name": "Indeterminate Progress & Laser Sweepers", "cat": "feedback", "prefix": "SHM", "desc": "Endless scanning lasers, sweeping frosted highlights, and travelling dash arrays.", "catLabel": "Feedback & Status"},
  {"id": "banner-alerts", "idx": "GRP-39", "name": "System Alert Banners & Callout Strips", "cat": "feedback", "prefix": "BNR", "desc": "Technical system alert callouts, warning brackets, dismiss crosses, and status borders.", "catLabel": "Feedback & Status"},
  {"id": "toast-popups", "idx": "GRP-40", "name": "Toast Notifications & Console Snackbars", "cat": "feedback", "prefix": "TST", "desc": "Floating notification snackbars, timeout countdown progress hairlines, and action chips.", "catLabel": "Feedback & Status"},

  {"id": "breadcrumb-navs", "idx": "GRP-41", "name": "Breadcrumb Paths & Chevron Hierarchies", "cat": "navigation", "prefix": "BRD", "desc": "Stepped path breadcrumbs, slash/chevron delimiters, home glyphs, and active node glows.", "catLabel": "Navigation & Steps"},
  {"id": "pagination-bars", "idx": "GRP-42", "name": "Pagination Controls & Page Number Strips", "cat": "navigation", "prefix": "PGN", "desc": "Number strips, active page boxes, ellipsis jumpers, and micro arrow step buttons.", "catLabel": "Navigation & Steps"},
  {"id": "step-wizards", "idx": "GRP-43", "name": "Multi-Step Wizards & Milestone Ladders", "cat": "navigation", "prefix": "WZD", "desc": "Linear multi-step wizards, completed check circles, active stage flags, and connectors.", "catLabel": "Navigation & Steps"},
  {"id": "tab-navigators", "idx": "GRP-44", "name": "Tab Navigators & Underline Sliders", "cat": "navigation", "prefix": "TAB", "desc": "Top tab rails, sliding underline track indicators, pill tab docks, and counter badges.", "catLabel": "Navigation & Steps"},
  {"id": "tree-views", "idx": "GRP-45", "name": "Hierarchical Tree Views & Branch Nodes", "cat": "navigation", "prefix": "TRE", "desc": "Collapsible folder trees, directory branch lines, document glyphs, and depth indents.", "catLabel": "Navigation & Steps"},
  {"id": "floating-action-menus", "idx": "GRP-46", "name": "Floating Action Hubs & Radial Docks", "cat": "navigation", "prefix": "FAB", "desc": "Expandable floating action hubs, radial action satellites, and circular speed-dials.", "catLabel": "Navigation & Steps"},
  {"id": "context-menus", "idx": "GRP-47", "name": "Context Menus & Hover Flyout Stacks", "cat": "navigation", "prefix": "CTX", "desc": "Floating context menus, keyboard shortcut chips, divider hairlines, and submenu chevrons.", "catLabel": "Navigation & Steps"},
  {"id": "timeline-nodes", "idx": "GRP-48", "name": "Vertical Timeline Nodes & Event Stems", "cat": "navigation", "prefix": "TML", "desc": "Vertical milestone stems, event timestamps, pulse junction dots, and story callouts.", "catLabel": "Navigation & Steps"},
  {"id": "accordion-drawers", "idx": "GRP-49", "name": "Accordion Drawers & Expandable Shelves", "cat": "navigation", "prefix": "ACD", "desc": "Collapsible drawer headers, rotating indicator chevrons, and smooth expanding shelves.", "catLabel": "Navigation & Steps"},
  {"id": "nav-rails", "idx": "GRP-50", "name": "Slim Sidebar Rails & Icon Anchors", "cat": "navigation", "prefix": "RAL", "desc": "Vertical navigation rails, active indicator pips, tool glyphs, and compact docks.", "catLabel": "Navigation & Steps"},

  {"id": "sparkline-charts", "idx": "GRP-51", "name": "Sparkline Trend Lines & Hairline Curves", "cat": "data", "prefix": "SPK", "desc": "Micro trend lines, hairline cubic splines, glowing terminal endpoints, and fill area fades.", "catLabel": "Data Vis & Charts"},
  {"id": "mini-bar-charts", "idx": "GRP-52", "name": "Mini Column Charts & Distribution Bars", "cat": "data", "prefix": "MBC", "desc": "Discrete distribution columns, staggered entrance heights, baseline rails, and hover bars.", "catLabel": "Data Vis & Charts"},
  {"id": "area-graph-plots", "idx": "GRP-53", "name": "Area Graph Silhouettes & Gradient Meshes", "cat": "data", "prefix": "ARA", "desc": "Filled area graph curves, dual-layer comparative plots, and backdrop grid lines.", "catLabel": "Data Vis & Charts"},
  {"id": "donut-charts", "idx": "GRP-54", "name": "Donut Charts & Proportional Rings", "cat": "data", "prefix": "DNT", "desc": "Segmented proportional rings, concentric metric donuts, and center total readouts.", "catLabel": "Data Vis & Charts"},
  {"id": "kpi-metric-cards", "idx": "GRP-55", "name": "KPI Metric Cards & Stat Counters", "cat": "data", "prefix": "KPI", "desc": "Brutalist metric stat cards, large bold digits, trend delta pills, and sparkline feet.", "catLabel": "Data Vis & Charts"},
  {"id": "heatmap-grids", "idx": "GRP-56", "name": "Heatmap Density Grids & Activity Matrices", "cat": "data", "prefix": "HTM", "desc": "Activity matrices, GitHub-style contribution squares, and pulsating density levels.", "catLabel": "Data Vis & Charts"},
  {"id": "scatter-matrices", "idx": "GRP-57", "name": "Scatter Plots & Dot Matrix Coordinates", "cat": "data", "prefix": "SCT", "desc": "Coordinate grids, scattered data points, cluster distributions, and axis crosshairs.", "catLabel": "Data Vis & Charts"},
  {"id": "candlestick-bars", "idx": "GRP-58", "name": "Financial Candlestick Bars & High-Low Spikes", "cat": "data", "prefix": "CSK", "desc": "Financial trading candlesticks, upper/lower wick hairlines, and hollow/filled bodies.", "catLabel": "Data Vis & Charts"},
  {"id": "data-tables", "idx": "GRP-59", "name": "Minimal Data Table Rows & Grid Cells", "cat": "data", "prefix": "TBL", "desc": "Ultra-clean tabular rows, monospace columns, alignment guides, and scanline hovers.", "catLabel": "Data Vis & Charts"},
  {"id": "diff-viewers", "idx": "GRP-60", "name": "Code Diff Comparisons & Inline Patches", "cat": "data", "prefix": "DIF", "desc": "Inline code diff views, +/- gutter indicators, modified line highlights, and chunk markers.", "catLabel": "Data Vis & Charts"},

  {"id": "text-inputs", "idx": "GRP-61", "name": "Monospaced Text Inputs & Ghost Fields", "cat": "forms", "prefix": "TXT", "desc": "Precision text input fields, blinking block cursors, active border brackets, and prefixes.", "catLabel": "Form Controls"},
  {"id": "search-bars", "idx": "GRP-62", "name": "Quick Search Bars & Command Palettes", "cat": "forms", "prefix": "SRC", "desc": "Search input fields, magnifying glass icons, keyboard shortcut tags (/ and ⌘K), and pills.", "catLabel": "Form Controls"},
  {"id": "password-masks", "idx": "GRP-63", "name": "Password Mask Fields & Cipher Discs", "cat": "forms", "prefix": "PWD", "desc": "Masked password fields, cipher dot rows, reveal eye toggles, and security strength bars.", "catLabel": "Form Controls"},
  {"id": "pin-code-boxes", "idx": "GRP-64", "name": "OTP PIN Code Inputs & Segmented Digits", "cat": "forms", "prefix": "PIN", "desc": "Segmented verification digit cells, active focus borders, and monospaced number targets.", "catLabel": "Form Controls"},
  {"id": "color-swatches", "idx": "GRP-65", "name": "Monochrome Swatch Pickers & Tone Scales", "cat": "forms", "prefix": "CLR", "desc": "Greyscale palette ramp pickers, percentage tone chips, and active selector rings.", "catLabel": "Form Controls"},
  {"id": "date-pickers", "idx": "GRP-66", "name": "Minimal Date Pickers & Month Matrices", "cat": "forms", "prefix": "DAT", "desc": "Compact calendar matrices, day header rows, active date selection dots, and range highlights.", "catLabel": "Form Controls"},
  {"id": "time-selectors", "idx": "GRP-67", "name": "Time Selector Dials & Digital 24H Digits", "cat": "forms", "prefix": "TIM", "desc": "Digital 24H time displays, blinking colon separators, AM/PM toggles, and dial wheels.", "catLabel": "Form Controls"},
  {"id": "file-dropzones", "idx": "GRP-68", "name": "File Upload Dropzones & Boundary Frames", "cat": "forms", "prefix": "DRP", "desc": "Dashed drag-and-drop targets, upload arrow vectors, format tags, and progress states.", "catLabel": "Form Controls"},
  {"id": "tag-inputs", "idx": "GRP-69", "name": "Tag Cloud Inputs & Token Pills", "cat": "forms", "prefix": "TAG", "desc": "Multi-token input clouds, removable tag pills with cross icons, and inline text prompts.", "catLabel": "Form Controls"},
  {"id": "stepper-inputs", "idx": "GRP-70", "name": "Numeric Counter Steppers & Plus/Minus Increments", "cat": "forms", "prefix": "STP", "desc": "Tactile counter steppers, - and + micro triggers, monospaced numeric readouts, and limits.", "catLabel": "Form Controls"},

  {"id": "hud-panels", "idx": "GRP-71", "name": "Cyberpunk HUD Panels & Technical Bezels", "cat": "surfaces", "prefix": "HPN", "desc": "Corner-bracketed HUD enclosures, tech metadata headers, status corners, and chamfers.", "catLabel": "HUD & Surfaces"},
  {"id": "card-containers", "idx": "GRP-72", "name": "Minimalist Surface Cards & Framed Modules", "cat": "surfaces", "prefix": "CRD", "desc": "Brutalist surface cards, hairline divider rules, subtle inset panels, and meta strips.", "catLabel": "HUD & Surfaces"},
  {"id": "tooltip-balloons", "idx": "GRP-73", "name": "Precision Tooltip Balloons & Target Callouts", "cat": "surfaces", "prefix": "TIP", "desc": "Floating pointer flags, anchor chevrons, monospaced microcopy, and dark bubble frames.", "catLabel": "HUD & Surfaces"},
  {"id": "popover-cards", "idx": "GRP-74", "name": "Popover Dialogs & Anchored Modals", "cat": "surfaces", "prefix": "POP", "desc": "Anchored popover boxes, header close crosses, action buttons, and elevation backdrops.", "catLabel": "HUD & Surfaces"},
  {"id": "user-avatars", "idx": "GRP-75", "name": "User Avatar Rings & Presence Badges", "cat": "surfaces", "prefix": "AVT", "desc": "Monogram avatar discs, presence beacon dots (online/busy/away), and concentric rings.", "catLabel": "HUD & Surfaces"},
  {"id": "profile-cards", "idx": "GRP-76", "name": "Identity Profile Badges & ID Badges", "cat": "surfaces", "prefix": "PRF", "desc": "Compact identity badges, avatar circles, handle tags, role badges, and status lines.", "catLabel": "HUD & Surfaces"},
  {"id": "pricing-cards", "idx": "GRP-77", "name": "Tier Pricing Cards & Spec Tables", "cat": "surfaces", "prefix": "PRC", "desc": "Tier comparison cards, large currency numerals, billing frequency tags, and CTA buttons.", "catLabel": "HUD & Surfaces"},
  {"id": "feature-lists", "idx": "GRP-78", "name": "Feature Comparison Checks & Bullet Grids", "cat": "surfaces", "prefix": "FTR", "desc": "Vertical feature checklists, crisp SVG tick icons, muted negative crosses, and text stems.", "catLabel": "HUD & Surfaces"},
  {"id": "terminal-windows", "idx": "GRP-79", "name": "Terminal Prompt Windows & Shell Headers", "cat": "surfaces", "prefix": "TRM", "desc": "Unix terminal headers, traffic light window dots, path prompts, and blinking block cursor.", "catLabel": "HUD & Surfaces"},
  {"id": "code-boxes", "idx": "GRP-80", "name": "Code Snippet Boxes & Syntax Badges", "cat": "surfaces", "prefix": "COD", "desc": "Code container blocks, language badges (CSS/JS), line numbers, and copy action buttons.", "catLabel": "HUD & Surfaces"},

  {"id": "keybinding-kbd", "idx": "GRP-81", "name": "Keyboard Shortcut Chips & Key Caps", "cat": "media", "prefix": "KBD", "desc": "Raised tactile keyboard key caps, modifier glyphs (⌘, ⌥, ⇧, ⌃), and shortcut sequences.", "catLabel": "Media & Utilities"},
  {"id": "rating-stars", "idx": "GRP-82", "name": "Precision Star Ratings & Review Ranks", "cat": "media", "prefix": "RAT", "desc": "5-star precision rating tracks, fractional star fills, numeric scores, and review pips.", "catLabel": "Media & Utilities"},
  {"id": "media-scrubbers", "idx": "GRP-83", "name": "Media Player Scrubber Rails & Playheads", "cat": "media", "prefix": "SCR", "desc": "Video/audio player progress rails, elapsed/remaining timecodes, buffer bars, and thumbs.", "catLabel": "Media & Utilities"},
  {"id": "barcode-qr", "idx": "GRP-84", "name": "QR Code Matrix Frames & Technical Barcodes", "cat": "media", "prefix": "QRC", "desc": "Wireframe QR code matrix frames, corner finder targets, vertical barcodes, and laser scan.", "catLabel": "Media & Utilities"}
];

GROUPS.forEach(g => {
  g.count = 210;
  g.families = SUB_FAMILIES;
});

/* ----------------------------------------------------------------------------
   VARIATION & ARCHITECTURE HELPERS
   -------------------------------------------------------------------------- */
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
    haloStyle: f === 5 ? 'filter: drop-shadow(0 0 8px rgba(255,255,255,0.35));' : '',
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
    animClass: a === 1 ? 'ha-spin' : (a === 5 ? 'ha-pulse' : (a === 6 ? 'ha-march' : (a === 8 ? 'ha-bounce' : (a === 9 ? 'ha-glitch' : (a === 12 ? 'ha-shimmer' : (a === 13 ? 'ha-blink' : ''))))))
  };
}

function wrapContainer(fp, ap, innerHtml, width, cls) {
  let frame = innerHtml;
  if (fp.isBezel) {
    frame = `<div class="hud-frame" style="width:100%;max-width:${width}px;">
      <span class="hud-c tl"></span><span class="hud-c tr"></span><span class="hud-c bl"></span><span class="hud-c br"></span>
      ${innerHtml}
    </div>`;
  }
  const badgeHtml = ap.isReadout ? `<div class="hud-tag" style="margin-top:6px;display:flex;justify-content:space-between;width:100%;"><span>CH-${String(fp.strokeW).slice(0,3)}</span><span>VAL:LIVE</span></div>` : '';
  const orbitPip = (fp.isOrbit || ap.isFastOrbit) ? `<div style="position:absolute;inset:2px;pointer-events:none;" class="ha-spin"><div style="width:4px;height:4px;border-radius:50%;background:var(--ink);box-shadow:0 0 4px var(--ink);"></div></div>` : '';
  const haloAttr = fp.haloStyle ? `style="${fp.haloStyle}"` : '';

  return `<div class="ha-comp ${cls} ${ap.animClass} ${ap.isInverted ? 'ha-inverted' : ''}" style="--p:var(--p,68);width:100%;max-width:${width}px;position:relative;${ap.isInverted ? 'background:var(--ink);color:var(--sc-bg);border-radius:8px;padding:8px;' : ''}" ${haloAttr}>
    ${orbitPip}
    ${frame}
    ${badgeHtml}
  </div>`;
}


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

const COMP_BUILDERS = {
'semi-circle-indicator': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const rot = -90 + (p * 1.8);
    const sw = fp.strokeW;
    const ticks = fp.isCalibrated ? Array.from({length: 11}, (_, i) => {
      const a = -90 + (i * 18);
      return `<line x1="50" y1="14" x2="50" y2="18" stroke="var(--ink3)" stroke-width="1" transform="rotate(${a} 50 52)"/>`;
    }).join('') : '';
    const inner = `<svg viewBox="0 0 100 64" width="130" height="84" style="max-width:100%;display:block;">
      ${ticks}
      <path d="M 12 52 A 38 38 0 0 1 88 52" stroke="var(--track)" stroke-width="${sw}" fill="none"/>
      <path class="arc-fill ${ap.animClass === 'ha-march' ? 'ha-march' : ''}" d="M 12 52 A 38 38 0 0 1 88 52" stroke="var(--ink)" stroke-width="${sw + 0.8}" fill="none"
            pathLength="100" stroke-dasharray="${fp.isSegmented ? '6 4' : '100'}" stroke-dashoffset="${fp.isSegmented ? '0' : 100 - p}" stroke-linecap="${ap.isRounded ? 'round' : 'butt'}"/>
      <g class="arc-needle" transform="translate(50,52) rotate(${rot})">
        <line x1="0" y1="0" x2="0" y2="-40" stroke="var(--ink)" stroke-width="${ap.isBold ? 2.4 : 1.4}"/>
        <circle cx="0" cy="-38" r="2.5" fill="var(--ink)"/>
      </g>
      ${fp.isHub ? `<circle cx="50" cy="52" r="5" fill="var(--panel2)" stroke="var(--ink)" stroke-width="1.5"/><circle cx="50" cy="52" r="2" fill="var(--ink)"/>` : `<circle cx="50" cy="52" r="3" fill="var(--ink)"/>`}
      <text x="50" y="44" text-anchor="middle" font-size="10" font-weight="${ap.isBold ? '700' : '500'}" fill="var(--ink)">${Math.round(p)}%</text>
    </svg>`;
    return {
      html: wrapContainer(fp, ap, inner, 180, cls),
      css: `.${cls} .arc-fill { transition: stroke-dashoffset .6s cubic-bezier(.16,1,.3,1); }
.${cls} .arc-needle { transition: transform .6s cubic-bezier(.16,1,.3,1); }`
    };
  },

  'circular-gauges': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const r = fp.isDual ? 32 : 36;
    const circ = +(2 * Math.PI * r).toFixed(2);
    const off = +(circ * (1 - p / 100)).toFixed(2);
    const rot = (p * 3.6) - 90;
    const sw = fp.strokeW;
    const redline = fp.isTach ? `<circle cx="50" cy="50" r="${r}" fill="none" stroke="var(--ink)" stroke-width="${sw + 1.2}" stroke-dasharray="24 ${circ - 24}" transform="rotate(180 50 50)"/>` : '';
    const dualRing = fp.isDual ? `<circle cx="50" cy="50" r="${r - 7}" fill="none" stroke="var(--line2)" stroke-width="1" stroke-dasharray="2 3"/>` : '';
    const ticks = fp.isCalibrated ? Array.from({length: 12}, (_, i) => {
      const a = (i * 30) - 90;
      return `<line x1="50" y1="9" x2="50" y2="${i % 3 === 0 ? 15 : 12}" stroke="var(--ink3)" stroke-width="${i % 3 === 0 ? 1.4 : 0.8}" transform="rotate(${a} 50 50)"/>`;
    }).join('') : '';

    const inner = `<svg viewBox="0 0 100 100" width="110" height="110" style="display:block;max-width:100%;">
      ${ticks}
      <circle cx="50" cy="50" r="${r}" fill="none" stroke="var(--track)" stroke-width="${sw}"/>
      ${dualRing}
      ${redline}
      <circle class="ring-arc ${ap.animClass === 'ha-march' ? 'ha-march' : ''}" cx="50" cy="50" r="${r}" fill="none" stroke="var(--ink)" stroke-width="${sw + 0.6}"
              stroke-dasharray="${fp.isSegmented ? '8 4' : circ}" stroke-dashoffset="${fp.isSegmented ? 0 : off}" stroke-linecap="${ap.isRounded ? 'round' : 'butt'}" transform="rotate(-90 50 50)"/>
      <g class="gauge-needle" transform="translate(50,50) rotate(${rot})">
        <line x1="0" y1="0" x2="${r - 4}" y2="0" stroke="var(--ink)" stroke-width="${ap.isBold ? 2.4 : 1.4}"/>
      </g>
      ${fp.isHub ? `<circle cx="50" cy="50" r="6" fill="var(--panel2)" stroke="var(--ink)" stroke-width="1.5"/><circle cx="50" cy="50" r="2.5" fill="var(--ink)"/>` : `<circle cx="50" cy="50" r="3" fill="var(--ink)"/>`}
      <text x="50" y="54" text-anchor="middle" font-size="10" font-weight="${ap.isBold ? '700' : '500'}" fill="var(--ink)">${Math.round(p)}%</text>
    </svg>`;

    return {
      html: wrapContainer(fp, ap, inner, 180, cls),
      css: `.${cls} .ring-arc { transition: stroke-dashoffset .8s cubic-bezier(.16,1,.3,1); }
.${cls} .gauge-needle { transition: transform .8s cubic-bezier(.16,1,.3,1); }`
    };
  },

  'linear-progress': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const h = fp.isDual ? 12 : (fp.strokeW * 3 + 4);
    const segBlocks = fp.isSegmented ? `display:flex;gap:3px;overflow:hidden;` : '';
    const inner = `<div style="width:100%;padding:4px;">
      <div style="display:flex;justify-content:space-between;margin-bottom:6px;font-size:9.5px;color:var(--ink3);font-family:ui-monospace,monospace;">
        <span>SYS_RUN // CH-1</span><span style="color:var(--ink);font-weight:bold;">${Math.round(p)}%</span>
      </div>
      <div style="width:100%;height:${h}px;border-radius:${ap.isRounded ? '999px' : fp.radius};background:var(--track);position:relative;overflow:hidden;${fp.insetStyle}${fp.isDual ? 'border:1px solid var(--line2);padding:2px;' : ''}">
        ${fp.isSegmented ? `
          <div style="display:flex;gap:3px;height:100%;">
            ${Array.from({length:10}, (_, i) => `
              <div style="flex:1;height:100%;border-radius:1px;background:${i < Math.round(p/10) ? 'var(--ink)' : 'transparent'};"></div>
            `).join('')}
          </div>
        ` : `
          <div class="bar-fill" style="width:${p}%;height:100%;background:var(--ink);border-radius:${ap.isRounded ? '999px' : fp.radius};position:relative;">
            ${ap.isFastOrbit ? `<div class="ha-shimmer" style="position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent);"></div>` : ''}
          </div>
        `}
      </div>
      ${fp.isCalibrated ? `<div style="display:flex;justify-content:space-between;margin-top:4px;font-size:7.5px;color:var(--ink4);font-family:ui-monospace,monospace;">
        <span>00</span><span>25</span><span>50</span><span>75</span><span>100</span>
      </div>` : ''}
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 220, cls),
      css: `.${cls} .bar-fill { transition: width .5s cubic-bezier(.16,1,.3,1); }`
    };
  },

  'step-progress': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const curStep = p < 25 ? 1 : (p < 50 ? 2 : (p < 75 ? 3 : 4));
    const inner = `<div style="display:flex;align-items:center;justify-content:space-between;width:100%;padding:8px 6px;">
      ${[1,2,3,4].map(n => `
        <div style="display:flex;flex-direction:column;align-items:center;gap:4px;z-index:2;position:relative;">
          <div style="width:22px;height:22px;border-radius:${ap.isRounded ? '50%' : fp.radius};background:${n <= curStep ? 'var(--ink)' : 'var(--panel2)'};border:1.5px solid ${n <= curStep ? 'var(--ink)' : 'var(--line2)'};color:${n <= curStep ? 'var(--sc-bg)' : 'var(--ink3)'};display:grid;place-items:center;font-size:9.5px;font-weight:bold;${fp.insetStyle}">
            ${n < curStep ? '✓' : n}
          </div>
          <span style="font-size:8px;font-family:ui-monospace,monospace;color:${n === curStep ? 'var(--ink)' : 'var(--ink4)'};">ST-0${n}</span>
        </div>
        ${n < 4 ? `<div style="flex:1;height:${fp.isDual ? 4 : 2}px;background:${n < curStep ? 'var(--ink)' : 'var(--track)'};margin:0 4px;margin-bottom:14px;border-radius:1px;"></div>` : ''}
      `).join('')}
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 240, cls),
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'segmented-meters': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const total = fp.isCalibrated ? 16 : 10;
    const active = Math.round((p / 100) * total);
    const inner = `<div style="display:flex;flex-direction:column;gap:6px;width:100%;padding:6px;">
      <div style="display:flex;gap:3px;align-items:flex-end;height:42px;justify-content:center;">
        ${Array.from({length:total}, (_, i) => {
          const h = 14 + i * (fp.isCalibrated ? 1.8 : 2.8);
          const isAct = i < active;
          const isRed = fp.isTach && i >= total - 3;
          return `<div style="flex:1;max-width:10px;height:${h}px;border-radius:${ap.isRounded ? '2px' : '1px'};background:${isAct ? (isRed ? 'var(--ink)' : 'var(--ink)') : 'var(--track)'};opacity:${isAct ? '1' : '0.2'};border:${fp.isDual ? '1px solid var(--line2)' : 'none'};"></div>`;
        }).join('')}
      </div>
      <div style="display:flex;justify-content:space-between;font-size:8.5px;font-family:ui-monospace,monospace;color:var(--ink3);">
        <span>LEVEL: ${Math.round(p)}%</span><span>CH-01</span>
      </div>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 200, cls),
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'battery-indicators': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const cells = 5;
    const activeCells = Math.ceil((p / 100) * cells);
    const inner = `<div style="display:flex;align-items:center;gap:3px;justify-content:center;padding:8px;">
      <div style="width:72px;height:34px;border:2px solid var(--ink);border-radius:${ap.isRounded ? '8px' : fp.radius};padding:3px;position:relative;box-sizing:border-box;display:flex;gap:2px;background:var(--panel);${fp.insetStyle}">
        ${fp.isSegmented ? Array.from({length:cells}, (_, i) => `
          <div style="flex:1;height:100%;background:${i < activeCells ? 'var(--ink)' : 'transparent'};border-radius:1px;"></div>
        `).join('') : `
          <div class="bat-fill" style="width:${p}%;height:100%;background:var(--ink);border-radius:${ap.isRounded ? '4px' : '2px'};"></div>
        `}
        <span style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);font-size:10px;font-weight:700;color:var(--sc-bg);mix-blend-mode:difference;font-family:ui-monospace,monospace;">${Math.round(p)}%</span>
      </div>
      <div style="width:4px;height:14px;background:var(--ink);border-radius:0 2px 2px 0;"></div>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 180, cls),
      css: `.${cls} .bat-fill { transition: width .4s ease; }`
    };
  },

  'signal-meters': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const bars = fp.isCalibrated ? 6 : 5;
    const active = Math.round((p / 100) * bars);
    const inner = `<div style="display:flex;flex-direction:column;gap:6px;align-items:center;padding:8px;">
      <div style="display:flex;align-items:flex-end;gap:5px;height:40px;">
        ${Array.from({length:bars}, (_, i) => {
          const h = 10 + i * 6;
          const on = i < active;
          return `<div style="width:7px;height:${h}px;border-radius:${ap.isRounded ? '3px 3px 0 0' : '1px'};background:${on ? 'var(--ink)' : 'var(--track)'};border:${fp.isDual ? '1px solid var(--line2)' : 'none'};"></div>`;
        }).join('')}
      </div>
      <div style="font-size:9px;font-family:ui-monospace,monospace;color:var(--ink3);">SIG // ${active}/${bars} BARS</div>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 180, cls),
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'speedometer-gauges': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const rot = -120 + (p * 2.4);
    const ticks = Array.from({length: 9}, (_, i) => {
      const a = -120 + (i * 30);
      const isRed = fp.isTach && i >= 6;
      return `<line x1="50" y1="12" x2="50" y2="${i % 2 === 0 ? 18 : 15}" stroke="${isRed ? 'var(--ink)' : 'var(--ink3)'}" stroke-width="${isRed ? 2 : 1.2}" transform="rotate(${a} 50 50)"/>`;
    }).join('');

    const inner = `<svg viewBox="0 0 100 84" width="120" height="96" style="display:block;max-width:100%;">
      ${ticks}
      <path d="M 20 70 A 40 40 0 1 1 80 70" fill="none" stroke="var(--track)" stroke-width="${fp.strokeW}"/>
      <path class="spd-arc" d="M 20 70 A 40 40 0 1 1 80 70" fill="none" stroke="var(--ink)" stroke-width="${fp.strokeW + 0.8}"
            pathLength="100" stroke-dasharray="${fp.isSegmented ? '8 4' : '100'}" stroke-dashoffset="${fp.isSegmented ? '0' : 100 - p}" stroke-linecap="${ap.isRounded ? 'round' : 'butt'}"/>
      <g class="spd-needle" transform="translate(50,50) rotate(${rot})">
        <line x1="0" y1="0" x2="30" y2="0" stroke="var(--ink)" stroke-width="${ap.isBold ? 2.4 : 1.6}"/>
      </g>
      ${fp.isHub ? `<circle cx="50" cy="50" r="5" fill="var(--panel2)" stroke="var(--ink)" stroke-width="1.5"/><circle cx="50" cy="50" r="2" fill="var(--ink)"/>` : `<circle cx="50" cy="50" r="3.5" fill="var(--ink)"/>`}
      <text x="50" y="76" text-anchor="middle" font-size="9" font-weight="700" fill="var(--ink)" font-family="ui-monospace,monospace">${Math.round(p * 1.8)} KM/H</text>
    </svg>`;

    return {
      html: wrapContainer(fp, ap, inner, 190, cls),
      css: `.${cls} .spd-arc { transition: stroke-dashoffset .5s ease-out; }
.${cls} .spd-needle { transition: transform .5s cubic-bezier(.16,1,.3,1); }`
    };
  },

  'compass-rings': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const rot = p * 3.6;
    const ticks = Array.from({length: 12}, (_, i) => {
      const a = i * 30;
      return `<line x1="50" y1="6" x2="50" y2="${i % 3 === 0 ? 12 : 9}" stroke="var(--ink3)" stroke-width="${i % 3 === 0 ? 1.4 : 0.8}" transform="rotate(${a} 50 50)"/>`;
    }).join('');

    const inner = `<svg viewBox="0 0 100 100" width="110" height="110" style="display:block;max-width:100%;">
      <circle cx="50" cy="50" r="44" fill="none" stroke="var(--line2)" stroke-width="${fp.strokeW}"/>
      ${fp.isDual ? `<circle cx="50" cy="50" r="36" fill="none" stroke="var(--track)" stroke-width="1" stroke-dasharray="2 3"/>` : ''}
      ${ticks}
      <g class="comp-gyro" transform="translate(50,50) rotate(${rot})">
        <polygon points="0,-36 7,-10 0,0 -7,-10" fill="var(--ink)"/>
        <polygon points="0,36 7,10 0,0 -7,10" fill="var(--track)" stroke="var(--line2)" stroke-width="1"/>
        <circle cx="0" cy="0" r="3" fill="var(--sc-bg)" stroke="var(--ink)" stroke-width="1.5"/>
      </g>
      <text x="50" y="15" text-anchor="middle" font-size="8" font-weight="bold" fill="var(--ink)">N</text>
      <text x="86" y="53" text-anchor="middle" font-size="7" fill="var(--ink3)">E</text>
      <text x="50" y="90" text-anchor="middle" font-size="7" fill="var(--ink3)">S</text>
      <text x="14" y="53" text-anchor="middle" font-size="7" fill="var(--ink3)">W</text>
    </svg>`;

    return {
      html: wrapContainer(fp, ap, inner, 180, cls),
      css: `.${cls} .comp-gyro { transition: transform .6s cubic-bezier(.16,1,.3,1); }`
    };
  },

  'altimeter-scales': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const y = 80 - (p * 0.7);
    const inner = `<svg viewBox="0 0 100 90" width="90" height="80" style="display:block;margin:0 auto;">
      <line x1="42" y1="10" x2="42" y2="80" stroke="var(--line2)" stroke-width="${fp.strokeW}"/>
      ${[10, 20, 30, 40, 50, 60, 70, 80].map(pos => `<line x1="34" y1="${pos}" x2="42" y2="${pos}" stroke="var(--ink3)" stroke-width="1"/>`).join('')}
      <g class="alt-carat" transform="translate(0,${y - 45})">
        <polygon points="46,45 58,39 58,51" fill="var(--ink)"/>
        <text x="64" y="48" font-size="8.5" font-family="ui-monospace, monospace" font-weight="700" fill="var(--ink)">${Math.round(p * 120)}</text>
      </g>
    </svg>`;

    return {
      html: wrapContainer(fp, ap, inner, 180, cls),
      css: `.${cls} .alt-carat { transition: transform .5s cubic-bezier(.16,1,.3,1); }`
    };
  },
'rotary-knobs': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const rot = -135 + (p * 2.7);
    const ticks = Array.from({length: 11}, (_, i) => {
      const a = -135 + (i * 27);
      return `<line x1="50" y1="6" x2="50" y2="11" stroke="var(--ink3)" stroke-width="1.2" transform="rotate(${a} 50 50)"/>`;
    }).join('');

    const inner = `<div style="display:flex;flex-direction:column;align-items:center;padding:8px;">
      <div style="position:relative;width:96px;height:96px;display:grid;place-items:center;">
        <svg viewBox="0 0 100 100" width="96" height="96" style="position:absolute;inset:0;">
          ${fp.isCalibrated ? ticks : ''}
          <circle cx="50" cy="50" r="44" fill="none" stroke="var(--line)" stroke-width="${fp.strokeW}" stroke-dasharray="${fp.dashArray}"/>
        </svg>
        <div class="knob-dial" style="width:68px;height:68px;border-radius:50%;background:var(--panel2);border:2px solid var(--ink);position:relative;transform:rotate(${rot}deg);box-shadow:0 4px 12px rgba(0,0,0,.3);${fp.insetStyle}">
          <div style="position:absolute;top:6px;left:50%;transform:translateX(-50%);width:${ap.isBold ? '4px' : '2.5px'};height:14px;background:var(--ink);border-radius:2px;"></div>
          ${fp.isHub ? `<div style="position:absolute;inset:18px;border-radius:50%;border:1.5px solid var(--line2);background:var(--panel);"></div>` : ''}
        </div>
      </div>
      <div style="font-size:10px;font-family:ui-monospace,monospace;color:var(--ink);margin-top:6px;font-weight:bold;">VAL: ${Math.round(p)}%</div>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 180, cls),
      css: `.${cls} .knob-dial { transition: transform .4s cubic-bezier(.16,1,.3,1); }`
    };
  },

  'toggle-switches': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const on = p >= 50;
    const inner = `<div style="display:flex;align-items:center;gap:12px;padding:8px 14px;justify-content:center;">
      <div class="sw-track" style="width:64px;height:32px;border-radius:${ap.isRounded ? '999px' : fp.radius};background:${on ? 'var(--ink)' : 'var(--panel2)'};border:2px solid ${fp.isDual ? 'var(--line2)' : 'var(--ink)'};position:relative;padding:3px;box-sizing:border-box;cursor:pointer;${fp.insetStyle}">
        <div class="sw-thumb" style="width:22px;height:22px;border-radius:${ap.isRounded ? '50%' : '3px'};background:${on ? 'var(--sc-bg)' : 'var(--ink)'};transform:translateX(${on ? '32px' : '0'});transition:transform .3s cubic-bezier(.16,1,.3,1);border:${fp.isHub ? '2px solid var(--line)' : 'none'};"></div>
      </div>
      <span style="font-size:11px;font-weight:bold;font-family:ui-monospace,monospace;color:var(--ink);min-width:34px;">${on ? 'ON' : 'OFF'}</span>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 200, cls),
      css: `.${cls} { user-select: none; }`
    };
  },

  'range-sliders': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const inner = `<div style="width:100%;padding:10px 6px;">
      <div style="position:relative;width:100%;height:${fp.isDual ? 10 : 6}px;background:var(--track);border-radius:${ap.isRounded ? '999px' : fp.radius};${fp.insetStyle}">
        <div class="sld-fill" style="width:${p}%;height:100%;background:var(--ink);border-radius:${ap.isRounded ? '999px' : fp.radius};"></div>
        <div class="sld-thumb" style="position:absolute;left:${p}%;top:50%;transform:translate(-50%,-50%);width:${ap.isBold ? 22 : 18}px;height:${ap.isBold ? 22 : 18}px;border-radius:${ap.isRounded ? '50%' : '3px'};background:var(--ink);border:3px solid var(--panel);box-shadow:0 2px 8px rgba(0,0,0,.5);"></div>
      </div>
      <div style="display:flex;justify-content:space-between;margin-top:10px;font-size:9px;font-family:ui-monospace,monospace;color:var(--ink3);">
        <span>MIN: 0</span><span style="color:var(--ink);font-weight:bold;">VAL: ${Math.round(p)}</span><span>MAX: 100</span>
      </div>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 220, cls),
      css: `.${cls} .sld-fill, .${cls} .sld-thumb { transition: all .2s ease; }`
    };
  },

  'push-buttons': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const inner = `<div style="padding:10px;display:grid;place-items:center;">
      <button class="ha-btn-tactile ${ap.animClass === 'ha-march' ? 'ha-march' : ''}" style="padding:11px 24px;border-radius:${ap.isRounded ? '999px' : fp.radius};background:${ap.isInverted ? 'var(--ink)' : 'var(--panel2)'};border:${fp.strokeW}px solid ${fp.isDashed ? 'dashed' : 'solid'} ${ap.isInverted ? 'var(--ink)' : 'var(--line2)'};color:${ap.isInverted ? 'var(--sc-bg)' : 'var(--ink)'};font-family:ui-monospace,monospace;font-size:11px;font-weight:bold;letter-spacing:.1em;display:inline-flex;align-items:center;gap:8px;box-shadow:0 4px 0 var(--line);cursor:pointer;position:relative;${fp.insetStyle}">
        ${fp.isHub ? `<span style="width:10px;height:10px;border-radius:50%;background:var(--ink);display:inline-block;border:2px solid var(--panel);"></span>` : `<span style="width:6px;height:6px;border-radius:50%;background:var(--ink);display:inline-block;" class="ha-pulse"></span>`}
        <span>TRIGGER // ${Math.round(p)}</span>
      </button>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 210, cls),
      css: `.${cls} button:active { transform: translateY(3px); box-shadow: 0 1px 0 var(--line); }`
    };
  },

  'segmented-controls': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const sel = p < 25 ? 0 : (p < 50 ? 1 : (p < 75 ? 2 : 3));
    const tabs = ['RAW', 'LOG', 'TRC', 'HEX'];
    const inner = `<div style="display:flex;background:var(--panel2);padding:3px;border-radius:${ap.isRounded ? '999px' : fp.radius};border:1px solid var(--line);width:100%;gap:2px;box-sizing:border-box;">
      ${tabs.map((t, i) => `
        <div style="flex:1;text-align:center;padding:6px 0;border-radius:${ap.isRounded ? '999px' : '4px'};font-size:9.5px;font-weight:bold;font-family:ui-monospace,monospace;background:${i === sel ? 'var(--ink)' : 'transparent'};color:${i === sel ? 'var(--sc-bg)' : 'var(--ink3)'};transition:.2s;">
          ${t}
        </div>
      `).join('')}
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 220, cls),
      css: `.${cls} { user-select: none; }`
    };
  },

  'radio-selectors': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const sel = p < 33 ? 0 : (p < 66 ? 1 : 2);
    const items = ['ALPHA_NODE', 'BETA_RELAY', 'GAMMA_CORE'];
    const inner = `<div style="display:flex;flex-direction:column;gap:8px;padding:6px;width:100%;">
      ${items.map((item, i) => `
        <div style="display:flex;align-items:center;gap:8px;cursor:pointer;">
          <div style="width:16px;height:16px;border-radius:50%;border:1.5px solid ${i === sel ? 'var(--ink)' : 'var(--line2)'};display:grid;place-items:center;${fp.insetStyle}">
            <div style="width:8px;height:8px;border-radius:50%;background:${i === sel ? 'var(--ink)' : 'transparent'};"></div>
          </div>
          <span style="font-size:10px;font-family:ui-monospace,monospace;color:${i === sel ? 'var(--ink)' : 'var(--ink3)'};font-weight:${i === sel ? 'bold' : 'normal'};">${item}</span>
        </div>
      `).join('')}
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 190, cls),
      css: `.${cls} { user-select: none; }`
    };
  },

  'checkbox-states': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const chk = p >= 40;
    const ind = p >= 20 && p < 40;
    const inner = `<div style="display:flex;align-items:center;gap:10px;padding:8px;justify-content:center;">
      <div style="width:20px;height:20px;border-radius:${ap.isRounded ? '50%' : fp.radius};border:1.8px solid var(--ink);background:${chk || ind ? 'var(--ink)' : 'transparent'};color:var(--sc-bg);display:grid;place-items:center;font-size:12px;font-weight:bold;${fp.insetStyle}">
        ${chk ? '✓' : (ind ? '—' : '')}
      </div>
      <div style="display:flex;flex-direction:column;">
        <span style="font-size:10.5px;font-weight:bold;font-family:ui-monospace,monospace;color:var(--ink);">SECURITY_LOCK</span>
        <span style="font-size:8px;color:var(--ink3);font-family:ui-monospace,monospace;">${chk ? 'ENABLED' : (ind ? 'PARTIAL' : 'DISABLED')}</span>
      </div>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 190, cls),
      css: `.${cls} { user-select: none; }`
    };
  },

  'icon-buttons': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const inner = `<div style="display:flex;gap:8px;justify-content:center;padding:8px;">
      ${['M12 2v20M2 12h20', 'M4 4l16 16M20 4L4 20', 'M12 2l8 8-8 8-8-8z'].map((d, i) => `
        <div class="ha-icon-btn" style="width:38px;height:38px;border-radius:${ap.isRounded ? '50%' : fp.radius};border:${fp.strokeW}px solid ${i === 0 ? 'var(--ink)' : 'var(--line2)'};background:${i === 0 ? 'var(--panel2)' : 'transparent'};display:grid;place-items:center;cursor:pointer;${fp.insetStyle}">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="${d}"/>
          </svg>
        </div>
      `).join('')}
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 190, cls),
      css: `.${cls} .ha-icon-btn:hover { border-color: var(--ink); color: var(--ink); transform: translateY(-1px); }`
    };
  },

  'split-buttons': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const inner = `<div style="display:inline-flex;border-radius:${ap.isRounded ? '999px' : fp.radius};border:1.5px solid var(--line2);overflow:hidden;background:var(--panel2);font-family:ui-monospace,monospace;font-size:10px;color:var(--ink);box-shadow:0 3px 0 var(--line);">
      <button style="padding:8px 14px;border-right:1px solid var(--line);font-weight:bold;cursor:pointer;">EXEC // CMD</button>
      <button style="padding:8px 10px;cursor:pointer;">▾</button>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 190, cls),
      css: `.${cls} button:hover { background: var(--line); }`
    };
  },

  'volume-faders': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const y = 60 - (p * 0.52);
    const inner = `<div style="display:flex;align-items:center;gap:12px;justify-content:center;height:84px;padding:4px;">
      <div style="position:relative;width:6px;height:70px;background:var(--track);border-radius:2px;${fp.insetStyle}">
        <div class="fad-thumb" style="position:absolute;top:${y}px;left:50%;transform:translate(-50%,-50%);width:28px;height:14px;border-radius:${ap.isRounded ? '4px' : '2px'};background:var(--ink);border:1px solid var(--line2);box-shadow:0 2px 6px rgba(0,0,0,.6);display:grid;place-items:center;">
          <div style="width:14px;height:2px;background:var(--sc-bg);"></div>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;font-size:8px;font-family:ui-monospace,monospace;color:var(--ink3);gap:6px;">
        <span>+10dB</span><span>0dB</span><span>-20dB</span><span>-INF</span>
      </div>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 180, cls),
      css: `.${cls} .fad-thumb { transition: top .2s ease; }`
    };
  },
'audio-equalizer': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const bars = fp.isCalibrated ? 16 : 10;
    const inner = `<div style="display:flex;flex-direction:column;gap:6px;width:100%;padding:4px;">
      <div style="display:flex;align-items:flex-end;gap:3px;height:68px;padding:8px 10px;background:var(--panel2);border:1px solid var(--line);border-radius:${ap.isRounded ? '8px' : fp.radius};${fp.insetStyle}">
        ${Array.from({length:bars}, (_, i) => {
          const mult = 0.3 + 0.7 * Math.sin((i / bars) * Math.PI);
          const h = Math.max(6, Math.round(mult * 50 * (p / 100)));
          return `<div class="eq-bar ${ap.animClass === 'ha-bounce' ? 'ha-bounce' : ''}" style="flex:1;height:${h}px;background:var(--ink);border-radius:1px;opacity:${0.5 + (i % 3) * 0.25};animation:haBounce 1.${(i % 5) + 1}s infinite ease-in-out;"></div>`;
        }).join('')}
      </div>
      <div style="display:flex;justify-content:space-between;font-size:8px;font-family:ui-monospace,monospace;color:var(--ink3);">
        <span>32Hz</span><span>1kHz</span><span>16kHz</span>
      </div>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 220, cls),
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'waveform-monitors': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const pts = Array.from({length: 12}, (_, i) => {
      const x = i * 16 + 8;
      const y = 25 + Math.sin((i + p/10) * 0.8) * (fp.isDual ? 16 : 12);
      return `${x},${y}`;
    }).join(' ');

    const inner = `<div style="background:var(--panel2);border:1px solid var(--line);border-radius:${ap.isRounded ? '8px' : fp.radius};padding:8px;width:100%;${fp.insetStyle}">
      <svg viewBox="0 0 180 50" width="100%" height="50" style="display:block;">
        <line x1="0" y1="25" x2="180" y2="25" stroke="var(--track)" stroke-width="1"/>
        <polyline points="${pts}" fill="none" stroke="var(--ink)" stroke-width="${fp.strokeW}" stroke-dasharray="${fp.dashArray}"/>
        <line x1="${(p / 100) * 180}" y1="0" x2="${(p / 100) * 180}" y2="50" stroke="var(--ink)" stroke-width="1.5" stroke-dasharray="2 2" class="ha-pulse"/>
      </svg>
      <div style="display:flex;justify-content:space-between;font-size:8px;font-family:ui-monospace,monospace;color:var(--ink3);margin-top:4px;">
        <span>SMPTE 00:01:24</span><span>TRK-01</span>
      </div>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 220, cls),
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'oscilloscope-traces': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const inner = `<div style="background:var(--panel2);border:1.5px solid var(--line2);border-radius:${ap.isRounded ? '8px' : fp.radius};padding:8px;position:relative;width:100%;${fp.insetStyle}">
      <svg viewBox="0 0 160 70" width="100%" height="70" style="display:block;">
        <defs>
          <pattern id="osc-g-${cls}" width="16" height="14" patternUnits="userSpaceOnUse">
            <path d="M 16 0 L 0 0 0 14" fill="none" stroke="var(--line)" stroke-width="0.8"/>
          </pattern>
        </defs>
        <rect width="160" height="70" fill="url(#osc-g-${cls})"/>
        <path class="${ap.animClass === 'ha-march' ? 'ha-march' : ''}" d="M 5 35 Q 40 ${10 + (p * 0.3)} 80 35 T 155 35" fill="none" stroke="var(--ink)" stroke-width="${fp.strokeW + 0.5}"/>
        <circle cx="80" cy="35" r="3" fill="var(--ink)" class="ha-pulse"/>
      </svg>
      <div style="font-size:8px;font-family:ui-monospace,monospace;color:var(--ink3);margin-top:3px;display:flex;justify-content:space-between;">
        <span>TIMEBASE: 2.5ms</span><span>${p} Hz</span>
      </div>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 220, cls),
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'vu-meters': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const rot = -45 + (p * 0.9);
    const inner = `<div style="background:var(--panel2);border:1px solid var(--line2);border-radius:${ap.isRounded ? '8px' : fp.radius};padding:10px 14px;text-align:center;width:100%;${fp.insetStyle}">
      <svg viewBox="0 0 100 60" width="120" height="72" style="display:block;margin:0 auto;">
        <path d="M 15 54 A 42 42 0 0 1 85 54" fill="none" stroke="var(--track)" stroke-width="${fp.strokeW}"/>
        <path d="M 68 22 A 42 42 0 0 1 85 54" fill="none" stroke="var(--ink)" stroke-width="${fp.strokeW + 1}"/>
        <g class="vu-needle" transform="translate(50,54) rotate(${rot})">
          <line x1="0" y1="0" x2="0" y2="-40" stroke="var(--ink)" stroke-width="${ap.isBold ? 2.2 : 1.5}"/>
          <circle cx="0" cy="0" r="3.5" fill="var(--ink)"/>
        </g>
      </svg>
      <div style="font-size:9.5px;font-weight:bold;color:var(--ink);font-family:ui-monospace,monospace;margin-top:2px;">
        ${(p * 0.25 - 20).toFixed(1)} dB VU
      </div>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 190, cls),
      css: `.${cls} .vu-needle { transition: transform .4s cubic-bezier(.16,1,.3,1); }`
    };
  },

  'bpm-metronomes': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const bpm = Math.round(60 + p * 1.4);
    const inner = `<div style="background:var(--panel2);border:1px solid var(--line);border-radius:${ap.isRounded ? '8px' : fp.radius};padding:8px 12px;text-align:center;width:100%;${fp.insetStyle}">
      <svg viewBox="0 0 80 84" width="76" height="80" style="display:block;margin:0 auto;">
        <polygon points="20,80 60,80 48,15 32,15" fill="var(--panel)" stroke="var(--line2)"/>
        <line x1="40" y1="76" x2="40" y2="24" stroke="var(--ink)" stroke-width="2"/>
        <circle cx="40" cy="${35 + Math.round((100 - p) * 0.3)}" r="5" fill="var(--ink)"/>
      </svg>
      <div style="font-size:10px;font-weight:bold;font-family:ui-monospace,monospace;color:var(--ink);margin-top:4px;">
        ${bpm} BPM
      </div>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 170, cls),
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'spectrum-analyzers': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const bands = 8;
    const inner = `<div style="padding:6px;width:100%;">
      <div style="display:flex;gap:4px;align-items:flex-end;height:52px;justify-content:center;">
        ${Array.from({length:bands}, (_, i) => {
          const h = 10 + Math.sin(i * 0.9) * 20 + (p * 0.22);
          return `<div style="flex:1;max-width:12px;height:${Math.max(6, Math.round(h))}px;background:var(--ink);border-radius:1px;animation:haBounce 1.${(i % 4) + 1}s infinite ease;"></div>`;
        }).join('')}
      </div>
      <div style="display:flex;justify-content:space-between;font-size:8px;font-family:ui-monospace,monospace;color:var(--ink3);margin-top:4px;">
        <span>LO</span><span>MID</span><span>HI</span>
      </div>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 200, cls),
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'radar-sweeps': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const inner = `<div style="position:relative;width:96px;height:96px;margin:0 auto;display:grid;place-items:center;">
      <svg viewBox="0 0 100 100" width="96" height="96" style="position:absolute;inset:0;">
        <circle cx="50" cy="50" r="44" fill="none" stroke="var(--line2)" stroke-width="${fp.strokeW}"/>
        <circle cx="50" cy="50" r="26" fill="none" stroke="var(--track)" stroke-width="1"/>
        <line x1="50" y1="6" x2="50" y2="94" stroke="var(--track)"/>
        <line x1="6" y1="50" x2="94" y2="50" stroke="var(--track)"/>
        <circle cx="68" cy="34" r="3" fill="var(--ink)" class="ha-pulse"/>
      </svg>
      <div class="ha-sweep" style="position:absolute;inset:6px;border-radius:50%;background:conic-gradient(from 0deg, transparent 270deg, var(--ink) 360deg);opacity:0.35;"></div>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 180, cls),
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'crosshair-reticles': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const inner = `<div style="position:relative;width:90px;height:90px;margin:0 auto;display:grid;place-items:center;">
      <svg viewBox="0 0 100 100" width="90" height="90" style="display:block;">
        <circle cx="50" cy="50" r="30" fill="none" stroke="var(--ink)" stroke-width="${fp.strokeW}" stroke-dasharray="${fp.dashArray}"/>
        <circle cx="50" cy="50" r="2.5" fill="var(--ink)"/>
        <line x1="50" y1="10" x2="50" y2="30" stroke="var(--ink)" stroke-width="1.6"/>
        <line x1="50" y1="70" x2="50" y2="90" stroke="var(--ink)" stroke-width="1.6"/>
        <line x1="10" y1="50" x2="30" y2="50" stroke="var(--ink)" stroke-width="1.6"/>
        <line x1="70" y1="50" x2="90" y2="50" stroke="var(--ink)" stroke-width="1.6"/>
      </svg>
      <span class="hud-tag" style="position:absolute;bottom:0;font-size:7.5px;">LOCK: ${(p * 10).toFixed(0)}m</span>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 180, cls),
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'telemetry-hud': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const pitch = (p - 50) * 0.4;
    const inner = `<svg viewBox="0 0 120 70" width="120" height="70" style="display:block;margin:0 auto;">
      <g transform="translate(0,${pitch})">
        <line x1="20" y1="35" x2="45" y2="35" stroke="var(--ink)" stroke-width="${fp.strokeW}"/>
        <line x1="75" y1="35" x2="100" y2="35" stroke="var(--ink)" stroke-width="${fp.strokeW}"/>
        <line x1="45" y1="35" x2="45" y2="40" stroke="var(--ink)" stroke-width="1.5"/>
        <line x1="75" y1="35" x2="75" y2="40" stroke="var(--ink)" stroke-width="1.5"/>
      </g>
      <circle cx="60" cy="35" r="4" fill="none" stroke="var(--ink)" stroke-width="1.4"/>
      <text x="60" y="60" text-anchor="middle" font-size="7.5" font-family="ui-monospace,monospace" fill="var(--ink3)">ALT ${Math.round(p * 100)}</text>
    </svg>`;

    return {
      html: wrapContainer(fp, ap, inner, 190, cls),
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'acoustics-visualizers': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const inner = `<div style="position:relative;width:80px;height:80px;margin:0 auto;display:grid;place-items:center;">
      <div style="position:absolute;inset:6px;border-radius:50%;border:1.5px solid var(--ink);animation:haPing 2s infinite;"></div>
      <div style="position:absolute;inset:18px;border-radius:50%;border:1px dashed var(--line2);"></div>
      <div style="width:14px;height:14px;border-radius:50%;background:var(--ink);" class="ha-pulse"></div>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 170, cls),
      css: `.${cls} { isolation: isolate; }`
    };
  },
'loading-spinners': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const inner = `<div style="position:relative;width:68px;height:68px;margin:0 auto;display:grid;place-items:center;">
      <svg class="ha-spin" viewBox="0 0 50 50" width="56" height="56">
        <circle cx="25" cy="25" r="20" fill="none" stroke="var(--track)" stroke-width="${fp.strokeW}"/>
        <circle cx="25" cy="25" r="20" fill="none" stroke="var(--ink)" stroke-width="${fp.strokeW + 0.8}" stroke-linecap="${ap.isRounded ? 'round' : 'butt'}" stroke-dasharray="${fp.isSegmented ? '10 10' : '90 40'}" stroke-dashoffset="20"/>
      </svg>
      ${fp.isDual ? `<svg class="ha-spin-rev" viewBox="0 0 50 50" width="34" height="34" style="position:absolute;">
        <circle cx="25" cy="25" r="14" fill="none" stroke="var(--ink)" stroke-width="1.2" stroke-dasharray="30 40"/>
      </svg>` : ''}
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 170, cls),
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'pulse-beacons': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const inner = `<div style="position:relative;width:64px;height:64px;margin:0 auto;display:grid;place-items:center;">
      <div style="position:absolute;inset:4px;border-radius:50%;border:1.6px solid var(--ink);animation:haPing 1.8s infinite;"></div>
      ${fp.isDual ? `<div style="position:absolute;inset:12px;border-radius:50%;border:1px dashed var(--line2);animation:haPing 1.8s 0.6s infinite;"></div>` : ''}
      <div style="width:16px;height:16px;border-radius:50%;background:var(--ink);" class="ha-pulse"></div>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 160, cls),
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'skeleton-shimmers': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const inner = `<div style="display:flex;flex-direction:column;gap:8px;padding:8px;width:100%;">
      <div style="display:flex;gap:8px;align-items:center;">
        <div style="width:32px;height:32px;border-radius:${ap.isRounded ? '50%' : fp.radius};background:var(--panel2);position:relative;overflow:hidden;">
          <div class="ha-shimmer" style="position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(255,255,255,.15),transparent);"></div>
        </div>
        <div style="flex:1;display:flex;flex-direction:column;gap:4px;">
          <div style="height:10px;width:80%;background:var(--panel2);border-radius:2px;"></div>
          <div style="height:8px;width:50%;background:var(--track);border-radius:2px;"></div>
        </div>
      </div>
      <div style="height:18px;width:100%;background:var(--panel2);border-radius:3px;position:relative;overflow:hidden;">
        <div class="ha-shimmer" style="position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(255,255,255,.12),transparent);"></div>
      </div>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 210, cls),
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'status-pills': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const states = ['OPERATIONAL', 'STANDBY', 'DEGRADED', 'SYNCING'];
    const st = states[Math.floor(p / 26) % states.length];
    const inner = `<div style="display:inline-flex;align-items:center;gap:8px;padding:6px 14px;border-radius:${ap.isRounded ? '999px' : fp.radius};border:${fp.strokeW}px solid ${fp.isDashed ? 'dashed' : 'solid'} var(--line2);background:var(--panel2);font-family:ui-monospace,monospace;font-size:10px;font-weight:bold;color:var(--ink);${fp.insetStyle}">
      <span style="width:8px;height:8px;border-radius:50%;background:var(--ink);" class="ha-pulse"></span>
      <span>${st} // 0x${Math.round(p)}</span>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 200, cls),
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'notification-dots': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const count = Math.max(1, Math.round(p * 0.12));
    const inner = `<div style="display:flex;align-items:center;gap:14px;justify-content:center;padding:8px;">
      <div style="position:relative;display:inline-block;">
        <div style="width:36px;height:36px;border-radius:${ap.isRounded ? '50%' : fp.radius};border:1.5px solid var(--line2);background:var(--panel2);display:grid;place-items:center;">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0"/>
          </svg>
        </div>
        <span style="position:absolute;top:-4px;right:-4px;padding:1px 5px;border-radius:999px;background:var(--ink);color:var(--sc-bg);font-size:9px;font-weight:bold;font-family:ui-monospace,monospace;" class="ha-pulse">${count}</span>
      </div>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 180, cls),
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'glitch-elements': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const inner = `<div style="text-align:center;padding:10px;">
      <div class="ha-glitch" style="font-family:ui-monospace,monospace;font-size:16px;font-weight:900;letter-spacing:.22em;color:var(--ink);text-transform:uppercase;">
        ERR//SIGNAL_${Math.round(p)}
      </div>
      <div style="font-size:8px;font-family:ui-monospace,monospace;color:var(--ink3);margin-top:4px;">DISRUPTION FREQ 4.28 GHz</div>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 200, cls),
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'matrix-streams': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const inner = `<div style="display:flex;gap:8px;justify-content:center;padding:6px;font-family:ui-monospace,monospace;font-size:9px;line-height:1.3;color:var(--ink);">
      <div style="opacity:1;">1<br>0<br>X<br>1</div>
      <div style="opacity:.7;" class="ha-pulse">0<br>1<br>1<br>0</div>
      <div style="opacity:.4;">F<br>A<br>0<br>9</div>
      <div style="opacity:.8;" class="ha-pulse">1<br>0<br>E<br>1</div>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 180, cls),
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'shimmer-bars': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const inner = `<div style="width:100%;padding:10px 4px;">
      <div style="height:6px;border-radius:${ap.isRounded ? '999px' : fp.radius};background:var(--track);position:relative;overflow:hidden;${fp.insetStyle}">
        <div class="ha-shimmer" style="position:absolute;top:0;bottom:0;width:50px;background:var(--ink);filter:blur(2px);"></div>
      </div>
      <div style="display:flex;justify-content:space-between;font-size:8px;font-family:ui-monospace,monospace;color:var(--ink3);margin-top:6px;">
        <span>INDETERMINATE</span><span>SCANNING</span>
      </div>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 210, cls),
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'banner-alerts': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const inner = `<div style="display:flex;align-items:center;gap:10px;padding:8px 12px;background:var(--panel2);border:1.5px solid var(--line2);border-radius:${ap.isRounded ? '8px' : fp.radius};width:100%;box-sizing:border-box;${fp.insetStyle}">
      <span style="font-weight:bold;font-size:12px;color:var(--ink);" class="ha-pulse">▲</span>
      <div style="flex:1;font-family:ui-monospace,monospace;font-size:9.5px;color:var(--ink);">
        <span style="font-weight:bold;">SYS_NOTICE:</span> STATUS_${Math.round(p)} OK
      </div>
      <span style="font-size:10px;color:var(--ink4);cursor:pointer;">✕</span>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 220, cls),
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'toast-popups': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const inner = `<div style="display:inline-flex;align-items:center;gap:8px;padding:7px 16px;border-radius:999px;background:var(--ink);color:var(--sc-bg);font-family:ui-monospace,monospace;font-size:10px;font-weight:bold;box-shadow:0 6px 16px rgba(0,0,0,.6);">
      <span style="width:6px;height:6px;border-radius:50%;background:var(--sc-bg);" class="ha-pulse"></span>
      <span>ACTION EXECUTED // V-${Math.round(p)}</span>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 200, cls),
      css: `.${cls} { isolation: isolate; }`
    };
  },
'breadcrumb-navs': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const inner = `<div style="display:flex;align-items:center;gap:8px;padding:8px 12px;background:var(--panel2);border:1px solid var(--line);border-radius:${ap.isRounded ? '999px' : fp.radius};width:100%;box-sizing:border-box;font-family:ui-monospace,monospace;font-size:10px;${fp.insetStyle}">
      <span style="color:var(--ink3);cursor:pointer;">ROOT</span>
      <span style="color:var(--ink4);">${fp.isSegmented ? '›' : '/'}</span>
      <span style="color:var(--ink3);cursor:pointer;">SECTOR_0${Math.floor(p / 25)}</span>
      <span style="color:var(--ink4);">${fp.isSegmented ? '›' : '/'}</span>
      <span style="color:var(--ink);font-weight:bold;" class="ha-pulse">NODE_${Math.round(p)}</span>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 220, cls),
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'pagination-bars': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const cur = Math.max(1, Math.min(5, Math.ceil(p / 20)));
    const inner = `<div style="display:flex;gap:4px;align-items:center;justify-content:center;padding:8px;">
      <button style="width:26px;height:26px;border-radius:${ap.isRounded ? '50%' : fp.radius};border:1px solid var(--line2);background:var(--panel2);color:var(--ink3);cursor:pointer;">‹</button>
      ${[1,2,3,4,5].map(n => `
        <button style="width:26px;height:26px;border-radius:${ap.isRounded ? '50%' : fp.radius};background:${n === cur ? 'var(--ink)' : 'transparent'};border:1px solid ${n === cur ? 'var(--ink)' : 'var(--line)'};color:${n === cur ? 'var(--sc-bg)' : 'var(--ink)'};font-family:ui-monospace,monospace;font-size:10px;font-weight:bold;cursor:pointer;${fp.insetStyle}">
          ${n}
        </button>
      `).join('')}
      <button style="width:26px;height:26px;border-radius:${ap.isRounded ? '50%' : fp.radius};border:1px solid var(--line2);background:var(--panel2);color:var(--ink3);cursor:pointer;">›</button>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 220, cls),
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'step-wizards': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const cur = p < 33 ? 1 : (p < 66 ? 2 : 3);
    const inner = `<div style="display:flex;align-items:center;justify-content:space-between;width:100%;padding:8px;">
      ${[1, 2, 3].map(n => `
        <div style="display:flex;align-items:center;gap:6px;">
          <div style="width:22px;height:22px;border-radius:50%;background:${n <= cur ? 'var(--ink)' : 'var(--panel2)'};border:1.5px solid ${n <= cur ? 'var(--ink)' : 'var(--line2)'};color:${n <= cur ? 'var(--sc-bg)' : 'var(--ink3)'};display:grid;place-items:center;font-size:10px;font-weight:bold;${fp.insetStyle}">
            ${n < cur ? '✓' : n}
          </div>
          <span style="font-size:9px;font-family:ui-monospace,monospace;color:${n === cur ? 'var(--ink)' : 'var(--ink3)'};font-weight:${n === cur ? 'bold' : 'normal'};">PH-${n}</span>
        </div>
        ${n < 3 ? `<div style="flex:1;height:2px;background:${n < cur ? 'var(--ink)' : 'var(--track)'};margin:0 6px;"></div>` : ''}
      `).join('')}
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 220, cls),
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'tab-navigators': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const sel = p < 33 ? 0 : (p < 66 ? 1 : 2);
    const tabs = ['OVERVIEW', 'TELEMETRY', 'SETTINGS'];
    const inner = `<div style="display:flex;gap:14px;border-bottom:1.5px solid var(--line);width:100%;padding:0 6px;box-sizing:border-box;font-family:ui-monospace,monospace;font-size:10px;">
      ${tabs.map((t, i) => `
        <div style="padding:8px 2px;cursor:pointer;color:${i === sel ? 'var(--ink)' : 'var(--ink3)'};font-weight:${i === sel ? 'bold' : 'normal'};border-bottom:${i === sel ? '2px solid var(--ink)' : '2px solid transparent'};margin-bottom:-1.5px;transition:.2s;">
          ${t}
        </div>
      `).join('')}
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 220, cls),
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'tree-views': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const inner = `<div style="display:flex;flex-direction:column;gap:5px;padding:8px;font-family:ui-monospace,monospace;font-size:10px;color:var(--ink);width:100%;${fp.insetStyle}">
      <div style="display:flex;align-items:center;gap:6px;cursor:pointer;">
        <span>▾</span><span>📁 core_sys/</span>
      </div>
      <div style="padding-left:16px;display:flex;flex-direction:column;gap:4px;color:var(--ink3);border-left:1px dashed var(--line2);margin-left:5px;">
        <div style="color:var(--ink);">📄 kernel.config</div>
        <div>📄 memory.dump</div>
        <div style="color:var(--ink);font-weight:bold;" class="ha-pulse">⚡ daemon_v${Math.round(p)}.bin</div>
      </div>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 200, cls),
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'floating-action-menus': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const inner = `<div style="position:relative;width:56px;height:56px;margin:0 auto;display:grid;place-items:center;">
      <button style="width:48px;height:48px;border-radius:${ap.isRounded ? '50%' : fp.radius};background:var(--ink);color:var(--sc-bg);font-size:22px;font-weight:bold;border:none;cursor:pointer;box-shadow:0 6px 16px rgba(0,0,0,.6);transition:.2s;" class="ha-pulse">
        +
      </button>
      <div style="position:absolute;top:-10px;right:-10px;width:18px;height:18px;border-radius:50%;background:var(--panel2);border:1px solid var(--line2);display:grid;place-items:center;font-size:9px;color:var(--ink);">⚡</div>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 170, cls),
      css: `.${cls} button:hover { transform: scale(1.08) rotate(45deg); }`
    };
  },

  'context-menus': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const inner = `<div style="background:var(--panel2);border:1px solid var(--line2);border-radius:${ap.isRounded ? '8px' : fp.radius};padding:6px;width:100%;max-width:160px;font-family:ui-monospace,monospace;font-size:9.5px;color:var(--ink);box-shadow:0 8px 24px rgba(0,0,0,.5);${fp.insetStyle}">
      <div style="padding:4px 8px;display:flex;justify-content:space-between;cursor:pointer;"><span>INSPECT</span><span style="color:var(--ink4);">⌘I</span></div>
      <div style="padding:4px 8px;display:flex;justify-content:space-between;cursor:pointer;background:var(--line);"><span>EXPORT</span><span style="color:var(--ink4);">⌘E</span></div>
      <div style="height:1px;background:var(--line);margin:4px 0;"></div>
      <div style="padding:4px 8px;display:flex;justify-content:space-between;cursor:pointer;color:var(--ink3);"><span>DELETE</span><span style="color:var(--ink4);">⌫</span></div>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 180, cls),
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'timeline-nodes': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const inner = `<div style="display:flex;flex-direction:column;gap:8px;padding:8px 12px;width:100%;font-family:ui-monospace,monospace;font-size:9.5px;">
      <div style="display:flex;align-items:center;gap:10px;">
        <div style="width:10px;height:10px;border-radius:50%;background:var(--ink);" class="ha-pulse"></div>
        <span style="color:var(--ink);font-weight:bold;">12:04:02 // CHECKPOINT</span>
      </div>
      <div style="padding-left:14px;border-left:1.5px dashed var(--line2);margin-left:4px;display:flex;flex-direction:column;gap:6px;color:var(--ink3);">
        <div>SNAPSHOT ${Math.round(p)}% SYNCED</div>
        <div style="font-size:8px;color:var(--ink4);">SHA: 0x8a92f0...</div>
      </div>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 210, cls),
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'accordion-drawers': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const open = p >= 50;
    const inner = `<div style="background:var(--panel2);border:1px solid var(--line2);border-radius:${ap.isRounded ? '8px' : fp.radius};overflow:hidden;width:100%;${fp.insetStyle}">
      <div style="padding:9px 12px;display:flex;justify-content:space-between;align-items:center;font-family:ui-monospace,monospace;font-size:10px;font-weight:bold;color:var(--ink);cursor:pointer;">
        <span>DISCLOSURE_PANEL</span>
        <span>${open ? '▴' : '▾'}</span>
      </div>
      ${open ? `<div style="padding:8px 12px;border-top:1px solid var(--line);font-size:9px;color:var(--ink3);font-family:ui-monospace,monospace;">
        MODULE EXTENSION DATA STREAM // PARAM ${Math.round(p)} ACTIVE
      </div>` : ''}
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 210, cls),
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'nav-rails': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const sel = Math.floor(p / 26) % 4;
    const inner = `<div style="display:flex;flex-direction:column;gap:8px;align-items:center;padding:8px 12px;background:var(--panel2);border:1px solid var(--line);border-radius:${ap.isRounded ? '999px' : fp.radius};width:36px;margin:0 auto;${fp.insetStyle}">
      ${[0, 1, 2, 3].map(i => `
        <div style="width:20px;height:20px;border-radius:${ap.isRounded ? '50%' : '4px'};background:${i === sel ? 'var(--ink)' : 'transparent'};border:1px solid ${i === sel ? 'var(--ink)' : 'var(--line2)'};display:grid;place-items:center;cursor:pointer;">
          <div style="width:6px;height:6px;border-radius:50%;background:${i === sel ? 'var(--sc-bg)' : 'var(--ink3)'};"></div>
        </div>
      `).join('')}
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 160, cls),
      css: `.${cls} { isolation: isolate; }`
    };
  },
'sparkline-charts': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const pts = Array.from({length: 10}, (_, i) => {
      const x = i * 18 + 9;
      const y = 35 - Math.sin((i + p/15) * 0.9) * 16 - (p * 0.1);
      return `${x},${Math.max(8, Math.round(y))}`;
    }).join(' ');

    const inner = `<div style="background:var(--panel2);border:1px solid var(--line);border-radius:${ap.isRounded ? '8px' : fp.radius};padding:8px 10px;width:100%;box-sizing:border-box;${fp.insetStyle}">
      <svg viewBox="0 0 180 50" width="100%" height="50" style="display:block;">
        <polyline points="${pts}" fill="none" stroke="var(--ink)" stroke-width="${fp.strokeW + 0.5}" stroke-dasharray="${fp.dashArray}"/>
        <circle cx="171" cy="20" r="3.5" fill="var(--ink)" class="ha-pulse"/>
      </svg>
      <div style="display:flex;justify-content:space-between;font-size:8.5px;font-family:ui-monospace,monospace;color:var(--ink3);margin-top:4px;">
        <span>TREND_30D</span><span style="color:var(--ink);font-weight:bold;">▲ +${(p * 0.42).toFixed(1)}%</span>
      </div>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 220, cls),
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'mini-bar-charts': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const bars = 8;
    const inner = `<div style="display:flex;flex-direction:column;gap:6px;width:100%;padding:4px;">
      <div style="display:flex;gap:4px;align-items:flex-end;height:56px;justify-content:center;border-bottom:1px solid var(--line2);padding-bottom:2px;">
        ${Array.from({length:bars}, (_, i) => {
          const h = 10 + ((i * 13 + p) % 42);
          return `<div style="flex:1;max-width:12px;height:${h}px;background:var(--ink);border-radius:${ap.isRounded ? '2px 2px 0 0' : '0'};opacity:${0.4 + (i/bars)*0.6};border:${fp.isDual ? '1px solid var(--line2)' : 'none'};"></div>`;
        }).join('')}
      </div>
      <div style="display:flex;justify-content:space-between;font-size:8px;font-family:ui-monospace,monospace;color:var(--ink3);">
        <span>W1</span><span>W2</span><span>W3</span><span>W4</span>
      </div>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 200, cls),
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'area-graph-plots': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const inner = `<div style="background:var(--panel2);border:1px solid var(--line);border-radius:${ap.isRounded ? '8px' : fp.radius};padding:8px;width:100%;${fp.insetStyle}">
      <svg viewBox="0 0 160 56" width="100%" height="56" style="display:block;">
        <polygon points="10,50 35,28 65,36 100,16 130,26 150,12 150,50 10,50" fill="var(--line2)" stroke="var(--ink)" stroke-width="${fp.strokeW}"/>
        <circle cx="150" cy="12" r="3" fill="var(--ink)" class="ha-pulse"/>
      </svg>
      <div style="display:flex;justify-content:space-between;font-size:8.5px;font-family:ui-monospace,monospace;color:var(--ink3);margin-top:3px;">
        <span>BANDWIDTH</span><span>${Math.round(p * 8)} MB/S</span>
      </div>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 210, cls),
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'donut-charts': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const circ = 188.5;
    const off = circ * (1 - p / 100);
    const inner = `<div style="position:relative;width:84px;height:84px;margin:0 auto;display:grid;place-items:center;">
      <svg viewBox="0 0 70 70" width="84" height="84" style="display:block;">
        <circle cx="35" cy="35" r="28" fill="none" stroke="var(--track)" stroke-width="${fp.isDual ? 4 : 8}"/>
        <circle cx="35" cy="35" r="28" fill="none" stroke="var(--ink)" stroke-width="${fp.isDual ? 4.5 : 8.2}" stroke-linecap="${ap.isRounded ? 'round' : 'butt'}" stroke-dasharray="${circ}" stroke-dashoffset="${off}" transform="rotate(-90 35 35)"/>
        ${fp.isHub ? `<circle cx="35" cy="35" r="14" fill="var(--panel2)" stroke="var(--line2)" stroke-width="1"/>` : ''}
      </svg>
      <div style="position:absolute;font-family:ui-monospace,monospace;font-size:10px;font-weight:bold;color:var(--ink);">${Math.round(p)}%</div>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 170, cls),
      css: `.${cls} circle { transition: stroke-dashoffset .6s ease; }`
    };
  },

  'kpi-metric-cards': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const inner = `<div style="background:var(--panel2);border:1.5px solid var(--line2);border-radius:${ap.isRounded ? '8px' : fp.radius};padding:10px 14px;width:100%;box-sizing:border-box;${fp.insetStyle}">
      <div style="font-size:8px;font-family:ui-monospace,monospace;letter-spacing:.14em;color:var(--ink3);">AGGREGATE METRIC</div>
      <div style="font-size:22px;font-weight:900;font-family:ui-monospace,monospace;color:var(--ink);margin:4px 0;">${(p * 14.8).toFixed(1)}k</div>
      <div style="display:flex;justify-content:space-between;align-items:center;font-size:8.5px;font-family:ui-monospace,monospace;">
        <span style="color:var(--ink);font-weight:bold;">▲ +${(p * 0.18).toFixed(1)}%</span>
        <span style="color:var(--ink4);">VS LAST MO</span>
      </div>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 200, cls),
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'heatmap-grids': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const cells = 21;
    const inner = `<div style="display:flex;flex-direction:column;gap:6px;padding:6px;width:100%;align-items:center;">
      <div style="display:grid;grid-template-columns:repeat(7, 12px);gap:3px;">
        ${Array.from({length:cells}, (_, i) => {
          const val = (Math.sin(i * 1.3 + p/10) + 1) / 2;
          return `<div style="width:12px;height:12px;border-radius:${ap.isRounded ? '3px' : '1px'};background:var(--ink);opacity:${0.1 + val * 0.9};"></div>`;
        }).join('')}
      </div>
      <div style="font-size:8px;font-family:ui-monospace,monospace;color:var(--ink3);">ACTIVITY DISTRIBUTION</div>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 190, cls),
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'scatter-matrices': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const pts = [
      [20, 30], [35, 15], [50, 45], [65, 25], [80, 10], [95, 35], [110, 20]
    ];
    const inner = `<div style="border:1px solid var(--line2);background:var(--panel2);border-radius:${ap.isRounded ? '8px' : fp.radius};padding:8px;width:100%;box-sizing:border-box;${fp.insetStyle}">
      <svg viewBox="0 0 130 60" width="100%" height="60" style="display:block;">
        <line x1="10" y1="50" x2="120" y2="50" stroke="var(--line2)"/>
        <line x1="10" y1="10" x2="10" y2="50" stroke="var(--line2)"/>
        ${pts.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3" fill="var(--ink)" class="ha-pulse"/>`).join('')}
      </svg>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 190, cls),
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'candlestick-bars': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const candles = [
      { top: 12, h: 18, wickT: 6, wickB: 36, bull: true },
      { top: 20, h: 12, wickT: 14, wickB: 38, bull: false },
      { top: 10, h: 22, wickT: 4, wickB: 40, bull: true },
      { top: 18, h: 16, wickT: 10, wickB: 38, bull: true }
    ];
    const inner = `<div style="display:flex;gap:12px;align-items:center;justify-content:center;height:60px;padding:6px;">
      ${candles.map(c => `
        <div style="position:relative;width:10px;height:44px;display:flex;justify-content:center;">
          <div style="position:absolute;top:${c.wickT}px;bottom:${44 - c.wickB}px;width:1.2px;background:var(--ink);"></div>
          <div style="position:absolute;top:${c.top}px;width:10px;height:${c.h}px;background:${c.bull ? 'var(--ink)' : 'var(--panel)'};border:1.5px solid var(--ink);border-radius:1px;"></div>
        </div>
      `).join('')}
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 190, cls),
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'data-tables': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const inner = `<div style="width:100%;border:1px solid var(--line);border-radius:${ap.isRounded ? '6px' : fp.radius};overflow:hidden;font-family:ui-monospace,monospace;font-size:9px;background:var(--panel2);${fp.insetStyle}">
      <div style="display:flex;justify-content:space-between;padding:5px 8px;background:var(--panel);border-bottom:1px solid var(--line);color:var(--ink4);font-weight:bold;">
        <span>ID</span><span>PORT</span><span>LOAD</span>
      </div>
      <div style="display:flex;justify-content:space-between;padding:4px 8px;border-bottom:1px solid var(--line);color:var(--ink);">
        <span>SRV_01</span><span>8080</span><span class="ha-pulse">${Math.round(p)}%</span>
      </div>
      <div style="display:flex;justify-content:space-between;padding:4px 8px;color:var(--ink3);">
        <span>SRV_02</span><span>443</span><span>24%</span>
      </div>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 200, cls),
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'diff-viewers': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const inner = `<div style="width:100%;background:var(--panel2);border:1px solid var(--line2);border-radius:${ap.isRounded ? '6px' : fp.radius};overflow:hidden;font-family:ui-monospace,monospace;font-size:9px;padding:6px 8px;${fp.insetStyle}">
      <div style="color:var(--ink);font-weight:bold;margin-bottom:3px;">@@ -14,4 +14,6 @@</div>
      <div style="color:var(--ink3);">- --threshold: 50%;</div>
      <div style="color:var(--ink);font-weight:bold;">+ --threshold: ${Math.round(p)}%;</div>
      <div style="color:var(--ink);">+ --mode: "monochrome";</div>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 210, cls),
      css: `.${cls} { isolation: isolate; }`
    };
  },
'text-inputs': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const inner = `<div style="display:flex;flex-direction:column;gap:5px;width:100%;padding:6px;box-sizing:border-box;">
      <label style="font-size:8px;font-family:ui-monospace,monospace;letter-spacing:.14em;color:var(--ink4);">VARIABLE_KEY</label>
      <div style="display:flex;align-items:center;padding:8px 12px;background:var(--panel2);border:${fp.strokeW}px solid ${fp.isDashed ? 'dashed' : 'solid'} var(--line2);border-radius:${ap.isRounded ? '999px' : fp.radius};width:100%;box-sizing:border-box;font-family:ui-monospace,monospace;font-size:10.5px;color:var(--ink);${fp.insetStyle}">
        <span>param_val_${Math.round(p)}</span>
        <span style="width:1.5px;height:12px;background:var(--ink);margin-left:4px;" class="ha-blink"></span>
      </div>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 210, cls),
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'search-bars': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const inner = `<div style="display:flex;align-items:center;gap:8px;padding:8px 14px;background:var(--panel2);border:${fp.strokeW}px solid var(--line2);border-radius:${ap.isRounded ? '999px' : fp.radius};width:100%;box-sizing:border-box;${fp.insetStyle}">
      <svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="var(--ink3)" stroke-width="1.8">
        <circle cx="9" cy="9" r="6"/>
        <path d="M13.5 13.5 18 18" stroke-linecap="round"/>
      </svg>
      <span style="font-family:ui-monospace,monospace;font-size:10px;color:var(--ink3);flex:1;">query 84 groups…</span>
      <span style="font-family:ui-monospace,monospace;font-size:9px;color:var(--ink4);border:1px solid var(--line);border-radius:3px;padding:1px 4px;">/</span>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 220, cls),
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'password-masks': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const count = 8;
    const inner = `<div style="display:flex;align-items:center;justify-content:space-between;padding:8px 12px;background:var(--panel2);border:1.5px solid var(--line2);border-radius:${ap.isRounded ? '999px' : fp.radius};width:100%;box-sizing:border-box;${fp.insetStyle}">
      <div style="display:flex;gap:6px;align-items:center;">
        ${Array.from({length:count}, () => `<div style="width:6px;height:6px;border-radius:50%;background:var(--ink);"></div>`).join('')}
      </div>
      <span style="font-size:11px;color:var(--ink3);cursor:pointer;">👁</span>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 200, cls),
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'pin-code-boxes': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const digits = ['7', '3', '0', '4'];
    const inner = `<div style="display:flex;gap:8px;justify-content:center;padding:8px;">
      ${digits.map((d, i) => `
        <div style="width:34px;height:42px;border:1.5px solid ${i === 2 ? 'var(--ink)' : 'var(--line2)'};background:var(--panel2);display:grid;place-items:center;font-family:ui-monospace,monospace;font-size:16px;font-weight:bold;color:var(--ink);border-radius:${ap.isRounded ? '8px' : fp.radius};${fp.insetStyle}">
          ${d}
        </div>
      `).join('')}
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 210, cls),
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'color-swatches': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const shades = ['#ffffff', '#b5b5b5', '#6e6e6e', '#333333', '#0a0a0a'];
    const sel = Math.floor(p / 22) % shades.length;
    const inner = `<div style="display:flex;gap:8px;justify-content:center;padding:8px;">
      ${shades.map((hex, i) => `
        <div style="width:24px;height:24px;border-radius:${ap.isRounded ? '50%' : fp.radius};background:${hex};border:2px solid ${i === sel ? 'var(--ink)' : 'var(--line2)'};box-shadow:${i === sel ? '0 0 8px rgba(255,255,255,.4)' : 'none'};cursor:pointer;"></div>
      `).join('')}
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 190, cls),
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'date-pickers': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const days = Array.from({length: 14}, (_, i) => i + 1);
    const sel = Math.floor(p / 8) % 14 + 1;
    const inner = `<div style="background:var(--panel2);border:1px solid var(--line2);border-radius:${ap.isRounded ? '8px' : fp.radius};padding:8px;width:100%;box-sizing:border-box;font-family:ui-monospace,monospace;${fp.insetStyle}">
      <div style="display:flex;justify-content:space-between;font-size:8.5px;color:var(--ink3);margin-bottom:6px;">
        <span>MONTH // 09</span><span>2026</span>
      </div>
      <div style="display:grid;grid-template-columns:repeat(7, 1fr);gap:4px;text-align:center;font-size:9px;">
        ${days.map(d => `
          <div style="padding:3px 0;border-radius:${ap.isRounded ? '50%' : '2px'};background:${d === sel ? 'var(--ink)' : 'transparent'};color:${d === sel ? 'var(--sc-bg)' : 'var(--ink)'};font-weight:${d === sel ? 'bold' : 'normal'};">
            ${d}
          </div>
        `).join('')}
      </div>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 200, cls),
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'time-selectors': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const h = String(Math.floor((p * 0.24)) % 24).padStart(2, '0');
    const m = String(Math.floor((p * 0.6)) % 60).padStart(2, '0');
    const inner = `<div style="display:flex;align-items:center;gap:6px;justify-content:center;padding:8px;font-family:ui-monospace,monospace;">
      <div style="padding:8px 12px;background:var(--panel2);border:1.5px solid var(--line2);border-radius:${ap.isRounded ? '6px' : fp.radius};font-size:16px;font-weight:bold;color:var(--ink);${fp.insetStyle}">${h}</div>
      <span style="font-size:16px;font-weight:bold;color:var(--ink);" class="ha-blink">:</span>
      <div style="padding:8px 12px;background:var(--panel2);border:1.5px solid var(--line2);border-radius:${ap.isRounded ? '6px' : fp.radius};font-size:16px;font-weight:bold;color:var(--ink);${fp.insetStyle}">${m}</div>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 190, cls),
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'file-dropzones': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const inner = `<div style="border:2px dashed ${ap.isMarching ? 'var(--ink)' : 'var(--line2)'};border-radius:${ap.isRounded ? '12px' : fp.radius};padding:12px;text-align:center;width:100%;box-sizing:border-box;font-family:ui-monospace,monospace;${fp.insetStyle}">
      <div style="font-size:14px;color:var(--ink);margin-bottom:4px;" class="ha-pulse">↑</div>
      <div style="font-size:9.5px;font-weight:bold;color:var(--ink);">DROP ARTIFACT HERE</div>
      <div style="font-size:7.5px;color:var(--ink4);margin-top:2px;">MAX SIZE: 100MB // MIME: ANY</div>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 210, cls),
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'tag-inputs': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const tags = ['SYSTEM', 'DAEMON', 'MONO'];
    const inner = `<div style="display:flex;flex-wrap:wrap;gap:6px;padding:8px;background:var(--panel2);border:1px solid var(--line);border-radius:${ap.isRounded ? '8px' : fp.radius};width:100%;box-sizing:border-box;${fp.insetStyle}">
      ${tags.map(t => `
        <span style="display:inline-flex;align-items:center;gap:4px;padding:3px 8px;border-radius:${ap.isRounded ? '999px' : '3px'};background:var(--line2);color:var(--ink);font-family:ui-monospace,monospace;font-size:8.5px;font-weight:bold;">
          ${t} <span style="font-size:8px;color:var(--ink4);cursor:pointer;">×</span>
        </span>
      `).join('')}
      <span style="font-family:ui-monospace,monospace;font-size:9px;color:var(--ink4);padding:3px 0;">+add</span>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 210, cls),
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'stepper-inputs': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const inner = `<div style="display:flex;align-items:center;border:1.5px solid var(--line2);border-radius:${ap.isRounded ? '999px' : fp.radius};background:var(--panel2);overflow:hidden;font-family:ui-monospace,monospace;${fp.insetStyle}">
      <button style="padding:6px 12px;border-right:1px solid var(--line);color:var(--ink);font-weight:bold;cursor:pointer;">-</button>
      <span style="padding:6px 16px;font-size:11px;font-weight:bold;color:var(--ink);min-width:32px;text-align:center;">${Math.round(p)}</span>
      <button style="padding:6px 12px;border-left:1px solid var(--line);color:var(--ink);font-weight:bold;cursor:pointer;">+</button>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 190, cls),
      css: `.${cls} button:hover { background: var(--line); }`
    };
  },
'hud-panels': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const inner = `<div style="border:1.5px solid var(--line2);background:var(--panel2);border-radius:${ap.isRounded ? '8px' : fp.radius};padding:12px;width:100%;box-sizing:border-box;position:relative;font-family:ui-monospace,monospace;${fp.insetStyle}">
      <div style="display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid var(--line);padding-bottom:6px;margin-bottom:8px;">
        <span style="font-size:9.5px;font-weight:bold;color:var(--ink);">// HUD_SECTOR_0${Math.floor(p/20)}</span>
        <span style="font-size:8px;color:var(--ink4);" class="ha-pulse">LIVE</span>
      </div>
      <div style="font-size:9px;color:var(--ink3);line-height:1.5;">
        COORDINATE: [${Math.round(p * 4.2)}, ${Math.round(p * 1.8)}]<br>
        STATUS: ENCRYPTED // ARCH_${varIdx}
      </div>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 220, cls),
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'card-containers': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const inner = `<div style="background:var(--panel2);border:${fp.strokeW}px solid ${fp.isDashed ? 'dashed' : 'solid'} var(--line2);border-radius:${ap.isRounded ? '12px' : fp.radius};padding:14px;width:100%;box-sizing:border-box;${fp.insetStyle}">
      <div style="font-family:ui-monospace,monospace;font-size:8px;color:var(--ink4);margin-bottom:4px;">COMPONENT_CONTAINER</div>
      <div style="font-size:12px;font-weight:bold;color:var(--ink);margin-bottom:6px;">Modular Shell</div>
      <div style="font-size:9.5px;color:var(--ink3);line-height:1.4;">
        Self-contained surface wrapper with internal geometry scaling.
      </div>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 220, cls),
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'tooltip-balloons': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const inner = `<div style="position:relative;padding:8px 14px;background:var(--ink);color:var(--sc-bg);border-radius:${ap.isRounded ? '999px' : fp.radius};font-family:ui-monospace,monospace;font-size:9.5px;font-weight:bold;box-shadow:0 4px 14px rgba(0,0,0,.6);margin-bottom:8px;">
      TARGET_VAL: ${Math.round(p)}%
      <div style="position:absolute;bottom:-5px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid var(--ink);"></div>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 180, cls),
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'popover-cards': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const inner = `<div style="background:var(--panel2);border:1.5px solid var(--line2);border-radius:${ap.isRounded ? '10px' : fp.radius};padding:12px;width:100%;box-sizing:border-box;box-shadow:0 12px 30px rgba(0,0,0,.6);${fp.insetStyle}">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
        <span style="font-size:10px;font-weight:bold;font-family:ui-monospace,monospace;color:var(--ink);">QUICK_ACTION</span>
        <span style="font-size:9px;color:var(--ink4);cursor:pointer;">✕</span>
      </div>
      <div style="font-size:9px;color:var(--ink3);font-family:ui-monospace,monospace;margin-bottom:8px;">
        Adjust threshold limit: ${Math.round(p)}%
      </div>
      <button style="width:100%;padding:5px 0;background:var(--ink);color:var(--sc-bg);border:none;border-radius:4px;font-size:9px;font-weight:bold;font-family:ui-monospace,monospace;cursor:pointer;">APPLY</button>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 200, cls),
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'user-avatars': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const inner = `<div style="display:flex;align-items:center;gap:12px;justify-content:center;padding:8px;">
      <div style="position:relative;">
        <div style="width:48px;height:48px;border-radius:${ap.isRounded ? '50%' : fp.radius};border:${fp.strokeW}px solid var(--ink);background:var(--panel2);display:grid;place-items:center;font-size:15px;font-weight:bold;font-family:ui-monospace,monospace;color:var(--ink);${fp.insetStyle}">
          HA
        </div>
        <div style="position:absolute;bottom:0;right:0;width:12px;height:12px;border-radius:50%;background:var(--ink);border:2px solid var(--panel);" class="ha-pulse"></div>
      </div>
      <div style="font-family:ui-monospace,monospace;">
        <div style="font-size:11px;font-weight:bold;color:var(--ink);">AGENT_${Math.round(p)}</div>
        <div style="font-size:8.5px;color:var(--ink3);">SYS_ADMIN</div>
      </div>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 200, cls),
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'profile-cards': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const inner = `<div style="background:var(--panel2);border:1.5px solid var(--line2);border-radius:${ap.isRounded ? '10px' : fp.radius};padding:12px;width:100%;box-sizing:border-box;display:flex;align-items:center;gap:10px;${fp.insetStyle}">
      <div style="width:36px;height:36px;border-radius:${ap.isRounded ? '50%' : '4px'};background:var(--ink);color:var(--sc-bg);display:grid;place-items:center;font-weight:bold;font-family:ui-monospace,monospace;">OP</div>
      <div style="flex:1;font-family:ui-monospace,monospace;">
        <div style="font-size:10.5px;font-weight:bold;color:var(--ink);">ROOT_OPERATOR</div>
        <div style="font-size:8px;color:var(--ink4);">CLEARANCE // LVL-${Math.floor(p / 25) + 1}</div>
      </div>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 220, cls),
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'pricing-cards': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const price = Math.round(19 + (p * 0.8));
    const inner = `<div style="background:var(--panel2);border:${fp.strokeW}px solid var(--line2);border-radius:${ap.isRounded ? '12px' : fp.radius};padding:14px;width:100%;box-sizing:border-box;text-align:center;font-family:ui-monospace,monospace;${fp.insetStyle}">
      <div style="font-size:8.5px;letter-spacing:.14em;color:var(--ink4);margin-bottom:4px;">ENTERPRISE</div>
      <div style="font-size:24px;font-weight:900;color:var(--ink);">$${price}<span style="font-size:10px;color:var(--ink3);">/mo</span></div>
      <div style="font-size:8px;color:var(--ink3);margin:8px 0;">UNLIMITED ACCESS TO 17K VARIANTS</div>
      <button style="width:100%;padding:6px 0;background:var(--ink);color:var(--sc-bg);border:none;border-radius:4px;font-size:9.5px;font-weight:bold;cursor:pointer;">SELECT TIER</button>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 210, cls),
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'feature-lists': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const items = ['Zero JS runtime dependencies', 'Single --p live contract', '60fps GPU animated', 'Pure monochrome system'];
    const inner = `<div style="display:flex;flex-direction:column;gap:6px;width:100%;padding:6px;font-family:ui-monospace,monospace;font-size:9px;">
      ${items.map(item => `
        <div style="display:flex;align-items:center;gap:6px;color:var(--ink);">
          <span style="color:var(--ink);font-weight:bold;">✓</span>
          <span>${item}</span>
        </div>
      `).join('')}
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 220, cls),
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'terminal-windows': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const inner = `<div style="background:var(--panel);border:1.5px solid var(--line2);border-radius:${ap.isRounded ? '8px' : fp.radius};overflow:hidden;width:100%;box-sizing:border-box;${fp.insetStyle}">
      <div style="display:flex;align-items:center;gap:4px;padding:6px 10px;background:var(--panel2);border-bottom:1px solid var(--line);">
        <div style="width:6px;height:6px;border-radius:50%;background:var(--ink4);"></div>
        <div style="width:6px;height:6px;border-radius:50%;background:var(--ink4);"></div>
        <div style="width:6px;height:6px;border-radius:50%;background:var(--ink4);"></div>
        <span style="font-family:ui-monospace,monospace;font-size:8px;color:var(--ink3);margin-left:6px;">tty // bash</span>
      </div>
      <div style="padding:8px 10px;font-family:ui-monospace,monospace;font-size:9px;color:var(--ink);line-height:1.4;">
        <span style="color:var(--ink4);">$</span> agy run --preset=${Math.round(p)}<br>
        <span style="color:var(--ink3);">[OK] 84 groups compiled.</span><br>
        <span style="color:var(--ink);font-weight:bold;" class="ha-blink">_</span>
      </div>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 220, cls),
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'code-boxes': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const inner = `<div style="background:var(--panel);border:1px solid var(--line2);border-radius:${ap.isRounded ? '8px' : fp.radius};overflow:hidden;width:100%;box-sizing:border-box;font-family:ui-monospace,monospace;${fp.insetStyle}">
      <div style="display:flex;justify-content:space-between;padding:5px 10px;background:var(--panel2);border-bottom:1px solid var(--line);font-size:8px;color:var(--ink3);">
        <span>main.css</span><span>CSS</span>
      </div>
      <div style="padding:8px 10px;font-size:9px;color:var(--ink2);line-height:1.4;">
        <span style="color:var(--ink);font-weight:bold;">.halfarc</span> {<br>
        &nbsp;&nbsp;--p: <span style="color:var(--ink);">${Math.round(p)}</span>;<br>
        }
      </div>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 210, cls),
      css: `.${cls} { isolation: isolate; }`
    };
  },
'keybinding-kbd': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const keys = ['⌘', 'SHIFT', 'ENTER'];
    const inner = `<div style="display:flex;gap:8px;justify-content:center;padding:8px;align-items:center;">
      ${keys.map((k, i) => `
        <kbd style="padding:8px 12px;border-radius:${ap.isRounded ? '8px' : fp.radius};background:${i === 2 ? 'var(--ink)' : 'var(--panel2)'};border:${fp.strokeW}px solid ${i === 2 ? 'var(--ink)' : 'var(--line2)'};color:${i === 2 ? 'var(--sc-bg)' : 'var(--ink)'};box-shadow:0 3px 0 ${i === 2 ? 'var(--ink4)' : 'var(--line)'};font-family:ui-monospace,monospace;font-size:11px;font-weight:bold;${fp.insetStyle}">
          ${k}
        </kbd>
      `).join('')}
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 220, cls),
      css: `.${cls} kbd:active { transform: translateY(2px); box-shadow: 0 1px 0 var(--line); }`
    };
  },

  'rating-stars': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const score = (p / 20).toFixed(1);
    const stars = 5;
    const inner = `<div style="display:flex;flex-direction:column;gap:6px;align-items:center;padding:8px;">
      <div style="display:flex;gap:6px;font-size:18px;color:var(--ink);">
        ${Array.from({length:stars}, (_, i) => {
          const fill = (i + 1) * 20 <= p;
          return `<span style="opacity:${fill ? 1 : 0.25};cursor:pointer;">★</span>`;
        }).join('')}
      </div>
      <div style="font-family:ui-monospace,monospace;font-size:10px;font-weight:bold;color:var(--ink);">
        SCORE: ${score} / 5.0
      </div>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 190, cls),
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'media-scrubbers': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const inner = `<div style="width:100%;padding:8px;box-sizing:border-box;">
      <div style="position:relative;width:100%;height:6px;background:var(--track);border-radius:${ap.isRounded ? '999px' : fp.radius};cursor:pointer;${fp.insetStyle}">
        <div style="width:${Math.min(100, p + 15)}%;height:100%;background:var(--line2);border-radius:${ap.isRounded ? '999px' : fp.radius};"></div>
        <div style="position:absolute;top:0;left:0;width:${p}%;height:100%;background:var(--ink);border-radius:${ap.isRounded ? '999px' : fp.radius};"></div>
        <div style="position:absolute;top:50%;left:${p}%;transform:translate(-50%,-50%);width:14px;height:14px;border-radius:50%;background:var(--ink);border:2px solid var(--panel);box-shadow:0 2px 6px rgba(0,0,0,.6);"></div>
      </div>
      <div style="display:flex;justify-content:space-between;font-family:ui-monospace,monospace;font-size:8.5px;color:var(--ink3);margin-top:6px;">
        <span>02:14</span><span style="color:var(--ink);font-weight:bold;">TRACK_0${Math.floor(p/20)+1}</span><span>05:40</span>
      </div>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 220, cls),
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'barcode-qr': (p, famIdx, varIdx, cls) => {
    const fp = getFamProps(famIdx);
    const ap = getArchProps(varIdx);
    const bars = [3,1,2,1,4,1,2,3,1,2,1,3,2,1,4,2,1,3];
    const inner = `<div style="display:flex;flex-direction:column;align-items:center;gap:6px;padding:8px;background:var(--panel2);border:1px solid var(--line2);border-radius:${ap.isRounded ? '8px' : fp.radius};${fp.insetStyle}">
      <div style="display:flex;gap:2px;align-items:center;height:42px;padding:2px 8px;background:#ffffff;">
        ${bars.map(w => `<div style="width:${w}px;height:100%;background:#000000;"></div>`).join('')}
      </div>
      <div style="font-family:ui-monospace,monospace;font-size:8.5px;letter-spacing:.18em;color:var(--ink);">*HA-${String(Math.round(p * 1234)).padStart(6, '0')}*</div>
    </div>`;

    return {
      html: wrapContainer(fp, ap, inner, 190, cls),
      css: `.${cls} { isolation: isolate; }`
    };
  }
};

/* ----------------------------------------------------------------------------
   THUMBNAIL RENDERER FOR HOMEPAGE
   -------------------------------------------------------------------------- */
function renderThumbnail(groupId, pct) {
  const p = pct === undefined ? 68 : pct;
  const fn = THUMB_BUILDERS[groupId];
  if (fn) return fn(p);

  return `<svg viewBox="0 0 80 50" width="70" height="44" style="display:block;">
    <rect x="5" y="5" width="70" height="40" rx="6" fill="var(--panel2)" stroke="var(--line2)"/>
    <circle cx="20" cy="25" r="8" fill="none" stroke="var(--ink)" stroke-width="2"/>
    <line x1="36" y1="20" x2="65" y2="20" stroke="var(--ink)" stroke-width="2"/>
    <line x1="36" y1="30" x2="55" y2="30" stroke="var(--line2)" stroke-width="1.5"/>
  </svg>`;
}

/* ----------------------------------------------------------------------------
   COMPONENT BUILDER
   -------------------------------------------------------------------------- */
function buildComponent(groupId, famIdx, varIdx, pct, cls) {
  const p = pct === undefined ? 68 : pct;
  const fn = COMP_BUILDERS[groupId];
  if (fn) return fn(p, famIdx, varIdx, cls);

  const grp = GROUPS.find(g => g.id === groupId);
  return {
    html: `<div class="ha-comp ${cls}" style="--p:${p};padding:12px;">
      <div style="width:100%;border:1px solid var(--line2);background:var(--panel2);border-radius:8px;padding:12px;">
        <div style="font-size:9px;color:var(--ink3);letter-spacing:.12em;">${grp ? grp.prefix : 'HA'} // ${SUB_FAMILIES[famIdx].toUpperCase()}</div>
        <div style="font-size:18px;font-weight:700;color:var(--ink);margin:4px 0;">${Math.round(p)}%</div>
        <div style="font-size:9.5px;color:var(--ink3);">${VARIANT_ARCHETYPES[varIdx]} Profile</div>
      </div>
    </div>`,
    css: `.${cls} { isolation: isolate; }`
  };
}

/* ----------------------------------------------------------------------------
   MASTER VARIANT GETTER (210 Variants Per Group with full code & snippet)
   -------------------------------------------------------------------------- */
function getVariant(groupId, variantIndex, pct) {
  const p = pct === undefined ? 68 : pct;
  const grp = GROUPS.find(g => g.id === groupId) || GROUPS[0];
  const safeIdx = Math.max(0, isNaN(variantIndex) ? 0 : variantIndex);

  const SC = (typeof window !== 'undefined' && window.SC) || (typeof global !== 'undefined' && global.SC);

  // Group 1: Semi-Circular Indicator (Original specs & engine builders)
  if (groupId === 'semi-circle-indicator' && SC && SC.SPECS && SC.BUILDERS) {
    const spec = SC.SPECS[safeIdx % SC.SPECS.length];
    const fam = (SC.FAMILIES && SC.FAMILIES.find(f => f.id === spec.f)) || { label: 'Indicator', note: '' };
    const uid = 'v' + String(safeIdx + 1).padStart(3, '0');
    const cls = 'v-' + String(safeIdx + 1).padStart(3, '0');
    const built = SC.BUILDERS[spec.f](spec.o, { cls, uid, pct: p });
    
    const snippet = `<!-- V-${String(safeIdx + 1).padStart(3, '0')} · ${spec.n} — from HALFARC -->
<!-- Drive by modifying --p on .sc-ind (0 to 100). Zero JS dependencies. -->
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
<title>HALFARC — V-${String(safeIdx + 1).padStart(3, '0')} ${spec.n}</title>
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
      id: 'V-' + String(safeIdx + 1).padStart(3, '0'),
      name: spec.n,
      fam: fam.label,
      desc: fam.note || spec.n,
      html: built.html,
      css: built.css,
      snippet,
      fullFile,
      demoPct: p
    };
  }

  // Groups 2 through 84 (Procedural component builders)
  const famIdx = Math.floor(safeIdx / 14) % SUB_FAMILIES.length;
  const varIdx = safeIdx % VARIANT_ARCHETYPES.length;
  const famName = SUB_FAMILIES[famIdx];
  const archName = VARIANT_ARCHETYPES[varIdx];

  const varId = `${grp.prefix}-${String(safeIdx + 1).padStart(3, '0')}`;
  const varName = `${grp.name.split(' ')[0]} ${famName} · ${archName}`;
  const cls = `ha-${grp.prefix.toLowerCase()}-${String(safeIdx + 1).padStart(3, '0')}`;

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
  wrapContainer
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = global.HA_CATALOG;
}

})(typeof window !== 'undefined' ? window : globalThis);
