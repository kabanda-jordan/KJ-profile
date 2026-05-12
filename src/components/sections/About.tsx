"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Server, Shield, Brain, Zap, GitBranch } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";

const stats = [
  { value: "4+", label: "Years Coding", icon: Code2, color: "#3b82f6" },
  { value: "20+", label: "Projects Built", icon: GitBranch, color: "#8b5cf6" },
  { value: "8+", label: "Hackathons", icon: Zap, color: "#f59e0b" },
  { value: "15+", label: "Technologies", icon: Server, color: "#06b6d4" },
  { value: "500+", label: "GitHub Commits", icon: Brain, color: "var(--accent)" },
  { value: "3+", label: "Security Labs", icon: Shield, color: "#ef4444" },
];

const traits = [
  "Systems Thinker",
  "Performance Obsessed",
  "Security Minded",
  "Linux Native",
  "Automation First",
  "Distributed Systems",
];

export default function About() {
  const statsRef = useRef<HTMLDivElement>(null);
  const inView = useInView(statsRef, { once: true, margin: "-50px" });

  return (
    <SectionWrapper
      id="about"
      label="// about.md"
      title="Engineering from first principles"
      subtitle="Not just writing code — understanding the systems underneath it."
      sectionNumber="01"
      bgVariant="alt1"
    >
      <div
        className="grid lg:grid-cols-2 items-start"
        style={{ gap: "3rem" }}
      >
        {/* Left: Avatar + traits */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center lg:items-start gap-8"
          style={{ minWidth: "220px" }}
        >
          {/* Avatar placeholder — replace with real headshot */}
          <div className="relative">
            <div
              className="w-52 h-52 rounded-2xl overflow-hidden flex items-center justify-center"
              style={{
                border: "1px solid rgba(0,255,136,0.2)",
                background: "linear-gradient(135deg, rgba(0,255,136,0.06) 0%, rgba(59,130,246,0.06) 50%, rgba(139,92,246,0.06) 100%)",
                boxShadow: "0 0 40px rgba(0,255,136,0.08)",
              }}
            >
              {/* Abstract portrait illustration */}
              <div className="text-center">
                <div
                  className="text-5xl font-bold mb-1"
                  style={{ fontFamily: "var(--font-syne)", color: "var(--accent)" }}
                >
                  KJ
                </div>
                <div
                  className="text-xs"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--text-3)" }}
                >
                  kabanda.jordan
                </div>
              </div>
            </div>
            {/* Status dot */}
            <div
              className="absolute -bottom-2 -right-2 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs"
              style={{
                fontFamily: "var(--font-mono)",
                background: "rgba(0,255,136,0.08)",
                border: "1px solid rgba(0,255,136,0.2)",
                color: "var(--accent)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--accent)" }} />
              Online
            </div>
          </div>

          {/* Trait tags */}
          <div className="flex flex-wrap gap-2">
            {traits.map((trait, i) => (
              <motion.span
                key={trait}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1.5 text-xs rounded-full cursor-default transition-all duration-200"
                style={{
                  fontFamily: "var(--font-mono)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  color: "var(--text-3)",
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                {trait}
              </motion.span>
            ))}
          </div>

          {/* Quick info terminal */}
          <div
            className="terminal-block p-4 w-full"
          >
            <div
              className="text-xs mb-3"
              style={{ fontFamily: "var(--font-mono)", color: "var(--text-3)" }}
            >
              // quick_info.json
            </div>
            {[
              ["location", "East Africa 🌍"],
              ["focus", "Backend + AI + Security"],
              ["os", "Linux (Arch btw)"],
              ["editor", "Neovim / VS Code"],
              ["status", "Building in public"],
            ].map(([key, val]) => (
              <div key={key} className="flex gap-2 text-xs mb-1" style={{ fontFamily: "var(--font-mono)" }}>
                <span style={{ color: "#3b82f6" }}>&quot;{key}&quot;</span>
                <span style={{ color: "var(--text-3)" }}>:</span>
                <span style={{ color: "var(--accent)" }}>&quot;{val}&quot;</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: Story */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <div className="space-y-5 text-base leading-relaxed" style={{ color: "var(--text-3)", fontWeight: 300 }}>
            <p>
              I started writing code because I wanted to understand how things worked — not just
              use them. That curiosity pulled me deep into backend systems, networking protocols,
              operating system internals, and eventually into the intersection of AI and security.
            </p>
            <p>
              My engineering philosophy is simple:{" "}
              <span style={{ color: "var(--text-1)", fontWeight: 500 }}>understand the constraints first</span>.
              Whether it&apos;s latency budgets in a trading system, memory pressure in an embedded
              environment, or attack surfaces in a web application — the constraints define the
              architecture. I don&apos;t reach for abstractions until I understand what&apos;s underneath them.
            </p>
            <p>
              I&apos;ve spent time across the stack — from writing raw socket code in C to building
              React dashboards, from configuring Linux servers to training ML models for anomaly
              detection. The breadth isn&apos;t accidental. Systems thinking requires understanding
              how layers interact.
            </p>
            <p>
              Right now I&apos;m focused on{" "}
              <span style={{ color: "#3b82f6" }}>production-grade distributed systems</span>,{" "}
              <span style={{ color: "#8b5cf6" }}>AI-powered security tooling</span>, and{" "}
              <span style={{ color: "var(--accent)" }}>fintech infrastructure</span> — the kind of
              engineering where correctness and performance aren&apos;t optional.
            </p>
          </div>

          {/* Philosophy quote */}
          <div
            className="border-l-2 pl-5 py-2"
            style={{ borderColor: "rgba(0,255,136,0.3)" }}
          >
            <p
              className="text-sm italic"
              style={{ color: "var(--text-3)", fontWeight: 300, lineHeight: 1.7 }}
            >
              &quot;The best systems are the ones you don&apos;t notice — until they&apos;re gone.&quot;
            </p>
          </div>
        </motion.div>
      </div>

      {/* Stats grid */}
      <div
        ref={statsRef}
        className="mt-20"
        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))", gap: "1rem" }}
      >
        {stats.map(({ value, label, icon: Icon, color }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            whileHover={{ y: -4, scale: 1.03 }}
            className="glass rounded-xl border p-4 text-center transition-all duration-200 group"
            style={{ borderColor: "rgba(255,255,255,0.05)" }}
          >
            <Icon
              size={18}
              className="mx-auto mb-2 transition-transform duration-200 group-hover:scale-110"
              style={{ color }}
            />
            <div
              className="text-2xl font-bold mb-1"
              style={{ color, fontFamily: "var(--font-syne)" }}
            >
              {value}
            </div>
            <div className="text-xs" style={{ fontFamily: "var(--font-mono)", color: "var(--text-3)" }}>
              {label}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
