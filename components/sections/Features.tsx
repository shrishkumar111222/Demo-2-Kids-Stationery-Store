"use client";

import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";

const FEATURES = [
  { icon: "🏷️", title: "Original Products", copy: "Only branded, sealed stock. Nothing that fell off a truck.", color: "#FFD93D" },
  { icon: "🚚", title: "Fast Delivery", copy: "Order before 4 PM and it's at your door the same evening.", color: "#5BC0FF" },
  { icon: "🧸", title: "Safe for Kids", copy: "Non-toxic, blunt-tip, BPA-free — checked before it's shelved.", color: "#6EE7B7" },
  { icon: "💰", title: "Affordable Prices", copy: "Full school lists that fit a real family budget.", color: "#FF80BF" },
  { icon: "✨", title: "Best Quality", copy: "Bags and bottles chosen to survive an entire school year.", color: "#8B5CF6" },
  { icon: "📚", title: "Huge Collection", copy: "850+ items across every class, hobby and gift occasion.", color: "#FFD93D" },
];

const TICKER = [
  "Free gift wrapping",
  "Same-day delivery",
  "Bulk school orders",
  "WhatsApp ordering",
  "Non-toxic & kid-safe",
  "Easy 7-day exchange",
  "Pay on delivery",
];

export function Features() {
  return (
    <section className="relative py-14 sm:py-20" aria-labelledby="features-title">
      {/* ticker */}
      <div className="relative mb-14 overflow-hidden bg-ink py-3.5 sm:mb-20">
        <div className="flex w-max animate-marquee pause-hover gap-8">
          {[0, 1].map((dup) => (
            <ul key={dup} className="flex shrink-0 items-center gap-8" aria-hidden={dup === 1}>
              {TICKER.map((t) => (
                <li key={t} className="flex items-center gap-8 whitespace-nowrap font-display text-sm font-extrabold uppercase tracking-[0.18em] text-white">
                  {t}
                  <span className="text-sunny" aria-hidden>
                    ✦
                  </span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[80rem] px-4 sm:px-6">
        <h2 id="features-title" className="sr-only">
          Why shop with us
        </h2>
        <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <StaggerItem key={f.title}>
              <div
                className="sticker sticker-hover group h-full p-6"
                style={{ transform: `rotate(${i % 3 === 1 ? "0.7deg" : i % 3 === 2 ? "-0.8deg" : "0deg"})` }}
              >
                <div className="flex items-start gap-4">
                  <span
                    className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-2xl transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110"
                    style={{ background: `${f.color}33` }}
                    aria-hidden
                  >
                    {f.icon}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-extrabold">{f.title}</h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-ink-soft">{f.copy}</p>
                  </div>
                </div>
                <span
                  className="mt-5 block h-1.5 w-0 rounded-full transition-all duration-500 group-hover:w-full"
                  style={{ background: f.color }}
                  aria-hidden
                />
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
