# CLAUDE.md

Guidance for Claude Code in this repository. The repository holds notes only. Read [LESSONS.md](./LESSONS.md) before proposing any build.

## Working

- Show the owner a visual first. Keep each step small enough to react to.
- Build nothing that the owner has not asked for. No scaffold, CI or tests ahead of an approved design.

## Voice

Write all copy in South African English in the Athenium voice. It is stoic, direct and substantive. Do not use emojis, contractions, em dashes or semicolons.

## Content

A claim about an offering must trace to harvested material. Do not name a client, state a contract value or include personal information unless the team has supplied and approved it.

## Git and review

- Create one branch and one pull request per task. Never push to `main`.
- Commit as `slade-athenium <slade.rose@athenium.co.za>`. Confirm `git config user.name` and `git config user.email` before each commit.
- Do not add `Co-Authored-By`, `Claude-Session` or any other Claude attribution to commit messages or pull request descriptions.
- Never commit secrets, keys or tokens. Never paste them into prompts.

## Human control points

The team decides these. Stop and ask before acting on any of them.

1. Pull request approval before any merge to `main`.
2. Secrets, API keys and account access.
3. Production release.
4. Security and accessibility sign-off.

## Referrals

Pricing, budgets, invoicing and commercial terms go to Claire Kleyn. Legal matters, including POPIA, go to Johan van Zyl, external legal counsel.
