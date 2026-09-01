"use client";

import Reveal from "@/components/ui/Reveal";

const ARTICLES = [
  { tag: "Investigation", title: "Why Kernel's Follower Numbers Don't Add Up" },
  { tag: "Science", title: "10 Reasons Cornstar Is Actually Getting Younger" },
  {
    tag: "Exclusive",
    title: 'Pussyimone Confirms Cornstar "Still Has It"',
  },
  { tag: "Follow The Money", title: "Who Is Funding Big Kernel?" },
  { tag: "Polling", title: "Cornstar Poll Finds 104% Approval Rating" },
];

export default function CSNN() {
  return (
    <section className="relative border-y border-gold/10 bg-ink-2 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal className="mb-12">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="flex items-baseline gap-3">
                <span className="rounded bg-carpet px-3 py-1 font-display text-2xl uppercase tracking-tight text-cream">
                  CSNN
                </span>
                <span className="font-display text-2xl uppercase text-cream">
                  Cornstar News Network
                </span>
              </div>
              <p className="mt-3 font-mono text-[0.7rem] uppercase tracking-[0.25em] text-gold">
                Fair. Balanced. Extremely Pro-Cornstar.
              </p>
            </div>
            <span className="flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-carpet-hi">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-carpet-hi" />
              Live
            </span>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((a, i) => (
            <Reveal key={i} delay={(i % 3) * 0.07} className="h-full">
              <article className="group flex h-full flex-col rounded-xl border border-gold/12 bg-ink p-6 transition hover:border-gold/40">
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-gold/70">
                  {a.tag}
                </span>
                <h3 className="mt-3 font-display text-2xl uppercase leading-tight text-cream transition group-hover:text-gold-hi">
                  {a.title}
                </h3>
                <span className="mt-auto pt-5 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-cream-dim/50">
                  Read More →
                </span>
              </article>
            </Reveal>
          ))}

          {/* Fact check card */}
          <Reveal delay={0.2} className="h-full">
            <article className="flex h-full flex-col justify-between rounded-xl border border-gold/30 bg-gradient-to-b from-gold/10 to-ink p-6">
              <div>
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-gold">
                  Fact Check
                </span>
                <h3 className="mt-3 font-display text-2xl uppercase leading-tight text-cream">
                  Did Cornstar Invent Social Media?
                </h3>
              </div>
              <div className="mt-6">
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-cream-dim">
                  Our Rating
                </p>
                <p className="mt-1 font-display text-4xl uppercase gold-text gold-glow">
                  Mostly Yes
                </p>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
