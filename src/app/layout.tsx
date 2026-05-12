import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kabanda Jordan — Systems Engineer & AI Researcher",
  description:
    "Portfolio of Kabanda Jordan — Full-Stack Engineer, AI Enthusiast, Cybersecurity Researcher, and FinTech Builder. Building at the intersection of distributed systems, AI, and security.",
  keywords: [
    "Kabanda Jordan",
    "Software Engineer",
    "Full-Stack Developer",
    "AI Engineer",
    "Cybersecurity",
    "FinTech",
    "Systems Engineer",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Kabanda Jordan" }],
  creator: "Kabanda Jordan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kabandajordan.dev",
    title: "Kabanda Jordan — Systems Engineer & AI Researcher",
    description:
      "Building at the intersection of distributed systems, AI, cybersecurity, and fintech infrastructure.",
    siteName: "Kabanda Jordan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kabanda Jordan — Systems Engineer",
    description: "Full-Stack Engineer · AI Researcher · Cybersecurity · FinTech Builder",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`}>
      <body className={`${inter.className} antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
