import React from "react";
import ProjectsList from "./ProjectList";

const Projects = () => {
	return (
		<div className="bg-sky-200 pb-20 pt-20 relative">
			<p className="arapey-regular-italic text-5xl text-center bg-black rounded-full p-4">
				My Projects
			</p>
			<div className="relative z-10 h-full pt-10">
				<ProjectsList/>
			</div>
		</div>
	);
};

export default Projects;