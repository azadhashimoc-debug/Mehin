import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { siteContent } from "@/data/content";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteContent.meta.title,
    template: "%s — Mehin İsmayılova",
  },
  description: siteContent.meta.description,
  metadataBase: new URL(siteContent.meta.siteUrl),
  openGraph: {
    title: siteContent.meta.ogTitle,
    description: siteContent.meta.ogDescription,
    url: siteContent.meta.siteUrl,
    siteName: "Mehin İsmayılova",
    locale: "az_AZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.meta.ogTitle,
    description: siteContent.meta.ogDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="az" className={`${cormorant.variable} ${jakarta.variable}`}>
      <body className="font-sans bg-ivory text-charcoal flex flex-col min-h-screen antialiased selection:bg-champagne selection:text-ivory">
        <Navbar />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
