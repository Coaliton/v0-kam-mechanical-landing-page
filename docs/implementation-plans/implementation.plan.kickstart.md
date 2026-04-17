# KAM Mechanical Construction LLC - Implementation Plan Kickstart

## Project Overview

**Client:** KAM Mechanical Construction LLC  
**Project Type:** Full-Service Industrial & Residential Landing Page  
**Aesthetic:** Luxury-Industrial Dark Mode  
**Framework:** Next.js 16 with App Router  

---

## Design Token Document

### Color Palette (5 Colors Maximum)

| Token Name | Hex Value | Usage |
|------------|-----------|-------|
| **Pitch Black** | `#0A0A0A` | Primary background, body |
| **Deep Charcoal** | `#1A1A1A` | Cards, sections, elevated surfaces |
| **Metallic Gold** | `#D4AF37` | Primary CTA, accents, icons, highlights |
| **Warm White** | `#F5F5F0` | Primary text, headings |
| **Steel Gray** | `#6B7280` | Muted text, secondary content |

### Typography System

| Element | Font Family | Weight | Size | Line Height |
|---------|-------------|--------|------|-------------|
| **H1 - Hero** | Montserrat | 700 | 48-64px | 1.1 |
| **H2 - Section** | Montserrat | 600 | 36-42px | 1.2 |
| **H3 - Card Title** | Montserrat | 600 | 24px | 1.3 |
| **Body** | Inter | 400 | 16px | 1.6 |
| **Small/Caption** | Inter | 400 | 14px | 1.5 |
| **Button** | Montserrat | 600 | 14-16px | 1 |

### Spacing Scale

```
4px  - xs (micro spacing)
8px  - sm (tight spacing)
16px - md (default)
24px - lg (comfortable)
32px - xl (section padding)
48px - 2xl (major sections)
64px - 3xl (hero spacing)
96px - 4xl (section gaps)
```

### Border Radius

```
4px  - sm (inputs, small elements)
8px  - md (cards, buttons)
12px - lg (large cards)
9999px - full (pill buttons)
```

### Shadow System

```
shadow-card: 0 4px 6px -1px rgba(0, 0, 0, 0.3)
shadow-elevated: 0 10px 15px -3px rgba(0, 0, 0, 0.4)
shadow-gold: 0 0 20px rgba(212, 175, 55, 0.2)
```

### Animation & Transitions

```
transition-base: 150ms ease-out
transition-smooth: 300ms ease-in-out
hover-lift: translateY(-4px)
hover-scale: scale(1.02)
```

---

## Component Architecture

### File Structure

```
/app
  /layout.tsx          # Root layout with fonts
  /page.tsx            # Landing page entry
  /globals.css         # Design tokens & base styles

/components
  /landing
    /header.tsx        # Sticky navigation
    /hero-section.tsx  # Bifurcated hero
    /stats-strip.tsx   # Trust metrics bar
    /feature-grid.tsx  # Service cards (6 cards)
    /guarantee.tsx     # Certificate-style section
    /social-proof.tsx  # Testimonials grid
    /faq-section.tsx   # Two-column accordion
    /footer.tsx        # Hybrid footer
  /ui
    /cta-button.tsx    # Gold CTA with lift effect
    /stat-card.tsx     # Individual stat display
    /feature-card.tsx  # Service card component
    /trust-widget.tsx  # Google rating badge
```

---

## CTA Placement Strategy (Minimum 3 CTAs)

### Primary CTAs (High Visibility)

1. **Sticky Nav CTA** - "Request a Bid" (Gold Pill Button)
   - Location: Top-right of navigation
   - Always visible on scroll
   - High contrast gold on charcoal

2. **Hero Split CTAs** (x2)
   - Left: "Commercial Solutions" - Gold outline button
   - Right: "Residential Services" - Gold solid button
   - Large, prominent placement below hero headlines

3. **Emergency Support Bar** - "24/7 Emergency Support: (555) 123-4567"
   - Location: Top of footer
   - Full-width gold background
   - Phone number as clickable link

### Secondary CTAs

4. **Feature Card CTAs** - "Learn More" on each service card
5. **Guarantee CTA** - "Get Your Free Estimate" centered
6. **Newsletter CTA** - "Subscribe" gold button in footer

---

## Section-by-Section Implementation

### 1. Navigation & Header

**Structure:**
- Fixed/sticky positioning
- Logo (left) | Nav Links (center) | CTA Button (right)
- Backdrop blur on scroll
- Mobile hamburger menu

**Nav Items:**
- Services (dropdown potential)
- Projects
- Safety
- FAQ

**Interactions:**
- Hover: Text color transition to gold
- Active: Gold underline
- CTA: Lift effect + gold glow on hover

---

### 2. Hero Section (Bifurcated)

**Layout:** 50/50 split screen (stacks on mobile)

**Left Panel - Commercial:**
- Background: Dark industrial imagery (gradient overlay)
- H1: "Engineering the Backbone of Infrastructure."
- Subtext: Brief value proposition
- CTA: "Commercial Solutions" (outline gold)

**Right Panel - Residential:**
- Background: Premium modern home imagery
- H1: "Elevating Home Comfort."
- Subtext: Brief value proposition  
- CTA: "Residential Services" (solid gold)

---

### 3. Trust & Stats Strip

**Layout:** Horizontal bar, 4 columns (responsive grid)

**Stats:**
1. Clock Icon | "15+ Years Experience"
2. Building Icon | "500+ Projects Completed"
3. Shield Icon | "100% Safety Record"
4. Award Icon | "Licensed & Insured"

**Styling:**
- Deep charcoal background
- Gold icons (Lucide React)
- White text
- Subtle gold border top/bottom

---

### 4. Feature Grid (6 Cards)

**Layout:** 3-column grid (2 on tablet, 1 on mobile)

**Commercial Cards:**
1. Industrial Piping Systems
2. BIM Modeling & Coordination
3. Commercial HVAC Systems

**Residential Cards:**
1. AC Replacement & Installation
2. Home Repiping Services
3. Maintenance Plans

**Card Structure:**
- Icon (gold)
- Title (white)
- 3 bullet features
- Price: "Starting at $X,XXX" (gold)
- Badge: "Fixed Price Guarantee" (residential only)
- Hover: Lift + gold border glow

---

### 5. KAM Performance Guarantee

**Design:** Certificate-style full-width section

**Elements:**
- Gold double border frame
- Centered content
- Large seal/badge icon
- H2: "The KAM Performance Guarantee"
- Three pillars:
  1. "100% Code Compliance"
  2. "2-Year Workmanship Warranty"
  3. "On-Time Commissioning"
- CTA: "Get Your Free Estimate"

---

### 6. Social Proof Grid

**Layout:** 3-column testimonial grid

**Column 1 - Video Testimonial:**
- Video placeholder with play button
- "Project Overview" transcript text
- Client name in serif font

**Column 2 - Text Review:**
- 5 gold stars
- Quote text
- Client name & company

**Column 3 - Case Study:**
- Large metric: "30% Energy ROI"
- Brief description
- "Read Case Study" link

**Floating Widget:**
- Google "G" icon
- "5.0 Star Rating"
- Position: Bottom-right corner

---

### 7. FAQ Section (AEO Optimized)

**Layout:** Two-column accordion

**Left Column - Commercial:**
- What are typical project timelines?
- What safety certifications do you hold?
- Do you offer off-hours scheduling?

**Right Column - Residential:**
- Are there any hidden fees?
- Are technicians background checked?
- What warranties do you offer?

**Schema Markup:** FAQ structured data for SEO

---

### 8. Hybrid Footer

**Top Bar:** Full-width gold emergency CTA
- "24/7 Emergency Support: (555) 123-4567"

**Main Grid (4 Columns):**
1. Logo + Mission Statement
2. Residential Quick Links
3. Commercial Quick Links
4. Contact Info + Map Placeholder + License #

**Bottom Bar:**
- Newsletter signup (email + gold button)
- Privacy Policy | Terms | Copyright

---

## Responsive Breakpoints

```
Mobile: < 640px (single column, stacked)
Tablet: 640px - 1024px (2 columns)
Desktop: > 1024px (full layout)
Large: > 1280px (max-width container)
```

---

## Technical Requirements Checklist

- [x] Lucide React icons throughout
- [x] All buttons with lift hover effect (translateY -4px)
- [x] 100% responsive mobile-first design
- [x] Semantic HTML (header, main, section, article, footer)
- [x] SEO/AEO optimization with proper heading hierarchy
- [x] Minimum 3 prominent CTAs
- [x] Design tokens in globals.css
- [x] Inter + Montserrat font pairing
- [x] Dark mode by default

---

## Implementation Phases

### Phase 1: Foundation (Current)
- [x] Create implementation plan document
- [ ] Setup design tokens in globals.css
- [ ] Configure fonts in layout.tsx
- [ ] Create base component files

### Phase 2: Core Sections
- [ ] Build Header component with sticky nav
- [ ] Build Hero section with split layout
- [ ] Build Stats Strip component

### Phase 3: Features & Trust
- [ ] Build Feature Grid with 6 cards
- [ ] Build Guarantee certificate section
- [ ] Create reusable CTA button component

### Phase 4: Social Proof
- [ ] Build Testimonial grid
- [ ] Create Trust Widget (Google rating)
- [ ] Build FAQ accordion section

### Phase 5: Footer & Polish
- [ ] Build Hybrid Footer
- [ ] Add hover animations
- [ ] Mobile responsive testing
- [ ] Final accessibility audit

---

## Success Metrics

- Page load time < 3s
- Lighthouse Performance > 90
- Mobile usability score: 100%
- CTA visibility: Above fold + throughout page
- Accessibility: WCAG 2.1 AA compliant

---

*Document Version: 1.0*  
*Last Updated: Implementation Kickstart*
