"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { Play, ChevronDown } from "lucide-react";
import { useModal } from "@/components/ui/ModalProvider";
import logoArt from "@/assets/cornstar-logo.png";

function Flashes() {
  const spots = [
    { top: "18%", left: "12%", d: "0s" },
    { top: "26%", left: "84%", d: "1.4s" },
    { top: "62%", left: "8%", d: "2.6s" },
    { top: "70%", left: "88%", d: "3.4s" },
    { top: "12%", left: "62%", d: "4.1s" },
    { top: "54%", left: "72%", d: "2.0s" },
  ];
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      {spots.map((s, i) => (
        <span
          key={i}
          className="papa-flash"
          style={{ top: s.top, left: s.left, animationDelay: s.d }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { open } = useModal();
  const [clicks, setClicks] = useState(0);
  const [sparkle, setSparkle] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const artY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -90]);

  const onChain = () => {
    const n = clicks + 1;
    setClicks(n);
    if (n >= 5) {
      setSparkle(true);
      setTimeout(() => setSparkle(false), 1400);
      setClicks(0);
      open({
        kicker: "Estimated Appraisal",
        title: (
          <>
            $47,000.
            <br />
            Don&apos;t Touch It.
          </>
        ),
        body: "That is the chain. The chain is not for sale. The chain has its own insurance policy. The chain has been to the Grammys. You have not.",
      });
    }
  };

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 pb-10 pt-20"
    >
      <div className="spotlight" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 38%, rgba(231,178,76,0.12), transparent 70%)",
        }}
      />
      <Flashes />

      <h1 className="sr-only">
        Cornstar — The OG Isn&apos;t Done Yet. The official website of the
        world&apos;s most influential corn-based entertainer.
      </h1>

      {/* Official CORNSTAR logo art */}
      <motion.div
        style={{ y: artY }}
        initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        className="relative z-10 w-[94vw] max-w-3xl"
      >
        <div className="floaty">
          <Image
            src={logoArt}
            alt="Cornstar, an anthropomorphic ear of corn in aviators, gold OG crown and diamond OG chain — The OG Isn't Done Yet"
            priority
            placeholder="blur"
            sizes="(max-width: 768px) 94vw, 768px"
            className="h-auto w-full select-none drop-shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
          />
        </div>

        {/* Invisible clickable OG chain hit-area */}
        <button
          aria-label="The OG chain"
          onClick={onChain}
          className="absolute left-1/2 top-[34%] h-[12%] w-[24%] -translate-x-1/2 cursor-pointer rounded-full"
        />

        {sparkle && (
          <div className="pointer-events-none absolute left-1/2 top-[38%] -translate-x-1/2">
            {Array.from({ length: 16 }).map((_, i) => (
              <span
                key={i}
                className="absolute block h-2 w-2 rounded-full bg-gold-hi"
                style={{
                  boxShadow: "0 0 10px 3px rgba(247,221,143,0.9)",
                  transform: `rotate(${(360 / 16) * i}deg) translateY(-52px)`,
                  animation: `sparkle-pop 1.2s ${i * 0.03}s ease-out both`,
                }}
              />
            ))}
          </div>
        )}
      </motion.div>

      {/* CTAs */}
      <div className="relative z-20 mt-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="flex flex-col items-center gap-3 sm:flex-row"
        >
          <a href="#legend" className="btn-gold rounded-full px-8 py-3.5 text-sm">
            Enter The Legend
          </a>
          <a
            href="#documentary"
            className="btn-ghost inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm"
          >
            <Play size={15} className="fill-current" />
            Watch The Comeback
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="mt-8 max-w-xs font-mono text-[0.65rem] uppercase leading-relaxed tracking-[0.25em] text-cream-dim/70"
        >
          Official website of the world&apos;s most influential corn-based
          entertainer.
        </motion.p>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gold/50"
        animate={reduce ? {} : { y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={26} />
      </motion.div>
    </section>
  );
}
