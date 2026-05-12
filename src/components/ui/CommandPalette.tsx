"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Terminal, User, Code2, Shield, Brain, Trophy, Mail, GitBranch, FileText, X } from "lucide-react";

const commands = [
  { id: "hero", label: "Go to Home", icon: Terminal, action: () => window.scrollTo({ top: 0, behavior: "smooth" }), shortcut: "H" },
  { id: "about", label: "About Me", icon: User, action: () => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" }), shortcut: "A" },
  { id: "stack", label: "Tech Stack", icon: Code2, action: () => document.querySelector("#stack")?.scrollIntoView({ behavior: "smooth" }), shortcut: "S" },
  { id: "projects", label: "Projects", icon: Code2, action: () => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }), shortcut: "P" },
  { id: "security", label: "Cybersecurity", icon: Shield, action: () => document.querySelector("#cybersecurity")?.scrollIntoView({ behavior: "smooth" }), shortcut: "C" },
  { id: "ai", label: "AI & FinTech", icon: Brain, action: () => document.querySelector("#ai-fintech")?.scrollIntoView({ behavior: "smooth" }), shortcut: "F" },
  { id: "hackathons", label: "Hackathons", icon: Trophy, action: () => document.querySelector("#hackathons")?.scrollIntoView({ behavior: "smooth" }), shortcut: "K" },
  { id: "contact", label: "Contact", icon: Mail, action: () => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }), shortcut: "M" },
  { id: "github", label: "Open GitHub", icon: GitBranch, action: () => window.open("https://github.com/kabanda-jordan", "_blank"), shortcut: "G" },
  { id: "resume", label: "Download Resume", icon: FileText, action: () => window.open("/resume.pdf", "_blank"), shortcut: "R" },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const filtered = commands.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [close]);

  const run = (cmd: typeof commands[0]) => {
    cmd.action();
    close();
  };

  return (
    <>
      {/* Trigger hint */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-3 py-2 glass rounded-xl transition-all text-xs group"
        style={{
          border: "1px solid rgba(255,255,255,0.07)",
          fontFamily: "var(--font-mono)",
          color: "var(--text-3)",
        }}
        aria-label="Open command palette"
      >
        <Terminal size={12} style={{ color: "var(--accent)" }} />
        <span className="hidden sm:inline">⌘K</span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            />

            {/* Palette */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.15 }}
              className="fixed top-1/4 left-1/2 -translate-x-1/2 z-50 w-full max-w-lg"
            >
              <div className="glass-strong rounded-2xl overflow-hidden shadow-2xl" style={{ border: "1px solid rgba(0,255,136,0.15)", boxShadow: "0 24px 80px rgba(0,0,0,0.6), 0 0 40px rgba(0,255,136,0.05)" }}>
                {/* Search input */}
                <div className="flex items-center gap-3 px-4 py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                  <Search size={15} style={{ color: "var(--text-3)" }} className="flex-shrink-0" />
                  <input
                    autoFocus
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search commands..."
                    className="flex-1 bg-transparent text-sm focus:outline-none"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--text-1)" }}
                  />
                  <button onClick={close} style={{ color: "var(--text-3)" }}>
                    <X size={14} />
                  </button>
                </div>

                {/* Commands */}
                <div className="py-2 max-h-72 overflow-y-auto">
                  {filtered.length === 0 ? (
                    <div className="px-4 py-6 text-center text-xs" style={{ fontFamily: "var(--font-mono)", color: "var(--text-3)" }}>
                      No commands found
                    </div>
                  ) : (
                    filtered.map((cmd) => {
                      const Icon = cmd.icon;
                      return (
                        <button
                          key={cmd.id}
                          onClick={() => run(cmd)}
                          className="w-full flex items-center gap-3 px-4 py-2.5 transition-colors text-left group"
                          style={{ background: "transparent" }}
                          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(0,255,136,0.05)")}
                          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                        >
                          <div
                            className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors"
                            style={{ background: "rgba(255,255,255,0.03)" }}
                          >
                            <Icon size={13} style={{ color: "var(--text-3)" }} />
                          </div>
                          <span className="flex-1 text-sm" style={{ fontFamily: "var(--font-mono)", color: "var(--text-2)" }}>
                            {cmd.label}
                          </span>
                          <kbd
                            className="text-xs px-1.5 py-0.5 rounded"
                            style={{
                              fontFamily: "var(--font-mono)",
                              color: "var(--text-3)",
                              background: "rgba(255,255,255,0.04)",
                              border: "1px solid rgba(255,255,255,0.07)",
                            }}
                          >
                            {cmd.shortcut}
                          </kbd>
                        </button>
                      );
                    })
                  )}
                </div>

                {/* Footer */}
                <div
                  className="px-4 py-2 border-t flex items-center gap-3 text-xs"
                  style={{ borderColor: "rgba(255,255,255,0.05)", fontFamily: "var(--font-mono)", color: "var(--text-3)" }}
                >
                  <span>↑↓ navigate</span>
                  <span>↵ select</span>
                  <span>esc close</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
