"use client";

import { motion } from "framer-motion";

const skills = [
  "Next.js", "React", "TypeScript", "Node.js",
  "TailwindCSS", "Prisma", "PostgreSQL", "AWS S3",
  "OAuth 2.0", "Git", "Zustand", "React Query"
];

const experiences = [
  {
    role: "풀스택 트랙",
    company: "코드잇",
    period: "2025.07 - 2026.01",
    description: "강도 높은 풀스택 개발 부트캠프를 수료했습니다. 프로젝트 기반 학습에 집중하였으며, 다수의 프로젝트를 성공적으로 완수했습니다."
  },
  {
    role: "운영 지원 (프론트엔드)",
    company: "한국교육평가원",
    period: "2024.05 - 2025.06",
    description: "프론트엔드 유지보수 및 운영 지원을 담당하며 시스템 안정성과 사용자 만족도 향상에 기여했습니다."
  },
  {
    role: "반응형 웹 디자인 과정",
    company: "대우직업능력개발원",
    period: "2023.10 - 2024.03",
    description: "HTML/CSS 레이아웃 기법과 반응형 디자인 원칙을 마스터했습니다."
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0a0a0a] relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-blue-500">Me</span>
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              **End-to-End 기능 구현** 경험이 있으며, 특히 **OAuth** 위임(소셜 로그인) 및 **S3 Presigned URL** 최적화를 수행했습니다.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              유지보수 가능한 깔끔한 코드를 작성하고 확장 가능한 시스템을 구축하는 것을 중요하게 생각합니다. 현재는 Next.js와 클라우드 아키텍처를 활용한 모던 웹 스택 마스터에 집중하고 있습니다.
            </p>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 hover:border-blue-500/50 hover:text-blue-400 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Experience</h3>
            <div className="relative border-l border-white/10 ml-3 space-y-10">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 group">
                  <div className="absolute -left-[5px] top-2 w-[10px] h-[10px] rounded-full bg-blue-600 group-hover:bg-blue-400 transition-colors shadow-[0_0_10px_rgba(37,99,235,0.5)]" />
                  <span className="text-sm text-blue-500 font-mono mb-1 block">{exp.period}</span>
                  <h4 className="text-xl font-bold text-white mb-1">
                    {exp.role} {exp.company && <span className="text-gray-500 font-normal">@ {exp.company}</span>}
                  </h4>
                  <p className="text-gray-400">{exp.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
