"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Custom GRUB Menu for Multiboot System",
    description:
      "A custom GRUB menu configuration for managing multiple operating systems on a single machine.",
    details:
      "Designed and implemented a fully customized GRUB bootloader theme with a graphical menu for selecting between multiple Linux distributions and Windows installations. Features include custom background themes, organized menu entries with icons, automated OS detection scripts, and a clean terminal-style interface. The configuration supports chainloading for Windows and direct kernel booting for Linux distros.",
    features: [
      "Custom graphical GRUB theme with icons",
      "Multi-OS chainloading support",
      "Automated OS detection via scripts",
      "Clean terminal-style boot menu",
    ],
    screenshots: [
      { label: "Boot Menu", placeholder: true },
      { label: "Theme Configuration", placeholder: true },
      { label: "OS Selection", placeholder: true },
    ],
    tech: ["Bash", "Linux", "GRUB"],
    accent: { border: "rgba(0,245,255,0.35)", glow: "rgba(0,245,255,0.18)", text: "#00f5ff", bg: "rgba(0,245,255,0.1)" },
  },
  {
    title: "Green Thumb Gardening E-commerce",
    description:
      "An e-commerce website for gardening products with a shopping cart, order management, and user authentication.",
    details:
      "Built a full-stack e-commerce platform for gardening supplies featuring product catalog browsing, shopping cart with quantity management, secure user registration & login, order placement and tracking, and an admin dashboard for product and order management. The system uses PHP sessions for authentication and MySQL for persistent data storage.",
    features: [
      "Product catalog with search & filters",
      "Shopping cart with quantity controls",
      "User registration & authentication",
      "Admin dashboard for inventory management",
    ],
    screenshots: [
      { label: "Homepage", placeholder: true },
      { label: "Product Catalog", placeholder: true },
      { label: "Shopping Cart", placeholder: true },
      { label: "Admin Dashboard", placeholder: true },
    ],
    tech: ["PHP", "MySQL", "JavaScript", "CSS"],
    accent: { border: "rgba(255,62,165,0.35)", glow: "rgba(255,62,165,0.18)", text: "#ff3ea5", bg: "rgba(255,62,165,0.1)" },
  },
  {
    title: "Gym Management System",
    description:
      "A comprehensive system for managing gym memberships, schedules, and member tracking with an intuitive dashboard.",
    details:
      "Developed a management system for gym operations including member registration, membership plan management, attendance tracking, payment recording, and schedule management. Features an admin dashboard with analytics showing membership statistics, revenue tracking, and member activity reports. The system streamlines day-to-day gym operations with an intuitive interface.",
    features: [
      "Member registration & profile management",
      "Membership plan & payment tracking",
      "Attendance logging system",
      "Analytics dashboard with reports",
    ],
    screenshots: [
      { label: "Dashboard Overview", placeholder: true },
      { label: "Member Management", placeholder: true },
      { label: "Payment Records", placeholder: true },
    ],
    tech: ["PHP", "MySQL", "HTML", "CSS"],
    accent: { border: "rgba(201,78,240,0.35)", glow: "rgba(201,78,240,0.18)", text: "#c94ef0", bg: "rgba(201,78,240,0.1)" },
  },
  {
    title: "Hydroponics IoT System",
    description:
      "An IoT-powered hydroponics monitoring system that tracks water levels, pH, and nutrient data in real-time.",
    details:
      "Engineered an IoT monitoring solution for hydroponics farming using sensors to collect real-time data on water levels, pH balance, temperature, and nutrient concentration. Data is transmitted to a Supabase backend for storage and displayed on a live web dashboard with historical charts. The system includes configurable alert thresholds that notify users when parameters go out of optimal range.",
    features: [
      "Real-time sensor data collection",
      "Live dashboard with historical charts",
      "Configurable alert thresholds",
      "Supabase backend for data storage",
    ],
    screenshots: [
      { label: "Live Dashboard", placeholder: true },
      { label: "Sensor Readings", placeholder: true },
      { label: "Alert Configuration", placeholder: true },
    ],
    tech: ["Python", "IoT", "Supabase"],
    accent: { border: "rgba(80,255,48,0.35)", glow: "rgba(80,255,48,0.18)", text: "#50ff30", bg: "rgba(80,255,48,0.1)" },
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="snap-section flex items-center px-6 py-20">
      {/* Background image */}
      <div
        className="section-bg"
        style={{ backgroundImage: "url('/zaki-image7.jpg')" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold font-display text-center mb-4"
        >
          <span className="gradient-text">Projects &amp; Sample Works</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-text-muted font-mono text-sm mb-12"
        >
          &gt; cat ~/projects/*.md
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => {
            const a = project.accent;
            return (
              <motion.div
                key={project.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                onClick={() => setSelected(project)}
                className="backdrop-blur-md rounded-lg overflow-hidden border transition-all cursor-pointer group"
                style={{ background: "rgba(11,11,30,0.88)", borderColor: a.border, boxShadow: `0 0 22px ${a.glow}` }}
              >
                <div
                  className="relative h-44 flex items-center justify-center overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${a.bg}, rgba(11,11,30,0.9))` }}
                >
                  <div className="text-text-muted text-sm font-mono">
                    <svg className="w-14 h-14 mx-auto mb-2 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="opacity-30">[ screenshot ]</span>
                  </div>
                  {/* Click hint overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "rgba(11,11,30,0.6)" }}>
                    <span className="font-mono text-sm px-4 py-2 rounded border" style={{ color: a.text, borderColor: a.text }}>
                      Click to view details →
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold font-display uppercase tracking-wide mb-2" style={{ color: a.text }}>
                    {project.title}
                  </h3>
                  <p className="text-text-dim text-sm font-mono mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono px-3 py-1 rounded-full border"
                        style={{ color: a.text, borderColor: a.border, background: a.bg }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

            {/* Modal content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-xl border backdrop-blur-xl"
              style={{
                background: "rgba(11,11,30,0.96)",
                borderColor: selected.accent.border,
                boxShadow: `0 0 40px ${selected.accent.glow}, 0 0 80px ${selected.accent.glow}`,
              }}
            >
              {/* Close button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full border flex items-center justify-center font-mono text-lg hover:scale-110 transition-transform"
                style={{ borderColor: selected.accent.border, color: selected.accent.text, background: "rgba(11,11,30,0.9)" }}
              >
                ✕
              </button>

              {/* Header */}
              <div className="p-8 pb-0">
                <p className="font-mono text-xs text-text-muted mb-2 uppercase tracking-widest">
                  &gt; project --details
                </p>
                <h3 className="text-2xl md:text-3xl font-bold font-display uppercase tracking-wide mb-3" style={{ color: selected.accent.text }}>
                  {selected.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selected.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-3 py-1 rounded-full border"
                      style={{ color: selected.accent.text, borderColor: selected.accent.border, background: selected.accent.bg }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Screenshots */}
              <div className="px-8 pb-6">
                <p className="font-mono text-xs text-text-muted mb-3 uppercase tracking-widest">
                  &gt; screenshots
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {selected.screenshots.map((ss, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg border overflow-hidden aspect-video flex items-center justify-center"
                      style={{ borderColor: selected.accent.border, background: `linear-gradient(135deg, ${selected.accent.bg}, rgba(11,11,30,0.9))` }}
                    >
                      <div className="text-center">
                        <svg className="w-8 h-8 mx-auto mb-1 opacity-30 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-[10px] font-mono text-text-muted opacity-50">{ss.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Details */}
              <div className="px-8 pb-6">
                <p className="font-mono text-xs text-text-muted mb-3 uppercase tracking-widest">
                  &gt; description
                </p>
                <p className="text-text-dim text-sm font-mono leading-relaxed">
                  {selected.details}
                </p>
              </div>

              {/* Features */}
              <div className="px-8 pb-6">
                <p className="font-mono text-xs text-text-muted mb-3 uppercase tracking-widest">
                  &gt; features
                </p>
                <ul className="space-y-2">
                  {selected.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm font-mono text-text-dim">
                      <span style={{ color: selected.accent.text }}>▹</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer */}
              <div className="px-8 pb-8">
                <button
                  onClick={() => setSelected(null)}
                  className="font-mono text-sm text-text-muted hover:text-text transition-colors"
                >
                  ← Back to projects
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
