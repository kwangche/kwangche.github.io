"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, Server, Globe } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Moving (무빙)",
    description: "기사님과 고객을 연결하는 이사 견적 비교 및 매칭 플랫폼입니다. 신뢰할 수 있는 견적 관리와 실시간 배차 기능을 제공합니다.",
    tags: ["Next.js", "TypeScript", "Zustand", "React Query", "TailwindCSS", "Prisma", "PostgreSQL", "AWS S3", "OAuth"],
    links: {
      githubFE: "https://github.com/fs08-moving-f5/fs08-moving-f5-fe",
      githubBE: "https://github.com/fs08-moving-f5/fs08-moving-f5-be",
      demo: "https://www.gomoving.shop",
      api: "https://api.gomoving.shop/docs"
    },
    highlight: "사용자/기사 분리를 위한 OAuth 위임 구현 및 S3 Presigned URL을 활용한 이미지 업로드 최적화.",
    color: "from-blue-600 to-indigo-600",
    image: "/projects/pj_moving.png"
  },
  {
    title: "최애의 포토",
    description: "사진을 생성하고 거래하는 플랫폼입니다.",
    tags: ["React", "JavaScript", "Node.js", "Zustand", "React Query", "TailwindCSS", "Prisma", "PostgreSQL", "AWS S3"],
    links: {
      githubFE: "https://github.com/FS-PART-3/8-PHOTO-FE",
      githubBE: "https://github.com/FS-PART-3/8-PHOTO-BE",
      demo: "https://codong.store",
      api: "https://eight-photo-be.onrender.com/docs/"
    },
    highlight: "프론트엔드 아키텍처 설계와 컴포넌트 재사용성에 집중했습니다.",
    color: "from-purple-600 to-pink-600",
    image: "/projects/pj_photo.png"
  },
  {
    title: "공부의 숲",
    description: "스터디를 만들고 공부습관을 기록하고 관리하면서 공부시간으로 포인트를 획득하는 플랫폼입니다.",
    tags: ["React", "JavaScript", "API Integration"],
    links: {
      githubFE: "https://github.com/MinJun916/fs08-studyforest-team1-fe",
      githubBE: "https://github.com/MinJun916/fs08-studyforest-team1-be",
      demo: "https://fs08-studyforest-team1-fe.vercel.app",
      api: "https://studyforest-n1at.onrender.com/api-docs"
    },
    highlight: "원활한 데이터 흐름을 위한 견고한 API 통합 계층을 구축했습니다.",
    color: "from-emerald-600 to-teal-600",
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
            풀스택 개발 기술을 활용하여 성능과 사용자 경험에 중점을 두고 개발한 주요 프로젝트들입니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 mb-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-colors"
            >
              <div className="flex flex-col md:flex-row">
                {/* Project Visual with Scroll Effect */}
                <div className="w-full md:w-2/5 h-64 md:h-auto min-h-[300px] relative overflow-hidden bg-gray-900 border-b md:border-b-0 md:border-r border-white/10">
                  {/* Image Container that scrolls */}
                  <div className="absolute top-0 left-0 w-full transition-transform duration-[3000ms] ease-linear group-hover:-translate-y-[calc(100%-300px)]">
                    {/* Using standard img for simpler control over scrolling behavior without layout shifts affecting next/image */}
                    <Image
                      src={project.image}
                      width={100}
                      height={100}
                      alt={project.title}
                      className="w-full h-auto object-cover"
                    />
                  </div>

                  {/* Overlay */}
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

                {/* Content */}
                <div className="p-8 md:p-10 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {project.links.githubFE && (
                          <a href={project.links.githubFE} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-xs font-medium text-gray-400 hover:text-white transition-colors bg-white/5 px-2 py-1 rounded border border-white/5 hover:border-white/20">
                            <Github size={14} /> FE
                          </a>
                        )}
                        {project.links.githubBE && (
                          <a href={project.links.githubBE} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-xs font-medium text-gray-400 hover:text-white transition-colors bg-white/5 px-2 py-1 rounded border border-white/5 hover:border-white/20">
                            <Github size={14} /> BE
                          </a>
                        )}
                        {project.links.demo && (
                          <a href={project.links.demo} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-xs font-medium text-blue-400 hover:text-blue-300 transition-colors bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20 hover:border-blue-500/40">
                            <Globe size={14} /> Demo
                          </a>
                        )}
                        {project.links.api && (
                          <a href={project.links.api} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-xs font-medium text-green-400 hover:text-green-300 transition-colors bg-green-500/10 px-2 py-1 rounded border border-green-500/20 hover:border-green-500/40">
                            <Server size={14} /> API
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-6 p-4 bg-white/5 rounded-lg border border-white/5">
                      <p className="text-sm text-gray-300">
                        <span className="text-blue-400 font-semibold">주요 기여:</span> {project.highlight}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
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
