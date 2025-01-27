'use client';

import { TypeAnimation } from 'react-type-animation';

interface TypingAnimationProps {
  isAnimationComplete: boolean;
  showProfile: boolean;
}

export default function TypingAnimation({
  isAnimationComplete,
  showProfile,
}: TypingAnimationProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center transition-all duration-1000 relative z-10 ${
        isAnimationComplete
          ? 'scale-75 translate-y-[-350px]'
          : 'animate-fade-in'
      }`}
    >
      <TypeAnimation
        sequence={['Problem Solver Han.', 1000]}
        wrapper="span"
        speed={20}
        cursor={false}
        className="text-2xl sm:text-3xl md:text-5xl font-extrabold"
      />
      {showProfile && (
        <TypeAnimation
          sequence={['고객중심사고로 문제를 해결하는 백건희입니다.', 1000]}
          wrapper="span"
          speed={20}
          className="text-sm sm:text-base md:text-2xl font-medium p-2"
        />
      )}
    </div>
  );
}
