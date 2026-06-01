"use client";

import { motion } from "framer-motion";
import { GitCommit, Star, GitFork, Code2 } from "lucide-react";
import GithubIcon from "@/components/ui/GithubIcon";
import SectionWrapper from "@/components/ui/SectionWrapper";

const generateHeatmap = () => {
  const data: number[][] = [];
  for (let w = 0; w < 52; w++) {
    const week: number[] = [];
    for (let d = 0; d < 7; d++) {
      const r = Math.random();
      week.push(r < 0.35 ? 0 : r < 0.6 ? 1 : r < 0.8 ? 2 : r < 0.93 ? 3 : 4);
    }
    data.push(week);
  }
  return data;
};

const heatmapData = generateHeatmap();

// Grayscale intensity levels
const intensityColors = [
  "rgba(255,255,255,0.04)",
  "rgba(255,255,255,0.15)",
  "rgba(255,255,255,0.30)",
  "rgba(255,255,255,0.55)",
  "rgba(255,255,255,0.85)",
];

const topLanguages = [
  { name: "TypeScript", percent: 35 },
  { name: "Python",     percent: 28 },
  { name: "JavaScript", percent: 18 },
  { name: "Go",         percent: 10 },
  { name: "C",          percent: 9  },
];

const stats = [
  { icon: GitCommit, label: "Total Commits",  value: "500+" },
  { icon: Star,      label: "Stars Earned",   value: "45+"  },
  { icon: GitFork,   label: "Repositories",   value: "30+"  },
  { icon: Code2,     label: "Pull Requests",  value: "80+"  },
];

export default function GitHubStats() {
  return (
    <SectionWrapper
      id="github"
      label="// github.activity"
      title="GitHub Activity"
      subtitle="Open source contributions, personal projects, and engineering experiments."
      bgVariant="alt1"
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
              transition={{ delay: i * 0.08 }}
              className="glass rounded-xl p-4 flex items-center gap-3 transition-all"
              style={{ border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <Icon size={16} style={{ color: "rgba(255,255,255,0.4)" }} />
              <div>
                <div
                  className="text-xl font-bold"
                  style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.85)" }}
                >
                  {s.value}
                </div>
                <div className="text-xs" style={{ fontFamily: "var(--font-mono)", color: "var(--text-3)" }}>
                  {s.label}
                </div>
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
          className="lg:col-span-2 glass rounded-2xl p-6"
          style={{ border: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-xs mb-1" style={{ fontFamily: "var(--font-mono)", color: "var(--text-3)" }}>
                // contribution_graph
              </div>
              <div className="text-sm font-semibold" style={{ color: "var(--text-2)", fontFamily: "var(--font-display)" }}>
                Contribution Activity — 2024
              </div>
            </div>
            <a
              href="https://github.com/kabanda-jordan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs transition-colors"
              style={{ fontFamily: "var(--font-mono)", color: "var(--text-3)" }}
            >
              <GithubIcon size={13} />
              View Profile
            </a>
          </div>

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
                      className="w-2.5 h-2.5 rounded-sm cursor-default"
                      style={{ background: intensityColors[intensity] }}
                      title={`${intensity} contributions`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-1.5 mt-3 justify-end">
            <span className="text-xs" style={{ fontFamily: "var(--font-mono)", color: "var(--text-3)" }}>Less</span>
            {intensityColors.map((c, i) => (
              <div key={i} className="w-2.5 h-2.5 rounded-sm" style={{ background: c }} />
            ))}
            <span className="text-xs" style={{ fontFamily: "var(--font-mono)", color: "var(--text-3)" }}>More</span>
          </div>
        </motion.div>

        {/* Top languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="glass rounded-2xl p-6"
          style={{ border: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="text-xs mb-1" style={{ fontFamily: "var(--font-mono)", color: "var(--text-3)" }}>
            // top_languages
          </div>
          <div className="text-sm font-semibold mb-5" style={{ color: "var(--text-2)", fontFamily: "var(--font-display)" }}>
            Most Used Languages
          </div>

          <div className="space-y-4">
            {topLanguages.map((lang, i) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 + 0.3 }}
              >
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-xs" style={{ fontFamily: "var(--font-mono)", color: "var(--text-2)" }}>
                    {lang.name}
                  </span>
                  <span className="text-xs" style={{ fontFamily: "var(--font-mono)", color: "var(--text-3)" }}>
                    {lang.percent}%
                  </span>
                </div>
                <div className="h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 + 0.5, duration: 0.7, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ background: "rgba(255,255,255,0.5)" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Streak */}
          <div className="mt-6 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
            <div className="text-xs mb-3" style={{ fontFamily: "var(--font-mono)", color: "var(--text-3)" }}>
              // streak_stats
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="text-center">
                <div
                  className="text-lg font-bold"
                  style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.85)" }}
                >
                  47
                </div>
                <div className="text-xs" style={{ color: "var(--text-3)" }}>Current Streak</div>
              </div>
              <div className="text-center">
                <div
                  className="text-lg font-bold"
                  style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.85)" }}
                >
                  89
                </div>
                <div className="text-xs" style={{ color: "var(--text-3)" }}>Longest Streak</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
