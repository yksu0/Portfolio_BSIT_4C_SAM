"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skills = [
  { name: "HTML", level: 75, desc: "Semantic markup, accessibility best practices, and modern HTML5 APIs for structuring web content." },
  { name: "CSS", level: 67, desc: "Responsive layouts with Flexbox & Grid, animations, custom properties, and modern CSS techniques." },
  { name: "JavaScript", level: 70, desc: "ES6+ features, DOM manipulation, async/await, and building interactive web applications." },
  { name: "PHP", level: 80, desc: "Server-side scripting, form handling, session management, and building dynamic web applications." },
  { name: "Python", level: 70, desc: "General-purpose scripting, data handling, automation, and backend development with frameworks." },
  { name: "Django", level: 40, desc: "Python web framework — models, views, templates, authentication, and REST API development." },
  { name: "MySQL", level: 65, desc: "Relational database design, SQL queries, joins, indexing, and data management." },
  { name: "Supabase", level: 45, desc: "Backend-as-a-service with Postgres, real-time subscriptions, auth, and storage APIs." },
  { name: "Git / GitHub", level: 87, desc: "Version control workflows, branching strategies, pull requests, and collaborative development." },
  { name: "Next.js", level: 70, desc: "React framework with server-side rendering, static generation, API routes, and App Router." },
  { name: "React", level: 69, desc: "Component-based UI development, hooks, state management, and building single-page applications." },
  { name: "Tailwind CSS", level: 74, desc: "Utility-first CSS framework for rapid UI development with responsive design and theming." },
];

function getProficiencyLabel(level) {
  if (level >= 90) return "Expert";
  if (level >= 75) return "Advanced";
  if (level >= 50) return "Intermediate";
  if (level >= 25) return "Beginner";
  return "Novice";
}

const neonColors = [
  { bar: "#ff3ea5", glow: "rgba(255,62,165,0.5)" },
  { bar: "#00f5ff", glow: "rgba(0,245,255,0.5)" },
  { bar: "#c94ef0", glow: "rgba(201,78,240,0.5)" },
  { bar: "#ffe94a", glow: "rgba(255,233,74,0.5)" },
  { bar: "#50ff30", glow: "rgba(80,255,48,0.5)" },
  { bar: "#ff80d5", glow: "rgba(255,128,213,0.5)" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

// Utility to detect mobile
function isMobile() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(pointer: coarse)").matches;
}

export default function Skills() {
  const [hovered, setHovered] = useState(null);

  // Track tap for mobile
  const handleSkillClick = (i) => {
    if (isMobile()) {
      setHovered(hovered === i ? null : i);
    }
  };

  return (
    <section id="skills" className="snap-section flex items-center px-6 py-20">
      {/* Background image */}
      <div
        className="section-bg"
        style={{ backgroundImage: "url('/za-ki-image-01.jpg')" }}
      />

      <div className="absolute inset-0 cyber-grid opacity-20 z-[2]" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold font-display text-center mb-4"
        >
          <span className="gradient-text">Skills &amp; Technologies</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-text-muted font-mono text-sm mb-12"
        >
          &gt; loading skill_matrix.exe...
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {skills.map((skill, i) => {
            const color = neonColors[i % neonColors.length];
            return (
              <motion.div
                key={skill.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                onHoverStart={() => setHovered(i)}
                onHoverEnd={() => setHovered(null)}
                className="relative backdrop-blur-md rounded-lg p-5 border border-border-cyber hover:border-neon-cyan transition-all cursor-default"
                style={{ background: "rgba(11,11,30,0.88)", zIndex: hovered === i ? 50 : 1 }}
                onClick={() => handleSkillClick(i)}
              >
                <h3 className="font-mono font-semibold text-text text-sm mb-3 uppercase tracking-wider">
                  {skill.name}
                </h3>
                <div className="w-full rounded-full h-2.5 overflow-hidden" style={{ background: "rgba(11,11,30,0.8)" }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.08 + 0.3 }}
                    className="h-2.5 rounded-full"
                    style={{ background: color.bar, boxShadow: `0 0 10px ${color.glow}` }}
                  />
                </div>
                <p className="text-xs text-text-dim mt-2 font-mono">
                  {skill.level}%
                </p>

                {/* Hover detail popup */}
                <AnimatePresence>
                  {hovered === i && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 right-0 top-full mt-2 z-50 rounded-lg p-4 border backdrop-blur-xl"
                      style={{
                        background: "rgba(11,11,30,0.95)",
                        borderColor: color.bar,
                        boxShadow: `0 0 20px ${color.glow}, 0 8px 32px rgba(0,0,0,0.6)`,
                      }}
                    >
                      <p className="text-xs text-text-dim font-mono leading-relaxed">
                        {skill.desc}
                      </p>
                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: color.bar }}>
                          {getProficiencyLabel(skill.level)}
                        </span>
                        <div className="flex-1 h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.1)" }}>
                          <div className="h-full rounded-full" style={{ width: `${skill.level}%`, background: color.bar }} />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
