"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import PageHeader from "@/components/layout/PageHeader";
import couple from "@/assets/cornstar-pussyimone.png";

const QUOTES = [
  "I've heard the speech. All of them.",
  "He isn't wrong that he's a legend. He's wrong about nearly everything else.",
  "Yes, I read the biography. I appear in it forty times. I appear in his actual life considerably less.",
  "People ask if I complete him. No. I audit him.",
];

const VENTURES: [string, string][] = [
  ["PERSIMMON™", "The lifestyle brand. Outsold his cologne in a single quarter and she has never once mentioned it. Out loud. To him."],
  ["The Producewood Chateau", "Everyone calls it Cornstar's chateau. The deed disagrees. She lets him believe it. It's cheaper than a conversation."],
  ["“Next To Him” — A Memoir", "Debuted at number one. His biography debuted at number nine, a fact CSNN has been asked, repeatedly, not to print."],
];

const STATUS = [
  { label: "It's Complicated.", struck: true },
  { label: "Actually It's Fine.", struck: true },
  { label: "She Wrote This One.", struck: false },
];

export default function PussyimoneContent() {
  return (
    <>
      <PageHeader
        accent="persimmon"
        kicker="The Woman"
        title="Pussyimone"
        sub="Model. Entrepreneur. Persimmon. The only living organism capable of telling Cornstar he's wrong and surviving the conversation."
      />

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-12 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          <div className="space-y-5 font-serif text-lg leading-relaxed text-cream-dim">
            <p className="text-cream">Before Cornstar, there was Pussyimone.</p>
            <p>She will remind you of this. Gently. Once. And then never again, because she doesn&apos;t have to.</p>
            <p>
              She arrived in Producewood with a plan, a portfolio, and zero
              interest in being anyone&apos;s accessory. She left with a lifestyle
              empire, a chateau, and a corn who follows her around narrating his
              own accomplishments.
            </p>
            <p className="text-cream">
              She finds him ridiculous. She has said so. Publicly. He framed it.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="order-1 lg:order-2">
          <div className="deco-frame relative mx-auto max-w-md overflow-hidden rounded-2xl bg-gradient-to-b from-ink-3 to-ink p-3">
            <div className="overflow-hidden rounded-xl">
              <Image
                src={couple}
                alt="Pussyimone with Cornstar"
                placeholder="blur"
                sizes="(max-width: 1024px) 90vw, 440px"
                className="h-auto w-full"
              />
            </div>
            <p className="relative px-3 py-4 text-center font-serif text-sm italic text-cream-dim">
              &ldquo;He asked to be in this photo. I allowed it.&rdquo;
            </p>
          </div>
        </Reveal>
      </section>

      {/* Ventures */}
      <section className="mx-auto max-w-5xl px-5 py-14">
        <Reveal className="mb-10 text-center">
          <p className="chip" style={{ color: "#f0842a" }}>
            The Empire She Actually Built
          </p>
          <h2 className="mt-3 font-display text-4xl uppercase text-cream sm:text-5xl">
            Ventures
          </h2>
        </Reveal>
        <div className="space-y-4">
          {VENTURES.map(([name, desc], i) => (
            <Reveal key={name} delay={(i % 3) * 0.06}>
              <div className="rounded-2xl border border-[#f0842a]/20 bg-ink-2 p-7 transition hover:border-[#f0842a]/50">
                <h3 className="font-display text-2xl uppercase text-cream">{name}</h3>
                <p className="mt-2 font-serif text-cream-dim">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* In her words */}
      <section className="mx-auto max-w-5xl px-5 py-14">
        <Reveal className="mb-10 text-center">
          <p className="chip" style={{ color: "#f0842a" }}>
            In Her Words
          </p>
          <h2 className="mt-3 font-display text-4xl uppercase text-cream sm:text-5xl">
            On The Record
          </h2>
        </Reveal>
        <div className="columns-1 gap-5 sm:columns-2">
          {QUOTES.map((q, i) => (
            <Reveal key={i} delay={(i % 2) * 0.06}>
              <figure className="mb-5 break-inside-avoid rounded-2xl border border-gold/15 bg-ink-2 p-7">
                <span className="font-serif text-5xl leading-none text-[#f0842a]/60" aria-hidden>
                  &ldquo;
                </span>
                <blockquote className="-mt-4 font-serif text-2xl italic leading-snug text-cream">
                  {q}
                </blockquote>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Status */}
      <section className="mx-auto max-w-2xl px-5 py-14">
        <Reveal>
          <div className="deco-frame rounded-2xl bg-ink-2 p-8 text-center sm:p-10">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-cream-dim/60">
              Relationship Status
            </p>
            <div className="mt-4 space-y-1">
              {STATUS.map((s) => (
                <p
                  key={s.label}
                  className={`font-display text-2xl uppercase sm:text-3xl ${
                    s.struck ? "" : "gold-text gold-glow"
                  }`}
                >
                  <span className={s.struck ? "struck text-cream-dim" : ""}>
                    {s.label}
                  </span>
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-4xl px-5 pb-24 pt-6 text-center">
        <Reveal>
          <Link href="/kernel" className="btn-ghost inline-block rounded-full px-8 py-3.5 text-sm">
            Meet The Competition →
          </Link>
        </Reveal>
      </section>
    </>
  );
}
