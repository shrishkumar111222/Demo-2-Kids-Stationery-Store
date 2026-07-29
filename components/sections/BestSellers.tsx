"use client";

import * as React from "react";
import { bestSellers } from "@/lib/data";
import { ProductCard } from "@/components/ui/ProductCard";
import { SectionHeading } from "@/components/ui/Bits";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";

const FILTERS = ["All", "Under ₹300", "Top Rated", "On Offer"] as const;

export function BestSellers() {
  const [filter, setFilter] = React.useState<(typeof FILTERS)[number]>("All");

  const shown = bestSellers.filter((p) => {
    if (filter === "Under ₹300") return p.price < 300;
    if (filter === "Top Rated") return p.rating >= 4.8;
    if (filter === "On Offer") return !!p.mrp && p.mrp - p.price >= 100;
    return true;
  });

  return (
    <section id="best" className="scroll-mt-24 py-14 sm:py-20" aria-labelledby="best-title">
      <div className="mx-auto max-w-[80rem] px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Best Sellers"
            accent="#DDA800"
            title="What other parents keep re-ordering"
            sub="Twelve products that walk out of the shop faster than we can restock them."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap justify-center gap-2.5" role="group" aria-label="Filter best sellers">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={`rounded-pill px-5 py-2.5 font-display text-sm font-extrabold transition ${
                  filter === f
                    ? "bg-ink text-white shadow-[0_6px_0_0_#100c1f]"
                    : "bg-white text-ink-soft shadow-sticker hover:-translate-y-0.5 hover:bg-sunny-50"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <StaggerGroup
          key={filter}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {shown.map((p) => (
            <StaggerItem key={p.id}>
              <ProductCard product={p} className="h-full" />
            </StaggerItem>
          ))}
        </StaggerGroup>

        {shown.length === 0 ? (
          <p className="mt-12 text-center text-lg font-bold text-ink-soft">
            Nothing in this filter right now — try &ldquo;All&rdquo;.
          </p>
        ) : null}
      </div>
    </section>
  );
}
