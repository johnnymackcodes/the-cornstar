import Link from "next/link";
import Image from "next/image";
import badge from "@/assets/cornstar-badge.png";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 text-center">
      <div className="spotlight" />
      <div className="floaty w-40 opacity-90 grayscale sm:w-52">
        <Image
          src={badge}
          alt="A disappointed Cornstar"
          placeholder="blur"
          sizes="208px"
          className="h-auto w-full rounded-full"
        />
      </div>
      <p className="mt-6 font-display text-[26vw] leading-none gold-text gold-glow sm:text-[16rem]">
        404
      </p>
      <h1 className="-mt-2 font-display text-3xl uppercase text-cream sm:text-5xl">
        You Got Lost In The Field.
      </h1>
      <p className="mt-4 max-w-md font-serif italic text-cream-dim">
        Cornstar is disappointed. Not angry. Disappointed. Which is worse, and he
        knows it.
      </p>
      <Link
        href="/"
        className="btn-gold mt-9 rounded-full px-8 py-3.5 text-sm"
      >
        Return To Greatness
      </Link>
    </main>
  );
}
