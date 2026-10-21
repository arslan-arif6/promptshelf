# PromptShelf

Capstone skeleton for the FlyRank AI Internship (FE-04, "Capstone skeleton, deployed").
PromptShelf is a personal library to save, organize and reuse AI prompts.

## Screens (all routed placeholders)
| Route | Screen |
|---|---|
| `/` | Home |
| `/library` | Prompt library (list) |
| `/library/[id]` | Prompt detail (dynamic route) |
| `/library/new` | New prompt form |
| `/collections` | Collections |
| `/settings` | Settings |
| `/about` | About |
| `/health` | Health check: renders data fetched live on the server |
| any other URL | Custom 404 page |

## Stack
Next.js (App Router) · TypeScript · Tailwind CSS v4 · deployed on Vercel.

- Server Components by default. The only Client Component is `components/NavMenu.tsx` (mobile menu toggle and active link).
- Design tokens (colors, fonts, radius, spacing) are defined once in `app/globals.css` under `@theme`.
- Responsive: single-column layout with a menu button on mobile (375px), full nav bar from 768px up (1280px desktop).
- No secrets in the repo: `.env*` files are git-ignored; `.env.example` lists the only variable (public, optional).

## Run locally
```
npm install
npm run dev
```
Open http://localhost:3000

## Deployment
Repo connected to Vercel (Git integration). Every push to `main` deploys to production and every push to another branch or pull request creates a preview deployment.
