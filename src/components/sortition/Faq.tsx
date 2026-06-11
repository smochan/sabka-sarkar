import { Plus } from "lucide-react";
import type { FaqItem } from "@/content/types";

interface FaqProps {
  items: FaqItem[];
}

export function Faq({ items }: FaqProps) {
  return (
    <div className="divide-y divide-border rounded-xl border border-border bg-card">
      {items.map((item) => (
        <details key={item.q} className="group p-5 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
            <span className="font-display text-lg leading-snug text-ink">
              {item.q}
            </span>
            <Plus
              className="mt-1 h-5 w-5 shrink-0 text-saffron-ink transition-transform group-open:rotate-45"
              aria-hidden="true"
            />
          </summary>
          <p className="mt-3 leading-relaxed text-ink-soft">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
