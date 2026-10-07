/** Shared Tailwind class fragments for the Hero stage nodes — every dimension is `calc(N * var(--u))`
 * so the whole scene scales together; mobile collapses each node back into normal document flow. */
export const NODE_BASE =
  "absolute border border-black/[0.07] bg-white leading-[1.4] text-ink [border-radius:calc(18*var(--u))] [padding:calc(20*var(--u))] [font-size:calc(13*var(--u))] [will-change:transform,opacity] [box-shadow:inset_0_1px_0_rgb(255_255_255/0.9),0_1px_2px_rgb(11_11_11/0.04),0_calc(8*var(--u))_calc(16*var(--u))_calc(-8*var(--u))_rgb(11_11_11/0.06),0_calc(28*var(--u))_calc(60*var(--u))_calc(-18*var(--u))_rgb(var(--tone-rgb)/0.32)] max-[900px]:!relative max-[900px]:!inset-auto max-[900px]:!h-auto max-[900px]:!w-full max-[900px]:!opacity-100 max-[900px]:![transform:none]";

export const NODE_MOBILE_CONNECTOR =
  "max-[900px]:before:absolute max-[900px]:before:-top-[29px] max-[900px]:before:left-1/2 max-[900px]:before:h-7 max-[900px]:before:border-l max-[900px]:before:border-dashed max-[900px]:before:border-[#bdbdb8] max-[900px]:before:content-['']";

export const NODE_HEAD = "flex items-center justify-between";

export const NODE_ROLE =
  "inline-flex items-center gap-[calc(6*var(--u))] rounded-full bg-[rgb(var(--tone-rgb)/0.08)] font-medium text-[var(--tone-ink)] [box-shadow:inset_0_0_0_1px_rgb(var(--tone-rgb)/0.12)] [font-size:calc(11.5*var(--u))] [padding:calc(4*var(--u))_calc(10*var(--u))_calc(4*var(--u))_calc(8*var(--u))]";
export const NODE_ROLE_DOT = "rounded-full bg-current [height:calc(6*var(--u))] [width:calc(6*var(--u))]";

export const NODE_METRIC = "mt-[calc(4*var(--u))] flex flex-col gap-[calc(2*var(--u))]";
export const NODE_LABEL = "text-neutral [font-size:calc(12*var(--u))]";
export const NODE_VALUE =
  "flex items-center gap-[calc(8*var(--u))] font-semibold leading-[1.1] tracking-[-0.045em] tabular-nums [font-size:calc(30*var(--u))]";
export const NODE_VALUE_DELTA =
  "inline-flex items-center gap-[calc(3*var(--u))] rounded-full bg-[rgb(15_122_90/0.09)] font-semibold tracking-normal text-[#0f7a5a] not-italic [font-size:calc(11.5*var(--u))] [padding:calc(3*var(--u))_calc(7*var(--u))_calc(3*var(--u))_calc(6*var(--u))]";

export const NODE_ROWS =
  "mt-auto flex flex-col gap-[calc(7*var(--u))] border-t border-[rgb(11_11_11/0.06)] [padding-top:calc(12*var(--u))] max-[900px]:mt-1";
export const NODE_ROW_ITEM = "flex items-center gap-[calc(9*var(--u))] text-[#3d3d3d] [font-size:calc(12*var(--u))]";
export const NODE_ROW_ICON_BOX =
  "grid shrink-0 place-items-center rounded-[calc(7*var(--u))] bg-[rgb(var(--tone-rgb)/0.08)] text-[var(--tone-ink)] [height:calc(22*var(--u))] [width:calc(22*var(--u))]";
export const NODE_ROW_ICON_BOX_WARN = "!bg-coral/10 !text-coral";
