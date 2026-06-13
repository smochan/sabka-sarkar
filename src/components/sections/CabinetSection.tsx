"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { portfolios } from "@/content/cabinet";
import { nomineeImages } from "@/content/nomineeImages";
import type { NomineeRow, Tally } from "@/lib/db";
import { getVoterKey } from "@/lib/voter";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";

type Leader = {
  name: string;
  image: string;
  ministry: string;
  slug: string;
  icon: string;
  fromVotes: boolean;
};

function initials(name: string): string {
  return name
    .replace(/^(Dr\.?|Prof\.?|Justice \(Retd\.\)|Justice|Pandit|Smt\.?|Shri)\s+/i, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

export function CabinetSection() {
  const [tally, setTally] = useState<Tally>({});

  useEffect(() => {
    let active = true;
    fetch(`/api/tally?voter=${encodeURIComponent(getVoterKey())}`)
      .then((r) => r.json())
      .then((json) => {
        if (active && json?.success) setTally(json.data as Tally);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  // Leader per ministry: top of the tally, else the first seed nominee.
  const leaders = useMemo<Leader[]>(
    () =>
      portfolios.map((p) => {
        const top: NomineeRow | undefined = tally[p.slug]?.[0];
        const seedName = p.seedNominees[0]?.name ?? "";
        const name = top?.name ?? seedName;
        const image = top?.image || nomineeImages[name]?.image || "";
        return {
          name,
          image,
          ministry: p.name,
          slug: p.slug,
          icon: p.icon,
          fromVotes: Boolean(top && (top.upvotes > 0 || top.downvotes > 0)),
        };
      }),
    [tally]
  );

  return (
    <section
      id="cabinet"
      aria-labelledby="cabinet-heading"
      className="print-tex section-pad border-b-2 border-ink bg-paper"
    >
      <div className="container-wide">
        <Reveal className="max-w-2xl">
          <p className="eyebrow mb-4 text-saffron-ink">The Dream Cabinet</p>
          <h2
            id="cabinet-heading"
            className="poster-title text-[length:var(--text-display)] text-ink"
          >
            The people&apos;s cabinet, so far.
          </h2>
          <p className="mt-5 text-[length:var(--text-lead)] text-ink-soft">
            One leader per ministry — whoever the public has pushed to the top.
            Tap a ministry to see every nominee, the shadow minister, and the
            Council of 50.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {leaders.map((l, i) => (
            <Reveal key={l.slug} delay={(i % 4) * 60}>
              <Link
                href={`/m/${l.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-xl border-2 border-ink bg-card transition-transform hover:-translate-y-1"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-paper-2">
                  {l.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={l.image}
                      alt={l.name}
                      loading="lazy"
                      className="h-full w-full object-cover object-top grayscale-[15%] transition-all duration-300 group-hover:grayscale-0"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-ink">
                      <span className="poster-title text-5xl text-saffron">
                        {initials(l.name)}
                      </span>
                    </div>
                  )}
                  <span className="absolute left-0 top-0 flex h-1 w-full">
                    <span className="flex-1 bg-saffron" />
                    <span className="flex-1 bg-white" />
                    <span className="flex-1 bg-green" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-1 p-4">
                  <span className="flex items-center gap-1.5 text-[0.7rem] font-semibold uppercase tracking-widest text-saffron-ink">
                    <Icon name={l.icon} className="h-3.5 w-3.5" />
                    {l.ministry}
                  </span>
                  <span className="poster-title text-xl leading-tight text-ink">
                    {l.name}
                  </span>
                  <span className="mt-auto pt-2 text-xs font-medium text-ink-faint">
                    {l.fromVotes ? "Leading nomination" : "Top seed · vote to decide"}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <Link
            href="/cabinet"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-ink px-8 text-base font-semibold uppercase tracking-wide text-paper transition-transform hover:-translate-y-0.5"
          >
            See all nominees &amp; nominate <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
