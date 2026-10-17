# Specification: Apple-Style Glassmorphism for Hero Clinical Highlights Card

- **Feature**: `apple-glassmorphism-hero-card`
- **Source**: User request & screenshot `media_1792213340517_56d81dad.png`
- **Decision Status**: Decided & Approved
- **Delivery Status**: Implemented & Verified

---

## Outcome and Scope

### Problem
The current clinical highlights card located on the right side of the hero section uses an opaque dark charcoal fill (`bg-slate-950/60`). Over the bright, high-definition background image of the doctor and clinical operatory, this creates a heavy, blocky appearance rather than the refined, luminous, and tactile aesthetic seen in Apple product UI (iOS/macOS Liquid Retina materials). Additionally, the card needs fine-tuned mobile responsiveness (touch target padding, spacing, and hardware-accelerated frosted glass rendering) to ensure effortless readability on small mobile screens.

### Desired Result
Transform the hero clinical highlights card into an authentic **Apple-style Glassmorphism (Frosted Glass)** component that:
1. Employs multi-layer translucent refraction (`backdrop-blur-2xl`, subtle specular surface gradient, hairline top-lit border, and diffuse ambient depth shadow).
2. Retains the clinical verification data (26+ Years dental experience, 4.9 rating, sterilization guarantees, and live "Open Today" indicator).
3. Ensures Apple HIG-grade mobile optimization (minimum 44px touch targets, responsive internal padding, fluid typography, zero horizontal overflow, and performance fallbacks).

### Constraints
- Retain existing doctor credentials: **Dr. Jebastin, BDS • 26+ Years Dental Surgery Experience • 4.9 Star Rating**.
- Preserve existing functional modal callback trigger: `onOpenBooking("Consultation with Dr. Jebastin")`.
- Maintain strict accessibility standards: minimum WCAG AA contrast ratio for all text elements against blurred photographic backgrounds.
- Respect `prefers-reduced-motion` settings.

### Non-Goals
- Altering the left-side hero typography, heading morphing text, or primary booking button.
- Changing the underlying background image or top navigation bar.
- Adding third-party heavy canvas or three.js shaders.

---

## Required Behavior

- **REQ-1 (Apple Glass Material Styling)**: The outer card container must render with luminous translucent frosted glass:
  - Surface: Layered gradient `bg-gradient-to-b from-white/[0.12] to-white/[0.04]` over deep backdrop blur (`backdrop-blur-2xl` / `-webkit-backdrop-filter: blur(24px)`).
  - Border: 1px specular border `border border-white/20 border-t-white/35` mimicking overhead natural light refraction.
  - Shadow: Multi-tier specular drop shadow `shadow-[0_24px_48px_-12px_rgba(0,0,0,0.45),inset_0_1px_1px_0_rgba(255,255,255,0.25)]`.
  - Corner radius: Apple-standard continuous curvature (`rounded-[28px]` on mobile, `rounded-[32px]` on desktop).

- **REQ-2 (Inner Glass Sub-Cards)**: The metrics tiles (26+ Years & 4.9 Stars) must render as refined elevated glass surfaces:
  - Surface: `bg-white/[0.06]` with hover sheen `hover:bg-white/[0.10]`.
  - Border: `border border-white/10`.
  - Contrast: High-contrast white values and clear slate-200/90 labels.

- **REQ-3 (Clinical Guarantee Indicators)**:
  - Each item (Single-Visit Rotary Root Canal Therapy, Strict 6-Step Autoclave Sterilization, Zero Wait-Time with Prior Booking) must have crisp icons with emerald/teal accents.
  - Text rendered in legible `text-xs sm:text-[13px] text-white/95 font-normal`.

- **REQ-4 (Apple Glass Action Button)**:
  - The consultation action button must feature vibrant frosted teal/emerald styling with a specular sheen:
  - Minimum touch target height: `min-h-[44px]` (Apple Human Interface Guidelines).
  - Background: `bg-gradient-to-r from-teal-400 via-teal-300 to-emerald-400 text-slate-950 font-semibold`.
  - Elevation & Hover: Smooth spring hover (`whileHover={{ scale: 1.02 }}`), active press feedback (`whileTap={{ scale: 0.98 }}`), and soft glowing drop shadow `shadow-[0_4px_20px_rgba(45,212,191,0.35)]`.

- **REQ-5 (Mobile & Performance Optimization)**:
  - Fluid mobile layout: Full width up to `max-w-md` on mobile, stacking cleanly below the hero headline with `mt-6 lg:mt-0`.
  - Padding: `p-4.5 sm:p-5.5 lg:p-6` ensuring compact vertical height on 375px–430px screens (e.g. iPhone SE to iPhone 16 Pro Max).
  - GPU Acceleration: Apply `transform-gpu` to ensure 60/120fps scrolling without compositing lag.
  - Fallback: Provide solid fallback background `bg-slate-900/90` for browsers without CSS `backdrop-filter` support.

---

## Technical Design

### Component Architecture
Modification is localized entirely within `src/components/HeroSection.tsx`:

```
HeroSection (src/components/HeroSection.tsx)
 ├── Background Container & Overlay
 ├── Navbar
 └── Hero Content Flex Container (flex-col lg:flex-row)
      ├── Left: Typography & CTAs (Existing)
      └── Right: Floating Clinical Details Glass Card (Enhanced)
           ├── Header: Live Availability Pill ("Open Today • Velachery") & Doctor Tag
           ├── Metrics Grid (2 cols): 26+ Years Experience & 4.9 Star Rating
           ├── Features List: 3 Clinical Sterilization & Treatment Guarantees
           └── Glass CTA Button: "Schedule Consultation" (Triggers onOpenBooking)
```

### Style Class Mapping

| Element | Existing Class | Proposed Apple Glassmorphism Class |
|---|---|---|
| Card Container | `bg-slate-950/60 backdrop-blur-xl border border-white/20 rounded-3xl p-5 sm:p-6 shadow-2xl` | `relative bg-gradient-to-b from-white/[0.14] via-white/[0.07] to-white/[0.03] backdrop-blur-2xl border border-white/25 border-t-white/40 rounded-[26px] sm:rounded-[32px] p-4.5 sm:p-5.5 lg:p-6 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.5),inset_0_1px_1px_0_rgba(255,255,255,0.25)] text-white space-y-4 self-start lg:self-center transform-gpu` |
| Metric Tiles | `bg-white/10 rounded-2xl p-3 border border-white/10 backdrop-blur-xs` | `bg-white/[0.07] hover:bg-white/[0.12] transition-colors rounded-2xl p-3 border border-white/15 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)]` |
| Schedule Button | `bg-teal-500 hover:bg-teal-400 text-slate-950 py-2.5 px-4 rounded-xl` | `w-full min-h-[44px] py-3 px-4 rounded-xl bg-gradient-to-r from-teal-400 to-emerald-400 hover:from-teal-300 hover:to-emerald-300 text-slate-950 text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-[0_4px_20px_rgba(45,212,191,0.35)] flex items-center justify-center gap-2 cursor-pointer touch-manipulation active:scale-[0.98]` |
| Status Pill | `bg-white/10 border-white/10` | `bg-white/[0.08] backdrop-blur-md border border-white/15 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]` |

---

## Acceptance and Proof

| ID | Done when | How to check |
|---|---|---|
| AC-1 | Card displays luminous frosted glass with visible background refraction | Inspect `HeroSection.tsx`, verify `backdrop-blur-2xl` with layered gradient and specular inner shadow. |
| AC-2 | Card borders feature specular top-lit highlights | Verify `border-t-white/40` and `border-white/25` giving an Apple-style edge reflection. |
| AC-3 | Metric sub-cards render as elevated translucent glass tiles | Check `26+ Years` and `4.9 Stars` tiles with `bg-white/[0.07]` and inner highlight. |
| AC-4 | Consultation button meets Apple HIG minimum 44px touch target | Verify `min-h-[44px]` and `touch-manipulation` on mobile viewport. |
| AC-5 | Mobile responsiveness verified across 375px–768px widths | Verify zero horizontal scroll/overflow, balanced padding, and fluid text wrapping on mobile screens. |
| AC-6 | Zero regression on booking modal opening | Clicking "Schedule Consultation" triggers `onOpenBooking("Consultation with Dr. Jebastin")`. |
| AC-7 | Production build passes without error | Run `npm run build` cleanly. |

---

## Open Decisions

- **None**: Requirements, styling direction (Apple-style frosted glass), doctor credentials, and mobile parameters are fully determined.
