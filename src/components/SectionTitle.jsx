import { motion } from "framer-motion";

export default function SectionTitle({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center mb-20"
    >
      <p className="uppercase tracking-[6px] text-cyan-400 mb-3">
        {subtitle}
      </p>

      <h2 className="text-5xl font-black">
        {title}
      </h2>

      <div className="w-24 h-1 bg-cyan-400 mx-auto rounded-full mt-6" />
    </motion.div>
  );
}