# Arif Portfolio — Next.js + TypeScript

Hasil migrasi dari React (Vite) ke **Next.js 14 (App Router)** dengan **TypeScript**,
mempertahankan desain neobrutalism/retro (border tebal, hard shadow, warna pastel cerah),
ditambah animasi scroll yang halus menggunakan **Framer Motion**.

## 1. Instalasi

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## 2. Gambar yang perlu kamu tambahkan

Proyek aslinya mengambil gambar dari `src/assets/img/`, tapi file gambarnya tidak ikut
ter-upload. Taruh file-file berikut ke folder `public/images/` dengan nama persis seperti ini:

| Nama file di `public/images/` | Dipakai di |
| --- | --- |
| `wadidaw.jpg` | Foto hero (Jumbotrons) |
| `logo-lepkom.png` | Logo pengalaman kerja (AboutMe) |
| `gunadarma.jpeg` | Halaman About Gunadarma & kartu artikel |
| `sakana.jpg` | Project: Sakana To-Do List |
| `adoptpets.jpg` | Project: AdoptPets |
| `figma.jpg` | Project: Letterboxd UI Redesign |
| `oise.png` | Project lainnya (Bank Sampah, Warung, Phishing, Crop Recommendation) |

Semua gambar sudah dipakai lewat `next/image` (otomatis lazy-load & optimasi ukuran).

## 3. Struktur routing (React Router → Next App Router)

| Route lama (React Router) | Route baru (Next.js) |
| --- | --- |
| `/` | `app/page.tsx` |
| `/about` | `app/about/page.tsx` |
| `/about-gunadarma` | `app/about-gunadarma/page.tsx` |
| `/project` | `app/project/page.tsx` |
| `/articles` | `app/articles/page.tsx` |

`document.title` di tiap halaman diganti dengan `export const metadata` (cara Next.js
untuk SEO/title, otomatis SSR-friendly, tidak butuh `useEffect`).

## 4. Animasi scroll

- `components/animations/Reveal.tsx` — fade + naik sedikit (24px) saat elemen masuk
  viewport, sekali jalan (`once`). Dipakai di header tiap section & kartu besar.
- `components/animations/StaggerGroup.tsx` — membungkus grid (project/article cards)
  supaya kartu-kartunya muncul berurutan dengan jeda kecil (stagger), bukan sekaligus.
- Navbar & bottom nav mobile: slide-in tipis saat halaman pertama kali dimuat.
- Hero: badge & ikon floating punya animasi naik-turun sangat pelan (durasi 3.5–4.2 detik)
  supaya terasa hidup tanpa mengganggu.
- Semua animasi menghormati `prefers-reduced-motion` (otomatis dimatikan untuk pengguna
  yang mengaktifkan pengaturan tersebut di OS-nya).

Animasi sengaja dijaga minim (tanpa rotasi/bounce berlebihan) supaya tidak
bentrok dengan gaya neobrutalism yang sudah bold lewat border & shadow-nya sendiri.

## 5. Catatan teknis lain

- Tailwind v4 dipakai dengan cara yang sama seperti proyek asli (`@import "tailwindcss"`
  di `app/globals.css`), plugin PostCSS `@tailwindcss/postcss`.
- FontAwesome dikonfigurasi `autoAddCss = false` di `app/layout.tsx` + import CSS manual,
  supaya tidak ada flash ikon tanpa style saat SSR.
- Semua komponen interaktif (pakai `useState`/`useEffect`/scroll listener/framer-motion)
  diberi `"use client"`; komponen statis dibiarkan Server Component agar tetap ringan.
- Data project & artikel dipisah ke `data/projects.ts` dan `data/articles.ts` (typed lewat
  `lib/types.ts`) — supaya gampang ditambah tanpa menyentuh komponen tampilan.
