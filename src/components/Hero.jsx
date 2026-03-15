"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="about" className="snap-section flex items-center justify-center px-6 pt-20">
      {/* Background image */}
      <div
        className="section-bg"
        style={{ backgroundImage: "url('creatiflux-image2.jpg')" }}
      />

      {/* Retro grid floor */}
      <div className="absolute inset-0 cyber-grid opacity-30 z-[2]" />

      {/* Radial neon glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-25 z-[2]"
        style={{
          background: "radial-gradient(circle, rgba(255,62,165,0.35) 0%, rgba(0,245,255,0.12) 40%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <span className="font-mono text-neon-cyan text-sm uppercase tracking-[0.3em]">
            &gt; Welcome to my terminal_
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold font-display mb-6"
        >
          <span className="text-text">Hi, I&apos;m </span>
          <span className="text-neon-pink neon-pink animate-flicker">Jim Micael</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-xl md:text-2xl text-text-dim mb-10 max-w-2xl mx-auto font-mono"
        >
          A developer that develops.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="space-y-6 text-left max-w-2xl mx-auto"
        >
          <div className="backdrop-blur-md rounded-lg p-6 border glow-cyan" style={{ background: "rgba(11,11,30,0.85)", borderColor: "rgba(0,245,255,0.25)" }}>
            <h3 className="font-display text-neon-cyan mb-2 uppercase tracking-wider text-sm">// Education</h3>
            <p className="text-text-dim font-mono text-sm">
              Currently pursuing a degree in <span className="text-neon-yellow font-semibold">Information Technology</span>.
            </p>
          </div>

          <div className="backdrop-blur-md rounded-lg p-6 border glow-pink" style={{ background: "rgba(11,11,30,0.85)", borderColor: "rgba(255,62,165,0.25)" }}>
            <h3 className="font-display text-neon-pink mb-2 uppercase tracking-wider text-sm">// Interests</h3>
            <p className="text-text-dim font-mono text-sm">
              <span className="text-hot-pink">Web Development</span>, <span className="text-neon-cyan">IoT Systems</span>, <span className="text-neon-purple">Cloud Computing</span>, and <span className="text-neon-yellow">UI/UX Design</span>.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-10"
        >
          <span className="inline-block text-neon-pink font-display font-bold py-3 px-8 rounded-full border transition-all uppercase tracking-wider text-sm glow-pink cursor-default" style={{ background: "rgba(255,62,165,0.12)", borderColor: "rgba(255,62,165,0.45)" }}>
            View My Work Below &#x25BE;
          </span>
        </motion.div>
      </div>
    </section>
  );
}
