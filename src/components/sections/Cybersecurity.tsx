"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Terminal, Eye, Wifi, Lock, AlertTriangle } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";

const terminalLines = [
  { text: "$ nmap -sV -sC -p- 192.168.1.0/24", color: "var(--accent)", delay: 0 },
  { text: "Starting Nmap 7.94 ( https://nmap.org )", color: "rgba(255,255,255,0.35)", delay: 800 },
  { text: "Discovered open port 22/tcp on 192.168.1.105", color: "#f59e0b", delay: 1600 },
  { text: "Discovered open port 80/tcp on 192.168.1.105", color: "#f59e0b", delay: 2200 },
  { text: "Discovered open port 443/tcp on 192.168.1.105", color: "#f59e0b", delay: 2800 },
  { text: "$ wireshark -i eth0 -f 'tcp port 80'", color: "var(--accent)", delay: 3600 },
  { text: "Capturing packets on eth0...", color: "rgba(255,255,255,0.35)", delay: 4200 },
  { text: "[ALERT] Suspicious SYN flood detected from 10.0.0.42", color: "#ef4444", delay: 5000 },
  { text: "$ burpsuite --proxy-port 8080", color: "var(--accent)", delay: 5800 },
  { text: "Intercepting HTTP traffic...", color: "rgba(255,255,255,0.35)", delay: 6400 },
  { text: "[VULN] SQL injection vector found in /api/users?id=", color: "#ef4444", delay: 7200 },
  { text: "$ hydra -l admin -P wordlist.txt ssh://target", color: "var(--accent)", delay: 8000 },
  { text: "[INFO] Testing 14344 passwords...", color: "rgba(255,255,255,0.35)", delay: 8600 },
  { text: "$ _", color: "var(--accent)", delay: 9400 },
];

// Realistic character-by-character typing with random delays
function useRealisticTerminal(started: boolean) {
  const [lines, setLines] = useState<{ text: string; color: string; done: boolean }[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    if (!started) return;

    // Initialize lines
    setLines(terminalLines.map((l) => ({ text: "", color: l.color, done: false })));

    let lineIdx = 0;
    let charIdx = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const typeNext = () => {
      if (lineIdx >= terminalLines.length) return;

      const fullText = terminalLines[lineIdx].text;

      if (charIdx < fullText.length) {
        const char = fullText[charIdx];
        setLines((prev) => {
          const next = [...prev];
          next[lineIdx] = { ...next[lineIdx], text: fullText.slice(0, charIdx + 1) };
          return next;
        });
        charIdx++;
        // Randomize delay: slower for commands, faster for output
        const isCommand = fullText.startsWith("$");
        const baseDelay = isCommand ? 45 : 18;
        const jitter = Math.random() * (isCommand ? 40 : 15);
        timeoutId = setTimeout(typeNext, baseDelay + jitter);
      } else {
        // Line done
        setLines((prev) => {
          const next = [...prev];
          next[lineIdx] = { ...next[lineIdx], done: true };
          return next;
        });
        lineIdx++;
        charIdx = 0;
        if (lineIdx < terminalLines.length) {
          const gap = terminalLines[lineIdx].delay - terminalLines[lineIdx - 1].delay;
          timeoutId = setTimeout(typeNext, Math.max(gap * 0.4, 200));
        }
      }
    };

    timeoutId = setTimeout(typeNext, 400);
    return () => clearTimeout(timeoutId);
  }, [started]);

  return { lines, currentLine, currentChar };
}

function TerminalAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { lines } = useRealisticTerminal(inView);

  return (
    <div ref={ref} className="terminal-block p-5 overflow-x-auto">
      <div className="flex items-center gap-1.5 mb-4">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        <span className="ml-2 text-xs" style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)" }}>
          kali@attacker:~
        </span>
      </div>
      <div className="space-y-1.5 max-h-72 overflow-hidden">
        {lines.map((line, i) => (
          <div
            key={i}
            className="text-xs leading-relaxed"
            style={{ color: line.color, fontFamily: "var(--font-mono)", minHeight: "1.4em" }}
          >
            {line.text}
            {i === lines.length - 1 && !line.done && (
              <span className="cursor-blink" style={{ color: "var(--accent)" }}>█</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const skills = [
  { icon: Terminal, label: "Penetration Testing", desc: "Web app and network pentesting using industry-standard tooling", color: "#ef4444" },
  { icon: Eye, label: "Traffic Analysis", desc: "Deep packet inspection and protocol analysis with Wireshark", color: "#f59e0b" },
  { icon: Shield, label: "Defensive Security", desc: "SIEM concepts, log analysis, incident response workflows", color: "#3b82f6" },
  { icon: Wifi, label: "Network Security", desc: "Firewall configuration, IDS/IPS, network segmentation", color: "#06b6d4" },
  { icon: Lock, label: "Web Security", desc: "OWASP Top 10, Burp Suite, authentication vulnerabilities", color: "#8b5cf6" },
  { icon: AlertTriangle, label: "CTF Competitions", desc: "Capture The Flag events — binary exploitation, crypto, forensics", color: "#f97316" },
];

export default function Cybersecurity() {
  return (
    <SectionWrapper
      id="cybersecurity"
      label="// security.research"
      title="Cybersecurity & Offensive Research"
      subtitle="Understanding systems by learning how they break. Defense starts with knowing the attack surface."
      sectionNumber="05"
      bgVariant="alt2"
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

          {/* Red/Blue team */}
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div
              className="glass rounded-xl p-4 text-center"
              style={{ border: "1px solid rgba(239,68,68,0.15)" }}
            >
              <div
                className="text-xs font-bold mb-1"
                style={{ fontFamily: "var(--font-mono)", color: "#ef4444" }}
              >
                RED TEAM
              </div>
              <div className="text-xs" style={{ color: "var(--text-3)" }}>Recon · Exploit · Escalate</div>
            </div>
            <div
              className="glass rounded-xl p-4 text-center"
              style={{ border: "1px solid rgba(59,130,246,0.15)" }}
            >
              <div
                className="text-xs font-bold mb-1"
                style={{ fontFamily: "var(--font-mono)", color: "#3b82f6" }}
              >
                BLUE TEAM
              </div>
              <div className="text-xs" style={{ color: "var(--text-3)" }}>Monitor · Detect · Respond</div>
            </div>
          </div>

          {/* Tools */}
          <div
            className="glass rounded-xl p-4 mt-4"
            style={{ border: "1px solid rgba(255,255,255,0.05)" }}
          >
            <div
              className="text-xs mb-3"
              style={{ fontFamily: "var(--font-mono)", color: "var(--text-3)" }}
            >
              // tools_arsenal
            </div>
            <div className="flex flex-wrap gap-2">
              {["Kali Linux", "Wireshark", "Burp Suite", "Metasploit", "Nmap", "Hydra", "John the Ripper", "Gobuster", "SQLmap", "Netcat"].map((tool) => (
                <span
                  key={tool}
                  className="px-2 py-0.5 text-xs rounded"
                  style={{
                    fontFamily: "var(--font-mono)",
                    background: "rgba(239,68,68,0.06)",
                    color: "rgba(239,68,68,0.7)",
                    border: "1px solid rgba(239,68,68,0.15)",
                  }}
                >
                  {tool}
                </span>
              ))}
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
                whileHover={{ x: 4 }}
                className="glass rounded-xl p-4 flex items-start gap-4 transition-all duration-200 group"
                style={{ border: "1px solid rgba(255,255,255,0.05)" }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                  style={{ background: `${skill.color}12` }}
                >
                  <Icon size={16} style={{ color: skill.color }} />
                </div>
                <div>
                  <div
                    className="text-sm font-semibold mb-0.5"
                    style={{ fontFamily: "var(--font-syne)", color: "var(--text-1)" }}
                  >
                    {skill.label}
                  </div>
                  <div className="text-xs leading-relaxed" style={{ color: "var(--text-3)", fontWeight: 300 }}>
                    {skill.desc}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
