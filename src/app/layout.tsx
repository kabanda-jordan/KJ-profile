import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kabanda Jordan — Systems Engineer & AI Researcher",
  description:
    "Portfolio of Kabanda Jordan — Full-Stack Engineer, AI Enthusiast, Cybersecurity Researcher, and FinTech Builder.",
  keywords: ["Kabanda Jordan", "Software Engineer", "Full-Stack Developer", "AI Engineer", "Cybersecurity", "FinTech", "Systems Engineer", "Next.js", "TypeScript", "Portfolio"],
  authors: [{ name: "Kabanda Jordan" }],
  creator: "Kabanda Jordan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kabanda-jordan.vercel.app",
    title: "Kabanda Jordan — Systems Engineer & AI Researcher",
    description: "Building at the intersection of distributed systems, AI, cybersecurity, and fintech infrastructure.",
    siteName: "Kabanda Jordan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kabanda Jordan — Systems Engineer",
    description: "Full-Stack Engineer · AI Researcher · Cybersecurity · FinTech Builder",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className="antialiased bg-[#0a0a0a] text-white overflow-x-hidden">
        <main className="w-full max-w-[1400px] mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
