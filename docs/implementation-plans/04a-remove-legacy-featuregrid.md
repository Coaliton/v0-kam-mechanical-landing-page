# Implementation Plan 04a: Remove Legacy FeatureGrid Section

**Status:** Complete  
**Date Started:** 2026-04-17  
**Related Prompt:** Prompt 4a — Legacy Cleanup  
**Previous:** 04-services-section.md

---

## Problem
After building the new ServicesSection component in Prompt 04, 
the legacy FeatureGrid component (from the original v0 template) 
is still rendering on the homepage. This causes:

1. Duplicate services presentation — users see both the new image 
   cards AND the old pricing cards
2. Conflicting pricing display — we intentionally removed pricing 
   from the new cards, but FeatureGrid still shows ranges like 
   "$4,500 - $12,000" and "Starting at $25,000"
3. Visual redundancy — "Our Services" / "Full-Service Mechanical 
   Solutions" section appears after the new ServicesSection
4. Inconsistent design — old cards use different styling (bordered 
   rectangles with gold pill badges) vs new cards (image-forward)

## Objective
Remove the FeatureGrid rendering from the homepage while leaving 
the component file intact (it may be used elsewhere; safer to 
leave the file, just stop rendering it on /).

## Files to Modify
- /app/page.tsx — remove FeatureGrid import and render
- Any other related section wrappers that introduce old "Our 
  Services" header (check for components like Services.tsx, 
  ServicesOverview.tsx, or similar)

## Files NOT to Modify
- Do NOT delete the FeatureGrid.tsx component file itself
- Do NOT modify the new ServicesSection, DivisionRow, or 
  ServiceCard components
- Do NOT modify any other homepage components (hero, trust bar, 
  etc.)

## Design Decision
We could delete FeatureGrid.tsx entirely, but leaving it means:
- No risk of breaking other pages that might still import it
- Easy to restore if we change our minds
- Cleanup of unused components can happen in a final pass when 
  the site is fully built

## Testing Checklist
- [x] /app/page.tsx no longer imports FeatureGrid
- [x] /app/page.tsx no longer renders <FeatureGrid />
- [x] Old "Our Services" / "Full-Service Mechanical Solutions" 
      section no longer appears on homepage
- [x] New ServicesSection with image cards still renders correctly
- [x] No broken imports or missing components
- [x] No duplicate service listings on the page
- [x] npm run dev — homepage shows clean section order: Hero → 
      Trust Bar → Services → (whatever comes next)
- [x] npm run build — passes clean

## Git Commit Message
refactor(homepage): remove legacy FeatureGrid pricing section

## Status Log
- [2026-04-17]: Plan created, cleanup in progress
- [2026-04-17]: Legacy FeatureGrid removed from homepage, verification complete
