"use client";

import * as React from "react";
import { site, waGeneral, waDemo } from "@/lib/site";
import { WhatsAppIcon } from "@/components/ui/Bits";
import { Squiggle } from "@/components/art/Deco";

const QUICK = [
  { label: "Home", href: "#home" },
  { label: "Shop", href: "#shop" },
  { label: "Offers", href: "#offers" },
  { label: "Best Sellers", href: "#best" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const CATS = [
  "Notebooks & Books",
  "Pens & Pencils",
  "Art & Craft",
  "School Bags",
  "Lunch Boxes & Bottles",
  "Pencil Boxes",
  "Gift Items",
];

const SOCIAL = [
  { label: "Instagram", icon: "📸", href: "#" },
  { label: "Facebook", icon: "👍", href: "#" },
  { label: "YouTube", icon: "▶️", href: "#" },
  { label: "WhatsApp", icon: "💬", href: waGeneral },
];

export function Footer() {
  const [subscribed, setSubscribed] = React.useState(false);

  return (
    <footer className="relative mt-10 overflow-hidden bg-ink pb-32 pt-16 text-white sm:pb-16">
      {/* scalloped top edge */}
      <div
        className="absolute inset-x-0 top-0 h-6"
        aria-hidden
        style={{
          backgroundImage: "radial-gradient(circle at 24px 0, #FFFDF8 23px, transparent 24px)",
          backgroundSize: "48px 48px",
          backgroundRepeat: "repeat-x",
        }}
      />

      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-grape/25 blur-[90px]" aria-hidden />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-sky/20 blur-[90px]" aria-hidden />

      <div className="relative mx-auto max-w-[80rem] px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.4fr,1fr,1fr,1.3fr]">
          {/* brand */}
          <div>
            <p className="font-display text-3xl font-extrabold leading-none">
              Doodle<span className="text-sunny">&amp;</span>Dot
            </p>
            <Squiggle className="mt-3 h-4 w-28" color="#FFD93D" />
            <p className="mt-4 max-w-xs leading-relaxed text-white/65">
              A neighbourhood stationery shop that grew up with the kids it serves. Colour, quality and
              a WhatsApp reply that actually comes back.
            </p>
            <div className="mt-5 flex gap-2.5">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 text-lg transition hover:-translate-y-1 hover:bg-sunny hover:text-ink"
                >
                  <span aria-hidden>{s.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Quick links">
            <h3 className="font-display text-lg font-extrabold text-sunny">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {QUICK.map((q) => (
                <li key={q.label}>
                  <a href={q.href} className="font-semibold text-white/65 transition hover:pl-1.5 hover:text-white">
                    {q.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-display text-lg font-extrabold text-mint">Categories</h3>
            <ul className="mt-4 space-y-2.5">
              {CATS.map((c) => (
                <li key={c}>
                  <a href="#shop" className="font-semibold text-white/65 transition hover:pl-1.5 hover:text-white">
                    {c}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-extrabold text-bubble">Visit Us</h3>
            <address className="mt-4 space-y-2 not-italic leading-relaxed text-white/65">
              <p>{site.addressLine}</p>
              <p>
                {site.city}, {site.state} {site.postal}
              </p>
              <p>
                <a href={`tel:${site.phone}`} className="font-bold text-white hover:text-sunny">
                  {site.phoneDisplay}
                </a>
              </p>
              <p>
                <a href={`mailto:${site.email}`} className="font-bold text-white hover:text-sunny">
                  {site.email}
                </a>
              </p>
              <p className="text-sm">{site.hours}</p>
            </address>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubscribed(true);
              }}
              className="mt-6"
            >
              <label htmlFor="newsletter" className="block font-display text-sm font-extrabold text-white">
                Get sale days &amp; craft ideas
              </label>
              {subscribed ? (
                <p className="mt-2 rounded-2xl bg-mint/20 px-4 py-3 font-bold text-mint">
                  🎉 You&apos;re on the list! (demo only)
                </p>
              ) : (
                <div className="mt-2 flex gap-2">
                  <input
                    id="newsletter"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="min-w-0 flex-1 rounded-pill bg-white/10 px-4 py-3 font-semibold text-white outline-none ring-white/20 transition placeholder:text-white/40 focus:bg-white/15 focus:ring-2"
                  />
                  <button
                    type="submit"
                    className="btn btn-solid shrink-0 bg-sunny px-5 py-3 text-sm"
                    style={{ ["--btn-shade" as string]: "#DDA800" }}
                  >
                    Join
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* demo strip */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-[26px] bg-white/[0.06] px-6 py-5 sm:flex-row">
          <p className="text-center font-semibold text-white/70 sm:text-left">
            Like this website?{" "}
            <span className="font-display font-extrabold text-sunny">
              We build one just like it for your store from {site.demoPrice}.
            </span>
          </p>
          <a
            href={waDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-solid shrink-0 bg-[#25D366] px-6 py-3 text-sm text-white"
            style={{ ["--btn-shade" as string]: "#0f9b4c" }}
          >
            <WhatsAppIcon className="h-4 w-4" />
            Get My Free Demo
          </a>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-7 text-sm text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. A demo store built to show what your shop could look like.</p>
          <p className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#contact" className="hover:text-white">Support</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
