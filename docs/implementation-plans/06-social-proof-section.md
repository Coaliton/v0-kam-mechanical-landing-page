# Implementation Plan 06: Social Proof Section

**Status:** Complete  
**Date Started:** April 19, 2026  
**Date Completed:** April 19, 2026  
**Related Prompt:** Prompt 6 — Social Proof  
**Previous:** 05-service-detail-template.md

---

## Objective

Add a social proof section to the homepage showcasing real customer reviews from KAM Mechanical's Housecall Pro CRM. Positions between the Before/After section and the next section in the homepage flow. Serves as third-party validation of the work quality shown in the before/after visuals.

## Problems Being Solved

1. Current site has only a floating "5.0 Google Reviews" widget — users have to hover/click to see social proof
2. No featured customer quotes on homepage
3. No visible reviewer names or context for trust
4. Credibility chain incomplete — we show the work but not what customers say about it

## Section Placement

After `<BeforeAfterSection />`, before whatever comes next. This creates the narrative: "See the work → See what customers say about the work."

## Review Data Sources

- Primary: Housecall Pro CRM (existing verified review system)
- Secondary: Google reviews (once GBP verification completes)
- Data stored in: `/lib/reviews.ts` for easy editing/updating

## Featured Reviews (initial 3)

1. David Briggs (Lighthouse Harbor Condos) — Commercial, May 2025
2. Mike Garibaldi — Residential, February 2025
3. Kevin Davis — Residential, February 2025

## Design Decisions

- **3-column grid on desktop, stacked on mobile** — scannable without scrolling on desktop, full width on mobile for readability
- **5-star rating display per review** — gold stars match brand palette
- **Reviewer name + context** (city/property) — increases credibility vs. anonymous quotes
- **Review date shown** — recency signals active business
- **Aggregate rating bar at top** — shows 5.0 rating + total count
- **Attribution line at bottom** — "Sourced from verified customers via Housecall Pro" builds trust with how reviews are collected
- **Server Component** — static content
- **No carousel/slider** — static grid is faster, cleaner, and doesn't hide content behind interactions

## Visual Structure

```
┌────────────────────────────────────────────────────────────┐
│  ─── WHAT CUSTOMERS SAY                                     │
│                                                             │
│  Real Work. Real Results. Real Reviews.                    │
│                                                             │
│  ⭐⭐⭐⭐⭐ 5.0 Rating • 12+ Five-Star Reviews                │
│                                                             │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐       │
│  │ ⭐⭐⭐⭐⭐     │ │ ⭐⭐⭐⭐⭐     │ │ ⭐⭐⭐⭐⭐     │       │
│  │              │ │              │ │              │       │
│  │ "Has been a  │ │ "Very        │ │ "Quick,      │       │
│  │ true         │ │ accountable  │ │ reliable,    │       │
│  │ pleasure..." │ │ and..."      │ │ excellent"   │       │
│  │              │ │              │ │              │       │
│  │ David Briggs │ │ Mike         │ │ Kevin Davis  │       │
│  │ Lighthouse   │ │ Garibaldi    │ │              │       │
│  │ Harbor Condos│ │              │ │              │       │
│  │              │ │              │ │              │       │
│  │ May 2025     │ │ Feb 2025     │ │ Feb 2025     │       │
│  └──────────────┘ └──────────────┘ └──────────────┘       │
│                                                             │
│  Sourced from verified customers via Housecall Pro          │
└────────────────────────────────────────────────────────────┘
```

## Files to Create

- `/lib/reviews.ts` — centralized review data
- `/components/home/SocialProofSection.tsx` — parent section
- `/components/home/ReviewCard.tsx` — reusable review card

## Files to Modify

- `/app/page.tsx` — render `<SocialProofSection />` after `<BeforeAfterSection />`

## Typography

- Section eyebrow: text-xs uppercase tracking-widest, gold
- Headline: text-3xl md:text-4xl lg:text-5xl, bold white
- Aggregate rating label: text-lg md:text-xl, white
- Review body: text-base md:text-lg, text-neutral-200, italic
- Reviewer name: text-base, font-semibold, white
- Reviewer context: text-sm, text-neutral-400
- Date: text-xs, text-neutral-500

## Mobile Responsive

- Desktop (md+): 3-column grid
- Tablet: 2-column, third card wraps
- Mobile: Single column, cards full width

## Testing Checklist

- [ ] npm run dev — section renders after Before/After section (verify locally in browser)
- [x] 3 review cards visible
- [x] 5 gold stars display per card
- [x] Aggregate rating bar shows 5.0 + review count
- [x] Reviewer names + context display
- [x] Review dates display
- [x] Attribution line displays
- [x] Desktop: 3-col grid
- [x] Mobile: stacked vertically
- [x] npm run build — No errors
- [ ] Vercel preview deploys

## Git Commit Messages (Suggested)

docs: add social proof section implementation plan  
feat(social-proof): customer reviews section on homepage

## Status Log

- April 19, 2026: Plan created, implementation started
- April 19, 2026: Implemented `lib/reviews.ts`, `ReviewCard`, `SocialProofSection`, wired into `app/page.tsx`; `npm run build` passed. Vercel checklist item left open until next preview deploy.
