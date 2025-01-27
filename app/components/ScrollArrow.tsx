'use client';

import Image from 'next/image';

interface ScrollArrowProps {
  onClick: () => void;
}

const ScrollArrow = ({ onClick }: ScrollArrowProps) => {
  return (
    <div
      className="absolute bottom-[3rem] left-[50%] translate-x-[-50%] z-[20] flex flex-col items-center rotate-180 animate-bounce cursor-pointer"
      style={{ opacity: 1 }}
      onClick={onClick}
    >
      <Image
        src={'/assets/icons/down.svg'}
        width={48}
        height={48}
        alt={'down'}
      />
    </div>
  );
};

export default ScrollArrow;
