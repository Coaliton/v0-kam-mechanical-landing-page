# Implementation Plan 02a: Top Navigation Structure Fix

**Status:** Complete  
**Date Started:** 2026-04-16  
**Related Prompt:** Fix after Prompt 2  
**Previous:** 02-hero-section.md

---

## Problem
After Prompt 2 execution, the TopUtilityBar and Header are
rendering as a single cluttered row. Logo, nav items, utility
bar content (service area, emergency banner, phone number),
and CTA buttons are all colliding horizontally.

## Root Cause
TopUtilityBar and Header are not structured as separate stacked
sibling elements. They need to be two distinct rows with different
backgrounds, heights, and content.

## Objective
Separate the top of the page into two distinct horizontal bars:
1. Utility Bar (thin, subtle, secondary info)
2. Main Header (taller, logo + nav + CTA)

## Visual Structure Target
```
┌────────────────────────────────────────────────┐
│ [Utility Bar — thin, darker bg]                │
│ Left: Service area | Center: Emergency         │
│ Right: Phone number                            │
├────────────────────────────────────────────────┤
│ [Main Header — taller, primary bg]             │
│ Left: Logo | Center: Nav | Right: CTAs         │
└────────────────────────────────────────────────┘
│ [Hero starts below]                            │
```

## Files to Modify
- `/app/layout.tsx` OR `/app/page.tsx` (wherever TopUtilityBar +
  Header are rendered) — ensure they render as stacked siblings
- `/components/home/TopUtilityBar.tsx` — enforce standalone
  full-width bar styling
- Header component — ensure it renders as separate sibling below
  utility bar

## Design Specs

### Utility Bar
- Full width
- Height: ~36-40px
- Background: COLORS.backgroundAlt (slightly darker than hero)
- Border-bottom: 1px solid border color (subtle separator)
- Padding: py-2 px-6
- Text size: text-xs
- Flex layout: justify-between, items-center
- Hide service area text below md breakpoint
- Stays above header, NOT inside it

### Main Header
- Full width
- Height: ~72-80px
- Background: COLORS.background (matches hero)
- Padding: py-4 px-6
- Flex layout: justify-between, items-center
- Logo: left-aligned, max-height 48px
- Nav: center (desktop), hamburger (mobile)
- CTAs: right side

### Separation Rules
- Utility bar and header MUST be distinct siblings in the DOM
- No shared container styling that makes them look like one bar
- Visual separator between them (border-bottom on utility bar)

## Testing Checklist
- [x] Utility bar renders as its own thin row at very top
- [x] Header renders as separate row beneath it
- [x] Logo is left-aligned in header, proper size
- [x] Nav items are centered or right-aligned in header
- [x] "Call Now" and "Get a Quote" are in header, NOT utility bar
- [x] Service area, emergency banner, phone are in utility bar,
      NOT header
- [x] Mobile: utility bar collapses appropriately, header shows
      hamburger
- [x] npm run build passes
- [ ] Visual comparison matches target structure above

## Git Commit Message
fix(nav): separate utility bar and header into stacked rows

## Status Log
- [2026-04-16]: Plan created, fix in progress
- [2026-04-16]: Utility bar/header separation completed and build verified
