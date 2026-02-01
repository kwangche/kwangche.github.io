'use client';

import { motion, useScroll } from 'framer-motion';

export function ScrollProgress() {
	const { scrollYProgress } = useScroll();

	return (
		<motion.div
			aria-hidden
			className="fixed left-0 top-0 z-50 h-0.5 w-full origin-left bg-gradient-to-r from-brand via-brand-2 to-accent-violet"
			style={{ scaleX: scrollYProgress }}
		/>
	);
}
