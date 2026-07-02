import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import SectionTitle from "./SectionTitle";
import CertificateModal from "./CertificateModal";
import { achievements } from "../data/achievements";

export default function Achievements() {
  const [active, setActive] = useState(0);
  const [selected, setSelected] = useState(null);

  const total = achievements.length;

  const next = () => {
    setActive((prev) => (prev + 1) % total);
  };

  const prev = () => {
    setActive((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const getPosition = (index) => {
    let diff = index - active;

    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    return diff;
  };

  const getStyles = (position) => {
    switch (position) {
      case 0:
        return {
          x: 0,
          scale: 1,
          rotateY: 0,
          opacity: 1,
          zIndex: 50,
          blur: "blur(0px)",
        };

      case -1:
        return {
          x: -360,
          scale: 0.86,
          rotateY: 30,
          opacity: 0.9,
          zIndex: 40,
          blur: "blur(1px)",
        };

      case 1:
        return {
          x: 360,
          scale: 0.86,
          rotateY: -30,
          opacity: 0.9,
          zIndex: 40,
          blur: "blur(1px)",
        };

      case -2:
        return {
          x: -650,
          scale: 0.72,
          rotateY: 45,
          opacity: 0.35,
          zIndex: 30,
          blur: "blur(3px)",
        };

      case 2:
        return {
          x: 650,
          scale: 0.72,
          rotateY: -45,
          opacity: 0.35,
          zIndex: 30,
          blur: "blur(3px)",
        };

      default:
        return {
          x: position > 0 ? 900 : -900,
          scale: 0.55,
          rotateY: position > 0 ? -60 : 60,
          opacity: 0,
          zIndex: 0,
          blur: "blur(8px)",
        };
    }
  };

  return (
    <section id="achievements" className="overflow-hidden py-32">
      <div className="mx-auto max-w-[1700px] px-8 lg:px-16">
        <SectionTitle
          title="Certifications & Achievements"
          subtitle="Professional Credentials"
        />

        <div
          className="relative mt-24 flex items-center justify-center"
          style={{ perspective: "1800px" }}
        >
          <button
            onClick={prev}
            className="absolute left-0 z-[100] rounded-full border border-slate-700 bg-slate-900/80 p-4 backdrop-blur-xl transition hover:border-cyan-400 hover:scale-110"
          >
            <FaChevronLeft />
          </button>

          <div className="relative flex h-[500px] w-full items-center justify-center">
            {achievements.map((item, index) => {
              const position = getPosition(index);
              const styles = getStyles(position);
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={false}
                  animate={{
                    x: styles.x,
                    scale: styles.scale,
                    rotateY: styles.rotateY,
                    opacity: styles.opacity,
                    zIndex: styles.zIndex,
                    filter: styles.blur,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                  className="absolute cursor-pointer"
                  onClick={() => {
                    if (position === 0) {
                      setSelected(item);
                    } else {
                      setActive(index);
                    }
                  }}
                >
                  <motion.div
                    whileHover={
                      position === 0
                        ? {
                            y: -8,
                            scale: 1.02,
                          }
                        : {}
                    }
                    className={`w-[360px] rounded-[32px] border backdrop-blur-xl transition-all duration-500 ${
                      position === 0
                        ? "border-cyan-400 bg-slate-900 shadow-[0_25px_80px_rgba(34,211,238,0.25)]"
                        : "border-slate-800 bg-slate-900/60"
                    }`}
                  >
                    <div className="p-8">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-3xl text-cyan-400">
                        <Icon />
                      </div>

                      <h2 className="mt-8 text-2xl font-bold text-white">
                        {item.title}
                      </h2>

                      <p className="mt-2 text-cyan-400">{item.issuer}</p>

                      <span className="mt-5 inline-flex rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
                        {item.year}
                      </span>

                      <p className="mt-6 line-clamp-4 leading-7 text-slate-400">
                        {item.description}
                      </p>

                      {position === 0 && (
                        <motion.button
                          initial={{
                            opacity: 0,
                            y: 20,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            delay: 0.15,
                          }}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelected(item);
                          }}
                          className="mt-8 w-full rounded-xl bg-cyan-400 py-3 font-semibold text-slate-900 transition hover:scale-[1.03]"
                        >
                          View Certificate
                        </motion.button>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Button */}

          <button
            onClick={next}
            className="absolute right-0 z-[100] rounded-full border border-slate-700 bg-slate-900/80 p-4 backdrop-blur-xl transition hover:border-cyan-400 hover:scale-110"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Indicators */}

        <div className="mt-16 flex justify-center gap-3">
          {achievements.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`transition-all duration-300 ${
                active === index
                  ? "h-3 w-10 rounded-full bg-cyan-400"
                  : "h-3 w-3 rounded-full bg-slate-700 hover:bg-slate-500"
              }`}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <CertificateModal
            certificate={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
