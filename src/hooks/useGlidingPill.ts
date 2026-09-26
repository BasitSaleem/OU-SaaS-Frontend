"use client";

import { useCallback, useState } from "react";

interface PillRect {
  left: number;
  width: number;
}

/** Drives the gliding highlight pill that follows whichever nav link is hovered/focused. */
export function useGlidingPill(containerRef: React.RefObject<HTMLElement | null>) {
  const [rect, setRect] = useState<PillRect>({ left: 0, width: 0 });
  const [on, setOn] = useState(false);

  const moveTo = useCallback(
    (target: HTMLElement) => {
      const container = containerRef.current;
      if (!container) return;
      const a = container.getBoundingClientRect();
      const b = target.getBoundingClientRect();
      setRect({ left: b.left - a.left, width: b.width });
      setOn(true);
    },
    [containerRef]
  );

  const clear = useCallback(() => setOn(false), []);

  return {
    pillStyle: { transform: `translate(${rect.left}px, -50%)`, width: `${rect.width}px` },
    pillOn: on,
    moveTo,
    clear,
  };
}
