"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { backpacks, lunchBoxes, pencilBoxes } from "@/lib/data";
import { ProductArt } from "@/components/art/ProductArt";
import { ProductCard } from "@/components/ui/ProductCard";
import { Rail } from "@/components/ui/Rail";
import { SectionHeading, Stars, WhatsAppIcon } from "@/components/ui/Bits";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { useCart } from "@/components/CartProvider";
import { waProduct } from "@/lib/site";

/* ============================== BACKPACKS ============================== */

export function Backpacks() {
  const { add } = useCart();

  return (
    <section className="relative py-14 sm:py-20" aria-labelledby="bags-title">
      <div className="mx-auto max-w-[80rem] px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Backpack Collection"
            accent="#8B5CF6"
            title="Bags built to survive the school bus"
            sub="Padded straps, reinforced stitching and a back panel that actually cares about a growing spine."
          />
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {backpacks.map((p, i) => (
            <StaggerItem key={p.id} className={i === 0 ? "lg:col-span-2" : ""}>
              <article
                className="sticker sticker-hover group relative h-full overflow-hidden"
                style={{ background: `linear-gradient(150deg,#fff 40%, ${p.plate}1f 100%)` }}
              >
                <div className={`flex h-full ${i === 0 ? "flex-col sm:flex-row sm:items-center" : "flex-col"}`}>
                  <div
                    className="relative grid shrink-0 place-items-center p-8"
                    style={{ background: `radial-gradient(90% 80% at 50% 20%, ${p.plate}30, transparent 72%)` }}
                  >
                    <span
                      className="absolute h-40 w-40 rounded-full opacity-30 blur-2xl transition-all duration-500 group-hover:scale-125"
                      style={{ background: p.plate }}
                      aria-hidden
                    />
                    <ProductArt
                      kind={p.art}
                      title={p.name}
                      className={`relative ${i === 0 ? "h-52 w-52" : "h-40 w-40"} drop-shadow-[0_20px_22px_rgba(42,33,69,0.2)] transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-[-5deg] group-hover:scale-105`}
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    {p.tag ? (
                      <span className="self-start rounded-pill px-3 py-1 font-display text-xs font-extrabold" style={{ background: p.plate }}>
                        {p.tag}
                      </span>
                    ) : null}
                    <h3 className="mt-3 font-display text-2xl font-extrabold leading-tight">{p.name}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{p.blurb}</p>
                    <div className="mt-3 flex items-center gap-2">
                      <Stars value={p.rating} />
                      <span className="text-xs font-bold text-ink-faint">({p.reviews})</span>
                    </div>
                    <div className="mt-auto flex flex-wrap items-end gap-x-3 gap-y-2 pt-5">
                      <span className="font-display text-3xl font-extrabold">₹{p.price}</span>
                      {p.mrp ? <span className="pb-1 font-bold text-ink-faint line-through">₹{p.mrp}</span> : null}
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <button onClick={() => add(p)} className="btn btn-solid bg-sunny px-5 py-2.5 text-sm" style={{ ["--btn-shade" as string]: "#DDA800" }}>
                        Add to Cart
                      </button>
                      <a
                        href={waProduct(p.name, p.price)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-solid bg-[#25D366] px-5 py-2.5 text-sm text-white"
                        style={{ ["--btn-shade" as string]: "#0f9b4c" }}
                      >
                        <WhatsAppIcon className="h-4 w-4" />
                        Order
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

/* ============================== LUNCH BOXES ============================== */

const FOOD = ["🍎", "🥪", "🍇", "🥕", "🍪", "🧃", "🍌", "🥨"];

export function LunchBoxes() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden py-14 sm:py-20" aria-labelledby="lunch-title">
      <div className="absolute inset-0 -z-10 bg-mint-50/70" aria-hidden />

      {/* floating food */}
      {!reduce &&
        FOOD.map((f, i) => (
          <motion.span
            key={f}
            aria-hidden
            className="pointer-events-none absolute select-none text-3xl opacity-40 sm:text-4xl"
            style={{ left: `${5 + i * 12}%`, top: `${12 + (i % 4) * 20}%` }}
            animate={{ y: [0, -22, 0], rotate: [0, i % 2 ? 14 : -14, 0] }}
            transition={{ duration: 6 + (i % 4), repeat: Infinity, delay: i * 0.55, ease: "easeInOut" }}
          >
            {f}
          </motion.span>
        ))}

      <div className="mx-auto max-w-[80rem] px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Lunch Box Collection"
            accent="#0FA97A"
            title="Warm lunches, dry school bags"
            sub="Leak-locked lids and insulated walls, because nothing ruins a notebook faster than yesterday's dal."
          />
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {lunchBoxes.map((p) => (
            <StaggerItem key={p.id}>
              <ProductCard product={p} compact className="h-full" />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

/* ============================== PENCIL BOXES ============================== */

export function PencilBoxes() {
  return (
    <section className="relative py-14 sm:py-20" aria-labelledby="pencilbox-title">
      <div className="mx-auto max-w-[80rem] px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow="Pencil Box Collection"
            accent="#F0B90B"
            title="The one thing they'll show off in class"
            sub="Magnetic flip-tops, dented-proof tins and soft pouches — in colours worth arguing about."
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <Rail label="Pencil box collection">
            {pencilBoxes.map((p) => (
              <ProductCard key={p.id} product={p} className="w-[15.5rem] sm:w-[17rem]" />
            ))}
          </Rail>
        </Reveal>
      </div>
    </section>
  );
}
