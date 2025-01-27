'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimationComplete(true);
    }, 2000); // 애니메이션 시작 시점
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div
        className={`flex flex-col items-center justify-center transition-transform duration-1000 ${
          isAnimationComplete
            ? 'scale-75 translate-y-[-400px] sm:translate-y-[-400px] md:translate-y-[-400px]'
            : 'animate-fade-in'
        }`}
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold">
          Problem Solver{' '}
          <span className="font-bold text-4xl sm:text-5xl md:text-7xl">
            Han
          </span>
          .
        </h1>
      </div>
    </div>
  );
}
