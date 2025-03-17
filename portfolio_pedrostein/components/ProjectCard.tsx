import React from 'react';

// Tipagem para as props do componente ProjectCard
interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  icon: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link, icon }) => {
  return (
    <div className="bg-white border border-purple-300 rounded-lg shadow-md p-6 mb-8">
      <div className="flex items-center mb-4">
        <span className="text-4xl">{icon}</span>
        <h3 className="text-xl font-semibold ml-4">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <a 
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-purple-900 font-semibold hover:text-purple-700"
      >
        Ver Projeto
      </a>
    </div>
  );
};

export default ProjectCard;
