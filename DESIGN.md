# RMS Spatial Signal Design System

## Intent

Rohit Man Shrestha's portfolio should feel like a calm, high-signal engineering studio: cinematic at first glance, direct within seconds, and practical throughout. The visual system supports client acquisition, not a sci-fi demo. Every decorative element must either orient the visitor or reinforce the idea of dependable delivery.

## Brand core

- **Name:** Rohit Man Shrestha
- **Role:** Senior Software Developer
- **Promise:** Dependable web products, clearly delivered.
- **Voice:** Confident, precise, understated, human.
- **Primary action:** Let's work together.
- **Secondary action:** Download portfolio.

## Logo

Use the `RM` monogram for compact navigation, footer, favicons, and loading states. Pair it with the full name in sentence case where the visitor needs orientation. Never stretch, rotate, outline, or add shadows to the mark.

- Mark: `public/brand/rm-mark.svg`
- Preferred dark-surface color: `#E6FCFF`
- Preferred light-surface color: `#082F49`
- Clear space: one monogram-width on all sides.

## Color tokens

| Token | Value | Purpose |
| --- | --- | --- |
| `--ink-950` | `#020617` | Main dark canvas |
| `--ink-900` | `#071426` | Raised dark surface |
| `--ink-800` | `#0B2138` | Borders and secondary surface |
| `--paper-50` | `#F6FBFC` | Primary light text/surface |
| `--paper-200` | `#C8D7DE` | Secondary text |
| `--signal-400` | `#22D3EE` | Interactive accent |
| `--signal-500` | `#06B6D4` | Filled CTAs and active states |
| `--signal-700` | `#0E7490` | Accent on light surfaces |
| `--line-subtle` | `rgba(148, 163, 184, 0.2)` | Fine rules and diagrams |
| `--success-400` | `#34D399` | Availability and success messages |

Use cyan sparingly. The default page is ink and paper; cyan should point to an action, a state, or a useful datum. Do not introduce purple, violet, red/green-only status signals, or decorative rainbow gradients.

## Typography

- **Display:** Geist Sans, 600–700. Use `clamp()` for hero and section statements.
- **Body:** Geist Sans, 400–500, minimum 16px at every breakpoint.
- **Technical labels:** Geist Mono, 500, uppercase only for short labels and metadata.
- **Hero:** 56–88px desktop, 40–52px mobile, line-height 0.96–1.04.
- **Section title:** 32–48px desktop, 28–36px mobile.
- **Body line length:** 45–70 characters.

## Layout and rhythm

- Content max width: 1200px.
- Page gutters: 24px mobile, 40px tablet, 56px desktop.
- Base spacing unit: 8px.
- Section space: 96–144px desktop, 72–96px mobile.
- Use rules, labels, and negative space to group content. Cards are reserved for projects, interactive choices, and forms.
- Project content should alternate between editorial copy and technical visual evidence; do not stack equal-sized card grids.

## Components

### Header

Transparent-to-ink sticky header. Monogram on the left, five concise anchors at desktop, and one primary contact action. Mobile uses an explicit menu button with a 44px target.

### Hero

Use `orbital-signal-hero.png` as a right-weighted background image with an ink overlay. Keep the left third clear for the headline. The hero contains: role label, one statement, a short proof line, primary CTA, secondary download action, and a subtle availability indicator.

### Project evidence

Three large project rows, not dashboard cards. Each includes a numbered index, concise problem/outcome copy, stack labels, and an abstract CSS/SVG technical diagram. Do not invent project metrics or use stock screenshots.

### Service list

Use a numbered vertical list with a one-sentence outcome for each service. Reveal detail on hover/focus, but keep core information visible without interaction.

### Contact

Use a two-column contact block: direct email, LinkedIn, and GitHub on the left; visible-labelled email, subject, and message inputs on the right. Retain the honeypot. The submit label is `Start a conversation`.

## Motion

- Hero particles: optional slow opacity/transform drift only.
- Hover: 160–220ms, transform and color only.
- Section reveal: 320–480ms, opacity plus 8–16px translate.
- Respect `prefers-reduced-motion`; all content must be fully visible with motion disabled.
- Do not pin sections on mobile or make scrolling depend on animation.

## Accessibility baseline

- Body copy contrast meets WCAG AA (4.5:1).
- All controls have visible `:focus-visible` states and at least 44px touch targets.
- Form labels remain visible after entry.
- Decorative orbital and diagram assets use empty alt text; meaningful project diagrams receive descriptive text equivalents.
- The selected navigation item is indicated with more than color.

## Asset inventory

| Asset | Use | Status |
| --- | --- | --- |
| `public/brand/rm-mark.svg` | Navigation, footer, favicon source | Ready |
| `public/images/orbital-signal-hero.png` | Desktop and tablet hero backdrop | Ready |
| CSS/SVG line diagrams | Project and service evidence | Build during implementation |

## Implementation order

1. Add global tokens, typography, focus styles, and reduced-motion defaults.
2. Replace the current header and hero with the Spatial Signal composition.
3. Rebuild services and projects as editorial evidence sections.
4. Rework contact and footer around the monogram and direct contact path.
5. Verify light/dark contrast, mobile hierarchy, keyboard navigation, and CV download.
