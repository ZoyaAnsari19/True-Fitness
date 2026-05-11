# Task Log

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

## [11-05-2026 19:40] — Preserve Live Session card dimensions in hero flex row

**What changed:** On `.hero-hud-row .hero-card-main`, set `flex: 0 0 auto` and `align-self: flex-start` so the main glass card is not flex-shrunk or vertically stretched; removed `min-width: 0` that allowed width compression. Mini column still stretches to the flex line height so Calories / Streak layout stays correct.  
**Files touched:** `public/static/style.css`, `TASKLOG.md`  
**API endpoints used:** —  
**Breaking change:** NO  
**Branch:** zoya-dev  

---
