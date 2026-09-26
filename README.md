# Nakul Patel - Portfolio Website

> **This is my current portfolio site.** It is live at https://nakul-patel.dev and is the one I keep updated.

My personal developer portfolio, built with plain HTML, CSS and JavaScript. One lowercase column covering my work, projects, education, skills and how to reach me, in light or dark.

Live site: https://nakul-patel.dev

## Status

- **State:** Live and maintained.
- **Resume:** `assets/nakul-patel-software-resume.pdf` (last updated September 2026)
- **Stack:** HTML, CSS and JavaScript. No framework or build step.
- **Hosting:** Cloudflare Workers, deployed on every push to `main`.

## Features

- Light and dark themes, remembered between visits
- Command palette on Cmd+K for jumping around the page
- Typewriter role line and text that decodes on load
- Glass cards that tilt under the pointer, over a drifting background
- Skills filtered into groups, interests scrolling on a loop
- Every animation respects `prefers-reduced-motion`

## Project Structure

```
.
├── index.html       # Sections: Intro, About, Work, Projects, Education, Skills, Elsewhere
├── 404.html         # Same shell, for a mistyped URL
├── style.css        # Themes, background, glass, layout
├── script.js        # Theme, command palette, typewriter, animations
├── build.js         # Copies the site into dist/ for deployment
├── wrangler.jsonc   # Cloudflare Workers config and the custom domains
├── package.json     # Build and deploy scripts, no dependencies
└── assets/          # Icons, link preview image and resume PDF
```

## Running Locally

1. Clone the repo:
   ```bash
   git clone https://github.com/nakulpatel0306/my-portfolio-part-two.git
   cd my-portfolio-part-two
   ```
2. Open `index.html` in your browser, or start a local server:
   ```bash
   python3 -m http.server 5173
   ```
   Then visit `http://localhost:5173`.

## Deploying

Cloudflare builds and deploys on every push to `main`: `npm run build` copies the site into `dist/`, then `npx wrangler deploy` uploads it. The `nakul-patel.dev` and `www.nakul-patel.dev` domains are declared in `wrangler.jsonc`, so a deploy creates them and their DNS records itself.

To deploy by hand, run `npm run deploy`. It needs `npx wrangler login` once.

## Previous Versions

Four earlier designs are in this repo's history: The World `2895f13`, Bento `53be7be`, Origin Story `27bf8d7` and an IDE-style build `a2260e1`. The site before all of them is archived at [portfolio-website-archive](https://github.com/nakulpatel0306/portfolio-website-archive).
