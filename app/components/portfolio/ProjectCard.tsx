import { Project } from '@/app/types/portfolio';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

const ProjectCard = ({ project, onSelect }: ProjectCardProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="bg-[#2A2A2A] rounded-lg overflow-hidden cursor-pointer group relative"
    >
      <div className="aspect-video bg-neutral-100 flex items-center justify-center">
        <Image
          src={project.image}
          alt={project.title}
          width={200}
          height={100}
          className="object-contain"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2 py-1 text-sm bg-black text-white rounded">
            {project.type}
          </span>
          {project.period && (
            <span className="text-sm text-gray-400">{project.period}</span>
          )}
        </div>

        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-3">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags?.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-sm bg-black text-white rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <button
          onClick={() => onSelect(project)}
          className="px-6 py-2 border border-white text-white rounded-lg hover:bg-gray-200 hover:text-black transition-colors"
        >
          자세히 보기
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
