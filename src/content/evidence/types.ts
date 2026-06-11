// Contracts for the evidence layer: sector deep-dive briefs and the public
// sources & methodology page. All prose fields support inline citation
// markers of the form [c:source-id] which <Cited> renders as numbered
// superscript links into the page's source list.

export type SourceCategory = "official" | "multilateral" | "research" | "other";

export type Source = {
  /** stable kebab-case id referenced by [c:id] markers, e.g. "nfhs-5" */
  id: string;
  /** publishing organization or author, e.g. "IIPS & MoHFW" */
  org: string;
  /** document/dataset title */
  title: string;
  /** publication or survey year/range as displayed, e.g. "2019-21" */
  year: string;
  url: string;
  /** optional pointer to the specific table/figure/page used */
  note?: string;
  category: SourceCategory;
};

export type Indicator = {
  /** the headline number, e.g. "39.4%" */
  value: string;
  /** what it measures, plain language */
  label: string;
  /** data vintage shown next to the number, e.g. "NHA 2021-22" */
  vintage: string;
  /** source ids backing this indicator */
  cite: string[];
  /** optional one-line context, may contain [c:id] markers */
  context?: string;
};

export type RootCause = {
  title: string;
  /** prose with [c:id] markers */
  body: string;
};

export type Benchmark = {
  /** e.g. "Thailand" or "Tamil Nadu" */
  place: string;
  scope: "world" | "india";
  /** the measured outcome in one line, e.g. "OOP spending fell from 34% to 9%" */
  headline: string;
  /** prose with [c:id] markers, including transferability caveats */
  body: string;
};

export type Intervention = {
  title: string;
  /** each field is prose with [c:id] markers */
  problem: string;
  intervention: string;
  /** why it works — the causal mechanism, evidenced */
  mechanism: string;
  target: {
    /** the measurable 5-year target */
    text: string;
    /** the sourced baseline it moves from */
    baseline: string;
  };
  /** who implements: centre/state/local + which body */
  owner: string;
  /** indicative cost with cost basis */
  cost: string;
  /** honest risks and trade-offs */
  risks: string;
};

export type SectorDeepDive = {
  /** matches Portfolio.slug */
  slug: string;
  sector: string;
  hero: {
    title: string;
    /** lead paragraph, may contain [c:id] markers */
    sub: string;
  };
  /** "Where India stands" — 8-15 headline indicators */
  indicators: Indicator[];
  rootCauses: RootCause[];
  benchmarks: Benchmark[];
  interventions: Intervention[];
  /** aggregate cost section — paragraphs with [c:id] markers */
  overallCost: { title: string; body: string[] };
  /** "What we don't know / where we could be wrong" — paragraphs with markers */
  unknowns: string[];
  /** every source cited on this page, in first-cited order */
  sources: Source[];
};
