"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { usePresence } from "@/components/ui/usePresence";
import ScrollProgress from "@/components/ui/ScrollProgress";
import wordmark from "@/assets/cornstar-wordmark.png";

const LINKS = [
  { href: "/the-legend", label: "The Legend" },
  { href: "/pussyimone", label: "Pussyimone" },
  { href: "/kernel", label: "Kernel" },
  { href: "/the-film", label: "The Film" },
  { href: "/news", label: "News" },
  { href: "/#merch", label: "Merch" },
];

export default function Nav({ alwaysVisible = false }: { alwaysVisible?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const menuP = usePresence(menu);
  const show = alwaysVisible || scrolled;

  useEffect(() => {
    if (alwaysVisible) return;
    const onScroll = () => setScrolled(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [alwaysVisible]);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu]);

  return (
    <>
      <ScrollProgress />
      <motion.header
        initial={false}
        animate={{ y: show ? 0 : -80, opacity: show ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-[70] border-b border-gold/15 bg-ink/85 backdrop-blur-md"
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5">
          <Link href="/" aria-label="Cornstar — home" className="shrink-0">
            <Image
              src={wordmark}
              alt="Cornstar"
              priority
              sizes="150px"
              className="h-11 w-auto"
            />
          </Link>
          <div className="hidden items-center gap-7 md:flex">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-cream-dim transition hover:text-gold"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/#inner-cob"
              className="btn-gold rounded-full px-5 py-2 text-[0.7rem]"
            >
              Inner Cob
            </Link>
          </div>
          <button
            className="-mr-2 p-2 text-gold md:hidden"
            onClick={() => setMenu(true)}
            aria-label="Open menu"
          >
            <Menu size={26} />
          </button>
        </nav>
      </motion.header>

      {menuP.mounted && (
        <div
          className={`fixed inset-0 z-[90] flex flex-col bg-ink/97 px-6 pt-6 backdrop-blur-lg transition-opacity duration-300 md:hidden ${
            menuP.visible ? "opacity-100 ov-fade" : "opacity-0"
          }`}
        >
          <div className="flex items-center justify-between">
            <Image src={wordmark} alt="Cornstar" sizes="150px" className="h-10 w-auto" />
            <button
              onClick={() => setMenu(false)}
              aria-label="Close menu"
              className="-mr-2 p-2 text-gold"
            >
              <X size={28} />
            </button>
          </div>
          <div className="mt-14 flex flex-col gap-6">
            {LINKS.concat({ href: "/#inner-cob", label: "Inner Cob" }).map(
              (l, i) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenu(false)}
                  style={{
                    transitionDelay: menuP.visible ? `${0.05 * i + 0.05}s` : "0s",
                  }}
                  className={`font-display text-4xl uppercase text-cream transition-all duration-300 hover:text-gold ${
                    menuP.visible
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-5 opacity-0"
                  }`}
                >
                  {l.label}
                </Link>
              )
            )}
          </div>
          <p className="mt-auto pb-10 pt-14 font-mono text-xs uppercase tracking-[0.3em] text-gold/60">
            The OG Isn&apos;t Done Yet
          </p>
        </div>
      )}
    </>
  );
}
