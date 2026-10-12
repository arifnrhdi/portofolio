import Reveal from "@/components/animations/Reveal";

const CodeBlock = ({ children }: { children: string }) => (
  <pre className="overflow-x-auto rounded-2xl border-[3px] border-black bg-zinc-900 p-5 text-sm leading-7 text-emerald-200 shadow-[4px_4px_0px_#000] md:text-base">
    <code>{children}</code>
  </pre>
);

export default function IntroductionWebArticle() {
  return (
    <>
      <Reveal>
        <header className="mb-12">
          <span className="inline-block rounded-full border-2 border-black bg-[#4ECDC4] px-4 py-1 text-xs font-bold tracking-[0.2em] uppercase shadow-[3px_3px_0px_#000]">
            Dasar Web
          </span>
          <h1 className="mt-5 text-4xl leading-tight font-black md:text-6xl">
            Pengenalan Web dan Dasar HTML
          </h1>
          <p className="mt-5 text-lg leading-8 text-zinc-600 md:text-xl">
            Memahami cara browser menampilkan halaman web dan mengenal HTML
            sebagai langkah pertama untuk membuatnya.
          </p>
        </header>
      </Reveal>

      <Reveal delay={0.1}>
        <article className="space-y-10 rounded-3xl border-[3px] border-black bg-[#FFF9F1] p-6 shadow-[6px_6px_0px_#000] md:p-10">
          <section>
            <h2 className="text-2xl font-black md:text-3xl">Apa itu web?</h2>
            <p className="mt-3 text-base leading-8 text-zinc-700 md:text-lg">
              Web adalah kumpulan halaman dan aplikasi yang bisa diakses melalui internet menggunakan browser. Saat alamat situs dibuka, browser meminta data ke server, lalu membaca dan menampilkan hasilnya sebagai halaman yang bisa kita lihat dan gunakan.
            </p>
            <p className="mt-3 text-base leading-8 text-zinc-700 md:text-lg">
              Halaman web umumnya dibangun dengan tiga teknologi: HTML untuk struktur dan isi, CSS untuk tampilan, serta JavaScript untuk interaksi. Di artikel ini kita mulai dari fondasinya: HTML.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-black md:text-3xl">Apa itu HTML?</h2>
            <p className="mt-3 text-base leading-8 text-zinc-700 md:text-lg">
              HTML (HyperText Markup Language) adalah bahasa markup yang memberi struktur pada konten web. Kita menandai bagian seperti judul, paragraf, gambar, tautan, dan daftar menggunakan elemen HTML. Elemen biasanya ditulis dengan tag pembuka dan penutup.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-black md:text-3xl">Struktur dokumen</h2>
            <p className="mt-3 mb-5 text-base leading-8 text-zinc-700 md:text-lg">
              Berikut kerangka sederhana halaman HTML. Simpan sebagai <code className="mx-1 rounded bg-yellow-200 px-2 py-1 text-sm font-bold">index.html</code>, lalu buka file tersebut di browser.
            </p>
            <CodeBlock>{`<!doctype html>
<html lang="id">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Halaman Pertamaku</title>
  </head>
  <body>
    <h1>Halo, dunia!</h1>
    <p>Ini adalah halaman web pertamaku.</p>
  </body>
</html>`}</CodeBlock>
            <ul className="mt-5 list-disc space-y-2 pl-6 text-base leading-7 text-zinc-700 md:text-lg">
              <li><code className="font-bold">&lt;!doctype html&gt;</code> memberi tahu browser bahwa dokumen memakai HTML modern.</li>
              <li><code className="font-bold">&lt;head&gt;</code> berisi informasi halaman, seperti judul dan pengaturan karakter.</li>
              <li><code className="font-bold">&lt;body&gt;</code> berisi konten yang tampil di halaman.</li>
              <li><code className="font-bold">&lt;h1&gt;</code> adalah judul utama, sedangkan <code className="font-bold">&lt;p&gt;</code> menandai paragraf.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-black md:text-3xl">Elemen HTML yang sering dipakai</h2>
            <ul className="mt-4 list-disc space-y-3 pl-6 text-base leading-7 text-zinc-700 md:text-lg">
              <li><code className="font-bold">&lt;h1&gt;</code> sampai <code className="font-bold">&lt;h6&gt;</code> untuk judul bertingkat.</li>
              <li><code className="font-bold">&lt;p&gt;</code> untuk paragraf.</li>
              <li><code className="font-bold">&lt;a href=&quot;...&quot;&gt;</code> untuk tautan ke halaman lain.</li>
              <li><code className="font-bold">&lt;img src=&quot;...&quot; alt=&quot;...&quot;&gt;</code> untuk gambar; teks <code className="font-bold">alt</code> membantu menjelaskan gambar.</li>
              <li><code className="font-bold">&lt;ul&gt;</code> atau <code className="font-bold">&lt;ol&gt;</code> bersama <code className="font-bold">&lt;li&gt;</code> untuk daftar.</li>
            </ul>
          </section>
          <section className="rounded-2xl border-2 border-black bg-[#D9F99D] p-5">
            <h2 className="text-2xl font-black">Coba sendiri</h2>
            <p className="mt-2 text-base leading-7 text-zinc-800 md:text-lg">
              Buat file <code className="font-bold">index.html</code>, salin kerangka di atas, lalu ubah judul dan paragrafnya menjadi perkenalan singkat tentang dirimu. Setelah berhasil, tambahkan satu tautan atau daftar hobi.
            </p>
          </section>
        </article>
      </Reveal>
    </>
  );
}
