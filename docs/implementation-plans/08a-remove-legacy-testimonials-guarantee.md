# Implementation Plan 08a: Remove Legacy Testimonials + Guarantee Sections

**Status:** Complete  
**Date Started:** April 19, 2026  
**Date Completed:** April 19, 2026  
**Previous:** 08-final-cta-and-footer.md

## Problem
Two legacy sections from the original v0 template remain on the 
homepage and need to be removed:

1. "Trusted by Industry Leaders" / "Client Success Stories" — 
   contains fabricated testimonials (Michael Chen/DataCore, 
   Sarah & James Whitmore, Metro Hospital System). These are 
   AI-generated v0 filler, not real customers. Violates FTC 
   guidelines (16 CFR Part 255) on endorsements.

2. "KAM Performance Guarantee" — contains unverified/unrealistic 
   claims (EST. 2009, 2-Year Workmanship Warranty, On-Time 
   Commissioning guarantee, 100% Code Compliance). None of these 
   are confirmed real KAM commitments.

## Rationale
The current homepage already has a strong credibility stack:
- Trust Bar (licensed/insured, 24/7, fixed pricing, local)
- Real reviews in Social Proof section (David Briggs, Mike 
  Garibaldi, Kevin Davis)
- Service Area section (specific parishes + van photo)
- Before/After transformations (proof of work)

The fake testimonials and inflated guarantees dilute rather than 
strengthen this credibility. Homeowners and commercial clients 
making HVAC decisions need clarity and proof, not padding. 
Short + real + powerful > long + fabricated.

## Objective
Remove both sections entirely from the homepage render order. 
Preserve the component files themselves (don't delete) in case 
they're referenced elsewhere — just stop rendering them.

## Files to Locate
Search the codebase for these strings to find the components:

For testimonials section:
- "Trusted by Industry Leaders"
- "Client Success Stories"
- "Michael Chen"
- "DataCore Technologies"
- "Metro Hospital System"

For guarantee section:
- "KAM Performance Guarantee"
- "100% Code Compliance"
- "2-Year Workmanship Warranty"
- "On-Time Commissioning"

Component files likely live at one of:
- /components/landing/testimonials.tsx (or similar)
- /components/landing/guarantee.tsx (or similar)
- /components/home/Testimonials.tsx
- /components/home/Guarantee.tsx

## Files to Modify
- /app/page.tsx — remove imports and JSX renders for both sections

## Files NOT to Modify
- Do NOT delete the component files themselves
- Do NOT modify any other homepage sections
- Do NOT touch Hero, TrustBar, ServicesSection, BeforeAfterSection, 
  SocialProofSection, ServiceAreaSection, FinalCTASection, or Footer

## Final Homepage Flow (After Removal)
1. Hero
2. TrustBar
3. ServicesSection
4. BeforeAfterSection
5. SocialProofSection
6. ServiceAreaSection
7. FinalCTASection
(Footer from layout.tsx globally)

## Testing Checklist
- [x] "Trusted by Industry Leaders" section no longer renders
- [x] "Client Success Stories" text not visible anywhere
- [x] "KAM Performance Guarantee" section no longer renders
- [x] Fabricated testimonials (Michael Chen, Sarah & James, 
      Metro Hospital) completely gone
- [x] "EST. 2009," "2-Year Warranty," "On-Time Commissioning" 
      text gone
- [x] Homepage flows cleanly: Services → Before/After → Social 
      Proof → Service Area → Final CTA → Footer
- [x] No broken imports or console errors
- [x] npm run build passes
- [ ] Vercel preview deploys clean

## Legal Note
This removal eliminates FTC exposure from fabricated endorsements 
(16 CFR Part 255) and reduces breach-of-contract risk from 
unrealistic warranty/guarantee claims that may not be honored.

## Git Commit Message
refactor(homepage): remove legacy fake testimonials and guarantee sections

## Status Log
- April 19, 2026: Plan created, removal in progress
- April 19, 2026: Removed `GuaranteeSection` and landing `SocialProof` from `app/page.tsx`; legacy component files retained; `npm run build` passed
