'use client';

import { useCallback } from 'react';
import AboutSection from './components/AboutSection';
import BackgroundOverlay from './components/BackgroundOverlay';
import FloatingMenu from './components/FloatingMenu';
import PortfolioSection from './components/PortfolioSection';
import ProfileSection from './components/ProfileSection';
import ScrollArrow from './components/ScrollArrow';
import TypingAnimation from './components/TypingAnimation';
import { useAnimationState } from './hooks/useAnimationState';
import { useScroll } from './hooks/useScroll';

export default function Home() {
  const { isAnimationComplete, showProfile, setShowPortfolio } =
    useAnimationState();
  const { currentSection, scrollToSection } = useScroll({
    isAnimationComplete,
    onScrollProgress: (section) => {
      if (section > 0) {
        setShowPortfolio(true);
      }
    },
  });

  const scrollToPortfolio = useCallback(() => {
    if (!showProfile) return;
    scrollToSection(1);
  }, [showProfile, scrollToSection]);

  const handleScrollToTop = useCallback(() => {
    scrollToSection(0);
  }, [scrollToSection]);

  const handleSectionClick = useCallback(
    (sectionIndex: number) => {
      scrollToSection(sectionIndex);
    },
    [scrollToSection]
  );

  return (
    <>
      {showProfile && (
        <FloatingMenu
          onScrollToTop={handleScrollToTop}
          currentSection={currentSection}
          onSectionClick={handleSectionClick}
        />
      )}
      <main className="relative w-full h-screen overflow-hidden text-[#0d0d0d]">
        <div
          className="h-screen transition-transform duration-700 ease-in-out"
          style={{ transform: `translateY(-${currentSection * 100}%)` }}
        >
          {/* 메인 섹션 */}
          <section
            className={`w-full h-screen flex items-center justify-center ${
              showProfile
                ? 'bg-[url("/assets/images/abstract.jpg")] bg-cover bg-opacity-100'
                : 'bg-[#F9FBFC]'
            }`}
          >
            <BackgroundOverlay showProfile={showProfile} />
            <TypingAnimation
              isAnimationComplete={isAnimationComplete}
              showProfile={showProfile}
            />
            <ProfileSection showProfile={showProfile} />
            {showProfile && <ScrollArrow onClick={scrollToPortfolio} />}
          </section>

          {/* About Section */}
          <section className="w-full h-screen flex items-center justify-center bg-[#1C1B1B] text-white">
            <AboutSection />
          </section>

          {/* 포트폴리오 섹션 */}
          <section className="w-full h-screen flex items-center justify-center bg-[#1C1B1B] text-white">
            <PortfolioSection />
          </section>
        </div>
      </main>
    </>
  );
}
