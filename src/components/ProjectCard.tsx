import { Badge } from '@/components/ui/Badge';
import type { Project } from '@/content/portfolio';
import { ArrowUpRight } from 'lucide-react';

const levelTone: Record<Project['level'], string> = {
	고급: 'before:from-accent-violet before:via-brand-2',
	중급: 'before:from-accent-blue before:via-brand-2',
	초급: 'before:from-accent-green before:via-brand-2',
};

export function ProjectCard({ project }: { project: Project }) {
	return (
		<article
			className={`relative overflow-hidden rounded-2xl border border-line bg-white p-6 shadow-soft before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:to-transparent ${
				levelTone[project.level]
			}`}
		>
			<div className="flex flex-wrap items-start justify-between gap-3">
				<div>
					<div className="flex items-center gap-2">
						<Badge>{project.level}</Badge>
						<h3 className="text-lg font-semibold tracking-tight text-fg">
							{project.title}
						</h3>
					</div>
					<p className="mt-1 text-sm text-fg-muted">{project.subtitle}</p>
				</div>

				<div className="flex items-center gap-2">
					{project.links.map((l) => (
						<a
							key={l.href}
							href={l.href}
							target="_blank"
							rel="noreferrer"
							className="inline-flex items-center gap-1 rounded-full border border-line bg-bg-muted px-3 py-1.5 text-sm text-fg transition hover:bg-white"
						>
							{l.label} <ArrowUpRight className="h-4 w-4" />
						</a>
					))}
				</div>
			</div>

			<ul className="mt-5 space-y-2 text-sm leading-relaxed text-fg">
				{project.highlights.map((h) => (
					<li key={h} className="flex gap-2">
						<span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand" />
						<span>{h}</span>
					</li>
				))}
			</ul>
		</article>
	);
}
