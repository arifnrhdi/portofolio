"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

type StaggerGroupProps = {
  children: ReactNode;
  className?: string;
};

/**
 * StaggerGroup — wraps a grid of cards so children reveal in a gentle
 * cascade as the group scrolls into view. Pair each direct child with
 * `<motion.div variants={staggerItem}>`.
 */
const StaggerGroup = ({ children, className }: StaggerGroupProps) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={container}
    >
      {children}
    </motion.div>
  );
};

export default StaggerGroup;
