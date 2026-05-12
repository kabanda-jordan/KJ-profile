"use client";

import { motion } from "framer-motion";
import { ExternalLink, Brain, Shield, ShoppingBag, Cpu, Network } from "lucide-react";
import GithubIcon from "@/components/ui/GithubIcon";
import SectionWrapper from "@/components/ui/SectionWrapper";

const projects = [
  {
    id: "neura-edge",
    title: "Neura Edge Journal",
    subtitle: "AI-Powered Trading Analytics Platform",
    description:
      "A sophisticated trading journal and analytics platform built for serious traders. Combines AI-driven insights with behavioral psychology metrics to help traders understand not just what they traded, but why — and whether that reasoning was sound.",
    icon: Brain,
    color: "blue",
    gradient: "from-blue-900/30 via-purple-900/20 to-transparent",
    tags: ["Next.js", "Python", "FastAPI", "PostgreSQL", "ML", "TailwindCSS"],
    features: [
      "AI-generated trade analysis and pattern recognition",
      "Risk/reward tracking with statistical breakdowns",
      "Trader psychology metrics and behavioral scoring",
      "Real-time dashboard with performance analytics",
    ],
    status: "In Development",
    github: "https://github.com/kabandajordan",
    demo: null,
  },
  {
    id: "cyber-shield",
    title: "Cyber Shield AI",
    subtitle: "Intelligent Threat Detection Platform",
    description:
      "An AI-driven cybersecurity monitoring platform that applies anomaly detection and behavioral analysis to identify threats before they escalate. Built with a SIEM-inspired architecture and real-time alerting pipeline.",
    icon: Shield,
    color: "red",
    gradient: "from-red-900/25 via-orange-900/15 to-transparent",
    tags: ["Python", "FastAPI", "ML", "Redis", "WebSockets", "React"],
    features: [
      "Real-time anomaly detection using ML models",
      "Network traffic analysis and behavioral profiling",
      "Automated threat classification and severity scoring",
      "Incident timeline reconstruction and forensic logging",
    ],
    status: "In Development",
    github: "https://github.com/kabandajordan",
    demo: null,
  },
  {
    id: "aether",
    title: "AETHER",
    subtitle: "Luxury Futuristic E-Commerce Platform",
    description:
      "A premium e-commerce experience built with modern frontend engineering principles. Microservice-ready architecture, cinematic UI, and performance-first design. Built to demonstrate what luxury digital commerce should feel like.",
    icon: ShoppingBag,
    color: "purple",
    gradient: "from-purple-900/30 via-pink-900/15 to-transparent",
    tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Stripe", "TailwindCSS"],
    features: [
      "Cinematic product showcase with smooth animations",
      "Microservice-ready backend architecture",
      "Real-time inventory and order management",
      "Premium checkout flow with Stripe integration",
    ],
    status: "Completed",
    github: "https://github.com/kabandajordan",
    demo: null,
  },
  {
    id: "rfid-economic",
    title: "RFID Economic System",
    subtitle: "Economic Tracking & Management Platform",
    description:
      "An economic tracking and resource management system built around RFID concepts. Designed for environments where physical asset tracking needs to integrate with financial and inventory systems in real time.",
    icon: Cpu,
    color: "cyan",
    gradient: "from-cyan-900/25 via-teal-900/15 to-transparent",
    tags: ["Python", "Django", "PostgreSQL", "RFID", "REST API", "React"],
    features: [
      "Real-time asset tracking and economic flow visualization",
      "Inventory reconciliation with financial ledger integration",
      "Role-based access control and audit logging",
      "Reporting dashboard with exportable analytics",
    ],
    status: "Completed",
    github: "https://github.com/kabandajordan",
    demo: null,
  },
  {
    id: "netcore",
    title: "NetCore",
    subtitle: "Low-Latency Networking & Systems Project",
    description:
      "A socket-based networking project exploring low-latency communication patterns, custom protocol design, and systems-level performance optimization. Built to understand what happens below the HTTP abstraction layer.",
    icon: Network,
    color: "green",
    gradient: "from-green-900/25 via-emerald-900/15 to-transparent",
    tags: ["C", "Python", "TCP/UDP", "Linux", "Sockets", "Systems Programming"],
    features: [
      "Custom binary protocol over raw TCP sockets",
      "Connection pooling and multiplexing implementation",
      "Latency benchmarking and profiling tooling",
      "Linux kernel networking parameter tuning",
    ],
    status: "Research",
    github: "https://github.com/kabandajordan",
    demo: null,
  },
];

const colorMap: Record<string, { border: string; text: string; tag: string; dot: string; iconBg: string }> = {
  blue: { border: "border-blue-500/15", text: "text-blue-400", tag: "bg-blue-500/10 text-blue-400/80 border-blue-500/20", dot: "bg-blue-500", iconBg: "bg-blue-500/10" },
  red: { border: "border-red-500/15", text: "text-red-400", tag: "bg-red-500/10 text-red-400/80 border-red-500/20", dot: "bg-red-500", iconBg: "bg-red-500/10" },
  purple: { border: "border-purple-500/15", text: "text-purple-400", tag: "bg-purple-500/10 text-purple-400/80 border-purple-500/20", dot: "bg-purple-500", iconBg: "bg-purple-500/10" },
  cyan: { border: "border-cyan-500/15", text: "text-cyan-400", tag: "bg-cyan-500/10 text-cyan-400/80 border-cyan-500/20", dot: "bg-cyan-500", iconBg: "bg-cyan-500/10" },
  green: { border: "border-green-500/15", text: "text-green-400", tag: "bg-green-500/10 text-green-400/80 border-green-500/20", dot: "bg-green-500", iconBg: "bg-green-500/10" },
};

const statusColors: Record<string, string> = {
  "In Development": "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
  "Completed": "text-green-400 bg-green-500/10 border-green-500/20",
  "Research": "text-purple-400 bg-purple-500/10 border-purple-500/20",
};

export default function Projects() {
  return (
    <SectionWrapper
      id="projects"
      label="// projects.showcase"
      title="What I've built"
      subtitle="Real systems solving real problems. Each project is a lesson in engineering tradeoffs."
    >
      <div className="grid lg:grid-cols-2 gap-6">
        {projects.map((project, i) => {
          const c = colorMap[project.color];
          const Icon = project.icon;
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className={`relative glass rounded-2xl border ${c.border} overflow-hidden group transition-all duration-300 hover:border-opacity-40`}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 group-hover:opacity-80 transition-opacity`} />

              <div className="relative z-10 p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl ${c.iconBg} border ${c.border} flex items-center justify-center`}>
                      <Icon size={18} className={c.text} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white/90">{project.title}</h3>
                      <p className={`text-xs font-mono ${c.text}`}>{project.subtitle}</p>
                    </div>
                  </div>
                  <span className={`text-xs font-mono px-2 py-0.5 rounded-full border ${statusColors[project.status]}`}>
                    {project.status}
                  </span>
                </div>

                {/* Description */}
                <p className="text-white/45 text-sm leading-relaxed mb-4">{project.description}</p>

                {/* Features */}
                <div className="space-y-1.5 mb-5">
                  {project.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2 text-xs text-white/40">
                      <span className={`w-1 h-1 rounded-full ${c.dot} mt-1.5 flex-shrink-0`} />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className={`px-2 py-0.5 text-xs font-mono rounded border ${c.tag}`}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-mono text-white/40 hover:text-white/80 transition-colors"
                  >
                    <GithubIcon size={13} />
                    Source
                  </a>
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-1.5 text-xs font-mono ${c.text} hover:opacity-80 transition-opacity`}
                    >
                      <ExternalLink size={13} />
                      Live Demo
                    </a>
                  ) : (
                    <span className="text-xs font-mono text-white/20">Demo coming soon</span>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
