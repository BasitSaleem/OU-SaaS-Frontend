import type { Ref, RefCallback } from "react";

/** Combines multiple refs (from independent hooks) onto a single DOM node. */
export function mergeRefs<T>(...refs: Array<Ref<T> | undefined>): RefCallback<T> {
  return (node) => {
    refs.forEach((ref) => {
      if (!ref) return;
      if (typeof ref === "function") ref(node);
      else (ref as React.RefObject<T | null>).current = node;
    });
  };
}
