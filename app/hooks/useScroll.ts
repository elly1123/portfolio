'use client';

import { useCallback, useEffect, useState } from 'react';

// useScroll 커스텀 훅에 필요한 props의 타입 정의
interface UseScrollProps {
  isAnimationComplete: boolean; // 애니메이션 완료 여부를 나타냄
  onScrollProgress?: (section: number) => void; // 스크롤 진행 상태를 알려주는 콜백 함수 (선택적)
  isModalOpen?: boolean; // 모달 상태를 받는 prop 추가
}

// 상수 분리
const SCROLL_DELAY = 800;

// useScroll 커스텀 훅 정의
export const useScroll = ({
  isAnimationComplete,
  onScrollProgress,
  isModalOpen = false,
}: UseScrollProps) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  // 메뉴 클릭 시 해당 섹션으로 이동
  const scrollToSection = useCallback((sectionIndex: number) => {
    setCurrentSection(sectionIndex);
    const element = document.getElementById(`section-${sectionIndex}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

    setIsScrolling(true);
    setTimeout(() => setIsScrolling(false), SCROLL_DELAY);
  }, []);

  // 현재 섹션 위치 추적
  useEffect(() => {
    if (!isAnimationComplete || isModalOpen) return;

    const handleScroll = () => {
      const sections = [0, 1, 2, 3];
      const viewportMiddle = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(`section-${section}`);
        if (!element) continue;

        const { offsetTop, offsetHeight } = element;
        const sectionMiddle = offsetTop + offsetHeight / 2;

        if (Math.abs(viewportMiddle - sectionMiddle) < offsetHeight / 2) {
          if (currentSection !== section) {
            setCurrentSection(section);
            onScrollProgress?.(section);
          }
          break;
        }
      }
    };

    // 초기 스크롤 위치 확인
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSection, isAnimationComplete, isModalOpen, onScrollProgress]);

  return {
    currentSection,
    scrollToSection,
    isScrolling,
  };
};
