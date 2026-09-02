"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import couple from "@/assets/cornstar-pussyimone.png";

export default function Pussyimone() {
  return (
    <section
      id="pussyimone"
      className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(60% 60% at 75% 40%, rgba(240,132,42,0.16), transparent 70%)",
        }}
      />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Reveal>
            <p className="chip" style={{ color: "#f0842a" }}>
              The Woman
            </p>
            <h2 className="mt-4 font-display text-4xl uppercase leading-[0.95] text-cream sm:text-5xl">
              <span className="struck">Behind</span>{" "}
              <span className="text-cream">Every Great Cob&hellip;</span>
            </h2>
            <p className="mt-4 font-display text-2xl uppercase leading-tight gold-text">
              Next To. She Will Not Stand Behind Him.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 space-y-3 font-serif text-lg text-cream-dim">
              <p>Model.</p>
              <p>Entrepreneur.</p>
              <p>Persimmon.</p>
              <p className="text-cream">
                The only living organism capable of telling Cornstar he&apos;s
                wrong and surviving the conversation.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-8 rounded-xl border border-gold/15 bg-ink-2/60 p-5">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-cream-dim/60">
                Relationship Status
              </p>
              <p className="mt-2 font-display text-2xl uppercase">
                <span className="struck text-cream-dim">It&apos;s Complicated.</span>
              </p>
              <p className="mt-1 font-display text-xl uppercase gold-text">
                Actually It&apos;s Fine. Cornstar Wrote The First One.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <Link
              href="/pussyimone"
              className="btn-gold mt-9 inline-block rounded-full px-8 py-3.5 text-sm"
            >
              Meet Pussyimone
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="order-first lg:order-last">
          <div className="deco-frame relative mx-auto max-w-md overflow-hidden rounded-2xl bg-gradient-to-b from-ink-3 to-ink p-3">
            <div className="overflow-hidden rounded-xl">
              <Image
                src={couple}
                alt="Cornstar and Pussyimone together"
                placeholder="blur"
                sizes="(max-width: 1024px) 90vw, 440px"
                className="h-auto w-full"
              />
            </div>
            <p className="relative px-3 py-4 text-center font-serif text-sm italic text-cream-dim">
              &ldquo;I&apos;ve heard the speech. All of them.&rdquo;
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
