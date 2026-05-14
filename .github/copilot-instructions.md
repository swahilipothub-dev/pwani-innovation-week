# Pwani Innovation Week — AI Agent Guide

## Big Picture
- React + Vite + TypeScript SPA with React Router. App shell provides providers and routing: `src/App.tsx:1`.
- Global layout wraps all routes with `Navbar` and `Footer`: `src/layout/Layout.tsx:1`.
- UI built with Tailwind CSS and shadcn/ui components in `src/components/ui/*` (configured via `components.json:1`).
- Theming and tokens live in `src/index.css:1` and `tailwind.config.ts:1` (project colors use coral `#F97316`).
- Deployed as an SPA (rewrites all paths to `/`): `vercel.json:1`.

## Dev Workflows
- Dev server: `npm run dev` (Vite served on port 8080 per `vite.config.ts:1`).
- Build: `npm run build` (use `npm run preview` to serve the dist locally).
- Lint: `npm run lint` (ESLint config in `eslint.config.js:1`).
- CI: GitHub Action builds on PRs/branches `main` and `master`: `.github/workflows/pr-build.yml:1`.

## Project Conventions
- Path alias `@/*` → `src/*` (see `tsconfig.json:1` and `vite.config.ts:1`). Prefer `@/` imports.
- Components/pages are PascalCase `.tsx`. Pages live in `src/pages/*` and are registered in `src/App.tsx:1`.
- Shared layout in `src/layout/*`. Reusable building blocks in `src/components/*`.
- Class name composition via `cn()` from `src/lib/utils.ts:1` with `clsx` + `tailwind-merge`.
- Use shadcn/ui primitives from `src/components/ui/*` before adding new UI libs.
- Icons: `lucide-react` is the default set (e.g., in `src/layout/Navbar.tsx:1`).

## Routing & Navigation
- Router is `BrowserRouter` with explicit `<Routes>` in `src/App.tsx:1`.
- Add a new page: create `src/pages/MyPage.tsx`, then add `<Route path="/my-page" element={<MyPage/>}/>` in `src/App.tsx:1`, and link it in `Navbar`: `src/layout/Navbar.tsx:1`.
- SPA routing works on Vercel via rewrites; avoid server-only routes.

## Data Fetching & State
- `QueryClientProvider` is set up app-wide: `src/App.tsx:1`. Prefer `@tanstack/react-query` for async state.
- Example pattern:
  ```tsx
  const {data, isLoading, error} = useQuery({
    queryKey: ['speakers'],
    queryFn: () => axios.get('/api/speakers').then(r => r.data)
  })
  ```
- Toasts: providers mounted in App (`Toaster` and `Sonner`). Use `useToast()` from `src/hooks/use-toast.ts:1` for local toasts.

## External Integrations
- Speaker application posts to external API: `src/pages/SpeakerApplicationForm.tsx:1` → `https://piw-express.onrender.com/api/speakers`.
  - If adding APIs, centralize base URLs and handle CORS; prefer axios with interceptors in a `src/lib/api.ts` module.

## Styling
- Tailwind utilities throughout, plus custom helpers in `src/index.css:1` (e.g., `.section-container`, `.gradient-text`).
- Theme tokens set via CSS vars; match brand coral `#F97316` accents and extensions in `tailwind.config.ts:1`.

## Handy Recipes
- Add a button with brand style: `className="btn-primary"` from `src/index.css:1`.
- Compose classes safely: `className={cn('p-4', isActive && 'bg-coral')}` using `src/lib/utils.ts:1`.
- Detect mobile in components via `useIsMobile()` from `src/hooks/use-mobile.tsx:1`.

## Notes & Gotchas
- Dev port is 8080 (not 3000 as some docs mention). Adjust links accordingly.
- Keep imports on `@/` alias to avoid brittle relative paths.
- When adding routes, update both `src/App.tsx:1` and navigation in `src/layout/Navbar.tsx:1`.
