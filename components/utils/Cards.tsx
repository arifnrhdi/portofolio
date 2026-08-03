"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { staggerItem } from "@/components/animations/StaggerGroup";

type CardsProps = {
  image: string;
  alt: string;
  category?: string;
  title: string;
  description: string;
  tech?: string[];
  href: string;
};

const Cards = ({
  image,
  alt,
  category,
  title,
  description,
  tech = [],
  href,
}: CardsProps) => {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="rounded-[28px] border-[3px] border-black bg-[#FFF9F1] p-4 shadow-[8px_8px_0px_#000] transition-shadow duration-300 hover:shadow-[12px_12px_0px_#000]"
    >
      {/* Thumbnail */}
      <div className="relative h-56 w-full overflow-hidden rounded-2xl border-[3px] border-black">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      <div className="mt-6 flex flex-col">
        {/* Category */}
        {category && (
          <span className="text-sm font-semibold tracking-wider text-[#6C63FF] uppercase">
            {category}
          </span>
        )}

        {/* Title */}
        <h3 className="mt-2 text-2xl leading-tight font-extrabold text-zinc-900">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-3 line-clamp-3 text-base leading-7 text-zinc-600">
          {description}
        </p>

        {/* Tech Stack */}
        {tech.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {tech.map((item) => (
              <span
                key={item}
                className="rounded-full border-2 border-black bg-yellow-300 px-3 py-1 text-xs font-bold"
              >
                {item}
              </span>
            ))}
          </div>
        )}

        {/* Button */}
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex w-fit items-center gap-1 rounded-full border-[3px] border-black bg-[#7D9DFF] px-6 py-1 font-bold shadow-[4px_4px_0px_#000] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
        >
          View
          <FontAwesomeIcon className="text-sm" icon={faArrowUpRightFromSquare} />
        </a>
      </div>
    </motion.div>
  );
};

export default Cards;
