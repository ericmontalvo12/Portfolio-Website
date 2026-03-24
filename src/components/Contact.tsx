"use client";

import { useEffect, useRef, useState } from "react";
import { personalInfo } from "@/data/projects";
import { Twitter, Mail } from "lucide-react";

export default function Contact() {
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

  const socials = [
    ...(personalInfo.twitter
      ? [{ icon: Twitter, label: "Twitter", href: personalInfo.twitter }]
      : []),
  ];

  return (
    <section id="contact" ref={ref} className="section-padding bg-gray-50">
      <div className="container-max">
        <div
          className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Get In Touch</h2>
            <div className="flex-1 h-px bg-gray-200 max-w-xs" />
          </div>

          <div className="max-w-2xl">
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              I&apos;m currently open to new opportunities. Whether you have a
              question, a project idea, or just want to say hi — my inbox is
              always open!
            </p>

            {/* Email CTA */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg mb-12 group"
            >
              <Mail size={20} />
              Say Hello
            </a>

            {/* Socials */}
            <div className="flex items-center gap-6">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors text-sm font-medium"
                  aria-label={label}
                >
                  <Icon size={18} />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
