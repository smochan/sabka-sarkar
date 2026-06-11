"use client";

import Link from "next/link";
import { ArrowRight, Users2 } from "lucide-react";
import type { Portfolio } from "@/content/types";
import type { NomineeRow } from "@/lib/db";
import { Icon } from "@/components/Icon";
import { NominateDialog } from "@/components/nominate/NominateDialog";
import { VoteButtons } from "@/components/community/VoteButtons";

interface MinistryCardProps {
  portfolio: Portfolio;
  nominees: NomineeRow[];
  onAdded: (nominee: NomineeRow) => void;
}

export function MinistryCard({ portfolio, nominees, onAdded }: MinistryCardProps) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg">
      <header className="flex items-start gap-4">
        <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-saffron/15 text-saffron-ink">
          <Icon name={portfolio.icon} className="h-6 w-6" />
        </span>
        <div>
          <Link
            href={`/m/${portfolio.slug}`}
            className="text-xl leading-tight text-ink hover:text-saffron-ink"
          >
            {portfolio.name}
          </Link>
          <p className="mt-0.5 font-deva text-sm text-ink-faint">
            {portfolio.tagline}
          </p>
        </div>
      </header>

      <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-ink-soft">
        {portfolio.mandate}
      </p>

      <div className="mt-5">
        <p className="eyebrow mb-3 text-[0.7rem]">Leading nominations</p>
        <ul className="space-y-2">
          {nominees.slice(0, 4).map((n) => (
            <li
              key={n.id}
              className="flex items-center gap-3 rounded-lg border border-border bg-paper px-2 py-1.5"
            >
              <VoteButtons
                kind="nominee"
                id={n.id}
                initialUp={n.upvotes}
                initialDown={n.downvotes}
                initialMyVote={n.myVote}
                orientation="horizontal"
              />
              <Link
                href={`/n/${n.id}`}
                className="min-w-0 flex-1 hover:opacity-80"
              >
                <p className="truncate text-sm font-semibold text-ink">
                  {n.name}
                </p>
                {n.headline && (
                  <p className="truncate text-xs text-ink-faint">
                    {n.headline}
                  </p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
        <NominateDialog
          portfolioSlug={portfolio.slug}
          portfolioName={portfolio.name}
          onAdded={onAdded}
        />
        <Link
          href={`/m/${portfolio.slug}`}
          className="inline-flex items-center gap-1 text-xs font-semibold text-ink-soft hover:text-saffron-ink"
        >
          <Users2 className="h-3.5 w-3.5" aria-hidden="true" /> Open channel
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
