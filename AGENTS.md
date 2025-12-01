# Repository Guidelines

## Project Structure & Module Organization
- `client/`: Vite + React + TypeScript + Tailwind. Source in `src/` (`components/`, `pages/`, `layout/`, `context/`, `data/`), static assets in `public/`, build output in `dist/`.
- `server/`: Express 5 + EJS + MongoDB. Entrypoint `app.js`; routers in `routes/`, schemas in `models/`, helpers in `utils/`, middleware in `middleware/`, templates in `views/`, static files in `public/`, tests in `tests/`, and API references in `openapi/`.

## Build, Test, and Development Commands
- Frontend: `cd client && npm install && npm run dev` (Vite dev server), `npm run build` (production), `npm run preview` (serve bundle), `npm run lint` (ESLint 9 for TS/JS/TSX).
- Backend: `cd server && npm install && npm run dev` (nodemon), `npm start` (prod run), `npm test` (Jest + Supertest with in-memory Mongo). Seed defaults with `npm run seed:admin` or other `seed:*` scripts.

## Coding Style & Naming Conventions
- TypeScript/JavaScript with 2-space indentation and ESM modules. Prefer functional React components/hooks; `PascalCase` for components/files, `camelCase` elsewhere. Client imports can use the `@/` alias to `src`.
- Tailwind is utility-first; keep class lists ordered by layout → color → state. Backend handlers should stay small, async/await-based, and offload shared logic to `utils/`.
- Run `npm run lint` in `client` before PRs; the server relies on reviewer checks, so keep formatting consistent.

## Testing Guidelines
- Server tests live in `server/tests` as `*.test.js`. Use Jest + Supertest; favor in-memory Mongo (default) over external services.
- Cover new routes, validation failures, and RBAC branches. Keep fixtures minimal and name tests descriptively (e.g., `should reject unauthenticated ticket creation`). Frontend has no tests—call out risky UI logic when opening PRs.

## Commit & Pull Request Guidelines
- History shows short, present-tense subjects (`restructure to monorepo`, `hero`); follow that tone and keep each commit scoped.
- Target PRs to `stagging`; releases go `stagging` → `main`. Include purpose, linked issue, and screenshots for UI. Validate `client` build and `server` tests (plus seeds if used) before requesting review.

## Security & Configuration Tips
- Never commit `.env` files or secrets. The server needs `MONGO_URI`, `JWT_SECRET`, and UploadThing/Resend keys—store them locally or in your secret manager.
- Set `ALLOWED_ORIGINS` for admin endpoints, and rotate credentials created by `seed:admin` outside local development.
