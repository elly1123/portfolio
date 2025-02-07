'use client';

import downAnimationData from '@/public/assets/animations/down.json';
import fireWorkAnimationData from '@/public/assets/animations/firework.json';
import giftAnimationData from '@/public/assets/animations/gift.json';
import Lottie from 'lottie-react';
import Image from 'next/image';
import { useState } from 'react';

interface SectionMenuItem {
  title: string;
  sectionIndex: number;
}

const sectionMenuItems: SectionMenuItem[] = [
  {
    title: 'Main',
    sectionIndex: 0,
  },
  {
    title: 'About Me',
    sectionIndex: 1,
  },
  {
    title: 'Portfolio',
    sectionIndex: 2,
  },
  {
    title: 'Thank You',
    sectionIndex: 3,
  },
];

interface FloatingMenuProps {
  onScrollToTop: () => void;
  currentSection: number;
  onSectionClick: (sectionIndex: number) => void;
}

const FloatingMenu = ({
  onScrollToTop,
  currentSection,
  onSectionClick,
}: FloatingMenuProps) => {
  const [showFirework, setShowFirework] = useState(false);

  const handleMenuClick = () => {
    setShowFirework(true);
    // 애니메이션이 끝나면 상태를 다시 false로 설정
    setTimeout(() => setShowFirework(false), 2000); // 로티 애니메이션 길이에 맞게 시간 조정
  };

  // 컴포넌트 내부에서 로티 애니메이션 추가
  const giftAnimation = giftAnimationData;

  return (
    <>
      {/* 폭죽 애니메이션 */}
      {showFirework && (
        <>
          <div className="fixed inset-0 flex items-center justify-start pl-22 z-50 pointer-events-none">
            <Lottie
              animationData={fireWorkAnimationData}
              loop={false}
              autoplay={true}
              className="w-128 h-128" // 크기 조절 가능
            />
          </div>
          <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
            <Lottie
              animationData={fireWorkAnimationData}
              loop={false}
              autoplay={true}
              className="w-128 h-128" // 크기 조절 가능
            />
          </div>
          <div className="fixed inset-0 flex items-center justify-end pr-22 z-50 pointer-events-none">
            <Lottie
              animationData={fireWorkAnimationData}
              loop={false}
              autoplay={true}
              className="w-128 h-128" // 크기 조절 가능
            />
          </div>
        </>
      )}

      {/* 왼쪽 섹션 네비게이션 - 모바일에서 숨김 */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-50 max-[1360px]:hidden">
        <div className="flex flex-col gap-4">
          {sectionMenuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => onSectionClick(item.sectionIndex)}
              className={`flex items-center gap-3 group ${
                currentSection === item.sectionIndex
                  ? 'text-[#F5F5F5]'
                  : 'text-gray-500'
              }`}
            >
              <div
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSection === item.sectionIndex
                    ? 'bg-[#F5F5F5] scale-150'
                    : 'bg-gray-500 group-hover:bg-[#F5F5F5]'
                }`}
              />
              <span
                className={`text-sm font-medium transition-all duration-300 ${
                  currentSection === item.sectionIndex
                    ? ''
                    : 'group-hover:text-[#F5F5F5]'
                }`}
              >
                {item.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* 하단 중앙 다운 애니메이션 */}
      {currentSection === 0 && (
        <div
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 cursor-pointer"
          onClick={() => onSectionClick(1)}
        >
          <Lottie
            animationData={downAnimationData}
            loop={true}
            autoplay={true}
            className="w-16 h-16"
          />
        </div>
      )}

      {/* 기존 오른쪽 플로팅 메뉴 */}
      <div className="fixed bottom-8 right-4 md:right-8 z-50">
        <div className="flex flex-col gap-2">
          <button
            onClick={handleMenuClick}
            className="w-14 h-12 md:w-12 md:h-12 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-all"
          >
            <Lottie
              animationData={giftAnimation}
              loop={true}
              autoplay={true}
              className="w-4 h-4 md:w-12 md:h-12"
            />
          </button>
          <button
            onClick={onScrollToTop}
            className="w-12 h-12 md:w-12 md:h-12 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-all"
          >
            <Image
              src={'/assets/icons/up.svg'}
              width={24}
              height={24}
              className="w-4 h-4 md:w-6 md:h-6"
              alt={'up'}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default FloatingMenu;
