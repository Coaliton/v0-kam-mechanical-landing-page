# Implementation Plan 07: Service Area Section

**Status:** Complete  
**Date Started:** April 19, 2026  
**Date Completed:** April 19, 2026  
**Related Prompt:** Prompt 7 — Service Area  
**Previous:** 06-social-proof-section.md

---

## Objective
Add a Service Area section to the homepage that clearly 
communicates where KAM Mechanical serves — parish by parish 
for residential, plus statewide commercial coverage. Critical 
for local SEO (Google uses geographic references to rank 
local businesses) and removes a common visitor objection 
("Do they come to my neighborhood?").

## Problems Being Solved
1. No clear communication of service area on current site
2. Missing local SEO signals (parishes, cities not mentioned 
   structurally)
3. Visitors outside service area waste time; visitors inside 
   it may not know they qualify
4. No visual reinforcement of "local business" positioning

## Section Placement
After <SocialProofSection />, before footer/final CTA area.
Natural flow: "Customers love us → Here's where we can come 
do the same for you."

## Design Approach — Option B
Two-column layout with featured image on right:
- LEFT: Service area list (residential + commercial breakdown)
- RIGHT: KAM branded van photo
- Stacks vertically on mobile (van image first, coverage copy below `lg`)

## Coverage Areas

### Residential Service Area
- **Orleans Parish**: New Orleans
- **Jefferson Parish**: Metairie, Kenner, Harvey, Marrero, 
  Westwego, Gretna, River Ridge
- **St. Bernard Parish**: Chalmette, Arabi, Meraux
- **St. Tammany Parish**: Mandeville, Covington, Slidell

### Commercial Service Area
All residential parishes PLUS statewide Louisiana reach 
for commercial projects.

## Files to Create
- `/lib/service-areas.ts` — centralized service area data
- `/components/home/ServiceAreaSection.tsx` — parent section

## Files to Modify
- `/app/page.tsx` — render <ServiceAreaSection /> after 
  <SocialProofSection />

## Design Decisions
- **Two-column on desktop, stacked on mobile** — clear hierarchy
- **Residential and Commercial visually distinguished** — 
  different headers, maybe icon or badge per group
- **MapPin icon next to each parish** — quick visual scan
- **"Not sure if you're in our area? Call us." CTA** at bottom 
  — handles edge cases without listing every rural community
- **Featured image** (KAM van) — reinforces "we actually come 
  to you" message
- **Server Component** — static, SEO-critical content

## Image
- Path: `/images/team/kam-van-branded.jpg`
- Alt: "KAM Mechanical branded service van"
- Rounded corners to match other image treatments on site
- Border consistent with rest of site

## Visual Structure
```
┌────────────────────────────────────────────────────────────┐
│  ─── SERVICE AREA                                           │
│                                                             │
│  Serving New Orleans & All                                  │
│  Surrounding Parishes                                       │
│                                                             │
│  ┌──────────────────────────┐  ┌────────────────────────┐ │
│  │ RESIDENTIAL COVERAGE     │  │                        │ │
│  │                          │  │                        │ │
│  │ Orleans Parish           │  │   [KAM Van Image]      │ │
│  │ ▸ New Orleans            │  │                        │ │
│  │                          │  │                        │ │
│  │ Jefferson Parish         │  │                        │ │
│  │ ▸ Metairie, Kenner...    │  │                        │ │
│  │                          │  │                        │ │
│  │ St. Bernard Parish       │  │                        │ │
│  │ ▸ Chalmette, Arabi...    │  │                        │ │
│  │                          │  │                        │ │
│  │ St. Tammany Parish       │  │                        │ │
│  │ ▸ Mandeville, Covington..│  │                        │ │
│  │                          │  └────────────────────────┘ │
│  │ ─────                    │                             │
│  │ COMMERCIAL COVERAGE      │                             │
│  │ Statewide Louisiana +    │                             │
│  │ New Orleans metro        │                             │
│  │                          │                             │
│  │ Not sure? Call us        │                             │
│  │ (504) 648-6777           │                             │
│  └──────────────────────────┘                             │
└────────────────────────────────────────────────────────────┘
```

## Typography
- Eyebrow: text-xs uppercase tracking-widest, gold
- Headline: text-3xl md:text-4xl lg:text-5xl, bold white
- Subsection label (RESIDENTIAL COVERAGE): text-xs uppercase 
  tracking-widest, gold
- Parish name: text-lg md:text-xl font-semibold, white
- City list: text-sm md:text-base, text-neutral-300
- Call CTA: text-base, gold

## Mobile Responsive
- Desktop (lg+): Two columns, image on right
- Tablet (md): Two columns, slightly tighter
- Mobile (below lg): Single column, van image first, coverage content below (`order-first` / `lg:order-last`)

## Testing Checklist
- [x] npm run dev — section renders after social proof (verified via `npm run build` + route order in `app/page.tsx`)
- [x] 4 residential parishes listed with cities
- [x] Commercial coverage noted
- [x] Van image displays correctly (`public/images/team/kam-van-branded.jpg`)
- [x] "Call us" CTA works (`tel:` via `BUSINESS.phoneHref`)
- [x] Desktop: two-column layout (`lg:grid-cols-2`)
- [x] Mobile: single column stack; image above text below `lg`
- [x] MapPin icons render (if used)
- [x] npm run build — No errors
- [ ] Vercel preview deploys (not run from this environment)

## SEO Value
This section is HIGH VALUE for local SEO:
- Parish names appear in structured HTML
- City names appear in visible text
- Combined with existing NOLA mentions elsewhere on site, 
  strengthens local ranking signals
- Specific cities are searchable terms ("HVAC Metairie", 
  "AC repair Slidell")

## Git Commit Messages (Suggested)
docs: add service area section implementation plan
feat(service-area): add service area section with van photo

## Status Log
- April 19, 2026: Plan created, implementation started
- April 19, 2026: Implemented `lib/service-areas.ts`, `ServiceAreaSection.tsx`, wired into `app/page.tsx`; `npm run build` succeeded
