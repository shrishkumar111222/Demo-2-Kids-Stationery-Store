"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { SectionHeading, ConfettiHost, WhatsAppIcon, Counter } from "@/components/ui/Bits";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { Star, Sparkle } from "@/components/art/Deco";
import { site, waDemo } from "@/lib/site";

const WITHOUT = [
  "Parents can't find you until they walk past the shop",
  "Every price and stock question is a phone call",
  "Orders stop when the shutter comes down at 8 PM",
  "The bigger store online looks more trustworthy",
  "No way to show your full 850-item collection",
  "Sale offers reach only the people already inside",
];

const WITH = [
  "You show up on Google when a parent searches at 11 PM",
  "The catalogue answers price and stock questions for you",
  "WhatsApp orders keep arriving after closing time",
  "A premium site makes a local shop look established",
  "Every product, every category, always on display",
  "One link on the school WhatsApp group reaches 200 parents",
];

const TRUST = [
  { to: 60, suffix: "+", label: "Local shops online" },
  { to: 3, suffix: "×", label: "More WhatsApp orders" },
  { to: 7, suffix: " days", label: "Average delivery" },
  { to: 4999, suffix: "", label: "Starting price (₹)" },
];

export function LeadGen() {
  return (
    <section id="demo" className="relative scroll-mt-24 overflow-hidden py-16 sm:py-24" aria-labelledby="lead-title">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-grape-50/60 to-white" aria-hidden />

      <div className="mx-auto max-w-[80rem] px-4 sm:px-6">
        <Reveal>
          <div className="text-center">
            <span className="eyebrow bg-ink text-sunny">For Shop Owners 👋</span>
            <h2 id="lead-title" className="mx-auto mt-5 max-w-3xl font-display text-[clamp(2rem,5vw,3.4rem)] font-extrabold leading-[1.04]">
              This is a demo store. The next one could be{" "}
              <span className="relative whitespace-nowrap text-grape">
                yours
                <Sparkle className="absolute -right-8 -top-4 h-7 w-7 animate-wiggle" color="#FFD93D" />
              </span>
              .
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
              Everything you just scrolled through — the catalogue, the WhatsApp ordering, the offers
              banner — is what we build for stationery and gift shops.
            </p>
            <p className="mt-6 inline-flex flex-wrap items-center justify-center gap-3">
              <span className="rounded-pill bg-sunny px-5 py-2.5 font-display font-extrabold shadow-[0_6px_0_0_#DDA800]">
                Website starting from {site.demoPrice}
              </span>
              <span className="rounded-pill bg-white px-5 py-2.5 font-display font-extrabold shadow-sticker">
                ⭐ Trusted by local businesses
              </span>
            </p>
          </div>
        </Reveal>

        {/* trust numbers */}
        <Reveal delay={0.1}>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TRUST.map((t) => (
              <div key={t.label} className="sticker p-6 text-center">
                <p className="font-display text-4xl font-extrabold text-grape">
                  <Counter to={t.to} suffix={t.suffix} />
                </p>
                <p className="mt-1.5 text-sm font-bold text-ink-faint">{t.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* before / after */}
        <div className="mt-16">
          <Reveal>
            <SectionHeading
              eyebrow="Before & After"
              accent="#8B5CF6"
              title="Without a website vs. with one"
              sub="Same shop. Same stock. Completely different reach."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Reveal from="left">
              <div className="relative h-full rounded-[32px] border-2 border-dashed border-ink/15 bg-white/60 p-7 sm:p-9">
                <span className="rounded-pill bg-ink/10 px-4 py-1.5 font-display text-sm font-extrabold uppercase tracking-widest text-ink-soft">
                  Without a website
                </span>
                <p className="mt-5 font-display text-2xl font-extrabold text-ink-soft">
                  Invisible after closing time
                </p>
                <ul className="mt-5 space-y-3.5">
                  {WITHOUT.map((w) => (
                    <li key={w} className="flex gap-3 text-[15px] leading-relaxed text-ink-soft">
                      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ink/10 text-sm font-extrabold" aria-hidden>
                        ✕
                      </span>
                      {w}
                    </li>
                  ))}
                </ul>
                <p className="mt-7 font-display text-lg font-extrabold text-ink-faint">
                  Walk-ins only. Word of mouth only.
                </p>
              </div>
            </Reveal>

            <Reveal from="right">
              <div
                className="sticker sticker-plate relative h-full p-7 sm:p-9"
                style={{ ["--plate" as string]: "#8B5CF6" }}
              >
                <Star className="pointer-events-none absolute -right-2 -top-2 h-16 w-16 animate-float opacity-90" />
                <span className="rounded-pill bg-mint px-4 py-1.5 font-display text-sm font-extrabold uppercase tracking-widest">
                  With this website
                </span>
                <p className="mt-5 font-display text-2xl font-extrabold">Open 24 × 7, even on Sunday</p>
                <ul className="mt-5 space-y-3.5">
                  {WITH.map((w, i) => (
                    <motion.li
                      key={w}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07, duration: 0.45 }}
                      className="flex gap-3 text-[15px] font-semibold leading-relaxed"
                    >
                      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-mint text-sm font-extrabold" aria-hidden>
                        ✓
                      </span>
                      {w}
                    </motion.li>
                  ))}
                </ul>
                <p className="mt-7 font-display text-lg font-extrabold text-grape">
                  More walk-ins. More WhatsApp orders. More sales.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* what's included */}
        <StaggerGroup className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: "📱", t: "WhatsApp ordering", c: "Every product button opens a pre-filled order chat." },
            { icon: "🔍", t: "Google-ready SEO", c: "Schema, sitemaps and fast loads so parents find you." },
            { icon: "⚡", t: "Loads in a blink", c: "Built on Next.js — quick even on a patchy 4G signal." },
            { icon: "🎨", t: "Your colours, your shop", c: "Photos, prices and branding swapped to match you." },
          ].map((f) => (
            <StaggerItem key={f.t}>
              <div className="sticker sticker-hover h-full p-6">
                <span className="text-3xl" aria-hidden>
                  {f.icon}
                </span>
                <h3 className="mt-3 font-display text-lg font-extrabold">{f.t}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-ink-soft">{f.c}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        {/* final CTA */}
        <Reveal from="scale" className="mt-16">
          <div
            className="relative isolate overflow-hidden rounded-[36px] px-6 py-14 text-center sm:px-12 sm:py-20"
            style={{
              background:
                "radial-gradient(100% 100% at 20% 0%, #A78BFA 0%, transparent 60%), radial-gradient(90% 90% at 85% 15%, #5BC0FF 0%, transparent 55%), linear-gradient(140deg,#8B5CF6,#5BC0FF 60%,#6EE7B7)",
            }}
          >
            <span className="pointer-events-none absolute -left-10 bottom-0 h-52 w-52 rounded-full bg-white/25 blur-2xl" aria-hidden />
            <Star className="pointer-events-none absolute left-8 top-10 h-10 w-10 animate-float" color="#FFD93D" />
            <Star className="pointer-events-none absolute bottom-10 right-10 h-8 w-8 animate-float" color="#fff" style={{ animationDelay: "-2s" }} />

            <h2 className="mx-auto max-w-3xl font-display text-[clamp(2rem,5.4vw,3.6rem)] font-extrabold leading-[1.03] text-white drop-shadow-[0_4px_0_rgba(42,33,69,0.2)]">
              Ready to Make Your Store Every Parent&apos;s First Choice?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg font-semibold text-white/90">
              Send one WhatsApp message. We&apos;ll build a free demo with your shop&apos;s name, your
              products and your number — before you pay a rupee.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ConfettiHost className="w-full sm:w-auto">
                <a
                  href={waDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-solid w-full bg-sunny px-9 py-4 text-lg sm:w-auto"
                  style={{ ["--btn-shade" as string]: "#DDA800" }}
                >
                  Get My Free Demo
                  <span aria-hidden>🚀</span>
                </a>
              </ConfettiHost>
              <a
                href={`tel:${site.phone}`}
                className="btn btn-solid w-full bg-white px-9 py-4 text-lg sm:w-auto"
                style={{ ["--btn-shade" as string]: "rgba(42,33,69,0.28)" }}
              >
                📞 {site.phoneDisplay}
              </a>
            </div>

            <p className="mt-6 text-sm font-bold text-white/80">
              No advance payment · Delivered in 7 days · Free demo first
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
