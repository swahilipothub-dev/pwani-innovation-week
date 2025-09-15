# Pwani Innovation Week
This repository hosts the source code for the Pwani Innovation Week website (React + Vite + Tailwind).

## Overview
Pwani Innovation Week is an initiative for networking, collaboration, and showcasing cutting‑edge ideas. This codebase powers the public website UI.

## Setup and Run
- Clone: `git clone https://github.com/swahilipothub-dev/pwani-innovation-week`
- Enter: `cd pwani-innovation-week`
- Install: `npm install`
- Dev server: `npm run dev` then open `http://localhost:3000`
- Build: `npm run build`
- Preview build: `npm run preview`

## URLs

Key environments

| Name | URL | Notes |
| ---- | --- | ----- |
| Live Site | https://www.pwaniinnovationweek.com/ | Public website |
| Admin | https://admin.pwaniinnovationweek.com/ | Admin login and dashboards |
| Local Dev | http://localhost:3000 | Vite dev server |

Site navigation (paths)

| Label | Path | Description |
| ----- | ---- | ----------- |
| Home | `/` | Landing page |
| About | `/about` | About the event |
| Speakers | `/speakers` | Speakers listing |
| Tickets | `/tickets` | Ticket info or link |
| Engage | `/engage` | Ways to participate |
| Experiences | `/experiences` | Activities and tracks |
| Past Events | `/past-events` | Previous years overview |

## Project Structure
Top‑level layout

```
public/               # Static assets
src/                  # Application source
  components/         # Reusable components
  layout/             # App layout (Navbar, Footer, etc.)
  pages/              # Route pages
.github/workflows/    # CI workflows
```

## Scripts
- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run preview` — preview built app
- `npm run lint` — lint codebase

## Contribution Workflow
We enforce branch/PR policy via a GitHub Action:

- All pull requests must target `stagging`.
- Only `stagging` may open a PR into `main` (release step).

Recommended flow

- Create your branch from `stagging`: `git checkout -b feature/your-change origin/stagging`
- Push and open a PR with base `stagging`.
- After approval and merge to `stagging`, open a release PR from `stagging` → `main`.

Additional guidelines

- Keep PRs focused and small; include a clear description and screenshots if UI changes.
- Ensure `npm run build` succeeds locally before requesting review.

## Technologies
- React 18, TypeScript, Vite
- Tailwind CSS, shadcn/ui
- ESLint, PostCSS, Radix UI

## License
MIT
