"use client";

import { motion, useReducedMotion } from "framer-motion";
import * as React from "react";

/**
 * Shared viewport gate.
 *
 * `amount` is a fraction of the TARGET's height, so any block taller than
 * ~1 / amount viewports can never satisfy it and would stay invisible forever
 * (a 6000px grid at amount 0.15 needs 1.08 viewports of itself on screen).
 * "some" means "any part intersects", which is height-independent; the negative
 * bottom margin holds the reveal until the element is a little way in.
 */
const VIEWPORT = { once: true, amount: "some", margin: "0px 0px -60px 0px" } as const;

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
      viewport={{ ...VIEWPORT, once }}
      transition={{ duration: 0.62, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Each item watches itself rather than inheriting a run from the group.
 * Parent-orchestrated variants would tie a 12-card grid's reveal to one
 * observer on the full-height container, which cannot fire on small screens.
 * The group only hands down an index so the cascade still reads left-to-right.
 */
export function StaggerGroup({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  let i = 0;
  return (
    <div className={className}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child) && child.type === StaggerItem
          ? React.cloneElement(child as React.ReactElement<{ index?: number }>, { index: i++ })
          : child,
      )}
    </div>
  );
}

export function StaggerItem({
  children,
  className = "",
  index = 0,
}: {
  children: React.ReactNode;
  className?: string;
  index?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      // capped so the tail of a long grid doesn't sit waiting a full second
      transition={{ duration: 0.55, delay: Math.min(index, 5) * 0.07, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
