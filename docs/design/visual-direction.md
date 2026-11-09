# Visual direction

This note proposes how the Athenium website looks and feels. It applies design system v1.4 and does not add colours, fonts or radii. The comp in [home-comp.html](./home-comp.html) shows the home page under this direction. Open it in a browser to review.

## Direction

The site reads as a calm, exact instrument. Our audience sits in resource, mining, downstream fuel and FMCG value chains. They distrust decoration and respect evidence. The design therefore carries one idea per surface, a statement as the title, and proof beside every claim.

## Surface system

We recommend the dark system. Covers and dividers sit on `#2D363F`, with `#0F1419` kept for one moment of gravity such as the closing call to action. Content sections are white or off-white. The light system suits regulated audiences and remains available if the team prefers it.

## Structure of the home page

1. Hero on a dark surface. A statement title, one line of support, one primary action.
2. What we do. Offerings grouped as products and services, each with a one-sentence outcome. The content waits on the collateral harvest.
3. Proof. An evidence row of three figures, each with a source line. Every figure is a visible placeholder until the team supplies and approves it.
4. Insight. The three latest articles from Sanity, each title stating an insight.
5. Closing. A dark surface with the strapline and one contact action.

## Rules applied

- Lato only. Eyebrows in SemiBold, titles in Black or Bold, body in Regular or Light.
- Gold appears once per surface. In the comp it is the eyebrow on the dark and white sections, and the single lead figure on the proof section. Actions are white on dark surfaces and dark on light surfaces.
- The logo sits only on white, off-white, `#2D363F` or `#0F1419`, never on gold.
- Lucide line icons only.
- Photography needs a dark wash and an approved source. None is approved, so every surface is solid. We do not substitute a gradient for a missing photograph.
- Unknown values show as `[value]` in orange.

## Motion

Motion is additive and opt in. The resting state of every element is its final state, so a page that loads without script is complete. Transitions use 150 to 300 milliseconds and the standard easing from the token set. The reduced motion setting removes them. Claude Motion can prepare the entrance of the hero and the evidence row once the comp is approved.

## Open decisions for the team

- Dark or light system for the home page.
- Whether to compare the structure against an admired site, as discussed in the meeting. Name the site here: `[site to compare]`.
- Which photographs are approved for covers and dividers.
- Whether the offerings section lists products and services together or separately.

## What approval means

Approval of this note and the comp lets us build the home page in Next.js. It does not approve any copy about an offering. Copy waits on harvested material and the evidence decision for each offering.
