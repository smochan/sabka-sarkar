"use client";

import { useEffect, useMemo, useState } from "react";
import {
  BadgeCheck,
  Flag,
  Loader2,
  MessageSquare,
  Reply,
  Send,
} from "lucide-react";
import { getVoterKey, getStoredName } from "@/lib/voter";
import { VoteButtons } from "./VoteButtons";
import { cn } from "@/lib/utils";
import { interactiveEnabled } from "@/lib/flags";

type Comment = {
  id: number;
  parentId: number | null;
  authorName: string;
  authorKind: string;
  body: string;
  upvotes: number;
  downvotes: number;
  myVote: number;
  createdAt: string;
};

interface DiscussionProps {
  slug: string;
  nomineeId?: number | null;
  heading?: string;
}

function timeAgo(iso: string): string {
  const t = Date.parse(iso.includes("T") ? iso : iso.replace(" ", "T") + "Z");
  if (Number.isNaN(t)) return "";
  const s = Math.max(1, Math.floor((Date.now() - t) / 1000));
  if (s < 60) return `${s}s ago`;
  const m = Math.floor(s / 60);
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  return `${Math.floor(h / 24)}d ago`;
}

interface ComposerProps {
  onSubmit: (text: string, name: string | undefined) => Promise<boolean>;
  placeholder: string;
  compact?: boolean;
  submitLabel?: string;
}

function Composer({ onSubmit, placeholder, compact, submitLabel }: ComposerProps) {
  const [body, setBody] = useState("");
  const [name, setName] = useState("");
  const [anon, setAnon] = useState(true);
  const [posting, setPosting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const n = getStoredName();
    if (n) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time prefill from a signed-in identity
      setName(n);
      setAnon(false);
    }
  }, []);

  async function handle(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (body.trim().length < 2) {
      setError("Write a little more.");
      return;
    }
    setPosting(true);
    const ok = await onSubmit(body, anon ? undefined : name.trim() || undefined);
    setPosting(false);
    if (ok) setBody("");
    else setError("Could not post. Try again.");
  }

  return (
    <form
      onSubmit={handle}
      className={cn(
        "rounded-xl border border-border bg-card",
        compact ? "p-3" : "p-4"
      )}
    >
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        maxLength={2000}
        rows={compact ? 2 : 3}
        placeholder={placeholder}
        className="w-full resize-none rounded-md border border-input bg-paper px-3 py-2 text-ink outline-none focus:border-saffron focus:ring-2 focus:ring-ring/30"
      />
      <div className="mt-2.5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2 text-sm text-ink-soft">
            <input
              type="checkbox"
              checked={anon}
              onChange={(e) => setAnon(e.target.checked)}
              className="h-4 w-4 accent-saffron"
            />
            Anonymous
          </label>
          {!anon && (
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={40}
              placeholder="Display name"
              className="h-9 rounded-md border border-input bg-paper px-3 text-sm text-ink outline-none focus:border-saffron"
            />
          )}
        </div>
        <button
          type="submit"
          disabled={posting}
          className="inline-flex h-9 items-center gap-2 rounded-md bg-ink px-4 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5 disabled:opacity-60"
        >
          {posting ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Send className="h-4 w-4" />
          )}
          {submitLabel ?? "Post"}
        </button>
      </div>
      {error && (
        <p role="alert" className="mt-2 text-sm text-destructive">
          {error}
        </p>
      )}
    </form>
  );
}

export function Discussion({ slug, nomineeId = null, heading }: DiscussionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState<"top" | "new">("top");
  const [replyTo, setReplyTo] = useState<number | null>(null);

  useEffect(() => {
    let active = true;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- show the loading state immediately when slug/order changes
    setLoading(true);
    const params = new URLSearchParams({ slug, voter: getVoterKey(), order });
    if (nomineeId) params.set("nomineeId", String(nomineeId));
    fetch(`/api/comments?${params.toString()}`)
      .then((r) => r.json())
      .then((json) => {
        if (active && json.success) setComments(json.data as Comment[]);
      })
      .catch(() => {})
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [slug, nomineeId, order]);

  async function post(
    text: string,
    name: string | undefined,
    parentId: number | null
  ): Promise<boolean> {
    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          portfolioSlug: slug,
          nomineeId,
          parentId,
          body: text,
          authorName: name,
          voterKey: getVoterKey(),
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.success) return false;
      setComments((prev) => [...prev, json.data as Comment]);
      if (parentId) setReplyTo(null);
      return true;
    } catch {
      return false;
    }
  }

  async function report(id: number) {
    setComments((prev) => prev.filter((c) => c.id !== id && c.parentId !== id));
    try {
      await fetch("/api/comments/report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ commentId: id }),
      });
    } catch {
      /* ignore */
    }
  }

  const { topLevel, repliesByParent } = useMemo(() => {
    const top = comments.filter((c) => c.parentId == null);
    const byParent = new Map<number, Comment[]>();
    for (const c of comments) {
      if (c.parentId != null) {
        const arr = byParent.get(c.parentId) ?? [];
        arr.push(c);
        byParent.set(c.parentId, arr);
      }
    }
    // replies always chronological
    for (const arr of byParent.values())
      arr.sort((a, b) => a.createdAt.localeCompare(b.createdAt));
    return { topLevel: top, repliesByParent: byParent };
  }, [comments]);

  function Meta({ c }: { c: Comment }) {
    return (
      <div className="flex items-center gap-2 text-xs text-ink-faint">
        <span
          className={cn(
            "font-semibold",
            c.authorName === "Anonymous" ? "text-ink-faint" : "text-ink-soft"
          )}
        >
          {c.authorName}
        </span>
        {c.authorKind === "google" && (
          <span
            className="inline-flex items-center gap-0.5 text-green-ink"
            title="Verified signed-in account"
          >
            <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" /> verified
          </span>
        )}
        <span aria-hidden="true">·</span>
        <span>{timeAgo(c.createdAt)}</span>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-saffron-ink" aria-hidden="true" />
          <h3 className="font-display text-xl text-ink">
            {heading ?? "Discussion"}
          </h3>
          {!loading && (
            <span className="text-sm text-ink-faint">({comments.length})</span>
          )}
        </div>
        <div className="flex rounded-md border border-border p-0.5 text-sm">
          {(["top", "new"] as const).map((o) => (
            <button
              key={o}
              type="button"
              onClick={() => setOrder(o)}
              className={cn(
                "rounded px-3 py-1 font-medium transition-colors",
                order === o
                  ? "bg-ink text-paper"
                  : "text-ink-soft hover:text-ink"
              )}
            >
              {o === "top" ? "Top" : "Newest"}
            </button>
          ))}
        </div>
      </div>

      {interactiveEnabled ? (
        <div className="mb-8">
          <Composer
            onSubmit={(t, n) => post(t, n, null)}
            placeholder="Make your case. Why this person — or why not? Keep it civil."
          />
        </div>
      ) : (
        <div className="mb-8 rounded-xl border border-border bg-card px-5 py-4 text-sm text-ink-faint">
          Discussion opens at launch. Come back soon.
        </div>
      )}

      {loading ? (
        <p className="text-sm text-ink-faint">Loading discussion…</p>
      ) : topLevel.length === 0 ? (
        <p className="text-sm text-ink-faint">
          No comments yet. Start the conversation.
        </p>
      ) : (
        <ul className="space-y-4">
          {topLevel.map((c) => {
            const replies = repliesByParent.get(c.id) ?? [];
            return (
              <li
                key={c.id}
                className="rounded-xl border border-border bg-card p-4"
              >
                <div className="flex gap-3">
                  <VoteButtons
                    kind="comment"
                    id={c.id}
                    initialUp={c.upvotes}
                    initialDown={c.downvotes}
                    initialMyVote={c.myVote}
                  />
                  <div className="min-w-0 flex-1">
                    <Meta c={c} />
                    <p className="mt-1.5 whitespace-pre-wrap text-sm leading-relaxed text-ink">
                      {c.body}
                    </p>
                    <div className="mt-2 flex items-center gap-4">
                      <button
                        type="button"
                        onClick={() =>
                          setReplyTo((r) => (r === c.id ? null : c.id))
                        }
                        className="inline-flex items-center gap-1 text-xs font-medium text-ink-faint hover:text-saffron-ink"
                      >
                        <Reply className="h-3 w-3" aria-hidden="true" /> Reply
                      </button>
                      <button
                        type="button"
                        onClick={() => report(c.id)}
                        className="inline-flex items-center gap-1 text-xs text-ink-faint hover:text-destructive"
                      >
                        <Flag className="h-3 w-3" aria-hidden="true" /> Report
                      </button>
                    </div>
                  </div>
                </div>

                {replyTo === c.id && (
                  <div className="mt-3 pl-6 sm:pl-10">
                    <Composer
                      compact
                      submitLabel="Reply"
                      placeholder={`Reply to ${c.authorName}…`}
                      onSubmit={(t, n) => post(t, n, c.id)}
                    />
                  </div>
                )}

                {replies.length > 0 && (
                  <ul className="mt-3 space-y-3 border-l border-border pl-4 sm:pl-6">
                    {replies.map((r) => (
                      <li key={r.id} className="flex gap-3">
                        <VoteButtons
                          kind="comment"
                          id={r.id}
                          initialUp={r.upvotes}
                          initialDown={r.downvotes}
                          initialMyVote={r.myVote}
                        />
                        <div className="min-w-0 flex-1">
                          <Meta c={r} />
                          <p className="mt-1.5 whitespace-pre-wrap text-sm leading-relaxed text-ink">
                            {r.body}
                          </p>
                          <button
                            type="button"
                            onClick={() => report(r.id)}
                            className="mt-1.5 inline-flex items-center gap-1 text-xs text-ink-faint hover:text-destructive"
                          >
                            <Flag className="h-3 w-3" aria-hidden="true" /> Report
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
