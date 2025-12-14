
const Phrase = () => {
	return (
		<div className="relative flex items-center px-2 py-1">
			<p 
				className="text-[6.5vw] font-display relative z-10 text-transparent bg-gradient-to-r from-blue-300 to-pink-500"
				style={{
					WebkitMaskImage: `radial-gradient(circle at 50% 50%, transparent 1%, black 100%)`,
					maskImage: `radial-gradient(circle at 50% 50%, transparent 1%, white 100%)`,
				}}
			>
				Portfolio Justine Dor -{" "}
			</p>
		</div>
	);
};


export default Phrase;
