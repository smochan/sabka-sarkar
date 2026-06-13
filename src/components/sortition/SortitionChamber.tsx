"use client";

import { useMemo, useState } from "react";
import { Users, ListChecks } from "lucide-react";
import { cn } from "@/lib/utils";

interface SortitionChamberProps {
  seats: number;
  centerLabel: string;
  sampleRoles: string[];
}

type Seat = { x: number; y: number; i: number };

function buildSeats(total: number): Seat[] {
  const cx = 210;
  const cy = 210;
  const radii = [80, 100, 120, 140, 160, 180, 200];
  const sumR = radii.reduce((a, b) => a + b, 0);
  const counts = radii.map((r) => Math.max(8, Math.round((total * r) / sumR)));
  // adjust last ring so counts sum to total
  const diff = total - counts.reduce((a, b) => a + b, 0);
  counts[counts.length - 1] += diff;

  const seats: Seat[] = [];
  let idx = 0;
  radii.forEach((radius, ring) => {
    const n = counts[ring];
    const offset = (ring % 2) * (Math.PI / n);
    for (let j = 0; j < n; j++) {
      const angle = (j / n) * Math.PI * 2 + offset;
      // Round to 3 decimals so server and client serialize identical strings
      // (raw float trig differs in the last digit → hydration mismatch).
      seats.push({
        x: Math.round((cx + radius * Math.cos(angle)) * 1000) / 1000,
        y: Math.round((cy + radius * Math.sin(angle)) * 1000) / 1000,
        i: idx++,
      });
    }
  });
  return seats;
}

const agendaSteps = [
  {
    title: "Anyone can propose",
    body: "Any citizen can put a topic on the table — schools, jobs, water, anything.",
  },
  {
    title: "Support lifts it up",
    body: "Topics that cross a public support threshold rise to the top of the docket.",
  },
  {
    title: "The house must take it",
    body: "The most-backed issues are debated and acted on first. No one can bury them.",
  },
];

export function SortitionChamber({
  seats,
  centerLabel,
  sampleRoles,
}: SortitionChamberProps) {
  const [mode, setMode] = useState<"room" | "agenda">("room");
  const [hovered, setHovered] = useState<number | null>(null);
  const points = useMemo(() => buildSeats(seats), [seats]);

  return (
    <div className="rounded-2xl border border-border bg-card p-5 sm:p-8">
      <div className="mb-6 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setMode("room")}
          aria-pressed={mode === "room"}
          className={cn(
            "inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-semibold transition-colors",
            mode === "room"
              ? "border-ink bg-ink text-paper"
              : "border-border text-ink-soft hover:border-ink/30"
          )}
        >
          <Users className="h-4 w-4" /> Who&apos;s in the room
        </button>
        <button
          type="button"
          onClick={() => setMode("agenda")}
          aria-pressed={mode === "agenda"}
          className={cn(
            "inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-semibold transition-colors",
            mode === "agenda"
              ? "border-ink bg-ink text-paper"
              : "border-border text-ink-soft hover:border-ink/30"
          )}
        >
          <ListChecks className="h-4 w-4" /> How the agenda works
        </button>
      </div>

      {mode === "room" ? (
        <div className="grid gap-6 lg:grid-cols-[1fr_16rem] lg:items-center">
          <div className="mx-auto w-full max-w-md">
            <svg
              viewBox="0 0 420 420"
              className="h-auto w-full"
              role="img"
              aria-label={`A circular assembly of ${seats} randomly selected citizens around a central floor`}
            >
              <circle
                cx="210"
                cy="210"
                r="52"
                className="fill-saffron/15 stroke-saffron"
                strokeWidth="1.5"
              />
              <text
                x="210"
                y="206"
                textAnchor="middle"
                className="fill-saffron-ink"
                style={{ fontSize: 13, fontWeight: 700 }}
              >
                {centerLabel}
              </text>
              <text
                x="210"
                y="224"
                textAnchor="middle"
                className="fill-ink-faint"
                style={{ fontSize: 9 }}
              >
                everyone can speak
              </text>
              {points.map((s) => (
                <circle
                  key={s.i}
                  cx={s.x}
                  cy={s.y}
                  r={hovered === s.i ? 5.5 : 3.2}
                  className={cn(
                    "cursor-pointer transition-all",
                    hovered === s.i
                      ? "fill-saffron"
                      : "fill-ink/35 hover:fill-saffron"
                  )}
                  onMouseEnter={() => setHovered(s.i)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => setHovered(s.i)}
                />
              ))}
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-ink">
              {seats} citizens. Chosen by lottery.
            </p>
            <p
              className="mt-2 min-h-[3rem] text-[length:var(--text-lead)] leading-snug text-saffron-ink"
              aria-live="polite"
            >
              {hovered !== null
                ? sampleRoles[hovered % sampleRoles.length]
                : "Hover a seat — every chair is an ordinary citizen, picked at random to mirror India."}
            </p>
          </div>
        </div>
      ) : (
        <ol className="grid gap-4 sm:grid-cols-3">
          {agendaSteps.map((s, i) => (
            <li
              key={s.title}
              className="relative rounded-xl border border-border bg-paper p-5"
            >
              <span className="font-display text-3xl text-saffron">{i + 1}</span>
              <h4 className="mt-2 font-semibold text-ink">{s.title}</h4>
              <p className="mt-1 text-sm text-ink-soft">{s.body}</p>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
