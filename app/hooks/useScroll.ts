'use client';

import { useCallback, useEffect, useState } from 'react';

// useScroll 커스텀 훅에 필요한 props의 타입 정의
interface UseScrollProps {
  isAnimationComplete: boolean; // 애니메이션 완료 여부를 나타냄
  onScrollProgress?: (section: number) => void; // 스크롤 진행 상태를 알려주는 콜백 함수 (선택적)
}

// useScroll 커스텀 훅 정의
export const useScroll = ({
  isAnimationComplete, // 애니메이션 완료 여부를 받음
  onScrollProgress, // 진행 상태 콜백을 받음
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
    if (!isAnimationComplete) return;

    const handleWheel = (e: WheelEvent) => {
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
  }, [currentSection, isAnimationComplete, isScrolling, onScrollProgress]);

  // 현재 섹션 상태와 섹션 이동 함수 반환
  return {
    currentSection,
    scrollToSection,
    isScrolling,
  };
};
