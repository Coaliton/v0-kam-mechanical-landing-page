# Implementation Plan 07a: Global Navigation + Breadcrumbs

**Status:** Complete  
**Date Started:** April 19, 2026  
**Date Completed:** April 19, 2026  
**Related Prompt:** Prompt 7a — UX Fix  
**Previous:** 06-social-proof-section.md

---

## Problem

Current implementation has the TopUtilityBar and Header rendering 
only on the homepage (/app/page.tsx). When a visitor clicks a 
service card and lands on /services/[slug], there is NO navigation 
visible — no logo, no nav links, no "back to home" option, no 
phone number in header. Visitors are stuck on the detail page 
with only browser back button as escape.

## Impact on Conversion

- High bounce rate from service pages (no easy path back)
- Lost upsell opportunities (visitor can't browse to other services)
- Poor mobile UX (tab-closing is the only exit)
- Reduces time-on-site (hurts SEO signals)
- Unprofessional appearance — feels like landing page, not full site

## Objective

1. Make TopUtilityBar + Header render on EVERY page site-wide
2. Add breadcrumb navigation to service detail pages 
   (Home / Services / [Service Name])
3. Ensure smooth navigation between homepage and detail pages

## Architecture Approach

Move TopUtilityBar and Header from /app/page.tsx to /app/layout.tsx 
(the root layout that wraps every page). This makes them render 
automatically on all routes — homepage, service pages, any future 
pages.

Build a new Breadcrumbs component that renders at the top of 
service detail pages, immediately after the header.

## Files to Modify

- `/app/layout.tsx` — add TopUtilityBar + Header as global 
  components
- `/app/page.tsx` — REMOVE TopUtilityBar + Header from homepage 
  (they'll now come from layout)
- `/app/services/[slug]/page.tsx` — add Breadcrumbs component 
  at top
- `/components/home/ServicesSection.tsx` — add `id="services"` 
  so the breadcrumb “Services” link (`/#services`) scrolls to 
  the homepage services block
- `/app/about/page.tsx`, `/app/contact/page.tsx`, 
  `/app/projects/page.tsx`, `/app/services/page.tsx` — remove 
  duplicate `<Header />` now supplied by root layout

## Files to Create

- `/components/ui/Breadcrumbs.tsx` — reusable breadcrumb 
  component

## Design Decisions

- **Global header in layout.tsx** — single source of truth; 
  Next.js automatically applies to all pages
- **Breadcrumbs use Lucide ChevronRight for separators** — 
  lightweight, consistent with site icons
- **Last breadcrumb item is plain text (not clickable)** — 
  user is already on that page
- **All other breadcrumbs are Link components** — proper 
  routing, no full page reloads
- **Subtle styling** — breadcrumbs should not dominate; they 
  orient the visitor without stealing attention from the 
  service hero below
- **Mobile-responsive** — on narrow screens, breadcrumbs can 
  truncate long names (e.g., "...Coil Cleaning & Tune-Up" or 
  show only the last 1-2 levels)
- **“Services” breadcrumb (Option B)** — `href: '/#services'` 
  until a dedicated services index page is the primary UX; 
  homepage section is the scroll target

## Breadcrumb Structure

```
Home / Services / [Current Service Name]
```

For coil cleaning specifically:

```
Home / Services / Coil Cleaning & Tune-Up
```

For a Coming Soon stub:

```
Home / Services / AC Replacement & Installation
```

## Typography & Styling

- Container: Subtle dark bar between header and hero
- Padding: py-4 px-4 md:px-6
- Background: bg-neutral-950 or transparent (tbd, matches existing dark theme)
- Separator: ChevronRight icon, small, muted
- Links: text-sm text-neutral-400 hover:text-yellow-500 transition
- Current page: text-sm text-white (not a link)

## Mobile Responsive

- On screens below md: consider simplifying to just 
  "← Back to Services" instead of full breadcrumb
- For now: show full breadcrumb on all sizes, with smaller 
  text on mobile and tight spacing

## Testing Checklist

- [x] TopUtilityBar appears on homepage
- [x] TopUtilityBar appears on /services/coil-cleaning
- [x] TopUtilityBar appears on /services/ac-replacement (stub)
- [x] Header appears on all pages with working nav
- [x] Logo on header routes to homepage when clicked
- [x] Services link in nav routes to /services
- [x] Breadcrumbs visible on coil cleaning page
- [x] Breadcrumbs visible on stub pages
- [x] "Home" breadcrumb routes to /
- [x] "Services" breadcrumb routes to `/#services` (homepage 
   services section)
- [x] Current page name displays but is not clickable
- [x] Mobile: breadcrumbs readable, not overflowing
- [x] npm run build passes
- [x] All 6 service routes still prerender statically
- [x] No console errors

## Git Commit Messages (Suggested)

docs: add global nav + breadcrumbs implementation plan
fix(nav): global header on all pages + breadcrumbs on service pages

## Status Log

- April 19, 2026: Plan created, implementation started
- April 19, 2026: Implementation complete — global 
  TopUtilityBar + Header in `app/layout.tsx`, Breadcrumbs on 
  service detail routes, `/#services` anchor on homepage 
  services section, duplicate headers removed from other app 
  routes; `npm run build` succeeded (6 SSG service slugs)
