import { Github, ExternalLink } from "lucide-react";

const ProjectCard = ({ title, description, imageUrl, link, github, tech }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl">
      {/* Image */}
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div
          className="h-52 rounded-xl bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      </a>

      <div className="p-4">
        <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
        <p className="text-sm text-gray-400 mb-4">{description}</p>

        {/* Tech */}
        <div className="flex flex-wrap gap-2 mb-5">
          {tech.map((t, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-300"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-4 text-sm items-center">
          <a
            href={link}
            target="_blank"
            className="flex items-center gap-1 text-blue-400 hover:text-blue-300"
          >
            <ExternalLink size={16} />
            Live
          </a>

          {github?.frontend && (
            <a
              href={github.frontend}
              target="_blank"
              className="flex items-center gap-1 text-gray-400 hover:text-white"
            >
              <Github size={16} />
              Frontend
            </a>
          )}

          {github?.backend && (
            <a
              href={github.backend}
              target="_blank"
              className="flex items-center gap-1 text-gray-400 hover:text-white"
            >
              <Github size={16} />
              Backend
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
