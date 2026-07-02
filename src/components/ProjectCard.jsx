import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({
  image,
  title,
  category,
  description,
  technologies,
  github,
  live,
}) {
  return (
   <motion.div
    whileHover={{ y: -8 }}
    className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400"
>
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
      </div>

      <div className="p-5">

        <span className="text-cyan-400 text-sm uppercase tracking-widest">
          {category}
        </span>

        <h3 className="mt-3 text-xl font-bold">
          {title}
        </h3>

        <p className="mt-3 text-sm text-slate-400 ">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-700 bg-slate-950 px-4 py-2 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between">

    <div className="flex gap-3">

        <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition hover:bg-cyan-400 hover:text-slate-900"
        >
            <FaGithub />
        </a>

        <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition hover:bg-cyan-400 hover:text-slate-900"
        >
            <FaExternalLinkAlt />
        </a>

    </div>

</div>

      </div>
    </motion.div>
  );
}