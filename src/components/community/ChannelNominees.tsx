"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { NomineeRow, Tally } from "@/lib/db";
import { getVoterKey } from "@/lib/voter";
import { portfolios } from "@/content/cabinet";
import { VoteButtons } from "@/components/community/VoteButtons";
import { NominateDialog } from "@/components/nominate/NominateDialog";
import { cn } from "@/lib/utils";

interface ChannelNomineesProps {
  slug: string;
}

function initials(name: string): string {
  return name
    .replace(/^(Dr\.?|Prof\.?|Justice \(Retd\.\)|Justice|Pandit|Smt\.?|Shri)\s+/i, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

function TierCard({
  n,
  tier,
}: {
  n: NomineeRow;
  tier: "Minister" | "Shadow Minister";
}) {
  const isMinister = tier === "Minister";
  return (
    <div
      className={cn(
        "flex gap-4 rounded-xl border-2 p-4",
        isMinister ? "border-saffron bg-saffron/10" : "border-ink bg-card"
      )}
    >
      <div className="h-20 w-16 shrink-0 overflow-hidden rounded-md border border-ink/15 bg-paper-2">
        {n.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={n.image} alt={n.name} loading="lazy" className="h-full w-full object-cover object-top" />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-ink">
            <span className="poster-title text-xl text-saffron">{initials(n.name)}</span>
          </div>
        )}
      </div>
      <div className="flex min-w-0 flex-1 flex-col">
        <span
          className={cn(
            "text-[0.7rem] font-bold uppercase tracking-widest",
            isMinister ? "text-saffron-ink" : "text-ink-faint"
          )}
        >
          {tier}
        </span>
        <Link href={`/n/${n.id}`} className="hover:opacity-80">
          <p className="poster-title truncate text-xl text-ink">{n.name}</p>
        </Link>
        {n.headline && <p className="truncate text-sm text-ink-faint">{n.headline}</p>}
        <div className="mt-auto pt-2">
          <VoteButtons
            kind="nominee"
            id={n.id}
            initialUp={n.upvotes}
            initialDown={n.downvotes}
            initialMyVote={n.myVote}
          />
        </div>
      </div>
    </div>
  );
}

export function ChannelNominees({ slug }: ChannelNomineesProps) {
  const portfolio = portfolios.find((p) => p.slug === slug);
  const [nominees, setNominees] = useState<NomineeRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    fetch(`/api/tally?voter=${encodeURIComponent(getVoterKey())}`)
      .then((r) => r.json())
      .then((json) => {
        if (active && json?.success)
          setNominees(((json.data as Tally)[slug] ?? []) as NomineeRow[]);
      })
      .catch(() => {})
      .finally(() => active && setLoading(false));
    return () => {
      active = false;
    };
  }, [slug]);

  function onAdded(n: NomineeRow) {
    setNominees((prev) => (prev.some((x) => x.id === n.id) ? prev : [...prev, n]));
  }

  const minister = nominees[0];
  const shadow = nominees[1];
  const council = nominees.slice(2);

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="poster-title text-2xl text-ink">
          The cabinet for this ministry {!loading && `· ${nominees.length} nominated`}
        </h2>
        {portfolio && (
          <NominateDialog
            portfolioSlug={slug}
            portfolioName={portfolio.name}
            onAdded={onAdded}
          />
        )}
      </div>

      {loading ? (
        <p className="text-sm text-ink-faint">Loading candidates…</p>
      ) : nominees.length === 0 ? (
        <p className="text-sm text-ink-faint">No nominees yet — be the first.</p>
      ) : (
        <>
          {/* Minister + Shadow */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {minister && <TierCard n={minister} tier="Minister" />}
            {shadow && <TierCard n={shadow} tier="Shadow Minister" />}
          </div>

          {/* Council of 50 */}
          {council.length > 0 && (
            <div className="mt-8">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-ink-faint">
                Council of 50 — the next most-backed experts
              </p>
              <ol className="space-y-2">
                {council.map((n, i) => (
                  <li
                    key={n.id}
                    className="flex items-center gap-3 rounded-xl border border-ink/15 bg-card px-3 py-2.5"
                  >
                    <span className="w-6 text-center font-display text-lg text-ink-faint">
                      {i + 3}
                    </span>
                    <VoteButtons
                      kind="nominee"
                      id={n.id}
                      initialUp={n.upvotes}
                      initialDown={n.downvotes}
                      initialMyVote={n.myVote}
                    />
                    <Link href={`/n/${n.id}`} className="min-w-0 flex-1 hover:opacity-80">
                      <p className="truncate font-semibold text-ink">{n.name}</p>
                      {n.headline && (
                        <p className="truncate text-sm text-ink-faint">{n.headline}</p>
                      )}
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </>
      )}
    </div>
  );
}
