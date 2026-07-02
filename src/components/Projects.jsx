import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-32"
    >
      <div className="mx-auto max-w-[1650px] px-8 lg:px-16 xl:px-24">

        <SectionTitle
          title="Projects"
          subtitle="A collection of applications I've built"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center leading-8 text-slate-400"
        >
          From enterprise software and healthcare systems to AI-powered
          solutions and full stack web applications, each project has
          helped me strengthen my problem-solving skills and explore new
          technologies.
        </motion.p>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">

          {projects.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
            >

              <ProjectCard {...project} />

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}