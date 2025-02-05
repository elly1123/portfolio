import Image from 'next/image';

interface BadgeProps {
  label: string;
}

const Badge = ({ label }: BadgeProps) => (
  <div className="inline-flex items-center bg-[#2D2D2D] rounded-full px-4 py-2 text-sm whitespace-nowrap">
    <span>{label}</span>
  </div>
);

interface SkillItemProps {
  icon: string;
  label: string;
}

const SkillItem = ({ icon, label }: SkillItemProps) => (
  <div className="flex flex-col items-center gap-2">
    <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center">
      <Image
        src={`/assets/icons/${icon}`}
        sizes="(max-width: 768px) 100vw, 50vw"
        alt={label}
        width={20}
        height={20}
        className="md:w-6 md:h-6 w-[20px] h-[20px]"
      />
    </div>
    <span className="text-black text-xs md:text-sm text-center">{label}</span>
  </div>
);

interface LearnMoreItemProps {
  icon: string;
  text: string;
  url: string;
}

const LearnMoreItem = ({ icon, text, url }: LearnMoreItemProps) => (
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
  const badges = [
    { label: '🔗 Connecting the dots' },
    { label: '🔥 묵묵하고 꾸준하게' },
    { label: '💪 높은 회복탄력성' },
    { label: '💻 빠른 피드백 수용' },
    { label: '👀 겸손과 메타인지' },
    { label: '🤖 AI리터러시' },
    { label: '🚀 균형있는 고민과 행동' },
    { label: '➗ 많이 배우고 많이 공유하기' },
    // 더 많은 뱃지 추가 가능
  ];

  const skillSets = {
    stack: [
      { icon: 'next.svg', label: 'Next.js' },
      { icon: 'typescript.svg', label: 'TypeScript' },
      { icon: 'python.svg', label: 'Python' },
      { icon: 'flutter.svg', label: 'Flutter' },
      { icon: 'lowcode.svg', label: 'LowCode' },
    ],
    infra: [
      { icon: 'aws.svg', label: 'AWS' },
      { icon: 'docker.svg', label: 'Docker' },
      { icon: 'mysql.svg', label: 'Database' },
      { icon: 'kubernetes.svg', label: 'Kubernetes' },
      { icon: 'github.svg', label: 'CI/CD' },
    ],
    tools: [
      { icon: 'gpt.svg', label: 'Prompt' },
      { icon: 'figma.svg', label: 'Figma' },
      { icon: 'make.svg', label: 'Automation' },
      { icon: 'data.svg', label: 'Analytics' },
      { icon: 'jira.svg', label: 'Jira' },
    ],
    softSkills: [
      { icon: 'teamwork.svg', label: '팀워크' },
      { icon: 'followership.svg', label: '팔로워쉽' },
      { icon: 'problemsolving.svg', label: '문제해결' },
      { icon: 'communication.svg', label: '의사소통' },
      { icon: 'leadership.svg', label: '리더쉽' },
    ],
  };

  const learnMoreItems: LearnMoreItemProps[] = [
    {
      icon: '/assets/icons/github.svg',
      text: 'Github',
      url: 'https://github.com/BaekKunHee',
    },
    {
      icon: '/assets/icons/link.svg',
      text: 'Bio Link',
      url: 'https://bit.ly/m/han_baek',
    },
    {
      icon: '/assets/icons/notion.svg',
      text: 'Notion',
      url: 'https://www.notion.so/baek-kun-hee-123456',
    },
    {
      icon: '/assets/icons/medium.svg',
      text: 'Resume',
      url: 'https://han-baek.notion.site/Han-Baek-Problem-Solver-18fca87a5280804a8765dbc6aac4a7c1?pvs=4',
    },
  ];

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

      {/* Skills & Tools - 마진 바텀 조정 */}
      <div className="mb-8 md:mb-16">
        <h2 className="text-2xl font-bold mb-4">Skills & Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {/* Skill 섹션들의 간격 및 패딩 조정 */}
          <div className="bg-neutral-200 p-4 md:p-4 rounded">
            <span className="text-black font-bold mb-4 md:mb-4 block">
              Stack
            </span>
            <div className="flex justify-between items-center gap-2 md:gap-4">
              {skillSets.stack.map((skill, index) => (
                <SkillItem key={index} {...skill} />
              ))}
            </div>
          </div>
          <div className="bg-neutral-200 p-4 md:p-4 rounded">
            <span className="text-black font-bold mb-4 md:mb-4 block">
              Infra
            </span>
            <div className="flex justify-between items-center gap-2 md:gap-4">
              {skillSets.infra.map((skill, index) => (
                <SkillItem key={index} {...skill} />
              ))}
            </div>
          </div>
          <div className="bg-neutral-200 p-4 md:p-4 rounded">
            <span className="text-black font-bold mb-4 md:mb-4 block">
              Tool
            </span>
            <div className="flex justify-between items-center gap-2 md:gap-4">
              {skillSets.tools.map((skill, index) => (
                <SkillItem key={index} {...skill} />
              ))}
            </div>
          </div>
          <div className="bg-neutral-200 p-4 md:p-4 rounded">
            <span className="text-black font-bold mb-4 md:mb-4 block">
              Soft Skill
            </span>
            <div className="flex justify-between items-center gap-2 md:gap-4">
              {skillSets.softSkills.map((skill, index) => (
                <SkillItem key={index} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
