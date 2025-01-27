import Image from 'next/image';

const AboutSection = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* About Me */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="w-32 h-32 relative mb-8">
          <Image
            src="/assets/images/debear.jpeg"
            alt="Profile Emoji"
            fill
            className="object-contain"
          />
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
      <div>
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
