'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type TabType = 'All' | 'Company' | 'Side';
type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  type: TabType;
  notionPageId: string;
  tags?: string[];
  period?: string;
};

type NotionBlock = {
  id: string;
  type: string;
  [key: string]: any;
};

type NotionContent = {
  blocks: NotionBlock[];
};

interface PortfolioSectionProps {
  onModalChange?: (isOpen: boolean) => void;
}

const PortfolioSection = ({ onModalChange }: PortfolioSectionProps) => {
  const [activeTab, setActiveTab] = useState<TabType>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [notionContent, setNotionContent] = useState<NotionContent | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const [portfolioItems, setPortfolioItems] = useState<Project[]>([]);
  const [loadingItems, setLoadingItems] = useState(true);

  // 포트폴리오 아이템 가져오기
  useEffect(() => {
    const fetchPortfolioItems = async () => {
      try {
        const response = await fetch('/api/notion'); // 우리의 API 라우트 사용
        const data = await response.json();
        console.log(data.portfolioItems);
        if (data.portfolioItems) {
          setPortfolioItems(data.portfolioItems);
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
    const fetchNotionContent = async () => {
      if (!selectedProject) return;

      setLoading(true);
      try {
        const response = await fetch(
          `/api/notion/page?pageId=${selectedProject.notionPageId}`
        );
        const data = await response.json();
        if (data.blocks && Array.isArray(data.blocks)) {
          setNotionContent({ blocks: data.blocks });
        } else {
          console.error('Invalid blocks data:', data);
          setNotionContent(null);
        }
      } catch (error) {
        console.error('Failed to fetch notion content:', error);
        setNotionContent(null);
      } finally {
        setLoading(false);
      }
    };

    fetchNotionContent();
  }, [selectedProject]);

  // 모달이 열릴 때 body 스크롤 제어
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      onModalChange?.(true);
    } else {
      document.body.style.overflow = 'unset';
      onModalChange?.(false);
    }

    // 컴포넌트 언마운트 시 스크롤 복원
    return () => {
      document.body.style.overflow = 'unset';
      onModalChange?.(false);
    };
  }, [selectedProject, onModalChange]);

  const renderBlock = (block: NotionBlock) => {
    try {
      switch (block.type) {
        case 'paragraph':
          return (
            <p key={block.id} className="text-black mb-4">
              {block.paragraph?.rich_text?.map((text: any, index: number) => (
                <span
                  key={index}
                  className={`${text.annotations?.bold ? 'font-bold' : ''} 
                             ${text.annotations?.italic ? 'italic' : ''} 
                             ${text.annotations?.underline ? 'underline' : ''}`}
                >
                  {text.plain_text}
                </span>
              )) || ''}
            </p>
          );

        case 'heading_1':
          return (
            <h1
              key={block.id}
              className="text-3xl font-bold mb-6 text-black border-b border-gray-200 pb-2"
            >
              {block.heading_1?.rich_text
                ?.map((text: any) => text.plain_text)
                .join('') || ''}
            </h1>
          );

        case 'heading_2':
          return (
            <h2
              key={block.id}
              className="text-2xl font-bold mt-8 mb-4 text-black"
            >
              {block.heading_2?.rich_text
                ?.map((text: any) => text.plain_text)
                .join('') || ''}
            </h2>
          );

        case 'heading_3':
          return (
            <h3
              key={block.id}
              className="text-xl font-bold mt-6 mb-3 text-black"
            >
              {block.heading_3?.rich_text
                ?.map((text: any) => text.plain_text)
                .join('') || ''}
            </h3>
          );

        case 'bulleted_list_item':
          return (
            <li key={block.id} className="text-black ml-4 mb-2">
              {block.bulleted_list_item?.rich_text
                ?.map((text: any) => text.plain_text)
                .join('') || ''}
            </li>
          );

        case 'numbered_list_item':
          return (
            <li key={block.id} className="text-black ml-4 mb-2 list-decimal">
              {block.numbered_list_item?.rich_text
                ?.map((text: any) => text.plain_text)
                .join('') || ''}
            </li>
          );

        case 'image':
          const imageUrl = block.image?.file?.url || block.image?.external?.url;
          return imageUrl ? (
            <div key={block.id} className="my-4">
              <img
                src={imageUrl}
                alt="Content"
                className="max-w-full rounded-lg"
              />
            </div>
          ) : null;

        case 'code':
          return (
            <pre
              key={block.id}
              className="bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto"
            >
              <code className="text-gray-300">
                {block.code?.rich_text
                  ?.map((text: any) => text.plain_text)
                  .join('') || ''}
              </code>
            </pre>
          );

        case 'callout':
          return (
            <div
              key={block.id}
              className="flex items-start p-4 my-4 bg-gray-100 rounded-lg"
            >
              {block.callout?.icon?.type === 'emoji' && (
                <div className="mr-4 text-xl">{block.callout.icon.emoji}</div>
              )}
              <div className="text-black">
                {block.callout?.rich_text?.map((text: any, index: number) => (
                  <span
                    key={index}
                    className={`${text.annotations?.bold ? 'font-bold' : ''} 
                              ${text.annotations?.italic ? 'italic' : ''} 
                              ${
                                text.annotations?.underline ? 'underline' : ''
                              }`}
                  >
                    {text.plain_text}
                  </span>
                )) || ''}
              </div>
            </div>
          );

        default:
          return null;
      }
    } catch (error) {
      console.error('Error rendering block:', error, block);
      return null;
    }
  };

  return (
    <>
      <div className="w-full h-screen overflow-y-auto py-20">
        {/* 탭 메뉴 */}
        <div className="max-w-6xl mx-auto pt-8 mb-8">
          <div className="inline-flex bg-gray-600 rounded-full p-1">
            {['All', 'Company', 'Side'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as TabType)}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeTab === tab
                    ? 'bg-white text-black'
                    : 'text-white hover:bg-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* 프로젝트 그리드 */}
        <motion.div
          layout
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 pb-8"
        >
          {loadingItems ? (
            // 로딩 상태 표시
            <div className="col-span-2 flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
            </div>
          ) : (
            <AnimatePresence>
              {portfolioItems
                .filter(
                  (item) => activeTab === 'All' || item.type === activeTab
                )
                .map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#2A2A2A] rounded-lg overflow-hidden cursor-pointer group relative"
                  >
                    <div className="aspect-video bg-neutral-100 flex items-center justify-center">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={200}
                        height={100}
                        className="object-contain"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>

                    {/* 호버 시 나타나는 오버레이 */}
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button
                        onClick={() => setSelectedProject(item)}
                        className="px-6 py-2 border border-white text-white rounded-lg hover:bg-gray-200 hover:text-black transition-colors"
                      >
                        자세히 보기
                      </button>
                    </div>
                  </motion.div>
                ))}
            </AnimatePresence>
          )}
        </motion.div>
      </div>

      {/* 모달 */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/60 z-50"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="fixed inset-20 bg-[#2A2A2A] z-50 rounded-lg overflow-hidden"
            >
              {/* 모달 헤더 */}
              <div className="sticky top-0 z-10 bg-[#2A2A2A] border-b border-gray-700">
                {/* 닫기 버튼 */}
                <div className="absolute top-4 right-4">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-white"
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
                </div>

                {/* 프로젝트 요약 정보 */}
                <div className="p-8">
                  <div className="flex gap-8">
                    {/* 썸네일 이미지 */}
                    <div className="w-64 h-40 bg-neutral-100 rounded-lg flex items-center justify-center">
                      <Image
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        width={100}
                        height={100}
                        className="object-contain"
                      />
                    </div>

                    {/* 프로젝트 정보 */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 text-sm bg-black text-white rounded">
                          {selectedProject.type}
                        </span>
                        {selectedProject.period && (
                          <span className="text-sm text-gray-400">
                            {selectedProject.period}
                          </span>
                        )}
                      </div>
                      <h2 className="text-2xl font-bold mb-2">
                        {selectedProject.title}
                      </h2>
                      <p className="text-gray-400 mb-4">
                        {selectedProject.description}
                      </p>
                      {/* 태그 */}
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags?.map((tag) => (
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

              {/* 노션 콘텐츠 */}
              <div className="h-[calc(100%-200px)] overflow-y-auto p-8 bg-white">
                {loading ? (
                  <div className="flex items-center justify-center h-full">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                  </div>
                ) : notionContent?.blocks &&
                  Array.isArray(notionContent.blocks) ? (
                  <div className="max-w-3xl mx-auto text-black">
                    {notionContent.blocks.map((block) => renderBlock(block))}
                  </div>
                ) : (
                  <div className="text-center text-black">
                    콘텐츠를 불러올 수 없습니다.
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default PortfolioSection;
