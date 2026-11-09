# Landing page direction

This record follows the [direction step](./direction-step.md) and applies the rules in [DESIGN.md](../../DESIGN.md). It is a draft for team approval. No page code exists, and none is written until the direction is approved.

Two inputs are missing and shape every answer below. No offering has been harvested yet (issues 7 to 11), and the positioning and ideal customer profile are not documented (issue 21). Where an answer depends on either, it appears as a visible `[value]` and is listed under open decisions.

## 1. Intent

A leader in resources, mining, downstream fuel or FMCG should leave the page believing that Athenium joins technology to industry expertise, and should then start a conversation through one contact action. The page holds the dark surface system, which suits an industrial audience.

Assumptions behind this sentence:

- The primary audience is the operational and technology leadership of resource and fuel businesses. FMCG leadership is secondary.
- The page serves the public marketing site and lead capture goal. Staff and registered visitor features sit on other routes.
- The strapline "Connected technologies meet industry expertise." is approved brand language and may appear on the page.

## 2. Evidence

No claim about an offering appears until it traces to harvested material. Today the page may state only brand-approved language and facts the team has supplied.

| Claim                                          | Source                                       | Status                                 |
| ---------------------------------------------- | -------------------------------------------- | -------------------------------------- |
| Connected technologies meet industry expertise | Athenium brand strapline                     | Approved                               |
| The services and products Athenium sells       | Collateral harvest, issues 7 and 8           | `[value]` until harvested              |
| Three proof figures with source and date       | Portfolio matrix and evidence list, issue 11 | `[value]` until supplied               |
| Who Athenium serves                            | Positioning and ideal customer profile, 21   | `[value]` until documented             |
| How Athenium engages                           | Offering write ups, issue 9                  | `[value]` until harvested              |
| Insight articles                               | Sanity content model, issue 5                | Placeholder until publishers are named |
| Contact route                                  | Team                                         | `[value]`, no address is invented      |

Photography: none is approved. Every surface stays solid, and no gradient stands in for a photograph.

## 3. Rhythm plan

Eight sections use five layout families. No family repeats more than twice in a row, and there are no card grids.

| Section        | Purpose       | Layout family        | Surface    | Dominant element                        |
| -------------- | ------------- | -------------------- | ---------- | --------------------------------------- |
| Hero           | State         | Full-bleed statement | Dark       | Two-line headline                       |
| Proof          | Evidence      | Evidence row         | White      | One large figure with its source        |
| Offerings      | Orient        | Ruled list           | Off-white  | The list of offerings, grouped          |
| Industry depth | Differentiate | Asymmetric split     | White      | A single statement of 30 words or fewer |
| Commitment     | Commit        | Full-bleed statement | Deep black | One sentence with the gold accent       |
| Engagement     | Explain       | Phased timeline      | Off-white  | The phase rule with node markers        |
| Insights       | Inform        | Ruled list           | White      | The newest article title                |
| Closing        | Invite        | Asymmetric split     | Dark       | One primary action                      |

The hero and the commitment section share a family but are separated by three sections. The closing split reuses the family of section 4, again with a gap. Eyebrows appear on at most two sections.

Hero constraints from the contract: two lines of headline at most, one supporting sentence of 20 words or fewer, one primary action and at most one secondary. The navigation sits on one line at 80px or less, with the white horizontal logo on the dark surface. The whole hero fits a 1440 by 800 viewport.

Headline candidate for team review, subject to issue 21: "Technology built for the work of Africa's resources." The strapline is the supporting sentence.

## 4. The one moment

The deep black commitment section carries the page. It is the only `#0F1419` surface, it holds one sentence set large, and it holds the single gold accent on that surface. Every other section recedes through restraint. The hero keeps its gold use to the eyebrow or one rule and does not compete.

No motion is authored in the first build. If the team wants one considered motion moment later, it attaches to the proof figure and honours the reduced motion setting.

## 5. Registry check

The shadcn registry holds only the themed button today, so every section below is a new proposal. Each is written once and reused by later pages.

| Proposed section | Purpose                         | Variants             | Accessibility notes                                        |
| ---------------- | ------------------------------- | -------------------- | ---------------------------------------------------------- |
| SiteHeader       | Navigation and the logo         | Dark, light          | One landmark, visible focus, skip link, 44px targets       |
| StatementHero    | Headline, support, one action   | Dark                 | One `h1`, contrast of at least 4.5 to 1, label on one line |
| EvidenceRow      | Figures with source and date    | One to three figures | Figures in text, source beneath, tabular numerals          |
| RuledList        | Grouped lists of offerings      | Offerings, articles  | Semantic list, link text states the destination            |
| SplitStatement   | A statement beside support text | Left, right          | Reading order matches visual order                         |
| PhaseTimeline    | Phases on a rule                | Three to five phases | Ordered list, no meaning carried by colour alone           |
| ClosingAction    | One invitation and one action   | Dark                 | One primary control, focus ring on dark surfaces           |
| SiteFooter       | Links and the legal line        | Dark                 | Landmark, link contrast, no new colours                    |

## 6. Gates

Gates in place today are `npm run format:check`, `lint`, `typecheck`, `test`, `build` and `test:e2e`. The proposed gates in the direction step are not installed, so they are reported as not run for this page until the team approves them. The build report states each result as pass, fail, not run or blocked.

## 7. Human control points

The team approves this direction, approves the pull request, signs off on accessibility and security and owns any release. A form that stores visitor details brings POPIA into scope, so the first build uses a single contact action with no stored data, and any form goes to Johan van Zyl first. Pricing or engagement terms shown on the page go to Claire Kleyn.

## Open decisions for the team

1. Confirm the primary audience and the one sentence of intent, or replace them.
2. Supply the positioning and ideal customer profile (issue 21) so the headline can be fixed.
3. Complete the harvest (issues 7 to 11) so the proof, offerings and engagement sections carry real content.
4. Confirm that no approved photography exists, or name it.
5. Name the contact route for the closing action.
6. Ratify the proposed neutrals in DESIGN.md before a hairline or hover state uses them.
7. Name the publishers and reviewers for insight articles.
