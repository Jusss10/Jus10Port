import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import profilePic from "./profile.png";

interface Skill {
	name: string;
	level: number;
}

const aboutText: string =
	"I am a passionate full-stack developer with expertise in TypeScript, React, Node.js, and more.";

const skills: Skill[] = [
	{ name: "TypeScript", level: 30 },
	{ name: "React", level: 40 },
	{ name: "Node.js", level: 80 },
	{ name: "HTML/CSS", level: 75 },
	{ name: "Java", level: 70 },
	{ name: "French", level: 100 },
	{ name: "English", level: 90 },
	{ name: "Dutch", level: 90 },
];

const About: React.FC = () => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.5,
	});

	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="bg-black relative h-screen pb-20 pt-26 flex items-center justify-center"
			ref={ref}>
			<div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8 w-full max-w-5xl px-4">
				<div className="mb-8 md:mb-0 md:w-1/2 flex flex-col items-center">
					<div className="text-center md:text-left">
						<p className="text-white text-3xl font-bold mb-8">About Me</p>
						<p className="text-white text-lg">{aboutText}</p>
					</div>
					<Image
						src={profilePic}
						alt="Profile"
						className="mt-8 rounded-lg shadow-lg"
						width={250}
						height={300}
					/>
				</div>
				<div className="w-full md:w-1/2 grid grid-cols-1 gap-4">
					{skills.map((skill: Skill, index: number) => (
						<div key={index} className="w-full">
							<p className="text-white mb-1">{skill.name}</p>
							<motion.div
								initial={{ width: 0 }}
								animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
								transition={{ duration: 2, delay: index * 1 }}
								className="bg-gray-300 h-4 rounded overflow-hidden">
								<div className="bg-gradient-to-r from-blue-300 to-pink-500 h-4"></div>
							</motion.div>
						</div>
					))}
				</div>
			</div>
		</motion.div>
	);
};

export default About;
