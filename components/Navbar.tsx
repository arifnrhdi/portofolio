"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
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
        className="fixed top-0 left-0 z-50 hidden w-full px-5 py-5 lg:block"
      >
        <nav
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border-[3px] border-black px-8 py-4 transition-all duration-300 ${
            isScrolled ? "bg-[#FFF9F1]/70 shadow-[8px_8px_0px_#000] backdrop-blur-md" : "bg-[#FFF9F1]"
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
            <a
              href="mailto:arfnrhdi17@gmail.com"
              className="rounded-full border-[3px] border-black bg-[#7D9DFF] px-5 py-2 font-bold shadow-[3px_3px_0px_#000] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
              Contact Me
            </a>
          </div>

          {/* Mobile Button (kept for parity, hidden — mobile uses bottom nav) */}
          <button onClick={() => setOpen(!open)} className="text-2xl lg:hidden" aria-label="Toggle menu">
            <FontAwesomeIcon icon={open ? faXmark : faBars} />
          </button>
        </nav>
      </motion.header>

      <NavbarMobile />
    </>
  );
};

export default Navbar;
