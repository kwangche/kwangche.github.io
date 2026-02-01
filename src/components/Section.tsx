import { cn } from '@/lib/utils';

type SectionProps = {
	id: string;
	children: React.ReactNode;
	className?: string;
};

export function Section({ id, children, className }: SectionProps) {
	return (
		<section id={id} className={cn('scroll-mt-24 py-8', className)}>
			<div className="mx-auto max-w-6xl px-4">{children}</div>
		</section>
	);
}
