"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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

  return (
    <motion.div
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className="fixed right-0 bottom-5 left-0 z-50 flex justify-center lg:hidden"
    >
      <div className="flex items-center gap-14 rounded-full border-[3px] border-black bg-[#FFF9F1]/60 px-7 py-3 shadow-[6px_6px_0px_#000] backdrop-blur-sm">
        {items.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center transition hover:scale-110 ${
                active ? "text-[#FF6B6B]" : "text-zinc-800"
              }`}
            >
              <FontAwesomeIcon icon={item.icon} className="text-xl" />
              <span className="mt-1 text-xs font-semibold">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
};

export default NavbarMobile;
