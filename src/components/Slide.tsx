import { useTransform, motion } from "framer-motion";
import Phrase from "./Phrase";

interface SlideProps {
	direction: "left" | "right";
	left: string;
	progress: any;
}

const Slide: React.FC<SlideProps> = ({ direction, left, progress }) => {
	const directionMultiplier = direction === "left" ? -1 : 1;
	const translateX = useTransform(
		progress,
		[0, 1],
		[400, -400].map((v) => v * directionMultiplier)
	);

	return (
		<motion.div
			style={{ x: translateX, left }}
			className="relative flex whitespace-nowrap">
			<Phrase/>
			<Phrase/>
			<Phrase/>
			<Phrase/>
		</motion.div>
	);
};

export default Slide;
