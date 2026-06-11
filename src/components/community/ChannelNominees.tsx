"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { NomineeRow, Tally } from "@/lib/db";
import { getVoterKey } from "@/lib/voter";
import { portfolios } from "@/content/cabinet";
import { VoteButtons } from "@/components/community/VoteButtons";
import { NominateDialog } from "@/components/nominate/NominateDialog";

interface ChannelNomineesProps {
  slug: string;
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
    setNominees((prev) =>
      prev.some((x) => x.id === n.id) ? prev : [...prev, n]
    );
  }

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-display text-2xl text-ink">
          The candidates {!loading && `(${nominees.length})`}
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
      ) : (
        <ol className="space-y-2">
          {nominees.map((n, i) => (
            <li
              key={n.id}
              className="flex items-center gap-3 rounded-xl border border-border bg-card px-3 py-2.5"
            >
              <span className="w-6 text-center font-display text-lg text-ink-faint">
                {i + 1}
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
      )}
    </div>
  );
}
