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
    "Renora Jewellery",
    "Renora Jewels India",
    "Renora Jewellery India",
    "Renora diamond jewellery",
    "Renora Jewels official",
    "diamond jewellery",
    "diamond jewelry",
    "fine jewellery",
    "fine jewelry",
    "fine diamond jewellery",
    "fine jewellery India",
    "fine jewelry India",
    "diamond jewellery India",
    "diamond jewelry India",
    "diamond jewellery online",
    "diamond jewelry online",
    "luxury jewellery",
    "luxury jewelry",
    "luxury jewellery India",
    "jewellery store India",
    "jewelry store India",
    "online jewellery store India",
    "online jewelry store India",
    "certified diamond jewellery",
    "certified diamond jewelry",
    "certified diamonds India",
    "natural diamond jewellery",
    "natural diamond jewelry",
    "diamond rings",
    "diamond rings India",
    "diamond rings online",
    "diamond ring India",
    "diamond engagement rings",
    "diamond engagement rings India",
    "engagement rings India",
    "engagement rings online",
    "solitaire diamond rings",
    "diamond earrings",
    "diamond earrings India",
    "diamond earrings online",
    "diamond necklaces",
    "diamond necklaces India",
    "diamond necklace online",
    "diamond pendants",
    "diamond pendants India",
    "diamond bangles",
    "diamond bangles India",
    "diamond bracelets",
    "diamond bracelets India",
    "gold jewellery",
    "gold jewelry",
    "gold jewellery India",
    "gold jewelry India",
    "gold diamond jewellery",
    "gold diamond jewelry",
    "bridal jewellery",
    "bridal jewelry",
    "bridal jewellery India",
    "bridal jewelry India",
    "wedding jewellery",
    "wedding jewelry",
    "wedding jewellery India",
    "wedding jewelry India",
    "diamond bridal jewellery",
    "diamond bridal jewelry",
    "custom jewellery",
    "custom jewelry",
    "custom jewellery India",
    "custom jewelry India",
    "bespoke jewellery",
    "bespoke jewelry",
    "bespoke jewellery India",
    "personalised jewellery",
    "personalized jewelry",
    "designer jewellery",
    "designer jewelry",
    "designer jewellery India",
    "designer jewelry India",
    "women's diamond jewellery",
    "women's diamond jewelry",
    "diamond jewellery for women",
    "diamond jewelry for women",
    "jewellery for women",
    "jewelry for women",
    "premium jewellery",
    "premium jewelry",
    "premium jewellery India",
    "premium jewelry India",
    "luxury diamond jewellery",
    "luxury diamond jewelry",
    "diamond jewellery brand India",
    "diamond jewelry brand India"
  ],
  authors: [{ name: "Renora Jewels", url: "https://www.renorajewels.in" }],
  creator: "Renora Jewels",
  publisher: "Renora Jewels",
  icons: {
    icon: [{ url: "/logo/logo.jpg", sizes: "any" }],
    apple: "/logo/logo.jpg",
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
        url: "/logo/logo.jpg",
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
    images: ["/logo/logo.jpg"],
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
              logo: "https://www.renorajewels.in/logo/logo.jpg",
              image: "https://www.renorajewels.in/logo/logo.jpg",
              description:
                "Shop certified diamond rings, necklaces, earrings, bangles and custom jewellery. Timeless elegance, exceptional craftsmanship at renorajewels.in.",
              telephone: "+91-8160149309",
              email: "info@renorajewels.in",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
              sameAs: [
                "https://www.instagram.com/renora.jewels",
                "https://www.facebook.com/jewels.renora",
              ],
              priceRange: "₹₹₹",
              currenciesAccepted: "USD, INR",
              paymentAccepted: "Cash, Credit Card, UPI, Debit Card, Net Banking",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                ],
                opens: "8:00",
                closes: "22:00",
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
