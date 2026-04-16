# Implementation Plan 01: Project Foundation Setup

**Status:** Complete  
**Date Completed:** April 16, 2026  
**Related Prompt:** Prompt 1 — Foundation Setup

---

## Objective
Set up a clean, deployment-safe foundation for the KAM Mechanical 
Next.js site. Establishes image directory conventions, shared 
business constants, reusable components, and asset-path rules 
to prevent deployment issues on Vercel.

## Files Created
- `/public/images/hero/.gitkeep`
- `/public/images/services/.gitkeep`
- `/public/images/coil-cleaning/.gitkeep`
- `/public/images/commercial/.gitkeep`
- `/public/images/residential/.gitkeep`
- `/public/images/team/.gitkeep`
- `/public/images/logo/.gitkeep`
- `/lib/constants.ts`
- `/components/ui/PhoneCTA.tsx`
- `/components/ui/EmergencyBanner.tsx`
- `/ASSETS.md`

## Files Modified
- `/next.config.js` — added image format optimization (AVIF, WebP)

## Design Decisions
- **Absolute image paths** (`/images/folder/file.ext`) — prevents 
  relative-path breakage on deployment
- **Lowercase + hyphens only** — prevents case-sensitivity issues 
  on Linux-based production servers (this killed the previous site)
- **Constants file centralization** — phone number, colors, and 
  routes defined once, imported everywhere; no hard-coded values
- **.gitkeep files** — ensures empty folders are tracked in Git

## Business Constants Defined
- Phone: 504-648-6777
- Emergency availability: 24/7
- Service area: New Orleans metro + Louisiana commercial
- Brand colors: Black/gold palette

## Image Path Convention
- Location: `/public/images/[category]/[filename].[ext]`
- Format: Lowercase, hyphens only, descriptive names
- Photos: `.jpg` | Logos: `.png` | Icons: `.svg`
- Reference: Always absolute from `/public`
- Component: Always `next/image`, never `<img>`

## Testing Verified
- [x] All 7 image folders exist
- [x] /lib/constants.ts exports BUSINESS, COLORS, ROUTES
- [x] PhoneCTA component renders
- [x] EmergencyBanner component renders
- [x] `npm run build` succeeds (all 6 routes static)
- [x] Vercel deployment succeeded
- [x] Git authentication configured correctly

## Git Commit Message (Used)
feat: foundation setup - image dirs, constants, phone/emergency 
components

## Status Log
- April 16, 2026: Foundation complete, verified with successful 
  Vercel deployment
