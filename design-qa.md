# Homepage Hero Slider — Design QA

- Source visual truth: `/Users/bunny/Downloads/HERO BANNER_2X (1).jpg`
- Implementation screenshots: `/tmp/resibond-nxt-final-blended-desktop.png`, `/tmp/resibond-nxt-final-blended-mobile.png`
- Combined comparison: `/tmp/resibond-hero-design-qa-comparison.png`
- Desktop viewport: 1440 × 1000 CSS px; implementation hero: 1440 × 920 CSS px
- Mobile viewport: 390 × 844 CSS px; implementation hero: 390 × 960 CSS px
- Source pixels: 3840 × 2160 (2× campaign artwork; normalized to 720 × 405 in comparison)
- Implementation capture: 1440 × 1000 at browser capture density; normalized to 720 px wide in comparison
- State: Resibond NXT slide active after transition

## Full-view comparison evidence

The implementation preserves the source's deep-blue field, four-cartridge hierarchy, NXT lockup, specialist positioning, and gold accent. The layout intentionally converts baked banner text into responsive HTML and replaces unverified proof claims with functional CTAs. Desktop retains the source's products-left/copy-right composition; mobile changes to copy-first/products-second for legibility and conversion.

## Required fidelity surfaces

- Typography: Barlow Condensed display hierarchy matches the established Resibond website and preserves the source's condensed industrial character. Copy remains live, responsive, and readable.
- Spacing and layout: desktop composition matches the source's two-part balance; mobile stacks content without horizontal overflow. Slider height remains stable between slides.
- Colors and tokens: NXT navy is matched to the official logo asset (`#073356`); gold uses the site's approved brand token.
- Image quality: the product stage is an exact, high-quality crop of the supplied campaign artwork, preserving its bottle shapes, nozzles, proportions, lighting, spacing and podiums. The official NXT logo remains a separate source asset. No product or logo is recreated in CSS.
- Copy and content: the NXT positioning is preserved. “India's Widest Range” and “30+ Years of Sealing Expertise” are intentionally omitted because approval was not provided; functional CTAs replace them.

## Focused-region evidence

The full-width normalized comparison keeps the official packaging labels and logo large enough to inspect, so a separate focused crop was not necessary. Product transparency, relative scale, logo crop, and CTA placement were checked at desktop and mobile sizes.

## Comparison history

1. P2 — Sanitary Super White used an opaque-background PNG, producing a white rectangle on navy. Fixed by switching to the approved transparent `sanitary-super-white-nxt-2026-v3.png`; post-fix evidence shows no backplate.
2. P2 — Official square NXT logo contained excessive built-in navy margins. Fixed with a non-destructive crop frame and matched the slide background to the logo's sampled navy; post-fix evidence shows a compact, integrated lockup.
3. P1 — The reconstructed catalogue cut-outs did not match the supplied campaign group shot. Replaced them with an exact source-artwork product crop. A first responsive attempt exposed baked-in banner copy on mobile; the final 2100 × 2160 product-only crop removes that copy while retaining all four cartridges. Desktop and 390 × 844 mobile evidence confirm the corrected asset.
4. P1 — The product crop initially read as a rectangular card inside the hero. Fixed by making the desktop artwork full-bleed, matching the NXT background, feathering its joining edge, and using a top fade in the stacked mobile composition. Post-fix captures show a continuous stage without a hard box boundary.

## Interaction and runtime checks

- Automatic 8-second slide change: passed
- Direct slide controls: passed
- Keyboard ArrowRight navigation: passed
- NXT primary CTA to `/brands/resibond-nxt`: passed
- Responsive mobile state and zero horizontal overflow: passed
- Console error/warning check: passed
- Reduced-motion fallback is present in CSS and disables slide/product transitions
- NXT choreography is text-first, followed by the complete supplied group shot; the group uses a one-time rise/brightness settle and subtle transform-only ambient movement

## Findings

No actionable P0, P1, or P2 findings remain. The missing campaign proof claims are an intentional content-safety deviation pending brand approval.

final result: passed
