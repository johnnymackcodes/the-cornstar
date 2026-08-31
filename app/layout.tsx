import type { Metadata, Viewport } from "next";
import { Anton, Playfair_Display, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const plexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-plex-mono",
  display: "swap",
});

const SITE = "https://cornstar.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "CORNSTAR™ | The OG Isn't Done Yet",
    template: "%s | CORNSTAR™",
  },
  description:
    "The official home of Cornstar™ — legend, icon, cultural vegetable. The OG isn't done yet.",
  keywords: [
    "Cornstar",
    "the OG",
    "Producewood",
    "Kernel",
    "Pussyimone",
    "legend",
    "comeback",
  ],
  authors: [{ name: "Cornstar Entertainment" }],
  openGraph: {
    title: "CORNSTAR™ | The OG Isn't Done Yet",
    description:
      "The official home of Cornstar™ — legend, icon, cultural vegetable. America's most decorated vegetable.",
    url: SITE,
    siteName: "CORNSTAR™",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CORNSTAR™ | The OG Isn't Done Yet",
    description:
      "The official home of Cornstar™ — legend, icon, cultural vegetable. The OG isn't done yet.",
    creator: "@TheRealCornstar",
  },
  robots: { index: true, follow: true },
  category: "entertainment",
};

export const viewport: Viewport = {
  themeColor: "#0a0806",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${anton.variable} ${playfair.variable} ${inter.variable} ${plexMono.variable} grain vignette antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
