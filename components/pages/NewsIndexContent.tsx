"use client";

import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { ARTICLES } from "@/lib/news";

export default function NewsIndexContent() {
  const [lead, ...rest] = ARTICLES;

  return (
    <div className="mx-auto max-w-7xl px-5 pb-24 pt-16">
      {/* Masthead */}
      <Reveal className="border-b border-gold/15 pb-8">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-baseline gap-3">
              <span className="rounded bg-carpet px-3 py-1 font-display text-2xl uppercase tracking-tight text-cream">
                CSNN
              </span>
              <span className="font-display text-2xl uppercase text-cream sm:text-3xl">
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

      {/* Lead story */}
      {lead && (
        <Reveal className="mt-10">
          <Link
            href={`/news/${lead.slug}`}
            className="group block rounded-2xl border border-gold/20 bg-gradient-to-b from-gold/[0.06] to-ink p-8 transition hover:border-gold/50 sm:p-12"
          >
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-carpet px-3 py-1 font-mono text-[0.55rem] uppercase tracking-[0.2em] text-cream">
                Top Story
              </span>
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-gold/70">
                {lead.category}
              </span>
            </div>
            <h2 className="mt-5 max-w-4xl font-display text-3xl uppercase leading-[1.05] text-cream transition group-hover:text-gold-hi sm:text-5xl">
              {lead.headline}
            </h2>
            <p className="mt-4 max-w-2xl font-serif text-lg italic text-cream-dim">
              {lead.dek}
            </p>
            <p className="mt-6 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-cream-dim/60">
              {lead.byline} · {lead.date} · {lead.readTime}
            </p>
          </Link>
        </Reveal>
      )}

      {/* Grid */}
      <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {rest.map((a, i) => (
          <Reveal key={a.slug} delay={(i % 3) * 0.06} className="h-full">
            <Link
              href={`/news/${a.slug}`}
              className={`group flex h-full flex-col rounded-xl border p-6 transition ${
                a.rating
                  ? "border-gold/30 bg-gradient-to-b from-gold/10 to-ink hover:border-gold/60"
                  : "border-gold/12 bg-ink-2 hover:border-gold/40"
              }`}
            >
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-gold/70">
                {a.category}
              </span>
              <h3 className="mt-3 font-display text-xl uppercase leading-tight text-cream transition group-hover:text-gold-hi">
                {a.headline}
              </h3>
              <p className="mt-2 font-serif text-sm italic text-cream-dim">
                {a.dek}
              </p>
              {a.rating && (
                <p className="mt-4">
                  <span className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-cream-dim/60">
                    Our Rating
                  </span>
                  <span className="mt-1 block font-display text-2xl uppercase gold-text gold-glow">
                    {a.rating}
                  </span>
                </p>
              )}
              <span className="mt-auto pt-5 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-cream-dim/50">
                {a.date} · Read More →
              </span>
            </Link>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14 text-center">
        <p className="font-mono text-[0.62rem] uppercase leading-relaxed tracking-[0.15em] text-cream-dim/40">
          CSNN is a wholly-owned subsidiary of Cornstar. Editorial independence
          guaranteed by Cornstar. Complaints handled by Cornstar.
        </p>
      </Reveal>
    </div>
  );
}
