# HALFARC® — Semi-circle Indicator Catalogue (monochrome edition)

**210 animated, interactive semi-circle progress indicators** in 30 families, all strictly
monochrome. Browse them, hover them, drive them, and copy the exact code of any single one.

Open `index.html` (or use the live preview). No build step, no dependencies, no colour.

---

## Using the catalogue

| Control | What it does |
|---|---|
| Search (`/`) | Filters by id, name, family or mood word (`liquid`, `dashed`, `glow`, `dial`…) |
| Family chips | Jump to one of the 30 families (7 variants each) |
| ★ on a card / in the inspector | Favourite it (kept in `localStorage`); the star button filters to favourites |
| ◐ | Invert the palette — dark ↔ light. Every variant adapts through CSS variables |
| ◔ | Half-speed motion (0.45×) so you can study the easing |
| ↻ | Replay every entrance animation |
| Click / `Enter` on a card | Open the inspector |

### The inspector
* Big live preview + a **value slider (0–100)**. Most variants are *live*: dragging only changes
  one custom property, so you watch the real component react.
* `Replay` re-runs the entrance animation, `Randomise` picks a value.
* **HTML+CSS** tab → a drop-in snippet (markup + scoped `<style>` + the shared base).
* **Full file** tab → a complete standalone page with its own demo slider.
* `Copy code` puts the current tab on your clipboard; `Download .html` saves the full file.
* `←` / `→` walk the catalogue inside the inspector, `C` copies, `Esc` closes.

## The `--p` contract

Every (live) variant is driven by a single custom property on its root element:

```html
<div class="sc-ind v-043" style="--p:68"> … </div>
```

```js
el.style.setProperty('--p', 42);   // that's the whole API
```

Arcs derive `stroke-dashoffset` from `--p`, pointers derive `rotate()` from `--p`, discrete
elements (segments, dots, teeth, cells, tone bands) carry a `--thr` threshold and switch with a
`clamp()` — so there is **no JavaScript inside any exported indicator**. Entrance animations use
`animation-fill-mode: backwards`, which is what lets the same element transition smoothly when
`--p` changes later.

Three families bake their geometry (a numeral, a filled sector, a centre-deviation band):
`Numeric`, `Wedge`, `Deviation`. The inspector rebuilds them per value, and the exported snippet
says so in a comment.

Palette is variables only — `--ink`, `--track`, `--mid`, `--sc-bg` — with a
`prefers-color-scheme: light` override in exports and a `data-theme` override in the app.
Greys, alphas, blurs and motion do all the work; there is not a single hue in the codebase.

## Architecture (one source of truth)

```
engine.js   30 builder functions. build(spec, {pct, cls, uid}) -> {html, css}
specs.js    210 hand-tuned specs: family, name, description, options
app.js      grid + lazy mount, filters, favourites, inspector, code export, highlighter
style.css   app shell + the shared indicator base (.sc-ind, keyframes)
```

The card you see and the code you copy come from the **same** builder call, so the snippet is
never an approximation. All geometry lives in one `viewBox="0 0 100 58"` semi-circle
(centre `50,50`), which is why snippets drop into any layout at any width.

### Family index
Hairline · Segmented · Dot Rail · Radial Field · Pointer · Concentric · Masked Fill · Liquid ·
Numeric · Ruler · Marching · Dial · Comet · Pulse · Bloom · Matrix · Halo · Micro · Dual Arc ·
Groove · Ladder · Deviation · Framed · Stacked · Tone Steps · Ribbon · Spark · Wedge · Echo · Coil

## Implementation notes / gotchas solved here
* Chrome does not honour `pathLength` on dash patterns **inside `<mask>`** — masked reveals
  therefore compute their mask in user units (`πr`) while the visible textured stroke keeps
  `pathLength="100"`.
* Elements drawn at the arc's left end rotate by `--p * 1.8deg`; elements drawn pointing up
  (needles, dial index) rotate by `-90deg + --p * 1.8deg`. Mixing the two is a 90° bug.
* Off-screen cards get `animation-play-state: paused` via IntersectionObserver, so 210 animated
  SVGs stay cheap.
* `mix-blend-mode: difference` keeps numerals legible when they sit on top of a white fill
  (liquid, wedge) in both themes.
