"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import redCarpet from "@/assets/cornstar-redcarpet.png";

export default function About() {
  return (
    <section id="legend" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
        {/* Portrait */}
        <Reveal className="order-2 lg:order-1">
          <div className="deco-frame relative mx-auto max-w-md overflow-hidden rounded-2xl bg-gradient-to-b from-ink-3 to-ink p-3">
            <div className="overflow-hidden rounded-xl">
              <Image
                src={redCarpet}
                alt="Cornstar on the red carpet holding his 'OG Cornstar Legend' star trophy"
                placeholder="blur"
                sizes="(max-width: 1024px) 90vw, 440px"
                className="h-auto w-full"
              />
            </div>
            <div className="pointer-events-none absolute inset-x-6 bottom-16 h-px gold-rule" />
            <p className="relative px-3 py-4 text-center font-serif text-sm italic text-cream-dim">
              Cornstar, photographed in Producewood. Circa: whenever he says.
            </p>
          </div>
        </Reveal>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="chip">About The Legend</p>
            <h2 className="mt-4 font-display text-4xl uppercase leading-[0.95] text-cream sm:text-5xl">
              You Don&apos;t Become
              <br />A Legend.{" "}
              <span className="gold-text">You Get Harvested One.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 space-y-4 font-serif text-lg leading-relaxed text-cream-dim">
              <p>Before influencers.</p>
              <p>Before algorithms.</p>
              <p>Before ring lights.</p>
              <p>
                Before anyone knew what &quot;engagement&quot; meant&hellip; there
                was Cornstar.
              </p>
              <p className="text-cream">
                One cob. One dream. Several questionable business decisions.
              </p>
              <p>
                From humble agricultural beginnings to the bright lights of
                Producewood, Cornstar didn&apos;t just enter the entertainment
                industry.
              </p>
              <p className="font-display text-2xl uppercase not-italic gold-text">
                He buttered it.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <Link
              href="/the-legend"
              className="btn-gold mt-10 inline-block rounded-full px-8 py-3.5 text-sm"
            >
              Read The Unauthorized Authorized Biography
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
