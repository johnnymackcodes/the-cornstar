"use client";

import { motion } from "motion/react";
import Reveal from "@/components/ui/Reveal";
import { useModal } from "@/components/ui/ModalProvider";

type Milestone = {
  year: string;
  title: string;
  sub?: string;
  secret?: boolean;
};

const MILESTONES: Milestone[] = [
  { year: "1978", title: "Harvested." },
  { year: "1981", title: "Discovered His Good Side." },
  {
    year: "1987",
    title: "Arrives In Producewood",
    sub: "With $14 and unreasonable confidence.",
  },
  { year: "1992", title: "Becomes The Most Searched Corn In America." },
  { year: "1998", title: "The Incident.", secret: true },
  {
    year: "2003",
    title: "Launches Signature Cologne",
    sub: "COB™ — The Scent Of Confidence.",
  },
  {
    year: "2009",
    title: "Lifetime Achievement Award.",
    sub: "Refuses to retire.",
  },
  {
    year: "2016",
    title: "Second Lifetime Achievement Award.",
    sub: "Still refuses to retire.",
  },
  { year: "2024", title: "Discovers Instagram Reels." },
  { year: "2026", title: "Kernel Arrives." },
  { year: "2026", title: 'Cornstar Declares This "Personal."' },
];

export default function Timeline() {
  const { open } = useModal();
  return (
    <section className="relative overflow-hidden border-y border-gold/10 bg-ink-2 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal className="mb-4">
          <p className="chip">The Career</p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl uppercase leading-[0.95] text-cream sm:text-5xl">
            A Legacy Measured In Decades.{" "}
            <span className="gold-text">And Lawsuits.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mb-10 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-cream-dim/60">
            ← Drag / scroll the reel →
          </p>
        </Reveal>
      </div>

      <div className="relative">
        <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-8 [scrollbar-width:thin] sm:px-[max(1.25rem,calc((100vw-80rem)/2))]">
          {/* connecting rail */}
          {MILESTONES.map((m, i) => {
            const clickable = m.secret;
            const Card = (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
                className={`group relative flex min-h-[220px] w-[240px] shrink-0 snap-start flex-col rounded-xl border p-6 transition ${
                  clickable
                    ? "cursor-pointer border-carpet/50 bg-gradient-to-b from-carpet/15 to-ink hover:border-carpet-hi"
                    : "border-gold/15 bg-ink-3/60 hover:border-gold/45"
                }`}
              >
                <span
                  className={`inline-block h-2.5 w-2.5 rounded-full ${
                    clickable ? "bg-carpet-hi" : "bg-gold"
                  }`}
                  style={{
                    boxShadow: clickable
                      ? "0 0 12px 2px rgba(224,32,43,0.6)"
                      : "0 0 12px 2px rgba(231,178,76,0.5)",
                  }}
                />
                <p
                  className={`mt-5 font-display text-4xl ${
                    clickable ? "text-carpet-hi" : "gold-text"
                  }`}
                >
                  {m.year}
                </p>
                <p className="mt-3 font-display text-xl uppercase leading-tight text-cream">
                  {m.title}
                </p>
                {m.sub && (
                  <p className="mt-2 font-serif text-sm italic text-cream-dim">
                    {m.sub}
                  </p>
                )}
                {clickable && (
                  <p className="mt-auto pt-3 font-mono text-[0.6rem] uppercase tracking-[0.25em] text-carpet-hi/80">
                    [ Redacted — Tap ]
                  </p>
                )}
              </motion.div>
            );

            return clickable ? (
              <button
                key={i}
                className="text-left"
                onClick={() =>
                  open({
                    kicker: "Cornstar Legal",
                    title: "We Don't Talk About 1998.",
                    body: "The records are sealed. The witnesses have moved on. The parrot has been relocated. That is all.",
                    resist: true,
                  })
                }
              >
                {Card}
              </button>
            ) : (
              <div key={i}>{Card}</div>
            );
          })}
          <div className="w-2 shrink-0" />
        </div>
      </div>
    </section>
  );
}
