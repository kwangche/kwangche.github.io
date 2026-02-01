'use client';

import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useState } from 'react';

export function ScrollToTop() {
	const { scrollY } = useScroll();
	const [visible, setVisible] = useState(false);

	useMotionValueEvent(scrollY, 'change', (latest) => {
		setVisible(latest > 520);
	});

	return (
		<motion.button
			type="button"
			aria-label="맨 위로"
			initial={false}
			animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
			transition={{ duration: 0.22 }}
			onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
			className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full border border-line bg-bg-glass80 px-4 py-2 text-sm font-medium text-fg shadow-soft backdrop-blur hover:bg-bg-muted"
		>
			<ArrowUp className="h-4 w-4" />
			맨 위로
		</motion.button>
	);
}
