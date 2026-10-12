import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IntroductionWebArticle from "@/components/articles/IntroductionWebArticle";

export const metadata: Metadata = {
  title: "Pengenalan Web dan Dasar HTML",
  description: "Pengenalan cara kerja web dan panduan singkat HTML untuk pemula.",
};

export default function PengenalanWebPage() {
  return (
    <div className="min-h-screen bg-[#FDF6EC] text-zinc-900">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 pb-24 pt-10 lg:px-10 lg:pt-32">
        <IntroductionWebArticle />
      </main>
      <Footer />
    </div>
  );
}
