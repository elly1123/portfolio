'use client';

interface BackgroundOverlayProps {
  showProfile: boolean;
}

export default function BackgroundOverlay({
  showProfile,
}: BackgroundOverlayProps) {
  return (
    <div
      className={`absolute inset-0 bg-[url("/assets/images/abstract.jpg")] bg-cover transition-opacity duration-1000 ${
        showProfile ? 'opacity-100' : 'opacity-0'
      }`}
    />
  );
}
