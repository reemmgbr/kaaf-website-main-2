# Mandatory Project Guidelines for AI Assistants

1. **Component Modularization**:
   - Every page section MUST be separated into its own modular component placed inside `src/components/sections/` or `src/components/layout/`.
   - Keep page files (`page.tsx`) clean and focused on assembling section components.

2. **Image Optimization (`next/image`)**:
   - EVERY image MUST use the `Image` component from `next/image`.
   - Never use standard `<img>` HTML tags.
   - Always supply explicit `width`, `height`, `alt`, and `priority` for above-the-fold images.

3. **Routing & Navigation (`next/link`)**:
   - EVERY internal link MUST use the `Link` component from `next/link`.
   - Never use standard `<a>` HTML tags for internal routes.

4. **Strict Color Palette Restriction**:
   - MUST ONLY use the following 6 approved color codes (defined as Tailwind utilities):
     - `#03111F` (Dark Navy: `bg-brand-dark-navy`, `text-brand-dark-navy`, `border-brand-dark-navy`)
     - `#D2BB79` (Gold: `bg-brand-gold`, `text-brand-gold`, `border-brand-gold`)
     - `#FFF7E6` (Cream: `bg-brand-cream`, `text-brand-cream`, `border-brand-cream`)
     - `#0B0B0B` (Near Black: `bg-brand-black`, `text-brand-black`, `border-brand-black`)
     - `#5E96B7` (Steel Blue: `bg-brand-steel-blue`, `text-brand-steel-blue`, `border-brand-steel-blue`)
     - `#E9EDF3` (Light Grey-Blue: `bg-brand-light-grey`, `text-brand-light-grey`, `border-brand-light-grey`)
   - DO NOT use unapproved colors, arbitrary hex codes, or standard Tailwind color utilities (e.g. `bg-indigo-600`, `text-slate-900`).

5. **Tailwind Container Usage**:
   - Use the `container` class or container wrapper with responsive padding (`mx-auto px-4 sm:px-6 lg:px-8`) whenever centering content in sections.

6. **Accessibility (a11y)**:
   - Ensure WCAG 2.1 AA compliant color contrast between background and text.
   - Use semantic HTML tags (`<main>`, `<header>`, `<footer>`, `<section>`, `<article>`, `<nav>`, `<aside>`).
   - Include proper `aria-label`, `aria-expanded`, and keyboard focus states (`focus-visible:outline-2`).

7. **SEO Best Practices**:
   - Single `<h1>` per page with proper heading hierarchy (`<h2>`, `<h3>`).
   - Populate page metadata (title, description, openGraph, twitter cards) in layout/page metadata export.

8. **Performance Optimization**:
   - Keep Server Components as the default. Only use `"use client"` when interactive state or lifecycle hooks are required.
   - Optimize bundle size, lazy load images, avoid layout shifts.

9. **Typography**:
   - Primary font family MUST be `Forma DJR Arabic Display` (`font-forma`).

10. **RTL Direction & Localization**:
    - The application MUST strictly operate in Right-To-Left direction (`dir="rtl"`, `lang="ar"`).
    - Use Tailwind logical directional utilities (e.g., `ms-*`, `me-*`, `ps-*`, `pe-*`, `start-*`, `end-*`) to ensure seamless RTL layouts.

