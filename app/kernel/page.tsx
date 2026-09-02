import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import KernelContent from "@/components/pages/KernelContent";

export const metadata: Metadata = {
  title: "Kernel",
  description:
    "2.4 billion views. Zero respect for the old ways. Meet Kernel — the young, genetically-perfect corn currently ruining Cornstar's week.",
};

export default function KernelPage() {
  return (
    <PageShell>
      <KernelContent />
    </PageShell>
  );
}
