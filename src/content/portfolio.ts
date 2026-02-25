export type Link = { label: string; href: string };

export type Project = {
	level: '고급' | '중급' | '초급';
	title: string;
	subtitle: string;
	highlights: string[];
	links: Link[];
};

export const portfolio = {
	name: 'Kwangche Lee',
	role: '엔드-투-엔드 풀스택 개발자',
	taglines: [
		'OAuth/Auth | S3 Presigned Upload | Prisma',
		'Product flows first, security always',
	],
	about: [
		'프로젝트에서 OAuth 인가 위임(소셜 로그인)과 S3 Presigned URL 업로드를 중심으로 end-to-end 구현 경험이 있습니다.',
		'“실패를 두려워하지 않고 코드의 흐름을 빠르게 읽고 문제점을 파악하여 바로 개선할 수 있는 개발자입니다.”',
	],
	career: [
		{ org: '대우직업능력개발원', detail: '반응형웹디자인전문가 양성과정 (수료)', period: '2023.10 ~ 2024.03' },
		{ org: '주식회사 한국교육평가원', detail: '운영지원 사원 (프론트엔드)', period: '2024.05 ~ 2025.06' },
		{ org: '코드잇 스프린트', detail: '풀스택 트랙 8기 (수료)', period: '2025.07 ~ 2026.01' },
	],
	strengths: [
		{
			title: 'Auth/OAuth 설계 감각',
			description:
				'타입(USER/DRIVER) 일관성, state 기반 복원, redirect allowlist 등 실전 이슈를 구조로 해결합니다.',
			chips: ['OAuth 2.0', 'Passport', 'Open Redirect 방어', '쿠키/토큰'],
		},
		{
			title: 'S3 업로드 최적화',
			description:
				'Presigned URL로 서버 중계를 제거해 비용/트래픽을 절감하고, private bucket 전제의 key 저장 전략을 설계합니다.',
			chips: ['Presigned PUT/GET', '짧은 만료', 'Content-Type 통제', 'Key 저장'],
		},
		{
			title: '품질/협업',
			description:
				'명세 중심 커뮤니케이션, 재사용 가능한 UI/공통 로직 분리로 속도와 유지보수성을 함께 챙깁니다.',
			chips: ['명세/계약', '리팩터링', '공통화', '리뷰'],
		},
	],
	tech: [
		'TypeScript',
		'React',
		'Next.js',
		'TailwindCSS',
		'Node.js',
		'Express',
		'Prisma',
		'PostgreSQL',
		'AWS S3',
	],
	projects: [
		{
			level: '고급',
			title: '무빙',
			subtitle: '이사 매칭 플랫폼',
			highlights: [
				'OAuth(구글/카카오/네이버) 인가 위임 흐름을 USER/DRIVER 타입 분리 정책에 맞게 설계/구현',
				'redirectOrigin allowlist를 start/callback 2중 검증하여 오픈 리다이렉트 위험 완화',
				'S3 Presigned URL로 직접 업로드 플로우 구성(짧은 만료, key 저장 전략)',
			],
			links: [
				{ label: 'BE', href: 'https://github.com/fs08-moving-f5/fs08-moving-f5-be' },
				{ label: 'FE', href: 'https://github.com/fs08-moving-f5/fs08-moving-f5-fe' },
			],
		},
		{
			level: '중급',
			title: '포토카드',
			subtitle: '생성/거래 서비스',
			highlights: [
				'마이갤러리 조회 | 생성 | 관리 API 구현 및 이미지 처리(리사이즈/워터마크) 최적화',
				'거래 수량 검증 미들웨어 분리로 초과 판매글 생성 방지',
				'프론트 초기 세팅 및 공통 컴포넌트/상태관리 구조 정리',
			],
			links: [
				{ label: 'BE', href: 'https://github.com/FS-PART-3/8-PHOTO-BE' },
				{ label: 'FE', href: 'https://github.com/FS-PART-3/8-PHOTO-FE' },
			],
		},
		{
			level: '초급',
			title: '공부의 숲',
			subtitle: '습관/커뮤니티 서비스',
			highlights: [
				'스터디 CRUD 및 포인트 집계 로직 구현, 이모지 토글 기능 개발',
				'UI/UX 이슈(오버플로우 | 유효성 | 반응형) 개선 경험',
			],
			links: [
				{ label: 'BE', href: 'https://github.com/MinJun916/fs08-studyforest-team1-be' },
				{ label: 'FE', href: 'https://github.com/MinJun916/fs08-studyforest-team1-fe' },
			],
		},
	] satisfies Project[],
	personalProjects: [
		{
			title: 'AIKnown',
			subtitle: 'AI 개발자 역량 분석 플랫폼',
			description: 'GitHub 프로필 하나로 AI가 기술 스택 분석, 연봉 시뮬레이션, 인터뷰 질문까지 원스톱으로 제공',
			frontend: ['Next.js 16', 'React 19', 'TypeScript 5', 'Tailwind CSS 4', 'Zustand 5', 'TanStack Query 5'],
			backend: ['Express 5', 'Node.js', 'TypeScript 5', 'PostgreSQL', 'Prisma 7', 'Google Generative AI'],
			infra: ['Docker', 'Nginx', 'AWS S3'],
			links: [
				{ label: 'GitHub', href: 'https://github.com/kwangche/Aiknown' },
				{ label: 'Demo', href: 'https://aiknown.netlify.app' },
			],
		},
	],
	otherLinks: [
		{ label: 'Legacy(퍼블리셔 작업물)', href: 'legacy/index.html' },
		{ label: 'LEI 모바일 리뉴얼', href: 'https://www.lei.or.kr/m/index.asp' },
	],
	contact: {
		email: 'dlrhkdcp11@gmail.com',
	},
};
