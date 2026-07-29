"use client";

import { SectionHeading, Counter } from "@/components/ui/Bits";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { ProductArt, type ArtKind } from "@/components/art/ProductArt";
import { Rainbow } from "@/components/art/Deco";

const REASONS: { title: string; copy: string; art: ArtKind; color: string }[] = [
  { title: "Affordable Prices", copy: "A full Class 5 list, packed and delivered, still lands under budget.", art: "notebook", color: "#FFD93D" },
  { title: "Premium Quality", copy: "We buy the bag we'd give our own kids — then stand behind it for a year.", art: "backpack", color: "#8B5CF6" },
  { title: "Trusted Products", copy: "Sealed, branded, GST-billed. Every single item, every single time.", art: "books", color: "#5BC0FF" },
  { title: "Safe Materials", copy: "Non-toxic paints, blunt-tip scissors, BPA-free bottles. Checked, not assumed.", art: "scissors", color: "#6EE7B7" },
  { title: "Friendly Support", copy: "A real person replies on WhatsApp — usually within four minutes.", art: "pencil", color: "#FF80BF" },
  { title: "Fast Delivery", copy: "Ordered at 3 PM, opened at the dinner table. Free above ₹499.", art: "paperplane", color: "#FFD93D" },
];

const NUMBERS = [
  { to: 12000, suffix: "+", label: "Orders delivered" },
  { to: 38, suffix: "", label: "Schools we supply" },
  { to: 4, suffix: " min", label: "Avg. WhatsApp reply" },
  { to: 98, suffix: "%", label: "Would recommend" },
];

export function WhyParents() {
  return (
    <section id="about" className="relative scroll-mt-24 py-14 sm:py-20" aria-labelledby="why-title">
      <div className="mx-auto max-w-[80rem] px-4 sm:px-6">
        <Reveal>
          <div className="relative">
            <Rainbow className="pointer-events-none absolute -top-10 left-1/2 hidden w-64 -translate-x-1/2 opacity-30 sm:block" />
            <SectionHeading
              eyebrow="Why Parents Love Us"
              accent="#0FA97A"
              title="Fourteen years on the same street corner"
              sub="We started as a two-shelf shop next to the school gate. What kept us here wasn't discounts — it was parents who came back the next April."
            />
          </div>
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r, i) => (
            <StaggerItem key={r.title}>
              <div
                className="sticker sticker-plate sticker-hover group h-full p-7"
                style={{ ["--plate" as string]: `${r.color}55`, transform: `rotate(${i % 2 ? "-0.6deg" : "0.6deg"})` }}
              >
                <span
                  className="grid h-20 w-20 place-items-center rounded-3xl transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105"
                  style={{ background: `${r.color}2e` }}
                >
                  <ProductArt kind={r.art} className="h-14 w-14 drop-shadow-[0_8px_10px_rgba(42,33,69,0.16)]" />
                </span>
                <h3 className="mt-5 font-display text-xl font-extrabold">{r.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{r.copy}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.1} className="mt-14">
          <div className="grid gap-6 rounded-[34px] bg-ink px-6 py-10 sm:grid-cols-2 sm:px-12 lg:grid-cols-4">
            {NUMBERS.map((n) => (
              <div key={n.label} className="text-center">
                <p className="font-display text-[clamp(2.2rem,5vw,3.2rem)] font-extrabold leading-none text-sunny">
                  <Counter to={n.to} suffix={n.suffix} />
                </p>
                <p className="mt-2 text-sm font-bold uppercase tracking-widest text-white/60">{n.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
