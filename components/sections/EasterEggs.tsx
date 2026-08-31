"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import badge from "@/assets/cornstar-badge.png";
import { usePresence } from "@/components/ui/usePresence";

const KONAMI = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export default function EasterEggs() {
  const [konami, setKonami] = useState(false);
  const [idleMsg, setIdleMsg] = useState<string | null>(null);
  const konamiP = usePresence(konami);
  const idleP = usePresence(!!idleMsg);
  const shownMsg = useRef<string>("");
  if (idleMsg) shownMsg.current = idleMsg;
  const seq = useRef<string[]>([]);
  const t30 = useRef<ReturnType<typeof setTimeout> | null>(null);
  const t60 = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Console signature
  useEffect(() => {
    const gold = "color:#e7b24c;font-size:20px;font-weight:bold";
    const dim = "color:#cbc2ad;font-size:12px";
    // eslint-disable-next-line no-console
    console.log("%c🌽 CORNSTAR WAS HERE.", gold);
    // eslint-disable-next-line no-console
    console.log(
      "%cDevelopers: Kernel offered me equity. I said no.",
      dim
    );
  }, []);

  // Konami code
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const next = [...seq.current, e.key].slice(-KONAMI.length);
      seq.current = next;
      if (
        next.length === KONAMI.length &&
        next.every(
          (k, i) => k.toLowerCase() === KONAMI[i].toLowerCase()
        )
      ) {
        setKonami(true);
        seq.current = [];
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Idle detection
  useEffect(() => {
    const clear = () => {
      if (t30.current) clearTimeout(t30.current);
      if (t60.current) clearTimeout(t60.current);
    };
    const schedule = () => {
      clear();
      t30.current = setTimeout(() => setIdleMsg("You Still There?"), 30000);
      t60.current = setTimeout(
        () => setIdleMsg("Good. Counts As Engagement."),
        60000
      );
    };
    const onActivity = () => {
      setIdleMsg((cur) => (cur ? null : cur));
      schedule();
    };
    const events = ["mousemove", "keydown", "scroll", "touchstart", "click"];
    events.forEach((ev) =>
      window.addEventListener(ev, onActivity, { passive: true })
    );
    schedule();
    return () => {
      clear();
      events.forEach((ev) => window.removeEventListener(ev, onActivity));
    };
  }, []);

  return (
    <>
      {/* Konami full-screen reveal */}
      {konamiP.mounted && (
        <div
          className={`fixed inset-0 z-[95] flex flex-col items-center justify-center bg-ink/97 backdrop-blur-md transition-opacity duration-300 ${
            konamiP.visible ? "opacity-100 ov-fade" : "opacity-0"
          }`}
          onClick={() => setKonami(false)}
        >
          <div className="spotlight" />
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="papa-flash"
              style={{
                top: `${10 + ((i * 37) % 80)}%`,
                left: `${(i * 53) % 90}%`,
                animationDelay: `${i * 0.4}s`,
              }}
            />
          ))}
          <div
            className={`w-48 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] sm:w-64 ${
              konamiP.visible ? "scale-100 opacity-100 ov-pop" : "scale-50 opacity-0"
            }`}
          >
            <Image
              src={badge}
              alt="Cornstar"
              sizes="256px"
              className="h-auto w-full rounded-full drop-shadow-[0_0_60px_rgba(231,178,76,0.5)]"
            />
          </div>
          <p
            className={`mt-6 text-center font-display text-4xl uppercase leading-none gold-text gold-glow transition-all delay-100 duration-500 sm:text-6xl ${
              konamiP.visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
          >
            You Found
            <br />
            The Secret Cob.
          </p>
          <p className="mt-6 font-mono text-[0.65rem] uppercase tracking-[0.3em] text-cream-dim/60">
            Tap anywhere to return to greatness
          </p>
        </div>
      )}

      {/* Idle Cornstar bubble */}
      {idleP.mounted && (
        <div
          className={`fixed bottom-6 left-6 z-[66] flex items-center gap-3 rounded-2xl border border-gold/25 bg-ink-2/95 p-3 pr-5 shadow-2xl backdrop-blur transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            idleP.visible ? "translate-y-0 opacity-100 ov-rise" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="floaty h-12 w-12 shrink-0 overflow-hidden rounded-full">
            <Image src={badge} alt="Cornstar" sizes="48px" className="h-full w-full object-cover" />
          </div>
          <p className="max-w-[180px] font-display text-lg uppercase leading-tight gold-text">
            {idleMsg ?? shownMsg.current}
          </p>
        </div>
      )}
    </>
  );
}
