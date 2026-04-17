# Implementation Plan 02: Homepage Hero Section

**Status:** Complete  
**Date Started:** 2026-04-16  
**Related Prompt:** Prompt 2 — Hero Section  
**Previous:** 01-foundation-setup.md

---

## Objective
Replace the existing homepage hero with a dual-division hero that
treats Commercial and Residential as 50/50 priorities, surfaces
24/7 emergency service availability, prominently displays the
phone number, and provides audience-specific CTAs.

## Problems Being Solved
1. No visible phone number on current hero
2. No emergency service signaling
3. "Request a Bid" CTA is wrong framing for residential customers
4. No service area mentioned on hero
5. Single CTA doesn't serve both commercial and residential audiences

## Files to Create
- `/components/home/TopUtilityBar.tsx`
- `/components/home/Hero.tsx`
- `/components/home/CommercialPanel.tsx`
- `/components/home/ResidentialPanel.tsx`

## Files to Modify
- `/app/page.tsx` — imports and renders new hero components
- Existing Header component — CTA button changes (replace
  "Request a Bid" with "Call Now" + "Get a Quote")

## Design Decisions
- **Split 50/50 on desktop, stacked on mobile** — Both divisions
  get equal weight; mobile stacks since phones are portrait
- **Top utility bar** — Phone + emergency + service area above
  hero for instant visibility
- **Dual CTAs** — "Commercial Solutions" (outline gold) for B2B,
  "Book Service" (filled gold) for homeowners
- **No hero images yet** — Current photos are job-site shots, not
  hero-worthy. Awaiting reshoot
- **Server components only** — No "use client"; all static content
  preserves SEO and initial load speed

## Component Breakdown

### TopUtilityBar
- Left: Service area text (hidden on mobile)
- Center: EmergencyBanner with pulsing dot
- Right: Click-to-call phone number

### Hero
- Parent component, split layout
- Imports CommercialPanel and ResidentialPanel
- Responsive split/stack behavior
- Min-height: 90vh desktop, auto mobile

### CommercialPanel
- Left panel, Commercial Division messaging

### ResidentialPanel
- Right panel, Residential Division messaging

## Dependencies Used
- lucide-react (Building2, Home, Check, Phone icons)
- next/link
- /lib/constants.ts (BUSINESS, COLORS, ROUTES)
- /components/ui/PhoneCTA.tsx
- /components/ui/EmergencyBanner.tsx

## Mobile Responsive Behavior
- Below 768px: Stack panels vertically
- Utility bar: Hide service area text
- Font sizes reduce (text-5xl → text-3xl headlines)
- Scroll indicator hidden
- Vertical divider removed when stacked

## Accessibility
- Focus states on all interactive elements
- Phone links: aria-label="Call KAM Mechanical at 504-648-6777"
- Semantic HTML (section, header, h1, h2, p)
- WCAG AA color contrast verified

## Testing Checklist
- [x] npm run dev — Hero renders on localhost:3000
- [ ] Desktop: Both panels side-by-side
- [ ] Mobile: Panels stack vertically
- [ ] Phone link opens tel: prompt
- [x] "Book Service" routes to /contact
- [x] "Commercial Solutions" routes to /services
- [x] npm run build — No errors
- [ ] Vercel preview deploy succeeds

## Git Commit Message (Suggested)
feat(hero): dual-division hero with emergency signaling and
click-to-call

## Status Log
- [2026-04-16]: Plan created, implementation started
- [2026-04-16]: Hero and header updates completed; build passes
