import { createClient, type Client } from "@libsql/client";
import { portfolios } from "@/content/cabinet";
import { profiles } from "@/content/profiles";
import { nomineeImages } from "@/content/nomineeImages";

// --- types ---------------------------------------------------------------

export type NomineeRow = {
  id: number;
  portfolioSlug: string;
  name: string;
  headline: string;
  bio: string;
  achievements: string[];
  why: string;
  image: string; // portrait URL ("" if none)
  imageAttribution: string;
  imageLicense: string;
  sourceUrl: string; // reference (e.g. Wikipedia page)
  upvotes: number;
  downvotes: number;
  score: number;
  isSeed: boolean;
  status: string; // 'visible' | 'hidden'
  myVote: number; // -1 | 0 | 1
};

// AI-researched profile draft awaiting admin review (never auto-published).
export type DraftRow = {
  id: number;
  nomineeId: number;
  nomineeName: string;
  nomineeImage: string;
  portfolioSlug: string;
  bio: string;
  achievements: string[];
  why: string;
  sourceUrls: string[];
  model: string;
  status: string; // 'pending' | 'approved' | 'rejected'
  createdAt: string;
};

export type CommentRow = {
  id: number;
  portfolioSlug: string;
  nomineeId: number | null;
  parentId: number | null;
  authorName: string;
  authorKind: string; // 'anon' | 'google'
  body: string;
  upvotes: number;
  downvotes: number;
  score: number;
  createdAt: string;
  myVote: number;
  reports: number;
  status: string;
};

export type Tally = Record<string, NomineeRow[]>;

// --- client --------------------------------------------------------------

let client: Client | null = null;

function db(): Client {
  if (client) return client;
  const url =
    process.env.TURSO_DATABASE_URL ||
    process.env.DATABASE_URL ||
    "file:local.db";
  const authToken =
    process.env.TURSO_AUTH_TOKEN || process.env.DATABASE_AUTH_TOKEN;
  client = createClient({ url, authToken });
  return client;
}

let schemaReady = false;

async function ensureSchema(): Promise<void> {
  if (schemaReady) return;
  const c = db();
  await c.batch(
    [
      `CREATE TABLE IF NOT EXISTS nominees (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        portfolio_slug TEXT NOT NULL,
        name TEXT NOT NULL,
        headline TEXT NOT NULL DEFAULT '',
        bio TEXT NOT NULL DEFAULT '',
        achievements TEXT NOT NULL DEFAULT '[]',
        why TEXT NOT NULL DEFAULT '',
        image TEXT NOT NULL DEFAULT '',
        image_attribution TEXT NOT NULL DEFAULT '',
        image_license TEXT NOT NULL DEFAULT '',
        source_url TEXT NOT NULL DEFAULT '',
        upvotes INTEGER NOT NULL DEFAULT 0,
        downvotes INTEGER NOT NULL DEFAULT 0,
        is_seed INTEGER NOT NULL DEFAULT 0,
        status TEXT NOT NULL DEFAULT 'visible',
        created_at TEXT NOT NULL DEFAULT (datetime('now'))
      )`,
      `CREATE UNIQUE INDEX IF NOT EXISTS nominees_slug_name
        ON nominees(portfolio_slug, lower(name))`,
      `CREATE TABLE IF NOT EXISTS nominee_drafts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nominee_id INTEGER NOT NULL,
        bio TEXT NOT NULL DEFAULT '',
        achievements TEXT NOT NULL DEFAULT '[]',
        why TEXT NOT NULL DEFAULT '',
        source_urls TEXT NOT NULL DEFAULT '[]',
        model TEXT NOT NULL DEFAULT '',
        status TEXT NOT NULL DEFAULT 'pending',
        created_at TEXT NOT NULL DEFAULT (datetime('now'))
      )`,
      `CREATE INDEX IF NOT EXISTS nominee_drafts_status
        ON nominee_drafts(status, created_at)`,
      `CREATE TABLE IF NOT EXISTS nominee_votes (
        nominee_id INTEGER NOT NULL,
        voter_key TEXT NOT NULL,
        value INTEGER NOT NULL,
        created_at TEXT NOT NULL DEFAULT (datetime('now')),
        PRIMARY KEY (nominee_id, voter_key)
      )`,
      `CREATE TABLE IF NOT EXISTS comments (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        portfolio_slug TEXT NOT NULL,
        nominee_id INTEGER,
        parent_id INTEGER,
        author_name TEXT NOT NULL DEFAULT 'Anonymous',
        author_kind TEXT NOT NULL DEFAULT 'anon',
        voter_key TEXT NOT NULL DEFAULT '',
        body TEXT NOT NULL,
        upvotes INTEGER NOT NULL DEFAULT 0,
        downvotes INTEGER NOT NULL DEFAULT 0,
        reports INTEGER NOT NULL DEFAULT 0,
        status TEXT NOT NULL DEFAULT 'visible',
        created_at TEXT NOT NULL DEFAULT (datetime('now'))
      )`,
      `CREATE INDEX IF NOT EXISTS comments_channel
        ON comments(portfolio_slug, nominee_id, created_at)`,
      `CREATE TABLE IF NOT EXISTS comment_votes (
        comment_id INTEGER NOT NULL,
        voter_key TEXT NOT NULL,
        value INTEGER NOT NULL,
        created_at TEXT NOT NULL DEFAULT (datetime('now')),
        PRIMARY KEY (comment_id, voter_key)
      )`,
      `CREATE TABLE IF NOT EXISTS comment_reports (
        comment_id INTEGER NOT NULL,
        voter_key  TEXT NOT NULL,
        created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ','now')),
        PRIMARY KEY (comment_id, voter_key)
      )`,
    ],
    "write"
  );
  await migrateColumns();
  schemaReady = true;
  await seedIfEmpty();
}

// Add columns that may be missing on a pre-existing nominees table
// (CREATE TABLE IF NOT EXISTS won't alter an existing table).
async function migrateColumns(): Promise<void> {
  const c = db();
  const info = await c.execute("PRAGMA table_info(nominees)");
  const have = new Set(info.rows.map((r) => String(r.name)));
  const wanted: Array<[string, string]> = [
    ["image", "TEXT NOT NULL DEFAULT ''"],
    ["image_attribution", "TEXT NOT NULL DEFAULT ''"],
    ["image_license", "TEXT NOT NULL DEFAULT ''"],
    ["source_url", "TEXT NOT NULL DEFAULT ''"],
  ];
  for (const [col, def] of wanted) {
    if (!have.has(col)) {
      await c.execute(`ALTER TABLE nominees ADD COLUMN ${col} ${def}`);
    }
  }
}

function profileFor(slug: string, name: string) {
  return profiles.find(
    (p) => p.slug === slug && p.name.toLowerCase() === name.toLowerCase()
  );
}

async function seedIfEmpty(): Promise<void> {
  const c = db();
  const { rows } = await c.execute("SELECT count(*) AS n FROM nominees");
  if (Number(rows[0]?.n ?? 0) > 0) return;

  const stmts = [];
  for (const p of portfolios) {
    for (const n of p.seedNominees) {
      const prof = profileFor(p.slug, n.name);
      const img = nomineeImages[n.name];
      stmts.push({
        sql: `INSERT INTO nominees
                (portfolio_slug, name, headline, bio, achievements, why,
                 image, image_attribution, image_license, source_url, is_seed)
              VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1)
              ON CONFLICT (portfolio_slug, lower(name)) DO NOTHING`,
        args: [
          p.slug,
          n.name,
          n.note,
          prof?.bio ?? "",
          JSON.stringify(prof?.achievements ?? []),
          prof?.why ?? "",
          img?.image ?? "",
          img?.imageAttribution ?? "",
          img?.imageLicense ?? "",
          img?.sourceUrl ?? "",
        ],
      });
    }
  }
  if (stmts.length) await c.batch(stmts, "write");
}

// --- mapping -------------------------------------------------------------

type RawNominee = Record<string, unknown>;

function mapNominee(r: RawNominee, myVote = 0): NomineeRow {
  let achievements: string[] = [];
  try {
    achievements = JSON.parse(String(r.achievements ?? "[]"));
  } catch {
    achievements = [];
  }
  const upvotes = Number(r.upvotes ?? 0);
  const downvotes = Number(r.downvotes ?? 0);
  return {
    id: Number(r.id),
    portfolioSlug: String(r.portfolio_slug),
    name: String(r.name),
    headline: String(r.headline ?? ""),
    bio: String(r.bio ?? ""),
    achievements,
    why: String(r.why ?? ""),
    image: String(r.image ?? ""),
    imageAttribution: String(r.image_attribution ?? ""),
    imageLicense: String(r.image_license ?? ""),
    sourceUrl: String(r.source_url ?? ""),
    upvotes,
    downvotes,
    score: upvotes - downvotes,
    isSeed: Boolean(r.is_seed),
    status: String(r.status ?? "visible"),
    myVote: Number(r.my_vote ?? myVote),
  };
}

function mapComment(r: RawNominee): CommentRow {
  const upvotes = Number(r.upvotes ?? 0);
  const downvotes = Number(r.downvotes ?? 0);
  return {
    id: Number(r.id),
    portfolioSlug: String(r.portfolio_slug),
    nomineeId: r.nominee_id == null ? null : Number(r.nominee_id),
    parentId: r.parent_id == null ? null : Number(r.parent_id),
    authorName: String(r.author_name ?? "Anonymous"),
    authorKind: String(r.author_kind ?? "anon"),
    body: String(r.body ?? ""),
    upvotes,
    downvotes,
    score: upvotes - downvotes,
    createdAt: String(r.created_at ?? ""),
    myVote: Number(r.my_vote ?? 0),
    reports: Number(r.reports ?? 0),
    status: String(r.status ?? "visible"),
  };
}

// --- nominees ------------------------------------------------------------

export async function getTally(voterKey = ""): Promise<Tally> {
  await ensureSchema();
  const { rows } = await db().execute({
    sql: `SELECT n.*, COALESCE(v.value, 0) AS my_vote
          FROM nominees n
          LEFT JOIN nominee_votes v
            ON v.nominee_id = n.id AND v.voter_key = ?
          WHERE n.status = 'visible'
          ORDER BY (n.upvotes - n.downvotes) DESC, n.is_seed DESC, n.created_at ASC`,
    args: [voterKey],
  });
  const tally: Tally = {};
  for (const p of portfolios) tally[p.slug] = [];
  for (const r of rows as unknown as RawNominee[]) {
    const row = mapNominee(r);
    (tally[row.portfolioSlug] ??= []).push(row);
  }
  return tally;
}

export async function getNominee(
  id: number,
  voterKey = ""
): Promise<NomineeRow | null> {
  await ensureSchema();
  const { rows } = await db().execute({
    sql: `SELECT n.*, COALESCE(v.value, 0) AS my_vote
          FROM nominees n
          LEFT JOIN nominee_votes v
            ON v.nominee_id = n.id AND v.voter_key = ?
          WHERE n.id = ? AND n.status = 'visible'`,
    args: [voterKey, id],
  });
  return rows[0] ? mapNominee(rows[0] as unknown as RawNominee) : null;
}

export async function addNominee(
  portfolioSlug: string,
  name: string,
  headline: string
): Promise<NomineeRow | null> {
  await ensureSchema();
  const c = db();
  await c.execute({
    sql: `INSERT INTO nominees (portfolio_slug, name, headline)
          VALUES (?, ?, ?)
          ON CONFLICT (portfolio_slug, lower(name)) DO NOTHING`,
    args: [portfolioSlug, name.trim(), headline],
  });
  const { rows } = await c.execute({
    sql: `SELECT * FROM nominees
          WHERE portfolio_slug = ? AND lower(name) = lower(?) LIMIT 1`,
    args: [portfolioSlug, name.trim()],
  });
  return rows[0] ? mapNominee(rows[0] as unknown as RawNominee) : null;
}

// --- voting (shared toggle logic) ---------------------------------------

type VoteResult = { upvotes: number; downvotes: number; myVote: number };

async function applyVote(
  votesTable: "nominee_votes" | "comment_votes",
  ownerTable: "nominees" | "comments",
  idCol: "nominee_id" | "comment_id",
  id: number,
  voterKey: string,
  value: 1 | -1
): Promise<VoteResult | null> {
  const c = db();
  const existing = await c.execute({
    sql: `SELECT value FROM ${votesTable} WHERE ${idCol} = ? AND voter_key = ?`,
    args: [id, voterKey],
  });
  const prev = existing.rows[0]
    ? Number(existing.rows[0].value)
    : undefined;

  let up = 0;
  let down = 0;
  let myVote: number = value;

  if (prev === undefined) {
    await c.execute({
      sql: `INSERT INTO ${votesTable} (${idCol}, voter_key, value) VALUES (?, ?, ?)`,
      args: [id, voterKey, value],
    });
    if (value === 1) up = 1;
    else down = 1;
  } else if (prev === value) {
    await c.execute({
      sql: `DELETE FROM ${votesTable} WHERE ${idCol} = ? AND voter_key = ?`,
      args: [id, voterKey],
    });
    if (value === 1) up = -1;
    else down = -1;
    myVote = 0;
  } else {
    await c.execute({
      sql: `UPDATE ${votesTable} SET value = ? WHERE ${idCol} = ? AND voter_key = ?`,
      args: [value, id, voterKey],
    });
    if (value === 1) {
      up = 1;
      down = -1;
    } else {
      up = -1;
      down = 1;
    }
  }

  const res = await c.execute({
    sql: `UPDATE ${ownerTable} SET upvotes = upvotes + ?, downvotes = downvotes + ?
          WHERE id = ? RETURNING upvotes, downvotes`,
    args: [up, down, id],
  });
  if (!res.rows[0]) return null;
  return {
    upvotes: Number(res.rows[0].upvotes),
    downvotes: Number(res.rows[0].downvotes),
    myVote,
  };
}

// Nominees whose net score falls to this or below are auto-hidden from public
// view (the community has decisively rejected them). Reversible by an admin.
const AUTO_HIDE_SCORE = -10;

export async function voteNominee(
  id: number,
  voterKey: string,
  value: 1 | -1
): Promise<VoteResult | null> {
  await ensureSchema();
  const res = await applyVote(
    "nominee_votes",
    "nominees",
    "nominee_id",
    id,
    voterKey,
    value
  );
  if (res && res.upvotes - res.downvotes <= AUTO_HIDE_SCORE) {
    await db().execute({
      sql: `UPDATE nominees SET status = 'hidden' WHERE id = ? AND status = 'visible'`,
      args: [id],
    });
  }
  return res;
}

export async function voteComment(
  id: number,
  voterKey: string,
  value: 1 | -1
): Promise<VoteResult | null> {
  await ensureSchema();
  return applyVote("comment_votes", "comments", "comment_id", id, voterKey, value);
}

// --- comments ------------------------------------------------------------

export async function listComments(
  portfolioSlug: string,
  nomineeId: number | null,
  voterKey = "",
  order: "top" | "new" = "top"
): Promise<CommentRow[]> {
  await ensureSchema();
  const orderSql =
    order === "new"
      ? "c.created_at DESC"
      : "(c.upvotes - c.downvotes) DESC, c.created_at DESC";
  const { rows } = await db().execute({
    sql: `SELECT c.*, COALESCE(v.value, 0) AS my_vote
          FROM comments c
          LEFT JOIN comment_votes v
            ON v.comment_id = c.id AND v.voter_key = ?
          WHERE c.portfolio_slug = ?
            AND c.nominee_id IS ?
            AND c.status = 'visible'
          ORDER BY ${orderSql}
          LIMIT 400`,
    args: [voterKey, portfolioSlug, nomineeId],
  });
  return (rows as unknown as RawNominee[]).map(mapComment);
}

export async function addComment(args: {
  portfolioSlug: string;
  nomineeId: number | null;
  parentId?: number | null;
  body: string;
  authorName: string;
  authorKind: string;
  voterKey: string;
}): Promise<CommentRow | null> {
  await ensureSchema();
  const res = await db().execute({
    sql: `INSERT INTO comments
            (portfolio_slug, nominee_id, parent_id, body, author_name, author_kind, voter_key)
          VALUES (?, ?, ?, ?, ?, ?, ?)
          RETURNING *`,
    args: [
      args.portfolioSlug,
      args.nomineeId,
      args.parentId ?? null,
      args.body.trim(),
      args.authorName,
      args.authorKind,
      args.voterKey,
    ],
  });
  const row = res.rows[0] as unknown as RawNominee | undefined;
  return row ? mapComment(row) : null;
}

const REPORT_HIDE_THRESHOLD = 4;

export async function reportComment(id: number, voterKey: string): Promise<boolean> {
  await ensureSchema();
  const c = db();
  const insert = await c.execute({
    sql: `INSERT INTO comment_reports (comment_id, voter_key) VALUES (?, ?)
          ON CONFLICT DO NOTHING`,
    args: [id, voterKey],
  });
  if (!insert.rowsAffected) return false;
  await c.execute({
    sql: `UPDATE comments
          SET reports = reports + 1,
              status = CASE WHEN reports + 1 >= ? THEN 'flagged' ELSE status END
          WHERE id = ?`,
    args: [REPORT_HIDE_THRESHOLD, id],
  });
  return true;
}

// --- moderation ----------------------------------------------------------

export async function listForModeration(): Promise<CommentRow[]> {
  await ensureSchema();
  const { rows } = await db().execute(
    `SELECT c.*, 0 AS my_vote
     FROM comments c
     ORDER BY (c.status = 'flagged') DESC, c.reports DESC, c.created_at DESC
     LIMIT 300`
  );
  return (rows as unknown as RawNominee[]).map(mapComment);
}

export async function setCommentStatus(
  id: number,
  status: "visible" | "flagged" | "hidden"
): Promise<boolean> {
  await ensureSchema();
  const reset = status === "visible" ? 0 : undefined;
  const res =
    reset === 0
      ? await db().execute({
          sql: `UPDATE comments SET status = ?, reports = 0 WHERE id = ? RETURNING id`,
          args: [status, id],
        })
      : await db().execute({
          sql: `UPDATE comments SET status = ? WHERE id = ? RETURNING id`,
          args: [status, id],
        });
  return Boolean(res.rows[0]);
}

export async function deleteComment(id: number): Promise<boolean> {
  await ensureSchema();
  const res = await db().execute({
    sql: `DELETE FROM comments WHERE id = ? RETURNING id`,
    args: [id],
  });
  return Boolean(res.rows[0]);
}

// --- AI profile drafts (review queue) ------------------------------------

function jsonArray(v: unknown): string[] {
  try {
    const parsed = JSON.parse(String(v ?? "[]"));
    return Array.isArray(parsed) ? parsed.map(String) : [];
  } catch {
    return [];
  }
}

function mapDraft(r: RawNominee): DraftRow {
  return {
    id: Number(r.id),
    nomineeId: Number(r.nominee_id),
    nomineeName: String(r.nominee_name ?? ""),
    nomineeImage: String(r.nominee_image ?? ""),
    portfolioSlug: String(r.portfolio_slug ?? ""),
    bio: String(r.bio ?? ""),
    achievements: jsonArray(r.achievements),
    why: String(r.why ?? ""),
    sourceUrls: jsonArray(r.source_urls),
    model: String(r.model ?? ""),
    status: String(r.status ?? "pending"),
    createdAt: String(r.created_at ?? ""),
  };
}

/** Does this nominee already have a published (non-empty) profile? */
export async function nomineeHasProfile(id: number): Promise<boolean> {
  await ensureSchema();
  const { rows } = await db().execute({
    sql: `SELECT bio FROM nominees WHERE id = ?`,
    args: [id],
  });
  return Boolean(rows[0] && String(rows[0].bio ?? "").trim().length > 0);
}

export async function createDraft(args: {
  nomineeId: number;
  bio: string;
  achievements: string[];
  why: string;
  sourceUrls: string[];
  model: string;
}): Promise<number | null> {
  await ensureSchema();
  // Idempotent: if a pending draft already exists for this nominee, reuse it
  // (re-nominating the same person must not pile up duplicate review items).
  const existing = await db().execute({
    sql: `SELECT id FROM nominee_drafts WHERE nominee_id = ? AND status = 'pending' LIMIT 1`,
    args: [args.nomineeId],
  });
  if (existing.rows[0]) return Number(existing.rows[0].id);

  const res = await db().execute({
    sql: `INSERT INTO nominee_drafts
            (nominee_id, bio, achievements, why, source_urls, model)
          VALUES (?, ?, ?, ?, ?, ?) RETURNING id`,
    args: [
      args.nomineeId,
      args.bio,
      JSON.stringify(args.achievements ?? []),
      args.why,
      JSON.stringify(args.sourceUrls ?? []),
      args.model,
    ],
  });
  return res.rows[0] ? Number(res.rows[0].id) : null;
}

/** Set a nominee's portrait (from AI research; same Wikipedia subject as the bio). */
export async function setNomineeImage(
  id: number,
  image: string,
  imageAttribution: string,
  imageLicense: string,
  sourceUrl: string
): Promise<void> {
  await ensureSchema();
  await db().execute({
    sql: `UPDATE nominees
          SET image = ?, image_attribution = ?, image_license = ?, source_url = ?
          WHERE id = ?`,
    args: [image, imageAttribution, imageLicense, sourceUrl, id],
  });
}

export async function listPendingDrafts(): Promise<DraftRow[]> {
  await ensureSchema();
  const { rows } = await db().execute(
    `SELECT d.*, n.name AS nominee_name, n.image AS nominee_image,
            n.portfolio_slug AS portfolio_slug
     FROM nominee_drafts d
     JOIN nominees n ON n.id = d.nominee_id
     WHERE d.status = 'pending'
     ORDER BY d.created_at ASC
     LIMIT 200`
  );
  return (rows as unknown as RawNominee[]).map(mapDraft);
}

/** Publish an (optionally edited) draft onto its nominee row. */
export async function approveDraft(
  id: number,
  edited?: { bio: string; achievements: string[]; why: string }
): Promise<boolean> {
  await ensureSchema();
  const c = db();
  const { rows } = await c.execute({
    sql: `SELECT * FROM nominee_drafts WHERE id = ? AND status = 'pending'`,
    args: [id],
  });
  if (!rows[0]) return false;
  const d = mapDraft(rows[0] as unknown as RawNominee);
  const bio = edited?.bio ?? d.bio;
  const achievements = edited?.achievements ?? d.achievements;
  const why = edited?.why ?? d.why;
  await c.batch(
    [
      {
        sql: `UPDATE nominees SET bio = ?, achievements = ?, why = ? WHERE id = ?`,
        args: [bio, JSON.stringify(achievements), why, d.nomineeId],
      },
      {
        sql: `UPDATE nominee_drafts SET status = 'approved' WHERE id = ?`,
        args: [id],
      },
    ],
    "write"
  );
  return true;
}

export async function rejectDraft(id: number): Promise<boolean> {
  await ensureSchema();
  const res = await db().execute({
    sql: `UPDATE nominee_drafts SET status = 'rejected' WHERE id = ? RETURNING id`,
    args: [id],
  });
  return Boolean(res.rows[0]);
}

// --- nominee moderation --------------------------------------------------

/** All nominees (any status), worst score first — for the admin screen. */
export async function listNomineesForModeration(): Promise<NomineeRow[]> {
  await ensureSchema();
  const { rows } = await db().execute(
    `SELECT n.*, 0 AS my_vote
     FROM nominees n
     ORDER BY (n.status = 'hidden') DESC, (n.upvotes - n.downvotes) ASC, n.name ASC
     LIMIT 600`
  );
  return (rows as unknown as RawNominee[]).map((r) => mapNominee(r));
}

/** Temporarily hide / restore a nominee. */
export async function setNomineeStatus(
  id: number,
  status: "visible" | "hidden"
): Promise<boolean> {
  await ensureSchema();
  const res = await db().execute({
    sql: `UPDATE nominees SET status = ? WHERE id = ? RETURNING id`,
    args: [status, id],
  });
  return Boolean(res.rows[0]);
}

/** Permanently delete a nominee and its votes + drafts. */
export async function deleteNominee(id: number): Promise<boolean> {
  await ensureSchema();
  const res = await db().batch(
    [
      { sql: `DELETE FROM nominee_votes WHERE nominee_id = ?`, args: [id] },
      { sql: `DELETE FROM nominee_drafts WHERE nominee_id = ?`, args: [id] },
      { sql: `DELETE FROM nominees WHERE id = ? RETURNING id`, args: [id] },
    ],
    "write"
  );
  return Boolean(res[2]?.rows?.[0]);
}
