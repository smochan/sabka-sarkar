"use client";

import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type ModComment = {
  id: number;
  portfolioSlug: string;
  nomineeId: number | null;
  authorName: string;
  body: string;
  upvotes: number;
  downvotes: number;
  reports: number;
  status: string;
  createdAt: string;
};

type Draft = {
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
  createdAt: string;
};

const KEY = "apni-sarkar:adminKey";

export default function AdminPage() {
  const [key, setKey] = useState("");
  const [authed, setAuthed] = useState(false);
  const [comments, setComments] = useState<ModComment[]>([]);
  const [drafts, setDrafts] = useState<Draft[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const load = useCallback(async (k: string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/comments", {
        headers: { "x-admin-key": k },
      });
      const json = await res.json();
      if (!res.ok || !json.success) throw new Error(json.error ?? "Failed");
      setComments(json.data as ModComment[]);
      setAuthed(true);
      window.localStorage.setItem(KEY, k);
      // load AI-profile drafts too (best-effort)
      try {
        const dres = await fetch("/api/admin/drafts", { headers: { "x-admin-key": k } });
        const djson = await dres.json();
        if (dres.ok && djson.success) setDrafts(djson.data as Draft[]);
      } catch {
        /* ignore */
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed");
      setAuthed(false);
    } finally {
      setLoading(false);
    }
  }, []);

  async function actDraft(
    id: number,
    action: "approve" | "reject",
    edited?: { bio: string; achievements: string[]; why: string }
  ) {
    await fetch("/api/admin/drafts", {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-admin-key": key },
      body: JSON.stringify({ id, action, ...edited }),
    });
    load(key);
  }

  useEffect(() => {
    const saved = window.localStorage.getItem(KEY);
    if (saved) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- restore saved admin key on mount
      setKey(saved);
      load(saved);
    }
  }, [load]);

  async function act(id: number, action: string) {
    await fetch("/api/admin/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-admin-key": key },
      body: JSON.stringify({ id, action }),
    });
    load(key);
  }

  if (!authed) {
    return (
      <main className="container-wide flex min-h-screen flex-col items-center justify-center">
        <div className="w-full max-w-sm rounded-xl border border-border bg-card p-6">
          <h1 className="font-display text-2xl text-ink">Moderation</h1>
          <p className="mt-1 text-sm text-ink-faint">Enter the admin key.</p>
          <input
            type="password"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && load(key)}
            className="mt-4 w-full rounded-md border border-input bg-paper px-3 py-2 text-ink outline-none focus:border-saffron"
            placeholder="ADMIN_KEY"
          />
          <button
            type="button"
            onClick={() => load(key)}
            disabled={loading}
            className="mt-3 inline-flex h-10 w-full items-center justify-center rounded-md bg-ink text-sm font-semibold text-paper disabled:opacity-60"
          >
            {loading ? "Checking…" : "Unlock"}
          </button>
          {error && <p className="mt-3 text-sm text-destructive">{error}</p>}
        </div>
      </main>
    );
  }

  return (
    <main className="container-wide py-10">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="font-display text-3xl text-ink">Moderation</h1>
        <span className="text-sm text-ink-faint">
          {drafts.length} AI drafts · {comments.length} comments
        </span>
      </div>

      {/* AI profile drafts awaiting review */}
      <section className="mb-10">
        <h2 className="mb-3 font-display text-2xl text-ink">
          AI profile drafts — review before publishing
        </h2>
        {drafts.length === 0 ? (
          <p className="text-sm text-ink-faint">No drafts pending.</p>
        ) : (
          <ul className="space-y-4">
            {drafts.map((d) => (
              <DraftCard
                key={d.id}
                draft={d}
                onApprove={(edited) => actDraft(d.id, "approve", edited)}
                onReject={() => actDraft(d.id, "reject")}
              />
            ))}
          </ul>
        )}
      </section>

      <h2 className="mb-3 font-display text-2xl text-ink">Comments</h2>
      <ul className="space-y-3">
        {comments.map((c) => (
          <li
            key={c.id}
            className={cn(
              "rounded-xl border p-4",
              c.status === "visible"
                ? "border-border bg-card"
                : "border-destructive/40 bg-destructive/5"
            )}
          >
            <div className="flex items-center gap-2 text-xs text-ink-faint">
              <span className="font-semibold text-ink-soft">{c.authorName}</span>
              <span>·</span>
              <span>{c.portfolioSlug}</span>
              {c.nomineeId && <span>· nominee #{c.nomineeId}</span>}
              <span>·</span>
              <span>▲{c.upvotes} ▼{c.downvotes}</span>
              {c.reports > 0 && (
                <span className="font-semibold text-destructive">
                  · {c.reports} reports
                </span>
              )}
              <span
                className={cn(
                  "ml-auto rounded px-2 py-0.5 font-semibold",
                  c.status === "visible"
                    ? "bg-green/15 text-green-ink"
                    : "bg-destructive/15 text-destructive"
                )}
              >
                {c.status}
              </span>
            </div>
            <p className="mt-2 whitespace-pre-wrap text-sm text-ink">{c.body}</p>
            <div className="mt-3 flex gap-2">
              {c.status === "visible" ? (
                <button
                  type="button"
                  onClick={() => act(c.id, "hide")}
                  className="rounded-md border border-border px-3 py-1 text-xs font-semibold text-ink-soft hover:bg-paper-2"
                >
                  Hide
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => act(c.id, "restore")}
                  className="rounded-md border border-border px-3 py-1 text-xs font-semibold text-green-ink hover:bg-paper-2"
                >
                  Restore
                </button>
              )}
              <button
                type="button"
                onClick={() => act(c.id, "delete")}
                className="rounded-md border border-destructive/40 px-3 py-1 text-xs font-semibold text-destructive hover:bg-destructive/10"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

function DraftCard({
  draft,
  onApprove,
  onReject,
}: {
  draft: Draft;
  onApprove: (edited: { bio: string; achievements: string[]; why: string }) => void;
  onReject: () => void;
}) {
  const [bio, setBio] = useState(draft.bio);
  const [achievements, setAchievements] = useState(draft.achievements.join("\n"));
  const [why, setWhy] = useState(draft.why);

  return (
    <li className="rounded-xl border-2 border-ink bg-card p-4">
      <div className="flex flex-wrap items-center gap-2 text-xs text-ink-faint">
        {draft.nomineeImage && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={draft.nomineeImage}
            alt={draft.nomineeName}
            className="h-10 w-9 rounded border border-ink/15 object-cover object-top"
          />
        )}
        <span className="font-semibold text-ink">{draft.nomineeName}</span>
        <span>·</span>
        <span>{draft.portfolioSlug}</span>
        <span>· nominee #{draft.nomineeId}</span>
        <span className="ml-auto rounded bg-saffron/15 px-2 py-0.5 font-semibold text-saffron-ink">
          {draft.nomineeImage ? "AI draft + photo" : "AI draft"} · {draft.model}
        </span>
      </div>

      <label className="mt-3 block text-xs font-semibold uppercase tracking-wide text-ink-soft">Bio</label>
      <textarea
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        rows={3}
        className="mt-1 w-full rounded-md border border-input bg-paper px-3 py-2 text-sm text-ink outline-none focus:border-saffron"
      />
      <label className="mt-3 block text-xs font-semibold uppercase tracking-wide text-ink-soft">Achievements (one per line)</label>
      <textarea
        value={achievements}
        onChange={(e) => setAchievements(e.target.value)}
        rows={4}
        className="mt-1 w-full rounded-md border border-input bg-paper px-3 py-2 text-sm text-ink outline-none focus:border-saffron"
      />
      <label className="mt-3 block text-xs font-semibold uppercase tracking-wide text-ink-soft">Why this ministry</label>
      <textarea
        value={why}
        onChange={(e) => setWhy(e.target.value)}
        rows={2}
        className="mt-1 w-full rounded-md border border-input bg-paper px-3 py-2 text-sm text-ink outline-none focus:border-saffron"
      />

      {draft.sourceUrls.length > 0 && (
        <p className="mt-3 text-xs text-ink-faint">
          Sources:{" "}
          {draft.sourceUrls.map((u, i) => (
            <a key={i} href={u} target="_blank" rel="noopener noreferrer" className="underline hover:text-saffron-ink">
              {new URL(u).hostname.replace(/^www\./, "")}
              {i < draft.sourceUrls.length - 1 ? ", " : ""}
            </a>
          ))}
        </p>
      )}

      <div className="mt-4 flex gap-2">
        <button
          type="button"
          onClick={() =>
            onApprove({
              bio: bio.trim(),
              achievements: achievements.split("\n").map((s) => s.trim()).filter(Boolean),
              why: why.trim(),
            })
          }
          className="rounded-md bg-ink px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-paper hover:-translate-y-0.5"
        >
          Approve &amp; publish
        </button>
        <button
          type="button"
          onClick={onReject}
          className="rounded-md border-2 border-destructive/50 px-4 py-1.5 text-xs font-semibold text-destructive hover:bg-destructive/10"
        >
          Reject
        </button>
      </div>
    </li>
  );
}
