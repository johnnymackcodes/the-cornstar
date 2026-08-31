"use client";

import { useId } from "react";

/**
 * PUSSYIMONE — glamorous anthropomorphic persimmon.
 * Model. Entrepreneur. Persimmon. Entirely accustomed to Cornstar's nonsense.
 */
export default function PersimmonArt({ className = "" }: { className?: string }) {
  const uid = useId().replace(/:/g, "");
  const id = (s: string) => `${s}-${uid}`;

  return (
    <svg
      viewBox="0 0 400 480"
      className={className}
      role="img"
      aria-label="Pussyimone, a glamorous anthropomorphic persimmon"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id={id("skin")} cx="0.38" cy="0.32" r="0.85">
          <stop offset="0" stopColor="#ffb457" />
          <stop offset="0.5" stopColor="#f0842a" />
          <stop offset="1" stopColor="#c9541a" />
        </radialGradient>
        <linearGradient id={id("leaf")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#7f9b3d" />
          <stop offset="1" stopColor="#3c4d18" />
        </linearGradient>
        <linearGradient id={id("gold")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f7dd8f" />
          <stop offset="0.5" stopColor="#e7b24c" />
          <stop offset="1" stopColor="#a9761f" />
        </linearGradient>
        <filter id={id("soft")} x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#000" floodOpacity="0.5" />
        </filter>
      </defs>

      <ellipse cx="200" cy="452" rx="120" ry="16" fill="#000" opacity="0.4" />

      {/* Persimmon body — squat, flattened */}
      <g filter={`url(#${id("soft")})`}>
        <path
          d="M200 118
             C300 118 348 190 348 272
             C348 372 286 436 200 436
             C114 436 52 372 52 272
             C52 190 100 118 200 118 Z"
          fill={`url(#${id("skin")})`}
        />
      </g>
      {/* subtle vertical lobes */}
      <g stroke="#a8461a" strokeWidth="2.5" opacity="0.28" fill="none">
        <path d="M130 170 C118 260 132 360 168 420" />
        <path d="M200 150 C200 260 200 360 200 430" />
        <path d="M270 170 C282 260 268 360 232 420" />
      </g>
      {/* rim light */}
      <path
        d="M200 118 C300 118 348 190 348 272"
        stroke="#ffd9a0"
        strokeWidth="3"
        fill="none"
        opacity="0.55"
        strokeLinecap="round"
      />

      {/* Leafy calyx crown */}
      <g>
        {[0, 1, 2, 3, 4].map((i) => {
          const ang = -90 + (i - 2) * 34;
          return (
            <path
              key={i}
              d="M200 132 C214 96 236 74 268 66 C242 92 232 118 224 140 Z"
              fill={`url(#${id("leaf")})`}
              transform={`rotate(${ang} 200 138)`}
              stroke="#2c3a12"
              strokeWidth="1.5"
            />
          );
        })}
        <circle cx="200" cy="132" r="12" fill="#4f6626" />
      </g>

      {/* Glam face */}
      {/* eyes with long lashes */}
      <g>
        {/* left */}
        <path d="M138 250 C150 234 176 234 190 250" stroke="#2a160a" strokeWidth="5" fill="#fff" />
        <ellipse cx="164" cy="252" rx="11" ry="13" fill="#2a160a" />
        <circle cx="160" cy="248" r="3.4" fill="#fff" />
        <path d="M138 246 l-14 -8 M146 240 l-10 -12 M158 237 l-4 -13" stroke="#2a160a" strokeWidth="4" strokeLinecap="round" />
        {/* right */}
        <path d="M210 250 C224 234 250 234 262 250" stroke="#2a160a" strokeWidth="5" fill="#fff" />
        <ellipse cx="236" cy="252" rx="11" ry="13" fill="#2a160a" />
        <circle cx="232" cy="248" r="3.4" fill="#fff" />
        <path d="M262 246 l14 -8 M254 240 l10 -12 M242 237 l4 -13" stroke="#2a160a" strokeWidth="4" strokeLinecap="round" />
      </g>
      {/* brows */}
      <path d="M138 226 C154 218 176 220 188 228" stroke="#5a2f12" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M212 228 C224 220 246 218 262 226" stroke="#5a2f12" strokeWidth="4" fill="none" strokeLinecap="round" />

      {/* lips — confident, glossy */}
      <path
        d="M168 316 C184 306 216 306 232 316 C216 336 184 336 168 316 Z"
        fill="#b4121b"
      />
      <path d="M168 316 C184 312 216 312 232 316" stroke="#7e0c12" strokeWidth="2" fill="none" />
      <ellipse cx="196" cy="313" rx="10" ry="3" fill="#ff6b74" opacity="0.7" />

      {/* beauty mark */}
      <circle cx="250" cy="300" r="4" fill="#2a160a" />

      {/* drop earrings */}
      <g>
        <circle cx="86" cy="300" r="6" fill={`url(#${id("gold")})`} />
        <path d="M86 306 L86 336" stroke={`url(#${id("gold")})`} strokeWidth="3" />
        <path d="M86 340 l6 8 -6 8 -6 -8 z" fill="#bfe9ff" stroke="#e7b24c" strokeWidth="1.5" />
        <circle cx="314" cy="300" r="6" fill={`url(#${id("gold")})`} />
        <path d="M314 306 L314 336" stroke={`url(#${id("gold")})`} strokeWidth="3" />
        <path d="M314 340 l6 8 -6 8 -6 -8 z" fill="#bfe9ff" stroke="#e7b24c" strokeWidth="1.5" />
      </g>
    </svg>
  );
}
