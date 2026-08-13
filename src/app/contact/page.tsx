"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function SocialIcon({ children }: { children: React.ReactNode }) {
  return (
    <a href="#" className="w-8 h-8 border border-gray-300 flex items-center justify-center text-[#555] hover:border-[#7B3030] hover:text-[#7B3030] transition-colors">
      {children}
    </a>
  );
}

type Status = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  return (
    <>
      {/* ── Page Header ── */}
      <div className="bg-white py-14 text-center border-b border-gray-100">
        <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-widest text-[#1a1a1a]">
          CONTACT US
        </h1>
        <nav className="flex items-center justify-center gap-2 mt-4 text-[12px] text-[#999]">
          <Link href="/" className="hover:text-[#7B3030] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#7B3030]">Contact Us</span>
        </nav>
      </div>

      {/* ── Main Content ── */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left — Contact Info */}
          <div>
            <h2 className="font-serif text-2xl font-bold tracking-widest text-[#1a1a1a] mb-2">
              GET IN TOUCH
            </h2>
            <p className="text-[#666] text-sm leading-relaxed mb-8">
              We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </p>

            <ul className="flex flex-col gap-6">
              <li className="flex items-start gap-4">
                <div className="w-9 h-9 border border-gray-200 flex items-center justify-center shrink-0">
                  <Mail size={16} strokeWidth={1.5} className="text-[#7B3030]" />
                </div>
                <div>
                  <p className="text-[11px] tracking-[0.15em] font-bold text-[#1a1a1a] mb-0.5">Email</p>
                  <p className="text-[13px] text-[#555]">info@renorajewels.in</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-9 h-9 border border-gray-200 flex items-center justify-center shrink-0">
                  <Phone size={16} strokeWidth={1.5} className="text-[#7B3030]" />
                </div>
                <div>
                  <p className="text-[11px] tracking-[0.15em] font-bold text-[#1a1a1a] mb-0.5">Phone</p>
                  <p className="text-[13px] text-[#555]">+91 8160149309</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-9 h-9 border border-gray-200 flex items-center justify-center shrink-0">
                  <WhatsAppIcon />
                </div>
                <div>
                  <p className="text-[11px] tracking-[0.15em] font-bold text-[#1a1a1a] mb-0.5">WhatsApp</p>
                  <p className="text-[13px] text-[#555]">+91 8160149309</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-9 h-9 border border-gray-200 flex items-center justify-center shrink-0">
                  <MapPin size={16} strokeWidth={1.5} className="text-[#7B3030]" />
                </div>
                <div>
                  <p className="text-[11px] tracking-[0.15em] font-bold text-[#1a1a1a] mb-0.5">Address</p>
                  <p className="text-[13px] text-[#555]">Surat, Gujarat, India</p>
                </div>
              </li>
            </ul>

            <div className="mt-8">
              <p className="text-[11px] tracking-[0.15em] font-bold text-[#1a1a1a] mb-3">Follow Us :</p>
              <div className="flex gap-2">
                <SocialIcon>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>
                </SocialIcon>
                <SocialIcon>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </SocialIcon>
                <SocialIcon>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.428 1.808-2.428.852 0 1.265.64 1.265 1.408 0 .858-.546 2.14-.828 3.33-.236.995.499 1.806 1.476 1.806 1.772 0 3.137-1.868 3.137-4.564 0-2.387-1.715-4.054-4.163-4.054-2.836 0-4.5 2.127-4.5 4.326 0 .856.33 1.774.741 2.276a.3.3 0 0 1 .069.284c-.076.312-.244.995-.277 1.134-.044.183-.146.222-.337.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.966-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446C17.523 22 22 17.523 22 12S17.523 2 12 2z"/></svg>
                </SocialIcon>
                <SocialIcon>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
                </SocialIcon>
              </div>
            </div>
          </div>

          {/* Right — Contact Form */}
          <div>
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 gap-5">
                <div className="w-14 h-14 border border-[#7B3030] flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7B3030" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl tracking-widest text-[#1a1a1a]">Message Sent</h3>
                <p className="text-[13px] text-[#666] leading-relaxed max-w-xs">
                  Thank you for reaching out. We&apos;ll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 text-[10px] tracking-[0.25em] font-bold text-[#7B3030] border border-[#7B3030] px-6 py-3 hover:bg-[#7B3030] hover:text-white transition-colors"
                >
                  SEND ANOTHER
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    disabled={status === "loading"}
                    className="border border-gray-200 px-4 py-3 text-[13px] outline-none focus:border-[#7B3030] placeholder:text-[#bbb] transition-colors disabled:opacity-60"
                  />
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    disabled={status === "loading"}
                    className="border border-gray-200 px-4 py-3 text-[13px] outline-none focus:border-[#7B3030] placeholder:text-[#bbb] transition-colors disabled:opacity-60"
                  />
                </div>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  disabled={status === "loading"}
                  className="border border-gray-200 px-4 py-3 text-[13px] outline-none focus:border-[#7B3030] placeholder:text-[#bbb] transition-colors disabled:opacity-60"
                />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  rows={8}
                  disabled={status === "loading"}
                  className="border border-gray-200 px-4 py-3 text-[13px] outline-none focus:border-[#7B3030] placeholder:text-[#bbb] transition-colors resize-none disabled:opacity-60"
                />
                {status === "error" && (
                  <p className="text-[12px] text-red-600">{errorMsg}</p>
                )}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-[#7B3030] text-white text-[11px] tracking-[0.25em] font-semibold py-4 hover:bg-[#5e2424] transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <>
                      <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                      </svg>
                      SENDING...
                    </>
                  ) : (
                    "SEND MESSAGE"
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </>
  );
}
