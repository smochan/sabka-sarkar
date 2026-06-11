import { Reveal } from "@/components/Reveal";

interface Phase {
  tag: string;
  label: string;
  body: string;
}

interface RoadmapTimelineProps {
  phases: Phase[];
}

export function RoadmapTimeline({ phases }: RoadmapTimelineProps) {
  return (
    <ol className="relative space-y-8 before:absolute before:left-[7.5rem] before:top-2 before:bottom-2 before:hidden before:w-px before:bg-border sm:before:block">
      {phases.map((p, i) => (
        <li key={p.label} className="sm:flex sm:gap-8">
          <div className="mb-2 shrink-0 sm:w-28 sm:pt-1 sm:text-right">
            <span className="inline-block rounded-full bg-saffron/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-saffron-ink">
              {p.tag}
            </span>
          </div>
          <Reveal
            delay={i * 60}
            className="relative rounded-xl border border-border bg-card p-5 sm:flex-1"
          >
            <span
              aria-hidden="true"
              className="absolute -left-[2.05rem] top-6 hidden h-3 w-3 rounded-full border-2 border-paper bg-saffron sm:block"
            />
            <h3 className="text-[length:var(--text-title)] leading-tight text-ink">
              {p.label}
            </h3>
            <p className="mt-2 leading-relaxed text-ink-soft">{p.body}</p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
