# Airtable Project — Component & Design System Guide

> Written for someone who is new to UI/UX design and frontend development.  
> This guide explains **what** every file does, **why** it exists, and **where** it is used.

---

## Table of Contents

1. [What Is This Project?](#1-what-is-this-project)
2. [Folder Structure](#2-folder-structure)
3. [Design System — Colors, Fonts & Spacing](#3-design-system)
4. [Heading Hierarchy (Typography Rules)](#4-heading-hierarchy)
5. [Custom Tailwind Utilities](#5-custom-tailwind-utilities)
6. [UI Components](#6-ui-components) — Button, Container
7. [Icon Components](#7-icon-components)
8. [Common Components](#8-common-components) — Announcementbar, Header, Footer
9. [Shared Components](#9-shared-components) — HeroSection, FeatureSection
10. [Home Page Sections](#10-home-page-sections)
11. [Flex vs Grid — Why Flex in Most Cases](#11-flex-vs-grid)
12. [How Tailwind CSS Works (Beginner Primer)](#12-how-tailwind-css-works)
13. [How to Add a New Section](#13-how-to-add-a-new-section)
7. [Common Components](#7-common-components) — Announcementbar, Header, Footer
8. [Shared Components](#8-shared-components) — HeroSection, FeatureSection
9. [Home Page Sections](#9-home-page-sections)
10. [How Tailwind CSS Works (Beginner Primer)](#10-how-tailwind-css-works)
11. [How to Add a New Section](#11-how-to-add-a-new-section)

---

## 1. What Is This Project?

This is a **pixel-accurate clone of the Airtable marketing homepage**, built with:

- **Next.js 15** — the framework that handles routing, rendering, and file structure
- **Tailwind CSS v4** — a utility-first CSS framework (you write CSS by adding class names directly in HTML)
- **TypeScript** — JavaScript with type checking so mistakes are caught early
- **React** — the library that lets you build UI as reusable components

The page you see when you visit the site is assembled from many smaller **components** — think of components like LEGO bricks. Each brick does one job and you snap them together to build a page.

---

## 2. Folder Structure

```
src/
└── app/
    ├── page.tsx               ← The homepage — assembles all sections in order
    ├── layout.tsx             ← Wraps every page: adds Header, Footer, fonts
    ├── globals.css            ← Global styles: colors, fonts, custom utilities
    └── layouts/
        ├── ui/                ← Small reusable building blocks (Button, Container)
        ├── icons/             ← All SVG icon components
        ├── common/            ← Components shown on every page (Header, Footer, Announcementbar)
        ├── shared/            ← Generic section templates reused across pages
        └── home/              ← Sections that are specific to the homepage only
```

**Why is it split this way?**  
Keeping things in separate folders makes it easy to find, reuse, and change a piece without breaking everything else. If you need to change the button style across the whole site, you change only `ui/Button.tsx`.

---

## 3. Design System

A design system is a set of rules that keeps the whole site looking consistent — same colors, same font sizes, same spacing everywhere. Ours lives in `src/app/globals.css` inside the `@theme {}` block.

### 3.1 Colors

Every color has a **name** and a **number**. The number is called a **shade** — lower numbers are lighter, higher numbers are darker.

Colors follow the **Figma naming convention**: Primary = interactive actions, Secondary = dark surfaces, Accent = highlights, Neutral = backgrounds and grays.

#### Primary — interactive blues (buttons, links, active states)

| Tailwind Class | Hex | Used for |
|---|---|---|
| `bg-primary-100` / `text-primary-100` | `#CCE0FE` | POPULAR badge background (light blue tint) |
| `text-primary-300` / `bg-primary-300` | `#1B61C9` | Main CTA button, link hover color, progress bar |
| `text-primary-500` | `#254FAD` | POPULAR badge text, hero subtext color |
| `text-primary-900` | `#1A3866` | Hero heading (darkest primary shade) |

#### Secondary — dark surfaces and text

| Tailwind Class | Hex | Used for |
|---|---|---|
| `text-secondary-500` | `#070C14D1` | Announcement bar text (semi-transparent dark) |
| `text-secondary-600` | `#040E20B0` | Card description text (semi-transparent dark) |
| `text-secondary-800` | `#181D26` | **Main heading and label color** — nav text, section headings, button outlines |

#### Neutral — backgrounds, borders, gray text

| Tailwind Class | Hex | Used for |
|---|---|---|
| `bg-neutral-50` | `#F0F6FF` | Page section backgrounds (very light blue-gray) |
| `border-neutral-200` | `#E0E2E6` | Borders, dividers, card outlines |
| `text-neutral-400` | `#C0C6D1B8` | Subtle disabled/placeholder color |
| `text-neutral-500` | `#9297A0` | Social icons, muted icon color |
| `text-neutral-600` | `#949494` | Chevron nav indicators |
| `text-neutral-700` | `#41454D` | WorkflowSection description text |
| `text-neutral-800` | `#333840` | Main paragraph text throughout the page |
| `text-neutral-900` | `#333333` | Card title text (dark gray, near-black) |

#### Accent — highlights and special elements

| Tailwind Class | Hex | Used for |
|---|---|---|
| `text-accent-300` / `bg-accent-300` | `#0AB2FA` | Progress bar fill in WorkflowSection |
| `bg-accent-500` / `text-accent-500` | `#F82B60` | Stat accent bar in ResultsSection |

#### Purple — FloatingCTA component only

| Tailwind Class | Hex | Used for |
|---|---|---|
| `bg-purple-50` | `#EEE8FA` | FloatingCTA card background |
| `text-purple-500` | `#622CA0` | FloatingCTA heading color |

**How to read a color class:**  
`text-primary-800` → `text` = applies to text color, `primary` = the color family, `800` = the shade (dark).  
`bg-neutral-50` → `bg` = applies to background, `neutral` = gray family, `50` = very light.

### 3.2 Typography Scale

| Tailwind Class | Size | Use case |
|---|---|---|
| `text-xs` | 12px | Smallest text — card type labels |
| `text-sm` | 14px | Small text — legal links, badges |
| `text-md` | 16px | Default body text |
| `text-lg` | 18px | Larger body — subtext, paragraphs |
| `text-xl` | 20px | Medium heading — "Looking for inspiration?" |
| `text-2xl` | 24px | — |
| `text-3xl` | 32px | Section headings |
| `text-4xl` | 40px | Large section headings (mobile-responsive) |
| `text-5xl` | 64px | Hero heading on large screens |

**Font weight:**  
- `font-normal` = 400 (regular paragraph text)  
- `font-medium` = 500 (headings, labels, buttons)

**Line height** controls the space between lines of text:  
- `leading-10` = 40px line height  
- `leading-[24.3px]` = exactly 24.3px (using an arbitrary value in square brackets)

**Letter spacing** controls the gap between individual letters:  
- `tracking-[0.18px]` = 0.18px space between each character

### 3.3 Spacing System

Tailwind uses a **4px grid**. Every spacing number is multiplied by 4px:

| Class | Size |
|---|---|
| `p-4` | 16px padding |
| `p-8` | 32px padding |
| `p-12` | 48px padding |
| `gap-4` | 16px gap between items |
| `gap-8` | 32px gap |
| `mt-6` | 24px margin top |
| `px-6` | 24px left + right padding |

---

## 4. Heading Hierarchy

HTML headings (`h1` → `h6`) are not just about font size — they define the **structure of the document** for browsers, search engines, and screen readers. Think of them like a book: the book title is `h1`, chapter titles are `h2`, section titles within a chapter are `h3`, and so on.

### The Rule

| Tag | Frequency | Used for | Example |
|---|---|---|---|
| `h1` | **Once per page** | The page title — the most important heading | Hero headline |
| `h2` | **Once per section component** | Main heading of each page section | "Results you can measure" |
| `h3` | **Multiple per component allowed** | Sub-items within a section or footer group labels | Card titles, footer column headings |
| `h4`–`h6` | Rarely needed | Deep nesting only | Not used in this project |

### Why this matters

- **Accessibility:** Screen readers navigate a page by jumping between headings. A blind user can hear all the `h2` headings to understand what sections exist, then dive into a section. Wrong heading levels destroy this experience.
- **SEO:** Search engines weight `h1` the most, then `h2`, etc. Misusing them hurts search rankings.
- **Clarity:** A consistent hierarchy makes the codebase easier to read and maintain.

### Page-level document outline

This is what the heading structure looks like across the entire homepage:

```
h1  "Business operations. Redefined"              ← HeroSection (only h1 on the page)
│
├── h2  "Operationalize your critical data…"       ← FeatureSection (instance 1)
├── h2  "Simple to build. Intuitive to use."       ← FeatureSection (instance 2)
├── h2  "No matter your workflow…"                 ← WorkflowSection
├── h2  "Transform workflows with AI"              ← FloatingCTASection
├── h2  "Integrate critical workflows"             ← IntegrationSection
├── h2  "Results you can measure"                  ← ResultsSection
├── h2  "Looking for inspiration?…"                ← ResourcesSection
│     ├── h3  "Forrester Study: The Crisis…"       ← ResourcesSection card
│     ├── h3  "How 6 world-class companies…"       ← ResourcesSection card
│     └── h3  …(more cards)
├── h2  "Teams at over 450,000…"                   ← BottomCTASection
│
└── [footer]
      ├── h3  "Platform"                           ← Footer column heading
      ├── h3  "Solutions"                          ← Footer column heading
      ├── h3  "Learn"                              ← Footer column heading
      ├── h3  "Resources"                          ← Footer column heading
      └── h3  "Company"                            ← Footer column heading
```

The footer uses `h3` (not `h4`) because there is no `h2` inside the footer — jumping from `h2` in the main content directly to `h4` in the footer skips a level, which is invalid.

### Rules enforced in this codebase

1. **`h1` appears exactly once** — only in `HeroSection.tsx`. Never add `h1` to any other component.
2. **Every section component has exactly one `h2`** — its main heading. No section should have zero or multiple `h2` tags.
3. **`h3` is for sub-items** — card titles, list item headings, footer column labels. Multiple `h3` per component is fine as long as they are genuinely subordinate to the `h2`.
4. **Never skip levels** — do not go from `h2` directly to `h4`. Always go `h2 → h3 → h4` in order.
5. **Headings are not styled with heading tags** — if text only needs to look big, use a `<p>` or `<span>` with Tailwind size classes instead. Only use `h1–h6` when the text genuinely introduces a section or sub-section of content.

### Example — correct vs wrong

```tsx
// ✅ CORRECT — one h2 for the section, h3 for each card
<section>
  <h2>Featured resources</h2>
  <div>
    <h3>Card title one</h3>
    <h3>Card title two</h3>
  </div>
</section>

// ❌ WRONG — two h2 tags in one component
<section>
  <h2>Featured resources</h2>
  <div>
    <h2>Card title one</h2>   ← should be h3
    <h2>Card title two</h2>   ← should be h3
  </div>
</section>

// ❌ WRONG — skipping from h2 to h4
<section>
  <h2>Section heading</h2>
  <h4>Sub item</h4>   ← skipped h3, invalid hierarchy
</section>
```

---

## 5. Custom Tailwind Utilities  

These are shortcuts defined in `globals.css` using `@utility`. They apply standard vertical padding to sections.

| Class | What it does | Used in |
|---|---|---|
| `section48` | `padding: 48px 0` (top + bottom) | FloatingCTASection, BottomCTASection |
| `section72` | `padding: 72px 0` | IntegrationSection, ResourcesSection |
| `section96` | `padding: 96px 0` | WorkflowSection, FeatureSection, HeroSection |
| `animate-marquee` | Infinite horizontal scroll animation (35s loop) | ResourcesSection cards |

**Why use these?**  
Instead of writing `py-12` or `py-24` on every section and forgetting which is which, these named utilities make the spacing consistent. All sections with `section72` automatically use the same spacing.

---

## 6. UI Components

These are the smallest reusable building blocks — used everywhere.

### Button — `src/app/layouts/ui/Button.tsx`

A button that can render as either a `<button>` element or an `<a>` link (if you pass an `href`).

**Props (what you can pass to it):**

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `"filled"` / `"dark"` / `"outline"` / `"ghost"` | `"filled"` | Visual style |
| `href` | `string` | — | If given, renders as a link instead of a button |
| `children` | `ReactNode` | required | The text or content inside the button |
| `className` | `string` | `""` | Extra Tailwind classes to add |
| `onClick` | `function` | — | Function to call when clicked |

**Variants explained:**

| Variant | Look | Use case |
|---|---|---|
| `filled` | Blue background (`#1B61C9`), white text | Primary action (e.g. "Sign up") |
| `dark` | Dark navy background (`#181D26`), white text | Dark CTAs (e.g. BottomCTASection) |
| `outline` | White background, subtle shadow border, dark text | Secondary action (e.g. "Contact Sales") |
| `ghost` | Transparent, dark text only | Tertiary/minimal action (e.g. "Sign in") |

**Example usage:**
```tsx
<Button variant="filled" href="/signup">Sign up for free</Button>
<Button variant="outline" href="/demo">Request a demo</Button>
<Button variant="dark" onClick={handleClick}>Get started</Button>
```

---

### Container — `src/app/layouts/ui/Container.tsx`

A wrapper div that adds **consistent horizontal padding** on all screen sizes. It makes sure content never touches the very edge of the screen.

**Padding applied:**
- Mobile: 24px left + right (`px-6`)
- Tablet: 32px (`px-8`)
- Desktop: 48px (`px-12`)

**Props:**

| Prop | Description |
|---|---|
| `children` | Whatever goes inside the container |
| `className` | Extra classes (e.g. `"flex gap-8"`) |

**Example usage:**
```tsx
<section className="section48 bg-white">
  <Container className="flex flex-col gap-6">
    <h2>Hello</h2>
    <p>Content here</p>
  </Container>
</section>
```

**When NOT to use Container:**  
Sections with full-bleed effects (content that goes edge to edge, like the marquee card scroll in ResourcesSection) do NOT use Container. Instead they handle their own padding.

---

## 7. Icon Components

All icons live in `src/app/layouts/icons/` and are exported from `index.ts`.

Every icon accepts a `size` (or `width`/`height`) prop and a `className` prop.

| Component | File | Size default | Use case |
|---|---|---|---|
| `AirtableLogo` | `AirtableLogo.tsx` | 137×32 | Full Airtable wordmark — Header |
| `AirtableIcon` | `AirtableIcon.tsx` | — | Just the "A" mark |
| `AirtableGradientBadge` | `AirtableGradientBadge.tsx` | 28 | Hero badge icon |
| `FacebookIcon` | `FacebookIcon.tsx` | 21 | Footer social icon |
| `LinkedInIcon` | `LinkedInIcon.tsx` | 20 | Footer social icon |
| `XIcon` | `XIcon.tsx` | 21 | Footer social icon (Twitter/X) |
| `InstagramIcon` | `InstagramIcon.tsx` | 20 | Footer social icon |
| `YouTubeIcon` | `YouTubeIcon.tsx` | 25 | Footer social icon |
| `AppStoreBadge` | `AppStoreBadge.tsx` | 97×33 | Footer bottom — App Store button |
| `GooglePlayBadge` | `GooglePlayBadge.tsx` | — | Footer bottom — Google Play button |
| `ArrowRightIcon` | `ArrowRightIcon.tsx` | 16×11 | Inline "→" used in links |
| `ChevronRightIcon` | `ChevronRightIcon.tsx` | 5×8 | Nav dropdown indicator ">" |
| `HamburgerIcon` | `HamburgerIcon.tsx` | — | Mobile menu open icon |
| `CloseIcon` | `CloseIcon.tsx` | — | Mobile menu close icon |
| `PlayIcon` | `PlayIcon.tsx` | 14×14 | FloatingCTA video play button |
| `SliderPrevButton` | `SliderPrevButton.tsx` | 18 | ResultsSection ← slider nav |
| `SliderNextButton` | `SliderNextButton.tsx` | 18 | ResultsSection → slider nav |
| `PlusCircleIcon` | `PlusCircleIcon.tsx` | — | — |

**How to use an icon:**
```tsx
import ArrowRightIcon from "../icons/ArrowRightIcon"

// Inside JSX:
<ArrowRightIcon width={16} height={11} />

// With color via Tailwind (icons that use currentColor):
<XIcon size={21} className="text-neutral-500" />
```

**What is `currentColor`?**  
Some icons use `fill="currentColor"` in their SVG. This means the icon takes its color from whatever `text-*` class you put on it or its parent. So `className="text-neutral-500"` makes the icon gray.

---

## 8. Common Components

These appear on **every page** because they are placed in `layout.tsx`, not `page.tsx`.

### Announcementbar — `src/app/layouts/common/Announcementbar.tsx`

A thin banner at the very top of the page (above the header). Hidden on mobile, visible on `md` (768px+) screens.

- Shows a short marketing message
- Has a "Learn More" link with an arrow icon
- Background: `bg-neutral-50` (very light blue `#F0F6FF`)

---

### Header — `src/app/layouts/common/Header.tsx`

The sticky top navigation bar. `sticky top-0 z-50` means it stays fixed at the top as the user scrolls. `z-50` puts it on top of all other content.

**Features:**
- **Logo** — Airtable full wordmark on the left
- **Desktop nav** — Platform, Solutions, Resources, Pricing links with dropdown menus
- **Dropdown menus** — clicking Platform/Solutions/Resources opens a panel with sub-links
- **CTA buttons** — "Request a demo", "Sign up for free", "Sign in" on the right
- **Mobile menu** — hamburger icon opens a full overlay menu on small screens

**How the dropdown works:**
- `openDropdown` is a React state variable — it stores which dropdown name is currently open (or `null` if all closed)
- Clicking a nav item calls `toggleDropdown(label)` — this either opens that dropdown or closes it
- `useEffect` with a click listener closes all dropdowns when the user clicks anywhere else on the page
- The chevron `<ChevronRightIcon>` rotates 90° when the dropdown is open using `rotate-90` Tailwind class

---

### Footer — `src/app/layouts/common/Footer.tsx`

The bottom section of every page. It is a **client component** (`"use client"`) because "See more" requires interactive state.

**Structure (top to bottom):**

1. **Top row** — Airtable icon mark + nav links + 5 social icons
2. **Divider** — `<hr>` with `border-neutral-200`
3. **5-column link grid** — Platform, Solutions, Learn, Resources, Company
4. **"See more" toggle** — each column except Company has hidden extra links revealed on click
5. **Bottom bar** — legal links + App Store / Google Play badges

**How "See more" works:**
- `expanded` is a `Set<number>` — it stores the index numbers of expanded columns
- `toggle(i)` adds an index to the set if it's not there, removes it if it is
- Columns with `moreLinks` render those links only when their index is in the `expanded` set

**Grid layout:**  
```
grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5
```
- Mobile (< 768px): 2 columns
- Tablet (768px+): 3 columns
- Desktop (1024px+): 5 columns

---

## 9. Shared Components

These are **reusable section templates** — they accept props so the same layout can display different content.

### HeroSection — `src/app/layouts/shared/HeroSection.tsx`

A full-width section with:
- Left: badge (optional), headline, subtext, CTA buttons
- Right: a foreground product screenshot image
- Background: a full-bleed image passed as `backgroundImage` prop

**Props:**

| Prop | Required | Description |
|---|---|---|
| `headline` | Yes | Main heading — can be JSX (supports `<br />`) |
| `subtext` | Yes | Paragraph below the heading |
| `primaryCTA` | Yes | `{ text, href }` — the main filled button |
| `secondaryCTA` | No | `{ text, href }` — optional outline button |
| `backgroundImage` | Yes | Path to the full-bleed background image |
| `foregroundImage` | Yes | Path to the product screenshot on the right |
| `badge` | No | `{ icon, text, href }` — small pill above the headline |

**Used by:** `HomeHeroSection.tsx` which pre-fills all the props for the homepage.

---

### FeatureSection — `src/app/layouts/shared/FeatureSection.tsx`

A two-column section with an image on one side and text on the other. The image position can be flipped.

**Props:**

| Prop | Default | Description |
|---|---|---|
| `imagePosition` | `"right"` | `"left"` or `"right"` — which side the image goes |
| `image` | required | Path to the image |
| `imageWidth` / `imageHeight` | required | Dimensions for Next.js `<Image>` |
| `headline` | required | Heading text (can be JSX) |
| `headlineClassName` | `"text-primary-50"` | Color class for the heading |
| `subtext` | — | Optional paragraph below heading |
| `cta` | — | Optional `{ text, href }` link |
| `bgClassName` | `"bg-white"` | Background color of the section |

**Used on homepage twice:**
1. Image right, white background — "Operationalize your critical data…"
2. Image left, light blue background — "Simple to build. Intuitive to use."

---

## 10. Home Page Sections

These are placed in `src/app/page.tsx` in order from top to bottom.

### Page assembly — `src/app/page.tsx`

```
<main>
  <HomeHeroSection />         ← Full-screen hero with headline + image
  <LogoStrip />               ← Customer logo bar (Expedia, Shopify, etc.)
  <FeatureSection />          ← Image right: "Operationalize your data"
  <FeatureSection />          ← Image left: "Simple to build"
  <WorkflowSection />         ← Accordion tabs: Marketing, Product, Operations...
  <FloatingCTASection />      ← AI promo card with video thumbnail
  <IntegrationSection />      ← "Integrate critical workflows" + logo marquee
  <ResultsSection />          ← Testimonial slider with stats
  <ResourcesSection />        ← "Looking for inspiration?" + infinite card scroll
  <BottomCTASection />        ← "Teams at 450,000 orgs…" + signup buttons
</main>
```

---

### HomeHeroSection — `src/app/layouts/home/HomeHeroSection.tsx`

A thin wrapper that just calls `<HeroSection>` with homepage-specific content pre-filled. Keeps `page.tsx` clean.

---

### LogoStrip — `src/app/layouts/home/LogoStrip.tsx`

A horizontal row of customer logos (Expedia, Shopify, Medium, Equinox, Cole Haan, etc.). Each logo is an SVG icon component from the icons folder.

---

### WorkflowSection — `src/app/layouts/home/WorkflowSection.tsx`

An **interactive accordion** on the right paired with a product screenshot on the left.

- Each accordion item (Marketing, Product, Operations…) auto-advances every 5 seconds
- A thin progress bar fills up to show when it will advance
- Clicking an item jumps to it immediately
- Built with `useState` (tracks current index) and `useEffect` with `setInterval` (auto-timer)
- Uses `Container` and `section96`

---

### FloatingCTASection — `src/app/layouts/home/FloatingCTASection.tsx`

A rounded card (`rounded-3xl`) with a purple background (`bg-purple-50`) split into:
- Left: a video thumbnail image with a "Play" button overlay
- Right: text about AI features + "Learn more" button

Uses `Container` and `section48`.

---

### IntegrationSection — `src/app/layouts/home/IntegrationSection.tsx`

Two-column layout (no Container, no standard padding) using `section72`:
- Left: heading + paragraph + "Explore all integrations" link
- Right: a static PNG image showing partner logos

Uses `ps-26.25` (custom left padding) instead of Container for a specific left-aligned look.

---

### ResultsSection — `src/app/layouts/home/ResultsSection.tsx`

A **client component** (`"use client"`) with a 3-slide image carousel:
- Header row: "Results you can measure" + description + button
- Large background image card (the main showcase)
- Quote + profile + product screenshot below
- Prev/next navigation buttons + dot indicators

State: `current` (index 0–2). `prev()` and `next()` cycle through slides with modulo arithmetic (`% slides.length`).

---

### ResourcesSection — `src/app/layouts/home/ResourcesSection.tsx`

Split into two parts:

**Top:** Header row with no Container (uses `px-[108px]` on large screens):
- Left: "Looking for inspiration? Start with these resources." — 20px Medium, 48px line-height
- Right: paragraph + "Explore resources" outline button

**Bottom:** Infinite horizontal card scroll:
- 5 cards × duplicated = 10 cards in the DOM for seamless looping
- CSS animation `animate-marquee` (defined in `globals.css`) scrolls them continuously left
- Hovering over the cards pauses the animation (`group-hover:[animation-play-state:paused]`)
- `overflow-hidden` on the outer div clips the cards so only some are visible

**Card typography:**
- Type label (BLOG/WEBINAR): 12px Medium, uppercase
- Title: 18px Medium, `text-primary-50` (#333333)
- Description: 16px Regular, `text-primary-600` (#040E20B0 semi-transparent)

Uses `section72` and `bg-neutral-50`. No Container.

---

### BottomCTASection — `src/app/layouts/home/BottomCTASection.tsx`

A simple conversion section at the bottom of the page:
- Left: large heading "Teams at over 450,000…" — 32px Medium
- Right: two stacked buttons ("Sign up for free" in dark variant, "Contact Sales" in outline)

Uses `section48` + `Container`. Grid layout: `grid-cols-[1fr_auto]` (text fills space, buttons take natural width).

---

## 11. Flex vs Grid — Why This Project Uses Flex in Most Cases

This is one of the most common questions beginners have. Both `flex` and `grid` are CSS layout systems, but they solve different problems.

### What is Flexbox (`flex`)?

Flexbox lays items out in **one direction** — either a row or a column. Items can grow, shrink, and align relative to each other. Think of it like items sitting on a shelf: they line up in a row and you can control how they space themselves.

```
flex flex-row  →  [ item ][ item ][ item ]   (horizontal shelf)
flex flex-col  →  [ item ]
                  [ item ]
                  [ item ]                    (vertical stack)
```

### What is CSS Grid (`grid`)?

Grid lays items out in **two directions at once** — rows AND columns simultaneously. Think of it like a spreadsheet: you define columns and rows, and items snap into cells.

```
grid grid-cols-3  →  [ item ][ item ][ item ]
                     [ item ][ item ][ item ]
```

---

### Why flex is used in most sections

**95% of layouts on this page are one-dimensional** — either a row of two things side by side, or a column of things stacked. Flex handles this perfectly and with less code.

Look at a typical section:

```tsx
<div className="flex flex-col lg:flex-row items-center gap-12">
  <div className="flex-1">Text content</div>
  <div className="flex-1">Image</div>
</div>
```

This is one row with two items. Flex does exactly this in 3 classes. To do the same in grid:

```tsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
  <div>Text content</div>
  <div>Image</div>
</div>
```

Both work, but grid adds cognitive overhead ("how many columns?") for a problem that is simply "put two things side by side."

---

### The decision rule used in this project

| Use `flex` when… | Use `grid` when… |
|---|---|
| Items line up in **one direction** (a row or a column) | You need **rows AND columns** at the same time |
| Columns have **different widths** (one fixed, one flexible) | All columns should be **equal width** |
| You need `flex-1` to fill available space | You need items to align into a strict **grid structure** |
| Wrapping behaviour doesn't matter | Items must **snap to a defined cell** regardless of content size |
| It's a navigation bar, a card with text+icon, a two-column section | It's a gallery, a multi-column link list, a data table |

---

### Where grid IS used in this project

Grid is used in exactly two places where its strengths apply:

**1. Footer link columns (`Footer.tsx`)**
```tsx
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10">
```
Five equal-width columns that change count at different screen sizes. This is a classic grid use case — you want every column to be the same width and the browser to handle the math. With flex you'd need to manually set widths on each child.

**2. BottomCTASection (`BottomCTASection.tsx`)**
```tsx
<div className="grid grid-cols-1 lg:grid-cols-[1fr_auto]">
```
The `[1fr_auto]` syntax means: left column takes all remaining space, right column takes only as much as it needs. This is one of the few things grid does more cleanly than flex (though `flex` + `flex-1` + `shrink-0` achieves the same result).

---

### Quick mental checklist

Before choosing, ask yourself one question:

> **"Do I need to control both rows and columns at the same time?"**

- **Yes** → use `grid`
- **No** → use `flex`

For 90% of component layouts — headers, two-column sections, card rows, navigation bars, button groups — the answer is No, so `flex` is the right tool.

---

## 12. How Tailwind CSS Works

Tailwind is a **utility-first** CSS framework. Instead of writing a CSS file, you apply small single-purpose classes directly in your HTML/JSX.

### Responsive prefixes

Add a prefix to make a class apply only at certain screen widths:

| Prefix | Breakpoint | Meaning |
|---|---|---|
| (none) | All sizes | Always applies |
| `sm:` | 640px+ | Small screens and up |
| `md:` | 768px+ | Tablet and up |
| `lg:` | 1024px+ | Desktop and up |
| `xl:` | 1280px+ | Large desktop and up |

Example: `hidden lg:flex` = hidden on mobile, flex on desktop.

### Layout classes

| Class | What it does |
|---|---|
| `flex` | Makes children line up in a row |
| `flex-col` | Makes children stack vertically |
| `flex-1` | Makes an item grow to fill available space |
| `shrink-0` | Prevents an item from shrinking |
| `items-center` | Vertically centers children in a flex container |
| `justify-between` | Pushes first and last child to opposite ends |
| `gap-4` | 16px space between children |
| `grid` | CSS grid layout |
| `grid-cols-5` | 5 equal columns in a grid |
| `overflow-hidden` | Clips anything that goes outside the box |
| `relative` | Makes this a positioning anchor for `absolute` children |
| `absolute` | Positions element relative to nearest `relative` parent |
| `sticky top-0` | Sticks to top of screen when scrolling |
| `z-50` | Layering order — higher number = on top |
| `ml-auto` | Pushes element to the far right in a flex container |

### Spacing classes

| Class | Value | Example use |
|---|---|---|
| `p-4` | 16px padding all sides | Card inner padding |
| `px-6` | 24px left + right | Section horizontal padding |
| `py-8` | 32px top + bottom | Footer vertical padding |
| `pt-12` | 48px top only | Cards top padding |
| `gap-4` | 16px | Space between cards |
| `mb-8` | 32px margin bottom | Space below an element |

### Common pattern: section layout

Every page section follows this pattern:

```tsx
<section className="section72 bg-white">
  <Container>
    <div className="flex flex-col lg:flex-row gap-12 items-center">
      <div className="flex-1">  {/* Left column */}
        <h2>Heading</h2>
        <p>Text</p>
      </div>
      <div className="flex-1">  {/* Right column */}
        <Image ... />
      </div>
    </div>
  </Container>
</section>
```

- `section72` → 72px top and bottom padding
- `bg-white` → white background
- `Container` → horizontal gutters
- `flex-col lg:flex-row` → stacks vertically on mobile, side-by-side on desktop
- `flex-1` on both columns → equal width

### Hover states

Add `hover:` prefix to apply a style only on mouse hover:

```
hover:text-primary-300   → text turns blue on hover
hover:bg-neutral-50      → background turns light blue on hover
```

### Transitions

`transition-colors` makes color changes animate smoothly (instead of instant switch):

```
className="text-neutral-800 hover:text-primary-800 transition-colors"
```

### Arbitrary values

Square brackets let you use any exact value that isn't in the scale:

```
leading-[24.3px]      → exact line-height: 24.3px
tracking-[0.18px]     → exact letter-spacing: 0.18px
px-[108px]            → exact 108px horizontal padding
```

---

## 12. How to Add a New Section

1. **Create the file** in `src/app/layouts/home/YourNewSection.tsx`

2. **Use this template:**
```tsx
import Container from "../ui/Container"
import Button from "../ui/Button"

export default function YourNewSection() {
  return (
    <section className="section72 bg-white">
      <Container>
        <h2 className="text-3xl font-medium text-primary-800 leading-10">
          Your heading here
        </h2>
        <p className="text-lg font-normal text-neutral-800 leading-[24.3px] tracking-[0.18px]">
          Your paragraph here
        </p>
        <Button variant="outline" href="#">
          Your button
        </Button>
      </Container>
    </section>
  )
}
```

3. **Import and add it to `src/app/page.tsx`:**
```tsx
import YourNewSection from "./layouts/home/YourNewSection"

// Inside the <main> tag, in the position you want:
<YourNewSection />
```

4. **Choose the right section utility:**
   - `section48` → tight spacing (small sections, CTAs)
   - `section72` → standard spacing (most sections)
   - `section96` → generous spacing (feature showcase sections)

5. **Choose the right background:**
   - `bg-white` → white
   - `bg-neutral-50` → very light blue (`#F0F6FF`) — alternates with white for visual separation

---

## Quick Reference Card

```
Need a button?            → <Button variant="filled|dark|outline|ghost" href="#">
Need consistent padding?  → Wrap in <Container>
Need section spacing?     → Add section48 / section72 / section96 to <section>
Need a color?             → text-primary-800 (dark) / text-neutral-800 (gray) / bg-neutral-50 (light bg)
Need two columns?         → flex flex-col lg:flex-row gap-12
Need hover effect?        → hover:text-primary-300 transition-colors
Need an icon?             → import from ../icons/IconName
```
