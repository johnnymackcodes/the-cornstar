"use client";

import type { ReactNode } from "react";
import Reveal from "@/components/ui/Reveal";

export default function PageHeader({
  kicker,
  title,
  sub,
  accent = "gold",
}: {
  kicker: string;
  title: ReactNode;
  sub?: ReactNode;
  accent?: "gold" | "persimmon";
}) {
  return (
    <section className="relative overflow-hidden px-5 pb-14 pt-20 text-center sm:pt-24">
      <div className="spotlight" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            accent === "persimmon"
              ? "radial-gradient(55% 45% at 50% 20%, rgba(240,132,42,0.14), transparent 70%)"
              : "radial-gradient(55% 45% at 50% 20%, rgba(231,178,76,0.12), transparent 70%)",
        }}
      />
      <div className="relative">
        <Reveal>
          <p className="chip" style={accent === "persimmon" ? { color: "#f0842a" } : undefined}>
            {kicker}
          </p>
          <h1 className="mx-auto mt-4 max-w-4xl font-display text-5xl uppercase leading-[0.95] text-cream sm:text-7xl">
            {title}
          </h1>
          {sub && (
            <p className="mx-auto mt-6 max-w-2xl font-serif text-lg italic text-cream-dim">
              {sub}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
