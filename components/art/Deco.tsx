import * as React from "react";

type P = { className?: string; style?: React.CSSProperties };

export function Cloud({ className = "", style }: P) {
  return (
    <svg viewBox="0 0 220 110" className={className} style={style} aria-hidden focusable="false">
      <path
        d="M46 96C22 96 8 82 8 64s16-32 36-30C50 16 68 4 90 4c24 0 42 14 48 32 4-2 8-3 13-3 18 0 32 14 32 31s-14 32-32 32z"
        fill="#fff"
      />
      <path
        d="M46 96C22 96 8 82 8 64s16-32 36-30C50 16 68 4 90 4c24 0 42 14 48 32 4-2 8-3 13-3 18 0 32 14 32 31s-14 32-32 32z"
        fill="none"
        stroke="#DCE9F7"
        strokeWidth="3"
      />
    </svg>
  );
}

export function Star({ className = "", color = "#FFD93D", style }: P & { color?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} style={style} aria-hidden focusable="false">
      <path
        d="M50 4l12 28 30 3-22 21 6 30-26-15-26 15 6-30L8 35l30-3z"
        fill={color}
        stroke="#2A2145"
        strokeWidth="5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Sparkle({ className = "", color = "#8B5CF6", style }: P & { color?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} style={style} aria-hidden focusable="false">
      <path d="M50 2c4 30 14 44 46 48-32 4-42 18-46 48-4-30-14-44-46-48 32-4 42-18 46-48z" fill={color} />
    </svg>
  );
}

export function Rainbow({ className = "", style }: P) {
  const bands = ["#FF80BF", "#FFD93D", "#6EE7B7", "#5BC0FF"];
  return (
    <svg viewBox="0 0 240 130" className={className} style={style} aria-hidden focusable="false">
      {bands.map((c, i) => (
        <path
          key={c}
          d={`M${20 + i * 18} 126a${100 - i * 18} ${100 - i * 18} 0 01${200 - i * 36} 0`}
          fill="none"
          stroke={c}
          strokeWidth="17"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

export function Squiggle({ className = "", color = "#8B5CF6", style }: P & { color?: string }) {
  return (
    <svg viewBox="0 0 160 30" className={className} style={style} aria-hidden focusable="false">
      <path
        d="M4 20c14-20 28 20 42 0s28 20 42 0 28 20 42 0"
        fill="none"
        stroke={color}
        strokeWidth="7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PaperPlane({ className = "", color = "#fff", style }: P & { color?: string }) {
  return (
    <svg viewBox="0 0 120 90" className={className} style={style} aria-hidden focusable="false">
      <path d="M4 44L116 6l-34 78-20-30z" fill={color} stroke="#2A2145" strokeWidth="5" strokeLinejoin="round" />
      <path d="M62 54L116 6" fill="none" stroke="#2A2145" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

export function Blob({ className = "", color = "#FFD93D", style }: P & { color?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} style={style} aria-hidden focusable="false">
      <path
        fill={color}
        d="M45.6 -60.3C58.5 -50.4 67.6 -35.5 71.6 -19.3C75.6 -3.1 74.4 14.4 66.9 28.4C59.4 42.4 45.6 52.9 30.6 60.2C15.6 67.5 -0.7 71.6 -17.9 69.2C-35.1 66.8 -53.2 57.9 -63.7 43.3C-74.2 28.7 -77.1 8.4 -73.3 -9.9C-69.5 -28.2 -59 -44.5 -45 -55C-31 -65.5 -13.5 -70.2 2.6 -73.3C18.7 -76.4 32.7 -70.2 45.6 -60.3Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

export function Balloon({ className = "", color = "#FF80BF", style }: P & { color?: string }) {
  return (
    <svg viewBox="0 0 80 130" className={className} style={style} aria-hidden focusable="false">
      <ellipse cx="40" cy="44" rx="34" ry="42" fill={color} stroke="#2A2145" strokeWidth="4" />
      <path d="M40 86l-7 12h14z" fill={color} stroke="#2A2145" strokeWidth="4" strokeLinejoin="round" />
      <path d="M40 98c10 10-10 18 0 30" fill="none" stroke="#2A2145" strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="28" cy="30" rx="8" ry="12" fill="#fff" opacity=".5" transform="rotate(-20 28 30)" />
    </svg>
  );
}
