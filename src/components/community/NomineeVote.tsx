"use client";

import { useEffect, useState } from "react";
import { getVoterKey } from "@/lib/voter";
import { VoteButtons } from "./VoteButtons";

interface NomineeVoteProps {
  id: number;
  initialUp: number;
  initialDown: number;
  orientation?: "vertical" | "horizontal";
}

/**
 * Wraps VoteButtons for nominee detail/channel pages: the server provides
 * vote counts, this re-reads the viewer's own vote (myVote) on mount so the
 * highlight is correct for returning visitors.
 */
export function NomineeVote({
  id,
  initialUp,
  initialDown,
  orientation = "vertical",
}: NomineeVoteProps) {
  const [state, setState] = useState({
    up: initialUp,
    down: initialDown,
    myVote: 0,
    ready: false,
  });

  useEffect(() => {
    fetch(`/api/nominee?id=${id}&voter=${encodeURIComponent(getVoterKey())}`)
      .then((r) => r.json())
      .then((j) => {
        if (j?.success)
          setState({
            up: j.data.upvotes,
            down: j.data.downvotes,
            myVote: j.data.myVote,
            ready: true,
          });
      })
      .catch(() => {});
  }, [id]);

  return (
    <VoteButtons
      key={state.ready ? "ready" : "loading"}
      kind="nominee"
      id={id}
      initialUp={state.up}
      initialDown={state.down}
      initialMyVote={state.myVote}
      orientation={orientation}
    />
  );
}
