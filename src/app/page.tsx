"use client";

import Hero from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { CoolComponent } from "@/components/CoolComponent";



export default function Home() {
	return (
		<main className="flex justify-center items-center scrollbar-hide bg-sky-100 ">
			<div className="w-full scrollbar-hide">
				<CoolComponent/>
				<Hero />
				<About />
				<Hero />
				<Projects />
			</div>
		</main>
	);
}
