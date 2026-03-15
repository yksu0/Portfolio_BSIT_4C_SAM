"use client";

import { motion } from "framer-motion";

const shapes = [
  { type: "triangle", top: "12%", left: "8%", size: 80, color: "rgba(255,45,149,0.15)", duration: 20 },
  { type: "circle", top: "25%", right: "12%", size: 100, color: "rgba(0,240,255,0.15)", duration: 6 },
  { type: "diamond", bottom: "25%", left: "15%", size: 60, color: "rgba(184,41,221,0.15)", duration: 15 },
  { type: "circle", top: "60%", right: "8%", size: 50, color: "rgba(255,110,199,0.15)", duration: 5 },
  { type: "triangle", bottom: "15%", right: "20%", size: 70, color: "rgba(0,240,255,0.12)", duration: 18 },
  { type: "diamond", top: "45%", left: "5%", size: 40, color: "rgba(245,230,66,0.12)", duration: 12 },
];

function getClipPath(type) {
  if (type === "triangle") return "polygon(50% 0%, 0% 100%, 100% 100%)";
  if (type === "diamond") return "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)";
  return undefined;
}

export default function CyberBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          animate={
            shape.type === "circle"
              ? { scale: [1, 1.3, 1], opacity: [0.1, 0.25, 0.1] }
              : { rotate: 360, y: [0, -30, 0] }
          }
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: shape.type === "circle" ? "easeInOut" : "linear",
          }}
          className="absolute"
          style={{
            top: shape.top,
            left: shape.left,
            right: shape.right,
            bottom: shape.bottom,
            width: shape.size,
            height: shape.size,
            border: `2px solid ${shape.color}`,
            borderRadius: shape.type === "circle" ? "50%" : undefined,
            clipPath: getClipPath(shape.type),
          }}
        />
      ))}

      {/* Horizontal scanning lines */}
      <motion.div
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute top-[55%] w-48 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,240,255,0.3), transparent)" }}
      />
      <motion.div
        animate={{ x: ["200%", "-100%"] }}
        transition={{ duration: 11, repeat: Infinity, ease: "linear" }}
        className="absolute top-[35%] w-64 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,45,149,0.25), transparent)" }}
      />
      <motion.div
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear", delay: 3 }}
        className="absolute top-[75%] w-40 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(184,41,221,0.3), transparent)" }}
      />

      {/* Floating neon dots */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          animate={{
            y: [0, -15 - i * 8, 0],
            opacity: [0.05, 0.3, 0.05],
          }}
          transition={{
            duration: 3 + i * 0.7,
            repeat: Infinity,
            delay: i * 0.4,
          }}
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{
            left: `${10 + i * 11}%`,
            top: `${15 + (i % 3) * 25}%`,
            background: i % 2 === 0 ? "#ff2d95" : "#00f0ff",
            boxShadow: `0 0 6px ${i % 2 === 0 ? "#ff2d95" : "#00f0ff"}`,
          }}
        />
      ))}
    </div>
  );
}
