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
  sectionNumber?: string;
  bgVariant?: "default" | "alt1" | "alt2" | "alt3";
}

const bgMap = {
  default: "var(--bg)",
  alt1: "var(--bg-1)",
  alt2: "var(--bg-2)",
  alt3: "var(--bg-3)",
};

export default function SectionWrapper({
  id,
  children,
  className,
  label,
  title,
  subtitle,
  sectionNumber,
  bgVariant = "default",
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id={id}
      ref={ref}
      className={cn("relative overflow-hidden", className)}
      style={{ background: bgMap[bgVariant], paddingTop: "6rem", paddingBottom: "6rem" }}
    >
      {/* Faint section number */}
      {sectionNumber && (
        <span className="section-number" aria-hidden="true">
          {sectionNumber}
        </span>
      )}

      <div style={{ maxWidth: "1280px", margin: "0 auto", paddingLeft: "1.5rem", paddingRight: "1.5rem", position: "relative", zIndex: 1 }}>
        {(label || title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16 text-center"
          >
            {label && (
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-5"
                style={{
                  borderColor: "rgba(0,255,136,0.18)",
                  background: "rgba(0,255,136,0.05)",
                  color: "var(--accent)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "var(--accent)" }}
                />
                {label}
              </div>
            )}
            {title && (
              <h2
                className="heading-md mb-4"
                style={{ color: "var(--text-1)", fontFamily: "var(--font-syne)" }}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--text-3)", fontWeight: 300, maxWidth: "600px", margin: "0 auto", textAlign: "center" }}
              >
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
