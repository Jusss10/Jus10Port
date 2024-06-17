import React, { useEffect, useState } from "react";

const RadialGradient: React.FC<{
	containerRef: React.RefObject<HTMLDivElement> | null;
}> = ({ containerRef }) => {
	const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			const windowWidth = window.innerWidth;
			const windowHeight = window.innerHeight;

			const mouseXpercentage = Math.round((event.pageX / windowWidth) * 100);
			const mouseYpercentage = Math.round((event.pageY / windowHeight) * 100);

			setMousePosition({ x: mouseXpercentage, y: mouseYpercentage });
		};

		if (containerRef) {
			document.addEventListener("mousemove", handleMouseMove);
		}

		return () => {
			if (containerRef) {
				document.removeEventListener("mousemove", handleMouseMove);
			}
		};
	}, [containerRef]);

	

	const gradientStyle: React.CSSProperties = {
		maskImage: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, transparent 50%, black 100%)`,
		WebkitMaskImage: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, transparent 50%, black 100%)`,
		position: "absolute",
		width: "100%",
		height: "100%",
	};

	return <div style={gradientStyle}></div>;
};

export default RadialGradient;
