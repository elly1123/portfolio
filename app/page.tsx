'use client';

import { useCallback, useEffect, useState } from 'react';
import BackgroundOverlay from './components/BackgroundOverlay';
import FloatingMenu from './components/FloatingMenu';
import PortfolioSection from './components/PortfolioSection';
import ProfileSection from './components/ProfileSection';
import ScrollArrow from './components/ScrollArrow';
import TypingAnimation from './components/TypingAnimation';

export default function Home() {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = useCallback(
    (position: number) => {
      if (!isAnimationComplete) return;

      const windowHeight = window.innerHeight;
      const progress = Math.min(position / windowHeight, 1);
      setScrollProgress(progress);

      if (progress > 0.5) {
        setShowPortfolio(true);
      }
    },
    [isAnimationComplete]
  );

  const scrollToPortfolio = () => {
    if (!showProfile) return;

    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      setIsAnimationComplete(true);
      setTimeout(() => {
        setShowProfile(true);
      }, 1000);
    }, 2000);

    const handleScrollEvent = () => {
      handleScroll(window.scrollY);
    };

    if (isAnimationComplete) {
      window.addEventListener('scroll', handleScrollEvent);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, [handleScroll, isAnimationComplete]);

  return (
    <>
      {showProfile && <FloatingMenu />}
      <main
        className={`relative w-full h-[200vh] bg-gray-200 ${
          !isAnimationComplete ? 'overflow-hidden' : ''
        }`}
      >
        <section
          className={`fixed top-0 left-0 w-full h-screen flex items-center justify-center transition-all duration-1000 ${
            showProfile
              ? 'bg-[url("/assets/images/abstract.jpg")] bg-cover bg-opacity-100'
              : 'bg-gray-200'
          } text-black`}
          style={{
            opacity: Math.max(1 - scrollProgress * 1.5, 0),
            visibility: scrollProgress >= 1 ? 'hidden' : 'visible',
          }}
        >
          <BackgroundOverlay showProfile={showProfile} />
          <TypingAnimation
            isAnimationComplete={isAnimationComplete}
            showProfile={showProfile}
          />
          <ProfileSection showProfile={showProfile} />
          {showProfile && <ScrollArrow onClick={scrollToPortfolio} />}
        </section>

        <section
          className="fixed top-0 left-0 w-full h-screen"
          style={{
            opacity: Math.min(scrollProgress * 1.5, 1),
            visibility: scrollProgress <= 0 ? 'hidden' : 'visible',
          }}
        >
          <PortfolioSection />
        </section>
      </main>
    </>
  );
}
