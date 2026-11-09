# Athenium Website

The Athenium Consulting website. Athenium exists for the liberation of Africa's resources through wise application of technology, and this site is where we present that work to the market.

## Status

Scaffolded. The technology stack is decided and documented. The base application runs with the Athenium design system applied, and the checks run in GitHub Actions. Sanity and Supabase follow with the first features that need them.

## Stack

The full reasoning sits in [TECHNOLOGY-STACK](./TECHNOLOGY-STACK). In summary:

- **Application:** Next.js (App Router), TypeScript in strict mode, Tailwind CSS, and shadcn/ui.
- **Design:** The Athenium design system, encoded in the Tailwind configuration and shadcn/ui theme.
- **Content:** Sanity, with schemas defined in code, so people outside the development team can write and publish articles.
- **Backend:** Supabase for Postgres, authentication, and row-level security. Staff sign in with Microsoft 365 and public visitors register.
- **Verification:** Vitest, Playwright, ESLint, Prettier, and the TypeScript compiler.
- **Operations:** GitHub, GitHub Actions, Vercel, and Sentry.

## Commands

Run `npm install` once, then `npm run dev` to start the site. The checks are `npm run format:check`, `npm run lint`, `npm run typecheck`, `npm test`, `npm run build` and `npm run test:e2e`. See [CLAUDE.md](./CLAUDE.md) for the working rules.

## How we work

Claude Code drives development and the team owns accountability. Each task maps to one branch and one pull request. The team keeps authority over four points:

1. Pull request approval before any merge to the main branch.
2. Secrets, API keys, and account access.
3. Production release.
4. Security and accessibility sign-off.

Secrets never belong in the repository or in prompts.

## Contributing

Create a branch for each task and open a pull request for review. Do not push directly to `main` once the application is scaffolded. All checks must pass before merge.

## Questions

Pricing, budgets, and commercial matters go to Claire Kleyn. Legal matters, including POPIA obligations, go to Johan van Zyl, external legal counsel.
