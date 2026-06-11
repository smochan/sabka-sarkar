"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Plus, X, Loader2 } from "lucide-react";
import type { NomineeRow } from "@/lib/db";
import { interactiveEnabled } from "@/lib/flags";

interface NominateDialogProps {
  portfolioSlug: string;
  portfolioName: string;
  onAdded: (nominee: NomineeRow) => void;
  disabled?: boolean;
}

export function NominateDialog({
  portfolioSlug,
  portfolioName,
  onAdded,
  disabled,
}: NominateDialogProps) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (name.trim().length < 2) {
      setError("Please enter a full name.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/nominate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ portfolioSlug, name, note }),
      });
      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error(json.error ?? "Could not submit nomination.");
      }
      onAdded(json.data as NomineeRow);
      setName("");
      setNote("");
      setOpen(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  }

  if (!interactiveEnabled) {
    return (
      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-faint opacity-50 cursor-not-allowed" title="Nominations open at launch">
        <Plus className="h-4 w-4" aria-hidden="true" /> Suggest someone
      </span>
    );
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          disabled={disabled}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-saffron-ink transition-colors hover:text-ink disabled:opacity-40"
        >
          <Plus className="h-4 w-4" aria-hidden="true" /> Suggest someone
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[min(28rem,92vw)] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-border bg-card p-6 shadow-2xl focus:outline-none">
          <div className="flex items-start justify-between gap-4">
            <div>
              <Dialog.Title className="font-display text-2xl text-ink">
                Nominate for {portfolioName}
              </Dialog.Title>
              <Dialog.Description className="mt-1 text-sm text-ink-faint">
                Who has earned the right to lead this? Public suggestion only —
                not an appointment.
              </Dialog.Description>
            </div>
            <Dialog.Close asChild>
              <button
                type="button"
                aria-label="Close"
                className="rounded-md p-1 text-ink-faint hover:bg-paper-2 hover:text-ink"
              >
                <X className="h-5 w-5" />
              </button>
            </Dialog.Close>
          </div>

          <form onSubmit={submit} className="mt-5 space-y-4">
            <div>
              <label
                htmlFor="nominee-name"
                className="mb-1.5 block text-sm font-medium text-ink"
              >
                Name
              </label>
              <input
                id="nominee-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={80}
                autoComplete="off"
                placeholder="e.g. Dr. Ravi Kannan"
                className="w-full rounded-md border border-input bg-paper px-3 py-2 text-ink outline-none focus:border-saffron focus:ring-2 focus:ring-ring/30"
              />
            </div>
            <div>
              <label
                htmlFor="nominee-note"
                className="mb-1.5 block text-sm font-medium text-ink"
              >
                Why them?{" "}
                <span className="font-normal text-ink-faint">(optional)</span>
              </label>
              <textarea
                id="nominee-note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                maxLength={140}
                rows={2}
                placeholder="One line on what they've actually done."
                className="w-full resize-none rounded-md border border-input bg-paper px-3 py-2 text-ink outline-none focus:border-saffron focus:ring-2 focus:ring-ring/30"
              />
            </div>

            {error && (
              <p role="alert" className="text-sm text-destructive">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-ink text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5 disabled:opacity-60"
            >
              {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
              {submitting ? "Submitting" : "Add nomination"}
            </button>
            <p className="text-center text-xs text-ink-faint">
              Nominations are public and moderated.
            </p>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
