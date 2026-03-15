"use client";

import { useState, useRef, useEffect, useCallback } from "react";

// Add your songs here — place audio files in public/music/
const playlist = [
  { title: "I Really Want to Stay At Your House", artist: "Rosa Walton", src: "/music/I Really Want to Stay At Your House by Rosa Walton.mp3" },
  { title: "Let You Down", artist: "Dawid Podsiadło", src: "/music/Let You Down by Dawid Podsiadlo.mp3" },
  { title: "Little Stranger", artist: "Dawid Podsiadło", src: "/music/Little Stranger by Dawid Podsiadlo.mp3" },
];

function shuffleArray(arr) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function MusicPlayer() {
  const [tracks, setTracks] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  // Shuffle playlist on mount
  useEffect(() => {
    setTracks(shuffleArray(playlist));
  }, []);

  const current = tracks[currentIndex];

  const play = useCallback(() => {
    audioRef.current?.play().catch(() => {});
    setIsPlaying(true);
  }, []);

  const pause = useCallback(() => {
    audioRef.current?.pause();
    setIsPlaying(false);
  }, []);

  const togglePlay = useCallback(() => {
    if (isPlaying) pause();
    else play();
  }, [isPlaying, play, pause]);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % tracks.length);
    setIsPlaying(true);
  }, [tracks.length]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
    setIsPlaying(true);
  }, [tracks.length]);

  // Auto-play when track changes
  useEffect(() => {
    if (tracks.length === 0) return;
    const audio = audioRef.current;
    if (!audio) return;
    audio.load();
    if (isPlaying) {
      audio.play().catch(() => {});
    }
  }, [currentIndex, tracks]);

  // Update progress bar
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const update = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };
    audio.addEventListener("timeupdate", update);
    return () => audio.removeEventListener("timeupdate", update);
  }, []);

  // Auto-next on track end
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const handleEnd = () => next();
    audio.addEventListener("ended", handleEnd);
    return () => audio.removeEventListener("ended", handleEnd);
  }, [next]);

  if (tracks.length === 0 || !current) return null;

  return (
    <div
      className="fixed bottom-3 left-3 z-[90] flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border border-border-cyber backdrop-blur-xl font-mono scale-[0.8] sm:scale-100 origin-bottom-left"
      style={{ background: "rgba(11,11,30,0.88)", boxShadow: "0 0 20px rgba(0,245,255,0.08)" }}
    >
      <audio ref={audioRef} preload="metadata">
        <source src={current.src} />
      </audio>

      {/* Controls */}
      <div className="flex items-center gap-1">
        <button
          onClick={prev}
          className="w-7 h-7 flex items-center justify-center text-text-muted hover:text-neon-cyan transition-colors"
          aria-label="Previous track"
        >
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
          </svg>
        </button>

        <button
          onClick={togglePlay}
          className="w-8 h-8 flex items-center justify-center rounded-full border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-void transition-all"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
            </svg>
          ) : (
            <svg className="w-3.5 h-3.5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        <button
          onClick={next}
          className="w-7 h-7 flex items-center justify-center text-text-muted hover:text-neon-cyan transition-colors"
          aria-label="Next track"
        >
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
          </svg>
        </button>
      </div>

      {/* Track info + progress */}
      <div className="min-w-0 max-w-[140px]">
        <div className="overflow-hidden">
          <p className={`text-[11px] text-text whitespace-nowrap leading-tight ${current.title.length > 18 ? 'animate-marquee' : ''}`}>
            {current.title}
          </p>
        </div>
        <p className="text-[9px] text-text-muted truncate leading-tight">
          {current.artist}
        </p>
        <div className="mt-1 h-[2px] w-full rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.1)" }}>
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{ width: `${progress}%`, background: "#00f5ff" }}
          />
        </div>
      </div>
    </div>
  );
}
