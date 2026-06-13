import { vision } from "@/content/site";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";

export function Vision() {
  const [first, ...rest] = vision.points;

  return (
    <section
      id="vision"
      aria-labelledby="vision-heading"
      className="print-tex section-pad border-b border-border bg-paper-2"
    >
      <div className="container-wide">
        <Reveal>
          <p className="eyebrow mb-4">{vision.eyebrow}</p>
          <h2
            id="vision-heading"
            className="poster-title max-w-[18ch] text-[length:var(--text-display)] text-ink"
          >
            {vision.title}
          </h2>
        </Reveal>

        {/* Bento grid: first card spans full width on sm, 2 cols on lg */}
        <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">

          {/* Wide feature card */}
          <Reveal className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:col-span-2">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-6 -top-6 text-saffron/8 transition-transform duration-500 group-hover:scale-110"
            >
              <Icon name={first.icon} className="h-48 w-48" />
            </span>
            <div className="relative">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-saffron text-paper transition-transform duration-300 group-hover:scale-110">
                <Icon name={first.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-[length:var(--text-title)] leading-tight text-ink">
                {first.title}
              </h3>
              <p className="mt-3 max-w-lg leading-relaxed text-ink-soft">
                {first.body}
              </p>
            </div>
            <p className="relative mt-8 font-display text-5xl font-semibold text-saffron/25">
              50+<span className="ml-3 font-sans text-xl font-normal text-ink-faint">practitioners behind every minister</span>
            </p>
          </Reveal>

          {/* Standard cards */}
          {rest.map((p, i) => (
            <Reveal
              key={p.title}
              delay={(i + 1) * 80}
              className="group flex flex-col gap-5 rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-saffron/10 text-saffron-ink transition-all duration-300 group-hover:bg-saffron group-hover:text-paper">
                <Icon name={p.icon} className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-xl font-semibold leading-tight text-ink">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
