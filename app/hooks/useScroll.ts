'use client';

import { useCallback, useEffect, useState } from 'react';

// useScroll 커스텀 훅에 필요한 props의 타입 정의
interface UseScrollProps {
  isAnimationComplete: boolean; // 애니메이션 완료 여부를 나타냄
  onScrollProgress?: (section: number) => void; // 스크롤 진행 상태를 알려주는 콜백 함수 (선택적)
  isModalOpen?: boolean; // 모달 상태를 받는 prop 추가
}

// useScroll 커스텀 훅 정의
export const useScroll = ({
  isAnimationComplete, // 애니메이션 완료 여부를 받음
  onScrollProgress, // 진행 상태 콜백을 받음
  isModalOpen = false, // 기본값 false
}: UseScrollProps) => {
  const [currentSection, setCurrentSection] = useState(0); // 현재 섹션 인덱스 상태
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToSection = useCallback((sectionIndex: number) => {
    if (typeof window === 'undefined') return; // 서버 사이드에서 실행되지 않도록 체크

    setCurrentSection(sectionIndex);

    const sectionId = `section-${sectionIndex}`;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

    setIsScrolling(true);
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (!isAnimationComplete || isModalOpen || typeof window === 'undefined')
      return;

    const handleWheel = (e: WheelEvent) => {
      // 모바일에서는 스크롤 이벤트를 처리하지 않음
      if (window.innerWidth < 768) return;

      // About 섹션(section-1)과 Portfolio 섹션(section-2)에서는 스크롤 위치를 체크
      const aboutSection = document.getElementById('section-1');
      const portfolioSection = document.getElementById('section-2');

      // About 섹션 처리
      if (
        aboutSection &&
        (aboutSection.contains(e.target as Node) || currentSection === 1)
      ) {
        const aboutContainer = document.getElementById('about-container');
        if (!aboutContainer) return;

        // 스크롤이 맨 위에서 위로 스크롤하거나, 맨 아래에서 아래로 스크롤할 때만 섹션 전환
        if (
          (aboutContainer.scrollTop === 0 && e.deltaY < 0) ||
          (Math.abs(
            aboutContainer.scrollHeight -
              aboutContainer.scrollTop -
              aboutContainer.clientHeight
          ) < 1 &&
            e.deltaY > 0)
        ) {
          e.preventDefault();

          if (isScrolling) return;
          setIsScrolling(true);

          const direction = e.deltaY > 0 ? 1 : -1;
          const nextSection = Math.max(
            0,
            Math.min(3, currentSection + direction)
          );

          if (nextSection !== currentSection) {
            setCurrentSection(nextSection);
            onScrollProgress?.(nextSection);

            const sectionId = `section-${nextSection}`;
            const nextElement = document.getElementById(sectionId);
            if (nextElement) {
              nextElement.scrollIntoView({ behavior: 'smooth' });
            }
          }

          setTimeout(() => {
            setIsScrolling(false);
          }, 1000);

          return;
        }
        return;
      }

      // Portfolio 섹션 처리
      if (
        portfolioSection &&
        (portfolioSection.contains(e.target as Node) || currentSection === 2)
      ) {
        const portfolioContainer = document.getElementById(
          'portfolio-container'
        );
        if (!portfolioContainer) return;

        // 스크롤이 맨 위에서 위로 스크롤하거나, 맨 아래에서 아래로 스크롤할 때만 섹션 전환
        if (
          (portfolioContainer.scrollTop === 0 && e.deltaY < 0) ||
          (Math.abs(
            portfolioContainer.scrollHeight -
              portfolioContainer.scrollTop -
              portfolioContainer.clientHeight
          ) < 1 &&
            e.deltaY > 0)
        ) {
          e.preventDefault();

          if (isScrolling) return;
          setIsScrolling(true);

          const direction = e.deltaY > 0 ? 1 : -1;
          const nextSection = Math.max(
            0,
            Math.min(3, currentSection + direction)
          );

          if (nextSection !== currentSection) {
            setCurrentSection(nextSection);
            onScrollProgress?.(nextSection);

            const sectionId = `section-${nextSection}`;
            const nextElement = document.getElementById(sectionId);
            if (nextElement) {
              nextElement.scrollIntoView({ behavior: 'smooth' });
            }
          }

          setTimeout(() => {
            setIsScrolling(false);
          }, 1000);

          return;
        }
        return;
      }

      e.preventDefault();

      if (isScrolling) return;
      setIsScrolling(true);

      const direction = e.deltaY > 0 ? 1 : -1;
      const nextSection = Math.max(0, Math.min(3, currentSection + direction));

      if (nextSection !== currentSection) {
        setCurrentSection(nextSection);
        onScrollProgress?.(nextSection);

        const sectionId = `section-${nextSection}`;
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }

      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    };

    // 데스크톱에서만 wheel 이벤트 리스너 추가
    if (typeof window !== 'undefined' && window.innerWidth >= 768) {
      window.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('wheel', handleWheel);
      }
    };
  }, [
    currentSection,
    isAnimationComplete,
    isScrolling,
    onScrollProgress,
    isModalOpen,
  ]);

  // 현재 섹션 상태와 섹션 이동 함수 반환
  return {
    currentSection,
    scrollToSection,
    isScrolling,
  };
};
