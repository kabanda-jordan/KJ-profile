"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, GitBranch, Mail, MapPin, Check, Copy, Clock, Phone } from "lucide-react";
import InstagramIcon from "@/components/ui/InstagramIcon";
import SectionWrapper from "@/components/ui/SectionWrapper";

const MAX_MSG = 500;

function FloatingInput({
  label,
  type = "text",
  value,
  onChange,
  required,
  placeholder,
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  placeholder?: string;
}) {
  const [focused, setFocused] = useState(false);
  const lifted = focused || value.length > 0;

  return (
    <div className="relative">
      <label
        className="absolute left-4 transition-all duration-200 pointer-events-none z-10"
        style={{
          top: lifted ? "6px" : "50%",
          transform: lifted ? "translateY(0) scale(0.8)" : "translateY(-50%) scale(1)",
          transformOrigin: "left",
          fontFamily: "var(--font-mono)",
          fontSize: "12px",
          color: focused ? "var(--accent)" : "var(--text-3)",
        }}
      >
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        placeholder={lifted ? placeholder : ""}
        className="w-full px-4 pt-6 pb-2.5 rounded-xl text-sm bg-transparent transition-all duration-200"
        style={{
          fontFamily: "var(--font-mono)",
          color: "var(--text-1)",
          border: `1px solid ${focused ? "rgba(0,255,136,0.4)" : "rgba(255,255,255,0.07)"}`,
          background: "rgba(255,255,255,0.02)",
          outline: "none",
          boxShadow: focused ? "0 0 0 3px rgba(0,255,136,0.06)" : "none",
        }}
      />
    </div>
  );
}

function FloatingTextarea({
  label,
  value,
  onChange,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const lifted = focused || value.length > 0;

  return (
    <div className="relative">
      <label
        className="absolute left-4 transition-all duration-200 pointer-events-none z-10"
        style={{
          top: lifted ? "8px" : "16px",
          transform: lifted ? "scale(0.8)" : "scale(1)",
          transformOrigin: "left",
          fontFamily: "var(--font-mono)",
          fontSize: "12px",
          color: focused ? "var(--accent)" : "var(--text-3)",
        }}
      >
        {label}
      </label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value.slice(0, MAX_MSG))}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        rows={5}
        className="w-full px-4 pt-8 pb-3 rounded-xl text-sm bg-transparent resize-none transition-all duration-200"
        style={{
          fontFamily: "var(--font-mono)",
          color: "var(--text-1)",
          border: `1px solid ${focused ? "rgba(0,255,136,0.4)" : "rgba(255,255,255,0.07)"}`,
          background: "rgba(255,255,255,0.02)",
          outline: "none",
          boxShadow: focused ? "0 0 0 3px rgba(0,255,136,0.06)" : "none",
        }}
      />
      <div
        className="absolute bottom-3 right-4 text-xs"
        style={{
          fontFamily: "var(--font-mono)",
          color: value.length > MAX_MSG * 0.9 ? "#ef4444" : "var(--text-3)",
        }}
      >
        {value.length}/{MAX_MSG}
      </div>
    </div>
  );
}

function TimezoneStatus() {
  const [status, setStatus] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      // CAT = UTC+2 (Africa/Kigali)
      const catOffset = 2 * 60;
      const localOffset = -now.getTimezoneOffset();
      const catTime = new Date(now.getTime() + (catOffset - localOffset) * 60000);
      const h = catTime.getUTCHours();
      const m = catTime.getUTCMinutes().toString().padStart(2, "0");
      const period = h >= 6 && h < 20 ? "likely online" : "probably offline";
      const timeStr = `${h % 12 || 12}:${m} ${h >= 12 ? "PM" : "AM"}`;
      setStatus(`Currently ${timeStr} in Kigali — ${period}`);
    };
    update();
    const id = setInterval(update, 60000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="flex items-center gap-2 text-xs"
      style={{ fontFamily: "var(--font-mono)", color: "var(--text-3)" }}
    >
      <Clock size={12} style={{ color: "var(--accent)" }} />
      {status}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [copied, setCopied] = useState(false);
  const [phoneRevealed, setPhoneRevealed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1600));
    setStatus("sent");
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 5000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("kabandajordan784@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socials = [
    {
      icon: GitBranch,
      label: "GitHub",
      handle: "@kabanda-jordan",
      href: "https://github.com/kabanda-jordan",
      copyable: false,
    },
    {
      icon: InstagramIcon,
      label: "Instagram",
      handle: "@darkside1429",
      href: "https://instagram.com/darkside1429",
      copyable: false,
    },
    {
      icon: Mail,
      label: "Email",
      handle: "kabandajordan784@gmail.com",
      href: "mailto:kabandajordan784@gmail.com",
      copyable: true,
    },
  ];

  return (
    <SectionWrapper
      id="contact"
      label="// contact.init()"
      title="Let's build something"
      subtitle="Open to interesting engineering problems, collaborations, and opportunities."
      sectionNumber="09"
      bgVariant="alt2"
    >
      <div
        className="grid lg:grid-cols-2 gap-14"
        style={{ alignItems: "start" }}
      >
        {/* Left: Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <div className="space-y-4 text-sm leading-relaxed" style={{ color: "var(--text-3)", fontWeight: 300 }}>
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

          {/* Location + timezone */}
          <div className="space-y-2">
            <div
              className="flex items-center gap-2 text-sm"
              style={{ fontFamily: "var(--font-mono)", color: "var(--text-3)" }}
            >
              <MapPin size={14} style={{ color: "var(--accent)" }} />
              Kigali, Rwanda — Remote-first
            </div>
            <TimezoneStatus />
            {/* Phone — hidden until revealed */}
            <div className="flex items-center gap-2 text-xs" style={{ fontFamily: "var(--font-mono)", color: "var(--text-3)" }}>
              <Phone size={12} style={{ color: "var(--accent)" }} />
              {phoneRevealed ? (
                <a
                  href="tel:+250796892902"
                  style={{ color: "var(--accent)" }}
                >
                  +250 796 892 902
                </a>
              ) : (
                <button
                  onClick={() => setPhoneRevealed(true)}
                  className="underline underline-offset-2 transition-colors duration-200"
                  style={{ color: "var(--text-3)", background: "none", border: "none", cursor: "pointer", fontFamily: "var(--font-mono)", fontSize: "12px" }}
                >
                  Click to reveal phone
                </button>
              )}
            </div>
          </div>

          {/* Socials */}
          <div className="space-y-3">
            {socials.map(({ icon: Icon, label, handle, href, copyable }) => (
              <div
                key={label}
                className="flex items-center gap-4 p-4 rounded-xl glass border group transition-all duration-200"
                style={{ borderColor: "rgba(255,255,255,0.05)" }}
              >
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 flex-1 min-w-0"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                    style={{ background: "rgba(255,255,255,0.04)" }}
                  >
                    <Icon size={16} style={{ color: "var(--text-3)" }} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs mb-0.5" style={{ fontFamily: "var(--font-mono)", color: "var(--text-3)" }}>{label}</div>
                    <div className="text-sm truncate" style={{ fontFamily: "var(--font-mono)", color: "var(--text-2)" }}>{handle}</div>
                  </div>
                </a>
                {copyable && (
                  <button
                    onClick={copyEmail}
                    className="p-2 rounded-lg transition-all duration-200 flex-shrink-0"
                    style={{
                      color: copied ? "var(--accent)" : "var(--text-3)",
                      background: copied ? "rgba(0,255,136,0.08)" : "transparent",
                    }}
                    aria-label="Copy email"
                  >
                    <AnimatePresence mode="wait">
                      {copied ? (
                        <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                          <Check size={14} />
                        </motion.div>
                      ) : (
                        <motion.div key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                          <Copy size={14} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Availability */}
          <div
            className="rounded-xl p-4 text-xs space-y-2"
            style={{
              background: "rgba(0,255,136,0.03)",
              border: "1px solid rgba(0,255,136,0.1)",
              fontFamily: "var(--font-mono)",
            }}
          >
            <div style={{ color: "var(--text-3)" }} className="mb-3">// availability_status</div>
            <div className="flex items-center gap-2" style={{ color: "var(--accent)" }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--accent)" }} />
              Open to full-time roles and freelance projects
            </div>
            <div className="flex items-center gap-2" style={{ color: "#3b82f6" }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#3b82f6" }} />
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
              <FloatingInput
                label="Name"
                value={form.name}
                onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                required
                placeholder="Your name"
              />
              <FloatingInput
                label="Email"
                type="email"
                value={form.email}
                onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                required
                placeholder="your@email.com"
              />
            </div>

            <FloatingInput
              label="Subject"
              value={form.subject}
              onChange={(v) => setForm((f) => ({ ...f, subject: v }))}
              required
              placeholder="What's this about?"
            />

            <FloatingTextarea
              label="Message"
              value={form.message}
              onChange={(v) => setForm((f) => ({ ...f, message: v }))}
              required
            />

            <motion.button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              whileHover={status === "idle" ? { scale: 1.01 } : {}}
              whileTap={status === "idle" ? { scale: 0.98 } : {}}
              className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl text-sm font-semibold transition-all duration-300"
              style={{
                fontFamily: "var(--font-syne)",
                ...(status === "sent"
                  ? { background: "rgba(16,185,129,0.15)", color: "#10b981", border: "1px solid rgba(16,185,129,0.3)" }
                  : status === "sending"
                  ? { background: "rgba(0,255,136,0.08)", color: "var(--accent)", border: "1px solid rgba(0,255,136,0.2)", cursor: "not-allowed" }
                  : { background: "var(--accent)", color: "#000", boxShadow: "0 0 24px rgba(0,255,136,0.2)" }),
              }}
            >
              <AnimatePresence mode="wait">
                {status === "sending" && (
                  <motion.div key="sending" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    Transmitting...
                  </motion.div>
                )}
                {status === "sent" && (
                  <motion.div key="sent" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="flex items-center gap-2">
                    <Check size={16} />
                    Message delivered ✓
                  </motion.div>
                )}
                {status === "idle" && (
                  <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                    <Send size={15} />
                    Send Message
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
