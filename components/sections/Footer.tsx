"use client";

import Image from "next/image";
import { useModal } from "@/components/ui/ModalProvider";
import wordmark from "@/assets/cornstar-wordmark.png";

function IgGlyph({ size = 15 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  const { open } = useModal();

  const links: { label: string; href?: string; onClick?: () => void }[] = [
    { label: "The Legend", href: "#legend" },
    { label: "Pussyimone", href: "#pussyimone" },
    { label: "Kernel", href: "#kernel" },
    { label: "The Film", href: "#documentary" },
    { label: "Merch", href: "#merch" },
    { label: "Press", href: "#press" },
    {
      label: "Legal",
      onClick: () =>
        open({
          kicker: "Cornstar Entertainment LLC",
          title: "Everything Is Fine, Legally.",
          body: "Most facts on this website are disputed. All of them are flattering. Cornstar's legal team consists of one very tired persimmon and a handshake.",
        }),
    },
    {
      label: "The Incident",
      onClick: () =>
        open({
          kicker: "Sealed Records",
          title: "We Don't Talk About 1998.",
          body: "You keep coming back to this. That is between you and your conscience now.",
          resist: true,
        }),
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-gold/15 bg-ink pt-20">
      <div className="spotlight" />
      <div className="relative mx-auto max-w-7xl px-5">
        <div className="text-center">
          <h2 className="sr-only">Cornstar</h2>
          <Image
            src={wordmark}
            alt="Cornstar"
            sizes="(max-width: 768px) 92vw, 900px"
            className="mx-auto h-auto w-full max-w-3xl drop-shadow-[0_0_50px_rgba(231,178,76,0.12)]"
          />
          <p className="mt-4 font-display text-lg uppercase tracking-[0.3em] text-cream-dim sm:text-2xl">
            The OG Isn&apos;t Done Yet.
          </p>
        </div>

        <div className="mt-16 gold-rule" />

        <div className="flex flex-col items-center justify-between gap-8 py-10 md:flex-row md:items-start">
          <nav className="grid grid-cols-2 gap-x-10 gap-y-3 text-center sm:grid-cols-4 md:text-left">
            {links.map((l) =>
              l.href ? (
                <a
                  key={l.label}
                  href={l.href}
                  className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-cream-dim transition hover:text-gold"
                >
                  {l.label}
                </a>
              ) : (
                <button
                  key={l.label}
                  onClick={l.onClick}
                  className="text-left font-mono text-[0.7rem] uppercase tracking-[0.2em] text-cream-dim transition hover:text-gold"
                >
                  {l.label}
                </button>
              )
            )}
          </nav>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gold/25 px-5 py-2.5 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-cream transition hover:border-gold hover:text-gold"
          >
            <IgGlyph size={15} />
            @TheRealCornstar
          </a>
        </div>

        <div className="border-t border-gold/10 py-10 text-center">
          <p className="font-mono text-[0.62rem] uppercase leading-relaxed tracking-[0.15em] text-cream-dim/60">
            © 2026 Cornstar Entertainment. All Rights Reserved. Most Facts
            Disputed.
          </p>
          <p className="mt-2 font-mono text-[0.62rem] uppercase leading-relaxed tracking-[0.15em] text-cream-dim/40">
            No Corn Was Emotionally Prepared For The Making Of This Website.
          </p>
          <p className="mx-auto mt-5 max-w-md font-mono text-[0.6rem] leading-relaxed text-cream-dim/40">
            Cornstar™ is a fictional character. Please do not contact the
            Department of Agriculture.
          </p>
        </div>
      </div>
    </footer>
  );
}
