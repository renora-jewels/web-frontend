import type { Metadata } from "next";

const categoryMeta: Record<string, { title: string; description: string }> = {
  rings: {
    title: "Diamond Rings — Engagement, Solitaire & Band Rings",
    description:
      "Shop certified diamond rings at Renora Jewels — solitaire, halo, pavé, eternity bands & engagement rings. Timeless designs at renorajewels.in.",
  },
  necklaces: {
    title: "Diamond Necklaces — Gold & Platinum Necklaces",
    description:
      "Explore Renora Jewels' diamond necklace collection — pendant necklaces, statement pieces & layering chains in gold and platinum.",
  },
  earrings: {
    title: "Diamond Earrings — Studs, Hoops & Drop Earrings",
    description:
      "Shop diamond earrings at Renora Jewels — classic studs, hoops, danglers & drop earrings. Certified diamonds in gold & platinum.",
  },
  bracelets: {
    title: "Diamond Bracelets — Tennis & Charm Bracelets",
    description:
      "Shop diamond bracelets at Renora Jewels — tennis bracelets, charm bracelets & delicate diamond bangles in gold and platinum.",
  },
  bangles: {
    title: "Diamond Bangles — Classic & Contemporary Designs",
    description:
      "Explore Renora Jewels' diamond bangle collection — classic kadas, contemporary stackable bangles in certified diamond & gold.",
  },
  pendants: {
    title: "Diamond Pendants — Solitaire & Designer Pendants",
    description:
      "Shop certified diamond pendants at Renora Jewels — solitaire pendants, heart pendants & designer drops in gold and platinum.",
  },
  chains: {
    title: "Gold & Silver Chains — Fine Diamond Chains",
    description:
      "Shop fine chains at Renora Jewels — gold chains, silver chains & diamond-set chains for everyday wear and gifting.",
  },
  mens: {
    title: "Men's Jewellery — Diamond Rings, Chains & Bracelets for Men",
    description:
      "Shop Renora Jewels' men's jewellery collection — bold diamond rings, chains, bracelets & pendants crafted for the modern man.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const meta = categoryMeta[category] ?? {
    title: `${category.charAt(0).toUpperCase() + category.slice(1)} — Renora Jewels`,
    description: `Shop ${category} jewellery at Renora Jewels — certified diamonds and fine craftsmanship at renorajewels.in.`,
  };

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `https://www.renorajewels.in/collections/${category}`,
    },
    openGraph: {
      title: `${meta.title} | Renora Jewels`,
      description: meta.description,
      url: `https://www.renorajewels.in/collections/${category}`,
    },
  };
}

export default function CategoryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
