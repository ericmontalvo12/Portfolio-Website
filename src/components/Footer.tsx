import { personalInfo } from "@/data/projects";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-gray-100 text-center">
      <p className="text-sm text-gray-400">
        Designed & Built by{" "}
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
        >
          {personalInfo.name}
        </a>
      </p>
    </footer>
  );
}
