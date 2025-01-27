import { useCallback, useEffect, useRef, useState } from 'react';

// useScroll 커스텀 훅에 필요한 props의 타입 정의
interface UseScrollProps {
  isAnimationComplete: boolean; // 애니메이션 완료 여부를 나타냄
  onScrollProgress?: (progress: number) => void; // 스크롤 진행 상태를 알려주는 콜백 함수 (선택적)
}

// useScroll 커스텀 훅 정의
export const useScroll = ({
  isAnimationComplete, // 애니메이션 완료 여부를 받음
  onScrollProgress, // 진행 상태 콜백을 받음
}: UseScrollProps) => {
  const [currentSection, setCurrentSection] = useState(0); // 현재 섹션 인덱스 상태
  const isTransitioningRef = useRef(false); // 현재 전환 중인지 여부를 저장하는 ref

  // 섹션으로 스크롤 이동하는 함수
  const scrollToSection = useCallback(
    (sectionIndex: number) => {
      isTransitioningRef.current = true; // 전환 상태를 true로 설정
      setCurrentSection(sectionIndex); // 섹션 인덱스를 업데이트
      onScrollProgress?.(sectionIndex); // 진행 상태 콜백 호출 (존재할 경우)

      // 전환 애니메이션 시간을 고려해 일정 시간 후 전환 상태 해제
      setTimeout(() => {
        isTransitioningRef.current = false;
      }, 700); // 700ms는 애니메이션 시간과 동일
    },
    [onScrollProgress] // 콜백 함수가 변경될 경우에만 다시 생성
  );

  // 휠 이벤트 처리 함수
  const handleWheel = useCallback(
    (e: WheelEvent) => {
      // 애니메이션이 완료되지 않았거나 현재 전환 중이면 동작하지 않음
      if (!isAnimationComplete || isTransitioningRef.current) return;

      e.preventDefault(); // 기본 휠 동작 방지
      const direction = e.deltaY > 0 ? 1 : -1; // 휠 방향에 따라 스크롤 방향 설정
      const nextSection = Math.max(0, Math.min(2, currentSection + direction));
      // 다음 섹션 인덱스를 계산하며, 최소값 0과 최대값 2로 제한

      if (nextSection !== currentSection) {
        scrollToSection(nextSection); // 섹션이 변경될 경우 스크롤 이동
      }
    },
    [currentSection, isAnimationComplete, scrollToSection] // 의존성 배열
  );

  // 컴포넌트가 마운트될 때와 상태가 변경될 때 휠 이벤트 리스너 추가/제거
  useEffect(() => {
    if (isAnimationComplete) {
      // 애니메이션 완료 시 휠 이벤트 리스너 추가
      window.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      // 언마운트 시 또는 상태 변경 시 리스너 제거
      window.removeEventListener('wheel', handleWheel);
    };
  }, [handleWheel, isAnimationComplete]);

  // 현재 섹션 상태와 섹션 이동 함수 반환
  return { currentSection, scrollToSection };
};
