"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import * as React from "react";

type Dir = "up" | "left" | "right" | "scale";

export function Reveal({
  children,
  delay = 0,
  from = "up",
  className = "",
  once = true,
}: {
  children: React.ReactNode;
  delay?: number;
  from?: Dir;
  className?: string;
  once?: boolean;
}) {
  const reduce = useReducedMotion();

  const offsets: Record<Dir, { x?: number; y?: number; scale?: number }> = {
    up: { y: 34 },
    left: { x: -34 },
    right: { x: 34 },
    scale: { scale: 0.92 },
  };

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offsets[from] }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once, amount: 0.25, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.62, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.075, delayChildren: 0.05 } },
};

export const stagItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export function StaggerGroup({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div className={className} variants={stagItem}>
      {children}
    </motion.div>
  );
}
