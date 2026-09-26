"use client";

import OwnersCopy from "./OwnersCopy";
import Mosaic from "./Mosaic";
import OwnersPromises from "./OwnersPromises";
import { useThroughScrollProgress } from "@/hooks/useThroughScrollProgress";
import { CONTAINER } from "@/styles/sectionClasses";

const Owners: React.FC = () => {
  const ref = useThroughScrollProgress<HTMLElement>();

  return (
    <section
      ref={ref}
      id="owners"
      aria-labelledby="owners-title"
      className="relative z-3 -mt-7 rounded-t-[var(--r-xl)] bg-paper py-[clamp(96px,14vw,180px)] [--p:0]"
    >
      <div className={`${CONTAINER} grid grid-cols-[minmax(0,5fr)_minmax(0,6fr)] items-center gap-[clamp(40px,6vw,96px)] max-[900px]:grid-cols-1`}>
        <OwnersCopy />
        <Mosaic />
      </div>
      <OwnersPromises />
    </section>
  );
};

export default Owners;
