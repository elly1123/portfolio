import {
  type Badge as BadgeType,
  type LearnMoreItem as LearnMoreItemType,
  type SkillItem as SkillItemType,
  badges,
  learnMoreItems,
  skillSets,
} from '@/app/data/aboutData';
import Lottie from 'lottie-react';
import Image from 'next/image';

const Badge = ({ label }: BadgeType) => (
  <div className="inline-flex items-center bg-[#2D2D2D] rounded-full px-4 py-2 text-sm whitespace-nowrap">
    <span>{label}</span>
  </div>
);

const SkillItem = ({
  icon,
  label,
  isSoft,
}: SkillItemType & { isSoft: boolean }) => (
  <div className="flex flex-col items-center gap-2">
    <div className="w-16 h-16 md:w-18 md:h-18 bg-white rounded-full flex items-center justify-center">
      {isSoft ? (
        <Lottie
          animationData={require(`@/public/assets/animations/${icon}`)}
          loop={true}
          autoplay={true}
          className="w-10 h-10"
        />
      ) : (
        <Image
          src={`/assets/icons/${icon}`}
          sizes="(max-width: 768px) 100vw, 50vw"
          alt={label}
          width={60}
          height={60}
          className="md:w-6 md:h-6 w-[20px] h-[20px]"
        />
      )}
    </div>

    <span className="text-[#F5F5F5] text-xs md:text-sm text-center">
      {label}
    </span>
  </div>
);

const LearnMoreItem = ({ icon, text, url }: LearnMoreItemType) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="group border-2 border-white rounded-lg h-12 flex items-center justify-center gap-2 hover:bg-white/10 transition-all p-12"
  >
    <span className="text-white text-xl">
      <Image src={icon} alt={text} width={20} height={20} />
    </span>
    <span className="text-white text-md font-bold italic group-hover:underline">
      {text}
    </span>
  </a>
);

const AboutSection = () => {
  return (
    <div
      id="about-container"
      className="w-full max-w-6xl mx-auto p-8 pt-20 md:py-16 min-h-screen overflow-y-auto max-h-screen"
    >
      {/* About Me */}
      <div className="mb-10">
        <div className="flex flex-col items-center gap-8">
          {/* 프로필 이미지 */}
          <div className="w-40 h-40 relative">
            <Image
              src="/assets/images/debear.jpeg"
              alt="Profile"
              sizes="(max-width: 768px) 100vw, 50vw"
              fill
              className="object-cover rounded-full border-4 border-white shadow-lg"
            />
          </div>

          {/* 뱃지 슬라이더 컨테이너 */}
          <div className="w-full flex justify-center">
            <div className="w-full max-w-2xl overflow-hidden">
              <div className="w-full h-[120px] overflow-hidden relative">
                <div className="flex flex-wrap gap-3 animate-slide">
                  {[...badges].map((badge, index) => (
                    <Badge key={`first-${index}`} {...badge} />
                  ))}
                </div>
                <div
                  className="flex flex-wrap gap-3 animate-slide"
                  style={{ position: 'absolute', left: '100%', top: 0 }}
                >
                  {[...badges].map((badge, index) => (
                    <Badge key={`second-${index}`} {...badge} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Learn More 섹션 */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Learn More</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {learnMoreItems.map((item, index) => (
            <LearnMoreItem key={index} {...item} />
          ))}
        </div>
      </div>

      {/* Skills & Tools */}
      <div className="mb-8 md:mb-16">
        <h2 className="text-2xl font-bold mb-4">Skills & Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {Object.entries(skillSets).map(([category, skills]) => (
            <div
              key={category}
              className="border-2 border-[#F5F5F5] p-6 md:p-8 rounded"
            >
              <span className="text-[#F5F5F5] font-bold mb-4 md:mb-4 block">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </span>
              <div className="flex justify-between items-center gap-2 md:gap-4">
                {skills.map((skill: SkillItemType, index: number) => (
                  <SkillItem
                    key={index}
                    {...skill}
                    isSoft={category === 'softSkills'}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
