'use client';

import Image from 'next/image';

interface ProfileSectionProps {
  showProfile: boolean;
}

export default function ProfileSection({ showProfile }: ProfileSectionProps) {
  return (
    <div
      className={`absolute bottom-0 flex items-center justify-center text-center transition-all duration-1000 overflow-hidden ${
        showProfile
          ? 'opacity-100 z-10'
          : 'opacity-0 translate-y-[200px] pointer-events-none'
      }`}
    >
      <div className="relative w-[360px] h-[540px]">
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
