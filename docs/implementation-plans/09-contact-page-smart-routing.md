# Implementation Plan 09: Smart Dual-Path Contact System

**Status:** Complete  
**Date Started:** April 19, 2026  
**Date Completed:** April 19, 2026  
**Previous:** 08a-remove-legacy-testimonials-guarantee.md

## Problem
Current /app/contact/page.tsx is filled with legacy v0 Houston 
template data:
- Fake phone "(555) 123-4567"
- Fake address "1234 Industrial Blvd, Suite 100, Houston, TX 77001"
- Texas service areas (Katy, Sugar Land, The Woodlands, etc.)
- Fake "TX License #12345"
- Fake "BBB Accredited A+ Rating"
- Generic "Request a Free Estimate" framing
- Single form treats residential + commercial the same

This data is live on the public site and actively destroys trust 
for anyone who visits it. Must be replaced entirely.

Additionally: no context preservation between service selection 
and contact form. User who clicks "Coil Cleaning" on homepage 
has to re-select "coil cleaning" on contact page. Lost opportunity 
for conversion optimization.

## Objective
Build a conversion-optimized /contact page with:
1. Smart URL parameter routing (auto-routes to residential or 
   commercial path based on where user came from)
2. Pre-filled service selection (user never re-declares intent)
3. Separate residential and commercial form experiences
4. Real contact info — no Houston/Texas placeholder data
5. Emergency call-out at top of both forms
6. Form submission as stub for v1 — Formspree integration in 
   final phase

## Architecture

### URL Parameter Convention
- `/contact` — no params, shows dual-path selector
- `/contact?type=residential` — auto-loads residential form
- `/contact?type=commercial` — auto-loads commercial form
- `/contact?type=residential&service=coil-cleaning` — residential 
  form with coil cleaning pre-selected
- `/contact?type=commercial&service=boilers-chillers` — commercial 
  form with boiler/chiller context

### Service → Path Mapping
Used by service cards and detail pages to construct correct URLs:

| Service slug | Default type param |
|--------------|-------------------|
| coil-cleaning | residential |
| ac-replacement | residential |
| emergency-repair | residential |
| commercial-hvac | commercial |
| boilers-chillers | commercial |
| mechanical-rooms | commercial |

### Path Selector (fallback UI)
When user lands on /contact with no parameters, show two cards:
- Left: "Residential Service" → sets type=residential
- Right: "Commercial Project" → sets type=commercial

Once user picks, form renders inline. Selector stays visible but 
collapsed so user can switch if they clicked wrong.

## Files to Create
- /app/contact/page.tsx (REPLACE existing — no preservation)
- /components/contact/PathSelector.tsx
- /components/contact/ResidentialForm.tsx
- /components/contact/CommercialForm.tsx
- /components/contact/ContactSidebar.tsx (phone, email, hours, area)
- /components/contact/EmergencyCallout.tsx
- /lib/contact-config.ts (service mappings, form field options)

## Files to Modify
- /components/home/ServicesSection.tsx (update service card hrefs 
  to include type param)
- /app/services/[slug]/page.tsx (update "Book This Service" CTAs 
  to include type + service params)
- /components/services/ServiceHero.tsx (update Book CTA with params)
- /components/services/ServiceCTA.tsx (update Book CTA with params)

## Contact Info — Real Data Only
- Phone: (504) 648-6777
- Email: info@kammechanicalllc.com
- Address: Service-based business — we come to you
- Service area: Orleans, Jefferson, St. Bernard, St. Tammany 
  parishes (residential) + statewide Louisiana (commercial)
- Hours: See business_hours in contact-config.ts (TO BE CONFIRMED 
  BY USER — using placeholder until confirmed)

## Business Hours (PLACEHOLDER — user must confirm)
- Monday - Friday: 7:00 AM - 6:00 PM
- Saturday: 8:00 AM - 2:00 PM  
- Sunday: Emergency Service Only
- 24/7 Emergency Available All Days

## Residential Form Fields
1. Full Name * (required)
2. Phone Number * (required)
3. Email * (required)
4. Property Address or Neighborhood * (required)
5. What's going on? * (radio, required)
   - AC not cooling
   - No heat / furnace issue
   - Need coil cleaning
   - Want an AC replacement quote
   - Other
6. When do you need help? * (radio, required)
   - Emergency — today
   - This week
   - Scheduling ahead
7. Additional details (textarea, optional)

## Commercial Form Fields
### Section 1: Who You Are
1. Full Name * (required)
2. Company Name * (required)
3. Role / Title (optional)
4. Phone Number * (required)
5. Email * (required)

### Section 2: What You're Working With
6. Property Address * (required)
7. Property Type * (dropdown, required)
   - Office
   - Medical / Healthcare
   - Industrial / Manufacturing
   - Hospitality
   - Educational
   - Retail
   - Other

### Section 3: What You Need (adaptive based on service param)
8. Scope of work * (checkboxes, required, select all that apply)
   - Adaptive options based on service:
     - Default: install, replacement, service contract, emergency, other
     - If service=boilers-chillers: boiler service, chiller 
       service, cooling tower, maintenance contract, emergency
     - If service=mechanical-rooms: new buildout, retrofit, 
       expansion, renovation
     - If service=commercial-hvac: RTU service, VAV work, new 
       install, replacement, controls/BAS

### Section 4: Timeline
9. Project timeline * (radio, required)
   - Immediate / Emergency
   - Within 30 days
   - 1-3 months
   - 3-6 months
   - Planning / Budgeting phase

### Section 5: Details
10. Project details * (textarea, required)
    Placeholder hints at: existing equipment, square footage, 
    specific requirements

### File Upload Note (v1)
No file upload in v1. Submission confirmation includes: "For 
drawings, specs, or photos, email info@kammechanicalllc.com with 
your reference number."

## Form Submission (v1 — Stub Only)
Both forms show a confirmation state on submit:
- "Thanks! Your request has been received."
- "We'll respond within 24 hours."
- "For emergencies, call (504) 648-6777 now."
- Reference number displayed (client-side generated)

No actual backend submission yet. Console.log the form data for 
now. Formspree integration is final step before launch — NOT 
part of this prompt.

## Design Decisions
- **Two-column layout on desktop:** Form (left 2/3) + ContactSidebar 
  (right 1/3) with phone/email/hours/service area
- **Single column on mobile:** Form on top, sidebar below
- **Emergency call-out stripe** across top of form area on both 
  residential and commercial paths (bright accent, phone CTA)
- **Path selector uses same dual-division visual as hero** — 
  commercial left (black/gold), residential right (gold/white)
- **Service pre-fill shown as a confirmation banner** above form 
  when detected: "Booking: [Service Name]. Just need your details 
  below." with option to change
- **Submit button uses contextual language:**
  - Residential: "Request Service"
  - Commercial: "Submit Inquiry"
- **Form state management:** client component (useState for form 
  data + submission state)

## Typography
- Page heading: text-4xl md:text-5xl lg:text-6xl, bold white
- Section labels: text-xs uppercase tracking-widest gold
- Form labels: text-sm font-medium text-neutral-300
- Input text: text-base text-white
- Input placeholder: text-neutral-500
- Helper text: text-xs text-neutral-500

## Accessibility
- All form inputs have associated labels
- Required fields marked with aria-required and visible asterisk
- Error states (future) will use aria-invalid
- Radio groups wrapped in fieldset with legend
- Submit button shows loading/success states
- Focus rings on all inputs (yellow-500)

## Testing Checklist
- [x] Plan file created and marked Complete
- [x] /contact renders dual-path selector when no params
- [x] /contact?type=residential auto-loads residential form
- [x] /contact?type=commercial auto-loads commercial form
- [x] /contact?type=residential&service=coil-cleaning pre-fills
- [x] Service cards on homepage still link to service detail pages (per Part B8)
- [x] "Book This Service" CTAs on detail pages link with params
- [x] Coil cleaning page Book button → 
      /contact?type=residential&service=coil-cleaning
- [x] Commercial service stubs' CTAs → 
      /contact?type=commercial&service=[slug]
- [x] All Houston/Texas/fake data removed from page
- [x] Real phone (504) 648-6777 displayed
- [x] Real email info@kammechanicalllc.com displayed
- [x] Emergency CTA visible at top of both forms
- [x] Submit shows confirmation state (stub, no backend)
- [x] Mobile: form stacks properly, sidebar below
- [x] Desktop: form left, sidebar right
- [x] npm run build passes
- [ ] Vercel deploys (verify on deploy)

## Do NOT Do
- Do NOT wire up actual form submission (Formspree is final phase)
- Do NOT build file upload (v2 feature)
- Do NOT include any "BBB" or "License #" placeholders
- Do NOT show any Texas locations anywhere
- Do NOT include any v0 placeholder data
- Do NOT modify footer, header, or other sections
- Do NOT install new dependencies

## Git Commit Messages
docs: add contact page smart routing plan
feat(contact): smart dual-path contact system with context preservation

## Status Log
- April 19, 2026: Plan created, implementation started
- April 19, 2026: Implementation complete — contact-config, contact components, `/contact` page, service detail `bookHref` wiring; `npm run build` passed
