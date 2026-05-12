"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Shield, Terminal, Eye, Wifi, Lock, AlertTriangle } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";

const terminalLines = [
  { text: "$ nmap -sV -sC -p- 192.168.1.0/24", color: "text-green-400/80", delay: 0 },
  { text: "Starting Nmap 7.94 ( https://nmap.org )", color: "text-white/40", delay: 0.3 },
  { text: "Discovered open port 22/tcp on 192.168.1.105", color: "text-yellow-400/70", delay: 0.6 },
  { text: "Discovered open port 80/tcp on 192.168.1.105", color: "text-yellow-400/70", delay: 0.9 },
  { text: "Discovered open port 443/tcp on 192.168.1.105", color: "text-yellow-400/70", delay: 1.2 },
  { text: "$ wireshark -i eth0 -f 'tcp port 80'", color: "text-green-400/80", delay: 1.5 },
  { text: "Capturing packets on eth0...", color: "text-white/40", delay: 1.8 },
  { text: "[ALERT] Suspicious SYN flood detected from 10.0.0.42", color: "text-red-400/80", delay: 2.1 },
  { text: "$ burpsuite --proxy-port 8080", color: "text-green-400/80", delay: 2.4 },
  { text: "Intercepting HTTP traffic...", color: "text-white/40", delay: 2.7 },
  { text: "[VULN] SQL injection vector found in /api/users?id=", color: "text-red-400/80", delay: 3.0 },
  { text: "$ hydra -l admin -P wordlist.txt ssh://target", color: "text-green-400/80", delay: 3.3 },
  { text: "[INFO] Testing 14344 passwords...", color: "text-white/40", delay: 3.6 },
  { text: "$ _", color: "text-green-400/80", delay: 3.9 },
];

const skills = [
  { icon: Terminal, label: "Penetration Testing", desc: "Web app and network pentesting using industry-standard tooling", color: "text-red-400" },
  { icon: Eye, label: "Traffic Analysis", desc: "Deep packet inspection and protocol analysis with Wireshark", color: "text-yellow-400" },
  { icon: Shield, label: "Defensive Security", desc: "SIEM concepts, log analysis, incident response workflows", color: "text-blue-400" },
  { icon: Wifi, label: "Network Security", desc: "Firewall configuration, IDS/IPS, network segmentation", color: "text-cyan-400" },
  { icon: Lock, label: "Web Security", desc: "OWASP Top 10, Burp Suite, authentication vulnerabilities", color: "text-purple-400" },
  { icon: AlertTriangle, label: "CTF Competitions", desc: "Capture The Flag events — binary exploitation, crypto, forensics", color: "text-orange-400" },
];

function TerminalAnimation() {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);

  useEffect(() => {
    terminalLines.forEach((line, i) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, i]);
      }, line.delay * 1000 + 500);
    });
  }, []);

  return (
    <div className="glass rounded-xl border border-red-500/10 p-5 font-mono text-xs overflow-hidden">
      <div className="flex items-center gap-1.5 mb-4">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        <span className="ml-2 text-white/20">kali@attacker:~</span>
      </div>
      <div className="space-y-1.5 max-h-64 overflow-hidden">
        {terminalLines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={visibleLines.includes(i) ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3 }}
            className={line.color}
          >
            {line.text}
            {i === terminalLines.length - 1 && visibleLines.includes(i) && (
              <span className="cursor-blink">█</span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function Cybersecurity() {
  return (
    <SectionWrapper
      id="cybersecurity"
      label="// security.research"
      title="Cybersecurity & Offensive Research"
      subtitle="Understanding systems by learning how they break. Defense starts with knowing the attack surface."
    >
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Terminal */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <TerminalAnimation />

          {/* Red/Blue team visual */}
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="glass rounded-xl border border-red-500/15 p-4 text-center">
              <div className="text-red-400 text-xs font-mono font-bold mb-1">RED TEAM</div>
              <div className="text-white/30 text-xs">Recon · Exploit · Escalate</div>
            </div>
            <div className="glass rounded-xl border border-blue-500/15 p-4 text-center">
              <div className="text-blue-400 text-xs font-mono font-bold mb-1">BLUE TEAM</div>
              <div className="text-white/30 text-xs">Monitor · Detect · Respond</div>
            </div>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-3"
        >
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass rounded-xl border border-white/5 p-4 flex items-start gap-4 hover:border-white/10 transition-all group"
              >
                <div className={`w-8 h-8 rounded-lg bg-white/3 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <Icon size={16} className={skill.color} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white/80 mb-0.5">{skill.label}</div>
                  <div className="text-xs text-white/35 leading-relaxed">{skill.desc}</div>
                </div>
              </motion.div>
            );
          })}

          {/* Tools list */}
          <div className="glass rounded-xl border border-white/5 p-4 mt-2">
            <div className="text-xs font-mono text-white/25 mb-3">// tools_arsenal</div>
            <div className="flex flex-wrap gap-2">
              {["Kali Linux", "Wireshark", "Burp Suite", "Metasploit", "Nmap", "Hydra", "John the Ripper", "Gobuster", "SQLmap", "Netcat"].map((tool) => (
                <span key={tool} className="px-2 py-0.5 text-xs font-mono rounded border border-red-500/15 text-red-400/60 bg-red-500/5">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
