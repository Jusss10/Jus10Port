"use client";

import Hero from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";



export default function Home() {
	return (
		<main className="flex justify-center items-center scrollbar-hide ">
			<div className="w-full scrollbar-hide">
				<Hero />
				<About />
				<Hero />
				<Projects />
			</div>
		</main>
	);
}
