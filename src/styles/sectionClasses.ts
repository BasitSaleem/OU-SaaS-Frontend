/** Shared Tailwind fragment for the source's `.container` utility (max-width + side gutter), reused
 * across the dark Why/Owners/Final sections instead of the site-wide `Container`/`wrapper` component
 * so their max-width matches the rest of this new Home design exactly. */
/** Font size for every page-hero h1: 44px mobile, 56 md, 72 lg, 92 xl, 104 2xl. */
export const HERO_H1_SIZE = "text-[44px] md:text-[56px] lg:text-[72px] xl:text-[92px] 2xl:text-[104px]";

export const CONTAINER ="mx-auto w-full max-w-[calc(var(--max)+var(--gutter)*2)] px-[var(--gutter)]";
