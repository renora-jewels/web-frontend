interface Props {
  title: string;
  className?: string;
}

export default function SectionHeading({ title, className = "" }: Props) {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-[0.15em] text-[#1a1a1a]">
        {title}
      </h2>
      <div className="flex items-center justify-center gap-3 mt-2">
        <div className="h-px w-12 bg-[#7B3030]" />
        <span className="text-[#7B3030] text-xs">◆</span>
        <div className="h-px w-12 bg-[#7B3030]" />
      </div>
    </div>
  );
}
