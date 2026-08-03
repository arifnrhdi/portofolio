import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Jumbotrons from "@/components/Jumbotrons";
import ProjectsList from "@/components/utils/ProjectsList";
import Footer from "@/components/Footer";
import Reveal from "@/components/animations/Reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDF6EC] text-zinc-900">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 lg:pt-32 pt-10 lg:px-10">
        {/* Hero */}
        <Jumbotrons />

        {/* Projects */}
        <section className="mt-32">
          <Reveal>
            <p className="text-center text-sm font-semibold tracking-[0.3em] text-zinc-500 uppercase">
              Featured Project
            </p>

            <div className="mt-6 flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-start">
              <div>
                <h2 className="text-4xl font-black md:text-5xl">Selected Work</h2>
                <p className="mt-2 text-lg text-zinc-600">Some projects that I&apos;ve built recently.</p>
              </div>

              <Link
                href="/project"
                className="inline-flex items-center gap-2 rounded-full border-[3px] border-black bg-[#7D9DFF] px-4 py-1 font-bold shadow-[4px_4px_0px_#000] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none md:px-6 md:py-3"
              >
                View All
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
          </Reveal>

          <div className="mt-14">
            <ProjectsList limit={3} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
