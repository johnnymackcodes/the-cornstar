"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, HeartPulse } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { useModal } from "@/components/ui/ModalProvider";
import driveStill from "@/assets/cornstar-drive.png";
import poster from "@/assets/cornstar-poster.png";

const QUOTES = [
  { line: "I have been here for eleven months.", by: "The Filmmaker" },
  { line: "I thought this was going to Sundance.", by: "Also The Filmmaker" },
  {
    line: "Please stop giving Cornstar my phone number.",
    by: "The Filmmaker's Attorney",
  },
];

export default function Documentary() {
  const { open } = useModal();
  const [status, setStatus] = useState<0 | 1 | 2>(0);

  const checkFilmmaker = () => {
    setStatus(1);
    setTimeout(() => setStatus(2), 1200);
  };

  return (
    <section
      id="documentary"
      className="relative scroll-mt-24 overflow-hidden border-y border-white/10 bg-black py-24 sm:py-32"
    >
      {/* heavy grain / B&W field */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.09] grayscale"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

      <div className="relative mx-auto max-w-4xl px-5 text-center">
        <Reveal>
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.4em] text-white/40">
            A Prestige Documentary Event
          </p>
          <h2 className="mt-6 font-display text-6xl uppercase leading-none text-white grayscale sm:text-8xl">
            Behind The Cob
          </h2>
          <p className="mt-6 font-serif text-xl italic tracking-wide text-white/60">
            A Film About Legacy.
          </p>
          <p className="mt-3 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-white/35">
            Originally supposed to be a three-day shoot.
          </p>
        </Reveal>

        {/* Film still — the filmmaker in the field */}
        <Reveal className="mt-14">
          <figure className="mx-auto max-w-3xl overflow-hidden rounded-xl border border-white/15">
            <div className="relative">
              <Image
                src={driveStill}
                alt="Cornstar driving a convertible with Pussyimone while the terrified filmmaker runs alongside filming"
                placeholder="blur"
                sizes="(max-width: 768px) 90vw, 768px"
                className="h-auto w-full"
              />
              <span className="absolute left-3 top-3 rounded bg-black/70 px-2 py-1 font-mono text-[0.55rem] uppercase tracking-[0.2em] text-white/80">
                ● REC — Day 337
              </span>
            </div>
            <figcaption className="bg-black px-4 py-3 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-white/40">
              The filmmaker (left), moments before requesting a transfer.
            </figcaption>
          </figure>
        </Reveal>

        {/* Poster + testimony */}
        <div className="mt-16 grid items-center gap-10 text-left md:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="mx-auto w-full max-w-[300px]">
            <div className="overflow-hidden rounded-xl border border-white/15 shadow-2xl">
              <Image
                src={poster}
                alt="Cornstar official movie one-sheet: Legends Never Retire. They Just Get Replaced."
                placeholder="blur"
                sizes="(max-width: 768px) 70vw, 300px"
                className="h-auto w-full"
              />
            </div>
            <p className="mt-3 text-center font-mono text-[0.55rem] uppercase tracking-[0.25em] text-white/35">
              Official One-Sheet · Husk Films
            </p>
          </Reveal>

          <div className="space-y-7">
            {QUOTES.map((q, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <blockquote>
                  <p className="font-serif text-2xl italic leading-snug text-white/85 sm:text-3xl">
                    &ldquo;{q.line}&rdquo;
                  </p>
                  <footer className="mt-3 font-mono text-[0.65rem] uppercase tracking-[0.3em] text-white/40">
                    — {q.by}
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-16">
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              onClick={() =>
                open({
                  kicker: "In Select Theaters. Eventually.",
                  title: "The Trailer Isn't Locked.",
                  body: "The editor has locked it four times. Cornstar has unlocked it four times. There is now a fifth act. There was never supposed to be a fifth act.",
                  resist: true,
                })
              }
              className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white px-8 py-3.5 font-display text-sm uppercase tracking-widest text-black transition hover:bg-white/90"
            >
              <Play size={15} className="fill-current" />
              Watch The Trailer
            </button>
            <button
              onClick={checkFilmmaker}
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 font-display text-sm uppercase tracking-widest text-white/80 transition hover:border-white hover:text-white"
            >
              <HeartPulse size={15} />
              Check On The Filmmaker
            </button>
          </div>

          <div className="mt-6 h-8">
            {status > 0 && (
              <p
                key={status}
                className="loader-phase font-mono text-sm uppercase tracking-[0.3em] text-white"
              >
                {status === 1 ? "He Is Alive." : "He Is Alive. Physically."}
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
