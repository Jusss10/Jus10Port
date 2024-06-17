"use client";

import Hero from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";



export default function Home() {
	return (
		<main className="flex justify-center items-center scrollbar-hide ">
			<div className="w-full scrollbar-hide">
				<div className="flex flex-col items-center justify-center h-full">
					<p className="text-[8vw] font-tiny5">Portfolio</p>
					<p className="text-[7.5vw] font-tiny5">Justine Dor</p>
				</div>
				<Hero />
				<About />
				<Hero />
				<Projects />
			</div>
		</main>
	);
}
