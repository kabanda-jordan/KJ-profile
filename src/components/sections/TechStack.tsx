"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

type Category = "All" | "Languages" | "Frontend" | "Backend" | "AI" | "Security" | "DevOps" | "Web3";

interface Tech {
  name: string;
  category: Category[];
  icon: string; // devicon class
  color: string;
}

const techs: Tech[] = [
  // Languages
  { name: "JavaScript", category: ["Languages"], icon: "devicon-javascript-plain", color: "#f7df1e" },
  { name: "TypeScript", category: ["Languages"], icon: "devicon-typescript-plain", color: "#3178c6" },
  { name: "Python", category: ["Languages"], icon: "devicon-python-plain", color: "#3776ab" },
  { name: "Go", category: ["Languages"], icon: "devicon-go-plain", color: "#00add8" },
  { name: "Java", category: ["Languages"], icon: "devicon-java-plain", color: "#ed8b00" },
  { name: "C", category: ["Languages"], icon: "devicon-c-plain", color: "#a8b9cc" },
  { name: "C++", category: ["Languages"], icon: "devicon-cplusplus-plain", color: "#00599c" },
  { name: "SQL", category: ["Languages"], icon: "devicon-postgresql-plain", color: "#336791" },
  // Frontend
  { name: "React", category: ["Frontend"], icon: "devicon-react-original", color: "#61dafb" },
  { name: "Next.js", category: ["Frontend"], icon: "devicon-nextjs-plain", color: "#ffffff" },
  { name: "TailwindCSS", category: ["Frontend"], icon: "devicon-tailwindcss-plain", color: "#06b6d4" },
  { name: "Framer Motion", category: ["Frontend"], icon: "devicon-framermotion-original", color: "#bb4b96" },
  // Backend
  { name: "Node.js", category: ["Backend"], icon: "devicon-nodejs-plain", color: "#339933" },
  { name: "Django", category: ["Backend"], icon: "devicon-django-plain", color: "#092e20" },
  { name: "Flask", category: ["Backend"], icon: "devicon-flask-original", color: "#ffffff" },
  { name: "FastAPI", category: ["Backend"], icon: "devicon-fastapi-plain", color: "#009688" },
  { name: "PostgreSQL", category: ["Backend"], icon: "devicon-postgresql-plain", color: "#336791" },
  { name: "MongoDB", category: ["Backend"], icon: "devicon-mongodb-plain", color: "#47a248" },
  { name: "Redis", category: ["Backend"], icon: "devicon-redis-plain", color: "#dc382d" },
  // AI
  { name: "NumPy", category: ["AI"], icon: "devicon-numpy-plain", color: "#013243" },
  { name: "Pandas", category: ["AI"], icon: "devicon-pandas-plain", color: "#150458" },
  { name: "Scikit-learn", category: ["AI"], icon: "devicon-scikitlearn-plain", color: "#f7931e" },
  { name: "TensorFlow", category: ["AI"], icon: "devicon-tensorflow-original", color: "#ff6f00" },
  { name: "Matplotlib", category: ["AI"], icon: "devicon-matplotlib-plain", color: "#11557c" },
  // Security
  { name: "Kali Linux", category: ["Security"], icon: "devicon-linux-plain", color: "#557c94" },
  { name: "Wireshark", category: ["Security"], icon: "devicon-linux-plain", color: "#1679a7" },
  { name: "Burp Suite", category: ["Security"], icon: "devicon-linux-plain", color: "#ff6633" },
  { name: "Metasploit", category: ["Security"], icon: "devicon-linux-plain", color: "#2a2a2a" },
  { name: "Nmap", category: ["Security"], icon: "devicon-linux-plain", color: "#4a90d9" },
  // DevOps
  { name: "Docker", category: ["DevOps"], icon: "devicon-docker-plain", color: "#2496ed" },
  { name: "Git", category: ["DevOps"], icon: "devicon-git-plain", color: "#f05032" },
  { name: "Linux", category: ["DevOps"], icon: "devicon-linux-plain", color: "#fcc624" },
  { name: "Nginx", category: ["DevOps"], icon: "devicon-nginx-plain", color: "#009639" },
  { name: "GitHub Actions", category: ["DevOps"], icon: "devicon-github-original", color: "#ffffff" },
  // Web3
  { name: "Solidity", category: ["Web3"], icon: "devicon-solidity-plain", color: "#363636" },
  { name: "Ethereum", category: ["Web3"], icon: "devicon-ethereum-original", color: "#627eea" },
  { name: "Hardhat", category: ["Web3"], icon: "devicon-nodejs-plain", color: "#fff100" },
  { name: "Web3.js", category: ["Web3"], icon: "devicon-javascript-plain", color: "#f16822" },
  { name: "IPFS", category: ["Web3"], icon: "devicon-linux-plain", color: "#65c2cb" },
];

const categories: Category[] = ["All", "Languages", "Frontend", "Backend", "AI", "Security", "DevOps", "Web3"];

const categoryColors: Record<Category, string> = {
  All: "var(--accent)",
  Languages: "#3b82f6",
  Frontend: "#06b6d4",
  Backend: "#8b5cf6",
  AI: "#f59e0b",
  Security: "#ef4444",
  DevOps: "#10b981",
  Web3: "#f97316",
};

export default function TechStack() {
  const [active, setActive] = useState<Category>("All");

  const filtered = active === "All" ? techs : techs.filter((t) => t.category.includes(active));

  return (
    <SectionWrapper
      id="stack"
      label="// tech_stack.json"
      title="Tools of the trade"
      subtitle="The technologies I use to build, break, and understand systems."
      sectionNumber="02"
      bgVariant="alt1"
    >
      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat) => {
          const isActive = active === cat;
          return (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="px-4 py-2 rounded-full text-xs font-mono transition-all duration-200"
              style={{
                background: isActive ? `${categoryColors[cat]}18` : "rgba(255,255,255,0.03)",
                border: `1px solid ${isActive ? `${categoryColors[cat]}40` : "rgba(255,255,255,0.06)"}`,
                color: isActive ? categoryColors[cat] : "var(--text-3)",
                fontFamily: "var(--font-mono)",
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Badge grid */}
      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((tech) => (
            <motion.div
              key={tech.name}
              layout
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.2 }}
              whileHover={{ y: -3, scale: 1.04 }}
              className="flex flex-col items-center gap-2 p-4 rounded-xl glass border cursor-default group transition-all duration-200"
              style={{
                borderColor: "rgba(255,255,255,0.05)",
              }}
            >
              {/* Icon via devicons CDN */}
              <i
                className={`${tech.icon} text-2xl transition-transform duration-200 group-hover:scale-110`}
                style={{ color: tech.color }}
              />
              <span
                className="text-xs text-center leading-tight"
                style={{ fontFamily: "var(--font-mono)", color: "var(--text-3)" }}
              >
                {tech.name}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Count */}
      <p
        className="text-center mt-8 text-xs"
        style={{ fontFamily: "var(--font-mono)", color: "var(--text-3)" }}
      >
        {filtered.length} technologies
        {active !== "All" && ` in ${active}`}
      </p>
    </SectionWrapper>
  );
}
