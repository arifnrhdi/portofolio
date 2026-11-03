"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { staggerItem } from "@/components/animations/StaggerGroup";

type CardsProps = {
  image: string;
  imageFit?: "cover" | "contain";
  alt: string;
  category?: string;
  title: string;
  description: string;
  tech?: string[];
  href: string;
};

const Cards = ({ image, imageFit = "cover", alt, category, title, description, tech = [], href }: CardsProps) => {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <>
      <motion.article
        variants={staggerItem}
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="flex h-full flex-col rounded-3xl border-[3px] border-black bg-[#FFF9F1] p-3 shadow-[5px_5px_0px_#000] transition-shadow duration-300 hover:shadow-[8px_8px_0px_#000] lg:rounded-[28px] lg:p-4 lg:shadow-[6px_6px_0px_#000] lg:hover:shadow-[10px_10px_0px_#000]"
      >
        <div
          role="button"
          tabIndex={0}
          aria-haspopup="dialog"
          aria-label={`Show details for ${title}`}
          onClick={() => setOpen(true)}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              setOpen(true);
            }
          }}
          className="flex flex-1 cursor-pointer flex-col text-left"
        >
          <div className="relative h-44 w-full overflow-hidden rounded-xl border-[3px] border-black lg:h-56 lg:rounded-2xl">
            <Image
              src={image}
              alt={alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className={imageFit === "contain" ? "bg-white object-contain p-8" : "object-cover"}
            />
          </div>

          <div className="mt-4 flex flex-1 flex-col lg:mt-6">
            {category && (
              <span className="text-xs font-semibold tracking-wider text-[#6C63FF] uppercase lg:text-sm">
                {category}
              </span>
            )}
            <h3 className="mt-2 text-xl leading-tight font-extrabold text-zinc-900 lg:text-2xl">{title}</h3>
            <p className="mt-2 mb-3 line-clamp-3 text-sm leading-6 text-zinc-600 lg:mt-3 lg:text-base lg:leading-7">
              {description}
            </p>

            {tech.length > 0 && (
              <div className="mt-1 mb-3 flex flex-wrap gap-2 lg:mt-2">
                {tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border-2 border-black bg-yellow-300 px-2.5 py-0.5 text-[11px] font-bold lg:px-3 lg:py-1 lg:text-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-flex w-fit items-center gap-1 rounded-full border-[3px] border-black bg-[#7D9DFF] px-4 py-1 text-xs font-bold shadow-[3px_3px_0px_#000] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none lg:px-6 lg:py-1.5 lg:text-sm lg:shadow-[4px_4px_0px_#000]"
        >
          View
          <FontAwesomeIcon className="text-[9px] lg:text-sm" icon={faArrowUpRightFromSquare} />
        </a>
      </motion.article>

      <dialog
        ref={dialogRef}
        aria-label={title}
        onClose={() => setOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setOpen(false);
        }}
        className="card-dialog m-auto max-h-[90vh] w-[80%] max-w-4xl overflow-y-auto rounded-4xl border-[3px] border-black bg-[#FFF9F1] p-6 shadow-[6px_6px_0px_#000] lg:w-[35%]"
      >
        <div
          className={`relative h-30 overflow-hidden rounded-2xl border-[3px] border-black lg:h-60 ${
            imageFit === "contain" ? "bg-white" : ""
          }`}
        >
          <Image
            src={image}
            alt={alt}
            fill
            className={imageFit === "contain" ? "object-contain p-6" : "object-cover"}
          />
        </div>

        <h2 className="mt-3 text-lg font-black lg:mt-6 lg:text-3xl">{title}</h2>
        <p className="mt-2 text-xs text-zinc-600 lg:text-base lg:leading-8">{description}</p>

        {tech.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2 lg:mt-6">
            {tech.map((item) => (
              <span
                key={item}
                className="rounded-full border-2 border-black bg-yellow-300 px-2 py-0.5 text-xs font-bold lg:px-3 lg:py-1 lg:text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        )}

        <div className="mt-4 flex gap-3 lg:mt-8 lg:justify-between lg:gap-0">
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-xl border-[3px] border-black bg-white px-2 py-1 text-sm font-bold shadow-[2px_2px_0px_#000] lg:px-5 lg:py-2 lg:text-base"
          >
            Close
          </button>
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border-[3px] border-black bg-[#7D9DFF] px-2 py-1 text-sm font-bold shadow-[2px_2px_0px_#000] lg:px-5 lg:py-2 lg:text-base"
          >
            Visit Project
          </a>
        </div>
      </dialog>
    </>
  );
};

export default Cards;
