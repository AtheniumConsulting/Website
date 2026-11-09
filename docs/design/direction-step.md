# Direction step

Every page begins here. The agent completes this record and places it in the pull request description before it writes any page code. The team approves the direction first, and the build follows. A direction that is vague produces a generic page, so each answer must be specific enough to be wrong.

The rules it applies live in [DESIGN.md](../../DESIGN.md).

## 1. Intent

Write one sentence that states what the visitor should believe after reading the page and what they should do next. Name the audience and the surface system, dark or light, that the page holds.

## 2. Evidence

List every claim the page makes and the harvested source that supports it. Where no source exists, the claim does not appear, or it appears as a visible `[value]` placeholder. Name the approved photography, or state that none exists and every surface stays solid.

## 3. Rhythm plan

Fill one row for each section. At least four layout families appear across eight sections, and no layout family repeats more than twice in a row.

| Section     | Purpose      | Layout family | Surface     | Dominant element |
| ----------- | ------------ | ------------- | ----------- | ---------------- |
| `[section]` | `[one verb]` | `[family]`    | `[surface]` | `[element]`      |

## 4. The one moment

State the single place on the page that carries emphasis, such as the gold accent, the deep black surface or the authored motion. Everything else recedes. If the page has no single moment, the direction is not finished.

## 5. Registry check

Name the registered sections the page reuses. Name any new section it proposes, with its purpose, its variants and its accessibility notes.

## 6. Gates

Run the gates in order and report each as pass, fail, not run or blocked. A gate that was not run is reported as not run.

Gates in place today:

- `npm run format:check`
- `npm run lint`
- `npm run typecheck`
- `npm test`
- `npm run build`
- `npm run test:e2e`

Gates proposed and not yet installed. Each needs approval before it joins the list:

- The `impeccable detect` command, which applies deterministic design rules to `src`.
- `@axe-core/playwright` on every page template.
- Lighthouse CI with agreed performance budgets.
- A copy of the Vercel web interface rules held in this repository.
- The DESIGN.md linter, which checks token contrast and broken references.

## 7. Human control points

The team signs off on accessibility and security, approves the pull request and owns any release. The agent does not state that a page is accessible. It states which checks ran and what they found.
