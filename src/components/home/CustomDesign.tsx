import Link from "next/link";
import Image from "next/image";

export default function CustomDesign() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row min-h-[380px]">

        {/* Left — Text */}
        <div className="flex-1 flex flex-col justify-center px-8 lg:px-16 py-14">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold leading-tight">
            <span className="text-[#1a1a1a]">CREATE YOUR</span>
            <br />
            <span className="text-[#7B3030]">DREAM JEWELRY</span>
          </h2>
          <p className="mt-4 text-[#666] text-sm leading-relaxed max-w-xs">
            Bring your vision to life with our custom jewelry service. Our
            experts will craft a unique masterpiece just for you.
          </p>
          <Link
            href="/custom"
            className="mt-8 w-fit bg-[#7B3030] text-white text-[10px] tracking-[0.2em] font-semibold px-8 py-3.5 hover:bg-[#5e2424] transition-colors"
          >
            START CUSTOM DESIGN
          </Link>
        </div>

        {/* Right — Image */}
        <div className="flex-1 bg-[#F5EDE0] overflow-hidden min-h-[280px]">
          <Image
            src="/home/home-customdesign.jpg"
            alt="Custom Jewelry Design"
            width={720}
            height={420}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
