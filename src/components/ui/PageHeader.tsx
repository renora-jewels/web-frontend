import Link from "next/link";

interface Crumb {
  label: string;
  href: string;
}

export default function PageHeader({
  title,
  crumbs,
}: {
  title: string;
  crumbs: Crumb[];
}) {
  return (
    <div className="bg-white py-14 text-center border-b border-gray-100">
      <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-[0.1em] text-[#1a1a1a]">
        {title}
      </h1>
      <nav className="flex items-center justify-center gap-2 mt-4 text-[12px] text-[#999]">
        {crumbs.map((c, i) => (
          <span key={c.href} className="flex items-center gap-2">
            {i > 0 && <span>/</span>}
            <Link
              href={c.href}
              className={
                i === crumbs.length - 1
                  ? "text-[#7B3030]"
                  : "hover:text-[#7B3030] transition-colors"
              }
            >
              {c.label}
            </Link>
          </span>
        ))}
      </nav>
    </div>
  );
}
