import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Renora Jewels",
  description:
    "Get in touch with Renora Jewels for enquiries about our diamond jewellery, custom designs, or orders. Reach us via email, phone, or WhatsApp at renorajewels.in.",
  alternates: { canonical: "https://www.renorajewels.in/contact" },
  openGraph: {
    title: "Contact Renora Jewels",
    description:
      "Have a question about our jewellery or custom designs? Contact the Renora Jewels team — we're here to help.",
    url: "https://www.renorajewels.in/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
