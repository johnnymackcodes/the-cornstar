"use client";

import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import type { Article } from "@/lib/news";

export default function ArticleContent({ article }: { article: Article }) {
  return (
    <article className="mx-auto max-w-3xl px-5 pb-24 pt-14">
      <Reveal>
        <Link
          href="/news"
          className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-gold transition hover:text-gold-hi"
        >
          ← CSNN Newsroom
        </Link>
        <p className="mt-8 font-mono text-[0.65rem] uppercase tracking-[0.3em] text-gold/70">
          {article.category}
        </p>
        <h1 className="mt-4 font-display text-4xl uppercase leading-[1.03] text-cream sm:text-5xl">
          {article.headline}
        </h1>
        <p className="mt-5 font-serif text-xl italic leading-snug text-cream-dim">
          {article.dek}
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 border-y border-gold/10 py-4 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-cream-dim/60">
          <span className="text-cream-dim">{article.byline}</span>
          <span>·</span>
          <span>{article.date}</span>
          <span>·</span>
          <span>{article.readTime}</span>
        </div>
      </Reveal>

      {article.rating && (
        <Reveal className="mt-8">
          <div className="deco-frame flex items-center justify-between gap-4 rounded-2xl bg-gradient-to-b from-gold/10 to-ink px-7 py-5">
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-cream-dim">
              CSNN Rating
            </span>
            <span className="font-display text-3xl uppercase gold-text gold-glow">
              {article.rating}
            </span>
          </div>
        </Reveal>
      )}

      <div className="mt-8 space-y-5">
        {article.body.map((p, i) => (
          <Reveal key={i} delay={Math.min(i, 4) * 0.03}>
            <p
              className={`font-serif text-lg leading-relaxed text-cream-dim ${
                i === 0
                  ? "first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-6xl first-letter:leading-[0.8] first-letter:text-gold"
                  : ""
              }`}
            >
              {p}
            </p>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12 border-t border-gold/10 pt-8">
        <p className="font-mono text-[0.6rem] uppercase leading-relaxed tracking-[0.15em] text-cream-dim/40">
          This report reflects the views of CSNN, which reflect the views of
          Cornstar. Corrections are not issued. Cornstar is never wrong; he is
          occasionally early.
        </p>
        <Link
          href="/news"
          className="btn-ghost mt-8 inline-block rounded-full px-7 py-3 text-sm"
        >
          More From CSNN
        </Link>
      </Reveal>
    </article>
  );
}
