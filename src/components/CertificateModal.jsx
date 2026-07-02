import { motion } from "framer-motion";
import {
  FaTimes,
  FaExternalLinkAlt,
  FaDownload,
} from "react-icons/fa";

export default function CertificateModal({
  certificate,
  onClose,
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
          y: 40,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          scale: 0.9,
          y: 40,
        }}
        transition={{
          duration: 0.3,
        }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-800 bg-slate-900"
      >
        {/* Close */}

        <button
          onClick={onClose}
          className="absolute right-6 top-6 rounded-full border border-slate-700 p-3 transition hover:border-cyan-400"
        >
          <FaTimes />
        </button>

        <div className="grid lg:grid-cols-2">

          {/* LEFT */}

          <div className="p-10">

            <div className="flex items-center gap-4">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-3xl text-cyan-400">

                <certificate.icon />

              </div>

              <div>

                <h2 className="text-3xl font-bold">

                  {certificate.title}

                </h2>

                <p className="mt-2 text-cyan-400">

                  {certificate.issuer}

                </p>

              </div>

            </div>

            <span className="mt-8 inline-block rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">

              {certificate.year}

            </span>

            <p className="mt-8 leading-8 text-slate-400">

              {certificate.description}

            </p>

            <div className="mt-10 flex gap-4">

              <a
                href={certificate.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-900 transition hover:scale-105"
              >
                <FaExternalLinkAlt />

                View
              </a>

              <a
                href={certificate.certificate}
                download
                className="flex items-center gap-3 rounded-xl border border-slate-700 px-6 py-3 transition hover:border-cyan-400"
              >
                <FaDownload />

                Download
              </a>

            </div>

          </div>

          {/* RIGHT */}

          <div className="border-l border-slate-800 bg-slate-950">

            {certificate.certificate.endsWith(".pdf") ? (

              <iframe
                src={certificate.certificate}
                className="h-[650px] w-full"
                title={certificate.title}
              />

            ) : (

              <img
                src={certificate.certificate}
                alt={certificate.title}
                className="h-[650px] w-full object-contain p-8"
              />

            )}

          </div>

        </div>

      </motion.div>
    </motion.div>
  );
}