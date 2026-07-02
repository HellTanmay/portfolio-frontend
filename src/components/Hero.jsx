import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { HiOutlineArrowDown } from "react-icons/hi";

import Button from "./Button";
import { socials } from "../data/socials";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-cyan-500/15 blur-[150px]" />

        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-violet-500/15 blur-[150px]" />
      </div>

      <div className="mx-auto w-full max-w-[1650px] px-8 lg:px-16 xl:px-24">
        <div className="grid items-center gap-16 lg:grid-cols-5 xl:gap-28">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <p className="mb-6 uppercase tracking-[6px] text-cyan-400 font-semibold">
              Full Stack Developer
            </p>

            <h1 className="text-5xl font-black leading-[1.05] md:text-6xl xl:text-7xl">
              Hi,
              <br />
              <span className="text-white">I'm Tanmaya</span>
              <span className="text-cyan-400"> S Ail</span>
            </h1>

            <div className="mt-8 text-xl font-semibold text-slate-300 md:text-2xl">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "Laravel Developer",
                  2000,
                  "React Developer",
                  2000,
                  "MERN Stack Developer",
                  2000,
                  "ERP Developer",
                  2000,
                ]}
                repeat={Infinity}
              />
            </div>

            <p className="mt-10 max-w-2xl leading-8 text-slate-400">
              MCA graduate and Full Stack Developer passionate about building
              scalable web applications using React, Node.js, Laravel and modern
              web technologies. Experienced in developing Enterprise ERP
              Systems, Analytics Dashboards, REST APIs and AI-powered
              applications.
            </p>

            {/* Tech Pills */}

            <div className="mt-8 flex flex-wrap gap-3">
              {["React", "Laravel", "Node.js", "MySQL", "MongoDB"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-700 bg-slate-900/40 px-4 py-2 text-sm text-slate-300 backdrop-blur-xl"
                  >
                    {tech}
                  </span>
                ),
              )}
            </div>

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap gap-4">
              <Button href="/TanmayResumeJune2026.pdf">Download Resume</Button>

              <Button href="#contact" variant="secondary">
                Contact Me
              </Button>
            </div>

            {/* Socials */}

            <div className="mt-10 flex gap-5">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.link}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900/40 text-cyan-400 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-900"
                  >
                    <Icon size={22} />
                  </a>
                );
              })}
            </div>

            {/* Stats */}

            <div className="mt-16 grid max-w-xl grid-cols-3 gap-5">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 backdrop-blur-xl">
                <h2 className="text-3xl font-bold text-cyan-400">9.37</h2>

                <p className="mt-1 text-sm text-slate-400">BCA CGPA</p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 backdrop-blur-xl">
                <h2 className="text-3xl font-bold text-cyan-400">10+</h2>

                <p className="mt-1 text-sm text-slate-400">Projects</p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 backdrop-blur-xl">
                <h2 className="text-3xl font-bold text-cyan-400">15+</h2>

                <p className="mt-1 text-sm text-slate-400">Technologies</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center lg:col-span-2 lg:justify-between"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-cyan-500/30 blur-[90px]" />

              <div className="relative overflow-hidden rounded-[32px] border border-slate-700 bg-slate-900/40 shadow-2xl backdrop-blur-xl">
                <img
                  src="24250207.png"
                  alt="Tanmay"
                  className="w-[290px] object-cover md:w-[340px] xl:w-[380px]"
                />
              </div>

              {/* Floating Badges */}

              <div className="absolute -left-8 top-4 rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm backdrop-blur-xl">
                💻 MERN
              </div>

              <div className="absolute -right-8 top-28 rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm backdrop-blur-xl">
                ⚡ Laravel
              </div>

              <div className="absolute -bottom-4 -left-6 rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm backdrop-blur-xl">
                🚀 React
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-4xl text-cyan-400">
        <HiOutlineArrowDown />
      </div>
    </section>
  );
}
