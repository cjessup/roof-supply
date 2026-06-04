# roof-supply

This repository contains the modern web presence for **The Roof Supply Company**.

## Project Structure

- `/site` — The main customer-facing website (Next.js 16 + TypeScript + Tailwind)
  - A full duplicate/rebuild of the original https://theroofsupplycompany.com/
  - Includes homepage, services, contact form, blog, etc.
  - Preserves all original content, two locations (Gardena & Escondido), and external payment system links.

## Getting Started (Website)

From the repository root:

```powershell
# Install dependencies (first time)
npm run install:site

# Start development server
npm run dev
```

Open http://localhost:3000

### Other commands

- `npm run build` — Production build
- `npm run start` — Run production build locally

See `site/README.md` for more details about the website.

## Original Site

The website was rebuilt from the live WordPress/Elementor site at https://theroofsupplycompany.com/

Tech stack of original:
- WordPress + Hello Elementor theme + Elementor page builder + Fluent Forms + AIOSEO

This version uses a modern, fast, static-friendly stack for better performance and lower hosting costs.

## Deployment

### GitHub Pages (current hosting)
This repo is configured to automatically deploy the website to GitHub Pages on every push to `main`.

- Live site will be available at: **https://cjessup.github.io/roof-supply/**
- The workflow is in `.github/workflows/deploy.yml`
- It uses Next.js static export (only when `GITHUB_PAGES=true`).

To enable:
1. Go to your repo on GitHub → **Settings** → **Pages**
2. Under "Build and deployment", set **Source** to **GitHub Actions**

### Local development
From the repo root:

```powershell
npm run dev
```

Then open **http://localhost:3000/** (routes are **not** prefixed with /roof-supply/ in local dev).

The `basePath` is only applied during the GitHub Pages build.

### Other options
- Vercel / Netlify: Import the repo and set the build directory to `site` (or use the root `npm run build`).

See `site/README.md` for local development details.

## Notes

- External "Pay Now" links point to the existing gosuppli.com customer portals.
- Contact form is currently a demo (console logs on submit). Can be wired to an email service easily.
