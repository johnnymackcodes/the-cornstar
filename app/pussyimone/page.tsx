import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import PussyimoneContent from "@/components/pages/PussyimoneContent";

export const metadata: Metadata = {
  title: "Pussyimone",
  description:
    "Model. Entrepreneur. Persimmon. Meet Pussyimone — the only living organism who can tell Cornstar™ he's wrong and survive.",
};

export default function PussyimonePage() {
  return (
    <PageShell>
      <PussyimoneContent />
    </PageShell>
  );
}
