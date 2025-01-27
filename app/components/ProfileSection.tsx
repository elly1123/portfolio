'use client';

import Image from 'next/image';

interface ProfileSectionProps {
  showProfile: boolean;
}

export default function ProfileSection({ showProfile }: ProfileSectionProps) {
  return (
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
  );
}
