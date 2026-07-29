"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProductArt } from "@/components/art/ProductArt";
import { Stars, WhatsAppIcon } from "@/components/ui/Bits";
import { useCart } from "@/components/CartProvider";
import { waProduct } from "@/lib/site";
import type { Product } from "@/lib/data";

function discount(p: Product) {
  if (!p.mrp || p.mrp <= p.price) return 0;
  return Math.round(((p.mrp - p.price) / p.mrp) * 100);
}

export function ProductCard({
  product,
  className = "",
  compact = false,
}: {
  product: Product;
  className?: string;
  compact?: boolean;
}) {
  const { add } = useCart();
  const [quick, setQuick] = React.useState(false);
  const off = discount(product);

  return (
    <>
      <article
        className={`sticker sticker-hover group relative flex flex-col overflow-hidden ${className}`}
      >
        {/* art tile */}
        <div
          className="relative isolate overflow-hidden rounded-[26px] p-5"
          style={{
            background: `radial-gradient(120% 100% at 30% 0%, ${product.plate}33 0%, ${product.plate}14 55%, transparent 100%)`,
          }}
        >
          <div
            className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-40 blur-2xl"
            style={{ background: product.plate }}
            aria-hidden
          />
          <div className="flex items-start justify-between gap-2">
            {off > 0 ? (
              <span className="rounded-pill bg-ink px-3 py-1 font-display text-xs font-extrabold text-white">
                {off}% OFF
              </span>
            ) : (
              <span />
            )}
            {product.tag ? (
              <span
                className="rounded-pill px-3 py-1 font-display text-xs font-extrabold text-ink"
                style={{ background: product.plate }}
              >
                {product.tag}
              </span>
            ) : null}
          </div>

          <div className="grid place-items-center py-2">
            <ProductArt
              kind={product.art}
              title={product.name}
              className={`${compact ? "h-28 w-28" : "h-36 w-36"} drop-shadow-[0_14px_16px_rgba(42,33,69,0.16)] transition-transform duration-500 group-hover:-translate-y-1.5 group-hover:rotate-[-4deg] group-hover:scale-105`}
            />
          </div>

          {/* quick view */}
          <button
            type="button"
            onClick={() => setQuick(true)}
            className="absolute inset-x-4 bottom-3 translate-y-4 rounded-pill bg-white/90 py-2 font-display text-sm font-extrabold text-ink opacity-0 shadow-sticker backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 focus-visible:translate-y-0 focus-visible:opacity-100"
          >
            👀 Quick View
          </button>
        </div>

        {/* body */}
        <div className="flex flex-1 flex-col p-5 pt-4">
          <div className="flex items-center gap-2">
            <Stars value={product.rating} />
            <span className="text-xs font-bold text-ink-faint">
              {product.rating} ({product.reviews})
            </span>
          </div>

          <h3 className="mt-2 font-display text-lg font-extrabold leading-snug">{product.name}</h3>
          {!compact ? (
            <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-ink-soft">{product.blurb}</p>
          ) : null}

          <div className="mt-3 flex items-baseline gap-2">
            <span className="font-display text-2xl font-extrabold">₹{product.price}</span>
            {product.mrp ? (
              <span className="text-sm font-bold text-ink-faint line-through">₹{product.mrp}</span>
            ) : null}
          </div>

          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              onClick={() => add(product)}
              className="btn btn-solid flex-1 bg-sunny px-4 py-2.5 text-sm"
              style={{ ["--btn-shade" as string]: "#DDA800" }}
            >
              Add to Cart
            </button>
            <a
              href={waProduct(product.name, product.price)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Order ${product.name} on WhatsApp`}
              className="btn btn-solid bg-[#25D366] px-4 py-2.5 text-sm text-white"
              style={{ ["--btn-shade" as string]: "#0f9b4c" }}
            >
              <WhatsAppIcon className="h-4 w-4" />
              <span className="sm:hidden">Order on WhatsApp</span>
            </a>
          </div>
        </div>
      </article>

      <AnimatePresence>
        {quick ? (
          <QuickView product={product} off={off} onClose={() => setQuick(false)} onAdd={() => add(product)} />
        ) : null}
      </AnimatePresence>
    </>
  );
}

function QuickView({
  product,
  off,
  onClose,
  onAdd,
}: {
  product: Product;
  off: number;
  onClose: () => void;
  onAdd: () => void;
}) {
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <>
      <motion.div
        className="fixed inset-0 z-[95] bg-ink/50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={product.name}
        className="fixed left-1/2 top-1/2 z-[96] w-[min(94vw,54rem)] max-h-[90vh] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-[34px] bg-white p-6 shadow-lift sm:p-8"
        initial={{ opacity: 0, scale: 0.92, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 12 }}
        transition={{ type: "spring", stiffness: 320, damping: 28 }}
      >
        <button
          onClick={onClose}
          aria-label="Close quick view"
          className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-sunny-50 transition hover:rotate-90 hover:bg-bubble-100"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <div className="grid gap-8 sm:grid-cols-2">
          <div
            className="grid place-items-center rounded-[26px] p-8"
            style={{ background: `linear-gradient(160deg, ${product.plate}2e, ${product.plate}0d)` }}
          >
            <ProductArt kind={product.art} title={product.name} className="h-52 w-52 animate-float drop-shadow-[0_18px_20px_rgba(42,33,69,0.18)]" />
          </div>

          <div className="flex flex-col">
            {product.tag ? (
              <span className="eyebrow self-start" style={{ background: product.plate }}>
                {product.tag}
              </span>
            ) : null}
            <h3 className="mt-3 font-display text-3xl font-extrabold leading-tight">{product.name}</h3>
            <div className="mt-2 flex items-center gap-2">
              <Stars value={product.rating} size={16} />
              <span className="text-sm font-bold text-ink-faint">
                {product.rating} · {product.reviews} parent reviews
              </span>
            </div>
            <p className="mt-4 leading-relaxed text-ink-soft">{product.blurb}</p>

            <ul className="mt-4 space-y-2 text-sm font-semibold text-ink-soft">
              {["Original branded stock", "Safe & non-toxic materials", "Same-day city delivery", "Easy 7-day exchange"].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-mint text-[11px] text-ink" aria-hidden>
                    ✓
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex items-baseline gap-3">
              <span className="font-display text-4xl font-extrabold">₹{product.price}</span>
              {product.mrp ? (
                <>
                  <span className="text-lg font-bold text-ink-faint line-through">₹{product.mrp}</span>
                  {off > 0 ? (
                    <span className="rounded-pill bg-mint px-3 py-1 font-display text-sm font-extrabold">
                      Save ₹{product.mrp - product.price}
                    </span>
                  ) : null}
                </>
              ) : null}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => {
                  onAdd();
                  onClose();
                }}
                className="btn btn-solid flex-1 bg-sunny"
                style={{ ["--btn-shade" as string]: "#DDA800" }}
              >
                Add to Cart
              </button>
              <a
                href={waProduct(product.name, product.price)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-solid flex-1 bg-[#25D366] text-white"
                style={{ ["--btn-shade" as string]: "#0f9b4c" }}
              >
                <WhatsAppIcon />
                WhatsApp Order
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
