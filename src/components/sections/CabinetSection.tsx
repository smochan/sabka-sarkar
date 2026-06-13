"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { portfolios } from "@/content/cabinet";
import type { NomineeRow, Tally } from "@/lib/db";
import { getVoterKey } from "@/lib/voter";
import { MinistryCard } from "@/components/nominate/MinistryCard";
import { Reveal } from "@/components/Reveal";

export function CabinetSection() {
  const [tally, setTally] = useState<Tally>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    fetch(`/api/tally?voter=${encodeURIComponent(getVoterKey())}`)
      .then((r) => r.json())
      .then((json) => {
        if (active && json?.success) setTally(json.data as Tally);
      })
      .catch(() => {})
      .finally(() => active && setLoading(false));
    return () => {
      active = false;
    };
  }, []);

  const handleAdded = useCallback((slug: string, nominee: NomineeRow) => {
    setTally((prev) => {
      const existing = prev[slug] ?? [];
      if (existing.some((n) => n.id === nominee.id)) return prev;
      return { ...prev, [slug]: [...existing, nominee] };
    });
  }, []);

  const cards = useMemo(
    () => portfolios.map((p) => ({ p, nominees: tally[p.slug] ?? [] })),
    [tally]
  );

  return (
    <section
      id="cabinet"
      aria-labelledby="cabinet-heading"
      className="print-tex section-pad border-b border-border bg-paper"
    >
      <div className="container-wide">
        <Reveal className="max-w-2xl">
          <p className="eyebrow mb-4">The Dream Cabinet</p>
          <h2
            id="cabinet-heading"
            className="poster-title text-[length:var(--text-display)] text-ink"
          >
            Twelve ministries. You decide who leads each one.
          </h2>
          <p className="mt-5 text-[length:var(--text-lead)] text-ink-soft">
            Upvote who you trust, downvote who you don&apos;t, or add your own.
            Tap any name to read their record and join the debate.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {cards.map(({ p, nominees }, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 80}>
              <MinistryCard
                portfolio={p}
                nominees={nominees}
                onAdded={(n) => handleAdded(p.slug, n)}
              />
            </Reveal>
          ))}
        </div>
        {loading && (
          <p className="mt-8 text-center text-sm text-ink-faint">
            Loading nominations…
          </p>
        )}
      </div>
    </section>
  );
}
