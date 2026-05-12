"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Server, Shield, Brain, Zap, GitBranch } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";

const stats = [
  { value: "4+", label: "Years Coding", icon: Code2, color: "text-blue-400" },
  { value: "20+", label: "Projects Built", icon: GitBranch, color: "text-purple-400" },
  { value: "8+", label: "Hackathons", icon: Zap, color: "text-yellow-400" },
  { value: "15+", label: "Technologies", icon: Server, color: "text-cyan-400" },
  { value: "500+", label: "GitHub Commits", icon: Brain, color: "text-green-400" },
  { value: "3+", label: "Security Labs", icon: Shield, color: "text-red-400" },
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
    >
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left: Avatar + traits */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center lg:items-start gap-8"
        >
          {/* Avatar */}
          <div className="relative">
            <div className="w-48 h-48 rounded-2xl border border-blue-500/20 overflow-hidden glass flex items-center justify-center glow-blue">
              <div className="w-full h-full bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-cyan-900/20 flex items-center justify-center">
                <span className="text-6xl font-bold gradient-text">KJ</span>
              </div>
            </div>
            {/* Status dot */}
            <div className="absolute -bottom-2 -right-2 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
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
                transition={{ delay: i * 0.08 }}
                className="px-3 py-1 text-xs font-mono rounded-full border border-white/8 text-white/50 bg-white/3 hover:border-blue-500/30 hover:text-blue-400/80 transition-all cursor-default"
              >
                {trait}
              </motion.span>
            ))}
          </div>

          {/* Quick info */}
          <div className="glass rounded-xl border border-white/5 p-4 w-full font-mono text-xs space-y-2">
            <div className="text-white/20 mb-3">// quick_info.json</div>
            {[
              ["location", "East Africa 🌍"],
              ["focus", "Backend + AI + Security"],
              ["os", "Linux (Arch btw)"],
              ["editor", "Neovim / VS Code"],
              ["status", "Building in public"],
            ].map(([key, val]) => (
              <div key={key} className="flex gap-2">
                <span className="text-blue-400/60">&quot;{key}&quot;</span>
                <span className="text-white/20">:</span>
                <span className="text-green-400/70">&quot;{val}&quot;</span>
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
          <div className="space-y-4 text-white/55 leading-relaxed text-base">
            <p>
              I started writing code because I wanted to understand how things worked — not just
              use them. That curiosity pulled me deep into backend systems, networking protocols,
              operating system internals, and eventually into the intersection of AI and security.
            </p>
            <p>
              My engineering philosophy is simple: <span className="text-white/80">understand the constraints first</span>.
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
              <span className="text-blue-400/80">production-grade distributed systems</span>,{" "}
              <span className="text-purple-400/80">AI-powered security tooling</span>, and{" "}
              <span className="text-cyan-400/80">fintech infrastructure</span> — the kind of
              engineering where correctness and performance aren&apos;t optional.
            </p>
          </div>

          {/* Philosophy quote */}
          <div className="border-l-2 border-blue-500/30 pl-4 py-1">
            <p className="text-white/40 text-sm italic font-light">
              &quot;The best systems are the ones you don&apos;t notice — until they&apos;re gone.&quot;
            </p>
          </div>
        </motion.div>
      </div>

      {/* Stats grid */}
      <div ref={statsRef} className="mt-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {stats.map(({ value, label, icon: Icon, color }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="glass rounded-xl border border-white/5 p-4 text-center hover:border-blue-500/20 transition-all group"
          >
            <Icon size={18} className={`${color} mx-auto mb-2 group-hover:scale-110 transition-transform`} />
            <div className={`text-2xl font-bold ${color} mb-1`}>{value}</div>
            <div className="text-white/30 text-xs font-mono">{label}</div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
