"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";

const timeline = [
  {
    year: "2021",
    title: "First Lines, First Systems",
    tags: ["Python", "HTML/CSS", "Linux"],
    color: "#3b82f6",
    description:
      "Started with Python scripts and basic web pages. Quickly realized that the interesting part wasn't the syntax — it was understanding what the machine was actually doing. Spent months reading about how operating systems work, how memory is managed, how processes communicate. Linux became home.",
    lessons: ["Fundamentals over frameworks", "Read the source code", "The terminal is your friend"],
  },
  {
    year: "2022",
    title: "Web, Backend & Linux Depth",
    tags: ["Node.js", "React", "PostgreSQL", "Bash", "Networking"],
    color: "#06b6d4",
    description:
      "Built full-stack web applications and started going deep on backend architecture. Learned SQL properly, understood HTTP at the protocol level, wrote Bash scripts to automate everything. Started studying networking — TCP/IP, DNS, routing. The web stopped being magic and became infrastructure.",
    lessons: ["SQL is not optional", "HTTP is just text over TCP", "Automate the boring stuff"],
  },
  {
    year: "2023",
    title: "Cybersecurity & Networking Arc",
    tags: ["Kali Linux", "Wireshark", "Burp Suite", "CTF", "Metasploit"],
    color: "#ef4444",
    description:
      "Went deep into offensive and defensive security. Participated in CTF competitions, set up home labs, analyzed network traffic with Wireshark, learned web application exploitation with Burp Suite. Started thinking about every system I built through an attacker's lens. Security isn't a feature — it's a mindset.",
    lessons: ["Think like an attacker", "Packet analysis reveals everything", "Defense requires understanding offense"],
  },
  {
    year: "2023–2024",
    title: "FinTech + AI + Fraud Detection",
    tags: ["Python", "ML", "FastAPI", "PostgreSQL", "Risk Systems"],
    color: "#8b5cf6",
    description:
      "Started building systems where correctness has financial consequences. Explored fraud detection using anomaly detection algorithms, built risk scoring engines, worked on trading analytics platforms. Learned that fintech engineering is where performance, security, and reliability all converge — there's no room for sloppiness.",
    lessons: ["Correctness before optimization", "Anomaly detection is hard", "Financial systems demand audit trails"],
  },
  {
    year: "2024",
    title: "Web3 + Distributed Systems",
    tags: ["Solidity", "Ethereum", "Hardhat", "Distributed Systems", "IPFS"],
    color: "#f59e0b",
    description:
      "Explored blockchain development and distributed systems architecture. Wrote smart contracts in Solidity, understood consensus mechanisms, studied distributed system patterns — CAP theorem, eventual consistency, leader election. Web3 is interesting not for the hype, but for the engineering problems it forces you to solve.",
    lessons: ["Consensus is expensive", "Immutability has tradeoffs", "Distributed systems fail in interesting ways"],
  },
  {
    year: "2025+",
    title: "Production-Grade Systems",
    tags: ["Go", "Microservices", "Edge Computing", "AI Infra", "Systems Design"],
    color: "var(--accent)",
    description:
      "Focused on building systems that survive contact with reality. Studying Go for high-performance services, designing microservice architectures, exploring edge computing and AI inference optimization. The goal is engineering that works at scale, under load, with real users — not just in development.",
    lessons: ["Design for failure", "Observability is not optional", "Simplicity scales better than cleverness"],
  },
];

export default function Experience() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <SectionWrapper
      id="experience"
      label="// timeline.log"
      title="The engineering arc"
      subtitle="How I got from curious beginner to systems-obsessed engineer."
      sectionNumber="03"
      bgVariant="alt2"
    >
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div
          className="absolute left-5 sm:left-7 top-0 bottom-0 w-px"
          style={{
            background: "linear-gradient(to bottom, rgba(0,255,136,0.3), rgba(59,130,246,0.2), transparent)",
          }}
        />

        <div className="space-y-6">
          {timeline.map((item, i) => {
            const isOpen = expanded === i;
            return (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="relative pl-14 sm:pl-20"
              >
                {/* Animated node */}
                <motion.div
                  className="absolute left-3 sm:left-5 top-5 w-4 h-4 rounded-full"
                  style={{
                    background: item.color,
                    boxShadow: isOpen ? `0 0 12px ${item.color}60, 0 0 0 4px var(--bg)` : "0 0 0 4px var(--bg)",
                  }}
                  animate={{ scale: isOpen ? 1.2 : 1 }}
                  transition={{ duration: 0.2 }}
                />

                {/* Card */}
                <div
                  className="glass rounded-2xl overflow-hidden transition-all duration-300"
                  style={{
                    border: `1px solid ${isOpen ? item.color + "30" : "rgba(255,255,255,0.05)"}`,
                  }}
                >
                  {/* Header — always visible, clickable */}
                  <button
                    onClick={() => setExpanded(isOpen ? null : i)}
                    className="w-full text-left p-5 flex items-start justify-between gap-4"
                  >
                    <div className="flex-1 min-w-0">
                      <span
                        className="text-xs block mb-1"
                        style={{ fontFamily: "var(--font-mono)", color: item.color }}
                      >
                        {item.year}
                      </span>
                      <h3
                        className="text-base font-semibold"
                        style={{ fontFamily: "var(--font-syne)", color: "var(--text-1)" }}
                      >
                        {item.title}
                      </h3>
                      {/* Tags — always visible */}
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 text-xs rounded"
                            style={{
                              fontFamily: "var(--font-mono)",
                              background: `${item.color}12`,
                              color: item.color,
                              border: `1px solid ${item.color}25`,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0 mt-1"
                      style={{ color: "var(--text-3)" }}
                    >
                      <ChevronDown size={16} />
                    </motion.div>
                  </button>

                  {/* Expandable content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div
                          className="px-5 pb-5 border-t"
                          style={{ borderColor: "rgba(255,255,255,0.04)" }}
                        >
                          <p
                            className="text-sm leading-relaxed mt-4 mb-4"
                            style={{ color: "var(--text-3)", fontWeight: 300 }}
                          >
                            {item.description}
                          </p>

                          {/* Lessons — terminal style */}
                          <div
                            className="terminal-block p-4"
                          >
                            <div
                              className="text-xs mb-3"
                              style={{ fontFamily: "var(--font-mono)", color: "var(--text-3)" }}
                            >
                              // key_lessons
                            </div>
                            <div className="space-y-1.5">
                              {item.lessons.map((lesson) => (
                                <div
                                  key={lesson}
                                  className="flex items-center gap-2 text-xs"
                                  style={{ fontFamily: "var(--font-mono)" }}
                                >
                                  <span style={{ color: "var(--accent)" }}>→</span>
                                  <span style={{ color: "var(--accent)" }}>{lesson}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
