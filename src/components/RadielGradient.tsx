import React, { useEffect, useState } from "react";

const RadialGradient: React.FC<{
	containerRef: React.RefObject<HTMLDivElement>;
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

		document.addEventListener("mousemove", handleMouseMove);

		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	const gradientStyle: React.CSSProperties = {
		background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #e288e9, #a9eefc)`,
		position: "absolute",
		width: "100%",
		height: "100%",
	};

	return <div style={gradientStyle}></div>;
};

export default RadialGradient;
