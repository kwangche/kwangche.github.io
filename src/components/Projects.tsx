"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, Server, Globe, Sparkles, Brain, TrendingUp, MessageSquare, Lightbulb, Share2, Shield, Upload, Code, Database, Layout, Users, Puzzle, Zap } from "lucide-react";
import Image from "next/image";

const personalProjects = [
  {
    title: "오롯이 (orosi)",
    subtitle: "집중 공간 실시간 혼잡도 서비스",
    description: "서울 전역의 카페, 도서관, 공원, 코워킹 스페이스의 실시간 혼잡도를 제공하는 집중 공간 탐색 서비스입니다. 서울시 공공데이터 API와 사용자 투표를 결합해 지금 이 순간 가장 여유로운 공간을 추천합니다.",
    features: [
      { icon: Zap, label: "실시간 혼잡도", detail: "서울시 공공데이터 API와 사용자 피드백을 결합한 실시간 혼잡도 분석" },
      { icon: Globe, label: "내 주변 탐색", detail: "현재 위치 기반 카카오맵 연동으로 가까운 집중 공간을 한눈에 확인" },
      { icon: TrendingUp, label: "맞춤 추천", detail: "시간대별 패턴 분석으로 카페·도서관·공원 중 가장 여유로운 공간 추천" },
      { icon: Users, label: "사용자 투표", detail: "IP 해시 기반 중복 방지로 실제 체감 혼잡도를 반영한 커뮤니티 데이터 수집" },
    ],
    frontend: ["Next.js 15", "React 19", "TypeScript 5", "Tailwind CSS 4", "Zustand 5", "TanStack Query 5"],
    backend: ["Next.js API Routes", "TypeScript 5", "PostgreSQL", "Prisma 6", "Seoul Open Data API", "Kakao Local API"],
    infra: ["Vercel", "Supabase", "Vercel Cron Jobs"],
    architecture: "FSD (Feature-Sliced Design)",
    auth: "없음 (IP 해시 기반 비식별화)",
    aiWorkflow: [
      { label: "Stop Hook 세션 로그 강제화", detail: "세션 종료 시 stop.sh가 실행되어 오늘 날짜 로그 파일이 없으면 exit 1로 Claude에게 피드백을 전달 — 작업 내역 누락 원천 차단" },
      { label: "CLAUDE.md 컨텍스트 자동 주입", detail: "FSD 구조·기술 스택·컨벤션·토큰 절약 전략을 CLAUDE.md에 문서화해 매 세션마다 재입력 없이 일관된 코딩 패턴 유지" },
      { label: "Memory 시스템으로 장기 컨텍스트 관리", detail: ".claude/memory/sessions/에 날짜별 세션 로그를 축적해 이전 미해결 이슈·수정 파일·다음 할 일을 다음 세션에 자동 전달" },
      { label: "커스텀 슬래시 스킬 자동화", detail: "/commit으로 Conventional Commits 형식 커밋 자동 생성, /review-pr로 PR 코드 리뷰 자동화해 반복 작업 제거" },
      { label: "Supabase MCP 서버 연동", detail: "settings.json에 MCP 서버를 등록해 자연어로 DB 스키마 탐색·SQL 실행·마이그레이션 관리" },
    ],
    image: "/projects/pj_orosi.jpg",
    links: {
      github: "https://github.com/kwangche/orosi",
      demo: "https://www.orosi.app",
      devDemo: "https://orosi.vercel.app",
    },
    color: "from-teal-500 to-cyan-600",
  },
  {
    title: "AIKnown",
    subtitle: "AI 개발자 역량 분석 플랫폼",
    description: "GitHub 프로필 하나로 AI가 기술 스택 분석, 연봉 시뮬레이션, 인터뷰 질문까지 원스톱으로 제공하는 플랫폼입니다.",
    features: [
      { icon: Brain, label: "GitHub 심층 분석", detail: "커밋 패턴, 사용 기술, 코드 품질을 AI가 종합 평가" },
      { icon: TrendingUp, label: "연봉 시뮬레이션", detail: "시장 데이터와 경력 기반 예상 연봉 범위 산출" },
      { icon: MessageSquare, label: "인터뷰 질문 생성", detail: "GitHub 프로필 기반 맞춤형 기술 면접 질문 자동 생성" },
      { icon: Lightbulb, label: "사이드 프로젝트 추천", detail: "스킬셋 기반 다음 프로젝트 아이디어 제안" },
    ],
    frontend: ["Next.js 16", "React 19", "TypeScript 5", "Tailwind CSS 4", "Zustand 5", "TanStack Query 5"],
    backend: ["Express 5", "Node.js", "TypeScript 5", "PostgreSQL", "Prisma 7", "Google Generative AI"],
    infra: ["Docker", "Nginx", "AWS S3"],
    architecture: "FSD (Feature-Sliced Design)",
    auth: "GitHub",
    image: "/projects/pj_aiknown.png",
    links: {
      github: "https://github.com/kwangche/Aiknown",
      demo: "https://aiknown.netlify.app",
    },
    color: "from-purple-600 to-pink-600",
  }
];

const projects = [
  {
    level: "고급" as const,
    title: "Moving (무빙)",
    subtitle: "이사 매칭 플랫폼",
    description: "이사 소비자(USER)와 이사 전문가(기사님, DRIVER)를 연결하는 이사 매칭 플랫폼입니다. 사용자는 조건을 입력해 여러 기사님의 견적을 비교하고, 후기·평점 기반으로 전문가를 선택할 수 있습니다.",
    backendHighlights: [
      "Passport 기반 소셜 로그인(구글/카카오/네이버) OAuth 인가 위임 흐름을 USER/DRIVER 타입 분리 정책에 맞게 설계",
      "state 인코딩으로 type·redirectOrigin을 Provider에 전달, 콜백에서 디코딩하여 타입 복원",
      "redirectOrigin을 CORS allowlist 기반으로 OAuth start/callback 2중 검증하여 오픈 리다이렉트 차단",
      "S3 Presigned URL(PUT) 발급 → 짧은 만료 + Content-Type 검증으로 서버 부하 제거, private bucket에 object key 저장",
    ],
    frontendHighlights: [
      "여러 패턴의 카드디자인 컴포넌트 제작 및 기사님/사용자용 프로필 UI 구현",
      "소셜 로그인 시 sessionStorage에 기대 타입 저장, GET /auth/me로 실제 타입과 비교하는 방어 로직 구현",
      "hasProfile 기반 프로필 설정 페이지 자동 유도로 가입 전환 UX 최적화",
      "Presigned URL 플로우(URL 발급 → S3 업로드 → object key 저장)를 사용자 화면에 자연스럽게 연결",
    ],
    tags: ["Next.js", "TypeScript", "Zustand", "React Query", "TailwindCSS", "Prisma", "PostgreSQL", "AWS S3", "OAuth 2.0", "Passport.js"],
    links: {
      githubFE: "https://github.com/fs08-moving-f5/fs08-moving-f5-fe",
      githubBE: "https://github.com/fs08-moving-f5/fs08-moving-f5-be",
      demo: "https://www.gomoving.shop",
      api: "https://api.gomoving.shop/docs"
    },
    color: "from-blue-600 to-indigo-600",
    accentColor: "blue" as const,
    image: "/projects/pj_moving.png"
  },
  {
    level: "중급" as const,
    title: "최애의 포토",
    subtitle: "디지털 포토카드 생성/거래 서비스",
    description: "디지털 포토카드를 생성하고 거래하는 플랫폼입니다. 마이갤러리에서 포토카드를 조회·생성·관리하고, 다른 사용자와 안전하게 거래할 수 있습니다.",
    backendHighlights: [
      "AWS S3 활용 이미지 저장 시스템 구축 — 원본·워터마크 이미지 안정적 업로드",
      "Sharp 라이브러리로 리사이즈/워터마크 합성, 파일 기반 → 버퍼 방식 전환으로 성능 최적화",
      "마이갤러리 전체 API 개발 — 등급별 개수 계산, 포인트 차감, 날짜 처리 로직 포함",
      "checkQuantity 미들웨어 분리 — 판매 가능 수량과 거래 중 수량을 정밀 계산하여 초과 판매글 생성 방지",
    ],
    frontendHighlights: [
      "ESLint/Prettier/Husky 기반 코드 품질 관리 환경 초기 세팅 + TailwindCSS 글로벌 세팅 및 폴더 구조 설계",
      "React Query + Zustand 도입으로 서버/클라이언트 상태 분리 관리 구조 구축",
      "마이갤러리 페이지 — 검색·필터링·페이지네이션 + 포토카드 생성/관리 인터페이스 개발",
      "재사용 가능한 커스텀 드롭다운, 버튼 컴포넌트, 외부 클릭 감지 훅 제작",
    ],
    tags: ["React", "JavaScript", "Node.js", "Zustand", "React Query", "TailwindCSS", "Prisma", "PostgreSQL", "AWS S3", "Sharp", "Zod"],
    links: {
      githubFE: "https://github.com/FS-PART-3/8-PHOTO-FE",
      githubBE: "https://github.com/FS-PART-3/8-PHOTO-BE",
      demo: "https://codong.store",
      api: "https://eight-photo-be.onrender.com/docs/"
    },
    color: "from-purple-600 to-pink-600",
    accentColor: "purple" as const,
    image: "/projects/pj_photo.png"
  },
  {
    level: "초급" as const,
    title: "공부의 숲",
    subtitle: "습관 관리/커뮤니티 서비스",
    description: "스터디를 생성하거나 참여하여 학습 내용을 기록하고 관리하며, 집중 타이머를 통해 학습 시간에 따른 포인트를 획득하고, 응원 이모지로 커뮤니티 상호작용을 제공하는 플랫폼입니다.",
    backendHighlights: [
      "스터디 CRUD 기능 구현 및 이모지 생성·토글 기능 개발",
      "집중 시간에 따른 포인트 집계 로직 설계",
      "Prisma 활용 데이터베이스 스키마 정의 및 ERD 작성",
    ],
    frontendHighlights: [
      "Atom 단위 컴포넌트(이모지, 태그, 드롭다운) 제작 및 스터디 상세 페이지/모달/토스트 UI 구현",
      "텍스트 오버플로우, 인풋 크기, 상태 관리 로직 수정 등 UI/UX 이슈 개선",
      "모든 페이지 반응형 padding 조정으로 사용자 경험 보완",
    ],
    tags: ["React", "JavaScript", "Prisma", "API Integration"],
    links: {
      githubFE: "https://github.com/MinJun916/fs08-studyforest-team1-fe",
      githubBE: "https://github.com/MinJun916/fs08-studyforest-team1-be",
      demo: "https://fs08-studyforest-team1-fe.vercel.app",
      api: "https://studyforest-n1at.onrender.com/api-docs"
    },
    color: "from-emerald-600 to-teal-600",
    accentColor: "emerald" as const,
    image: "/projects/pj_studyforest.png"
  }
];

const legacyProjects = [
  {
    title: "Web Publisher Portfolio",
    description: "웹 퍼블리셔로서 작업한 포트폴리오 모음입니다.",
    tags: ["HTML", "CSS", "jQuery", "Web Publishing"],
    link: "https://kwangche.github.io/legacy/index.html#1",
    role: "Web Publisher"
  },
  {
    title: "Legacy Web Renewal",
    description: "Legacy Web 모바일 페이지 리뉴얼 및 유지보수 작업입니다.",
    tags: ["Legacy Web", "Maintenance", "Frontend"],
    link: "https://www.lei.or.kr/m/index.asp",
    role: "Frontend Maintenance"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">        
        {/* Personal Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Personal <span className="text-blue-500">Projects</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-2xl mb-12">
            개인적으로 기획부터 배포까지 전 과정을 주도한 프로젝트입니다.
          </p>

          {personalProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative rounded-2xl overflow-hidden mb-10 last:mb-0"
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
              <div className="relative rounded-2xl bg-[#111111] border border-white/10 group-hover:border-violet-500/30 transition-colors m-[1px]">

                {/* Top: Image + Header */}
                <div className="flex flex-col md:flex-row">
                  {/* Project Image (no scroll on hover) */}
                  <div className="w-full md:w-2/5 h-64 md:h-auto min-h-[300px] relative overflow-hidden bg-gray-900 border-b md:border-b-0 md:border-r border-white/10">
                    <Image
                      src={project.image}
                      width={600}
                      height={400}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover object-top"
                    />
                    <a
                      href={project.links.demo || "#"}
                      target="_blank"
                      rel="noreferrer"
                      className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10 cursor-pointer"
                    >
                      <div className="bg-white/10 p-4 rounded-full backdrop-blur-sm border border-white/20 text-white transform hover:scale-110 transition-transform">
                        <ArrowUpRight size={32} />
                      </div>
                    </a>
                  </div>

                  {/* Header Content */}
                  <div className="p-8 md:p-10 flex-1 flex flex-col justify-center">
                    <div>
                      <span className="inline-block text-xs font-bold uppercase tracking-widest text-violet-400 bg-violet-500/10 px-3 py-1 rounded-full border border-violet-500/20 mb-3">
                        Solo Project
                      </span>
                      <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-violet-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-lg text-gray-400 mt-1">{project.subtitle}</p>
                    </div>
                    <p className="text-gray-300 leading-relaxed max-w-3xl mt-4 mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {project.links.github && (
                        <a href={project.links.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg border border-white/10 hover:border-white/20">
                          <Github size={16} /> GitHub
                        </a>
                      )}
                      {project.links.demo && (
                        <a href={project.links.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-violet-300 hover:text-violet-200 transition-colors bg-violet-500/10 hover:bg-violet-500/20 px-4 py-2 rounded-lg border border-violet-500/20 hover:border-violet-500/40">
                          <Globe size={16} /> Live Demo
                        </a>
                      )}
                      {project.links.devDemo && (
                        <a href={project.links.devDemo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-teal-300 hover:text-teal-200 transition-colors bg-teal-500/10 hover:bg-teal-500/20 px-4 py-2 rounded-lg border border-teal-500/20 hover:border-teal-500/40">
                          <Code size={16} /> Dev Branch
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Features Grid */}
                <div className="p-8 md:p-10">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">주요 기능</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                    {project.features.map((feature, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-violet-500/20 hover:bg-white/[0.05] transition-all"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <feature.icon size={18} className="text-violet-400" />
                          <span className="text-sm font-semibold text-white">{feature.label}</span>
                        </div>
                        <p className="text-xs text-gray-400 leading-relaxed">{feature.detail}</p>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">기술 스택</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <span className="text-xs font-medium text-violet-400 mb-2 block">Frontend</span>
                      <div className="flex flex-wrap gap-2">
                        {project.frontend.map((tech, i) => (
                          <span key={i} className="text-xs font-medium px-3 py-1 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/15">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="text-xs font-medium text-emerald-400 mb-2 block">Backend</span>
                      <div className="flex flex-wrap gap-2">
                        {project.backend.map((tech, i) => (
                          <span key={i} className="text-xs font-medium px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/15">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="text-xs font-medium text-amber-400 mb-2 block">Infra</span>
                      <div className="flex flex-wrap gap-2">
                        {project.infra.map((tech, i) => (
                          <span key={i} className="text-xs font-medium px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/15">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Architecture & Auth */}
                  <div className="flex flex-wrap gap-4 pt-4 border-t border-white/5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">Architecture:</span>
                      <span className="text-xs font-medium px-2 py-1 rounded bg-white/5 text-gray-300">{project.architecture}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">Auth:</span>
                      <span className="text-xs font-medium px-2 py-1 rounded bg-white/5 text-gray-300">{project.auth}</span>
                    </div>
                  </div>

                  {/* AI-Assisted Dev Workflow */}
                  {project.aiWorkflow && (
                    <div className="mt-6 pt-6 border-t border-white/5">
                      <div className="flex items-center gap-2 mb-4">
                        <Sparkles size={16} className="text-violet-400" />
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-violet-400">AI-Assisted Development</h4>
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20">Claude Code</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {project.aiWorkflow.map((item, i) => (
                          <div key={i} className="flex gap-3 p-3 rounded-lg bg-violet-500/[0.05] border border-violet-500/10 hover:border-violet-500/25 hover:bg-violet-500/[0.08] transition-all">
                            <Sparkles size={14} className="text-violet-400 mt-0.5 flex-none" />
                            <div>
                              <p className="text-xs font-semibold text-violet-200 mb-0.5">{item.label}</p>
                              <p className="text-xs text-gray-400 leading-relaxed">{item.detail}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Featured <span className="text-blue-500">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl">
            풀스택 개발 기술을 활용하여 성능과 사용자 경험에 중점을 두고 개발한 팀 프로젝트들입니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-16 mb-24">
          {projects.map((project, index) => {
            const accentMap = {
              blue: {
                badge: "text-blue-400 bg-blue-500/10 border-blue-500/20",
                hoverBorder: "group-hover:border-blue-500/30",
                title: "group-hover:text-blue-300",
                label: "text-blue-400",
                dot: "bg-blue-400",
              },
              purple: {
                badge: "text-purple-400 bg-purple-500/10 border-purple-500/20",
                hoverBorder: "group-hover:border-purple-500/30",
                title: "group-hover:text-purple-300",
                label: "text-purple-400",
                dot: "bg-purple-400",
              },
              emerald: {
                badge: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
                hoverBorder: "group-hover:border-emerald-500/30",
                title: "group-hover:text-emerald-300",
                label: "text-emerald-400",
                dot: "bg-emerald-400",
              },
            };
            const accent = accentMap[project.accentColor] ?? accentMap.blue;

            return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden"
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.color} opacity-15 group-hover:opacity-25 transition-opacity`} />
              <div className={`relative rounded-2xl bg-[#111111] border border-white/10 ${accent.hoverBorder} transition-colors m-[1px]`}>

                {/* Top: Image + Header */}
                <div className="flex flex-col md:flex-row">
                  {/* Project Image with Scroll Effect */}
                  <div className="w-full md:w-2/5 h-64 md:h-auto min-h-[300px] relative overflow-hidden bg-gray-900 border-b md:border-b-0 md:border-r border-white/10">
                    <div className="absolute top-0 left-0 w-full transition-transform duration-[3000ms] ease-linear group-hover:-translate-y-[calc(100%-300px)]">
                      <Image
                        src={project.image}
                        width={600}
                        height={800}
                        alt={project.title}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <a
                      href={project.links.demo || "#"}
                      target="_blank"
                      rel="noreferrer"
                      className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10 cursor-pointer"
                    >
                      <div className="bg-white/10 p-4 rounded-full backdrop-blur-sm border border-white/20 text-white transform hover:scale-110 transition-transform">
                        <ArrowUpRight size={32} />
                      </div>
                    </a>
                  </div>

                  {/* Header Content */}
                  <div className="p-8 md:p-10 flex-1 flex flex-col justify-center">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${accent.badge}`}>
                        {project.level}
                      </span>
                      <span className="text-xs text-gray-500">{project.subtitle}</span>
                    </div>
                    <h3 className={`text-2xl md:text-3xl font-bold text-white ${accent.title} transition-colors mb-3`}>
                      {project.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Links */}
                    <div className="flex flex-wrap gap-3">
                      {project.links.githubFE && (
                        <a href={project.links.githubFE} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs font-medium text-gray-300 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/20">
                          <Github size={14} /> FE
                        </a>
                      )}
                      {project.links.githubBE && (
                        <a href={project.links.githubBE} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs font-medium text-gray-300 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/20">
                          <Github size={14} /> BE
                        </a>
                      )}
                      {project.links.demo && (
                        <a href={project.links.demo} target="_blank" rel="noreferrer" className={`flex items-center gap-1.5 text-xs font-medium ${accent.label} transition-colors bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/20`}>
                          <Globe size={14} /> Demo
                        </a>
                      )}
                      {project.links.api && (
                        <a href={project.links.api} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs font-medium text-green-400 transition-colors bg-green-500/10 hover:bg-green-500/15 px-3 py-1.5 rounded-lg border border-green-500/20 hover:border-green-500/30">
                          <Server size={14} /> API Docs
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Highlights Section */}
                <div className="px-8 md:px-10 pb-8 md:pb-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 mb-6">
                    {/* Backend Highlights */}
                    <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5">
                      <div className="flex items-center gap-2 mb-4">
                        <Server size={16} className="text-emerald-400" />
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Backend</h4>
                      </div>
                      <ul className="space-y-3">
                        {project.backendHighlights.map((h, i) => (
                          <li key={i} className="flex gap-2.5 text-sm text-gray-300 leading-relaxed">
                            <span className={`mt-2 h-1.5 w-1.5 flex-none rounded-full ${accent.dot}`} />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Frontend Highlights */}
                    <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5">
                      <div className="flex items-center gap-2 mb-4">
                        <Layout size={16} className="text-violet-400" />
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-violet-400">Frontend</h4>
                      </div>
                      <ul className="space-y-3">
                        {project.frontendHighlights.map((h, i) => (
                          <li key={i} className="flex gap-2.5 text-sm text-gray-300 leading-relaxed">
                            <span className={`mt-2 h-1.5 w-1.5 flex-none rounded-full ${accent.dot}`} />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tech Tags */}
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            );
          })}
        </div>

        {/* Legacy Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Previous <span className="text-gray-500">Works</span>
          </h3>
          <p className="text-gray-400 max-w-2xl mb-8">
            웹 퍼블리셔 및 프론트엔드 유지보수 업무를 수행하며 작업했던 프로젝트들입니다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {legacyProjects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-1">
                      {project.title}
                    </h4>
                    <span className="text-sm text-blue-500 font-medium">{project.role}</span>
                  </div>
                  <ExternalLink size={20} className="text-gray-500 group-hover:text-white transition-colors" />
                </div>
                <p className="text-gray-400 text-sm mb-4 min-h-[40px]">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded bg-black/20 text-gray-400 border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
