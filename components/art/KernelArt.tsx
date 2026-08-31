"use client";

import { useId } from "react";

/**
 * KERNEL — the young, genetically-perfect, algorithmically-optimized threat.
 * Rendered deliberately cleaner / flatter / more "modern brand" than Cornstar.
 */
export default function KernelArt({ className = "" }: { className?: string }) {
  const uid = useId().replace(/:/g, "");
  const id = (s: string) => `${s}-${uid}`;

  const kernels: { x: number; y: number }[] = [];
  const cx = 200;
  const top = 120;
  const bottom = 430;
  let row = 0;
  for (let y = top + 14; y < bottom - 6; y += 22) {
    const t = (y - top) / (bottom - top);
    const taper = 1 - Math.pow(Math.max(0, t - 0.6) / 0.4, 1.8) * 0.85;
    const rw = 72 * taper - 6;
    const cols = Math.max(2, Math.round((rw * 2) / 24));
    const step = (rw * 2) / cols;
    const off = row % 2 ? step / 2 : 0;
    for (let i = 0; i <= cols; i++) {
      const x = cx - rw + i * step + off - step / 2;
      if (x < cx - rw - 2 || x > cx + rw + 2) continue;
      kernels.push({ x, y });
    }
    row++;
  }

  return (
    <svg
      viewBox="0 0 400 480"
      className={className}
      role="img"
      aria-label="Kernel, a young modern corn celebrity"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={id("halo")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.5" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <clipPath id={id("clip")}>
          <path d="M200 116 C246 116 272 150 272 214 C272 300 268 356 250 410 C238 442 220 452 200 452 C180 452 162 442 150 410 C132 356 128 300 128 214 C128 150 154 116 200 116 Z" />
        </clipPath>
      </defs>

      {/* clean ring-light halo */}
      <circle cx="200" cy="250" r="180" fill={`url(#${id("halo")})`} opacity="0.25" />
      <circle cx="200" cy="250" r="150" fill="none" stroke="#ffffff" strokeWidth="1.5" opacity="0.18" />

      <ellipse cx="200" cy="462" rx="86" ry="12" fill="#000" opacity="0.35" />

      {/* husk — minimal, tucked, tidy */}
      <path d="M156 150 C120 150 100 178 96 220 C124 206 142 214 156 240 Z" fill="#8fae4a" />
      <path d="M244 150 C280 150 300 178 304 220 C276 206 258 214 244 240 Z" fill="#7f9b3d" />

      {/* body — flat, bright, even */}
      <path
        d="M200 116 C246 116 272 150 272 214 C272 300 268 356 250 410 C238 442 220 452 200 452 C180 452 162 442 150 410 C132 356 128 300 128 214 C128 150 154 116 200 116 Z"
        fill="#ffd24d"
      />
      <g clipPath={`url(#${id("clip")})`}>
        {kernels.map((k, i) => (
          <ellipse key={i} cx={k.x} cy={k.y} rx="8.5" ry="8" fill="#ffdf77" stroke="#f0b62a" strokeWidth="1.2" />
        ))}
      </g>

      {/* smug little smile + fresh eyes (no shades — he has nothing to hide) */}
      <circle cx="176" cy="212" r="7" fill="#2a1e06" />
      <circle cx="224" cy="212" r="7" fill="#2a1e06" />
      <circle cx="178.5" cy="209.5" r="2.2" fill="#fff" />
      <circle cx="226.5" cy="209.5" r="2.2" fill="#fff" />
      <path d="M182 244 C192 252 208 252 218 244" stroke="#a06a12" strokeWidth="5" fill="none" strokeLinecap="round" />

      {/* single tasteful earbud — social-media-native */}
      <rect x="150" y="228" width="8" height="16" rx="4" fill="#fafafa" />

      {/* verified check badge */}
      <g transform="translate(250 150)">
        <circle r="20" fill="#1d9bf0" />
        <path d="M-9 0 l6 7 12 -14" stroke="#fff" strokeWidth="4.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* silk tuft — neat */}
      <g stroke="#d8b447" strokeWidth="2.5" strokeLinecap="round" opacity="0.8">
        <path d="M188 118 C186 100 182 90 178 82" fill="none" />
        <path d="M200 116 C200 98 200 88 200 80" fill="none" />
        <path d="M212 118 C214 100 218 90 222 82" fill="none" />
      </g>
    </svg>
  );
}
