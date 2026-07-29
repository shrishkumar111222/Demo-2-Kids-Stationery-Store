import * as React from "react";

/**
 * Hand-drawn style product illustrations.
 * Every drawing lives in a 200×200 box, uses flat fills + a chunky ink outline,
 * and is intentionally a little wonky so the shelf feels drawn, not stamped.
 */

export type ArtKind =
  | "notebook"
  | "books"
  | "pen"
  | "pencil"
  | "eraser"
  | "sharpener"
  | "ruler"
  | "geometry"
  | "calculator"
  | "folder"
  | "crayons"
  | "colorpencils"
  | "paintkit"
  | "sketchbook"
  | "watercolor"
  | "postercolor"
  | "sketchpens"
  | "canvas"
  | "craftpaper"
  | "origami"
  | "glue"
  | "scissors"
  | "clay"
  | "diykit"
  | "backpack"
  | "characterbag"
  | "travelbag"
  | "trolley"
  | "laptopbag"
  | "lunchbox"
  | "steelbottle"
  | "plasticbottle"
  | "snackbox"
  | "thermos"
  | "tinbox"
  | "pouch"
  | "giftbox"
  | "paperplane";

const INK = "#2A2145";

const S = {
  stroke: INK,
  strokeWidth: 5,
  strokeLinejoin: "round" as const,
  strokeLinecap: "round" as const,
};

const line = { ...S, fill: "none" };

function Notebook() {
  return (
    <g>
      <rect x="46" y="30" width="108" height="142" rx="14" fill="#5BC0FF" {...S} />
      <path d="M64 30v142" {...line} />
      <circle cx="55" cy="56" r="5" fill="#FFFDF8" {...S} strokeWidth={3} />
      <circle cx="55" cy="90" r="5" fill="#FFFDF8" {...S} strokeWidth={3} />
      <circle cx="55" cy="124" r="5" fill="#FFFDF8" {...S} strokeWidth={3} />
      <rect x="80" y="58" width="56" height="40" rx="10" fill="#FFD93D" {...S} strokeWidth={4} />
      <path d="M82 122h52M82 142h34" {...line} strokeWidth={6} stroke="#FFFDF8" />
    </g>
  );
}

function Books() {
  return (
    <g>
      <rect x="34" y="120" width="132" height="34" rx="10" fill="#FF80BF" {...S} />
      <rect x="42" y="86" width="116" height="34" rx="10" fill="#6EE7B7" {...S} />
      <rect x="52" y="52" width="96" height="34" rx="10" fill="#FFD93D" {...S} />
      <path d="M60 137h24M68 103h24M76 69h24" {...line} strokeWidth={6} stroke="#FFFDF8" />
      <path d="M100 30c8 6 8 14 0 20" {...line} stroke="#8B5CF6" />
    </g>
  );
}

function Pencil() {
  return (
    <g>
      <path d="M70 152l-14 18 22-6z" fill="#2A2145" {...S} />
      <path d="M78 164l-22 6 6-22 68-84 22 16z" fill="#FFD93D" {...S} />
      <path d="M62 148l22 16" {...line} />
      <path d="M128 42l14-18a12 12 0 0119 14l-11 20z" fill="#FF80BF" {...S} />
      <path d="M120 54l22 16" {...line} stroke="#2A2145" />
    </g>
  );
}

function Pen() {
  return (
    <g>
      <rect
        x="84"
        y="24"
        width="34"
        height="112"
        rx="16"
        fill="#8B5CF6"
        {...S}
        transform="rotate(12 101 80)"
      />
      <path d="M96 138l14 3 3 30-20-5z" fill="#5BC0FF" {...S} />
      <path d="M112 171l-6-16 10 2z" fill="#2A2145" {...S} strokeWidth={3} />
      <rect x="126" y="44" width="10" height="52" rx="5" fill="#FFD93D" {...S} strokeWidth={4} />
      <path d="M86 60l32 7" {...line} stroke="#FFFDF8" strokeWidth={6} />
    </g>
  );
}

function Eraser() {
  return (
    <g>
      <rect x="40" y="88" width="120" height="60" rx="14" fill="#FF80BF" {...S} />
      <path d="M40 116h120" {...line} />
      <rect x="40" y="88" width="120" height="28" rx="14" fill="#5BC0FF" {...S} />
      <circle cx="76" cy="132" r="5" fill="#FFFDF8" />
      <circle cx="120" cy="132" r="5" fill="#FFFDF8" />
      <path d="M62 66c6-12 18-12 24 0M114 62c6-12 18-12 24 0" {...line} stroke="#8B5CF6" />
    </g>
  );
}

function Sharpener() {
  return (
    <g>
      <rect x="46" y="74" width="108" height="76" rx="18" fill="#6EE7B7" {...S} />
      <circle cx="100" cy="112" r="20" fill="#FFFDF8" {...S} />
      <circle cx="100" cy="112" r="7" fill="#2A2145" />
      <path d="M150 96c14-6 14 34 0 28" fill="#8B5CF6" {...S} />
      <path d="M58 60c4-10 14-10 18 0" {...line} stroke="#FFD93D" />
    </g>
  );
}

function Ruler() {
  return (
    <g>
      <rect
        x="16"
        y="80"
        width="168"
        height="46"
        rx="14"
        fill="#5BC0FF"
        {...S}
        transform="rotate(-8 100 103)"
      />
      <g transform="rotate(-8 100 103)" stroke={INK} strokeWidth={4} strokeLinecap="round">
        <path d="M40 80v18M62 80v12M84 80v18M106 80v12M128 80v18M150 80v12" />
      </g>
      <text
        x="100"
        y="122"
        transform="rotate(-8 100 103)"
        fontSize="16"
        fontWeight="800"
        fill="#FFFDF8"
        textAnchor="middle"
        fontFamily="ui-rounded, system-ui"
      >
        30 CM
      </text>
    </g>
  );
}

function Geometry() {
  return (
    <g>
      <rect x="30" y="88" width="140" height="66" rx="18" fill="#FFD93D" {...S} />
      <path d="M30 112h140" {...line} />
      <circle cx="100" cy="112" r="9" fill="#FFFDF8" {...S} strokeWidth={4} />
      <path d="M100 34l-30 52h60z" fill="#FF80BF" {...S} />
      <path d="M132 40l22 42" {...line} stroke="#8B5CF6" />
    </g>
  );
}

function Calculator() {
  return (
    <g>
      <rect x="50" y="26" width="100" height="148" rx="20" fill="#8B5CF6" {...S} />
      <rect x="66" y="42" width="68" height="32" rx="10" fill="#6EE7B7" {...S} strokeWidth={4} />
      <g fill="#FFFDF8">
        <rect x="66" y="88" width="20" height="18" rx="7" />
        <rect x="90" y="88" width="20" height="18" rx="7" />
        <rect x="114" y="88" width="20" height="18" rx="7" />
        <rect x="66" y="114" width="20" height="18" rx="7" />
        <rect x="90" y="114" width="20" height="18" rx="7" />
        <rect x="114" y="114" width="20" height="18" rx="7" />
        <rect x="66" y="140" width="44" height="18" rx="7" />
      </g>
      <rect x="114" y="140" width="20" height="18" rx="7" fill="#FFD93D" />
    </g>
  );
}

function Folder() {
  return (
    <g>
      <path
        d="M32 62a14 14 0 0114-14h34l14 18h48a14 14 0 0114 14v66a14 14 0 01-14 14H46a14 14 0 01-14-14z"
        fill="#FFD93D"
        {...S}
      />
      <path d="M44 84h112l-12 62a10 10 0 01-10 8H50a10 10 0 01-10-10z" fill="#FF80BF" {...S} />
      <path d="M84 116h44" {...line} strokeWidth={6} stroke="#FFFDF8" />
    </g>
  );
}

function Crayons() {
  const cols = ["#FF80BF", "#FFD93D", "#6EE7B7", "#5BC0FF"];
  return (
    <g>
      {cols.map((c, i) => (
        <g key={c} transform={`translate(${34 + i * 36} ${44 + (i % 2) * 10}) rotate(${i % 2 ? 5 : -5} 16 60)`}>
          <rect x="0" y="18" width="32" height="100" rx="12" fill={c} {...S} />
          <path d="M16 0l14 18H2z" fill={c} {...S} />
          <path d="M0 52h32" {...line} strokeWidth={4} />
          <path d="M0 68h32" {...line} strokeWidth={4} />
        </g>
      ))}
    </g>
  );
}

function ColorPencils() {
  const cols = ["#8B5CF6", "#FF80BF", "#FFD93D", "#6EE7B7", "#5BC0FF"];
  return (
    <g>
      {cols.map((c, i) => (
        <g key={c} transform={`rotate(${-24 + i * 12} 100 170)`}>
          <rect x="88" y="46" width="24" height="112" rx="8" fill="#FFFDF8" {...S} strokeWidth={4} />
          <rect x="88" y="46" width="24" height="34" rx="8" fill={c} {...S} strokeWidth={4} />
          <path d="M88 158h24l-12 20z" fill={c} {...S} strokeWidth={4} />
        </g>
      ))}
    </g>
  );
}

function PaintKit() {
  const pans = [
    ["#FF80BF", 74, 96],
    ["#FFD93D", 108, 92],
    ["#5BC0FF", 78, 132],
    ["#6EE7B7", 116, 128],
  ] as const;
  return (
    <g>
      <path
        d="M100 26c44 0 74 28 74 62 0 26-22 30-38 30-14 0-20 8-16 20 5 14-6 26-24 26-40 0-72-30-72-70S56 26 100 26z"
        fill="#FFFDF8"
        {...S}
      />
      {pans.map(([c, x, y]) => (
        <circle key={c} cx={x} cy={y} r="15" fill={c} {...S} strokeWidth={4} />
      ))}
      <circle cx="140" cy="70" r="13" fill="#8B5CF6" {...S} strokeWidth={4} />
    </g>
  );
}

function Sketchbook() {
  return (
    <g>
      <rect x="40" y="36" width="120" height="132" rx="16" fill="#6EE7B7" {...S} />
      <rect x="52" y="52" width="96" height="100" rx="10" fill="#FFFDF8" {...S} strokeWidth={4} />
      <path d="M64 128l20-30 16 20 14-24 22 34z" fill="#FFD93D" {...S} strokeWidth={4} />
      <circle cx="126" cy="76" r="9" fill="#FF80BF" {...S} strokeWidth={4} />
      <path d="M40 36h120" {...line} />
    </g>
  );
}

function Watercolor() {
  return (
    <g>
      <rect x="26" y="76" width="148" height="72" rx="18" fill="#5BC0FF" {...S} />
      <rect x="38" y="88" width="124" height="48" rx="12" fill="#FFFDF8" {...S} strokeWidth={4} />
      {["#FF80BF", "#FFD93D", "#6EE7B7", "#8B5CF6"].map((c, i) => (
        <circle key={c} cx={62 + i * 30} cy={112} r="13" fill={c} {...S} strokeWidth={4} />
      ))}
      <path d="M56 62c8-16 22-16 30 0M114 58c8-16 22-16 30 0" {...line} stroke="#8B5CF6" />
    </g>
  );
}

function PosterColor() {
  const cols = ["#FF80BF", "#FFD93D", "#5BC0FF"];
  return (
    <g>
      {cols.map((c, i) => (
        <g key={c} transform={`translate(${26 + i * 52} ${54 + (i === 1 ? -10 : 0)})`}>
          <rect x="0" y="24" width="48" height="94" rx="16" fill={c} {...S} />
          <rect x="14" y="4" width="20" height="24" rx="7" fill="#FFFDF8" {...S} strokeWidth={4} />
          <rect x="6" y="58" width="36" height="24" rx="8" fill="#FFFDF8" {...S} strokeWidth={4} />
        </g>
      ))}
    </g>
  );
}

function SketchPens() {
  const cols = ["#FF80BF", "#FFD93D", "#6EE7B7", "#5BC0FF", "#8B5CF6"];
  return (
    <g>
      <path d="M34 96h132v58a16 16 0 01-16 16H50a16 16 0 01-16-16z" fill="#FFD93D" {...S} />
      {cols.map((c, i) => (
        <g key={c} transform={`translate(${40 + i * 26} 24) rotate(${i * 3 - 6} 12 40)`}>
          <rect x="0" y="12" width="24" height="82" rx="9" fill={c} {...S} strokeWidth={4} />
          <path d="M12 0l9 14H3z" fill="#2A2145" {...S} strokeWidth={3} />
        </g>
      ))}
      <path d="M34 120h132" {...line} />
    </g>
  );
}

function Canvas() {
  return (
    <g>
      <path d="M60 168l40-52 40 52" {...line} />
      <path d="M100 116v52" {...line} />
      <rect x="42" y="24" width="116" height="94" rx="12" fill="#FFFDF8" {...S} />
      <path d="M42 96l30-34 22 22 24-30 40 42z" fill="#6EE7B7" {...S} strokeWidth={4} />
      <circle cx="72" cy="48" r="10" fill="#FFD93D" {...S} strokeWidth={4} />
    </g>
  );
}

function CraftPaper() {
  return (
    <g>
      {[
        ["#FFD93D", -10],
        ["#6EE7B7", -2],
        ["#FF80BF", 7],
      ].map(([c, r], i) => (
        <rect
          key={i}
          x={44 + i * 8}
          y={40 + i * 10}
          width="104"
          height="120"
          rx="14"
          fill={c as string}
          {...S}
          transform={`rotate(${r} 100 100)`}
        />
      ))}
      <path d="M92 92l16 16 22-26" {...line} strokeWidth={6} stroke="#FFFDF8" />
    </g>
  );
}

function Origami() {
  return (
    <g>
      <path d="M30 118l70-58 70 58-70 20z" fill="#5BC0FF" {...S} />
      <path d="M100 60v78" {...line} />
      <path d="M100 138l-34 34 12-46M100 138l34 34-12-46" fill="#FFD93D" {...S} />
      <circle cx="118" cy="86" r="4" fill="#2A2145" />
    </g>
  );
}

function Glue() {
  return (
    <g>
      <rect x="66" y="66" width="68" height="98" rx="20" fill="#8B5CF6" {...S} />
      <rect x="78" y="24" width="44" height="46" rx="14" fill="#FFFDF8" {...S} />
      <rect x="72" y="94" width="56" height="42" rx="10" fill="#FFFDF8" {...S} strokeWidth={4} />
      <path d="M86 112h28M86 124h18" {...line} strokeWidth={5} stroke="#8B5CF6" />
      <path d="M100 12c8 6 8 12 0 12s-8-6 0-12z" fill="#6EE7B7" {...S} strokeWidth={3} />
    </g>
  );
}

function Scissors() {
  return (
    <g>
      <path d="M62 34l72 92M138 34L66 126" {...line} strokeWidth={7} />
      <circle cx="58" cy="146" r="24" fill="#FF80BF" {...S} />
      <circle cx="142" cy="146" r="24" fill="#5BC0FF" {...S} />
      <circle cx="58" cy="146" r="9" fill="#FFFDF8" />
      <circle cx="142" cy="146" r="9" fill="#FFFDF8" />
      <circle cx="100" cy="112" r="8" fill="#FFD93D" {...S} strokeWidth={4} />
    </g>
  );
}

function Clay() {
  return (
    <g>
      <ellipse cx="100" cy="150" rx="70" ry="22" fill="#FFD93D" {...S} />
      <path d="M62 150c0-30 16-46 38-46s38 16 38 46" fill="#FF80BF" {...S} />
      <circle cx="70" cy="98" r="24" fill="#6EE7B7" {...S} />
      <circle cx="132" cy="88" r="20" fill="#5BC0FF" {...S} />
      <circle cx="100" cy="62" r="17" fill="#8B5CF6" {...S} />
    </g>
  );
}

function DiyKit() {
  return (
    <g>
      <rect x="40" y="70" width="120" height="96" rx="20" fill="#5BC0FF" {...S} />
      <circle cx="76" cy="106" r="11" fill="#FFFDF8" {...S} strokeWidth={4} />
      <circle cx="124" cy="106" r="11" fill="#FFFDF8" {...S} strokeWidth={4} />
      <path d="M76 138h48" {...line} strokeWidth={6} stroke="#FFFDF8" />
      <path d="M100 70V44" {...line} />
      <circle cx="100" cy="34" r="12" fill="#FFD93D" {...S} />
      <rect x="16" y="96" width="24" height="26" rx="9" fill="#FF80BF" {...S} strokeWidth={4} />
      <rect x="160" y="96" width="24" height="26" rx="9" fill="#FF80BF" {...S} strokeWidth={4} />
    </g>
  );
}

function Backpack({ face = false, color = "#8B5CF6" }: { face?: boolean; color?: string }) {
  return (
    <g>
      <path d="M72 56a28 28 0 0156 0" {...line} strokeWidth={12} stroke={INK} />
      <rect x="34" y="46" width="132" height="126" rx="34" fill={color} {...S} />
      <path d="M34 104h132" {...line} />
      <rect x="66" y="112" width="68" height="44" rx="16" fill="#FFD93D" {...S} strokeWidth={4} />
      <path d="M84 134h32" {...line} strokeWidth={6} />
      {face ? (
        <>
          <circle cx="60" cy="34" r="18" fill={color} {...S} />
          <circle cx="140" cy="34" r="18" fill={color} {...S} />
          <circle cx="80" cy="76" r="7" fill="#FFFDF8" />
          <circle cx="120" cy="76" r="7" fill="#FFFDF8" />
          <path d="M88 90c6 8 18 8 24 0" {...line} strokeWidth={5} stroke="#FFFDF8" />
        </>
      ) : (
        <rect x="52" y="62" width="34" height="26" rx="10" fill="#6EE7B7" {...S} strokeWidth={4} />
      )}
    </g>
  );
}

function TravelBag() {
  return (
    <g>
      <path d="M76 60a24 24 0 0148 0" {...line} strokeWidth={10} />
      <rect x="22" y="62" width="156" height="94" rx="34" fill="#6EE7B7" {...S} />
      <rect x="70" y="62" width="60" height="94" fill="#FFD93D" {...S} />
      <rect x="82" y="96" width="36" height="26" rx="9" fill="#FFFDF8" {...S} strokeWidth={4} />
      <path d="M22 110h48M130 110h48" {...line} strokeWidth={4} />
    </g>
  );
}

function Trolley() {
  return (
    <g>
      <path d="M78 44V22h44v22" {...line} strokeWidth={8} />
      <rect x="44" y="44" width="112" height="106" rx="26" fill="#FF80BF" {...S} />
      <path d="M44 92h112" {...line} />
      <rect x="82" y="104" width="36" height="26" rx="9" fill="#FFD93D" {...S} strokeWidth={4} />
      <circle cx="68" cy="164" r="14" fill="#2A2145" />
      <circle cx="132" cy="164" r="14" fill="#2A2145" />
      <circle cx="68" cy="164" r="5" fill="#FFFDF8" />
      <circle cx="132" cy="164" r="5" fill="#FFFDF8" />
    </g>
  );
}

function LaptopBag() {
  return (
    <g>
      <path d="M50 76c0-40 100-40 100 0" {...line} strokeWidth={10} />
      <rect x="28" y="76" width="144" height="88" rx="24" fill="#5BC0FF" {...S} />
      <path d="M28 100c26 22 118 22 144 0" {...line} />
      <path d="M28 100V88a12 12 0 0112-12h120a12 12 0 0112 12v12z" fill="#FFD93D" {...S} />
      <rect x="86" y="112" width="28" height="20" rx="8" fill="#FFFDF8" {...S} strokeWidth={4} />
    </g>
  );
}

function LunchBox() {
  return (
    <g>
      <rect x="34" y="72" width="132" height="94" rx="28" fill="#FFD93D" {...S} />
      <path d="M34 100h132" {...line} />
      <path d="M78 72V56a22 22 0 0144 0v16" {...line} strokeWidth={8} />
      <circle cx="78" cy="128" r="7" fill="#2A2145" />
      <circle cx="122" cy="128" r="7" fill="#2A2145" />
      <path d="M86 144c6 8 22 8 28 0" {...line} strokeWidth={5} />
      <circle cx="62" cy="140" r="8" fill="#FF80BF" opacity=".7" />
      <circle cx="138" cy="140" r="8" fill="#FF80BF" opacity=".7" />
    </g>
  );
}

function SnackBox() {
  return (
    <g>
      <rect x="28" y="70" width="144" height="90" rx="24" fill="#6EE7B7" {...S} />
      <path d="M28 96h144" {...line} />
      <path d="M100 96v64" {...line} strokeWidth={4} />
      <circle cx="64" cy="128" r="14" fill="#FF80BF" {...S} strokeWidth={4} />
      <rect x="118" y="112" width="34" height="32" rx="10" fill="#FFD93D" {...S} strokeWidth={4} />
      <rect x="60" y="52" width="80" height="20" rx="9" fill="#5BC0FF" {...S} />
    </g>
  );
}

function SteelBottle() {
  return (
    <g>
      <rect x="70" y="46" width="60" height="124" rx="24" fill="#5BC0FF" {...S} />
      <rect x="80" y="18" width="40" height="32" rx="12" fill="#8B5CF6" {...S} />
      <rect x="82" y="80" width="36" height="56" rx="12" fill="#FFFDF8" {...S} strokeWidth={4} />
      <path d="M94 96l12 14-8 14" {...line} strokeWidth={5} stroke="#5BC0FF" />
      <path d="M130 60c14 4 14 26 0 30" {...line} />
    </g>
  );
}

function PlasticBottle() {
  return (
    <g>
      <path d="M74 62h52v88a26 26 0 01-26 26 26 26 0 01-26-26z" fill="#FF80BF" {...S} />
      <rect x="80" y="30" width="40" height="34" rx="10" fill="#FFD93D" {...S} />
      <rect x="76" y="16" width="48" height="18" rx="8" fill="#6EE7B7" {...S} strokeWidth={4} />
      <path d="M74 108h52" {...line} strokeWidth={4} />
      <circle cx="100" cy="136" r="10" fill="#FFFDF8" {...S} strokeWidth={4} />
    </g>
  );
}

function Thermos() {
  return (
    <g>
      <rect x="64" y="54" width="72" height="118" rx="26" fill="#8B5CF6" {...S} />
      <rect x="72" y="22" width="56" height="34" rx="16" fill="#FFD93D" {...S} />
      <rect x="74" y="92" width="52" height="44" rx="14" fill="#FFFDF8" {...S} strokeWidth={4} />
      <path d="M88 106c8 6 8 16 0 22M110 106c8 6 8 16 0 22" {...line} strokeWidth={5} stroke="#FF80BF" />
    </g>
  );
}

function TinBox() {
  return (
    <g>
      <rect x="24" y="66" width="152" height="80" rx="24" fill="#FF80BF" {...S} />
      <path d="M24 106h152" {...line} />
      <rect x="86" y="96" width="28" height="20" rx="8" fill="#FFD93D" {...S} strokeWidth={4} />
      <circle cx="58" cy="126" r="8" fill="#FFFDF8" />
      <circle cx="142" cy="126" r="8" fill="#FFFDF8" />
      <path d="M50 88c8-8 18-8 26 0M124 88c8-8 18-8 26 0" {...line} strokeWidth={4} stroke="#FFFDF8" />
    </g>
  );
}

function Pouch() {
  return (
    <g>
      <path d="M30 84c0-16 14-24 70-24s70 8 70 24v54a22 22 0 01-22 22H52a22 22 0 01-22-22z" fill="#6EE7B7" {...S} />
      <path d="M30 92h140" {...line} strokeWidth={7} />
      <circle cx="150" cy="92" r="11" fill="#FFD93D" {...S} strokeWidth={4} />
      <path d="M64 122h44" {...line} strokeWidth={6} stroke="#FFFDF8" />
      <path d="M100 60c0-14 8-22 20-22" {...line} stroke="#8B5CF6" />
    </g>
  );
}

function GiftBox() {
  return (
    <g>
      <rect x="34" y="84" width="132" height="86" rx="20" fill="#FF80BF" {...S} />
      <rect x="24" y="58" width="152" height="34" rx="14" fill="#8B5CF6" {...S} />
      <path d="M100 58v112" {...line} strokeWidth={12} stroke="#FFD93D" />
      <path d="M100 58v112" {...line} strokeWidth={4} />
      <path d="M100 56c-24-32-52-8-30 8M100 56c24-32 52-8 30 8" fill="#FFD93D" {...S} />
    </g>
  );
}

function PaperPlaneArt() {
  return (
    <g>
      <path d="M22 96l156-58-52 132-30-46z" fill="#FFFDF8" {...S} />
      <path d="M96 124l82-86" {...line} />
      <path d="M96 124l-30-6" {...line} />
    </g>
  );
}

const registry: Record<ArtKind, React.ReactNode> = {
  notebook: <Notebook />,
  books: <Books />,
  pen: <Pen />,
  pencil: <Pencil />,
  eraser: <Eraser />,
  sharpener: <Sharpener />,
  ruler: <Ruler />,
  geometry: <Geometry />,
  calculator: <Calculator />,
  folder: <Folder />,
  crayons: <Crayons />,
  colorpencils: <ColorPencils />,
  paintkit: <PaintKit />,
  sketchbook: <Sketchbook />,
  watercolor: <Watercolor />,
  postercolor: <PosterColor />,
  sketchpens: <SketchPens />,
  canvas: <Canvas />,
  craftpaper: <CraftPaper />,
  origami: <Origami />,
  glue: <Glue />,
  scissors: <Scissors />,
  clay: <Clay />,
  diykit: <DiyKit />,
  backpack: <Backpack />,
  characterbag: <Backpack face color="#FF80BF" />,
  travelbag: <TravelBag />,
  trolley: <Trolley />,
  laptopbag: <LaptopBag />,
  lunchbox: <LunchBox />,
  steelbottle: <SteelBottle />,
  plasticbottle: <PlasticBottle />,
  snackbox: <SnackBox />,
  thermos: <Thermos />,
  tinbox: <TinBox />,
  pouch: <Pouch />,
  giftbox: <GiftBox />,
  paperplane: <PaperPlaneArt />,
};

export function ProductArt({
  kind,
  className = "",
  title,
  style,
}: {
  kind: ArtKind;
  className?: string;
  title?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      style={style}
      role={title ? "img" : "presentation"}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      {registry[kind]}
    </svg>
  );
}

export const artKinds = Object.keys(registry) as ArtKind[];
