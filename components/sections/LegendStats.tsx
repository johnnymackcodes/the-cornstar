"use client";

import CountUp from "@/components/ui/CountUp";
import Reveal from "@/components/ui/Reveal";

type Stat = {
  value: number;
  decimals?: number;
  suffix?: string;
  label: string;
  mark?: string;
};

const STATS: Stat[] = [
  { value: 37, label: "Years On Top" },
  { value: 1847, label: "Industry Awards", mark: "*" },
  { value: 4.7, decimals: 1, suffix: "B", label: "Views", mark: "**" },
  { value: 1, label: "Very Tired Filmmaker" },
  { value: 0, label: "Retirement Plans" },
];

export default function LegendStats() {
  return (
    <section className="relative border-b border-gold/10 bg-ink-2 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal className="mb-14 text-center">
          <p className="chip">By The Numbers</p>
          <h2 className="mt-3 font-display text-4xl uppercase text-cream sm:text-6xl">
            A Legend, <span className="gold-text">Quantified</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-5">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center">
              <div className="font-display text-5xl leading-none gold-text gold-glow sm:text-6xl">
                <CountUp
                  value={s.value}
                  decimals={s.decimals}
                  suffix={s.suffix}
                />
                {s.mark && (
                  <span className="align-super text-xl text-gold/70">
                    {s.mark}
                  </span>
                )}
              </div>
              <p className="mt-3 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-cream-dim">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 space-y-1 text-center">
          <p className="font-mono text-[0.68rem] text-cream-dim/70">
            * Self-reported.
          </p>
          <p className="font-mono text-[0.68rem] text-cream-dim/70">
            ** Also self-reported.
          </p>
          <p className="mt-4 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-cream-dim/40">
            Statistics have not been independently verified by literally anyone.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
