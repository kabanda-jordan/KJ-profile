import AnimatedBackground from "@/components/ui/AnimatedBackground";
import CustomCursor from "@/components/ui/CustomCursor";
import LoadingScreen from "@/components/ui/LoadingScreen";
import CommandPalette from "@/components/ui/CommandPalette";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import TechStack from "@/components/sections/TechStack";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Cybersecurity from "@/components/sections/Cybersecurity";
import AIFintech from "@/components/sections/AIFintech";
import Hackathons from "@/components/sections/Hackathons";
import GitHubStats from "@/components/sections/GitHubStats";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <AnimatedBackground />
      <CommandPalette />

      <div className="relative z-10">
        <Navbar />

        <main>
          <Hero />

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />

          <About />

          <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

          <TechStack />

          <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

          <Experience />

          <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

          <Projects />

          <div className="h-px bg-gradient-to-r from-transparent via-red-500/10 to-transparent" />

          <Cybersecurity />

          <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

          <AIFintech />

          <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

          <Hackathons />

          <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

          <GitHubStats />

          <div className="h-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />

          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}
