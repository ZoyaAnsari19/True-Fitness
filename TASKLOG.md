# Task Log

## [15-05-2026 12:35] — Join form: email optional, phone required

**What changed:** Updated `src/app/join/JoinView.tsx` membership inquiry validation and labels. Email is optional: empty passes; if provided, must match `EMAIL_REGEX`. Label now reads "Email (optional)". Phone is required: at least 10 digits after stripping non-digits; label is "Phone" (removed "(optional)"); input has `required` and `phoneRef` for shake on invalid submit.  
**Files touched:** `src/app/join/JoinView.tsx`, `TASKLOG.md`  
**API endpoints used:** —  
**Breaking change:** NO  
**Branch:** zoya-dev  

---

## [15-05-2026 12:05] — Achievement cards: image fills full card height in grid rows

**What changed:** The achievements masonry grid stretches every card in a row to the same height (`align-items: stretch`). Compact cards used a fixed `aspect-ratio` on `.ach-card-media`, so when a row was taller (e.g. next to the featured card), the media stayed short and the extra area showed empty `.ach-card` background. Updated `.ach-card` to `display: flex; flex-direction: column; height: 100%; min-height: 0` and `.ach-card-media` to `flex: 1 1 auto` with `min-width: 0` and a `min-height: clamp(...)` floor instead of `aspect-ratio`, so the photo region grows with the stretched row while `object-fit: cover` on the image still fills the media box. Featured card uses a larger `min-height` clamp; mobile breakpoint keeps sensible minimums.  
**Files touched:** `public/static/style.css`, `TASKLOG.md`  
**API endpoints used:** —  
**Breaking change:** NO  
**Branch:** zoya-dev  

---

## [15-05-2026 11:22] — Trim achievements gallery and fix powerlifting card image

**What changed:** Removed the "Elite Coaching Certification Hub" entry from the `ACHIEVEMENT_GALLERY` array in `src/app/page.tsx` (it was the 6th/last card in the achievements section). Also swapped the Unsplash photo on the "Regional Powerlifting Podium" card from `photo-1593079831268-3381b0db4a77` (loaded fine but visually showed treadmills, mismatched the powerlifting copy) to `photo-1532029837206-abbe2b7620e3` (chalked-hands-on-barbell deadlift photo, on-brand for the headline). Verified both Unsplash URLs return HTTP 200. No CSS / component / type changes — gallery still renders via the same `AchievementCard` component and grid (`.achievements-masonry`), now showing 5 cards instead of 6 (1 featured + 4 compact, which still tiles cleanly on the existing 3-column desktop layout).  
**Files touched:** `src/app/page.tsx`, `TASKLOG.md`  
**API endpoints used:** —  
**Breaking change:** NO  
**Branch:** zoya-dev  

---

## [11-05-2026 13:53] — Move `app/` into `src/app/`

**What changed:** Migrated to `src/` based project structure — moved Next.js App Router folder from `./app` to `./src/app` using `git mv` to preserve history. Updated TypeScript `@/*` path alias to point at `./src/*`. Updated README reference. No other folders (`components/`, `lib/`, etc.) created yet — will scaffold on demand.  
**Files touched:** `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/globals.css`, `src/app/favicon.ico` (moved from `app/`), `tsconfig.json`, `README.md`  
**API endpoints used:** —  
**Breaking change:** NO  
**Branch:** master  

---

## [11-05-2026 14:06] — Convert Hono landing page JSX to React in `src/app/page.tsx`

**What changed:** Imported the Hono-based landing page markup from `~/Downloads/index.tsx` and rewrote it as a React Server Component for the Next.js App Router. Stripped Hono runtime (`new Hono()`, `app.use(renderer)`, `app.get('/', c => c.render(...))`) and exported a default `Home()` page. JSX attributes converted to React conventions: `class` → `className`, `for` → `htmlFor`, `autocomplete` → `autoComplete`, `novalidate` → `noValidate`, inline `style="…"` strings → object form (`style={{ width: "78%" }}`). Apostrophes/quotes escaped (`&apos;`, `&quot;`) to satisfy `react/no-unescaped-entities`. Added `key={i}` inside the `TestiCard` stars `.map()` for React list-key requirement. Kept `FeatureCard` and `TestiCard` helper components in the same file. All class names, IDs, content text, icon classes, structure, and hrefs preserved 1:1 — pure syntactic port.  
**Files touched:** `src/app/page.tsx`  
**API endpoints used:** —  
**Breaking change:** NO  
**Branch:** master  

---

## [11-05-2026 14:13] — Convert Hono `renderer.tsx` to Next.js layout + add missing styling

**What changed:** Ported the Hono `renderer.tsx` responsibilities into Next.js App Router `src/app/layout.tsx`: set True Fitness title/description, added Google Fonts (Inter + Space Grotesk), added Font Awesome CSS, and wired up `/static/style.css` + `/static/app.js` so the converted landing page classes actually render with their intended styles/interactions. Added `public/static/style.css` and `public/static/app.js` (vanilla JS: navbar scroll state, mobile menu toggle, reveal animations, basic testimonial scroll controls, demo contact form status) to match the original renderer's asset expectations.  
**Files touched:** `src/app/layout.tsx`, `public/static/style.css`, `public/static/app.js`, `TASKLOG.md`  
**API endpoints used:** —  
**Breaking change:** NO  
**Branch:** master  

---

## [11-05-2026 15:24] — Replace `public/static/style.css` with provided `Downloads/style.css`

**What changed:** Replaced the existing `public/static/style.css` with the exact CSS from `c:\\Users\\Truelink\\Downloads\\style.css` so card hover (“crystal/glass”) and all landing page styling match the provided stylesheet 1:1. Verified `next build` compiles successfully after the swap.  
**Files touched:** `public/static/style.css`, `TASKLOG.md`  
**API endpoints used:** —  
**Breaking change:** NO  
**Branch:** zoya-dev  

---

## [11-05-2026 15:55] — Space between mini cards + streak at main card bottom-right

**What changed:** On desktop, repositioned `.hero-card-bottom` (Active Streak) so its right edge lines up with the Live Workout card using `left: max(10px, calc(min(78%, 392px) - 236px))` and vertical `top: clamp(...)` near the main panel’s lower area; Calories stays top-right. On ≤980px / small screens, stacked both mini cards on the right again with an explicit **22px / 18px** extra gap between them (`top: calc(2% + 5.75rem + 22px)`).  
**Files touched:** `public/static/style.css`, `TASKLOG.md`  
**API endpoints used:** —  
**Breaking change:** NO  
**Branch:** zoya-dev  

---

## [11-05-2026 15:48] — Align hero Active Streak card with calories column

**What changed:** Repositioned `.hero-card-side` and `.hero-card-bottom` so both share `right: 0` and the streak card uses `top: calc(2% + 5.75rem)` with `bottom: auto` so it stacks under the calories mini-card instead of floating with mismatched `bottom`/`right` percentages. Added `max-width`/`z-index` tweaks and responsive rules for ≤980px and ≤380px.  
**Files touched:** `public/static/style.css`, `TASKLOG.md`  
**API endpoints used:** —  
**Breaking change:** NO  
**Branch:** zoya-dev  

---

## [11-05-2026 15:40] — Enhance hero workout HUD cards (glass + crystal hover)

**What changed:** Upgraded `.hero-visual` with a subtle HUD grid overlay and richer `.hero-blob` gradients. Reworked `.hero-card` glass styling (layered gradient fill, stronger blur/saturate, rim light), added `::after` sweep and crystal-style hover (neon border, inset highlight, outer glow) without `transform` so float + parallax JS keep working. Tuned exercise rows (darker icon wells, row hover, teal→cyan progress fills) and mini-stat cards (larger icons, clearer hierarchy).  
**Files touched:** `public/static/style.css`, `TASKLOG.md`  
**API endpoints used:** —  
**Breaking change:** NO  
**Branch:** zoya-dev  

---

## [11-05-2026 15:32] — Replace `public/static/app.js` with provided `Downloads/app.js`

**What changed:** Replaced the existing `public/static/app.js` with the exact interactions script from `c:\\Users\\Truelink\\Downloads\\app.js` (sticky navbar, mobile menu icon toggle, reveal-in-view animations, data-count counters, smooth anchor scroll offset, testimonial slider with auto-slide, contact form validation/status, hero parallax, active nav link highlighting). Fixed one string escaping issue (`We\'ll`) so the JS parses cleanly. Verified `next build` compiles successfully after the swap.  
**Files touched:** `public/static/app.js`, `TASKLOG.md`  
**API endpoints used:** —  
**Breaking change:** NO  
**Branch:** zoya-dev  

---

## [11-05-2026 17:00] — Hero mini cards: right column stack

**What changed:** Wrapped Calories Today and Active Streak in `.hero-mini-column` (flex column with gap). Positioned the column top-right; mini cards use `position: relative` and full column width so Active Streak sits directly under Calories with consistent spacing (no overlap). Updated 980px and 380px media queries to target the column instead of per-card `top` hacks.  
**Files touched:** `src/app/page.tsx`, `public/static/style.css`, `TASKLOG.md`  
**API endpoints used:** —  
**Breaking change:** NO  
**Branch:** zoya-dev  

---

## [11-05-2026 19:15] — Hero HUD: Calories top / Streak bottom of main card

**What changed:** Introduced `.hero-hud-row` flex wrapper around the live session card and `.hero-mini-column` so the column stretches to the main card’s height. `.hero-mini-column` uses `justify-content: space-between` so Calories stays at the top-right and Active Streak sits at the bottom-right of that column (aligned with the main card’s bottom). Moved `.hero-blob` before the row in the DOM for clearer stacking. Adjusted responsive `flex`/`width` on the mini column.  
**Files touched:** `src/app/page.tsx`, `public/static/style.css`, `TASKLOG.md`  
**API endpoints used:** —  
**Breaking change:** NO  
**Branch:** zoya-dev  

---

## [13-05-2026 17:05] — Login visual: stat cards grid + polish

**What changed:** Replaced the overlapping `position: absolute` layout for `.floating-cards` with a stable **2-column CSS grid**: row 1 = Calories + Heart Rate side by side; row 2 = Workout Streak spanning full width (`grid-column: 1 / -1`). Removed the infinite `translateY` float animation so cards stay aligned. Card visuals: layered glass gradient background, inset highlight, soft `::before` rim, stronger hover lift + shadow, larger icon wells (46px) with gradient fills, borders, and glow. `.fc-body` is a flex column with `margin-top: auto` on the bar / pulse / streak rows so metrics align to the bottom when row-1 cards share height. Progress bar slightly taller with inset shadow; streak pills rounded (`999px`) and taller; pulse wave height increased.  
**Files touched:** `src/app/login/login.css`, `TASKLOG.md`  
**API endpoints used:** —  
**Breaking change:** NO  
**Branch:** zoya-dev  

---

## [13-05-2026 16:47] — Wire "Member Login" buttons to `/login`

**What changed:** All "Member Login" entry points on the landing page (`src/app/page.tsx`) now navigate to the new `/login` route instead of the dead `#login` hash anchor. Imported `Link` from `next/link` and replaced every `<a href="#login">…</a>` with `<Link href="/login">…</Link>` (5 occurrences: desktop navbar, mobile menu, hero CTA, final CTA, footer Quick Links). Using `next/link` gives client-side navigation + automatic prefetch of the login page on hover/viewport, so the click is instant. Verified with `next build` — routes still show `○ /` and `○ /login` (both static prerendered).  
**Files touched:** `src/app/page.tsx`, `TASKLOG.md`  
**API endpoints used:** —  
**Breaking change:** NO  
**Branch:** zoya-dev  

---

## [13-05-2026 16:35] — Add `/login` route from Hono login page

**What changed:** Converted the Hono-based login files (`Downloads/index (1).tsx`, `Downloads/renderer (1).tsx`, `Downloads/static/static/style.css`, `Downloads/static/static/app.js`) into a proper Next.js App Router route at `src/app/login/`. Folder structure: `page.tsx` (server component exporting `metadata` title `"True Fitness | Member Login"` + description, renders the client view), `LoginView.tsx` (`'use client'` component holding the full UI + all interactions), and `login.css` (colocated stylesheet, imported by `LoginView.tsx`). JSX ported with React conventions: `class` → `className`, `for` → `htmlFor`, `autocomplete` → `autoComplete`, `novalidate` → `noValidate`, `minlength` → `minLength`, SVG attrs to camelCase (`strokeWidth`, `strokeLinecap`, `strokeLinejoin`), and inline `style="width: 72%"` → `style={{ width: "72%" }}`. The vanilla `app.js` script was rewritten as React hooks inside `LoginView.tsx`: `useState` for email/password/remember/showPassword/errors/loading/success, `useRef` for the card and inputs, `useEffect` for the desktop-only card tilt parallax and the global orb pointer parallax (both with `requestAnimationFrame` + cleanup), Web Animations API `el.animate(...)` for input shake on validation failure and social button press feedback. CSS scoping: all selectors prefixed with `.login-page` (root wrapper around the page), CSS variables renamed to `--login-*` so they don’t collide with the landing page tokens loaded globally from `public/static/style.css`, and `isolation: isolate` added on `.login-page` so the negative-z-index `.bg-wrapper` stays within the login stacking context. Landing page (`/`) and root `layout.tsx` left untouched. Verified `next build` compiles successfully — new route appears as `○ /login` (static) alongside `○ /`.  
**Files touched:** `src/app/login/page.tsx`, `src/app/login/LoginView.tsx`, `src/app/login/login.css`, `TASKLOG.md`  
**API endpoints used:** —  
**Breaking change:** NO  
**Branch:** zoya-dev  

---

## [11-05-2026 19:40] — Preserve Live Session card dimensions in hero flex row

**What changed:** On `.hero-hud-row .hero-card-main`, set `flex: 0 0 auto` and `align-self: flex-start` so the main glass card is not flex-shrunk or vertically stretched; removed `min-width: 0` that allowed width compression. Mini column still stretches to the flex line height so Calories / Streak layout stays correct.  
**Files touched:** `public/static/style.css`, `TASKLOG.md`  
**API endpoints used:** —  
**Breaking change:** NO  
**Branch:** zoya-dev  

---

## [01-06-2026 16:35] — Fix missing X (Twitter) social icon

**What changed:** Upgraded Font Awesome CDN from 6.4.0 to 6.7.2 so `fa-x-twitter` (added in 6.4.2+) renders in the contact/footer social row. Updated aria-label from "Twitter" to "X".  
**Files touched:** `src/app/layout.tsx`, `src/app/page.tsx`, `TASKLOG.md`  
**API endpoints used:** —  
**Breaking change:** NO  
**Branch:** zoya-dev  

---

## [01-06-2026 16:20] — Join form: duration → end date picker

**What changed:** Replaced the Duration dropdown with an End date calendar input. Period preview now uses the selected end date (From → To) and shows total days only. Default end date is one month after join date on mount; if join date moves past end date, end date auto-adjusts forward by one month.  
**Files touched:** `src/app/join/JoinView.tsx`, `TASKLOG.md`  
**API endpoints used:** —  
**Breaking change:** NO  
**Branch:** zoya-dev  

---

## [01-06-2026 16:05] — Fix join form hydration mismatch

**What changed:** Replaced `toLocaleDateString(undefined)` with a deterministic manual date formatter (`Mon, 01 Jun, 2026`) so SSR and client output match. Deferred default join date and `min` to a `useEffect` on mount (empty initial state) to avoid timezone drift between server and browser. Period preview renders only after `startDate` is set.  
**Files touched:** `src/app/join/JoinView.tsx`, `TASKLOG.md`  
**API endpoints used:** —  
**Breaking change:** NO  
**Branch:** zoya-dev  

---

## [01-06-2026 15:42] — Join form: calendar + membership period preview

**What changed:** Added a "Join date" date picker and a "Duration" selector (1 / 3 / 6 / 12 months) to the membership inquiry form. Added a live, animated "Membership period" preview card that shows the formatted From → To range and total days based on the selected start date + duration. Implemented `todayISO`, `addMonths` (with month-rollover clamp), `formatDate`, and `daysBetween` helpers. Styled the new two-column row, themed the native date input for dark mode, and added the gradient period preview card with arrow and From/To cells.  
**Files touched:** `src/app/join/JoinView.tsx`, `src/app/join/join.css`, `TASKLOG.md`  
**API endpoints used:** —  
**Breaking change:** NO  
**Branch:** zoya-dev  

---
