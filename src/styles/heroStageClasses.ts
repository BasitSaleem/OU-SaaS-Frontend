/** Shared Tailwind class fragments for the Hero stage nodes — every dimension is `calc(N * var(--u))`
 * so the whole scene scales together; mobile collapses each node back into normal document flow. */
export const NODE_BASE =
  "absolute border border-black/[0.07] bg-white leading-[1.4] text-ink [border-radius:calc(18*var(--u))] [padding:calc(20*var(--u))] [font-size:calc(13*var(--u))] [will-change:transform,opacity] [box-shadow:0_1px_2px_rgba(11,11,11,0.04),0_calc(24*var(--u))_calc(60*var(--u))_calc(-20*var(--u))_rgba(11,11,11,0.18)] max-[900px]:!relative max-[900px]:!inset-auto max-[900px]:!h-auto max-[900px]:!w-full max-[900px]:!opacity-100 max-[900px]:![transform:none]";

export const NODE_MOBILE_CONNECTOR =
  "max-[900px]:before:absolute max-[900px]:before:-top-[29px] max-[900px]:before:left-1/2 max-[900px]:before:h-7 max-[900px]:before:border-l max-[900px]:before:border-dashed max-[900px]:before:border-[#bdbdb8] max-[900px]:before:content-['']";

export const NODE_HEAD = "flex items-center justify-between";

export const NODE_ROLE =
  "rounded-full bg-paper font-mono tracking-[0.08em] text-neutral uppercase [font-size:calc(10.5*var(--u))] [padding:calc(4*var(--u))_calc(8*var(--u))]";

export const NODE_METRIC = "mt-[calc(4*var(--u))] flex flex-col gap-[calc(2*var(--u))]";
export const NODE_LABEL = "text-neutral [font-size:calc(12*var(--u))]";
export const NODE_VALUE = "font-semibold leading-[1.1] tracking-[-0.04em] [font-size:calc(30*var(--u))]";
export const NODE_VALUE_DELTA = "ml-[calc(6*var(--u))] align-middle font-medium text-[#0f7a5a] not-italic [font-size:calc(12*var(--u))]";

export const NODE_ROWS =
  "mt-auto flex flex-col gap-[calc(8*var(--u))] border-t border-line [padding-top:calc(12*var(--u))] max-[900px]:mt-1";
export const NODE_ROW_ITEM = "flex items-center gap-[calc(8*var(--u))] text-[#3d3d3d] [font-size:calc(12*var(--u))]";
export const NODE_ROW_ICON = "shrink-0 text-neutral [width:calc(14*var(--u))] [height:calc(14*var(--u))]";
