import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import SectionTitle from "./SectionTitle";
import api from "../services/api";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);

      await api.post("/", JSON.stringify(form));

      setStatus("✅ Message sent successfully.");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch {
      setStatus("❌ Something went wrong.");
    }

    setLoading(false);
  }

  return (
    <section
      id="contact"
      className="py-32"
    >
      <div className="mx-auto max-w-[1650px] px-8 lg:px-16 xl:px-24">

        <SectionTitle
          title="Let's Connect"
          subtitle="Get In Touch"
        />

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-800 bg-slate-900/40 p-10 backdrop-blur-xl"
          >

            <h2 className="text-4xl font-bold">

              Let's work together.

            </h2>

            <p className="mt-6 leading-8 text-slate-400">

              I'm currently open to full-time Software Developer
              opportunities, freelance projects and exciting
              collaborations. If you have an idea or opportunity,
              I'd love to hear from you.

            </p>

            {/* Availability */}

            <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-green-500/10 px-5 py-3 text-green-400">

              <span className="h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse"></span>

              Available for Opportunities

            </div>

            {/* Contact Cards */}

            <div className="mt-10 space-y-5">

              <div className="flex items-center gap-5 rounded-2xl border border-slate-800 bg-slate-950/40 p-5">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">

                  <FaEnvelope />

                </div>

                <div>

                  <p className="text-sm text-slate-500">

                    Email

                  </p>

                  <p>

                    ailtanmay12@gmail.com

                  </p>

                </div>

              </div>

              <div className="flex items-center gap-5 rounded-2xl border border-slate-800 bg-slate-950/40 p-5">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">

                  <FaPhoneAlt />

                </div>

                <div>

                  <p className="text-sm text-slate-500">

                    Phone

                  </p>

                  <p>

                    +91 9995348408

                  </p>

                </div>

              </div>

              <div className="flex items-center gap-5 rounded-2xl border border-slate-800 bg-slate-950/40 p-5">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">

                  <FaMapMarkerAlt />

                </div>

                <div>

                  <p className="text-sm text-slate-500">

                    Location

                  </p>

                  <p>

                    Kerala, India

                  </p>

                </div>

              </div>

            </div>

            {/* Social */}

            <div className="mt-10 flex gap-4">

              <a
                href="https://github.com/HellTanmay"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-950 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-900"
              >

                <FaGithub size={22} />

              </a>

              <a
                href="https://linkedin.com/in/tanmay-s-ail-882a772a1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-950 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-900"
              >

                <FaLinkedin size={22} />

              </a>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="rounded-3xl border border-slate-800 bg-slate-900/40 p-10 backdrop-blur-xl"
          >

            <div className="space-y-6">

              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-5 py-4 outline-none transition focus:border-cyan-400"
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-5 py-4 outline-none transition focus:border-cyan-400"
              />

              <textarea
                rows="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
                className="w-full resize-none rounded-2xl border border-slate-700 bg-slate-950 px-5 py-4 outline-none transition focus:border-cyan-400"
              />

              <button
                disabled={loading}
                className="w-full rounded-2xl bg-cyan-400 py-4 font-semibold text-slate-900 transition-all duration-300 hover:scale-[1.02] hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {status && (
                <p className="text-center text-cyan-400">
                  {status}
                </p>
              )}

            </div>

          </motion.form>

        </div>

      </div>
    </section>
  );
}