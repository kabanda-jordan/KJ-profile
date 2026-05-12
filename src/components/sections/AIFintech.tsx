"use client";

import { motion } from "framer-motion";
import { TrendingUp, Brain, AlertTriangle, BarChart3, Zap, Database } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";

const domains = [
  {
    icon: AlertTriangle,
    title: "Fraud Detection",
    color: "text-red-400",
    border: "border-red-500/15",
    bg: "bg-red-500/5",
    desc: "Anomaly detection pipelines that flag suspicious transaction patterns in real time. Built on statistical baselines and ML classifiers trained on behavioral signals.",
    tags: ["Isolation Forest", "Z-Score", "Feature Engineering", "Real-time Scoring"],
  },
  {
    icon: TrendingUp,
    title: "Trading Analytics",
    color: "text-blue-400",
    border: "border-blue-500/15",
    bg: "bg-blue-500/5",
    desc: "Quantitative analysis tools for trade journaling, performance attribution, and strategy backtesting. Focused on helping traders understand their edge — or lack of one.",
    tags: ["Backtesting", "Sharpe Ratio", "Drawdown Analysis", "Trade Psychology"],
  },
  {
    icon: Brain,
    title: "ML Experimentation",
    color: "text-purple-400",
    border: "border-purple-500/15",
    bg: "bg-purple-500/5",
    desc: "Hands-on ML work across classification, regression, and time-series forecasting. Focus on model interpretability and production deployment constraints.",
    tags: ["Scikit-learn", "Time Series", "Model Explainability", "Feature Selection"],
  },
  {
    icon: BarChart3,
    title: "Risk Engineering",
    color: "text-cyan-400",
    border: "border-cyan-500/15",
    bg: "bg-cyan-500/5",
    desc: "Risk scoring engines that quantify exposure across multiple dimensions. Designed for systems where a wrong answer has financial consequences.",
    tags: ["VaR", "Risk Scoring", "Exposure Limits", "Stress Testing"],
  },
  {
    icon: Zap,
    title: "Edge AI Optimization",
    color: "text-yellow-400",
    border: "border-yellow-500/15",
    bg: "bg-yellow-500/5",
    desc: "Optimizing ML inference for low-latency environments. Model quantization, pruning, and deployment on constrained hardware.",
    tags: ["Model Quantization", "ONNX", "Inference Optimization", "Edge Deployment"],
  },
  {
    icon: Database,
    title: "Low-Latency Systems",
    color: "text-green-400",
    border: "border-green-500/15",
    bg: "bg-green-500/5",
    desc: "Backend infrastructure designed for microsecond-sensitive workloads. Memory layout optimization, lock-free data structures, kernel bypass networking.",
    tags: ["Lock-free Queues", "Memory Pools", "DPDK", "CPU Affinity"],
  },
];

const metrics = [
  { label: "Avg Detection Latency", value: "<50ms", color: "text-green-400" },
  { label: "False Positive Rate", value: "<2%", color: "text-blue-400" },
  { label: "Model Accuracy", value: "94%+", color: "text-purple-400" },
  { label: "Throughput", value: "10K TPS", color: "text-cyan-400" },
];

// Simulated chart bars
const chartData = [40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88];

export default function AIFintech() {
  return (
    <SectionWrapper
      id="ai-fintech"
      label="// ai_fintech.systems"
      title="AI & FinTech Engineering"
      subtitle="Where machine learning meets financial infrastructure. Performance and correctness are non-negotiable."
    >
      {/* Metrics bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
      >
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-xl border border-white/5 p-4 text-center"
          >
            <div className={`text-2xl font-bold font-mono ${m.color} mb-1`}>{m.value}</div>
            <div className="text-xs text-white/30 font-mono">{m.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Chart visualization */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="glass rounded-2xl border border-blue-500/10 p-6 mb-12"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="text-xs font-mono text-white/25 mb-1">// anomaly_detection.chart</div>
            <div className="text-sm font-semibold text-white/70">Transaction Risk Score — Last 12 Periods</div>
          </div>
          <div className="flex items-center gap-3 text-xs font-mono">
            <span className="flex items-center gap-1.5 text-green-400/60">
              <span className="w-2 h-2 rounded-full bg-green-500" />Normal
            </span>
            <span className="flex items-center gap-1.5 text-red-400/60">
              <span className="w-2 h-2 rounded-full bg-red-500" />Anomaly
            </span>
          </div>
        </div>

        {/* Bar chart */}
        <div className="flex items-end gap-2 h-32">
          {chartData.map((val, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${val}%` }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 + 0.3, duration: 0.6, ease: "easeOut" }}
              className={`flex-1 rounded-t-sm ${val > 80 ? "bg-red-500/60" : "bg-blue-500/40"} relative group`}
              style={{ minHeight: "4px" }}
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-mono text-white/30 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {val}
              </div>
            </motion.div>
          ))}
        </div>

        {/* X axis */}
        <div className="flex gap-2 mt-2">
          {chartData.map((_, i) => (
            <div key={i} className="flex-1 text-center text-xs font-mono text-white/15">
              T{i + 1}
            </div>
          ))}
        </div>
      </motion.div>

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
              className={`glass rounded-xl border ${domain.border} p-5 transition-all group`}
            >
              <div className={`w-9 h-9 rounded-lg ${domain.bg} border ${domain.border} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                <Icon size={16} className={domain.color} />
              </div>
              <h3 className="text-sm font-semibold text-white/85 mb-2">{domain.title}</h3>
              <p className="text-xs text-white/40 leading-relaxed mb-3">{domain.desc}</p>
              <div className="flex flex-wrap gap-1">
                {domain.tags.map((tag) => (
                  <span key={tag} className={`px-1.5 py-0.5 text-xs font-mono rounded ${domain.bg} ${domain.color} opacity-70`}>
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
