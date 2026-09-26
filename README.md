# Nakul Patel — Portfolio

**The live site is [nakul-patel.dev](https://nakul-patel.dev).** That is the
`main` branch of this repo, deployed to Cloudflare Workers on every push. Anything
else here is an experiment and is not the site.

One portfolio, four completely different designs, each on its own branch, each
exploring a different inspiration. All of them are hand-built with vanilla HTML,
CSS and JavaScript: no frameworks, no bundler, the same content (projects,
experience, skills, contact) reimagined four ways.

## The four designs

| Branch | Design | Inspiration | Signature moments |
|---|---|---|---|
| [`main`](../../tree/main) — **live** | **Minimal** | The quiet single-column personal sites: lowercase, unhurried, no ornament | A ⌘K command palette, a theme change that wipes in as a circle, text that decodes on load, spring-physics tilt on the widget cards |
| [`design/v3`](../../tree/design/v3) | **The World** | The great WebGL portfolios (Bruno Simon): a low-poly 3D island rendered with Three.js | Drag to orbit the island, hover six glowing pedestals (each project is a tiny 3D sculpture), click to jump to a project; preloader, inertia scroll, custom cursor |
| [`design/v4`](../../tree/design/v4) | **Bento** | Dashboard bento grids: graphite tiles, a mint signal colour, everything scannable at a glance | 11 hero tiles that tilt in 3D on hover, dual skills marquees running in opposite directions, a drag-to-scroll photo strip |
| [`design/v5`](../../tree/design/v5) | **Origin Story** | Superhero comics crossed with minimal editorial portfolios: ink black, crimson and gold, poster typography, halftone textures | Sections numbered like comic issues, cursor spotlight, cascading "power stats" skill bars |

Only `main` is deployed. The other three branches are kept so the designs are
still readable and runnable, not because anything serves them.

There is a fifth design that never got a branch of its own, living only in this
repo's history: an **IDE-style portfolio** (a working VS Code-like interface in a
purple dark theme, with a file explorer, tabs, command palette and interactive
terminal) at commit [`a2260e1`](../../commit/a2260e121e639547db4a0ac26cecf2063d0e09f8).

## Shared DNA

Every design carries the same principles:

- **Vanilla everything** — plain HTML/CSS/JS with no framework and no bundler; the only third-party file anywhere in the repo is the vendored Three.js that `design/v3` needs
- **Responsive** — desktop to mobile, with layout fallbacks where the fancy version doesn't fit
- **Accessible motion** — every animation respects `prefers-reduced-motion`
- **An easter egg** — the Konami code (↑ ↑ ↓ ↓ ← → ← → B A) does something in all of them

## Running a design locally

```bash
git clone https://github.com/nakulpatel0306/my-portfolio-part-two.git
cd my-portfolio-part-two

git checkout main        # Minimal      (the live site)
git checkout design/v3   # The World
git checkout design/v4   # Bento
git checkout design/v5   # Origin Story

python3 -m http.server 5173
# then open http://localhost:5173
```

Each branch's own README documents that design's palette, type system and
features in detail.

---

# The design on this branch — Minimal

The quiet one. A single narrow column, everything lowercase, no photo — just the
name, the work, the projects and a way to reach me, in the order you'd actually
read them.

The restraint is in the *design*, not the code: underneath there's a ⌘K command
palette, a theme change that wipes in as a circle, text that decodes into place,
and spring physics on the cards. Still vanilla HTML/CSS/JS, one web font, zero
dependencies — every effect is a browser API used directly.

## Features

- **One column, 40rem wide** — the whole site is a single read, top to bottom, on every screen size, wide enough that rows don't wrap a single word onto a line of its own
- **All lowercase** — written that way in the markup, not forced with `text-transform`, so it copies and reads as intended
- **Light and dark** — a two-option switch (`light` / `dark`) sits at the top right; it starts on whichever the system prefers and the choice sticks from then on. An inline head script applies the stored theme before first paint, so there's no flash of the wrong colours
- **A three-card widget row** — availability, location and current role, sitting under the name so the three things a recruiter screens on are answered before any scrolling. The résumé sits in the top bar, opposite the theme switch
- **A liquid-glass surface** — the widget cards, theme switch, skill panel and command palette are translucent, blurred and saturated, with a highlight along the top lip and a specular reflection that tracks the pointer. Backdrop blur does nothing over a flat colour, so the page carries the mesh below for the glass to bend
- **A background that drifts** — four soft violet pools, split across two fixed layers so they can move on different clocks (46s and 67s) and keep changing how they overlap, which is what stops them reading as circles. Only `transform` and `opacity` animate, both composited, so the 52px blur behind them is rasterised once rather than on every frame. Over the top sits a tile of desaturated SVG grain at plain alpha — blend modes collapse at both ends of the range, so `overlay` is invisible on paper white and `soft-light` is invisible on near-black. In dark it runs at 0.035, about two levels out of 255: texture, still dark
- **A typewriter role line** — types a title, holds, backspaces and takes the next, cycling `software developer`, `ml engineer` and `full stack developer`. Deleting runs faster than typing, which is what makes it read as typing rather than as a ticker. A visually-hidden stable description sits behind it so screen readers get one sentence, not a stream
- **A filterable skill deck** — 52 skills in six groups (languages, frameworks, tools, ml & data, engineering, growth), opening on a curated **strongest** set of 14 so the first glance is a readable mix rather than a wall. Every chip ships visible in the markup and the opening filter is applied unanimated before first paint, so the deck still reads with JS off. The chips *slide* to their new positions using FLIP (measure First, mutate, measure Last, Invert the delta as a transform, then Play it off), so filtering reads as rearranging rather than repainting
- **Interests as a marquee** — the nine chips scroll past on a loop and stop under the pointer. The track is the list duplicated once, with the spacing on each item rather than as a flex gap, so the halfway point falls exactly on the copy and the loop never jumps. Under `prefers-reduced-motion` it stops scrolling and wraps as an ordinary row
- **A pinned top bar** — résumé, socials and the theme switch stay put as the page scrolls. The frosted backing fades in only once the bar pins, driven by an `IntersectionObserver` on a one-pixel sentinel rather than a scroll handler
- **Socials in two registers** — icon-only in the top bar beside the résumé, where a recruiter finds them without scrolling, and the same five links labelled in `elsewhere` at the foot. The icons carry `aria-label`s, so icon-only costs nothing to a screen reader
- **Links that read as links** — a dotted rule under anything clickable that goes solid on hover, and a small arrow that fades in on the ones opening a new tab
- **One icon set** — twelve hand-written inline SVGs at a single 1.75 stroke weight, inheriting `currentColor` so they re-tone with the theme
- **A ⌘K command palette** — subsequence matching (`ghb` finds *open github*), matched characters highlighted as you type, full keyboard control, and `aria-activedescendant` wired to a real listbox. Jump to a section, switch theme, copy the email, open a link
- **A theme change that wipes in** — the new palette grows as a circle from the button you clicked, via the View Transitions API driven by a `clipPath` keyframe on `::view-transition-new(root)`. Browsers without it get the plain instant swap
- **Text that decodes on load** — the name and role resolve out of noise, each character settling at its own random moment so the word arrives raggedly instead of left to right
- **Scroll rail and reveal-on-scroll** — a hairline progress bar driven by one `requestAnimationFrame` per scroll burst (never one per event), and an `IntersectionObserver` that staggers the first screenful and reveals the rest as you reach them
- **Spring physics on the widget cards** — a real integrator, force into velocity into position with damping, so the tilt overshoots and settles rather than easing on a fixed curve. It stops its own RAF loop once at rest
- **The easter egg, quietly** — the Konami code flips the lights and says `nice.`
- **Accessible by default** — real landmarks and lists, a labelled theme group whose buttons carry `aria-pressed`, a palette that restores focus on close (with `preventScroll`, so a jump isn't yanked back), and contrast that holds in both themes
- **Degrades honestly** — every effect is feature-detected and every one is inert under `prefers-reduced-motion`. Content is only hidden for reveal if the inline head script proved JS is alive, so with JS off the page renders in full rather than blank

## Palette & type

Paper `#fcfcfb` · ink `#17171a` · muted `#55555d` · faint `#74747c` · rule `#e7e7e3` · available `#4a9e6a`
Dark: `#0f0f10` · `#ededee` · `#a1a1a9` · `#7e7e87` · `#232326` · `#5cba80`
Every text tone clears WCAG AA (4.5:1) against its background in both themes.
**Inter** 400/500/600 at 15px — one family, three weights, no display face

Glass: a translucent fill over an 18px backdrop blur at 180% saturation, a hairline
edge, an inset highlight along the top lip, and a pointer-tracked specular sweep in
`soft-light`. Behind it, four blurred radial pools in violet, purple and deep violet
(`#8b5cf6`, `#a855f7`, `#7c3aed`, `#6d28d9`) at 20–34% in light and 16–26% in dark,
drifting on two clocks, with grain over the top at 0.05 light / 0.035 dark. The paper
itself is `#fcfbfe`, a breath of violet, so the pools sit in the page rather than on
top of it. Accent `#8b5cf6` light / `#a78bfa` dark.

## Structure

```
.
├── index.html   # Intro + widgets, about, work, projects, education,
│                #   skills, elsewhere
├── 404.html     # Same shell, for a mistyped URL
├── style.css    # Tokens for both themes, drifting mesh + grain, glass,
│                #   skills, focus, print
├── script.js    # Theme + view-transition wipe, scramble, rail, reveals, spring
│                #   tilt, specular tracking, typewriter, FLIP skill filter,
│                #   command palette
├── assets/
│   ├── favicon.svg           # Tab icon
│   ├── apple-touch-icon.png  # Home-screen icon, 180×180
│   ├── preview.png           # Link-preview card, 1200×630
│   └── nakul-patel-software-resume.pdf
├── build.js         # Copies the pages + the assets they reference into dist/
├── wrangler.jsonc   # Cloudflare Workers: serve dist/, and own the domain
├── package.json     # No dependencies; build / dev / deploy scripts
└── .gitignore       # dist/, node_modules/, .wrangler/
```

## Things to try

| | |
|---|---|
| <kbd>⌘</kbd><kbd>K</kbd> / <kbd>Ctrl</kbd><kbd>K</kbd> | open the command palette — then type `ghb`, or `zzz` to see it come up empty |
| Click `light` / `dark` | the new theme wipes out in a circle from the button |
| Reload | watch the name decode into place |
| Hover a widget card | spring tilt that overshoots and settles, with the reflection following your pointer |
| Click a skill group | the chips slide to their new places rather than jumping |
| <kbd>↑</kbd><kbd>↑</kbd><kbd>↓</kbd><kbd>↓</kbd><kbd>←</kbd><kbd>→</kbd><kbd>←</kbd><kbd>→</kbd><kbd>B</kbd><kbd>A</kbd> | flips the lights and says `nice.` |

## Deploying

The site runs on **Cloudflare Workers** at https://nakul-patel.dev.

`npm run build` copies the four pages and the assets they actually reference
into `dist/`, and `wrangler.jsonc` points Cloudflare at that folder. There is
no Worker script and no bundler: Cloudflare serves the files and nothing else.
Building into `dist/` rather than serving the repo root is what keeps `.git`,
the workflow and this README off the public site, along with the ~20MB of
photo sets the designs on the other branches use.

### Cloudflare, first time

**Workers & Pages -> Create -> Import a repository**, pick this repo, then:

| Field | Value |
| --- | --- |
| Project name | `my-portfolio-part-two` |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |

Every push to `main` redeploys from then on.

### The custom domain

`nakul-patel.dev` and `www.nakul-patel.dev` are declared as custom-domain
routes in `wrangler.jsonc`, so a deploy creates them and their DNS records
itself: the zone is in the same Cloudflare account, and the certificate is
issued automatically. Nothing to click, and nothing to add at a registrar.

`workers_dev` is left on, which keeps `my-portfolio-part-two.<account>.workers.dev`
serving the same site. Set it to `false` once the domain is settled, so the
site answers on one address instead of two.

`og:url` and `og:image` in `index.html` are the only absolute URLs in the
project and already point at the custom domain.

### By hand

```
npm run deploy     # build, then npx wrangler deploy
```

Needs `npx wrangler login` once.

### There is only the one deploy

`nakul-patel.dev` is the site, and Cloudflare is the only thing that serves it.
There was a GitHub Pages workflow here until Cloudflare took over; it had been
failing on every push since it was added, because Pages was never enabled on
the repository, so it is gone rather than sitting in the tree going red.

---

**Nakul Patel** · CS + BBA @ Wilfrid Laurier University · [LinkedIn](https://www.linkedin.com/in/nakulpatel0306/) · [GitHub](https://github.com/nakulpatel0306)
