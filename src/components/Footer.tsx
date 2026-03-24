import { personalInfo } from "@/data/projects";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-gray-100 text-center">
      <p className="text-sm text-gray-400">
        Designed & Built by{" "}
        <span className="text-gray-600 font-medium">{personalInfo.name}</span>
      </p>
    </footer>
  );
}
