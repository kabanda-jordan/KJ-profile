"use client";

import { motion } from "framer-motion";
import { Trophy, Brain, Shield, TrendingUp, Network, Cpu, Code2, Zap, AlertTriangle, Server } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";

const hackathons = [
  {
    title: "Global AI Model Optimization Challenge",
    icon: Brain,
    color: "blue",
    year: "2024",
    result: "Top 15%",
    placement: "top",
    tech: ["Python", "ONNX", "TensorFlow Lite", "Quantization"],
    summary:
      "Optimized a large vision model for edge deployment. Achieved 4x inference speedup through INT8 quantization and layer fusion without significant accuracy loss.",
    lesson: "Model compression is as much about understanding the architecture as it is about the math.",
  },
  {
    title: "SecureNet Cyber Defense Hackathon",
    icon: Shield,
    color: "red",
    year: "2024",
    result: "Finalist",
    placement: "finalist",
    tech: ["Python", "Wireshark", "SIEM", "ML Anomaly Detection"],
    summary:
      "Built a real-time network intrusion detection system that classified attack patterns using behavioral ML models. Detected simulated APT activity within 3 minutes of onset.",
    lesson: "Attackers are patient. Detection systems need to be faster.",
  },
  {
    title: "FinTech Innovation Sprint",
    icon: TrendingUp,
    color: "green",
    year: "2023",
    result: "2nd Place",
    placement: "gold",
    tech: ["Node.js", "PostgreSQL", "React", "Stripe API"],
    summary:
      "Designed and built a micro-lending platform with automated credit scoring in 48 hours. Integrated real-time risk assessment with a clean mobile-first UI.",
    lesson: "Financial products live or die on trust. UX and security are the same problem.",
  },
  {
    title: "AI for Anomaly Detection Challenge",
    icon: AlertTriangle,
    color: "yellow",
    year: "2024",
    result: "Top 10%",
    placement: "top",
    tech: ["Python", "Scikit-learn", "Isolation Forest", "Time Series"],
    summary:
      "Developed an unsupervised anomaly detection pipeline for multivariate time-series data. Focused on minimizing false positives in high-frequency financial data streams.",
    lesson: "Unsupervised learning is hard. Domain knowledge is the real feature engineering.",
  },
  {
    title: "Network Architecture Design Cup",
    icon: Network,
    color: "cyan",
    year: "2023",
    result: "Finalist",
    placement: "finalist",
    tech: ["Cisco Packet Tracer", "BGP", "OSPF", "VLANs", "Firewalls"],
    summary:
      "Designed a resilient enterprise network architecture with redundant paths, proper segmentation, and zero-trust principles. Evaluated on fault tolerance and security posture.",
    lesson: "Network design is security design. They're not separate disciplines.",
  },
  {
    title: "Ethical Hacking CTF Event",
    icon: Code2,
    color: "red",
    year: "2023",
    result: "Top 20%",
    placement: "bronze",
    tech: ["Kali Linux", "Burp Suite", "GDB", "Binary Exploitation"],
    summary:
      "Competed in a 24-hour CTF covering web exploitation, binary pwn, cryptography, and forensics. Solved challenges in web app injection, buffer overflows, and steganography.",
    lesson: "CTFs teach you to think laterally. The solution is never where you expect it.",
  },
  {
    title: "DeFi Buildathon",
    icon: Zap,
    color: "purple",
    year: "2024",
    result: "Participant",
    placement: "participant",
    tech: ["Solidity", "Hardhat", "Ethers.js", "React", "IPFS"],
    summary:
      "Built a decentralized lending protocol with collateral management and liquidation logic. Focused on smart contract security and gas optimization.",
    lesson: "Smart contract bugs are permanent. Audit everything twice.",
  },
  {
    title: "AI Trading Strategy Hackathon",
    icon: TrendingUp,
    color: "blue",
    year: "2024",
    result: "Top 25%",
    placement: "bronze",
    tech: ["Python", "Backtrader", "Pandas", "TA-Lib", "ML"],
    summary:
      "Developed and backtested an ML-driven trading strategy using technical indicators and sentiment signals. Evaluated on risk-adjusted returns and drawdown metrics.",
    lesson: "Overfitting is the enemy. A strategy that works on historical data is just a story.",
  },
  {
    title: "Cyber Threat Simulation Exercise",
    icon: AlertTriangle,
    color: "orange",
    year: "2023",
    result: "Completed",
    placement: "participant",
    tech: ["Metasploit", "Cobalt Strike Concepts", "MITRE ATT&CK", "Splunk"],
    summary:
      "Participated in a red team/blue team simulation exercise. Executed attack chains mapped to MITRE ATT&CK framework while the blue team attempted detection and containment.",
    lesson: "The MITRE ATT&CK framework is a map. Attackers don't follow maps.",
  },
  {
    title: "Edge Systems Performance Challenge",
    icon: Server,
    color: "teal",
    year: "2024",
    result: "Top 20%",
    placement: "bronze",
    tech: ["C", "Linux", "eBPF", "DPDK", "Profiling"],
    summary:
      "Optimized a network packet processing pipeline for maximum throughput on commodity hardware. Used eBPF for kernel-level filtering and DPDK for userspace networking.",
    lesson: "Performance optimization is archaeology. You dig until you find the bottleneck.",
  },
];

const colorMap: Record<string, { border: string; text: string; tag: string }> = {
  blue: { border: "rgba(59,130,246,0.15)", text: "#3b82f6", tag: "rgba(59,130,246,0.08)" },
  red: { border: "rgba(239,68,68,0.15)", text: "#ef4444", tag: "rgba(239,68,68,0.08)" },
  green: { border: "rgba(16,185,129,0.15)", text: "#10b981", tag: "rgba(16,185,129,0.08)" },
  yellow: { border: "rgba(245,158,11,0.15)", text: "#f59e0b", tag: "rgba(245,158,11,0.08)" },
  cyan: { border: "rgba(6,182,212,0.15)", text: "#06b6d4", tag: "rgba(6,182,212,0.08)" },
  purple: { border: "rgba(139,92,246,0.15)", text: "#8b5cf6", tag: "rgba(139,92,246,0.08)" },
  orange: { border: "rgba(249,115,22,0.15)", text: "#f97316", tag: "rgba(249,115,22,0.08)" },
  teal: { border: "rgba(20,184,166,0.15)", text: "#14b8a6", tag: "rgba(20,184,166,0.08)" },
};

// Placement badge styles
const placementBadge: Record<string, { bg: string; color: string; label: string }> = {
  gold: { bg: "rgba(251,191,36,0.12)", color: "#fbbf24", label: "🥇 2nd Place" },
  finalist: { bg: "rgba(148,163,184,0.12)", color: "#94a3b8", label: "🥈 Finalist" },
  top: { bg: "rgba(0,255,136,0.08)", color: "var(--accent)", label: "Top Finish" },
  bronze: { bg: "rgba(180,120,60,0.12)", color: "#cd7f32", label: "Top 20%" },
  participant: { bg: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.3)", label: "Participant" },
};

export default function Hackathons() {
  return (
    <SectionWrapper
      id="hackathons"
      label="// competitions.log"
      title="Hackathons & Competitions"
      subtitle="Where theory meets time pressure. Each event is a compressed engineering lesson."
      sectionNumber="07"
      bgVariant="alt1"
    >
      {/* Summary stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-8 mb-14"
      >
        {[
          { label: "Events Entered", value: "10+" },
          { label: "Domains Covered", value: "5" },
          { label: "Top Finishes", value: "4" },
          { label: "Hours of Hacking", value: "200+" },
        ].map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="text-center"
          >
            <div
              className="text-3xl font-bold mb-1"
              style={{ fontFamily: "var(--font-syne)", color: "var(--accent)" }}
            >
              {s.value}
            </div>
            <div className="text-xs" style={{ fontFamily: "var(--font-mono)", color: "var(--text-3)" }}>
              {s.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Cards grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {hackathons.map((h, i) => {
          const c = colorMap[h.color];
          const badge = placementBadge[h.placement];
          const Icon = h.icon;
          return (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.01 }}
              className="glass rounded-2xl p-5 flex flex-col gap-3 transition-all duration-300"
              style={{ border: `1px solid ${c.border}` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: c.tag }}
                  >
                    <Icon size={14} style={{ color: c.text }} />
                  </div>
                  <span
                    className="text-xs"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--text-3)" }}
                  >
                    {h.year}
                  </span>
                </div>
                {/* Placement badge */}
                <span
                  className="text-xs px-2.5 py-1 rounded-full flex-shrink-0"
                  style={{
                    fontFamily: "var(--font-mono)",
                    background: badge.bg,
                    color: badge.color,
                    border: `1px solid ${badge.color}30`,
                  }}
                >
                  {badge.label}
                </span>
              </div>

              <h3
                className="text-sm font-semibold leading-snug"
                style={{ fontFamily: "var(--font-syne)", color: "var(--text-1)" }}
              >
                {h.title}
              </h3>

              <p className="text-xs leading-relaxed flex-1" style={{ color: "var(--text-3)", fontWeight: 300 }}>
                {h.summary}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1">
                {h.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-xs rounded"
                    style={{
                      fontFamily: "var(--font-mono)",
                      background: c.tag,
                      color: c.text,
                      border: `1px solid ${c.border}`,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Pull quote lesson */}
              <div
                className="border-l-2 pl-3 py-0.5"
                style={{ borderColor: c.text + "40" }}
              >
                <p
                  className="text-xs italic leading-relaxed"
                  style={{ color: "var(--text-3)", fontWeight: 300 }}
                >
                  &ldquo;{h.lesson}&rdquo;
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
