"use client";

import Image from "next/image";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faPython } from "@fortawesome/free-brands-svg-icons";
import { faArrowPointer, faArrowUpRightFromSquare, faCode, faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

const Jumbotrons = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <section>
      <div className="mx-auto max-w-7xl lg:py-4">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* ================= LEFT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -56 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1"
          >
            <p className="mb-4 text-lg text-zinc-600">Hello, my name is</p>

            <h1 className="text-5xl leading-none font-black text-zinc-900 md:text-7xl">
              ARIF <br />
              NURHADI.
            </h1>

            <p className="mt-8 max-w-lg text-lg lg:text-xl leading-8 text-zinc-600">
              I&apos;m an Informatics graduate from Gunadarma University who enjoys developing websites, exploring
              artificial intelligence, and creating modern digital experiences.
            </p>

            <div className="mt-8 flex gap-5">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://drive.google.com/file/d/1u8r-payyD2OLXB3M6zeG6NmX6tbyVCQp/view?usp=sharing"
                className="rounded-xl border-[3px] border-black bg-yellow-400 px-4 lg:px-8 py-2 lg:py-4 text-xs font-bold shadow-[6px_6px_0px_#000] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none lg:text-lg"
              >
                Resume <FontAwesomeIcon className="ml-1 text-xs lg:text-sm" icon={faArrowUpRightFromSquare} />
              </a>

              <a
                href="/about"
                className="rounded-xl border-[3px] border-black bg-white px-4 lg:px-8 py-2 lg:py-4 text-xs font-bold shadow-[6px_6px_0px_#000] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none lg:text-lg"
              >
                About Me
              </a>
            </div>
          </motion.div>

          {/* ================= KANAN ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="relative order-1 flex justify-center lg:order-2"
          >
            {/* Foto pop-up */}
            <div className="relative isolate h-[340px] w-full max-w-[340px] md:h-[520px] md:max-w-[440px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.72, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 z-10"
              >
                <Image
                  src="/images/gueh.png"
                  alt="Arif Nurhadi"
                  fill
                  priority
                  sizes="(max-width: 768px) 360px, 500px"
                  className="object-contain object-bottom"
                />
              </motion.div>

              {/* Badge bawah */}
              <motion.div
                initial={{ opacity: 0, y: 52 }}
                animate={{ opacity: 1, y: [0, -5, 0] }}
                transition={{ opacity: { duration: 0.5, delay: 0.8 }, y: { duration: 1, delay: 0.8 } }}
                whileHover={{ scale: 1.05, rotate: -2 }}
                className="absolute bottom-0 left-26 lg:left-36 z-20 -translate-x-1/2 rounded-full border-[3px] border-black bg-green-400 px-5 py-2 text-sm font-bold shadow-[4px_4px_0px_#000]"
              >
                <div className="flex items-center gap-1">
                  <FontAwesomeIcon className="text-xs text-[#1a1a1a]" icon={faRocket} />{" "}
                  <span className="text-[11px] lg:text-sm">Available for Internship & Fulltime</span>
                </div>
              </motion.div>
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, x: -64 }}
              animate={{ opacity: 1, x: 0, y: [0, -5, 0], rotate: [0, 4, 0] }}
              transition={{
                opacity: { duration: 0.5, delay: 0.25 },
                x: { duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] },
                y: { duration: 2.8, delay: 1, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 3.6, delay: 1, repeat: Infinity, ease: "easeInOut" },
              }}
              whileHover={{ scale: 1.14, rotate: -8 }}
              className="absolute top-8 left-4 rounded-2xl border-[3px] rotate-10 border-black bg-cyan-400 p-3 shadow-[3px_3px_0px_#000] lg:top-16 lg:left-14 lg:p-5"
            >
              <FontAwesomeIcon className="text-xl lg:text-3xl" icon={faReact} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 64 }}
              animate={{ opacity: 1, x: 0, y: [0, 5, 0], rotate: [0, -5, 0] }}
              transition={{
                opacity: { duration: 0.5, delay: 0.4 },
                x: { duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] },
                y: { duration: 3.2, delay: 1.1, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 4, delay: 1.1, repeat: Infinity, ease: "easeInOut" },
              }}
              whileHover={{ scale: 1.14, rotate: 12 }}
              className="absolute top-12 right-4 rounded-full border-[3px] border-black bg-yellow-300 p-3 px-4 shadow-[3px_3px_0px_#000] lg:top-24 lg:right-14 lg:px-6 lg:py-5"
            >
              <FontAwesomeIcon className="text-xl lg:text-3xl rotate-345" icon={faDatabase} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -64 }}
              animate={{ opacity: 1, y: 0, x: [0, 4, 0], rotate: [0, -4, 0] }}
              transition={{
                opacity: { duration: 0.5, delay: 0.32 },
                y: { duration: 0.7, delay: 0.32, ease: [0.22, 1, 0.36, 1] },
                x: { duration: 2.6, delay: 1.02, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 3.4, delay: 1.02, repeat: Infinity, ease: "easeInOut" },
              }}
              whileHover={{ scale: 1.14, rotate: -8 }}
              className="absolute -top-6 rotate-12 rounded-2xl border-[3px] border-black bg-blue-300 p-3 shadow-[3px_3px_0px_#000] lg:-top-8 lg:p-5"
            >
              <FontAwesomeIcon className="text-xl lg:text-3xl" icon={faPython} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -25 }}
              animate={{ opacity: 1, scale: 1, rotate: -12 }}
              transition={{ duration: 0.55, delay: 0, ease: "backOut" }}
              whileHover={{ scale: 1.15, rotate: 0 }}
              className="absolute bottom-16 right-3 rounded-xl border-[3px] border-black bg-pink-300 p-3 shadow-[3px_3px_0px_#000] lg:bottom-24 lg:right-2 lg:p-4"
              aria-label="Code"
            >
              <FontAwesomeIcon className="text-xl lg:text-2xl" icon={faCode} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -80 }}
              animate={{ opacity: 1, scale: 1, rotate: 14 }}
              transition={{ duration: 0.7, delay: 0, ease: "backOut" }}
              whileHover={{ scale: 1.18, rotate: 36 }}
              className="absolute bottom-14 left-2 rounded-full border-[3px] border-black bg-orange-300 px-3 py-2 shadow-[3px_3px_0px_#000] lg:bottom-20 lg:left-16"
              aria-label="Pointer"
            >
              <FontAwesomeIcon className="text-lg lg:text-2xl pl-1 -scale-x-100" icon={faArrowPointer} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Jumbotrons;
