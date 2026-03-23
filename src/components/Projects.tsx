"use client";

import { useEffect, useRef, useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={ref} className="section-padding">
      <div className="container-max">
        <div
          className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
            <div className="flex-1 h-px bg-gray-200 max-w-xs" />
          </div>
          <p className="text-gray-500 mb-12 max-w-xl">
            A selection of projects I&apos;ve built. Each one taught me
            something new.
          </p>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
