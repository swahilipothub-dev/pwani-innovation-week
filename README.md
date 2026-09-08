# Pwani Innovation Week — 2026 site

Next.js 14 (App Router) + Tailwind CSS + TypeScript.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Structure
- `app/` — one folder per route (home, about, programme, speakers, themes, exhibitors, partners, past-editions, news, register, contact)
- `components/` — Header (with hamburger < 1100px), Footer, Placeholder, Eyebrow, Ticker, Countdown, DayTabs, PassPicker, forms
- `lib/data.ts` — ALL copy & draft data (themes, programme, speakers, news, passes, booths, partners). Edit here.

## Swapping placeholders
`<Placeholder label="…" />` renders the striped block. Replace with `next/image` once real photos are available:
```tsx
<Image src="/images/hero.jpg" alt="…" fill className="object-cover rounded-[18px]" />
```

Draft items to finalise: ticket prices, booth packages, session times, speaker bios, sponsor logos, news items.
