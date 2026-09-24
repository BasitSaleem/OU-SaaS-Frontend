"use client";

import { useEffect, useState } from "react";

/** Splash overlay: plays its exit animation immediately, then unmounts once it's fully hidden. */
export function useHeroReveal(): boolean {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return visible;
}
