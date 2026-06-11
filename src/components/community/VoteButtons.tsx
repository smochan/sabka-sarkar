"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { getVoterKey } from "@/lib/voter";
import { interactiveEnabled } from "@/lib/flags";

interface VoteButtonsProps {
  kind: "nominee" | "comment";
  id: number;
  initialUp: number;
  initialDown: number;
  initialMyVote: number; // -1 | 0 | 1
  orientation?: "vertical" | "horizontal";
}

const endpoints: Record<VoteButtonsProps["kind"], string> = {
  nominee: "/api/vote",
  comment: "/api/comments/vote",
};
const idField: Record<VoteButtonsProps["kind"], string> = {
  nominee: "nomineeId",
  comment: "commentId",
};

export function VoteButtons({
  kind,
  id,
  initialUp,
  initialDown,
  initialMyVote,
  orientation = "vertical",
}: VoteButtonsProps) {
  const [up, setUp] = useState(initialUp);
  const [down, setDown] = useState(initialDown);
  const [myVote, setMyVote] = useState(initialMyVote);
  const [pending, setPending] = useState(false);
  const score = up - down;

  async function cast(value: 1 | -1) {
    if (pending) return;
    const snapshot = { up, down, myVote };
    let nUp = up;
    let nDown = down;
    let nMy: number = value;
    if (myVote === value) {
      if (value === 1) nUp -= 1;
      else nDown -= 1;
      nMy = 0;
    } else if (myVote === 0) {
      if (value === 1) nUp += 1;
      else nDown += 1;
    } else {
      if (value === 1) {
        nUp += 1;
        nDown -= 1;
      } else {
        nUp -= 1;
        nDown += 1;
      }
    }
    setUp(nUp);
    setDown(nDown);
    setMyVote(nMy);
    setPending(true);
    try {
      const res = await fetch(endpoints[kind], {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          [idField[kind]]: id,
          value,
          voterKey: getVoterKey(),
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.success) throw new Error("vote failed");
      setUp(json.data.upvotes);
      setDown(json.data.downvotes);
      setMyVote(json.data.myVote);
    } catch {
      setUp(snapshot.up);
      setDown(snapshot.down);
      setMyVote(snapshot.myVote);
    } finally {
      setPending(false);
    }
  }

  if (!interactiveEnabled) {
    return (
      <div
        title="Voting opens at launch"
        className={cn(
          "flex items-center justify-center gap-0.5 select-none opacity-40 cursor-not-allowed",
          orientation === "vertical" ? "flex-col" : "flex-row"
        )}
      >
        <ChevronUp className="h-5 w-5 text-ink-faint" aria-hidden="true" />
        <span className="min-w-[1.5rem] text-center text-sm font-bold tabular-nums text-ink">
          {score}
        </span>
        <ChevronDown className="h-5 w-5 text-ink-faint" aria-hidden="true" />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center gap-0.5 select-none",
        orientation === "vertical" ? "flex-col" : "flex-row"
      )}
    >
      <button
        type="button"
        onClick={() => cast(1)}
        aria-label="Upvote"
        aria-pressed={myVote === 1}
        className={cn(
          "rounded p-1 transition-colors hover:bg-paper-2",
          myVote === 1 ? "text-saffron-ink" : "text-ink-faint"
        )}
      >
        <ChevronUp className="h-5 w-5" aria-hidden="true" />
      </button>
      <span
        className={cn(
          "min-w-[1.5rem] text-center text-sm font-bold tabular-nums",
          myVote === 1
            ? "text-saffron-ink"
            : myVote === -1
              ? "text-navy"
              : "text-ink"
        )}
      >
        {score}
      </span>
      <button
        type="button"
        onClick={() => cast(-1)}
        aria-label="Downvote"
        aria-pressed={myVote === -1}
        className={cn(
          "rounded p-1 transition-colors hover:bg-paper-2",
          myVote === -1 ? "text-navy" : "text-ink-faint"
        )}
      >
        <ChevronDown className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  );
}
