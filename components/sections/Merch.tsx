"use client";

import { useEffect, useMemo, useState } from "react";
import { ShoppingBag, Plus, Minus, X, Check } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { useModal } from "@/components/ui/ModalProvider";
import { usePresence } from "@/components/ui/usePresence";

type Kind = "apparel" | "hat" | "mug" | "candle" | "chain";
type Product = {
  id: string;
  name: string;
  print?: string;
  desc?: string;
  price: number;
  kind: Kind;
  badge?: string;
  tint: string;
};

const PRODUCTS: Product[] = [
  {
    id: "chain",
    name: "The OG Chain",
    price: 47000,
    kind: "chain",
    badge: "Limited Harvest",
    tint: "#1b1710",
  },
  {
    id: "hoodie",
    name: "The OG Hoodie",
    print: "The OG Isn't Done Yet",
    price: 120,
    kind: "apparel",
    badge: "Personally Approved By Cornstar",
    tint: "#101010",
  },
  {
    id: "hat",
    name: "Stay Kernel Cap",
    print: "Stay Kernel",
    price: 45,
    kind: "hat",
    tint: "#2a2410",
  },
  {
    id: "bigcob",
    name: "Big Cob Energy Tee",
    print: "Big Cob Energy",
    price: 40,
    kind: "apparel",
    badge: "Absolutely Necessary",
    tint: "#161616",
  },
  {
    id: "mom",
    name: "Recognition Tee",
    print: "Your Mom Knows Who I Am",
    price: 42,
    kind: "apparel",
    tint: "#0e0e0e",
  },
  {
    id: "mug",
    name: "Humble Legend Mug",
    print: "World's Most Humble Legend",
    price: 28,
    kind: "mug",
    tint: "#20180d",
  },
  {
    id: "candle",
    name: "COB No. 5",
    desc: "Notes of cedar, leather, butter and unresolved insecurity.",
    price: 149,
    kind: "candle",
    badge: "Personally Approved By Cornstar",
    tint: "#241a0c",
  },
];

function ProductVisual({ p }: { p: Product }) {
  return (
    <div
      className="relative flex aspect-[4/3] items-center justify-center overflow-hidden"
      style={{ background: `linear-gradient(160deg, ${p.tint}, #060504)` }}
    >
      <div className="spotlight" />
      {p.kind === "chain" && (
        <svg viewBox="0 0 200 150" className="w-3/5">
          <defs>
            <linearGradient id="mgold" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#f7dd8f" />
              <stop offset="1" stopColor="#a9761f" />
            </linearGradient>
          </defs>
          <path
            d="M40 30 C40 90 100 118 100 118 C100 118 160 90 160 30"
            stroke="url(#mgold)"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
          />
          <rect x="72" y="96" width="56" height="34" rx="7" fill="url(#mgold)" />
          <text
            x="100"
            y="120"
            textAnchor="middle"
            fontFamily="var(--font-anton)"
            fontSize="22"
            fill="#3a2708"
          >
            OG
          </text>
        </svg>
      )}
      {p.kind === "candle" && (
        <svg viewBox="0 0 120 150" className="h-3/4">
          <rect x="34" y="48" width="52" height="86" rx="6" fill="#efe6cf" />
          <rect x="34" y="48" width="52" height="86" rx="6" fill="none" stroke="#c9bb96" />
          <text x="60" y="98" textAnchor="middle" fontFamily="var(--font-anton)" fontSize="13" fill="#7a5a1f">
            COB
          </text>
          <text x="60" y="114" textAnchor="middle" fontFamily="var(--font-anton)" fontSize="11" fill="#7a5a1f">
            N°5
          </text>
          <rect x="57" y="34" width="6" height="14" fill="#3a2708" />
          <path d="M60 24 C64 30 64 34 60 34 C56 34 56 30 60 24 Z" fill="#e7b24c" />
        </svg>
      )}
      {p.kind === "mug" && (
        <svg viewBox="0 0 160 140" className="w-3/5">
          <rect x="34" y="34" width="74" height="78" rx="10" fill="#f0eadd" />
          <path d="M108 52 h16 a14 14 0 0 1 0 40 h-16" fill="none" stroke="#f0eadd" strokeWidth="9" />
          <text x="71" y="80" textAnchor="middle" fontFamily="var(--font-anton)" fontSize="9" fill="#2a1e06">
            HUMBLE
          </text>
          <text x="71" y="94" textAnchor="middle" fontFamily="var(--font-anton)" fontSize="9" fill="#2a1e06">
            LEGEND
          </text>
        </svg>
      )}
      {(p.kind === "apparel" || p.kind === "hat") && (
        <div className="px-6 text-center">
          <p className="font-display text-2xl uppercase leading-none gold-text sm:text-3xl">
            {p.print}
          </p>
          <p className="mt-3 font-mono text-[0.55rem] uppercase tracking-[0.3em] text-cream-dim/50">
            {p.kind === "hat" ? "Embroidered Cap" : "Heavyweight Cotton"}
          </p>
        </div>
      )}
    </div>
  );
}

export default function Merch() {
  const { open } = useModal();
  const [cart, setCart] = useState<Record<string, number>>({});
  const [drawer, setDrawer] = useState(false);
  const [added, setAdded] = useState<string | null>(null);

  // Persist the cart across page visits.
  useEffect(() => {
    try {
      const saved = localStorage.getItem("cs_cart");
      if (saved) setCart(JSON.parse(saved));
    } catch {}
  }, []);
  useEffect(() => {
    try {
      localStorage.setItem("cs_cart", JSON.stringify(cart));
    } catch {}
  }, [cart]);

  const count = useMemo(
    () => Object.values(cart).reduce((a, b) => a + b, 0),
    [cart]
  );
  const pill = usePresence(count > 0);
  const drawerP = usePresence(drawer);
  const total = useMemo(
    () =>
      Object.entries(cart).reduce((sum, [id, q]) => {
        const p = PRODUCTS.find((x) => x.id === id);
        return sum + (p ? p.price * q : 0);
      }, 0),
    [cart]
  );

  const add = (id: string) => {
    setCart((c) => ({ ...c, [id]: (c[id] ?? 0) + 1 }));
    setAdded(id);
    setTimeout(() => setAdded((a) => (a === id ? null : a)), 1000);
  };
  const remove = (id: string) =>
    setCart((c) => {
      const n = { ...c };
      delete n[id];
      return n;
    });
  const setQty = (id: string, delta: number) =>
    setCart((c) => {
      const q = (c[id] ?? 0) + delta;
      if (q <= 0) {
        const n = { ...c };
        delete n[id];
        return n;
      }
      return { ...c, [id]: q };
    });

  return (
    <section id="merch" className="relative scroll-mt-24 bg-ink-2 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal className="mb-14 text-center">
          <p className="chip">The Cornstar Collection</p>
          <h2 className="mt-3 font-display text-5xl uppercase leading-none text-cream sm:text-7xl">
            Wear The <span className="gold-text gold-glow">Legend</span>
          </h2>
          <p className="mt-4 font-serif italic text-cream-dim">
            Every piece personally endorsed by a corn who has never once doubted
            himself.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 0.08} className="h-full">
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gold/15 bg-ink transition hover:border-gold/45">
                <div className="relative">
                  <ProductVisual p={p} />
                  {p.badge && (
                    <span className="absolute left-3 top-3 rounded-full bg-gold px-3 py-1 font-mono text-[0.55rem] font-semibold uppercase tracking-[0.15em] text-ink">
                      {p.badge}
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-xl uppercase text-cream">
                    {p.name}
                  </h3>
                  {p.desc && (
                    <p className="mt-1 font-serif text-sm italic text-cream-dim">
                      {p.desc}
                    </p>
                  )}
                  <div className="mt-auto flex items-center justify-between pt-5">
                    <span className="font-display text-2xl gold-text">
                      ${p.price.toLocaleString("en-US")}
                    </span>
                    <button
                      onClick={() => add(p.id)}
                      className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 px-4 py-2.5 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-cream transition hover:bg-gold hover:text-ink"
                    >
                      {added === p.id ? (
                        <>
                          <Check size={13} /> Added
                        </>
                      ) : (
                        <>
                          <Plus size={13} /> Add
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Floating cart */}
      {pill.mounted && (
        <button
          onClick={() => setDrawer(true)}
          className={`btn-gold fixed bottom-6 right-6 z-[65] flex items-center gap-2 rounded-full px-5 py-3.5 text-sm shadow-2xl transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            pill.visible ? "scale-100 opacity-100 ov-scale" : "scale-0 opacity-0"
          }`}
        >
          <ShoppingBag size={17} />
          {count} · ${total.toLocaleString("en-US")}
        </button>
      )}

      {drawerP.mounted && (
        <div className="fixed inset-0 z-[85] flex justify-end">
          <div
            className={`absolute inset-0 bg-black/70 transition-opacity duration-300 ${
              drawerP.visible ? "opacity-100 ov-fade" : "opacity-0"
            }`}
            onClick={() => setDrawer(false)}
          />
          <aside
            className={`relative flex h-full w-full max-w-sm flex-col border-l border-gold/20 bg-ink-2 p-6 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              drawerP.visible ? "translate-x-0 ov-slide-right" : "translate-x-full"
            }`}
          >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl uppercase gold-text">
                  Your Cart
                </h3>
                <button
                  onClick={() => setDrawer(false)}
                  className="text-cream-dim hover:text-gold"
                  aria-label="Close cart"
                >
                  <X size={22} />
                </button>
              </div>
              <div className="mt-6 flex-1 space-y-3 overflow-y-auto">
                {Object.entries(cart).map(([id, q]) => {
                  const p = PRODUCTS.find((x) => x.id === id)!;
                  return (
                    <div
                      key={id}
                      className="rounded-lg border border-gold/10 bg-ink p-3"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <p className="font-display text-sm uppercase leading-tight text-cream">
                          {p.name}
                        </p>
                        <button
                          onClick={() => remove(id)}
                          className="-m-1 shrink-0 p-1 text-cream-dim hover:text-carpet-hi"
                          aria-label={`Remove ${p.name}`}
                        >
                          <X size={16} />
                        </button>
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center gap-1 rounded-full border border-gold/20">
                          <button
                            onClick={() => setQty(id, -1)}
                            className="grid h-7 w-7 place-items-center rounded-full text-cream-dim transition hover:text-gold"
                            aria-label={`Decrease ${p.name}`}
                          >
                            <Minus size={13} />
                          </button>
                          <span className="w-6 text-center font-mono text-xs text-cream">
                            {q}
                          </span>
                          <button
                            onClick={() => setQty(id, 1)}
                            className="grid h-7 w-7 place-items-center rounded-full text-cream-dim transition hover:text-gold"
                            aria-label={`Increase ${p.name}`}
                          >
                            <Plus size={13} />
                          </button>
                        </div>
                        <span className="font-mono text-xs text-gold">
                          ${(p.price * q).toLocaleString("en-US")}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-4 border-t border-gold/15 pt-4">
                <div className="flex justify-between font-display text-xl uppercase">
                  <span className="text-cream-dim">Total</span>
                  <span className="gold-text">
                    ${total.toLocaleString("en-US")}
                  </span>
                </div>
                <button
                  onClick={() => {
                    setDrawer(false);
                    open({
                      kicker: "Order Under Review",
                      title: "Payment Pending Cornstar's Approval.",
                      body: "Your order has been forwarded to Cornstar personally. He likes to look each customer in the eye before accepting their money. Metaphorically. He has no eyes. He has aviators.",
                      resist: true,
                    });
                  }}
                  className="btn-gold mt-4 w-full rounded-full py-3.5 text-sm"
                >
                  Checkout
                </button>
                <p className="mt-3 text-center font-mono text-[0.6rem] uppercase tracking-[0.2em] text-cream-dim/50">
                  No refunds. Cornstar doesn&apos;t believe in them.
                </p>
              </div>
          </aside>
        </div>
      )}
    </section>
  );
}
