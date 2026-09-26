/* Stage the website into dist/, which is the only thing Cloudflare uploads.
   Serving the repo root instead would also ship .git, the workflow and the
   README, so the site gets its own folder.

   No dependencies and no bundling: the site is hand-written HTML, CSS and
   JS, so "building" it is a copy. The one piece of thinking here is which
   assets come along: the pages are scanned for the ones they actually
   reference and only those are copied, so an asset that stops being used
   stops shipping. Reference a new one from the markup and it ships;
   nothing to remember to update here. */
const { cpSync, rmSync, mkdirSync, readFileSync, existsSync } = require('node:fs');
const { dirname } = require('node:path');

const PAGES = ['index.html', '404.html', 'style.css', 'script.js'];

const assets = new Set();
for (const page of PAGES) {
  for (const hit of readFileSync(page, 'utf8').matchAll(/assets\/[A-Za-z0-9_.\/-]+/g)) {
    assets.add(hit[0]);
  }
}

rmSync('dist', { recursive: true, force: true });
mkdirSync('dist');
for (const page of PAGES) cpSync(page, 'dist/' + page);
for (const asset of [...assets].sort()) {
  // a typo in a path is a 404 in production; fail the build instead
  if (!existsSync(asset)) throw new Error('referenced but missing: ' + asset);
  mkdirSync('dist/' + dirname(asset), { recursive: true });
  cpSync(asset, 'dist/' + asset);
}

console.log('staged ' + PAGES.length + ' pages and ' + assets.size + ' assets into dist/');
