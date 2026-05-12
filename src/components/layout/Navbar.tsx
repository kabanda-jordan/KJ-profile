"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import LinkedinIcon from "@/components/ui/LinkedinIcon";
import GithubIcon from "@/components/ui/GithubIcon";
import InstagramIcon from "@/components/ui/InstagramIcon";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Security", href: "#cybersecurity" },
  { label: "AI/Fintech", href: "#ai-fintech" },
  { label: "Hackathons", href: "#hackathons" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.25, rootMargin: "-60px 0px -40% 0px" }
    );
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left"
        style={{
          scaleX,
          background: "linear-gradient(90deg, var(--accent), #00d4ff)",
        }}
      />

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
        style={
          scrolled
            ? {
                background: "rgba(10,10,10,0.85)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
              }
            : { background: "transparent" }
        }
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 group"
            aria-label="Back to top"
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 group-hover:scale-105"
              style={{
                border: "1px solid rgba(0,255,136,0.3)",
                background: "rgba(0,255,136,0.06)",
              }}
            >
              <span
                className="text-sm font-bold"
                style={{ fontFamily: "var(--font-syne)", color: "var(--accent)" }}
              >
                KJ
              </span>
            </div>
            <span
              className="text-sm hidden sm:block transition-colors duration-200"
              style={{ fontFamily: "var(--font-mono)", color: "var(--text-3)" }}
            >
              kabanda.dev
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-x-6">
            {navLinks.map(({ label, href }) => {
              const isActive = activeSection === href.slice(1);
              return (
                <button
                  key={href}
                  onClick={() => scrollTo(href)}
                  className="relative px-3 py-2 text-xs rounded-md transition-all duration-200"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: isActive ? "var(--accent)" : "var(--text-3)",
                    background: isActive ? "rgba(0,255,136,0.06)" : "transparent",
                  }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-md"
                      style={{ background: "rgba(0,255,136,0.06)", border: "1px solid rgba(0,255,136,0.15)" }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </button>
              );
            })}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-1">
            <a
              href="https://github.com/kabanda-jordan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg transition-colors duration-200"
              style={{ color: "var(--text-3)" }}
              aria-label="GitHub"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href="https://instagram.com/darkside1429"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg transition-colors duration-200"
              style={{ color: "var(--text-3)" }}
              aria-label="Instagram"
            >
              <InstagramIcon size={16} />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs rounded-lg transition-all duration-200"
              style={{
                fontFamily: "var(--font-mono)",
                border: "1px solid rgba(0,255,136,0.25)",
                color: "var(--accent)",
                background: "rgba(0,255,136,0.04)",
              }}
            >
              <Terminal size={11} />
              Resume
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2.5 rounded-lg transition-colors duration-200"
              style={{ color: "var(--text-2)" }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 lg:hidden flex flex-col"
            style={{ background: "rgba(10,10,10,0.98)", backdropFilter: "blur(24px)" }}
          >
            {/* Close button */}
            <div className="flex justify-end p-6">
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-lg"
                style={{ color: "var(--text-2)" }}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Nav links */}
            <div className="flex-1 flex flex-col justify-center px-8 gap-2">
              {navLinks.map(({ label, href }, i) => (
                <motion.button
                  key={href}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.35 }}
                  onClick={() => scrollTo(href)}
                  className="text-left py-3 border-b transition-all duration-200 group"
                  style={{
                    borderColor: "rgba(255,255,255,0.04)",
                    fontFamily: "var(--font-syne)",
                    fontSize: "clamp(24px, 5vw, 36px)",
                    fontWeight: 700,
                    color: activeSection === href.slice(1) ? "var(--accent)" : "var(--text-2)",
                  }}
                >
                  <span
                    className="text-xs mr-3"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--text-3)" }}
                  >
                    0{i + 1}
                  </span>
                  {label}
                </motion.button>
              ))}
            </div>

            {/* Bottom */}
            <div className="p-8 flex items-center gap-4">
              <a
                href="/resume.pdf"
                target="_blank"
                className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm"
                style={{
                  fontFamily: "var(--font-mono)",
                  border: "1px solid rgba(0,255,136,0.25)",
                  color: "var(--accent)",
                  background: "rgba(0,255,136,0.06)",
                }}
              >
                <Terminal size={14} />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
