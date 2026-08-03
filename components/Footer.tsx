import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Reveal from "@/components/animations/Reveal";

const Footer = () => {
  return (
    <footer className="mt-32 bg-[#FDF6EC]">
      <div className="mx-auto max-w-7xl px-6 pb-10 lg:px-10">
        {/* CTA */}
        <Reveal>
          <div className="rounded-[36px] border-[3px] border-black bg-[#7D9DFF] p-10 shadow-[10px_10px_0px_#000] md:p-16">
            <div className="flex flex-col items-center text-center">
              <p className="text-sm font-bold tracking-[0.35em] uppercase">
                Let&apos;s Work Together
              </p>

              <h2 className="mt-4 text-4xl font-black md:text-6xl">
                Have a project in mind?
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8">
                I&apos;m always excited to collaborate on meaningful projects, AI
                applications, and modern web experiences.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Footer */}
        <div className="mt-20 flex flex-col items-center justify-between gap-10 border-t-[3px] border-black pt-10 text-center md:flex-row md:text-start">
          <div>
            <h2 className="text-4xl font-black">Arif.</h2>

            <p className="mt-2 text-zinc-600">
              Computer Science Student <br />
              AI & Full Stack Enthusiast
            </p>
          </div>

          <div className="flex gap-6 text-3xl">
            <a
              href="https://github.com/arifnrhdi"
              target="_blank"
              rel="noreferrer"
              className="transition hover:-translate-y-1"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>

            <a
              href="https://www.linkedin.com/in/arif-nurhadii/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:-translate-y-1"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>

            <a
              href="https://www.instagram.com/hikorii__/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:-translate-y-1"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            <a
              href="mailto:arfnrhdi17@gmail.com"
              className="transition hover:-translate-y-1"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-zinc-300 pt-6 text-center text-zinc-500">
          © {new Date().getFullYear()} Arif Nurhadi. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
