"use client";

import * as React from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { HeroScene } from "@/components/art/HeroScene";
import { Cloud, Star, Sparkle } from "@/components/art/Deco";
import { ProductArt, type ArtKind } from "@/components/art/ProductArt";
import { Counter, ConfettiHost, WhatsAppIcon } from "@/components/ui/Bits";
import { waGeneral, site } from "@/lib/site";

const FLOATERS: { kind: ArtKind; cls: string; size: string; delay: string; dur: string }[] = [
  { kind: "pencil", cls: "left-[1%] top-[42%] hidden 2xl:block", size: "h-20 w-20", delay: "0s", dur: "7s" },
  { kind: "crayons", cls: "right-[1%] top-[18%] hidden lg:block", size: "h-20 w-20", delay: "1.1s", dur: "8s" },
  { kind: "books", cls: "left-[1%] bottom-[8%] hidden 2xl:block", size: "h-20 w-20", delay: "0.6s", dur: "6.5s" },
  { kind: "paintkit", cls: "right-[1%] bottom-[14%] hidden lg:block", size: "h-20 w-20", delay: "1.8s", dur: "9s" },
  { kind: "lunchbox", cls: "left-[43%] top-[3%] hidden xl:block", size: "h-14 w-14", delay: "2.2s", dur: "7.5s" },
  { kind: "steelbottle", cls: "right-[30%] bottom-[3%] hidden xl:block", size: "h-14 w-14", delay: "1.4s", dur: "8.5s" },
];

const STATS = [
  { to: 12000, suffix: "+", label: "Happy kids served" },
  { to: 850, suffix: "+", label: "Products in store" },
  { to: 14, suffix: " yrs", label: "In the neighbourhood" },
];

export function Hero() {
  const reduce = useReducedMotion();
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yArt = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 110]);
  const yCopy = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 48]);
  const fade = useTransform(scrollYProgress, [0, 0.9], [1, reduce ? 1 : 0.65]);

  // gentle mouse parallax on the illustration
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 });
  const onMove = (e: React.MouseEvent) => {
    if (reduce) return;
    const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setTilt({
      x: ((e.clientX - r.left) / r.width - 0.5) * 22,
      y: ((e.clientY - r.top) / r.height - 0.5) * 16,
    });
  };

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      className="gradient-sunrise relative isolate overflow-hidden pb-16 pt-28 sm:pb-24 sm:pt-36 lg:pb-28 lg:pt-40"
    >
      {/* soft colour blobs */}
      <div className="pointer-events-none absolute -left-40 top-10 h-[30rem] w-[30rem] rounded-full bg-sky-200/45 blur-[90px]" aria-hidden />
      <div className="pointer-events-none absolute -right-32 top-40 h-[26rem] w-[26rem] rounded-full bg-bubble-100/70 blur-[90px]" aria-hidden />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-[22rem] w-[22rem] rounded-full bg-mint-100/60 blur-[80px]" aria-hidden />

      {/* drifting clouds */}
      <Cloud className="pointer-events-none absolute left-0 top-24 w-40 animate-drift opacity-90 sm:w-56" style={{ animationDuration: "52s" }} />
      <Cloud className="pointer-events-none absolute left-0 top-64 w-28 animate-drift opacity-70 sm:w-40" style={{ animationDuration: "76s", animationDelay: "-20s" }} />
      <Cloud className="pointer-events-none absolute bottom-24 left-0 hidden w-32 animate-drift opacity-60 lg:block" style={{ animationDuration: "94s", animationDelay: "-48s" }} />

      {/* bubbles */}
      {!reduce &&
        Array.from({ length: 10 }).map((_, i) => (
          <motion.span
            key={i}
            aria-hidden
            className="pointer-events-none absolute rounded-full"
            style={{
              left: `${6 + i * 9.4}%`,
              bottom: "-8%",
              width: 10 + (i % 4) * 9,
              height: 10 + (i % 4) * 9,
              background: ["#FFD93D55", "#5BC0FF55", "#FF80BF55", "#6EE7B755", "#8B5CF655"][i % 5],
            }}
            animate={{ y: [0, -640], opacity: [0, 0.9, 0], x: [0, i % 2 ? 30 : -26, 0] }}
            transition={{ duration: 15 + (i % 5) * 3, repeat: Infinity, delay: i * 1.6, ease: "linear" }}
          />
        ))}

      {/* floating stationery */}
      {FLOATERS.map((f) => (
        <div key={f.kind + f.cls} className={`pointer-events-none absolute ${f.cls}`} aria-hidden>
          <div className="animate-float" style={{ animationDelay: f.delay, animationDuration: f.dur }}>
            <ProductArt kind={f.kind} className={`${f.size} opacity-90 drop-shadow-[0_16px_18px_rgba(42,33,69,0.18)]`} />
          </div>
        </div>
      ))}

      <motion.div style={{ opacity: fade }} className="relative mx-auto grid max-w-[80rem] items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr,1fr] lg:gap-6">
        {/* ---------------- copy ---------------- */}
        <motion.div style={{ y: yCopy }} className="relative z-10 text-center lg:text-left">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="eyebrow text-grape"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-mint-400" />
            </span>
            Back to School is here!
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 font-display text-[clamp(2.4rem,6.4vw,4.6rem)] font-extrabold leading-[0.98] tracking-tight"
          >
            Everything Kids Need for{" "}
            <span className="relative isolate inline-block">
              School
              <span
                aria-hidden
                className="absolute inset-x-[-0.12em] bottom-[0.12em] -z-10 h-[0.36em] rounded-[4px] bg-sunny"
              />
            </span>{" "}
            &amp;{" "}
            <span className="relative inline-block text-grape">
              Creativity
              <Sparkle className="absolute -right-7 -top-5 h-7 w-7 animate-wiggle" color="#FFD93D" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.65 }}
            className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-soft lg:mx-0"
          >
            Discover colourful stationery, school supplies, backpacks, lunch boxes, gifts and creative
            essentials — all in one happy place.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start"
          >
            <ConfettiHost className="w-full sm:w-auto">
              <a href="#shop" className="btn btn-solid w-full bg-sunny px-8 py-4 text-lg sm:w-auto" style={{ ["--btn-shade" as string]: "#DDA800" }}>
                Shop Now
                <span aria-hidden>🛍️</span>
              </a>
            </ConfettiHost>
            <a
              href={waGeneral}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-solid w-full bg-[#25D366] px-8 py-4 text-lg text-white sm:w-auto"
              style={{ ["--btn-shade" as string]: "#0f9b4c" }}
            >
              <WhatsAppIcon />
              WhatsApp Order
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 lg:justify-start"
          >
            {STATS.map((s) => (
              <div key={s.label} className="text-center lg:text-left">
                <p className="font-display text-3xl font-extrabold text-ink">
                  <Counter to={s.to} suffix={s.suffix} />
                </p>
                <p className="text-sm font-bold text-ink-faint">{s.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
            className="mt-6 text-sm font-bold text-ink-faint"
          >
            📍 {site.addressLine}, {site.city} · Open today till 8 PM
          </motion.p>
        </motion.div>

        {/* ---------------- illustration ---------------- */}
        <motion.div style={{ y: yArt }} className="relative z-10">
          <motion.div
            animate={{ x: tilt.x, y: tilt.y }}
            transition={{ type: "spring", stiffness: 60, damping: 18 }}
            className="relative mx-auto max-w-[34rem]"
          >
            <div className="absolute inset-6 -z-10 rounded-full bg-white/60 blur-2xl" aria-hidden />
            <HeroScene className="w-full drop-shadow-[0_30px_40px_rgba(42,33,69,0.16)]" />

            <Star className="absolute -left-2 top-6 h-10 w-10 animate-float" style={{ animationDelay: "-1s" }} />
            <Star className="absolute right-4 top-32 h-7 w-7 animate-float" color="#FF80BF" style={{ animationDelay: "-3s" }} />
            <Sparkle className="absolute -right-2 bottom-24 h-9 w-9 animate-wiggle" color="#5BC0FF" />
          </motion.div>

          {/* glass trust chips */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.85, type: "spring", stiffness: 260, damping: 20 }}
            className="glass absolute -bottom-2 left-0 hidden rounded-3xl px-4 py-3 sm:block"
          >
            <p className="font-display text-sm font-extrabold">⭐ 4.9 / 5</p>
            <p className="text-xs font-bold text-ink-soft">1,200+ parent reviews</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
            className="glass absolute right-0 top-4 hidden rounded-3xl px-4 py-3 sm:block"
          >
            <p className="font-display text-sm font-extrabold">🚚 Same-day</p>
            <p className="text-xs font-bold text-ink-soft">city delivery</p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* wavy divider */}
      <svg className="pointer-events-none absolute -bottom-1 left-0 w-full" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden focusable="false">
        <path d="M0 44c180 42 340-30 520-24s280 62 460 56 300-58 460-46v66H0z" fill="#FFFDF8" />
      </svg>
    </section>
  );
}
