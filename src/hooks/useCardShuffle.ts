"use client";

import { useCallback, useState } from "react";

export type StackPosition = "left" | "front" | "right";

/** Each card keeps its identity forever — clicking any card only rotates who holds which slot. */
export function useCardShuffle(cardIds: string[], initial: Record<string, StackPosition>) {
  const [slots, setSlots] = useState(initial);

  const shuffle = useCallback(() => {
    setSlots((prev) => {
      const next = { ...prev };
      for (const id of cardIds) {
        if (prev[id] === "front") next[id] = "left";
        else if (prev[id] === "right") next[id] = "front";
        else next[id] = "right";
      }
      return next;
    });
  }, [cardIds]);

  return { slots, shuffle };
}
