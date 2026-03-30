"use client";

import { useEffect, useRef, useState } from "react";
import { personalInfo, skills } from "@/data/projects";

export default function About() {
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
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const allSkillCategories = [
    { label: "Languages", items: skills.languages },
    { label: "Frameworks & Libraries", items: skills.frameworks },
    { label: "Tools & Platforms", items: skills.tools },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="section-padding bg-gray-50"
    >
      <div className="container-max">
        <div
          className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
            <div className="flex-1 h-px bg-gray-200 max-w-xs" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Bio */}
            <div>
              <p className="text-gray-600 text-lg leading-relaxed">
                {personalInfo.bio}
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-6">
              {allSkillCategories.map((category) => (
                <div key={category.label}>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    {category.label}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-blue-300 hover:text-blue-600 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
