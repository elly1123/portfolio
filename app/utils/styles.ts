import { CSSProperties } from 'react';

export const getHeroSectionStyle = (scrollProgress: number): CSSProperties => ({
  opacity: Math.max(1 - scrollProgress, 0),
  visibility: (scrollProgress >= 1
    ? 'hidden'
    : 'visible') as CSSProperties['visibility'],
});

export const getPortfolioSectionStyle = (
  scrollProgress: number
): CSSProperties => ({
  opacity: Math.min(scrollProgress, 1),
  visibility: (scrollProgress <= 0
    ? 'hidden'
    : 'visible') as CSSProperties['visibility'],
  backgroundColor: `rgba(28, 27, 27, ${Math.min(scrollProgress, 1)})`,
});
