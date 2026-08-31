import ModalProvider from "@/components/ui/ModalProvider";
import Loader from "@/components/sections/Loader";
import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import NewsTicker from "@/components/sections/NewsTicker";
import LegendStats from "@/components/sections/LegendStats";
import About from "@/components/sections/About";
import Timeline from "@/components/sections/Timeline";
import Pussyimone from "@/components/sections/Pussyimone";
import KernelThreat from "@/components/sections/KernelThreat";
import Documentary from "@/components/sections/Documentary";
import CobCode from "@/components/sections/CobCode";
import Merch from "@/components/sections/Merch";
import Press from "@/components/sections/Press";
import CSNN from "@/components/sections/CSNN";
import Newsletter from "@/components/sections/Newsletter";
import Footer from "@/components/sections/Footer";
import EasterEggs from "@/components/sections/EasterEggs";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Cornstar",
  alternateName: "The OG",
  jobTitle: "Cultural Institution",
  description:
    "The self-proclaimed greatest adult entertainment star in produce history. America's most decorated vegetable.",
  homeLocation: { "@type": "Place", name: "Producewood" },
  award: "1,847 Industry Awards (self-reported)",
  knowsAbout: ["Legacy", "Confidence", "Butter", "Not Retiring"],
  sameAs: ["https://instagram.com/TheRealCornstar"],
};

export default function Home() {
  return (
    <ModalProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Loader />
      <Nav />
      <main>
        <Hero />
        <NewsTicker />
        <LegendStats />
        <About />
        <Timeline />
        <Pussyimone />
        <KernelThreat />
        <Documentary />
        <CobCode />
        <Merch />
        <Press />
        <CSNN />
        <Newsletter />
      </main>
      <Footer />
      <EasterEggs />
    </ModalProvider>
  );
}
