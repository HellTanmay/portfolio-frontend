import { motion } from "framer-motion";
import { HiAcademicCap } from "react-icons/hi";
import {
  FaLaptopCode,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

import SectionTitle from "./SectionTitle";
import Button from "./Button";

const info = [
  {
    icon: <HiAcademicCap />,
    title: "Education",
    value: "Master of Computer Applications",
    subtitle: "St Aloysius (Deemed to be University)",
  },
  {
    icon: <FaLaptopCode />,
    title: "Experience",
    value: "Full Stack Developer Intern",
    subtitle: "Techpath Learning Pvt. Ltd.",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    value: "Kerala, India",
    subtitle: "Open to Relocation",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "ailtanmay12@gmail.com",
    subtitle: "",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    value: "+91 9995348408",
    subtitle: "",
  },
  {
    icon: <FaLaptopCode />,
    title: "Specialization",
    value: "MERN & Laravel",
    subtitle: "Full Stack Development",
  },
];

export default function About() {
  return (
    <section id="about" className="py-32">
      <div className="mx-auto max-w-[1650px] px-8 lg:px-16 xl:px-24">
        <SectionTitle title="About Me" subtitle="Who I Am" />

        <div className="grid items-center gap-10 lg:grid-cols-5">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <h3 className="text-4xl md:text-5xl font-black leading-tight">
              Passionate about building
              <span className="text-cyan-400"> enterprise software.</span>
            </h3>

            <p className="mt-8 max-w-3xl text-lg leading-9 text-slate-400">
              I'm a Full Stack Developer passionate about building scalable,
              user-centric applications that solve real-world problems. I enjoy
              working across the entire development lifecycle, from designing
              intuitive user interfaces to developing secure backend systems and
              RESTful APIs. My expertise spans modern web technologies including
              React, Node.js, Laravel, Express.js, PHP, MySQL, MongoDB, and
              Java. Over the years, I've built enterprise applications,
              healthcare solutions, AI-powered systems, machine learning
              projects, and full-stack web platforms while continuously
              exploring new technologies and development practices.
            </p>

            <p className="mt-8 max-w-3xl text-lg leading-9 text-slate-400">
              I recently completed a Full Stack Developer Internship at Techpath
              Learning Pvt. Ltd., where I gained hands-on experience developing
              production-ready software in collaborative Agile environments.
              This experience strengthened my understanding of enterprise
              application development, software architecture, code quality, and
              team collaboration.
            </p>

            {/* Highlight Card */}

            <div className="mt-10 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-6 backdrop-blur-xl">
              <h4 className="text-xl font-semibold text-cyan-400">
                What I Enjoy Building
              </h4>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-2">
                  <span>🚀</span>
                  <span>Full Stack Web Applications</span>
                </div>

                <div className="flex items-center gap-2">
                  <span>🏢</span>
                  <span>Enterprise Software</span>
                </div>

                <div className="flex items-center gap-2">
                  <span>🤖</span>
                  <span>AI & Machine Learning Solutions</span>
                </div>

                <div className="flex items-center gap-2">
                  <span>⚙️</span>
                  <span>REST APIs & Backend Systems</span>
                </div>

                <div className="flex items-center gap-2">
                  <span>📱</span>
                  <span>Modern Responsive Interfaces</span>
                </div>

                <div className="flex items-center gap-2">
                  <span>💡</span>
                  <span>Scalable Problem Solving</span>
                </div>
              </div>
            </div>

         
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid gap-5 sm:grid-cols-2 lg:col-span-2 lg:mt-[-400px]"
          >
            {info.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-500/10 text-2xl text-cyan-400">
                    {item.icon}
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">{item.title}</p>

                    <h4 className="mt-1 text-base font-semibold leading-6">
                      {item.value}
                    </h4>

                    {item.subtitle && (
                      <p className="mt-1 text-sm text-slate-400">
                        {item.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
