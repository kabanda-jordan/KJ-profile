import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

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
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} dark`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body
        className="antialiased bg-[#0a0a0a] text-white overflow-x-hidden"
        style={{ fontFamily: "var(--font-display), sans-serif" }}
      >
        <main className="w-full max-w-[1400px] mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
