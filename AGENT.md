# Repository Guidelines

## Project Structure & Module Organization
The app is a Vite + React + TypeScript project. Runtime code lives in `src`, with feature pages under `src/pages`, shared layouts in `src/layout`, and reusable UI in `src/components`. Hooks and utilities reside in `src/hooks` and `src/lib`. Static assets are served from `public`, while Tailwind and PostCSS configuration sits in `tailwind.config.ts` and `postcss.config.js`. Deployment-ready artifacts are generated into `dist` after builds.

## Build, Test, and Development Commands
- `npm run dev` launches the local Vite server with hot reload at `http://localhost:5173`.
- `npm run build` produces an optimized production bundle in `dist`.
- `npm run build:dev` mirrors `build` but keeps development mode toggles to inspect non-minified output.
- `npm run lint` runs ESLint using `eslint.config.js` and the TypeScript-aware rules.
- `npm run preview` serves the latest build locally for smoke testing before shipping.

## Coding Style & Naming Conventions
Use TypeScript with React functional components and hooks. Prefer PascalCase for components (`TicketCard.tsx`), camelCase for variables and functions, and kebab-case for file names inside `public`. Follow the Tailwind-first styling approach—compose utility classes in `.tsx` files and extend tokens in `tailwind.config.ts`. Keep indentation at two spaces and let your editor auto-format via ESLint and the project TypeScript configuration.

## Testing Guidelines
No automated tests are wired up yet. Before introducing new tests, agree on a stack (Vitest + React Testing Library is compatible with Vite) and place specs alongside components as `<Component>.test.tsx`. Run linting before submitting to catch type and style regressions, and use `npm run preview` for manual regression passes until automated coverage targets are defined.

## Commit & Pull Request Guidelines
Recent commits favor short, lowercase summaries (for example: `tickets link`, `volunteer`). Keep messages under 50 characters, use the imperative mood, and bundle related changes only. For pull requests, include a concise summary, link any relevant issues or tickets, list manual verification steps (dev server, preview, lint), and attach screenshots or recordings when updating UI screens. Request at least one review before merging and confirm Vercel preview links render as expected.

## Environment & Configuration Tips
Environment variables consumed by the frontend should be defined with a `VITE_` prefix in `.env` or `.env.local`. Update deployment settings through `vercel.json` when changing routes or headers. When adding new data sources, centralize API clients under `src/lib` to keep configuration discoverable.
