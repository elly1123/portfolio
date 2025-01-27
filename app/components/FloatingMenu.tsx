'use client';

import Image from 'next/image';
import { useState } from 'react';

interface MenuItem {
  title: string;
  icon: string;
  url: string;
  alt: string;
}

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

export default function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex flex-col gap-2">
        {isOpen && (
          <>
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative group flex items-center justify-end"
              >
                <span className="absolute right-[calc(100%+0.75rem)] hidden group-hover:block bg-white px-3 py-1 rounded-lg shadow-lg whitespace-nowrap">
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
