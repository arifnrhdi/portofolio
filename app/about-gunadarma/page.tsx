import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutGunadarma from "@/components/AboutGunadarma";
import Reveal from "@/components/animations/Reveal";

export const metadata: Metadata = {
  title: "Gunadarma University",
};

export default function Gunadarma() {
  return (
    <div className="min-h-screen bg-[#FDF6EC] text-zinc-900">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 lg:pt-32 pt-10 lg:px-10">
        {/* Header */}
        <Reveal>
          <section className="mb-16 text-center">
            <p className="text-sm font-semibold tracking-[0.3em] text-zinc-500 uppercase">
              Education
            </p>

            <h1 className="mt-3 text-4xl font-black md:text-6xl">
              Gunadarma University
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
              My academic journey as an Informatics student, including
              education, achievements, organizational experience, and
              activities during my studies.
            </p>
          </section>
        </Reveal>

        {/* Content */}
        <section>
          <AboutGunadarma />
        </section>
      </main>

      <Footer />
    </div>
  );
}
