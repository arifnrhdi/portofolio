import type { Metadata } from "next";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

// Prevent Font Awesome from injecting its own <style> tag on the client,
// since we already import the CSS above (avoids a flash of unstyled icons).
config.autoAddCss = false;

export const metadata: Metadata = {
  title: {
    default: "Arif | Portfolio",
    template: "Arif | %s",
  },
  description: "Portfolio of Arif Nurhadi — Computer Science student focused on AI and full-stack web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Afacad+Flux:wght@100..1000&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className="min-h-screen bg-[#FDF6EC] text-zinc-900">{children}</body>
    </html>
  );
}
