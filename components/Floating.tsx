"use client";

import * as React from "react";
import { AnimatePresence, motion, useScroll, useSpring, useMotionValueEvent } from "framer-motion";
import { WhatsAppIcon } from "@/components/ui/Bits";
import { site, waGeneral, waDemo } from "@/lib/site";
import { useCart } from "@/components/CartProvider";

/** Reading-progress bar pinned under the header. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 120, damping: 26, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX: x }}
      className="fixed inset-x-0 top-0 z-[60] h-1.5 origin-left rounded-r-full bg-gradient-to-r from-sunny via-bubble to-grape"
    />
  );
}

/** Floating WhatsApp bubble + free-demo pill (desktop) and sticky action bar (mobile). */
export function FloatingCTAs() {
  const [shown, setShown] = React.useState(false);
  const [tip, setTip] = React.useState(false);
  const { scrollY } = useScroll();
  const { count, open } = useCart();

  useMotionValueEvent(scrollY, "change", (v) => setShown(v > 520));

  React.useEffect(() => {
    const t = window.setTimeout(() => setTip(true), 6500);
    const t2 = window.setTimeout(() => setTip(false), 15000);
    return () => {
      window.clearTimeout(t);
      window.clearTimeout(t2);
    };
  }, []);

  return (
    <>
      {/* ---------- floating WhatsApp ---------- */}
      <div className="fixed bottom-24 right-4 z-[65] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
        <AnimatePresence>
          {shown ? (
            <motion.a
              key="demo-pill"
              href={waDemo}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 320, damping: 24 }}
              className="hidden items-center gap-2 rounded-pill bg-ink px-5 py-3.5 font-display text-sm font-extrabold text-white shadow-lift transition hover:-translate-y-1 hover:bg-grape sm:inline-flex"
            >
              <span aria-hidden>✨</span>
              Request Your FREE Website Demo
            </motion.a>
          ) : null}
        </AnimatePresence>

        <div className="relative">
          <AnimatePresence>
            {tip ? (
              <motion.span
                initial={{ opacity: 0, x: 12, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 12, scale: 0.9 }}
                className="absolute right-[4.6rem] top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-2xl bg-white px-4 py-2.5 font-display text-sm font-extrabold shadow-lift sm:block"
              >
                Need help? Chat with us 👋
                <span className="absolute -right-1.5 top-1/2 h-3 w-3 -translate-y-1/2 rotate-45 bg-white" aria-hidden />
              </motion.span>
            ) : null}
          </AnimatePresence>

          <a
            href={waGeneral}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Chat with ${site.name} on WhatsApp`}
            onMouseEnter={() => setTip(true)}
            onMouseLeave={() => setTip(false)}
            className="relative grid h-16 w-16 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.9)] transition hover:-translate-y-1 hover:scale-105"
          >
            <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" aria-hidden />
            <WhatsAppIcon className="relative h-8 w-8" />
          </a>
        </div>
      </div>

      {/* ---------- sticky mobile bar ---------- */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 26 }}
        className="fixed inset-x-0 bottom-0 z-[64] border-t border-ink/5 bg-white/90 px-3 pb-[max(0.6rem,env(safe-area-inset-bottom))] pt-2.5 backdrop-blur-xl sm:hidden"
      >
        <div className="grid grid-cols-4 gap-2">
          <a
            href={`tel:${site.phone}`}
            className="flex flex-col items-center gap-0.5 rounded-2xl bg-sunny-50 py-2 font-display text-[11px] font-extrabold"
          >
            <span className="text-lg" aria-hidden>
              📞
            </span>
            Call
          </a>
          <a
            href={waGeneral}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-0.5 rounded-2xl bg-[#25D366] py-2 font-display text-[11px] font-extrabold text-white"
          >
            <WhatsAppIcon className="h-5 w-5" />
            WhatsApp
          </a>
          <button
            onClick={open}
            className="relative flex flex-col items-center gap-0.5 rounded-2xl bg-sky-50 py-2 font-display text-[11px] font-extrabold"
          >
            <span className="text-lg" aria-hidden>
              🛒
            </span>
            Cart
            {count > 0 ? (
              <span className="absolute right-3 top-1 grid h-4 min-w-[1rem] place-items-center rounded-full bg-bubble px-1 text-[10px] text-white">
                {count}
              </span>
            ) : null}
          </button>
          <a
            href={waDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-0.5 rounded-2xl bg-grape py-2 font-display text-[11px] font-extrabold text-white"
          >
            <span className="text-lg" aria-hidden>
              ✨
            </span>
            Free Demo
          </a>
        </div>
      </motion.div>
    </>
  );
}
