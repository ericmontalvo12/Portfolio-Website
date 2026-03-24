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
      "A full-featured ecommerce storefront for a supplement brand. Built with Next.js 16 and React 19, featuring product browsing, cart management, and Stripe-powered checkout.",
    image: "/projects/rock-mountain-performance.jpeg",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Stripe", "Framer Motion"],
    liveUrl: "https://rockmountainperformance.com/",
    featured: true,
  },
  {
    id: 2,
    title: "Invntrymngmnt",
    description:
      "An inventory management MVP that helps small businesses track stock levels, manage products, and monitor supply in real time. Built with Next.js and backed by Supabase.",
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
  tagline: "I build clean, fast, and accessible web experiences.",
  bio: "I'm a passionate web developer with experience building modern web applications. I love turning complex problems into elegant solutions and writing code that others enjoy working with.",
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
