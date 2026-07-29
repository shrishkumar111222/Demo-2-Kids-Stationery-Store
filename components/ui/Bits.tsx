"use client";

import * as React from "react";
import { motion, useInView, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { Squiggle } from "@/components/art/Deco";

/* ------------------------------ Section shell ------------------------------ */

export function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "center",
  accent = "#8B5CF6",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  sub?: string;
  align?: "center" | "left";
  accent?: string;
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <span className="eyebrow" style={{ color: accent }}>
          <Dot color={accent} />
          {eyebrow}
        </span>
      ) : null}
      <h2 className="mt-4 font-display text-[clamp(2rem,5vw,3.4rem)] font-extrabold leading-[1.05] tracking-tight">
        {title}
      </h2>
      <Squiggle
        color={accent}
        className={`mt-3 h-4 w-32 ${align === "center" ? "mx-auto" : ""}`}
      />
      {sub ? <p className="mt-4 text-lg leading-relaxed text-ink-soft">{sub}</p> : null}
    </div>
  );
}

function Dot({ color }: { color: string }) {
  return (
    <span
      className="inline-block h-2.5 w-2.5 rounded-full"
      style={{ background: color }}
      aria-hidden
    />
  );
}

/* --------------------------------- Rating --------------------------------- */

export function Stars({ value, size = 14 }: { value: number; size?: number }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`${value} out of 5 stars`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" aria-hidden focusable="false">
          <path
            d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.3 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8z"
            fill={i + 1 <= Math.round(value) ? "#FFD93D" : "#EDE7DA"}
            stroke={i + 1 <= Math.round(value) ? "#F0B90B" : "#E2DACA"}
            strokeWidth="1"
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </span>
  );
}

/* ------------------------------ Animated count ----------------------------- */

export function Counter({
  to,
  suffix = "",
  duration = 1.6,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: duration * 1000, bounce: 0 });
  const [display, setDisplay] = React.useState(0);

  React.useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(to);
      return;
    }
    mv.set(to);
  }, [inView, to, mv, reduce]);

  React.useEffect(() => spring.on("change", (v) => setDisplay(Math.round(v))), [spring]);

  return (
    <span ref={ref}>
      {display.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

/* ---------------------------- Confetti on hover ---------------------------- */

const CONFETTI_COLORS = ["#FFD93D", "#5BC0FF", "#8B5CF6", "#FF80BF", "#6EE7B7"];

export function ConfettiBurst({ fire }: { fire: number }) {
  const reduce = useReducedMotion();
  if (reduce || fire === 0) return null;
  return (
    <span className="pointer-events-none absolute inset-0 overflow-visible" aria-hidden>
      {Array.from({ length: 14 }).map((_, i) => {
        const angle = (i / 14) * Math.PI * 2;
        return (
          <motion.span
            key={`${fire}-${i}`}
            className="absolute left-1/2 top-1/2 block h-2 w-2 rounded-[2px]"
            style={{ background: CONFETTI_COLORS[i % CONFETTI_COLORS.length] }}
            initial={{ x: 0, y: 0, opacity: 1, scale: 1, rotate: 0 }}
            animate={{
              x: Math.cos(angle) * (50 + Math.random() * 55),
              y: Math.sin(angle) * (36 + Math.random() * 46) - 12,
              opacity: 0,
              scale: 0.5,
              rotate: Math.random() * 420 - 210,
            }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          />
        );
      })}
    </span>
  );
}

/** Button-shaped wrapper that pops confetti on hover / focus. */
export function ConfettiHost({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [fire, setFire] = React.useState(0);
  const cooling = React.useRef(false);

  const pop = () => {
    if (cooling.current) return;
    cooling.current = true;
    setFire((f) => f + 1);
    window.setTimeout(() => (cooling.current = false), 900);
  };

  return (
    <span
      className={`relative inline-flex ${className}`}
      onMouseEnter={pop}
      onFocus={pop}
      onClick={pop}
    >
      <ConfettiBurst fire={fire} />
      {children}
    </span>
  );
}

/* --------------------------------- Icons ---------------------------------- */

export function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden focusable="false">
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.48-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z" />
      <path d="M12.04 2C6.6 2 2.17 6.43 2.17 11.87c0 1.74.46 3.44 1.32 4.94L2 22l5.34-1.4a9.83 9.83 0 004.7 1.2h.01c5.43 0 9.86-4.43 9.86-9.87S17.48 2 12.04 2zm0 17.96h-.01a8.2 8.2 0 01-4.17-1.14l-.3-.18-3.1.81.83-3.02-.2-.31a8.15 8.15 0 01-1.25-4.35c0-4.52 3.68-8.2 8.2-8.2 2.2 0 4.26.86 5.81 2.41a8.15 8.15 0 012.4 5.8c0 4.52-3.68 8.19-8.2 8.19z" />
    </svg>
  );
}

export function CartIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden focusable="false">
      <path d="M4 5h2l2.2 10.2a2 2 0 002 1.6h6.8a2 2 0 002-1.55L20.5 8H7" />
      <circle cx="10" cy="20" r="1.4" fill="currentColor" />
      <circle cx="18" cy="20" r="1.4" fill="currentColor" />
    </svg>
  );
}

export function SearchIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden focusable="false">
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.6-3.6" />
    </svg>
  );
}

export function Arrow({ className = "h-5 w-5", dir = "right" }: { className?: string; dir?: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={dir === "left" ? { transform: "rotate(180deg)" } : undefined}
      aria-hidden
      focusable="false"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
