"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, HeartPulse } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { useModal } from "@/components/ui/ModalProvider";
import poster from "@/assets/cornstar-poster.png";
import driveStill from "@/assets/cornstar-drive.png";

const DIARY: [string, string][] = [
  ["Day 1", "Three-day shoot. Simple. Get some B-roll of a corn being humble. In and out."],
  ["Day 4", "Cornstar has requested a second cameraman to film the first cameraman filming him."],
  ["Day 31", "We have not left the driveway. He keeps re-doing the arrival. It's a good arrival. It was a good arrival on Day 2."],
  ["Day 88", "I asked about the 1998 incident. Pussyimone changed the subject so smoothly I forgot my own question. And my name."],
  ["Day 214", "Kernel offered to executive produce. I have not told Cornstar. I would like to keep my equipment."],
  ["Day 337", "He drove us to Route 66 for 'the comeback montage.' There is no tour. There has never been a tour. I filmed it anyway."],
  ["Day 411", "My attorney has stopped returning Cornstar's calls. My attorney has started returning mine. This feels like progress."],
];

const CREDITS: [string, string][] = [
  ["Directed By", "John McCulley"],
  ["Also Directed By", "John McCulley"],
  ["Produced By", "Husk Films"],
  ["In Association With", "Buttered Entertainment"],
  ["Executive Producer", "Pussyimone"],
  ["Director Of Photography", "Maize Lights"],
  ["Music By", "Banger Cobz"],
  ["Costume Design", "Fresh Husk"],
  ["Edited By", "Shuck It"],
  ["Casting By", "Nibblet Casting"],
];

export default function FilmContent() {
  const { open } = useModal();
  const [status, setStatus] = useState<0 | 1 | 2>(0);

  const check = () => {
    setStatus(1);
    setTimeout(() => setStatus(2), 1200);
  };

  return (
    <div className="bg-black">
      {/* Grain */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.07] grayscale"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10">
        {/* Hero */}
        <section className="mx-auto max-w-4xl px-5 pb-12 pt-20 text-center sm:pt-24">
          <Reveal>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.4em] text-white/40">
              A Prestige Documentary Event
            </p>
            <h1 className="mt-6 font-display text-6xl uppercase leading-none text-white sm:text-8xl">
              Behind The Cob
            </h1>
            <p className="mt-6 font-serif text-xl italic tracking-wide text-white/60">
              A film about legacy. And a filmmaker who just wanted to go home.
            </p>
          </Reveal>
        </section>

        {/* Poster + synopsis */}
        <section className="mx-auto grid max-w-5xl items-center gap-10 px-5 py-10 md:grid-cols-[0.8fr_1.2fr]">
          <Reveal className="mx-auto w-full max-w-[320px]">
            <div className="overflow-hidden rounded-xl border border-white/15 shadow-2xl">
              <Image
                src={poster}
                alt="Behind The Cob — official one-sheet"
                placeholder="blur"
                sizes="(max-width: 768px) 80vw, 320px"
                className="h-auto w-full"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-4 font-serif text-lg leading-relaxed text-white/80">
              <p className="text-white">It was supposed to be a three-day shoot.</p>
              <p>
                What began as a modest profile of an aging entertainer has become
                an unblinking, eleven-month character study of ambition,
                delusion, and one corn&apos;s absolute refusal to accept that his
                cultural moment may have a horizon.
              </p>
              <p>
                Critics are calling it &ldquo;impossible to ignore.&rdquo; The
                filmmaker is calling it &ldquo;still happening.&rdquo;
              </p>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-white/40">
                Rated R — for crude humor, language, and some kernel nudity.
              </p>
            </div>
          </Reveal>
        </section>

        {/* Film still */}
        <section className="mx-auto max-w-4xl px-5 py-12">
          <Reveal>
            <figure className="overflow-hidden rounded-xl border border-white/15">
              <div className="relative">
                <Image
                  src={driveStill}
                  alt="Cornstar and Pussyimone in the convertible; the filmmaker runs alongside"
                  placeholder="blur"
                  sizes="(max-width: 768px) 90vw, 768px"
                  className="h-auto w-full"
                />
                <span className="absolute left-3 top-3 rounded bg-black/70 px-2 py-1 font-mono text-[0.55rem] uppercase tracking-[0.2em] text-white/80">
                  ● REC — Day 337
                </span>
              </div>
            </figure>
          </Reveal>
        </section>

        {/* Production diary */}
        <section className="mx-auto max-w-3xl px-5 py-14">
          <Reveal className="mb-10 text-center">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.35em] text-white/40">
              Recovered Footage
            </p>
            <h2 className="mt-3 font-display text-4xl uppercase text-white sm:text-5xl">
              The Filmmaker&apos;s Diary
            </h2>
          </Reveal>
          <div className="space-y-4">
            {DIARY.map(([day, entry], i) => (
              <Reveal key={day} delay={(i % 4) * 0.05}>
                <div className="flex gap-5 rounded-xl border border-white/10 bg-white/[0.03] p-5">
                  <span className="shrink-0 font-mono text-[0.7rem] uppercase tracking-[0.15em] text-white/40">
                    {day}
                  </span>
                  <p className="font-serif italic text-white/80">{entry}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Status + CTAs */}
        <section className="mx-auto max-w-4xl px-5 py-12 text-center">
          <Reveal>
            <div className="inline-flex flex-wrap items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-6">
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-white/40">
                Production Status
              </span>
              <span className="font-display text-3xl uppercase text-white">
                417% <span className="text-white/50">Over Budget</span>
              </span>
            </div>
          </Reveal>

          <Reveal className="mt-10">
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                onClick={() =>
                  open({
                    kicker: "In Select Theaters. Eventually.",
                    title: "The Trailer Isn't Locked.",
                    body: "The editor has locked it five times. Cornstar has unlocked it five times. There is now a sixth act. Nobody ordered a sixth act.",
                    resist: true,
                  })
                }
                className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white px-8 py-3.5 font-display text-sm uppercase tracking-widest text-black transition hover:bg-white/90"
              >
                <Play size={15} className="fill-current" />
                Watch The Trailer
              </button>
              <button
                onClick={check}
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
        </section>

        {/* Credits */}
        <section className="mx-auto max-w-3xl px-5 pb-24 pt-8">
          <Reveal className="mb-8 text-center">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.35em] text-white/40">
              Husk Films Presents
            </p>
          </Reveal>
          <div className="space-y-2">
            {CREDITS.map(([role, name], i) => (
              <Reveal key={role + i} delay={(i % 6) * 0.03}>
                <div className="flex items-baseline justify-between gap-6 border-b border-white/8 pb-2 font-mono text-xs uppercase tracking-[0.15em]">
                  <span className="text-white/40">{role}</span>
                  <span className="text-white/80">{name}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
