'use client';

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
      <Arrow />
      <Arrow />
    </div>
  );
};

export default ScrollArrow;

function Arrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="18"
      viewBox="0 0 28 17"
      fill="none"
    >
      <path
        d="M26 2L14 14L2 2"
        stroke="#fff"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
