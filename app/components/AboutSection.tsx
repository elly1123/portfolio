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

interface SkillItemProps {
  icon: string;
  label: string;
}

const SkillItem = ({ icon, label }: SkillItemProps) => (
  <div className="flex flex-col items-center gap-2">
    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
      <Image src={`/assets/icons/${icon}`} alt={label} width={24} height={24} />
    </div>
    <span className="text-black text-sm text-center">{label}</span>
  </div>
);

const AboutSection = () => {
  const badges = [
    { icon: 'developer.svg', label: '🧐 디자인 씽커' },
    { icon: 'react.svg', label: '🔥 묵묵하고 꾸준하게' },
    { icon: 'typescript.svg', label: '🙏 애자일 전도사' },
    { icon: 'typescript.svg', label: '🤼‍♀️ 집단지성' },
    { icon: 'typescript.svg', label: '💪 회복탄력성' },
    { icon: 'typescript.svg', label: '🤖 시민을 위한 개발자' },
    { icon: 'typescript.svg', label: '😄 즐기는 자' },
    { icon: 'typescript.svg', label: '👀 겸손과 메타인지' },
    // 더 많은 뱃지 추가 가능
  ];

  const skillSets = {
    stack: [
      { icon: 'next.svg', label: 'Next.js' },
      { icon: 'typescript.svg', label: 'TypeScript' },
      { icon: 'python.svg', label: 'Python' },
      { icon: 'flutter.svg', label: 'Flutter' },
    ],
    infra: [
      { icon: 'aws.svg', label: 'AWS' },
      { icon: 'docker.svg', label: 'Docker' },
      { icon: 'mysql.svg', label: 'MySQL' },
      { icon: 'github.svg', label: 'CI/CD' },
    ],
    tools: [
      { icon: 'gpt.svg', label: 'Prompt' },
      { icon: 'figma.svg', label: 'Figma' },
      { icon: 'jira.svg', label: 'Jira' },
      { icon: 'data.svg', label: 'Analytics' },
    ],
    softSkills: [
      { icon: 'followership.svg', label: '팔로워쉽' },
      { icon: 'teamwork.svg', label: '팀워크 및 협업' },
      { icon: 'problemsolving.svg', label: '문제해결능력' },
      { icon: 'communication.svg', label: '의사소통' },
    ],
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-8 pt-10 md:py-12 min-h-screen">
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
          <div className="bg-neutral-200 h-16 rounded flex items-center justify-center text-[#2D2D2D] text-lg font-bold italic">
            "Connecting the dots"
          </div>
          <div className="bg-neutral-200 h-16 rounded flex items-center justify-center text-[#2D2D2D] text-lg font-bold italic">
            "항상 최선을 다하자"
          </div>
          <div className="bg-neutral-200 h-16 rounded flex items-center justify-center text-[#2D2D2D] text-lg font-bold italic">
            "고민과 행동의 간극을 줄이자"
          </div>
          <div className="bg-neutral-200 h-16 rounded flex items-center justify-center text-[#2D2D2D] text-lg font-bold italic">
            "수신제가치국평천하"
          </div>
        </div>
      </div>

      {/* Skills & Tools */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Skills & Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-neutral-200 p-6 rounded">
            <span className="text-black font-bold mb-6 block">Stack</span>
            <div className="flex justify-between items-center gap-4">
              {skillSets.stack.map((skill, index) => (
                <SkillItem key={index} {...skill} />
              ))}
            </div>
          </div>
          <div className="bg-neutral-200 p-6 rounded">
            <span className="text-black font-bold mb-6 block">Infra</span>
            <div className="flex justify-between items-center gap-4">
              {skillSets.infra.map((skill, index) => (
                <SkillItem key={index} {...skill} />
              ))}
            </div>
          </div>
          <div className="bg-neutral-200 p-6 rounded">
            <span className="text-black font-bold mb-6 block">Tool</span>
            <div className="flex justify-between items-center gap-4">
              {skillSets.tools.map((skill, index) => (
                <SkillItem key={index} {...skill} />
              ))}
            </div>
          </div>
          <div className="bg-neutral-200 p-6 rounded">
            <span className="text-black font-bold mb-6 block">Soft Skill</span>
            <div className="flex justify-between items-center gap-4">
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
