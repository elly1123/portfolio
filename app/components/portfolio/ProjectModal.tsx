import { NotionContent, Project } from '@/app/types/portfolio';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import NotionRenderer from './NotionRenderer';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const [notionContent, setNotionContent] = useState<NotionContent | null>(
    null
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNotionContent = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `/api/notion/page?pageId=${project.notionPageId}`
        );
        const data = await response.json();
        if (data.blocks && Array.isArray(data.blocks)) {
          setNotionContent({ blocks: data.blocks });
        }
      } catch (error) {
        console.error('Failed to fetch notion content:', error);
        setNotionContent(null);
      } finally {
        setLoading(false);
      }
    };

    fetchNotionContent();
  }, [project.notionPageId]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 z-50"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="fixed md:inset-10 inset-0 bg-[#2A2A2A] z-50 rounded-lg overflow-hidden"
      >
        <div className="sticky top-0 z-10 bg-[#2A2A2A] border-b border-gray-700">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="p-4 md:p-6">
            <div className="flex flex-col md:flex-row md:gap-6 gap-4">
              <div className="w-full md:w-48 h-32 bg-neutral-100 rounded-lg flex items-center justify-center">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={200}
                  height={100}
                  className="w-[80px] h-[80px] object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-2 py-1 text-sm bg-black text-white rounded">
                    {project.type}
                  </span>
                  {project.period && (
                    <span className="text-sm text-gray-400">
                      {project.period}
                    </span>
                  )}
                </div>
                <h2 className="text-xl md:text-2xl font-bold mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-400 mb-2 text-sm md:text-base">
                  {project.description}
                </p>
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
            </div>
          </div>
        </div>

        <div className="h-[calc(100%-160px)] md:h-[calc(100%-140px)] overflow-y-auto p-4 md:p-6 bg-white">
          {loading ? (
            <div className="flex items-center justify-center h-full">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
            </div>
          ) : notionContent?.blocks ? (
            <div className="max-w-3xl mx-auto text-black">
              <NotionRenderer blocks={notionContent.blocks} />
            </div>
          ) : (
            <div className="text-center text-black">
              콘텐츠를 불러올 수 없습니다.
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default ProjectModal;
