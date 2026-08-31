"use client";

const ITEMS = [
  "CORNSTAR DENIES RETIREMENT RUMORS FOR 14TH CONSECUTIVE YEAR",
  'CORNSTAR: "I\'M IN MY PRIME." AGRICULTURAL EXPERTS DECLINE COMMENT',
  "KERNEL PASSES CORNSTAR IN FOLLOWERS — CORNSTAR REQUESTS AUDIT",
  "PUSSYIMONE SEEN LEAVING PRODUCEWOOD CHATEAU — SHE WAS GETTING COFFEE",
  "CORNSTAR DOCUMENTARY NOW 417% OVER BUDGET",
  "FILMMAKER REQUESTS TRANSFER TO NATURE DOCUMENTARY",
  "CORNSTAR ANNOUNCES COMEBACK TOUR DESPITE NEVER HAVING TOURED",
  'USDA REFUSES TO COMMENT ON CORNSTAR\'S "GENETIC SUPERIORITY" CLAIM',
];

export default function NewsTicker() {
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div className="relative z-30 border-y border-gold/25 bg-carpet">
      <div className="marquee flex items-stretch overflow-hidden">
        <div className="marquee-track">
          {loop.map((t, i) => (
            <span key={i} className="flex items-center">
              <span className="mx-5 my-2.5 rounded-sm bg-ink px-2 py-0.5 font-mono text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-gold">
                Breaking
              </span>
              <span className="whitespace-nowrap py-2.5 font-mono text-[0.72rem] font-medium uppercase tracking-[0.14em] text-cream">
                {t}
              </span>
              <span aria-hidden className="mx-4 text-gold/60">
                ✦
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
