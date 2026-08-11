import { Scissors, Gem, Globe, Lock, UserCheck } from "lucide-react";

const features = [
  { Icon: Scissors, label: "PREMIUM\nCRAFTSMANSHIP" },
  { Icon: Gem, label: "CERTIFIED\nDIAMONDS" },
  { Icon: Globe, label: "WORLDWIDE\nSHIPPING" },
  { Icon: Lock, label: "SECURE\nPAYMENTS" },
  { Icon: UserCheck, label: "PERSONALIZED\nSERVICE" },
];

export default function Features() {
  return (
    <section className="bg-[#F7F5F2] border-y border-gray-200 py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
        {features.map(({ Icon, label }) => (
          <div key={label} className="flex flex-col items-center text-center gap-3">
            <Icon size={24} strokeWidth={1.2} className="text-[#1a1a1a]" />
            <span className="text-[10px] tracking-[0.15em] font-semibold text-[#1a1a1a] whitespace-pre-line leading-relaxed">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
