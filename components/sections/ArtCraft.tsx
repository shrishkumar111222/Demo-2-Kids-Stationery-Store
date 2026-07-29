"use client";

import { motion, useReducedMotion } from "framer-motion";
import { artCraft } from "@/lib/data";
import { ProductCard } from "@/components/ui/ProductCard";
import { SectionHeading } from "@/components/ui/Bits";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";

const SPLASHES = [
  { c: "#FF80BF", x: "6%", y: "10%", s: 260, d: 0 },
  { c: "#5BC0FF", x: "78%", y: "6%", s: 220, d: 1.2 },
  { c: "#FFD93D", x: "60%", y: "62%", s: 300, d: 2.4 },
  { c: "#6EE7B7", x: "12%", y: "68%", s: 240, d: 0.8 },
  { c: "#8B5CF6", x: "40%", y: "34%", s: 200, d: 1.8 },
];

function Splash({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden focusable="false">
      <path
        fill={color}
        d="M104 12c22-6 34 18 52 22s34 4 38 24-16 30-14 48 20 28 12 44-32 8-48 18-22 30-42 30-26-20-44-28-40-2-46-20 12-30 10-48-18-30-8-46 30-6 48-16 20-22 42-28z"
      />
      <circle cx="26" cy="42" r="9" fill={color} />
      <circle cx="182" cy="86" r="7" fill={color} />
      <circle cx="86" cy="190" r="6" fill={color} />
    </svg>
  );
}

export function ArtCraft() {
  const reduce = useReducedMotion();

  return (
    <section id="art" className="relative isolate scroll-mt-24 overflow-hidden py-16 sm:py-24" aria-labelledby="art-title">
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-white via-[#FFFBF2] to-white" aria-hidden />

      {/* animated paint splashes */}
      {SPLASHES.map((s) => (
        <motion.div
          key={s.c}
          aria-hidden
          className="pointer-events-none absolute -z-10 opacity-[0.16] blur-[2px]"
          style={{ left: s.x, top: s.y, width: s.s, height: s.s }}
          animate={reduce ? undefined : { scale: [1, 1.14, 1], rotate: [0, 22, 0], opacity: [0.12, 0.2, 0.12] }}
          transition={{ duration: 14, repeat: Infinity, delay: s.d, ease: "easeInOut" }}
        >
          <Splash color={s.c} />
        </motion.div>
      ))}

      <div className="mx-auto max-w-[80rem] px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Art & Craft"
            accent="#FF80BF"
            title={
              <>
                Where the mess turns into <span className="text-bubble">masterpieces</span>
              </>
            }
            sub="Paints, papers, clay and kits that keep small hands busy on a rainy Sunday — every one of them non-toxic and washable."
          />
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {artCraft.map((p) => (
            <StaggerItem key={p.id}>
              <ProductCard product={p} compact className="h-full" />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
