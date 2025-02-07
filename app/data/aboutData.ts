export interface Badge {
  label: string;
}

export interface SkillItem {
  icon: string;
  label: string;
}

export interface LearnMoreItem {
  icon: string;
  text: string;
  url: string;
}

export interface SkillSets {
  stack: SkillItem[];
  infra: SkillItem[];
  tools: SkillItem[];
  softSkills: SkillItem[];
}

export const badges: Badge[] = [
  { label: '🔗 Connecting the dots' },
  { label: '🔥 묵묵하고 꾸준하게' },
  { label: '💪 높은 회복탄력성' },
  { label: '💻 빠른 피드백 수용' },
  { label: '👀 겸손과 메타인지' },
  { label: '🤖 AI리터러시' },
  { label: '🚀 균형있는 고민과 행동' },
  { label: '➗ 많이 배우고 많이 공유하기' },
];

export const skillSets: SkillSets = {
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
    { icon: 'copilot.svg', label: 'CI/CD' },
  ],
  tools: [
    { icon: 'gpt.svg', label: 'Prompt' },
    { icon: 'figma.svg', label: 'Figma' },
    { icon: 'make.svg', label: 'Automation' },
    { icon: 'data.svg', label: 'Analytics' },
    { icon: 'jira.svg', label: 'Jira' },
  ],
  softSkills: [
    { icon: 'user.json', label: '팀워크' },
    { icon: 'mentorship.json', label: '팔로워쉽' },
    { icon: 'mission.json', label: '문제해결' },
    { icon: 'idea.json', label: '의사소통' },
    { icon: 'flag.json', label: '리더쉽' },
  ],
};

export const learnMoreItems: LearnMoreItem[] = [
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
