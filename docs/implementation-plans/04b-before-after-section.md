# Implementation Plan 04b: Before/After Transformation Section

**Status:** In Progress  
**Date Started:** 2026-04-17  
**Related Prompt:** Prompt 4b — Before/After Section  
**Previous:** 04a-remove-legacy-featuregrid.md

---

## Objective
Add a dedicated "Real Work. Real Results." section to the homepage 
showcasing before/after transformations from actual KAM Mechanical 
jobs. This section sits between the Services section and the next 
section (KAM Performance Guarantee), and serves as a visual trust 
builder — proof that we do the work, not just list it.

## Why This Section Matters
- **Undeniable proof of quality** — photos accomplish what copy can't
- **Educates visitors** on problems they may not know they have 
  (dirty coils, damaged ductwork)
- **Differentiates KAM** from competitors who only show finished 
  shots or stock imagery
- **Documentation builds trust** — "we document every job" signals 
  professionalism
- **Lead generator** — visitors seeing their own home's issues in 
  the "before" images get motivated to call

## Transformations Featured (3 total)

### 1. Ductwork Replacement — Marrero, LA
- Before: /images/before-after/ductwork-marrero-before.jpg 
  (damaged old insulation)
- After: /images/before-after/ductwork-marrero-after.jpg 
  (new clean insulated trunk with takeoffs)
- Label: "Ductwork Replacement"
- Location: "Marrero, LA"
- Description: "Deteriorating ductwork leaking conditioned air 
  replaced with fresh insulated trunk system and properly 
  strapped takeoffs."

### 2. AC Coil Cleaning — New Orleans Metro
- Before: /images/coil-cleaning/coil-dirty-exposed.jpg 
  (fan pulled up, dirty coils visible)
- After: /images/coil-cleaning/coil-clean-result.jpg 
  (clean unit post-service)
- Label: "Deep Coil Cleaning & Tune-Up"
- Location: "New Orleans, LA"
- Description: "Years of buildup restricting airflow removed 
  with professional coil cleaning — restoring full system 
  performance in under 2 hours."

### 3. Mechanical Room Buildout — Commercial Project
- Before (Progress): /images/commercial/mechanical-room-team-install.jpg 
  (team actively installing)
- After (Commissioned): /images/commercial/boilers-commissioned.jpg 
  (finished mechanical room with PK ModuFire boilers)
- Label: "Mechanical Room Buildout"
- Location: "Commercial Project"
- Description: "From raw installation through final commissioning — 
  a fully engineered mechanical room ready for operation."

## Files to Create
- /components/home/BeforeAfterSection.tsx — parent section
- /components/home/BeforeAfterCard.tsx — reusable comparison card
- /lib/transformations.ts — centralized transformation data

## Files to Modify
- /app/page.tsx — render <BeforeAfterSection /> after 
  <ServicesSection />

## Design Decisions
- **Side-by-side comparison, not slider** — ships faster, simpler 
  code, better mobile experience. Can upgrade to drag-slider 
  later if analytics show engagement
- **Split view with clear BEFORE/AFTER labels** — immediate visual 
  comprehension
- **Gold arrow/divider between before and after** — matches brand 
  palette, signals transformation
- **Project metadata below each pair** — label + location + 
  description gives context without overwhelming
- **Dark background continues from Services section** — visual 
  continuity
- **3 transformations in a vertical stack** — emphasis on each one, 
  not a quick carousel glance
- **Server Component** — static content, no interactivity needed

## Visual Structure
```
┌──────────────────────────────────────────────────────────────┐
│  ─── REAL WORK. REAL RESULTS.                                │
│                                                              │
│  See The Difference We Make                                  │
│                                                              │
│  Every job, documented. Every transformation, real.          │
│  No stock photos. Just the work.                             │
│                                                              │
│  ┌────────────────────────────────────────────────────┐     │
│  │  [BEFORE photo]              [AFTER photo]          │     │
│  │   Label: BEFORE    →         Label: AFTER           │     │
│  │                                                      │     │
│  │  Ductwork Replacement — Marrero, LA                 │     │
│  │  Deteriorating ductwork leaking conditioned air... │     │
│  └────────────────────────────────────────────────────┘     │
│                                                              │
│  ┌────────────────────────────────────────────────────┐     │
│  │  [BEFORE]                    [AFTER]                │     │
│  │  ...                                                 │     │
│  └────────────────────────────────────────────────────┘     │
│                                                              │
│  ┌────────────────────────────────────────────────────┐     │
│  │  [IN PROGRESS]               [COMMISSIONED]         │     │
│  │  ...                                                 │     │
│  └────────────────────────────────────────────────────┘     │
└──────────────────────────────────────────────────────────────┘
```

## Card Specifications
- Background: Subtle dark card (bg-neutral-900 or similar)
- Border: 1px white/10 opacity
- Rounded corners: rounded-2xl
- Padding: p-4 md:p-6
- Grid: 2 columns for before/after images on desktop, 
  stacked vertically on mobile
- Image aspect ratio: 4:3 (landscape — shows more context)
- Text section below images: p-4 or p-6

## Label Styling
- Position: Absolute, top-left of each image
- Background: Black/70 with backdrop blur for readability
- Text: text-xs uppercase tracking-widest, white
- Padding: px-3 py-1
- Rounded: rounded-full

## Typography
- Section eyebrow: text-xs uppercase tracking-widest, gold
- Section headline: text-3xl md:text-4xl lg:text-5xl, bold white
- Section description: text-base text-neutral-400, max-w-2xl
- Project label: text-lg md:text-xl font-semibold white
- Location: text-sm text-neutral-400
- Description: text-sm text-neutral-300, max-w-2xl

## Mobile Responsive
- Section padding: py-20 md:py-28
- Desktop: Before/after images side-by-side in 2-col grid
- Mobile: Images stack vertically, AFTER below BEFORE
- Text metadata fills full width below images

## Testing Checklist
- [ ] npm run dev — section renders after ServicesSection
- [ ] 3 transformation cards visible
- [ ] All 6 images load correctly (no 404s)
- [ ] BEFORE / AFTER labels positioned correctly on images
- [ ] Third card uses "IN PROGRESS" / "COMMISSIONED" labels
- [ ] Project metadata displays below each pair
- [ ] Desktop: Images side-by-side
- [ ] Mobile: Images stack vertically
- [ ] npm run build — No errors
- [ ] Vercel preview deploys

## Git Commit Messages (Suggested)
docs: add before/after section implementation plan
feat(before-after): add transformation showcase section

## Status Log
- 2026-04-17: Plan created, implementation started
