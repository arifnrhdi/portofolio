"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faPython } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

const Jumbotrons = () => {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-6 lg:px-12 lg:py-16">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* ================= LEFT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1"
          >
            <p className="mb-4 text-lg text-zinc-600">Hello, my name is</p>

            <h1 className="text-5xl leading-none font-black text-zinc-900 md:text-7xl">
              ARIF <br />
              NURHADI.
            </h1>

            <p className="mt-8 max-w-lg text-lg leading-8 text-zinc-600">
              I&apos;m a Computer Science student at Gunadarma University who enjoys developing websites, artificial
              intelligence, and modern digital experiences.
            </p>

            <div className="mt-8 flex gap-5">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://drive.google.com/drive/folders/1TYCnCDMJOlTxHkxuJX6jAVWUbRheonTa"
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
            {/* Card Foto */}
            <div className="relative rounded-[40px] border-4 border-black bg-pink-400 p-4 shadow-[8px_8px_0px_#000]">
              <div className="relative h-55 w-45 overflow-hidden rounded-[28px] md:h-85 md:w-75">
                <Image
                  src="/images/meee.jpg"
                  alt="Arif Nurhadi"
                  fill
                  priority
                  sizes="300px"
                  className="object-cover grayscale"
                />
              </div>

              {/* Badge bawah */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -left-2 lg:left-20 rounded-full border-[3px] border-black bg-green-400 px-5 py-2 text-sm font-bold shadow-[4px_4px_0px_#000]"
              >
                <div className="flex items-center gap-1">
                  <FontAwesomeIcon className="text-xs text-[#1a1a1a]" icon={faRocket} />{" "}
                  <span className="text-[11px] lg:text-sm">Available for Internship & Fulltime</span>
                </div>
              </motion.div>
            </div>

            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-8 left-4 rounded-2xl border-[3px] border-black bg-cyan-400 p-3 lg:p-5 shadow-[3px_3px_0px_#000]"
            >
              <FontAwesomeIcon className="text-xl lg:text-3xl" icon={faReact} />
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-16 right-0 rounded-full border-[3px] border-black bg-yellow-300 p-3 px-4 lg:p-5 shadow-[3px_3px_0px_#000]"
            >
              <FontAwesomeIcon className="text-xl lg:text-3xl rotate-345" icon={faDatabase} />
            </motion.div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 rotate-12 rounded-2xl border-[3px] border-black bg-blue-300 p-3 lg:p-5 shadow-[3px_3px_0px_#000]"
            >
              <FontAwesomeIcon className="text-xl lg:text-3xl" icon={faPython} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Jumbotrons;
