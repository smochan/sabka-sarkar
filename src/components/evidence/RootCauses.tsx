import type { RootCause, Source } from "@/content/evidence/types";
import { Cited } from "./Cited";
import { Reveal } from "@/components/Reveal";

type RootCausesProps = {
  items: RootCause[];
  sources: Source[];
};

/**
 * Numbered editorial list of root causes.
 * Mirrors the Principles section treatment: large Fraunces display numeral,
 * border-left divider, title + prose body.
 */
export function RootCauses({ items, sources }: RootCausesProps) {
  return (
    <ul className="grid gap-x-12 gap-y-10 sm:grid-cols-2" aria-label="Root causes">
      {items.map((item, i) => (
        <li key={item.title}>
          <Reveal delay={i * 60} className="flex gap-5">
            <span
              className="font-display text-3xl leading-none text-saffron-ink"
              aria-hidden="true"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="border-l border-border pl-5">
              <h3 className="text-xl text-ink">{item.title}</h3>
              <p className="mt-2 text-[0.975rem] leading-relaxed text-ink-soft">
                <Cited text={item.body} sources={sources} />
              </p>
            </div>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
