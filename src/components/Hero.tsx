import React, { useEffect, useRef, RefObject } from "react";
import RadialGradient from "./RadielGradient";
import { useScroll } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import Slide from "@/components/Slide";

const Hero = () => {
	const container: RefObject<HTMLDivElement> = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "end start"],
	});

	useEffect(() => {
		const lenis = new Lenis();
		let animationFrameId: number;

		function raf(time: number) {
			lenis.raf(time);
			animationFrameId = requestAnimationFrame(raf);
		}

		animationFrameId = requestAnimationFrame(raf);

		return () => {
			cancelAnimationFrame(animationFrameId);
			lenis.destroy();
		};
	}, []);

	return (
		<div className="relative h-[115vh] overflow-hidden">
			<RadialGradient containerRef={container} />
			<div className="absolute top-80 left-0 w-full h-full">
				<div ref={container} className="h-[150vh] pb-20 pt-26 relative">
					<Slide direction="left" left="-40%" progress={scrollYProgress} />
					<Slide direction="right" left="-25%" progress={scrollYProgress} />
					<Slide direction="left" left="-75%" progress={scrollYProgress} />
				</div>
			</div>
		</div>
	);
};

export default Hero;
