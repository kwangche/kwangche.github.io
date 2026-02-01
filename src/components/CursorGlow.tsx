'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';

export function CursorGlow() {
	const shouldReduceMotion = useReducedMotion();
	const [enabled, setEnabled] = useState(false);
	const [visible, setVisible] = useState(false);
	const [pressed, setPressed] = useState(false);

	const x = useMotionValue(-1000);
	const y = useMotionValue(-1000);
	const sx = useSpring(x, { stiffness: 450, damping: 42, mass: 0.6 });
	const sy = useSpring(y, { stiffness: 450, damping: 42, mass: 0.6 });

	useEffect(() => {
		if (shouldReduceMotion) return;
		if (typeof window === 'undefined') return;

		const mql = window.matchMedia('(pointer: fine)');
		const update = () => setEnabled(mql.matches);
		update();
		mql.addEventListener?.('change', update);
		return () => mql.removeEventListener?.('change', update);
	}, [shouldReduceMotion]);

	useEffect(() => {
		if (!enabled) return;

		const onMove = (e: PointerEvent) => {
			x.set(e.clientX);
			y.set(e.clientY);
			setVisible(true);
		};
		const onLeave = () => setVisible(false);
		const onDown = () => setPressed(true);
		const onUp = () => setPressed(false);

		window.addEventListener('pointermove', onMove, { passive: true });
		window.addEventListener('pointerleave', onLeave);
		window.addEventListener('pointerdown', onDown);
		window.addEventListener('pointerup', onUp);

		return () => {
			window.removeEventListener('pointermove', onMove);
			window.removeEventListener('pointerleave', onLeave);
			window.removeEventListener('pointerdown', onDown);
			window.removeEventListener('pointerup', onUp);
		};
	}, [enabled, x, y]);

	const size = useMemo(() => (pressed ? 280 : 240), [pressed]);

	if (!enabled || shouldReduceMotion) return null;

	return (
		<motion.div
			aria-hidden
			className="pointer-events-none fixed left-0 top-0 z-[60]"
			style={{
				x: sx,
				y: sy,
				translateX: '-50%',
				translateY: '-50%',
				opacity: visible ? 1 : 0,
			}}
			transition={{ duration: 0.18 }}
		>
			<div
				style={{
					width: size,
					height: size,
					borderRadius: 9999,
					filter: 'blur(22px)',
					background:
						'radial-gradient(circle at 30% 30%, var(--brand-2-18), transparent 60%), radial-gradient(circle at 70% 60%, var(--accent-violet-16), transparent 62%), radial-gradient(circle at 50% 85%, var(--accent-amber-12), transparent 65%)',
					mixBlendMode: 'multiply',
					transform: pressed ? 'scale(0.92)' : 'scale(1)',
					transition: 'transform 120ms ease',
				}}
			/>
		</motion.div>
	);
}
