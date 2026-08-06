import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    title: "Bank Sampah Kelurahan Cikoko",
    category: "Mobile Full Stack",
    image: "/images/sampah.png",
    alt: "Bank Sampah",
    description:
      "A mobile waste bank application developed using React Native, Express.js, Supabase, and Prisma to simplify waste management and transaction records.",
    tech: ["React Native", "Express", "Supabase", "Prisma"],
    href: "https://github.com/arifnrhdi/banksampah-mobileapp",
  },
  {
    title: "Warung Kelontong App",
    category: "Mobile full Stack Web",
    image: "/images/uiux.png",
    alt: "Warung Kelontong",
    description:
      "A point-of-sale web application for managing sales, debts, inventory, OCR receipt scanning, and sales reports for a family-owned grocery store.",
    tech: ["Next.js", "Supabase", "Tailwind CSS", "Tesseract.js"],
    href: "https://github.com/arifnrhdi/warung-mamah-arif-supabase",
  },
  {
    title: "AI-Based Phishing URL Detection",
    category: "Deep Learning",
    image: "/images/bert.png",
    alt: "Phishing Detection",
    description:
      "An AI-powered phishing URL detection system using the BERT transformer model to classify URLs as phishing or legitimate.",
    tech: ["Python", "BERT", "PyTorch", "Discord Bot"],
    href: "https://github.com/arifnrhdi/AI-Based-Phishing-URL-Detection-System-Using-BERT",
  },
  {
    title: "Crop Recommendation System",
    category: "Machine Learning",
    image: "/images/visualisasi.png",
    alt: "Crop Recommendation",
    description:
      "A machine learning application that recommends suitable crops based on climate conditions and soil characteristics using the Random Forest algorithm.",
    tech: ["Python", "Random Forest", "Scikit-learn"],
    href: "https://github.com/arifnrhdi/Climate-and-Soil-Based-Crop-Recommendation-System#",
  },
  {
    title: "Sakana To-Do List",
    category: "Web Development",
    image: "/images/sakana.jpg",
    alt: "Sakana To-Do List",
    description:
      "A modern task management web application built with React and Express.js featuring authentication and CRUD functionality.",
    tech: ["React", "Express", "MySQL"],
    href: "https://github.com/arifnrhdi/sakana-todo-list",
  },
  {
    title: "AdoptPets",
    category: "Full Stack Development",
    image: "/images/adoptpets.jpg",
    alt: "AdoptPets",
    description:
      "A pet adoption platform that allows users to browse, add, edit, and manage pet adoption data with a responsive interface.",
    tech: ["React", "Express", "MySQL"],
    href: "https://github.com/arifnrhdi/adoptpets",
  },
  {
    title: "Letterboxd UI Redesign",
    category: "UI / UX Design",
    image: "/images/figma.jpg",
    alt: "Letterboxd",
    description:
      "A redesigned user interface for Letterboxd created in Figma with a cleaner layout and improved user experience.",
    tech: ["Figma", "UI Design", "Prototype"],
    href: "https://www.figma.com/design/VF8nZ6Vmf84I3LLZRR2DC9/Letterboxd",
  },
];
