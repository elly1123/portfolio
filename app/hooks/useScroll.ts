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

  const scrollToSection = useCallback(
    (sectionIndex: number) => {
      // 메뉴 클릭 시에는 isScrolling 체크를 하지 않음
      setCurrentSection(sectionIndex);

      // ID를 기반으로 스크롤
      const sectionId = `section-${sectionIndex}`;
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }

      // 스크롤 애니메이션 동안만 isScrolling을 true로 설정
      setIsScrolling(true);
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    },
    [] // isScrolling 의존성 제거
  );

  useEffect(() => {
    if (!isAnimationComplete || isModalOpen) return; // 모달이 열려있으면 스크롤 이벤트를 처리하지 않음

    const handleWheel = (e: WheelEvent) => {
      // 포트폴리오 섹션(section-2)에서는 스크롤 위치를 체크
      const portfolioSection = document.getElementById('section-2');
      if (
        portfolioSection &&
        (portfolioSection.contains(e.target as Node) || currentSection === 2)
      ) {
        const element = e.target as Element;
        const scrollableElement = portfolioSection.querySelector(
          'div'
        ) as HTMLElement;

        // 스크롤이 맨 위에서 위로 스크롤하거나, 맨 아래에서 아래로 스크롤할 때만 섹션 전환
        if (
          (scrollableElement.scrollTop === 0 && e.deltaY < 0) ||
          (scrollableElement.scrollHeight - scrollableElement.scrollTop ===
            scrollableElement.clientHeight &&
            e.deltaY > 0)
        ) {
          e.preventDefault();

          if (isScrolling) return;
          setIsScrolling(true);

          const direction = e.deltaY > 0 ? 1 : -1;
          const nextSection = Math.max(
            0,
            Math.min(2, currentSection + direction)
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
        return; // 포트폴리오 섹션 내부에서는 자연스러운 스크롤 허용
      }

      e.preventDefault();

      if (isScrolling) return;
      setIsScrolling(true);

      const direction = e.deltaY > 0 ? 1 : -1;
      const nextSection = Math.max(0, Math.min(2, currentSection + direction));

      if (nextSection !== currentSection) {
        setCurrentSection(nextSection);
        onScrollProgress?.(nextSection);

        // ID를 기반으로 스크롤
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

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [
    currentSection,
    isAnimationComplete,
    isScrolling,
    onScrollProgress,
    isModalOpen,
  ]); // isModalOpen 의존성 추가

  // 현재 섹션 상태와 섹션 이동 함수 반환
  return {
    currentSection,
    scrollToSection,
    isScrolling,
  };
};
