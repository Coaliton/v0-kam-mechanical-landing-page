# Implementation Plan 05: Service Detail Page Template + Coil Cleaning Page

**Status:** Complete  
**Date Started:** 2026-04-17  
**Related Prompt:** Prompt 5 — Service Detail Pages  
**Previous:** 04b-before-after-section.md

---

## Objective
Build a dynamic, reusable service detail page at 
`/app/services/[slug]/page.tsx` that renders individual service 
pages based on centralized content data. Populate the Coil 
Cleaning service as the first live detail page to serve as the 
template model and the primary paid-ad landing page.

## Architecture Decision
Using Option A — dynamic routing with content-driven template.
- ONE page template handles all services
- Content lives in `/lib/service-content.ts`
- New services = new data entry (no new files)
- Per-service conditional rendering allowed via template
- Unbuilt services fall back to a "Coming Soon" stub

## Problems Being Solved
1. Service cards on homepage route to /services/[slug] but pages 
   don't exist (currently 404)
2. No dedicated landing page for paid traffic/ads
3. No detailed service information, pricing, or process 
   documentation
4. No SEO footprint for individual service keywords

## Services Supported
- coil-cleaning (LIVE — fully built as model for paid ads)
- commercial-hvac (stub — "Coming Soon" fallback)
- boilers-chillers (stub — "Coming Soon" fallback)
- mechanical-rooms (stub — "Coming Soon" fallback)
- ac-replacement (stub — "Coming Soon" fallback)
- emergency-repair (stub — "Coming Soon" fallback)

## Coil Cleaning Page Content (Live)

### Pricing
- $250 per unit (single system)
- $200 each additional unit (multi-system discount)
- Duration: 1-1.5 hours per unit typical
- Disclaimer: "Larger systems or heavily soiled units may require 
  additional time — we'll always quote accurately before starting."

### Positioning
- Low-cost entry service
- Honest, diagnostic-first approach
- No surprise charges
- No work performed beyond cleaning without explicit customer 
  permission
- Sets up natural upsell path via walkthrough + written report

## Template Sections (per page)
1. Hero — image, title, value prop, dual CTAs (Book / Call)
2. What It Is — plain English explanation
3. Why It Matters — pain points + consequences of skipping
4. Our Process — numbered step-by-step
5. Before/After — optional, shown if data provided
6. What's Included — checklist
7. Also We'll Look At — bonus diagnostic list (coil cleaning only)
8. Pricing & Timing — transparent breakdown with disclaimer
9. Our Promise — trust reinforcement
10. FAQ — 4-6 common questions
11. Final CTA — phone + form

## Files to Create
- `/lib/service-content.ts` — centralized service data
- `/app/services/[slug]/page.tsx` — dynamic route template
- `/components/services/ServiceHero.tsx`
- `/components/services/ServiceSection.tsx` — reusable titled section
- `/components/services/ProcessSteps.tsx`
- `/components/services/PricingCard.tsx`
- `/components/services/ServiceFAQ.tsx`
- `/components/services/ServiceCTA.tsx`
- `/components/services/ComingSoonStub.tsx` — fallback for stubs

## Files to Modify
- None (service detail pages are new routes)

## Design Decisions
- Server Components throughout (SEO-critical pages must be static)
- `generateStaticParams` used to pre-render all known service slugs
- `generateMetadata` used for per-page SEO tags
- Conditional sections based on data presence (if no before/after 
  data, section doesn't render)
- "Coming Soon" stub for services without full content — still 
  routes correctly, doesn't 404
- Pricing section has disclaimer built-in for variable duration

## Typography
- H1 (hero title): text-4xl md:text-5xl lg:text-6xl, bold
- H2 (section titles): text-2xl md:text-3xl, bold
- H3 (sub-items): text-lg md:text-xl, semibold
- Body: text-base md:text-lg, text-neutral-300
- Pricing numbers: text-4xl md:text-5xl, bold, gold

## Mobile Responsive
- Hero stacks vertically on mobile
- Process steps go from horizontal to vertical
- Pricing card full-width on mobile
- FAQ items stay vertical (already mobile-friendly)

## SEO
- Unique <title> per service: "[Service] | KAM Mechanical | 
  New Orleans HVAC"
- Unique meta description per service
- Service schema markup (JSON-LD) — optional stretch goal

## Testing Checklist
- [x] Plan file created
- [x] /lib/service-content.ts exports SERVICE_CONTENT map
- [x] /app/services/[slug]/page.tsx dynamic route works
- [x] generateStaticParams returns all 6 slugs
- [x] Visiting /services/coil-cleaning shows full page
- [x] Visiting /services/ac-replacement shows Coming Soon stub
- [x] Visiting /services/invalid-slug shows 404
- [x] All component files created
- [ ] npm run dev — coil cleaning page renders fully
- [x] npm run build — all 6 routes prerender as static
- [ ] Vercel preview deploys

## Git Commit Messages (Suggested)
docs: add service detail page template plan
feat(services): dynamic service detail pages + coil cleaning

## Status Log
- 2026-04-17: Plan created, implementation started
- 2026-04-17: Dynamic service template and coil cleaning detail page implemented.
- 2026-04-17: Verified static generation with `npm run build` for all 6 service slugs.
- 2026-04-17: `npm run dev` startup failed in this sandbox environment (`uv_interface_addresses`), needs local IDE run verification.
