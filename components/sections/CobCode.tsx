"use client";

import Reveal from "@/components/ui/Reveal";
import { useModal } from "@/components/ui/ModalProvider";

const RULES = [
  "Never apologize for being the biggest cob in the room.",
  "If they say you're past your prime, ask who their agent is.",
  "Never trust a vegetable with a podcast.",
  "Always own the convertible.",
  "The algorithm can smell fear.",
  "Stay Kernel.",
];

export default function CobCode() {
  const { open } = useModal();
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(70% 50% at 50% 0%, rgba(231,178,76,0.10), transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="text-center">
          <p className="chip">Billionaire Mindset</p>
          <h2 className="mt-3 font-display text-5xl uppercase leading-none text-cream sm:text-7xl">
            The <span className="gold-text gold-glow">Cob Code</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-gold/15 bg-gold/10 sm:grid-cols-2">
          {RULES.map((rule, i) => (
            <Reveal key={i} delay={(i % 2) * 0.08} className="h-full">
              <div className="group flex h-full items-start gap-5 bg-ink-2 p-7 transition hover:bg-ink-3">
                <span className="font-display text-4xl leading-none gold-text sm:text-5xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="pt-1 font-display text-xl uppercase leading-tight text-cream sm:text-2xl">
                  {rule}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 text-center">
          <div className="deco-frame mx-auto max-w-xl rounded-2xl bg-ink-2 p-8 sm:p-10">
            <p className="chip">Coming Soon</p>
            <h3 className="mt-3 font-display text-3xl uppercase text-cream sm:text-4xl">
              Cornstar <span className="gold-text">Masterclass</span>
            </h3>
            <p className="mt-3 font-serif text-cream-dim">
              Twelve lessons. Zero of them are about corn.
            </p>
            <button
              onClick={() =>
                open({
                  kicker: "Enrollment Review Complete",
                  title: "You Cannot Afford Success.",
                  body: "Cornstar has reviewed your financials. He appreciates the ambition. He does not share the confidence. Try again after a fiscal quarter of self-belief.",
                  resist: true,
                })
              }
              className="btn-gold mt-7 rounded-full px-8 py-3.5 text-sm"
            >
              Join Waitlist — $4,999
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
