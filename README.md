# Yazan Rashwani — Portfolio

A premium, single-page portfolio built with Next.js 15 (App Router), React 19,
Tailwind CSS v4, Framer Motion, GSAP, and Lenis.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Structure

```
app/                  Route entry: layout (fonts, SEO, JSON-LD), page (section order)
components/
  layout/              Chrome: navbar, footer, background FX, cursor glow, loader, Lenis provider
  sections/            The 6 page sections (Hero, About, Experience, Projects, Skills, Contact)
  ui/                   Reusable primitives (GlassCard, MagneticButton, SkillBadge, TimelineItem, ...)
hooks/                 useActiveSection (nav highlighting)
lib/                   data.ts — all copy/content lives here, sourced from the CV
types/                 Shared TypeScript interfaces
public/resume/         Downloadable CV (wired to the "Download CV" button)
public/projects/       Drop real project screenshots here (see below)
```

## Things to personalize before deploying

- **`lib/data.ts`** — single source of truth for every section's copy. GitHub and
  LinkedIn URLs are placeholders (marked `// TODO`) since they weren't in the CV —
  update `CONTACT` with the real profile links.
- **`SITE.url`** in `lib/data.ts` — set to the real production domain (used in
  metadata, sitemap, robots.txt, and JSON-LD).
- **Project screenshots** — cards currently render a gradient placeholder with the
  project's initials. Drop real screenshots in `public/projects/` (e.g. `gs-capital.png`)
  and pass `image` on the matching entry in `PROJECTS`, then swap the placeholder
  `div` in `components/ui/ProjectCard.tsx` for a Next.js `<Image>`.
- **Favicon / OG image** — add `app/icon.png` and `app/opengraph-image.png` for a
  branded tab icon and social preview card (Next.js picks these up automatically).

## Notes on the design system

- Dark theme with a violet→teal gradient motif (Figma design → live code), defined
  as Tailwind v4 theme tokens in `app/globals.css` (`@theme` block).
- Type system: **Space Grotesk** (display), **Plus Jakarta Sans** (body), **JetBrains
  Mono** (code-style labels/timestamps) — loaded via `next/font/google`, self-hosted
  automatically by Next.js.
- Motion: Framer Motion drives scroll reveals, the magnetic buttons, and layout
  transitions; GSAP is used narrowly for the hero's line-reveal; Lenis provides the
  inertial smooth scroll and is synced to GSAP's ticker.
- Everything respects `prefers-reduced-motion` (see the media query at the bottom
  of `globals.css`, plus explicit checks in `Hero`, `CursorGlow`, `PageLoader`, and
  `SmoothScrollProvider`).

## Accessibility

- Skip-to-content link, visible focus rings tuned to the palette, semantic landmarks,
  `aria-label`s on icon-only buttons, and decorative layers marked `aria-hidden`.
- Color contrast was chosen for AA on the dark background; re-check with your final
  copy if you change the palette.
