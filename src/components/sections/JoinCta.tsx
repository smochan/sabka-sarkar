import Link from "next/link";
import { join } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Share } from "@/components/Share";
import { Stamp } from "@/components/Stamp";

export function JoinCta() {
  return (
    <section
      id="join"
      aria-labelledby="join-heading"
      className="grain relative overflow-hidden border-y-2 border-ink bg-saffron"
    >
      <div className="container-wide section-pad">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <Stamp className="text-ink" rotate={-4}>
              Non-partisan
            </Stamp>
            <Stamp className="text-ink/70" rotate={3}>
              Open source
            </Stamp>
          </div>
          <p className="eyebrow mb-4 text-ink/80">{join.eyebrow}</p>
          <h2
            id="join-heading"
            className="poster-title text-[length:var(--text-display)] text-ink"
          >
            {join.title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[length:var(--text-lead)] text-ink/85">
            {join.body}
          </p>

          <div className="mt-10 flex flex-col items-center gap-6">
            <Link
              href="#cabinet"
              className="inline-flex h-12 items-center justify-center rounded-md bg-ink px-8 text-base font-semibold uppercase tracking-wide text-paper transition-transform hover:-translate-y-0.5"
            >
              {join.cta}
            </Link>
            <div className="flex flex-col items-center gap-3">
              <span className="text-sm font-medium text-ink/70">
                Or spread the word
              </span>
              <Share />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
