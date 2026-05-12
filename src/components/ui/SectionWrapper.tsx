"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  label?: string;
  title?: string;
  subtitle?: string;
}

export default function SectionWrapper({
  id,
  children,
  className,
  label,
  title,
  subtitle,
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id={id}
      ref={ref}
      className={cn("relative py-24 px-4 sm:px-6 overflow-hidden", className)}
    >
      <div className="max-w-6xl mx-auto">
        {(label || title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            {label && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-mono mb-4">
                <span className="w-1 h-1 rounded-full bg-blue-400" />
                {label}
              </div>
            )}
            {title && (
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white/90 mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="max-w-2xl mx-auto text-white/40 text-base leading-relaxed">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
