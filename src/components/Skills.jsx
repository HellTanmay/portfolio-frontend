import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-32"
    >
      <div className="mx-auto max-w-[1650px] px-8 lg:px-16 xl:px-24">

        <SectionTitle
          title="Tech Stack"
          subtitle="Skills & Technologies"
        />

        <div className="grid gap-10 lg:grid-cols-2">

          {skills.map((category, index) => (

            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .5,
                delay: index * .15,
              }}
              viewport={{ once: true }}
              className="rounded-3xl border border-slate-800 bg-slate-900/40 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400"
            >

              <div className="mb-8 flex items-center justify-between">

                <h3 className="text-2xl font-bold text-cyan-400">
                  {category.title}
                </h3>

                <span className="rounded-full bg-cyan-500/10 px-4 py-1 text-sm text-cyan-400">
                  {category.skills.length} Skills
                </span>

              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">

                {category.skills.map((skill) => {

                  const Icon = skill.icon;

                  return (

                    <motion.div
                      key={skill.name}
                      whileHover={{
                        y: -6,
                        scale: 1.03,
                      }}
                      transition={{ duration: .2 }}
                      className="group rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-center transition-all duration-300 hover:border-cyan-400 hover:bg-slate-900"
                    >

                      <Icon
                        className="mx-auto mb-3 text-4xl transition-transform duration-300 group-hover:scale-110"
                        style={{ color: skill.color }}
                      />

                      <p className="text-sm font-medium">
                        {skill.name}
                      </p>

                    </motion.div>

                  );

                })}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}