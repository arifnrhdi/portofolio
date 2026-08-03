import Image from "next/image";
import Reveal from "@/components/animations/Reveal";

const AboutGunadarma = () => {
  return (
    <div className="flex flex-col-reverse lg:grid lg:grid-cols-7">
      <Reveal className="col-start-1 col-end-4 text-[1.27rem] font-semibold">
        <div className="mb-2 text-[26px] font-bold opacity-90 md:text-3xl">
          History
        </div>
        <div className="mb-8 text-lg font-normal md:text-xl">
          Gunadarma University, commonly known as Gunadarma, is one of the
          leading private universities in Indonesia. Established in 1981
          under the initial name Program Pendidikan Ilmu Komputer (PPIK), the
          university grew rapidly and officially became Gunadarma University
          in 1996.
        </div>

        <div className="my-2 text-[26px] font-bold opacity-90 md:text-3xl">
          Location and Facilities
        </div>
        <div className="mb-8 text-lg font-normal md:text-xl">
          Gunadarma has several campuses spread across various locations in
          Jabodetabek, including Depok, Jakarta, Bekasi, and Tangerang. These
          campuses are equipped with various modern facilities such as
          computer laboratories, digital libraries, research centers, and
          comfortable lecture halls.
        </div>

        <div className="my-2 text-[26px] font-bold opacity-90 md:text-3xl">
          Advantages of Gunadarma University
        </div>
        <div className="mb-8 font-normal">
          <ol className="list-disc space-y-4 pl-5">
            <li>
              <span className="font-semibold">
                Focus on Technology and Innovation
              </span>
              <p className="text-lg md:text-xl">
                The university is known as one of the top institutions in the
                fields of technology and business. With a technology-based
                curriculum, Gunadarma graduates have high competitiveness in
                the job market.
              </p>
            </li>
            <li>
              <span className="font-semibold">
                Accreditation and Achievements
              </span>
              <p className="text-lg md:text-xl">
                Gunadarma University has received{" "}
                <span className="font-bold">Unggul</span> accreditation from
                BAN-PT and has won various national and international awards
                in research and innovation.
              </p>
            </li>
            <li>
              <span className="font-semibold">Cooperation with Industry</span>
              <p className="text-lg md:text-xl">
                Gunadarma cooperates with various large companies, both
                domestic and international, to provide internship and job
                opportunities for students.
              </p>
            </li>
          </ol>
        </div>

        <div className="my-2 text-[26px] font-bold opacity-90 md:text-3xl">
          Further Information
        </div>
        <div className="font-normal">
          <div className="mb-1 text-lg md:text-xl">
            For more information about Gunadarma University:
          </div>
          <ol className="grid list-inside list-disc gap-1 text-lg md:text-xl">
            <li>
              <a
                className="underline"
                href="https://www.gunadarma.ac.id/"
                target="_blank"
                rel="noreferrer"
              >
                Official Website
              </a>
            </li>
            <li>
              <a
                className="underline"
                href="https://studentsite.gunadarma.ac.id/"
                target="_blank"
                rel="noreferrer"
              >
                Studentsite
              </a>
            </li>
            <li>
              <a
                className="underline"
                href="https://baak.gunadarma.ac.id/"
                target="_blank"
                rel="noreferrer"
              >
                BAAK
              </a>
            </li>
          </ol>
        </div>
      </Reveal>

      <Reveal
        delay={0.15}
        y={16}
        className="col-span-3 col-end-8 mb-16 flex justify-center lg:mb-0"
      >
        <div className="relative h-112 w-full max-w-xl">
          <Image
            src="/images/gunadarma.jpeg"
            alt="Gunadarma University"
            fill
            sizes="(max-width: 1024px) 100vw, 36rem"
            className="rounded-xl object-cover"
          />
        </div>
      </Reveal>
    </div>
  );
};

export default AboutGunadarma;
