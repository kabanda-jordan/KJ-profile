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
    tech: ["C", "Linux", "eBPF", "DPDK", "Profiling"],
    summary:
      "Optimized a network packet processing pipeline for maximum throughput on commodity hardware. Used eBPF for kernel-level filtering and DPDK for userspace networking.",
    lesson: "Performance optimization is archaeology. You dig until you find the bottleneck.",
  },
];

const colorMap: Record<string, { border: string; text: string; tag: string; badge: string; dot: string }> = {
  blue: { border: "border-blue-500/15", text: "text-blue-400", tag: "bg-blue-500/8 text-blue-400/70 border-blue-500/15", badge: "bg-blue-500/10 text-blue-400 border-blue-500/20", dot: "bg-blue-500" },
  red: { border: "border-red-500/15", text: "text-red-400", tag: "bg-red-500/8 text-red-400/70 border-red-500/15", badge: "bg-red-500/10 text-red-400 border-red-500/20", dot: "bg-red-500" },
  green: { border: "border-green-500/15", text: "text-green-400", tag: "bg-green-500/8 text-green-400/70 border-green-500/15", badge: "bg-green-500/10 text-green-400 border-green-500/20", dot: "bg-green-500" },
  yellow: { border: "border-yellow-500/15", text: "text-yellow-400", tag: "bg-yellow-500/8 text-yellow-400/70 border-yellow-500/15", badge: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20", dot: "bg-yellow-500" },
  cyan: { border: "border-cyan-500/15", text: "text-cyan-400", tag: "bg-cyan-500/8 text-cyan-400/70 border-cyan-500/15", badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20", dot: "bg-cyan-500" },
  purple: { border: "border-purple-500/15", text: "text-purple-400", tag: "bg-purple-500/8 text-purple-400/70 border-purple-500/15", badge: "bg-purple-500/10 text-purple-400 border-purple-500/20", dot: "bg-purple-500" },
  orange: { border: "border-orange-500/15", text: "text-orange-400", tag: "bg-orange-500/8 text-orange-400/70 border-orange-500/15", badge: "bg-orange-500/10 text-orange-400 border-orange-500/20", dot: "bg-orange-500" },
  teal: { border: "border-teal-500/15", text: "text-teal-400", tag: "bg-teal-500/8 text-teal-400/70 border-teal-500/15", badge: "bg-teal-500/10 text-teal-400 border-teal-500/20", dot: "bg-teal-500" },
};

export default function Hackathons() {
  return (
    <SectionWrapper
      id="hackathons"
      label="// competitions.log"
      title="Hackathons & Competitions"
      subtitle="Where theory meets time pressure. Each event is a compressed engineering lesson."
    >
      {/* Summary stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-6 mb-12"
      >
        {[
          { label: "Events Entered", value: "10+" },
          { label: "Domains Covered", value: "5" },
          { label: "Top Finishes", value: "4" },
          { label: "Hours of Hacking", value: "200+" },
        ].map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-2xl font-bold gradient-text-blue-cyan">{s.value}</div>
            <div className="text-xs font-mono text-white/30">{s.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Cards grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {hackathons.map((h, i) => {
          const c = colorMap[h.color];
          const Icon = h.icon;
          return (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className={`glass rounded-xl border ${c.border} p-5 transition-all group`}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <div className={`w-7 h-7 rounded-lg bg-white/3 flex items-center justify-center flex-shrink-0`}>
                    <Icon size={14} className={c.text} />
                  </div>
                  <span className="text-xs font-mono text-white/25">{h.year}</span>
                </div>
                <span className={`text-xs font-mono px-2 py-0.5 rounded-full border ${c.badge} flex-shrink-0`}>
                  {h.result}
                </span>
              </div>

              <h3 className="text-sm font-semibold text-white/85 mb-2 leading-snug">{h.title}</h3>
              <p className="text-xs text-white/40 leading-relaxed mb-3">{h.summary}</p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1 mb-3">
                {h.tech.map((t) => (
                  <span key={t} className={`px-1.5 py-0.5 text-xs font-mono rounded border ${c.tag}`}>
                    {t}
                  </span>
                ))}
              </div>

              {/* Lesson */}
              <div className="border-t border-white/5 pt-3">
                <div className="flex items-start gap-1.5">
                  <Trophy size={10} className={`${c.text} mt-0.5 flex-shrink-0`} />
                  <p className="text-xs text-white/30 italic leading-relaxed">{h.lesson}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
