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
@keyframes haPulse { 0%,100% { opacity: .4; transform: scale(0.98); } 50% { opacity: 1; transform: scale(1); } }
@keyframes haBreathe { 0%,100% { opacity: .7; } 50% { opacity: 1; } }
@keyframes haMarch { to { stroke-dashoffset: -40px; } }
@keyframes haShimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
@keyframes haScan { 0% { transform: translateY(-40px); } 100% { transform: translateY(40px); } }
@keyframes haGlitch { 0%,100% { transform: translate(0); } 20% { transform: translate(-1px, 1px); } 40% { transform: translate(1px, -1px); } 60% { transform: translate(-1px, 0); } }
@keyframes haBounce { 0%,100% { transform: scaleY(0.3); } 50% { transform: scaleY(1); } }
@keyframes haPing { 0% { transform: scale(0.6); opacity: 1; } 100% { transform: scale(1.6); opacity: 0; } }
@keyframes haBlink { 0%,100% { opacity: 1; } 50% { opacity: 0.15; } }
@keyframes haSweep { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
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

  {"id": "audio-equalizer", "idx": "GRP-21", "name": "Audio Equalizer Bars & Band Spectrums", "cat": "audio", "prefix": "AEQ", "desc": "8-band, 16-band, and 32-band equalizer columns bouncing in organic frequency rhythms.", "catLabel": "Audio & Signal"},
  {"id": "waveform-monitors", "idx": "GRP-22", "name": "Audio Waveforms & Track Scanners", "cat": "audio", "prefix": "WAV", "desc": "Symmetrical sound wave envelopes, recorded voiceprints, and scanning playhead needles.", "catLabel": "Audio & Signal"},
  {"id": "oscilloscope-traces", "idx": "GRP-23", "name": "Oscilloscope CRT Traces & Sine Sweeps", "cat": "audio", "prefix": "OSC", "desc": "CRT oscilloscope traces, phosphor sine waves, Lissajous loops, and harmonics.", "catLabel": "Audio & Signal"},
  {"id": "vu-meters", "idx": "GRP-24", "name": "Analog VU Decibel Needles & Grids", "cat": "audio", "prefix": "VUM", "desc": "Vintage galvanometer needles, warm scale backlights, -20dB to +3dB scales, and peak LEDs.", "catLabel": "Audio & Signal"},
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
        <div style="width:${p}%;height:100%;background:var(--ink);border-radius:999px;transition:width .4s ease;"></div>
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
        <div style="width:${p}%;height:100%;background:var(--ink);border-radius:2px;transition:width .3s;"></div>
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
    return `<svg viewBox="0 0 100 100" width="76" height="76" style="display:block;">
      <circle cx="50" cy="50" r="42" fill="none" stroke="var(--line2)" stroke-width="1.5"/>
      <text x="50" y="16" text-anchor="middle" font-size="8" font-weight="700" fill="var(--ink)">N</text>
      <text x="88" y="53" text-anchor="middle" font-size="8" fill="var(--ink3)">E</text>
      <text x="50" y="92" text-anchor="middle" font-size="8" fill="var(--ink3)">S</text>
      <text x="12" y="53" text-anchor="middle" font-size="8" fill="var(--ink3)">W</text>
      <g transform="translate(50,50) rotate(${rot})">
        <polygon points="0,-32 5,0 0,6 -5,0" fill="var(--ink)"/>
        <polygon points="0,32 5,0 0,-6 -5,0" fill="var(--track)"/>
        <circle cx="0" cy="0" r="3" fill="var(--ink)"/>
      </g>
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
    return `<div style="display:flex;border:1px solid var(--line2);border-radius:6px;overflow:hidden;background:var(--panel2);font-size:9.5px;">
      <div style="padding:6px 10px;color:var(--ink);font-weight:bold;border-right:1px solid var(--line);">DEPLOY</div>
      <div style="padding:6px 8px;color:var(--ink3);">▼</div>
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
      <circle cx="45" cy="30" r="3" fill="none" stroke="var(--ink)"/>
      <line x1="25" y1="18" x2="40" y2="18" stroke="var(--line2)"/>
      <line x1="50" y1="18" x2="65" y2="18" stroke="var(--line2)"/>
      <text x="45" y="52" text-anchor="middle" font-size="7" fill="var(--ink)">PITCH 0°</text>
    </svg>`;
  },

  'acoustics-visualizers': (p) => {
    return `<svg viewBox="0 0 80 80" width="68" height="68" style="display:block;">
      <circle cx="40" cy="40" r="8" fill="none" stroke="var(--ink)" stroke-width="1.5"/>
      <circle cx="40" cy="40" r="18" fill="none" stroke="var(--ink)" stroke-width="1.2" stroke-dasharray="4 3"/>
      <circle cx="40" cy="40" r="30" fill="none" stroke="var(--line2)" stroke-width="1" stroke-dasharray="2 4"/>
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
    return `<div style="padding:6px 12px;background:var(--panel2);border:1px solid var(--line2);border-radius:6px;box-shadow:0 3px 8px rgba(0,0,0,.4);font-size:9px;color:var(--ink);display:flex;align-items:center;gap:5px;">
      <span>✓</span> RECORD SAVED
    </div>`;
  },


  'breadcrumb-navs': (p) => {
    return `<div style="display:flex;align-items:center;gap:4px;font-size:9px;color:var(--ink3);">
      <span>HOME</span><span>/</span><span>SYSTEM</span><span>/</span><span style="color:var(--ink);font-weight:bold;">CORE</span>
    </div>`;
  },

  'pagination-bars': (p) => {
    return `<div style="display:flex;gap:3px;align-items:center;font-size:9px;">
      <span style="padding:2px 6px;border:1px solid var(--line);border-radius:3px;color:var(--ink3);">‹</span>
      <span style="padding:2px 6px;background:var(--ink);color:var(--sc-bg);border-radius:3px;font-weight:bold;">1</span>
      <span style="padding:2px 6px;border:1px solid var(--line);border-radius:3px;color:var(--ink3);">2</span>
      <span style="padding:2px 6px;border:1px solid var(--line);border-radius:3px;color:var(--ink3);">›</span>
    </div>`;
  },

  'step-wizards': (p) => {
    return `<div style="display:flex;gap:6px;align-items:center;">
      <div style="width:16px;height:16px;border-radius:50%;background:var(--ink);color:var(--sc-bg);font-size:8px;font-weight:bold;display:grid;place-items:center;">1</div>
      <div style="width:20px;height:2px;background:var(--ink);"></div>
      <div style="width:16px;height:16px;border-radius:50%;border:1px solid var(--ink);color:var(--ink);font-size:8px;display:grid;place-items:center;">2</div>
    </div>`;
  },

  'tab-navigators': (p) => {
    return `<div style="display:flex;border-bottom:1.5px solid var(--track);gap:12px;font-size:9px;padding-bottom:3px;">
      <span style="color:var(--ink);font-weight:bold;border-bottom:2px solid var(--ink);padding-bottom:3px;margin-bottom:-4.5px;">FEED</span>
      <span style="color:var(--ink3);">LOGS</span>
      <span style="color:var(--ink3);">STATS</span>
    </div>`;
  },

  'tree-views': (p) => {
    return `<div style="font-size:9px;color:var(--ink);line-height:1.4;text-align:left;">
      <div>▼ src</div>
      <div style="padding-left:10px;color:var(--ink2);">├ index.ts</div>
      <div style="padding-left:10px;color:var(--ink3);">└ style.css</div>
    </div>`;
  },

  'floating-action-menus': (p) => {
    return `<div style="width:36px;height:36px;border-radius:50%;background:var(--ink);color:var(--sc-bg);display:grid;place-items:center;font-size:16px;box-shadow:0 3px 8px rgba(0,0,0,.4);">
      +
    </div>`;
  },

  'context-menus': (p) => {
    return `<div style="background:var(--panel2);border:1px solid var(--line2);border-radius:5px;padding:4px 8px;font-size:8.5px;color:var(--ink);display:flex;flex-direction:column;gap:3px;">
      <div style="display:flex;justify-content:space-between;gap:8px;"><span>COPY</span><span style="color:var(--ink3);">⌘C</span></div>
      <div style="display:flex;justify-content:space-between;gap:8px;"><span>PASTE</span><span style="color:var(--ink3);">⌘V</span></div>
    </div>`;
  },

  'timeline-nodes': (p) => {
    return `<div style="display:flex;align-items:center;gap:6px;">
      <div style="width:8px;height:8px;border-radius:50%;background:var(--ink);"></div>
      <div style="font-size:8.5px;color:var(--ink);">14:20 // SYNC</div>
    </div>`;
  },

  'accordion-drawers': (p) => {
    return `<div style="width:100%;max-width:120px;border:1px solid var(--line);border-radius:4px;background:var(--panel2);padding:5px 8px;display:flex;justify-content:space-between;font-size:8.5px;color:var(--ink);">
      <span>MODULE DETAILS</span><span>▼</span>
    </div>`;
  },

  'nav-rails': (p) => {
    return `<div style="display:flex;flex-direction:column;gap:5px;padding:6px;background:var(--panel2);border:1px solid var(--line);border-radius:6px;">
      <div style="width:12px;height:12px;background:var(--ink);border-radius:2px;"></div>
      <div style="width:12px;height:12px;background:var(--track);border-radius:2px;"></div>
      <div style="width:12px;height:12px;background:var(--track);border-radius:2px;"></div>
    </div>`;
  },


  'sparkline-charts': (p) => {
    return `<svg viewBox="0 0 100 40" width="80" height="32" style="display:block;">
      <path d="M 5 32 L 25 24 L 45 28 L 65 12 L 85 18 L 95 6" fill="none" stroke="var(--ink)" stroke-width="2"/>
      <circle cx="95" cy="6" r="3" fill="var(--ink)"/>
    </svg>`;
  },

  'mini-bar-charts': (p) => {
    return `<div style="display:flex;align-items:flex-end;gap:3px;height:32px;">
      ${[8, 14, 22, 16, 28, 20, 24].map(h => `
        <div style="width:6px;height:${h}px;background:var(--ink);border-radius:1px;"></div>
      `).join('')}
    </div>`;
  },

  'area-graph-plots': (p) => {
    return `<svg viewBox="0 0 80 45" width="70" height="40" style="display:block;">
      <polygon points="5,40 20,25 40,30 60,12 75,18 75,40" fill="var(--track)"/>
      <polyline points="5,40 20,25 40,30 60,12 75,18" fill="none" stroke="var(--ink)" stroke-width="1.8"/>
    </svg>`;
  },

  'donut-charts': (p) => {
    const circ = 125.6;
    const off = circ * (1 - p / 100);
    return `<svg viewBox="0 0 60 60" width="50" height="50" style="display:block;">
      <circle cx="30" cy="30" r="20" fill="none" stroke="var(--track)" stroke-width="6"/>
      <circle cx="30" cy="30" r="20" fill="none" stroke="var(--ink)" stroke-width="6"
              stroke-dasharray="${circ}" stroke-dashoffset="${off}" transform="rotate(-90 30 30)"/>
    </svg>`;
  },

  'kpi-metric-cards': (p) => {
    return `<div style="padding:6px 10px;background:var(--panel2);border:1px solid var(--line);border-radius:6px;text-align:center;">
      <div style="font-size:7.5px;color:var(--ink3);">LATENCY</div>
      <div style="font-size:14px;font-weight:900;color:var(--ink);">${Math.round(p * 0.8)}ms</div>
    </div>`;
  },

  'heatmap-grids': (p) => {
    return `<div style="display:grid;grid-template-columns:repeat(4,8px);gap:3px;">
      ${[0.2, 0.8, 0.4, 1.0, 0.6, 0.3, 0.9, 0.5, 0.7, 0.2, 0.8, 0.4].map(o => `
        <div style="width:8px;height:8px;background:var(--ink);opacity:${o};border-radius:1px;"></div>
      `).join('')}
    </div>`;
  },

  'scatter-matrices': (p) => {
    return `<svg viewBox="0 0 60 60" width="50" height="50" style="display:block;">
      <line x1="5" y1="55" x2="55" y2="55" stroke="var(--line2)"/>
      <line x1="5" y1="5" x2="5" y2="55" stroke="var(--line2)"/>
      <circle cx="15" cy="40" r="2" fill="var(--ink)"/>
      <circle cx="28" cy="25" r="2.5" fill="var(--ink)"/>
      <circle cx="42" cy="18" r="3" fill="var(--ink)"/>
    </svg>`;
  },

  'candlestick-bars': (p) => {
    return `<svg viewBox="0 0 60 50" width="50" height="42" style="display:block;">
      <line x1="16" y1="5" x2="16" y2="45" stroke="var(--ink3)"/>
      <rect x="12" y="14" width="8" height="18" fill="var(--ink)"/>
      <line x1="36" y1="8" x2="36" y2="42" stroke="var(--ink3)"/>
      <rect x="32" y="18" width="8" height="14" fill="none" stroke="var(--ink)" stroke-width="1.5"/>
    </svg>`;
  },

  'data-tables': (p) => {
    return `<div style="display:flex;flex-direction:column;gap:2px;font-size:8px;color:var(--ink);width:100%;max-width:110px;">
      <div style="display:flex;justify-content:space-between;border-bottom:1px solid var(--line2);padding-bottom:2px;font-weight:bold;">
        <span>ID</span><span>VAL</span>
      </div>
      <div style="display:flex;justify-content:space-between;color:var(--ink3);">
        <span>#01</span><span>${Math.round(p)}</span>
      </div>
    </div>`;
  },

  'diff-viewers': (p) => {
    return `<div style="font-size:8px;font-family:ui-monospace,monospace;line-height:1.3;text-align:left;">
      <div style="color:var(--ink3);">- import old;</div>
      <div style="color:var(--ink);font-weight:bold;">+ import halfarc;</div>
    </div>`;
  },


  'text-inputs': (p) => {
    return `<div style="padding:6px 12px;background:var(--panel2);border:1px solid var(--line2);border-radius:6px;font-size:9.5px;color:var(--ink);display:flex;align-items:center;gap:6px;">
      <span style="color:var(--ink3);">$</span>
      <span>root_query</span>
      <span style="width:2px;height:12px;background:var(--ink);animation:haBlink 1s infinite;"></span>
    </div>`;
  },

  'search-bars': (p) => {
    return `<div style="padding:6px 10px;background:var(--panel2);border:1px solid var(--line2);border-radius:999px;display:flex;align-items:center;gap:6px;font-size:9px;color:var(--ink3);">
      <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      <span>SEARCH...</span>
    </div>`;
  },

  'password-masks': (p) => {
    return `<div style="padding:6px 10px;background:var(--panel2);border:1px solid var(--line2);border-radius:6px;display:flex;gap:4px;align-items:center;">
      ${Array.from({length:6}, () => `<span style="width:6px;height:6px;border-radius:50%;background:var(--ink);"></span>`).join('')}
    </div>`;
  },

  'pin-code-boxes': (p) => {
    return `<div style="display:flex;gap:4px;">
      <div style="width:16px;height:20px;border:1px solid var(--ink);border-radius:3px;display:grid;place-items:center;font-size:10px;font-weight:bold;color:var(--ink);">4</div>
      <div style="width:16px;height:20px;border:1px solid var(--ink);border-radius:3px;display:grid;place-items:center;font-size:10px;font-weight:bold;color:var(--ink);">9</div>
      <div style="width:16px;height:20px;border:1px solid var(--line2);border-radius:3px;"></div>
    </div>`;
  },

  'color-swatches': (p) => {
    return `<div style="display:flex;gap:3px;">
      <div style="width:12px;height:12px;border-radius:50%;background:#ffffff;border:1px solid var(--line);"></div>
      <div style="width:12px;height:12px;border-radius:50%;background:#888888;"></div>
      <div style="width:12px;height:12px;border-radius:50%;background:#222222;border:1.5px solid var(--ink);"></div>
    </div>`;
  },

  'date-pickers': (p) => {
    return `<div style="display:grid;grid-template-columns:repeat(4,8px);gap:3px;padding:4px;background:var(--panel2);border:1px solid var(--line);border-radius:4px;">
      ${Array.from({length:8}, (_,i) => `
        <div style="width:8px;height:8px;border-radius:2px;background:${i === 3 ? 'var(--ink)' : 'var(--line)'};"></div>
      `).join('')}
    </div>`;
  },

  'time-selectors': (p) => {
    return `<div style="padding:4px 8px;background:var(--panel2);border:1px solid var(--line2);border-radius:4px;font-size:10px;font-weight:bold;color:var(--ink);">
      14<span style="animation:haBlink 1s infinite;">:</span>20
    </div>`;
  },

  'file-dropzones': (p) => {
    return `<div style="width:68px;height:40px;border:1.5px dashed var(--line2);border-radius:6px;display:grid;place-items:center;font-size:8px;color:var(--ink3);">
      DROP FILE
    </div>`;
  },

  'tag-inputs': (p) => {
    return `<div style="display:flex;gap:3px;">
      <span style="padding:2px 6px;border-radius:999px;background:var(--ink);color:var(--sc-bg);font-size:8px;font-weight:bold;">CLI</span>
      <span style="padding:2px 6px;border-radius:999px;border:1px solid var(--line2);color:var(--ink);font-size:8px;">+TAG</span>
    </div>`;
  },

  'stepper-inputs': (p) => {
    return `<div style="display:flex;align-items:center;border:1px solid var(--line2);border-radius:4px;background:var(--panel2);font-size:9px;color:var(--ink);">
      <span style="padding:2px 6px;border-right:1px solid var(--line);">-</span>
      <span style="padding:2px 8px;font-weight:bold;">${Math.round(p / 10)}</span>
      <span style="padding:2px 6px;border-left:1px solid var(--line);">+</span>
    </div>`;
  },


  'hud-panels': (p) => {
    return `<div style="width:70px;height:44px;border:1px solid var(--line2);position:relative;background:var(--panel2);display:grid;place-items:center;font-size:8px;color:var(--ink);">
      <div style="position:absolute;top:-2px;left:-2px;width:6px;height:6px;border-top:2px solid var(--ink);border-left:2px solid var(--ink);"></div>
      <div style="position:absolute;bottom:-2px;right:-2px;width:6px;height:6px;border-bottom:2px solid var(--ink);border-right:2px solid var(--ink);"></div>
      HUD 0${Math.round(p % 9)}
    </div>`;
  },

  'card-containers': (p) => {
    return `<div style="width:68px;height:42px;background:var(--panel2);border:1px solid var(--line2);border-radius:6px;padding:4px;box-sizing:border-box;">
      <div style="width:50%;height:4px;background:var(--ink);border-radius:2px;margin-bottom:3px;"></div>
      <div style="width:80%;height:3px;background:var(--track);border-radius:2px;"></div>
    </div>`;
  },

  'tooltip-balloons': (p) => {
    return `<div style="position:relative;display:flex;flex-direction:column;align-items:center;">
      <div style="padding:4px 8px;background:var(--ink);color:var(--sc-bg);border-radius:4px;font-size:8px;font-weight:bold;">INFO</div>
      <div style="width:0;height:0;border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid var(--ink);"></div>
    </div>`;
  },

  'popover-cards': (p) => {
    return `<div style="width:70px;background:var(--panel2);border:1px solid var(--line2);border-radius:4px;padding:4px;box-shadow:0 3px 6px rgba(0,0,0,.4);font-size:8px;color:var(--ink);">
      <div style="font-weight:bold;border-bottom:1px solid var(--line);padding-bottom:2px;">MODAL</div>
      <div style="color:var(--ink3);margin-top:2px;">OK</div>
    </div>`;
  },

  'user-avatars': (p) => {
    return `<div style="position:relative;width:34px;height:34px;border-radius:50%;background:var(--panel2);border:1.5px solid var(--ink);display:grid;place-items:center;font-size:10px;font-weight:bold;color:var(--ink);">
      HA
      <div style="position:absolute;bottom:0;right:0;width:8px;height:8px;border-radius:50%;background:var(--ink);border:1.5px solid var(--panel);"></div>
    </div>`;
  },

  'profile-cards': (p) => {
    return `<div style="display:flex;align-items:center;gap:6px;padding:4px 8px;background:var(--panel2);border:1px solid var(--line);border-radius:6px;">
      <div style="width:18px;height:18px;border-radius:50%;background:var(--ink);color:var(--sc-bg);font-size:8px;font-weight:bold;display:grid;place-items:center;">U</div>
      <div style="font-size:8px;color:var(--ink);">ADMIN</div>
    </div>`;
  },

  'pricing-cards': (p) => {
    return `<div style="padding:6px 10px;background:var(--panel2);border:1px solid var(--line2);border-radius:6px;text-align:center;">
      <div style="font-size:8px;color:var(--ink3);">PRO</div>
      <div style="font-size:12px;font-weight:bold;color:var(--ink);">$${Math.round(p * 0.9)}</div>
    </div>`;
  },

  'feature-lists': (p) => {
    return `<div style="font-size:8px;color:var(--ink);display:flex;flex-direction:column;gap:2px;text-align:left;">
      <div>✓ ZERO DEPS</div>
      <div>✓ MONOCHROME</div>
    </div>`;
  },

  'terminal-windows': (p) => {
    return `<div style="width:100%;max-width:110px;border:1px solid var(--line);border-radius:4px;background:var(--panel2);overflow:hidden;">
      <div style="display:flex;gap:3px;padding:3px 5px;background:var(--line);">
        <span style="width:4px;height:4px;border-radius:50%;background:var(--ink3);"></span>
        <span style="width:4px;height:4px;border-radius:50%;background:var(--ink3);"></span>
        <span style="width:4px;height:4px;border-radius:50%;background:var(--ink3);"></span>
      </div>
      <div style="padding:4px 6px;font-size:7.5px;color:var(--ink);">$ halfarc</div>
    </div>`;
  },

  'code-boxes': (p) => {
    return `<div style="padding:4px 8px;background:var(--panel2);border:1px solid var(--line);border-radius:4px;font-size:8px;font-family:ui-monospace,monospace;color:var(--ink);">
      &lt;div class="ha"&gt;
    </div>`;
  },


  'keybinding-kbd': (p) => {
    return `<div style="display:flex;gap:4px;align-items:center;">
      <kbd style="padding:3px 6px;border-radius:4px;border:1px solid var(--line2);background:var(--panel2);font-size:9px;font-weight:bold;color:var(--ink);">⌘</kbd>
      <span style="font-size:9px;color:var(--ink3);">+</span>
      <kbd style="padding:3px 6px;border-radius:4px;border:1px solid var(--line2);background:var(--panel2);font-size:9px;font-weight:bold;color:var(--ink);">K</kbd>
    </div>`;
  },

  'rating-stars': (p) => {
    const stars = [1,2,3,4,5].map(i => {
      const active = i <= Math.round(p / 20);
      return `<span style="font-size:12px;color:${active ? 'var(--ink)' : 'var(--track)'};">★</span>`;
    }).join('');
    return `<div style="display:flex;gap:2px;">${stars}</div>`;
  },

  'media-scrubbers': (p) => {
    return `<div style="width:100%;max-width:120px;display:flex;flex-direction:column;gap:4px;">
      <div style="height:4px;background:var(--track);border-radius:999px;position:relative;">
        <div style="width:${p}%;height:100%;background:var(--ink);border-radius:999px;"></div>
        <div style="position:absolute;left:${p}%;top:50%;transform:translate(-50%,-50%);width:8px;height:8px;border-radius:50%;background:var(--ink);"></div>
      </div>
      <div style="display:flex;justify-content:space-between;font-size:7.5px;color:var(--ink3);">
        <span>01:24</span><span>03:45</span>
      </div>
    </div>`;
  },

  'barcode-qr': (p) => {
    return `<div style="width:40px;height:40px;border:1.5px solid var(--ink);border-radius:4px;padding:3px;display:grid;grid-template-columns:repeat(3,1fr);gap:2px;position:relative;background:var(--panel2);">
      <div style="background:var(--ink);border-radius:1px;"></div>
      <div style="background:none;"></div>
      <div style="background:var(--ink);border-radius:1px;"></div>
      <div style="background:none;"></div>
      <div style="background:var(--ink);border-radius:1px;"></div>
      <div style="background:none;"></div>
      <div style="background:var(--ink);border-radius:1px;"></div>
      <div style="background:none;"></div>
      <div style="background:var(--ink);border-radius:1px;"></div>
      <div style="position:absolute;left:0;right:0;top:0;height:1.5px;background:var(--ink);box-shadow:0 0 4px var(--ink);animation:haScan 1.6s ease-in-out infinite alternate;"></div>
    </div>`;
  },

};

const COMP_BUILDERS = {

  'semi-circle-indicator': (p, famIdx, varIdx, cls) => {
    const rot = -90 + (p * 1.8);
    const strokeW = 1.4 + (varIdx % 4) * 0.8;
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};--rot:${rot}deg;">
        <svg viewBox="0 0 100 62" width="130" height="80" style="max-width:100%;height:auto;display:block;">
          <path d="M 12 52 A 38 38 0 0 1 88 52" stroke="var(--track)" stroke-width="${strokeW}" fill="none"/>
          <path d="M 12 52 A 38 38 0 0 1 88 52" stroke="var(--ink)" stroke-width="${strokeW + 0.6}" fill="none"
                pathLength="100" stroke-dasharray="100" stroke-dashoffset="${100 - p}" stroke-linecap="round"/>
          <g transform="translate(50,52) rotate(${rot})">
            <line x1="0" y1="0" x2="0" y2="-40" stroke="var(--ink)" stroke-width="1.5"/>
            <circle cx="0" cy="-38" r="2.5" fill="var(--ink)"/>
          </g>
          <circle cx="50" cy="52" r="3" fill="var(--ink)"/>
          <text x="50" y="44" text-anchor="middle" font-size="10" fill="var(--ink)">${Math.round(p)}%</text>
        </svg>
      </div>`,
      css: `.${cls} svg path { transition: stroke-dashoffset .6s cubic-bezier(.16,1,.3,1); }
.${cls} g { transition: transform .6s cubic-bezier(.16,1,.3,1); }`
    };
  },

  'circular-gauges': (p, famIdx, varIdx, cls) => {
    const r = 36 - (famIdx % 3) * 4;
    const circ = +(2 * Math.PI * r).toFixed(2);
    const off = +(circ * (1 - p / 100)).toFixed(2);
    const rot = (p * 3.6) - 90;
    const strokeW = 1.6 + (varIdx % 4) * 0.8;
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};">
        <svg viewBox="0 0 100 100" width="110" height="110" style="display:block;max-width:100%;height:auto;">
          <circle cx="50" cy="50" r="${r}" fill="none" stroke="var(--track)" stroke-width="${strokeW}"/>
          <circle class="ring-arc" cx="50" cy="50" r="${r}" fill="none" stroke="var(--ink)" stroke-width="${strokeW + 0.6}"
                  stroke-dasharray="${circ}" stroke-dashoffset="${off}" stroke-linecap="round" transform="rotate(-90 50 50)"/>
          <g class="gauge-needle" transform="translate(50,50) rotate(${rot})">
            <line x1="0" y1="0" x2="${r - 4}" y2="0" stroke="var(--ink)" stroke-width="1.6"/>
            <circle cx="0" cy="0" r="3" fill="var(--ink)"/>
          </g>
          <text x="50" y="54" text-anchor="middle" font-size="11" fill="var(--ink)">${Math.round(p)}%</text>
        </svg>
      </div>`,
      css: `.${cls} .ring-arc { transition: stroke-dashoffset .8s cubic-bezier(.16,1,.3,1); }
.${cls} .gauge-needle { transition: transform .8s cubic-bezier(.16,1,.3,1); }`
    };
  },

  'linear-progress': (p, famIdx, varIdx, cls) => {
    const h = 4 + (famIdx % 4) * 3;
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};width:100%;max-width:230px;padding:8px 12px;">
        <div style="width:100%;display:flex;justify-content:space-between;margin-bottom:7px;font-size:10px;color:var(--ink3);">
          <span>PROGRESS</span><span style="color:var(--ink);">${Math.round(p)}%</span>
        </div>
        <div style="width:100%;height:${h}px;border-radius:999px;background:var(--track);position:relative;overflow:hidden;">
          <div class="bar-fill" style="width:${p}%;height:100%;background:var(--ink);border-radius:999px;"></div>
        </div>
        <div style="margin-top:6px;font-size:8.5px;color:var(--ink3);display:flex;justify-content:space-between;">
          <span>0%</span><span>CAP: 100%</span>
        </div>
      </div>`,
      css: `.${cls} .bar-fill { transition: width .5s cubic-bezier(.16,1,.3,1); }`
    };
  },

  'step-progress': (p, famIdx, varIdx, cls) => {
    const step = p < 25 ? 1 : p < 50 ? 2 : p < 75 ? 3 : 4;
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};width:100%;max-width:240px;padding:10px 14px;">
        <div style="display:flex;align-items:center;justify-content:space-between;width:100%;position:relative;">
          ${[1,2,3,4].map(n => `
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;z-index:2;">
              <div style="width:22px;height:22px;border-radius:50%;display:grid;place-items:center;font-size:9.5px;font-weight:bold;
                          background:${step >= n ? 'var(--ink)' : 'var(--panel2)'};
                          color:${step >= n ? 'var(--sc-bg)' : 'var(--ink)'};
                          border:1px solid ${step >= n ? 'var(--ink)' : 'var(--line2)'};">
                ${step > n ? '✓' : n}
              </div>
              <span style="font-size:8px;color:${step >= n ? 'var(--ink)' : 'var(--ink3)'};">STP-0${n}</span>
            </div>
          `).join('')}
          <div style="position:absolute;left:14px;right:14px;top:11px;height:2px;background:var(--track);z-index:1;">
            <div style="width:${(step - 1) * 33.3}%;height:100%;background:var(--ink);transition:width .4s ease;"></div>
          </div>
        </div>
      </div>`,
      css: `.${cls} { user-select: none; }`
    };
  },

  'segmented-meters': (p, famIdx, varIdx, cls) => {
    const segs = 12;
    const active = Math.round((p / 100) * segs);
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};">
        <div style="display:flex;gap:3px;align-items:flex-end;height:54px;padding:6px;background:var(--panel2);border:1px solid var(--line);border-radius:6px;">
          ${Array.from({length:segs}, (_, i) => `
            <div style="width:7px;height:${14 + i * 3}px;border-radius:1px;background:${i < active ? 'var(--ink)' : 'var(--track)'};transition:background .2s;"></div>
          `).join('')}
        </div>
        <div style="font-size:9px;color:var(--ink3);margin-top:6px;">DISCRETE PEAK // ${active}/${segs}</div>
      </div>`,
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'battery-indicators': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};">
        <div style="display:flex;align-items:center;gap:3px;">
          <div style="width:72px;height:34px;border:2px solid var(--ink);border-radius:6px;padding:3px;position:relative;background:var(--panel);">
            <div style="width:${p}%;height:100%;background:var(--ink);border-radius:3px;transition:width .4s ease;"></div>
            <div style="position:absolute;inset:0;display:grid;place-items:center;font-size:10.5px;font-weight:bold;color:var(--sc-bg);mix-blend-mode:difference;">
              ${Math.round(p)}%
            </div>
          </div>
          <div style="width:4px;height:14px;background:var(--ink);border-radius:0 3px 3px 0;"></div>
        </div>
        <div style="font-size:8.5px;color:var(--ink3);margin-top:7px;letter-spacing:.06em;">CELL VOLTAGE: 3.84V</div>
      </div>`,
      css: `.${cls} { user-select: none; }`
    };
  },

  'signal-meters': (p, famIdx, varIdx, cls) => {
    const bars = 5;
    const active = Math.round((p / 100) * bars);
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};">
        <div style="display:flex;align-items:flex-end;gap:5px;height:44px;padding:6px;background:var(--panel2);border:1px solid var(--line);border-radius:8px;">
          ${Array.from({length:bars}, (_, i) => `
            <div style="width:8px;height:${10 + i * 7}px;border-radius:2px;background:${i < active ? 'var(--ink)' : 'var(--track)'};"></div>
          `).join('')}
        </div>
        <div style="font-size:9px;color:var(--ink3);margin-top:6px;">SIGNAL: ${active === 5 ? 'EXCELLENT' : active >= 3 ? 'GOOD' : 'WEAK'}</div>
      </div>`,
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'speedometer-gauges': (p, famIdx, varIdx, cls) => {
    const rot = -120 + (p * 2.4);
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};">
        <svg viewBox="0 0 100 80" width="120" height="96" style="display:block;">
          <path d="M 20 70 A 40 40 0 1 1 80 70" fill="none" stroke="var(--track)" stroke-width="4"/>
          <path d="M 20 70 A 40 40 0 1 1 80 70" fill="none" stroke="var(--ink)" stroke-width="4.2"
                pathLength="100" stroke-dasharray="100" stroke-dashoffset="${100 - p}"/>
          <g transform="translate(50,50) rotate(${rot})">
            <line x1="0" y1="0" x2="32" y2="0" stroke="var(--ink)" stroke-width="2"/>
            <circle cx="0" cy="0" r="4" fill="var(--ink)"/>
          </g>
          <text x="50" y="74" text-anchor="middle" font-size="9" fill="var(--ink)">${Math.round(p * 1.6)} KM/H</text>
        </svg>
      </div>`,
      css: `.${cls} g { transition: transform .6s cubic-bezier(.16,1,.3,1); }`
    };
  },

  'compass-rings': (p, famIdx, varIdx, cls) => {
    const rot = p * 3.6;
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};">
        <svg viewBox="0 0 100 100" width="110" height="110" style="display:block;">
          <circle cx="50" cy="50" r="42" fill="none" stroke="var(--line2)" stroke-width="1.5"/>
          <text x="50" y="16" text-anchor="middle" font-size="8.5" font-weight="700" fill="var(--ink)">N</text>
          <text x="88" y="53" text-anchor="middle" font-size="8.5" fill="var(--ink3)">E</text>
          <text x="50" y="92" text-anchor="middle" font-size="8.5" fill="var(--ink3)">S</text>
          <text x="12" y="53" text-anchor="middle" font-size="8.5" fill="var(--ink3)">W</text>
          <g transform="translate(50,50) rotate(${rot})">
            <polygon points="0,-32 5,0 0,6 -5,0" fill="var(--ink)"/>
            <polygon points="0,32 5,0 0,-6 -5,0" fill="var(--track)"/>
            <circle cx="0" cy="0" r="3" fill="var(--ink)"/>
          </g>
        </svg>
        <div style="font-size:9px;color:var(--ink);margin-top:4px;">HEADING: ${Math.round(rot)}°</div>
      </div>`,
      css: `.${cls} g { transition: transform .6s cubic-bezier(.16,1,.3,1); }`
    };
  },

  'altimeter-scales': (p, famIdx, varIdx, cls) => {
    const y = 80 - (p * 0.7);
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};">
        <svg viewBox="0 0 100 90" width="110" height="100" style="display:block;">
          <line x1="45" y1="10" x2="45" y2="80" stroke="var(--line2)" stroke-width="1.5"/>
          ${[10, 24, 38, 52, 66, 80].map(pos => `<line x1="36" y1="${pos}" x2="45" y2="${pos}" stroke="var(--ink3)" stroke-width="1.2"/>`).join('')}
          <polygon points="48,${y} 62,${y - 6} 62,${y + 6}" fill="var(--ink)"/>
          <text x="68" y="${y + 3}" font-size="8.5" font-family="ui-monospace, monospace" fill="var(--ink)">${Math.round(p * 120)} FT</text>
        </svg>
      </div>`,
      css: `.${cls} polygon, .${cls} text { transition: all .4s ease; }`
    };
  },


  'rotary-knobs': (p, famIdx, varIdx, cls) => {
    const rot = -135 + (p * 2.7);
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};">
        <div style="position:relative;width:96px;height:96px;display:grid;place-items:center;">
          <svg viewBox="0 0 100 100" width="96" height="96" style="position:absolute;inset:0;">
            <circle cx="50" cy="50" r="44" fill="none" stroke="var(--line)" stroke-width="2" stroke-dasharray="2 6"/>
          </svg>
          <div class="knob-dial" style="width:72px;height:72px;border-radius:50%;background:var(--panel2);border:2px solid var(--ink);position:relative;transform:rotate(${rot}deg);box-shadow:0 4px 12px rgba(0,0,0,.3);">
            <div style="position:absolute;top:6px;left:50%;transform:translateX(-50%);width:3px;height:14px;background:var(--ink);border-radius:2px;"></div>
          </div>
        </div>
        <div style="font-size:10px;color:var(--ink);margin-top:6px;font-weight:bold;">VAL: ${Math.round(p)}%</div>
      </div>`,
      css: `.${cls} .knob-dial { transition: transform .4s cubic-bezier(.16,1,.3,1); }`
    };
  },

  'toggle-switches': (p, famIdx, varIdx, cls) => {
    const on = p >= 50;
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};">
        <div style="display:flex;align-items:center;gap:12px;padding:8px 16px;background:var(--panel2);border:1px solid var(--line);border-radius:999px;">
          <div style="width:58px;height:30px;border-radius:999px;background:${on ? 'var(--ink)' : 'var(--panel)'};border:2px solid var(--line2);position:relative;padding:3px;box-sizing:border-box;">
            <div style="width:20px;height:20px;border-radius:50%;background:${on ? 'var(--sc-bg)' : 'var(--ink)'};transform:translateX(${on ? '28px' : '0'});transition:transform .3s;"></div>
          </div>
          <span style="font-size:11px;font-weight:bold;color:var(--ink);min-width:32px;">${on ? 'ON' : 'OFF'}</span>
        </div>
      </div>`,
      css: `.${cls} { user-select: none; }`
    };
  },

  'range-sliders': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};width:100%;max-width:240px;padding:12px;">
        <div style="position:relative;width:100%;height:6px;background:var(--track);border-radius:999px;">
          <div style="width:${p}%;height:100%;background:var(--ink);border-radius:999px;"></div>
          <div style="position:absolute;left:${p}%;top:50%;transform:translate(-50%,-50%);width:18px;height:18px;border-radius:50%;background:var(--ink);border:3px solid var(--panel);box-shadow:0 2px 6px rgba(0,0,0,.4);"></div>
        </div>
        <div style="display:flex;justify-content:space-between;margin-top:10px;font-size:9.5px;color:var(--ink3);">
          <span>MIN: 0</span><span style="color:var(--ink);font-weight:bold;">VAL: ${Math.round(p)}</span><span>MAX: 100</span>
        </div>
      </div>`,
      css: `.${cls} { user-select: none; }`
    };
  },

  'push-buttons': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};">
        <button style="padding:10px 22px;border-radius:8px;background:var(--panel2);border:1px solid var(--line2);box-shadow:0 4px 0 var(--line);font-size:11px;font-weight:700;letter-spacing:.12em;color:var(--ink);cursor:pointer;position:relative;">
          <span style="margin-right:8px;display:inline-block;width:6px;height:6px;border-radius:50%;background:var(--ink);"></span>
          EXECUTE // CMD-${Math.round(p)}
        </button>
      </div>`,
      css: `.${cls} button:active { transform: translateY(3px); box-shadow: 0 1px 0 var(--line); }`
    };
  },

  'segmented-controls': (p, famIdx, varIdx, cls) => {
    const sel = p < 25 ? 0 : p < 50 ? 1 : p < 75 ? 2 : 3;
    const tabs = ['RAW', 'LOG', 'TRC', 'HEX'];
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};width:100%;max-width:240px;">
        <div style="display:flex;background:var(--panel2);padding:3px;border-radius:8px;border:1px solid var(--line);width:100%;justify-content:space-between;">
          ${tabs.map((t, i) => `
            <div style="flex:1;text-align:center;padding:6px 0;border-radius:5px;font-size:10px;font-weight:bold;background:${i === sel ? 'var(--ink)' : 'transparent'};color:${i === sel ? 'var(--sc-bg)' : 'var(--ink3)'};">
              ${t}
            </div>
          `).join('')}
        </div>
      </div>`,
      css: `.${cls} { user-select: none; }`
    };
  },

  'radio-selectors': (p, famIdx, varIdx, cls) => {
    const sel = p < 33 ? 0 : p < 66 ? 1 : 2;
    const items = ['NODE_ALPHA', 'NODE_BETA', 'NODE_GAMMA'];
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};">
        <div style="display:flex;flex-direction:column;gap:8px;background:var(--panel2);padding:10px 14px;border-radius:8px;border:1px solid var(--line);">
          ${items.map((it, i) => `
            <div style="display:flex;align-items:center;gap:8px;">
              <div style="width:16px;height:16px;border-radius:50%;border:1.5px solid var(--ink);display:grid;place-items:center;">
                <div style="width:8px;height:8px;border-radius:50%;background:${i === sel ? 'var(--ink)' : 'transparent'};"></div>
              </div>
              <span style="font-size:10.5px;color:${i === sel ? 'var(--ink)' : 'var(--ink3)'};">${it}</span>
            </div>
          `).join('')}
        </div>
      </div>`,
      css: `.${cls} { user-select: none; }`
    };
  },

  'checkbox-states': (p, famIdx, varIdx, cls) => {
    const chk = p >= 50;
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};">
        <div style="display:flex;align-items:center;gap:10px;padding:8px 14px;background:var(--panel2);border:1px solid var(--line);border-radius:6px;">
          <div style="width:20px;height:20px;border-radius:4px;border:2px solid var(--ink);background:${chk ? 'var(--ink)' : 'transparent'};color:var(--sc-bg);display:grid;place-items:center;font-size:12px;font-weight:bold;">
            ${chk ? '✓' : ''}
          </div>
          <div>
            <div style="font-size:11px;font-weight:bold;color:var(--ink);">ALLOW_TELEMETRY</div>
            <div style="font-size:9px;color:var(--ink3);">${chk ? 'STATE: ACTIVE (TRUE)' : 'STATE: DISABLED'}</div>
          </div>
        </div>
      </div>`,
      css: `.${cls} { user-select: none; }`
    };
  },

  'icon-buttons': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};">
        <div style="display:flex;gap:8px;">
          ${[1,2,3].map(n => `
            <div style="width:38px;height:38px;border-radius:8px;border:1px solid var(--line2);background:var(--panel2);display:grid;place-items:center;color:var(--ink);">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <circle cx="12" cy="12" r="${n * 2}"/>
              </svg>
            </div>
          `).join('')}
        </div>
      </div>`,
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'split-buttons': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};">
        <div style="display:flex;border:1px solid var(--line2);border-radius:8px;overflow:hidden;background:var(--panel2);box-shadow:0 3px 0 var(--line);">
          <div style="padding:9px 16px;font-size:11px;font-weight:bold;color:var(--ink);border-right:1px solid var(--line);">TRIGGER ACTION</div>
          <div style="padding:9px 12px;font-size:10px;color:var(--ink3);display:grid;place-items:center;">▼</div>
        </div>
      </div>`,
      css: `.${cls} { user-select: none; }`
    };
  },

  'volume-faders': (p, famIdx, varIdx, cls) => {
    const y = 80 - (p * 0.7);
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};">
        <div style="display:flex;align-items:center;gap:12px;padding:8px 16px;background:var(--panel2);border:1px solid var(--line);border-radius:8px;">
          <div style="width:28px;height:90px;position:relative;display:flex;justify-content:center;">
            <div style="width:4px;height:100%;background:var(--track);border-radius:2px;"></div>
            <div style="position:absolute;top:${y}px;width:26px;height:12px;border-radius:3px;background:var(--ink);border:1px solid var(--line2);box-shadow:0 2px 5px rgba(0,0,0,.6);"></div>
          </div>
          <div style="font-size:10px;color:var(--ink);line-height:1.6;">
            <div style="font-weight:bold;">CH-01</div>
            <div style="color:var(--ink3);">${Math.round(p)}% / ${(p * 0.12 - 6).toFixed(1)} dB</div>
          </div>
        </div>
      </div>`,
      css: `.${cls} { user-select: none; }`
    };
  },


  'audio-equalizer': (p, famIdx, varIdx, cls) => {
    const bars = 12;
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};">
        <div style="display:flex;align-items:flex-end;gap:4px;height:72px;padding:8px 12px;background:var(--panel2);border:1px solid var(--line);border-radius:8px;">
          ${Array.from({length:bars}, (_, i) => {
            const h = 20 + Math.sin(i * 0.8) * 16 + (p * 0.35);
            return `<div style="width:8px;height:${Math.max(6, Math.round(h))}px;background:var(--ink);border-radius:2px;animation:haBounce 1.${2 + (i % 5)}s infinite ease-in-out;"></div>`;
          }).join('')}
        </div>
        <div style="font-size:9px;color:var(--ink3);margin-top:6px;">FFT SPECTRUM // 12-BAND MONO</div>
      </div>`,
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'waveform-monitors': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};width:100%;max-width:240px;">
        <div style="position:relative;background:var(--panel2);border:1px solid var(--line);border-radius:8px;padding:10px;">
          <svg viewBox="0 0 200 60" width="100%" height="60" style="display:block;">
            <line x1="0" y1="30" x2="200" y2="30" stroke="var(--track)"/>
            <path d="M 0 30 Q 25 5 50 30 T 100 30 T 150 30 T 200 30" fill="none" stroke="var(--ink)" stroke-width="2"/>
            <line x1="${p * 2}" y1="0" x2="${p * 2}" y2="60" stroke="var(--ink)" stroke-width="1.8" stroke-dasharray="3 3"/>
          </svg>
          <div style="display:flex;justify-content:space-between;font-size:8.5px;color:var(--ink3);margin-top:6px;">
            <span>00:00</span><span>SCAN // ${Math.round(p)}%</span><span>04:32</span>
          </div>
        </div>
      </div>`,
      css: `.${cls} { user-select: none; }`
    };
  },

  'oscilloscope-traces': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};width:100%;max-width:240px;">
        <div style="background:var(--panel2);border:1px solid var(--line2);border-radius:8px;padding:10px;position:relative;">
          <svg viewBox="0 0 160 80" width="100%" height="80" style="display:block;">
            <defs>
              <pattern id="grid-${cls}" width="16" height="16" patternUnits="userSpaceOnUse">
                <path d="M 16 0 L 0 0 0 16" fill="none" stroke="var(--line)" stroke-width="0.8"/>
              </pattern>
            </defs>
            <rect width="160" height="80" fill="url(#grid-${cls})"/>
            <path d="M 10 40 Q 40 10 80 40 T 150 40" fill="none" stroke="var(--ink)" stroke-width="2"/>
            <circle cx="80" cy="40" r="3" fill="var(--ink)"/>
          </svg>
          <div style="font-size:8.5px;color:var(--ink3);margin-top:4px;">OSC TIMEBASE: 2.5ms/DIV</div>
        </div>
      </div>`,
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'vu-meters': (p, famIdx, varIdx, cls) => {
    const rot = -45 + (p * 0.9);
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};">
        <div style="background:var(--panel2);border:1px solid var(--line2);border-radius:8px;padding:12px 16px;text-align:center;">
          <svg viewBox="0 0 100 60" width="120" height="72" style="display:block;">
            <path d="M 15 55 A 42 42 0 0 1 85 55" fill="none" stroke="var(--track)" stroke-width="3"/>
            <path d="M 68 22 A 42 42 0 0 1 85 55" fill="none" stroke="var(--ink)" stroke-width="3.5"/>
            <g transform="translate(50,55) rotate(${rot})">
              <line x1="0" y1="0" x2="0" y2="-40" stroke="var(--ink)" stroke-width="1.8"/>
              <circle cx="0" cy="0" r="4" fill="var(--ink)"/>
            </g>
          </svg>
          <div style="font-size:9.5px;font-weight:bold;color:var(--ink);margin-top:2px;">${(p * 0.25 - 20).toFixed(1)} dB</div>
        </div>
      </div>`,
      css: `.${cls} g { transition: transform .4s cubic-bezier(.16,1,.3,1); }`
    };
  },

  'bpm-metronomes': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};">
        <div style="background:var(--panel2);border:1px solid var(--line);border-radius:8px;padding:10px 16px;text-align:center;">
          <svg viewBox="0 0 80 90" width="80" height="90" style="display:block;">
            <polygon points="20,85 60,85 48,15 32,15" fill="var(--panel)" stroke="var(--line2)"/>
            <line x1="40" y1="80" x2="40" y2="24" stroke="var(--ink)" stroke-width="2"/>
            <circle cx="40" cy="${40 + Math.round((100 - p) * 0.25)}" r="5" fill="var(--ink)"/>
          </svg>
          <div style="font-size:10px;font-weight:bold;color:var(--ink);margin-top:4px;">TEMPO: ${Math.round(60 + p * 1.4)} BPM</div>
        </div>
      </div>`,
      css: `.${cls} { user-select: none; }`
    };
  },

  'spectrum-analyzers': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};width:100%;max-width:240px;">
        <div style="background:var(--panel2);border:1px solid var(--line);border-radius:8px;padding:10px;">
          <div style="display:flex;gap:3px;align-items:flex-end;height:54px;">
            ${[35, 48, 22, 42, 52, 30, 44, 38, 50, 26].map(h => `
              <div style="flex:1;height:${Math.round(h * (p / 100))}px;background:var(--ink);opacity:.85;border-radius:1px;"></div>
            `).join('')}
          </div>
          <div style="display:flex;justify-content:space-between;font-size:8px;color:var(--ink3);margin-top:6px;">
            <span>32Hz</span><span>1kHz</span><span>16kHz</span>
          </div>
        </div>
      </div>`,
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'radar-sweeps': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};">
        <div style="width:110px;height:110px;border-radius:50%;border:1px solid var(--ink);position:relative;background:var(--panel2);overflow:hidden;">
          <div style="position:absolute;inset:15px;border-radius:50%;border:1px dashed var(--line2);"></div>
          <div style="position:absolute;inset:35px;border-radius:50%;border:1px solid var(--track);"></div>
          <div style="position:absolute;left:50%;top:0;bottom:0;width:1px;background:var(--track);"></div>
          <div style="position:absolute;top:50%;left:0;right:0;height:1px;background:var(--track);"></div>
          <div style="position:absolute;top:28px;left:72px;width:5px;height:5px;border-radius:50%;background:var(--ink);box-shadow:0 0 6px var(--ink);animation:haBlink 1.4s infinite;"></div>
          <div style="position:absolute;inset:0;background:conic-gradient(from 0deg at 50% 50%, rgba(255,255,255,0.22) 0deg, transparent 60deg, transparent 360deg);animation:haSweep 3s linear infinite;"></div>
        </div>
      </div>`,
      css: `.${cls} { user-select: none; }`
    };
  },

  'crosshair-reticles': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};">
        <svg viewBox="0 0 100 100" width="110" height="110" style="display:block;">
          <circle cx="50" cy="50" r="36" fill="none" stroke="var(--ink)" stroke-width="1.5"/>
          <circle cx="50" cy="50" r="14" fill="none" stroke="var(--line2)" stroke-width="1" stroke-dasharray="2 3"/>
          <circle cx="50" cy="50" r="2.5" fill="var(--ink)"/>
          <line x1="50" y1="6" x2="50" y2="30" stroke="var(--ink)" stroke-width="1.5"/>
          <line x1="50" y1="70" x2="50" y2="94" stroke="var(--ink)" stroke-width="1.5"/>
          <line x1="6" y1="50" x2="30" y2="50" stroke="var(--ink)" stroke-width="1.5"/>
          <line x1="70" y1="50" x2="94" y2="50" stroke="var(--ink)" stroke-width="1.5"/>
        </svg>
      </div>`,
      css: `.${cls} { user-select: none; }`
    };
  },

  'telemetry-hud': (p, famIdx, varIdx, cls) => {
    const roll = -15 + (p * 0.3);
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};">
        <svg viewBox="0 0 120 80" width="130" height="86" style="display:block;">
          <g transform="translate(60,40) rotate(${roll})">
            <line x1="-35" y1="0" x2="-10" y2="0" stroke="var(--ink)" stroke-width="2"/>
            <line x1="10" y1="0" x2="35" y2="0" stroke="var(--ink)" stroke-width="2"/>
            <circle cx="0" cy="0" r="4" fill="none" stroke="var(--ink)" stroke-width="1.5"/>
          </g>
          <line x1="38" y1="20" x2="50" y2="20" stroke="var(--line2)"/>
          <line x1="70" y1="20" x2="82" y2="20" stroke="var(--line2)"/>
          <line x1="38" y1="60" x2="50" y2="60" stroke="var(--line2)"/>
          <line x1="70" y1="60" x2="82" y2="60" stroke="var(--line2)"/>
          <text x="60" y="74" text-anchor="middle" font-size="8" fill="var(--ink)">ROLL: ${roll.toFixed(1)}°</text>
        </svg>
      </div>`,
      css: `.${cls} g { transition: transform .4s ease; }`
    };
  },

  'acoustics-visualizers': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};">
        <svg viewBox="0 0 100 100" width="100" height="100" style="display:block;">
          <circle cx="50" cy="50" r="12" fill="none" stroke="var(--ink)" stroke-width="2"/>
          <circle cx="50" cy="50" r="24" fill="none" stroke="var(--ink)" stroke-width="1.5" stroke-dasharray="4 3" opacity=".8"/>
          <circle cx="50" cy="50" r="38" fill="none" stroke="var(--line2)" stroke-width="1.2" stroke-dasharray="2 4" opacity=".6"/>
          <circle cx="50" cy="50" r="4" fill="var(--ink)"/>
        </svg>
      </div>`,
      css: `.${cls} { isolation: isolate; }`
    };
  },


  'loading-spinners': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};">
        <svg viewBox="0 0 80 80" width="90" height="90" style="display:block;animation:haSpin 1.6s linear infinite;">
          <circle cx="40" cy="40" r="32" fill="none" stroke="var(--track)" stroke-width="4"/>
          <circle cx="40" cy="40" r="32" fill="none" stroke="var(--ink)" stroke-width="4.2" stroke-dasharray="140" stroke-dashoffset="90" stroke-linecap="round"/>
        </svg>
        <div style="font-size:9px;color:var(--ink3);margin-top:8px;">BUFFERING STREAM</div>
      </div>`,
      css: `.${cls} { user-select: none; }`
    };
  },

  'pulse-beacons': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};">
        <div style="position:relative;width:90px;height:90px;display:grid;place-items:center;">
          <div style="position:absolute;inset:8px;border-radius:50%;border:2px solid var(--ink);animation:haPing 2s cubic-bezier(0,0,0.2,1) infinite;"></div>
          <div style="position:absolute;inset:20px;border-radius:50%;border:1px dashed var(--line2);"></div>
          <div style="width:16px;height:16px;border-radius:50%;background:var(--ink);box-shadow:0 0 12px var(--ink);"></div>
        </div>
        <div style="font-size:9.5px;color:var(--ink);margin-top:4px;font-weight:bold;">STATUS: TRANSMITTING</div>
      </div>`,
      css: `.${cls} { user-select: none; }`
    };
  },

  'skeleton-shimmers': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};width:100%;max-width:230px;">
        <div style="display:flex;gap:10px;align-items:center;background:var(--panel2);padding:12px;border-radius:8px;border:1px solid var(--line);">
          <div style="width:36px;height:36px;border-radius:50%;background:var(--track);position:relative;overflow:hidden;">
            <div style="position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent);animation:haShimmer 1.5s infinite;"></div>
          </div>
          <div style="flex:1;display:flex;flex-direction:column;gap:6px;">
            <div style="height:10px;width:80%;background:var(--track);border-radius:3px;position:relative;overflow:hidden;">
              <div style="position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent);animation:haShimmer 1.5s infinite;"></div>
            </div>
            <div style="height:8px;width:50%;background:var(--track);border-radius:3px;"></div>
          </div>
        </div>
      </div>`,
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'status-pills': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};">
        <div style="display:flex;flex-direction:column;gap:8px;">
          <div style="display:inline-flex;align-items:center;gap:8px;padding:6px 14px;border-radius:999px;border:1px solid var(--line2);background:var(--panel2);font-size:10.5px;font-weight:bold;color:var(--ink);">
            <span style="width:8px;height:8px;border-radius:50%;background:var(--ink);box-shadow:0 0 8px var(--ink);animation:haBlink 1.4s infinite;"></span>
            STATUS // CLUSTER ONLINE
          </div>
          <div style="font-size:8.5px;color:var(--ink3);text-align:center;">LATENCY: 12ms · PEERS: 4</div>
        </div>
      </div>`,
      css: `.${cls} { user-select: none; }`
    };
  },

  'notification-dots': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};">
        <div style="position:relative;display:inline-block;padding:8px;">
          <div style="width:48px;height:48px;border-radius:12px;border:1px solid var(--line2);background:var(--panel2);display:grid;place-items:center;">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--ink)" stroke-width="2">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
            </svg>
          </div>
          <div style="position:absolute;top:4px;right:4px;width:18px;height:18px;border-radius:50%;background:var(--ink);color:var(--sc-bg);font-size:9.5px;font-weight:bold;display:grid;place-items:center;border:2px solid var(--panel);">
            3
          </div>
        </div>
      </div>`,
      css: `.${cls} { user-select: none; }`
    };
  },

  'glitch-elements': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};">
        <div style="padding:12px 20px;background:var(--panel2);border:1px solid var(--line2);border-radius:6px;position:relative;overflow:hidden;">
          <div style="font-size:16px;font-weight:900;letter-spacing:.25em;color:var(--ink);animation:haGlitch 0.9s infinite steps(2);">
            SIGNAL_BREACH
          </div>
          <div style="font-size:8.5px;color:var(--ink3);margin-top:4px;">FAULT CODE // 0xFA39C</div>
        </div>
      </div>`,
      css: `.${cls} { user-select: none; }`
    };
  },

  'matrix-streams': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};">
        <div style="display:flex;gap:12px;background:var(--panel2);padding:10px 16px;border:1px solid var(--line);border-radius:8px;font-family:ui-monospace,monospace;font-size:10px;line-height:1.4;">
          <div style="color:var(--ink);">01<br>FF<br>2A<br>C4</div>
          <div style="color:var(--ink2);">8B<br>00<br>1E<br>92</div>
          <div style="color:var(--ink3);">D3<br>41<br>AA<br>0F</div>
        </div>
        <div style="font-size:8.5px;color:var(--ink3);margin-top:5px;">STREAM: /dev/null</div>
      </div>`,
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'shimmer-bars': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};width:100%;max-width:230px;">
        <div style="width:100%;height:8px;border-radius:999px;background:var(--track);position:relative;overflow:hidden;">
          <div style="position:absolute;top:0;bottom:0;width:70px;background:var(--ink);filter:blur(4px);animation:haShimmer 1.8s infinite;"></div>
        </div>
        <div style="font-size:9px;color:var(--ink3);margin-top:6px;text-align:center;">INDETERMINATE SEEK</div>
      </div>`,
      css: `.${cls} { user-select: none; }`
    };
  },

  'banner-alerts': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};width:100%;max-width:240px;">
        <div style="padding:10px 14px;background:var(--panel2);border:1px solid var(--line2);border-radius:6px;display:flex;align-items:center;gap:10px;">
          <span style="font-size:14px;color:var(--ink);">▲</span>
          <div>
            <div style="font-size:10px;font-weight:bold;color:var(--ink);">CRITICAL THRESHOLD</div>
            <div style="font-size:8.5px;color:var(--ink3);">Load at ${Math.round(p)}% capacity</div>
          </div>
        </div>
      </div>`,
      css: `.${cls} { user-select: none; }`
    };
  },

  'toast-popups': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};width:100%;max-width:230px;">
        <div style="padding:10px 14px;background:var(--panel2);border:1px solid var(--line2);border-radius:8px;box-shadow:0 4px 14px rgba(0,0,0,.5);position:relative;overflow:hidden;">
          <div style="display:flex;align-items:center;gap:8px;font-size:10.5px;font-weight:bold;color:var(--ink);">
            <span>✓</span> CHANGES DEPLOYED
          </div>
          <div style="position:absolute;bottom:0;left:0;right:0;height:2px;background:var(--track);">
            <div style="width:${100 - p}%;height:100%;background:var(--ink);"></div>
          </div>
        </div>
      </div>`,
      css: `.${cls} { user-select: none; }`
    };
  },


  'breadcrumb-navs': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};width:100%;max-width:240px;">
        <div style="display:flex;align-items:center;gap:6px;font-size:10px;padding:8px 12px;background:var(--panel2);border:1px solid var(--line);border-radius:6px;">
          <span style="color:var(--ink3);">CLUSTER</span>
          <span style="color:var(--line2);">/</span>
          <span style="color:var(--ink3);">NODES</span>
          <span style="color:var(--line2);">/</span>
          <span style="color:var(--ink);font-weight:bold;">WORKER-0${Math.round(p % 8) + 1}</span>
        </div>
      </div>`,
      css: `.${cls} { user-select: none; }`
    };
  },

  'pagination-bars': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};">
        <div style="display:flex;gap:4px;align-items:center;">
          <button style="padding:6px 10px;border:1px solid var(--line);border-radius:6px;background:var(--panel2);font-size:10px;color:var(--ink3);">PREV</button>
          <button style="padding:6px 12px;background:var(--ink);color:var(--sc-bg);border-radius:6px;font-size:10px;font-weight:bold;">1</button>
          <button style="padding:6px 12px;border:1px solid var(--line);border-radius:6px;background:var(--panel2);font-size:10px;color:var(--ink);">2</button>
          <button style="padding:6px 12px;border:1px solid var(--line);border-radius:6px;background:var(--panel2);font-size:10px;color:var(--ink);">3</button>
          <span style="color:var(--ink3);font-size:10px;padding:0 4px;">…</span>
          <button style="padding:6px 10px;border:1px solid var(--line);border-radius:6px;background:var(--panel2);font-size:10px;color:var(--ink3);">NEXT</button>
        </div>
      </div>`,
      css: `.${cls} { user-select: none; }`
    };
  },

  'step-wizards': (p, famIdx, varIdx, cls) => {
    const cur = p < 33 ? 1 : p < 66 ? 2 : 3;
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};width:100%;max-width:240px;">
        <div style="display:flex;align-items:center;justify-content:space-between;width:100%;">
          ${['SETUP', 'CONFIG', 'DEPLOY'].map((st, i) => `
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
              <div style="width:24px;height:24px;border-radius:50%;display:grid;place-items:center;font-size:10px;font-weight:bold;
                          background:${cur > i ? 'var(--ink)' : 'var(--panel2)'};
                          color:${cur > i ? 'var(--sc-bg)' : 'var(--ink)'};
                          border:1px solid ${cur > i ? 'var(--ink)' : 'var(--line2)'};">
                ${cur > i + 1 ? '✓' : i + 1}
              </div>
              <span style="font-size:8px;color:${cur > i ? 'var(--ink)' : 'var(--ink3)'};">${st}</span>
            </div>
          `).join('')}
        </div>
      </div>`,
      css: `.${cls} { user-select: none; }`
    };
  },

  'tab-navigators': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};width:100%;max-width:240px;">
        <div style="display:flex;border-bottom:2px solid var(--track);gap:16px;width:100%;padding-bottom:6px;position:relative;">
          <span style="font-size:11px;font-weight:bold;color:var(--ink);">CONSOLE</span>
          <span style="font-size:11px;color:var(--ink3);">METRICS</span>
          <span style="font-size:11px;color:var(--ink3);">SECURITY</span>
          <div style="position:absolute;bottom:-2px;left:0;width:54px;height:2px;background:var(--ink);"></div>
        </div>
      </div>`,
      css: `.${cls} { user-select: none; }`
    };
  },

  'tree-views': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};width:100%;max-width:230px;">
        <div style="background:var(--panel2);border:1px solid var(--line);border-radius:6px;padding:10px 14px;font-size:10px;line-height:1.6;width:100%;box-sizing:border-box;">
          <div>▼ project_root</div>
          <div style="padding-left:14px;color:var(--ink2);">├ 📁 controllers</div>
          <div style="padding-left:24px;color:var(--ink3);">└ 📄 auth.ts</div>
          <div style="padding-left:14px;color:var(--ink);">└ 📄 index.html</div>
        </div>
      </div>`,
      css: `.${cls} { user-select: none; }`
    };
  },

  'floating-action-menus': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};">
        <div style="position:relative;display:flex;align-items:center;justify-content:center;">
          <div style="width:48px;height:48px;border-radius:50%;background:var(--ink);color:var(--sc-bg);display:grid;place-items:center;font-size:22px;box-shadow:0 4px 12px rgba(0,0,0,.5);cursor:pointer;">
            +
          </div>
        </div>
      </div>`,
      css: `.${cls} { user-select: none; }`
    };
  },

  'context-menus': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};width:100%;max-width:200px;">
        <div style="background:var(--panel2);border:1px solid var(--line2);border-radius:8px;box-shadow:0 6px 16px rgba(0,0,0,.5);padding:6px;display:flex;flex-direction:column;gap:4px;">
          <div style="padding:6px 10px;border-radius:4px;display:flex;justify-content:space-between;font-size:10px;color:var(--ink);background:var(--line);">
            <span>EDIT RECORD</span><span style="color:var(--ink3);">⌘E</span>
          </div>
          <div style="padding:6px 10px;display:flex;justify-content:space-between;font-size:10px;color:var(--ink);">
            <span>COPY LINK</span><span style="color:var(--ink3);">⌘C</span>
          </div>
          <div style="height:1px;background:var(--line);"></div>
          <div style="padding:6px 10px;display:flex;justify-content:space-between;font-size:10px;color:var(--ink3);">
            <span>PURGE</span><span>DEL</span>
          </div>
        </div>
      </div>`,
      css: `.${cls} { user-select: none; }`
    };
  },

  'timeline-nodes': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};width:100%;max-width:220px;">
        <div style="display:flex;gap:12px;">
          <div style="display:flex;flex-direction:column;align-items:center;">
            <div style="width:10px;height:10px;border-radius:50%;background:var(--ink);"></div>
            <div style="width:2px;flex:1;background:var(--line2);min-height:30px;"></div>
            <div style="width:8px;height:8px;border-radius:50%;background:var(--track);"></div>
          </div>
          <div style="font-size:10px;color:var(--ink);line-height:1.5;">
            <div style="font-weight:bold;">14:32:00 // PATCH COMMITTED</div>
            <div style="font-size:8.5px;color:var(--ink3);margin-top:2px;">Target: production-us-east</div>
          </div>
        </div>
      </div>`,
      css: `.${cls} { user-select: none; }`
    };
  },

  'accordion-drawers': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};width:100%;max-width:230px;">
        <div style="border:1px solid var(--line2);border-radius:8px;background:var(--panel2);overflow:hidden;">
          <div style="padding:10px 14px;display:flex;justify-content:space-between;font-size:10.5px;font-weight:bold;color:var(--ink);background:var(--line);">
            <span>HARDWARE SPECS</span><span>▲</span>
          </div>
          <div style="padding:10px 14px;font-size:9.5px;color:var(--ink2);line-height:1.5;">
            CPU: 64 Cores<br>RAM: 256 GB ECC<br>STATUS: NOMINAL
          </div>
        </div>
      </div>`,
      css: `.${cls} { user-select: none; }`
    };
  },

  'nav-rails': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};">
        <div style="display:flex;flex-direction:column;gap:8px;padding:8px;background:var(--panel2);border:1px solid var(--line);border-radius:8px;">
          <div style="width:28px;height:28px;background:var(--ink);border-radius:6px;display:grid;place-items:center;color:var(--sc-bg);font-weight:bold;font-size:11px;">HA</div>
          <div style="width:28px;height:28px;background:var(--line);border-radius:6px;"></div>
          <div style="width:28px;height:28px;background:var(--line);border-radius:6px;"></div>
        </div>
      </div>`,
      css: `.${cls} { user-select: none; }`
    };
  },


  'sparkline-charts': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};width:100%;max-width:240px;">
        <div style="background:var(--panel2);border:1px solid var(--line);border-radius:8px;padding:12px;">
          <div style="display:flex;justify-content:space-between;font-size:9px;color:var(--ink3);margin-bottom:8px;">
            <span>TREND // 24H</span><span style="color:var(--ink);font-weight:bold;">+${(p * 0.18).toFixed(1)}%</span>
          </div>
          <svg viewBox="0 0 200 60" width="100%" height="60" style="display:block;">
            <path d="M 0 50 L 30 42 L 60 48 L 90 24 L 120 32 L 150 14 L 180 20 L 200 8" fill="none" stroke="var(--ink)" stroke-width="2.2"/>
            <circle cx="200" cy="8" r="4" fill="var(--ink)"/>
          </svg>
        </div>
      </div>`,
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'mini-bar-charts': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};width:100%;max-width:240px;">
        <div style="background:var(--panel2);border:1px solid var(--line);border-radius:8px;padding:12px;">
          <div style="display:flex;align-items:flex-end;gap:6px;height:60px;">
            ${[20, 35, 52, 40, 60, 45, 55, 30].map(h => `
              <div style="flex:1;height:${Math.round(h * (p / 100))}px;background:var(--ink);border-radius:2px;"></div>
            `).join('')}
          </div>
          <div style="display:flex;justify-content:space-between;font-size:8.5px;color:var(--ink3);margin-top:8px;">
            <span>MON</span><span>THU</span><span>SUN</span>
          </div>
        </div>
      </div>`,
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'area-graph-plots': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};width:100%;max-width:240px;">
        <div style="background:var(--panel2);border:1px solid var(--line);border-radius:8px;padding:10px;">
          <svg viewBox="0 0 180 70" width="100%" height="70" style="display:block;">
            <polygon points="10,65 35,45 70,52 110,24 145,30 170,10 170,65" fill="var(--track)"/>
            <polyline points="10,65 35,45 70,52 110,24 145,30 170,10" fill="none" stroke="var(--ink)" stroke-width="2"/>
          </svg>
          <div style="font-size:8.5px;color:var(--ink3);margin-top:4px;">AREA DENSITY SILHOUETTE</div>
        </div>
      </div>`,
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'donut-charts': (p, famIdx, varIdx, cls) => {
    const circ = 188.4;
    const off = circ * (1 - p / 100);
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};">
        <svg viewBox="0 0 100 100" width="100" height="100" style="display:block;">
          <circle cx="50" cy="50" r="30" fill="none" stroke="var(--track)" stroke-width="10"/>
          <circle cx="50" cy="50" r="30" fill="none" stroke="var(--ink)" stroke-width="10.2"
                  stroke-dasharray="${circ}" stroke-dashoffset="${off}" transform="rotate(-90 50 50)"/>
          <text x="50" y="54" text-anchor="middle" font-size="11" font-weight="bold" fill="var(--ink)">${Math.round(p)}%</text>
        </svg>
      </div>`,
      css: `.${cls} circle { transition: stroke-dashoffset .6s ease; }`
    };
  },

  'kpi-metric-cards': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};width:100%;max-width:220px;">
        <div style="padding:14px 18px;background:var(--panel2);border:1px solid var(--line2);border-radius:8px;position:relative;">
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <span style="font-size:9px;color:var(--ink3);letter-spacing:.1em;">TOTAL THROUGHPUT</span>
            <span style="font-size:9px;color:var(--ink);background:var(--line);padding:2px 5px;border-radius:4px;">+${(p * 0.15).toFixed(1)}%</span>
          </div>
          <div style="font-size:24px;font-weight:900;color:var(--ink);margin:8px 0 4px;letter-spacing:-.02em;">
            ${(p * 142.6).toFixed(0)} <span style="font-size:12px;font-weight:normal;color:var(--ink3);">ops/s</span>
          </div>
          <div style="font-size:8.5px;color:var(--ink3);">WINDOW: LAST 60 MIN</div>
        </div>
      </div>`,
      css: `.${cls} { user-select: none; }`
    };
  },

  'heatmap-grids': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};">
        <div style="background:var(--panel2);border:1px solid var(--line);border-radius:8px;padding:12px;">
          <div style="display:grid;grid-template-columns:repeat(8,12px);gap:4px;">
            ${Array.from({length:32}, (_, i) => {
              const o = ((i * 17 + p) % 100) / 100;
              return `<div style="width:12px;height:12px;background:var(--ink);opacity:${Math.max(0.1, o)};border-radius:2px;"></div>`;
            }).join('')}
          </div>
          <div style="font-size:8.5px;color:var(--ink3);margin-top:8px;">ACTIVITY DENSITY // 32 BLOCKS</div>
        </div>
      </div>`,
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'scatter-matrices': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};width:100%;max-width:220px;">
        <div style="background:var(--panel2);border:1px solid var(--line);border-radius:8px;padding:10px;">
          <svg viewBox="0 0 100 80" width="100%" height="80" style="display:block;">
            <line x1="10" y1="70" x2="90" y2="70" stroke="var(--line2)"/>
            <line x1="10" y1="10" x2="10" y2="70" stroke="var(--line2)"/>
            <circle cx="30" cy="55" r="3" fill="var(--ink)"/>
            <circle cx="48" cy="38" r="4" fill="var(--ink)"/>
            <circle cx="65" cy="22" r="3" fill="var(--ink)"/>
            <circle cx="80" cy="18" r="3.5" fill="var(--ink)"/>
          </svg>
        </div>
      </div>`,
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'candlestick-bars': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};width:100%;max-width:230px;">
        <div style="background:var(--panel2);border:1px solid var(--line);border-radius:8px;padding:12px;">
          <svg viewBox="0 0 120 60" width="100%" height="60" style="display:block;">
            <line x1="20" y1="8" x2="20" y2="52" stroke="var(--ink3)"/>
            <rect x="14" y="20" width="12" height="20" fill="var(--ink)"/>
            <line x1="50" y1="12" x2="50" y2="48" stroke="var(--ink3)"/>
            <rect x="44" y="16" width="12" height="18" fill="none" stroke="var(--ink)" stroke-width="1.8"/>
            <line x1="80" y1="5" x2="80" y2="55" stroke="var(--ink3)"/>
            <rect x="74" y="14" width="12" height="26" fill="var(--ink)"/>
          </svg>
          <div style="font-size:8.5px;color:var(--ink3);margin-top:4px;">CANDLESTICK INTERVAL: 1m</div>
        </div>
      </div>`,
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'data-tables': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};width:100%;max-width:240px;">
        <div style="background:var(--panel2);border:1px solid var(--line);border-radius:8px;padding:10px;font-size:10px;">
          <div style="display:grid;grid-template-columns:1fr 1fr 1fr;padding-bottom:4px;border-bottom:1px solid var(--line2);font-weight:bold;color:var(--ink);">
            <span>RESOURCE</span><span>USAGE</span><span>STATUS</span>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr 1fr;padding:5px 0;border-bottom:1px solid var(--track);color:var(--ink2);">
            <span>CORE_0</span><span>${Math.round(p)}%</span><span style="color:var(--ink);">ONLINE</span>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr 1fr;padding:5px 0;color:var(--ink3);">
            <span>CORE_1</span><span>${Math.round(p * 0.7)}%</span><span>IDLE</span>
          </div>
        </div>
      </div>`,
      css: `.${cls} { user-select: none; }`
    };
  },

  'diff-viewers': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};width:100%;max-width:240px;">
        <div style="background:var(--panel2);border:1px solid var(--line);border-radius:8px;padding:10px;font-size:9.5px;line-height:1.6;font-family:ui-monospace,monospace;">
          <div style="color:var(--ink3);">- let threshold = 50;</div>
          <div style="color:var(--ink);background:var(--line);padding:0 4px;border-radius:2px;font-weight:bold;">+ const threshold = ${Math.round(p)};</div>
          <div style="color:var(--ink3);">  applyFilter(threshold);</div>
        </div>
      </div>`,
      css: `.${cls} { isolation: isolate; }`
    };
  },


  'text-inputs': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};width:100%;max-width:240px;">
        <div style="background:var(--panel2);border:1px solid var(--line2);border-radius:8px;padding:10px 14px;position:relative;">
          <div style="font-size:8.5px;color:var(--ink3);margin-bottom:4px;">TERMINAL INPUT</div>
          <div style="display:flex;align-items:center;gap:6px;font-size:11px;color:var(--ink);">
            <span style="color:var(--ink3);">$</span>
            <span>halfarc --build variant</span>
            <span style="width:2px;height:14px;background:var(--ink);animation:haBlink 1s infinite;"></span>
          </div>
        </div>
      </div>`,
      css: `.${cls} { user-select: none; }`
    };
  },

  'search-bars': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};width:100%;max-width:240px;">
        <div style="display:flex;align-items:center;gap:8px;background:var(--panel2);border:1px solid var(--line2);border-radius:999px;padding:8px 14px;">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--ink3)" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <span style="font-size:10.5px;color:var(--ink);flex:1;">quantum_core</span>
          <span style="font-size:9px;color:var(--ink3);background:var(--line);padding:2px 6px;border-radius:4px;">⌘K</span>
        </div>
      </div>`,
      css: `.${cls} { user-select: none; }`
    };
  },

  'password-masks': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};width:100%;max-width:240px;">
        <div style="background:var(--panel2);border:1px solid var(--line2);border-radius:8px;padding:10px 14px;display:flex;align-items:center;justify-content:space-between;">
          <div style="display:flex;gap:6px;align-items:center;">
            ${Array.from({length:8}, () => `<span style="width:8px;height:8px;border-radius:50%;background:var(--ink);"></span>`).join('')}
          </div>
          <span style="font-size:10px;color:var(--ink3);cursor:pointer;">[REVEAL]</span>
        </div>
        <div style="display:flex;gap:3px;margin-top:6px;width:100%;">
          <div style="flex:1;height:3px;background:var(--ink);border-radius:2px;"></div>
          <div style="flex:1;height:3px;background:var(--ink);border-radius:2px;"></div>
          <div style="flex:1;height:3px;background:var(--ink);border-radius:2px;"></div>
          <div style="flex:1;height:3px;background:var(--track);border-radius:2px;"></div>
        </div>
      </div>`,
      css: `.${cls} { user-select: none; }`
    };
  },

  'pin-code-boxes': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};">
        <div style="display:flex;gap:8px;">
          ${[8, 4, 1, 9].map((dig, i) => `
            <div style="width:34px;height:44px;border:${i < 3 ? '2px solid var(--ink)' : '1px solid var(--line2)'};border-radius:6px;background:var(--panel2);display:grid;place-items:center;font-size:16px;font-weight:bold;color:var(--ink);">
              ${i < 3 ? dig : '<span style="width:2px;height:16px;background:var(--ink);animation:haBlink 1s infinite;"></span>'}
            </div>
          `).join('')}
        </div>
      </div>`,
      css: `.${cls} { user-select: none; }`
    };
  },

  'color-swatches': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};">
        <div style="display:flex;gap:8px;background:var(--panel2);padding:10px 14px;border:1px solid var(--line);border-radius:8px;">
          ${['#ffffff', '#cccccc', '#888888', '#444444', '#111111'].map((c, i) => `
            <div style="width:22px;height:22px;border-radius:50%;background:${c};border:${i === 1 ? '2px solid var(--ink)' : '1px solid var(--line2)'};box-sizing:border-box;"></div>
          `).join('')}
        </div>
      </div>`,
      css: `.${cls} { isolation: isolate; }`
    };
  },

  'date-pickers': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};">
        <div style="background:var(--panel2);border:1px solid var(--line2);border-radius:8px;padding:12px;font-size:9.5px;text-align:center;">
          <div style="font-weight:bold;color:var(--ink);margin-bottom:8px;">OCTOBER 2026</div>
          <div style="display:grid;grid-template-columns:repeat(7,16px);gap:4px;color:var(--ink3);">
            <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
            ${Array.from({length:14}, (_, i) => `
              <span style="width:16px;height:16px;display:grid;place-items:center;border-radius:3px;${i === 8 ? 'background:var(--ink);color:var(--sc-bg);font-weight:bold;' : 'color:var(--ink);'}">${i + 1}</span>
            `).join('')}
          </div>
        </div>
      </div>`,
      css: `.${cls} { user-select: none; }`
    };
  },

  'time-selectors': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};">
        <div style="display:flex;align-items:center;gap:6px;background:var(--panel2);border:1px solid var(--line2);border-radius:8px;padding:10px 16px;">
          <div style="font-size:22px;font-weight:bold;color:var(--ink);">14</div>
          <div style="font-size:20px;font-weight:bold;color:var(--ink);animation:haBlink 1s infinite;">:</div>
          <div style="font-size:22px;font-weight:bold;color:var(--ink);">${String(Math.round(p * 0.59)).padStart(2, '0')}</div>
          <div style="font-size:9px;color:var(--ink3);margin-left:6px;border-left:1px solid var(--line2);padding-left:8px;">UTC<br>24H</div>
        </div>
      </div>`,
      css: `.${cls} { user-select: none; }`
    };
  },

  'file-dropzones': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};width:100%;max-width:240px;">
        <div style="border:2px dashed var(--line2);border-radius:8px;padding:16px;text-align:center;background:var(--panel2);">
          <div style="font-size:18px;color:var(--ink);">↑</div>
          <div style="font-size:10.5px;font-weight:bold;color:var(--ink);margin:4px 0 2px;">DRAG & DROP ARTIFACTS</div>
          <div style="font-size:8.5px;color:var(--ink3);">SUPPORTED: .SVG, .JSON, .TS</div>
        </div>
      </div>`,
      css: `.${cls} { user-select: none; }`
    };
  },

  'tag-inputs': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};width:100%;max-width:240px;">
        <div style="display:flex;flex-wrap:wrap;gap:6px;background:var(--panel2);border:1px solid var(--line);border-radius:8px;padding:10px;">
          <span style="padding:4px 8px;border-radius:999px;background:var(--ink);color:var(--sc-bg);font-size:9px;font-weight:bold;">v2.0 ×</span>
          <span style="padding:4px 8px;border-radius:999px;border:1px solid var(--line2);color:var(--ink);font-size:9px;">MONO ×</span>
          <span style="padding:4px 8px;border-radius:999px;border:1px dashed var(--line2);color:var(--ink3);font-size:9px;">+ ADD TAG</span>
        </div>
      </div>`,
      css: `.${cls} { user-select: none; }`
    };
  },

  'stepper-inputs': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};">
        <div style="display:flex;align-items:center;border:1px solid var(--line2);border-radius:8px;background:var(--panel2);overflow:hidden;">
          <button style="padding:10px 14px;font-size:12px;color:var(--ink);border-right:1px solid var(--line);cursor:pointer;">−</button>
          <div style="padding:10px 18px;font-size:12px;font-weight:bold;color:var(--ink);">${Math.round(p / 5)}</div>
          <button style="padding:10px 14px;font-size:12px;color:var(--ink);border-left:1px solid var(--line);cursor:pointer;">+</button>
        </div>
      </div>`,
      css: `.${cls} { user-select: none; }`
    };
  },


  'hud-panels': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};width:100%;max-width:240px;">
        <div style="position:relative;background:var(--panel2);border:1px solid var(--line2);padding:14px;border-radius:4px;">
          <div style="position:absolute;top:-1px;left:-1px;width:8px;height:8px;border-top:2px solid var(--ink);border-left:2px solid var(--ink);"></div>
          <div style="position:absolute;top:-1px;right:-1px;width:8px;height:8px;border-top:2px solid var(--ink);border-right:2px solid var(--ink);"></div>
          <div style="position:absolute;bottom:-1px;left:-1px;width:8px;height:8px;border-bottom:2px solid var(--ink);border-left:2px solid var(--ink);"></div>
          <div style="position:absolute;bottom:-1px;right:-1px;width:8px;height:8px;border-bottom:2px solid var(--ink);border-right:2px solid var(--ink);"></div>
          <div style="display:flex;justify-content:space-between;font-size:9px;color:var(--ink3);border-bottom:1px solid var(--track);padding-bottom:6px;">
            <span>BEZEL // SYS-0${famIdx}</span><span>ONLINE</span>
          </div>
          <div style="font-size:14px;font-weight:bold;color:var(--ink);margin:8px 0 2px;">HUD TELEMETRY MATRIX</div>
          <div style="font-size:9px;color:var(--ink2);">BUFFER ALLOCATION: ${Math.round(p)}%</div>
        </div>
      </div>`,
      css: `.${cls} { user-select: none; }`
    };
  },

  'card-containers': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};width:100%;max-width:230px;">
        <div style="background:var(--panel2);border:1px solid var(--line2);border-radius:10px;padding:14px;box-shadow:0 4px 12px rgba(0,0,0,.3);">
          <div style="font-size:12px;font-weight:bold;color:var(--ink);">SURFACE CARD</div>
          <div style="font-size:9px;color:var(--ink3);margin-top:4px;line-height:1.4;">
            Minimalist brutalist layout container with crisp hairline borders.
          </div>
          <div style="margin-top:10px;padding-top:8px;border-top:1px solid var(--track);display:flex;justify-content:space-between;font-size:8.5px;color:var(--ink3);">
            <span>MOD: 0${famIdx + 1}</span><span>VER: 2.0</span>
          </div>
        </div>
      </div>`,
      css: `.${cls} { user-select: none; }`
    };
  },

  'tooltip-balloons': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};">
        <div style="display:flex;flex-direction:column;align-items:center;">
          <div style="background:var(--ink);color:var(--sc-bg);padding:6px 12px;border-radius:6px;font-size:10px;font-weight:bold;box-shadow:0 4px 12px rgba(0,0,0,.4);">
            ACCELERATED COMPUTE // ${Math.round(p)}%
          </div>
          <div style="width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-top:6px solid var(--ink);"></div>
        </div>
      </div>`,
      css: `.${cls} { user-select: none; }`
    };
  },

  'popover-cards': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};width:100%;max-width:230px;">
        <div style="background:var(--panel2);border:1px solid var(--line2);border-radius:8px;box-shadow:0 6px 18px rgba(0,0,0,.5);padding:12px;">
          <div style="display:flex;justify-content:space-between;font-size:11px;font-weight:bold;color:var(--ink);">
            <span>CONFIRM ACTION</span><span style="color:var(--ink3);cursor:pointer;">✕</span>
          </div>
          <p style="font-size:9.5px;color:var(--ink2);margin:8px 0 10px;line-height:1.4;">Synchronize state across active clusters?</p>
          <div style="display:flex;gap:6px;justify-content:flex-end;">
            <button style="padding:4px 8px;border:1px solid var(--line);border-radius:4px;font-size:9px;color:var(--ink3);">CANCEL</button>
            <button style="padding:4px 10px;background:var(--ink);color:var(--sc-bg);border-radius:4px;font-size:9px;font-weight:bold;">CONFIRM</button>
          </div>
        </div>
      </div>`,
      css: `.${cls} { user-select: none; }`
    };
  },

  'user-avatars': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};">
        <div style="position:relative;width:54px;height:54px;border-radius:50%;background:var(--panel2);border:2px solid var(--ink);display:grid;place-items:center;font-size:16px;font-weight:900;color:var(--ink);">
          HA
          <div style="position:absolute;bottom:0;right:0;width:12px;height:12px;border-radius:50%;background:var(--ink);border:2px solid var(--panel);box-shadow:0 0 6px var(--ink);"></div>
        </div>
      </div>`,
      css: `.${cls} { user-select: none; }`
    };
  },

  'profile-cards': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};width:100%;max-width:240px;">
        <div style="display:flex;align-items:center;gap:12px;padding:10px 14px;background:var(--panel2);border:1px solid var(--line);border-radius:8px;">
          <div style="width:36px;height:36px;border-radius:50%;background:var(--ink);color:var(--sc-bg);display:grid;place-items:center;font-size:12px;font-weight:bold;">
            OP
          </div>
          <div>
            <div style="font-size:11px;font-weight:bold;color:var(--ink);">OPERATOR_${Math.round(p)}</div>
            <div style="font-size:8.5px;color:var(--ink3);">LEVEL 4 // SEC-OPS</div>
          </div>
        </div>
      </div>`,
      css: `.${cls} { user-select: none; }`
    };
  },

  'pricing-cards': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};width:100%;max-width:220px;">
        <div style="background:var(--panel2);border:1px solid var(--line2);border-radius:8px;padding:14px;text-align:center;">
          <div style="font-size:9.5px;color:var(--ink3);letter-spacing:.12em;">TIER // ENTERPRISE</div>
          <div style="font-size:26px;font-weight:900;color:var(--ink);margin:6px 0;">$${Math.round(p * 1.5 + 49)}<span style="font-size:11px;color:var(--ink3);">/mo</span></div>
          <button style="width:100%;padding:6px 0;background:var(--ink);color:var(--sc-bg);border-radius:6px;font-size:10px;font-weight:bold;margin-top:8px;">SUBSCRIBE</button>
        </div>
      </div>`,
      css: `.${cls} { user-select: none; }`
    };
  },

  'feature-lists': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};width:100%;max-width:230px;">
        <div style="background:var(--panel2);border:1px solid var(--line);border-radius:8px;padding:12px;font-size:10px;line-height:1.7;">
          <div style="color:var(--ink);">✓ ZERO JS DEPENDENCIES</div>
          <div style="color:var(--ink);">✓ GPU-ACCELERATED TRANSFORMS</div>
          <div style="color:var(--ink);">✓ FULL MONOCHROME PALETTE</div>
          <div style="color:var(--ink3);">✕ EXTERNAL CDN ASSETS</div>
        </div>
      </div>`,
      css: `.${cls} { user-select: none; }`
    };
  },

  'terminal-windows': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};width:100%;max-width:230px;">
        <div style="border:1px solid var(--line2);border-radius:8px;background:var(--panel2);overflow:hidden;">
          <div style="display:flex;gap:5px;padding:6px 10px;background:var(--line);">
            <span style="width:6px;height:6px;border-radius:50%;background:var(--ink3);"></span>
            <span style="width:6px;height:6px;border-radius:50%;background:var(--ink3);"></span>
            <span style="width:6px;height:6px;border-radius:50%;background:var(--ink3);"></span>
          </div>
          <div style="padding:10px 12px;font-size:10px;color:var(--ink);line-height:1.5;">
            <div>$ halfarc --verify</div>
            <div style="color:var(--ink3);">[OK] 17,640 components verified</div>
          </div>
        </div>
      </div>`,
      css: `.${cls} { user-select: none; }`
    };
  },

  'code-boxes': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};width:100%;max-width:230px;">
        <div style="background:var(--panel2);border:1px solid var(--line);border-radius:8px;padding:10px 14px;font-size:9.5px;font-family:ui-monospace,monospace;color:var(--ink);line-height:1.5;">
          <div style="color:var(--ink3);">/* CSS Contract */</div>
          <div>.sc-ind { --p: <span style="font-weight:bold;">${Math.round(p)}</span>; }</div>
        </div>
      </div>`,
      css: `.${cls} { isolation: isolate; }`
    };
  },


  'keybinding-kbd': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};">
        <div style="display:flex;align-items:center;gap:8px;">
          <kbd style="padding:8px 12px;border-radius:6px;border:1px solid var(--line2);background:var(--panel2);box-shadow:0 3px 0 var(--line);font-size:12px;font-weight:bold;color:var(--ink);">⌘</kbd>
          <span style="color:var(--ink3);font-size:11px;">+</span>
          <kbd style="padding:8px 12px;border-radius:6px;border:1px solid var(--line2);background:var(--panel2);box-shadow:0 3px 0 var(--line);font-size:12px;font-weight:bold;color:var(--ink);">SHIFT</kbd>
          <span style="color:var(--ink3);font-size:11px;">+</span>
          <kbd style="padding:8px 12px;border-radius:6px;border:1px solid var(--line2);background:var(--panel2);box-shadow:0 3px 0 var(--line);font-size:12px;font-weight:bold;color:var(--ink);">P</kbd>
        </div>
      </div>`,
      css: `.${cls} { user-select: none; }`
    };
  },

  'rating-stars': (p, famIdx, varIdx, cls) => {
    const stars = [1,2,3,4,5].map(i => {
      const active = i <= Math.round(p / 20);
      return `<span style="font-size:20px;color:${active ? 'var(--ink)' : 'var(--track)'};">★</span>`;
    }).join('');
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};">
        <div style="display:flex;gap:4px;">${stars}</div>
        <div style="font-size:10px;color:var(--ink2);margin-top:6px;">SCORE // ${(p / 20).toFixed(1)} / 5.0</div>
      </div>`,
      css: `.${cls} { user-select: none; }`
    };
  },

  'media-scrubbers': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};width:100%;max-width:240px;padding:12px;">
        <div style="height:6px;background:var(--track);border-radius:999px;position:relative;">
          <div style="width:${p}%;height:100%;background:var(--ink);border-radius:999px;"></div>
          <div style="position:absolute;left:${p}%;top:50%;transform:translate(-50%,-50%);width:14px;height:14px;border-radius:50%;background:var(--ink);border:2px solid var(--panel);box-shadow:0 2px 5px rgba(0,0,0,.5);"></div>
        </div>
        <div style="display:flex;justify-content:space-between;font-size:9.5px;color:var(--ink3);margin-top:8px;">
          <span>01:24</span><span style="color:var(--ink);font-weight:bold;">TRACK_01</span><span>03:45</span>
        </div>
      </div>`,
      css: `.${cls} { user-select: none; }`
    };
  },

  'barcode-qr': (p, famIdx, varIdx, cls) => {
    return {
      html: `<div class="ha-comp ${cls}" style="--p:${p};">
        <div style="width:64px;height:64px;border:2px solid var(--ink);border-radius:8px;padding:6px;display:grid;grid-template-columns:repeat(3,1fr);gap:3px;position:relative;background:var(--panel2);">
          <div style="background:var(--ink);border-radius:2px;"></div>
          <div style="background:none;"></div>
          <div style="background:var(--ink);border-radius:2px;"></div>
          <div style="background:none;"></div>
          <div style="background:var(--ink);border-radius:2px;"></div>
          <div style="background:none;"></div>
          <div style="background:var(--ink);border-radius:2px;"></div>
          <div style="background:none;"></div>
          <div style="background:var(--ink);border-radius:2px;"></div>
          <div style="position:absolute;left:0;right:0;top:0;height:2px;background:var(--ink);box-shadow:0 0 6px var(--ink);animation:haScan 2s ease-in-out infinite alternate;"></div>
        </div>
        <div style="font-size:8.5px;color:var(--ink3);margin-top:6px;">MATRIX SCANNER</div>
      </div>`,
      css: `.${cls} { user-select: none; }`
    };
  },

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
  COMP_BUILDERS
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = global.HA_CATALOG;
}

})(typeof window !== 'undefined' ? window : globalThis);
