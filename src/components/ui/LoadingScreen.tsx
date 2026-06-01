"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const statuses = [
  "Initializing systems...",
  "Loading neural networks...",
  "Establishing secure connection...",
  "Mounting file systems...",
  "Compiling portfolio data...",
  "Ready.",
];

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState(statuses[0]);

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
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[9998] flex flex-col items-center justify-center"
          style={{ background: "#0a0a0a" }}
        >
          {/* Subtle grid */}
          <div className="absolute inset-0 grid-bg opacity-20" />

          <div className="relative z-10 flex flex-col items-center gap-8 w-80">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center gap-2"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center"
                style={{ border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.04)" }}
              >
                <span
                  className="text-xl font-bold"
                  style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}
                >
                  KJ
                </span>
              </div>
              <span
                className="text-xs tracking-[0.3em] uppercase"
                style={{ fontFamily: "var(--font-mono)", color: "rgba(255,255,255,0.3)" }}
              >
                KABANDA JORDAN
              </span>
            </motion.div>

            {/* Terminal */}
            <div
              className="w-full terminal-block p-4 space-y-1"
            >
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "rgba(255,255,255,0.3)" }}>
                $ ./portfolio --init
              </div>
              <motion.div
                key={statusText}
                initial={{ opacity: 0, x: -4 }}
                animate={{ opacity: 1, x: 0 }}
                style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "rgba(255,255,255,0.7)" }}
              >
                &gt; {statusText}
              </motion.div>
            </div>

            {/* Progress bar */}
            <div className="w-full space-y-2">
              <div
                className="w-full h-px rounded-full overflow-hidden"
                style={{ background: "rgba(255,255,255,0.06)" }}
              >
                <motion.div
                  className="h-full"
                  style={{ width: `${progress}%`, background: "rgba(255,255,255,0.5)" }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              <div
                className="flex justify-between text-xs"
                style={{ fontFamily: "var(--font-mono)", color: "rgba(255,255,255,0.2)" }}
              >
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
