"use client";

import BusProductTile from "./BusProductTile";
import BusTileNext from "./BusTileNext";
import BusFeatureRow from "./BusFeatureRow";
import BusFoundationBar from "./BusFoundationBar";
import { useThroughScrollProgress } from "@/hooks/useThroughScrollProgress";
import { BUS_FEATURE_ROWS } from "@/constant/whyData";

const LABEL_HEAD_FOOT =
  "text-[13px] font-medium text-[#8a8a87] max-[640px]:text-[11px]";

const BusDiagram: React.FC = () => {
  const ref = useThroughScrollProgress<HTMLDivElement>();

  return (
    <div
      ref={ref}
      id="bus-diagram"
      aria-hidden
      className="relative overflow-hidden rounded-[var(--r-xl)] border border-[#1d1d1d] bg-[#0e0e0e] p-[clamp(20px,3.4vw,44px)] [--rail:rgba(247,247,245,0.22)] [background-image:radial-gradient(ellipse_60%_70%_at_75%_-10%,rgba(255,255,255,0.07),transparent_70%),radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] [background-position:0_0,0_0] [background-repeat:no-repeat,repeat] [background-size:auto,22px_22px] [box-shadow:inset_0_1px_0_rgba(255,255,255,0.06),0_60px_120px_-60px_rgba(0,0,0,0.9)] max-[640px]:rounded-[var(--r-lg)] max-[640px]:p-3"
      style={{ "--k": "clamp(0, calc((var(--p) - 0.26) / 0.3), 1)" } as React.CSSProperties}
    >
      <div className="grid grid-cols-[minmax(170px,1.3fr)_repeat(3,minmax(0,1fr))] gap-x-[clamp(8px,1.4vw,20px)] max-[640px]:grid-cols-[minmax(86px,1fr)_repeat(3,minmax(0,1fr))] max-[640px]:gap-x-1.5">
        <div className={`mb-8 ${LABEL_HEAD_FOOT}`}>Products</div>
        <BusProductTile productKey="pulse" logoHeight={22} />
        <BusProductTile productKey="inventory" logoHeight={25} />
        <BusTileNext />

        {BUS_FEATURE_ROWS.map((row, index) => (
          <BusFeatureRow key={row.title} row={row} index={index} />
        ))}

        <div className={`mt-8 ${LABEL_HEAD_FOOT}`}>Foundation</div>
        <BusFoundationBar />
      </div>
    </div>
  );
};

export default BusDiagram;
