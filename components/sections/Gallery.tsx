"use client";

import { SectionHeading } from "@/components/ui/Bits";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { ProductArt, type ArtKind } from "@/components/art/ProductArt";

type Tile = {
  caption: string;
  likes: number;
  bg: string;
  items: ArtKind[];
  emoji: string;
  span?: string;
};

const TILES: Tile[] = [
  {
    caption: "First day of Class 1 — new bag, zero nerves",
    likes: 342,
    bg: "linear-gradient(150deg,#FFE983,#FFD93D)",
    items: ["backpack", "lunchbox"],
    emoji: "🎒",
    span: "sm:col-span-2 sm:row-span-2",
  },
  { caption: "Restocked: 24-shade sketch pens", likes: 188, bg: "linear-gradient(150deg,#D6F0FF,#5BC0FF)", items: ["sketchpens"], emoji: "🖍️" },
  { caption: "Craft corner before the school project rush", likes: 254, bg: "linear-gradient(150deg,#FFE0EF,#FF80BF)", items: ["craftpaper", "scissors"], emoji: "✂️" },
  { caption: "Somebody finished their first canvas", likes: 411, bg: "linear-gradient(150deg,#D6F9EA,#6EE7B7)", items: ["canvas"], emoji: "🎨" },
  { caption: "Lunch box wall — pick your colour", likes: 176, bg: "linear-gradient(150deg,#EAE2FD,#8B5CF6)", items: ["lunchbox", "steelbottle"], emoji: "🥪" },
  {
    caption: "Book covers being wrapped, 40 at a time",
    likes: 297,
    bg: "linear-gradient(150deg,#FFF3C4,#FFB347)",
    items: ["books", "notebook"],
    emoji: "📚",
    span: "sm:col-span-2",
  },
  { caption: "Return-gift boxes for a Sunday birthday", likes: 233, bg: "linear-gradient(150deg,#FFE0EF,#FF9ACF)", items: ["giftbox"], emoji: "🎁" },
  { caption: "Clay day at the kids' craft table", likes: 305, bg: "linear-gradient(150deg,#D6F0FF,#AEE2FF)", items: ["clay"], emoji: "🧱" },
];

export function Gallery() {
  return (
    <section className="py-14 sm:py-20" aria-labelledby="gallery-title">
      <div className="mx-auto max-w-[80rem] px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="From the Shop Floor"
            accent="#FF80BF"
            title="A week in our little colourful world"
            sub="Shelves, smiles and school projects — straight from the store."
          />
        </Reveal>

        <StaggerGroup className="mt-14 grid auto-rows-[11rem] grid-cols-2 gap-3.5 sm:auto-rows-[13rem] sm:grid-cols-4">
          {TILES.map((t) => (
            <StaggerItem key={t.caption} className={t.span ?? ""}>
              <figure
                className="group relative h-full w-full overflow-hidden rounded-[26px] shadow-sticker"
                style={{ background: t.bg }}
              >
                <span
                  className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/35 blur-xl"
                  aria-hidden
                />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="flex items-center gap-1">
                    {t.items.map((k, idx) => (
                      <span key={k + idx} className="block" style={{ transform: `rotate(${idx % 2 ? 6 : -6}deg)` }}>
                        <span className="block transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105">
                          <ProductArt
                            kind={k}
                            className="h-24 w-24 drop-shadow-[0_12px_14px_rgba(42,33,69,0.22)] sm:h-28 sm:w-28"
                          />
                        </span>
                      </span>
                    ))}
                  </div>
                </div>

                <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-ink/80 via-ink/45 to-transparent p-4 pt-10 opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="font-display text-sm font-extrabold leading-snug text-white">{t.caption}</p>
                  <p className="mt-1 text-xs font-bold text-white/75">
                    ♥ {t.likes} · #DoodleAndDot
                  </p>
                </figcaption>

                <span className="absolute right-3 top-3 text-2xl transition-transform duration-500 group-hover:rotate-12 group-hover:scale-125" aria-hidden>
                  {t.emoji}
                </span>
              </figure>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.1}>
          <p className="mt-8 text-center text-sm font-bold text-ink-faint">
            Follow the shop for restocks, sale days and craft ideas — @doodleanddot
          </p>
        </Reveal>
      </div>
    </section>
  );
}
