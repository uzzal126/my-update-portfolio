"use client";

import Image from "next/image";
import { useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaInfoCircle } from "react-icons/fa";
import Modal from "../ui/Modal";

const DetailedProjectCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-linear-to-br from-white to-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500 group border border-gray-100">
        <div className="relative overflow-hidden h-60 border-b border-gray-100">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold text-gray-900 flex-1 group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>
          </div>

          <div className="mb-3">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-linear-to-r from-blue-50 to-indigo-50 text-blue-700 text-xs rounded-lg font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-2 pt-3 border-t border-gray-100">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg transition-all duration-200 text-sm font-medium flex-1"
              >
                <FaExternalLinkAlt className="text-xs" />
                Live Demo
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-all duration-200 text-sm font-medium"
              >
                <FaGithub />
              </a>
            )}
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-blue-100 text-blue-600 rounded-lg hover:bg-primary hover:text-white transition-all duration-200 text-sm font-medium cursor-pointer"
            >
              <FaInfoCircle />
              Details
            </button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={project.title}
        size="xl"
        scrollable={false}
        hideFooter={true}
      >
        <div className="space-y-6">
          <div className="relative overflow-hidden rounded-lg h-80">
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={320}
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              About Project
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-linear-to-r from-blue-50 to-indigo-50 text-blue-700 text-sm rounded-lg font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Key Features
            </h3>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="text-gray-700 flex items-start">
                  <span className="text-primary mr-3 mt-1 font-bold">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-3">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-linear-to-r from-primary to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 font-medium"
              >
                <FaExternalLinkAlt />
                Visit Live Site
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors font-medium"
              >
                <FaGithub />
                View Code
              </a>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DetailedProjectCard;
