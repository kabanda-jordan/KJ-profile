"use client";

import { motion } from "framer-motion";
import { GitBranch, Mail, Terminal } from "lucide-react";
import InstagramIcon from "@/components/ui/InstagramIcon";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative border-t py-14 px-4 sm:px-6 overflow-hidden"
      style={{ borderColor: "rgba(255,255,255,0.05)", background: "var(--bg)" }}
    >
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(0,255,136,0.04) 0%, transparent 70%)" }}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center sm:items-start gap-2"
          >
            <div className="flex items-center gap-2.5">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{ border: "1px solid rgba(0,255,136,0.25)", background: "rgba(0,255,136,0.05)" }}
              >
                <span className="text-xs font-bold" style={{ fontFamily: "var(--font-syne)", color: "var(--accent)" }}>
                  KJ
                </span>
              </div>
              <span className="text-sm" style={{ fontFamily: "var(--font-mono)", color: "var(--text-3)" }}>
                KABANDA JORDAN
              </span>
            </div>
            <p
              className="text-xs italic text-center sm:text-left"
              style={{ fontFamily: "var(--font-mono)", color: "var(--text-3)", opacity: 0.6, maxWidth: "400px" }}
            >
              &quot;Build systems that survive contact with reality.&quot;
            </p>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-3"
          >
            {[
              { icon: GitBranch,     href: "https://github.com/kabanda-jordan",      label: "GitHub",    external: true },
              { icon: InstagramIcon, href: "https://instagram.com/darkside1429",     label: "Instagram", external: true },
              { icon: Mail,          href: "mailto:kabandajordan784@gmail.com",       label: "Email",     external: false },
            ].map(({ icon: Icon, href, label, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="p-2.5 rounded-lg transition-colors duration-200"
                style={{ color: "var(--text-3)" }}
              >
                <Icon size={16} />
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs transition-all duration-200"
              style={{
                fontFamily: "var(--font-mono)",
                border: "1px solid rgba(255,255,255,0.07)",
                color: "var(--text-3)",
              }}
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
          className="mt-8 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-2 text-xs"
          style={{
            borderColor: "rgba(255,255,255,0.04)",
            fontFamily: "var(--font-mono)",
            color: "var(--text-3)",
            opacity: 0.5,
          }}
        >
          <span>© {year} Kabanda Jordan. All rights reserved.</span>
          <span>Built with Next.js · TypeScript · TailwindCSS · Framer Motion</span>
        </motion.div>
      </div>
    </footer>
  );
}
