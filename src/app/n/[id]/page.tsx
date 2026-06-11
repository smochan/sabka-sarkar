import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, Check } from "lucide-react";
import { getNominee } from "@/lib/db";
import { portfolios } from "@/content/cabinet";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { NomineeVote } from "@/components/community/NomineeVote";
import { Discussion } from "@/components/community/Discussion";
import { Icon } from "@/components/Icon";

export const dynamic = "force-dynamic";

type Params = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { id } = await params;
  const nominee = await getNominee(Number(id));
  if (!nominee) return { title: "Nominee" };
  return {
    title: `${nominee.name} — nominated for the Dream Cabinet`,
    description: nominee.headline || nominee.bio.slice(0, 150),
  };
}

export default async function NomineePage({ params }: Params) {
  const { id } = await params;
  const nominee = await getNominee(Number(id));
  if (!nominee) notFound();

  const portfolio = portfolios.find((p) => p.slug === nominee.portfolioSlug);

  return (
    <>
      <Nav />
      <main className="flex-1">
        <article className="border-b border-border bg-paper-2">
          <div className="container-wide py-12">
            <Link
              href={`/m/${nominee.portfolioSlug}`}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-faint hover:text-saffron-ink"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              {portfolio?.name ?? "Back"}
            </Link>

            <div className="mt-6 flex items-start gap-5">
              <div className="rounded-xl border border-border bg-card px-2 py-1.5">
                <NomineeVote
                  id={nominee.id}
                  initialUp={nominee.upvotes}
                  initialDown={nominee.downvotes}
                />
              </div>
              <div>
                {portfolio && (
                  <span className="mb-2 inline-flex items-center gap-2 rounded-full bg-saffron/15 px-3 py-1 text-xs font-semibold text-saffron-ink">
                    <Icon name={portfolio.icon} className="h-3.5 w-3.5" />
                    Nominated for {portfolio.name}
                  </span>
                )}
                <h1 className="text-[length:var(--text-display)] text-ink">
                  {nominee.name}
                </h1>
                {nominee.headline && (
                  <p className="mt-2 max-w-2xl text-[length:var(--text-lead)] text-ink-soft">
                    {nominee.headline}
                  </p>
                )}
              </div>
            </div>
          </div>
        </article>

        <div className="container-wide grid gap-12 py-12 lg:grid-cols-[1fr_22rem]">
          <div className="space-y-10">
            {nominee.bio && (
              <section>
                <h2 className="eyebrow mb-3">About</h2>
                <p className="text-[length:var(--text-lead)] leading-relaxed text-ink-soft">
                  {nominee.bio}
                </p>
              </section>
            )}

            {nominee.achievements.length > 0 && (
              <section>
                <h2 className="eyebrow mb-3">What they&apos;ve done</h2>
                <ul className="space-y-2.5">
                  {nominee.achievements.map((a) => (
                    <li key={a} className="flex gap-3 text-ink-soft">
                      <Check
                        className="mt-1 h-4 w-4 shrink-0 text-green-ink"
                        aria-hidden="true"
                      />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {nominee.why && (
            <aside className="lg:pt-2">
              <div className="rounded-xl border border-border bg-card p-6">
                <h2 className="eyebrow mb-3">Why them for this role</h2>
                <p className="leading-relaxed text-ink-soft">{nominee.why}</p>
              </div>
              {nominee.isSeed && (
                <p className="mt-3 text-xs text-ink-faint">
                  A starting suggestion for review — not an appointment, and not
                  a claim of consent by this person.
                </p>
              )}
            </aside>
          )}
        </div>

        <section className="border-t border-border bg-paper-2">
          <div className="container-wide max-w-3xl py-12">
            <Discussion
              slug={nominee.portfolioSlug}
              nomineeId={nominee.id}
              heading={`Why ${nominee.name}? — the debate`}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
