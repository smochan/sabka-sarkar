# Go-Live Runbook — turning on voting, nominations & comments

The site ships in **concept mode** (read-only): `NEXT_PUBLIC_INTERACTIVE` is unset, so
all vote / nominate / comment UI is gated off (`src/lib/flags.ts`). No database is
required to run the marketing site. Follow this when you're ready to make it interactive.

> All steps below are **infra you own** — they involve creating a database and setting
> secrets on Vercel. The application code is already wired for them.

## 1. Create a database (Turso / libSQL — free tier)

```bash
# install once
brew install tursodatabase/tap/turso   # or: curl -sSfL https://get.tur.so/install.sh | bash
turso auth login

turso db create sabka-sarkar
turso db show sabka-sarkar --url            # -> TURSO_DATABASE_URL  (libsql://...)
turso db tokens create sabka-sarkar         # -> TURSO_AUTH_TOKEN
```

The schema (nominees, votes, comments, drafts) is created automatically on first
request; seed nominees load from `src/content/cabinet.ts` + `profiles.ts`.

## 2. Set environment variables on Vercel

Project → Settings → Environment Variables → **Production** (and Preview if wanted):

| Var | Value | Purpose |
|-----|-------|---------|
| `NEXT_PUBLIC_INTERACTIVE` | `true` | Unhides voting / nominate / comments |
| `TURSO_DATABASE_URL` | `libsql://…` | Database |
| `TURSO_AUTH_TOKEN` | `…` | Database auth |
| `ADMIN_KEY` | a long random string | Unlocks `/admin` moderation + AI-draft review |
| `AI_GATEWAY_API_KEY` | from Vercel AI Gateway | AI nominee research (see Phase 2) — optional until you enable that feature |

## 3. Redeploy

Trigger a production redeploy (push to `main`, or Vercel → Deployments → Redeploy).
On the first visit to `/api/tally`, the DB self-initialises and seeds.

## 4. Verify

- Open the site → vote buttons are now active (not greyed "opens at launch").
- Cast a vote → reload → it persists.
- `/admin` → enter `ADMIN_KEY` → moderation + AI-draft queue load.

## Local development

Interactive features work locally with zero cloud setup — they fall back to a
`local.db` SQLite file:

```bash
echo 'NEXT_PUBLIC_INTERACTIVE=true' >> .env.local
npm run dev          # creates ./local.db on first API hit
```

Reset local data: `rm -f local.db` and restart.

## Notes / gotchas

- Vercel serverless has an **ephemeral** filesystem — `local.db` will NOT persist in
  production. Turso is required for prod persistence.
- The anonymous voter key is a per-browser UUID (best-effort dedupe). Phone-OTP /
  HMAC-cookie hardening is a future item (see project HANDOFF §7).
- Turning `NEXT_PUBLIC_INTERACTIVE=true` **without** the `TURSO_*` vars in production
  will surface DB errors — set them together.
