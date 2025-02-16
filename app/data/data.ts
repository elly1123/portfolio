export interface SkillItem {
  icon: string;
  label: string;
}

export interface LearnMoreItem {
  icon: string;
  text: string;
  url: string;
}

export interface ThinkWorkItem {
  title: string;
  emoji: string;
  items: {
    text: string;
  }[];
}

export interface SkillSets {
  stack: SkillItem[];
  infra: SkillItem[];
  tools: SkillItem[];
  softSkills: SkillItem[];
}

// 메인페이지에 표시되는 뱃지
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

export const thinkWorkData: ThinkWorkItem[] = [
  {
    title: '콘텐츠 중심 사고',
    emoji: '📌',
    items: [
      {
        text: '🔹 맞춤형 콘텐츠 기획 - 뚜렷한 취향의 유저를 타겟팅해 맞춤 코디 서비스를 제공.CTR: 12.53% (전체 소재 대비 약 2배 높음)',
      },
      {
        text: '🔹 유저 참여 기반 콘텐츠 확장 - 참여형 기능 도입으로 1D 리텐션: 5% → 20% 이상 증가, DAU 3천 → 1만 이상으로 상승',
      },
      {
        text: '🔹 PGC 콘텐츠 운영 - 고퀄리티 콘텐츠 업로드로 클릭률 10.4% 증가, 상품 클릭수 100.8% 상승을 기록.',
      },
    ],
  },
  {
    title: '업무 방식',
    emoji: '⚙️',
    items: [
      {
        text: '🔹 고객 중심 사고 - 콘텐츠 제작 시 단순한 트렌드 반영이 아닌, 고객 니즈 및 데이터 분석을 기반으로 한 전략적 접근',
      },
      {
        text: '🔹 A/B 테스트 및 데이터 최적화 - 콘텐츠 실험을 통해 가장 높은 반응을 이끌어내는 포맷 및 메시지 도출',
      },
      {
        text: '🔹 지속 가능한 콘텐츠 운영 - 일별 20개 이상, 주간 70개 이상의 콘텐츠 제작 및 배포, 브랜드 일관성을 유지하면서도 효율적인 운영 전략 적용',
      },
    ],
  },
  {
    title: '운영 효율화',
    emoji: '💡',
    items: [
      {
        text: '🔹 셀러 서빙 프로세스 구축 - 운영 100프로였던 기존 운영 대비 스타일링 생산성 17% 증가',
      },
      {
        text: '🔹 개인화 추천 데이터베이스 구축 - 유저의 유사한 상품 탐색울 위해 정성적/정량적 태그를 적용',
      },
      {
        text: '🔹 지표 모니터링 가이드 수립 - 정기적으로 콘텐츠를 개선 방향할 수 있도록 지표기반 리뷰 프로세스를 도입',
      },
    ],
  },
  {
    title: '데이터 기반 성과 개선',
    emoji: '🚀',
    items: [
      {
        text: '🔹 유저 인사이트 기반 콘텐츠 최적화 - 맞춤형 콘텐츠 기획 및 운영 방식을 최적화 (인당 콘텐츠 클릭수 최대 27%▲, 기여매출 최대 59%▲)',
      },
      {
        text: '🔹 판매 데이터 활용한 콘텐츠 전략 - 구매 전환율이 높은 상품 TOP500 활용(8% → 37.83%)하해 주 평균 15.6백만원의 매출 기여함',
      },
      {
        text: '🔹 콘텐츠 매력도 지표 개선 - 콘텐츠 모니터링을 통해 고퀄리티 콘텐츠 분석해 고퀄리티 콘텐츠 비율 최대 28%까지 개선 (39.4%▲)',
      },
      {
        text: '🔹 콘텐츠 매력도 개선 - 유저 데이터 기반 콘텐츠 생성 등을 통해 고매력 (CTR 3% 이상) 콘텐츠 비율 증대하여 유저 만족도 향상',
      },
    ],
  },
];


// Skills & Tools
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

// Learn More
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
