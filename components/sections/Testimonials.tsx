"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "@/lib/data";
import { SectionHeading, Stars, Arrow } from "@/components/ui/Bits";
import { Reveal } from "@/components/ui/Reveal";

export function Testimonials() {
  const [i, setI] = React.useState(0);
  const [dir, setDir] = React.useState(1);
  const [paused, setPaused] = React.useState(false);

  const go = React.useCallback((next: number, d: number) => {
    setDir(d);
    setI((next + testimonials.length) % testimonials.length);
  }, []);

  React.useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => go(i + 1, 1), 6000);
    return () => window.clearInterval(id);
  }, [i, paused, go]);

  const t = testimonials[i];

  return (
    <section
      className="relative overflow-hidden py-14 sm:py-20"
      aria-labelledby="testi-title"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-[80rem] px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            accent="#8B5CF6"
            title="Parents talk. We listen."
            sub="No paid reviews here — these are people who walk into the shop or message us every April."
          />
        </Reveal>

        <div className="relative mx-auto mt-14 max-w-3xl">
          {/* stacked paper behind */}
          <div className="absolute inset-x-6 -top-3 h-full rounded-[32px] bg-white/70 shadow-sticker" aria-hidden />
          <div className="absolute inset-x-10 -top-6 h-full rounded-[32px] bg-white/40" aria-hidden />

          <div className="relative min-h-[22rem] sm:min-h-[19rem]">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.blockquote
                key={i}
                custom={dir}
                initial={{ opacity: 0, x: dir * 60, rotate: dir * 2 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                exit={{ opacity: 0, x: dir * -60, rotate: dir * -2 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="sticker relative flex h-full flex-col p-8 sm:p-10"
              >
                <span
                  className="absolute -top-6 left-8 font-display text-8xl leading-none"
                  style={{ color: t.color }}
                  aria-hidden
                >
                  &ldquo;
                </span>

                <Stars value={5} size={20} />
                <p className="mt-5 text-lg leading-relaxed text-ink sm:text-xl">{t.quote}</p>

                <footer className="mt-auto flex items-center gap-4 pt-7">
                  <span
                    className="grid h-14 w-14 shrink-0 place-items-center rounded-full font-display text-lg font-extrabold text-ink"
                    style={{ background: t.color }}
                    aria-hidden
                  >
                    {t.initials}
                  </span>
                  <span>
                    <cite className="block font-display text-lg font-extrabold not-italic">{t.name}</cite>
                    <span className="text-sm font-bold text-ink-faint">{t.role}</span>
                  </span>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => go(i - 1, -1)}
              aria-label="Previous testimonial"
              className="grid h-12 w-12 place-items-center rounded-full bg-white shadow-sticker transition hover:-translate-y-0.5 hover:bg-sunny"
            >
              <Arrow dir="left" />
            </button>

            <div className="flex gap-2" role="tablist" aria-label="Choose testimonial">
              {testimonials.map((tt, idx) => (
                <button
                  key={tt.name}
                  role="tab"
                  aria-selected={idx === i}
                  aria-label={`Review by ${tt.name}`}
                  onClick={() => go(idx, idx > i ? 1 : -1)}
                  className="h-3 rounded-full transition-all duration-300"
                  style={{
                    width: idx === i ? 34 : 12,
                    background: idx === i ? tt.color : "#E6DFD0",
                  }}
                />
              ))}
            </div>

            <button
              onClick={() => go(i + 1, 1)}
              aria-label="Next testimonial"
              className="grid h-12 w-12 place-items-center rounded-full bg-white shadow-sticker transition hover:-translate-y-0.5 hover:bg-sunny"
            >
              <Arrow />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
