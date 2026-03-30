export type Project = {
  id: number;
  title: string;
  description: string;
  image: string; // path to image in /public/projects/ or an external URL
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
};

// ─── ADD YOUR PROJECTS HERE ───────────────────────────────────────────────────
export const projects: Project[] = [
  {
    id: 1,
    title: "Rock Mountain Performance",
    description:
      "A full-featured ecommerce storefront for a supplement brand. Built with Next.js, TypeScript, and Stripe — featuring a polished product catalog, cart management, and a complete checkout flow. Designed for performance and conversion.",
    image: "/projects/rock-mountain-performance.jpeg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Framer Motion"],
    liveUrl: "https://rockmountainperformance.com/",
    featured: true,
  },
  {
    id: 2,
    title: "OpsDesk",
    description:
      "A centralized operations platform built for a property management company. Manages live inventory, work orders, stock dispatch, and purchase orders — replacing manual processes with a unified, real-time system.",
    image: "/projects/invntrymngmnt.jpeg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Supabase"],
    liveUrl: "https://inventory-management-orcin-ten.vercel.app/dashboard",
    featured: true,
  },
];

// ─── YOUR PERSONAL INFO ───────────────────────────────────────────────────────
export const personalInfo = {
  name: "Eric Montalvo",
  title: "Full Stack Developer",
  tagline: "I build custom websites, ecommerce stores, and business web apps — from storefront to backend.",
  bio: "I'm a full-stack developer specializing in Next.js, TypeScript, and modern web infrastructure. I work with businesses to build production-ready software — whether that's a customer-facing ecommerce site or an internal operations platform.",
  email: "montalvoventuresllc@gmail.com",
  github: "",
  linkedin: "",
  twitter: "",
  resumeUrl: "/resume.pdf", // add your resume PDF to /public/
};

// ─── YOUR SKILLS ──────────────────────────────────────────────────────────────
export const skills = {
  languages: ["JavaScript", "TypeScript", "Python", "HTML", "CSS"],
  frameworks: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS"],
  tools: ["Git", "PostgreSQL", "MongoDB", "Docker", "Figma", "Vercel"],
};
