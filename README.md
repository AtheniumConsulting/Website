# Athenium Website

The Athenium Consulting website. Athenium exists for the liberation of Africa's resources through wise application of technology, and this site is where we present that work to the market.

## Status

Reset to basics on 9 November 2026. The previous scaffold and landing page were removed because they were over engineered and the page looked flat. Everything remains in git history, ending at the merge of pull request 23.

On 24 November 2026 a bare Next.js project was added for launch task T118. It carries Lato, the brand colours and a holding page only. There are no tests, CI or content schemas.

## Run it

```
npm install
npm run dev
```

Then open http://localhost:3000.

## Files

- [CLAUDE.md](./CLAUDE.md) holds the working rules.
- [BRAND.md](./BRAND.md) holds the few brand values the site must carry: accent colour and font.
- [LESSONS.md](./LESSONS.md) records what went wrong and what to do differently.

## Next

Francois chooses a design direction under T064. Page layouts and components are built only after that choice. The team keeps authority over the four control points in CLAUDE.md.
