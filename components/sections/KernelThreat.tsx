"use client";

import { motion } from "motion/react";
import Reveal from "@/components/ui/Reveal";
import KernelArt from "@/components/art/KernelArt";

const ROWS: { label: string; cornstar: string; kernel: string }[] = [
  { label: "Followers", cornstar: "2.3M", kernel: "14.8M" },
  { label: "Years Active", cornstar: "Don't worry about it", kernel: "2" },
  { label: "Awards", cornstar: "1,847*", kernel: "6" },
  { label: "Protein Shake", cornstar: "Never", kernel: "Daily" },
  { label: "Skincare Routine", cornstar: "WD-40", kernel: "11 steps" },
  {
    label: "Catchphrase",
    cornstar: "STAY KERNEL",
    kernel: "None. He doesn't need one.",
  },
];

export default function KernelThreat() {
  return (
    <section
      id="kernel"
      className="relative scroll-mt-24 bg-cream py-24 text-ink sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="text-center">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.35em] text-ink/40">
            Emerging Talent
          </p>
          <h2 className="mt-4 font-display text-4xl uppercase leading-none text-ink sm:text-6xl">
            There&apos;s A New Cob In Town.
          </h2>
        </Reveal>

        <div className="mt-16 grid items-center gap-10 md:grid-cols-2">
          <Reveal>
            <div className="mx-auto max-w-xs">
              <KernelArt />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <motion.p
              initial={{ letterSpacing: "0.3em", opacity: 0 }}
              whileInView={{ letterSpacing: "0.02em", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display text-7xl uppercase leading-none text-ink sm:text-8xl"
            >
              Kernel
            </motion.p>
            <p className="mt-6 max-w-sm text-2xl font-light leading-snug text-ink/70">
              2.4 billion views.
              <br />
              <span className="font-semibold text-ink">
                Zero respect for the old ways.
              </span>
            </p>
          </Reveal>
        </div>

        {/* Quotes */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-xl border border-ink/10 bg-white p-6">
              <p className="text-lg leading-relaxed text-ink/80">
                Cornstar calls him{" "}
                <span className="font-semibold">&ldquo;a TikTok with husks.&rdquo;</span>
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-xl border border-ink/10 bg-white p-6">
              <p className="text-lg leading-relaxed text-ink/80">
                Kernel calls Cornstar{" "}
                <span className="font-semibold">
                  &ldquo;the reason I got into the business.&rdquo;
                </span>
              </p>
              <p className="mt-3 text-sm text-ink/50">
                Cornstar considers this an act of war.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Comparison */}
        <Reveal className="mt-16">
          <div className="overflow-hidden rounded-2xl border border-ink/12 bg-white">
            <div className="grid grid-cols-[1.1fr_1fr_1fr] border-b border-ink/10 bg-ink text-cream">
              <div className="px-5 py-4 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-cream-dim">
                Metric
              </div>
              <div className="px-5 py-4 text-center font-display text-lg uppercase gold-text">
                Cornstar
              </div>
              <div className="px-5 py-4 text-center font-display text-lg uppercase text-cream">
                Kernel
              </div>
            </div>
            {ROWS.map((r, i) => (
              <div
                key={r.label}
                className={`grid grid-cols-[1.1fr_1fr_1fr] items-center ${
                  i % 2 ? "bg-ink/[0.03]" : "bg-white"
                }`}
              >
                <div className="px-5 py-4 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-ink/50">
                  {r.label}
                </div>
                <div className="border-x border-ink/8 px-5 py-4 text-center text-sm font-medium text-ink">
                  {r.cornstar}
                </div>
                <div className="px-5 py-4 text-center text-sm font-medium text-ink">
                  {r.kernel}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-10 text-center">
          <p className="inline-block rounded-full bg-ink px-6 py-3 font-display text-lg uppercase tracking-wide text-cream">
            Cornstar Has Requested A Recount.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
