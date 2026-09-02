import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import LegendContent from "@/components/pages/LegendContent";

export const metadata: Metadata = {
  title: "The Legend — The Whole Damn Cob",
  description:
    "The completely unauthorized authorized biography of Cornstar™ — seven chapters of ego, legacy, and one redacted year.",
};

export default function TheLegendPage() {
  return (
    <PageShell>
      <LegendContent />
    </PageShell>
  );
}
