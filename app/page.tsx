'use client';

import { useCallback } from 'react';
import BackgroundOverlay from './components/BackgroundOverlay';
import FloatingMenu from './components/FloatingMenu';
import PortfolioSection from './components/PortfolioSection';
import ProfileSection from './components/ProfileSection';
import ScrollArrow from './components/ScrollArrow';
import TypingAnimation from './components/TypingAnimation';
import { useAnimationState } from './hooks/useAnimationState';
import { useScroll } from './hooks/useScroll';
import { getHeroSectionStyle, getPortfolioSectionStyle } from './utils/styles';

export default function Home() {
  // 애니메이션 상태 관리
  const { isAnimationComplete, showProfile, setShowPortfolio } =
    useAnimationState();

  // 스크롤 진행도 관리
  const { scrollProgress } = useScroll({
    isAnimationComplete,
    onScrollProgress: (progress) => {
      if (progress > 0.5) {
        setShowPortfolio(true);
      }
    },
  });

  // 포트폴리오 섹션으로 스크롤
  const scrollToPortfolio = useCallback(() => {
    if (!showProfile) return;

    window.scrollTo({
      top: window.innerHeight * 1.5,
      behavior: 'smooth',
    });
  }, [showProfile]);

  return (
    <>
      {/* 상단 플로팅 메뉴 */}
      {showProfile && <FloatingMenu />}

      <main
        className={`relative w-full h-[300vh] bg-gray-200 ${
          !isAnimationComplete ? 'overflow-hidden' : ''
        }`}
      >
        {/* 메인 섹션 */}
        <section
          className={`fixed top-0 left-0 w-full h-screen flex items-center justify-center transition-all duration-1000 ${
            showProfile
              ? 'bg-[url("/assets/images/abstract.jpg")] bg-cover bg-opacity-100'
              : 'bg-[#F9FBFC]'
          } text-black`}
          style={getHeroSectionStyle(scrollProgress)}
        >
          <BackgroundOverlay showProfile={showProfile} />
          <TypingAnimation
            isAnimationComplete={isAnimationComplete}
            showProfile={showProfile}
          />
          <ProfileSection showProfile={showProfile} />
          {showProfile && <ScrollArrow onClick={scrollToPortfolio} />}
        </section>

        {/* 포트폴리오 섹션 */}
        <section
          className="fixed top-0 left-0 w-full h-screen"
          style={getPortfolioSectionStyle(scrollProgress)}
        >
          <PortfolioSection />
        </section>
      </main>
    </>
  );
}
