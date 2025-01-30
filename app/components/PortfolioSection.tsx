'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

type TabType = 'All' | 'Company' | 'Side';
type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  type: TabType;
};

const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState<TabType>('All');

  const portfolioItems: Project[] = [
    {
      id: 1,
      title: 'GS파워 실적효율 관리 프로젝트',
      description: 'GS파워 실적효율 관리 프로젝트',
      image: '/assets/images/gspower.svg',
      type: 'Company',
    },
    {
      id: 2,
      title: '강남은 지루해',
      description: '중간약속장소 추천 서비스',
      image: '/assets/images/nomoregangnam.svg',
      type: 'Side',
    },
    {
      id: 3,
      title: 'GS파워 실적효율 관리 프로젝트',
      description: 'GS파워 실적효율 관리 프로젝트',
      image: '/assets/images/gspower.svg',
      type: 'Company',
    },
    {
      id: 4,
      title: '강남은 지루해',
      description: '중간약속장소 추천 서비스',
      image: '/assets/images/nomoregangnam.svg',
      type: 'Side',
    },
    {
      id: 5,
      title: 'GS파워 실적효율 관리 프로젝트',
      description: 'GS파워 실적효율 관리 프로젝트',
      image: '/assets/images/gspower.svg',
      type: 'Company',
    },
    {
      id: 6,
      title: '강남은 지루해',
      description: '중간약속장소 추천 서비스',
      image: '/assets/images/nomoregangnam.svg',
      type: 'Side',
    },
    // 더 많은 프로젝트 추가 가능
  ];

  const filteredItems = portfolioItems.filter(
    (item) => activeTab === 'All' || item.type === activeTab
  );

  return (
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
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-[#2A2A2A] rounded-lg overflow-hidden cursor-pointer"
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
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default PortfolioSection;
