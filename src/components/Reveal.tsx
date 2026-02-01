'use client';

import { motion, useInView, type Variants } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

type RevealProps = {
	children: React.ReactNode;
	className?: string;
	delay?: number;
};

const variants: Variants = {
	hidden: { opacity: 0, y: 14, filter: 'blur(6px)' },
	show: {
		opacity: 1,
		y: 0,
		filter: 'blur(0px)',
		transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
	},
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
	const ref = useRef<HTMLDivElement | null>(null);
	const inView = useInView(ref, { margin: '-10% 0px -10% 0px', once: true });

	return (
		<motion.div
			ref={ref}
			className={cn(className)}
			initial="hidden"
			animate={inView ? 'show' : 'hidden'}
			variants={variants}
			transition={{ delay }}
		>
			{children}
		</motion.div>
	);
}
