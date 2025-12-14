import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import profilePic from "./profile.png";
import { BsLinkedin, BsGithub } from "react-icons/bs";

interface Skill {
	name: string;
	level: number;
}

const SKILLS: Skill[] = [
	{ name: "TypeScript", level: 85 },
	{ name: "React", level: 90 },
	{ name: "Node.js", level: 80 },
	{ name: "HTML/CSS", level: 95 },
	{ name: "Java", level: 70 },
	{ name: "French", level: 100 },
	{ name: "English", level: 90 },
	{ name: "Dutch", level: 90 },
];

const SOCIAL_LINKS = [
	{
		href: "https://www.linkedin.com/in/justine-dor-390437201/",
		Icon: BsLinkedin,
		label: "LinkedIn"
	},
	{
		href: "https://github.com/Jusss10",
		Icon: BsGithub,
		label: "GitHub"
	}
];

const About = () => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.3,
		rootMargin: "-10%"
	});

	return (
		<div
			className="bg-black relative h-screen pb-20 pt-26 flex flex-col items-center justify-center"
			ref={ref}>
			<div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8 w-full max-w-5xl px-4 mt-20">
				<div className="mb-8 md:mb-0 md:w-1/2 flex flex-col items-center">
					<div className="text-center md:text-left">
						<h2 className="text-white text-4xl arapey-regular-italic mb-10">
							About Me
						</h2>
						<p className="text-white text-lg arapey-regular">
							I am a passionate full-stack developer with expertise in TypeScript, React, Node.js, and more.
						</p>
					</div>
					<Image
						src={profilePic}
						alt="Profile"
						className="mt-8 rounded-lg shadow-lg"
						width={250}
						height={300}
						priority
					/>
				</div>
				<div className="w-full md:w-1/2 grid grid-cols-1 gap-4 arapey-regular text-lg">
					{SKILLS.map((skill, index) => (
						<div key={skill.name} className="w-full">
							<p className="text-white mb-1">{skill.name}</p>
							<motion.div
								initial={{ width: 0 }}
								animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
								transition={{ duration: 1.5, delay: index * 0.15 }}
								className="bg-gray-300 h-4 rounded overflow-hidden"
							>
								<div className="bg-gradient-to-r from-blue-300 to-pink-500 h-full" />
							</motion.div>
						</div>
					))}
				</div>
			</div>
			<div className="flex justify-center mt-20 space-x-8">
				{SOCIAL_LINKS.map(({ href, Icon, label }) => (
					<a
						key={label}
						href={href}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={label}
						className="text-white hover:text-blue-300 transition-colors duration-300"
					>
						<Icon className="text-5xl" />
					</a>
				))}
			</div>
		</div>
	);
};

export default About;
