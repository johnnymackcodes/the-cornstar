"use client";

import Reveal from "@/components/ui/Reveal";

const QUOTES: { quote: string; source: string; retraction?: boolean }[] = [
  { quote: "The most important corn of his generation.", source: "Produce Weekly" },
  { quote: "We did not say that.", source: "Produce Weekly, Later", retraction: true },
  { quote: "Impossible to ignore.", source: "The Daily Cob" },
  {
    quote: "A documentary filmmaker's worst nightmare.",
    source: "Cinema Quarterly",
  },
  { quote: "Please stop emailing us.", source: "Various Journalists", retraction: true },
];

export default function Press() {
  return (
    <section id="press" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mb-14 text-center">
          <p className="chip">Critical Acclaim</p>
          <h2 className="mt-3 font-display text-5xl uppercase leading-none text-cream sm:text-6xl">
            The <span className="gold-text">Press</span> Agrees
          </h2>
          <p className="mt-3 font-serif italic text-cream-dim">
            (Some of them have since clarified.)
          </p>
        </Reveal>

        <div className="columns-1 gap-5 sm:columns-2">
          {QUOTES.map((q, i) => (
            <Reveal key={i} delay={(i % 2) * 0.08}>
              <figure
                className={`mb-5 break-inside-avoid rounded-2xl border p-7 ${
                  q.retraction
                    ? "border-carpet/40 bg-carpet/5"
                    : "border-gold/15 bg-ink-2"
                }`}
              >
                <span
                  className={`font-serif text-5xl leading-none ${
                    q.retraction ? "text-carpet-hi/60" : "text-gold/60"
                  }`}
                  aria-hidden
                >
                  &ldquo;
                </span>
                <blockquote className="-mt-4 font-serif text-2xl italic leading-snug text-cream">
                  {q.quote}
                </blockquote>
                <figcaption className="mt-4 font-mono text-[0.65rem] uppercase tracking-[0.25em] text-cream-dim">
                  — {q.source}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
