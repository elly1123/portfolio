import {
  type LearnMoreItem as LearnMoreItemType,
  type SkillItem as SkillItemType,
  learnMoreItems,
  skillSets,
} from '@/app/data/aboutData';
import Lottie from 'lottie-react';
import Image from 'next/image';

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
    className="group border-2 border-white/20 rounded-lg h-12 flex items-center justify-center gap-2 hover:bg-white/10 transition-all p-12 shadow-inner shadow-white/10"
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
    <div className="w-full max-w-6xl mx-auto p-8 pt-32 md:pt-24">
      {/* About Me */}
      <div className="mb-10">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center w-full max-w-md mx-auto mt-8 space-y-4">
            <div className="w-full bg-[#2A2A2A] rounded-lg p-6 shadow-lg border border-white/10">
              <div className="w-40 h-40 relative animate-fade-in mx-auto mb-6">
                <Image
                  src="/assets/images/debear.jpeg"
                  alt="Profile"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  fill
                  className="object-cover rounded-full border-4 border-white shadow-lg"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-gray-400 text-right">이름</div>
                <div className="text-[#f5f5f5] col-span-2">
                  백건희(han.baek)
                </div>
                <div className="text-gray-400 text-right">생년월일</div>
                <div className="text-[#f5f5f5] col-span-2">94.05.21</div>

                <div className="text-gray-400 text-right">연락처</div>
                <div className="text-[#f5f5f5] col-span-2">010-9786-0799</div>

                <div className="text-gray-400 text-right">이메일</div>
                <div className="text-[#f5f5f5] col-span-2">
                  han.baek@gmail.com
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

      {/* How I Think & Work 섹션 */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">How I Think & Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Business-Driven Development */}
          {/* Work Approach */}
          <div className="bg-[#2A2A2A] p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-[#f5f5f5]">
              📌 비즈니스 중심 개발
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                개발을 할 때 단순히 "이 기능이 필요하다"가 아니라 "이 기능이
                비즈니스에 어떤 영향을 줄 것인가?"를 먼저 생각합니다.
              </li>
              <br />
              <li>
                사용자 관점에서 가치를 만들어내고, 가설을 검증하면서 더 나은
                방향으로 개선하는 게 제 방식입니다.
              </li>
            </ul>
          </div>

          {/* Work Approach */}
          <div className="bg-[#2A2A2A] p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-[#f5f5f5]">
              ⚙️ 업무 방식
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                고객 중심 사고 - 제품을 개발할 때 내가 원하는 것을 만드는 것이
                아닌, 고객이 필요로 하는 것을 만듭니다.
              </li>
              <br />
              <li>
                협업 중심 커뮤니케이션 - 트레이드오프 관점으로 팀원들과
                느슨하지만 긴밀하게 협업하여 최적의 의사결정을 내립니다.
              </li>
            </ul>
          </div>

          {/* Frameworks */}
          <div className="bg-[#2A2A2A] p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-[#f5f5f5]">
              🛠️ 프레임워크
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                Agile - 빠르게 변화하는 비즈니스 요구에 맞춰 짧은 주기의 반복적
                개발을 통해 효율적으로 제품을 개선합니다.
              </li>
              <br />
              <li>
                Growth Hacking - 데이터 기반으로 사용자의 행동을 분석하고,
                제품을 성장시키는 방법을 고민합니다.
              </li>
            </ul>
          </div>

          {/* Business Impact */}
          <div className="bg-[#2A2A2A] p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-[#f5f5f5]">
              🚀 비즈니스 임팩트
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                UX 개선으로 전환율 20% 증가 - 기능 하나 바꾼 게 아니라, 사용자
                흐름을 분석하고 최적화한 결과
              </li>
              <br />
              <li>
                서비스 페이지 속도 50% 개선 - 프론트엔드 최적화(CDN 활용, 코드
                스플리팅)와 백엔드 캐싱 전략을 적용하여 로딩 속도를 단축.
              </li>
              <br />
            </ul>
          </div>
        </div>
      </div>

      {/* Skills & Tools */}
      <div className="mb-8 md:mb-16">
        <h2 className="text-2xl font-bold mb-4">Skills & Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {Object.entries(skillSets).map(([category, skills]) => (
            <div key={category} className="p-6 md:p-8 rounded bg-[#242424]">
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
