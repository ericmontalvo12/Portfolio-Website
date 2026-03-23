import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eric Montalvo | Web Developer",
  description:
    "Full stack web developer specializing in building exceptional digital experiences.",
  keywords: ["web developer", "portfolio", "full stack", "react", "next.js"],
  authors: [{ name: "Eric Montalvo" }],
  openGraph: {
    title: "Eric Montalvo | Web Developer",
    description:
      "Full stack web developer specializing in building exceptional digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans">{children}</body>
    </html>
  );
}
