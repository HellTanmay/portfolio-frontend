import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative border-t border-slate-800 bg-slate-950">

      {/* Gradient */}

      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-16 relative">

        {/* CTA */}

        <div className="text-center">

          <h2 className="text-4xl md:text-5xl font-black">

            Let's Build Something

            <span className="text-cyan-400">

              {" "}Amazing

            </span>

          </h2>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto leading-8">

            Thanks for visiting my portfolio.
            If you have an opportunity,
            project or just want to connect,
            I'd love to hear from you.

          </p>

        </div>

        {/* Socials */}

        <div className="flex justify-center gap-8 mt-12 text-3xl">

          <a
            href="https://github.com/HellTanmay"
            target="_blank"
            className="hover:text-cyan-400 transition hover:-translate-y-1"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/tanmay-s-ail-882a772a1"
            target="_blank"
            className="hover:text-cyan-400 transition hover:-translate-y-1"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://instagram.com/tanmay_.ll"
            target="_blank"
            className="hover:text-cyan-400 transition hover:-translate-y-1"
          >
            <FaInstagram />
          </a>

        </div>

        {/* Bottom */}

        <div className="border-t border-slate-800 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-slate-500">

            © {new Date().getFullYear()} Tanmay S Ail.

            All Rights Reserved.

          </p>

          <button
            onClick={scrollTop}
            className="h-12 w-12 rounded-full bg-cyan-400 text-slate-900 flex items-center justify-center hover:scale-110 transition"
          >
            <FaArrowUp />
          </button>

        </div>

      </div>

    </footer>
  );
}