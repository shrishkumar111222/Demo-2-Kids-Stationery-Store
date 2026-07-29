"use client";

import * as React from "react";
import { SectionHeading, WhatsAppIcon } from "@/components/ui/Bits";
import { Reveal } from "@/components/ui/Reveal";
import { site, waLink } from "@/lib/site";

const FIELDS = [
  { id: "name", label: "Your name", type: "text", placeholder: "Ritu Sharma", required: true },
  { id: "phone", label: "Phone number", type: "tel", placeholder: "98765 43210", required: true },
  { id: "email", label: "Email (optional)", type: "email", placeholder: "you@email.com", required: false },
] as const;

/**
 * Google's embed is blocked in some hosting contexts (strict CSP, sandboxed
 * previews) and paints a dead grey rectangle instead. We can't detect that from
 * the iframe itself — a blocked frame still fires `load` for its error page — so
 * probe whether Google is reachable at all first, and only mount the embed if it
 * is. Otherwise the address card stands in, which is still useful to a parent.
 */
function MapPanel() {
  const [reachable, setReachable] = React.useState<boolean | null>(null);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${site.mapQuery}`;

  React.useEffect(() => {
    const img = new Image();
    const timer = window.setTimeout(() => setReachable(false), 3500);
    const settle = (ok: boolean) => () => {
      window.clearTimeout(timer);
      setReachable(ok);
    };
    img.onload = settle(true);
    img.onerror = settle(false);
    img.src = `https://maps.google.com/favicon.ico?_=${Date.now()}`;
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="sticker relative h-64 overflow-hidden p-0 sm:h-72">
      <div className="absolute inset-0 grid place-items-center bg-sky-50 p-6 text-center">
        <div
          className="absolute inset-0 opacity-[0.55]"
          aria-hidden
          style={{
            backgroundImage:
              "linear-gradient(rgba(91,192,255,.25) 2px, transparent 2px), linear-gradient(90deg, rgba(91,192,255,.25) 2px, transparent 2px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div className="relative">
          <span className="text-4xl" aria-hidden>
            📍
          </span>
          <p className="mt-2 font-display text-lg font-extrabold">{site.name}</p>
          <p className="mt-1 text-sm font-semibold text-ink-soft">
            {site.addressLine}, {site.city}
          </p>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-solid mt-4 bg-sky px-6 py-2.5 text-sm"
            style={{ ["--btn-shade" as string]: "#0B87D4" }}
          >
            Open in Google Maps
          </a>
        </div>
      </div>

      {reachable ? (
        <iframe
          title={`Map to ${site.name}`}
          src={`https://maps.google.com/maps?q=${site.mapQuery}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
          className="absolute inset-0 h-full w-full border-0 animate-[pop_.5s_ease-out]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : null}
    </div>
  );
}

export function Contact() {
  const [values, setValues] = React.useState({ name: "", phone: "", email: "", message: "" });

  const set = (k: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));

  const composed = waLink(
    `Hi ${site.name}! 👋\n\nName: ${values.name || "—"}\nPhone: ${values.phone || "—"}${
      values.email ? `\nEmail: ${values.email}` : ""
    }\n\n${values.message || "I'd like to know more about your products."}`,
  );

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(composed, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="scroll-mt-24 py-14 sm:py-20" aria-labelledby="contact-title">
      <div className="mx-auto max-w-[80rem] px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            accent="#0FA97A"
            title="Come say hi — or just send a message"
            sub="Tell us what you need and we'll reply on WhatsApp, usually within a few minutes during shop hours."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
          {/* form */}
          <Reveal from="left">
            <form
              onSubmit={onSubmit}
              className="sticker sticker-plate h-full p-7 sm:p-9"
              style={{ ["--plate" as string]: "#6EE7B755" }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                {FIELDS.map((f) => (
                  <label key={f.id} className={`block ${f.id === "email" ? "sm:col-span-2" : ""}`}>
                    <span className="mb-1.5 block font-display text-sm font-extrabold">{f.label}</span>
                    <input
                      type={f.type}
                      name={f.id}
                      required={f.required}
                      placeholder={f.placeholder}
                      value={values[f.id]}
                      onChange={set(f.id)}
                      className="w-full rounded-2xl border-2 border-transparent bg-sunny-50 px-4 py-3 font-semibold outline-none transition placeholder:text-ink-faint/70 focus:border-grape focus:bg-white"
                    />
                  </label>
                ))}

                <label className="block sm:col-span-2">
                  <span className="mb-1.5 block font-display text-sm font-extrabold">Message</span>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="I need the Class 4 list for DAV — notebooks, geometry box and a water bottle."
                    value={values.message}
                    onChange={set("message")}
                    className="w-full resize-none rounded-2xl border-2 border-transparent bg-sunny-50 px-4 py-3 font-semibold outline-none transition placeholder:text-ink-faint/70 focus:border-grape focus:bg-white"
                  />
                </label>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="submit"
                  className="btn btn-solid flex-1 bg-[#25D366] text-white"
                  style={{ ["--btn-shade" as string]: "#0f9b4c" }}
                >
                  <WhatsAppIcon />
                  Send on WhatsApp
                </button>
                <a
                  href={`tel:${site.phone}`}
                  className="btn btn-solid flex-1 bg-sunny"
                  style={{ ["--btn-shade" as string]: "#DDA800" }}
                >
                  📞 Call Now
                </a>
              </div>
              <p className="mt-3 text-center text-xs font-semibold text-ink-faint">
                Demo form — your details open a pre-filled WhatsApp chat. Nothing is stored.
              </p>
            </form>
          </Reveal>

          {/* details + map */}
          <Reveal from="right" className="space-y-5">
            <div className="sticker p-7">
              <h3 className="font-display text-xl font-extrabold">Visit the shop</h3>
              <ul className="mt-4 space-y-4 text-[15px]">
                <li className="flex gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-bubble-100 text-lg" aria-hidden>
                    📍
                  </span>
                  <span className="font-semibold leading-relaxed text-ink-soft">
                    {site.addressLine},<br />
                    {site.city}, {site.state} {site.postal}
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-sky-100 text-lg" aria-hidden>
                    📞
                  </span>
                  <a href={`tel:${site.phone}`} className="font-bold hover:text-grape">
                    {site.phoneDisplay}
                  </a>
                </li>
                <li className="flex gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-sunny-100 text-lg" aria-hidden>
                    ✉️
                  </span>
                  <a href={`mailto:${site.email}`} className="font-bold hover:text-grape">
                    {site.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-mint-100 text-lg" aria-hidden>
                    🕘
                  </span>
                  <span className="font-semibold leading-relaxed text-ink-soft">{site.hours}</span>
                </li>
              </ul>
            </div>

            <MapPanel />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
