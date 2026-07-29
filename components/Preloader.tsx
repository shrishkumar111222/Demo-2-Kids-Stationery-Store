"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ProductArt } from "@/components/art/ProductArt";

const BOUNCERS = ["pencil", "crayons", "books", "paintkit"] as const;

export function Preloader() {
  const [done, setDone] = React.useState(false);
  const reduce = useReducedMotion();

  React.useEffect(() => {
    const t = window.setTimeout(() => setDone(true), reduce ? 200 : 1450);
    return () => window.clearTimeout(t);
  }, [reduce]);

  return (
    <AnimatePresence>
      {!done ? (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[120] grid place-items-center bg-cream"
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden
        >
          <div className="text-center">
            <div className="flex items-end justify-center gap-2">
              {BOUNCERS.map((k, i) => (
                <motion.span
                  key={k}
                  animate={{ y: [0, -22, 0], rotate: [0, i % 2 ? 12 : -12, 0] }}
                  transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.13, ease: "easeInOut" }}
                >
                  <ProductArt kind={k} className="h-14 w-14 sm:h-16 sm:w-16" />
                </motion.span>
              ))}
            </div>
            <p className="mt-6 font-display text-2xl font-extrabold">
              Doodle<span className="text-grape">&amp;</span>Dot
            </p>
            <p className="mt-1 text-sm font-bold text-ink-faint">Unpacking the colours…</p>
            <div className="mx-auto mt-4 h-1.5 w-40 overflow-hidden rounded-full bg-sunny-100">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-sunny via-bubble to-grape"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.3, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
