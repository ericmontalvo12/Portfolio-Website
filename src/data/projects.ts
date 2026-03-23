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
    title: "Project One",
    description:
      "A brief description of what this project does and the problem it solves. Keep it to 2-3 sentences.",
    image: "/projects/project1.png", // add your screenshot to public/projects/
    tags: ["React", "Node.js", "PostgreSQL"],
    liveUrl: "https://your-project.vercel.app",
    githubUrl: "https://github.com/yourusername/project-one",
    featured: true,
  },
  {
    id: 2,
    title: "Project Two",
    description:
      "A brief description of what this project does and the problem it solves. Keep it to 2-3 sentences.",
    image: "/projects/project2.png",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    liveUrl: "https://your-project.vercel.app",
    githubUrl: "https://github.com/yourusername/project-two",
    featured: true,
  },
  {
    id: 3,
    title: "Project Three",
    description:
      "A brief description of what this project does and the problem it solves. Keep it to 2-3 sentences.",
    image: "/projects/project3.png",
    tags: ["Python", "FastAPI", "React"],
    liveUrl: "https://your-project.vercel.app",
    githubUrl: "https://github.com/yourusername/project-three",
  },
];

// ─── YOUR PERSONAL INFO ───────────────────────────────────────────────────────
export const personalInfo = {
  name: "Your Name",
  title: "Full Stack Developer",
  tagline: "I build clean, fast, and accessible web experiences.",
  bio: "I'm a passionate web developer with experience building modern web applications. I love turning complex problems into elegant solutions and writing code that others enjoy working with.",
  email: "your@email.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourprofile",
  twitter: "https://twitter.com/yourhandle", // optional, set to "" to hide
  resumeUrl: "/resume.pdf", // add your resume PDF to /public/
};

// ─── YOUR SKILLS ──────────────────────────────────────────────────────────────
export const skills = {
  languages: ["JavaScript", "TypeScript", "Python", "HTML", "CSS"],
  frameworks: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS"],
  tools: ["Git", "PostgreSQL", "MongoDB", "Docker", "Figma", "Vercel"],
};
