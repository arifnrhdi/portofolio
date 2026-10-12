"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCircleInfo,
  faFolderOpen,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";

const items = [
  { href: "/", label: "Home", icon: faHouse },
  { href: "/about", label: "About", icon: faCircleInfo },
  { href: "/project", label: "Projects", icon: faFolderOpen },
  { href: "/articles", label: "Articles", icon: faNewspaper },
];

const NavbarMobile = () => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setIsVisible(window.scrollY > 20);

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => window.removeEventListener("scroll", updateVisibility);
  }, [pathname]);

  return (
    <motion.div
      initial={false}
      animate={{ y: isVisible ? 0 : 100 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden={!isVisible}
      style={{ pointerEvents: isVisible ? "auto" : "none" }}
      className="fixed right-0 bottom-5 left-0 z-50 flex justify-center lg:hidden"
    >
      <nav className="flex items-center gap-10 rounded-full border-[3px] border-black bg-[#FFF9F1]/60 px-7 py-3 shadow-[3px_3px_0px_#000] backdrop-blur-sm">
        {items.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              tabIndex={isVisible ? 0 : -1}
              className={`flex flex-col items-center ${
                active ? "text-[#FF6B6B]" : "text-zinc-800"
              }`}
            >
              <FontAwesomeIcon icon={item.icon} className="text-sm" />
              <span className="mt-1 text-xs font-semibold">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </motion.div>
  );
};

export default NavbarMobile;
