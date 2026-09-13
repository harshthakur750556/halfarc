# HALFARC® — Monochrome UI Component Gallery

**17,640 animated, structurally distinct UI components across 84 specialized groups**, engineered in uncompromising pure monochrome. Browse live animated thumbnails on the catalogue homepage, dive into any group's dedicated variant chamber containing 210 variations, inspect and test any component with context-aware semantic controls in real time, and copy or download self-contained drop-in code.

Open `index.html` in any modern browser. Zero build steps, zero npm packages, zero external dependencies, and strictly zero color anywhere.

---

## What Makes HALFARC Different

1. **True Structural & Kinetic Diversity**:
   Every group contains **210 unique variants** powered by an orthogonal matrix of **15 structural Sub-Families** and **14 kinetic Archetypes**. Variants are not just line-weight tweaks—they feature radically distinct geometries (segmented ladders, dual channels, calibrated tachometer rings, inset frames, glowing halos, floating orbital satellites) and distinct kinetic behaviors (continuous sweeps, strobes, breathing pulses, glitch jitters, equalizer bounces, matrix cascades).

2. **Context-Aware Modal Inspector Controls**:
   No more generic 0–100 sliders where they make no sense. The inspector dynamically adapts its controls to the component's semantic nature:
   * **Push Buttons & Icon Triggers**: Tactile click/press simulation, haptic impulse triggers, and state switchers (`Normal`, `Hover`, `Active`, `Disabled`, `Loading`).
   * **Bistable Switches & Toggles**: Mechanical toggle switches with discrete `ON` and `OFF` states.
   * **OTP & PIN Code Inputs**: Interactive `0–9` virtual numeric keypad with live backspace and clear.
   * **Counter Steppers**: Precision `+` and `–` delta increments with reset.
   * **Audio, Oscilloscopes & Radars**: Media transport controls (Play / Pause, `0.45×` / `1×` / `2×` speed multipliers, and instantaneous peak ping signal injection).
   * **Continuous Gauges, Indicators & Faders**: Calibrated scrub sliders with rapid preset buttons (`0%`, `25%`, `50%`, `75%`, `100%`).

3. **Persistent Masthead Tools**:
   Engineered with a responsive two-row flex architecture that guarantees controls are never pushed offscreen or clipped on any screen size:
   * **Replay / Reset All (`R`)**: Re-triggers and synchronizes all CSS keyframe animations across the current viewport.
   * **Slow Motion Mode (`S`)**: Switches dynamic physics to `0.45×` speed for micro-frame visual inspection.
   * **Bookmarks Drawer (`F`)**: Instant filter to view starred components, complete with a live badge counter.
   * **Monochrome Invert (`I`)**: Instantly flips between high-contrast Deep Void Black (`#0a0a0c`) and Phosphor White (`#f5f5f7`).

4. **Cinematic UI Transitions**:
   Smooth view fade-in transitions (`viewFadeIn`), staggered card entrances, tactile active-press depth, and alive CSS keyframe loops.

---

## Catalogue Architecture

HALFARC is organized into a cohesive, brutalist monochrome design system gallery:

```
├── Homepage (Catalogue View)
│   ├── Masthead Navigation & Tools (Search, Bookmarks, Replay, Slow-Mo, Theme Invert)
│   ├── Category Rails (Indicators, Controls, Audio, Feedback, Nav, Data, Forms, HUD, Media)
│   ├── 84 Living Group Cards (Live CSS/SVG micro-animations running at 60fps)
│   └── Real-time Global Search (Instant multi-term filtering across groups and archetypes)
│
├── Group Chamber View (210 Distinct Variants Per Group)
│   ├── Breadcrumb Navigation ("← Back to Catalogue / [Group Name]")
│   ├── 15 Sub-Family Filter Chips (Instant sub-family isolation)
│   ├── Group 1: Semi-Circular Scroll Indicators (Signature 210 variants across 30 families)
│   ├── Groups 2–84: 83 Specialized Component Groups (Gauges, Knobs, Radars, HUDs, Matrices)
│   └── Lazy-Mounted Grid (IntersectionObserver animates only on-screen elements)
│
└── Inspector Modal
    ├── Interactive Stage Preview with live semantic controls
    ├── Semantic Controls Panel (Buttons, Switches, Keypads, Steppers, Audio Transport, Sliders)
    ├── Drop-in HTML+CSS snippet tab
    ├── Complete standalone HTML file tab (ready to save & open)
    └── Copy code & Download .html actions
```

---

## Sub-Family & Kinetic Archetype Matrix

Within each group, 210 variants are deterministically synthesized from **15 structural sub-families** multiplied by **14 kinetic archetypes**:

### 15 Structural Sub-Families
1. **Hairline Minimal**: Crisp 1px ultra-thin vectors, surgical line work, and pure negative space.
2. **Segmented Ladder**: Discrete stepped bars, segmented blocks, and quantified levels.
3. **Dual Channel**: Parallel dual tracks, comparative differential rails, and mirrored stems.
4. **Tachometer / Dial**: Radial dial markings, outer tick rims, and angled gauge sweeps.
5. **Tick Calibrated**: High-precision engineering graduation lines, major/minor tick marks.
6. **Halo Glow**: Phosphor back-glow filters, drop shadows, and soft ambient field illumination.
7. **Dashed Rail**: Industrial dashed borders, technical perforations, and segmented tracks.
8. **Center Hub**: Heavy concentric core focal discs, pivot bearings, and central readouts.
9. **Triple Stack**: 3-tier concentric or layered channels, triple progress conduits.
10. **Inset Channel**: Debossed recessed channels, bevelled tracks, and deep tactile grooves.
11. **Stepped Matrix**: 2D dot and block arrays, coordinate points, and discrete cells.
12. **Framed Bezel**: Chamfered industrial corner-bracket enclosures and telemetry borders.
13. **Monolithic Slab**: Heavy brutalist solid geometries, bold block silhouettes, and stark fills.
14. **Micro Orbit**: Planetary orbital satellite dots, sweeping rings, and rotary beacons.
15. **Gradient Sweep**: Monochrome gradient ramps, fading tail sweeps, and luminance masks.

### 14 Kinetic Archetypes
1. **Base Static/Driven**: Direct reactive control via CSS property `--p`.
2. **Inverted Flow**: Reverse direction, complimentary fill sweep, or inverted contrast.
3. **Sweeping Radar**: Smooth 360° continuous rotary sweep (`@keyframes radarSweep`).
4. **Strobe Beacon**: Crisp binary blinking status cadence (`@keyframes strobeBlink`).
5. **Breathing Pulse**: Organic ease-in-out glow and scale oscillation (`@keyframes breathGlow`).
6. **Glitch Jitter**: Cyberpunk horizontal displacement and micro-flicker (`@keyframes glitchJitter`).
7. **Wave Phase**: Traveling sinusoidal motion and rhythmic phase offsets (`@keyframes waveMotion`).
8. **Equalizer Bounce**: Multi-tier dynamic organic heights (`@keyframes eqBounce`).
9. **Orbit Spinner**: High-speed counter-rotating satellite orbital loops (`@keyframes orbitSpin`).
10. **Matrix Cascade**: Sequential digital stream flow and bit rain (`@keyframes matrixFlow`).
11. **Hazard Dash**: Diagonal marquee track motion (`@keyframes hazardScroll`).
12. **Dual Harmonic**: Dual counter-phased oscillation frequencies.
13. **Stepped Notch**: Quantized discrete snap steps.
14. **Phosphor Decay**: Smooth fading persistence tail simulating analog cathode-ray tubes.

---

## Component Groups (84 Groups · 17,640 Variants)

### 1. Indicators & Gauges (10 Groups · 2,100 Variants)
* **GRP-01: Semi-Circular Scroll Indicators** (`semi-circle-indicator`): 210 precision semi-circle indicators in 30 families, driven by `--p`.
* **GRP-02: Circular Progress Gauges & Rings** (`circular-gauges`): Full 360° progress rings, tachometers, dial needles, and calibrated orbits.
* **GRP-03: Linear Progress Bars & Micro-Tracks** (`linear-progress`): Sleek horizontal tracks, laser scanning heads, hazard stripes, and LED rails.
* **GRP-04: Step Progress Trackers & Workflow Steppers** (`step-progress`): Multi-stage node pipelines, connected circuits, and milestone beacons.
* **GRP-05: Segmented Level Meters & Discrete Bars** (`segmented-meters`): Discrete LED block columns, studio level ladders, and threshold bars.
* **GRP-06: Battery & Power Level Cells** (`battery-indicators`): Precision battery housings, charging bolt glyphs, cell stacks, and plasma cores.
* **GRP-07: Signal Strength & Connectivity Bars** (`signal-meters`): Ascending cellular bars, radial Wi-Fi arcs, antenna towers, and broadcast arrays.
* **GRP-08: Speedometer & Tachometer Dials** (`speedometer-gauges`): 240° and 270° sweeping needles, high-RPM redline zones, and digital odometers.
* **GRP-09: Compass Rings & Heading Reticles** (`compass-rings`): Azimuth bearing rings, navigation gyros, 360° degree rims, and military stars.
* **GRP-10: Vertical Altimeter & Depth Scales** (`altimeter-scales`): Vertical graduation tapes, rolling elevation carats, and depth meters.

### 2. Controls & Inputs (10 Groups · 2,100 Variants)
* **GRP-11: Rotary Knobs & Potentiometer Dials** (`rotary-knobs`): Tactile volume wheels, knurled metal rims, pointer notches, and detent encoders.
* **GRP-12: Toggle Switches & Bistable Levers** (`toggle-switches`): Mechanical toggle levers, pill sliders, rocker plates, and status LEDs.
* **GRP-13: Range Sliders & Dual-Thumb Faders** (`range-sliders`): Precision horizontal tracks, floating value bubbles, and dual-boundary thumbs.
* **GRP-14: Tactile Push Buttons & Micro-Capsules** (`push-buttons`): Tactile press-down buttons, chamfered tactical triggers, and glowing borders.
* **GRP-15: Segmented Tabs & Selector Bars** (`segmented-controls`): Sliding pill switchers, bordered modular blocks, and monospace rails.
* **GRP-16: Radio Buttons & Precision Discs** (`radio-selectors`): Concentric target discs, animated inner pop dots, and diamond radios.
* **GRP-17: Checkboxes & Multi-State Ticks** (`checkbox-states`): Cyber square checkboxes, animated drawing checkmarks, and indeterminate dashes.
* **GRP-18: Icon Action Buttons & Tool Triggers** (`icon-buttons`): Square, round, and hex icon housings with hover crosshair frames.
* **GRP-19: Split Action Buttons & Drop Triggers** (`split-buttons`): Dual-action split buttons, primary command + chevron drop triggers.
* **GRP-20: Vertical Studio Faders & Console Channels** (`volume-faders`): Studio console faders, grip line thumbs, and decibel scales.

### 3. Audio & Signal (10 Groups · 2,100 Variants)
* **GRP-21: Audio Equalizer Bars & Band Spectrums** (`audio-equalizer`): 8, 16, and 32-band equalizer columns bouncing in organic rhythms.
* **GRP-22: Audio Waveforms & Track Scanners** (`waveform-monitors`): Symmetrical sound wave envelopes and scanning playhead needles.
* **GRP-23: Oscilloscope CRT Traces & Sine Sweeps** (`oscilloscope-traces`): CRT oscilloscope traces, phosphor sine waves, and Lissajous loops.
* **GRP-24: Analog VU Decibel Needles & Grids** (`vu-meters`): Galvanometer needles, backlit dials, -20dB to +3dB scales, and peak LEDs.
* **GRP-25: BPM Tappers & Metronome Needles** (`bpm-metronomes`): Inverted pendulum tempo arms, sliding counter-weights, and tap triggers.
* **GRP-26: Frequency Spectrum Ribbons & Cascades** (`spectrum-analyzers`): FFT waterfall cascades, logarithmic bands, and filled ribbons.
* **GRP-27: Radar Sweeps & Sonar Pings** (`radar-sweeps`): Rotating 360° radar beams, glowing phosphor blips, and sonar echo circles.
* **GRP-28: Crosshair Reticles & Targeting Sights** (`crosshair-reticles`): Tactical HUD reticles, sniper mil-dots, and locking brackets.
* **GRP-29: Telemetry HUDs & Flight Avionics** (`telemetry-hud`): Fighter jet pitch ladders, artificial horizons, and flight vectors.
* **GRP-30: Acoustic Nodes & Audio Rings** (`acoustics-visualizers`): Omnidirectional sound ripples, speaker cone excursions, and particle lattices.

### 4. Feedback & Status (10 Groups · 2,100 Variants)
* **GRP-31: Loading Spinners & Gyro Orbiters** (`loading-spinners`): Counter-rotating gyro rings, orbital bead satellites, and rotors.
* **GRP-32: Pulsing Status Beacons & Ping Nodes** (`pulse-beacons`): Concentric radiating ripples, glowing presence dots, and alive pulses.
* **GRP-33: Skeleton Loaders & Ghost Wireframes** (`skeleton-shimmers`): Ghost text lines, avatar plates, and card wireframes with scanning shimmer.
* **GRP-34: Status Pill Badges & Live State Chips** (`status-pills`): Monospaced status pills with live blinking status LEDs.
* **GRP-35: Notification Badges & Unread Counter Pips** (`notification-dots`): Bell badges, unread counter pills, and pinging corner dots.
* **GRP-36: Cyber Glitch Decoders & Signal Faults** (`glitch-elements`): Fractured cyber typography, horizontal scanline offsets, and jitter decoders.
* **GRP-37: Matrix Rain & Digital Bit Streams** (`matrix-streams`): Cascading columns of binary bits and hex bytes raining in rhythms.
* **GRP-38: Indeterminate Progress & Laser Sweepers** (`shimmer-bars`): Endless scanning lasers, sweeping frosted highlights, and travelling dashes.
* **GRP-39: System Alert Banners & Callout Strips** (`banner-alerts`): Technical system alert callouts, warning brackets, and dismiss crosses.
* **GRP-40: Toast Notifications & Console Snackbars** (`toast-popups`): Floating notification snackbars with timeout countdown progress hairlines.

### 5. Navigation & Steps (10 Groups · 2,100 Variants)
* **GRP-41: Breadcrumb Paths & Chevron Hierarchies** (`breadcrumb-navs`): Stepped path breadcrumbs, slash/chevron delimiters, and active node glows.
* **GRP-42: Pagination Controls & Page Number Strips** (`pagination-bars`): Number strips, active page boxes, ellipsis jumpers, and micro arrow buttons.
* **GRP-43: Multi-Step Wizards & Milestone Ladders** (`step-wizards`): Linear multi-step wizards, completed check circles, and active flags.
* **GRP-44: Tab Navigators & Underline Sliders** (`tab-navigators`): Top tab rails, sliding underline track indicators, and pill tab docks.
* **GRP-45: Hierarchical Tree Views & Branch Nodes** (`tree-views`): Collapsible folder trees, directory branch lines, and document glyphs.
* **GRP-46: Floating Action Hubs & Radial Docks** (`floating-action-menus`): Expandable floating action hubs and radial action satellites.
* **GRP-47: Context Menus & Hover Flyout Stacks** (`context-menus`): Floating context menus, keyboard shortcut chips, and submenu chevrons.
* **GRP-48: Vertical Timeline Nodes & Event Stems** (`timeline-nodes`): Vertical milestone stems, event timestamps, and pulse junction dots.
* **GRP-49: Accordion Drawers & Expandable Shelves** (`accordion-drawers`): Collapsible drawer headers, rotating chevrons, and expanding shelves.
* **GRP-50: Slim Sidebar Rails & Icon Anchors** (`nav-rails`): Vertical navigation rails, active indicator pips, and compact docks.

### 6. Data Vis & Charts (10 Groups · 2,100 Variants)
* **GRP-51: Sparkline Trend Lines & Hairline Curves** (`sparkline-charts`): Micro trend lines, cubic splines, glowing terminal endpoints, and fill fades.
* **GRP-52: Mini Column Charts & Distribution Bars** (`mini-bar-charts`): Discrete distribution columns, staggered entrance heights, and hover bars.
* **GRP-53: Area Graph Silhouettes & Gradient Meshes** (`area-graph-plots`): Filled area graph curves, dual-layer comparative plots, and backdrop grids.
* **GRP-54: Donut Charts & Proportional Rings** (`donut-charts`): Segmented proportional rings, concentric metric donuts, and center total readouts.
* **GRP-55: KPI Metric Cards & Stat Counters** (`kpi-metric-cards`): Brutalist metric stat cards, large bold digits, trend delta pills, and sparklines.
* **GRP-56: Heatmap Density Grids & Activity Matrices** (`heatmap-grids`): Activity matrices, contribution squares, and pulsating density levels.
* **GRP-57: Scatter Plots & Dot Matrix Coordinates** (`scatter-matrices`): Coordinate grids, scattered data points, cluster distributions, and crosshairs.
* **GRP-58: Financial Candlestick Bars & High-Low Spikes** (`candlestick-bars`): Candlestick bars, upper/lower wick hairlines, and hollow/filled bodies.
* **GRP-59: Minimal Data Table Rows & Grid Cells** (`data-tables`): Tabular rows, monospace columns, alignment guides, and scanline hovers.
* **GRP-60: Code Diff Comparisons & Inline Patches** (`diff-viewers`): Code diff views, +/- gutter indicators, modified line highlights, and chunk markers.

### 7. Form Controls (10 Groups · 2,100 Variants)
* **GRP-61: Monospaced Text Inputs & Ghost Fields** (`text-inputs`): Text inputs, blinking block cursors, active border brackets, and prefixes.
* **GRP-62: Quick Search Bars & Command Palettes** (`search-bars`): Search input fields, magnifying glass icons, and keyboard shortcut tags (`/`, `⌘K`).
* **GRP-63: Password Mask Fields & Cipher Discs** (`password-masks`): Masked password fields, cipher dot rows, reveal eye toggles, and strength bars.
* **GRP-64: OTP PIN Code Inputs & Segmented Digits** (`pin-code-boxes`): Segmented verification digit cells and active focus borders.
* **GRP-65: Monochrome Swatch Pickers & Tone Scales** (`color-swatches`): Greyscale palette ramp pickers, tone chips, and active selector rings.
* **GRP-66: Minimal Date Pickers & Month Matrices** (`date-pickers`): Compact calendar matrices, day header rows, and active date selection dots.
* **GRP-67: Time Selector Dials & Digital 24H Digits** (`time-selectors`): Digital 24H time displays, blinking colon separators, and AM/PM toggles.
* **GRP-68: File Upload Dropzones & Boundary Frames** (`file-dropzones`): Dashed drag-and-drop targets, upload arrow vectors, and progress states.
* **GRP-69: Tag Cloud Inputs & Token Pills** (`tag-inputs`): Multi-token input clouds, removable tag pills with cross icons, and text prompts.
* **GRP-70: Numeric Counter Steppers & Plus/Minus Increments** (`stepper-inputs`): Tactile counter steppers, - and + micro triggers, and numeric readouts.

### 8. HUD & Surfaces (10 Groups · 2,100 Variants)
* **GRP-71: Cyberpunk HUD Panels & Technical Bezels** (`hud-panels`): Corner-bracketed HUD enclosures, tech metadata headers, and chamfers.
* **GRP-72: Minimalist Surface Cards & Framed Modules** (`card-containers`): Brutalist surface cards, hairline divider rules, and subtle inset panels.
* **GRP-73: Precision Tooltip Balloons & Target Callouts** (`tooltip-balloons`): Floating pointer flags, anchor chevrons, and dark bubble frames.
* **GRP-74: Popover Dialogs & Anchored Modals** (`popover-cards`): Anchored popover boxes, header close crosses, and elevation backdrops.
* **GRP-75: User Avatar Rings & Presence Badges** (`user-avatars`): Monogram avatar discs, presence beacon dots (online/busy/away), and concentric rings.
* **GRP-76: Identity Profile Badges & ID Badges** (`profile-cards`): Compact identity badges, avatar circles, handle tags, role badges, and status lines.
* **GRP-77: Tier Pricing Cards & Spec Tables** (`pricing-cards`): Tier comparison cards, large currency numerals, billing frequency tags, and CTAs.
* **GRP-78: Feature Comparison Checks & Bullet Grids** (`feature-lists`): Vertical feature checklists, crisp SVG tick icons, and muted negative crosses.
* **GRP-79: Terminal Prompt Windows & Shell Headers** (`terminal-windows`): Unix terminal headers, traffic light window dots, and blinking block cursor.
* **GRP-80: Code Snippet Boxes & Syntax Badges** (`code-boxes`): Code container blocks, language badges (`CSS`/`JS`), line numbers, and copy buttons.

### 9. Media & Utilities (4 Groups · 840 Variants)
* **GRP-81: Keyboard Shortcut Chips & Key Caps** (`keybinding-kbd`): Raised tactile keyboard key caps and modifier glyphs (`⌘`, `⌥`, `⇧`, `⌃`).
* **GRP-82: Precision Star Ratings & Review Ranks** (`rating-stars`): 5-star precision rating tracks, fractional star fills, and numeric scores.
* **GRP-83: Media Player Scrubber Rails & Playheads** (`media-scrubbers`): Video/audio player progress rails, timecodes, buffer bars, and thumbs.
* **GRP-84: QR Code Matrix Frames & Technical Barcodes** (`barcode-qr`): Wireframe QR code matrix frames, corner finder targets, and laser scanlines.

---

## The Single Property Contract (`--p`)

All dynamic components in HALFARC follow a unified design contract: they are live, reactive, and driven by CSS custom properties without requiring heavy runtime frameworks:

```html
<!-- Example drop-in component -->
<div class="ha-comp ha-cpg-016" style="--p: 68">
  <!-- SVG / Semantic HTML Markup -->
</div>
```

```javascript
// Drive dynamically anywhere with pure JavaScript:
document.querySelector('.ha-comp').style.setProperty('--p', 92);
```

Discrete elements (segments, blocks, ticks, meter bars, stairs) derive their lit state using CSS math (`calc()`, `clamp()`), and continuous elements (arcs, indicators, faders, gauges) derive their offsets, rotations, or widths directly from `--p`.

---

## Keyboard Shortcuts

| Shortcut | Context | Action |
|---|---|---|
| `/` | Global | Focus and select search query input |
| `Esc` | Global | Close inspector modal or blur search |
| `R` | Catalog / Group View | Replay and re-synchronize all CSS animations |
| `S` | Global | Toggle Slow-Motion mode (`0.45×` physics) |
| `I` | Global | Toggle Monochrome theme inversion (Dark / Light) |
| `F` | Global | Toggle Bookmarks / Favorites drawer |
| `←` / `→` | Inspector Modal | Navigate to Previous / Next variant |
| `C` | Inspector Modal | Copy active code snippet to clipboard |

---

## File Structure

* `index.html` — Main single-page application shell containing Catalogue Homepage & Group Variant views.
* `app.js` — Hash router, filter engine, lazy-mounting IntersectionObserver, semantic context-aware inspector controls, and clipboard exporter.
* `catalog-data.js` — 84 component group definitions, live thumbnail renderers, and deterministic 15-family × 14-archetype variant generator engine.
* `engine.js` — Signature builders for the Semi-Circular Scroll Indicator group.
* `specs.js` — Hand-tuned specs for the 210 Semi-Circular Scroll Indicator variants.
* `style.css` — App shell, group card layout, breadcrumbs, animations, inspector controls, and monochrome color tokens.
