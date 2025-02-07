'use client';

import { useCallback, useEffect, useState } from 'react';
import AboutSection from './components/AboutSection';
import BackgroundOverlay from './components/BackgroundOverlay';
import FloatingMenu from './components/FloatingMenu';
import PortfolioSection from './components/PortfolioSection';
import ProfileSection from './components/ProfileSection';
import ThankYouSection from './components/ThankYouSection';
import TypingAnimation from './components/TypingAnimation';
import { badges } from './data/aboutData';
import { useAnimationState } from './hooks/useAnimationState';
import { useScroll } from './hooks/useScroll';

const Badge = ({ label }: { label: string }) => (
  <div className="inline-flex items-center bg-[#2D2D2D] rounded-full px-4 py-2 text-sm whitespace-nowrap text-white">
    <span>{label}</span>
  </div>
);

export default function Home() {
  const [, setIsDesktop] = useState(false);
  const { isAnimationComplete, showProfile, setShowPortfolio } =
    useAnimationState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { currentSection, scrollToSection, isScrolling } = useScroll({
    isAnimationComplete,
    onScrollProgress: (section) => {
      if (section > 0) {
        setShowPortfolio(true);
      }
    },
    isModalOpen,
  });

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 768);
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isScrolling) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isScrolling]);

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
      <main className="relative w-full h-screen md:overflow-hidden overflow-auto text-[#0d0d0d]">
        <div className="transition-transform duration-700 ease-in-out">
          {/* 메인 섹션 */}
          <section
            id="section-0"
            className={`relative w-full h-screen flex items-center justify-center overflow-hidden transition-all duration-1000 bg-[#F5F5F5]`}
          >
            <BackgroundOverlay isAnimationComplete={isAnimationComplete} />
            <div className="flex flex-col items-center">
              <TypingAnimation
                isAnimationComplete={isAnimationComplete}
                showProfile={showProfile}
              />
              {showProfile && (
                <div className=" flex flex-col justify-center items-center z-10 max-w-[920px] overflow-hidden relative bottom-32">
                  <div className="w-full h-[40px] overflow-hidden relative flex justify-start">
                    <div className="flex gap-2 animate-slide-left whitespace-nowrap">
                      {badges.one.map((label, i) => (
                        <Badge key={`first-${i}`} label={label} />
                      ))}
                      {badges.one.map((label, i) => (
                        <Badge key={`first-duplicate-${i}`} label={label} />
                      ))}
                    </div>
                  </div>

                  <div className="w-full h-[40px] overflow-hidden relative mt-2 flex justify-start">
                    <div className="flex gap-2 animate-slide-right whitespace-nowrap">
                      {badges.two.map((label, i) => (
                        <Badge key={`second-${i}`} label={label} />
                      ))}
                      {badges.two.map((label, i) => (
                        <Badge key={`second-duplicate-${i}`} label={label} />
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <ProfileSection showProfile={showProfile} />
            </div>
          </section>

          {/* About Section */}
          <section
            id="section-1"
            className="relative w-full min-h-screen bg-[#1C1B1B] text-[#F5F5F5] overflow-y-auto"
          >
            <AboutSection />
          </section>

          {/* 포트폴리오 섹션 */}
          <section
            id="section-2"
            className="relative w-full min-h-screen bg-[#1C1B1B] text-[#F5F5F5] overflow-y-auto"
          >
            <PortfolioSection onModalChange={setIsModalOpen} />
          </section>

          {/* Thank You 섹션 */}
          <section
            id="section-3"
            className="relative w-full min-h-screen text-[#F5F5F5] overflow-y-auto"
          >
            <ThankYouSection />
          </section>
        </div>
      </main>
    </>
  );
}
