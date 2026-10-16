/**
 * jebastins-dental-clinic: Reusable Motion Design Tokens & Easing Curves
 * Adheres strictly to Motion (motion/react v12) typing and performance guidelines.
 */

export const TRANSITION_SMOOTH = {
  duration: 0.75,
  ease: [0.16, 1, 0.3, 1] as const, // Apple/editorial cubic-bezier easeOutExpo
};

export const TRANSITION_SLOW = {
  duration: 1.1,
  ease: [0.16, 1, 0.3, 1] as const,
};

export const TRANSITION_FAST = {
  duration: 0.28,
  ease: [0.25, 1, 0.5, 1] as const,
};

export const SPRING_TACTILE = {
  type: "spring" as const,
  stiffness: 420,
  damping: 28,
  mass: 0.8,
};

export const SPRING_GENTLE = {
  type: "spring" as const,
  stiffness: 260,
  damping: 32,
  mass: 1,
};

export const SPRING_BOUNCE = {
  type: "spring" as const,
  stiffness: 350,
  damping: 22,
  mass: 0.75,
};

// Masked Text Reveal Variants (Words slide up from an overflow:hidden mask)
export const maskRevealContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const maskRevealWord = {
  hidden: {
    y: "115%",
    opacity: 0,
    rotateX: 18,
  },
  visible: {
    y: "0%",
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

// Subtle Content Fade-Up
export const fadeUpVariant = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: TRANSITION_SMOOTH,
  },
};

// Staggered Container for Lists / Grids
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};
