import Image from "next/image";
import Reveal from "@/components/animations/Reveal";

const skills = [
  "Laboratory Assistant",
  "DBMS",
  "MySQL",
  "SQL Server",
  "Golang",
  "Teaching",
  "Mentoring",
  "Problem Solving",
];

const technicalSkills = [
  ["React.js", "/images/React.svg"],
  ["JavaScript", "/images/javascript.png"],
  ["Node.js", "/images/nodejs.png"],
  ["Express.js", "/images/expressjs.png"],
  ["Next.js", "/images/nextjs.jpg"],
  ["Tailwind CSS", "/images/tailwindcss.png"],
  ["MySQL", "/images/database.png"],
  ["PostgreSQL", "/images/postgresql.webp"],
  ["Python", "/images/python.png"],
  ["Figma", "/images/figma.png"],
  ["Postman", "/images/postman.png"],
    ["Git", "/images/git.png"],
    ["GitHub", "/images/github.png"],
    ["Google Colab", "/images/colab.svg"],
    ["Kaggle", "/images/kaggle.svg"],
    ["Prisma", "/images/prisma.png"],
];

const AboutMe = () => {
  return (
    <div className="space-y-20">
      {/* About Card */}
      <Reveal>
        <div className="grid items-center gap-12 rounded-4xl border-[3px] border-black bg-white p-8 shadow-[10px_10px_0px_#000]">
          <div className="order-2 space-y-5 text-lg leading-8 text-zinc-700">
            <p className="text-sm lg:text-lg">
              An Informatics graduate from Gunadarma University with a strong interest in full-stack web development and
              data analysis. Proficient in frontend technologies such as React.js, Next.js, and Tailwind CSS, as well as
              backend development using Express.js, MySQL, and Supabase. Experienced in using Python for data
              processing, exploratory data analysis, and developing machine learning classification systems. Passionate
              about building scalable web applications and leveraging data-driven solutions to solve real-world problems
              while continuously expanding technical skills and practical experience.
            </p>
          </div>
        </div>
      </Reveal>

      {/* Skills */}
      <Reveal>
        <section className="relative rounded-[30px] border-[3px] border-black bg-[#A388EE] p-6 text-zinc-900 shadow-[10px_10px_0px_#000] md:p-10 lg:p-12">
          <div className="text-center">
            <p className="text-sm font-bold tracking-[0.3em] uppercase">Skills</p>
            <h2 className="mt-2 text-4xl font-black">What I Do</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-zinc-700 lg:text-base">
              Technologies and tools I use for web development, data, and design.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
            {technicalSkills.map(([name, image]) => (
              <div key={name} className="flex min-h-32 flex-col items-center justify-center gap-3 rounded-xl border-2 border-black bg-white p-4 text-center shadow-[4px_4px_0px_#000] transition-transform hover:-translate-y-1 hover:bg-[#FDF6EC]">
                <Image src={image} alt="" aria-hidden="true" width={64} height={64} className="size-14 object-contain" />
                <span className="text-sm font-bold uppercase tracking-wide">{name}</span>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Experience */}
      <section className="mt-20">
        <Reveal>
          <div className="mb-10 text-center">
            <p className="text-sm font-bold tracking-[0.3em] text-zinc-500 uppercase">Experience</p>
            <h2 className="mt-2 text-4xl font-black">Professional Experience</h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-[30px] border-[3px] border-black bg-white p-8 shadow-[10px_10px_0px_#000]">
            <div className="flex flex-col gap-4 lg:gap-8 lg:flex-row">
              {/* Logo */}
              <div className="flex items-start">
                <div className="rounded-2xl border-[3px] border-black bg-white p-4 shadow-[5px_5px_0px_#000]">
                  <Image src="/images/logo-lepkom.png" alt="LEPKOM" width={112} height={112} className="w-18 lg:w-28" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-black">Laboratory Assistant</h3>
                    <p className="lg:text-lg font-semibold text-zinc-600">
                      Lembaga Pengembangan Komputerisasi (Gunadarma University)
                    </p>
                  </div>

                  <div className="rounded-full border-2 border-black bg-[#FFE066] px-2.5 py-1 text-[11px] font-bold shadow-[2px_2px_0px_#000] md:px-4 md:py-2 md:text-sm md:shadow-[3px_3px_0px_#000]">
                    Sep 2024 — Sep 2026
                  </div>
                </div>

                <ul className="mt-4 list-disc pl-4 text-sm lg:text-[17px] lg:leading-6 text-zinc-700">
                  <li>
                    Delivered course materials on Database Management Systems (MySQL & SQL Server) and Web Development
                    using Golang.
                  </li>
                  <li>Guided students in completing programming activities and practical assignments.</li>
                  <li>Provided technical support and mentoring during laboratory sessions.</li>
                  <li>Evaluated and assessed students&apos; coding assignments and activity results.</li>
                </ul>

                <div className="mt-4 flex flex-wrap gap-2 md:gap-3">
                  {skills.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border-2 border-black bg-[#7D9DFF] px-2.5 py-1 text-[11px] font-bold shadow-[2px_2px_0px_#000] md:px-4 md:py-2 md:text-sm md:shadow-[3px_3px_0px_#000]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 rounded-[30px] border-[3px] border-black bg-white p-8 shadow-[10px_10px_0px_#000]">
            <div className="flex flex-col gap-4 lg:flex-row lg:gap-8">
              <div className="flex items-start">
                <div className="rounded-2xl border-[3px] border-black bg-white p-4 shadow-[5px_5px_0px_#000]">
                  <Image src="/images/logo2.png" alt="Pacific Scientific" width={112} height={112} className="w-18 lg:w-28" />
                </div>
              </div>

              <div className="flex-1">
                <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <h3 className="text-2xl font-black lg:text-3xl">IT & Digital Support (Intern)</h3>
                    <p className="font-semibold text-zinc-600 lg:text-lg">PT. Pasifik Saintifindo</p>
                  </div>
                  <div className="rounded-full border-2 border-black bg-[#FFE066] px-2.5 py-1 text-[11px] font-bold shadow-[2px_2px_0px_#000] md:px-4 md:py-2 md:text-sm md:shadow-[3px_3px_0px_#000]">
                    Sep 2026 — Present
                  </div>
                </div>

                <ul className="mt-4 list-disc pl-4 text-sm text-zinc-700 lg:text-[17px] lg:leading-6">
                  <li>Developed and maintained a company profile website using React.js and Vite to establish the company&apos;s online presence.</li>
                  <li>Built backend services and RESTful APIs using Node.js and Express.js.</li>
                  <li>Designed and managed relational databases using MySQL to support website functionality.</li>
                  <li>Configured website deployment with cPanel shared hosting.</li>
                </ul>

                <div className="mt-4 flex flex-wrap gap-2 md:gap-3">
                  {["Full-Stack Development", "React.js", "Vite", "Node.js", "Express.js", "MySQL", "REST API", "Deployment", "Web Hosting"].map((item) => (
                    <span key={item} className="rounded-full border-2 border-black bg-[#7D9DFF] px-2.5 py-1 text-[11px] font-bold shadow-[2px_2px_0px_#000] md:px-4 md:py-2 md:text-sm md:shadow-[3px_3px_0px_#000]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default AboutMe;
