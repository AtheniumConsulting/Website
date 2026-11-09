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

## Not verified

- Visual craft of any admired site. The survey needs a connected browser and has not been done.
- Licence terms of the `vercel-labs/agent-skills` repository, and brand or trademark limits for GOV.UK, Primer and Carbon.
- The WCAG 2.2 criteria list, which came from memory and must be checked against the W3C pages.
- The DESIGN.md schema against the linter. The linter run was blocked and has not been done.

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
