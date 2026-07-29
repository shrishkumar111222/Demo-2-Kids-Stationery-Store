"use client";

import { categories } from "@/lib/data";
import { ProductArt } from "@/components/art/ProductArt";
import { SectionHeading } from "@/components/ui/Bits";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";

export function Categories() {
  const [hero, ...rest] = categories;

  return (
    <section id="shop" className="relative scroll-mt-24 py-14 sm:py-20" aria-labelledby="cat-title">
      <div className="mx-auto max-w-[80rem] px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Shop by Category"
            accent="#5BC0FF"
            title={
              <>
                Pick a shelf and{" "}
                <span className="relative whitespace-nowrap">
                  start exploring
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden>
                    <path d="M2 8c40-8 90-8 130-2s50 4 66 0" fill="none" stroke="#5BC0FF" strokeWidth="6" strokeLinecap="round" />
                  </svg>
                </span>
              </>
            }
            sub="Thirteen aisles of colour — from the first pencil of Class 1 to the trolley bag of Class 10."
          />
        </Reveal>

        <StaggerGroup className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
          {/* feature tile */}
          <StaggerItem className="col-span-2 row-span-2">
            <a
              href="#school"
              className="sticker sticker-hover group relative flex h-full min-h-[16rem] flex-col justify-between overflow-hidden p-7"
              style={{ background: "linear-gradient(155deg,#FFF3C4 0%,#FFE983 55%,#FFD93D 100%)" }}
            >
              <div className="relative z-10">
                <span className="rounded-pill bg-white px-3.5 py-1.5 font-display text-xs font-extrabold uppercase tracking-widest">
                  Most shopped
                </span>
                <h3 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
                  School
                  <br />
                  Essentials
                </h3>
                <p className="mt-2 max-w-[16rem] text-[15px] font-semibold text-ink-soft">
                  The full list — books, notebooks, pens, geometry, folders — packed in one bag.
                </p>
                <span className="mt-5 inline-flex items-center gap-2 font-display font-extrabold text-ink underline decoration-2 underline-offset-4">
                  Browse aisle
                  <span className="transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden>
                    →
                  </span>
                </span>
              </div>

              <div className="pointer-events-none absolute bottom-2 right-3 flex items-end gap-1 sm:bottom-4 sm:right-5">
                <ProductArt kind="books" className="h-24 w-24 rotate-[-8deg] drop-shadow-[0_14px_16px_rgba(42,33,69,0.2)] transition-transform duration-500 group-hover:-translate-y-2 sm:h-32 sm:w-32" />
                <ProductArt kind="geometry" className="h-20 w-20 rotate-[7deg] drop-shadow-[0_14px_16px_rgba(42,33,69,0.2)] transition-transform duration-500 group-hover:-translate-y-3 sm:h-28 sm:w-28" />
              </div>
              <span className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/40 blur-2xl" aria-hidden />
            </a>
          </StaggerItem>

          <StaggerItem>
            <CategoryTile c={hero} />
          </StaggerItem>

          {rest.map((c) => (
            <StaggerItem key={c.name}>
              <CategoryTile c={c} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

function CategoryTile({ c }: { c: (typeof categories)[number] }) {
  return (
    <a
      href="#best"
      className="sticker sticker-hover group flex h-full flex-col items-center justify-between gap-3 p-5 text-center"
    >
      <span
        className="grid w-full place-items-center rounded-[22px] py-5 transition-colors duration-300"
        style={{ background: c.soft }}
      >
        <ProductArt
          kind={c.art}
          className="h-20 w-20 drop-shadow-[0_10px_12px_rgba(42,33,69,0.16)] transition-transform duration-500 group-hover:-translate-y-1.5 group-hover:rotate-6 group-hover:scale-110"
        />
      </span>
      <span>
        <span className="block font-display text-[17px] font-extrabold leading-tight">{c.name}</span>
        <span className="mt-0.5 block text-xs font-bold text-ink-faint">{c.count}</span>
      </span>
      <span
        className="h-1.5 w-8 rounded-full transition-all duration-500 group-hover:w-16"
        style={{ background: c.color }}
        aria-hidden
      />
    </a>
  );
}
