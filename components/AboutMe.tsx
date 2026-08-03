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

const AboutMe = () => {
  return (
    <div className="space-y-20">
      {/* About Card */}
      <Reveal>
        <div className="grid items-center gap-12 rounded-[32px] border-[3px] border-black bg-white p-8 shadow-[10px_10px_0px_#000]">
          <div className="order-2 space-y-5 text-lg leading-8 text-zinc-700">
            <p>
              A Computer Science student with interest in full-stack web
              development and data analysis. Proficient in frontend
              technologies such as React.js, Next.js, and Tailwind CSS, as
              well as backend development using Express.js, MySQL, and
              Supabase. Using Python for data processing, exploratory data
              analysis, and developing machine learning classification
              systems. Passionate about building scalable web applications
              and leveraging data-driven solutions to solve real-world
              problems while continuously expanding technical knowledge and
              practical experience.
            </p>
          </div>
        </div>
      </Reveal>

      {/* Experience */}
      <section className="mt-20">
        <Reveal>
          <div className="mb-10 text-center">
            <p className="text-sm font-bold tracking-[0.3em] text-zinc-500 uppercase">
              Experience
            </p>
            <h2 className="mt-2 text-4xl font-black">
              Professional Experience
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-[30px] border-[3px] border-black bg-white p-8 shadow-[10px_10px_0px_#000]">
            <div className="flex flex-col gap-8 lg:flex-row">
              {/* Logo */}
              <div className="flex items-start justify-center">
                <div className="rounded-2xl border-[3px] border-black bg-white p-4 shadow-[5px_5px_0px_#000]">
                  <Image
                    src="/images/logo-lepkom.png"
                    alt="LEPKOM"
                    width={112}
                    height={112}
                    className="w-28"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <h3 className="text-3xl font-black">
                      Laboratory Assistant
                    </h3>
                    <p className="text-lg font-semibold text-zinc-600">
                      Lembaga Pengembangan Komputerisasi (Gunadarma
                      University)
                    </p>
                  </div>

                  <div className="rounded-full border-2 border-black bg-[#FFE066] px-2.5 py-1 text-[11px] font-bold shadow-[2px_2px_0px_#000] md:px-4 md:py-2 md:text-sm md:shadow-[3px_3px_0px_#000]">
                    Sep 2024 — Present
                  </div>
                </div>

                <ul className="mt-4 list-disc pl-4 text-[17px] leading-6 text-zinc-700">
                  <li>
                    Delivered course materials on Database Management Systems
                    (MySQL & SQL Server) and Web Development using Golang.
                  </li>
                  <li>
                    Guided students in completing programming activities and
                    practical assignments.
                  </li>
                  <li>
                    Provided technical support and mentoring during
                    laboratory sessions.
                  </li>
                  <li>
                    Evaluated and assessed students&apos; coding assignments
                    and activity results.
                  </li>
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
      </section>
    </div>
  );
};

export default AboutMe;
