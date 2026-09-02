"use client";

import Link from "next/link";
import { motion } from "motion/react";
import Reveal from "@/components/ui/Reveal";
import KernelArt from "@/components/art/KernelArt";

const STATS: [string, string][] = [
  ["14.8M", "Followers"],
  ["2.4B", "Lifetime Views"],
  ["2 yrs", "In The Game"],
  ["11", "Step Skincare"],
];

const ROUTINE = [
  "5:00 AM — Sunrise. Kernel is already awake. Kernel is always already awake.",
  "5:15 AM — Cold plunge. In oat milk. For the antioxidants and the content.",
  "6:00 AM — Eleven-step skincare routine, filmed in a single unbroken take.",
  "7:00 AM — Protein. Kernel does not eat butter. Kernel has never met butter.",
  "All day — Posting. Optimizing. Being genuinely, relentlessly nice about it.",
];

const QUOTES = [
  {
    q: "Cornstar is the reason I got into this. Honestly? A legend. I'd love to just sit down with him sometime.",
    note: "Cornstar has classified this statement as an act of war.",
  },
  {
    q: "I don't really have a catchphrase. I feel like the work should speak for itself, you know?",
    note: "It does. Loudly. Constantly. To 14.8 million people.",
  },
];

export default function KernelContent() {
  return (
    <div className="bg-cream text-ink">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-20 sm:pt-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <Reveal>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.35em] text-ink/40">
              Emerging Talent
            </p>
            <motion.h1
              initial={{ letterSpacing: "0.3em", opacity: 0 }}
              whileInView={{ letterSpacing: "0.02em", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-4 font-display text-7xl uppercase leading-none text-ink sm:text-8xl"
            >
              Kernel
            </motion.h1>
            <p className="mt-6 max-w-sm text-2xl font-light leading-snug text-ink/70">
              2.4 billion views.
              <br />
              <span className="font-semibold text-ink">
                Zero respect for the old ways.
              </span>
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mx-auto max-w-xs">
              <KernelArt />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-5xl px-5 py-10">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-4">
          {STATS.map(([n, l], i) => (
            <Reveal key={l} delay={(i % 4) * 0.05}>
              <div className="bg-white px-4 py-8 text-center">
                <p className="font-display text-4xl text-ink sm:text-5xl">{n}</p>
                <p className="mt-2 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-ink/50">
                  {l}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-4 text-center font-mono text-[0.6rem] uppercase tracking-[0.2em] text-ink/40">
          Independently verified. Repeatedly. By choice.
        </p>
      </section>

      {/* The routine */}
      <section className="mx-auto max-w-3xl px-5 py-16">
        <Reveal className="mb-8 text-center">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.35em] text-ink/40">
            A Day In The Husk
          </p>
          <h2 className="mt-3 font-display text-4xl uppercase text-ink sm:text-5xl">
            The Routine
          </h2>
        </Reveal>
        <div className="space-y-3">
          {ROUTINE.map((r, i) => (
            <Reveal key={i} delay={(i % 5) * 0.05}>
              <div className="rounded-xl border border-ink/10 bg-white px-6 py-4 text-lg text-ink/80">
                {r}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Quotes */}
      <section className="mx-auto max-w-4xl px-5 py-16">
        <div className="space-y-10">
          {QUOTES.map((item, i) => (
            <Reveal key={i} delay={(i % 2) * 0.06}>
              <blockquote className="text-center">
                <p className="mx-auto max-w-2xl font-serif text-2xl italic leading-snug text-ink sm:text-3xl">
                  &ldquo;{item.q}&rdquo;
                </p>
                <footer className="mt-4 font-mono text-[0.65rem] uppercase tracking-[0.25em] text-ink/40">
                  — Kernel
                </footer>
                <p className="mx-auto mt-4 max-w-md rounded-full bg-ink px-5 py-2 text-[0.7rem] uppercase tracking-wide text-cream">
                  {item.note}
                </p>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Footer note + CTA */}
      <section className="px-5 pb-24 pt-6 text-center">
        <Reveal>
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-ink/40">
            This page was optimized in 0.3 seconds.
          </p>
          <Link
            href="/the-legend"
            className="mt-6 inline-block rounded-full bg-ink px-8 py-3.5 font-display text-sm uppercase tracking-widest text-cream transition hover:bg-ink/80"
          >
            Return To The Original →
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
