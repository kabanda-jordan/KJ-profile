"use client";

import { motion } from "framer-motion";
import { GitCommit, Star, GitFork, Code2 } from "lucide-react";
import GithubIcon from "@/components/ui/GithubIcon";import SectionWrapper from "@/components/ui/SectionWrapper";

// Simulated contribution heatmap data
const generateHeatmap = () => {
  const weeks = 52;
  const days = 7;
  const data: number[][] = [];
  for (let w = 0; w < weeks; w++) {
    const week: number[] = [];
    for (let d = 0; d < days; d++) {
      const rand = Math.random();
      if (rand < 0.35) week.push(0);
      else if (rand < 0.6) week.push(1);
      else if (rand < 0.8) week.push(2);
      else if (rand < 0.93) week.push(3);
      else week.push(4);
    }
    data.push(week);
  }
  return data;
};

const heatmapData = generateHeatmap();

const intensityColors = [
  "bg-white/5",
  "bg-blue-900/60",
  "bg-blue-700/70",
  "bg-blue-500/80",
  "bg-blue-400",
];

const topLanguages = [
  { name: "TypeScript", percent: 35, color: "bg-blue-500" },
  { name: "Python", percent: 28, color: "bg-yellow-500" },
  { name: "JavaScript", percent: 18, color: "bg-yellow-400" },
  { name: "Go", percent: 10, color: "bg-cyan-400" },
  { name: "C", percent: 9, color: "bg-gray-400" },
];

const stats = [
  { icon: GitCommit, label: "Total Commits", value: "500+", color: "text-blue-400" },
  { icon: Star, label: "Stars Earned", value: "45+", color: "text-yellow-400" },
  { icon: GitFork, label: "Repositories", value: "30+", color: "text-purple-400" },
  { icon: Code2, label: "Pull Requests", value: "80+", color: "text-green-400" },
];

export default function GitHubStats() {
  return (
    <SectionWrapper
      id="github"
      label="// github.activity"
      title="GitHub Activity"
      subtitle="Open source contributions, personal projects, and engineering experiments."
    >
      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
      >
        {stats.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl border border-white/5 p-4 flex items-center gap-3 hover:border-blue-500/15 transition-all"
            >
              <Icon size={18} className={s.color} />
              <div>
                <div className={`text-xl font-bold font-mono ${s.color}`}>{s.value}</div>
                <div className="text-xs text-white/30">{s.label}</div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Contribution heatmap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2 glass rounded-2xl border border-white/5 p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-xs font-mono text-white/25 mb-1">// contribution_graph</div>
              <div className="text-sm font-semibold text-white/70">Contribution Activity — 2024</div>
            </div>
            <a
              href="https://github.com/kabandajordan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono text-white/30 hover:text-white/60 transition-colors"
            >
              <GithubIcon size={13} />
              View Profile
            </a>
          </div>

          {/* Heatmap grid */}
          <div className="overflow-x-auto">
            <div className="flex gap-0.5 min-w-max">
              {heatmapData.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-0.5">
                  {week.map((intensity, di) => (
                    <motion.div
                      key={di}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (wi * 7 + di) * 0.001 }}
                      className={`w-2.5 h-2.5 rounded-sm ${intensityColors[intensity]} hover:ring-1 hover:ring-blue-400/40 transition-all cursor-default`}
                      title={`${intensity} contributions`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center gap-1.5 mt-3 justify-end">
            <span className="text-xs text-white/20 font-mono">Less</span>
            {intensityColors.map((c, i) => (
              <div key={i} className={`w-2.5 h-2.5 rounded-sm ${c}`} />
            ))}
            <span className="text-xs text-white/20 font-mono">More</span>
          </div>
        </motion.div>

        {/* Top languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="glass rounded-2xl border border-white/5 p-6"
        >
          <div className="text-xs font-mono text-white/25 mb-1">// top_languages</div>
          <div className="text-sm font-semibold text-white/70 mb-5">Most Used Languages</div>

          <div className="space-y-4">
            {topLanguages.map((lang, i) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.3 }}
              >
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-xs font-mono text-white/60">{lang.name}</span>
                  <span className="text-xs font-mono text-white/30">{lang.percent}%</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.5, duration: 0.8, ease: "easeOut" }}
                    className={`h-full ${lang.color} rounded-full`}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Streak */}
          <div className="mt-6 pt-4 border-t border-white/5">
            <div className="text-xs font-mono text-white/25 mb-3">// streak_stats</div>
            <div className="grid grid-cols-2 gap-3">
              <div className="text-center">
                <div className="text-lg font-bold text-orange-400 font-mono">47</div>
                <div className="text-xs text-white/25">Current Streak</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-yellow-400 font-mono">89</div>
                <div className="text-xs text-white/25">Longest Streak</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
