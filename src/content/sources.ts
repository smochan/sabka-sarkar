// Sources & methodology page content.
//
// aggregateSources() pulls from the evidence registry and the sortition
// source array. The dedupe-by-id logic handles any cross-page overlap.

import type { Source, SourceCategory } from "./evidence/types";
import { allEvidenceSources } from "./evidence/index";
import { sortition } from "./sortition";

// ----- methodology -----

export const methodology = {
  title: "How we source our claims",
  intro:
    "Every statistic, baseline, and target on Sabka Sarkar is drawn from a primary or peer-reviewed source. " +
    "We do not invent numbers. Where estimates conflict, we cite the more conservative figure and note the range. " +
    "This page is a live receipt: as evidence briefs are published, their sources appear here.",
  body: [
    "Each brief is built on a four-tier source hierarchy. The first tier is official Indian government statistics: " +
      "survey reports published by the Office of the Registrar General of India (the Sample Registration System and its maternal mortality bulletins), " +
      "the Ministry of Health and Family Welfare's National Health Accounts, the Ministry of Education's UDISE+ school data, " +
      "and the Ministry of Statistics and Programme Implementation's Periodic Labour Force Survey. " +
      "These are the foundation because they are nationally representative, methodologically documented, and publicly accessible; " +
      "they are cited with their survey years, not just publication years, because the fieldwork vintage is what determines data age.",
    "The second tier is multilateral data: OECD, World Bank, and ILO publications, including global learning databases and the ILO's India Employment Report. " +
      "These are used where no equivalent Indian series exists — comparative health spending across countries, PISA scores, the OECD's deliberative democracy database — " +
      "or where they consolidate and validate the official series with independent methodology.",
    "The third tier is peer-reviewed research and independent evaluations: randomised controlled trials, quasi-experimental studies, " +
      "and formally evaluated programme assessments published in academic journals or as working papers of standing research institutions. " +
      "This is where effect sizes and causal claims are grounded. All such claims carry the study design in the text — " +
      "'RCT', 'panel study', 'quasi-experimental' — because observational associations and experimental estimates are not interchangeable.",
    "Data journalism and advocacy-organisation reports are used only as pointers to the primary statistical release " +
      "when that release is otherwise inaccessible or has no direct URL. They are never used as the underlying evidence for a factual claim.",
    "Every target in the five-year plans names its baseline, the measurement instrument used to establish that baseline, " +
      "and the year the baseline was measured. Targets that depend on a single study or a programme-internal evaluation are flagged as such " +
      "and accompanied by a lower-bound estimate. Where effect sizes in standard deviations are converted to projected percentage points, " +
      "the brief explicitly notes that the conversion is not mechanical and states the assumptions behind it.",
    "Each brief underwent an automated fact-check pass — every statistic was traced to a citable primary source — " +
      "followed by an adversarial editorial review that challenged causal claims, checked for internal consistency across sections, " +
      "and compared stated figures with the sources themselves. A revision pass resolved flagged discrepancies and added caveats where evidence was contested or vintage was stale.",
    "We distinguish between things evidence shows and things we propose or believe. " +
      "Uncertainty is named explicitly in the 'What we don't know' section of each brief. " +
      "A plan that cannot name its own weaknesses should not be trusted. " +
      "If you spot an error, outdated figure, or missing source, corrections that include a primary source citation are welcome " +
      "and will be reviewed and incorporated.",
  ],
};

// ----- category labels -----

export const categoryLabels: Record<SourceCategory, string> = {
  official: "Official",
  multilateral: "Multilateral",
  research: "Research",
  other: "Other",
};

// ----- aggregate sources -----

type AnnotatedSource = Source & {
  /** slugs of the pages that cite this source */
  citedIn: string[];
};

/**
 * Returns a deduplicated list of all sources across the site,
 * annotated with which page slugs cite them.
 *
 * To add sortition or endgoal sources in Phase 3:
 *   1. Import the source array from that content file
 *   2. Add `{ sources: theirSources, slug: "sortition" }` to the `pools` array below
 * Do NOT modify sortition.ts or endgoal.ts in this file — just import and reference.
 */
export function aggregateSources(): AnnotatedSource[] {
  const evidenceSources = allEvidenceSources();

  const pools: { slug: string; sources: Source[] }[] = [
    { slug: "evidence", sources: evidenceSources },
    { slug: "sortition", sources: sortition.sources },
  ];

  const merged = new Map<string, AnnotatedSource>();

  for (const pool of pools) {
    for (const src of pool.sources) {
      const existing = merged.get(src.id);
      if (existing) {
        if (!existing.citedIn.includes(pool.slug)) {
          existing.citedIn.push(pool.slug);
        }
      } else {
        merged.set(src.id, { ...src, citedIn: [pool.slug] });
      }
    }
  }

  return [...merged.values()];
}
