import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import FilmContent from "@/components/pages/FilmContent";

export const metadata: Metadata = {
  title: "Behind The Cob — The Film",
  description:
    "A prestige documentary about legacy, and a filmmaker who just wanted to go home. Originally a three-day shoot. Now 417% over budget.",
};

export default function TheFilmPage() {
  return (
    <PageShell>
      <FilmContent />
    </PageShell>
  );
}
