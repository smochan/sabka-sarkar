import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { StatStrip } from "@/components/sections/StatStrip";
import { PinnedStats } from "@/components/sections/PinnedStats";
import { TwoIdeas } from "@/components/sections/TwoIdeas";
import { Vision } from "@/components/sections/Vision";
import { CabinetSection } from "@/components/sections/CabinetSection";
import { FiveYearPlan } from "@/components/sections/FiveYearPlan";
import { SortitionPillar } from "@/components/sections/SortitionPillar";
import { Principles } from "@/components/sections/Principles";
import { JoinCta } from "@/components/sections/JoinCta";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <StatStrip />
        <PinnedStats />
        <TwoIdeas />
        <Vision />
        <CabinetSection />
        <FiveYearPlan />
        <SortitionPillar />
        <Principles />
        <JoinCta />
      </main>
      <Footer />
    </>
  );
}
