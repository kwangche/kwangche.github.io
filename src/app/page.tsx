import { Reveal } from '@/components/Reveal';
import { Section } from '@/components/Section';
import { ProjectCard } from '@/components/ProjectCard';
import { Badge } from '@/components/ui/Badge';
import { portfolio } from '@/content/portfolio';
import { ArrowUpRight, Mail } from 'lucide-react';
import type { IconType } from 'react-icons';
import {
	SiAmazons3,
	SiExpress,
	SiNextdotjs,
	SiNodedotjs,
	SiPostgresql,
	SiPrisma,
	SiReact,
	SiTailwindcss,
	SiTypescript,
} from 'react-icons/si';

const techIcons: Record<string, IconType> = {
	TypeScript: SiTypescript,
	React: SiReact,
	'Next.js': SiNextdotjs,
	TailwindCSS: SiTailwindcss,
	'Node.js': SiNodedotjs,
	Express: SiExpress,
	Prisma: SiPrisma,
	PostgreSQL: SiPostgresql,
	'AWS S3': SiAmazons3,
};

export default function HomePage() {
	return (
		<main>
			<Section id="hero" className="pt-14">
				<Reveal>
					<div className="relative overflow-hidden rounded-3xl border border-line bg-white p-7 shadow-soft before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-brand before:via-brand-2 before:to-transparent sm:p-8">
						<div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
							<div className="max-w-2xl">
								<div className="mt-5 flex items-center gap-4">
									<div>
										<h1 className="text-3xl font-semibold tracking-tight text-fg sm:text-5xl">
											{portfolio.name}
										</h1>
										<p className="mt-2 text-lg text-fg-muted">{portfolio.role}</p>
									</div>
								</div>

								<div className="mt-6 flex flex-wrap items-center gap-3">
									<a
										href="#projects"
										className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-white shadow-soft"
									>
										프로젝트 보기 <ArrowUpRight className="h-4 w-4" />
									</a>
									<a
										href={`mailto:${portfolio.contact.email}`}
										className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-medium text-fg hover:bg-bg-muted"
									>
										<Mail className="h-4 w-4" /> 이메일
									</a>
								</div>
							</div>
						</div>
					</div>
				</Reveal>
			</Section>

			<Section id="about" className="bg-bg-muted40">
				<Reveal>
					<div className="grid gap-4">
						<div className="relative overflow-hidden rounded-2xl border border-line bg-white p-6 shadow-soft before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-accent-blue before:via-brand-2 before:to-transparent">
							<div className="flex items-center gap-3">
								<span className="h-2 w-2 rounded-full bg-accent-blue" />
								<h2 className="text-xl font-semibold tracking-tight">소개</h2>
							</div>
							<ul className="mt-4 space-y-3 text-sm leading-relaxed text-fg">
								{portfolio.about.map((a) => (
									<li key={a} className="flex gap-2">
										<span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand" />
										<span>{a}</span>
									</li>
								))}
							</ul>
						</div>
						<div className="relative overflow-hidden rounded-2xl border border-line bg-white p-6 shadow-soft before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-accent-green before:via-brand-2 before:to-transparent">
							<div className="flex items-center gap-3">
								<span className="h-2 w-2 rounded-full bg-accent-green" />
								<h2 className="text-xl font-semibold tracking-tight">경력</h2>
							</div>
							<div className="mt-5 space-y-4">
								{portfolio.career.map((c) => (
									<div key={c.org} className="rounded-xl border border-line bg-bg-muted p-4">
										<p className="text-sm font-medium text-fg">{c.org}</p>
										<p className="mt-1 text-sm text-fg-muted">{c.detail}</p>
										<p className="mt-2 text-xs text-fg-muted">{c.period}</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</Reveal>
			</Section>

			<Section id="tech">
				<Reveal>
					<div className="relative overflow-hidden rounded-2xl border border-line bg-white p-6 shadow-soft before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-brand-2 before:via-accent-violet before:to-transparent">
						<div className="flex items-center gap-3">
							<span className="h-2 w-2 rounded-full bg-brand-2" />
							<h2 className="text-xl font-semibold tracking-tight">기술 스택</h2>
						</div>
						<div className="mt-4 flex flex-wrap gap-2">
							{portfolio.tech.map((t) => {
								const Icon = techIcons[t];
								return (
									<Badge key={t} className="gap-1.5">
										{Icon ? <Icon className="h-3.5 w-3.5 text-fg" /> : null}
										<span>{t}</span>
									</Badge>
								);
							})}
						</div>
					</div>
				</Reveal>
			</Section>

			<Section id="strengths" className="bg-bg-muted40">
				<Reveal>
					<div className="flex items-center gap-3">
						<span className="h-2 w-2 rounded-full bg-accent-violet" />
						<h2 className="text-xl font-semibold tracking-tight">강점</h2>
					</div>
				</Reveal>
				<div className="mt-6 grid gap-4 md:grid-cols-3">
					{portfolio.strengths.map((s, idx) => (
						<Reveal key={s.title} delay={idx * 0.06}>
							<div className="relative h-full overflow-hidden rounded-2xl border border-line bg-white p-6 shadow-soft before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-accent-violet before:via-brand-2 before:to-transparent">
								<p className="text-sm font-semibold text-fg">{s.title}</p>
								<p className="mt-3 text-sm leading-relaxed text-fg-muted">{s.description}</p>
								<div className="mt-4 flex flex-wrap gap-2">
									{s.chips.map((c) => (
										<Badge key={c} className="bg-bg-muted">
											{c}
										</Badge>
									))}
								</div>
							</div>
						</Reveal>
					))}
				</div>
			</Section>

			<Section id="projects">
				<Reveal>
					<div className="flex flex-wrap items-end justify-between gap-3">
						<div>
							<div className="flex items-center gap-3">
								<span className="h-2 w-2 rounded-full bg-accent-amber" />
								<h2 className="text-xl font-semibold tracking-tight">프로젝트</h2>
							</div>
							<p className="mt-2 text-sm text-fg-muted">
								구현 내용은 What I shipped 기준으로 정리했습니다.
							</p>
						</div>
						<div className="flex flex-wrap gap-2">
							{portfolio.otherLinks.map((l) => (
								<a
									key={l.href}
									href={l.href}
									target="_blank"
									rel="noreferrer"
									className="inline-flex items-center gap-1 rounded-full border border-line bg-white px-3 py-1.5 text-sm text-fg hover:bg-bg-muted"
								>
									{l.label} <ArrowUpRight className="h-4 w-4" />
								</a>
							))}
						</div>
					</div>
				</Reveal>
				<div className="mt-6 grid gap-4">
					{portfolio.projects.map((p) => (
						<Reveal key={p.title}>
							<ProjectCard project={p} />
						</Reveal>
					))}
				</div>
			</Section>
		</main>
	);
}
