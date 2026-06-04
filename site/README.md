# The Roof Supply Co. — Modern Website Duplicate

This is a clean, modern, high-fidelity static website duplicate of https://theroofsupplycompany.com/ built with **Next.js 16 + TypeScript + Tailwind CSS**.

## What was duplicated
- Full homepage content and structure (hero, about, 11 services, why choose us, stats, testimonials, FAQ, blog preview)
- Contact page with the exact form fields (First Name, Last Name, Email, Subject, Message)
- Services page listing all materials and offerings
- Blog page with the three sample posts from the original
- Both physical locations (Gardena + Escondido) with correct phone numbers and map links
- **Pay Now** buttons linking to the real external gosuppli.com customer portals:
  - Gardena: `http://Customer.gosuppli.com/rscg/auth/login`
  - Escondido: `http://Customer.gosuppli.com/rsgfsd/auth/login`
- Responsive mobile navigation + sticky header
- Professional, clean design suitable for a roofing supply business

## Tech stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Zero external dependencies beyond the framework

## Getting started (easiest way)

From the `roofSupply` root folder, you can now run:

```powershell
npm run dev
```

This will start the development server at http://localhost:3000.

**First time only** (if you see missing dependencies):

```powershell
npm run install:site
```

### Alternative (if you prefer)

```bash
cd site
npm run dev
```

## Production build

From the root:

```powershell
npm run build
npm run start
```

Or from inside `site/`:

```bash
npm run build
npm start
```

## Deployment

### GitHub Pages (hosted here)
This site is automatically deployed to GitHub Pages via GitHub Actions whenever you push to `main`.

**Live URL:** https://cjessup.github.io/roof-supply/

The Next.js config is set up with:
- `output: 'export'`
- `basePath: '/roof-supply'`

The workflow lives in `.github/workflows/deploy.yml` at the repo root.

To activate:
1. Repo → Settings → Pages
2. Source: **GitHub Actions**

### Other platforms
- Vercel: Import repo, set "Root directory" to `site`
- Netlify: Similar, point build command to the root `npm run build` and publish dir to `site/out`

See the root `README.md` for more.

## Notes & future improvements
- The contact form currently logs to console and shows a success state (demo). You can easily connect it to Formspree, Resend, or your own API.
- Images use emoji icons + clean cards. You can replace with real photos in `public/` or use Next.js `<Image>`.
- The original site used WordPress + Elementor + Fluent Forms + AIOSEO. This version is much faster, cheaper to host, and easier to maintain.
- All external payment links are preserved exactly as on the live site.

This was created inside your existing `roofSupply` repository under the `site/` folder so you can version control it together with any other work.
