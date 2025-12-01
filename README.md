# Pwani Innovation Week Monorepo

This repository hosts both the public web app (Vite + React + Tailwind) in `client/` and the admin/API backend (Express + MongoDB + EJS) in `server/`.

## Prerequisites
- Node.js 18+ and npm 9+
- MongoDB running locally or remotely (for the server)

## Clone & Install
```bash
git clone <repo-url>
cd pwani-innovation-week
# install frontend deps
cd client && npm install
# install backend deps
cd ../server && npm install
```

## Run the Frontend (client)
```bash
cd client
npm run dev      # Vite dev server (default http://localhost:5173 or configured port)
npm run build    # production bundle to client/dist
npm run preview  # serve the built bundle
npm run lint     # ESLint for TS/JS/TSX
```

## Run the Backend (server)
1. Create `server/.env` with `MONGO_URI`, `JWT_SECRET`, and any UploadThing/Resend keys.
2. Start the API/admin server:
```bash
cd server
npm run dev      # nodemon
npm start        # production mode
npm test         # Jest + Supertest against in-memory Mongo
npm run seed:admin   # seed default admin if needed
```

## Working With Git
- Default branch flow: open feature branches from `stagging`; release PRs merge `stagging` → `main`.
- Keep commits small and present tense (e.g., `add vendors route`).
- Typical contribution flow:
```bash
git checkout -b feature/<short-desc> origin/stagging
# make changes
npm run lint        # from client for UI changes
npm test            # from server for API changes (optional but recommended)
git add ...
git commit -m "<present-tense summary>"
git push origin feature/<short-desc>
# open PR with base = stagging; include summary and screenshots for UI
```

## Directory Map
- `client/` — SPA source in `src/` (`components/`, `pages/`, `layout/`, `context/`, `data/`), static assets in `public/`, build output in `dist/`.
- `server/` — entrypoint `app.js`; routes in `routes/`, models in `models/`, helpers in `utils/`, middleware in `middleware/`, templates in `views/`, static assets in `public/`, tests in `tests/`.
