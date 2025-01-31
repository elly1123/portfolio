import Image from 'next/image';

interface BadgeProps {
  label: string;
}

const Badge = ({ label }: BadgeProps) => (
  <div className="flex items-center bg-[#2D2D2D] rounded-full px-4 py-2 text-sm">
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

const AboutSection = () => {
  const badges = [
    { icon: 'developer.svg', label: '🧐 디자인 씽커' },
    { icon: 'react.svg', label: '🔥 묵묵하고 꾸준하게' },
    { icon: 'typescript.svg', label: '🙏 애자일 전도사' },
    { icon: 'typescript.svg', label: '🤼‍♀️ 집단지성' },
    { icon: 'typescript.svg', label: '💪 회복탄력성' },
    { icon: 'typescript.svg', label: '💻 시민을 위한 개발자' },
    { icon: 'typescript.svg', label: '🤖 AI리터러시' },
    { icon: 'typescript.svg', label: '👀 겸손과 메타인지' },
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

  return (
    <div className="w-full max-w-6xl mx-auto p-8 pt-20 md:py-16 min-h-screen">
      {/* About Me */}
      <div className="mb-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-20 h-20 relative">
            <Image
              src="/assets/images/debear.jpeg"
              alt="Profile"
              sizes="(max-width: 768px) 100vw, 50vw"
              fill
              className="object-contain"
            />
          </div>

          {/* 뱃지 컨테이너 - 모바일 중앙 정렬 추가 */}
          <div className="flex flex-wrap gap-3 max-w-xl justify-center md:justify-start">
            {badges.map((badge, index) => (
              <Badge key={index} {...badge} />
            ))}
          </div>
        </div>
      </div>

      {/* Values & Perspective */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Values & Perspective</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-neutral-200 h-12 rounded flex items-center justify-center text-[#2D2D2D] text-md font-bold italic">
            "Connecting the dots"
          </div>
          <div className="bg-neutral-200 h-12 rounded flex items-center justify-center text-[#2D2D2D] text-md font-bold italic">
            "매 순간 최선을 다하자"
          </div>
          <div className="bg-neutral-200 h-12 rounded flex items-center justify-center text-[#2D2D2D] text-md font-bold italic">
            "고민과 행동의 간극을 줄이자"
          </div>
          <div className="bg-neutral-200 h-12 rounded flex items-center justify-center text-[#2D2D2D] text-md font-bold italic">
            "수신제가치국평천하"
          </div>
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
