import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutMe from "@/components/AboutMe";
import Reveal from "@/components/animations/Reveal";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <div className="min-h-screen bg-[#FDF6EC] text-zinc-900">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 lg:pt-32 pt-10 lg:px-10">
        {/* Header */}
        <Reveal>
          <section className="mb-20">
            <span className="inline-block rounded-full border-2 border-black bg-[#A388EE] px-4 py-1 text-xs font-bold tracking-[0.2em] uppercase shadow-[3px_3px_0px_#000]">
              About Me
            </span>

            <h1 className="mt-5 text-5xl font-black md:text-6xl">Get to Know Me</h1>
          </section>
        </Reveal>

        {/* Content */}
        <section className="pb-20">
          <AboutMe />
        </section>
      </main>

      <Footer />
    </div>
  );
}
