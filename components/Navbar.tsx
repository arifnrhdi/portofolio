"use client";

import { useEffect, useState, type FormEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import NavbarMobile from "@/components/NavbarMobile";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/project", label: "Projects" },
  { href: "/articles", label: "Articles" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [contactStatus, setContactStatus] = useState("");

  const handleContactSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setIsSending(true);
    setContactStatus("");

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Unable to send message");

      form.reset();
      setContactStatus("Message sent successfully. Thank you!");
    } catch {
      setContactStatus("Sorry, your message could not be sent. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 z-50 hidden w-full px-5 py-2 lg:block"
      >
        <nav
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border-[3px] border-black px-8 py-4 transition-all duration-300 ${
            isScrolled ? "bg-[#FFF9F1]/70 shadow-[4px_6px_0px_#000] backdrop-blur-md" : "bg-[#FFF9F1]"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="text-3xl font-extrabold tracking-tight text-zinc-900">
            Arif.
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-10 font-semibold lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition hover:text-[#FF6B6B] ${pathname === link.href ? "text-[#FF6B6B]" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden lg:block">
            <button
              type="button"
              onClick={() => setIsContactOpen(true)}
              className="rounded-full border-[3px] border-black bg-[#7D9DFF] px-5 py-2 font-bold shadow-[3px_3px_0px_#000] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
              Contact Me
            </button>
          </div>

          {/* Mobile Button (kept for parity, hidden — mobile uses bottom nav) */}
          <button onClick={() => setOpen(!open)} className="text-2xl lg:hidden" aria-label="Toggle menu">
            <FontAwesomeIcon icon={open ? faXmark : faBars} />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isContactOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 px-4 py-8"
            onClick={() => setIsContactOpen(false)}
          >
            <motion.section
              role="dialog"
              aria-modal="true"
              aria-labelledby="contact-form-title"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-lg rounded-3xl border-[3px] border-black bg-[#FFF9F1] p-6 shadow-[8px_8px_0px_#000] sm:p-8"
              onClick={(event) => event.stopPropagation()}
            >
            <button
              type="button"
              onClick={() => setIsContactOpen(false)}
              aria-label="Close contact form"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border-2 border-black bg-white text-xl font-bold transition hover:bg-[#FF6B6B]"
            >
              ×
            </button>
            <h2 id="contact-form-title" className="mb-2 pr-10 text-3xl font-extrabold text-zinc-900">
              Let&apos;s talk!
            </h2>
            <p className="mb-6 text-zinc-600">Tell me a little about what you have in mind.</p>

            <form className="space-y-4" onSubmit={handleContactSubmit}>
              <label className="block text-sm font-bold text-zinc-900">
                Name
                <input name="name" type="text" required autoComplete="name" maxLength={100} className="mt-1 w-full rounded-xl border-2 border-black bg-white px-4 py-3 font-normal outline-none focus:ring-2 focus:ring-[#7D9DFF]" />
              </label>
              <label className="block text-sm font-bold text-zinc-900">
                Email
                <input name="email" type="email" required autoComplete="email" maxLength={254} className="mt-1 w-full rounded-xl border-2 border-black bg-white px-4 py-3 font-normal outline-none focus:ring-2 focus:ring-[#7D9DFF]" />
              </label>
              <label className="block text-sm font-bold text-zinc-900">
                Subject
                <input name="subject" type="text" required maxLength={150} className="mt-1 w-full rounded-xl border-2 border-black bg-white px-4 py-3 font-normal outline-none focus:ring-2 focus:ring-[#7D9DFF]" />
              </label>
              <label className="block text-sm font-bold text-zinc-900">
                Message
                <textarea name="message" required rows={4} maxLength={5000} className="mt-1 w-full resize-y rounded-xl border-2 border-black bg-white px-4 py-3 font-normal outline-none focus:ring-2 focus:ring-[#7D9DFF]" />
              </label>
              {contactStatus && <p role="status" aria-live="polite" className="text-sm font-semibold text-zinc-800">{contactStatus}</p>}
              <button type="submit" disabled={isSending} className="w-full rounded-full border-[3px] border-black bg-[#7D9DFF] px-5 py-3 font-bold shadow-[3px_3px_0px_#000] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none disabled:cursor-wait disabled:opacity-60">
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </form>
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>

      <NavbarMobile />
    </>
  );
};

export default Navbar;
