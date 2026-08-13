import Link from "next/link";
import Image from "next/image";

const quickLinks = ["Collections", "Custom Jewelry", "About Us", "Blog", "Contact"];
const customerService = [
  "Shipping Policy",
  "Returns & Exchanges",
  "Privacy Policy",
  "Terms & Conditions",
  "FAQ",
];

function InstagramIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  );
}

function PinterestIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.428 1.808-2.428.852 0 1.265.64 1.265 1.408 0 .858-.546 2.14-.828 3.33-.236.995.499 1.806 1.476 1.806 1.772 0 3.137-1.868 3.137-4.564 0-2.387-1.715-4.054-4.163-4.054-2.836 0-4.5 2.127-4.5 4.326 0 .856.33 1.774.741 2.276a.3.3 0 0 1 .069.284c-.076.312-.244.995-.277 1.134-.044.183-.146.222-.337.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.966-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446C17.523 22 22 17.523 22 12S17.523 2 12 2z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

const paymentMethods = ["VISA", "MC", "PP", "PAY"];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="flex flex-col gap-4">
          <Link href="/">
            <Image
              src="/logo/logo.png"
              alt="Renora Jewels"
              width={100}
              height={50}
              className="h-20 w-auto mix-blend-multiply"
            />
          </Link>
          <p className="text-[12px] text-[#777] leading-relaxed max-w-50">
            Timeless elegance crafted with passion and perfection.
          </p>
          <div className="flex items-center gap-3 mt-1">
            {[InstagramIcon, FacebookIcon, YoutubeIcon, PinterestIcon, TikTokIcon].map((Icon, i) => (
              <a key={i} href="#" className="text-[#666] hover:text-[#7B3030] transition-colors">
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-[10px] tracking-[0.3em] font-bold text-[#1a1a1a] mb-5 uppercase">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-3">
            {quickLinks.map((link) => (
              <li key={link}>
                <Link href="#" className="text-[12px] text-[#777] hover:text-[#7B3030] transition-colors">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h4 className="text-[10px] tracking-[0.3em] font-bold text-[#1a1a1a] mb-5 uppercase">
            Customer Service
          </h4>
          <ul className="flex flex-col gap-3">
            {customerService.map((item) => (
              <li key={item}>
                <Link href="#" className="text-[12px] text-[#777] hover:text-[#7B3030] transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[10px] tracking-[0.3em] font-bold text-[#1a1a1a] mb-5 uppercase">
            Contact Us
          </h4>
          <ul className="flex flex-col gap-3 text-[12px] text-[#777]">
            <li className="flex items-start gap-2">
              <span>✉</span>
              <span>info@renorajewels.in</span>
            </li>
            <li className="flex items-start gap-2">
              <span>☎</span>
              <span>+91 8160149309</span>
            </li>
            <li className="flex items-start gap-2">
              <span>💬</span>
              <span>+91 8160149309</span>
            </li>
            <li className="flex items-start gap-2">
              <span>📍</span>
              <span>Surat, Gujarat, India</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-100 px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-[#aaa]">
            © {new Date().getFullYear()} Renora Jewels. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2">
            {paymentMethods.map((card) => (
              <div
                key={card}
                className="bg-gray-100 rounded px-2.5 py-1 text-[9px] font-bold text-[#666] tracking-wider"
              >
                {card}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
