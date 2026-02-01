'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const links = [
	{ id: 'about', label: '소개' },
	{ id: 'tech', label: '기술' },
	{ id: 'strengths', label: '강점' },
	{ id: 'projects', label: '프로젝트' },
];

export function Nav() {
	return (
		<div className="sticky top-0 z-40 border-b border-line bg-bg-glass70 backdrop-blur supports-[backdrop-filter]:bg-bg-glass55">
			<div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
				<a href="#" className="group inline-flex items-center gap-2">
					<span className="text-sm font-semibold tracking-tight text-fg">Kwangche</span>
				</a>

				<nav className="hidden items-center gap-1 md:flex">
					{links.map((l) => (
						<motion.a
							key={l.id}
							href={`#${l.id}`}
							whileHover={{ y: -1 }}
							className={cn(
								'rounded-full px-3 py-1.5 text-sm text-fg-muted transition',
								'hover:bg-bg-muted hover:text-fg'
							)}
						>
							{l.label}
						</motion.a>
					))}
				</nav>

				<motion.a
					whileHover={{ y: -1 }}
					whileTap={{ scale: 0.98 }}
					href="#projects"
					className="inline-flex items-center gap-2 rounded-full bg-fg px-4 py-2 text-sm font-medium text-white shadow-soft"
				>
					작업 보기 <ArrowUpRight className="h-4 w-4" />
				</motion.a>
			</div>
		</div>
	);
}
