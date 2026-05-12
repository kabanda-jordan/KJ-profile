"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Initializing systems...");

  const statuses = [
    "Initializing systems...",
    "Loading neural networks...",
    "Establishing secure connection...",
    "Mounting file systems...",
    "Compiling portfolio data...",
    "Ready.",
  ];

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.random() * 18 + 8;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => setLoading(false), 400);
      }
      setProgress(Math.min(current, 100));
      const idx = Math.floor((current / 100) * (statuses.length - 1));
      setStatusText(statuses[Math.min(idx, statuses.length - 1)]);
    }, 120);

    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9998] bg-black flex flex-col items-center justify-center"
        >
          {/* Grid background */}
          <div className="absolute inset-0 grid-bg opacity-30" />

          {/* Glowing orb */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-600/5 blur-3xl" />

          <div className="relative z-10 flex flex-col items-center gap-8 w-80">
            {/* Logo mark */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-16 h-16 rounded-xl border border-blue-500/40 flex items-center justify-center glow-blue">
                <span className="text-2xl font-bold gradient-text">KJ</span>
              </div>
              <span className="text-xs text-blue-400/60 tracking-[0.3em] uppercase font-mono">
                KABANDA JORDAN
              </span>
            </motion.div>

            {/* Terminal output */}
            <div className="w-full font-mono text-xs text-green-400/70 bg-black/60 border border-green-500/10 rounded-lg p-4 space-y-1">
              <div className="text-blue-400/50">$ ./portfolio --init</div>
              <motion.div
                key={statusText}
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-green-400/80"
              >
                &gt; {statusText}
              </motion.div>
            </div>

            {/* Progress bar */}
            <div className="w-full space-y-2">
              <div className="w-full h-px bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-600 via-purple-500 to-cyan-400"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              <div className="flex justify-between text-xs font-mono text-white/20">
                <span>LOADING</span>
                <span>{Math.floor(progress)}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
