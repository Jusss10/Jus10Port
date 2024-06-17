
import React, { useEffect, useState } from "react";

const Phrase: React.FC = () => {
	const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			const windowWidth = window.innerWidth;
			const windowHeight = window.innerHeight;

			const mouseXpercentage = Math.round((event.pageX / windowWidth) * 100);
			const mouseYpercentage = Math.round((event.pageY / windowHeight) * 100);

			setMousePosition({ x: mouseXpercentage, y: mouseYpercentage });
		};

		document.addEventListener("mousemove", handleMouseMove);

		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	const gradientStyle: React.CSSProperties = {
		WebkitMaskImage: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, transparent 1%, black 100%)`,
		maskImage: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, transparent 1%, white 100%)`,
	};

	return (
		<div className="relative flex items-center px-2 py-1">
			<p
				className="text-[6.5vw] font-display relative z-10 text-transparent bg-gradient-to-r from-blue-300 to-pink-500"
				style={gradientStyle}>
				Portfolio Justine Dor -{" "}
			</p>
		</div>
	);
};

export default Phrase;
