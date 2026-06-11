"use client";

import { useState } from "react";
import { Share2, Check, Copy } from "lucide-react";
import { site } from "@/content/site";

const shareText = `If the best of our generation ran India — who would you nominate? ${site.name}`;

export function Share() {
  const [copied, setCopied] = useState(false);
  const url = site.url;

  async function nativeShare() {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title: site.name, text: shareText, url });
      } catch {
        /* user dismissed */
      }
    } else {
      void copyLink();
    }
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked */
    }
  }

  const wa = `https://wa.me/?text=${encodeURIComponent(`${shareText} ${url}`)}`;
  const x = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    shareText
  )}&url=${encodeURIComponent(url)}`;

  return (
    <div className="flex flex-wrap items-center gap-3">
      <button
        type="button"
        onClick={nativeShare}
        className="inline-flex h-11 items-center gap-2 rounded-md bg-ink px-5 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5"
      >
        <Share2 className="h-4 w-4" aria-hidden="true" /> Share
      </button>
      <a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-11 items-center rounded-md border border-ink/20 px-5 text-sm font-semibold text-ink transition-colors hover:bg-paper-2"
      >
        WhatsApp
      </a>
      <a
        href={x}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-11 items-center rounded-md border border-ink/20 px-5 text-sm font-semibold text-ink transition-colors hover:bg-paper-2"
      >
        Post on X
      </a>
      <button
        type="button"
        onClick={copyLink}
        className="inline-flex h-11 items-center gap-2 rounded-md border border-ink/20 px-5 text-sm font-semibold text-ink transition-colors hover:bg-paper-2"
      >
        {copied ? (
          <>
            <Check className="h-4 w-4 text-green-ink" aria-hidden="true" /> Copied
          </>
        ) : (
          <>
            <Copy className="h-4 w-4" aria-hidden="true" /> Copy link
          </>
        )}
      </button>
    </div>
  );
}
