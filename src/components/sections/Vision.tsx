import { vision } from "@/content/site";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";

export function Vision() {
  return (
    <section
      id="vision"
      aria-labelledby="vision-heading"
      className="section-pad border-b border-border bg-paper-2"
    >
      <div className="container-wide">
        <Reveal>
          <p className="eyebrow mb-4">{vision.eyebrow}</p>
          <h2
            id="vision-heading"
            className="max-w-[18ch] text-[length:var(--text-display)] text-ink"
          >
            {vision.title}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
          {vision.points.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 80}
              className="group flex flex-col gap-4 bg-card p-8 transition-colors hover:bg-paper"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-saffron/15 text-saffron-ink">
                <Icon name={p.icon} className="h-5 w-5" />
              </span>
              <h3 className="text-[length:var(--text-title)] leading-tight text-ink">
                {p.title}
              </h3>
              <p className="text-ink-soft">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
