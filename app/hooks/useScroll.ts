import { useCallback, useEffect, useState } from 'react';

interface UseScrollProps {
  isAnimationComplete: boolean;
  onScrollProgress?: (progress: number) => void;
}

export const useScroll = ({
  isAnimationComplete,
  onScrollProgress,
}: UseScrollProps) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = useCallback(
    (position: number) => {
      if (!isAnimationComplete) return;

      const windowHeight = window.innerHeight;
      const progress = Math.min(position / (windowHeight * 1.5), 1);
      setScrollProgress(progress);
      onScrollProgress?.(progress);
    },
    [isAnimationComplete, onScrollProgress]
  );

  useEffect(() => {
    const handleScrollEvent = () => {
      handleScroll(window.scrollY);
    };

    if (isAnimationComplete) {
      window.addEventListener('scroll', handleScrollEvent);
    }

    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, [handleScroll, isAnimationComplete]);

  return { scrollProgress };
};
