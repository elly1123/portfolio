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

const Badge = ({ label }: { label: string }) => (
  <div className="inline-flex items-center bg-[#2D2D2D] rounded-full px-4 py-2 text-sm whitespace-nowrap text-white">
    <span>{label}</span>
  </div>
);

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const { isAnimationComplete, showProfile, setShowPortfolio } =
    useAnimationState();
  const [, setIsModalOpen] = useState(false);

  // 현재 섹션 추적
  useEffect(() => {
    const handleScroll = () => {
      const sections = [0, 1, 2, 3];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(`section-${section}`);
        if (!element) continue;

        const { offsetTop, offsetHeight } = element;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setCurrentSection(section);
          if (section > 0) {
            setShowPortfolio(true);
          }
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setShowPortfolio]);

  // 메뉴 클릭 시 해당 섹션으로 스크롤
  const handleScrollToSection = useCallback((sectionIndex: number) => {
    const element = document.getElementById(`section-${sectionIndex}`);
    element?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <>
      {showProfile && (
        <FloatingMenu
          onScrollToTop={() => handleScrollToSection(0)}
          currentSection={currentSection}
          onSectionClick={handleScrollToSection}
        />
      )}
      <main className="relative w-full">
        {/* 메인 섹션 */}
        <section
          id="section-0"
          className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#F5F5F5]"
        >
          <BackgroundOverlay isAnimationComplete={isAnimationComplete} />
          <div className="flex flex-col items-center">
            <TypingAnimation
              isAnimationComplete={isAnimationComplete}
              showProfile={showProfile}
            />
            {showProfile && (
              <div className="flex flex-col justify-center items-center z-10 max-w-[920px] overflow-hidden relative bottom-36">
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
          className="relative w-full min-h-screen bg-[#1C1B1B] text-[#F5F5F5]"
        >
          <AboutSection />
        </section>

        {/* 포트폴리오 섹션 */}
        <section
          id="section-2"
          className="relative w-full min-h-screen bg-[#1C1B1B] text-[#F5F5F5]"
        >
          <PortfolioSection onModalChange={setIsModalOpen} />
        </section>

        {/* Thank You 섹션 */}
        <section
          id="section-3"
          className="relative w-full min-h-screen text-[#F5F5F5]"
        >
          <ThankYouSection />
        </section>
      </main>
    </>
  );
}
