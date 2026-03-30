"use client";

import { useEffect, useRef, useState } from "react";
import { Globe, ShoppingCart, LayoutDashboard, Layers } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Custom Websites",
    description:
      "Professional sites built for speed, SEO, and mobile-first presentation. From landing pages to full marketing sites.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce Stores",
    description:
      "Full-featured storefronts with product management, cart flows, and Stripe-powered checkout — built to convert.",
  },
  {
    icon: LayoutDashboard,
    title: "Internal Tools",
    description:
      "Custom dashboards and operations platforms — inventory systems, work order tracking, and workflow automation.",
  },
  {
    icon: Layers,
    title: "Business Web Apps",
    description:
      "End-to-end web applications with authentication, databases, APIs, and third-party integrations.",
  },
];

export default function WhatIBuild() {
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

  return (
    <section id="work" ref={ref} className="section-padding bg-gray-50">
      <div className="container-max">
        <div
          className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-3xl font-bold text-gray-900">What I Build</h2>
            <div className="flex-1 h-px bg-gray-200 max-w-xs" />
          </div>
          <p className="text-gray-500 mb-12 max-w-xl">
            I work with businesses to deliver software that solves real
            problems — from customer-facing storefronts to internal operations
            platforms.
          </p>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:border-blue-200 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
