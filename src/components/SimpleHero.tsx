import { useRef } from "react";
import { useScroll } from "framer-motion";
import Slide from "@/components/Slide";

interface SimpleHeroProps {
	direction?: "left" | "right";
	left?: string;
	height?: string;
	paddingTop?: string;
	paddingBottom?: string;
	containerHeight?: string;
	className?: string;
	children?: React.ReactNode;
}

const SimpleHero = ({
	direction = "left",
	left = "-50%",
	height = "20vh",
	paddingTop = "0",
	paddingBottom = "0",
	containerHeight = "150vh",
	className = "",
	children
}: SimpleHeroProps) => {
	const container = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "end start"],
	});

	return (
		<div 
			className={`relative overflow-hidden ${className}`}
			style={{ 
				paddingTop, 
				paddingBottom 
			}}
		>
			<div 
				className="relative overflow-hidden"
				style={{ height }}
			>
				<div 
					ref={container} 
					className="relative"
					style={{ height: containerHeight }}
				>
					{children ? (
						<div className="w-full h-full flex items-center justify-center">
							{children}
						</div>
					) : (
						<Slide direction={direction} left={left} progress={scrollYProgress} />
					)}
				</div>
			</div>
		</div>
	);
};

export default SimpleHero;