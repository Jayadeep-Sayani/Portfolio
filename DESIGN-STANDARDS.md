# Jayadeep Sayani — Design Standards

**Codename: Chromatic Overdrive**

A portfolio that goes all-in visually — gradients, glow, motion, texture, oversized type — while keeping navigation obvious and content readable. The goal is not minimalism. The goal is *controlled chaos*: maximum personality, zero confusion.

---

## Creative Philosophy

### The tension we embrace

| Go overboard on | Stay disciplined on |
|-----------------|---------------------|
| Color, gradient, glow, and texture | **Readable type sizes** — extremity is not giant text |
| Motion & micro-interactions | **Viewport budget** — first screen must be scannable |
| Accent typography (one gradient word, mono indices) | Information hierarchy |
| Layout drama in nav & atmosphere | Predictable nav + scroll behavior |
| Personality in copy & visuals | Who you are in the first 3 seconds |

### Brand energy

**Electric confidence.** This reads like someone who ships fast, thinks in systems, and isn't afraid to stand out. Think late-night hackathon energy meets polished product craft — not corporate safe, not unreadable chaos.

### The UX contract (non-negotiable)

Even at maximum creative expression:

1. **3-second clarity** — name, role, and one reason to stay are obvious immediately.
2. **First viewport is scannable** — hero block (name + role + CTA) fits in ~50–60vh on mobile. No single text element dominates the entire screen.
3. **One focal point per viewport** — flair supports the message; it never competes with it.
4. **Navigation is always findable** — nav doesn't disappear into art. Active state is unmistakable.
5. **Touch targets ≥ 44px** on mobile. Always.
6. **Reduced motion** disables decorative animation; core UI still works.

### Scaled extremity (how to go loud without hurting UX)

Extremity lives in **treatment**, not **font size**. A 60px name with a gradient surname, mesh glow, and lime mono label hits harder than a 120px name that pushes everything else below the fold.

| Technique | Do | Don't |
|-----------|-----|-------|
| Hero name | `clamp(36px → 60px)`, two lines max, gradient on **one word** | Full-viewport 120px+ headline |
| Mobile menu | Large but tappable rows (`24–36px` labels) | Display-size links that require scrolling to see all four |
| Section titles | `--text-2xl` with lime mono label above | Watermark text at 160px behind content |
| Visual drama | Glow, grain, animated borders, stagger | Shrinking body text to make room for oversized display type |

**Viewport budget (mobile first screen):**

```
~12vh  nav dock
~35vh  name + role + availability
~8vh   CTAs
~5vh   breathing room
────── remainder peeks next section or photo
```

If the name alone exceeds ~20vh, it's too big.

---

## Color System

### Void base

| Token | HEX | Usage |
|-------|-----|-------|
| `--color-bg` | `#050508` | Page background |
| `--color-bg-elevated` | `#0C0C14` | Nav dock, overlays |
| `--color-surface` | `#14141F` | Cards, elevated panels |
| `--color-surface-glass` | `rgba(12, 12, 20, 0.72)` | Glassmorphism surfaces |

### Chromatic spectrum

| Token | HEX | Usage |
|-------|-----|-------|
| `--color-hot` | `#FF3CAC` | Primary accent, CTAs, active states |
| `--color-violet` | `#784BA0` | Secondary accent, gradients |
| `--color-electric` | `#2B86C5` | Tertiary, cool balance in gradients |
| `--color-lime` | `#C8F560` | Sparingly — highlights, badges, mono labels |

### Signature gradient

```css
--gradient-signature: linear-gradient(135deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%);
--gradient-signature-animated: linear-gradient(
  135deg,
  #FF3CAC, #784BA0, #2B86C5, #FF3CAC
);
```

Use on: logo hover, active nav indicators, CTA fills, text highlights. Never on body paragraphs.

### Glow tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--glow-hot` | `0 0 40px rgba(255, 60, 172, 0.35)` | Hover states, active nav |
| `--glow-violet` | `0 0 60px rgba(120, 75, 160, 0.25)` | Hero ambient, dock border |
| `--glow-soft` | `0 0 80px rgba(43, 134, 197, 0.15)` | Background atmosphere |

### Text

| Token | HEX | Usage |
|-------|-----|-------|
| `--color-text` | `#EEEEF5` | Primary copy |
| `--color-text-secondary` | `#A8A8BC` | Descriptions |
| `--color-text-muted` | `#6E6E82` | Metadata, nav idle |
| `--color-text-inverse` | `#050508` | Text on bright fills |

### Structure

| Token | Value | Usage |
|-------|-------|-------|
| `--color-border` | `rgba(255, 255, 255, 0.06)` | Subtle dividers |
| `--color-border-glow` | `rgba(255, 60, 172, 0.25)` | Gradient-bordered elements |

### Color rules

- **40 / 35 / 25** — void neutrals / text hierarchy / chromatic accents (in visual weight, not area).
- Gradients are for *moments* — nav dock, hero headline accent, hover reveals — not full-page washes.
- Body text stays solid `--color-text`. Gradient text is for display type and UI chrome only.
- Pair glow with solid fallbacks; never rely on glow alone for meaning.

---

## Typography

### Font stack

| Role | Font | Variable | Character |
|------|------|----------|-----------|
| Display | **Syne** | `--font-display` | Bold, artistic, impossible to forget |
| Body | **Sora** | `--font-body` | Clean, modern, readable at speed |
| Mono | **JetBrains Mono** | `--font-mono` | Index numbers, labels, tech metadata |

### Type scale (fluid)

Sizes are **confident, not crushing**. Hero type caps at 60px desktop — drama comes from gradient, weight, and atmosphere.

| Token | Size | Usage |
|-------|------|-------|
| `--text-xs` | 11px | Mono indices, fine labels |
| `--text-sm` | 13px | Nav, captions |
| `--text-base` | 16px | Body |
| `--text-lg` | 18px | Lead copy, hero role line |
| `--text-xl` | clamp(20px, 2.5vw, 26px) | Project titles |
| `--text-2xl` | clamp(28px, 4vw, 40px) | Section headings |
| `--text-3xl` | clamp(36px, 5vw, 52px) | Rare emphasis moments |
| `--text-hero` | clamp(36px, 5.5vw, 60px) | Hero name only |
| `--text-menu` | clamp(24px, 4.5vw, 36px) | Mobile menu link labels |

### Weight & tracking

| Token | Value | Usage |
|-------|-------|-------|
| `--weight-bold` | 700 | Body emphasis |
| `--weight-extrabold` | 800 | Display headings |
| `--tracking-tight` | -0.03em | Hero & section titles |
| `--tracking-wide` | 0.12em | Uppercase mono labels |
| `--leading-tight` | 1.05 | Hero (two-line names need breathing room) |
| `--leading-snug` | 1.2 | Section headings |
| `--leading-normal` | 1.6 | Body |

### Typography rules

- Hero name: Syne 800, `--text-hero`, max two lines. **Gradient on one word only** (e.g. surname). First name stays solid `--color-text`.
- Hero role: Sora, `--text-lg`, `--color-text-secondary` — always visible with the name on first viewport.
- Section labels: JetBrains Mono, uppercase, `--text-xs`, `--tracking-wide`, `--color-lime`.
- Section titles: Syne 800, `--text-2xl`.
- Mobile menu labels: `--text-menu`, not `--text-hero` or larger.
- Nav link indices (`01`, `02`): JetBrains Mono, `--color-text-muted`, brighten on hover.
- Mixing fonts is intentional — display leads, mono indexes, body explains.

---

## Spacing & Layout

8px grid, same as before but with more vertical drama.

| Token | Value |
|-------|-------|
| `--space-1` through `--space-12` | 4px → 120px (unchanged scale) |
| `--container-max` | 1140px |
| `--section-padding-x` | `clamp(20px, 5vw, 56px)` |
| `--section-padding-y` | `clamp(96px, 14vw, 160px)` |
| `--nav-offset` | 100px (accounts for floating dock) |

### Breakpoints

| Name | Width |
|------|-------|
| Mobile | < 768px |
| Tablet | 768–1023px |
| Desktop | ≥ 1024px |

---

## Atmosphere & Texture

Layer these globally or per-section — they create depth without boxing content.

| Layer | Implementation |
|-------|----------------|
| **Grain** | Fixed SVG noise overlay at 3–5% opacity |
| **Mesh gradient** | Large blurred orbs (`--color-hot`, `--color-violet`) behind hero |
| **Grid** | Faint 1px grid at 4% opacity, optional in hero/mobile menu |
| **Scan line** | Optional subtle horizontal line animation in nav dock (CSS only) |

Rules: atmosphere sits *behind* content (`z-index: 0`). Never reduce text contrast.

---

## Motion System

Motion is a first-class design tool. Use it generously — with purpose.

| Token | Value | Usage |
|-------|-------|-------|
| `--ease-out-expo` | `cubic-bezier(0.16, 1, 0.3, 1)` | Entrances, menu reveals |
| `--ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Playful hovers (subtle) |
| `--duration-fast` | 200ms | Color, opacity |
| `--duration-base` | 400ms | Layout, reveals |
| `--duration-slow` | 700ms | Hero, page transitions |
| `--duration-ambient` | 8s | Gradient rotation, glow pulse (infinite) |

### Encouraged motion

- Staggered fade-up on scroll (Framer Motion or CSS)
- Gradient border rotation on nav dock
- Link hover: scale 1.02, glow bloom, mono index color shift
- Mobile menu: fullscreen with staggered link entrance
- Magnetic-feel cursor tracking on nav links (CSS transform from mouse — optional phase 2)
- Text gradient shift on logo hover
- Scroll progress bar with gradient fill

### Forbidden motion

- Infinite spinning loaders on page load
- Parallax so aggressive content becomes unreadable
- Auto-playing video backgrounds
- Anything that blocks interaction for > 300ms without feedback

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Components

### Navigation (flagship component)

The nav is a **floating chromatic dock** — not a flat top bar.

**Desktop anatomy**

```
[ JS logo ]     ╭──────────────────────────────╮     [ Resume ↗ ]
                │ 01 Work  02 About  03 Exp  04 Contact │
                ╰──────────────────────────────╯
                     ↑ animated gradient border
```

- Logo: `JS` monogram or first name, Syne 800. Gradient text on hover.
- Dock: glass pill, `border-radius: 999px`, animated conic/linear gradient border.
- Links: mono index + label. Active link gets gradient text + soft glow.
- Resume: outlined pill with gradient border, fills on hover.
- On scroll: dock compacts slightly, background opacity increases.

**Mobile**

- Logo + menu trigger (custom animated lines, not default hamburger if possible).
- Fullscreen overlay: mesh gradient bg + grain + oversized Syne links with stagger.
- Index numbers at `--text-display` scale, labels beside them.
- Resume as bottom-fixed gradient CTA.

### Hero

Fits the **viewport budget**: name + role + CTAs on one mobile screen. Photo sits beside content on desktop.

**Layout**

```
[ avail badge ]                    [ gradient border ]
Jayadeep                           [     photo       ]
Sayani (gradient)                  [  Victoria tag   ]
<rotating role> in Victoria…
[ View work ] [ Resume ]
3rd TELUS AI  |  300+ ScholarLog
```

- Availability: lime mono label + pulsing dot.
- Name: `--text-hero` (max 60px), two lines, gradient on **surname only**.
- Role line: Sora `--text-lg`, includes `<RoleRotator />` with gradient text (3 roles, 2.8s cycle).
- CTAs: gradient primary pill + ghost gradient-border resume.
- Proof strip: **two** facts max, separated by rule — not a stats grid.
- Photo: `about_me_pic.png`, animated gradient border, glass location tag. ~380px desktop.
- Scroll cue: gradient line + mono label, desktop only.
- Reveals: staggered fade-up via `Reveal` component.

### Project rows

- Horizontal rule separators, not cards.
- Thumbnail with gradient border on hover.
- Title scales slightly on row hover; glow bleeds from image edge.

### Section headers

```
01 — WORK          ← mono label, lime
Selected Projects  ← Syne display
```

Optional: faint giant section word watermark at 3% opacity behind content.

### Buttons

| Variant | Style |
|---------|-------|
| **Gradient** | `--gradient-signature` fill, inverse text, `--glow-hot` on hover |
| **Ghost** | 1px gradient border (pseudo), transparent fill, gradient text on hover |
| **Lime tag** | `--color-lime` bg, dark text, mono font |

### Links

- Arrow links: `→` with `translateX` + color shift to `--color-hot`.
- External: small `↗` in mono.

---

## Page structure

```
Nav (floating dock)
Hero (maximal — mesh, gradient type, photo)
Work (projects — priority)
About
Experience
Skills
Contact (gradient email, social row)
```

Projects still come before biography. Creativity doesn't change recruiter scanning order.

---

## Accessibility

| Requirement | How |
|-------------|-----|
| Contrast | Body text ≥ 4.5:1 on void bg. Gradient text only on large display (≥ 24px). |
| Focus | 2px `--color-lime` outline, 3px offset |
| Motion | Full `prefers-reduced-motion` support |
| Semantics | `<header>`, `<nav>`, `<main>`, one `<h1>` |
| Keyboard | All dock links, menu, resume focusable; Escape closes mobile menu |

---

## Performance budget

| Metric | Target |
|--------|--------|
| JS (gzip) | < 150kb (Framer Motion allowed for nav + reveals) |
| Fonts | 3 families max, `display=swap` |
| Animations | GPU-friendly: `transform`, `opacity` only |
| Images | WebP, lazy below fold |

---

## File reference

```
src/
├── styles/
│   ├── tokens.css       # All variables
│   ├── atmosphere.css   # Grain, mesh utilities
│   └── navbar.css
├── components/
│   └── Navbar.jsx
├── index.css
└── App.jsx
```

```css
.nav-dock {
  background: var(--color-surface-glass);
  backdrop-filter: blur(20px);
  border-radius: var(--radius-full);
  box-shadow: var(--glow-violet);
}
```

---

## Do / Don't

| Do | Don't |
|----|-------|
| Put extremity in gradient, glow, motion, and mono detail | Scale the hero name past 60px |
| Keep name + role + CTA on one mobile screen | Make users scroll to learn what you do |
| Use `--text-menu` for mobile nav labels | Use hero-scale type in the menu |
| Make the nav a designed object people remember | Use a generic full-width white bar |
| Use gradient + glow on one element per group | Gradient everything in the same viewport |
| Stagger mobile menu entrances | Dump all links at once |
| Keep mono indices for wayfinding | Remove labels to be "minimal" |
| Let hero be loud | Let every section be equally loud |
| Write specific, human copy | Use "passionate innovator" |
| Test on a phone in bright sunlight | Ship glow-only contrast |

---

## Build order

1. Tokens + atmosphere (grain, mesh)
2. **Navbar** — the creative flagship
3. Hero
4. Projects
5. Remaining sections
6. Motion polish pass
7. A11y + performance audit

---

*Go overboard. Then carve back anything that doesn't serve the person reading it.*
