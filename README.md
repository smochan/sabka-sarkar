# Sabka Sarkar — सबकी सरकार

> An aspirational, **non-partisan** civic thought experiment: a "Dream Cabinet of India" chosen by the public.
> Not a real or claimed government. Not affiliated with any person or party.

A single-page site where the public **nominates and upvotes** who they'd trust to lead each of 12 ministries — each backed by a "Council of 50" of real practitioners — alongside an aspirational **5-year plan for India**.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 (editorial/civic design system in `src/app/globals.css`)
- Vercel Postgres for nominations/votes (`@vercel/postgres`)
- `next/og` for the share card, Vercel Analytics for traction

## Local development

```bash
npm install
npm run dev          # http://localhost:3000
```

Without a database the site runs in **preview mode**: nominees are shown but voting/adding is disabled. To enable the full nomination engine locally, set `POSTGRES_URL` in `.env.local` (see `.env.example`) or run `vercel env pull` after linking the project.

## Deploy to Vercel (interactive — run these in your terminal)

```bash
# 1. Log in (opens browser)
vercel login

# 2. From the project root, create + deploy. Accept the defaults.
vercel            # creates a preview deployment + links the project
vercel --prod     # promotes to production
```

### Turn on live voting (Vercel Postgres)

1. In the Vercel dashboard → your project → **Storage** → **Create Database** → **Postgres** (Neon). Attach it to the project. This auto-adds `POSTGRES_URL` to the environment.
2. Redeploy: `vercel --prod`.
3. First visit to `/api/tally` auto-creates the table and seeds the curated nominees. Done — voting and "Suggest someone" go live.

### Set the public URL

Add `NEXT_PUBLIC_SITE_URL` (your final domain or the `*.vercel.app` URL) in **Project → Settings → Environment Variables**, then redeploy so OG tags and share links are correct.

### Custom domain

Project → **Settings → Domains** → add the domain you registered (e.g. `apnisarkar.in`) and follow the DNS instructions.

## Editing content (no code needed)

- **Cabinet portfolios + seed nominees:** `src/content/cabinet.ts`
- **5-year plan:** `src/content/plan.ts`
- **Manifesto / vision / principles / legal copy:** `src/content/site.ts`

All seed names are **public-nomination examples for review** — swap freely. Keep the tone non-partisan and avoid anyone in active legal/political controversy.

## Safety & moderation

- Persistent disclaimer + nominee removal contact in the footer (`src/content/site.ts` → `legal`).
- New nominations are validated server-side (`src/lib/schema.ts`) and stored with a `status` column; set a row's `status` to anything other than `visible` to hide it.
- No Aadhaar / sensitive PII collected. Voting dedupe is best-effort (per-browser + per-row); phone-OTP is a planned hardening.
