import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectsList from "@/components/utils/ProjectsList";
import Reveal from "@/components/animations/Reveal";

export const metadata: Metadata = {
  title: "Projects",
};

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#FDF6EC] text-zinc-900">
      <Navbar />

      <main className="mx-auto max-w-7xl px-5 lg:pt-32 pt-10 pb-24 md:px-8 lg:px-10">
        {/* Hero */}
        <Reveal>
          <section className="mb-12 md:mb-20">
            <span className="inline-block rounded-full border-2 border-black bg-[#FFE066] px-4 py-1 text-xs font-bold tracking-[0.2em] uppercase shadow-[3px_3px_0px_#000]">
              Portfolio
            </span>

            <h1 className="mt-5 max-w-3xl text-4xl leading-tight font-black md:text-6xl">
              Projects I&apos;ve
              <br />
              Built.
            </h1>

            <p className="mt-5 max-w-xl text-[15px] leading-7 text-zinc-600 md:text-lg md:leading-8">
              A collection of projects focused on Artificial Intelligence, Full Stack Development, Mobile Development,
              and UI/UX Design.
            </p>
          </section>
        </Reveal>

        {/* Projects */}
        <section>
          <Reveal>
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase">Selected Work</p>
                <h2 className="mt-1 text-2xl font-black md:text-4xl">Featured Projects</h2>
              </div>
            </div>
          </Reveal>

          <ProjectsList />
        </section>
      </main>

      <Footer />
    </div>
  );
}
