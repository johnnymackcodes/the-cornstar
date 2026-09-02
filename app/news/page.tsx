import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import NewsIndexContent from "@/components/pages/NewsIndexContent";

export const metadata: Metadata = {
  title: "CSNN — The Cornstar News Network",
  description:
    "Fair. Balanced. Extremely Pro-Cornstar. Breaking produce news, investigations into Big Kernel, and a 104% approval rating.",
};

export default function NewsPage() {
  return (
    <PageShell>
      <NewsIndexContent />
    </PageShell>
  );
}
