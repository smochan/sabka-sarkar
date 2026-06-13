import { principles } from "@/content/site";
import { Reveal } from "@/components/Reveal";

export function Principles() {
  return (
    <section
      id="principles"
      aria-labelledby="principles-heading"
      className="print-tex section-pad border-b-2 border-ink bg-paper"
    >
      <div className="container-wide">
        <Reveal>
          <p className="eyebrow mb-4 text-saffron-ink">{principles.eyebrow}</p>
          <h2
            id="principles-heading"
            className="poster-title max-w-[20ch] text-[length:var(--text-display)] text-ink"
          >
            {principles.title}
          </h2>
        </Reveal>

        <ul className="mt-14 grid grid-cols-1 gap-x-10 gap-y-0 sm:grid-cols-2 lg:grid-cols-3">
          {principles.items.map((item, i) => (
            <li key={item.n}>
              <Reveal
                delay={i * 60}
                className="group flex flex-col gap-4 border-t-2 border-ink py-10"
              >
                <span className="font-display text-6xl font-semibold leading-none text-saffron-ink transition-colors duration-300 group-hover:text-saffron">
                  {item.n}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-soft">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
