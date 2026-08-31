"use client";

import { useId } from "react";

/**
 * CORNSTAR — anthropomorphic ear of corn.
 * Aviators. Diamond OG chain. Husk-leaf jacket. Absolute confidence.
 * Kernels are generated procedurally and clipped to the cob body.
 */
export default function CornstarArt({
  className = "",
  glint = true,
}: {
  className?: string;
  glint?: boolean;
}) {
  const uid = useId().replace(/:/g, "");
  const id = (s: string) => `${s}-${uid}`;

  // Cob body geometry
  const cx = 200;
  const bodyTop = 96;
  const bodyBottom = 512;
  const halfW = 96; // widest half-width

  // Procedural kernels clipped to the cob silhouette
  const kernels: { x: number; y: number; rx: number; ry: number; k: number }[] = [];
  const rowH = 20;
  let row = 0;
  for (let y = bodyTop + 14; y < bodyBottom - 8; y += rowH) {
    // taper: narrower near the pointed bottom
    const t = (y - bodyTop) / (bodyBottom - bodyTop);
    const taper = 1 - Math.pow(Math.max(0, t - 0.55) / 0.45, 1.7) * 0.9;
    const rowWidth = halfW * taper - 8;
    const cols = Math.max(2, Math.round((rowWidth * 2) / 22));
    const stepX = (rowWidth * 2) / cols;
    const offset = row % 2 === 0 ? 0 : stepX / 2;
    for (let i = 0; i <= cols; i++) {
      const x = cx - rowWidth + i * stepX + offset - stepX / 2;
      if (x < cx - rowWidth - 2 || x > cx + rowWidth + 2) continue;
      kernels.push({ x, y, rx: 9.5, ry: 8.5, k: (row + i) % 5 });
    }
    row++;
  }

  return (
    <svg
      viewBox="0 0 400 560"
      className={className}
      role="img"
      aria-label="Cornstar, an anthropomorphic ear of corn wearing aviator sunglasses and a diamond OG chain"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={id("cob")} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffe58a" />
          <stop offset="0.5" stopColor="#ffcf3f" />
          <stop offset="1" stopColor="#d99b17" />
        </linearGradient>
        <radialGradient id={id("kern")} cx="0.35" cy="0.3" r="0.9">
          <stop offset="0" stopColor="#fff2b8" />
          <stop offset="0.55" stopColor="#ffd24d" />
          <stop offset="1" stopColor="#c98d16" />
        </radialGradient>
        <linearGradient id={id("husk")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#7f9b3d" />
          <stop offset="1" stopColor="#3c4d18" />
        </linearGradient>
        <linearGradient id={id("huskDark")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5f7530" />
          <stop offset="1" stopColor="#293711" />
        </linearGradient>
        <linearGradient id={id("gold")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f7dd8f" />
          <stop offset="0.5" stopColor="#e7b24c" />
          <stop offset="1" stopColor="#a9761f" />
        </linearGradient>
        <linearGradient id={id("lens")} x1="0" y1="0" x2="0.6" y2="1">
          <stop offset="0" stopColor="#2a2b2f" />
          <stop offset="0.45" stopColor="#0c0d10" />
          <stop offset="1" stopColor="#1a1b1f" />
        </linearGradient>
        <linearGradient id={id("lensSheen")} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffd98a" stopOpacity="0.85" />
          <stop offset="0.5" stopColor="#e7b24c" stopOpacity="0.15" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <radialGradient id={id("diamond")} cx="0.5" cy="0.35" r="0.8">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.5" stopColor="#bfe9ff" />
          <stop offset="1" stopColor="#5aa9d6" />
        </radialGradient>
        <filter id={id("soft")} x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="#000" floodOpacity="0.5" />
        </filter>
        <clipPath id={id("bodyclip")}>
          <path d="M200 92
            C255 92 296 132 296 210
            C296 300 292 372 268 452
            C252 502 226 520 200 520
            C174 520 148 502 132 452
            C108 372 104 300 104 210
            C104 132 145 92 200 92 Z" />
        </clipPath>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="200" cy="534" rx="118" ry="18" fill="#000" opacity="0.45" />

      {/* ---- Husk-leaf jacket (behind body) ---- */}
      <g filter={`url(#${id("soft")})`}>
        {/* left collar */}
        <path
          d="M150 150 C92 138 44 176 26 250 C70 236 96 250 120 300 C128 236 140 186 150 150 Z"
          fill={`url(#${id("huskDark")})`}
        />
        {/* right collar */}
        <path
          d="M250 150 C308 138 356 176 374 250 C330 236 304 250 280 300 C272 236 260 186 250 150 Z"
          fill={`url(#${id("husk")})`}
        />
        {/* left lower leaf */}
        <path
          d="M156 300 C104 320 74 392 78 466 C112 430 138 424 168 440 C160 392 156 344 156 300 Z"
          fill={`url(#${id("huskDark")})`}
        />
        {/* right lower leaf */}
        <path
          d="M244 300 C296 320 326 392 322 466 C288 430 262 424 232 440 C240 392 244 344 244 300 Z"
          fill={`url(#${id("husk")})`}
        />
        {/* husk vein lines */}
        <path d="M120 300 C112 236 138 186 150 150" stroke="#2c3a12" strokeWidth="2.5" fill="none" opacity="0.6" />
        <path d="M280 300 C288 236 262 186 250 150" stroke="#2c3a12" strokeWidth="2.5" fill="none" opacity="0.5" />
      </g>

      {/* ---- Cob body ---- */}
      <path
        d="M200 92 C255 92 296 132 296 210 C296 300 292 372 268 452 C252 502 226 520 200 520 C174 520 148 502 132 452 C108 372 104 300 104 210 C104 132 145 92 200 92 Z"
        fill={`url(#${id("cob")})`}
      />

      {/* ---- Kernels (clipped) ---- */}
      <g clipPath={`url(#${id("bodyclip")})`}>
        {kernels.map((kk, i) => (
          <g key={i}>
            <ellipse cx={kk.x} cy={kk.y} rx={kk.rx} ry={kk.ry} fill={`url(#${id("kern")})`} />
            <ellipse
              cx={kk.x - 2.4}
              cy={kk.y - 2.4}
              rx={kk.rx * 0.32}
              ry={kk.ry * 0.3}
              fill="#fff6cf"
              opacity={0.7}
            />
          </g>
        ))}
        {/* body core shading */}
        <path
          d="M296 210 C296 300 292 372 268 452 C252 502 226 520 200 520 L200 92 C255 92 296 132 296 210 Z"
          fill="#000"
          opacity="0.10"
        />
      </g>

      {/* body rim light */}
      <path
        d="M200 92 C255 92 296 132 296 210 C296 300 292 372 268 452"
        stroke="#fff3c2"
        strokeWidth="3"
        fill="none"
        opacity="0.5"
        strokeLinecap="round"
      />

      {/* ---- Face: confident smirk ---- */}
      <path
        d="M170 250 C182 262 214 264 236 250"
        stroke="#7a4f12"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M232 250 C236 256 240 258 246 256"
        stroke="#7a4f12"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />

      {/* ---- Aviator sunglasses ---- */}
      <g>
        {/* bridge + brow bar */}
        <path d="M120 176 H280" stroke={`url(#${id("gold")})`} strokeWidth="6" strokeLinecap="round" />
        <path d="M186 190 C194 182 206 182 214 190" stroke={`url(#${id("gold")})`} strokeWidth="6" fill="none" strokeLinecap="round" />
        {/* left lens */}
        <path
          d="M126 182 H188 C190 214 176 236 150 236 C130 236 120 218 120 200 C120 190 122 184 126 182 Z"
          fill={`url(#${id("lens")})`}
          stroke={`url(#${id("gold")})`}
          strokeWidth="5"
        />
        {/* right lens */}
        <path
          d="M274 182 H212 C210 214 224 236 250 236 C270 236 280 218 280 200 C280 190 278 184 274 182 Z"
          fill={`url(#${id("lens")})`}
          stroke={`url(#${id("gold")})`}
          strokeWidth="5"
        />
        {/* lens reflections */}
        <path d="M132 190 C140 208 152 216 168 214" stroke="#e7b24c" strokeWidth="3" fill="none" opacity="0.5" />
        <path d="M268 190 C260 208 248 216 232 214" stroke="#e7b24c" strokeWidth="3" fill="none" opacity="0.35" />
        {/* animated glint sweep */}
        <g clipPath={`url(#${id("bodyclip")})`}>
          {glint && (
            <rect
              x="110"
              y="182"
              width="40"
              height="54"
              fill={`url(#${id("lensSheen")})`}
              opacity="0"
              style={{ animation: "glasses-glint 6s ease-in-out infinite" }}
            />
          )}
        </g>
      </g>

      {/* ---- Diamond OG chain ---- */}
      <g>
        <path
          d="M150 236 C150 300 200 320 200 320 C200 320 250 300 250 236"
          stroke={`url(#${id("gold")})`}
          strokeWidth="9"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M150 236 C150 300 200 320 200 320 C200 320 250 300 250 236"
          stroke="#fff3c2"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.6"
          strokeDasharray="3 9"
        />
        {/* OG pendant */}
        <g transform="translate(200 336)">
          <rect x="-38" y="-20" width="76" height="42" rx="9" fill={`url(#${id("gold")})`} stroke="#8a5f16" strokeWidth="2" />
          <rect x="-33" y="-15" width="66" height="32" rx="6" fill="#0e0b06" opacity="0.25" />
          <text
            x="0"
            y="8"
            textAnchor="middle"
            fontFamily="var(--font-anton), sans-serif"
            fontSize="30"
            fill="#3a2708"
            letterSpacing="1"
          >
            OG
          </text>
          {/* sparkles */}
          <g fill={`url(#${id("diamond")})`}>
            <path d="M-30 -24 l3 6 6 3 -6 3 -3 6 -3 -6 -6 -3 6 -3 z" />
            <path d="M32 20 l2 4 4 2 -4 2 -2 4 -2 -4 -4 -2 4 -2 z" />
          </g>
        </g>
      </g>

      {/* top corn silk tuft */}
      <g stroke="#caa33a" strokeWidth="3" strokeLinecap="round" opacity="0.85">
        <path d="M186 96 C182 74 176 60 168 50" fill="none" />
        <path d="M200 94 C200 70 200 54 200 42" fill="none" />
        <path d="M214 96 C218 74 224 60 232 50" fill="none" />
      </g>
    </svg>
  );
}
