"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Hobby } from "@/components/Hobby";


export default function Home() {
	return (
		<main className="flex justify-center items-center scrollbar-hide bg-sky-100 ">
			<div className="w-full">
				<Header />
				<Hero />
				<About />
				<Hero />
				<Projects />
				<Hobby/>
				<Footer />
			</div>
		</main>
	);
}
