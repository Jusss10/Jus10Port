"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Hobby } from "@/components/Hobby";
import SimpleHero from "@/components/SimpleHero";


export default function Home() {
	return (
		<main className="flex justify-center items-center scrollbar-hide bg-sky-100 ">
			<div className="w-full">
				<SimpleHero direction="left" left="-75%" paddingTop="8vh" />
				<Header />
				<SimpleHero direction="right" left="-120%" paddingBottom="10vh" />
				<About />
				<Hero />
				<Projects />
				<Hobby/>
				<Footer />
			</div>
		</main>
	);
}
