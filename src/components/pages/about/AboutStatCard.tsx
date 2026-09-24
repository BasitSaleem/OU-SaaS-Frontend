"use client";

import { useEffect, useRef, useState } from "react";
import CardHeading from "@/components/pages/typography/CardHeading";
import CardDesc from "@/components/pages/typography/CardDesc";
import type { AboutStatItem } from "@/constant/aboutData";

const AboutStatCard: React.FC<{ stat: AboutStatItem }> = ({ stat }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;
            const target = stat.count;
            const duration = 1200;
            const start = performance.now();

            const step = (now: number) => {
              const t = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - t, 3);
              setDisplayValue(Math.round(target * eased));
              if (t < 1) {
                requestAnimationFrame(step);
              }
            };
            requestAnimationFrame(step);
            observer.unobserve(node);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [stat.count]);

  return (
    <div
      ref={cardRef}
      className="rounded-[16px] border border-g200 bg-white p-[28px_24px] text-center"
    >
      <CardHeading as="div" className="!font-heading !text-[length:clamp(2rem,3vw,2.75rem)] !font-bold !leading-none !tracking-[-0.03em] !text-purple">
        {displayValue}
        {stat.suffix ?? ""}
      </CardHeading>
      <CardDesc as="div" className="mt-2 !text-[13px] !leading-[1.4] !text-g500">
        {stat.label}
      </CardDesc>
    </div>
  );
};

export default AboutStatCard;
