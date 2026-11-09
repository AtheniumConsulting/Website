# Framework research

This note records the research behind [DESIGN.md](../../DESIGN.md) and the [direction step](./direction-step.md). It separates what was verified from what was not. Dates are the last activity recorded on each repository on 9 November 2026.

## Why the framework exists

The brand tokens describe colour, type and spacing. They do not describe composition, rhythm or restraint. A page that applies the tokens literally can still look generic, and the first landing page comp showed it. The framework therefore adds a direction step, composition rules, a pattern library and automated gates around the brand system.

## Findings

DESIGN.md is an open Apache-2.0 format from Google Labs at `google-labs-code/design.md`. It pairs machine-readable tokens with written rationale, and its command line tool lints contrast and token references. The project calls the format alpha, so the schema may change.

The `impeccable` project at `pbakaus/impeccable` is Apache-2.0. It supplies a design vocabulary and a deterministic detector of 62 rules that can run on edited files and in continuous integration. It is already available in the team environment.

The shadcn/ui registry lets Athenium publish its own approved sections and components. This is the strongest control for consistency across pages. The Vercel `web-interface-guidelines` repository is MIT licensed. Its skill fetches the rules live and its licence is unclear, so the rules should be copied into this repository.

For tokens, the stable DTCG format (version 2025.10) is a community report and not a W3C Recommendation. The current token set is small and web only, so `globals.css` remains the source. DTCG naming is borrowed as a convention, and Terrazzo with its Tailwind 4 plugin is the path if a second consumer appears. GOV.UK, Primer, Carbon and USWDS are structural references for component documentation, token architecture and accessibility criteria.

Accessibility checks that fit this stack are the lint rules bundled with Next.js, axe through Playwright and Lighthouse CI. They catch part of WCAG 2.2 AA only. Manual review and team sign-off remain required.

## Shared craft rules

The installed taste skills and the sources agree on these points. The direction is fixed before building. One accent is used consistently. The hero is short and carries one primary action. Layout rhythm varies. Cards appear only where elevation carries meaning. Imagery and numbers are real. Motion is motivated and honours reduced motion. Contrast and state checks are measurable.

Several taste rules conflict with the brand and are dropped. These are font swaps away from Lato, serif or mono accents, pastels, grain, glass, extra radii and discouraged icon sets.

## Admired site survey

On 9 November 2026 the first viewport of six sites was viewed at about 1530 by 780 pixels. Nothing was scrolled, no interaction was tested and no performance was measured. Palantir stayed blank on two loads and is not assessed. The Oatly cookie banner covered its first view.

- Commonwealth Fusion Systems pairs a full-bleed photograph of real machined hardware with a short sentence-case headline and a floating navigation bar.
- Fervo Energy pairs a full-bleed aerial photograph of a real drilling site under a deep blue wash with a one-sentence headline and a minimal navigation.
- Form Energy uses a grey gradient and an all-caps headline. It is plain and weaker than the two above.
- Rio Tinto uses a human photograph, a two-line headline and two buttons. It is warm and conventional.
- Stripe is admired for polish, but its gradient identity conflicts with the Athenium rules.
- Oatly uses a loud poster-style cover. It shows that consumer brands can be bold, and it does not suit our audience.

The strongest energy and industrial sites rely on real photography under a controlled dark wash, a short headline and little ornament. This supports the photography rule in DESIGN.md. It also means that a page without approved photography must earn its quality through scale, spacing and evidence. No confirmed restrained mining or fuel exemplar exists. Francois van Heerden names the sites the team admires.

## Not verified

- Scroll behaviour, motion, mobile layout and performance of every surveyed site.
- Licence terms of the `vercel-labs/agent-skills` repository, and brand or trademark limits for GOV.UK, Primer and Carbon.
- The WCAG 2.2 criteria list, which came from memory and must be checked against the W3C pages.
- The DESIGN.md schema against the linter, until the linter result is recorded in the pull request.

## Referrals

Licence, trademark and reuse questions go to Johan van Zyl, external legal counsel. Any budget or licensing cost goes to Claire Kleyn.

## Sources

- https://github.com/google-labs-code/design.md
- https://github.com/pbakaus/impeccable
- https://github.com/vercel-labs/web-interface-guidelines
- https://ui.shadcn.com/docs/skills
- https://github.com/design-tokens/community-group
- https://github.com/terrazzoapp/terrazzo
- https://github.com/alphagov/govuk-design-system
- https://github.com/primer/primitives
- https://github.com/dequelabs/axe-core
- https://github.com/GoogleChrome/lighthouse-ci
