import { Truck, Gem, Shield } from "lucide-react";

const items = [
  { Icon: Truck, label: "FREE SHIPPING WORLDWIDE" },
  { Icon: Gem, label: "CERTIFIED DIAMONDS" },
  { Icon: Shield, label: "SECURE PAYMENTS" },
];

export default function TopBar() {
  return (
    <div className="bg-[#F5EDE0] py-2">
      <div className="max-w-7xl mx-auto px-4 flex justify-center items-center gap-6 sm:gap-14">
        {items.map(({ Icon, label }) => (
          <div
            key={label}
            className="flex items-center gap-1.5 text-[10px] tracking-[0.15em] text-[#3a3a3a] font-medium"
          >
            <Icon size={13} strokeWidth={1.5} />
            <span className={label === "CERTIFIED DIAMONDS" ? "hidden sm:inline" : ""}>
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
