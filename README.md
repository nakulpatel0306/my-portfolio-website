# Nakul Patel - Current Portfolio Website

My personal developer portfolio and the version I keep updated: one lowercase column covering my work, projects, education, skills and how to reach me, in light or dark. Built with plain HTML, CSS and JavaScript. The old version is archived at [portfolio-website-archive](https://github.com/nakulpatel0306/portfolio-website-archive).

**Live at [nakul-patel.dev](https://nakul-patel.dev)**

## At a Glance

- **Stack:** HTML, CSS and JavaScript. No framework or bundler; the build just copies files into `dist/`
- **Hosting:** Cloudflare Workers, deployed on every push to `main`
- **Resume:** [`assets/nakul-patel-software-resume.pdf`](assets/nakul-patel-software-resume.pdf) (last updated November 2026)
- **State:** Live and actively maintained

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
   git clone https://github.com/nakulpatel0306/my-portfolio-website.git
   cd my-portfolio-website
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

Four earlier designs can still be browsed as commits on GitHub: [The World](https://github.com/nakulpatel0306/my-portfolio-website/tree/2895f13), [Bento](https://github.com/nakulpatel0306/my-portfolio-website/tree/53be7be), [Origin Story](https://github.com/nakulpatel0306/my-portfolio-website/tree/27bf8d7) and an [IDE-style build](https://github.com/nakulpatel0306/my-portfolio-website/tree/a2260e1). The site before all of them is archived at [portfolio-website-archive](https://github.com/nakulpatel0306/portfolio-website-archive).
