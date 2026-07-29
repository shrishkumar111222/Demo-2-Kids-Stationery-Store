"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Balloon, PaperPlane, Star } from "@/components/art/Deco";
import { ConfettiHost, WhatsAppIcon } from "@/components/ui/Bits";
import { Reveal } from "@/components/ui/Reveal";
import { waLink } from "@/lib/site";

const saleWa = waLink("Hi! 👋 I saw the Back to School Mega Sale — please share the offer list.");

const CONFETTI = Array.from({ length: 26 }).map((_, i) => ({
  left: `${(i * 3.9 + (i % 5) * 2) % 100}%`,
  delay: (i % 9) * 0.7,
  dur: 7 + (i % 6),
  color: ["#FFD93D", "#5BC0FF", "#8B5CF6", "#FF80BF", "#6EE7B7", "#fff"][i % 6],
  size: 6 + (i % 4) * 3,
  round: i % 3 === 0,
}));

export function Offers() {
  const reduce = useReducedMotion();
  const [t, setT] = React.useState({ h: 0, m: 0, s: 0 });

  // playful "sale ends tonight" countdown
  React.useEffect(() => {
    const tick = () => {
      const now = new Date();
      const end = new Date(now);
      end.setHours(23, 59, 59, 999);
      const diff = Math.max(0, end.getTime() - now.getTime()) / 1000;
      setT({
        h: Math.floor(diff / 3600),
        m: Math.floor((diff % 3600) / 60),
        s: Math.floor(diff % 60),
      });
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section id="offers" className="scroll-mt-24 py-14 sm:py-20" aria-labelledby="offers-title">
      <div className="mx-auto max-w-[80rem] px-4 sm:px-6">
        <Reveal from="scale">
          <div
            className="relative isolate overflow-hidden rounded-[36px] px-6 py-14 text-center sm:px-12 sm:py-20"
            style={{
              background:
                "radial-gradient(110% 90% at 12% 0%, #FF9ACF 0%, transparent 55%), radial-gradient(100% 90% at 88% 8%, #7DD0FF 0%, transparent 55%), linear-gradient(140deg,#FFD93D 0%,#FFB347 48%,#FF80BF 100%)",
            }}
          >
            {/* confetti rain */}
            {!reduce &&
              CONFETTI.map((c, i) => (
                <motion.span
                  key={i}
                  aria-hidden
                  className="pointer-events-none absolute top-[-8%]"
                  style={{
                    left: c.left,
                    width: c.size,
                    height: c.round ? c.size : c.size * 1.8,
                    background: c.color,
                    borderRadius: c.round ? "50%" : 2,
                  }}
                  animate={{ y: ["0%", "1200%"], rotate: [0, 540], opacity: [0, 1, 1, 0] }}
                  transition={{ duration: c.dur, repeat: Infinity, delay: c.delay, ease: "linear" }}
                />
              ))}

            <Balloon className="pointer-events-none absolute -left-2 bottom-4 h-28 animate-float sm:left-8 sm:h-40" color="#8B5CF6" />
            <Balloon className="pointer-events-none absolute -right-2 top-6 h-24 animate-float sm:right-10 sm:h-36" color="#6EE7B7" style={{ animationDelay: "-2s" }} />
            <Star className="pointer-events-none absolute left-1/4 top-6 h-9 w-9 animate-wiggle" color="#fff" />
            <Star className="pointer-events-none absolute bottom-8 right-1/4 h-7 w-7 animate-wiggle" color="#fff" />

            {!reduce ? (
              <motion.div
                aria-hidden
                className="pointer-events-none absolute top-10 left-0"
                animate={{ x: ["-10vw", "110vw"], y: [0, -46, 12, -20, 0] }}
                transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
              >
                <PaperPlane className="h-12 w-16 -rotate-6" />
              </motion.div>
            ) : null}

            <div className="relative z-10">
              <span className="eyebrow bg-ink text-sunny">🔥 Limited Time</span>
              <h2 id="offers-title" className="mt-5 font-display text-[clamp(2.2rem,6vw,4.2rem)] font-extrabold leading-[0.98] text-white text-stroke-white sm:text-ink">
                Back to School Mega Sale
              </h2>
              <p className="mt-4 font-display text-[clamp(2.8rem,9vw,6rem)] font-extrabold leading-none text-white drop-shadow-[0_6px_0_rgba(42,33,69,0.28)]">
                Up to 30% OFF
              </p>
              <p className="mx-auto mt-4 max-w-xl text-lg font-semibold text-ink/80">
                On notebooks, school bags, geometry boxes and every art &amp; craft kit on the shelf.
              </p>

              <div className="mx-auto mt-8 flex w-max gap-2.5 rounded-3xl bg-white/70 p-3 backdrop-blur">
                {[
                  ["Hours", t.h],
                  ["Mins", t.m],
                  ["Secs", t.s],
                ].map(([label, val]) => (
                  <div key={label as string} className="min-w-[4.5rem] rounded-2xl bg-white px-3 py-2 shadow-sticker">
                    <p className="font-display text-3xl font-extrabold tabular-nums leading-none">
                      {String(val).padStart(2, "0")}
                    </p>
                    <p className="mt-1 text-[11px] font-extrabold uppercase tracking-widest text-ink-faint">{label as string}</p>
                  </div>
                ))}
              </div>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <ConfettiHost className="w-full sm:w-auto">
                  <a href="#best" className="btn btn-solid w-full bg-ink px-8 py-4 text-lg text-white sm:w-auto" style={{ ["--btn-shade" as string]: "#100c1f" }}>
                    Shop the Sale
                  </a>
                </ConfettiHost>
                <a
                  href={saleWa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-solid w-full bg-white px-8 py-4 text-lg sm:w-auto"
                  style={{ ["--btn-shade" as string]: "rgba(42,33,69,0.25)" }}
                >
                  <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
                  Order on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
