"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

const timeline = [
  {
    year: "2021",
    title: "First Lines, First Systems",
    tags: ["Python", "HTML/CSS", "Linux"],
    color: "blue",
    description:
      "Started with Python scripts and basic web pages. Quickly realized that the interesting part wasn't the syntax — it was understanding what the machine was actually doing. Spent months reading about how operating systems work, how memory is managed, how processes communicate. Linux became home.",
    lessons: ["Fundamentals over frameworks", "Read the source code", "The terminal is your friend"],
  },
  {
    year: "2022",
    title: "Web, Backend & Linux Depth",
    tags: ["Node.js", "React", "PostgreSQL", "Bash", "Networking"],
    color: "cyan",
    description:
      "Built full-stack web applications and started going deep on backend architecture. Learned SQL properly, understood HTTP at the protocol level, wrote Bash scripts to automate everything. Started studying networking — TCP/IP, DNS, routing. The web stopped being magic and became infrastructure.",
    lessons: ["SQL is not optional", "HTTP is just text over TCP", "Automate the boring stuff"],
  },
  {
    year: "2023",
    title: "Cybersecurity & Networking Arc",
    tags: ["Kali Linux", "Wireshark", "Burp Suite", "CTF", "Metasploit"],
    color: "red",
    description:
      "Went deep into offensive and defensive security. Participated in CTF competitions, set up home labs, analyzed network traffic with Wireshark, learned web application exploitation with Burp Suite. Started thinking about every system I built through an attacker's lens. Security isn't a feature — it's a mindset.",
    lessons: ["Think like an attacker", "Packet analysis reveals everything", "Defense requires understanding offense"],
  },
  {
    year: "2023–2024",
    title: "FinTech + AI + Fraud Detection",
    tags: ["Python", "ML", "FastAPI", "PostgreSQL", "Risk Systems"],
    color: "purple",
    description:
      "Started building systems where correctness has financial consequences. Explored fraud detection using anomaly detection algorithms, built risk scoring engines, worked on trading analytics platforms. Learned that fintech engineering is where performance, security, and reliability all converge — there's no room for sloppiness.",
    lessons: ["Correctness before optimization", "Anomaly detection is hard", "Financial systems demand audit trails"],
  },
  {
    year: "2024",
    title: "Web3 + Distributed Systems",
    tags: ["Solidity", "Ethereum", "Hardhat", "Distributed Systems", "IPFS"],
    color: "yellow",
    description:
      "Explored blockchain development and distributed systems architecture. Wrote smart contracts in Solidity, understood consensus mechanisms, studied distributed system patterns — CAP theorem, eventual consistency, leader election. Web3 is interesting not for the hype, but for the engineering problems it forces you to solve.",
    lessons: ["Consensus is expensive", "Immutability has tradeoffs", "Distributed systems fail in interesting ways"],
  },
  {
    year: "2025+",
    title: "Production-Grade Systems",
    tags: ["Go", "Microservices", "Edge Computing", "AI Infra", "Systems Design"],
    color: "green",
    description:
      "Focused on building systems that survive contact with reality. Studying Go for high-performance services, designing microservice architectures, exploring edge computing and AI inference optimization. The goal is engineering that works at scale, under load, with real users — not just in development.",
    lessons: ["Design for failure", "Observability is not optional", "Simplicity scales better than cleverness"],
  },
];

const colorMap: Record<string, { dot: string; line: string; tag: string; border: string; text: string }> = {
  blue: { dot: "bg-blue-500", line: "border-blue-500/30", tag: "bg-blue-500/10 text-blue-400 border-blue-500/20", border: "border-blue-500/15", text: "text-blue-400" },
  cyan: { dot: "bg-cyan-500", line: "border-cyan-500/30", tag: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20", border: "border-cyan-500/15", text: "text-cyan-400" },
  red: { dot: "bg-red-500", line: "border-red-500/30", tag: "bg-red-500/10 text-red-400 border-red-500/20", border: "border-red-500/15", text: "text-red-400" },
  purple: { dot: "bg-purple-500", line: "border-purple-500/30", tag: "bg-purple-500/10 text-purple-400 border-purple-500/20", border: "border-purple-500/15", text: "text-purple-400" },
  yellow: { dot: "bg-yellow-500", line: "border-yellow-500/30", tag: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20", border: "border-yellow-500/15", text: "text-yellow-400" },
  green: { dot: "bg-green-500", line: "border-green-500/30", tag: "bg-green-500/10 text-green-400 border-green-500/20", border: "border-green-500/15", text: "text-green-400" },
};

export default function Experience() {
  return (
    <SectionWrapper
      id="experience"
      label="// timeline.log"
      title="The engineering arc"
      subtitle="How I got from curious beginner to systems-obsessed engineer."
    >
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/30 via-purple-500/20 to-transparent" />

        <div className="space-y-8">
          {timeline.map((item, i) => {
            const c = colorMap[item.color];
            return (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="relative pl-12 sm:pl-20"
              >
                {/* Dot */}
                <div className={`absolute left-2.5 sm:left-6 top-5 w-3 h-3 rounded-full ${c.dot} ring-4 ring-black`} />

                {/* Card */}
                <div className={`glass rounded-xl border ${c.border} p-6 hover:border-opacity-40 transition-all group`}>
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <span className={`text-xs font-mono ${c.text} mb-1 block`}>{item.year}</span>
                      <h3 className="text-lg font-semibold text-white/90">{item.title}</h3>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {item.tags.map((tag) => (
                      <span key={tag} className={`px-2 py-0.5 text-xs font-mono rounded border ${c.tag}`}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-white/45 text-sm leading-relaxed mb-4">{item.description}</p>

                  {/* Lessons */}
                  <div className="border-t border-white/5 pt-3">
                    <div className="text-xs font-mono text-white/25 mb-2">// key_lessons</div>
                    <div className="space-y-1">
                      {item.lessons.map((lesson) => (
                        <div key={lesson} className="flex items-center gap-2 text-xs text-white/40">
                          <span className={`w-1 h-1 rounded-full ${c.dot} flex-shrink-0`} />
                          {lesson}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
