import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Jewellery Design — Create Your Dream Piece",
  description:
    "Design bespoke diamond jewellery with Renora Jewels. Share your idea, approve the design, and receive a one-of-a-kind certified diamond piece crafted just for you.",
  alternates: { canonical: "https://www.renorajewels.in/custom" },
  openGraph: {
    title: "Custom Jewellery Design — Renora Jewels",
    description:
      "Bring your dream jewellery to life with Renora Jewels. Bespoke certified diamond pieces designed and crafted exclusively for you.",
    url: "https://www.renorajewels.in/custom",
  },
};

export default function CustomLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
