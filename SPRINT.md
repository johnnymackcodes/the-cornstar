# CORNSTAR — Overnight Sprint Log

Goal (all four): Expand the universe · Make it functional · Design & motion polish · Performance & SEO.
Deploying incrementally to https://the-cornstar.onrender.com (manual trigger — auto-deploy webhook not wired).

## Status

### Performance & SEO
- [x] `robots.ts` (allow all + sitemap ref)
- [x] Real key-art OG share card (embeds logo art)
- [x] `sitemap.ts` (home + pages + all news articles)
- [ ] Expanded structured data (JSON-LD)
- [ ] Image/source optimization pass

### Expand the universe (dedicated pages)
- [x] Shared PageShell + site-wide Nav (route-based, alwaysVisible mode) + PageHeader
- [x] /the-legend (the biography — 7 chapters + fast facts)
- [x] /pussyimone (bio, ventures, quotes, status)
- [x] /kernel (his own clean minimalist world)
- [x] /the-film (poster, filmmaker's diary, credits)
- [x] /news (CSNN index) + /news/[slug] (10 full articles)
- [x] Wire home CTAs → new pages (About, Pussyimone, CSNN, Documentary)

### Make it functional
- [ ] Newsletter → Kit (real form)
- [ ] Cart flow polish (Stripe-ready, no live payments)
- [ ] Document: custom domain, Render↔GitHub auto-deploy, analytics

### Design & motion polish
- [ ] Micro-interactions, more easter eggs, mobile refinements

### Blocked (need the user)
- Stripe live checkout (keys + it's a joke shop)
- Custom domain (needs owned domain + DNS)
- Render↔GitHub OAuth (dashboard click) + re-privatize repo
