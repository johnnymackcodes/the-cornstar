# CORNSTAR — Deploy & Connect

Live: **https://the-cornstar.onrender.com** · Repo: `johnnymackcodes/the-cornstar` (Render service `srv-daas7rjtqb8s73e2pvfg`, workspace *Mack2 Render*, free plan).

Everything below needs a click or a value only you can provide. None of it is required for the site to work — it's already live.

## 1. Auto-deploy on push (2 min) — recommended
Right now pushes to `main` do **not** auto-deploy (the service was created from a public repo URL, so there's no GitHub webhook). Each update is deployed manually.

To fix: Render Dashboard → the-cornstar → **Settings → Build & Deploy → Repository → "Connect GitHub"**, authorize the Render app for `johnnymackcodes/the-cornstar`. Once connected, every push to `main` deploys automatically.

## 2. Re-privatize the repo (optional)
I made the repo **public** so Render could fetch it without the GitHub app. After step 1 (GitHub connected), you can flip it back private: `gh repo edit johnnymackcodes/the-cornstar --visibility private` — Render will still deploy via the app connection. (Nothing sensitive is in the repo either way.)

## 3. Turn on the real newsletter (Kit)
The signup form posts to `/api/subscribe`, which is **off by default** — it will not touch your real *Mack2 Strategy* list until you point it at a **dedicated** form.

1. In Kit, create a new form named e.g. **"Inner Cob"** (its own welcome sequence/tags — keep it separate from Weekly Edge).
2. Copy that form's `uid` (the code in its embed URL, e.g. `mack2-strategy.kit.com/<uid>`).
3. Render → the-cornstar → **Environment** → add `KIT_FORM_UID = <uid>` → save (triggers a redeploy).

Done — signups now flow into that dedicated form only. Leave it unset and the site keeps its charming "Welcome to the Inner Cob" flow without subscribing anyone.

## 4. Custom domain (optional)
Render → the-cornstar → **Settings → Custom Domains → Add**. Render shows a CNAME/A record; add it at your registrar. Then update `SITE` in `app/layout.tsx`, `app/robots.ts`, and `app/sitemap.ts` to the new domain and push. (I can suggest available domain names on request — I just won't purchase one.)

## 5. Always-on (no cold starts) — optional, $
Free tier sleeps after ~15 min idle (first visit then cold-starts ~30–50s). Render → **Settings → Instance Type → Starter ($7/mo)** for always-on.

## 6. Analytics (optional)
Left out intentionally (no account/keys). Easiest privacy-friendly add later: a Plausible or Umami snippet in `app/layout.tsx` gated behind an env var. Say the word and I'll wire it.

## 7. Real merch checkout (Stripe) — not built
The cart is deliberately a visual/joke flow (no live payments). If you ever want real checkout, it's a `/api/checkout` route creating a Stripe Checkout Session with `STRIPE_SECRET_KEY` in env. I left the cart structured so this is a clean add — but it needs your Stripe account and a decision that the shop is real.
