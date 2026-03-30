"use client";

import { useEffect, useState } from "react";
import { personalInfo } from "@/data/projects";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center section-padding pt-24">
      <div className="container-max">
        <div
          className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-4">
            {personalInfo.name}
          </h1>

          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-bold text-gray-400 mb-6">
            {personalInfo.title}
          </h2>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-gray-600 max-w-xl mb-10 leading-relaxed">
            {personalInfo.tagline}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
            >
              Get In Touch
            </a>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 animate-bounce">
        <ArrowDown size={18} />
      </div>
    </section>
  );
}
