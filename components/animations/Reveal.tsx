"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Delay in seconds before the animation starts (useful for staggering siblings). */
  delay?: number;
  /** Vertical offset in px the element rises from. Keep small for a subtle effect. */
  y?: number;
  /** Extra className passed to the wrapping motion.div */
  className?: string;
  /** Only animate once, the first time it enters the viewport. */
  once?: boolean;
};

const buildVariants = (y: number): Variants => ({
  hidden: { opacity: 0, y },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
});

/**
 * Reveal — a minimal, tasteful scroll-triggered fade + rise.
 * Designed to complement a neobrutalism layout: no rotation, no bounce,
 * just enough motion to feel alive without competing with the bold
 * borders / hard shadows already doing the visual work.
 */
const Reveal = ({
  children,
  delay = 0,
  y = 24,
  className,
  once = true,
}: RevealProps) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.2 }}
      variants={buildVariants(y)}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
