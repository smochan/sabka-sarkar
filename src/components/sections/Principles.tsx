import { principles } from "@/content/site";
import { Reveal } from "@/components/Reveal";

export function Principles() {
  return (
    <section
      id="principles"
      aria-labelledby="principles-heading"
      className="section-pad border-b border-border bg-ink text-paper"
    >
      <div className="container-wide">
        <Reveal>
          <p className="eyebrow mb-4 text-saffron">{principles.eyebrow}</p>
          <h2
            id="principles-heading"
            className="max-w-[20ch] text-[length:var(--text-display)] text-paper"
          >
            {principles.title}
          </h2>
        </Reveal>

        <ul className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {principles.items.map((item, i) => (
            <li key={item.n}>
              <Reveal delay={i * 60} className="flex gap-5">
                <span className="font-display text-3xl leading-none text-saffron">
                  {item.n}
                </span>
                <div className="border-l border-paper/15 pl-5">
                  <h3 className="text-xl text-paper">{item.title}</h3>
                  <p className="mt-2 text-[0.975rem] leading-relaxed text-paper/70">
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
