import type { Metadata } from "next";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { TricolorRail } from "@/components/TricolorRail";
import { Stamp } from "@/components/Stamp";
import { CabinetGrid } from "@/components/cabinet/CabinetGrid";

export const metadata: Metadata = {
  title: "The Dream Cabinet — nominate & vote",
  description:
    "Twelve ministries. Nominate who you'd trust to lead each one, upvote the best, and watch the people's cabinet take shape. Each ministry: a Minister, a Shadow Minister, and a Council of 50.",
};

export default function CabinetPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="grain relative overflow-hidden border-b-2 border-ink bg-paper">
          <TricolorRail className="absolute inset-x-0 top-0" />
          <div className="container-wide py-20">
            <div className="mb-6 flex flex-wrap items-center gap-4">
              <p className="eyebrow text-saffron-ink">The Dream Cabinet</p>
              <Stamp className="text-ink/70">You decide</Stamp>
            </div>
            <h1 className="poster-title max-w-[16ch] text-[length:var(--text-hero)] text-ink">
              Pick who runs each ministry.
            </h1>
            <p className="mt-7 max-w-2xl text-[length:var(--text-lead)] text-ink-soft">
              Twelve ministries. Upvote who you trust, downvote who you don&apos;t,
              or add your own. The top vote becomes the Minister, the runner-up the
              Shadow Minister, and the next fifty form the Council of 50.
            </p>
          </div>
        </section>

        <section className="section-pad border-b-2 border-ink bg-paper-2">
          <CabinetGrid />
        </section>
      </main>
      <Footer />
    </>
  );
}
