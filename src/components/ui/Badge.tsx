import { cn } from '@/lib/utils';

export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
	return (
		<span
			className={cn(
				'inline-flex items-center rounded-full border border-line bg-bg-muted px-2.5 py-1 text-xs font-medium text-fg',
				className
			)}
		>
			{children}
		</span>
	);
}
