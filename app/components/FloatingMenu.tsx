'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex flex-col gap-2">
        {isOpen && (
          <>
            <div className="relative group flex items-center justify-end">
              <span className="absolute right-[calc(100%+0.75rem)] hidden group-hover:block bg-white px-3 py-1 rounded-lg shadow-lg whitespace-nowrap">
                Github
              </span>
              <button
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-all"
                onClick={() =>
                  window.open('https://github.com/BaekKunHee', '_blank')
                }
              >
                <Image
                  src="/assets/icons/github.svg"
                  width={24}
                  height={24}
                  alt="Github"
                />
              </button>
            </div>
            <div className="relative group flex items-center justify-end">
              <span className="absolute right-[calc(100%+0.75rem)] hidden group-hover:block bg-white px-3 py-1 rounded-lg shadow-lg whitespace-nowrap">
                Instagram
              </span>
              <button className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-all">
                <Image
                  src="/assets/icons/instagram.svg"
                  width={24}
                  height={24}
                  alt="Instagram"
                />
              </button>
            </div>
            <div className="relative group flex items-center justify-end">
              <span className="absolute right-[calc(100%+0.75rem)] hidden group-hover:block bg-white px-3 py-1 rounded-lg shadow-lg whitespace-nowrap">
                Threads
              </span>
              <button
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-all"
                onClick={() =>
                  window.open(
                    'https://www.threads.net/@developer._.bear',
                    '_blank'
                  )
                }
              >
                <Image
                  src="/assets/icons/threads.svg"
                  width={24}
                  height={24}
                  alt="Threads"
                />
              </button>
            </div>
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
