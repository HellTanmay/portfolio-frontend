import { motion } from "framer-motion";

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
}) {
  const base =
    "px-7 py-3 rounded-xl font-semibold transition-all duration-300";

  const styles = {
    primary:
      "bg-cyan-400 text-slate-900 hover:bg-cyan-300 shadow-lg shadow-cyan-500/20",

    secondary:
      "border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900",

    dark:
      "bg-slate-800 hover:bg-slate-700",
  };

  const className = `${base} ${styles[variant]}`;

  if (href)
    return (
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href={href}
        className={className}
      >
        {children}
      </motion.a>
    );

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={className}
    >
      {children}
    </motion.button>
  );
}