"use client";

import * as React from "react";
import { Arrow } from "@/components/ui/Bits";

/** Horizontal snap slider with round arrow controls and drag-to-scroll on desktop. */
export function Rail({
  children,
  label,
  className = "",
}: {
  children: React.ReactNode;
  label: string;
  className?: string;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = React.useState(true);
  const [atEnd, setAtEnd] = React.useState(false);

  const update = React.useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setAtStart(el.scrollLeft < 8);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 8);
  }, []);

  React.useEffect(() => {
    update();
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [update]);

  const scrollBy = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.85, 720), behavior: "smooth" });
  };

  return (
    <div className={`relative ${className}`}>
      <div
        ref={ref}
        onScroll={update}
        className="rail no-bar -mx-4 px-4 sm:-mx-6 sm:px-6"
        role="region"
        aria-label={label}
        tabIndex={0}
      >
        {children}
      </div>

      <div className="mt-2 flex items-center justify-center gap-3 sm:justify-end">
        <RailBtn onClick={() => scrollBy(-1)} disabled={atStart} label={`Scroll ${label} left`} dir="left" />
        <RailBtn onClick={() => scrollBy(1)} disabled={atEnd} label={`Scroll ${label} right`} dir="right" />
      </div>
    </div>
  );
}

function RailBtn({
  onClick,
  disabled,
  label,
  dir,
}: {
  onClick: () => void;
  disabled: boolean;
  label: string;
  dir: "left" | "right";
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className="grid h-12 w-12 place-items-center rounded-full bg-white text-ink shadow-sticker transition hover:-translate-y-0.5 hover:bg-sunny disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:translate-y-0 disabled:hover:bg-white"
    >
      <Arrow dir={dir} />
    </button>
  );
}
