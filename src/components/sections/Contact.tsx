"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, GitBranch, Link, Mail, MapPin, Terminal } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate send
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  const socials = [
    { icon: GitBranch, label: "GitHub", handle: "@kabanda-jordan", href: "https://github.com/kabanda-jordan", color: "hover:text-white" },
    { icon: Link, label: "LinkedIn", handle: "kabanda-jordan", href: "https://linkedin.com/in/kabandajordan", color: "hover:text-blue-400" },
    { icon: Mail, label: "Email", handle: "kabandajordan@proton.me", href: "mailto:kabandajordan@proton.me", color: "hover:text-cyan-400" },
  ];

  return (
    <SectionWrapper
      id="contact"
      label="// contact.init()"
      title="Let's build something"
      subtitle="Open to interesting engineering problems, collaborations, and opportunities."
    >
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left: Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <div className="space-y-4 text-white/45 text-sm leading-relaxed">
            <p>
              If you&apos;re working on something at the intersection of systems engineering, AI, security,
              or fintech — I&apos;m interested. Whether it&apos;s a collaboration, a role, or just a technical
              conversation worth having.
            </p>
            <p>
              I respond to messages that are direct and specific. Tell me what you&apos;re building and
              why it&apos;s hard.
            </p>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 text-sm text-white/35 font-mono">
            <MapPin size={14} className="text-blue-400/60" />
            East Africa — Remote-first
          </div>

          {/* Socials */}
          <div className="space-y-3">
            {socials.map(({ icon: Icon, label, handle, href, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-4 glass rounded-xl border border-white/5 hover:border-blue-500/20 transition-all group ${color}`}
              >
                <div className="w-9 h-9 rounded-lg bg-white/3 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon size={16} className="text-white/40 group-hover:text-current transition-colors" />
                </div>
                <div>
                  <div className="text-xs text-white/25 font-mono">{label}</div>
                  <div className="text-sm text-white/60 font-mono group-hover:text-current transition-colors">{handle}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Terminal note */}
          <div className="glass rounded-xl border border-white/5 p-4 font-mono text-xs">
            <div className="text-white/20 mb-2">// availability_status</div>
            <div className="flex items-center gap-2 text-green-400/70">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Open to full-time roles and freelance projects
            </div>
            <div className="flex items-center gap-2 text-blue-400/70 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              Interested in distributed systems, AI infra, security
            </div>
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { key: "name", label: "Name", placeholder: "Your name", type: "text" },
                { key: "email", label: "Email", placeholder: "your@email.com", type: "email" },
              ].map(({ key, label, placeholder, type }) => (
                <div key={key}>
                  <label className="block text-xs font-mono text-white/30 mb-1.5">{label}</label>
                  <input
                    type={type}
                    value={form[key as keyof typeof form]}
                    onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
                    placeholder={placeholder}
                    required
                    className="w-full px-4 py-3 glass rounded-xl border border-white/8 text-white/80 text-sm placeholder:text-white/20 focus:outline-none focus:border-blue-500/40 transition-colors font-mono bg-transparent"
                  />
                </div>
              ))}
            </div>

            <div>
              <label className="block text-xs font-mono text-white/30 mb-1.5">Subject</label>
              <input
                type="text"
                value={form.subject}
                onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                placeholder="What's this about?"
                required
                className="w-full px-4 py-3 glass rounded-xl border border-white/8 text-white/80 text-sm placeholder:text-white/20 focus:outline-none focus:border-blue-500/40 transition-colors font-mono bg-transparent"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-white/30 mb-1.5">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                placeholder="Tell me what you're building and why it's interesting..."
                required
                rows={5}
                className="w-full px-4 py-3 glass rounded-xl border border-white/8 text-white/80 text-sm placeholder:text-white/20 focus:outline-none focus:border-blue-500/40 transition-colors font-mono bg-transparent resize-none"
              />
            </div>

            <motion.button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-mono font-medium transition-all ${
                status === "sent"
                  ? "bg-green-600/80 text-white border border-green-500/30"
                  : status === "sending"
                  ? "bg-blue-600/50 text-white/60 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-500 text-white glow-blue"
              }`}
            >
              {status === "sending" ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Transmitting...
                </>
              ) : status === "sent" ? (
                <>
                  <Terminal size={15} />
                  Message delivered ✓
                </>
              ) : (
                <>
                  <Send size={15} />
                  Send Message
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
