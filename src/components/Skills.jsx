"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: 50, color: "bg-orange-500" },
  { name: "CSS", level: 50, color: "bg-blue-500" },
  { name: "JavaScript", level: 50, color: "bg-yellow-500" },
  { name: "PHP", level: 50, color: "bg-indigo-500" },
  { name: "Python", level: 50, color: "bg-green-500" },
  { name: "Django", level: 50, color: "bg-emerald-600" },
  { name: "MySQL", level: 50, color: "bg-cyan-600" },
  { name: "Supabase", level: 50, color: "bg-teal-500" },
  { name: "Git / GitHub", level: 50, color: "bg-gray-700" },
  { name: "Next.js", level: 50, color: "bg-black dark:bg-white" },
  { name: "React", level: 50, color: "bg-sky-500" },
  { name: "Tailwind CSS", level: 50, color: "bg-cyan-400" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-lg transition-shadow"
            >
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                {skill.name}
              </h3>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.08 + 0.3 }}
                  className={`h-2.5 rounded-full ${skill.color}`}
                />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                {skill.level}%
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
