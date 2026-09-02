"use client";

import type { ReactNode } from "react";
import ModalProvider from "@/components/ui/ModalProvider";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import EasterEggs from "@/components/sections/EasterEggs";

export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <ModalProvider>
      <Nav alwaysVisible />
      <main className="pt-[68px]">{children}</main>
      <Footer />
      <EasterEggs />
    </ModalProvider>
  );
}
