"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Product } from "@/lib/data";
import { ProductArt } from "@/components/art/ProductArt";
import { waLink, site } from "@/lib/site";
import { WhatsAppIcon } from "@/components/ui/Bits";

type Line = { id: string; name: string; price: number; art: Product["art"]; qty: number };

type CartCtx = {
  lines: Line[];
  count: number;
  total: number;
  add: (p: Product) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  open: () => void;
};

const Ctx = React.createContext<CartCtx | null>(null);

export function useCart() {
  const c = React.useContext(Ctx);
  if (!c) throw new Error("useCart must be used inside <CartProvider>");
  return c;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = React.useState<Line[]>([]);
  const [isOpen, setOpen] = React.useState(false);
  const [toast, setToast] = React.useState<string | null>(null);
  const timer = React.useRef<number | undefined>(undefined);

  const add = React.useCallback((p: Product) => {
    const key = p.name;
    setLines((prev) => {
      const found = prev.find((l) => l.id === key);
      if (found) return prev.map((l) => (l.id === key ? { ...l, qty: l.qty + 1 } : l));
      return [...prev, { id: key, name: p.name, price: p.price, art: p.art, qty: 1 }];
    });
    setToast(`${p.name} added to cart`);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setToast(null), 2600);
  }, []);

  const remove = React.useCallback((id: string) => {
    setLines((prev) => prev.filter((l) => l.id !== id));
  }, []);

  const setQty = React.useCallback((id: string, qty: number) => {
    setLines((prev) =>
      qty <= 0 ? prev.filter((l) => l.id !== id) : prev.map((l) => (l.id === id ? { ...l, qty } : l)),
    );
  }, []);

  const count = lines.reduce((n, l) => n + l.qty, 0);
  const total = lines.reduce((n, l) => n + l.qty * l.price, 0);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const value = React.useMemo(
    () => ({ lines, count, total, add, remove, setQty, open: () => setOpen(true) }),
    [lines, count, total, add, remove, setQty],
  );

  const waCart = waLink(
    `Hi ${site.name}! 👋 I'd like to order:\n\n${lines
      .map((l) => `• ${l.name} × ${l.qty} — ₹${l.price * l.qty}`)
      .join("\n")}\n\nTotal: ₹${total}`,
  );

  return (
    <Ctx.Provider value={value}>
      {children}

      {/* toast */}
      <AnimatePresence>
        {toast ? (
          <motion.div
            key={toast}
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, y: 24, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 420, damping: 30 }}
            className="fixed bottom-24 left-1/2 z-[70] w-[min(92vw,26rem)] -translate-x-1/2 rounded-3xl bg-ink px-5 py-4 text-center font-display text-sm font-bold text-white shadow-lift sm:bottom-8"
          >
            <span className="mr-2" aria-hidden>
              🎉
            </span>
            {toast}
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* drawer */}
      <AnimatePresence>
        {isOpen ? (
          <>
            <motion.div
              className="fixed inset-0 z-[80] bg-ink/45 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              role="dialog"
              aria-modal="true"
              aria-label="Your cart"
              className="fixed right-0 top-0 z-[90] flex h-full w-[min(92vw,26rem)] flex-col bg-cream shadow-lift"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 34 }}
            >
              <header className="flex items-center justify-between border-b-2 border-dashed border-sunny-200 px-6 py-5">
                <h2 className="font-display text-2xl font-extrabold">Your Cart</h2>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close cart"
                  className="grid h-10 w-10 place-items-center rounded-full bg-white shadow-sticker transition hover:rotate-90 hover:bg-bubble-100"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </header>

              <div className="flex-1 overflow-y-auto px-6 py-5">
                {lines.length === 0 ? (
                  <div className="grid place-items-center gap-4 pt-16 text-center">
                    <div className="grid h-28 w-28 place-items-center rounded-full bg-sunny-100 text-5xl">
                      🎒
                    </div>
                    <p className="font-display text-xl font-extrabold">Nothing here yet!</p>
                    <p className="text-sm text-ink-soft">
                      Add a few notebooks, crayons or a lunch box and they&apos;ll show up right here.
                    </p>
                  </div>
                ) : (
                  <ul className="space-y-3">
                    {lines.map((l) => (
                      <li key={l.id} className="flex items-center gap-3 rounded-3xl bg-white p-3 shadow-sticker">
                        <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-sunny-50">
                          <ProductArt kind={l.art} className="h-12 w-12" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="truncate font-display text-sm font-extrabold">{l.name}</p>
                          <p className="text-sm font-bold text-grape">₹{l.price * l.qty}</p>
                          <div className="mt-1.5 inline-flex items-center gap-2 rounded-pill bg-sunny-50 px-1.5 py-0.5">
                            <button
                              onClick={() => setQty(l.id, l.qty - 1)}
                              aria-label={`Reduce quantity of ${l.name}`}
                              className="grid h-6 w-6 place-items-center rounded-full bg-white font-bold shadow-sm"
                            >
                              −
                            </button>
                            <span className="w-5 text-center text-sm font-extrabold">{l.qty}</span>
                            <button
                              onClick={() => setQty(l.id, l.qty + 1)}
                              aria-label={`Increase quantity of ${l.name}`}
                              className="grid h-6 w-6 place-items-center rounded-full bg-white font-bold shadow-sm"
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <button
                          onClick={() => remove(l.id)}
                          aria-label={`Remove ${l.name}`}
                          className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-ink-faint transition hover:bg-bubble-100 hover:text-bubble-500"
                        >
                          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
                            <path d="M6 6l12 12M18 6L6 18" />
                          </svg>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <footer className="border-t-2 border-dashed border-sunny-200 px-6 py-5">
                <div className="mb-4 flex items-baseline justify-between font-display">
                  <span className="text-lg font-bold text-ink-soft">Total</span>
                  <span className="text-3xl font-extrabold">₹{total.toLocaleString("en-IN")}</span>
                </div>
                <a
                  href={waCart}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-disabled={lines.length === 0}
                  onClick={(e) => lines.length === 0 && e.preventDefault()}
                  className={`btn btn-solid w-full bg-[#25D366] text-white ${lines.length === 0 ? "pointer-events-none opacity-40" : ""}`}
                  style={{ ["--btn-shade" as string]: "#0f9b4c" }}
                >
                  <WhatsAppIcon />
                  Send order on WhatsApp
                </a>
                <p className="mt-3 text-center text-xs text-ink-faint">
                  Demo store — checkout opens a pre-filled WhatsApp message.
                </p>
              </footer>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </Ctx.Provider>
  );
}
