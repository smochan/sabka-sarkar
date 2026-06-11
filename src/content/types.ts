// Shared content contract for the Dream Cabinet site.
// All copy here is aspirational/illustrative and subject to user review before publish.

export type Nominee = {
  /** Full name of an example public nominee (well-established, non-controversial). */
  name: string;
  /** One short line on why they exemplify the role. Factual, no hyperbole. */
  note: string;
};

export type Portfolio = {
  /** url-safe id, e.g. "education" */
  slug: string;
  /** Display name, e.g. "Education & Skilling" */
  name: string;
  /** lucide-react icon name in PascalCase, e.g. "GraduationCap" */
  icon: string;
  /** One-line portfolio promise. */
  tagline: string;
  /** 2-3 sentences: what is broken today and what this ministry would fix. */
  mandate: string;
  /** 2-3 example nominations (public-sourced framing; user reviews). */
  seedNominees: Nominee[];
  /** 4-6 example stakeholder types/names for the monthly "Council of 50". */
  councilExamples: string[];
};

export type PlanYear = {
  /** 1..5 */
  year: number;
  /** 2-4 concrete, aspirational milestones for this sector that year. */
  milestones: string[];
};

export type SectorPlan = {
  /** matches Portfolio.slug */
  portfolioSlug: string;
  /** sector label for the 5-year plan section */
  sector: string;
  years: PlanYear[];
};

export type FaqItem = { q: string; a: string };

export type SortitionContent = {
  hero: { eyebrow: string; title: string; sub: string };
  whatItIs: { title: string; body: string[] };
  howIndia: { title: string; intro: string; points: { title: string; body: string }[] };
  whySmall: {
    title: string;
    body: string;
    currentCount: number;
    currentLabel: string;
    proposedCount: number;
    proposedLabel: string;
  };
  separation: {
    title: string;
    intro: string;
    pillars: { name: string; body: string }[];
  };
  howItChanges: {
    title: string;
    points: { icon: string; title: string; body: string }[];
  };
  precedents: { title: string; items: { place: string; body: string }[] };
  constitutionalPath: {
    title: string;
    intro: string;
    steps: { tag: string; label: string; body: string; legalNote: string }[];
  };
  faqs: FaqItem[];
  chamber: { seats: number; centerLabel: string; sampleRoles: string[] };
  sources: import("./evidence/types").Source[];
};

export type EndGoalContent = {
  hero: { eyebrow: string; title: string; sub: string };
  prerequisite: { text: string; ctaLabel: string };
  roadmap: {
    title: string;
    intro: string;
    phases: { tag: string; label: string; body: string }[];
  };
  feasibility?: {
    title: string;
    body: string[];
  };
  parliament: {
    title: string;
    intro: string;
    features: { icon: string; title: string; body: string }[];
  };
  principles: { title: string; items: { title: string; body: string }[] };
  disclaimer: string;
};

export type NomineeProfile = {
  /** portfolio slug this nominee belongs to (must match a Portfolio.slug) */
  slug: string;
  /** must exactly match the seed nominee name in cabinet.ts */
  name: string;
  /** 2-4 sentence factual bio: who they are and what they're known for. */
  bio: string;
  /** 3-5 short, concrete achievement bullets. */
  achievements: string[];
  /** 1-2 sentences: why this person fits this ministry. */
  why: string;
};
