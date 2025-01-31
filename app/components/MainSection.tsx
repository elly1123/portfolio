'use client';

import Image from 'next/image';

interface MainSectionProps {
  showProfile: boolean;
}

export default function MainSection({ showProfile }: MainSectionProps) {
  return (
    <div
      className={`absolute bottom-0 flex flex-col items-center justify-center w-full text-center transition-all duration-1000 overflow-hidden ${
        showProfile
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-[100px] pointer-events-none'
      }`}
    >
      <div className="relative w-[480px] h-[700px]">
        <Image
          src="/assets/images/han.png"
          alt="Profile"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain transition-transform duration-1000"
        />
      </div>
    </div>
  );
}
