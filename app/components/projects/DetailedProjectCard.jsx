import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const DetailedProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      <div className="relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={490}
          height={350}
          className="object-cover group-hover:scale-150 transition-transform duration-300 shadow-md rounded-md"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3">
          {project.title}
        </h3>

        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">
            Technologies:
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-50 text-blue-600 text-xs rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">
            Key Features:
          </h4>
          <ul className="space-y-1">
            {project.features.slice(0, 3).map((feature, index) => (
              <li
                key={index}
                className="text-sm text-gray-600 flex items-start"
              >
                <span className="text-primary mr-2">•</span>
                <span>{feature}</span>
              </li>
            ))}
            {project.features.length > 3 && (
              <li className="text-sm text-gray-500 italic">
                +{project.features.length - 3} more features
              </li>
            )}
          </ul>
        </div>

        <div className="flex gap-3 pt-4 border-t border-gray-200">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors text-sm font-medium flex-1 justify-center"
            >
              <FaExternalLinkAlt className="text-xs" />
              Live Link
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors text-sm font-medium flex-1 justify-center"
            >
              <FaGithub />
              Code
            </a>
          )}

          <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors text-sm font-medium flex-1 justify-center">
            <FaExternalLinkAlt className="text-xs" />
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailedProjectCard;
