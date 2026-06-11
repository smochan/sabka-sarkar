// Evidence registry — server-only. Do NOT import into client components.
// Client components must use src/content/evidence/slugs.ts instead.
//
// Build-time invariants enforced here (throw during static generation):
//   (a) every [c:id] marker in prose resolves to a source id in that dive's sources array
//   (b) duplicate source ids across pages must share an identical URL

import type { SectorDeepDive, Source } from "./types";
import { healthDeepDive } from "./health";
import { educationDeepDive } from "./education";
import { jobsDeepDive } from "./jobs";
import { flagshipMeta } from "./slugs";

// ----- registry -----

/** All registered sector deep-dives. */
const registry: SectorDeepDive[] = [
  healthDeepDive,
  educationDeepDive,
  jobsDeepDive,
];

// ----- build-time invariants -----

const MARKER = /\[c:([a-z0-9-]+)\]/g;

function extractMarkers(text: string): string[] {
  return [...text.matchAll(MARKER)].map((m) => m[1]);
}

function allProseFields(dive: SectorDeepDive): string[] {
  const fields: string[] = [dive.hero.sub];

  for (const ind of dive.indicators) {
    if (ind.context) fields.push(ind.context);
  }

  for (const rc of dive.rootCauses) {
    fields.push(rc.body);
  }

  for (const bm of dive.benchmarks) {
    fields.push(bm.body);
  }

  for (const iv of dive.interventions) {
    fields.push(
      iv.problem,
      iv.intervention,
      iv.mechanism,
      iv.target.text,
      iv.target.baseline,
      iv.owner,
      iv.cost,
      iv.risks
    );
  }

  fields.push(...dive.overallCost.body);
  fields.push(...dive.unknowns);

  return fields;
}

function assertInvariants(dives: SectorDeepDive[]): void {
  // (a) dangling [c:id] markers
  for (const dive of dives) {
    const sourceIds = new Set(dive.sources.map((s) => s.id));
    for (const field of allProseFields(dive)) {
      for (const markerId of extractMarkers(field)) {
        if (!sourceIds.has(markerId)) {
          throw new Error(
            `[evidence/index] Dangling citation [c:${markerId}] in slug "${dive.slug}" ` +
              `— add a source with id "${markerId}" to its sources array.`
          );
        }
      }
    }
    // also check indicator cite arrays
    for (const ind of dive.indicators) {
      for (const id of ind.cite) {
        if (!sourceIds.has(id)) {
          throw new Error(
            `[evidence/index] Indicator cite "${id}" in slug "${dive.slug}" ` +
              `has no matching source — add it to the sources array.`
          );
        }
      }
    }
  }

  // (b) duplicate source ids must share a URL
  const seen = new Map<string, string>(); // id → url
  for (const dive of dives) {
    for (const src of dive.sources) {
      const existing = seen.get(src.id);
      if (existing !== undefined && existing !== src.url) {
        throw new Error(
          `[evidence/index] Duplicate source id "${src.id}" with conflicting URLs:\n` +
            `  ${existing}\n  ${src.url}\n` +
            `Duplicate source ids must share the same URL.`
        );
      }
      seen.set(src.id, src.url);
    }
  }
}

// Run invariants at module load time (happens during static generation).
assertInvariants(registry);

// Assert slugsMeta counts match real arrays for registered dives.
for (const dive of registry) {
  const meta = flagshipMeta[dive.slug];
  if (!meta) continue; // non-flagship — no assertion needed
  if (meta.sourceCount !== dive.sources.length) {
    throw new Error(
      `[evidence/index] flagshipMeta["${dive.slug}"].sourceCount is ${meta.sourceCount} ` +
        `but the sources array has ${dive.sources.length} entries. Update slugs.ts.`
    );
  }
  if (meta.interventionCount !== dive.interventions.length) {
    throw new Error(
      `[evidence/index] flagshipMeta["${dive.slug}"].interventionCount is ${meta.interventionCount} ` +
        `but the interventions array has ${dive.interventions.length} entries. Update slugs.ts.`
    );
  }
}

// ----- public API -----

/** All registered deep-dives (server-side only). */
export const deepDives: Readonly<SectorDeepDive[]> = registry;

/** Look up a deep-dive by slug. Returns undefined for unregistered slugs. */
export function getDeepDive(slug: string): SectorDeepDive | undefined {
  return registry.find((d) => d.slug === slug);
}

/** Deduplicated union of all sources across all registered deep-dives.
 *  Sources with the same id are merged (invariant guarantees same URL). */
export function allEvidenceSources(): Source[] {
  const seen = new Set<string>();
  const result: Source[] = [];
  for (const dive of registry) {
    for (const src of dive.sources) {
      if (!seen.has(src.id)) {
        seen.add(src.id);
        result.push(src);
      }
    }
  }
  return result;
}
