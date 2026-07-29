"use client";

import * as React from "react";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { nav, site } from "@/lib/site";
import { useCart } from "@/components/CartProvider";
import { CartIcon, SearchIcon } from "@/components/ui/Bits";
import { ProductArt } from "@/components/art/ProductArt";
import { artCraft, backpacks, lunchBoxes, pencilBoxes, schoolEssentials, type Product } from "@/lib/data";

const ALL: Product[] = [...schoolEssentials, ...artCraft, ...backpacks, ...lunchBoxes, ...pencilBoxes];

function Logo() {
  return (
    <a href="#home" className="group flex items-center gap-2.5" aria-label={`${site.name} home`}>
      <span className="relative grid h-11 w-11 place-items-center rounded-2xl bg-sunny shadow-[0_6px_0_0_#DDA800] transition-transform duration-300 group-hover:-rotate-6">
        <svg viewBox="0 0 40 40" className="h-7 w-7" aria-hidden focusable="false">
          <path d="M12 30l-3 4 5-1z" fill="#2A2145" />
          <path d="M14 33l-5 1 1-5 16-19 5 4z" fill="#FF80BF" stroke="#2A2145" strokeWidth="2.4" strokeLinejoin="round" />
          <path d="M26 10l3-4a3 3 0 014 3l-2 5z" fill="#5BC0FF" stroke="#2A2145" strokeWidth="2.4" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="font-display text-2xl font-extrabold leading-none tracking-tight">
        Doodle
        <span className="text-grape">&amp;</span>Dot
        <span className="hidden text-[10px] font-bold uppercase tracking-[0.22em] text-ink-faint min-[420px]:block">
          Stationery &amp; Gifts
        </span>
      </span>
    </a>
  );
}

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [menu, setMenu] = React.useState(false);
  const [search, setSearch] = React.useState(false);
  const { count, open } = useCart();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  React.useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu]);

  return (
    <>
      <a
        href="#shop"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-pill focus:bg-ink focus:px-5 focus:py-3 focus:font-display focus:font-bold focus:text-white"
      >
        Skip to shop
      </a>

      <motion.header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "py-2" : "py-3 sm:py-4"
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 26, delay: 0.15 }}
      >
        <div className="mx-auto max-w-[84rem] px-4 sm:px-6">
          <div
            className={`flex items-center gap-3 rounded-[26px] px-4 py-2.5 transition-all duration-300 sm:px-5 ${
              scrolled
                ? "bg-white/85 shadow-[0_16px_40px_-24px_rgba(42,33,69,0.55)] backdrop-blur-xl"
                : "bg-white/60 backdrop-blur-md"
            }`}
          >
            <Logo />

            <nav className="ml-auto hidden items-center gap-0.5 xl:flex" aria-label="Main">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  className="relative rounded-pill px-3.5 py-2 font-display text-[15px] font-bold text-ink-soft transition hover:bg-sunny-50 hover:text-ink"
                >
                  {n.label}
                </a>
              ))}
            </nav>

            <div className="ml-auto flex items-center gap-2 xl:ml-2">
              <button
                onClick={() => setSearch(true)}
                aria-label="Search products"
                className="grid h-11 w-11 place-items-center rounded-full bg-sunny-50 text-ink transition hover:-translate-y-0.5 hover:bg-sunny"
              >
                <SearchIcon />
              </button>

              <button
                onClick={open}
                aria-label={`Open cart, ${count} items`}
                className="relative grid h-11 w-11 place-items-center rounded-full bg-sky-50 text-ink transition hover:-translate-y-0.5 hover:bg-sky-200"
              >
                <CartIcon className="h-5 w-5" />
                <AnimatePresence>
                  {count > 0 ? (
                    <motion.span
                      key={count}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      transition={{ type: "spring", stiffness: 600, damping: 18 }}
                      className="absolute -right-0.5 -top-0.5 grid h-5 min-w-[1.25rem] place-items-center rounded-full bg-bubble px-1 font-display text-[11px] font-extrabold text-white"
                    >
                      {count}
                    </motion.span>
                  ) : null}
                </AnimatePresence>
              </button>

              <a
                href="#shop"
                className="btn btn-solid hidden bg-grape px-6 py-3 text-[15px] text-white sm:inline-flex"
                style={{ ["--btn-shade" as string]: "#5B29C9" }}
              >
                Shop Now
              </a>

              <button
                onClick={() => setMenu(true)}
                aria-label="Open menu"
                className="grid h-11 w-11 place-items-center rounded-full bg-grape-50 text-grape transition hover:bg-grape-100 xl:hidden"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* mobile menu */}
      <AnimatePresence>
        {menu ? (
          <>
            <motion.div
              className="fixed inset-0 z-[85] bg-ink/45 backdrop-blur-sm xl:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenu(false)}
            />
            <motion.nav
              aria-label="Mobile"
              className="fixed left-0 top-0 z-[86] h-full w-[min(88vw,22rem)] overflow-y-auto bg-cream p-6 shadow-lift xl:hidden"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 34 }}
            >
              <div className="flex items-center justify-between">
                <Logo />
                <button
                  onClick={() => setMenu(false)}
                  aria-label="Close menu"
                  className="grid h-10 w-10 place-items-center rounded-full bg-white shadow-sticker"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </div>

              <ul className="mt-8 space-y-2">
                {nav.map((n, i) => (
                  <motion.li
                    key={n.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * i + 0.1 }}
                  >
                    <a
                      href={n.href}
                      onClick={() => setMenu(false)}
                      className="flex items-center justify-between rounded-3xl bg-white px-5 py-4 font-display text-lg font-extrabold shadow-sticker transition hover:bg-sunny-50"
                    >
                      {n.label}
                      <span aria-hidden className="text-ink-faint">
                        →
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>

              <a
                href="#shop"
                onClick={() => setMenu(false)}
                className="btn btn-solid mt-6 w-full bg-grape text-white"
                style={{ ["--btn-shade" as string]: "#5B29C9" }}
              >
                Shop Now
              </a>
              <p className="mt-6 text-center text-sm font-bold text-ink-faint">{site.phoneDisplay}</p>
            </motion.nav>
          </>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>{search ? <SearchOverlay onClose={() => setSearch(false)} /> : null}</AnimatePresence>
    </>
  );
}

function SearchOverlay({ onClose }: { onClose: () => void }) {
  const [q, setQ] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const results = q.trim().length < 2 ? [] : ALL.filter((p) => p.name.toLowerCase().includes(q.toLowerCase())).slice(0, 6);

  return (
    <>
      <motion.div
        className="fixed inset-0 z-[92] bg-ink/50 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label="Search products"
        className="fixed left-1/2 top-24 z-[93] w-[min(94vw,40rem)] -translate-x-1/2 rounded-[30px] bg-white p-5 shadow-lift"
        initial={{ opacity: 0, y: -24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -16, scale: 0.97 }}
        transition={{ type: "spring", stiffness: 340, damping: 28 }}
      >
        <div className="flex items-center gap-3 rounded-pill bg-sunny-50 px-5 py-3">
          <SearchIcon className="h-5 w-5 shrink-0 text-ink-faint" />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search notebooks, crayons, lunch boxes…"
            aria-label="Search products"
            className="w-full bg-transparent font-display text-lg font-bold outline-none placeholder:font-semibold placeholder:text-ink-faint"
          />
          <button onClick={onClose} aria-label="Close search" className="shrink-0 text-sm font-extrabold text-ink-faint hover:text-ink">
            ESC
          </button>
        </div>

        {q.trim().length < 2 ? (
          <div className="px-2 py-5">
            <p className="text-xs font-extrabold uppercase tracking-widest text-ink-faint">Popular right now</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Notebooks", "Sketch Pens", "School Bag", "Lunch Box", "Geometry Box", "Clay Kit"].map((t) => (
                <button
                  key={t}
                  onClick={() => setQ(t)}
                  className="rounded-pill bg-sky-50 px-4 py-2 font-display text-sm font-bold text-ink transition hover:bg-sky-200"
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        ) : results.length === 0 ? (
          <p className="px-2 py-8 text-center text-ink-soft">
            Nothing matched <strong>“{q}”</strong> — but we probably still have it. Just ask us on WhatsApp!
          </p>
        ) : (
          <ul className="mt-3 max-h-[50vh] space-y-1.5 overflow-y-auto">
            {results.map((p) => (
              <li key={p.id}>
                <a
                  href="#shop"
                  onClick={onClose}
                  className="flex items-center gap-3 rounded-2xl p-2.5 transition hover:bg-sunny-50"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl" style={{ background: `${p.plate}22` }}>
                    <ProductArt kind={p.art} className="h-9 w-9" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate font-display font-extrabold">{p.name}</span>
                    <span className="text-sm font-bold text-grape">₹{p.price}</span>
                  </span>
                  <span aria-hidden className="text-ink-faint">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </motion.div>
    </>
  );
}
