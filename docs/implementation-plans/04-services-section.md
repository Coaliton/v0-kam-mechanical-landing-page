# Implementation Plan 04: Homepage Services Section

**Status:** Complete  
**Date Started:** 2026-04-17  
**Related Prompt:** Prompt 4 — Services Section  
**Previous:** 03-trust-bar.md

---

## Objective
Replace the existing pricing-card-based services section with a 
Dribbble-inspired image card layout. Two division rows 
(Commercial + Residential), 3 services each. Each card routes to 
its own dedicated service detail page (pages to be built in 
Prompt 5).

## Problems Being Solved
1. Current pricing cards create anxiety instead of engagement
2. Wide price ranges ($3,500-$15,000) feel uncertain
3. Bullet points don't communicate service quality
4. No visual storytelling for each service
5. Pricing displayed before trust is established
6. No clear paths to dedicated service detail pages

## Services Featured

### Commercial Division (3 services)
1. Commercial HVAC Systems → /services/commercial-hvac
   Image: /images/commercial/commercial-hvac-carrier.jpg
2. Boiler / Chiller Service → /services/boilers-chillers
   Image: /images/commercial/boilers-commissioned.jpg
3. Mechanical Room Buildouts → /services/mechanical-rooms
   Image: /images/commercial/mechanical-room-team-install.jpg

### Residential Division (3 services)
1. Coil Cleaning & Tune-Ups → /services/coil-cleaning ⭐ lead magnet
   Image: /images/coil-cleaning/team-cleaning-service.jpg
   Badge: "Most Popular"
2. AC Replacement & Installation → /services/ac-replacement
   Image: /images/residential/ac-install-copper-work.jpg
3. 24/7 Emergency Repair → /services/emergency-repair
   Image: null (placeholder until reshoot)

## Files to Create
- /components/home/ServicesSection.tsx — parent section
- /components/home/DivisionRow.tsx — reusable row (used 2x)
- /components/home/ServiceCard.tsx — reusable card (used 6x)
- /lib/services.ts — centralized service data

## Files to Modify
- /app/page.tsx — render ServicesSection after TrustBar
- Remove any existing services/pricing section from homepage

## Design Decisions
- **Photo-forward cards** — visual trust, better engagement
- **Dual rows with distinct headers** — clear separation
- **No pricing on cards** — pricing lives on service detail pages
- **Routing to stub pages** — framework first, content later
- **Placeholder card for Emergency Repair** — styled gradient + 
  icon + "Photo Coming Soon" until real photo captured
- **Server Components** — static content; hover via Tailwind 
  pseudo-classes
- **Aspect ratio 4:5 portrait** — premium feel, object-cover 
  handles any source image size

## Image Strategy
- 5 of 6 cards have real photos ready in /public/images/
- Emergency Repair card uses styled placeholder 
  (gradient + lucide icon + label)
- When real photo added later, set `image` field in services.ts 
  and placeholder auto-disappears

## Typography
- Division eyebrow: text-xs uppercase tracking-widest, gold
- Section headline: text-3xl md:text-4xl lg:text-5xl, bold white
- Description: text-base text-neutral-400, max-w-md
- Card title: text-lg md:text-xl font-semibold white
- CTA link text: text-sm font-medium gold

## Mobile Responsive
- Desktop (lg+): 3 cards per row, fully visible
- Tablet (md): 3 cards per row, smaller
- Mobile (below md): Horizontal scroll with snap-to, 1.2 cards 
  visible at a time
- Section header: Stacks vertically on mobile

## Testing Checklist
- [x] npm run dev — Services section renders after trust bar
- [x] Both division rows visible with headers
- [x] 6 cards render with correct titles and descriptions
- [x] 5 cards show real photos (commercial x3, coil cleaning, 
      ac replacement)
- [x] Emergency Repair card shows placeholder styling
- [x] Coil Cleaning card shows "Most Popular" badge
- [x] Card hover effects work (scale + border glow)
- [x] Desktop: 3 cards per row
- [x] Mobile: Horizontal scroll with snap works
- [x] Clicking a card routes to /services/[slug] (404 OK for now)
- [x] npm run build — No errors
- [x] Vercel preview deploys

## Git Commit Messages (Suggested)
docs: add services section implementation plan
feat(services): homepage services section with dual-division cards

## Status Log
- [2026-04-17]: Plan created, implementation started
- [2026-04-17]: Services section implemented and integrated on homepage; validation completed
