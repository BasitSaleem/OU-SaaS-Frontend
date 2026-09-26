/** Shared Tailwind class fragments for the Products-story dashboard mockups (both the desktop
 * sticky window and the mobile per-chapter preview) — sized on a 760×480 design canvas (--u). */
export const DASH_BASE =
  "absolute inset-0 grid bg-white text-ink [--u:calc(100cqw/760)] [font-size:calc(11.5*var(--u))] [grid-template-columns:calc(168*var(--u))_1fr] leading-[1.35]";

export const DASH_SIDE =
  "flex flex-col gap-[calc(18*var(--u))] border-r border-line bg-[#fbfbfa] [padding:calc(18*var(--u))_calc(12*var(--u))]";

export const DASH_SIDE_LOGO = "ml-[calc(6*var(--u))] h-[calc(22*var(--u))] w-auto";

export const DASH_NAV_ITEM_BASE =
  "flex items-center gap-[calc(8*var(--u))] rounded-[calc(7*var(--u))] text-[#4a4a4a] [padding:calc(7*var(--u))_calc(8*var(--u))]";
export const DASH_NAV_ITEM_ACTIVE = "bg-white font-medium text-ink [box-shadow:0_0_0_1px_var(--line)]";
export const DASH_NAV_ICON = "text-neutral-2 [height:calc(14*var(--u))] [width:calc(14*var(--u))]";

export const DASH_ACCOUNT =
  "mt-auto flex items-center gap-[calc(8*var(--u))] border-t border-line [padding:calc(8*var(--u))]";
export const DASH_AVATAR =
  "grid shrink-0 place-items-center rounded-full bg-ink font-semibold tracking-[0.02em] text-paper h-[calc(26*var(--u))] w-[calc(26*var(--u))] text-[calc(9*var(--u))]";

export const DASH_MAIN = "flex min-w-0 flex-col gap-[calc(14*var(--u))] [padding:calc(14*var(--u))_calc(20*var(--u))]";
export const DASH_TOP = "flex items-center justify-between text-neutral-2";
export const DASH_SEARCH =
  "flex items-center gap-[calc(6*var(--u))] rounded-[calc(8*var(--u))] bg-paper [padding:calc(6*var(--u))_calc(10*var(--u))] [width:calc(220*var(--u))]";
export const DASH_TITLE = "text-[calc(17*var(--u))] font-semibold tracking-[-0.03em]";

export const DASH_KPIS = "grid grid-cols-4 gap-[calc(10*var(--u))]";
export const DASH_KPI =
  "flex flex-col gap-[calc(2*var(--u))] rounded-[calc(10*var(--u))] border border-line [padding:calc(10*var(--u))_calc(12*var(--u))]";
export const DASH_KPI_LABEL = "text-neutral [font-size:calc(10.5*var(--u))]";
export const DASH_KPI_VALUE = "text-[calc(20*var(--u))] font-semibold tracking-[-0.04em]";
export const DASH_KPI_DELTA = "not-italic text-neutral [font-size:calc(10*var(--u))]";
