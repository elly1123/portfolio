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
        className={`absolute inset-0 bg-[url("/assets/images/background.jpeg")] bg-cover bg-center bg-no-repeat transition-opacity duration-1000 z-[5] md:bg-fixed ${
          isAnimationComplete ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </>
  );
}
