import { type Project } from "@/data/projects";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <article className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-blue-200 transition-all duration-300 flex flex-col">
      {/* Image */}
      <div className="relative aspect-video bg-gray-100 overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
            <span className="text-blue-300 text-4xl font-bold">
              {project.title.charAt(0)}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-2.5 py-1 bg-blue-50 text-blue-600 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
              aria-label={`${project.title} GitHub repo`}
            >
              <Github size={15} />
              Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors ml-auto"
              aria-label={`${project.title} live demo`}
            >
              Live Demo
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
