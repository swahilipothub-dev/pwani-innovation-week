Title: Fix: add logo to navbar; make navbar static; ensure all links from live PIW site are added; inherit color themes

Summary
- Align the navbar with the live PIW site (https://www.pwaniinnovationweek.com/):
  - Ensure the PIW logo displays correctly.
  - Make the navbar non-sticky (static, not fixed to viewport).
  - Add/update nav links to match the live site IA.
  - Inherit/apply the live site color theme to the navbar and links.

Context
- The React navbar component is at `src/layout/Navbar.tsx`.
- Current implementation centers the logo and includes simplified links.
- Tailwind classes are used for styling; update tokens to match brand colors.

Tasks
- [ ] Verify logo asset path(s) and responsive sizes for desktop/mobile.
- [ ] Ensure navbar position is static (no `fixed` positioning on header/nav).
- [ ] Audit the live site’s top-level navigation and mirror link text/order/URLs.
- [ ] Update colors (text, hover, active, borders) to match live brand theme.
- [ ] Check contrast and hover/focus states for accessibility.
- [ ] Verify mobile menu contains the same links and ordering.

Acceptance Criteria
- Navbar shows PIW logo and uses static positioning.
- All links match the live site (labels, routes) and work.
- Colors visually match the live site’s navbar theme, including hover/active states.
- Mobile and desktop experiences are consistent.

Notes
- Provide a short mapping in the PR description of live site links → app routes.

