'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimationComplete(true);
      setTimeout(() => {
        setShowProfile(true); // 1초 뒤 프로필과 백그라운드 표시
      }, 1000);
    }, 2000); // 애니메이션 시작 시점
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`min-h-screen flex items-center justify-center relative transition-all duration-1000 overflow-hidden ${
        showProfile
          ? 'bg-[url("/assets/images/abstract.jpg")] bg-cover bg-opacity-100'
          : 'bg-gray-200'
      } text-black`}
    >
      {/* Background overlay for smooth transition */}
      <div
        className={`absolute inset-0 bg-[url("/assets/images/abstract.jpg")] bg-cover transition-opacity duration-1000 ${
          showProfile ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Typing animation section */}
      <div
        className={`flex flex-col items-center justify-center transition-all duration-1000 relative z-10 ${
          isAnimationComplete
            ? 'scale-75 translate-y-[-400px]'
            : 'animate-fade-in'
        }`}
      >
        <TypeAnimation
          sequence={['Problem Solver Han.', 1000]} // 1초 대기 후 다음 문구
          wrapper="span"
          speed={20}
          cursor={false}
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold"
        />
        {showProfile && (
          <TypeAnimation
            sequence={['고객중심사고로 문제를 해결하는 백건희입니다.', 1000]} // 1초 대기
            wrapper="span"
            speed={20}
            className="text-sm sm:text-base md:text-3xl font-medium"
          />
        )}
      </div>

      {/* Profile section */}
      <div
        className={`absolute bottom-0 flex flex-col items-center justify-center w-full text-center transition-all duration-1000 ${
          showProfile
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-[100px] pointer-events-none'
        }`}
      >
        <Image
          src="/assets/images/han.png"
          width={480}
          height={780}
          alt="Profile"
          className="transition-transform duration-1000"
        />
      </div>
    </div>
  );
}
