"use client";

import { useRef, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import CyberBackground from "@/components/CyberBackground";
import MusicPlayer from "@/components/MusicPlayer";

const sections = ["about", "skills", "projects", "contact"];

export default function Home() {
  const containerRef = useRef(null);

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      {/* Scanline overlay */}
      <div className="scanlines" />
      <CyberBackground />
      <Navbar scrollTo={scrollTo} />

      <div ref={containerRef} className="snap-container">
        <Hero />
        <Skills />
        <Projects />
        <Contact />

        <footer className="relative z-10 py-6 text-center text-text-muted text-sm font-mono border-t border-border-cyber bg-void">
          <span className="text-neon-pink">&copy;</span> {new Date().getFullYear()} <span className="text-neon-cyan">yksu0</span>. All rights reserved.
        </footer>
      </div>

      {/* Background art credit */}
      <a
        href="https://www.artstation.com/creatiflux"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-3 right-3 z-[90] flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border-cyber backdrop-blur-md font-mono text-[10px] text-text-muted hover:text-neon-cyan hover:border-neon-cyan transition-colors"
        style={{ background: "rgba(11,11,30,0.8)" }}
      >
        <span>BG Art by</span>
        <span className="text-text-dim font-semibold">Creatiflux</span>
      </a>

      {/* Music player */}
      <MusicPlayer />
    </>
  );
}
