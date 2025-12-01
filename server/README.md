# PIW Express (Admin + APIs)

Comprehensive Express.js application that powers the administrative back office for the Personal Information Website (PIW). The service exposes a browser-based dashboard (EJS templates) and a JSON API for collecting and curating event data such as speakers, vendors, schedules, exhibitors, and waitlist entries. It also integrates with UploadThing for asset uploads and Resend for transactional email.

---

## Tech Stack at a Glance

| Concern | Implementation |
| --- | --- |
| HTTP server | [Express 5](https://expressjs.com/) with EJS templates and `express-ejs-layouts` |
| Persistence | MongoDB via [Mongoose](https://mongoosejs.com/) |
| Auth | Cookie-based JWT sessions (`jsonwebtoken`, `bcryptjs`) |
| File uploads | [UploadThing](https://uploadthing.com/) via `uploadthing/express` |
| Email | [Resend](https://resend.com/) SDK |
| Tooling | Nodemon (dev), Jest + Supertest (tests), dotenv for config |
| SMS | [Africa's Talking](https://africastalking.com/) |

## Project Layout

```
├── app.js                  # Express application bootstrap
├── config/
│   ├── db.js               # MongoDB connection helper
│   ├── uploadthing.js      # UploadThing router (server-side handler)
│   └── commands/seedAdmin.js
├── middleware/
│   └── auth.js             # JWT cookie parsing & RBAC guards
├── models/                 # Mongoose schemas
├── routes/
│   ├── api/                # JSON API endpoints
│   ├── admin.js            # Admin dashboard routes (EJS)
│   ├── auth.js             # Login/logout and /auth/me
│   ├── email.js            # Email form + diagnostics
│   ├── images.js           # Persist uploaded image metadata
│   └── users.js            # Regular user dashboard routes
├── utils/
│   ├── mailer.js           # Resend wrapper
│   └── seedAdmin.js        # Default admin bootstrapper
├── public/                 # Static assets (JS, CSS, images)
├── views/                  # EJS templates (admin/user layouts & pages)
├── tests/                  # Jest + Supertest coverage for auth/RBAC/CRUD
└── uploadthing.js          # Alternate UploadThing router (unused by default)
```

---

## Getting Started

### Prerequisites

- Node.js ≥ 18 (tested with ESM modules enabled)
- npm ≥ 9
- MongoDB instance (local or cloud)

### Installation

```bash
git clone <repo>
cd piw-express
npm install
```

### Environment Configuration

Create a `.env` file in the project root. The table below summarizes the supported variables and how they influence runtime behavior.

| Variable | Required | Description | Default / Notes |
| --- | --- | --- | --- |
| `PORT` | No | Port used by Express server | `3000` |
| `NODE_ENV` | No | Controls dev vs production behavior (secure cookies, logging) | `development` |
| `MONGO_URI` | Yes | MongoDB connection string consumed by `config/db.js` | `mongodb://localhost:27017/piw-express` |
| `JWT_SECRET` | Yes | Secret key for signing JWT session cookies | _none_ (required; tests fall back to `secret`) |
| `ALLOWED_ORIGINS` | No | Comma-separated whitelist for CORS requests | Empty list → only same-origin allowed |
| `DEFAULT_ADMIN_NAME` | No | Reserved for future enhancements; **currently not consumed** | - |
| `DEFAULT_ADMIN_EMAIL` | No | Reserved for future enhancements; **currently not consumed** | - |
| `DEFAULT_ADMIN_PASSWORD` | No | Reserved for future enhancements; **currently not consumed** | - |
| `DEFAULT_ADMIN_PHONE` | No | Reserved for future enhancements; **currently not consumed** | - |
| `UPLOADTHING_APP_ID` | Yes (upload features) | UploadThing application identifier | Used by `/api/uploadthing` handler |
| `UPLOADTHING_SECRET` | Yes (upload features) | UploadThing API secret | Used by `/api/uploadthing` handler |
| `RESEND_API_KEY` | Yes (email features) | API key for Resend transactional email | Required for `/email/*` endpoints |

Copy `.env.example` as a starting point and update the secrets for your environment.

### Run the Application

```bash
# start with nodemon
npm run dev

# or start once
npm start
```

When the server boots it connects to MongoDB (`config/db.js`) and automatically invokes `seedAdmin()` to guarantee that an administrator account exists (default credentials: `admin@example.com` / `admin123`).

### Database Seeding (manual)

If you prefer a manual seed run:

```bash
npm run seed:admin
```

This command connects to `MONGO_URI` and executes `utils/seedAdmin`, creating the default admin only when none exists.

### Test Suite

```bash
npm test
```

Tests run against an in-memory MongoDB instance (`mongodb-memory-server`) and cover authentication, RBAC middleware, and the admin delete flow.

---

## Core Concepts

### Express Bootstrap (`app.js`)

- Loads environment variables via `dotenv` and connects to MongoDB before starting the HTTP server.
- Registers global middleware: CORS (origin whitelist), cookie parsing, method override (supporting `_method` in forms), body parsers, static assets, and the `attachUser` helper that decorates requests with the authenticated user when a `token` cookie is set.
- Configures EJS with global layout support and exposes admin/user dashboards behind route guards.
- Integrates UploadThing via `createRouteHandler` so the frontend can hit `/api/uploadthing` for signed uploads.
- Mounts JSON APIs under `/api/*` for programmatic access.

### Authentication & Authorization (`middleware/auth.js`)

- **Session model:** Successful login issues an HTTP-only `token` cookie containing a JWT (`id` claim). Expiry defaults to 1 hour.
- **`attachUser`** decodes the cookie on every request and populates `req.user` with the Mongoose user record.
- **`requireAuth`** enforces login (401/redirect on failure depending on `Accept` header).
- **`requireAdmin`** and **`requireUser`** implement role-based access control. Admin-only routes require `req.user.is_admin === true`; the user dashboard bars admins.
- RBAC behavior is validated in `tests/rbac.test.js`.

### Rate Limiting & Security

- Login is protected by `express-rate-limit` (10 attempts per 15 minutes).
- `app.set("trust proxy", 1)` ensures secure cookies behave correctly behind reverse proxies.
- CORS is locked down to the optional `ALLOWED_ORIGINS` list.

---

## Data Models

All schemas live in `models/` and share common patterns (timestamps, validation, defaults). Below is a reference of the most important entities.

### `User` (`models/Users.js`)

| Field | Type | Notes |
| --- | --- | --- |
| `name` | String | Required |
| `email` | String | Required, unique, lowercase, basic regex validation |
| `phone_number` | String | Required, unique, must match `+254` country code |
| `password` | String | Required, hashed in a `pre('save')` hook if not already bcrypt format |
| `is_admin` | Boolean | Defaults to `false`; toggles RBAC |

Instance method `comparePassword(candidate)` wraps `bcrypt.compare`.

### `Speaker` (`models/Speaker.js`)

Captures conference speaker submissions, including thematic area, session details, engagement preference, and acceptance status (toggleable by admins).

### `Vendor` (`models/Vendor.js`)

Stores vendor applications with business metadata. Boolean form controls are normalized server-side before persistence.

### `Waitlist` (`models/Waitlist.js`)

Simple sign-up records with agreement flags, exposed via both dashboard views and the paginated API consumed by `public/js/waitlist.js`.

### `Inquiry` (`models/Inquiry.js`)

Tracks inbound enquiries (sponsorship, participation, general). Admins can toggle `is_resolved` to track status.

### `Exhibitor`, `Volunteer`, `Schedule`, `Sponsor`, `Partner`, `Image`

- **Exhibitor:** Application workflow with tri-state `status` (`pending` → `approved` → `rejected`).
- **Volunteer:** Recruitment form with validation (phone, email, ID, department/gender enums).
- **Schedule:** Event timetable referencing a `Speaker` by ObjectId.
- **Sponsor/Partner:** Simple name + logo references for showcasing supporters.
- **Image:** Persists UploadThing responses (URL + key) for gallery views.

---

## Web Routes & Views

### Authentication (`routes/auth.js`)

| Method | Path | Auth | Description |
| --- | --- | --- | --- |
| `GET` | `/` & `/auth/` | Public | Render login form (`views/auth/login.ejs`). Redirect authenticated users to their dashboards. |
| `POST` | `/auth/login` | Public | Validate credentials, issue JWT cookie, redirect to `/admin` or `/users`. |
| `GET` | `/auth/me` | Token | Return authenticated user as JSON. |
| `POST` | `/auth/logout` | Token | Clear cookie and redirect to `/`. |

### Admin Dashboard (`routes/admin.js`)

All routes require `requireAuth` + `requireAdmin` via `app.js`.

- **Dashboard:** `GET /admin` aggregates counts for speakers, vendors, waitlist, inquiries, schedules, users, exhibitors.
- **Speakers:** CRUD-ish flow for listing, manual creation via form, and acceptance toggle (`POST /admin/speakers/:id/toggle-acceptance`).
- **Exhibitors:** Listing, creation, and status cycling (`pending` → `approved` → `rejected`).
- **Vendors / Waitlist / Inquiries:** List views with form-based creation pipelines; waitlist also supports DELETE with method override + JSON API for pagination.
- **Schedules:** Create, edit, delete, and view schedule entries, with speaker selection via population.
- **Users:** View and create platform accounts directly from the dashboard.
- **Generic delete:** `DELETE /admin/:type/:id` handles removal for `speakers`, `vendors`, `waitlist`, `inquiries`, `users`, `exhibitors`.

Templates reside under `views/admin/` and inherit from the main `views/layout.ejs` layout.

### User Dashboard (`routes/users.js`)

Mounted behind `requireUser` to enforce non-admin access. Provides read-only views (counts, list pages, schedule detail views) rendered with `views/layouts/userLayout.ejs`.

### Email Utilities (`routes/email.js`)

- `GET /email/form` (admin only) renders a manual email compose form.
- `GET /email/test-email` sends a smoke-test message using Resend. Helpful for verifying credentials.
- `POST /email/send-email` (admin only) submits dynamic email payloads via `utils/mailer.js`.

### Image Management (`routes/images.js`)

- `POST /api/images` stores UploadThing callback payloads in Mongo.
- `GET /api/images` returns gallery JSON; `GET /images/gallery` renders `views/gallery.ejs`.

Front-end enhancements for waitlist management live in `public/js/waitlist.js` (search, pagination, modal view backed by `/api/waitlist`).

---

## JSON API Endpoints (`routes/api/*`)

| Resource | Method & Path | Auth | Description |
| --- | --- | --- | --- |
| Speakers | `POST /api/speakers` | Public | Create speaker submission. |
|  | `POST /api/speakers/delete/:id` | Admin cookie | Deletes speaker; returns `302` to dashboard (supports tests/forms). |
| Waitlist | `GET /api/waitlist` | Admin cookie (UI) / Public (if exposed) | Returns paginated entries via `page`, `limit`, `search`. |
|  | `GET /api/waitlist/:id` | Same as above | Fetch single entry (used by modal). |
|  | `POST /api/waitlist` | Public | Create waitlist entry. |
|  | `DELETE /api/waitlist/:id` | Admin cookie | Remove entry (JSON response). |
| Vendors | `POST /api/vendors` | Public | Validated vendor application. |
| Inquiries | `POST /api/inquiries` | Public | Submit enquiry message. |
| Exhibitors | `POST /api/exhibitors` | Public | Submit exhibitor application. |
| Volunteers | `POST /api/volunteers` | Public | Submit volunteer application. |
| Schedules | `GET /api/schedules?date=YYYY-MM-DD` | Public | Filter schedules by date; responses include structured speaker objects (id, name, title, speakerType, organization), session RSVP links, and populated track metadata. |
| UploadThing | `POST /api/uploadthing` + others | Requires UploadThing | Handled through `createRouteHandler`, expects `UPLOADTHING_*` credentials. |

Unless noted otherwise, APIs rely on JSON bodies (`app.use(express.json())`) and return validation errors with meaningful messages.

---

## UploadThing Integration

- `config/uploadthing.js` defines an `imageUploader` router accepting single images up to 4MB. Successful uploads return `{ url, key }` to the frontend.
- `uploadthing.js` at the repository root exposes an alternative router (logging-only) and is currently unused, but demonstrates how to register additional upload endpoints if needed.
- When wiring the frontend, send UploadThing callbacks to `POST /api/images` so the application can persist the metadata in MongoDB.

---

## Email Delivery (`utils/mailer.js`)

- Wraps the Resend SDK and defaults the sender to `data@swahilipothub.co.ke` unless overridden.
- Accepts `to`, `cc`, `subject`, `text`, and `html`. Errors bubble to callers so routes can return informative HTTP responses.
- `routes/email.js` offers both an admin-only form and a `/email/test-email` diagnostic endpoint that returns `{ success: true }` when delivery succeeds.

---

## Testing Strategy

- Located in `tests/`, executed via `npm test`.
- `MongoMemoryServer` provides an isolated database, so tests never touch your real Mongo instance.
- Coverage highlights:
  - `auth.test.js`: login flow, `/auth/me`, logout behavior, error states.
  - `rbac.test.js`: verifies `requireAdmin` blocks standard users.
  - `crud.test.js`: ensures the admin delete helper removes speakers as expected.

Add new tests alongside existing suites; Jest is already configured for ESM via `--experimental-vm-modules` and `jest.config.js`.

---

## API Documentation (OpenAPI/Swagger)

- Swagger UI: visit `http://localhost:3000/api-docs` in your browser.
- Raw OpenAPI JSON: `http://localhost:3000/openapi.json`.
- The docs are served via a static Swagger UI page (no extra npm packages needed). Update the spec in `openapi/openapi.json` as routes evolve.

---

## Operational Notes & Future Work

- **Admin bootstrap:** Credentials are hard-coded in `utils/seedAdmin.js`. Consider reading `DEFAULT_ADMIN_*` from the environment for production use.
- **Password hygiene:** New users created via dashboard inherit literal form values—ensure strong passwords and enable password reset flows before production rollout.
- **Error handling:** Most API routes return `400` with the raw error message. Wrap with friendlier error objects if you expose these endpoints publicly.
- **UploadThing router duplication:** Remove `uploadthing.js` or align both definitions to avoid confusion.
- **CORS:** Populate `ALLOWED_ORIGINS` when deploying to enforce correct domain access for SPAs or remote clients.

With configuration in place you can extend the platform by adding new models, wiring additional dashboard pages, or integrating external services (SMS, payments, etc.) following the patterns outlined above.

---

## Contributing

We use GitHub issues to track bugs and feature requests.

- Report a bug: open an issue with a clear title, steps to reproduce, expected vs actual behavior, environment details, and logs (if any).
- Request a feature: open an issue describing the problem, proposed solution, and alternatives considered.
- Pull requests: link to an existing issue, keep the scope focused, and include brief testing notes. Run `npm test` locally before submitting.

Thank you for contributing!
