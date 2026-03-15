"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      if (!supabase) {
        throw new Error("Supabase is not configured");
      }

      const { error } = await supabase.from("contacts").insert([
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
      ]);

      if (error) throw error;

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="snap-section flex items-center px-6 py-20">
      {/* Background image */}
      <div
        className="section-bg"
        style={{ backgroundImage: "url('zaki-aby-city-view-sunset.jpg')" }}
      />

      <div className="absolute inset-0 cyber-grid opacity-20 z-[2]" />

      <div className="relative z-10 max-w-2xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold font-display text-center mb-4"
        >
          <span className="gradient-text">Get In Touch</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-text-muted font-mono text-sm mb-12"
        >
          &gt; open contact_form.exe --send-message
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-mono text-neon-cyan mb-2 uppercase tracking-wider">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-border-cyber text-text focus:border-neon-cyan outline-none transition-all font-mono text-sm backdrop-blur-md"
              style={{ background: "rgba(11,11,30,0.88)" }}
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-mono text-neon-cyan mb-2 uppercase tracking-wider">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-border-cyber text-text focus:border-neon-cyan outline-none transition-all font-mono text-sm backdrop-blur-md"
              style={{ background: "rgba(11,11,30,0.88)" }}
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-mono text-neon-cyan mb-2 uppercase tracking-wider">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-border-cyber text-text focus:border-neon-cyan outline-none transition-all font-mono text-sm resize-none backdrop-blur-md"
              style={{ background: "rgba(11,11,30,0.88)" }}
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-6 disabled:opacity-50 text-neon-pink font-display font-bold rounded-lg border transition-all uppercase tracking-wider text-sm glow-pink"
            style={{ background: "rgba(255,62,165,0.12)", borderColor: "rgba(255,62,165,0.45)" }}
          >
            {loading ? "Transmitting..." : "Send Message"}
          </button>

          {status === "success" && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-neon-green text-center font-mono text-sm"
            >
              &gt; Message transmitted successfully! Awaiting response...
            </motion.p>
          )}

          {status === "error" && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-neon-pink text-center font-mono text-sm"
            >
              &gt; ERROR: Transmission failed. Retry later.
            </motion.p>
          )}
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center gap-6 mt-10"
        >
          <a
            href="https://github.com/yksu0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-neon-pink transition-colors"
            aria-label="GitHub"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="mailto:your@email.com"
            className="text-text-muted hover:text-neon-cyan transition-colors"
            aria-label="Email"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
