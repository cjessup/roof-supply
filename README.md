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

The `site/` folder can be deployed independently to Vercel, Netlify, etc.

Example (Vercel):
- Set the root directory to `site` when importing the repo, or use the root scripts.

## Notes

- External "Pay Now" links point to the existing gosuppli.com customer portals.
- Contact form is currently a demo (console logs on submit). Can be wired to an email service easily.
