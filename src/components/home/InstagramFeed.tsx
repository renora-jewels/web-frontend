import Image from "next/image";

const posts = [
  { id: 1, src: "/home/home-instagram-1.jpg" },
  { id: 2, src: "/home/home-instagram-2.jpg" },
  { id: 3, src: "/home/home-instagram-3.jpg" },
  { id: 4, src: "/home/home-instagram-4.jpg" },
  { id: 5, src: "/home/home-instagram-5.jpg" },
  { id: 6, src: "/home/home-instagram-6.jpg" },
  { id: 7, src: "/home/home-instagram-7.jpg" },
];

export default function InstagramFeed() {
  return (
    <section className="bg-white py-14 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-[0.15em] text-[#1a1a1a]">
            FOLLOW US ON INSTAGRAM
          </h2>
          <p className="text-[#7B3030] text-[11px] tracking-[0.25em] font-semibold mt-1">
            @renorajewels
          </p>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
          {posts.map(({ id, src }) => (
            <a
              key={id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square overflow-hidden block group"
            >
              <Image
                src={src}
                alt={`Instagram post ${id}`}
                width={240}
                height={240}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
