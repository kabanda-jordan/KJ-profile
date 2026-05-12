"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FileText, ChevronDown, Terminal, Cpu, Shield, TrendingUp } from "lucide-react";
import LinkedinIcon from "@/components/ui/LinkedinIcon";
import GithubIcon from "@/components/ui/GithubIcon";

const roles = [
  "Full-Stack Engineer",
  "AI Enthusiast",
  "Cybersecurity Researcher",
  "FinTech Builder",
  "Systems Engineer",
  "Linux Power User",
  "Web3 Developer",
  "Distributed Systems Explorer",
];

function TypingEffect() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 60);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 30);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((r) => (r + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <span className="text-blue-400 font-mono">
      {displayed}
      <span className="cursor-blink text-cyan-400">|</span>
    </span>
  );
}

const floatingBadges = [
  { icon: Terminal, label: "Linux", color: "text-green-400", delay: 0 },
  { icon: Shield, label: "Security", color: "text-red-400", delay: 0.5 },
  { icon: Cpu, label: "Systems", color: "text-purple-400", delay: 1 },
  { icon: TrendingUp, label: "FinTech", color: "text-cyan-400", delay: 1.5 },
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
    >
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-600/8 blur-3xl pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-purple-600/8 blur-3xl pulse-glow" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-600/3 blur-3xl" />

      {/* Horizontal scan line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
          style={{ top: "30%", animation: "none" }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/20 bg-green-500/5 text-green-400 text-xs font-mono mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Available for opportunities
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-4"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-none">
            <span className="text-white/90">👋 Hi, I&apos;m</span>
            <br />
            <span className="gradient-text">KABANDA JORDAN</span>
          </h1>
        </motion.div>

        {/* Typing effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl sm:text-2xl lg:text-3xl font-light text-white/50 mb-8 h-10 flex items-center justify-center"
        >
          <TypingEffect />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto text-base sm:text-lg text-white/40 leading-relaxed mb-10 font-light"
        >
          I build at the intersection of{" "}
          <span className="text-blue-400/80">scalable backend systems</span>,{" "}
          <span className="text-purple-400/80">AI experimentation</span>, and{" "}
          <span className="text-cyan-400/80">cybersecurity research</span>. Obsessed with
          low-latency infrastructure, fintech systems, distributed architectures, and the
          kind of engineering that only makes sense when you&apos;re deep in a Linux terminal at 2am.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-16"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-all duration-200 glow-blue hover:scale-105"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            className="flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-white/30 text-white/70 hover:text-white text-sm font-medium rounded-lg transition-all duration-200 hover:bg-white/5"
          >
            <FileText size={14} />
            Resume
          </a>
          <a
            href="https://github.com/kabandajordan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-white/30 text-white/70 hover:text-white text-sm font-medium rounded-lg transition-all duration-200 hover:bg-white/5"
          >
            <GithubIcon size={14} />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/kabandajordan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-white/30 text-white/70 hover:text-white text-sm font-medium rounded-lg transition-all duration-200 hover:bg-white/5"
          >
            <LinkedinIcon size={14} />
            LinkedIn
          </a>
        </motion.div>

        {/* Floating tech badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-16"
        >
          {floatingBadges.map(({ icon: Icon, label, color, delay }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + delay, duration: 0.4 }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass border border-white/5 text-xs font-mono"
            >
              <Icon size={12} className={color} />
              <span className="text-white/50">{label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Terminal snippet */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="max-w-lg mx-auto glass rounded-xl border border-white/5 p-4 text-left font-mono text-xs mb-16"
        >
          <div className="flex items-center gap-1.5 mb-3">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
            <span className="ml-2 text-white/20 text-xs">terminal</span>
          </div>
          <div className="space-y-1 text-white/40">
            <div><span className="text-green-400/70">jordan@dev</span><span className="text-white/20">:</span><span className="text-blue-400/70">~</span><span className="text-white/20">$</span> <span className="text-white/60">whoami</span></div>
            <div className="text-cyan-400/70 pl-2">systems_engineer | ai_researcher | security_enthusiast</div>
            <div><span className="text-green-400/70">jordan@dev</span><span className="text-white/20">:</span><span className="text-blue-400/70">~</span><span className="text-white/20">$</span> <span className="text-white/60">cat mission.txt</span></div>
            <div className="text-white/40 pl-2">Building production-grade systems at the edge of what&apos;s possible.</div>
            <div className="flex items-center gap-1">
              <span className="text-green-400/70">jordan@dev</span><span className="text-white/20">:</span><span className="text-blue-400/70">~</span><span className="text-white/20">$</span>
              <span className="cursor-blink text-white/60">█</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20"
      >
        <span className="text-xs font-mono tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
