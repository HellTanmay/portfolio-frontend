import { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Achievements", id: "achievements" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);

        if (!section) return;

        const top = section.offsetTop - 140;
        const bottom = top + section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          setActive(link.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="mx-auto max-w-[1650px] px-8 lg:px-16">

        <div
          className={`flex items-center justify-between rounded-2xl border transition-all duration-300 ${
            scrolled
              ? "border-slate-800 bg-slate-950/70 backdrop-blur-xl shadow-2xl"
              : "border-transparent bg-transparent"
          } px-8 py-4`}
        >

          {/* Logo */}

          <a
            href="#home"
            className="text-3xl font-black tracking-tight"
          >
            Tanmay
            <span className="text-cyan-400">.</span>
          </a>

          {/* Desktop Nav */}

          <nav className="hidden items-center gap-2 lg:flex">

            {navLinks.map((link) => (

              <a
                key={link.id}
                href={`#${link.id}`}
                className={`relative rounded-xl px-5 py-3 text-sm font-medium transition-all duration-300 ${
                  active === link.id
                    ? "text-cyan-400"
                    : "text-slate-300 hover:text-white"
                }`}
              >

                {link.name}

                {active === link.id && (

                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 -z-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  />

                )}

              </a>

            ))}

          </nav>

          {/* Hire */}

          <a
            href="#contact"
            className="hidden rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-900 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 lg:block"
          >
            Hire Me
          </a>

          {/* Mobile */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-xl border border-slate-700 p-3 lg:hidden"
          >
            {mobileOpen ? (
              <HiX size={26} />
            ) : (
              <HiMenuAlt3 size={26} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}

        <AnimatePresence>

          {mobileOpen && (

            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              className="mt-4 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/95 backdrop-blur-xl lg:hidden"
            >

              {navLinks.map((link) => (

                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-6 py-4 transition ${
                    active === link.id
                      ? "bg-cyan-500/10 text-cyan-400"
                      : "hover:bg-slate-800"
                  }`}
                >

                  {link.name}

                </a>

              ))}

              <div className="p-5">

                <a
                  href="#contact"
                  className="block rounded-xl bg-cyan-400 py-3 text-center font-semibold text-slate-900"
                >
                  Hire Me
                </a>

              </div>

            </motion.div>

          )}

        </AnimatePresence>

      </div>
    </header>
  );
}