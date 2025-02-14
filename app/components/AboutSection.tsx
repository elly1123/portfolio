'use client';

import {
  learnMoreItems,
  type LearnMoreItem as LearnMoreItemType,
  type SkillItem as SkillItemType,
  skillSets,
} from '@/app/data/aboutData';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
// Lottie 애니메이션 파일들을 동적 import
import flag from '@/public/assets/animations/flag.json';
import idea from '@/public/assets/animations/idea.json';
import mentorship from '@/public/assets/animations/mentorship.json';
import mission from '@/public/assets/animations/mission.json';
import user from '@/public/assets/animations/user.json';

const animationFiles = {
  flag: flag,
  idea: idea,
  mentorship: mentorship,
  mission: mission,
  user: user,
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.2 },
};

const SkillItem = ({
  icon,
  label,
  isSoft,
}: SkillItemType & { isSoft: boolean }) => (
  <div className="flex flex-col items-center gap-2">
    <div className="w-10 h-10 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center">
      {isSoft ? (
        <Lottie
          animationData={animationFiles[icon as keyof typeof animationFiles]}
          loop={true}
          autoplay={true}
          className="w-8 h-8 md:w-10 md:h-10"
        />
      ) : (
        <Image
          src={`/assets/icons/${icon}`}
          sizes="(max-width: 768px) 100vw, 50vw"
          alt={label}
          width={60}
          height={60}
          className="w-[16px] h-[16px] md:w-6 md:h-6"
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
    <div className="w-full max-w-6xl mx-auto p-8 pt-8 md:pt-24">
      {/* About Me */}

      {/* How I Think & Work 섹션 */}
      <motion.div {...fadeInUp} className="mb-10">
        <h2 className="text-2xl font-bold mb-4">How I Think & Work</h2>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Business-Driven Development */}
          <motion.div
            variants={fadeInUp}
            className="bg-[#2A2A2A] p-6 rounded-lg"
          >
            <h3 className="text-lg font-semibold mb-3 text-[#f5f5f5]">
              📌 콘텐츠 중심 사고
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                콘텐츠를 기획할 때 단순히 &ldquo;이 아이디어가 좋을까?&rdquo;가
                아니라, &ldquo;이 콘텐츠가 브랜드와 사용자에게 어떤 가치를 줄
                것인가?&rdquo;를 먼저 고민
              </li>
              <br />
              <li>- CTR(클릭률) 44.97% 증가, 콘텐츠 클릭수 112.33% 상승</li>
              <li>
                - 타 콘텐츠 대비 PGC 콘텐츠 지표 평균 123.89% 상승
              </li>
              <li>- SEO & 콘텐츠 최적화 → 유입 트래픽 27.9% 증가</li>
            </ul>
          </motion.div>

          {/* Work Approach */}
          <motion.div
            variants={fadeInUp}
            className="bg-[#2A2A2A] p-6 rounded-lg"
          >
            <h3 className="text-lg font-semibold mb-3 text-[#f5f5f5]">
              ⚙️ 업무 방식
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                고객 중심 사고 - 콘텐츠 제작 시 단순한 트렌드 반영이 아닌, 고객
                니즈 및 데이터 분석을 기반으로 한 전략적 접근
              </li>
              <br />
              <li>
                A/B 테스트 및 데이터 최적화 - 콘텐츠 실험을 통해 가장 높은
                반응을 이끌어내는 포맷 및 메시지 도출
              </li>
              <br />
              <li>
                지속 가능한 콘텐츠 운영 - 일별 20개 이상, 주간 70개 이상의
                콘텐츠 제작 및 배포, 브랜드 일관성을 유지하면서도 효율적인 운영
                전략 적용
              </li>
            </ul>
          </motion.div>

          {/* Frameworks */}
          <motion.div
            variants={fadeInUp}
            className="bg-[#2A2A2A] p-6 rounded-lg"
          >
            <h3 className="text-lg font-semibold mb-3 text-[#f5f5f5]">
              🛠️ 프레임워크
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                Growth Hacking - 유입 경로 분석 및 콘텐츠 최적화를 통해 구매
                전환율 19.0% 달성, GMV(24H) 1,192,054,357원 기록
              </li>
              <br />
              <li>
                SEO & 채널별 맞춤형 콘텐츠 - 검색 및 SNS 트래픽 확대, 구독 유저
                11,707명 확보
              </li>
              <br />
              <li>
                정기 콘텐츠 레터 운영 - CTR 12.53%, 업계 평균 대비 2배 이상의
                성과 창출
              </li>
            </ul>
          </motion.div>

          {/* Business Impact */}
          <motion.div
            variants={fadeInUp}
            className="bg-[#2A2A2A] p-6 rounded-lg"
          >
            <h3 className="text-lg font-semibold mb-3 text-[#f5f5f5]">
              🚀 비즈니스 임팩트
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                콘텐츠 최적화 전략을 통해 상품 클릭수(일평균) 100.8% 상승, DAU
                및 리텐션 확대 기여
              </li>
              <br />
              <li>
                자동화 및 운영 최적화로 반복 작업을 줄이고 콘텐츠 효율 극대화
              </li>
              <br />
              <li>
                매거진 스타일 계정 운영 & 브랜드 콘텐츠 강화 → 주간 20개 이상
                업로드 진행
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Skills & Tools */}
      <motion.div {...fadeInUp} className="mb-8 md:mb-16">
        <h2 className="text-2xl font-bold mb-4">Skills & Tools</h2>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8"
        >
          {Object.entries(skillSets).map(([category, skills]) => (
            <motion.div
              key={category}
              variants={fadeInUp}
              className="p-6 md:p-8 rounded bg-[#242424]"
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
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      {/* Learn More 섹션 */}
      <motion.div {...fadeInUp} className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Learn More</h2>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {learnMoreItems.map((item, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <LearnMoreItem {...item} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <motion.div {...fadeInUp} className="mb-10">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center w-full max-w-md mx-auto mt-8 space-y-4">
            <div className="w-full bg-[#2A2A2A] rounded-lg p-6 shadow-lg border border-white/10">
              <div className="w-40 h-40 relative animate-fade-in mx-auto mb-6">
                <Image
                  src="/assets/images/daling.jpeg"
                  alt="Profile"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  fill
                  className="object-cover rounded-full border-4 border-white shadow-lg"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-gray-400 text-right">이름</div>
                <div className="text-[#f5f5f5] col-span-2">
                  정다은(elly.1123)
                </div>
                <div className="text-gray-400 text-right">생년월일</div>
                <div className="text-[#f5f5f5] col-span-2">98.11.23</div>

                <div className="text-gray-400 text-right">연락처</div>
                <div className="text-[#f5f5f5] col-span-2">
                  +82 10-3783-8814
                </div>

                <div className="text-gray-400 text-right">이메일</div>
                <div className="text-[#f5f5f5] col-span-2">
                  onew112398@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutSection;
