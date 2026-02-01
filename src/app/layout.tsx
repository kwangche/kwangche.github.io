import type { Metadata } from 'next';
import { Inter, Noto_Sans_KR } from 'next/font/google';
import './globals.css';
import { Nav } from '@/components/Nav';
import { ScrollProgress } from '@/components/ScrollProgress';
import { ScrollToTop } from '@/components/ScrollToTop';
import { CursorGlow } from '@/components/CursorGlow';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const noto = Noto_Sans_KR({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], variable: '--font-noto' });

export const metadata: Metadata = {
	title: 'Gwangche Lee | Portfolio',
	description: 'End-to-end full-stack developer portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ko" className={`${inter.variable} ${noto.variable}`}>
			<body className="min-h-dvh bg-bg font-[var(--font-noto)]">
				<CursorGlow />
				<ScrollProgress />
				<Nav />
				{children}
				<ScrollToTop />
			</body>
		</html>
	);
}
