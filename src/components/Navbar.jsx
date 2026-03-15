"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

export default function Navbar({ scrollTo }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (id) => {
    if (scrollTo) scrollTo(id);
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b"
      style={{ background: "rgba(11,11,30,0.88)", borderColor: "rgba(255,62,165,0.25)" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => handleNav("about")} className="text-xl font-bold font-display text-neon-pink neon-pink">
          PORTFOLIO
        </button>

        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <button
                onClick={() => handleNav(link.id)}
                className="text-text-dim hover:text-neon-cyan transition-colors font-mono text-sm uppercase tracking-wider"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-neon-cyan focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-deep px-6 overflow-hidden"
            style={{ borderTop: "1px solid rgba(255,62,165,0.25)" }}
          >
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => handleNav(link.id)}
                  className="block w-full text-left py-3 text-text-dim hover:text-neon-cyan transition-colors font-mono text-sm uppercase tracking-wider"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
