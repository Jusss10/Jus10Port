"use client";

import Hero from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";



export default function Home() {
	return(
	<main className="flex justify-center items-center ">
		<div className="w-full">
			<Hero />
			<About />
			<Projects />
		</div>
	</main>
	);
}
