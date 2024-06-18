import React from "react";
import "animate.css";

const Header = () => {
	return (
		<div className="flex flex-col items-center justify-center p-10 ">
			<p className="text-[8vw] arapey-regular animate__animated animate__fadeInDown leading-none bg-gradient-to-r from-blue-300 to-pink-500">
				Portfolio
			</p>
			<p className="text-[7.5vw] arapey-regular animate__animated animate__fadeInUp leading-none bg-gradient-to-r from-blue-300 to-pink-500">
				Justine Dor
			</p>
		</div>
	);
};

export default Header;
