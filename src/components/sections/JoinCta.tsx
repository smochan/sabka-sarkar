import Link from "next/link";
import { join } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Share } from "@/components/Share";

export function JoinCta() {
  return (
    <section
      id="join"
      aria-labelledby="join-heading"
      className="grain relative section-pad border-b border-border bg-saffron/12"
    >
      <div className="container-wide">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-4">{join.eyebrow}</p>
          <h2
            id="join-heading"
            className="text-[length:var(--text-display)] text-ink"
          >
            {join.title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[length:var(--text-lead)] text-ink-soft">
            {join.body}
          </p>

          <div className="mt-10 flex flex-col items-center gap-6">
            <Link
              href="#cabinet"
              className="inline-flex h-12 items-center justify-center rounded-md bg-ink px-8 text-base font-semibold text-paper transition-transform hover:-translate-y-0.5"
            >
              {join.cta}
            </Link>
            <div className="flex flex-col items-center gap-3">
              <span className="text-sm font-medium text-ink-faint">
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
