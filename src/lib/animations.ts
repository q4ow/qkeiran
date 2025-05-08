import { Variants } from "framer-motion";

// Fade up animation - Good for content sections and cards
export const fadeUpVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 200,
    },
  },
};

// Fade in animation - Gentle and subtle
export const fadeInVariant: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

// Scale fade animation - Good for buttons and interactive elements
export const scaleFadeVariant: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 200,
    },
  },
};

// Stagger children animation - For lists and grids
export const staggerContainerVariant: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

// Slide in from left
export const slideInLeftVariant: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 200,
    },
  },
};

// Slide in from right
export const slideInRightVariant: Variants = {
  hidden: {
    opacity: 0,
    x: 20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 200,
    },
  },
};

// Page transition variants
export const pageVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

// Hover animations
export const hoverScale = {
  scale: 1.05,
  transition: {
    type: "spring",
    stiffness: 300,
    damping: 10,
  },
};

export const hoverBounce = {
  y: -5,
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 10,
  },
};

// Gestures
export const tapScale = {
  scale: 0.95,
};

// Loading spinner animation
export const spinTransition = {
  repeat: Infinity,
  ease: "linear",
  duration: 1,
};

// Text reveal character animation
export const characterVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

// Text reveal word animation
export const wordVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};