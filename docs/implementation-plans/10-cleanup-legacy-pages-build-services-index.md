# Implementation Plan 10: Cleanup Legacy V0 Content + Build Real Services Page

**Status:** Complete  
**Date Started:** April 21, 2026  
**Date Completed:** April 21, 2026  
**Previous:** 09-contact-page-smart-routing.md

## Critical Problem Being Solved
Three legacy pages from the original v0 template remain live 
on the public site with fabricated content that poses legal 
and reputational risk:

### 1. /services page
Contains services KAM does NOT offer:
- BIM Modeling & Coordination ($8,500) — engineering firm service
- Process Heating & Cooling ($35,000) — industrial process work
- Industrial Piping Systems — specialty discipline
- Mechanical Equipment Installation — generic filler
Contains fake "Starting at $X,000" pricing for services that 
don't match KAM's real bid-based model. Contains unverified 
"15 years of expertise" claim.

### 2. /projects page
Contains fabricated case studies with:
- Fake Texas locations (Austin, Dallas, Houston, San Antonio, 
  Frisco, Arlington, Irving, Plano — KAM is New Orleans-based)
- Fake project dollar amounts ($2.4M, $1.2M, $890K, $185K, etc.)
- Fake "500+ Projects Completed" stat
- Fake "LEED Gold certification" claims
- Fake project details (hospital HVAC, data center cooling, 
  luxury home, food processing plant, BIM coordination)
- Services KAM doesn't offer (Industrial Piping, BIM, Plumbing)

Fabricated project case studies create FTC exposure (16 CFR 255) 
and potential fraud liability if anyone verifies claimed work.

### 3. /about page
Not yet audited in detail but confirmed by owner to contain v0 
default template content.

## Objective
1. Kill all fabricated content on /projects and /about by 
   replacing both with Coming Soon stubs (same pattern as 
   existing /privacy and /terms stubs).
2. Build a real, clean /services index page using KAM's actual 
   6 services, matching the design language of the existing 
   homepage services section.
3. Ensure the "Services" nav link routes to the new /services 
   page cleanly.

## What We're NOT Doing Today
- Not building real /projects page (requires real project content 
  user doesn't have ready yet)
- Not building real /about page (requires structured owner input 
  on company history, background, philosophy — planned for next 
  session)
- Not adding Services dropdown to nav (next session)
- Not adding Call Now button to nav (next session)
- Not modifying homepage, contact page, coil cleaning detail page, 
  or any other existing pages

## Files to Create
- /app/projects/page.tsx (REPLACE if exists)
- /app/about/page.tsx (REPLACE if exists)
- /app/services/page.tsx (REPLACE existing v0 services page)
- /components/services/ServicesIndexHero.tsx
- /components/services/DivisionSection.tsx

## Files to Modify
- None expected. Services, services data, and homepage components 
  already exist. We're consuming /lib/services.ts and 
  /lib/service-content.ts data that's already defined.

## KAM's Real Services (what the new /services page will display)

### Residential Division
1. Coil Cleaning & Tune-Up (status: live, $250 confirmed)
2. AC Replacement & Installation (status: coming-soon stub)
3. 24/7 Emergency Repair (status: coming-soon stub)

### Commercial Division
4. Commercial HVAC Systems (status: coming-soon stub)
5. Boilers & Chillers (status: coming-soon stub)
6. Mechanical Room Buildouts (status: coming-soon stub)

All 6 already exist in /lib/service-content.ts with proper 
metadata, images, and coming-soon status. We're just displaying 
them on a new index page.

## Design Approach for /services Page
Match existing homepage design language exactly:
- Same ServiceCard design used on homepage
- Same color palette (black + yellow-500 gold + neutrals)
- Same typography hierarchy
- Same rounded corners, hover effects, gold accents
- Same use of lucide-react icons
- Split into TWO clearly labeled division sections 
  (Residential + Commercial) — homepage mixes them in one grid, 
  but this index page separates them for audience clarity
- Page hero at top
- Edge-case CTA at bottom ("Not sure which service? Call us.")
- Global Header + Footer inherit automatically from layout

## Page Structure for /services
```
[Global Header — from layout]
[Breadcrumbs: Home / Services]

── PAGE HERO ─────────────────────────────────────
─── OUR SERVICES
Mechanical Work, Done Right.
Two divisions. One standard of quality — whether 
you're a homeowner needing comfort or a facility 
manager needing uptime.
[View Residential Services ↓] [View Commercial Work ↓]
(anchor links that smooth-scroll to respective sections)

── RESIDENTIAL DIVISION ──────────────────────────
🏠 RESIDENTIAL DIVISION
For Homes Across the New Orleans Metro

[Service Cards — 3-column grid on desktop, stack on mobile]
- Coil Cleaning & Tune-Up
- AC Replacement & Installation  
- 24/7 Emergency Repair

── COMMERCIAL DIVISION ───────────────────────────
🏢 COMMERCIAL DIVISION
Statewide Louisiana Project Work

[Service Cards — 3-column grid on desktop, stack on mobile]
- Commercial HVAC Systems
- Boilers & Chillers
- Mechanical Room Buildouts

── EDGE CASE CTA ─────────────────────────────────
Not Sure Which Service You Need?
Every job starts with a conversation. Tell us what's 
going on — we'll point you in the right direction.
[Call (504) 648-6777] [Contact Us]

[Global Footer — from layout]
```

## Stub Pages for /projects and /about

Both use the same "Coming Soon" pattern already established 
for /privacy, /terms, and the 5 coming-soon service detail pages:
- Gold pill badge: "COMING SOON"
- Page title (Projects / About KAM Mechanical)
- Short description explaining real content is coming
- "Back to Home" link
- Metadata for SEO

## Typography
- Page H1: text-4xl md:text-5xl lg:text-6xl, bold white
- Division H2: text-3xl md:text-4xl, bold white
- Section eyebrow: text-xs uppercase tracking-widest gold
- Body: text-base md:text-lg text-neutral-300
- Card typography: match existing homepage service cards

## Mobile Responsive
- Hero: single column, CTAs stack
- Services grids: 1-col mobile, 2-col tablet, 3-col desktop
- Edge case CTA: buttons stack on mobile

## SEO
- /services metaTitle: "Our Services | KAM Mechanical | New Orleans HVAC"
- /services metaDescription: "Residential and commercial HVAC services across the New Orleans metro and Louisiana. Coil cleaning, AC replacement, emergency repair, commercial systems, boilers, and mechanical room buildouts."
- /projects and /about get basic metadata but indicate Coming Soon

## Legal Note
This cleanup eliminates:
- FTC exposure from fabricated case studies (16 CFR 255)
- False advertising risk from services KAM doesn't offer
- Material misrepresentation from fake project dollar values
- Fake experience claims ("15 years," "500+ Projects Completed")
- Fraud risk from claimed work in Texas locations where KAM 
  doesn't operate

## Testing Checklist
- [x] Plan file created
- [x] /services no longer shows BIM, Process Heating, Industrial Piping
- [x] /services shows KAM's real 6 services grouped by division
- [x] /services service cards link correctly to /services/[slug]
- [x] /services has working "call" and "contact" CTAs at bottom
- [x] /projects shows Coming Soon stub (no fake case studies)
- [x] /about shows Coming Soon stub (no v0 default content)
- [x] Global header visible on all three pages
- [x] Global footer visible on all three pages
- [x] Breadcrumbs visible on /services
- [x] No Texas city names, no fake dollar amounts, no fake stats 
      anywhere on the three pages
- [x] npm run build passes
- [x] All routes prerender cleanly on Vercel
- [x] Mobile layout works across all three pages

## Git Commit Messages
docs: add cleanup + real services page plan
refactor(pages): remove legacy v0 projects/about, build real services index

## Status Log
- April 21, 2026: Plan created, cleanup in progress
- April 21, 2026: Implemented `/projects` and `/about` Coming Soon stubs, new `/services` index with `ServicesIndexHero` and `DivisionSection`; `npm run build` passed; all listed routes static prerender
