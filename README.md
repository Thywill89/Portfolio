# Thywill Naamwanuru Saanuo — Portfolio

Personal site for a full-stack developer based in Kasoa, Ghana. Built with React 18, Vite, TypeScript, Tailwind CSS, React Router, Framer Motion, React Hook Form, and Zod.

## Setup

```bash
npm install
cp .env.example .env
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Environment variables

Copy `.env.example` to `.env` and fill in:

| Variable | Purpose |
| --- | --- |
| `VITE_FORMSPREE_ID` | Formspree form ID so the contact form can send mail |
| `VITE_SITE_URL` | Canonical site URL (no trailing slash) |
| `VITE_GA_MEASUREMENT_ID` | Optional Google Analytics 4 ID |
| `VITE_PLAUSIBLE_DOMAIN` | Optional Plausible `data-domain` |

Create a form at [Formspree](https://formspree.io). The ID is the `xxxxxxxx` in `https://formspree.io/f/xxxxxxxx`.

Update GitHub, LinkedIn, and email in `src/lib/site.ts`.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Local dev server |
| `npm run build` | Typecheck + production build |
| `npm run preview` | Preview the production build |
| `npm run lint` | ESLint |
| `npm run format` | Prettier |

## Deploy on Vercel

1. Push this repo to GitHub.
2. Import the project in [Vercel](https://vercel.com/new).
3. Framework preset: **Vite**.
4. Add the same env vars from `.env.example`.
5. Deploy. `vercel.json` already rewrites unknown paths to `index.html` so client-side routes work.

After the domain is live, replace `https://your-domain.vercel.app` in `index.html`, `public/robots.txt`, and `public/sitemap.xml`.

## Structure

```
src/
  components/   Navbar, Footer, reusable UI
  sections/     Hero, About, Skills, Projects, Experience, Contact
  pages/        Routed views (home, projects, blog, 404)
  hooks/        Theme, scroll spy, SEO
  lib/          Site content, contact API helper
  types/        Shared TypeScript types
```
