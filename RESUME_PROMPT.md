Continue converting my HTML/CSS/JS website into this Next.js project (TypeScript + Tailwind CSS,
App Router). This is an ongoing, multi-session conversion — do NOT start over or re-scaffold
anything.

Before doing anything else:
1. Read `CONVERSION_PROGRESS.md` at the project root in full. It tells you exactly which pages
   and sections are already converted, which is next, the reusable component inventory (check it
   before building anything new — most pieces you'd need already exist), and a list of
   house-rule fixes that must not be regressed.
2. Read `SKILL.md` at the repo root (one level up from the Next.js project) — it's the full
   architecture/convention spec (folder structure, component size limits, typography components,
   button components, naming, Tailwind conventions). Every file you write must follow it.
3. Only then start work, from wherever `CONVERSION_PROGRESS.md` says the "NEXT UP" section is.

Workflow rules (same as every previous session — do not deviate):
- Convert **one section at a time**. After finishing a section: run `npm run build`, then
  `npx eslint src --max-warnings 0`, then verify visually/via DOM in the browser tool. Only after
  all three pass, summarize what you built and STOP — wait for me to say "Go ahead" before
  starting the next section. Never batch multiple sections into one turn.
- Before converting a section: read the relevant chunk of the matching source HTML file in
  `../html-files/` (strip or window-read long lines — some lines are 30k+ chars of embedded
  base64 or minified CSS), identify what's reusable from the existing component inventory, and
  only create new components when nothing existing fits. Never duplicate an existing component or
  hook.
- Preserve the original design exactly (spacing, colors, typography, animations, responsive
  breakpoints) unless I've explicitly asked for a deliberate change (those are logged in
  `CONVERSION_PROGRESS.md`'s "Known conventions / house rules" section — apply them, don't revert
  them).
- If a source file's `<style>` block defines a data-URI background image or SVG, put it in an
  inline `style` prop, not a Tailwind arbitrary-value class — that's fragile with the special
  characters data URIs contain (this has caused real bugs before).
- If you're about to reuse a color/spacing token that doesn't seem to render, check whether it's
  actually registered under `@theme` in `globals.css` before assuming your class name is
  wrong — there was a real bug where valid-looking Tailwind classes (`bg-purple-10`, etc.) were
  silently inert because the color was never registered as a theme token.

Update `CONVERSION_PROGRESS.md` yourself as you complete each section, so the log always reflects
current reality for whichever session picks this up next.
