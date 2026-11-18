# Olive Residency — Single-page React website

This is a Vite + React single-page marketing site for Olive Residency, built from the supplied project brochure, RERA certificate, approved layout plan, and hero video.

## Run locally

1. Install Node.js 20 or later.
2. From this folder run `npm install`.
3. Run `npm run dev` and open the local URL Vite prints.
4. Run `npm run build` to create a production build in `dist/`.

The site uses local project assets in `public/assets/`. Google Fonts load from Google Fonts when online; the page falls back to system serif and sans-serif fonts otherwise. The video is muted and loops in the hero; browsers may show the poster frame when reduced-data settings or autoplay policies prevent playback.
