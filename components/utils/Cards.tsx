"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { staggerItem } from "@/components/animations/StaggerGroup";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

type CardsProps = {
  image: string;
  alt: string;
  category?: string;
  title: string;
  description: string;
  tech?: string[];
  href: string;
};

const Cards = ({ image, alt, category, title, description, tech = [], href }: CardsProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        variants={staggerItem}
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        onClick={() => setOpen(true)}
        className="cursor-pointer rounded-3xl lg:rounded-[28px] border-[3px] border-black bg-[#FFF9F1] p-3 lg:p-4 shadow-[5px_5px_0px_#000] lg:shadow-[6px_6px_0px_#000] transition-shadow duration-300 hover:shadow-[8px_8px_0px_#000] lg:hover:shadow-[10px_10px_0px_#000]"
      >
        {/* Thumbnail */}
        <div className="relative h-44 lg:h-56 w-full overflow-hidden rounded-xl lg:rounded-2xl border-[3px] border-black">
          <Image
            src={image}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover"
          />
        </div>

        <div className="mt-4 lg:mt-6 flex flex-col">
          {/* Category */}
          {category && (
            <span className="text-xs lg:text-sm font-semibold tracking-wider text-[#6C63FF] uppercase">{category}</span>
          )}

          {/* Title */}
          <h3 className="mt-2 text-xl lg:text-2xl leading-tight font-extrabold text-zinc-900">{title}</h3>

          {/* Description */}
          <p className="mt-2 lg:mt-3 line-clamp-3 text-sm lg:text-base leading-6 lg:leading-7 text-zinc-600">
            {description}
          </p>

          {/* Tech Stack */}
          {tech.length > 0 && (
            <div className="mt-4 lg:mt-5 flex flex-wrap gap-2">
              {tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full border-2 border-black bg-yellow-300 px-2.5 lg:px-3 py-0.5 lg:py-1 text-[11px] lg:text-xs font-bold"
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
            className="mt-5 lg:mt-6 inline-flex w-fit items-center gap-1 rounded-full border-[3px] border-black bg-[#7D9DFF] px-4 lg:px-6 py-1 lg:py-1.5 text-xs lg:text-sm font-bold shadow-[3px_3px_0px_#000] lg:shadow-[4px_4px_0px_#000] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            View
            <FontAwesomeIcon className="text-[9px] lg:text-sm" icon={faArrowUpRightFromSquare} />
          </a>
        </div>
      </motion.div>
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed -inset-1 z-50 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.25 }}
              className="fixed left-1/2 top-1/2 z-60 w-[80%] lg:w-[30%]  max-w-4xl -translate-x-1/2 -translate-y-1/2"
            >
              <div className="rounded-4xl border-[3px] border-black bg-[#FFF9F1] p-6 shadow-[6px_6px_0px_#000]">
                <div className="relative h-30 lg:h-60 overflow-hidden rounded-2xl border-[3px] border-black">
                  <Image src={image} alt={alt} fill className="object-cover" />
                </div>

                <h2 className="lg:mt-6 mt-3 text-lg lg:text-3xl font-black">{title}</h2>

                <p className="lg-mt-4 mt-2 text-zinc-600 text-xs lg:text-base lg:leading-8">{description}</p>

                <div className="lg:mt-6 mt-4 flex flex-wrap gap-2">
                  {tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border-2 border-black bg-yellow-300 lg:px-3 px-2 py-0.5 lg:py-1 text-xs lg:text-sm font-bold"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="lg:mt-8 mt-4 flex lg:justify-between gap-3 lg:gap-0">
                  <button
                    onClick={() => setOpen(false)}
                    className="rounded-xl border-[3px] border-black bg-white px-2 lg:px-5 py-1 lg:py-2 text-sm lg:text-base font-bold shadow-[2px_2px_0px_#000]"
                  >
                    Close
                  </button>

                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border-[3px] border-black bg-[#7D9DFF] px-2 lg:px-5 py-1 lg:py-2 text-sm lg:text-base font-bold shadow-[2px_2px_0px_#000]"
                  >
                    Visit Project
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Cards;
