---
version: alpha
name: Athenium Website
description: Design contract for the Athenium Consulting website. It joins the Athenium brand tokens to the composition rules that keep every page distinctive, restrained and consistent.
colors:
  gold: "#FBA91A"
  orange: "#EF5828"
  orange-dark: "#EB5C46"
  dark: "#2D363F"
  black: "#0F1419"
  grey: "#505B60"
  off-white: "#F9F9F9"
  white: "#FFFFFF"
  neutral-100: "#F1F2F3"
  neutral-200: "#E3E6E8"
  neutral-300: "#CDD2D5"
  neutral-400: "#98A1A7"
  neutral-700: "#3B454C"
  neutral-850: "#1E262D"
  success: "#2E7D5B"
typography:
  display:
    fontFamily: Lato
    fontSize: 72px
    fontWeight: 900
    lineHeight: 1.05
    letterSpacing: -0.02em
  h1:
    fontFamily: Lato
    fontSize: 48px
    fontWeight: 900
    lineHeight: 1.1
    letterSpacing: -0.01em
  h2:
    fontFamily: Lato
    fontSize: 36px
    fontWeight: 900
    lineHeight: 1.2
  h3:
    fontFamily: Lato
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.3
  h4:
    fontFamily: Lato
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.4
  body-lg:
    fontFamily: Lato
    fontSize: 20px
    fontWeight: 300
    lineHeight: 1.6
  body:
    fontFamily: Lato
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  caption:
    fontFamily: Lato
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  eyebrow:
    fontFamily: Lato
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0.18em
rounded:
  sm: 4px
  md: 8px
  lg: 16px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  4xl: 96px
  5xl: 128px
components:
  button-on-dark:
    backgroundColor: "{colors.white}"
    textColor: "{colors.dark}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: 12px
  button-on-dark-hover:
    backgroundColor: "{colors.off-white}"
    textColor: "{colors.dark}"
  button-on-light:
    backgroundColor: "{colors.dark}"
    textColor: "{colors.white}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: 12px
  button-on-light-hover:
    backgroundColor: "{colors.neutral-700}"
    textColor: "{colors.white}"
  surface-dark:
    backgroundColor: "{colors.dark}"
    textColor: "{colors.white}"
  surface-deep:
    backgroundColor: "{colors.black}"
    textColor: "{colors.white}"
  surface-light:
    backgroundColor: "{colors.off-white}"
    textColor: "{colors.dark}"
  evidence-figure:
    textColor: "{colors.dark}"
    typography: "{typography.display}"
  evidence-source:
    textColor: "{colors.grey}"
    typography: "{typography.caption}"
---

## Overview

This file is the design contract for every page on the site. An agent reads it before it writes a page, and the team reviews a page against it. The brand tokens come from the Athenium design system v1.4. The composition rules below come from the research recorded in `docs/design/framework-research.md`.

The site reads as a calm, exact instrument for audiences in mining, downstream fuel and FMCG who distrust decoration and respect evidence. Authority comes from scale, spacing and proof, and not from effects. A page that follows the brand tokens but ignores the rules in this file is not finished.

Each page begins with the direction step in `docs/design/direction-step.md`. It fixes one sentence of intent, the section rhythm and the single moment of emphasis before any code exists. The team approves it in the pull request.

## Colors

Gold is the single accent and appears once per surface. Orange and dark orange serve hover, active and destructive states and the `[value]` placeholder. They never appear as decoration.

Surfaces are white, off-white, dark and black. Dark is `#2D363F` for covers and dividers. Black is `#0F1419` and is kept for one moment of gravity on a page. Never use pure `#000000` or pure grey, because the neutrals carry a slight cool tint drawn from dark.

The tinted neutral scale (`neutral-100` to `neutral-850`) and `success` are proposed extensions that complete the palette for borders, hover states, dividers and status. They are not yet in `src/app/globals.css` or in the design system document. The team ratifies them before they ship, and CLAUDE.md is updated at the same time.

## Typography

Lato is the only typeface. Hierarchy comes from weight, size and case. Display and headings use Black or Bold, eyebrows use SemiBold in uppercase, body uses Regular and the lede uses Light.

Set display text tight and large, with a body measure of 60 to 68 characters. Balance headings so no line ends on a single word. Use tabular figures for any number a visitor compares. Titles state an insight as a sentence in sentence case.

## Layout

Layout is where a page earns its quality. Use a 12 column grid inside a 1120 to 1280px container, with base-8 spacing. Section padding runs from `4xl` to `5xl` on desktop, and the generous space is deliberate.

Rhythm rules for every page:

- Use at least four distinct layout families across eight sections, such as full-bleed statement, asymmetric split, evidence row, ruled list and gallery.
- Never place more than two identical card grids on one page. Never nest a card inside a card.
- Limit eyebrows to one for every three sections.
- Hold one dominant element per surface and let everything else recede.

The hero is two lines of headline at most, one supporting sentence of 20 words or fewer, and one primary action with at most one secondary. It fits the first viewport at 1440 by 800 and the navigation sits on one line at 80px or less.

Proof beside a claim is the main structural device. A figure carries its source and date directly beneath it. Where no real figure exists, the page shows a visible `[value]` placeholder and never a plausible invention.

## Elevation & Depth

Depth comes from tone, hairlines and spacing before it comes from shadow. Use the existing three elevation steps only for floating layers such as menus and dialogs. Cards on a page use a hairline border or a tonal step, not a shadow.

Photography needs an approved source and a dark wash. Where none exists the surface stays solid. A gradient never substitutes for a missing photograph. The brand gradient is reserved for the logo glyph and one rule or divider.

## Shapes

Radius is 4px for buttons and inputs, 8px for cards and panels and 16px for feature panels. No other radius appears. Icons are Lucide line icons at one stroke width across the site, 1.5 or 2, and they are never decorative.

## Components

Components come from the shadcn registry themed to these tokens. Each approved section carries a purpose, a statement of when not to use it, its variants and its accessibility notes. A page uses a registered section where one exists and proposes a new one in the pull request where none does.

Every interactive component defines default, hover, focus visible, active, disabled, loading and error states. Focus uses a 2px ring with a 2px offset on both light and dark surfaces. Touch targets are at least 44px and never below 24px. Buttons use one label per intent and the label stays on one line.

Motion is additive. The resting state of every element is its final state. Use 150 to 300 milliseconds, the standard easing, and animate transform and opacity only. Author one considered moment per page and honour the reduced motion setting.

## Do's and Don'ts

Do:

- State the direction in one sentence before building, and compare the finished page against it.
- Let scale, whitespace and one strong image or figure carry each section.
- Show proof with its source and date, and use `[value]` for anything unknown.
- Check each page at desktop and mobile widths, and in default, hover, focus and error states.

Don't:

- Do not use gradient text, mesh or aurora backgrounds, glass panels or decorative gradients.
- Do not repeat three equal icon cards, a centred hero over a tinted blur, or the big number with a small label template.
- Do not fake a product screenshot with styled boxes, invent a logo wall, or use stock placeholder images.
- Do not use em dashes, semicolons, emoji or contractions in copy, and do not state a claim about an offering that does not trace to harvested material.
- Do not ship a page that fails the gates in `docs/design/direction-step.md`.
