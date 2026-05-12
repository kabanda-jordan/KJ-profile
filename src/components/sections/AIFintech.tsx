"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Brain, AlertTriangle, BarChart3, Zap, Database } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";

// ─── Animated counter ────────────────────────────────────────
function useCountUp(target: string, inView: boolean) {
  const [display, setDisplay] = useState(target);

  useEffect(() => {
    if (!inView) return;

    // "10K TPS" — render directly, no animation needed
    if (target.includes("TPS")) {
      setDisplay("10K TPS");
      return;
    }

    const isMs = target.includes("ms");
    const isPct = target.includes("%");
    const isLt = target.startsWith("<");
    const raw = parseFloat(target.replace(/[^0-9.]/g, ""));
    const duration = 1400;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * raw;

      if (isMs) setDisplay(`<${Math.round(current)}ms`);
      else if (isPct && isLt) setDisplay(`<${current.toFixed(1)}%`);
      else if (isPct) setDisplay(`${Math.round(current)}%+`);
      else setDisplay(String(Math.round(current)));

      if (progress < 1) requestAnimationFrame(tick);
    };

    setDisplay(isMs ? "<0ms" : isLt ? "<0%" : "0%+");
    requestAnimationFrame(tick);
  }, [inView, target]);

  return display;
}

function MetricCard({ label, value, color }: { label: string; value: string; color: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const display = useCountUp(value, inView);

  return (
    <div
      ref={ref}
      className="glass rounded-xl border p-5 text-center flex flex-col items-center justify-center"
      style={{ borderColor: "rgba(255,255,255,0.06)", minHeight: "80px" }}
    >
      <div
        className="text-2xl font-bold font-mono mb-1"
        style={{ color, fontFamily: "var(--font-syne)" }}
      >
        {display}
      </div>
      <div className="text-xs" style={{ fontFamily: "var(--font-mono)", color: "var(--text-3)" }}>
        {label}
      </div>
    </div>
  );
}

// ─── Interactive chart ────────────────────────────────────────
const chartData = [
  { val: 40, period: "T1" },
  { val: 65, period: "T2" },
  { val: 45, period: "T3" },
  { val: 80, period: "T4" },
  { val: 55, period: "T5" },
  { val: 90, period: "T6" },
  { val: 70, period: "T7" },
  { val: 85, period: "T8" },
  { val: 60, period: "T9" },
  { val: 95, period: "T10" },
  { val: 75, period: "T11" },
  { val: 88, period: "T12" },
];

function AnomalyChart() {
  const [tooltip, setTooltip] = useState<{ val: number; period: string; x: number; y: number } | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="glass rounded-2xl border p-6 mb-12" style={{ borderColor: "rgba(59,130,246,0.1)" }}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="text-xs mb-1" style={{ fontFamily: "var(--font-mono)", color: "var(--text-3)" }}>
            // anomaly_detection.chart
          </div>
          <div className="text-sm font-semibold" style={{ color: "var(--text-2)", fontFamily: "var(--font-syne)" }}>
            Transaction Risk Score — Last 12 Periods
          </div>
        </div>
        <div className="flex items-center gap-4 text-xs" style={{ fontFamily: "var(--font-mono)" }}>
          <span className="flex items-center gap-1.5" style={{ color: "rgba(59,130,246,0.7)" }}>
            <span className="w-2 h-2 rounded-full bg-blue-500" />Normal
          </span>
          <span className="flex items-center gap-1.5" style={{ color: "rgba(239,68,68,0.7)" }}>
            <span className="w-2 h-2 rounded-full bg-red-500" />Anomaly
          </span>
        </div>
      </div>

      {/* Bar chart */}
      <div className="relative flex items-end gap-2 h-36">
        {chartData.map((d, i) => {
          const isAnomaly = d.val > 80;
          return (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={inView ? { height: `${d.val}%` } : { height: 0 }}
              transition={{ delay: i * 0.05 + 0.2, duration: 0.55, ease: "easeOut" }}
              className="flex-1 rounded-t-sm relative cursor-pointer group"
              style={{
                background: isAnomaly
                  ? "linear-gradient(to top, rgba(239,68,68,0.7), rgba(239,68,68,0.4))"
                  : "linear-gradient(to top, rgba(59,130,246,0.6), rgba(59,130,246,0.3))",
                minHeight: "4px",
              }}
              onMouseEnter={(e) => {
                const rect = (e.target as HTMLElement).getBoundingClientRect();
                const parentRect = (e.target as HTMLElement).closest(".relative")!.getBoundingClientRect();
                setTooltip({
                  val: d.val,
                  period: d.period,
                  x: rect.left - parentRect.left + rect.width / 2,
                  y: rect.top - parentRect.top - 8,
                });
              }}
              onMouseLeave={() => setTooltip(null)}
            >
              {/* Hover highlight */}
              <div
                className="absolute inset-0 rounded-t-sm opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: "rgba(255,255,255,0.08)" }}
              />
            </motion.div>
          );
        })}

        {/* Tooltip */}
        {tooltip && (
          <div
            className="absolute pointer-events-none z-10 px-2.5 py-1.5 rounded-lg text-xs"
            style={{
              left: tooltip.x,
              top: tooltip.y,
              transform: "translate(-50%, -100%)",
              background: "rgba(10,10,14,0.95)",
              border: "1px solid rgba(255,255,255,0.1)",
              fontFamily: "var(--font-mono)",
              color: "var(--text-1)",
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ color: tooltip.val > 80 ? "#ef4444" : "#3b82f6" }}>
              {tooltip.val}
            </span>
            {" "}— {tooltip.period}
          </div>
        )}
      </div>

      {/* X axis */}
      <div className="flex gap-2 mt-2">
        {chartData.map((d) => (
          <div
            key={d.period}
            className="flex-1 text-center text-xs"
            style={{ fontFamily: "var(--font-mono)", color: "var(--text-3)" }}
          >
            {d.period}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Domain cards ─────────────────────────────────────────────
const domains = [
  {
    icon: AlertTriangle,
    title: "Fraud Detection",
    color: "#ef4444",
    border: "rgba(239,68,68,0.15)",
    bg: "rgba(239,68,68,0.05)",
    desc: "Anomaly detection pipelines that flag suspicious transaction patterns in real time. Built on statistical baselines and ML classifiers trained on behavioral signals.",
    tags: ["Isolation Forest", "Z-Score", "Feature Engineering", "Real-time Scoring"],
  },
  {
    icon: TrendingUp,
    title: "Trading Analytics",
    color: "#3b82f6",
    border: "rgba(59,130,246,0.15)",
    bg: "rgba(59,130,246,0.05)",
    desc: "Quantitative analysis tools for trade journaling, performance attribution, and strategy backtesting. Focused on helping traders understand their edge — or lack of one.",
    tags: ["Backtesting", "Sharpe Ratio", "Drawdown Analysis", "Trade Psychology"],
  },
  {
    icon: Brain,
    title: "ML Experimentation",
    color: "#8b5cf6",
    border: "rgba(139,92,246,0.15)",
    bg: "rgba(139,92,246,0.05)",
    desc: "Hands-on ML work across classification, regression, and time-series forecasting. Focus on model interpretability and production deployment constraints.",
    tags: ["Scikit-learn", "Time Series", "Model Explainability", "Feature Selection"],
  },
  {
    icon: BarChart3,
    title: "Risk Engineering",
    color: "#06b6d4",
    border: "rgba(6,182,212,0.15)",
    bg: "rgba(6,182,212,0.05)",
    desc: "Risk scoring engines that quantify exposure across multiple dimensions. Designed for systems where a wrong answer has financial consequences.",
    tags: ["VaR", "Risk Scoring", "Exposure Limits", "Stress Testing"],
  },
  {
    icon: Zap,
    title: "Edge AI Optimization",
    color: "#f59e0b",
    border: "rgba(245,158,11,0.15)",
    bg: "rgba(245,158,11,0.05)",
    desc: "Optimizing ML inference for low-latency environments. Model quantization, pruning, and deployment on constrained hardware.",
    tags: ["Model Quantization", "ONNX", "Inference Optimization", "Edge Deployment"],
  },
  {
    icon: Database,
    title: "Low-Latency Systems",
    color: "var(--accent)",
    border: "rgba(0,255,136,0.15)",
    bg: "rgba(0,255,136,0.05)",
    desc: "Backend infrastructure designed for microsecond-sensitive workloads. Memory layout optimization, lock-free data structures, kernel bypass networking.",
    tags: ["Lock-free Queues", "Memory Pools", "DPDK", "CPU Affinity"],
  },
];

const metrics = [
  { label: "Avg Detection Latency", value: "<50ms", color: "var(--accent)" },
  { label: "False Positive Rate", value: "<2%", color: "#3b82f6" },
  { label: "Model Accuracy", value: "94%+", color: "#8b5cf6" },
  { label: "Throughput", value: "10K TPS", color: "#06b6d4" },
];

export default function AIFintech() {
  return (
    <SectionWrapper
      id="ai-fintech"
      label="// ai_fintech.systems"
      title="AI & FinTech Engineering"
      subtitle="Where machine learning meets financial infrastructure. Performance and correctness are non-negotiable."
      sectionNumber="06"
      bgVariant="alt3"
    >
      {/* Animated metrics */}
      <div
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        style={{ alignItems: "stretch" }}
      >
        {metrics.map((m) => (
          <MetricCard key={m.label} label={m.label} value={m.value} color={m.color} />
        ))}
      </div>

      {/* Interactive chart */}
      <AnomalyChart />

      {/* Domain cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {domains.map((domain, i) => {
          const Icon = domain.icon;
          return (
            <motion.div
              key={domain.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="glass rounded-xl p-5 transition-all duration-300 group"
              style={{ border: `1px solid ${domain.border}` }}
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center mb-3 transition-transform duration-200 group-hover:scale-110"
                style={{ background: domain.bg, border: `1px solid ${domain.border}` }}
              >
                <Icon size={16} style={{ color: domain.color }} />
              </div>
              <h3
                className="text-sm font-semibold mb-2"
                style={{ fontFamily: "var(--font-syne)", color: "var(--text-1)" }}
              >
                {domain.title}
              </h3>
              <p className="text-xs leading-relaxed mb-3" style={{ color: "var(--text-3)", fontWeight: 300 }}>
                {domain.desc}
              </p>
              <div className="flex flex-wrap gap-1">
                {domain.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-1.5 py-0.5 text-xs rounded"
                    style={{
                      fontFamily: "var(--font-mono)",
                      background: domain.bg,
                      color: domain.color,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
