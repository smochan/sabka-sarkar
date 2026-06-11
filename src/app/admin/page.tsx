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

const KEY = "apni-sarkar:adminKey";

export default function AdminPage() {
  const [key, setKey] = useState("");
  const [authed, setAuthed] = useState(false);
  const [comments, setComments] = useState<ModComment[]>([]);
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
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed");
      setAuthed(false);
    } finally {
      setLoading(false);
    }
  }, []);

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
        <span className="text-sm text-ink-faint">{comments.length} comments</span>
      </div>
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
