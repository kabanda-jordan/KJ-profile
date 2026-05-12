"use client";

import { motion } from "framer-motion";
import { GitBranch, Link, Mail, Terminal } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 py-12 px-4 sm:px-6 overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-blue-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center sm:items-start gap-2"
          >
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg border border-blue-500/30 flex items-center justify-center">
                <span className="text-xs font-bold gradient-text">KJ</span>
              </div>
              <span className="text-sm font-mono text-white/40">KABANDA JORDAN</span>
            </div>
            <p className="text-xs text-white/20 font-mono italic max-w-xs text-center sm:text-left">
              &quot;Build systems that survive contact with reality.&quot;
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4"
          >
            {[
              { icon: GitBranch, href: "https://github.com/kabanda-jordan", label: "GitHub" },
              { icon: Link, href: "https://linkedin.com/in/kabandajordan", label: "LinkedIn" },
              { icon: Mail, href: "mailto:kabandajordan@proton.me", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 text-white/25 hover:text-white/70 transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono border border-white/8 text-white/30 hover:text-white/60 hover:border-white/15 rounded-lg transition-all"
            >
              <Terminal size={11} />
              Resume
            </a>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-white/15"
        >
          <span>© {year} Kabanda Jordan. All rights reserved.</span>
          <span>Built with Next.js · TypeScript · TailwindCSS · Framer Motion</span>
        </motion.div>
      </div>
    </footer>
  );
}
