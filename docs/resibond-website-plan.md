# Resibond Website Plan

## Brand Decision

The website will be branded as Resibond only. Astral can appear only where it is already part of product pack imagery or legal/manufacturer context. Resibond NXT will be treated as a professional product range inside the Resibond brand, not as a separate site identity.

## Core Positioning

Resibond is a world-class sealants brand built for professional performance across residential, commercial, industrial, and specialist applications. The site should feel premium, technical, restrained, and product-led.

Primary message:

> World-class sealants for every critical joint.

Supporting message:

> From bathrooms and doors to glazing, roofing, bonding, and professional site work, Resibond helps users choose the right sealant for the job.

## Audience

- Home users looking for repair and gap-filling products.
- Contractors and professionals working on doors, windows, bathrooms, construction joints, and glazing.
- Industrial, automotive, HVAC, and maintenance users.
- Dealers and trade partners evaluating the full range.

## Content Inputs

The site will use the supplied files as source material:

- `RESIBOND_PRODUCTS.xlsx` for the product range and chemistry mapping.
- `Resibond_Website.pptx` for market, category, packaging, target group, and product context.
- Supplied Resibond logo files for brand identity.
- Supplied product pack PNGs for product cards, product listing, and product detail pages.

## Product Architecture

### Resibond Range

- GP 100
- GP 1010
- Neutral 3010
- Weather 5010
- Doors & Windows
- Bathmate
- Thermoseal
- Zero Nail
- Saves Nail
- Hybrid 2 in 1

### Resibond NXT Range

- Fireshield
- Duct Seal
- Mirror Mount
- Build Glaze
- Bus Seal
- Turf Grass
- Sanitary Super White

### Chemistry Filters

- Acetoxy
- Neutral
- Acrylic
- Hybrid
- SBS

## Site Map

### 1. Homepage

Purpose: introduce Resibond with a premium global-grade positioning, lead with product confidence, and guide users into product discovery without visual clutter.

Sections:

- Header with Resibond logo and simple nav.
- Hero with product imagery, primary claim, and one CTA: `Explore products`.
- Product range overview for Resibond and Resibond NXT.
- Application-led product discovery.
- `100+ shades` highlight for Neutral sealant.
- Curated product showcase with key SKUs.
- Contact/enquiry CTA.

### 2. Products

Purpose: let users browse and compare the range.

Features:

- Product grid using supplied pack images.
- Filters by range, chemistry, and application.
- Compact product cards with chemistry, use case, and CTA.

### 3. Product Detail

Purpose: explain what each SKU is for and help users decide.

Content:

- Large product image.
- Product name, range, chemistry, and short description.
- Best-use applications.
- Key benefits.
- Suitable surfaces.
- Related products.
- Future-ready area for TDS/downloads.

### 4. Sealant Finder

Purpose: make product choice easier for non-expert users.

Questions:

- What are you sealing or bonding?
- Is it indoor or outdoor?
- Does it need to be paintable?
- Does it need water, weather, UV, heat, or flexibility performance?

Output:

- Recommended product.
- Why it fits.
- Link to product details.

### 5. Applications

Purpose: organize product discovery around real tasks.

Application groups:

- Bathrooms and sanitary areas
- Doors and windows
- Weatherproofing and exterior joints
- Glazing and glass
- General purpose sealing
- Construction cracks and gaps
- Bonding and mounting
- Industrial and automotive

### 6. About

Purpose: communicate brand credibility without overclaiming.

Content:

- Resibond range story.
- Current range plus NXT professional range.
- Built for professional applications and demanding site conditions.
- Trade-focused positioning.

### 7. Contact

Purpose: capture dealer, project, contractor, and customer enquiries.

Fields:

- Name
- Phone
- Email
- City
- User type
- Product interest
- Message

## Visual Direction

The design should be product-first and restrained.

Design rules:

- Use Resibond navy as the signature color, but not as the whole page background.
- Use warm off-white and bone backgrounds for breathing room.
- Use amber/gold accents sparingly, especially around NXT and 100+ shades.
- Use supplied product pack images prominently.
- Avoid hotchpotch: no overcrowded sections, no mixed visual styles, no generic icon grids, no stock photography, no discount banners, no cart UI, and no auto-rotating carousels.
- Keep each section to one job, one focal point, and one clear action.

Suggested palette:

- Paper: `#FBFAF7`
- Bone: `#F4F1EC`
- Ink: `#0A1628`
- Resibond Navy: `#083A5C`
- Resibond Deep: `#052941`
- Amber: `#C9902E`
- Line: `#DDD7CC`

## Interaction Plan

- Product filters update the grid instantly.
- Sealant Finder updates the recommendation as choices change.
- Product cards link to details.
- FAQ/application rows can expand where useful.
- Contact form validates required fields locally.

## Build Plan

1. Scaffold the frontend app.
2. Copy brand and product assets into `public/assets`.
3. Create structured product data from the spreadsheet and presentation.
4. Build layout, routing, and design tokens.
5. Build homepage.
6. Build products listing and filters.
7. Build product detail pages.
8. Build Sealant Finder.
9. Build applications, about, and contact pages.
10. Run build checks.
11. Start local dev server.
12. Verify desktop and mobile in browser.

## Success Criteria

- The first screen clearly reads as Resibond.
- The site is usable without explaining how it works.
- Product images load cleanly and remain central to the experience.
- Users can find products by chemistry, application, and range.
- Resibond NXT feels professional but still part of Resibond.
- The design feels restrained, engineered, and trade-grade.
