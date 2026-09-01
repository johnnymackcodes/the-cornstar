"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "welcome" | "notified">("idle");
  const [error, setError] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setError(true);
      return;
    }
    setError(false);
    setState("welcome");
    setTimeout(() => setState("notified"), 1400);
  };

  return (
    <section
      id="inner-cob"
      className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 50%, rgba(231,178,76,0.12), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-2xl px-5 text-center">
        <Reveal>
          <p className="chip">Cornstar Dispatch</p>
          <h2 className="mt-3 font-display text-5xl uppercase leading-none text-cream sm:text-7xl">
            Join The <span className="gold-text gold-glow">Inner Cob</span>
          </h2>
          <div className="mx-auto mt-6 max-w-md space-y-1 font-serif text-lg text-cream-dim">
            <p>News. Leaks. Comeback updates.</p>
            <p>
              Occasional messages written personally by Cornstar at 2:00 AM.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 min-h-[120px]">
            {state === "idle" ? (
                <form
                  key="form"
                  onSubmit={submit}
                  noValidate
                  className="ov-fade mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError(false);
                    }}
                    placeholder="you@producewood.com"
                    aria-label="Email address"
                    aria-invalid={error}
                    aria-describedby={error ? "cs-nl-error" : undefined}
                    className={`flex-1 rounded-full border bg-ink-2 px-6 py-3.5 font-mono text-sm text-cream placeholder:text-cream-dim/40 outline-none transition focus:border-gold focus-visible:ring-2 focus-visible:ring-gold ${
                      error ? "border-carpet-hi" : "border-gold/25"
                    }`}
                  />
                  <button
                    type="submit"
                    className="btn-gold rounded-full px-8 py-3.5 text-sm"
                  >
                    Become Kernel
                  </button>
                </form>
              ) : (
                <div key="success" className="ov-pop space-y-2">
                  <p className="font-display text-3xl uppercase gold-text gold-glow">
                    Welcome To The Inner Cob.
                  </p>
                  {state === "notified" && (
                    <p className="ov-rise font-mono text-sm uppercase tracking-[0.25em] text-cream-dim">
                      Cornstar Has Been Notified.
                    </p>
                  )}
                </div>
              )}
            {error && (
              <p
                id="cs-nl-error"
                role="alert"
                className="mt-3 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-carpet-hi"
              >
                That email would not survive Producewood. Try a real one.
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
