"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { FileText, ChevronDown, Terminal, Cpu, Shield, TrendingUp } from "lucide-react";
import LinkedinIcon from "@/components/ui/LinkedinIcon";
import GithubIcon from "@/components/ui/GithubIcon";

const roles = [
  "Full-Stack Engineer",
  "AI Researcher",
  "Cybersecurity Enthusiast",
  "FinTech Builder",
  "Systems Engineer",
  "Linux Power User",
  "Web3 Developer",
  "Distributed Systems Explorer",
];

function TypingEffect() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "pause" | "deleting">("typing");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (charIndex < current.length) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        }, 55 + Math.random() * 30);
      } else {
        timeout = setTimeout(() => setPhase("pause"), 2200);
      }
    } else if (phase === "pause") {
      timeout = setTimeout(() => setPhase("deleting"), 400);
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        }, 22);
      } else {
        setPhase("typing");
        setRoleIndex((r) => (r + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, phase, roleIndex]);

  return (
    <span className="font-mono" style={{ color: "var(--accent)" }}>
      {displayed}
      <span className="cursor-blink" style={{ color: "var(--accent)" }}>|</span>
    </span>
  );
}

const floatingBadges = [
  { icon: Terminal, label: "Linux", delay: 0 },
  { icon: Shield, label: "Security", delay: 0.1 },
  { icon: Cpu, label: "Systems", delay: 0.2 },
  { icon: TrendingUp, label: "FinTech", delay: 0.3 },
];

const nameWords = ["KABANDA", "JORDAN"];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const gridY = useTransform(scrollY, [0, 600], [0, 80]);

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setScrolled(v > 80));
    return () => unsub();
  }, [scrollY]);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      {/* Animated mesh background */}
      <motion.div
        className="absolute inset-0 grid-bg mesh-bg"
        style={{ y: gridY }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/60 to-[#0a0a0a]" />

      {/* Ambient orbs */}
      <div
        className="absolute top-1/4 left-1/5 w-[500px] h-[500px] rounded-full blur-[120px] pulse-glow pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,255,136,0.06) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/5 w-[400px] h-[400px] rounded-full blur-[100px] pulse-glow pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)", animationDelay: "1.5s" }}
      />

      <div
        className="relative text-center pt-24 pb-16"
        style={{ maxWidth: "1280px", margin: "0 auto", paddingLeft: "1.5rem", paddingRight: "1.5rem", zIndex: 1 }}
      >

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-10"
          style={{
            borderColor: "rgba(0,255,136,0.2)",
            background: "rgba(0,255,136,0.06)",
            color: "var(--accent)",
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
          }}
        >
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ background: "var(--accent)" }}
          />
          Available for opportunities
        </motion.div>

        {/* Name — staggered word reveal */}
        <div className="mb-5 overflow-hidden">
          <div className="flex flex-wrap items-center justify-center gap-x-4">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                color: "rgba(255,255,255,0.55)",
                fontFamily: "var(--font-syne)",
                fontSize: "clamp(28px, 5vw, 64px)",
                fontWeight: 800,
                lineHeight: 1,
              }}
            >
              Hi, I&apos;m
            </motion.span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-5 mt-1">
            {nameWords.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 60, skewY: 4 }}
                animate={{ opacity: 1, y: 0, skewY: 0 }}
                transition={{ duration: 0.7, delay: 0.25 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="gradient-text"
                style={{
                  fontFamily: "var(--font-syne)",
                  display: "inline-block",
                  fontSize: "clamp(48px, 10vw, 140px)",
                  fontWeight: 800,
                  lineHeight: 0.95,
                  letterSpacing: "-0.03em",
                }}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Typing role */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-xl sm:text-2xl lg:text-3xl font-light mb-8 h-10 flex items-center justify-center"
          style={{ color: "var(--text-3)" }}
        >
          <TypingEffect />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-10"
          style={{ color: "var(--text-3)", fontWeight: 300 }}
        >
          I build at the intersection of{" "}
          <span style={{ color: "rgba(59,130,246,0.85)" }}>scalable backend systems</span>,{" "}
          <span style={{ color: "rgba(139,92,246,0.85)" }}>AI experimentation</span>, and{" "}
          <span style={{ color: "var(--accent)", opacity: 0.85 }}>cybersecurity research</span>.
          Obsessed with low-latency infrastructure, fintech systems, distributed architectures,
          and the kind of engineering that only makes sense when you&apos;re deep in a Linux terminal at 2am.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-8"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-primary px-7 py-3.5 text-sm font-semibold inline-flex items-center gap-2"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            className="btn-outline px-7 py-3.5 text-sm font-medium inline-flex items-center gap-2"
          >
            <FileText size={14} />
            Resume
          </a>
          <a
            href="https://github.com/kabandajordan"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline px-5 py-3.5 text-sm font-medium inline-flex items-center gap-2"
          >
            <GithubIcon size={14} />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/kabandajordan"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline px-5 py-3.5 text-sm font-medium inline-flex items-center gap-2"
          >
            <LinkedinIcon size={14} />
            LinkedIn
          </a>
        </motion.div>

        {/* Floating tech badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-8"
        >
          {floatingBadges.map(({ icon: Icon, label, delay }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + delay, duration: 0.35 }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass border text-xs font-mono"
              style={{ borderColor: "var(--border)", color: "var(--text-3)" }}
            >
              <Icon size={11} style={{ color: "var(--accent)" }} />
              {label}
            </motion.div>
          ))}
        </motion.div>

        {/* Terminal snippet — 2rem margin-top from CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          style={{ maxWidth: "32rem", margin: "2rem auto 0" }}
        >
          <div className="terminal-block p-5 text-left">
            <div className="flex items-center gap-1.5 mb-4">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              <span className="ml-2 text-xs" style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)" }}>terminal</span>
            </div>
            <div className="space-y-1.5 text-xs" style={{ fontFamily: "var(--font-mono)" }}>
              <div>
                <span style={{ color: "var(--accent)" }}>jordan@dev</span>
                <span style={{ color: "var(--text-3)" }}>:</span>
                <span style={{ color: "#3b82f6" }}>~</span>
                <span style={{ color: "var(--text-3)" }}>$</span>{" "}
                <span style={{ color: "rgba(255,255,255,0.7)" }}>whoami</span>
              </div>
              <div style={{ color: "var(--accent)", paddingLeft: "12px" }}>
                systems_engineer | ai_researcher | security_enthusiast
              </div>
              <div>
                <span style={{ color: "var(--accent)" }}>jordan@dev</span>
                <span style={{ color: "var(--text-3)" }}>:</span>
                <span style={{ color: "#3b82f6" }}>~</span>
                <span style={{ color: "var(--text-3)" }}>$</span>{" "}
                <span style={{ color: "rgba(255,255,255,0.7)" }}>cat mission.txt</span>
              </div>
              <div style={{ color: "var(--text-2)", paddingLeft: "12px" }}>
                Building production-grade systems at the edge of what&apos;s possible.
              </div>
              <div className="flex items-center gap-1">
                <span style={{ color: "var(--accent)" }}>jordan@dev</span>
                <span style={{ color: "var(--text-3)" }}>:</span>
                <span style={{ color: "#3b82f6" }}>~</span>
                <span style={{ color: "var(--text-3)" }}>$</span>
                <span className="cursor-blink ml-1" style={{ color: "var(--accent)" }}>█</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator — hides after scroll */}
      <AnimatePresence>
        {!scrolled && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            style={{ color: "var(--text-3)" }}
          >
            <span className="text-xs tracking-[0.2em]" style={{ fontFamily: "var(--font-mono)" }}>SCROLL</span>
            <div className="scroll-bounce">
              <ChevronDown size={16} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
