'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Project, TabType } from '../types/portfolio';
import ProjectCard from './portfolio/ProjectCard';
import ProjectModal from './portfolio/ProjectModal';
import TabMenu from './portfolio/TabMenu';

interface PortfolioSectionProps {
  onModalChange?: (isOpen: boolean) => void;
}

const PortfolioSection = ({ onModalChange }: PortfolioSectionProps) => {
  const [activeTab, setActiveTab] = useState<TabType>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [portfolioItems, setPortfolioItems] = useState<Project[]>([]);
  const [loadingItems, setLoadingItems] = useState(true);

  useEffect(() => {
    const fetchPortfolioItems = async () => {
      try {
        const response = await fetch('/api/notion');
        const data = await response.json();
        if (data.portfolioItems) {
          const sortedItems = data.portfolioItems.sort(
            (a: Project, b: Project) => {
              if (!a.period || !b.period) return 0;
              return b.period.localeCompare(a.period);
            }
          );
          setPortfolioItems(sortedItems);
        }
      } catch (error) {
        console.error('Failed to fetch portfolio items:', error);
      } finally {
        setLoadingItems(false);
      }
    };

    fetchPortfolioItems();
  }, []);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      onModalChange?.(true);
    } else {
      document.body.style.overflow = 'unset';
      onModalChange?.(false);
    }

    return () => {
      document.body.style.overflow = 'unset';
      onModalChange?.(false);
    };
  }, [selectedProject, onModalChange]);

  return (
    <>
      <div
        className="w-full h-screen overflow-y-auto p-8 max-w-6xl mx-auto"
        id="portfolio-container"
      >
        <TabMenu activeTab={activeTab} onTabChange={setActiveTab} />

        <motion.div
          layout
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 pb-8"
        >
          {loadingItems ? (
            <div className="col-span-2 flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
            </div>
          ) : (
            <AnimatePresence>
              {portfolioItems
                .filter(
                  (item) => activeTab === 'All' || item.type === activeTab
                )
                .map((item) => (
                  <ProjectCard
                    key={item.id}
                    project={item}
                    onSelect={setSelectedProject}
                  />
                ))}
            </AnimatePresence>
          )}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default PortfolioSection;
