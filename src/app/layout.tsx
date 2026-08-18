import type { Metadata } from "next";
import { Cormorant_Garamond, Raleway } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Renora Jewels — Timeless Elegance",
  description:
    "Exquisite diamonds. Exceptional craftsmanship. Made for your most precious moments.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${raleway.variable}`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-52W6P6SRXM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-52W6P6SRXM');
          `}
        </Script>
      </head>
      <body className="flex flex-col min-h-screen">
        <TopBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
