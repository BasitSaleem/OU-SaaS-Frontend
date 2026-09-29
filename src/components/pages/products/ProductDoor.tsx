"use client";

import Image from "next/image";
import { useTiltGlow } from "@/hooks/useTiltGlow";
import { PRODUCT_LOGOS } from "@/constant/productLogos";
import type { ProductDoorData } from "@/constant/productsPageData";

const PRODUCT_NAMES = { pulse: "Owners Pulse", inventory: "Owners Inventory" };

const ProductDoor: React.FC<{ door: ProductDoorData }> = ({ door }) => {
  const ref = useTiltGlow<HTMLAnchorElement>();

  return (
    <a
      ref={ref}
      href={door.href}
      className="group relative isolate flex min-h-[236px] flex-col gap-4 overflow-hidden rounded-3xl border border-line bg-white p-7 text-left transition-[transform,box-shadow,border-color] duration-500 ease-[var(--ease-out)] [--dx:50%] [--dy:50%] [--rx:0deg] [--ry:0deg] [box-shadow:0_1px_2px_rgba(11,11,11,0.04),0_12px_32px_-20px_rgba(11,11,11,0.18)] [transform-style:preserve-3d] [transform:rotateX(var(--rx))_rotateY(var(--ry))_translateY(0)] before:absolute before:inset-0 before:z-[-2] before:opacity-0 before:transition-opacity before:duration-[420ms] before:content-[''] before:[background-image:radial-gradient(360px_circle_at_var(--dx)_var(--dy),rgb(var(--tone-rgb)/0.10),transparent_70%)] hover:border-[rgb(var(--tone-rgb)/0.25)] hover:[box-shadow:0_2px_4px_rgba(11,11,11,0.04),0_40px_70px_-34px_rgb(var(--tone-rgb)/0.45)] hover:[transform:rotateX(var(--rx))_rotateY(var(--ry))_translateY(-6px)] hover:[transition:transform_160ms_linear,box-shadow_420ms_var(--ease-out),border-color_180ms] hover:before:opacity-100"
      style={{ "--tone-rgb": door.toneRgb, "--tone": door.toneVar } as React.CSSProperties}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[-1] opacity-[0.55] transition-opacity duration-[420ms] [background-image:radial-gradient(circle,rgb(var(--tone-rgb)/0.55)_1.1px,transparent_1.6px)] [background-size:14px_14px] [mask-image:radial-gradient(260px_circle_at_100%_100%,#000,transparent_70%)] [-webkit-mask-image:radial-gradient(260px_circle_at_100%_100%,#000,transparent_70%)] group-hover:opacity-100 group-hover:[mask-image:radial-gradient(170px_circle_at_var(--dx)_var(--dy),#000,transparent_75%)] group-hover:[-webkit-mask-image:radial-gradient(170px_circle_at_var(--dx)_var(--dy),#000,transparent_75%)]"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] p-px opacity-0 transition-opacity duration-[420ms] [-webkit-mask-clip:content-box,border-box] [-webkit-mask-composite:xor] [-webkit-mask-image:linear-gradient(#000_0_0),linear-gradient(#000_0_0)] [-webkit-mask-origin:content-box,border-box] [background-image:radial-gradient(220px_circle_at_var(--dx)_var(--dy),rgb(var(--tone-rgb)/0.9),transparent_65%)] [mask-clip:content-box,border-box] [mask-composite:exclude] [mask-image:linear-gradient(#000_0_0),linear-gradient(#000_0_0)] [mask-origin:content-box,border-box] group-hover:opacity-100"
      />

      <span className="flex items-center justify-between [transform:translateZ(20px)]">
        <Image src={PRODUCT_LOGOS[door.key]} alt={PRODUCT_NAMES[door.key]} className="h-8 w-auto" />
        <span
          aria-hidden
          className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-full border border-line bg-white text-neutral transition-[background-color,color,border-color,transform] duration-[420ms] ease-[var(--ease-out)] group-hover:scale-[1.06] group-hover:border-[var(--tone)] group-hover:bg-[var(--tone)] group-hover:text-white"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:animate-[go-nudge_1100ms_var(--ease-out)_150ms_1_both]"
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </span>
      </span>

      <span className="max-w-[18em] text-[clamp(20px,1.8vw,24px)] leading-[1.2] font-semibold tracking-[-0.035em] [transform:translateZ(14px)]">
        {door.line}
      </span>

      <span className="mt-auto flex flex-wrap gap-1.5 [transform:translateZ(10px)]">
        {door.chips.map((chip, i) => (
          <span
            key={chip}
            style={{ transitionDelay: `${i * 35}ms` }}
            className="inline-flex h-7 items-center rounded-full border border-line bg-white/75 px-[11px] text-[12.5px] font-medium text-[#3d3d3d] backdrop-blur-[6px] transition-[transform,border-color,color] duration-500 ease-[var(--ease-out)] group-hover:-translate-y-[3px] group-hover:border-[rgb(var(--tone-rgb)/0.35)] group-hover:text-ink"
          >
            {chip}
          </span>
        ))}
      </span>
    </a>
  );
};

export default ProductDoor;
