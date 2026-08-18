import type { Metadata } from "next";
import { Cormorant_Garamond, Raleway } from "next/font/google";
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
  metadataBase: new URL("https://www.renorajewels.in"),
  title: {
    default: "Renora Jewels — Fine Diamond Jewellery | renorajewels.in",
    template: "%s | Renora Jewels",
  },
  description:
    "Renora Jewels — Shop certified diamond rings, necklaces, earrings, bangles and custom jewellery. Timeless elegance, exceptional craftsmanship. Visit renorajewels.in.",
  keywords: [
    "Renora Jewels",
    "Renora",
    "renorajewels.in",
    "jewels",
    "diamond jewellery",
    "fine jewellery India",
    "certified diamonds",
    "diamond rings India",
    "gold necklaces",
    "custom jewellery",
    "engagement rings India",
    "diamond earrings",
    "bridal jewellery India",
    "diamond bangles",
    "jewellery store India",
  ],
  authors: [{ name: "Renora Jewels", url: "https://www.renorajewels.in" }],
  creator: "Renora Jewels",
  publisher: "Renora Jewels",
  icons: {
    icon: "/logo/logo.png",
    apple: "/logo/logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.renorajewels.in",
    siteName: "Renora Jewels",
    title: "Renora Jewels — Fine Diamond Jewellery",
    description:
      "Shop certified diamond rings, necklaces, earrings, bangles and custom jewellery. Timeless elegance at renorajewels.in.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Renora Jewels — Fine Diamond Jewellery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Renora Jewels — Fine Diamond Jewellery",
    description:
      "Shop certified diamond rings, necklaces, earrings and more at renorajewels.in.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.renorajewels.in",
  },
  verification: {
    google: "8sCXY2zrj3e-6kezlMhZkZX-QILmF10u389jAPB6tYE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${raleway.variable}`}>
      <head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-52W6P6SRXM" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-52W6P6SRXM');
            `,
          }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "JewelryStore",
              name: "Renora Jewels",
              url: "https://www.renorajewels.in",
              logo: "https://www.renorajewels.in/logo/logo.png",
              image: "https://www.renorajewels.in/og-image.jpg",
              description:
                "Shop certified diamond rings, necklaces, earrings, bangles and custom jewellery. Timeless elegance, exceptional craftsmanship at renorajewels.in.",
              telephone: "+91-XXXXXXXXXX",
              email: "hello@renorajewels.in",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
              sameAs: [
                "https://www.instagram.com/renorajewels",
                "https://www.facebook.com/renorajewels",
              ],
              priceRange: "₹₹₹",
              currenciesAccepted: "INR",
              paymentAccepted: "Cash, Credit Card, UPI",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",
                ],
                opens: "10:00",
                closes: "20:00",
              },
            }),
          }}
        />
        <TopBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
