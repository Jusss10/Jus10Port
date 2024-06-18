import ProjectCard from "./ProjectCard";

const ProjectList = () => {

	interface Project {
		title: string;
		description: string;
		image: string;
		details?: string; 
	}

	const projects: Project[] = [
		{
			title: "Hybrid Apps Portfolio",
			description: "Next.js Portfolio",
			image: "/images/project1.jpg",
			details:
				"Bewegende balkjes: https://blog.olivierlarose.com/tutorials/text-parallax",
		},
		{
			title: "Stage bij DXC",
			description: "Stage DXC",
			image: "/images.png",
			details: "Eerste Stage gedaan Bij dxc",
		},
	];


	return (
		<div className="flex flex-wrap justify-center">
			{projects.map((project, index) => (
				<ProjectCard key={index} project={project} />
			))}
		</div>
	);
};

export default ProjectList;
