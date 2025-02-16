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

export const badges = {
  one: [
    '🤖 AI리터러시',
    '🎯 스토리텔링과 브랜드 메시지',
    '🎨 비주얼 & 감성 중심 기획',
    '📌 콘텐츠 실험과 지속적인 개선',
    '📊 데이터 기반 콘텐츠 전략',
    '📢 고객 중심 커뮤니케이션',
  ],
  two: [
    '🔍 트렌드 분석 & 인사이트 발견',
    '⚙️ 효율적인 콘텐츠 운영과 실행',
    '💻 빠른 피드백 수용',
    '🚀 차별화된 브랜딩과 포지셔닝',
    '👀 겸손과 메타인지',
    '🔗 연결 & 몰입 경험 설계',
    '🔥 감성 & 경험 중심 콘텐츠 기획',
  ],
};

export const skillSets: SkillSets = {
  stack: [
    { icon: 'photoshop.svg', label: '포토샵' },
    { icon: 'miro.svg', label: '기획' },
    { icon: 'zigzag.svg', label: '운영' },
    { icon: 'instagram.svg', label: '발행' },
    { icon: 'bittly.svg', label: '데이터분석' },
  ],
  infra: [
    { icon: 'wordpress.svg', label: '뉴스레터' },
    { icon: 'rss.svg', label: '블로그' },
    { icon: 'youtube.svg', label: '숏폼' },
    { icon: 'meta.svg', label: '퍼포먼스' },
    { icon: 'google.svg', label: 'SEO최적화' },
  ],
  tools: [
    { icon: 'gpt.svg', label: 'Prompt' },
    { icon: 'figma.svg', label: 'Figma' },
    { icon: 'make.svg', label: 'Automation' },
    { icon: 'data.svg', label: 'Analytics' },
    { icon: 'jira.svg', label: 'Jira' },
  ],
  softSkills: [
    { icon: 'idea', label: '팀워크' },
    { icon: 'user', label: '팔로워쉽' },
    { icon: 'mission', label: '문제해결' },
    { icon: 'mentorship', label: '의사소통' },
    { icon: 'flag', label: '협업' },
  ],
};

export const learnMoreItems: LearnMoreItem[] = [
  {
    icon: '/assets/icons/medium.svg',
    text: 'Resume',
    url: 'https://jelly-olive-ae1.notion.site/Elly-Contents-Thinker-16a49e5159c7804c85f7df6d75dcaae6',
  },
  {
    icon: '/assets/icons/link.svg',
    text: 'Bio Link',
    url: 'https://bit.ly/m/elly1123',
  },
  {
    icon: '/assets/icons/linkedin.svg',
    text: 'LinkedIn',
    url: 'https://www.linkedin.com/in/%EB%8B%A4%EC%9D%80-%EC%A0%95-b08b84343/',
  },
  {
    icon: '/assets/icons/notion.svg',
    text: 'Notion',
    url: 'https://jelly-olive-ae1.notion.site/Daeun-18c49e5159c7802c8846e29fbfd11119?pvs=4',
  },
];
