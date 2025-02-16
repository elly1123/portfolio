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
                🔹 맞춤형 콘텐츠 기획 - 뚜렷한 취향의 유저를 타겟팅해 맞춤 코디
                서비스를 제공.CTR: 12.53% (전체 소재 대비 약 2배 높음)
              </li>
              <br />
              <li>
                🔹 유저 참여 기반 콘텐츠 확장 - 참여형 기능 도입으로 1D 리텐션:
                5% → 20% 이상 증가, DAU 3천 → 1만 이상으로 상승
              </li>
              <br />
              <li>
                🔹 PGC 콘텐츠 운영 - 고퀄리티 콘텐츠 업로드로 클릭률 10.4% 증가,
                상품 클릭수 100.8% 상승을 기록.{' '}
              </li>
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
                🔹 고객 중심 사고 - 콘텐츠 제작 시 단순한 트렌드 반영이 아닌,
                고객 니즈 및 데이터 분석을 기반으로 한 전략적 접근
              </li>
              <br />
              <li>
                🔹 A/B 테스트 및 데이터 최적화 - 콘텐츠 실험을 통해 가장 높은
                반응을 이끌어내는 포맷 및 메시지 도출
              </li>
              <br />
              <li>
                🔹 지속 가능한 콘텐츠 운영 - 일별 20개 이상, 주간 70개 이상의
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
              💡 운영 효율화
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                🔹 셀러 서빙 프로세스 구축 - 운영 100프로였던 기존 운영 대비
                스타일링 생산성 17% 증가
              </li>
              <br />
              <li>
                🔹 개인화 추천 데이터베이스 구축 - 유저의 유사한 상품 탐색울
                위해 정성적/정량적 태그를 적용
              </li>
              <br />
              <li>
                🔹 지표 모니터링 가이드 수립 - 정기적으로 콘텐츠를 개선 방향할
                수 있도록 지표기반 리뷰 프로세스를 도입
              </li>
            </ul>
          </motion.div>

          {/* Business Impact */}
          <motion.div
            variants={fadeInUp}
            className="bg-[#2A2A2A] p-6 rounded-lg"
          >
            <h3 className="text-lg font-semibold mb-3 text-[#f5f5f5]">
              🚀 데이터 기반 성과 개선
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                🔹 유저 인사이트 기반 콘텐츠 최적화 - 맞춤형 콘텐츠 기획 및 운영
                방식을 최적화 (인당 콘텐츠 클릭수 최대 27%▲, 기여매출 최대 59%▲)
              </li>
              <br />
              <li>
                🔹 판매 데이터 활용한 콘텐츠 전략 - 구매 전환율이 높은 상품
                TOP500 활용(8% → 37.83%)하해 주 평균 15.6백만원의 매출 기여함
              </li>
              <br />
              <li>
                🔹 콘텐츠 매력도 지표 개선 - 콘텐츠 모니터링을 통해 고퀄리티
                콘텐츠 분석해 고퀄리티 콘텐츠 비율 최대 28%까지 개선 (39.4%▲)
              </li>
              <br />
              <li>
                🔹 콘텐츠 매력도 개선 - 유저 데이터 기반 콘텐츠 생성 등을 통해
                고매력 (CTR 3% 이상) 콘텐츠 비율 증대하여 유저 만족도 향상
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
