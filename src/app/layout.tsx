import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "이광체 | Full Stack Developer",
	description: "이광체 - 웹 성능 최적화 및 OAuth 전문 풀스택 개발자 포트폴리오.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ko" className="dark scroll-smooth">
			<body className={`${inter.className} min-h-screen bg-[#0a0a0a] text-[#ededed] antialiased selection:bg-blue-500 selection:text-white`}>
				{children}
			</body>
		</html>
	);
}
