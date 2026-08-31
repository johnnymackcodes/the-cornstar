"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "motion/react";
import badge from "@/assets/cornstar-badge.png";
import wordmark from "@/assets/cornstar-wordmark.png";

const PHASES = ["LOADING LEGEND...", "BUTTERING...", "APPLYING CONFIDENCE..."];

export default function Loader() {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(true);
  const [leaving, setLeaving] = useState(false);
  const [phase, setPhase] = useState(0);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("cs_loaded") === "1";
    } catch {}
    if (seen || reduce) {
      setMounted(false);
      return;
    }

    const timers: ReturnType<typeof setTimeout>[] = [];
    timers.push(setTimeout(() => setPhase(1), 950));
    timers.push(setTimeout(() => setPhase(2), 1750));
    timers.push(
      setTimeout(() => {
        try {
          sessionStorage.setItem("cs_loaded", "1");
        } catch {}
        setLeaving(true);
      }, 2650)
    );
    timers.push(setTimeout(() => setMounted(false), 3350));

    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(100, ((t - start) / 2500) * 100);
      setPct(p);
      if (p < 100) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      timers.forEach(clearTimeout);
    };
  }, [reduce]);

  useEffect(() => {
    document.body.style.overflow = mounted ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink transition-[opacity,filter] duration-700 ease-in-out ${
        leaving ? "opacity-0 brightness-[3]" : "opacity-100"
      }`}
    >
      <div className="spotlight" />
      <div className="floaty ov-pop w-36 sm:w-44">
        <Image
          src={badge}
          alt="Cornstar"
          priority
          placeholder="blur"
          sizes="176px"
          className="h-auto w-full rounded-full drop-shadow-[0_0_50px_rgba(231,178,76,0.4)]"
        />
      </div>

      <h1 className="sr-only">Cornstar</h1>
      <Image
        src={wordmark}
        alt="Cornstar"
        priority
        sizes="288px"
        className="ov-fade mt-7 h-auto w-64 max-w-[72vw]"
      />

      <div className="mt-6 h-5 overflow-hidden">
        <p
          key={phase}
          className="loader-phase font-mono text-xs uppercase tracking-[0.35em] text-cream-dim"
        >
          {PHASES[phase]}
        </p>
      </div>

      <div className="mt-6 h-px w-56 overflow-hidden bg-gold/15">
        <div
          className="h-full bg-gradient-to-r from-gold-deep via-gold to-gold-hi transition-[width] duration-100"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
