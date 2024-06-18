import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectCardProps {
	project: {
		title: string;
		description: string;
		image: string;
		details?: string; 
	};
}

const ProjectCard = ({ project }: ProjectCardProps) => {
	const [showModal, setShowModal] = useState(false);

	const toggleModal = () => {
		setShowModal(!showModal);
	};

	return (
		<>
			<motion.div
				className="project-card flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-4 m-4 cursor-pointer"
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				onClick={toggleModal}>
				<div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
					<Image
						src={project.image}
						alt={project.title}
						layout="fill"
						objectFit="cover"
						className="rounded-lg"
					/>
				</div>
				<h3 className="text-lg font-bold mb-2">{project.title}</h3>
				<p className="text-sm text-gray-700">{project.description}</p>
			</motion.div>

			{showModal && (
				<div className="fixed inset-0 z-50 flex items-center justify-center">
					<div className="absolute inset-0 bg-gray-900 opacity-75"></div>
					<motion.div
						className="bg-white rounded-lg shadow-lg p-6 max-w-lg mx-auto z-50"
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.5 }}>
						<h2 className="text-2xl font-bold mb-4 text-black">{project.title}</h2>
						{project.details && (
							<p className="text-lg mb-4 text-black">{project.details}</p>
						)}
						<button
							className="bg-sky-200 text-white py-2 px-4 rounded-lg"
							onClick={toggleModal}>
							Close
						</button>
					</motion.div>
				</div>
			)}
		</>
	);
};

export default ProjectCard;
