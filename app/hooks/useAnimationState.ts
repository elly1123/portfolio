import { useEffect, useState } from 'react';

export const useAnimationState = () => {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      setIsAnimationComplete(true);
      setTimeout(() => {
        setShowProfile(true);
      }, 1000);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return {
    isAnimationComplete,
    showProfile,
    showPortfolio,
    setShowPortfolio,
  };
};
