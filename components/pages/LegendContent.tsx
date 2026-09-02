"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import PageHeader from "@/components/layout/PageHeader";
import { useModal } from "@/components/ui/ModalProvider";
import redCarpet from "@/assets/cornstar-redcarpet.png";
import badge from "@/assets/cornstar-badge.png";

type Chapter = {
  no: string;
  year: string;
  title: string;
  body: string[];
  redacted?: boolean;
};

const CHAPTERS: Chapter[] = [
  {
    no: "01",
    year: "1978",
    title: "Harvested",
    body: [
      "He was not, by any agricultural measure, a remarkable seedling. He was, however, the only one in the row who believed he was.",
      "Cornstar has described his own birth as “the single most important thing to happen to that field, or arguably any field.” The field has not commented. The field never does.",
    ],
  },
  {
    no: "02",
    year: "1987",
    title: "Fourteen Dollars And A Feeling",
    body: [
      "He arrived in Producewood with $14, one green husk he insisted was “outerwear,” and a level of confidence that made grown produce nervous.",
      "Within a month he had talked his way past three velvet ropes, one restraining order, and a maize-based talent agent who to this day describes the meeting only as “weather.”",
    ],
  },
  {
    no: "03",
    year: "1992",
    title: "Peak Cob",
    body: [
      "For a glorious stretch he was the most searched corn in America. Billboards. Premieres. A persimmon on his arm who was, by every honest account, out of his league and aware of it.",
      "He does not talk about this era so much as re-enact it, unprompted, at dinner, for anyone seated within nostalgia range.",
    ],
  },
  {
    no: "04",
    year: "1998",
    title: "The Incident",
    redacted: true,
    body: [
      "Records sealed. Witnesses relocated. The parrot has moved on.",
    ],
  },
  {
    no: "05",
    year: "2003",
    title: "The Scent Of Confidence",
    body: [
      "COB™ launched to a fragrance market that had not asked for it and could not, afterward, forget it. Notes of cedar, leather, butter, and unresolved insecurity.",
      "It outsold expectations, three competitors, and one small nation’s entire perfume industry. Cornstar considers this his most honest work.",
    ],
  },
  {
    no: "06",
    year: "2009 & 2016",
    title: "Two Lifetime Achievements. Zero Retirements.",
    body: [
      "He has been handed a Lifetime Achievement Award twice. Both times he accepted it, thanked no one, and clarified at the podium that “lifetime” was a suggestion, not a deadline.",
      "The academy has since stopped using the word “lifetime” in his presence.",
    ],
  },
  {
    no: "07",
    year: "2024–",
    title: "The Algorithm Wars",
    body: [
      "He discovered Instagram Reels the way a comet discovers a windshield. Then Kernel arrived — younger, genetically flawless, algorithmically optimized — and the comeback stopped being a plan and became a personal matter.",
      "This chapter is ongoing. Cornstar insists it ends well. Cornstar writes all of his own endings.",
    ],
  },
];

const FACTS: [string, string][] = [
  ["Born", "In a field. Loudly."],
  ["Height", "Disputed. Upward."],
  ["Residence", "The Producewood Chateau"],
  ["Vehicle", "One (1) black American convertible"],
  ["Signature Scent", "COB™"],
  ["Retirement Plans", "0"],
];

export default function LegendContent() {
  const { open } = useModal();

  return (
    <>
      <PageHeader
        kicker="The Authorized Biography"
        title={
          <>
            The Whole
            <br />
            Damn Cob
          </>
        }
        sub="The completely unauthorized authorized life of the world's most decorated vegetable — as dictated to a ghostwriter who has requested hazard pay."
      />

      {/* Portrait + opening quote */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="deco-frame relative mx-auto max-w-md overflow-hidden rounded-2xl bg-gradient-to-b from-ink-3 to-ink p-3">
            <div className="overflow-hidden rounded-xl">
              <Image
                src={redCarpet}
                alt="Cornstar on the red carpet with his lifetime achievement trophy"
                placeholder="blur"
                sizes="(max-width: 1024px) 90vw, 440px"
                className="h-auto w-full"
              />
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="font-serif text-3xl italic leading-snug text-cream sm:text-4xl">
            &ldquo;They said I couldn&apos;t stay on top forever.
            <span className="gold-text"> So far I&apos;m undefeated.</span>&rdquo;
          </p>
          <p className="mt-6 font-mono text-[0.7rem] uppercase tracking-[0.3em] text-cream-dim">
            — Cornstar, in the foreword he wrote for his own biography
          </p>
        </Reveal>
      </section>

      {/* Chapters */}
      <section className="mx-auto max-w-4xl px-5 py-12">
        <div className="space-y-14">
          {CHAPTERS.map((c) =>
            c.redacted ? (
              <Reveal key={c.no}>
                <button
                  onClick={() =>
                    open({
                      kicker: "Cornstar Legal",
                      title: "We Don't Talk About 1998.",
                      body: "The chapter exists. It has been read by three people. Two of them left the industry. The third is Cornstar, and he loved it.",
                      resist: true,
                    })
                  }
                  className="group w-full rounded-2xl border border-carpet/40 bg-gradient-to-b from-carpet/10 to-ink p-8 text-left transition hover:border-carpet-hi sm:p-10"
                >
                  <div className="flex items-baseline gap-5">
                    <span className="font-display text-4xl text-carpet-hi sm:text-5xl">
                      {c.no}
                    </span>
                    <div>
                      <p className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-carpet-hi/80">
                        {c.year}
                      </p>
                      <h2 className="mt-1 font-display text-3xl uppercase text-cream sm:text-4xl">
                        {c.title}
                      </h2>
                    </div>
                  </div>
                  <p className="mt-5 font-serif text-lg italic text-cream-dim">
                    {c.body[0]}
                  </p>
                  <p className="mt-4 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-carpet-hi/80">
                    [ Chapter Redacted — Tap To Request Access ]
                  </p>
                </button>
              </Reveal>
            ) : (
              <Reveal key={c.no}>
                <article className="border-l-2 border-gold/20 pl-6 sm:pl-10">
                  <div className="flex items-baseline gap-5">
                    <span className="font-display text-4xl gold-text sm:text-5xl">
                      {c.no}
                    </span>
                    <div>
                      <p className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-gold/70">
                        {c.year}
                      </p>
                      <h2 className="mt-1 font-display text-3xl uppercase text-cream sm:text-4xl">
                        {c.title}
                      </h2>
                    </div>
                  </div>
                  <div className="mt-5 space-y-4 font-serif text-lg leading-relaxed text-cream-dim">
                    {c.body.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </article>
              </Reveal>
            )
          )}
        </div>
      </section>

      {/* Fast facts */}
      <section className="mx-auto max-w-5xl px-5 py-16">
        <Reveal className="mb-10 text-center">
          <p className="chip">The Official Record</p>
          <h2 className="mt-3 font-display text-4xl uppercase text-cream sm:text-5xl">
            Fast <span className="gold-text">Facts</span>
          </h2>
          <p className="mt-2 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-cream-dim/50">
            Compiled by Cornstar. Verified by Cornstar.
          </p>
        </Reveal>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-gold/15 bg-gold/10 sm:grid-cols-2">
          {FACTS.map(([k, v], i) => (
            <Reveal key={k} delay={(i % 2) * 0.06}>
              <div className="flex items-center justify-between gap-4 bg-ink-2 px-6 py-5">
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-cream-dim">
                  {k}
                </span>
                <span className="text-right font-display text-lg uppercase text-cream">
                  {v}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Onward */}
      <section className="mx-auto max-w-4xl px-5 pb-24 pt-8">
        <Reveal className="deco-frame flex flex-col items-center gap-6 rounded-2xl bg-ink-2 p-8 text-center sm:p-12">
          <div className="floaty h-24 w-24 overflow-hidden rounded-full">
            <Image src={badge} alt="Cornstar" sizes="96px" className="h-full w-full object-cover" />
          </div>
          <h2 className="font-display text-3xl uppercase text-cream sm:text-4xl">
            The Story Isn&apos;t Over
          </h2>
          <p className="max-w-md font-serif text-cream-dim">
            It has, in fact, been extended into a fifth act against the wishes of
            everyone involved.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/the-film" className="btn-gold rounded-full px-7 py-3 text-sm">
              Watch The Comeback
            </Link>
            <Link href="/pussyimone" className="btn-ghost rounded-full px-7 py-3 text-sm">
              Meet Pussyimone
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
