'use client';

import fireWorkAnimationData from '@/public/assets/animations/firework.json';
import giftAnimationData from '@/public/assets/animations/gift.json';
import Lottie from 'lottie-react';
import Image from 'next/image';
import { useState } from 'react';

interface MenuItem {
  title: string;
  icon: string;
  url: string;
  alt: string;
}

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

const menuItems: MenuItem[] = [
  {
    title: 'Bio Link',
    icon: '/assets/icons/link.svg',
    url: 'https://bit.ly/m/han_baek',
    alt: 'Bio Link',
  },
  {
    title: 'Medium',
    icon: '/assets/icons/medium.svg',
    url: 'hhttps://medium.com/@han.baek',
    alt: 'Medium',
  },
  {
    title: 'Github',
    icon: '/assets/icons/github.svg',
    url: 'https://github.com/BaekKunHee',
    alt: 'Github',
  },
  {
    title: 'Linkedin',
    icon: '/assets/icons/linkedin.svg',
    url: 'https://www.linkedin.com/in/kunhee-baek-6724a7217',
    alt: 'Linkedin',
  },
  {
    title: 'Threads',
    icon: '/assets/icons/threads.svg',
    url: 'https://www.threads.net/@developer._.bear',
    alt: 'Threads',
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
  const menuAnimation = fireWorkAnimationData;
  const giftAnimation = giftAnimationData;

  return (
    <>
      {/* 폭죽 애니메이션 */}
      {showFirework && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          <Lottie
            animationData={fireWorkAnimationData}
            loop={false}
            autoplay={true}
            className="w-96 h-96" // 크기 조절 가능
          />
        </div>
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
                  ? currentSection === 0
                    ? 'text-[#0d0d0d]'
                    : 'text-[#F5F5F5]'
                  : 'text-gray-500'
              }`}
            >
              <div
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSection === item.sectionIndex
                    ? currentSection === 0
                      ? 'bg-[#0d0d0d] scale-150'
                      : 'bg-[#F5F5F5] scale-150'
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
