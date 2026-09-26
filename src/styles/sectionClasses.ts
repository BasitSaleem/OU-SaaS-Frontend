/** Shared Tailwind fragment for the source's `.container` utility (max-width + side gutter), reused
 * across the dark Why/Owners/Final sections instead of the site-wide `Container`/`wrapper` component
 * so their max-width matches the rest of this new Home design exactly. */
export const CONTAINER = "mx-auto w-full max-w-[calc(var(--max)+var(--gutter)*2)] px-[var(--gutter)]";
