# HTML → Next.js Conversion — Progress Log

This file exists so a **new chat/session** can resume this conversion exactly where the last one
stopped, without re-reading the whole conversation history. Read this file first, then read
`SKILL.md` (project conventions — still authoritative and unchanged).

Source HTML files live in `D:\Owners-siblings\owners-univers\html-files\`:
`ou-homepage_57.html`, `ou-privacy.html`, `ou-terms.html`, `ou-contact.html`, `ou-about.html`,
`ou-cookies.html`. The Next.js project itself is `D:\Owners-siblings\owners-univers\owners-universe\`.

## Workflow contract with the user

Convert **one section at a time**. After finishing a section: stop, summarize what changed, and
wait for the user to say "Go ahead" before starting the next section. Never batch multiple
sections in one turn unless explicitly told to.

Before converting any section: read the relevant chunk of the source HTML (it has huge single
lines — base64 images, minified CSS — so strip lines >1000 chars before reading, or read in small
offset/limit windows), identify anything already built that can be reused, and only create new
components when nothing existing fits.

## Status by page

### ✅ Home page (`/`) — 100% complete
All sections converted: Header/Footer (shared, used by every page), Hero, Products, Marquee,
Ecosystem, Proof, Closer. Source: `ou-homepage_57.html`.

### ✅ Privacy Policy (`/privacy`) — 100% complete
Source: `ou-privacy.html`. Uses the shared `legal/` component set (see below).

### ✅ Terms of Service (`/terms`) — 100% complete
Source: `ou-terms.html`. Reuses 100% of the Privacy page's components — only `termsData.ts` is new.

### ✅ Contact (`/contact`) — 100% complete
Source: `ou-contact.html`.

All sections converted:
1. Page shell — `PageMesh` (fixed gradient bg) + `ContactHero` (eyebrow/h1/p)
2. Info + Form — `ContactInfoPanel` (left card) + `ContactForm` (right card, mailto submit)
3. Support Channels — `SupportChannels` + `SupportChannelCard` (Account/Pulse/Inventory cards)
4. "How It Works" (3 steps) — `ContactSteps` + `ContactStepCard` (`src/constant/contactStepsData.ts`)
5. Business info strip — `BusinessInfoStrip` (`src/constant/contactStripData.ts`)
6. Investors & Partnerships — `ContactInvestors` (`src/constant/contactInvestData.ts`)

### ✅ About (`/about`) — 100% complete
Source: `ou-about.html`.

All sections converted:
1. Page shell — `AboutLayout` (metadata) + `AboutHero` (breadcrumb/h1/sub) (`src/constant/aboutData.ts`)
2. "Our Story" — `AboutStory` (heading + 5 narrative paragraphs) (`src/constant/aboutData.ts`)
3. "What We Believe" (Values) — `AboutValues` (heading + 4 numbered items 01–04) (`src/constant/aboutData.ts`)
4. "By the Numbers" (Stats) — `AboutStats` + `AboutStatCard` (4 animated counter cards) (`src/constant/aboutData.ts`)
5. "Where We're Based" (Location) — `AboutLocation` (heading + desc + address card) (`src/constant/aboutData.ts`)
6. CTA — `AboutCta` (`src/constant/aboutData.ts`)

### ✅ Cookies Policy (`/cookies`) — 100% complete
Source: `ou-cookies.html`. Reuses 100% of the shared `legal/` component set with `src/constant/legal/cookiesData.ts`.

### 🔶 Products (`/products`) — IN PROGRESS
Custom dedicated Products showcase page.

Done:
1. Hero Section — `ProductsHero` + `ProductsHeroIcon` (`src/constant/productsPageData.ts`), matching provided reference design.
2. The Products Showcase (Section 2) — `ProductsShowcase`, `ProductShowcaseCard`, `ProductShowcaseIcons` (`src/constant/productsPageData.ts`), featuring Owners Pulse & Owners Inventory 2-column showcase cards with exact custom SVGs (check & plus icons), gradient themes, feature list, add-ons list, and CTA buttons.

---

🎉 **PAGE CONVERSION STATUS:**
- `/` (Home) — 100% Complete
- `/privacy` (Privacy Policy) — 100% Complete
- `/terms` (Terms of Service) — 100% Complete
- `/contact` (Contact) — 100% Complete
- `/about` (About) — 100% Complete
- `/cookies` (Cookies Policy) — 100% Complete
- `/products` (Products) — In Progress (Hero & Showcase Cards Done)

## Reusable component inventory (check here before building anything new)

**Layout/shared** (`src/components/`):
- `Container.tsx` — applies the `wrapper` utility class (defined in `globals.css` via `@utility
  wrapper`) for page side-gutters. Use for any new section's outer container.
- `Eyebrow.tsx` — the small pill badge (coral dot + label), `forwardRef`-capable for scroll-reveal.
- `PageMesh.tsx` — fixed page-wide gradient background (Contact page uses it; About/Cookies might
  need it too — check their `<style>` block for a `.page-mesh` rule).
- `CustomCursor.tsx` + `useCursorAndMagnet` hook — global custom cursor / magnetic-button system,
  mounted once in root layout. Any new `.magnet` + `data-cursor-hover` element just needs those
  exact class/attribute names — no per-component wiring needed.

**Typography** (`src/components/pages/typography/`): `MainHeading`, `SubHeading`, `Paragraph`,
`CardHeading`, `CardDesc` — all `forwardRef`-capable, accept an `as` prop to render as a different
tag. Sizes were deliberately changed from the original site's fluid `clamp()` scale to a fixed
OP-SaaS-style scale per explicit user request (see git history / conversation — this was NOT a
oneoff mistake, it's intentional and already applied sitewide). Legal-page copy (Privacy/Terms)
intentionally does NOT use these — it has its own smaller type scale matching `.legal-content`
CSS, scoped inside `legal/LegalContentBlock.tsx`.

**Buttons** (`src/components/button/`): `ButtonPill`, `ButtonPrimary` (supports `magnetic` prop),
`ButtonGhost`, `ButtonOutlineDark`, `ButtonCloser`. Check these before writing a new button —
several sections already reuse the same 2-3 variants.

**Form fields** (`src/components/inputField/`): `InputField`, `SelectField`, `TextArea` — built
for the Contact form, uncontrolled (read via `FormData` on submit, no react-hook-form dependency
installed). Reuse these for any other form.

**Icons**: `src/components/icons/GlyphIcon.tsx` is a **filled-icon** registry (shield/check/users)
used only by the Proof section — do not add stroke-style icons to it. For one-off stroke-style
Feather icons (the site's dominant icon style), follow the established pattern of a small local
icon map component next to where it's used (see `ContactInfoIcon.tsx` or `StackCard.tsx`'s
`CARD_ICON_PATHS`).

**Legal pages** (`src/components/pages/legal/`): `LegalHero`, `LegalNav` (sticky sidebar +
scroll-spy), `LegalLayout` (two-col grid shell), `LegalContentSection`, `LegalContentBlock` (renders
typed content blocks: `p` / `h3` / `ul` / `table` / `contact-card`). Content lives in
`src/constant/legal/{privacyData,termsData}.ts` using shared types from
`src/constant/legal/legalTypes.ts`. **If Cookies page turns out to share this same layout, reuse
all of these — just add `cookiesData.ts`.**

**Contact page** (`src/components/pages/contact/`): `ContactHero`, `ContactInfoIcon` (small
stroke-icon map: mail/phone/pin/clock), `ContactInfoItem`, `ContactInfoPanel`, `ContactForm`,
`ContactInfoForm` (wraps info+form in the 2-col grid), `SupportChannelCard`, `SupportChannels`,
`ContactStepCard`, `ContactSteps`, `BusinessInfoStrip`, `ContactInvestors`.
Data in `src/constant/contactData.ts` (hero/info/form), `src/constant/contactChannelsData.ts` (support channel cards),
`src/constant/contactStepsData.ts` (how it works 3 steps), `src/constant/contactStripData.ts` (business info strip),
and `src/constant/contactInvestData.ts` (investors & partnerships).

**About page** (`src/components/pages/about/`): `AboutHero`, `AboutStory`, `AboutValues`, `AboutStats`, `AboutStatCard`,
`AboutLocation`, `AboutCta`. Data in `src/constant/aboutData.ts`.

**Hooks** (`src/hooks/`) — all reusable across pages, check before writing a new one:
- `useScrollReveal(ref, delayMs?)` — the generic fade-in-on-scroll-into-view hook. Used
  EVERYWHERE (`.rv` on Home, `.rv-c` on Contact — same IntersectionObserver pattern, just
  different delay increments: Home = 60/120/180ms, Contact = 80/160/240ms. Pass `delayMs`
  accordingly per source CSS's `.rv-dN{transition-delay:...}`).
- `useSectionScrollSpy` — legal page sidebar active-link tracking + smooth-scroll-with-offset.
- `useNavScroll` — navbar frosted-background-on-scroll (navbar no longer hides on scroll — user
  explicitly asked to remove the hide-on-scroll behavior; it now always stays visible).
- `useTilt`, `useAmbientParallax`, `useEcosystemReveal`, `useCardShuffle`, `useStickyCardStack`,
  `useHeroReveal`, `useCursorAndMagnet` — all section-specific, see their file for what they do.

## Known conventions / house rules (from the user, apply going forward)

- **Wrapper utility**: side-gutter spacing is the `wrapper` Tailwind utility (`@utility wrapper`
  in `globals.css`) — margins of 16/32/40/40px at breakpoints, capped at `max-width:1350px`
  centered above 1440px. Always use `<Container>` for this, never hand-roll padding.
- **Typography sizes**: use the 5 typography components' fixed scale for all *marketing* section
  headings/paragraphs (not legal boilerplate, not form labels, not small UI chrome like nav links
  or footer text — those keep their own bespoke sizing as in the original CSS).
- **Font family stays as-is**: Outfit for headings (`font-heading`), DM Sans for body
  (`font-sans`) — do not introduce the OP-SaaS project's "Onest" font.
- **Mobile fixes already applied** (don't regress these):
  - Ecosystem stack-card fan spread is responsive via a `--fan-x` CSS custom property (78px at
    ≤480px, 108px at 481-900px, 148px above) — do not hardcode 148px again for mobile.
  - Stack cards' icon size shrinks and height goes `auto`/`min-h` (not a fixed clamp) at ≤900px so
    text doesn't overflow the rounded corners.
  - Footer has zero outer padding on mobile (`p-0 sm:p-6`), edge-to-edge below `sm`.
- **Contact-card padding** in Legal pages is `28px 30px` (vertical/horizontal) — do NOT swap these
  (this was a real bug that got fixed: `px-[30px] py-7`, not `p-7 py-[30px]`).
- **`bg-purple-10` / `bg-coral-10` / `bg-purple-05` / `bg-coral-10` are real, valid Tailwind
  classes** — they're registered in `globals.css`'s `@theme inline` block
  (`--color-purple-10: var(--purple-10)` etc.). This was a real bug (silently did nothing) that
  got fixed — if you ever see a translucent-tint background not rendering, check this is still
  registered before debugging further.
- Every new page needs its own `layout.tsx` (metadata only, returns `<>{children}</>`) +
  `page.tsx` (assembly only) inside `src/app/(landing-page)/<route>/`, per `SKILL.md`'s per-page
  layout template.
- Data-only files (e.g. `privacyData.ts`, `termsData.ts`) are exempt from the 220-line component
  limit — same exception `SKILL.md` grants icon files.

## Environment notes

- Dev server: `npm run dev` inside `owners-universe/`. **A stale dev server from a previous
  session is often still holding port 3000** — check with
  `Get-NetTCPConnection -LocalPort 3000` and kill it before starting a fresh one, or the preview
  tool will spin up on a random port instead.
- Verification workflow used throughout: `npm run build` (catches TS errors), then
  `npx eslint src --max-warnings 0`, then visually check in the browser tool. The in-browser
  screenshot tool has been unreliable at certain scroll depths this whole project (returns blank
  or torn/stale frames) — when that happens, fall back to `javascript_exec` +
  `getComputedStyle`/DOM queries to verify rendering instead of fighting the screenshot tool.
