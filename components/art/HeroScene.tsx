import * as React from "react";

const INK = "#2A2145";
const S = {
  stroke: INK,
  strokeWidth: 6,
  strokeLinejoin: "round" as const,
  strokeLinecap: "round" as const,
};
const line = { ...S, fill: "none" };

/** Two happy kids, a rainbow, and a whole lot of stationery. */
export function HeroScene({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 560 520"
      className={className}
      role="img"
      aria-label="Illustration of two smiling children with backpacks surrounded by books, pencils, crayons and a rainbow"
      focusable="false"
    >
      <defs>
        <linearGradient id="hs-ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFE983" />
          <stop offset="100%" stopColor="#FFD93D" />
        </linearGradient>
        <radialGradient id="hs-sun" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#FFF3C4" />
          <stop offset="100%" stopColor="#FFD93D" />
        </radialGradient>
      </defs>

      {/* sun + rainbow backdrop */}
      <circle cx="452" cy="92" r="52" fill="url(#hs-sun)" />
      <g opacity=".95">
        {["#FF80BF", "#FFD93D", "#6EE7B7", "#5BC0FF"].map((c, i) => (
          <path
            key={c}
            d={`M${96 + i * 20} 330a${170 - i * 20} ${170 - i * 20} 0 01${340 - i * 40} 0`}
            fill="none"
            stroke={c}
            strokeWidth="19"
            strokeLinecap="round"
            opacity=".85"
          />
        ))}
      </g>

      {/* ground blob */}
      <ellipse cx="280" cy="440" rx="240" ry="58" fill="url(#hs-ground)" />
      <ellipse cx="280" cy="440" rx="240" ry="58" fill="none" stroke={INK} strokeWidth="6" />

      {/* ---------- open book on the ground ---------- */}
      <g transform="translate(56 372)">
        <path d="M0 44C22 22 56 22 74 40 92 22 126 22 148 44L74 60z" fill="#fff" {...S} />
        <path d="M74 40v20" {...line} />
        <path d="M18 40h34M96 40h34" {...line} strokeWidth={4} stroke="#AEE2FF" />
      </g>

      {/* ---------- kid 1 (left, purple tee) ---------- */}
      <g transform="translate(150 138)">
        {/* backpack */}
        <rect x="-42" y="86" width="60" height="86" rx="24" fill="#6EE7B7" {...S} />
        {/* legs */}
        <path d="M42 232v46M84 232v46" {...line} strokeWidth={30} stroke={INK} />
        <path d="M42 232v46M84 232v46" {...line} strokeWidth={22} stroke="#8B5CF6" />
        <path d="M30 282h26M72 282h26" {...line} strokeWidth={20} stroke="#fff" />
        {/* body */}
        <path d="M22 108h84a26 26 0 0126 26v76a26 26 0 01-26 26H22a26 26 0 01-26-26v-76a26 26 0 0126-26z" fill="#8B5CF6" {...S} />
        <path d="M40 152c10 14 34 14 44 0" {...line} strokeWidth={7} stroke="#fff" />
        {/* arms (ink outline + skin fill) */}
        <path d="M2 146l-36 44" {...line} strokeWidth={30} stroke={INK} />
        <path d="M126 142l40 32" {...line} strokeWidth={30} stroke={INK} />
        <path d="M2 146l-36 44" {...line} strokeWidth={22} stroke="#F0B98A" />
        <path d="M126 142l40 32" {...line} strokeWidth={22} stroke="#F0B98A" />
        {/* head */}
        <circle cx="64" cy="52" r="56" fill="#F0B98A" {...S} />
        {/* hair */}
        <path d="M8 46C8 8 40-8 64-8s56 16 56 54c-12-6-16-22-22-28-14 14-46 20-66 8-6 6-8 14-24 20z" fill="#3B2B22" {...S} />
        <circle cx="46" cy="56" r="6.5" fill={INK} />
        <circle cx="84" cy="56" r="6.5" fill={INK} />
        <path d="M52 78c8 10 22 10 30 0" {...line} strokeWidth={6} />
        <circle cx="34" cy="72" r="8" fill="#FF80BF" opacity=".55" />
        <circle cx="96" cy="72" r="8" fill="#FF80BF" opacity=".55" />
        {/* pencil held up */}
        <g transform="translate(150 118) rotate(24)">
          <rect x="0" y="0" width="20" height="76" rx="7" fill="#FFD93D" {...S} strokeWidth={5} />
          <path d="M0 76h20l-10 18z" fill="#F0B98A" {...S} strokeWidth={5} />
          <path d="M6 92h8l-4 8z" fill={INK} />
          <rect x="0" y="-16" width="20" height="18" rx="7" fill="#FF80BF" {...S} strokeWidth={5} />
        </g>
      </g>

      {/* ---------- kid 2 (right, pink tee) ---------- */}
      <g transform="translate(318 160)">
        <rect x="86" y="80" width="56" height="82" rx="22" fill="#5BC0FF" {...S} />
        <path d="M46 218v42M86 218v42" {...line} strokeWidth={28} stroke={INK} />
        <path d="M46 218v42M86 218v42" {...line} strokeWidth={20} stroke="#FF80BF" />
        <path d="M34 264h26M74 264h26" {...line} strokeWidth={18} stroke="#fff" />
        <path d="M28 100h80a24 24 0 0124 24v70a24 24 0 01-24 24H28a24 24 0 01-24-24v-70a24 24 0 0124-24z" fill="#FF80BF" {...S} />
        <path d="M50 136l16 16 20-24" {...line} strokeWidth={7} stroke="#fff" />
        <path d="M6 132l-34 26" {...line} strokeWidth={28} stroke={INK} />
        <path d="M130 130l34-18" {...line} strokeWidth={28} stroke={INK} />
        <path d="M6 132l-34 26" {...line} strokeWidth={20} stroke="#C98A5C" />
        <path d="M130 130l34-18" {...line} strokeWidth={20} stroke="#C98A5C" />
        <circle cx="68" cy="48" r="52" fill="#C98A5C" {...S} />
        <path d="M16 44C16 8 44-8 68-8s52 16 52 52c0 0-14-16-30-14 4 12-2 22-16 24-10 2-16-6-14-16-10 4-16 12-16 24-14-4-22-10-28-22z" fill="#1F1A16" {...S} />
        <circle cx="52" cy="50" r="6" fill={INK} />
        <circle cx="86" cy="50" r="6" fill={INK} />
        <path d="M56 70c7 9 19 9 26 0" {...line} strokeWidth={6} />
        <circle cx="40" cy="66" r="7.5" fill="#FF80BF" opacity=".5" />
        <circle cx="98" cy="66" r="7.5" fill="#FF80BF" opacity=".5" />
        {/* hair bobbles */}
        <circle cx="14" cy="30" r="13" fill="#FFD93D" {...S} strokeWidth={5} />
        <circle cx="122" cy="30" r="13" fill="#FFD93D" {...S} strokeWidth={5} />
        {/* book held */}
        <g transform="translate(-84 132) rotate(-12)">
          <rect x="0" y="0" width="70" height="52" rx="12" fill="#6EE7B7" {...S} strokeWidth={5} />
          <path d="M14 0v52" {...line} strokeWidth={5} />
          <path d="M28 18h30M28 32h20" {...line} strokeWidth={5} stroke="#fff" />
        </g>
      </g>

      {/* ---------- foreground supplies ---------- */}
      {/* crayon box */}
      <g transform="translate(392 372)">
        <rect x="0" y="26" width="92" height="56" rx="16" fill="#5BC0FF" {...S} />
        {["#FF80BF", "#FFD93D", "#8B5CF6"].map((c, i) => (
          <g key={c} transform={`translate(${12 + i * 28} ${-6 + (i === 1 ? -8 : 0)})`}>
            <rect x="0" y="8" width="20" height="40" rx="7" fill={c} {...S} strokeWidth={5} />
            <path d="M10 -4l10 12H0z" fill={c} {...S} strokeWidth={5} />
          </g>
        ))}
      </g>

      {/* lunch box */}
      <g transform="translate(230 392)">
        <rect x="0" y="10" width="86" height="58" rx="20" fill="#FF80BF" {...S} />
        <path d="M0 30h86" {...line} strokeWidth={5} />
        <path d="M28 10V4a15 15 0 0130 0v6" {...line} strokeWidth={6} />
        <circle cx="30" cy="46" r="5" fill={INK} />
        <circle cx="56" cy="46" r="5" fill={INK} />
        <path d="M36 56c4 5 14 5 18 0" {...line} strokeWidth={4} />
      </g>

      {/* paint brush */}
      <g transform="translate(112 316) rotate(-18)">
        <rect x="0" y="0" width="14" height="62" rx="6" fill="#8B5CF6" {...S} strokeWidth={5} />
        <rect x="-2" y="60" width="18" height="16" rx="5" fill="#DDD" {...S} strokeWidth={5} />
        <path d="M0 76h14l-7 20z" fill="#6EE7B7" {...S} strokeWidth={5} />
      </g>
    </svg>
  );
}
