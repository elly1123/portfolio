'use client';

import { useEffect, useState } from 'react';
import BackgroundOverlay from './components/BackgroundOverlay';
import ProfileSection from './components/ProfileSection';
import ScrollArrow from './components/ScrollArrow';
import TypingAnimation from './components/TypingAnimation';

export default function Home() {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimationComplete(true);
      setTimeout(() => {
        setShowProfile(true);
      }, 1000);
    }, 2000);
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
      <BackgroundOverlay showProfile={showProfile} />
      <TypingAnimation
        isAnimationComplete={isAnimationComplete}
        showProfile={showProfile}
      />
      <ProfileSection showProfile={showProfile} />
      {showProfile && <ScrollArrow />}
    </div>
  );
}
