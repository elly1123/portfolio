'use client';

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
];

const menuItems: MenuItem[] = [
  {
    title: 'Bio',
    icon: '/assets/icons/link.svg',
    url: 'https://bit.ly/m/han_baek',
    alt: 'Bio Link',
  },
  {
    title: 'Medium',
    icon: '/assets/icons/medium.svg',
    url: 'https://medium.com/@developer._.baer',
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
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {/* 왼쪽 섹션 네비게이션 */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-50">
        <div className="flex flex-col gap-4">
          {sectionMenuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => onSectionClick(item.sectionIndex)}
              className={`flex items-center gap-3 group ${
                currentSection === item.sectionIndex
                  ? 'text-white'
                  : 'text-gray-400'
              }`}
            >
              <div
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSection === item.sectionIndex
                    ? 'bg-white scale-150'
                    : 'bg-gray-400 group-hover:bg-white'
                }`}
              />
              <span className="text-sm font-medium transition-all duration-300 group-hover:text-white">
                {item.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* 기존 오른쪽 플로팅 메뉴 */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="flex flex-col gap-2">
          {isOpen && (
            <>
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className="relative group flex items-center justify-end"
                >
                  <span className="absolute right-[calc(100%+0.75rem)] hidden group-hover:block bg-white px-3 py-1 rounded-lg shadow-lg whitespace-nowrap text-[#0d0d0d]">
                    {item.title}
                  </span>
                  <button
                    className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-all"
                    onClick={() => window.open(item.url, '_blank')}
                  >
                    <Image
                      src={item.icon}
                      width={24}
                      height={24}
                      alt={item.alt}
                    />
                  </button>
                </div>
              ))}
            </>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-all"
          >
            {isOpen ? (
              <Image
                src={'/assets/icons/close.svg'}
                width={24}
                height={24}
                alt={'close'}
              />
            ) : (
              <Image
                src={'/assets/icons/menu.svg'}
                width={24}
                height={24}
                alt={'menu'}
              />
            )}
          </button>
          <button
            onClick={onScrollToTop}
            className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-all"
          >
            <Image
              src={'/assets/icons/up.svg'}
              width={24}
              height={24}
              alt={'up'}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default FloatingMenu;
