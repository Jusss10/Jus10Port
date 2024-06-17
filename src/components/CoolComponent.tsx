import React from "react";
import "animate.css";

export function CoolComponent(){
	return (
		<div className="flex flex-col items-center justify-center p-10 ">
			<p className="text-[8vw] font-tiny5 animate__animated animate__fadeInDown leading-none bg bg-gradient-to-r from-blue-300 to-pink-500">
				Portfolio
			</p>
			<p className="text-[7.5vw] font-tiny5 animate__animated animate__fadeInUp leading-none bg-gradient-to-r from-blue-300 to-pink-500">
				Justine Dor
			</p>
		</div>
	);
};
