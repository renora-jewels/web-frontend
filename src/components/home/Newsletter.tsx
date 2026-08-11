"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setEmail("");
  }

  return (
    <section className="bg-[#F5EDE0] border-t border-[#e8ddd0] py-5 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[11px] tracking-wide text-[#555] text-center sm:text-left">
          Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
        </p>
        <form onSubmit={handleSubmit} className="flex w-full sm:w-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 sm:w-64 border border-[#d0c8bf] bg-white px-4 py-2.5 text-[12px] outline-none focus:border-[#7B3030] placeholder:text-[#aaa]"
          />
          <button
            type="submit"
            className="bg-[#7B3030] text-white text-[10px] tracking-[0.2em] font-semibold px-6 py-2.5 hover:bg-[#5e2424] transition-colors shrink-0"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </section>
  );
}
