import Image from 'next/image';

interface BadgeProps {
  icon: string;
  label: string;
}

const Badge = ({ icon, label }: BadgeProps) => (
  <div className="flex items-center bg-[#2D2D2D] rounded-full px-4 py-2 text-sm">
    {/* <Image
      src={`/assets/icons/${icon}`}
      alt={label}
      width={20}
      height={20}
      className="mr-2"
    /> */}
    <span>{label}</span>
  </div>
);

const AboutSection = () => {
  const badges = [
    { icon: 'developer.svg', label: '🧐 디자인 씽커' },
    { icon: 'react.svg', label: '🔥 묵묵하고 꾸준하게' },
    { icon: 'typescript.svg', label: '💪 애자일 전도사' },
    { icon: 'typescript.svg', label: '🤼‍♀️ 집단지성' },
    // 더 많은 뱃지 추가 가능
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-8 pt-20 md:py-24 min-h-screen">
      {/* About Me */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-32 h-32 relative">
            <Image
              src="/assets/images/debear.jpeg"
              alt="Profile Emoji"
              fill
              className="object-contain"
            />
          </div>

          {/* 뱃지 컨테이너 */}
          <div className="flex flex-wrap gap-3 max-w-xl">
            {badges.map((badge, index) => (
              <Badge key={index} {...badge} />
            ))}
          </div>
        </div>
      </div>

      {/* Values & Perspective */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Values & Perspective</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-neutral-200 h-16 rounded"></div>
          <div className="bg-neutral-200 h-16 rounded"></div>
          <div className="bg-neutral-200 h-16 rounded"></div>
          <div className="bg-neutral-200 h-16 rounded"></div>
        </div>
      </div>

      {/* Skills & Tools */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Skills & Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-neutral-200 h-16 rounded flex items-center justify-between px-6">
            <span className="text-black">소프트스킬</span>
            <div className="flex gap-2">
              <div className="w-6 h-6 bg-white rounded-full"></div>
              <div className="w-6 h-6 bg-white rounded-full"></div>
              <div className="w-6 h-6 bg-white rounded-full"></div>
            </div>
          </div>
          <div className="bg-neutral-200 h-16 rounded flex items-center justify-between px-6">
            <span className="text-black">소프트스킬</span>
            <div className="flex gap-2">
              <div className="w-6 h-6 bg-white rounded-full"></div>
              <div className="w-6 h-6 bg-white rounded-full"></div>
              <div className="w-6 h-6 bg-white rounded-full"></div>
            </div>
          </div>
          <div className="bg-neutral-200 h-16 rounded flex items-center justify-between px-6">
            <span className="text-black">소프트스킬</span>
            <div className="flex gap-2">
              <div className="w-6 h-6 bg-white rounded-full"></div>
              <div className="w-6 h-6 bg-white rounded-full"></div>
              <div className="w-6 h-6 bg-white rounded-full"></div>
            </div>
          </div>
          <div className="bg-neutral-200 h-16 rounded flex items-center justify-between px-6">
            <span className="text-black">소프트스킬</span>
            <div className="flex gap-2">
              <div className="w-6 h-6 bg-white rounded-full"></div>
              <div className="w-6 h-6 bg-white rounded-full"></div>
              <div className="w-6 h-6 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
