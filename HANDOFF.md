# Apni Sarkar — Project Handoff

> Last updated: 2026-06-10. Status: **fully working locally, build + lint clean, not yet deployed.**
> This doc is written so a fresh agent/model can continue cold. Read it top to bottom once.

---

## 1. What this is

**Apni Sarkar ("Our Government", अपनी सरकार)** — an aspirational, **non-partisan civic thought-experiment** website for India, built to ride the energy of the CJP (Cockroach Janta Party) youth movement and give it constructive structure.

Three layers, by design:
1. **The hook — "Dream Cabinet":** the public **nominates + upvotes/downvotes** who should lead each of 12 ministries; each ministry has a "Council of 50" of real stakeholders, plus a 5-year plan. This is the emotional entry point.
2. **The community:** per-ministry channels and per-nominee threads with **anonymous + (optional) signed-in** discussion, voting, nested replies, sorting, reporting + moderation.
3. **The payload — sortition:** the *real* end goal, revealed in depth for those who dig. `/sortition` explains selection-by-lottery; `/end-goal` (gated behind "read sortition first") lays out a 5-year reform path from the interim merit-cabinet to a sortition-based system.

### Framing & safety (do not break these)
- Always **aspirational / thought-experiment / reform-via-legitimate-means**. Never "seize power / abolish the constitution / real government". Persistent disclaimer in the footer + on `/end-goal`.
- **Non-partisan.** No attacks on real people/parties. Seed nominee names are illustrative public-nomination examples (review-flagged); two already swapped to reduce partisan reaction (Prashant Bhushan → Justice B.N. Srikrishna; Ravish Kumar → Faye D'Souza). Sonam Wangchuk deliberately excluded (NSA-detention sensitivity).
- Named individuals appear as **nominations, not appointments**; footer has a removal-request contact.
- **No Aadhaar / sensitive PII.** DPDP-minimal data.

---

## 2. Tech stack

- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript**
- **Tailwind CSS v4** — design system in `src/app/globals.css` (editorial/"civic-monument": paper base, ink text, semantic saffron + India-green; fonts Fraunces + Inter + Tiro Devanagari Hindi)
- **libSQL** (`@libsql/client`) — local file `local.db` in dev; **Turso** in prod
- **Auth.js v5** (`next-auth@beta`) — Google provider, **degrades gracefully** (anonymous-only until configured)
- `next/og` for share cards, `@vercel/analytics`
- Reused from the user's `cockpit` project: `src/components/ui/*` shadcn-style primitives, the `cn()` util

> **Next 16 caveat:** see `AGENTS.md` in the repo — APIs differ from older Next. Dynamic route `params` is a `Promise` (`const { id } = await params`). Bundled docs live in `node_modules/next/dist/docs/`.

---

## 3. Run it

```bash
cd /Users/smochan/Documents/projects/apni-sarkar
npm install
npm run dev      # http://localhost:3000  (creates ./local.db automatically, seeds nominees on first /api/tally hit)
npm run build    # production build
npx eslint src --max-warnings=0
```
No env vars needed for local dev. Everything works anonymously; voting + discussion persist to `local.db`.

To reset local data: `rm -f local.db` and restart.

---

## 4. Routes

| Route | Type | What |
|---|---|---|
| `/` | static | Home: Hero → Vision → Cabinet → 5-Year Plan → Principles → EndGoalTeaser → Join → Footer |
| `/sortition` | static | Explainer + interactive circular chamber + FAQ + precedents |
| `/end-goal` | static | Gated vision: prerequisite banner → roadmap → parliament → principles |
| `/n/[id]` | dynamic | Nominee profile (About / What they've done / Why) + vote + debate thread |
| `/m/[slug]` | dynamic | Ministry channel: ranked candidates + Council of 50 + discussion |
| `/admin` | static (client-gated) | Moderation; unlock with `ADMIN_KEY` |
| `/api/tally` | GET | All nominees grouped by ministry (`?voter=` for myVote) |
| `/api/nominee` | GET | Single nominee (`?id=&voter=`) |
| `/api/nominate` | POST | Add a nominee |
| `/api/vote` | POST | Up/down vote a nominee |
| `/api/comments` | GET/POST | List (`?slug=&nomineeId=&voter=&order=top\|new`) / create |
| `/api/comments/vote` | POST | Up/down vote a comment |
| `/api/comments/report` | POST | Report (auto-hides at 4 reports) |
| `/api/admin/comments` | GET/POST | Moderation list + hide/restore/delete (header `x-admin-key`) |
| `/api/auth/[...nextauth]` | — | Auth.js handlers |
| `opengraph-image` under `/`, `/sortition`, `/end-goal`, `/n/[id]`, `/m/[slug]` | — | Share cards |

---

## 5. Key files

```
src/
  app/
    layout.tsx              # fonts, metadata, gated <Providers> (auth), pre-hydration `js` class
    page.tsx                # homepage composition
    globals.css             # design tokens + utilities (.reveal is progressive-enhancement)
    sortition/page.tsx, end-goal/page.tsx, admin/page.tsx
    n/[id]/page.tsx, m/[slug]/page.tsx
    api/...                 # route handlers (see table)
    */opengraph-image.tsx
  auth.ts                   # NextAuth config (graceful) + isAuthConfigured() + sessionVoterKey()
  lib/
    db.ts                   # libSQL client, schema, all queries, vote-toggle logic, moderation
    schema.ts               # Zod schemas + isForgedUserKey()
    voter.ts                # anon device key / signed-in user key / getStoredName / setIdentity
    ratelimit.ts            # in-memory best-effort limiter
    og.tsx                  # shared OG image renderer
    utils.ts                # cn()
  content/
    cabinet.ts              # 12 portfolios + seed nominees  (REVIEW NAMES)
    profiles.ts             # 35 nominee bios/achievements/why (REVIEW)
    plan.ts                 # 5-year plan per sector
    sortition.ts, endgoal.ts# vision page copy (REVIEW)
    site.ts                 # manifesto/vision/principles/legal copy
    types.ts                # all content + the NomineeProfile/SortitionContent/EndGoalContent contracts
  components/
    sections/               # Nav, Hero, Vision, CabinetSection, FiveYearPlan, Principles, EndGoalTeaser, JoinCta, Footer
    nominate/               # MinistryCard, NominateDialog
    community/              # VoteButtons, Discussion, NomineeVote, ChannelNominees
    sortition/              # SortitionChamber (SVG), Faq
    endgoal/                # RoadmapTimeline
    auth/                   # Providers (SessionProvider + SyncIdentity), SignInButton
    Reveal.tsx, Icon.tsx, Share.tsx, ui/*
```

---

## 6. Data model (libSQL / SQLite dialect, created in `src/lib/db.ts → ensureSchema`)

- **nominees**: id, portfolio_slug, name, headline, bio, achievements(JSON), why, upvotes, downvotes, is_seed, status, created_at. Unique index `(portfolio_slug, lower(name))`.
- **nominee_votes**: (nominee_id, voter_key) PK, value ±1. Toggle logic in `applyVote()`.
- **comments**: id, portfolio_slug, nominee_id (null = ministry channel), parent_id (null = top-level), author_name, author_kind ('anon'|'google'), voter_key, body, upvotes, downvotes, reports, status, created_at.
- **comment_votes**: (comment_id, voter_key) PK, value ±1.

Seeding merges `cabinet.ts` seed nominees with `profiles.ts` on first run if the table is empty.

---

## 7. Identity & security model (READ before touching auth/voting)

- **Anonymous** = a random per-browser device UUID in localStorage (`src/lib/voter.ts`). Spoofable among anons (random, not guessable → no practical attack). This is an accepted tradeoff.
- **Signed-in (Google)** = server-derived key `user:<email>` + verified display name. The `user:` namespace is **server-only**.
- **Hardening already applied (do not regress):**
  - `authorKind` is **never** accepted from the client — server derives it from the session (`src/lib/schema.ts` comment schema omits it).
  - `isForgedUserKey()` rejects any client-supplied `user:*` key when there is no session — enforced in `/api/vote`, `/api/comments/vote`, `/api/comments`.
  - Verified comments use the **session's** name, never a client-supplied name.
  - The "verified" badge in `Discussion` renders only for server-set `authorKind === 'google'`.
- **Planned hardening (not blocking launch):** HMAC-signed `httpOnly` cookie for the anonymous voter key; shared rate-limit store (Upstash) instead of the in-memory `ratelimit.ts`.

---

## 8. Environment variables (see `.env.example`)

| Var | When | Notes |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | prod | OG tags + share links, no trailing slash |
| `TURSO_DATABASE_URL`, `TURSO_AUTH_TOKEN` | **prod (required)** | Vercel is serverless — `local.db` will NOT persist. Create a DB at turso.tech |
| `AUTH_SECRET`, `AUTH_GOOGLE_ID`, `AUTH_GOOGLE_SECRET` | optional | Google sign-in. Redirect URI: `https://DOMAIN/api/auth/callback/google` |
| `NEXT_PUBLIC_AUTH_ENABLED=true` | with the 3 above | Exposes the sign-in UI + mounts SessionProvider |
| `ADMIN_KEY` | optional | Unlocks `/admin` moderation |

With **none** set, the site runs fully anonymous with zero errors.

---

## 9. What's DONE
Manifesto homepage; 12-ministry cabinet; nominee profiles; ministry channels; nominee + comment up/down voting; anonymous + signed-in discussion; nested replies; Top/Newest sort; reporting + auto-hide; `/admin` moderation; `/sortition` (interactive chamber + 9 FAQs + precedents); `/end-goal` (gated, roadmap, parliament); Google auth (graceful); per-page OG cards; security hardening (§7). Build + ESLint clean. Verified locally end-to-end.

## 10. What's LEFT

**To go live (user-owned, parallel):**
1. `vercel login` → `vercel --prod`
2. Create **Turso** DB → set `TURSO_*` env → redeploy (REQUIRED for persistence)
3. Register domain (anchor pick: `apnisarkar.in`) → add in Vercel → set `NEXT_PUBLIC_SITE_URL`
4. (Optional) Google OAuth creds → set `AUTH_*` + `NEXT_PUBLIC_AUTH_ENABLED=true`
5. (Optional) `ADMIN_KEY` for moderation
6. **Content review** — read `cabinet.ts`, `profiles.ts`, `sortition.ts`, `endgoal.ts`; swap any names/claims you're unsure about.

**Engineering backlog (nice-to-have):**
- HMAC/httpOnly-cookie anon keys + Upstash rate-limit (see §7)
- Real-time comment updates; multi-level nested replies; comment pagination
- Nominee profile images; Hindi (Devanagari) i18n toggle; phone-OTP as an alternative login
- Tests (none yet) — unit for `db.ts` vote-toggle + API integration

## 11. Gotchas
- **Scroll-reveal** (`.reveal` + `js` class on `<html>`) hides off-screen content until scrolled — a *full-page* screenshot shows below-fold sections blank; scroll the element into view to verify. Content is visible without JS (progressive enhancement) for SEO/crawlers.
- **`next/og` (satori)**: any element with >1 child needs explicit `display:flex`; keep text nodes single. See `src/lib/og.tsx`.
- **Dev console** shows one harmless 404 for `/_vercel/insights` (Analytics only resolves on Vercel).
- Dynamic route `params` is a Promise in Next 16.

## 12. Pointers
- Plan file: `/Users/smochan/.claude/plans/uh-i-was-also-lucky-umbrella.md`
- Launch/social pack: `docs/launch-pack.md` (founder pitch, IG/X/WhatsApp posts, reel concept)
- Full decision + build history is in dev-assistant memory (scope `ideas`, tags `apni-sarkar`/`cjp`): idea discussion → pivot to Dream Cabinet → community v1 → Phase 3 vision/auth → security fix.

## 13. Context for the next model
- The user is moving fast toward a CJP protest in Pune; wants something live + shareable. They handle prod/login/deploy/domain; you build features.
- They explicitly chose: public nomination (not appointments); reform-proposal framing (not insurrection); build-everything-tonight pace; interactive chamber over static.
- Match the existing editorial design system and the non-partisan, aspirational voice. Keep the security model in §7 intact.

## 14. NORTH STAR — elevate this from demo to a serious national plan

The user's intent for the next phase: **this is no longer a hobby/demo. It should become a full-fledged, credible, evidence-based program for how India can actually improve** — with the sortition reform argument and the per-sector plans treated as serious policy work, not placeholder copy.

**Quality bar (critical — this is what separates "taken seriously" from "dismissed as fringe"):**
- **Evidence-based & sourced.** Every claim, statistic, and target should be grounded in real data (Census, NSSO/PLFS, NITI Aayog, RBI, World Bank, OECD, peer-reviewed work) with citations. Use research tools (web search, deep-research). Do NOT invent numbers — the current `plan.ts`/`profiles.ts`/`sortition.ts` copy is first-draft and must be upgraded to sourced material.
- **Benchmarked.** Compare against what actually worked elsewhere (e.g. citizens' assemblies in Ireland/France/OECD; specific Indian state reforms; comparable-country outcomes).
- **Intellectually honest.** State assumptions, trade-offs, failure modes, and uncertainty explicitly. Distinguish "evidence shows" from "we propose / we believe." A credible plan names its own weaknesses.
- **Non-partisan & lawful** (keep §1 framing + §7 security intact). Reform via legitimate constitutional means only.
- **Actionable.** Real theory of change per sector: problem → intervention → mechanism → measurable target → who does it → cost/feasibility → risks. Not vibes.

**Suggested approach for the next session (do NOT just start coding):**
1. Read this whole HANDOFF, run the app, skim the content files.
2. **Research & plan first.** Consider a multi-agent workflow: one researcher per ministry/sector producing a sourced brief (current state, root causes, what's worked, realistic 5-year targets, costs, risks), plus a dedicated researcher hardening the sortition argument with real deliberative-democracy scholarship and Indian constitutional feasibility (panchayat → national path, which articles/amendments it implicates).
3. Synthesize into upgraded `content/*` (sourced, cited) + likely new per-sector deep-dive pages, a sources/methodology page, and a stronger `/end-goal` feasibility section.
4. Then build the product surfaces for that depth. Keep the existing design system + community + security.
5. Get the user to choose scope/sectors to prioritize; keep them in the loop between research and build.

**Open questions to put to the user early:** which sectors to go deep on first; how academic vs. accessible the tone should be; whether to add a public "sources & methodology" page; whether to keep it India-only or include comparative international sections; how much to lean on the sortition end-goal vs. the near-term sector plans.

> The user described wanting "the crazy version" — interpret that as *maximally ambitious in rigor and depth*, not maximally grandiose in claims. Depth and credibility are the wow factor here.
