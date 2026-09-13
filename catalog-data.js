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
@keyframes haPulse { 0%,100% { opacity: .4; transform: scale(0.98); } 50% { opacity: 1; transform: scale(1); } }
@keyframes haBreathe { 0%,100% { opacity: .7; } 50% { opacity: 1; } }
@keyframes haMarch { to { stroke-dashoffset: -40px; } }
@keyframes haShimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
@keyframes haScan { 0% { transform: translateY(-40px); } 100% { transform: translateY(40px); } }
@keyframes haGlitch { 0%,100% { transform: translate(0); } 20% { transform: translate(-1px, 1px); } 40% { transform: translate(1px, -1px); } 60% { transform: translate(-1px, 0); } }
@keyframes haBounce { 0%,100% { transform: scaleY(0.3); } 50% { transform: scaleY(1); } }
`;

const GROUPS = [
  {
    "id": "semi-circle-indicator",
    "idx": "GRP-01",
    "name": "Semi-Circular Scroll Indicators",
    "cat": "indicators",
    "prefix": "V",
    "desc": "The signature 210 precision semi-circle indicators in 30 families driven by single property --p.",
    "arch": "semicircle",
    "catLabel": "Indicators & Gauges"
  },
  {
    "id": "circular-gauges",
    "idx": "GRP-02",
    "name": "Circular Progress Gauges & Rings",
    "cat": "indicators",
    "prefix": "CPG",
    "desc": "Full 360\u00b0 progress rings, tachometers, dial needles, and calibrated concentric orbits.",
    "arch": "radial",
    "catLabel": "Indicators & Gauges"
  },
  {
    "id": "linear-progress",
    "idx": "GRP-03",
    "name": "Linear Progress Bars & Micro-Tracks",
    "cat": "indicators",
    "prefix": "LPB",
    "desc": "Sleek horizontal tracks, laser scanning heads, hazard stripes, and segmented LED rails.",
    "arch": "linear",
    "catLabel": "Indicators & Gauges"
  },
  {
    "id": "step-progress",
    "idx": "GRP-04",
    "name": "Step Progress Trackers & Workflow Steppers",
    "cat": "indicators",
    "prefix": "STP",
    "desc": "Multi-stage node pipelines, connected circuits, pulse junctions, and milestone beacons.",
    "arch": "linear",
    "catLabel": "Indicators & Gauges"
  },
  {
    "id": "segmented-meters",
    "idx": "GRP-05",
    "name": "Segmented Level Meters & Discrete Bars",
    "cat": "indicators",
    "prefix": "SGM",
    "desc": "Discrete LED block columns, studio level ladders, and chamfered threshold bars.",
    "arch": "linear",
    "catLabel": "Indicators & Gauges"
  },
  {
    "id": "battery-indicators",
    "idx": "GRP-06",
    "name": "Battery & Power Level Cells",
    "cat": "indicators",
    "prefix": "BAT",
    "desc": "Precision battery housings, charging bolt glyphs, cell stacks, and plasma cores.",
    "arch": "linear",
    "catLabel": "Indicators & Gauges"
  },
  {
    "id": "signal-meters",
    "idx": "GRP-07",
    "name": "Signal Strength & Connectivity Bars",
    "cat": "indicators",
    "prefix": "SIG",
    "desc": "Ascending cellular bars, radial Wi-Fi arcs, antenna towers, and broadcast arrays.",
    "arch": "linear",
    "catLabel": "Indicators & Gauges"
  },
  {
    "id": "speedometer-gauges",
    "idx": "GRP-08",
    "name": "Speedometer & Tachometer Dials",
    "cat": "indicators",
    "prefix": "SPD",
    "desc": "240\u00b0 and 270\u00b0 sweeping needles, high-RPM redline zones, and digital odometer windows.",
    "arch": "radial",
    "catLabel": "Indicators & Gauges"
  },
  {
    "id": "compass-rings",
    "idx": "GRP-09",
    "name": "Compass Rings & Heading Reticles",
    "cat": "indicators",
    "prefix": "CMP",
    "desc": "Azimuth bearing rings, navigation gyros, 360\u00b0 degree rims, and military four-point roses.",
    "arch": "radial",
    "catLabel": "Indicators & Gauges"
  },
  {
    "id": "altimeter-scales",
    "idx": "GRP-10",
    "name": "Vertical Altimeter & Depth Scales",
    "cat": "indicators",
    "prefix": "ALT",
    "desc": "Vertical graduation tapes, rolling elevation carats, pressure bars, and depth meters.",
    "arch": "vertical",
    "catLabel": "Indicators & Gauges"
  },
  {
    "id": "rotary-knobs",
    "idx": "GRP-11",
    "name": "Rotary Knobs & Potentiometer Dials",
    "cat": "controls",
    "prefix": "KNB",
    "desc": "Tactile volume wheels, knurled metal rims, pointer notches, and 10-step detent encoders.",
    "arch": "radial",
    "catLabel": "Controls & Inputs"
  },
  {
    "id": "toggle-switches",
    "idx": "GRP-12",
    "name": "Toggle Switches & Bistable Levers",
    "cat": "controls",
    "prefix": "TOG",
    "desc": "Mechanical toggle levers, pill sliders, rocker plates, and illuminated LED status toggles.",
    "arch": "control",
    "catLabel": "Controls & Inputs"
  },
  {
    "id": "range-sliders",
    "idx": "GRP-13",
    "name": "Range Sliders & Dual-Thumb Faders",
    "cat": "controls",
    "prefix": "SLD",
    "desc": "Precision horizontal tracks, floating value bubbles, dual-boundary thumbs, and calibrated pips.",
    "arch": "linear",
    "catLabel": "Controls & Inputs"
  },
  {
    "id": "push-buttons",
    "idx": "GRP-14",
    "name": "Tactile Push Buttons & Micro-Capsules",
    "cat": "controls",
    "prefix": "BTN",
    "desc": "Tactile press-down buttons, chamfered tactical triggers, glowing borders, and corner frames.",
    "arch": "control",
    "catLabel": "Controls & Inputs"
  },
  {
    "id": "segmented-controls",
    "idx": "GRP-15",
    "name": "Segmented Tabs & Selector Bars",
    "cat": "controls",
    "prefix": "SGC",
    "desc": "Sliding pill switchers, bordered modular blocks, bracketed selectors, and monospace rails.",
    "arch": "linear",
    "catLabel": "Controls & Inputs"
  },
  {
    "id": "radio-selectors",
    "idx": "GRP-16",
    "name": "Radio Buttons & Precision Discs",
    "cat": "controls",
    "prefix": "RAD",
    "desc": "Concentric target discs, animated inner pop dots, diamond radios, and cyber rings.",
    "arch": "radial",
    "catLabel": "Controls & Inputs"
  },
  {
    "id": "checkbox-states",
    "idx": "GRP-17",
    "name": "Checkboxes & Multi-State Ticks",
    "cat": "controls",
    "prefix": "CHK",
    "desc": "Cyber square checkboxes, animated drawing checkmarks, cross marks, and indeterminate dashes.",
    "arch": "control",
    "catLabel": "Controls & Inputs"
  },
  {
    "id": "icon-buttons",
    "idx": "GRP-18",
    "name": "Icon Action Buttons & Tool Triggers",
    "cat": "controls",
    "prefix": "ICN",
    "desc": "Square, round, and hex icon housings, floating tool anchors, and hover crosshair frames.",
    "arch": "control",
    "catLabel": "Controls & Inputs"
  },
  {
    "id": "split-buttons",
    "idx": "GRP-19",
    "name": "Split Action Buttons & Drop Triggers",
    "cat": "controls",
    "prefix": "SPL",
    "desc": "Dual-action split buttons, primary command + chevron drop trigger, and tactical joints.",
    "arch": "control",
    "catLabel": "Controls & Inputs"
  },
  {
    "id": "volume-faders",
    "idx": "GRP-20",
    "name": "Vertical Studio Faders & Console Channels",
    "cat": "controls",
    "prefix": "FAD",
    "desc": "Studio mixing console faders, grip line thumbs, decibel scales, and motorized channels.",
    "arch": "vertical",
    "catLabel": "Controls & Inputs"
  },
  {
    "id": "audio-equalizer",
    "idx": "GRP-21",
    "name": "Audio Equalizer Bars & Band Spectrums",
    "cat": "audio",
    "prefix": "AEQ",
    "desc": "8-band, 16-band, and 32-band equalizer columns bouncing in organic frequency rhythms.",
    "arch": "audio",
    "catLabel": "Audio & Signal"
  },
  {
    "id": "waveform-monitors",
    "idx": "GRP-22",
    "name": "Audio Waveforms & Track Scanners",
    "cat": "audio",
    "prefix": "WAV",
    "desc": "Symmetrical sound wave envelopes, recorded voiceprints, and scanning playhead needles.",
    "arch": "audio",
    "catLabel": "Audio & Signal"
  },
  {
    "id": "oscilloscope-traces",
    "idx": "GRP-23",
    "name": "Oscilloscope CRT Traces & Sine Sweeps",
    "cat": "audio",
    "prefix": "OSC",
    "desc": "CRT oscilloscope traces, green/white phosphor sine waves, Lissajous loops, and harmonics.",
    "arch": "audio",
    "catLabel": "Audio & Signal"
  },
  {
    "id": "vu-meters",
    "idx": "GRP-24",
    "name": "Analog VU Decibel Needles & Grids",
    "cat": "audio",
    "prefix": "VUM",
    "desc": "Vintage galvanometer needles, warm scale backlights, -20dB to +3dB scales, and peak LEDs.",
    "arch": "audio",
    "catLabel": "Audio & Signal"
  },
  {
    "id": "bpm-metronomes",
    "idx": "GRP-25",
    "name": "BPM Tappers & Metronome Needles",
    "cat": "audio",
    "prefix": "BPM",
    "desc": "Inverted pendulum tempo arms, sliding counter-weights, tap BPM triggers, and beat pulses.",
    "arch": "audio",
    "catLabel": "Audio & Signal"
  },
  {
    "id": "spectrum-analyzers",
    "idx": "GRP-26",
    "name": "Frequency Spectrum Ribbons & Cascades",
    "cat": "audio",
    "prefix": "SPC",
    "desc": "Fast Fourier Transform (FFT) waterfall cascades, logarithmic bands, and filled ribbons.",
    "arch": "audio",
    "catLabel": "Audio & Signal"
  },
  {
    "id": "radar-sweeps",
    "idx": "GRP-27",
    "name": "Radar Sweeps & Sonar Pings",
    "cat": "audio",
    "prefix": "RDR",
    "desc": "Rotating 360\u00b0 radar beams, glowing phosphor blips, range rings, and sonar echo circles.",
    "arch": "radial",
    "catLabel": "Audio & Signal"
  },
  {
    "id": "crosshair-reticles",
    "idx": "GRP-28",
    "name": "Crosshair Reticles & Targeting Sights",
    "cat": "audio",
    "prefix": "RET",
    "desc": "Tactical HUD reticles, sniper mil-dots, dynamic expanding sights, and locking brackets.",
    "arch": "radial",
    "catLabel": "Audio & Signal"
  },
  {
    "id": "telemetry-hud",
    "idx": "GRP-29",
    "name": "Telemetry HUDs & Flight Avionics",
    "cat": "audio",
    "prefix": "HUD",
    "desc": "Fighter jet pitch ladders, artificial horizons, roll angle indicators, and flight vectors.",
    "arch": "surface",
    "catLabel": "Audio & Signal"
  },
  {
    "id": "acoustics-visualizers",
    "idx": "GRP-30",
    "name": "Acoustic Nodes & Audio Rings",
    "cat": "audio",
    "prefix": "ACS",
    "desc": "Omnidirectional sound wave ripples, speaker cone excursions, and sonic particle lattices.",
    "arch": "radial",
    "catLabel": "Audio & Signal"
  },
  {
    "id": "loading-spinners",
    "idx": "GRP-31",
    "name": "Loading Spinners & Gyro Orbiters",
    "cat": "feedback",
    "prefix": "SPN",
    "desc": "Counter-rotating gyro rings, orbital bead satellites, and segmented spinning rotors.",
    "arch": "radial",
    "catLabel": "Feedback & Status"
  },
  {
    "id": "pulse-beacons",
    "idx": "GRP-32",
    "name": "Pulsing Status Beacons & Ping Nodes",
    "cat": "feedback",
    "prefix": "BCN",
    "desc": "Concentric radiating ripples, glowing presence dots, and alive status pulses.",
    "arch": "radial",
    "catLabel": "Feedback & Status"
  },
  {
    "id": "skeleton-shimmers",
    "idx": "GRP-33",
    "name": "Skeleton Loaders & Ghost Wireframes",
    "cat": "feedback",
    "prefix": "SKL",
    "desc": "Ghost text lines, avatar plates, and technical card wireframes with scanning shimmer.",
    "arch": "feedback",
    "catLabel": "Feedback & Status"
  },
  {
    "id": "status-pills",
    "idx": "GRP-34",
    "name": "Status Pill Badges & Live State Chips",
    "cat": "feedback",
    "prefix": "PIL",
    "desc": "Monospaced status pills with live blinking status LEDs (Online, Syncing, Standby, Error).",
    "arch": "feedback",
    "catLabel": "Feedback & Status"
  },
  {
    "id": "notification-dots",
    "idx": "GRP-35",
    "name": "Notification Badges & Unread Counter Pips",
    "cat": "feedback",
    "prefix": "NOT",
    "desc": "Bell badges, unread counter pills, pinging corner dots, and micro notification tabs.",
    "arch": "feedback",
    "catLabel": "Feedback & Status"
  },
  {
    "id": "glitch-elements",
    "idx": "GRP-36",
    "name": "Cyber Glitch Decoders & Signal Faults",
    "cat": "feedback",
    "prefix": "GLT",
    "desc": "Fractured cyber typography, horizontal scanline offsets, and signal jitter decoders.",
    "arch": "feedback",
    "catLabel": "Feedback & Status"
  },
  {
    "id": "matrix-streams",
    "idx": "GRP-37",
    "name": "Matrix Rain & Digital Bit Streams",
    "cat": "feedback",
    "prefix": "MTX",
    "desc": "Cascading columns of binary bits, hex bytes, and monospace glyphs raining in rhythms.",
    "arch": "feedback",
    "catLabel": "Feedback & Status"
  },
  {
    "id": "shimmer-bars",
    "idx": "GRP-38",
    "name": "Indeterminate Progress & Laser Sweepers",
    "cat": "feedback",
    "prefix": "SHM",
    "desc": "Endless scanning lasers, sweeping frosted highlights, and travelling dash arrays.",
    "arch": "linear",
    "catLabel": "Feedback & Status"
  },
  {
    "id": "banner-alerts",
    "idx": "GRP-39",
    "name": "System Alert Banners & Callout Strips",
    "cat": "feedback",
    "prefix": "BNR",
    "desc": "Technical system alert callouts, warning brackets, dismiss crosses, and status borders.",
    "arch": "feedback",
    "catLabel": "Feedback & Status"
  },
  {
    "id": "toast-popups",
    "idx": "GRP-40",
    "name": "Toast Notifications & Console Snackbars",
    "cat": "feedback",
    "prefix": "TST",
    "desc": "Floating notification snackbars, timeout countdown progress hairlines, and action chips.",
    "arch": "feedback",
    "catLabel": "Feedback & Status"
  },
  {
    "id": "breadcrumb-navs",
    "idx": "GRP-41",
    "name": "Breadcrumb Paths & Chevron Hierarchies",
    "cat": "navigation",
    "prefix": "BRD",
    "desc": "Stepped path breadcrumbs, slash/chevron delimiters, home glyphs, and active node glows.",
    "arch": "navigation",
    "catLabel": "Navigation & Steps"
  },
  {
    "id": "pagination-bars",
    "idx": "GRP-42",
    "name": "Pagination Controls & Page Number Strips",
    "cat": "navigation",
    "prefix": "PGN",
    "desc": "Number strips, active page boxes, ellipsis jumpers, and micro arrow step buttons.",
    "arch": "navigation",
    "catLabel": "Navigation & Steps"
  },
  {
    "id": "step-wizards",
    "idx": "GRP-43",
    "name": "Multi-Step Wizards & Milestone Ladders",
    "cat": "navigation",
    "prefix": "WZD",
    "desc": "Linear multi-step wizards, completed check circles, active stage flags, and connectors.",
    "arch": "navigation",
    "catLabel": "Navigation & Steps"
  },
  {
    "id": "tab-navigators",
    "idx": "GRP-44",
    "name": "Tab Navigators & Underline Sliders",
    "cat": "navigation",
    "prefix": "TAB",
    "desc": "Top tab rails, sliding underline track indicators, pill tab docks, and counter badges.",
    "arch": "navigation",
    "catLabel": "Navigation & Steps"
  },
  {
    "id": "tree-views",
    "idx": "GRP-45",
    "name": "Hierarchical Tree Views & Branch Nodes",
    "cat": "navigation",
    "prefix": "TRE",
    "desc": "Collapsible folder trees, directory branch lines, document glyphs, and depth indents.",
    "arch": "navigation",
    "catLabel": "Navigation & Steps"
  },
  {
    "id": "floating-action-menus",
    "idx": "GRP-46",
    "name": "Floating Action Hubs & Radial Docks",
    "cat": "navigation",
    "prefix": "FAB",
    "desc": "Expandable floating action hubs, radial action satellites, and circular speed-dials.",
    "arch": "navigation",
    "catLabel": "Navigation & Steps"
  },
  {
    "id": "context-menus",
    "idx": "GRP-47",
    "name": "Context Menus & Hover Flyout Stacks",
    "cat": "navigation",
    "prefix": "CTX",
    "desc": "Floating context menus, keyboard shortcut chips, divider hairlines, and submenu chevrons.",
    "arch": "navigation",
    "catLabel": "Navigation & Steps"
  },
  {
    "id": "timeline-nodes",
    "idx": "GRP-48",
    "name": "Vertical Timeline Nodes & Event Stems",
    "cat": "navigation",
    "prefix": "TML",
    "desc": "Vertical milestone stems, event timestamps, pulse junction dots, and story callouts.",
    "arch": "vertical",
    "catLabel": "Navigation & Steps"
  },
  {
    "id": "accordion-drawers",
    "idx": "GRP-49",
    "name": "Accordion Drawers & Expandable Shelves",
    "cat": "navigation",
    "prefix": "ACD",
    "desc": "Collapsible drawer headers, rotating indicator chevrons, and smooth expanding shelves.",
    "arch": "navigation",
    "catLabel": "Navigation & Steps"
  },
  {
    "id": "nav-rails",
    "idx": "GRP-50",
    "name": "Slim Sidebar Rails & Icon Anchors",
    "cat": "navigation",
    "prefix": "RAL",
    "desc": "Vertical navigation rails, active indicator pips, tool glyphs, and compact docks.",
    "arch": "vertical",
    "catLabel": "Navigation & Steps"
  },
  {
    "id": "sparkline-charts",
    "idx": "GRP-51",
    "name": "Sparkline Trend Lines & Hairline Curves",
    "cat": "data",
    "prefix": "SPK",
    "desc": "Micro trend lines, hairline cubic splines, glowing terminal endpoints, and fill area fades.",
    "arch": "datavis",
    "catLabel": "Data Vis & Charts"
  },
  {
    "id": "mini-bar-charts",
    "idx": "GRP-52",
    "name": "Mini Column Charts & Distribution Bars",
    "cat": "data",
    "prefix": "MBC",
    "desc": "Discrete distribution columns, staggered entrance heights, baseline rails, and hover bars.",
    "arch": "datavis",
    "catLabel": "Data Vis & Charts"
  },
  {
    "id": "area-graph-plots",
    "idx": "GRP-53",
    "name": "Area Graph Silhouettes & Gradient Meshes",
    "cat": "data",
    "prefix": "ARA",
    "desc": "Filled area graph curves, dual-layer comparative plots, and backdrop grid lines.",
    "arch": "datavis",
    "catLabel": "Data Vis & Charts"
  },
  {
    "id": "donut-charts",
    "idx": "GRP-54",
    "name": "Donut Charts & Proportional Rings",
    "cat": "data",
    "prefix": "DNT",
    "desc": "Segmented proportional rings, concentric metric donuts, and center total readouts.",
    "arch": "radial",
    "catLabel": "Data Vis & Charts"
  },
  {
    "id": "kpi-metric-cards",
    "idx": "GRP-55",
    "name": "KPI Metric Cards & Stat Counters",
    "cat": "data",
    "prefix": "KPI",
    "desc": "Brutalist metric stat cards, large bold digits, trend delta pills, and sparkline feet.",
    "arch": "surface",
    "catLabel": "Data Vis & Charts"
  },
  {
    "id": "heatmap-grids",
    "idx": "GRP-56",
    "name": "Heatmap Density Grids & Activity Matrices",
    "cat": "data",
    "prefix": "HTM",
    "desc": "Activity matrices, GitHub-style contribution squares, and pulsating density levels.",
    "arch": "datavis",
    "catLabel": "Data Vis & Charts"
  },
  {
    "id": "scatter-matrices",
    "idx": "GRP-57",
    "name": "Scatter Plots & Dot Matrix Coordinates",
    "cat": "data",
    "prefix": "SCT",
    "desc": "Coordinate grids, scattered data points, cluster distributions, and axis crosshairs.",
    "arch": "datavis",
    "catLabel": "Data Vis & Charts"
  },
  {
    "id": "candlestick-bars",
    "idx": "GRP-58",
    "name": "Financial Candlestick Bars & High-Low Spikes",
    "cat": "data",
    "prefix": "CSK",
    "desc": "Financial trading candlesticks, upper/lower wick hairlines, and hollow/filled bodies.",
    "arch": "datavis",
    "catLabel": "Data Vis & Charts"
  },
  {
    "id": "data-tables",
    "idx": "GRP-59",
    "name": "Minimal Data Table Rows & Grid Cells",
    "cat": "data",
    "prefix": "TBL",
    "desc": "Ultra-clean tabular rows, monospace columns, alignment guides, and scanline hovers.",
    "arch": "datavis",
    "catLabel": "Data Vis & Charts"
  },
  {
    "id": "diff-viewers",
    "idx": "GRP-60",
    "name": "Code Diff Comparisons & Inline Patches",
    "cat": "data",
    "prefix": "DIF",
    "desc": "Inline code diff views, +/- gutter indicators, modified line highlights, and chunk markers.",
    "arch": "datavis",
    "catLabel": "Data Vis & Charts"
  },
  {
    "id": "text-inputs",
    "idx": "GRP-61",
    "name": "Monospaced Text Inputs & Ghost Fields",
    "cat": "forms",
    "prefix": "TXT",
    "desc": "Precision text input fields, blinking block cursors, active border brackets, and prefixes.",
    "arch": "form",
    "catLabel": "Form Controls"
  },
  {
    "id": "search-bars",
    "idx": "GRP-62",
    "name": "Quick Search Bars & Command Palettes",
    "cat": "forms",
    "prefix": "SRC",
    "desc": "Search input fields, magnifying glass icons, keyboard shortcut tags (/ and \u2318K), and pills.",
    "arch": "form",
    "catLabel": "Form Controls"
  },
  {
    "id": "password-masks",
    "idx": "GRP-63",
    "name": "Password Mask Fields & Cipher Discs",
    "cat": "forms",
    "prefix": "PWD",
    "desc": "Masked password fields, cipher dot rows, reveal eye toggles, and security strength bars.",
    "arch": "form",
    "catLabel": "Form Controls"
  },
  {
    "id": "pin-code-boxes",
    "idx": "GRP-64",
    "name": "OTP PIN Code Inputs & Segmented Digits",
    "cat": "forms",
    "prefix": "PIN",
    "desc": "Segmented verification digit cells, active focus borders, and monospaced number targets.",
    "arch": "form",
    "catLabel": "Form Controls"
  },
  {
    "id": "color-swatches",
    "idx": "GRP-65",
    "name": "Monochrome Swatch Pickers & Tone Scales",
    "cat": "forms",
    "prefix": "CLR",
    "desc": "Greyscale palette ramp pickers, percentage tone chips, and active selector rings.",
    "arch": "form",
    "catLabel": "Form Controls"
  },
  {
    "id": "date-pickers",
    "idx": "GRP-66",
    "name": "Minimal Date Pickers & Month Matrices",
    "cat": "forms",
    "prefix": "DAT",
    "desc": "Compact calendar matrices, day header rows, active date selection dots, and range highlights.",
    "arch": "form",
    "catLabel": "Form Controls"
  },
  {
    "id": "time-selectors",
    "idx": "GRP-67",
    "name": "Time Selector Dials & Digital 24H Digits",
    "cat": "forms",
    "prefix": "TIM",
    "desc": "Digital 24H time displays, blinking colon separators, AM/PM toggles, and dial wheels.",
    "arch": "form",
    "catLabel": "Form Controls"
  },
  {
    "id": "file-dropzones",
    "idx": "GRP-68",
    "name": "File Upload Dropzones & Boundary Frames",
    "cat": "forms",
    "prefix": "DRP",
    "desc": "Dashed drag-and-drop targets, upload arrow vectors, format tags, and progress states.",
    "arch": "form",
    "catLabel": "Form Controls"
  },
  {
    "id": "tag-inputs",
    "idx": "GRP-69",
    "name": "Tag Cloud Inputs & Token Pills",
    "cat": "forms",
    "prefix": "TAG",
    "desc": "Multi-token input clouds, removable tag pills with cross icons, and inline text prompts.",
    "arch": "form",
    "catLabel": "Form Controls"
  },
  {
    "id": "stepper-inputs",
    "idx": "GRP-70",
    "name": "Numeric Counter Steppers & Plus/Minus Increments",
    "cat": "forms",
    "prefix": "STP",
    "desc": "Tactile counter steppers, - and + micro triggers, monospaced numeric readouts, and limits.",
    "arch": "form",
    "catLabel": "Form Controls"
  },
  {
    "id": "hud-panels",
    "idx": "GRP-71",
    "name": "Cyberpunk HUD Panels & Technical Bezels",
    "cat": "surfaces",
    "prefix": "HPN",
    "desc": "Corner-bracketed HUD enclosures, tech metadata headers, status corners, and chamfers.",
    "arch": "surface",
    "catLabel": "HUD & Surfaces"
  },
  {
    "id": "card-containers",
    "idx": "GRP-72",
    "name": "Minimalist Surface Cards & Framed Modules",
    "cat": "surfaces",
    "prefix": "CRD",
    "desc": "Brutalist surface cards, hairline divider rules, subtle inset panels, and meta strips.",
    "arch": "surface",
    "catLabel": "HUD & Surfaces"
  },
  {
    "id": "tooltip-balloons",
    "idx": "GRP-73",
    "name": "Precision Tooltip Balloons & Target Callouts",
    "cat": "surfaces",
    "prefix": "TIP",
    "desc": "Floating pointer flags, anchor chevrons, monospaced microcopy, and dark bubble frames.",
    "arch": "surface",
    "catLabel": "HUD & Surfaces"
  },
  {
    "id": "popover-cards",
    "idx": "GRP-74",
    "name": "Popover Dialogs & Anchored Modals",
    "cat": "surfaces",
    "prefix": "POP",
    "desc": "Anchored popover boxes, header close crosses, action buttons, and elevation backdrops.",
    "arch": "surface",
    "catLabel": "HUD & Surfaces"
  },
  {
    "id": "user-avatars",
    "idx": "GRP-75",
    "name": "User Avatar Rings & Presence Badges",
    "cat": "surfaces",
    "prefix": "AVT",
    "desc": "Monogram avatar discs, presence beacon dots (online/busy/away), and concentric rings.",
    "arch": "radial",
    "catLabel": "HUD & Surfaces"
  },
  {
    "id": "profile-cards",
    "idx": "GRP-76",
    "name": "Identity Profile Badges & ID Badges",
    "cat": "surfaces",
    "prefix": "PRF",
    "desc": "Compact identity badges, avatar circles, handle tags, role badges, and status lines.",
    "arch": "surface",
    "catLabel": "HUD & Surfaces"
  },
  {
    "id": "pricing-cards",
    "idx": "GRP-77",
    "name": "Tier Pricing Cards & Spec Tables",
    "cat": "surfaces",
    "prefix": "PRC",
    "desc": "Tier comparison cards, large currency numerals, billing frequency tags, and CTA buttons.",
    "arch": "surface",
    "catLabel": "HUD & Surfaces"
  },
  {
    "id": "feature-lists",
    "idx": "GRP-78",
    "name": "Feature Comparison Checks & Bullet Grids",
    "cat": "surfaces",
    "prefix": "FTR",
    "desc": "Vertical feature checklists, crisp SVG tick icons, muted negative crosses, and text stems.",
    "arch": "surface",
    "catLabel": "HUD & Surfaces"
  },
  {
    "id": "terminal-windows",
    "idx": "GRP-79",
    "name": "Terminal Prompt Windows & Shell Headers",
    "cat": "surfaces",
    "prefix": "TRM",
    "desc": "Unix terminal headers, traffic light window dots, path prompts, and blinking block cursor.",
    "arch": "surface",
    "catLabel": "HUD & Surfaces"
  },
  {
    "id": "code-boxes",
    "idx": "GRP-80",
    "name": "Code Snippet Boxes & Syntax Badges",
    "cat": "surfaces",
    "prefix": "COD",
    "desc": "Code container blocks, language badges (CSS/JS), line numbers, and copy action buttons.",
    "arch": "surface",
    "catLabel": "HUD & Surfaces"
  },
  {
    "id": "keybinding-kbd",
    "idx": "GRP-81",
    "name": "Keyboard Shortcut Chips & Key Caps",
    "cat": "media",
    "prefix": "KBD",
    "desc": "Raised tactile keyboard key caps, modifier glyphs (\u2318, \u2325, \u21e7, \u2303), and shortcut sequences.",
    "arch": "control",
    "catLabel": "Media & Utilities"
  },
  {
    "id": "rating-stars",
    "idx": "GRP-82",
    "name": "Precision Star Ratings & Review Ranks",
    "cat": "media",
    "prefix": "RAT",
    "desc": "5-star precision rating tracks, fractional star fills, numeric scores, and review pips.",
    "arch": "linear",
    "catLabel": "Media & Utilities"
  },
  {
    "id": "media-scrubbers",
    "idx": "GRP-83",
    "name": "Media Player Scrubber Rails & Playheads",
    "cat": "media",
    "prefix": "SCR",
    "desc": "Video/audio player progress rails, elapsed/remaining timecodes, buffer bars, and thumbs.",
    "arch": "linear",
    "catLabel": "Media & Utilities"
  },
  {
    "id": "barcode-qr",
    "idx": "GRP-84",
    "name": "QR Code Matrix Frames & Technical Barcodes",
    "cat": "media",
    "prefix": "QRC",
    "desc": "Wireframe QR code matrix frames, corner finder targets, vertical barcodes, and laser scan.",
    "arch": "surface",
    "catLabel": "Media & Utilities"
  }
];

GROUPS.forEach(g => {
  g.count = 210;
  g.families = SUB_FAMILIES;
});

/* ----------------------------------------------------------------------------
   THUMBNAIL RENDERERS FOR HOMEPAGE (All 84 Groups Animated & Interactive)
   -------------------------------------------------------------------------- */
function renderThumbnail(groupId, pct) {
  const p = pct === undefined ? 68 : pct;
  const grp = GROUPS.find(g => g.id === groupId);
  if (!grp) return '<div class="ha-thumb-ph">404</div>';

  // Group 1: Semi-Circular Indicator
  if (groupId === 'semi-circle-indicator') {
    const rot = -90 + p * 1.8;
    return `<div class="sc-ind" style="--p:${p};--rot:${rot}deg;max-width:140px;">
      <svg viewBox="0 0 100 58">
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
  }

  // Group 2: Circular Gauges
  if (groupId === 'circular-gauges') {
    const circ = 238.76;
    const off = circ * (1 - p / 100);
    const rot = (p * 3.6) - 90;
    return `<svg class="ha-thumb-svg" viewBox="0 0 100 100" width="80" height="80">
      <circle cx="50" cy="50" r="38" fill="none" stroke="var(--track)" stroke-width="3"/>
      <circle cx="50" cy="50" r="38" fill="none" stroke="var(--ink)" stroke-width="3.2" stroke-linecap="round"
              stroke-dasharray="${circ}" stroke-dashoffset="${off}" transform="rotate(-90 50 50)"/>
      <g transform="translate(50,50) rotate(${rot})">
        <line x1="0" y1="0" x2="34" y2="0" stroke="var(--ink)" stroke-width="1.5"/>
        <circle cx="0" cy="0" r="3" fill="var(--ink)"/>
      </g>
      <text x="50" y="54" text-anchor="middle" font-size="10" fill="var(--ink)" font-family="ui-monospace">${Math.round(p)}%</text>
    </svg>`;
  }

  // Group 3: Linear Progress
  if (groupId === 'linear-progress') {
    return `<div style="width:130px;display:flex;flex-direction:column;gap:7px;">
      <div style="display:flex;justify-content:space-between;font-size:9.5px;color:var(--ink3);">
        <span>PROGRESS</span><span>${Math.round(p)}%</span>
      </div>
      <div style="height:6px;border-radius:999px;background:var(--track);overflow:hidden;position:relative;">
        <div style="width:${p}%;height:100%;background:var(--ink);border-radius:999px;transition:width .4s ease;"></div>
      </div>
    </div>`;
  }

  // Group 4: Step Progress
  if (groupId === 'step-progress') {
    return `<div style="display:flex;align-items:center;gap:6px;width:140px;justify-content:center;">
      <div style="width:18px;height:18px;border-radius:50%;background:var(--ink);color:var(--sc-bg);display:grid;place-items:center;font-size:9px;font-weight:bold;">✓</div>
      <div style="flex:1;height:2px;background:var(--ink);"></div>
      <div style="width:18px;height:18px;border-radius:50%;background:var(--ink);color:var(--sc-bg);display:grid;place-items:center;font-size:9px;font-weight:bold;">2</div>
      <div style="flex:1;height:2px;background:var(--track);"></div>
      <div style="width:18px;height:18px;border-radius:50%;border:1px solid var(--line2);display:grid;place-items:center;font-size:9px;color:var(--ink3);">3</div>
    </div>`;
  }

  // Group 5: Segmented Meters
  if (groupId === 'segmented-meters') {
    const bars = [1,2,3,4,5,6,7,8,9,10].map(i => {
      const active = i <= (p / 10);
      return `<div style="flex:1;height:${8 + i * 1.5}px;background:${active ? 'var(--ink)' : 'var(--track)'};border-radius:1px;"></div>`;
    }).join('');
    return `<div style="display:flex;align-items:flex-end;gap:3px;width:120px;height:32px;">${bars}</div>`;
  }

  // Group 6: Battery Indicators
  if (groupId === 'battery-indicators') {
    return `<div style="display:flex;align-items:center;gap:3px;">
      <div style="width:68px;height:32px;border:2px solid var(--ink);border-radius:6px;padding:3px;display:flex;gap:2px;">
        <div style="width:${Math.max(4, p * 0.58)}px;height:100%;background:var(--ink);border-radius:2px;"></div>
      </div>
      <div style="width:4px;height:12px;background:var(--ink);border-radius:0 2px 2px 0;"></div>
    </div>`;
  }

  // Group 7: Signal Meters
  if (groupId === 'signal-meters') {
    const bars = [1,2,3,4,5].map(i => {
      const lit = i <= (p / 20);
      return `<div style="width:7px;height:${i * 6}px;background:${lit ? 'var(--ink)' : 'var(--track)'};border-radius:2px 2px 0 0;"></div>`;
    }).join('');
    return `<div style="display:flex;align-items:flex-end;gap:4px;height:36px;">${bars}</div>`;
  }

  // Group 8: Speedometer
  if (groupId === 'speedometer-gauges') {
    const rot = -120 + (p * 2.4);
    return `<svg viewBox="0 0 100 80" width="90" height="72">
      <path d="M 18 64 A 38 38 0 1 1 82 64" fill="none" stroke="var(--track)" stroke-width="3.5" stroke-linecap="round"/>
      <path d="M 18 64 A 38 38 0 1 1 82 64" fill="none" stroke="var(--ink)" stroke-width="3.5" stroke-linecap="round"
            stroke-dasharray="190" stroke-dashoffset="${190 * (1 - p / 100)}"/>
      <g transform="translate(50,50) rotate(${rot})">
        <line x1="0" y1="0" x2="28" y2="0" stroke="var(--ink)" stroke-width="1.8"/>
        <circle cx="0" cy="0" r="3" fill="var(--ink)"/>
      </g>
    </svg>`;
  }

  // Group 9: Compass Rings
  if (groupId === 'compass-rings') {
    return `<svg viewBox="0 0 100 100" width="76" height="76" style="animation:haSpin 16s linear infinite">
      <circle cx="50" cy="50" r="42" fill="none" stroke="var(--line2)" stroke-width="1"/>
      <circle cx="50" cy="50" r="36" fill="none" stroke="var(--track)" stroke-width="1.5" stroke-dasharray="2 4"/>
      <polygon points="50,14 54,46 50,42 46,46" fill="var(--ink)"/>
      <polygon points="50,86 54,54 50,58 46,54" fill="var(--ink3)"/>
      <polygon points="14,50 46,54 42,50 46,46" fill="var(--ink3)"/>
      <polygon points="86,50 54,54 58,50 54,46" fill="var(--ink3)"/>
      <circle cx="50" cy="50" r="3" fill="var(--ink)"/>
    </svg>`;
  }

  // Group 10: Altimeter Scales
  if (groupId === 'altimeter-scales') {
    return `<svg viewBox="0 0 60 90" width="54" height="80">
      <rect x="18" y="10" width="24" height="70" fill="var(--panel)" stroke="var(--line2)" rx="3"/>
      <line x1="22" y1="20" x2="38" y2="20" stroke="var(--line2)" stroke-width="1"/>
      <line x1="25" y1="35" x2="35" y2="35" stroke="var(--line2)" stroke-width="1"/>
      <line x1="22" y1="50" x2="38" y2="50" stroke="var(--line2)" stroke-width="1"/>
      <line x1="25" y1="65" x2="35" y2="65" stroke="var(--line2)" stroke-width="1"/>
      <line x1="22" y1="80" x2="38" y2="80" stroke="var(--line2)" stroke-width="1"/>
      <polygon points="46,${70 - p * 0.5} 54,${65 - p * 0.5} 54,${75 - p * 0.5}" fill="var(--ink)"/>
      <text x="30" y="${73 - p * 0.5}" font-size="7" fill="var(--ink)" font-family="ui-monospace" text-anchor="middle">${Math.round(p * 10)}</text>
    </svg>`;
  }

  // Group 11: Rotary Knobs
  if (groupId === 'rotary-knobs') {
    const deg = (p * 2.8) - 140;
    return `<svg viewBox="0 0 100 100" width="76" height="76">
      <circle cx="50" cy="50" r="40" fill="none" stroke="var(--line2)" stroke-width="1" stroke-dasharray="3 4"/>
      <circle cx="50" cy="50" r="32" fill="var(--panel2)" stroke="var(--line)" stroke-width="1.5"/>
      <g transform="translate(50,50) rotate(${deg})">
        <line x1="0" y1="-28" x2="0" y2="-16" stroke="var(--ink)" stroke-width="2.5" stroke-linecap="round"/>
        <circle cx="0" cy="0" r="4" fill="var(--ink)"/>
      </g>
    </svg>`;
  }

  // Group 12: Toggle Switches
  if (groupId === 'toggle-switches') {
    const on = p > 50;
    return `<div style="width:58px;height:30px;background:${on ? 'var(--ink)' : 'var(--panel2)'};border:1px solid var(--line2);border-radius:999px;position:relative;display:flex;align-items:center;padding:3px;transition:.3s;">
      <div style="width:22px;height:22px;border-radius:50%;background:${on ? 'var(--sc-bg)' : 'var(--ink)'};transform:translateX(${on ? '28px' : '0'});transition:.25s;box-shadow:0 2px 6px rgba(0,0,0,.4);"></div>
    </div>`;
  }

  // Group 13: Range Sliders
  if (groupId === 'range-sliders') {
    return `<div style="width:130px;position:relative;height:24px;display:flex;align-items:center;">
      <div style="width:100%;height:3px;background:var(--track);border-radius:2px;"></div>
      <div style="position:absolute;left:0;width:${p}%;height:3px;background:var(--ink);border-radius:2px;"></div>
      <div style="position:absolute;left:calc(${p}% - 8px);width:16px;height:16px;border-radius:50%;background:var(--ink);box-shadow:0 2px 8px rgba(0,0,0,.6);"></div>
    </div>`;
  }

  // Group 14: Push Buttons
  if (groupId === 'push-buttons') {
    return `<button class="btn sm" style="border-radius:8px;padding:7px 16px;letter-spacing:.12em;display:flex;align-items:center;gap:7px;">
      <span style="width:6px;height:6px;border-radius:50%;background:var(--ink);box-shadow:0 0 6px var(--ink);"></span>
      TRIGGER
    </button>`;
  }

  // Group 15: Segmented Controls
  if (groupId === 'segmented-controls') {
    return `<div style="display:flex;background:var(--panel2);border:1px solid var(--line);border-radius:7px;padding:2px;width:136px;">
      <div style="flex:1;padding:4px 0;text-align:center;font-size:9.5px;border-radius:5px;background:var(--ink);color:var(--sc-bg);font-weight:600;">OPT A</div>
      <div style="flex:1;padding:4px 0;text-align:center;font-size:9.5px;color:var(--ink3);">OPT B</div>
      <div style="flex:1;padding:4px 0;text-align:center;font-size:9.5px;color:var(--ink3);">OPT C</div>
    </div>`;
  }

  // Group 16: Radio Selectors
  if (groupId === 'radio-selectors') {
    return `<div style="display:flex;align-items:center;gap:8px;">
      <div style="width:20px;height:20px;border-radius:50%;border:1.5px solid var(--ink);display:grid;place-items:center;">
        <div style="width:8px;height:8px;border-radius:50%;background:var(--ink);"></div>
      </div>
      <span style="font-size:11px;color:var(--ink2);">ACTIVE DISC</span>
    </div>`;
  }

  // Group 17: Checkboxes
  if (groupId === 'checkbox-states') {
    return `<div style="display:flex;align-items:center;gap:8px;">
      <div style="width:20px;height:20px;border-radius:5px;border:1.5px solid var(--ink);background:var(--ink);color:var(--sc-bg);display:grid;place-items:center;font-weight:bold;font-size:12px;">✓</div>
      <span style="font-size:11px;color:var(--ink2);">ENABLED</span>
    </div>`;
  }

  // Group 18: Icon Buttons
  if (groupId === 'icon-buttons') {
    return `<div style="width:36px;height:36px;border-radius:10px;border:1px solid var(--line2);background:var(--panel2);display:grid;place-items:center;">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v10M7 12h10"/></svg>
    </div>`;
  }

  // Group 19: Split Buttons
  if (groupId === 'split-buttons') {
    return `<div style="display:inline-flex;border:1px solid var(--line2);border-radius:7px;overflow:hidden;background:var(--panel2);">
      <div style="padding:6px 12px;font-size:10px;font-weight:600;border-right:1px solid var(--line);">ACTION</div>
      <div style="padding:6px 9px;display:grid;place-items:center;">▼</div>
    </div>`;
  }

  // Group 20: Volume Faders
  if (groupId === 'volume-faders') {
    return `<div style="height:64px;width:24px;position:relative;display:flex;justify-content:center;">
      <div style="width:3px;height:100%;background:var(--track);border-radius:2px;"></div>
      <div style="position:absolute;top:calc(${100 - p}% - 8px);width:22px;height:12px;border-radius:3px;background:var(--ink);border:1px solid var(--ink2);"></div>
    </div>`;
  }

  // Group 21: Audio Equalizers
  if (groupId === 'audio-equalizer') {
    const eqBars = [0.4, 0.9, 0.6, 1.0, 0.7, 0.3, 0.8, 0.5].map((h, i) =>
      `<div style="width:4px;height:${Math.round(h * 32)}px;background:var(--ink);border-radius:1px;animation:haPulse ${1 + i*0.15}s ease-in-out infinite alternate;"></div>`
    ).join('');
    return `<div style="display:flex;align-items:flex-end;gap:4px;height:34px;">${eqBars}</div>`;
  }

  // Group 22: Waveform Monitors
  if (groupId === 'waveform-monitors') {
    const wBars = [2, 6, 14, 22, 10, 26, 18, 12, 28, 16, 8, 20, 10, 4].map((h) =>
      `<div style="width:2.5px;height:${h}px;background:var(--ink);border-radius:1px;"></div>`
    ).join('');
    return `<div style="display:flex;align-items:center;gap:3px;height:36px;">${wBars}</div>`;
  }

  // Group 23: Oscilloscope Traces
  if (groupId === 'oscilloscope-traces') {
    return `<svg viewBox="0 0 120 60" width="110" height="55">
      <rect width="120" height="60" fill="var(--panel2)" stroke="var(--line)" rx="4"/>
      <line x1="0" y1="30" x2="120" y2="30" stroke="var(--line)" stroke-width="0.8"/>
      <path d="M 10 30 Q 25 5 40 30 T 70 30 T 100 30" fill="none" stroke="var(--ink)" stroke-width="1.8"/>
    </svg>`;
  }

  // Group 24: VU Meters
  if (groupId === 'vu-meters') {
    return `<svg viewBox="0 0 100 60" width="90" height="54">
      <rect width="100" height="60" fill="var(--panel2)" stroke="var(--line2)" rx="4"/>
      <path d="M 20 48 A 45 45 0 0 1 80 48" fill="none" stroke="var(--track)" stroke-width="1.5"/>
      <line x1="50" y1="56" x2="${40 + p * 0.2}" y2="20" stroke="var(--ink)" stroke-width="1.5"/>
      <text x="50" y="44" font-size="7" fill="var(--ink3)" text-anchor="middle">VU DECIBELS</text>
    </svg>`;
  }

  // Group 27: Radar Sweeps
  if (groupId === 'radar-sweeps') {
    return `<svg viewBox="0 0 100 100" width="76" height="76">
      <circle cx="50" cy="50" r="42" fill="none" stroke="var(--line2)" stroke-width="1"/>
      <circle cx="50" cy="50" r="28" fill="none" stroke="var(--line)" stroke-width="0.8"/>
      <line x1="50" y1="8" x2="50" y2="92" stroke="var(--line)" stroke-width="0.8"/>
      <line x1="8" y1="50" x2="92" y2="50" stroke="var(--line)" stroke-width="0.8"/>
      <g transform="translate(50,50)" style="animation:haSpin 3s linear infinite;">
        <path d="M 0 0 L 42 0 A 42 42 0 0 0 0 -42 Z" fill="var(--ink)" opacity=".18"/>
        <line x1="0" y1="0" x2="42" y2="0" stroke="var(--ink)" stroke-width="1.5"/>
      </g>
      <circle cx="68" cy="36" r="2.5" fill="var(--ink)" style="animation:haPulse 1.2s infinite;"/>
    </svg>`;
  }

  // Group 28: Crosshair Reticles
  if (groupId === 'crosshair-reticles') {
    return `<svg viewBox="0 0 100 100" width="76" height="76">
      <circle cx="50" cy="50" r="36" fill="none" stroke="var(--ink)" stroke-width="1" stroke-dasharray="8 6"/>
      <line x1="50" y1="10" x2="50" y2="30" stroke="var(--ink)" stroke-width="1.5"/>
      <line x1="50" y1="70" x2="50" y2="90" stroke="var(--ink)" stroke-width="1.5"/>
      <line x1="10" y1="50" x2="30" y2="50" stroke="var(--ink)" stroke-width="1.5"/>
      <line x1="70" y1="50" x2="90" y2="50" stroke="var(--ink)" stroke-width="1.5"/>
      <circle cx="50" cy="50" r="2" fill="var(--ink)"/>
    </svg>`;
  }

  // Group 31: Loading Spinners
  if (groupId === 'loading-spinners') {
    return `<svg viewBox="0 0 60 60" width="48" height="48" style="animation:haSpin 1.2s linear infinite;">
      <circle cx="30" cy="30" r="22" fill="none" stroke="var(--track)" stroke-width="3"/>
      <circle cx="30" cy="30" r="22" fill="none" stroke="var(--ink)" stroke-width="3" stroke-dasharray="138" stroke-dashoffset="95" stroke-linecap="round"/>
    </svg>`;
  }

  // Group 32: Pulse Beacons
  if (groupId === 'pulse-beacons') {
    return `<svg viewBox="0 0 60 60" width="52" height="52">
      <circle cx="30" cy="30" r="6" fill="var(--ink)"/>
      <circle cx="30" cy="30" r="14" fill="none" stroke="var(--ink)" stroke-width="1" style="animation:haPulse 2s infinite;"/>
      <circle cx="30" cy="30" r="24" fill="none" stroke="var(--ink)" stroke-width="0.8" style="animation:haPulse 2s infinite 0.5s;"/>
    </svg>`;
  }

  // Group 34: Status Pills
  if (groupId === 'status-pills') {
    return `<div style="display:inline-flex;align-items:center;gap:6px;background:var(--panel2);border:1px solid var(--line2);border-radius:999px;padding:5px 12px;font-size:10px;">
      <span style="width:6px;height:6px;border-radius:50%;background:var(--ink);box-shadow:0 0 5px var(--ink);animation:haBreathe 1.5s infinite;"></span>
      <span>SYSTEM OPERATIONAL</span>
    </div>`;
  }

  // Group 36: Glitch Elements
  if (groupId === 'glitch-elements') {
    return `<div style="font-size:13px;font-weight:700;letter-spacing:.25em;border-left:2px solid var(--ink);padding-left:8px;animation:haGlitch 2s infinite;">
      SIGNAL // 01
    </div>`;
  }

  // Group 37: Matrix Streams
  if (groupId === 'matrix-streams') {
    return `<div style="font-family:ui-monospace;font-size:8px;line-height:1.2;color:var(--ink);opacity:.8;text-align:center;">
      10110010<br>01011101<br>11001010<br>00101100
    </div>`;
  }

  // Group 41: Breadcrumbs
  if (groupId === 'breadcrumb-navs') {
    return `<div style="display:flex;align-items:center;gap:6px;font-size:9.5px;color:var(--ink3);">
      <span>HOME</span><span>/</span><span>CORE</span><span>/</span><span style="color:var(--ink);font-weight:600;">STAGE</span>
    </div>`;
  }

  // Group 51: Sparklines
  if (groupId === 'sparkline-charts') {
    return `<svg viewBox="0 0 100 40" width="100" height="40">
      <path d="M 5 30 Q 25 10 45 25 T 85 8 T 95 14" fill="none" stroke="var(--ink)" stroke-width="2"/>
      <circle cx="95" cy="14" r="3" fill="var(--ink)"/>
    </svg>`;
  }

  // Group 55: KPI Cards
  if (groupId === 'kpi-metric-cards') {
    return `<div style="background:var(--panel2);border:1px solid var(--line);border-radius:8px;padding:10px 14px;width:120px;">
      <div style="font-size:8.5px;color:var(--ink3);letter-spacing:.1em;">UTILISATION</div>
      <div style="font-size:18px;font-weight:bold;color:var(--ink);">${Math.round(p)}%</div>
      <div style="font-size:8px;color:var(--ink2);">+12.4% vs last cycle</div>
    </div>`;
  }

  // Group 71: HUD Panels
  if (groupId === 'hud-panels') {
    return `<div style="border:1px solid var(--line2);padding:10px 14px;position:relative;width:120px;font-size:9px;background:var(--panel2);">
      <div style="position:absolute;top:-2px;left:-2px;width:6px;height:6px;border-top:2px solid var(--ink);border-left:2px solid var(--ink);"></div>
      <div style="position:absolute;bottom:-2px;right:-2px;width:6px;height:6px;border-bottom:2px solid var(--ink);border-right:2px solid var(--ink);"></div>
      <span style="letter-spacing:.14em;color:var(--ink);">HUD MODULE</span>
    </div>`;
  }

  // Group 79: Terminal Windows
  if (groupId === 'terminal-windows') {
    return `<div style="width:130px;border:1px solid var(--line);border-radius:6px;background:var(--panel2);overflow:hidden;">
      <div style="display:flex;gap:4px;padding:5px 7px;background:var(--line);">
        <span style="width:5px;height:5px;border-radius:50%;background:var(--ink3);"></span>
        <span style="width:5px;height:5px;border-radius:50%;background:var(--ink3);"></span>
        <span style="width:5px;height:5px;border-radius:50%;background:var(--ink3);"></span>
      </div>
      <div style="padding:6px 8px;font-size:8.5px;color:var(--ink);">$ halfarc --run</div>
    </div>`;
  }

  // Group 84: Barcode QR
  if (groupId === 'barcode-qr') {
    return `<div style="width:48px;height:48px;border:1.5px solid var(--ink);border-radius:6px;padding:5px;display:grid;grid-template-columns:repeat(3,1fr);gap:3px;">
      <div style="background:var(--ink);border-radius:1px;"></div>
      <div style="background:none;"></div>
      <div style="background:var(--ink);border-radius:1px;"></div>
      <div style="background:none;"></div>
      <div style="background:var(--ink);border-radius:1px;"></div>
      <div style="background:none;"></div>
      <div style="background:var(--ink);border-radius:1px;"></div>
      <div style="background:none;"></div>
      <div style="background:var(--ink);border-radius:1px;"></div>
    </div>`;
  }

  // Default elegant archetype preview fallback
  const rot = -90 + p * 1.8;
  return `<svg viewBox="0 0 100 60" width="80" height="48">
    <circle cx="50" cy="30" r="22" fill="none" stroke="var(--line2)" stroke-width="1.5"/>
    <circle cx="50" cy="30" r="14" fill="none" stroke="var(--ink)" stroke-width="2" stroke-dasharray="88" stroke-dashoffset="${88 * (1 - p / 100)}"/>
    <circle cx="50" cy="30" r="3" fill="var(--ink)"/>
  </svg>`;
}

/* ----------------------------------------------------------------------------
   MASTER VARIANT GENERATOR (Deterministic 210 Animated Variants Per Group)
   -------------------------------------------------------------------------- */
function getVariant(groupId, variantIndex, pct) {
  const p = pct === undefined ? 68 : pct;
  const grp = GROUPS.find(g => g.id === groupId) || GROUPS[0];

  // Group 1: Signature Semi-Circular Indicators (Delegate to engine.js & specs.js)
  if (groupId === 'semi-circle-indicator' && window.SC && window.SC.SPECS) {
    const spec = window.SC.SPECS[variantIndex % window.SC.SPECS.length];
    const fam = window.SC.FAMILIES.find(f => f.id === spec.f) || { label: 'Indicator', note: '' };
    const uid = 'v' + String(variantIndex + 1).padStart(3, '0');
    const cls = 'v-' + String(variantIndex + 1).padStart(3, '0');
    const built = window.SC.BUILDERS[spec.f](spec.o, { cls, uid, pct: p });
    
    const snippet = `<!-- V-${String(variantIndex + 1).padStart(3, '0')} · ${spec.n} — from HALFARC -->
<!-- Drive by modifying --p on .sc-ind (0 to 100). Zero JS dependencies. -->
${built.html}

<style>
${SHARED_BASE_CSS}
${built.css}
</style>`;

    const fullFile = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${spec.n} — HALFARC</title>
<style>
body{margin:0;min-height:100vh;display:grid;place-items:center;background:#0a0a0a;font-family:ui-monospace,monospace;}
.box{width:min(420px,90vw);}
${SHARED_BASE_CSS}
${built.css}
</style>
</head>
<body>
<div class="box">${built.html}</div>
</body>
</html>`;

    return {
      idx: variantIndex + 1,
      id: 'V-' + String(variantIndex + 1).padStart(3, '0'),
      name: spec.n,
      fam: fam.label,
      desc: spec.d,
      html: built.html,
      css: built.css,
      snippet,
      fullFile,
      demoPct: p
    };
  }

  // Groups 2 through 84: Procedural Monochrome Component Engines
  const famIdx = Math.floor(variantIndex / 14) % SUB_FAMILIES.length;
  const varIdx = variantIndex % VARIANT_ARCHETYPES.length;
  const famName = SUB_FAMILIES[famIdx];
  const archName = VARIANT_ARCHETYPES[varIdx];
  const varId = `${grp.prefix}-${String(variantIndex + 1).padStart(3, '0')}`;
  const varName = `${grp.name.split(' ')[0]} ${famName} ${archName}`;
  const varCls = `ha-${grp.prefix.toLowerCase()}-${String(variantIndex + 1).padStart(3, '0')}`;

  let compHtml = '';
  let compCss = '';

  // ARCHETYPE: RADIAL (Circles, dials, knobs, radars, tachometers)
  if (grp.arch === 'radial') {
    const r = 36 - (famIdx % 3) * 4;
    const circ = (2 * Math.PI * r).toFixed(2);
    const off = (circ * (1 - p / 100)).toFixed(2);
    const rot = (p * 3.6) - 90;
    const strokeW = 1.4 + (varIdx % 4) * 1.2;

    compHtml = `<div class="ha-comp ${varCls}" style="--p:${p}">
      <svg viewBox="0 0 100 100" width="120" height="120">
        <circle cx="50" cy="50" r="${r}" fill="none" stroke="var(--track)" stroke-width="${strokeW}"/>
        <circle class="active-arc" cx="50" cy="50" r="${r}" fill="none" stroke="var(--ink)" stroke-width="${strokeW + 0.4}"
                stroke-dasharray="${circ}" stroke-dashoffset="${off}" stroke-linecap="round" transform="rotate(-90 50 50)"/>
        <g class="head" transform="translate(50,50) rotate(${rot})">
          <line x1="0" y1="0" x2="${r - 2}" y2="0" stroke="var(--ink)" stroke-width="1.6"/>
          <circle cx="0" cy="0" r="3" fill="var(--ink)"/>
        </g>
        <text x="50" y="54" text-anchor="middle" font-size="11" fill="var(--ink)">${Math.round(p)}%</text>
      </svg>
    </div>`;

    compCss = `.${varCls} .active-arc {
      transition: stroke-dashoffset .8s cubic-bezier(.16,1,.3,1);
    }
    .${varCls} .head {
      transition: transform .8s cubic-bezier(.16,1,.3,1);
    }`;
  }
  // ARCHETYPE: LINEAR (Progress, bars, meters, steppers)
  else if (grp.arch === 'linear') {
    const h = 4 + (famIdx % 4) * 3;
    const r = varIdx % 2 === 0 ? 999 : 2;
    compHtml = `<div class="ha-comp ${varCls}" style="--p:${p};width:100%;max-width:240px;padding:12px;">
      <div style="width:100%;display:flex;justify-content:space-between;margin-bottom:8px;font-size:10px;letter-spacing:.08em;color:var(--ink3);">
        <span>${grp.name.toUpperCase()}</span>
        <span style="color:var(--ink);">${Math.round(p)}%</span>
      </div>
      <div style="width:100%;height:${h}px;border-radius:${r}px;background:var(--track);overflow:hidden;position:relative;">
        <div class="fill-bar" style="width:${p}%;height:100%;background:var(--ink);border-radius:${r}px;"></div>
      </div>
    </div>`;

    compCss = `.${varCls} .fill-bar {
      transition: width .7s cubic-bezier(.16,1,.3,1);
    }`;
  }
  // ARCHETYPE: AUDIO & WAVEFORMS
  else if (grp.arch === 'audio') {
    const count = 12;
    const barsHtml = Array.from({length: count}).map((_, i) => {
      const h = Math.max(4, Math.round(Math.sin((i / count) * Math.PI) * 36 * (p / 100)));
      return `<div style="flex:1;height:${h}px;background:var(--ink);border-radius:1px;animation:haPulse ${1 + (i%5)*0.2}s infinite alternate;"></div>`;
    }).join('');

    compHtml = `<div class="ha-comp ${varCls}" style="--p:${p};width:100%;max-width:200px;">
      <div style="display:flex;align-items:flex-end;gap:4px;width:100%;height:44px;padding:6px 0;">
        ${barsHtml}
      </div>
      <div style="font-size:9.5px;color:var(--ink3);margin-top:6px;letter-spacing:.12em;">SPECTRAL // ${Math.round(p * 0.44)} kHz</div>
    </div>`;

    compCss = `.${varCls} { isolation: isolate; }`;
  }
  // ARCHETYPE: CONTROLS & TOGGLES
  else if (grp.arch === 'control') {
    const on = p > 50;
    compHtml = `<div class="ha-comp ${varCls}" style="--p:${p}">
      <div style="display:flex;align-items:center;gap:12px;background:var(--panel2);border:1px solid var(--line2);border-radius:12px;padding:10px 18px;">
        <div style="width:48px;height:26px;background:${on ? 'var(--ink)' : 'var(--panel)'};border:1px solid var(--line);border-radius:999px;position:relative;display:flex;align-items:center;padding:2px;transition:.25s;">
          <div style="width:20px;height:20px;border-radius:50%;background:${on ? 'var(--sc-bg)' : 'var(--ink)'};transform:translateX(${on ? '22px' : '0'});transition:.25s;"></div>
        </div>
        <div style="font-size:11px;font-weight:600;color:var(--ink);letter-spacing:.08em;">${on ? 'ACTIVE' : 'STANDBY'}</div>
      </div>
    </div>`;

    compCss = `.${varCls} { user-select: none; }`;
  }
  // ARCHETYPE: SURFACES & HUD PANELS
  else {
    compHtml = `<div class="ha-comp ${varCls}" style="--p:${p};width:100%;max-width:240px;">
      <div style="width:100%;background:var(--panel2);border:1px solid var(--line2);border-radius:8px;padding:12px;position:relative;">
        <div style="position:absolute;top:-1px;left:10px;padding:0 6px;background:var(--sc-bg);font-size:8.5px;letter-spacing:.14em;color:var(--ink3);">
          ${grp.prefix} // ${famName.toUpperCase()}
        </div>
        <div style="font-size:18px;font-weight:700;color:var(--ink);margin-top:4px;">${Math.round(p)}%</div>
        <div style="font-size:9.5px;color:var(--ink3);margin-top:4px;letter-spacing:.04em;">${grp.desc}</div>
      </div>
    </div>`;

    compCss = `.${varCls} { isolation: isolate; }`;
  }

  const snippet = `<!-- ${varId} · ${varName} -->
<!-- From HALFARC monochrome UI component catalogue (Group: ${grp.name}) -->
${compHtml}

<style>
${SHARED_BASE_CSS}
${compCss}
</style>`;

  const fullFile = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${varId} · ${varName} — HALFARC</title>
<style>
body{margin:0;min-height:100vh;display:grid;place-items:center;background:#0a0a0a;font-family:ui-monospace,monospace;}
.stage{width:min(440px,92vw);padding:24px;}
${SHARED_BASE_CSS}
${compCss}
</style>
</head>
<body>
<div class="stage">
  ${compHtml}
</div>
</body>
</html>`;

  return {
    idx: variantIndex + 1,
    id: varId,
    name: varName,
    fam: famName,
    desc: `${famName} family with ${archName.toLowerCase()} motion and styling profile in ${grp.name}.`,
    html: compHtml,
    css: compCss,
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
  VARIANT_ARCHETYPES
};

})(typeof window !== 'undefined' ? window : globalThis);
