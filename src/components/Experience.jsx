import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { experience } from "../data/experience";
import {
  FaBriefcase,
  FaGraduationCap,
  FaTrophy,
} from "react-icons/fa";

const getIcon = (title) => {
  if (title.toLowerCase().includes("intern"))
    return <FaBriefcase />;

  if (
    title.toLowerCase().includes("master") ||
    title.toLowerCase().includes("bachelor")
  )
    return <FaGraduationCap />;

  return <FaTrophy />;
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-32"
    >
      <div className="mx-auto max-w-[1500px] px-8 lg:px-16 xl:px-24">

        <SectionTitle
          title="Experience & Education"
          subtitle="My Journey"
        />

        <div className="relative mt-20">

          {/* Timeline */}

          <div className="absolute left-5 top-0 h-full w-[2px] bg-slate-700 lg:left-1/2 lg:-translate-x-1/2"></div>

          {experience.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
              }}
              viewport={{ once: true }}
              className={`mb-10 flex items-center ${
                index % 2 === 0
                  ? "lg:flex-row"
                  : "lg:flex-row-reverse"
              } flex-col lg:gap-10`}
            >

              {/* Card */}

              <motion.div
                whileHover={{
                  y: -6,
                }}
                className="w-full lg:w-5/12"
              >

                <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400">

                  {/* Header */}

                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-3">

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 text-lg text-cyan-400">

                        {getIcon(item.title)}

                      </div>

                      <div>

                        <h3 className="text-xl font-bold">

                          {item.title}

                        </h3>

                        <p className="text-sm text-cyan-400">

                          {item.company}

                        </p>

                      </div>

                    </div>

                    <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400">

                      {item.year}

                    </span>

                  </div>

                  {/* Description */}

                  <p className="mt-5 text-sm leading-7 text-slate-400">

                    {item.description}

                  </p>

                </div>

              </motion.div>

              {/* Timeline Dot */}

              <div className="relative z-10 flex h-12 w-12 items-center justify-center">

                <div className="h-4 w-4 rounded-full border-4 border-slate-950 bg-cyan-400 shadow-lg shadow-cyan-500/50"></div>

              </div>

              {/* Empty Space */}

              <div className="hidden lg:block lg:w-5/12"></div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}