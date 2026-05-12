"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

const categories = [
  {
    label: "Languages",
    color: "blue",
    items: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "Python", level: 85 },
      { name: "Go", level: 70 },
      { name: "Java", level: 72 },
      { name: "C", level: 65 },
      { name: "C++", level: 60 },
      { name: "SQL", level: 82 },
    ],
  },
  {
    label: "Frontend",
    color: "cyan",
    items: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "TailwindCSS", level: 92 },
      { name: "Framer Motion", level: 75 },
    ],
  },
  {
    label: "Backend",
    color: "purple",
    items: [
      { name: "Node.js", level: 88 },
      { name: "Django", level: 80 },
      { name: "Flask", level: 78 },
      { name: "Spring Boot", level: 65 },
      { name: "FastAPI", level: 75 },
    ],
  },
  {
    label: "Databases",
    color: "green",
    items: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "MySQL", level: 78 },
      { name: "Redis", level: 70 },
    ],
  },
  {
    label: "AI & Data",
    color: "yellow",
    items: [
      { name: "NumPy", level: 80 },
      { name: "Pandas", level: 78 },
      { name: "Matplotlib", level: 75 },
      { name: "Scikit-learn", level: 72 },
      { name: "TensorFlow", level: 65 },
    ],
  },
  {
    label: "Web3",
    color: "orange",
    items: [
      { name: "Solidity", level: 65 },
      { name: "Ethereum", level: 60 },
      { name: "Hardhat", level: 62 },
      { name: "Web3.js", level: 65 },
      { name: "IPFS", level: 55 },
    ],
  },
  {
    label: "Security & Networking",
    color: "red",
    items: [
      { name: "Linux / Kali", level: 88 },
      { name: "Wireshark", level: 80 },
      { name: "Burp Suite", level: 75 },
      { name: "Metasploit", level: 65 },
      { name: "Nmap", level: 82 },
      { name: "Hydra", level: 60 },
    ],
  },
  {
    label: "DevOps & Infra",
    color: "teal",
    items: [
      { name: "Docker", level: 80 },
      { name: "Git", level: 92 },
      { name: "Linux Admin", level: 85 },
      { name: "Nginx", level: 72 },
      { name: "CI/CD", level: 70 },
    ],
  },
];

const colorMap: Record<string, { border: string; text: string; bg: string; bar: string }> = {
  blue: { border: "border-blue-500/20", text: "text-blue-400", bg: "bg-blue-500/5", bar: "bg-blue-500" },
  cyan: { border: "border-cyan-500/20", text: "text-cyan-400", bg: "bg-cyan-500/5", bar: "bg-cyan-500" },
  purple: { border: "border-purple-500/20", text: "text-purple-400", bg: "bg-purple-500/5", bar: "bg-purple-500" },
  green: { border: "border-green-500/20", text: "text-green-400", bg: "bg-green-500/5", bar: "bg-green-500" },
  yellow: { border: "border-yellow-500/20", text: "text-yellow-400", bg: "bg-yellow-500/5", bar: "bg-yellow-500" },
  orange: { border: "border-orange-500/20", text: "text-orange-400", bg: "bg-orange-500/5", bar: "bg-orange-500" },
  red: { border: "border-red-500/20", text: "text-red-400", bg: "bg-red-500/5", bar: "bg-red-500" },
  teal: { border: "border-teal-500/20", text: "text-teal-400", bg: "bg-teal-500/5", bar: "bg-teal-500" },
};

export default function TechStack() {
  return (
    <SectionWrapper
      id="stack"
      label="// tech_stack.json"
      title="Tools of the trade"
      subtitle="The technologies I use to build, break, and understand systems."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {categories.map((cat, catIdx) => {
          const c = colorMap[cat.color];
          return (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.07, duration: 0.5 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className={`glass rounded-xl border ${c.border} p-5 hover:${c.border.replace("/20", "/40")} transition-all group`}
            >
              {/* Category header */}
              <div className="flex items-center gap-2 mb-4">
                <div className={`w-1.5 h-1.5 rounded-full ${c.bar}`} />
                <span className={`text-xs font-mono font-semibold ${c.text} uppercase tracking-wider`}>
                  {cat.label}
                </span>
              </div>

              {/* Skills */}
              <div className="space-y-3">
                {cat.items.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIdx * 0.07 + i * 0.04 }}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-white/60 font-mono">{item.name}</span>
                      <span className={`text-xs font-mono ${c.text} opacity-60`}>{item.level}%</span>
                    </div>
                    <div className="h-0.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: catIdx * 0.07 + i * 0.04 + 0.2, duration: 0.8, ease: "easeOut" }}
                        className={`h-full ${c.bar} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
