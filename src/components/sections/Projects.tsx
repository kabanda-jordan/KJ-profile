"use client";

import { motion } from "framer-motion";
import { ExternalLink, Brain, Shield, ShoppingBag, Cpu, Network } from "lucide-react";
import GithubIcon from "@/components/ui/GithubIcon";
import SectionWrapper from "@/components/ui/SectionWrapper";

const projects = [
  {
    id: "neura-edge",
    num: "01",
    title: "Neura Edge Journal",
    subtitle: "AI-Powered Trading Analytics Platform",
    category: "AI",
    categoryColor: "#8b5cf6",
    description:
      "A sophisticated trading journal and analytics platform built for serious traders. Combines AI-driven insights with behavioral psychology metrics to help traders understand not just what they traded, but why — and whether that reasoning was sound.",
    icon: Brain,
    color: "#3b82f6",
    border: "rgba(59,130,246,0.15)",
    bg: "rgba(59,130,246,0.04)",
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
    // SVG placeholder visual
    visual: "trading",
  },
  {
    id: "cyber-shield",
    num: "02",
    title: "Cyber Shield AI",
    subtitle: "Intelligent Threat Detection Platform",
    category: "Security",
    categoryColor: "#ef4444",
    description:
      "An AI-driven cybersecurity monitoring platform that applies anomaly detection and behavioral analysis to identify threats before they escalate. Built with a SIEM-inspired architecture and real-time alerting pipeline.",
    icon: Shield,
    color: "#ef4444",
    border: "rgba(239,68,68,0.15)",
    bg: "rgba(239,68,68,0.04)",
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
    visual: "security",
  },
  {
    id: "aether",
    num: "03",
    title: "AETHER",
    subtitle: "Luxury Futuristic E-Commerce Platform",
    category: "FinTech",
    categoryColor: "#8b5cf6",
    description:
      "A premium e-commerce experience built with modern frontend engineering principles. Microservice-ready architecture, cinematic UI, and performance-first design. Built to demonstrate what luxury digital commerce should feel like.",
    icon: ShoppingBag,
    color: "#8b5cf6",
    border: "rgba(139,92,246,0.15)",
    bg: "rgba(139,92,246,0.04)",
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
    visual: "ecommerce",
  },
  {
    id: "rfid-economic",
    num: "04",
    title: "RFID Economic System",
    subtitle: "Economic Tracking & Management Platform",
    category: "Systems",
    categoryColor: "#06b6d4",
    description:
      "An economic tracking and resource management system built around RFID concepts. Designed for environments where physical asset tracking needs to integrate with financial and inventory systems in real time.",
    icon: Cpu,
    color: "#06b6d4",
    border: "rgba(6,182,212,0.15)",
    bg: "rgba(6,182,212,0.04)",
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
    visual: "rfid",
  },
  {
    id: "netcore",
    num: "05",
    title: "NetCore",
    subtitle: "Low-Latency Networking & Systems Project",
    category: "Systems",
    categoryColor: "var(--accent)",
    description:
      "A socket-based networking project exploring low-latency communication patterns, custom protocol design, and systems-level performance optimization. Built to understand what happens below the HTTP abstraction layer.",
    icon: Network,
    color: "var(--accent)",
    border: "rgba(0,255,136,0.15)",
    bg: "rgba(0,255,136,0.04)",
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
    visual: "network",
  },
];

const statusColors: Record<string, { bg: string; color: string; border: string }> = {
  "In Development": { bg: "rgba(245,158,11,0.08)", color: "#f59e0b", border: "rgba(245,158,11,0.2)" },
  "Completed": { bg: "rgba(0,255,136,0.08)", color: "var(--accent)", border: "rgba(0,255,136,0.2)" },
  "Research": { bg: "rgba(139,92,246,0.08)", color: "#8b5cf6", border: "rgba(139,92,246,0.2)" },
};

// SVG visual previews per project type
function ProjectVisual({ type, color }: { type: string; color: string }) {
  const visuals: Record<string, React.ReactNode> = {
    trading: (
      <svg viewBox="0 0 200 120" className="w-full h-full" aria-hidden="true">
        <rect width="200" height="120" fill="transparent" />
        {/* Chart lines */}
        <polyline points="10,90 30,70 50,80 70,45 90,55 110,30 130,40 150,20 170,35 190,15"
          fill="none" stroke={color} strokeWidth="2" strokeOpacity="0.6" />
        <polyline points="10,100 30,85 50,95 70,65 90,75 110,50 130,60 150,40 170,55 190,35"
          fill="none" stroke={color} strokeWidth="1" strokeOpacity="0.25" />
        {/* Dots */}
        {[[110,30],[150,20],[190,15]].map(([x,y],i) => (
          <circle key={i} cx={x} cy={y} r="3" fill={color} fillOpacity="0.8" />
        ))}
        {/* Grid */}
        {[30,60,90].map(y => (
          <line key={y} x1="0" y1={y} x2="200" y2={y} stroke="white" strokeOpacity="0.04" strokeWidth="1" />
        ))}
      </svg>
    ),
    security: (
      <svg viewBox="0 0 200 120" className="w-full h-full" aria-hidden="true">
        <rect width="200" height="120" fill="transparent" />
        {/* Shield */}
        <path d="M100,15 L140,30 L140,65 Q140,90 100,105 Q60,90 60,65 L60,30 Z"
          fill="none" stroke={color} strokeWidth="1.5" strokeOpacity="0.4" />
        <path d="M100,25 L130,37 L130,63 Q130,82 100,93 Q70,82 70,63 L70,37 Z"
          fill={color} fillOpacity="0.06" />
        {/* Scan lines */}
        {[45,55,65,75].map((y,i) => (
          <line key={i} x1="75" y1={y} x2="125" y2={y} stroke={color} strokeOpacity="0.2" strokeWidth="1" />
        ))}
        {/* Alert dots */}
        <circle cx="160" cy="25" r="5" fill="#ef4444" fillOpacity="0.7" />
        <circle cx="175" cy="40" r="3" fill="#f59e0b" fillOpacity="0.6" />
        <circle cx="165" cy="55" r="4" fill="#ef4444" fillOpacity="0.5" />
      </svg>
    ),
    ecommerce: (
      <svg viewBox="0 0 200 120" className="w-full h-full" aria-hidden="true">
        <rect width="200" height="120" fill="transparent" />
        {/* Product cards */}
        {[[15,20],[75,20],[135,20]].map(([x,y],i) => (
          <g key={i}>
            <rect x={x} y={y} width="50" height="65" rx="6" fill={color} fillOpacity="0.06" stroke={color} strokeOpacity="0.2" strokeWidth="1" />
            <rect x={x+5} y={y+5} width="40" height="30" rx="3" fill={color} fillOpacity="0.1" />
            <rect x={x+5} y={y+42} width="25" height="4" rx="2" fill="white" fillOpacity="0.15" />
            <rect x={x+5} y={y+50} width="15" height="4" rx="2" fill={color} fillOpacity="0.4" />
          </g>
        ))}
        {/* Cart icon */}
        <path d="M80,100 L90,100 L95,85 L170,85 L165,100 L155,100" fill="none" stroke={color} strokeOpacity="0.4" strokeWidth="1.5" />
      </svg>
    ),
    rfid: (
      <svg viewBox="0 0 200 120" className="w-full h-full" aria-hidden="true">
        <rect width="200" height="120" fill="transparent" />
        {/* RFID waves */}
        {[20,35,50].map((r,i) => (
          <circle key={i} cx="60" cy="60" r={r} fill="none" stroke={color} strokeOpacity={0.3 - i*0.08} strokeWidth="1.5" />
        ))}
        <circle cx="60" cy="60" r="6" fill={color} fillOpacity="0.7" />
        {/* Data flow */}
        {[0,1,2].map(i => (
          <rect key={i} x={100 + i*28} y={50} width="20" height="20" rx="4"
            fill={color} fillOpacity="0.08" stroke={color} strokeOpacity="0.2" strokeWidth="1" />
        ))}
        <line x1="80" y1="60" x2="100" y2="60" stroke={color} strokeOpacity="0.3" strokeWidth="1" strokeDasharray="4,3" />
        <line x1="120" y1="60" x2="128" y2="60" stroke={color} strokeOpacity="0.2" strokeWidth="1" strokeDasharray="4,3" />
        <line x1="148" y1="60" x2="156" y2="60" stroke={color} strokeOpacity="0.2" strokeWidth="1" strokeDasharray="4,3" />
      </svg>
    ),
    network: (
      <svg viewBox="0 0 200 120" className="w-full h-full" aria-hidden="true">
        <rect width="200" height="120" fill="transparent" />
        {/* Network nodes */}
        {[[100,20],[40,60],[160,60],[70,100],[130,100]].map(([x,y],i) => (
          <circle key={i} cx={x} cy={y} r="8" fill={color} fillOpacity="0.15" stroke={color} strokeOpacity="0.4" strokeWidth="1.5" />
        ))}
        {/* Connections */}
        {[[100,20,40,60],[100,20,160,60],[40,60,70,100],[160,60,130,100],[40,60,160,60]].map(([x1,y1,x2,y2],i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeOpacity="0.2" strokeWidth="1" />
        ))}
        {/* Pulse on center */}
        <circle cx="100" cy="20" r="14" fill="none" stroke={color} strokeOpacity="0.15" strokeWidth="1" />
      </svg>
    ),
  };

  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{ background: `radial-gradient(ellipse at center, ${color}08 0%, transparent 70%)` }}
    >
      {visuals[type] || null}
    </div>
  );
}

export default function Projects() {
  return (
    <SectionWrapper
      id="projects"
      label="// projects.showcase"
      title="What I've built"
      subtitle="Real systems solving real problems. Each project is a lesson in engineering tradeoffs."
      sectionNumber="04"
      bgVariant="alt3"
    >
      <div className="space-y-6">
        {projects.map((project, i) => {
          const Icon = project.icon;
          const sc = statusColors[project.status];
          const isFeatured = i < 2;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className={`relative glass rounded-2xl overflow-hidden group transition-all duration-300 ${
                isFeatured ? "lg:flex" : ""
              }`}
              style={{ border: `1px solid ${project.border}` }}
            >
              {/* Faint project number */}
              <span
                className="absolute top-2 right-4 font-bold pointer-events-none select-none"
                style={{
                  fontFamily: "var(--font-syne)",
                  fontSize: "clamp(48px, 8vw, 80px)",
                  color: "rgba(255,255,255,0.025)",
                  lineHeight: 1,
                }}
                aria-hidden="true"
              >
                {project.num}
              </span>

              {/* Visual preview — left on featured, top on grid */}
              <div
                className={`overflow-hidden flex-shrink-0 ${
                  isFeatured
                    ? "lg:w-64 xl:w-72 h-48 lg:h-auto"
                    : "h-32"
                } transition-transform duration-500 group-hover:scale-[1.02]`}
                style={{ background: project.bg, maxWidth: isFeatured ? "288px" : "100%" }}
              >
                <div style={{ opacity: 0.1, width: "100%", height: "100%" }}>
                  <ProjectVisual type={project.visual} color={project.color} />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex-1" style={{ padding: "1.5rem" }}>
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: project.bg, border: `1px solid ${project.border}` }}
                    >
                      <Icon size={16} style={{ color: project.color }} />
                    </div>
                    <div>
                      <h3
                        className="text-base font-bold"
                        style={{ fontFamily: "var(--font-syne)", color: "var(--text-1)" }}
                      >
                        {project.title}
                      </h3>
                      <p className="text-xs" style={{ fontFamily: "var(--font-mono)", color: project.color }}>
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    {/* Category */}
                    <span
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{
                        fontFamily: "var(--font-mono)",
                        background: `${project.categoryColor}12`,
                        color: project.categoryColor,
                        border: `1px solid ${project.categoryColor}25`,
                      }}
                    >
                      {project.category}
                    </span>
                    {/* Status */}
                    <span
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{
                        fontFamily: "var(--font-mono)",
                        background: sc.bg,
                        color: sc.color,
                        border: `1px solid ${sc.border}`,
                      }}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "var(--text-3)", fontWeight: 300 }}
                >
                  {project.description}
                </p>

                {/* Features */}
                <div className="space-y-1.5 mb-4">
                  {project.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2 text-xs" style={{ color: "var(--text-3)" }}>
                      <span
                        className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0"
                        style={{ background: project.color }}
                      />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs rounded"
                      style={{
                        fontFamily: "var(--font-mono)",
                        background: `${project.color}10`,
                        color: project.color,
                        border: `1px solid ${project.border}`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div
                  className="flex items-center gap-4 pt-4 border-t"
                  style={{ borderColor: "rgba(255,255,255,0.05)" }}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs transition-colors duration-200"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--text-3)" }}
                  >
                    <GithubIcon size={13} />
                    Source
                  </a>
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs transition-opacity duration-200"
                      style={{ fontFamily: "var(--font-mono)", color: project.color }}
                    >
                      <ExternalLink size={13} />
                      Live Demo
                    </a>
                  ) : (
                    <span
                      className="text-xs"
                      style={{ fontFamily: "var(--font-mono)", color: "var(--text-3)" }}
                    >
                      Preview coming soon
                    </span>
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
