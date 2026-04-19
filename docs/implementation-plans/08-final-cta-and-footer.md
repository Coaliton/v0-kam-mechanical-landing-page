# Implementation Plan 08: Final CTA + Global Footer

**Status:** Complete  
**Date Started:** April 19, 2026  
**Date Completed:** April 19, 2026  
**Related Prompt:** Prompt 8 — Final CTA + Footer  
**Previous:** 07a-global-nav-breadcrumbs.md

---

## Objective
Close out the homepage with a high-conversion Final CTA section 
and build a comprehensive global footer that appears on every 
page. Also stub out /privacy and /terms routes as placeholders 
until real legal content is generated via Termly or similar service.

## What This Completes
- Final CTA section closes the homepage conversion narrative
- Global footer reinforces contact info, services, and trust 
  signals on every page
- Privacy/Terms stubs prepare for legal compliance before 
  active marketing begins
- Phone number repeat in footer captures scroll-to-bottom users

## Problems Being Solved
1. Homepage currently ends abruptly with no final conversion push
2. No footer = no secondary navigation on service pages
3. No contact info visible at bottom of any page
4. No copyright or business info displayed
5. No legal pages exist yet (required before ads/marketing)

## Files to Create
- /components/home/FinalCTASection.tsx — homepage closing CTA
- /components/ui/Footer.tsx — global footer (used in layout)
- /lib/footer-data.ts — footer navigation structure
- /app/privacy/page.tsx — placeholder Privacy Policy page
- /app/terms/page.tsx — placeholder Terms of Service page

## Files to Modify
- /app/page.tsx — render <FinalCTASection /> after 
  <ServiceAreaSection />
- /app/layout.tsx — render <Footer /> after {children} so it 
  appears on every page
- /lib/constants.ts — add email and social media URLs to BUSINESS 
  constant

## Design Decisions
- **Final CTA on black bg with gold accent border** — stands out 
  as conversion-focused closing
- **Two CTAs side-by-side** — Book (filled) + Call (outline)
- **Small reassurance line** — trust signals repeated one more time
- **Footer is separate component** — renders globally via layout
- **Footer 4-column on desktop, stacks on mobile** — standard pattern
- **Social icons present with placeholder URLs** — swap real URLs 
  into constants.ts when profiles go live (no component changes)
- **Privacy/Terms as stub pages** — same "Coming Soon" pattern 
  as service stubs for consistency
- **Phone number repeated in footer** — serves scroll-to-bottom users
- **Copyright auto-updates year** — no manual maintenance

## Legal Disclaimer
Privacy Policy and Terms of Service pages are STUBS ONLY. They 
contain placeholder "Coming Soon" content. Real legal content 
must be generated via Termly.io, Iubenda, or an attorney BEFORE 
the site is actively marketed or receives paid traffic. This is 
a compliance and liability requirement, not a nice-to-have.

## Final CTA Section Structure
```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│             ─── READY WHEN YOU ARE                       │
│                                                          │
│      Let's Get Your Home or Business Running Right       │
│                                                          │
│      Licensed. Local. Background-checked.                │
│      Book online or call — we answer day or night.       │
│                                                          │
│      [Book Service  →]      [📞 (504) 648-6777]          │
│                                                          │
│      ✓ 24/7 Emergency  ✓ Fixed-Rate  ✓ Same-Day         │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

## Footer Structure (4-column on desktop)
```
┌────────────────────────────────────────────────────────────┐
│ COL 1              COL 2          COL 3         COL 4       │
│                                                              │
│ [KAM Logo]         SERVICES       COMPANY       CONTACT     │
│                                                              │
│ KAM Mechanical     Coil Clean     About         (504) 648…  │
│ LLC                AC Replace     Projects      info@...    │
│                    Emergency      Contact       NOLA metro  │
│                    Commercial                               │
│ Serving NOLA &     Boilers        Service Area  24/7 avail  │
│ surrounding        Mech Rooms                               │
│ parishes                                                     │
│                                                              │
│ [FB] [GL]                                                    │
│                                                              │
├────────────────────────────────────────────────────────────┤
│ © 2026 KAM Mechanical LLC   Privacy Policy  |  Terms       │
└────────────────────────────────────────────────────────────┘
```

## Typography
- CTA eyebrow: text-xs uppercase tracking-widest, gold
- CTA headline: text-3xl md:text-4xl lg:text-5xl, bold white, max-w-3xl
- CTA subhead: text-base md:text-lg, text-neutral-300
- Reassurance bullets: text-sm, text-neutral-400
- Footer column header: text-xs uppercase tracking-widest, gold
- Footer link: text-sm text-neutral-400 hover:text-white
- Footer brand text: text-sm text-neutral-300
- Copyright: text-xs text-neutral-500

## Mobile Responsive
- Final CTA section: CTAs stack vertically on mobile
- Footer: 4 columns → 2 columns on tablet → 1 column stacked on mobile
- Bottom bar (copyright + legal links) stacks on mobile

## Testing Checklist
- [x] Plan file created
- [x] FinalCTASection renders on homepage (immediately after `ServiceAreaSection`, before Guarantee/FAQ blocks)
- [x] Footer appears on homepage
- [x] Footer appears on /services/coil-cleaning
- [x] Footer appears on /services/ac-replacement (stub)
- [x] Footer appears on /privacy
- [x] Footer appears on /terms
- [x] All footer links route correctly
- [x] Phone number in footer is click-to-call
- [x] Email in footer opens mail client
- [x] Social icons present (placeholder URLs)
- [x] Copyright year is current (2026)
- [x] /privacy shows "Coming Soon" stub
- [x] /terms shows "Coming Soon" stub
- [x] Mobile: Final CTA buttons stack vertically (`flex-col sm:flex-row`)
- [x] Mobile: Footer columns stack (`grid-cols-1 md:grid-cols-2 lg:grid-cols-4`)
- [x] npm run build — passes; 15 static routes prerender (includes `/privacy`, `/terms`, 6 service slugs, etc.)
- [x] No console errors (verified via production build; dev console not re-run here)

## Git Commit Messages (Suggested)
docs: add final CTA + footer implementation plan
feat(footer): global footer + final CTA + legal stubs

## Status Log
- April 19, 2026: Plan created, implementation started
- April 19, 2026: Implementation complete — global `Footer` in `app/layout.tsx`, `FinalCTASection` on homepage, `/privacy` + `/terms` stubs, `BUSINESS` + `footer-data` wired; removed duplicate `@/components/landing/footer` from page-level layouts to avoid double footers
