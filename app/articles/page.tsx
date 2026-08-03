import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticlesList from "@/components/utils/ArticlesList";
import Reveal from "@/components/animations/Reveal";

export const metadata: Metadata = {
  title: "Articles",
};

export default function Articles() {
  return (
    <div className="min-h-screen bg-[#FDF6EC] text-zinc-900">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 lg:pt-32 pt-10 lg:px-10">
        {/* Hero */}
        <Reveal>
          <section className="mb-20">
            <span className="inline-block rounded-full border-2 border-black bg-[#4ECDC4] px-4 py-1 text-xs font-bold tracking-[0.2em] uppercase shadow-[3px_3px_0px_#000]">
              Articles
            </span>

            <h1 className="mt-3 text-5xl font-black md:text-6xl">Knowledge & Insights</h1>

            <p className="mt-5 max-w-xl text-[15px] leading-7 text-zinc-600 md:text-lg md:leading-8">
              A collection of articles covering software development, artificial intelligence, web technologies, and my
              learning journey in technology.
            </p>
          </section>
        </Reveal>

        {/* Articles */}
        <section className="pb-20">
          <Reveal>
            <div className="mb-10">
              <p className="text-sm font-semibold tracking-[0.3em] text-zinc-500 uppercase">Latest Articles</p>
              <h2 className="mt-2 text-4xl font-black">Explore My Articles</h2>
            </div>
          </Reveal>

          <ArticlesList />
        </section>
      </main>

      <Footer />
    </div>
  );
}
