import { CountUp } from "@/components/CountUp";

const ITEMS = [
  { value: 1.4, decimals: 1, suffix: "B", label: "Indians this affects" },
  { value: 12, decimals: 0, suffix: "", label: "ministries reimagined" },
  { value: 50, decimals: 0, suffix: "+", label: "practitioners per ministry" },
  { value: 5, decimals: 0, suffix: "yr", label: "sourced plan, ready now" },
];

export function StatStrip() {
  return (
    <div
      className="border-y-2 border-ink bg-saffron text-ink"
      aria-label="Key numbers"
    >
      <div className="container-wide">
        <dl className="grid grid-cols-2 divide-ink/20 md:grid-cols-4 md:divide-x">
          {ITEMS.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-1 px-4 py-8 text-center"
            >
              <dt className="poster-title text-5xl leading-none sm:text-6xl">
                <CountUp
                  value={item.value}
                  decimals={item.decimals}
                  suffix={item.suffix}
                />
              </dt>
              <dd className="text-xs font-semibold uppercase tracking-widest text-ink/70">
                {item.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
