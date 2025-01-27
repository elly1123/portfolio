'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

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
  const isTransitioningRef = useRef(false);

  const calculateSection = useCallback(() => {
    if (typeof window === 'undefined') return 0;
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    return Math.round(scrollY / windowHeight);
  }, []);

  const scrollToSection = useCallback(
    (section: number) => {
      if (typeof window === 'undefined') return;
      const isMobile = window.innerWidth < 768;

      if (isMobile) {
        const targetY = section * window.innerHeight;
        window.scrollTo({
          top: targetY,
          behavior: 'smooth',
        });
      } else {
        isTransitioningRef.current = true;
        setCurrentSection(section);
        onScrollProgress?.(section);

        setTimeout(() => {
          isTransitioningRef.current = false;
        }, 700);
      }
    },
    [onScrollProgress]
  );

  // 데스크톱 휠 이벤트 핸들러
  const handleWheel = useCallback(
    (e: WheelEvent) => {
      if (!isAnimationComplete || isTransitioningRef.current) return;
      if (window.innerWidth < 768) return; // 모바일에서는 무시

      e.preventDefault();
      const direction = e.deltaY > 0 ? 1 : -1;
      const nextSection = Math.max(0, Math.min(2, currentSection + direction));

      if (nextSection !== currentSection) {
        scrollToSection(nextSection);
      }
    },
    [currentSection, isAnimationComplete, scrollToSection]
  );

  // 모바일 스크롤 이벤트 핸들러
  const handleScroll = useCallback(() => {
    if (typeof window === 'undefined') return;
    if (!isAnimationComplete) return;

    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      const section = calculateSection();
      setCurrentSection(section);
      onScrollProgress?.(section);
    }
  }, [isAnimationComplete, calculateSection, onScrollProgress]);

  useEffect(() => {
    if (!isAnimationComplete) return;

    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      window.addEventListener('wheel', handleWheel, { passive: false });
      return () => window.removeEventListener('wheel', handleWheel);
    }
  }, [isAnimationComplete, handleWheel, handleScroll]);

  // 현재 섹션 상태와 섹션 이동 함수 반환
  return {
    currentSection,
    scrollToSection,
  };
};
