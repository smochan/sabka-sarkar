import type { Source } from "@/content/evidence/types";

const MARKER = /\[c:([a-z0-9-]+)\]/g;

export function citationNumber(sources: Source[], id: string): number {
  const i = sources.findIndex((s) => s.id === id);
  return i === -1 ? 0 : i + 1;
}

type CitedProps = {
  /** prose containing [c:source-id] markers */
  text: string;
  /** the page's source list, in citation order */
  sources: Source[];
  className?: string;
  /**
   * When true, renders citation links in saffron instead of navy —
   * for use inside dark (bg-ink) sections where navy is unreadable.
   */
  dark?: boolean;
};

/**
 * Renders prose with [c:id] markers as numbered superscript links into the
 * page's source list (#src-<id>). Unknown ids render nothing rather than a
 * broken reference.
 *
 * Pass `dark` when the component is rendered on a dark (bg-ink) background
 * so citation links use text-saffron instead of text-navy.
 */
export function Cited({ text, sources, className, dark = false }: CitedProps) {
  const parts: React.ReactNode[] = [];
  let last = 0;
  let key = 0;
  const linkClass = dark
    ? "font-sans text-[0.7em] font-semibold text-saffron no-underline hover:text-paper"
    : "font-sans text-[0.7em] font-semibold text-navy no-underline hover:text-saffron-ink";
  for (const match of text.matchAll(MARKER)) {
    const idx = match.index ?? 0;
    if (idx > last) parts.push(text.slice(last, idx));
    const n = citationNumber(sources, match[1]);
    if (n > 0) {
      parts.push(
        <sup key={key++} className="ml-px">
          <a
            href={`#src-${match[1]}`}
            className={linkClass}
            aria-label={`Source ${n}`}
          >
            [{n}]
          </a>
        </sup>
      );
    }
    last = idx + match[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <span className={className}>{parts}</span>;
}
