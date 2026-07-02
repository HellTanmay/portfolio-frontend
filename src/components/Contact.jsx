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

      const a = await api.post("/", JSON.stringify(form));
      console.log(a);
      setStatus("Message sent successfully.");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      setStatus("Something went wrong.");
    }

    setLoading(false);
  }

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-[1500px] mx-auto">
        <SectionTitle title="Let's Connect" subtitle="Contact" />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold">
              Let's build something amazing.
            </h2>

            <p className="text-slate-400 leading-8">
              I'm currently open to internships, freelance projects and
              full-time opportunities.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-5">
                <FaEnvelope className="text-cyan-400 text-xl" />

                <span>ailtanmay12@gmail.com</span>
              </div>

              <div className="flex items-center gap-5">
                <FaPhoneAlt className="text-cyan-400 text-xl" />

                <span>+91 9995348408</span>
              </div>

              <div className="flex items-center gap-5">
                <FaMapMarkerAlt className="text-cyan-400 text-xl" />

                <span>Kerala, India</span>
              </div>
            </div>

            <div className="flex gap-6 text-3xl pt-6">
              <a href="https://github.com/HellTanmay" target="_blank">
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/tanmay-s-ail-882a772a1"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6 rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-xl p-8"
          >
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full rounded-xl bg-slate-950 border border-slate-700 px-5 py-4 outline-none focus:border-cyan-400"
              required
            />

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              type="email"
              className="w-full rounded-xl bg-slate-950 border border-slate-700 px-5 py-4 outline-none focus:border-cyan-400"
              required
            />

            <textarea
              rows="6"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full rounded-xl bg-slate-950 border border-slate-700 px-5 py-4 outline-none resize-none focus:border-cyan-400"
              required
            />

            <button
              disabled={loading}
              className="w-full rounded-xl bg-cyan-400 py-4 font-semibold text-slate-900 transition hover:bg-cyan-300"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status && <p className="text-center text-cyan-400">{status}</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
