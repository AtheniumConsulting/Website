# CLAUDE.md

Guidance for Claude Code in this repository. Read [AGENTS.md](./AGENTS.md) first. It requires you to read the bundled Next.js documentation in `node_modules/next/dist/docs/` before writing code, because this version differs from older releases. The reasoning for the stack sits in [TECHNOLOGY-STACK](./TECHNOLOGY-STACK). Those decisions are settled and are not reopened without the team.

## Structure

- `src/app` holds routes, layouts and global styles. `src/components/ui` holds shadcn/ui components. `src/lib` holds shared helpers. `src/fonts` holds the Lato files. `public/brand` holds the logo files.
- Unit tests sit beside the code as `*.test.ts` or `*.test.tsx`. End-to-end tests sit in `tests/e2e`.
- Use the `@/` alias for imports from `src`. Name files in kebab-case and components in PascalCase.

## Commands

- `npm run dev` starts the site locally.
- `npm run format:check`, `npm run lint`, `npm run typecheck`, `npm test`, `npm run build` and `npm run test:e2e` are the checks. CI runs all of them.

## Definition of done

A task is done when every check above passes, the change traces to the request and the pull request description states what was verified. Report a check that was not run as not run. Do not describe it as passing.

## Design

The site uses the `athenium-design` skill and design system v1.4. Its tokens live in `src/app/globals.css`. Lato is the only typeface. The page background is white or off-white, and dark surfaces are `#2D363F` or `#0F1419`. Gold is the single accent and appears once per surface. Place the logo only on the four approved backgrounds and never on gold. Use Lucide line icons. Add no new colours, fonts or radii outside the token set. Show an unknown value as a visible placeholder in the form `[value]` using the `placeholder` class.

## Voice

Write all copy in South African English in the Athenium voice. It is stoic, direct and substantive. Titles state an insight. Body paragraphs run to three sentences at most. Do not use emojis, contractions, em dashes or semicolons. Apply the 4C check before finishing any copy.

## Content and publishing

Articles are authored in Sanity once it is added. Only named publishers may publish, and every article is reviewed before it goes live. A claim about an offering must trace to harvested material. Do not name a client, state a contract value or include personal information unless the team has supplied and approved it.

## Git and review

- Create one branch and one pull request per task. Never push to `main`.
- Commit as `slade-athenium <slade.rose@athenium.co.za>`. Confirm `git config user.name` and `git config user.email` before each commit.
- Do not add `Co-Authored-By`, `Claude-Session` or any other Claude attribution to commit messages or pull request descriptions.
- Never commit secrets, keys or tokens. Never paste them into prompts.

## Human control points

The team decides these four points. Stop and ask before acting on any of them.

1. Pull request approval before any merge to `main`.
2. Secrets, API keys and account access.
3. Production release.
4. Security and accessibility sign-off.

## Referrals

Pricing, budgets, invoicing and commercial terms go to Claire Kleyn. Legal matters go to Johan van Zyl, external legal counsel. These include POPIA, which applies once the site stores visitor personal data. Do not interpret law or contract clauses in code comments, copy or documents.
