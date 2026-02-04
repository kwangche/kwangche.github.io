import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
	return (
		<main className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
			<Navbar />
			<div className="flex flex-col">
				<Hero />
				<About />
				<Projects />
				<Contact />
			</div>
		</main>
	);
}
