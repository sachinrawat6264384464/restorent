import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Aurelia | Haute Gastronomie & Fine Dining Experience",
  description: "Experience the pinnacle of culinary excellence at Aurelia. Discover our Michelin-starred chef, bespoke fine dining options, private events, and a luxurious dark-ambient lounge.",
  keywords: ["fine dining", "Michelin star restaurant", "Aurelia restaurant", "luxury dining", "gourmet kitchen", "exclusive table booking", "chef signature menu"],
  authors: [{ name: "Aurelia Culinary Group" }],
  openGraph: {
    title: "Aurelia | Haute Gastronomie & Fine Dining Experience",
    description: "Indulge in a curated culinary journey with exceptional gold-dusted dishes and premium service.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${outfit.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[#050505] text-[#f7f7f7] font-sans selection:bg-gold-primary/30 selection:text-gold-bright flex flex-col">
        {children}
      </body>
    </html>
  );
}
