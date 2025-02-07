'use client';

interface BackgroundOverlayProps {
  isAnimationComplete: boolean;
}

export default function BackgroundOverlay({
  isAnimationComplete,
}: BackgroundOverlayProps) {
  return (
    <>
      <div
        className={`absolute inset-0 bg-[url("/assets/images/background.jpg")] bg-cover bg-center bg-no-repeat transition-opacity duration-1000 z-[5] md:bg-fixed ${
          isAnimationComplete ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-1000 z-[6] ${
          isAnimationComplete ? 'opacity-40 md:opacity-50' : 'opacity-0'
        }`}
      />
    </>
  );
}
