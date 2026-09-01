"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { X } from "lucide-react";

export type ModalConfig = {
  kicker?: string;
  title: ReactNode;
  body?: ReactNode;
  /** Cornstar doesn't believe in closure — first close attempt is refused. */
  resist?: boolean;
};

type Ctx = {
  open: (config: ModalConfig) => void;
  close: () => void;
};

const ModalCtx = createContext<Ctx | null>(null);

export function useModal() {
  const ctx = useContext(ModalCtx);
  if (!ctx) throw new Error("useModal must be used within ModalProvider");
  return ctx;
}

const EXIT_MS = 300;

export default function ModalProvider({ children }: { children: ReactNode }) {
  const [config, setConfig] = useState<ModalConfig | null>(null);
  const [visible, setVisible] = useState(false);
  const [resisted, setResisted] = useState(false);
  const exitTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const open = useCallback((c: ModalConfig) => {
    if (exitTimer.current) clearTimeout(exitTimer.current);
    setResisted(false);
    setConfig(c);
    // Mount already-visible; the enter animation is a CSS @keyframes (ov-*),
    // which is reliable regardless of tab focus / rAF throttling.
    setVisible(true);
  }, []);

  const close = useCallback(() => {
    setVisible(false);
    if (exitTimer.current) clearTimeout(exitTimer.current);
    exitTimer.current = setTimeout(() => {
      setConfig(null);
      setResisted(false);
    }, EXIT_MS);
  }, []);

  const attemptClose = useCallback(() => {
    if (config?.resist && !resisted) {
      setResisted(true);
      return;
    }
    close();
  }, [config, resisted, close]);

  useEffect(() => {
    if (!config) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") attemptClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [config, attemptClose]);

  useEffect(() => () => {
    if (exitTimer.current) clearTimeout(exitTimer.current);
  }, []);

  return (
    <ModalCtx.Provider value={{ open, close }}>
      {children}
      {config && (
        <div
          className={`fixed inset-0 z-[80] flex items-center justify-center p-5 transition-opacity duration-300 ${
            visible ? "opacity-100 ov-fade" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={attemptClose}
            aria-hidden
          />
          <div
            role="dialog"
            aria-modal="true"
            className={`deco-frame relative z-10 w-full max-w-lg rounded-2xl bg-ink-2 p-8 text-center shadow-2xl transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] sm:p-10 ${
              visible
                ? "translate-y-0 scale-100 opacity-100 ov-pop"
                : "translate-y-3 scale-95 opacity-0"
            }`}
          >
            <div className="pointer-events-none absolute inset-x-8 -top-px h-px gold-rule" />
            <button
              onClick={attemptClose}
              aria-label="Close"
              className="absolute right-2 top-2 p-2 text-cream-dim transition hover:text-gold"
            >
              <X size={22} />
            </button>

            {resisted && config.resist ? (
              <div className="py-4">
                <p className="chip mb-4">Cornstar Entertainment</p>
                <p className="font-display text-3xl uppercase leading-tight gold-text gold-glow sm:text-4xl">
                  Cornstar Doesn&apos;t
                  <br />
                  Believe In Closure.
                </p>
                <button
                  onClick={close}
                  className="btn-ghost mt-8 rounded-full px-6 py-2.5 text-sm"
                >
                  Fine. Close It.
                </button>
              </div>
            ) : (
              <div className="py-2">
                {config.kicker && <p className="chip mb-4">{config.kicker}</p>}
                <div className="font-display text-3xl uppercase leading-tight gold-text gold-glow sm:text-4xl">
                  {config.title}
                </div>
                {config.body && (
                  <div className="mt-5 font-serif text-lg text-cream-dim">
                    {config.body}
                  </div>
                )}
                <button
                  onClick={attemptClose}
                  className="btn-gold mt-8 rounded-full px-7 py-2.5 text-sm"
                >
                  Understood
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </ModalCtx.Provider>
  );
}
